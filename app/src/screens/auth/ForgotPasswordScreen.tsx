import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { useState } from 'react'

export function ForgotPasswordScreen() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email) {
      setEmailError('Zadej svůj e-mail.')
    } else if (!email.includes('@')) {
      setEmailError('Zadej platný e-mail.')
    } else {
      setEmailError('')
      // Submit the form
    }
  }

  return (
    <main className="auth-screen">
      <section className="auth-card">
        <header className="auth-header">
          <p className="auth-brand">GYMWEET</p>
          <h1>Zapomenuté heslo</h1>
          <p className="auth-subtitle">
            Zadej svůj e-mail a pošleme ti odkaz pro obnovení hesla.
          </p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <Input
            label="E-mail"
            name="email"
            type="email"
            placeholder="tvuj@email.cz"
            autoComplete="email"
            value={email}
onChange={(event) => setEmail(event.target.value)}
error={emailError}
          />

          <Button type="submit">
            Odeslat odkaz
          </Button>
        </form>

        <p className="auth-register">
          Vzpomněl sis?{' '}
          <button
            type="button"
            className="auth-link"
            onClick={() => window.location.assign('/auth')}
          >
            Zpět na přihlášení
          </button>
        </p>
      </section>
    </main>
  )
}