import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  MessageSquare, 
  Link2, 
  Mail, 
  Smartphone, 
  Zap, 
  Brain, 
  ShieldCheck, 
  AlertCircle 
} from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "SMS & WhatsApp Analysis",
    description: "Detect fraudulent messages claiming to be from banks, government agencies, or delivery services.",
    color: "primary",
  },
  {
    icon: Link2,
    title: "Malicious URL Detection",
    description: "Identify phishing links and fake websites designed to steal your credentials and money.",
    color: "accent",
  },
  {
    icon: Mail,
    title: "Email Scam Detection",
    description: "Analyze suspicious emails for phishing attempts, fake offers, and social engineering attacks.",
    color: "primary",
  },
  {
    icon: Smartphone,
    title: "UPI Request Verification",
    description: "Verify UPI payment requests and identify collect request scams before you approve them.",
    color: "accent",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning models trained on thousands of Indian scam patterns.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get immediate threat assessment with detailed explanations of detected red flags.",
    color: "accent",
  },
  {
    icon: ShieldCheck,
    title: "Privacy Focused",
    description: "Your data is analyzed securely and never stored. Complete privacy guaranteed.",
    color: "primary",
  },
  {
    icon: AlertCircle,
    title: "Prevention Tips",
    description: "Learn how to protect yourself with personalized safety recommendations.",
    color: "accent",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive <span className="text-gradient">Scam Protection</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI analyzes multiple types of digital threats commonly targeting Indian users
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <CardHeader>
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110 ${
                    feature.color === "primary" 
                      ? "bg-primary/10 border border-primary/20" 
                      : "bg-accent/10 border border-accent/20"
                  }`}
                >
                  <feature.icon 
                    className={`h-6 w-6 ${
                      feature.color === "primary" ? "text-primary" : "text-accent"
                    }`} 
                  />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
