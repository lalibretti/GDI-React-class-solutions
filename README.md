# Class 5: Get Information
 ## Exercise 5 Rewrite this component to accept user input
 The goal: When the user inputs a url, the component should log it to the console
    // You might want to read a little bit more about forms here: https://reactjs.org/docs/forms.html
    // but essentially, there are two parts to this:
     1) the input reflecting it's current value when the input changes
     2) and submitting the form.
    * For 1), you will need to create an handleChange function and pass it as a prop to the <input> element.
    // handleChange will set the state with the value of the target of the event passed to it.
    * For 2) you will need to create a handleSubmit function and pass it as an onClick prop to the button.
     handleSubmit will be the one submitting - ie console.log the current url in the state for now. and on handleSubmit, you will want to reset the state.

## Exercise 6 Provide Context 
1. Refactor your app to use React Context to get the photos data from <App /> to <FeedList />.  Refer to the React Context Docs if you need help.
2. Create a new PhotosContext outside of <App /> in the app file and wrap the contents of <App /> component with the PhotosContext provider, passing in the value of photos
Use the new context in <FeedList /> instead of props.
Eliminate passing props through <HomePage />
 
 ### Exercise 6 Bonus 
  Let’s get your  <ImageUploaderForm /> to actually add the photo to the Homepage! Tutorial that you can refer to for help
If photos data in <App/> is changing, you will need to set the photos data as state in <App/>.
1. You will need a way to update the photos data with the new url - create a function in <App/> called addPhoto that updates the photos state by accepting a url, and creating a new photo object to add to the photos array in the state. 
With regards to adding the new photo to the array, BE CAREFUL ABOUT IMMUTABILITY HERE.  You can look at these resources for some ideas
Blog 1 (search for the example with prevState)
StackoverFlow 1
2. Pass the addPhoto function to the PhotosContext provider in <App />
Extract the addPhoto function out of the PhotosContext provider in <ImageUploaderForm /> and use it as the call back to handleSubmit.
*** Extra Bonus: can you add it to the front of the array instead of the end, but in an immutable way?

### Optional:Exercise 7 API It --Optional 
1. Refactor your <App /> to use useEffect hook to make a call to the api to fetch the photos data.  
2. Import useEffect from React and add it as a function to your <App />
3. Use fetch to get data from the api: https://api.jsonbin.io/b/5f95dcdbbd69750f00c37370
4. On successful fetch, convert the response object to a JSON object
5. Set the data to state
** Don't forget to pass in an empty array as a second argument to useEffect so that it only runs once per component mount
Remove any references to data.photos from the imported json

### Exercise 8 Router 
1. Need to run in the top most level folder of your repo: 
yarn or npm install --save react-router-dom
** Utilize the React Router documentation to help you with this exercise.
2. You will need to edit  App.jsx and Header.jsx where your links are located.
3. The files for <AboutPage /> and <ProfilePage />  already exist.
4. Add functional components, export them, and voila - you should have
separate pages with working links!

### Optional Exercise 9 Make it yours! 
1. In your Profile Page: Create at least 2 new components
Use your imagination! Biography? List of favorite cats? Profile picture?
For CSS help with structuring a page, recommended to use FlexBox.
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://flexboxfroggy.com/ (cute little game to teach you flexbox)



# Class 4 State
1. Create a button that toggles between two states: "Liked" and "Not liked (yet)"
	 // add a constructor with initial state
	 // add a button to the rendered JSX with an onClick attribute
	 // add a method to handle the click/ change the state
	 // hook up the button text to the state
2. BONUS: Create a likes counter
	 // take in a prop for the number of likes
	 // increase or decrease the likes based on whether button click is like/ unlike
	 // hint: take the total likes as a prop, and convert it to state


# Class 3 Homework update our project to include properties in our components
1. Data has been included in Homepage.jsx.  Take a look at data.json - we need to extract the photos array from it.  How could we do that?  (hint: destructuring!)


2. How can we get those photos from <Homepage/> component to <FeedList/> component?  (hint: props!)


3. For each photo that gets passed down to <FeedList/>, we need to create a <FeedItem/>
for each individual photo.  (hint: use the map function!)


4. The img inside of <FeedItem/> needs to display the src url that gets passed to it.


5. <Likes/> component needs to display the number of likes passed down to it.



# Class 2 Homework -update the following files: App.js, HomePage.jsx, and the files in the components folder

1. write a class component with a dic and appropriate class name
2. import the necessary files
3. add them to the div
4. export the default component
** The pages that are to be updated will have page specific instructions **

***if you get really stuck you can look at the solutions repo ***

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
