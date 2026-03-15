import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Scan, AlertTriangle, Lock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">AI-Powered Protection</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gradient">UPI Rakshak</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            AI-powered phishing and UPI scam detection for Indian users
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mb-10">
            Paste suspicious SMS, WhatsApp messages, emails, or links to instantly detect scams. 
            Our advanced AI analyzes patterns and flags potential threats before they can harm you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Button asChild size="lg" className="text-lg px-8 py-6 glow-cyan">
              <Link href="/analyze">
                <Scan className="mr-2 h-5 w-5" />
                Analyze Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-border/50">
              <Link href="/awareness">
                Learn About Scams
              </Link>
            </Button>
          </div>

          {/* Illustration / Icon Area */}
          <div className="relative w-full max-w-3xl mx-auto">
            <div className="relative bg-card/50 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              
              <div className="grid grid-cols-3 gap-6 md:gap-8">
                <div className="flex flex-col items-center gap-3 p-4">
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-center">Real-time Protection</span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4">
                  <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                    <AlertTriangle className="h-8 w-8 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-center">Threat Detection</span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4">
                  <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                    <Lock className="h-8 w-8 text-success" />
                  </div>
                  <span className="text-sm font-medium text-center">Privacy First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
