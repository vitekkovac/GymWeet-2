import { useState } from 'react'
import './LoginScreen.css'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'

export function LoginScreen() {
  const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const email = String(formData.get('email') ?? '').trim()
  const password = String(formData.get('password') ?? '')

  setEmailError('')
  setPasswordError('')

  if (!email) {
    setEmailError('Zadej svůj e-mail.')
  } else if (!email.includes('@')) {
    setEmailError('Zadej platný e-mail.')
  }

  if (!password) {
    setPasswordError('Zadej své heslo.')
  }
}
  return (
    <main className="auth-screen">
      <section className="auth-card">
        <header className="auth-header">
          <p className="auth-brand">GYMWEET</p>
          <h1>Přihlas se</h1>
          <p className="auth-subtitle">
            Pokračuj tam, kde jsi skončil.
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
            type={showPassword ? 'text' : 'password'}
            placeholder="Zadej heslo"
            autoComplete="current-password"
            error={passwordError}
            trailingContent={
  <button
    type="button"
    className="auth-link"
    onClick={() => setShowPassword((value) => !value)}
  >
    {showPassword ? 'Skrýt' : 'Zobrazit'}
  </button>
}
          />

          <div className="auth-options">
            <label className="auth-remember">
              <input type="checkbox" />
              <span>Zapamatovat si mě</span>
            </label>

           <button
  type="button"
  className="auth-link"
  onClick={() => window.location.assign('/forgot-password')}
>
              Zapomenuté heslo
            </button>
          </div>

          <Button type="submit">
            Přihlásit se
          </Button>
        </form>

        <div className="auth-divider">
          <span>nebo</span>
        </div>

        <div className="auth-social">
          <Button type="button" variant="secondary">
            Pokračovat přes Apple
          </Button>

          <Button type="button" variant="secondary">
            Pokračovat přes Google
          </Button>

          <Button type="button" variant="secondary">
            Pokračovat přes Facebook
          </Button>
        </div>

        <p className="auth-register">
          Ještě nemáš účet?{' '}
          <button
  type="button"
  className="auth-link"
  onClick={() => window.location.assign('/register')}
>
            Registrovat se
          </button>
        </p>
      </section>
    </main>
  )
}