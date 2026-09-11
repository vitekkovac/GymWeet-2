import './LoginScreen.css'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'

export function LoginScreen() {
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

        <form className="auth-form">
          <Input
            label="E-mail"
            type="email"
            placeholder="tvuj@email.cz"
            autoComplete="email"
          />

          <Input
            label="Heslo"
            type="password"
            placeholder="Zadej heslo"
            autoComplete="current-password"
          />

          <div className="auth-options">
            <label className="auth-remember">
              <input type="checkbox" />
              <span>Zapamatovat si mě</span>
            </label>

            <button type="button" className="auth-link">
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
          <button type="button" className="auth-link">
            Registrovat se
          </button>
        </p>
      </section>
    </main>
  )
}