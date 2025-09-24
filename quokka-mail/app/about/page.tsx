export default function AboutPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">About QuokkaMail</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building the future of secure email hosting with a focus on simplicity, reliability, and
            enterprise-grade security.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 space-y-24">
        {/* Mission section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              QuokkaMail was founded with a simple belief: email should be secure, reliable, and effortless. We're
              committed to providing enterprise-grade email solutions that scale with your business while maintaining
              the highest standards of privacy and security.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of security experts and email specialists work around the clock to ensure your communications are
              protected and delivered instantly, anywhere in the world.
            </p>
          </div>
          <div className="lg:order-first">
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 border border-border">
              <img
                src="/professional-team-meeting.jpg"
                alt="Professional team collaboration meeting"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold">Security First</h3>
                <p className="text-muted-foreground mt-2">
                  Every email is encrypted with military-grade security protocols.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold">Reliability</h3>
                <p className="text-muted-foreground mt-2">
                  99.9% uptime guarantee with redundant infrastructure worldwide.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold">Simplicity</h3>
                <p className="text-muted-foreground mt-2">
                  Powerful features wrapped in an intuitive, easy-to-use interface.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 p-8 border border-border">
              <img
                src="/modern-office-workspace.jpg"
                alt="Modern office workspace with laptops and documents"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Background section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2020, QuokkaMail emerged from the need for truly secure business communication. Our founders,
              former cybersecurity experts from leading tech companies, recognized that businesses needed more than just
              email—they needed peace of mind.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we serve thousands of businesses worldwide, from startups to Fortune 500 companies, all trusting us
              with their most critical communications. Our commitment to innovation and security continues to drive
              everything we do.
            </p>
          </div>
          <div className="lg:order-first">
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 border border-border">
              <img
                src="/business-handshake-partnership.jpg"
                alt="Business handshake representing partnership and growth"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
