// src/App.js
import { app, db } from "./firebase/firebaseConfig";

function App() {
  console.log("✅ Firebase app object:", app);       // Logs the app object
  console.log("✅ Firestore database object:", db);  // Logs Firestore object

  return (
    <div>
      <h1>Intern Portal</h1>
      <p>Check the console to see if Firebase & Firestore are connected.</p>
    </div>
  );
}

export default App;