import { useNavigate } from 'react-router-dom'
import {  Flex } from '@mantine/core'

import { useAuth } from 'modules/auth/context'

import { Navbar } from 'components'

import Hero from './hero'

const Home = () => {
  const navigate = useNavigate()
  const { user } = useAuth()


  return (
    <Flex direction="column" h="100vh">
      <Navbar />
      <Hero/>
    </Flex>
  )
}

export default Home
