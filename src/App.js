import logo from "./images/logo.png";
import YouTube from "./images/youtube.png";
import Instagram from "./images/instagram.png";
import TikTok from "./images/tiktok.png";
import Facebook from "./images/facebook.png";
import "./App.css";

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="app-container">
      <div className="logo">
        <img
          className="logoImg"
          src={logo}
          alt="Logo de l'équipe de karting AMB Racing Team"
        />
      </div>
      <div>
        <p className="textSubtitle">
          Notre site arrive bientôt - <br /> restez connectés !
        </p>
      </div>
      <div>
        <ul className="socials">
          <li>
            <a href="https://www.youtube.com/@AbdelMalikBOUALI">
              <img src={YouTube} alt="Logo YouTube" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ambouali13">
              <img src={Instagram} alt="Logo Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@ambouali13">
              <img src={TikTok} alt="Logo TikTok" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/AMBOUALI">
              <img src={Facebook} alt="Logo Facebook" />
            </a>
          </li>
        </ul>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
