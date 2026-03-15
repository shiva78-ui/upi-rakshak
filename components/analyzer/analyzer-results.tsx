"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  ShieldCheck, 
  ShieldAlert, 
  ShieldX, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Lightbulb,
  Flag,
  ArrowRight
} from "lucide-react"
import { AnalysisResult, RiskLevel, ScamCategory } from "@/lib/analyzer-types"

interface AnalyzerResultsProps {
  result: AnalysisResult
  onNewAnalysis: () => void
}

const riskConfig: Record<RiskLevel, { icon: typeof ShieldCheck; label: string; color: string; bgColor: string; borderColor: string }> = {
  safe: {
    icon: ShieldCheck,
    label: "Safe",
    color: "text-success",
    bgColor: "bg-success/10",
    borderColor: "border-success/30"
  },
  suspicious: {
    icon: ShieldAlert,
    label: "Suspicious",
    color: "text-warning",
    bgColor: "bg-warning/10",
    borderColor: "border-warning/30"
  },
  dangerous: {
    icon: ShieldX,
    label: "Dangerous",
    color: "text-danger",
    bgColor: "bg-danger/10",
    borderColor: "border-danger/30"
  }
}

const categoryLabels: Record<ScamCategory, string> = {
  phishing: "Phishing Scam",
  upi_scam: "UPI Scam",
  legitimate: "Legitimate",
  unknown: "Unknown"
}

const severityConfig = {
  high: { color: "text-danger", bg: "bg-danger/10", border: "border-danger/30" },
  medium: { color: "text-warning", bg: "bg-warning/10", border: "border-warning/30" },
  low: { color: "text-muted-foreground", bg: "bg-muted/50", border: "border-border" }
}

export function AnalyzerResults({ result, onNewAnalysis }: AnalyzerResultsProps) {
  const riskInfo = riskConfig[result.riskLevel]
  const RiskIcon = riskInfo.icon

  return (
    <div className="space-y-6">
      {/* Risk Status & Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Risk Status */}
        <Card className={`${riskInfo.bgColor} ${riskInfo.borderColor} border-2`}>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <RiskIcon className={`h-16 w-16 ${riskInfo.color} mb-4`} />
              <span className="text-sm text-muted-foreground mb-1">Risk Level</span>
              <span className={`text-2xl font-bold ${riskInfo.color}`}>
                {riskInfo.label}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Scam Category */}
        <Card className="bg-card/50 border-border/50">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-xl bg-primary/10 mb-4">
                <Flag className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground mb-1">Category</span>
              <Badge 
                variant={result.scamCategory === "legitimate" ? "default" : "destructive"}
                className="text-sm px-3 py-1"
              >
                {categoryLabels[result.scamCategory]}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Confidence Score */}
        <Card className="bg-card/50 border-border/50">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <span className={`text-4xl font-bold ${riskInfo.color} mb-2`}>
                {result.confidenceScore}%
              </span>
              <span className="text-sm text-muted-foreground mb-3">Confidence Score</span>
              <Progress 
                value={result.confidenceScore} 
                className="w-full h-2"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Explanation Panel */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Analysis Explanation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground leading-relaxed">
            {result.explanation}
          </p>
        </CardContent>
      </Card>

      {/* Red Flags Section */}
      {result.redFlags.length > 0 && (
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-danger" />
              Red Flags Detected
            </CardTitle>
            <CardDescription>
              Warning signs identified in the content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {result.redFlags.map((flag) => {
                const severity = severityConfig[flag.severity]
                return (
                  <div 
                    key={flag.id}
                    className={`flex items-start gap-4 p-4 rounded-lg ${severity.bg} border ${severity.border}`}
                  >
                    <XCircle className={`h-5 w-5 ${severity.color} mt-0.5 shrink-0`} />
                    <div>
                      <h4 className="font-semibold text-foreground">{flag.title}</h4>
                      <p className="text-sm text-muted-foreground">{flag.description}</p>
                    </div>
                    <Badge variant="outline" className={`ml-auto shrink-0 ${severity.color} ${severity.border}`}>
                      {flag.severity}
                    </Badge>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Prevention Tips */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-success" />
            Prevention Tips
          </CardTitle>
          <CardDescription>
            How to protect yourself from this type of threat
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {result.preventionTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-success/10 border border-success/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-success">{index + 1}</span>
                </div>
                <span className="text-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Suggested Actions */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle>Suggested Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {result.suggestedActions.map((action, index) => (
              <Button 
                key={index}
                variant={result.riskLevel === "safe" ? "default" : "destructive"}
                className="gap-2"
              >
                {action}
                <ArrowRight className="h-4 w-4" />
              </Button>
            ))}
            <Button 
              variant="outline" 
              onClick={onNewAnalysis}
              className="border-border/50"
            >
              Analyze Another
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
