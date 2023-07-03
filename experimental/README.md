# Experimental/Developmental Code

If you're working on something, just feel free to use this folder as a 
means of documenting a project or thought. Additionally, if you have 
code that might be a bit messy but still might be valuable, you can
place it in here, so that when we do get a linter, we have a place to
'stash' our work without worrying about the linter yelling at us. 

See below for an example 'update,' but like I said, a lot of this stuff
is extremely arbitrary anyways, as long as this folder doesn't turn into
a huge mess of things.

```
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
```
