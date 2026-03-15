from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def detect_scam(text):
    text_lower = text.lower().strip()

    phishing_keywords = [
        "kyc", "verify now", "account blocked", "suspended",
        "click here", "update account", "urgent", "otp"
    ]

    upi_keywords = [
        "upi pin",
        "scan qr",
        "collect request",
        "collect money",
        "approve request",
        "approve now",
        "payment request",
        "refund",
        "refund pending",
        "claim refund",
        "cashback",
        "receive money",
        "to receive money",
        "reward credited",
        "reward expired",
        "upi mandate",
        "request money",
        "send money to verify",
        "pay to receive"
    ]

    suspicious_link_patterns = [
        ".xyz", ".top", ".click", "bit.ly", "tinyurl", "http://", "https://"
    ]

    phishing_hits = []
    upi_hits = []
    link_hits = []

    for word in phishing_keywords:
        if word in text_lower:
            phishing_hits.append(word)

    for word in upi_keywords:
        if word in text_lower:
            upi_hits.append(word)

    for pattern in suspicious_link_patterns:
        if pattern in text_lower:
            link_hits.append(pattern)

    red_flags = []
    for word in phishing_hits:
        red_flags.append(f"Detected phishing keyword: {word}")
    for word in upi_hits:
        red_flags.append(f"Detected UPI scam keyword: {word}")
    for pattern in link_hits:
        red_flags.append(f"Suspicious link pattern found: {pattern}")

    phishing_score = len(phishing_hits)
    upi_score = len(upi_hits)
    link_score = len(link_hits)
    total_score = phishing_score + upi_score + link_score

    if upi_score >= 1:
        category = "UPI Scam"
    elif phishing_score >= 1:
        category = "Phishing"
    else:
        category = "Legitimate"

    if total_score >= 4:
        risk = "Dangerous"
    elif total_score >= 2:
        risk = "Suspicious"
    else:
        risk = "Safe"

    confidence = min(50 + total_score * 10, 95)

    if risk == "Dangerous":
        explanation = "This message contains multiple scam indicators such as urgency, suspicious payment language, or risky links."
    elif risk == "Suspicious":
        explanation = "This message contains some warning signs and should be verified carefully."
    else:
        explanation = "No major scam indicators were detected, but users should still stay cautious."

    prevention_tips = [
        "Do not click suspicious links",
        "Never share OTP or UPI PIN",
        "Verify using official bank or app channels",
        "Do not scan QR codes to receive money"
    ]

    return {
        "risk": risk,
        "category": category,
        "confidence": confidence,
        "explanation": explanation,
        "red_flags": red_flags,
        "prevention_tips": prevention_tips
    }

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    user_input = data.get("text", "")

    result = detect_scam(user_input)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)