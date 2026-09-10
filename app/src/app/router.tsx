import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from './shell/AppShell'

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      {
        path: '/',
        element: <div>GYMWEET</div>,
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
    element: <div>Auth</div>,
  },
])