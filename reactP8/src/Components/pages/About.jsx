import Collaps from "../Collaps";
import text from "../../data/text.json";

const About = () => {
  return (
    <div className="about">
      <div className="banner">
        <img src="/src/assets/images/Montagne.png" alt="image d'une montagne" />
      </div>
      <div className="detail">
        {text.map((item, index) => (
          <div key={index} className="title">
            <Collaps title={item.title}>
              <div className="content">
                <p>{item.description}</p>
              </div>
            </Collaps>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
