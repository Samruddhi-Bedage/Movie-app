1. useState() — Managing Component State
   useState is used to store and update values that change over time in a component.

How They Work:

count → tracks how many times the user clicks the card.
setCount(count + 1) updates this value every time the card <div> is clicked.
hasLiked → keeps track of whether the user has liked the card or not.

Each call to setCount or setHasLiked re-renders the component so the UI stays in sync with the current state.

2. useEffect() — Running Side Effects
   useEffect lets you run code after React renders the component — useful for logging, fetching data, subscriptions, etc.

(a) Tracking “like” changes
Runs only when hasLiked changes.
Logs a message showing whether the specific movie (title) has been liked.
[hasLiked] is the dependency array → React runs this effect only when that state value changes.

(b) On initial render (mount)
Runs only once — when the card first appears on the screen.
The empty dependency array ([]) tells React to run it only on mount.
Used here to confirm that the component has rendered successfully.

3. Conditional Rendering Example
   <h2>{title} <br /> {count ? count : null}</h2>

This shows the count value only if it’s greater than 0 — otherwise, it shows nothing (null).
