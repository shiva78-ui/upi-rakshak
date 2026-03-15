"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scan, Trash2, MessageSquare, Link2, Mail, Smartphone } from "lucide-react"
import { InputType, ExampleMessage, exampleMessages } from "@/lib/analyzer-types"

const inputTypeIcons = {
  message: MessageSquare,
  url: Link2,
  email: Mail,
  upi: Smartphone,
}

const inputTypeTabs = [
  { value: "message", label: "Message", icon: MessageSquare },
  { value: "url", label: "URL", icon: Link2 },
  { value: "email", label: "Email", icon: Mail },
  { value: "upi", label: "UPI Request", icon: Smartphone },
]

interface AnalyzerInputProps {
  onAnalyze: (content: string, type: InputType, exampleId?: string) => void
  isAnalyzing: boolean
}

export function AnalyzerInput({ onAnalyze, isAnalyzing }: AnalyzerInputProps) {
  const [inputType, setInputType] = useState<InputType>("message")
  const [content, setContent] = useState("")

  const handleAnalyze = () => {
    if (content.trim()) {
      onAnalyze(content, inputType)
    }
  }

  const handleClear = () => {
    setContent("")
  }

  const handleExampleClick = (example: ExampleMessage) => {
    setContent(example.content)
    setInputType(example.type)
    onAnalyze(example.content, example.type, example.id)
  }

  const placeholderText = {
    message: "Paste suspicious SMS or WhatsApp message here...",
    url: "Paste suspicious URL or link here...",
    email: "Paste suspicious email content here...",
    upi: "Describe the UPI collect request or paste the details...",
  }

  return (
    <Card className="bg-card/50 border-border/50">
      <CardHeader>
        <CardTitle className="text-2xl">Analyze Suspicious Content</CardTitle>
        <CardDescription>
          Paste any suspicious message, URL, email, or UPI request to check if it is a scam
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input Type Tabs */}
        <Tabs value={inputType} onValueChange={(v) => setInputType(v as InputType)}>
          <TabsList className="grid grid-cols-4 w-full bg-secondary/50">
            {inputTypeTabs.map((tab) => (
              <TabsTrigger 
                key={tab.value} 
                value={tab.value}
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Text Input */}
        <div className="relative">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={placeholderText[inputType]}
            className="min-h-[200px] bg-input/50 border-border/50 focus:border-primary/50 resize-none text-base"
          />
          {content && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-3 right-3 h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
              onClick={handleClear}
              aria-label="Clear input"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={handleAnalyze}
            disabled={!content.trim() || isAnalyzing}
            className="flex-1 glow-cyan-sm"
            size="lg"
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin mr-2 h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full" />
                Analyzing...
              </>
            ) : (
              <>
                <Scan className="mr-2 h-5 w-5" />
                Analyze Content
              </>
            )}
          </Button>
          <Button 
            variant="outline" 
            onClick={handleClear}
            disabled={!content || isAnalyzing}
            size="lg"
            className="border-border/50"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Clear
          </Button>
        </div>

        {/* Example Messages */}
        <div className="pt-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">
            Try these example scam messages to see how the analyzer works:
          </p>
          <div className="flex flex-wrap gap-2">
            {exampleMessages.map((example) => {
              const Icon = inputTypeIcons[example.type]
              return (
                <Badge
                  key={example.id}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors py-2 px-3"
                  onClick={() => handleExampleClick(example)}
                >
                  <Icon className="h-3 w-3 mr-1.5" />
                  {example.label}
                </Badge>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
