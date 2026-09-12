import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { LoginScreen } from '../screens/auth/LoginScreen'
import { AppShell } from './shell/AppShell'
import { RegisterScreen } from '../screens/auth/RegisterScreen'
import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen'

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/today',
        element: <div>Today</div>,
      },
      {
        path: '/workout',
        element: <div>Workout</div>,
      },
      {
        path: '/progress',
        element: <div>Progress</div>,
      },
      {
        path: '/profile',
        element: <div>Profile</div>,
      },
    ],
  },
  {
    path: '/onboarding',
    element: <div>Onboarding</div>,
  },
  {
  path: '/auth',
  element: <LoginScreen />,
},
{
  path: '/register',
  element: <RegisterScreen />,
},
{
  path: '/forgot-password',
  element: <ForgotPasswordScreen />,
}
])