import { Mistral } from '@mistralai/mistralai';

export default async function APIRequest(messages) {
    const apiKey = process.env.NEXT_PUBLIC_MISTRAL_API_KEY;
    try {

      const client = new Mistral({ apiKey: apiKey });
      const chatResponse = await client.chat.complete({
        model: 'mistral-large-latest',
        messages: messages,
      });
      const botMessage = { role: "assistant", content: chatResponse.choices[0].message.content };
      console.log(botMessage);
      return botMessage;

    } catch (error) {
      console.error("Error sending message:", error);
    } 
}