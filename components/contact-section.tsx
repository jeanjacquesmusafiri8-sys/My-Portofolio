"use client"

import { Phone, MapPin, GraduationCap, Send, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { profile } from "@/lib/portfolio-data"

const coords = [
  { icon: Phone, label: "Téléphone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Ville", value: profile.location },
  { icon: GraduationCap, label: "Université", value: profile.institution },
]

export function ContactSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-sm text-primary">04.</span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Contact</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Travaillons ensemble</h3>
            <p className="mt-2 text-pretty text-muted-foreground">
              Un projet, une question ou une opportunité ? Mes coordonnées sont juste ici.
            </p>
            <ul className="mt-6 space-y-3">
              {coords.map((c) => (
                <li key={c.label} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                  <c.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="font-medium transition-colors hover:text-primary">
                        {c.value}
                      </a>
                    ) : (
                      <p className="font-medium">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {sent ? (
            <div className="flex flex-col items-center justify-center rounded-lg border border-primary/40 bg-card p-8 text-center">
              <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">Message envoyé !</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Merci, je vous répondrai dès que possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Nom :
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email :
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Message :
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Envoyer
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
