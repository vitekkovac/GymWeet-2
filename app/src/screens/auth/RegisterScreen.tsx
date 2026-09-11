import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'

export function RegisterScreen() {
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

        <form className="auth-form">
          <Input
            label="E-mail"
            name="email"
            type="email"
            placeholder="tvuj@email.cz"
            autoComplete="email"
          />

          <Input
            label="Heslo"
            name="password"
            type="password"
            placeholder="Vytvoř heslo"
            autoComplete="new-password"
          />

          <Input
            label="Potvrď heslo"
            name="confirmPassword"
            type="password"
            placeholder="Zopakuj heslo"
            autoComplete="new-password"
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