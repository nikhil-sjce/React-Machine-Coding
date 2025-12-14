export const HTML = () => {
    return (
        <>
            <h1>hello</h1>
        </>
    )
}

// What is <!DOCTYPE> and What Does It Do?
// 📌 <!DOCTYPE> (Document Type Declaration) tells the browser which version of HTML to use when rendering a webpage.


// Feature	Cookies 🍪	sessionStorage 🕒	localStorage 📦
// Storage Limit	~4KB per cookie	~5MB	~5MB
// Expiration	Can have an expiration date	Clears on tab/browser close	Persists until manually cleared
// Scope	Sent with every HTTP request	Only available for the session	Available until cleared
// Access	Available on client & server	Only on the client	Only on the client
// Use Cases	Authentication tokens, user preferences	Temporary session data	Long-term storage of settings, user preferences


// What Are Empty Elements in HTML?
// 🔹 Empty elements (also called void elements) are HTML elements that do not have closing tags and cannot contain any content or child elements.
// <br>	Line break (creates a new line)
// <hr>	Horizontal rule (divider line)
// <img>	Embeds an image