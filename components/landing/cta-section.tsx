import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border/50 p-8 md:p-16">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10" />
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Stay One Step Ahead of <span className="text-gradient">Scammers</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 text-pretty">
              Do not let fraudsters trick you. Use UPI Rakshak to verify any suspicious message 
              before it is too late. Your financial safety is our priority.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 glow-cyan">
                <Link href="/analyze">
                  Start Free Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-lg">
                <Link href="/awareness">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
