import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Anchor, Box, Button, ColorScheme, Divider, Group, Paper, PasswordInput, Stack, Text, TextInput } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { useLocalStorage } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import { FcGoogle } from 'react-icons/fc'
import * as yup from 'yup'

import { Service } from 'modules/auth'
import { signInWithGoogle } from 'modules/auth/service'
import { IForm } from 'modules/auth/types'

const schema = yup.object({
  email: yup.string().email().label('Email').required(),
  password: yup.string().min(6).label('Password').required()
})

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = React.useState(false)
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({ key: 'color-scheme' })
  const form = useForm<IForm.Login>({
    initialValues: { email: '', password: '' },
    validate: yupResolver(schema)
  })

  const onSubmit = async (values: IForm.Login) => {
    try {
      setLoading(true)
      await Service.login(values)
    } catch (err: any) {
      notifications.show({ message: err?.message, color: 'red' })
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
            <TextInput label="Email" placeholder="Your email address" radius="md" {...form.getInputProps('email')} />
            <PasswordInput label="Password" placeholder="Your password" radius="md" {...form.getInputProps('password')} />
            <Anchor align="left" onClick={() => navigate('/auth/forgot-password')}>
              Forgot Password
            </Anchor>
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor component="button" type="button" color="dimmed" onClick={() => navigate('/auth/register')} size="xs">
              Don't have an account? Register
            </Anchor>
            <Button loading={loading} type="submit" radius="xl">
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </Box>
  )
}

export default Login
