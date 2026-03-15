"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How does UPI Rakshak detect scams?",
    answer: "UPI Rakshak uses advanced AI and machine learning models trained on thousands of real scam patterns specific to Indian users. It analyzes text patterns, URLs, sender behavior, and known scam signatures to identify potential threats with high accuracy."
  },
  {
    question: "Is my data safe when I use UPI Rakshak?",
    answer: "Yes, your privacy is our top priority. We analyze the content you submit in real-time and do not store any of your personal messages or data. The analysis happens securely and your information is never shared with third parties."
  },
  {
    question: "What should I do if I have already been scammed?",
    answer: "If you have lost money to a scam: 1) Immediately call your bank to block your account and report the fraud. 2) File a complaint on cybercrime.gov.in or call 1930. 3) File an FIR at your local police station. 4) Keep all evidence including messages, transaction IDs, and screenshots."
  },
  {
    question: "Can banks ask for OTP over phone?",
    answer: "No, absolutely not. No bank employee, RBI official, or customer care executive will ever ask for your OTP, PIN, CVV, or full card number over phone or message. Anyone asking for these details is a scammer, regardless of how legitimate they sound."
  },
  {
    question: "How do QR code scams work?",
    answer: "Scammers ask you to scan a QR code claiming you will receive money, but QR codes can only be used to PAY money, not receive. When you scan and enter your PIN thinking you are receiving money, you are actually authorizing a payment FROM your account to the scammer."
  },
  {
    question: "What is a UPI collect request scam?",
    answer: "Scammers send UPI collect requests disguised as refunds or payments. They might say 'Approve this to receive your refund' but approving actually sends money FROM your account. Remember: To receive money, you never need to approve anything or enter your PIN."
  },
  {
    question: "How can I verify if a message is from my real bank?",
    answer: "Banks typically send messages from registered sender IDs (like SBIBNK, HDFCBK). They never include links for KYC updates or ask for sensitive information. When in doubt, call your bank using the number on your card or official website - never use numbers from the suspicious message."
  },
  {
    question: "What is phishing and how can I identify it?",
    answer: "Phishing is when scammers impersonate trusted organizations to steal your information. Signs include: spelling errors, urgent language, suspicious URLs, requests for personal/financial information, and offers that seem too good to be true. Always verify through official channels."
  },
  {
    question: "Is UPI Rakshak free to use?",
    answer: "Yes, UPI Rakshak is completely free to use. Our mission is to protect Indian users from digital fraud and we believe everyone should have access to scam detection tools regardless of their financial situation."
  },
  {
    question: "How do I report a scam to authorities?",
    answer: "You can report cyber fraud through: 1) National Cyber Crime Portal: cybercrime.gov.in 2) Cyber Crime Helpline: 1930 3) Your bank's fraud reporting number 4) Local police station (for FIR). Keep all evidence and transaction details ready when reporting."
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Common questions about scams, security, and using UPI Rakshak
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
