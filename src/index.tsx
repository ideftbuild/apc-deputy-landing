// src/index.tsx

/**
 * Main application entry point.
 * This file bootstraps the React application by mounting the main App component
 * to the DOM element with the 'root' id in `index.html`.
 */


console.log("Index.ts executed");
import App from '../App.tsx';

// Get the root container from the public HTML file.
const container = document.getElementById('root');

console.log("Index.ts executed");
if (container) {
  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <p>Index.tsx executed</p>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element. The application cannot be mounted.');
}
