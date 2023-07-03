const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getLinuxCommand(userCommand) {
  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{"role": "system", "content": "You're an expert system administrator capable of translating user commands into precise Linux commands. Please respond with only the appropriate Linux command, without additional explanation or context."}, {role: "user", content: userCommand}],
  });
  //console.log(completion.data);
  return completion.data.choices[0].message.content;
}

// getLinuxCommand("Open google")
//   .then(command => console.log(command))
//   .catch(err => console.error(err));