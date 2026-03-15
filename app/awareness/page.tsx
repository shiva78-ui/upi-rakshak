import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScamTypesSection } from "@/components/awareness/scam-types-section"
import { SafetyTipsSection } from "@/components/awareness/safety-tips-section"
import { FAQSection } from "@/components/awareness/faq-section"
import { Button } from "@/components/ui/button"
import { Shield, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AwarenessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Cyber Security Awareness</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Safe from <span className="text-gradient">Digital Fraud</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-pretty">
                Learn about common scam tactics targeting Indian users and discover how to protect yourself 
                and your loved ones from phishing, UPI fraud, and other cyber threats.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button asChild size="lg" className="glow-cyan-sm">
                  <Link href="/analyze">
                    <Shield className="mr-2 h-5 w-5" />
                    Analyze a Message
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border/50">
                  <a href="#scams">
                    Browse Scam Types
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Sections */}
        <ScamTypesSection />
        <SafetyTipsSection />
        <FAQSection />

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Received a Suspicious Message?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Do not take chances. Use our AI-powered analyzer to check if it is a scam before you respond.
              </p>
              <Button asChild size="lg" className="glow-cyan">
                <Link href="/analyze">
                  <Shield className="mr-2 h-5 w-5" />
                  Analyze Now - It is Free
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
