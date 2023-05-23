// Importing the CSS file for styling
import "./App.css";

// Importing the Login component from the ./components/Login.js file
import Login from "./components/Login";

// Defining the App functional component
function App() {
  // Returning the JSX to be rendered
  return (
    <>
      {/* Rendering an instance of the Login component */}
      <Login />
    </>
  );
}

// Exporting the App component as the default export of this file
export default App;
