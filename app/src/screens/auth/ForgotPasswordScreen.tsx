import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { useState } from 'react'
import { supabase } from '../../config/supabase'

export function ForgotPasswordScreen() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
const [successMessage, setSuccessMessage] = useState('')

 const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email) {
      setEmailError('Zadej svůj e-mail.')
    } else if (!email.includes('@')) {
      setEmailError('Zadej platný e-mail.')
    } else {
  setEmailError('')

  const { error } = await supabase.auth.resetPasswordForEmail(email)

 if (error) {
    if (!error) {
  setSuccessMessage('Odkaz pro obnovení hesla jsme poslali na tvůj e-mail.')
}
  if (error.message.toLowerCase().includes('rate limit')) {
    setEmailError('Příliš mnoho pokusů. Počkej chvíli a zkus to znovu.')
  } else {
    setEmailError('Odkaz se nepodařilo odeslat. Zkus to prosím znovu.')
  }
}
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
          {successMessage && (
  <p className="auth-success">
    {successMessage}
  </p>
)}
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