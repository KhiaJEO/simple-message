import { useState } from "react";

function App() {
  // State
const [message, setMessage] = useState(
  "JavaScript is the best language in the world"
);

  // Actions
  function handleClick() {
    setMessage("Some new message saying something smart");
  }

  // UI
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update the message</button>
    </div>
  );
}

export default App;
