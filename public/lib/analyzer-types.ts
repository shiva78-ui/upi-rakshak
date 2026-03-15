export type InputType = "message" | "url" | "email" | "upi"

export type RiskLevel = "safe" | "suspicious" | "dangerous"

export type ScamCategory = "phishing" | "upi_scam" | "legitimate" | "unknown"

export interface RedFlag {
  id: string
  title: string
  description: string
  severity: "high" | "medium" | "low"
}

export interface AnalysisResult {
  riskLevel: RiskLevel
  scamCategory: ScamCategory
  confidenceScore: number
  explanation: string
  redFlags: RedFlag[]
  preventionTips: string[]
  suggestedActions: string[]
}

export interface ExampleMessage {
  id: string
  type: InputType
  label: string
  content: string
}

export const exampleMessages: ExampleMessage[] = [
  {
    id: "1",
    type: "message",
    label: "KYC Scam SMS",
    content: "Dear Customer, Your SBI account will be blocked today. Please update KYC immediately: https://sbi-update-kyc.xyz/verify"
  },
  {
    id: "2",
    type: "message",
    label: "Prize Scam",
    content: "Congratulations! You have won Rs. 50,00,000 in Jio Lucky Draw. Call 9876543210 to claim your prize. Send Rs. 5000 processing fee."
  },
  {
    id: "3",
    type: "upi",
    label: "Collect Request Scam",
    content: "Received UPI collect request of Rs. 15,000 from 'REFUND-DEPT' with note: 'Approve to receive refund for order #12345'"
  },
  {
    id: "4",
    type: "url",
    label: "Fake Bank URL",
    content: "https://hdfc-netbanking-secure.xyz/login"
  },
  {
    id: "5",
    type: "email",
    label: "Job Offer Scam",
    content: "Subject: Work From Home Job - Earn Rs. 50,000/month\n\nDear Candidate,\n\nYou have been selected for data entry job. No experience required. Send Rs. 2000 registration fee to start immediately.\n\nContact: hr@jobs-india-online.com"
  },
  {
    id: "6",
    type: "message",
    label: "Legitimate OTP",
    content: "123456 is your OTP for SBI Net Banking transaction of Rs. 1500. Valid for 10 mins. Do not share with anyone."
  }
]

// Mock analysis results for demo
export const mockAnalysisResults: Record<string, AnalysisResult> = {
  "1": {
    riskLevel: "dangerous",
    scamCategory: "phishing",
    confidenceScore: 98,
    explanation: "This is a classic KYC phishing scam. Legitimate banks never ask you to update KYC through SMS links. The URL 'sbi-update-kyc.xyz' is a fake domain designed to steal your banking credentials.",
    redFlags: [
      { id: "1", title: "Suspicious Domain", description: "The URL uses .xyz extension instead of official .co.in domain", severity: "high" },
      { id: "2", title: "Urgency Tactics", description: "Claims account will be blocked 'today' to create panic", severity: "high" },
      { id: "3", title: "Unofficial Channel", description: "Banks never send KYC links via SMS", severity: "medium" }
    ],
    preventionTips: [
      "Never click on links in SMS messages claiming to be from banks",
      "Always visit your bank's official website directly by typing the URL",
      "Call your bank's official customer care to verify any KYC requirements",
      "Report such messages to your bank and cyber crime portal"
    ],
    suggestedActions: ["Do Not Click", "Report Scam", "Block Number"]
  },
  "2": {
    riskLevel: "dangerous",
    scamCategory: "phishing",
    confidenceScore: 99,
    explanation: "This is a lottery/prize scam. No legitimate company asks for processing fees to claim prizes. This is designed to steal money through fake prize claims.",
    redFlags: [
      { id: "1", title: "Advance Fee Request", description: "Asking for Rs. 5000 'processing fee' is a major red flag", severity: "high" },
      { id: "2", title: "Unsolicited Prize", description: "You cannot win a contest you never entered", severity: "high" },
      { id: "3", title: "Personal Phone Number", description: "Legitimate companies don't use personal phone numbers", severity: "medium" }
    ],
    preventionTips: [
      "Never pay money to receive a prize or lottery winnings",
      "Legitimate lotteries deduct taxes at source, not through fees",
      "Do not call unknown numbers from such messages",
      "Block and report the sender immediately"
    ],
    suggestedActions: ["Do Not Call", "Block Number", "Report Scam"]
  },
  "3": {
    riskLevel: "dangerous",
    scamCategory: "upi_scam",
    confidenceScore: 97,
    explanation: "This is a UPI collect request scam. Scammers send collect requests disguised as refunds. Approving this will DEDUCT money from your account, not credit it.",
    redFlags: [
      { id: "1", title: "Collect for Refund", description: "You NEVER need to approve a collect request to receive money", severity: "high" },
      { id: "2", title: "Unknown Sender", description: "The sender 'REFUND-DEPT' is not a verified merchant", severity: "high" },
      { id: "3", title: "High Amount", description: "Large amount increases the potential loss", severity: "medium" }
    ],
    preventionTips: [
      "Remember: You never need to approve a collect request to RECEIVE money",
      "To receive money, the sender should use 'Pay' not 'Collect'",
      "Always verify refunds through official channels",
      "Decline any unexpected collect requests immediately"
    ],
    suggestedActions: ["Decline Request", "Block UPI ID", "Report to Bank"]
  },
  "4": {
    riskLevel: "dangerous",
    scamCategory: "phishing",
    confidenceScore: 95,
    explanation: "This URL is a fake banking website designed to steal your login credentials. The domain 'hdfc-netbanking-secure.xyz' is not affiliated with HDFC Bank.",
    redFlags: [
      { id: "1", title: "Fake Domain", description: "HDFC Bank's official site is hdfcbank.com, not hdfc-netbanking-secure.xyz", severity: "high" },
      { id: "2", title: ".xyz Extension", description: "Banks never use .xyz domains for their websites", severity: "high" },
      { id: "3", title: "Misleading Name", description: "Domain name tries to appear legitimate with 'secure' keyword", severity: "medium" }
    ],
    preventionTips: [
      "Always type your bank's URL directly in the browser",
      "Check for https:// and the correct domain name",
      "Bookmark official banking websites for safe access",
      "Never access banking sites from links in messages"
    ],
    suggestedActions: ["Do Not Click", "Report URL", "Verify Officially"]
  },
  "5": {
    riskLevel: "dangerous",
    scamCategory: "phishing",
    confidenceScore: 94,
    explanation: "This is a job scam targeting unemployed individuals. Legitimate companies never ask for registration fees from candidates. The email domain is also suspicious.",
    redFlags: [
      { id: "1", title: "Registration Fee", description: "Legitimate employers never charge candidates for jobs", severity: "high" },
      { id: "2", title: "Too Good to Be True", description: "High salary with no experience is unrealistic", severity: "high" },
      { id: "3", title: "Unofficial Email Domain", description: "The email domain is not from a registered company", severity: "medium" }
    ],
    preventionTips: [
      "Never pay any fee for job applications or registrations",
      "Research the company on official platforms like LinkedIn",
      "Verify job offers through the company's official website",
      "Report job scams to cybercrime.gov.in"
    ],
    suggestedActions: ["Do Not Reply", "Report Scam", "Block Email"]
  },
  "6": {
    riskLevel: "safe",
    scamCategory: "legitimate",
    confidenceScore: 92,
    explanation: "This appears to be a legitimate OTP message from SBI. It follows standard OTP format with security reminder not to share the code.",
    redFlags: [],
    preventionTips: [
      "This message appears safe, but never share OTP with anyone",
      "Bank employees will never ask for your OTP",
      "If you didn't initiate this transaction, contact your bank immediately",
      "Delete OTP messages after use for security"
    ],
    suggestedActions: ["Verify Transaction", "Keep OTP Private"]
  }
}
