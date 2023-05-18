import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatBox from "./components/ChatBox";
import Maps from "./components/Map";
import AboutUs from './components/AboutUs'; 
import { Link } from "react-router-dom";



function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Router>
      <Link to="/Welcome">
          <button className="homebutton">Go to home</button>
        </Link>
        <div className="content-container">
          <div className="navbar-spacer" />
          <Routes>
            <Route path="/Welcome" element={<>
              <NavBar />
              {!user ? <Welcome /> : <ChatBox />}
            </>} />
            <Route path="/Map" element={<Maps />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;




