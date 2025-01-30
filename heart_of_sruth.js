
import Groq from "groq-sdk";
import dotenv from 'dotenv'

dotenv.config()

const groq = new Groq({
    apiKey: process.env.SRUTH_KEY
})

const message = [
    {
        'role': 'system',
        'content': 'You are a chill guy'
    },
    {
        'role': 'user',
        'content': 'Can you read me?'
    }
]

const response = await groq.chat.completions.create(
    {
        'model': 'llama3-70b-8192',
        'messages': message
    }
)

console.log(response.choices[0].message.content)