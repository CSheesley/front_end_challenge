Read the instructions a couple of times - aside from knowing this will be a little new, nothing crazy jumps out. Time to clone, create a repo of my own, set the new remote origin.

Time to get things set up. Ran NPM install - looks like a lot of (610) vulnerabilities. Run NPM audit fix - got down to 37 vulnerabilities.

Prompeted to try `npm audit fix --force` to fix remaining vulnerabilities. Upon giving that a shot, I was warned that it sure hopes I know what I am doing... I hit control+c and stopped. Down to 25 vulnerabilities, I think I am going to keep moving.

Following the more environment setup instructions - I ran nom start and visit http://localhost:8080, where I can see a page. Finally, I run the test with npm test. Looks like there is an error, so I will check that out.

It looks like we might be calling on a file which does not exist = "./dist/index.html". As I was googling around, I briefly saw something about a build. Remembering that I saw something about this in the set up, I try running `npm run build`. No luck, same error when running the test.

Maybe I am missing something like a server.js file? Back to the internet. Server.js doesn't really look like its related to my issue, at least I think. Maybe sometimes the problem isn't as complex as it may seem. To get past the error I decided that I will just build a `dist` directory with an `index.html` file inside. Although it is blank, I run my test and things are passing. I feel like I am set up - time to commit and push.

----
Everything is pushed, and Github is still showing 14 open security alerts. I could jump into each one of those, but seeing as this is a timed challenge, I am going to try to move on to the user stories and possibly circle back.

Time to read the API docs to get a feel for how that might work. Looks pretty straight forward - time to check things out in Postman. The GET request works just fine, but I am having issues making a POST request, using JSON in the body. Everything looks right, I just need to play around with stuff. I am going to look into using CURL from the command line. Took a break from looking at CURL - gave things another shot from posting in the command line by slightly tweaking the input of the body each time. I was able to make a successfull POST request using this in my body - with the type setting as `raw` `JSON(application/json)`:
```
{ "word": { "value": "sample" } }
```
* this differs from the formatting that was shown in the API docs.

Both GET and POST are working - now to look back at the user story. When visiting our page on localhost, everything looks set up - however the the top word and count are not being shown.

I think I need to make a fetch call, and then handle that data somehow. Before that, I want to see if I can tell how this page is being styled, and if there is a placeholder div tag already set up.

Used my dev tools in the broweser - found it, looks like it is in `docs/index.html`. I feel like this is where I need to build my code, but what was the building the whole `dist/index.html` all about?

I am going to work in the built out `docs/index.html file`. I think I may need to go back and delete `dist/index.html`, and reference `docs/index.html file` in the `test/setup.js` instead.

I know that I need to make a fetch call at some point - but right now I am trying to play connecting a function (which will later hold the fetch call) to connect with and interact with specific div tag. Definitely some exploratory learning.

Running into a lot of road blocks, but essentially I want something like:

```
When the page is loaded (onload) make a fetch call and the current top word displays.
 - populate top-word div tag with the word name
 - populate top-word-count div tag with the word count

When the break down button is clicked (onclick)
- a fetch post is made with new word data to submit to the database
- the original fetch call and the current top word updates.
 - populate top-word div tag with the word name
 - populate top-word-count div tag with the word count
 ```

Getting this put together is a different story. I really have no idea what I am doing. I am able to get a div tag to populate with an `onclick` elsewhere, however I can't seem to get this div tag to work `onload`. That being said, I am going to try and get a fetch call to work.

With some guidance, I was steered toward using JQuery and the `index.js` file. This seems to be a much easier way to append things to the DOM. By creating a fetch call in this file, and `appending` the desired result to the `#top-word-here` tag, we are able to see the results populate on the page like we would want.

----
For times sake I am going to stay on this branch and work towards completing story #2 - where we can make a POST by clicking on the "Break Down button"
