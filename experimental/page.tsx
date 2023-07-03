/*
Joy - Jul 2
This is app/page.tsx:
The code below is an alternative hook, that I want to look into. I'm
looking into writing this into our own api folder, given that the input
is on the client side. Once I get the component tree a little bit more
solidified, I think that I will look into fetching this data from the
backend instead of a simple call. 

As of right now, I would most likely do this via a fetch and useEffect
hook from React.

const handleExecuteCommand = async () => {
  let output = '';
  
  const entries = await readDir(inputText);

  for (const entry of entries) {
    output += entry.path + '\n';
  }

  setOutputText(output);
  setShow(true);
} */