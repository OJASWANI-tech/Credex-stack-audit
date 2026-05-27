import './globals.css'
import React from 'react'

export const metadata = {
  title: 'StackAudit — Credex',
  description: 'AI Spend Audit — identify savings and wholesale opportunities.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[color:var(--bg)]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <header className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-semibold">StackAudit<span className="text-sm ml-2 muted">by Credex</span></h1>
              <p className="text-sm muted">AI spend audit · tactical savings · wholesale consultations</p>
            </div>
            <nav className="flex items-center gap-4">
              <span className="muted text-sm">Dark</span>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="mt-12 muted text-sm text-center">© Credex — StackAudit</footer>
        </div>
      </body>
    </html>
  )
}
