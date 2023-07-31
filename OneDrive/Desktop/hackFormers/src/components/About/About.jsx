import Card from "../../ui/Card";
import "./About.css";
import swordImg from "../../assets/sword.png";

export default function About({ about }) {
  return (
    <Card>
      <div className="about_container" id="about">
        <div className="title_container">
          <img src={swordImg} alt="swordImg" />
          <h1>about</h1>
        </div>
        <div className="about_content">
          <p>{about}</p>
        </div>
      </div>
    </Card>
  );
}
