"use client"

import { useState, useCallback } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnalyzerInput } from "@/components/analyzer/analyzer-input"
import { AnalyzerResults } from "@/components/analyzer/analyzer-results"
import { AnalyzerEmptyState } from "@/components/analyzer/analyzer-empty-state"
import { AnalyzerLoading } from "@/components/analyzer/analyzer-loading"
import { InputType, AnalysisResult, mockAnalysisResults } from "@/lib/analyzer-types"

type AnalysisState = "idle" | "analyzing" | "complete"

export default function AnalyzePage() {
  const [analysisState, setAnalysisState] = useState<AnalysisState>("idle")
  const [result, setResult] = useState<AnalysisResult | null>(null)

  const handleAnalyze = useCallback(async (content: string, type: InputType, exampleId?: string) => {
    setAnalysisState("analyzing")
    setResult(null)

    // Simulate AI analysis delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // If it's an example message, use the mock result
    if (exampleId && mockAnalysisResults[exampleId]) {
      setResult(mockAnalysisResults[exampleId])
    } else {
      // Generate a generic suspicious result for custom input
      const customResult: AnalysisResult = {
        riskLevel: content.toLowerCase().includes("otp") || content.toLowerCase().includes("bank") 
          ? "suspicious" 
          : "safe",
        scamCategory: content.toLowerCase().includes("kyc") || content.toLowerCase().includes("blocked")
          ? "phishing"
          : "unknown",
        confidenceScore: 75,
        explanation: "This content has been analyzed by our AI. While we detected some patterns, we recommend exercising caution with any unsolicited messages or requests for personal information.",
        redFlags: content.toLowerCase().includes("urgent") || content.toLowerCase().includes("immediately")
          ? [
              {
                id: "1",
                title: "Urgency Tactics",
                description: "The message uses urgency to pressure quick action",
                severity: "medium" as const
              }
            ]
          : [],
        preventionTips: [
          "Never share OTPs, PINs, or passwords with anyone",
          "Verify requests through official channels",
          "Do not click on suspicious links",
          "When in doubt, contact the organization directly"
        ],
        suggestedActions: ["Verify Officially", "Report if Suspicious"]
      }
      setResult(customResult)
    }

    setAnalysisState("complete")
  }, [])

  const handleNewAnalysis = useCallback(() => {
    setAnalysisState("idle")
    setResult(null)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-grid-pattern bg-fixed">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Scam <span className="text-gradient">Analyzer</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Paste any suspicious content below and our AI will analyze it for potential threats
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Input Section - Always visible */}
            <AnalyzerInput 
              onAnalyze={handleAnalyze}
              isAnalyzing={analysisState === "analyzing"}
            />

            {/* Results Section */}
            {analysisState === "idle" && <AnalyzerEmptyState />}
            {analysisState === "analyzing" && <AnalyzerLoading />}
            {analysisState === "complete" && result && (
              <AnalyzerResults 
                result={result}
                onNewAnalysis={handleNewAnalysis}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
