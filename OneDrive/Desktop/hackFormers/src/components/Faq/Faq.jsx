import Card from "../../ui/Card";
import "./Faq.css";
import { useState } from "react";
import { questions } from "../../utils/Questions";
import swordImg from "../../assets/sword.png";

function Faq() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <Card>
      <div className="title_container">
        <img src={swordImg} alt="swordImg" />
        <h1>faq</h1>
      </div>
      <div className="faq_container" id="faq">
        <div className="wrapper">
          <div className="accordion">
            {questions.map((item, i) => (
              <div className="item" onClick={() => toggle(i)}>
                <div className="title">
                  <h2>{item.question}</h2>
                  <span className="cross">{selected === i ? "-" : "+"}</span>
                </div>
                <div className={selected === i ? "content showItem" : "content"}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Faq;
