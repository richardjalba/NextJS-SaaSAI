This OpenAI web app demonstrates my ability using NextJS and more technologies.

**Here is where I will document my efforts in building this OpenAI app.**

First I bring MongoDB and Tailwind CSS into this Next.js project for later use.

Then I set up some required routes for the app. This includes Pages, new posts, and dynamic posts.

**Auth0** is an authentication and authorization service.

Next I bring in Auth0. This involves creating a .env file with pertinent info and adding the Auth0 api for its login functionality on the homepage.

To use the useUser hook, the entire app needs to be wrapped by <UserProvider> because auth0 uses React context to store user information.

NextJS uses the \_app.js file to pass all pageProps throughout components across the entire app. This is where I wrap the entire app <Component> with <UserProvider> to store user information on the app if the user is logged in.

The useUser hook is then using the React context <UserProvider>

Back in the Homepage (index.js) I set a conditional where if the user is logged in, then user info and logout button is shown, else login button is shown.

Then I bring in the Image component from Next, since it holds more properties when the host name for the image is set up in the next.config.js file.

By adding the domain to the next.config file, NextJS will know that I want to use images from this domain on my app.

Both the user image and user email address for the logged in user are added to the Homepage.

(Note to Self: Protect access to other routes if user is not logged in via auth0)

To prevent someone who is not logged in from accessing routes, I bring in the withPageAuthRequired function from auth0. This callback function redirects anyone who is not logged in back to the login page.

Now I'm going to add some design using Tailwind CSS.

**Tailwind CSS** is a CSS framework that allows for high customization.

I start by creating a folder named components in the root main directory, within that I create a folder named AppLayout. In the AppLayout folder I create index.js and AppLayout.js

In \_app.js I make it so that when a component is rendered, if the component carries a getLayout function, then it will render the layout, else it will simple render the page.

Any components that have a layout will bring in all their pageProps along with page in the component.

Now I build out AppLayout using Tailwind CSS.

Then I move the Login : User Info & Logout logic from the index.js file and move it into the AppLayout.js file.

While I'm in the index.js file, I cut and paste all the imports into the AppLayout.js file, along with useUser hook.

Imported FontAwesome and further built out the AppLayout.js file.

Now I create a Logo folder in the Components folder with an index.js and Logo.js file.

Added the Google Fonts into the \_apps.js file. Added fonts to tailwind.config.js file.

Built out the Homepage. Created CSS component in globals.css file and simplified code.

(Note to Self: Start implementing GPT)

I get an API key from platform.openai.com and put that key in the .env.local file.

**OpenAI** such as ChatGPT, is an incredible AI technology that's single-handedly brought down my blog income streams, causing me to fully rejoin the workforce full-time as opposed to part-time freelance work (thanks ChatGPT!)

Then I create an endpoint for that API in the pages/api folders with the name generatePost.js

This is then implemented into the new.js file along with an onClick button.

I got stuck with a 500 error and figured out that I gave the apiKey variable in generatePost.js the wrong value !!! Fixed.

I implement OpenAI functionality in both generatePost.js and new.js

(Currently the OpenAI works and generates content based off of hard code in the backend. I want the user to provide the info in the frontend and I want better formatting for the generated content.)

Now I'm going to refactor generatePost.js so that there can be arguments passed through it from the user.

In new.js I add prompts and textareas for the user to insert information, along with setStates for the topic and keyword values.

For a moment, typing in the textarea wasn't producing any characters. I realized I misnamed the onChange as onChanges !!! Fixed.

The generatePost API endpoint will req JSON content from the topic and keyword states.

Now the app will generate and produce content on the frontend based on user input.

Next I want to be able to store all the generated content on the left side of the screen using MongoDB.

**MongoDB** is a NoSQL database that utilizes JSON. Every "document" is given automatically given an \_id property.

On the MongoDB website, I create a Cluster with an OwlAI Database with a users Collection and posts Collection.

Then I added the connection string from MongoDB to the .env.local file so that my application can connect with MongoDB.

From here I start building out a new API endpoint for adding tokens in addTokens.js

To test, whenever a user clicks the Add Credits button, if they aren't already in the MongoDB user Collection, they will be "upserted", otherwise they will receive 10 credits.

Now I'm using the withApiAuthRequired function to protect the generatePost.js API by wrapping the entire thing.

Built out generationPost.js to connect intimately with MongoDB user and posts Collections.

...

Now it's time for the app to start rendering the post content that is generated on its proper post page.

(Up until this point, the content has been generated on the frontend in a crass way, or I've been looking at it through chrome tools)

Back in [postId].js I apply some Tailwind styling and give a place for the generated content to render. This involves modifying the global.css file.

For a moment, the sidebar was stretching alongside the length of the content when it's meant to be a fixed viewport height. I go into the AppLayout.js file !!! Fixed.

Now I want to list the generated content for the logged in user at the left side of the screen.

I create a utils folder and a getAppProps.js file so I can prepare to query all the generated content onto the left side of the screen.
