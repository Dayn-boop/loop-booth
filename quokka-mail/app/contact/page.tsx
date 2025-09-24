"use client"

import type React from "react"
import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-background">
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to secure your business communications? Get in touch with our team and we'll help you get started.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 pb-20">
        <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                placeholder="Your full name"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                placeholder="you@company.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
                placeholder="Tell us about your email hosting needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-primary/25"
            >
              Send Message
            </button>

            {submitted && (
              <div className="rounded-lg bg-accent/10 border border-accent/20 p-4">
                <p className="text-center text-accent-foreground font-medium">
                  Thanks! Your message has been sent. We'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}
