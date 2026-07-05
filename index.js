import { chatCompletion, chatCompletionStream } from "./src/api/zai.js";

async function main() {
  const args = process.argv.slice(2);
  const useStream = args.includes("--stream");

  const messages = [
    {
      role: "system",
      content:
        "You are a helpful AI assistant integrated into Veloz, a commodity trading platform.",
    },
    {
      role: "user",
      content:
        args.filter((a) => a !== "--stream").join(" ") ||
        "Hello! Who are you and what can you do?",
    },
  ];

  try {
    if (useStream) {
      process.stdout.write("Z.ai: ");
      let full = "";
      await chatCompletionStream(messages, (chunk) => {
        process.stdout.write(chunk);
        full += chunk;
      });
      console.log("\n");
    } else {
      console.time("Z.ai response");
      const data = await chatCompletion(messages);
      console.timeEnd("Z.ai response");
      console.log(data.choices[0].message.content);
    }
  } catch (error) {
    console.error("\nError:", error.message);
    process.exit(1);
  }
}

main();
