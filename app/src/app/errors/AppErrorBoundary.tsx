import { Component, type ErrorInfo, type ReactNode } from 'react'

type AppErrorBoundaryProps = {
  children: ReactNode
}

type AppErrorBoundaryState = {
  hasError: boolean
}

export class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('GYMWEET application error', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main role="alert">
          <h1>Něco se pokazilo</h1>
          <p>Aplikaci se nepodařilo správně načíst.</p>
        </main>
      )
    }

    return this.props.children
  }
}