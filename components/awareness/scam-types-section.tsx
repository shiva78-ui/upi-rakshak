import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  CreditCard, 
  Smartphone, 
  Mail, 
  Award, 
  Briefcase, 
  Building,
  QrCode,
  PhoneCall
} from "lucide-react"

const scamTypes = [
  {
    icon: Smartphone,
    title: "UPI Collect Request Scams",
    description: "Scammers send collect requests disguised as refunds. Remember: You never need to approve a collect request to RECEIVE money.",
    examples: ["Fake refund requests", "Payment to receive money", "QR scans for receiving"],
    severity: "high"
  },
  {
    icon: CreditCard,
    title: "KYC Update Phishing",
    description: "Fake messages claiming your bank account will be blocked unless you update KYC through a link. Banks never send KYC links via SMS.",
    examples: ["Account blocked alerts", "KYC expiry warnings", "PAN link requirements"],
    severity: "high"
  },
  {
    icon: Award,
    title: "Lottery & Prize Scams",
    description: "Messages claiming you have won a lottery or prize, asking for processing fees or personal details to claim the prize.",
    examples: ["Lucky draw winnings", "Car or cash prizes", "International lottery"],
    severity: "high"
  },
  {
    icon: Briefcase,
    title: "Job Offer Scams",
    description: "Fake job offers promising high salaries with no experience, asking for registration fees or personal information.",
    examples: ["Work from home jobs", "Data entry positions", "Part-time high income"],
    severity: "medium"
  },
  {
    icon: Building,
    title: "Government Impersonation",
    description: "Scammers posing as officials from RBI, Income Tax, or Police, threatening legal action unless payment is made.",
    examples: ["Tax due notices", "Legal case threats", "Aadhaar deactivation"],
    severity: "high"
  },
  {
    icon: Mail,
    title: "Email Phishing",
    description: "Emails from fake banks, e-commerce sites, or services asking you to verify your account or payment details.",
    examples: ["Account verification", "Payment failed alerts", "Password reset requests"],
    severity: "medium"
  },
  {
    icon: QrCode,
    title: "QR Code Scams",
    description: "Scammers ask you to scan a QR code to receive money, but scanning actually initiates a payment FROM your account.",
    examples: ["QR for refund", "Scan to receive cash", "OLX/marketplace scams"],
    severity: "high"
  },
  {
    icon: PhoneCall,
    title: "Vishing (Voice Phishing)",
    description: "Phone calls from fake customer care claiming issues with your account, asking for OTPs or card details.",
    examples: ["Bank customer care", "Card blocked calls", "KYC verification calls"],
    severity: "high"
  }
]

const severityColors = {
  high: "bg-danger/10 text-danger border-danger/30",
  medium: "bg-warning/10 text-warning border-warning/30",
  low: "bg-muted text-muted-foreground border-border"
}

export function ScamTypesSection() {
  return (
    <section id="scams" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common <span className="text-gradient">Scam Types</span> in India
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn to identify these common fraud patterns targeting Indian users
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scamTypes.map((scam, index) => (
            <Card 
              key={index}
              className="bg-card/50 border-border/50 hover:border-primary/30 transition-all"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <scam.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{scam.title}</CardTitle>
                      <Badge 
                        variant="outline" 
                        className={`mt-1 capitalize ${severityColors[scam.severity]}`}
                      >
                        {scam.severity} risk
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-foreground/80">
                  {scam.description}
                </CardDescription>
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Examples:
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {scam.examples.map((example, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
