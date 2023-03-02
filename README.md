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
