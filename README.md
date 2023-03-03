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
