
import { Navigate, Outlet, Route, Routes as Switch } from 'react-router-dom'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'

import { useAuth } from 'modules/auth/context'

import { Action, Auth, Home } from 'pages'

const Routes = () => {
  const { isAuthenticated, user } = useAuth()


  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true
  })

  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withNormalizeCSS theme={{ colorScheme }}>
        <Switch>
          <Route path="" element={isAuthenticated ? <Outlet /> : <Navigate to="/auth" />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>

          <Route path="auth" element={isAuthenticated ? <Navigate to="/" /> : <Outlet />}>
            <Route path="login" element={<Auth.Login />} />
            <Route path="register" element={<Auth.Register />} />
            <Route path="forgot-password" element={<Auth.ForgotPassword />} />
            <Route path="reset-password" element={<Auth.ResetPassword />} />
            <Route path="*" index element={<Navigate to="/auth/login" />} />
          </Route>

          <Route path="action" element={<Action />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Switch>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default Routes
