import { Card, CardContent } from "@/components/ui/card"
import { Scan } from "lucide-react"

export function AnalyzerLoading() {
  return (
    <Card className="bg-card/50 border-border/50">
      <CardContent className="py-16">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 animate-pulse">
              <Scan className="h-16 w-16 text-primary animate-pulse" />
            </div>
            <div className="absolute inset-0 blur-xl bg-primary/30 -z-10 rounded-full animate-pulse" />
            
            {/* Scanning Animation Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-24 h-24 rounded-full border-2 border-primary/30 animate-ping" />
              <div className="absolute w-32 h-32 rounded-full border border-primary/20 animate-ping animation-delay-150" />
              <div className="absolute w-40 h-40 rounded-full border border-primary/10 animate-ping animation-delay-300" />
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold mb-3">
            Analyzing Content...
          </h3>
          
          <p className="text-muted-foreground mb-6 max-w-sm">
            Our AI is scanning for phishing patterns, suspicious URLs, and known scam signatures.
          </p>

          {/* Progress Steps */}
          <div className="space-y-3 text-left w-full max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
              </div>
              <span className="text-sm text-foreground">Pattern Recognition</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/50 flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 rounded-full bg-primary-foreground/50" />
              </div>
              <span className="text-sm text-muted-foreground">URL Analysis</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              </div>
              <span className="text-sm text-muted-foreground/50">Generating Report</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
