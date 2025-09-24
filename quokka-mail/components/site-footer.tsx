"use client"

import type React from "react"
import { useState } from "react"

export default function SiteFooter() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex items-start gap-4">
            <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              Q
            </span>
            <div>
              <p className="text-lg font-bold">QuokkaMail</p>
              <p className="text-muted-foreground mt-1">Secure email hosting solutions for modern businesses.</p>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4">
            <a
              href="mailto:contact@thequokkamail.com"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              contact@thequokkamail.com
            </a>
            <form onSubmit={onSubmit} className="flex w-full lg:w-auto items-center gap-3">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 lg:w-72 rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
            {submitted && <p className="text-sm text-accent-foreground">Thanks! You're subscribed to our updates.</p>}
          </div>
        </div>
      </div>
    </footer>
  )
}
