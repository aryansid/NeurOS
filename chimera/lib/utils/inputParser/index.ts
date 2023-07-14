export default function inputParser(input: string): {commandString: string , argList: string[]} {
  const argList = input.split(' ');
  const commandString = argList[0];  
  argList.splice(0, 1);

  return { commandString, argList };
}
