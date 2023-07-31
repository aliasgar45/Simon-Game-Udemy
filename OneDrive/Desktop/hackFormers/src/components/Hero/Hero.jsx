import Card from "../../ui/Card";
import "./Hero.css";

export default function Hero({ heroImg, registerLink, schedule }) {
  return (
    <Card>
      <div className="h_container" id="home">
        <div className="hero_container">
          <img src={heroImg} alt="" />
          <div className="meta">
            <div className="date">{schedule}</div>
            {/* <img src="src\assets\Vector.png" alt="" /> */}
            {/* <div className="time">
              <i className="fa fa-star"></i>
              10:00 A.M - 5:00 P.M
            </div> */}
            {/* <img src="src\assets\Vector.png" alt="" /> */}
            <div className="location">
              <p>Terna College</p>
            </div>
          </div>
          <button className="glow-on-hover">
            <a href={registerLink} target="__blank">
              Register Now
            </a>
          </button>
        </div>
      </div>
    </Card>
  );
}
