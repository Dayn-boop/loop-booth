import { Mail, Shield, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-balance text-5xl font-bold tracking-tight lg:text-7xl">
              Secure Email{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-pretty text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Professional email hosting with enterprise-grade security, lightning-fast delivery, and the reliability
              your business demands.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/services"
                className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-primary/25"
              >
                Get Started
              </a>
              <a
                href="/contact"
                className="rounded-lg border border-border bg-card px-8 py-4 text-base font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <Mail className="size-8" />,
              title: "Modern Typography",
              desc: "Beautiful, readable email templates with perfect typography scaling and accessibility built-in.",
            },
            {
              icon: <Shield className="size-8" />,
              title: "Thoughtful Structure",
              desc: "Organized email architecture with intelligent routing, filtering, and categorization systems.",
            },
            {
              icon: <Zap className="size-8" />,
              title: "Light, Professional Colors",
              desc: "Clean interface design with carefully chosen colors that enhance readability and user experience.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:bg-accent/5 transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { metric: "99.9%", label: "Uptime guaranteed" },
            { metric: "50ms", label: "Average delivery time" },
            { metric: "256-bit", label: "Encryption standard" },
            { metric: "24/7", label: "Expert support" },
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">{stat.metric}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
