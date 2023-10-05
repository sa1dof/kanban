import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Anchor, Box, Button, ColorScheme, Divider, Group, Paper, PasswordInput, Stack, Text, TextInput } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { useLocalStorage } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import { AuthErrorCodes } from 'firebase/auth'
import { FcGoogle } from 'react-icons/fc'
import * as yup from 'yup'

import { Service } from 'modules/auth'
import { useAuth } from 'modules/auth/context'
import { signInWithGoogle } from 'modules/auth/service'
import { IForm } from 'modules/auth/types'

const schema = yup.object({
  name: yup.string().min(5).label('Name').required(),
  email: yup.string().email().label('Email').required(),
  password: yup.string().min(6).label('Password').required()
})

const Register = () => {
  const { methods } = useAuth()
  const [loading, setLoading] = React.useState(false)
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({ key: 'color-scheme' })
  const navigate = useNavigate()
  const form = useForm<IForm.Register>({
    initialValues: { name: '', email: '', password: '' },
    validate: yupResolver(schema)
  })

  const onSubmit = async ({ name, password, email }: IForm.Register) => {
    try {
      setLoading(true)
      const { user } = await Service.register({ email, password })

      await Service.updateProfile(user, { name })

      methods.update({ name, email })
    } catch (err: any) {
      if (err?.code === AuthErrorCodes.EMAIL_EXISTS) {
        notifications.show({ message: `this email ${email} already exist`, color: 'red' })
      } else notifications.show({ message: err?.message, color: 'red' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      sx={{ alignItems: 'center', justifyContent: 'center' }}
      bg={colorScheme === 'dark' ? '#2b2c37' : '#FFFFFF'}
    >
      <Paper radius="md" p={40} withBorder>
        <Text size="lg" weight={500} sx={{ textAlign: 'center' }}>
          Welcome to kanban
        </Text>

        <Group grow mb="md" mt="md">
          <Button leftIcon={<FcGoogle />} radius="xl" variant="default" color="gray" onClick={signInWithGoogle} children="Sign in with Google" />
        </Group>
        <Divider label="Or continue with email" labelPosition="center" my="lg" />
        <form onSubmit={form.onSubmit(onSubmit)}>
          <Stack>
            <TextInput label="Name" placeholder="Your name" radius="md" {...form.getInputProps('name')} />
            <TextInput label="Email" placeholder="Your email address" radius="md" {...form.getInputProps('email')} />
            <PasswordInput label="Password" placeholder="Your password" radius="md" {...form.getInputProps('password')} />
          </Stack>
          <Group position="apart" mt="xl">
            <Anchor component="button" type="button" color="dimmed" onClick={() => navigate('/auth/login')} size="xs">
              Already have an account? Login
            </Anchor>
            <Button loading={loading} type="submit" radius="xl">
              Register
            </Button>
          </Group>
        </form>
      </Paper>
    </Box>
  )
}

export default Register
