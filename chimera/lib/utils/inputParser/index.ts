export function argListParser(input: string): string[] {
  const result: string[] = [];
  let currentWord = "";
  let insideQuotes = false;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === " " && !insideQuotes) {
      if (currentWord.length > 0) {
        result.push(currentWord);
        currentWord = "";
      }
    } else if (char === "'" && !insideQuotes) {
      insideQuotes = true;
      currentWord += char;
    } else if (char === "'" && insideQuotes) {
      insideQuotes = false;
      currentWord += char;
      result.push(currentWord);
      currentWord = "";
    } else {
      currentWord += char;
    }
  }

  if (currentWord.length > 0) {
    result.push(currentWord);
  }

  return result;
}  


export function inputParser(input: string): {commandString: string , argList: string[]} { 
  const argList = argListParser(input);
    
  const commandString = argList[0];  
  argList.splice(0, 1);

  return { commandString, argList };
}
