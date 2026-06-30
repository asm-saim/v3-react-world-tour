# Install react extension pack.
# rsc→	stateless component skeleton 
# App.js in the entry point
--------------------------------------------------|
Simple rule to remember
Code	                        What happens?
onClick={handleCountry}	        ✅ Pass the function. React calls it on click.
onClick={handleCountry()}	    ❌ Calls it immediately during render.
onClick={() => handleCountry()}	✅ Passes an anonymous function that calls handleCountry on click. Use this when you need arguments or extra logic.
--------------------------------------------------|

##state jekane declare kore, event handler o okane declare korbo.
##Normally, react is uni directional. top->bottom 

