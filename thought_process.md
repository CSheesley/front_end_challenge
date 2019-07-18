Read the instructions a couple of times - aside from knowing this will be a little new, nothing crazy jumps out. Time to clone, create a repo of my own, set the new remote origin.

Time to get things set up. Ran NPM install - looks like a lot of (610) vulnerabilities. Run NPM audit fix - got down to 37 vulnerabilities.

Prompeted to try `npm audit fix --force` to fix remaining vulnerabilities. Upon giving that a shot, I was warned that it sure hopes I know what I am doing... I hit control+c and stopped. Down to 25 vulnerabilities, I think I am going to keep moving.

Following the more environment setup instructions - I ran nom start and visit http://localhost:8080, where I can see a page. Finally, I run the test with npm test. Looks like there is an error, so I will check that out.

It looks like we might be calling on a file which does not exist = "./dist/index.html". As I was googling around, I briefly saw something about a build. Remembering that I saw something about this in the set up, I try running `npm run build`. No luck, same error when running the test.

Maybe I am missing something like a server.js file? Back to the internet. Server.js doesn't really look like its related to my issue, at least I think. Maybe sometimes the problem isn't as complex as it may seem. To get past the error I decided that I will just build a `dist` directory with an `index.html` file inside. Although it is blank, I run my test and things are passing. I feel like I am set up - time to commit.
