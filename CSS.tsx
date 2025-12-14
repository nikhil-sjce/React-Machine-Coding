export const CSS = () => {
    return (
        <>
            <h1>hello</h1>
        </>
    )
}

//  CSS

// .parent {
//     display: flex;
//     justify-content: center;  /* Centers horizontally */
//     align-items: center;  /* Centers vertically */
//     height: 100vh;  /* Full viewport height */
//   }

// .parent {
//     display: grid;
//     place-items: center;  /* Centers both horizontally & vertically */
//     height: 100vh;
// }

// .child {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
// }
  
// 1) Components of the Box Model
// Each HTML element is represented as a rectangular box consisting of:

// Component	Description
// Content	The actual text, image, or other content inside the element.
// Padding	Space between the content and the border.
// Border	Surrounds the padding and content.
// Margin	Space outside the border, separating the element from others.

// .box {
//     width: 200px;
//     height: 100px;
//     padding: 20px;
//     border: 5px solid black;
//     margin: 10px;
//   }
  
  
//   🔹 Total width = width + padding + border + margin
//   🔹 Total height = height + padding + border + margin

// How does box-sizing: border-box affect the box model?
// 👉 It ensures that the total width/height includes padding and border, preventing layout shifts.
// .box {
//     width: 200px;
//     height: 100px;
//     padding: 20px;
//     border: 5px solid black;
//     box-sizing: border-box;  /* Ensures padding & border are included in width/height */
//   }
  
// Resetting CSS
// 🔹 Purpose: Removes all default styles applied by the browser.

// ✅ Pros:

// Provides a completely blank slate.
// Ensures styles are consistent across browsers.

// * {
// margin: 0;
// padding: 0;
// box-sizing: border-box;
// border: 0;
// outline: 0;
// background: transparent;
// }

// 2) Normalizing CSS
// 🔹 Purpose: Standardizes browser styles instead of removing them completely.

// ✅ Pros:

// Keeps useful styles like list bullets and form element appearances.
// Provides cross-browser consistency while keeping a natural look.

// html {
//     line-height: 1.15;
//     -webkit-text-size-adjust: 100%;
//   }
  
//   body {
//     margin: 0;
//   }
  
//   h1 {
//     font-size: 2em;
//     margin: 0.67em 0;
//   }
  
// What are CSS Floats and How Do They Work?
// Float is a CSS property that allows elements to be positioned to the left or right of their container while allowing other content (like text) to wrap around them.
// .image {
//     float: left;
//     margin-right: 10px;
//   }
  
//   .text {
//     overflow: hidden; /* Fix float collapsing */
//   }
  
// How to Fix Browser-Specific Styling Issues
// Start with a CSS Reset or Normalize.css
// Check Developer Tools (Inspect Elements)
// Use conditional CSS or JavaScript for browser-specific fixes

// What are the different ways to visually hide content (and make it available only for screen readers)
// Using display: none; or visibility: hidden
// Using opacity: 0; or z-index: -1;

// What are Pseudo-Elements in CSS?
// A pseudo-element is a keyword in CSS that allows you to style specific parts of an element without modifying the actual HTML.
// Key Differences: Pseudo-Elements vs. Pseudo-Classes
// Feature	Pseudo-Element (::before, ::after)	Pseudo-Class (:hover, :focus)
// Affects content?	✅ Yes (can add elements)	❌ No (only modifies existing elements)
// Uses :: or :?	✅ Uses :: (double colons)	✅ Uses : (single colon)
// Example	p::first-letter {}	button:hover {}

// Difference Between inline and inline - block in CSS
// Both inline and inline - block are display properties that control how elements are rendered, but they behave differently.
// .inline - box {
//     display: inline;
//     width: 100px; /* ❌ Won't work */
//     height: 50px; /* ❌ Won't work */
//     background: lightblue;
//     padding: 10px; /* ✅ Works horizontally, ❌ Ignored vertically */
//     margin: 10px; /* ✅ Works horizontally, ❌ Ignored vertically */
// }
//   <span class="inline-box">This is inline</span>
// <span class="inline-box">Another inline</span>
// Effect: Both elements appear next to each other, but width & height settings are ignored.

// .inline - block - box {
//     display: inline - block;
//     width: 100px; /* ✅ Works */
//     height: 50px; /* ✅ Works */
//     background: lightgreen;
//     padding: 10px; /* ✅ Works */
//     margin: 10px; /* ✅ Works */
//     text - align: center;
// }
//   <div class="inline-block-box">Block 1</div>
//   <div class="inline-block-box">Block 2</div>
//   📌 Effect: Elements appear next to each other, but now width & height work like a block element.

// 1) position: static; (Default Positioning)
// The element is not affected by top, left, right, or bottom.
// 2) position: relative; (Moves Relative to Its Normal Position)
// The element remains in the normal document flow but can be moved using top, left, right, bottom.
// 3) position: absolute; (Removes from Normal Flow & Positions Relative to Nearest Positioned Ancestor)
// The element is removed from the normal document flow (other elements ignore it).
// 4) position: fixed; (Sticks to the Viewport, Ignores Scrolling)

// 2) Using Google Fonts (Recommended for Web)
// ✅ Best for: Free, optimized, and widely used fonts.
// 📌 Steps:


// How would you implement a web design comp that uses non-standard fonts
// Go to Google Fonts.
// Select a font and copy the <link> tag.
// Add it to your HTML <head> section.
// Apply it in CSS.
// <head>
//   <link rel="preconnect" href="https://fonts.googleapis.com">
//   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//   <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
// </head>
// body {
//   font-family: 'Roboto', sans-serif;
// }


// Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why
// 1) translate(x, y) (CSS Transform) ✅
// ✅ Best for: Animations, performance optimization, and layout adjustments.
// 📌 Key Behavior:
// .moved-box {
//     transform: translate(50px, 20px); /* Moves 50px right, 20px down */
//   }
// 2) position: absolute; ✅
// ✅ Best for: Floating elements, tooltips, popups, and when elements should not affect other content.
// .absolute-box {
//     position: absolute;
//     top: 50px;
//     left: 20px;
//   }
  