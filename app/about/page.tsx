import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Target, 
  Users, 
  Zap, 
  Heart,
  Github,
  Twitter,
  Mail,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We prioritize the safety and privacy of our users above all else. Your data is never stored or shared."
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "We believe everyone deserves protection from digital fraud, regardless of their technical knowledge or financial status."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously improve our AI models to stay ahead of evolving scam tactics and protect users from new threats."
  },
  {
    icon: Heart,
    title: "Community",
    description: "We are driven by our commitment to the Indian community and the desire to create a safer digital ecosystem."
  }
]

const team = [
  {
    name: "Development Team",
    role: "AI & Engineering",
    description: "Building cutting-edge scam detection technology"
  },
  {
    name: "Security Research",
    role: "Threat Intelligence",
    description: "Analyzing emerging scam patterns across India"
  },
  {
    name: "User Experience",
    role: "Design & Accessibility",
    description: "Making security tools accessible to everyone"
  }
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8">
                <Shield className="h-12 w-12 text-primary" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">UPI Rakshak</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-pretty">
                UPI Rakshak is an AI-powered platform dedicated to protecting Indian users from 
                phishing, UPI scams, and digital fraud. Our mission is to make cyber security 
                accessible to everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Our Mission</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Making India <span className="text-gradient">Scam-Free</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  India has witnessed a surge in digital payments, with UPI processing billions 
                  of transactions monthly. Unfortunately, this growth has also attracted sophisticated 
                  scammers targeting unsuspecting users.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  UPI Rakshak was created to combat this threat. Using advanced AI trained on 
                  real scam patterns specific to India, we help users identify and avoid fraud 
                  before it is too late. Our goal is to empower every Indian with the tools to 
                  stay safe in the digital world.
                </p>
                <Button asChild className="glow-cyan-sm">
                  <Link href="/analyze">
                    Try Our Analyzer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card/50 border-border/50 p-6 text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Scams Detected</div>
                </Card>
                <Card className="bg-card/50 border-border/50 p-6 text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Users Protected</div>
                </Card>
                <Card className="bg-card/50 border-border/50 p-6 text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">Detection Rate</div>
                </Card>
                <Card className="bg-card/50 border-border/50 p-6 text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">Free</div>
                  <div className="text-sm text-muted-foreground">Forever</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-gradient">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-card/50 border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-gradient">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                A dedicated team working to protect you from digital fraud
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="bg-card/50 border-border/50">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions, feedback, or want to collaborate? We would love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button variant="outline" size="lg" className="border-border/50" asChild>
                  <a href="mailto:contact@upirakshak.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-border/50" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-2 h-5 w-5" />
                    Twitter
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-border/50" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                For urgent scam reports, please contact the Cyber Crime Helpline: 1930
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
