// api/mentor.js - MindSpace AI Mentor - FREE Groq API
export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method!== 'POST') return res.status(405).json({ error: 'POST only' });

  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'No message' });

    const GROQ_KEY = process.env.GROQ_API_KEY;

    if (!GROQ_KEY) {
      return res.json({ reply: "⚙️ AI key not added yet. Add GROQ_API_KEY in Vercel -> Settings -> Environment Variables. For now I am in demo mode. Your doubt: '" + message + "' - I will answer fully once key is added in 2 mins." });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: "You are MindSpace AI Mentor for Growth Guides students in India. Help with DSA, Web Dev, Career Guidance, Study Plans, Motivation. Be friendly, concise, use simple English + Hinglish if needed. Give actionable steps. Keep answer under 150 words." },
          { role: "user", content: message }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I'm thinking... try again.";

    return res.status(200).json({ reply });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ reply: "Error: " + error.message });
  }
}
