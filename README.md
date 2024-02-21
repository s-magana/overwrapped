# Overwrapped
No matter what time of the year it is, view your top musical data from either the past year, 6 months, or month by using Overwrapped!

**Link to project:** *(under Spotify review)*

https://github.com/s-magana/overwrapped/assets/113574110/e86a2b0b-71a7-4804-afd0-5df50058ec2d

## How It's Made:

**Tech used:** React, JavaScript, OAuth 2.0, Node.js, HTML, CSS, Bootstrap

Soon after initializing the project using Create React App, I began this project by first setting up the routing to the different pages I planned to have. With the overall layout established and the app created on the Spotify for Developers site, I was then able to use Spotify's O.Auth 2.0 authorization framework. I then fixed the visibility of the user's login hash in the url and set the token into local storage. Now able to make requests to the Spotify API to get the user's info, I built three components: a profile. top artists, and top tracks. Finally, I added all the components to the main home page and styled everything using Bootstrap.  

## Optimizations

If I were to improve this app, I would first add more components of data that would be displayed to the user. For example, I would want to show top albums as well as give the user the ability to download their top tracks into a playlist on their Spotify account. I would also like to give the user customization options as to how they would like their data showcased to them. Further, I would like to add a feature where the user can simultaneously play their Spotify music while using the app. 

## Lessons Learned:

At the end of building this project, I was able to learn so many new things. Working with React was an entire process in itself that lead to me understanding why it is such a popular front-end alternative and all the various aspects as to how it works. As well, working with such a popular API as Spotify's, I adapted myself to new documentation and forms of authentication. 

## Install:
'npm install'

## Things to Add:
- Create an '.env' file in the config folder and add the following as 'key = value'
    - REACT_APP_CLIENT_ID = 'your spotify developer client id'
    - REACT_APP_CLIENT_SECRET = 'your spotify developer client secret'
    - REACT_APP_REDIRECT_URL = 'your redirect url after logging in'

## Run:
'npm start'

## Examples:
Take a look at these other examples that I have in my portfolio:

**Yestoday:** https://github.com/s-magana/yestoday

**My Chatbot:** https://github.com/s-magana/my-chatbot

**Buy2k:** https://github.com/s-magana/buy2k
