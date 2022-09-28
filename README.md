## Rock Paper Scissor Solo Project
### Abstract
This is a rock, paper, scissor game that will offer players the ability to compete against the computer by clicking on a rock, paper, or scissor icon (cave and ufo fighters are added to the spicy version). Player objects are instantiated by the Game class, then fighters are assigned to the DOM. When the user clicks a fighter, the computer's fighter is randomly generated, and then the DOM is updated with each player's selection. Fighters are then compared and the winner is determined. Wins are tabulated in each player's column of the game board.

## Installation Instructions:
1. Go to [this repo](https://github.com/justenanderson-commits/rock-paper-scissor) on Github
2. Click Fork > Create New Fork
3. Click Code
4. Copy the SSH url provided by GitHub
5. In the terminal, navigate to the new project repository
6. Type git clone and paste the URL
7. Open the repo in text editor
8. Type open index.html in the terminal
9. Manipulate the application in the browser window

## Preview of App:


## Context:
Working indidependently in the 5th and 6th weeks of Mod1 classes at Turing, I invested at least 25 - 30 hours to create this application's functionality from scratch using HTML, CSS, and Javascript.

## Contributor:
- [Justen Anderson](https://github.com/justenanderson-commits)

## Learning Goals:
- Solidify and demonstrate your understanding of:
- - DRY JavaScript
- - Event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

## Tech Used
- GitHub
- Terminal
- VS Code
- Chrome Browser/Dev tools
- Zoom
- Slack

## Wins:
- I learned soooo much and feel pretty good about my ability to create a website completely from scratch on my with only help from Google and a few (very limited) conversations with other people (classmates and other network contacts).
- It was generally a fun experience to create all of this. 
- I found one little sweet piece of ES6 syntax that allowed me to make my timer work. I struggled with that thing for a loooong time!
- I think the code is very readable and kinda pretty. :)  

## Challenges:
- I let myself take some family time this weekend but, again, it wasn't the most restful (unfortunately). As a result, I left too many tasks for Monday and Tuesday. Then after hitting a snag and toiling on it for hours, burn out set in and I just kinda settled for what I got.
- I need to dive deeper into event handlers and built-in methods. 
- It feels like my code is bloated and repetitive overall. I have this hunch that, were I more fluent as a programmer, I would be able to write more concise code. 

### Additional Notes 
- Though I've never heard of BEM before, I'm going to attempt to use its naming convention for my styling.

- I realize my branching naming convention isn't working. I was trying to go by file type initially and now realize that the functionality is going to span multiple file types. So I'll try to name them differently from here on out. 

- I'm sure thius wasn't the proper way to go about it, but I started by building the html and CSS. Then I created the data model and started connecting pieces of the DOM to manipulate it. For some reason that logic-process just made a little more sense to me. 

 - I put off the animation piece until the end and then kind of hit a wall. I spent a long time trying to colorize the background of the svgs, change size, or some other visual confirmation of what fighters were being selected, and was successful. The only problem was that to scale my ideas for all of the elements would have meant enormous repetition and code-bloat. Though I tried other ideas related to event.target and different ways of accessing the images using classes, I ended up just kind of burning out and settling for what you see here.