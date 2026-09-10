import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>GYMWEET</div>,
  },
  {
    path: '/onboarding',
    element: <div>Onboarding</div>,
  },
  {
    path: '/auth',
    element: <div>Auth</div>,
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
])