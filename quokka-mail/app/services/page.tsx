import { Palette, Zap, Shield } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            QuokkaMail offers secure email hosting solutions designed for modern businesses that demand reliability,
            speed, and security.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <Palette className="size-8" />,
              title: "Minimalist Design",
              desc: "Clean, intuitive email interface that focuses on what matters most—your messages. No clutter, no distractions, just pure communication efficiency.",
            },
            {
              icon: <Zap className="size-8" />,
              title: "Fast Email Solutions",
              desc: "Lightning-fast email delivery with average send times under 50ms. Our global infrastructure ensures your messages reach their destination instantly.",
            },
            {
              icon: <Shield className="size-8" />,
              title: "Encrypted Communication",
              desc: "End-to-end encryption with 256-bit security standards. Your conversations stay private with enterprise-grade protection and compliance certifications.",
            },
          ].map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl border border-border bg-card p-8 hover:bg-accent/5 transition-all duration-300">
                <div className="mb-6 inline-flex items-center justify-center rounded-lg bg-primary/10 p-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose QuokkaMail?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've built our email platform from the ground up with security, performance, and user experience as our
              core principles.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "99.9% uptime SLA guarantee",
              "24/7 expert technical support",
              "Advanced spam and malware protection",
              "Multi-device synchronization",
              "Custom domain support",
              "GDPR and SOC 2 compliant",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
