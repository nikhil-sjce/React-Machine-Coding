//Staring a react TS project
// npx create-react-app my-ts-app --template typescript

// 1. What is Redux?
// Answer:
// Redux is a state management library for JavaScript applications, commonly used with React. 
// It provides a centralized store to manage application state predictably, making it easier to track, debug, and manage data flow.


// 2. Why use Redux in React?
// Answer:
// Redux is useful when:

// The application has a complex state shared across multiple components.
// State needs to be predictable and easily traceable (single source of truth).
// Debugging is important (Redux DevTools helps track actions and state changes).
// There’s a need for better state persistence and undo/redo features.
// However, if the app's state is simple and component-local state (useState, useContext) is sufficient, Redux might be unnecessary.


// 3. What are the core principles of Redux?
// Answer:

// Single source of truth – The application state is stored in a single object (store).
// State is read-only – State can only be modified by dispatching actions.
// Changes are made using pure functions – Reducers (pure functions) specify how the state updates based on actions.


// 4. How does Redux work?
// Answer:
// Redux follows a unidirectional data flow:

// Dispatch an action → A plain JavaScript object describing what happened.
// Reducer processes the action → A pure function that takes the current state and action and returns a new state.
// Store updates the state → The new state is stored and components subscribed to Redux get updated.



// 5. What are actions, reducers, and store in Redux?
// Answer:

// Actions: Objects with a type field describing what should change (optional payload for extra data).
// Reducers: Functions that take the current state and an action, then return the new state.
// Store: The centralized state container.



export const Redux = () => {
    return (
        <div>
            <h1>Redux</h1>
            <p>Redux is a state management library for JavaScript applications, commonly used with React. It provides a centralized store to manage application state predictably, making it easier to track, debug, and manage data flow.</p>
        </div>
    )
}

// 1. What is Lazy Loading in React?
// Answer:
// Lazy loading is a technique that loads components or resources only when they are needed, instead of loading everything upfront. 
// This improves performance and reduces the initial bundle size.

// In React, React.lazy() is used for lazy loading components, and Suspense is used to show a fallback (like a loader) while the component is loading.

// import React, { lazy, Suspense } from "react";

// const LazyComponent = lazy(() => import("./MyComponent"));

// const App = () => (
//   <Suspense fallback={<div>Loading...</div>}>
//     <LazyComponent />
//   </Suspense>
// );

// 2. What is Code Splitting?
// Answer:
// Code splitting is the process of splitting JavaScript bundles into smaller chunks that are loaded only when needed. It helps reduce the initial page load time.

// React supports code splitting using:

// React.lazy() – For components
// Dynamic import() – For modules
// React Router's lazy loading – For routes
// Webpack’s splitChunks plugin – For optimizing dependencies


// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { lazy, Suspense } from "react";

// const Home = lazy(() => import("./Home"));
// const About = lazy(() => import("./About"));

// const App = () => (
//   <Router>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Suspense>
//   </Router>
// );

// LifeCycle methods

// 1) Mounting Phase (When a component is created and inserted into the DOM)
// constructor(props) – Initializes state and binds event handlers.
// componentWillMount() (⚠️ Deprecated) – Runs before mounting, not recommended.
// render() – Returns the UI elements to be displayed.
// componentDidMount() – Runs after the component mounts, useful for API calls and subscriptions.

// 2) Updating Phase (When props or state change)
// componentWillReceiveProps(nextProps) (⚠️ Deprecated) – Runs when new props are received, replaced by getDerivedStateFromProps().
// shouldComponentUpdate(nextProps, nextState) – Determines if re-rendering should occur (used for performance optimization).
// componentWillUpdate(nextProps, nextState) (⚠️ Deprecated) – Runs before rendering new changes, replaced by getSnapshotBeforeUpdate().
// render() – Re-renders the UI based on updated state or props.
// componentDidUpdate(prevProps, prevState) – Runs after the update, useful for data fetching or DOM updates.

// 3) Unmounting Phase (When a component is removed from the DOM)
// componentWillUnmount() – Used for cleanup, such as removing event listeners or canceling API calls.


//Virtual DOM

// Virtual DOM in React
// The Virtual DOM (VDOM) is a lightweight copy of the real DOM that React uses to improve performance. 
// Instead of updating the actual DOM directly, React first updates the Virtual DOM, calculates the differences, and 
// then efficiently updates only the necessary parts of the real DOM.

// 1) Reconciliation
// Reconciliation is the process React uses to update the Virtual DOM and sync it with the real DOM efficiently. It follows these steps:

// React creates a new Virtual DOM tree when state or props change.
// It compares the new Virtual DOM with the previous one using the Diffing Algorithm.
// Only the changed elements are updated in the real DOM, minimizing performance costs.

// 2) React Fiber
// React Fiber is a complete rewrite of React’s reconciliation algorithm introduced in React 16. 
// It improves rendering performance by:

// Breaking rendering into small units of work that can be paused, resumed, or prioritized.
// Supporting asynchronous rendering for smoother UI updates.
// Enhancing animations, transitions, and responsiveness.
// With Fiber, React can work on updates in the background without blocking the UI, making it more efficient than the old reconciliation algorithm.

// 3) Component Renders
// A React component re-renders when:

// Its state changes (setState or useState).
// It receives new props from a parent component.
// Its context updates (useContext).
// The force update method (forceUpdate()) is called in class components.
// Optimizations to prevent unnecessary renders:

// React.memo – Prevents re-renders if props haven’t changed.
// shouldComponentUpdate – Controls rendering in class components.
// useCallback/useMemo – Optimizes function and value references in functional components.

// 4) Diffing Algorithm
// React’s Diffing Algorithm determines the minimal number of changes needed when updating the Virtual DOM.

// Key Optimizations in React’s Diffing Algorithm:
// Element Type Comparison – If elements have different types (e.g., <div> to <p>), React replaces the old node completely.
// Key-Based Reordering – When lists are updated, React uses keys to match elements efficiently and avoid unnecessary re-renders.
// Efficient Tree Diffing – React only compares elements at the same level to avoid deep tree traversal, improving performance.



// SSR (Server-Side Rendering) vs CSR (Client-Side Rendering)
// SSR (Server-Side Rendering) and CSR (Client-Side Rendering) are two different rendering approaches in React and other frontend frameworks.

// Rendering Type	Description
// SSR (Server-Side Rendering)	The server processes the request, generates the HTML, and sends it to the client. 
// The browser then hydrates the page with JavaScript.
// CSR (Client-Side Rendering)	The browser first loads a minimal HTML file and 
// then fetches JavaScript to build the UI dynamically on the client side.

// 1) SEO (Search Engine Optimization)
// SSR: ✅ Better SEO since search engines can easily crawl pre-rendered HTML.
// CSR: ❌ Weaker SEO because content is loaded via JavaScript, which some crawlers struggle to index.
// Use Case: SSR is preferred for SEO-heavy pages (blogs, e-commerce, marketing sites).

// 2) Performance
// SSR:
// Faster initial load time (pre-rendered HTML is sent to the browser).
// Slower for subsequent interactions since the page needs to hydrate before becoming fully interactive.
// Better for low-speed networks as users see content faster.
// CSR:
// Slower initial load time (browser downloads JavaScript and builds the UI).
// Faster for subsequent navigation (no need to reload the entire page).
// Better for web apps with high interactivity (e.g., dashboards, SPAs).

// When to Use What?
// Scenario	Best Choice
// SEO is important (e.g., blogs, e-commerce)	SSR
// Faster initial page load required	SSR
// Interactive web apps (e.g., dashboards, admin panels)	CSR
// Complex UI with frequent state changes	CSR


// 4) Promises
// Promises represent the result of an async operation that may succeed or fail.
// States of a Promise:
// Pending (initial state)
// Resolved (Fulfilled) (success)
// Rejected (error occurred)
// Handled using .then(), .catch(), or async/await.


// 1) What is React Router?
// React Router is a standard library for handling navigation in React applications. 
// It allows creating single-page applications (SPA) with multiple views while keeping the UI in sync with the URL.

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import NotFound from "./NotFound";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="*" element={<NotFound />} /> {/* 404 Page */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// The path="*" route handles unknown routes (404 pages).

// 2) What are Protected Routes in React? How do you implement them?
// Protected routes ensure that only authenticated users or users with the correct roles/permissions can access certain pages.

// Example of Protected Route Component

// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ element, isAuthenticated }) => {
//   return isAuthenticated ? element : <Navigate to="/login" />;
// };

// <Routes>
//   <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} isAuthenticated={userLoggedIn} />} />
//   <Route path="/login" element={<Login />} />
// </Routes>


// 4) What are Query Parameters in React Router? How do you use them?
// Query parameters allow dynamic values to be passed in the URL (e.g., ?id=123).

// Example: Reading Query Params in a Component

// import { useSearchParams } from "react-router-dom";

// const ProductPage = () => {
//   const [searchParams] = useSearchParams();
//   const productId = searchParams.get("id"); // Extract query param

//   return <div>Product ID: {productId}</div>;
// };



