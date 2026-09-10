import './AppShell.css'
import { Outlet } from 'react-router-dom'

export function AppShell() {
  return (
    <div className="gw-app-shell">
     <main className="gw-app-shell__main">
        <Outlet />
      </main>
    </div>
  )
}