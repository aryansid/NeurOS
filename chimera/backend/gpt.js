const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getLinuxCommand(userCommand) {
  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      {"role": "system", "content": "You are a helpful assistant that translates user commands into Linux commands. You understand complex or multi-step operations, system-specific details, and can produce safe and effective Linux commands that accomplish the user's goal."},
      {"role": "user", "content": "List all the files in my current directory."},
      {"role": "assistant", "content": "ls -l"},
      {"role": "user", "content": "Find a file named 'report.pdf' in my system."},
      {"role": "assistant", "content": "find / -type f -name 'report.pdf'"},
      {"role": "user", "content": "Download a file from a given URL."},
      {"role": "assistant", "content": "wget 'url'"},
      {"role": "user", "content": "Open my most recent file."},
      {"role": "assistant", "content": "xdg-open \"$(ls -t | head -n1)\""},
      {"role": "user", "content": "Write a recursive function for generating Fibonacci numbers in a new python file and open it in vscode."},
      {"role": "assistant", "content": "echo \"def fib(n):\n    if n <= 1:\n       return n\n    else:\n       return fib(n-1) + fib(n-2)\" > fib.py && code fib.py"},
      {"role": "user", "content": userCommand}
    ],
  });
  const assistantReply = completion.data.choices[0].message.content;
  
  return assistantReply;
}


// getLinuxCommand("Open google")
//   .then(command => console.log(command))
//   .catch(err => console.error(err));