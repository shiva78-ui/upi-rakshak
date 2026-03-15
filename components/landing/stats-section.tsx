import { TrendingUp, Users, ShieldAlert, CheckCircle } from "lucide-react"

const stats = [
  {
    icon: ShieldAlert,
    value: "10,000+",
    label: "Scams Detected",
    description: "Threats identified and blocked",
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Users Protected",
    description: "Indians safeguarded from fraud",
  },
  {
    icon: TrendingUp,
    value: "99.2%",
    label: "Accuracy Rate",
    description: "Precise threat detection",
  },
  {
    icon: CheckCircle,
    value: "<2s",
    label: "Analysis Time",
    description: "Lightning fast results",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-base font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
