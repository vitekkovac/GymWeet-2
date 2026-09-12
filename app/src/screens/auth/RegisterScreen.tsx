import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { useState } from 'react'

export function RegisterScreen() {
    const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')
const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const email = String(formData.get('email') ?? '').trim()
  const password = String(formData.get('password') ?? '')
  const confirmPassword = String(formData.get('confirmPassword') ?? '')

  setEmailError('')
  setPasswordError('')
  setConfirmPasswordError('')

  if (!email) {
    setEmailError('Zadej svůj e-mail.')
  } else if (!email.includes('@')) {
    setEmailError('Zadej platný e-mail.')
  }

  if (!password) {
    setPasswordError('Zadej heslo.')
  } else if (password.length < 8) {
    setPasswordError('Heslo musí mít alespoň 8 znaků.')
  }

  if (!confirmPassword) {
    setConfirmPasswordError('Zopakuj heslo.')
  } else if (password !== confirmPassword) {
    setConfirmPasswordError('Hesla se neshodují.')
  }
}
return (
    <main className="auth-screen">
      <section className="auth-card">
        <header className="auth-header">
          <p className="auth-brand">GYMWEET</p>
          <h1>Vytvoř si účet</h1>
          <p className="auth-subtitle">
            Začni jednoduše. Detaily doladíme postupně.
          </p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <Input
            label="E-mail"
            name="email"
            type="email"
            placeholder="tvuj@email.cz"
            autoComplete="email"
error={emailError}
          />

          <Input
            label="Heslo"
            name="password"
            type="password"
            placeholder="Vytvoř heslo"
            autoComplete="new-password"
error={passwordError}
          />

          <Input
            label="Potvrď heslo"
            name="confirmPassword"
            type="password"
            placeholder="Zopakuj heslo"
            autoComplete="new-password"
error={confirmPasswordError}
          />

          <Button type="submit">
            Pokračovat
          </Button>
        </form>

        <p className="auth-register">
          Už máš účet?{' '}
          <button
  type="button"
  className="auth-link"
  onClick={() => window.location.assign('/auth')}
>
            Přihlásit se
          </button>
        </p>
      </section>
    </main>
  )
}