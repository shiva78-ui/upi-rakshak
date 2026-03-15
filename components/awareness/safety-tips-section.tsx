import { Card, CardContent } from "@/components/ui/card"
import { 
  ShieldCheck, 
  KeyRound, 
  QrCode, 
  Phone, 
  Link2, 
  Building,
  AlertTriangle,
  Eye
} from "lucide-react"

const safetyTips = [
  {
    icon: KeyRound,
    title: "Never Share OTP",
    description: "OTP is for your use only. No bank employee, customer care, or official will ever ask for your OTP. Anyone asking for OTP is a scammer.",
    color: "primary"
  },
  {
    icon: QrCode,
    title: "Never Scan QR to Receive Money",
    description: "You only need to scan QR codes to PAY money. To receive money, share your UPI ID or number instead. Scanning QR for receiving is a scam.",
    color: "accent"
  },
  {
    icon: Building,
    title: "Verify KYC Only on Official Apps",
    description: "Update your KYC only through official bank apps or by visiting the branch. Never click on KYC links received via SMS or email.",
    color: "primary"
  },
  {
    icon: Phone,
    title: "Ignore Unknown Collect Requests",
    description: "Decline any UPI collect request you did not initiate. You never need to approve a collect request to receive money or refunds.",
    color: "accent"
  },
  {
    icon: Link2,
    title: "Do Not Click Suspicious Links",
    description: "Type your bank's URL directly in the browser. Do not click on links in messages claiming urgent action is needed.",
    color: "primary"
  },
  {
    icon: Eye,
    title: "Verify Before You Trust",
    description: "Always verify callers claiming to be from banks, government, or companies by calling their official customer care numbers.",
    color: "accent"
  },
  {
    icon: AlertTriangle,
    title: "Do Not Act in Urgency",
    description: "Scammers create panic with urgent deadlines. Take time to verify. Legitimate organizations will not pressure you for immediate action.",
    color: "primary"
  },
  {
    icon: ShieldCheck,
    title: "Report Suspicious Activity",
    description: "Report scam attempts to cybercrime.gov.in or call 1930. Reporting helps protect others and may help recover lost money.",
    color: "accent"
  }
]

export function SafetyTipsSection() {
  return (
    <section id="tips" className="py-16 md:py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Safety <span className="text-gradient">Tips</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Follow these essential guidelines to protect yourself from digital fraud
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyTips.map((tip, index) => (
            <Card 
              key={index}
              className="bg-card/50 border-border/50 hover:border-primary/30 transition-all group"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div 
                    className={`p-4 rounded-xl mb-4 transition-transform group-hover:scale-110 ${
                      tip.color === "primary" 
                        ? "bg-primary/10 border border-primary/20" 
                        : "bg-accent/10 border border-accent/20"
                    }`}
                  >
                    <tip.icon 
                      className={`h-8 w-8 ${
                        tip.color === "primary" ? "text-primary" : "text-accent"
                      }`} 
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
