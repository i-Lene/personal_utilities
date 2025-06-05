import { Link } from "react-router";
import homeImg from "/images/home.gif";
import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home">
      <div className="text-wrapper">
        <h1>Welcome to the Utils App</h1>
        <div className="actions">
          <Link className="home-btn" to="/todo">
            Go to Todo List  <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <Link className="home-btn" to="/blog">
            Go to Blog <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <Link className="home-btn" to="/weather">
            Go to Weather Tab  <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
      <div className="img-wrapper">
        <img src={homeImg} alt="Home" />
      </div>
    </div>
  );
}

export default Home;
