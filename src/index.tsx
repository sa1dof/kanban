import { BrowserRouter } from 'react-router-dom'
import { Notifications } from '@mantine/notifications'
import ReactDOM from 'react-dom/client'
import Routes from 'routes/routes'

import * as Containers from 'containers'

import './assets/styles/main.scss'
import './assets/styles/fonts.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <Containers.Auth>
      <Routes />
      <Notifications position="top-right" />
    </Containers.Auth>
  </BrowserRouter>
)
