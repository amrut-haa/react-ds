import searchIcon from "../assets/magnifying-glass.svg";
import houseIcon from "../assets/house.svg";
import filmIcon from "../assets/film-slate.svg";
import monitorIcon from "../assets/monitor.svg";
import trendIcon from "../assets/trend-up.svg";
import plusIcon from "../assets/plus.svg";
import janaganamana from "../assets/janaganamana.png";
import Moviecard from "../components/Moviecard";
import "./home.css";

function Home() {
  return (
  <div className="netflix">
    <div className="sidebar">
      <img src={searchIcon} alt="searchIcon" />
      <img src={houseIcon} alt="houseIcon" />
      <img src={filmIcon} alt="filmIcon" />
      <img src={monitorIcon} alt="monitorIcon" />
      <img src={trendIcon} alt="trendIcon" />
      <img src={plusIcon} alt="plusIcon" />
    </div>
    <div className="main">
      <div className="hero">
        <img src={janaganamana} alt="janaganamana" />
        <p>Rating : 10/10</p>
        <p>2M streams</p>
        <div className="h-button">
          <button className="b1">Play</button>
          <button className="b2">Watch Trailer</button>
        </div>
      </div>
      <Moviecard Mtitle="New This Week"/>
      <Moviecard Mtitle="Trending Now"/>
      <Moviecard Mtitle="Recently Watched"/>

    </div>
  </div>
  )
} 

export default Home