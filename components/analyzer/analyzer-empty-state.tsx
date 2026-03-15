import { ShieldQuestion, MessageSquare, Link2, Mail, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const inputTypes = [
  { icon: MessageSquare, label: "SMS & WhatsApp Messages", description: "Suspicious texts claiming urgency" },
  { icon: Link2, label: "URLs & Links", description: "Potentially fake websites" },
  { icon: Mail, label: "Emails", description: "Phishing and scam emails" },
  { icon: Smartphone, label: "UPI Requests", description: "Collect request scams" },
]

export function AnalyzerEmptyState() {
  return (
    <Card className="bg-card/30 border-border/30 border-dashed">
      <CardContent className="py-16">
        <div className="flex flex-col items-center text-center max-w-md mx-auto">
          <div className="relative mb-8">
            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <ShieldQuestion className="h-16 w-16 text-primary" />
            </div>
            <div className="absolute inset-0 blur-xl bg-primary/20 -z-10 rounded-full" />
          </div>
          
          <h3 className="text-2xl font-semibold mb-3">
            Ready to Analyze
          </h3>
          
          <p className="text-muted-foreground mb-8">
            Paste any suspicious content above and click Analyze to check if it is a scam. 
            Our AI will detect threats and explain the risks.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            {inputTypes.map((type, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-4 rounded-xl bg-secondary/30 border border-border/30"
              >
                <type.icon className="h-6 w-6 text-muted-foreground mb-2" />
                <span className="text-xs font-medium text-center">{type.label}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
