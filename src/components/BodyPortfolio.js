import CardPortfolio from "./CardPortfolio";

//IMPORT IMAGES

//1-FOR THE CHAT APPLICATION
import image1Chat from "../ressources/ChatMessenger/image1-chat.png";
import image2Chat from "../ressources/ChatMessenger/image2-chat.png";
import image3Chat from "../ressources/ChatMessenger/image3-chat.png";

//2-FOR THE DELIVEROO APPLICATION
import image1Deliveroo from "../ressources/Deliveroo/image1-deliveroo.png";
import image2Deliveroo from "../ressources/Deliveroo/image2-deliveroo.png";
import image3Deliveroo from "../ressources/Deliveroo/image3-deliveroo.png";

//3-FOR THE VINTED APPLICATION
import image1Vinted from "../ressources/Vinted/image1-vinted.png";
import image2Vinted from "../ressources/Vinted/image2-vinted.png";
import image3Vinted from "../ressources/Vinted/image3-vinted.png";

//4-FOR THE MARVEL APPLICATION
import image1Marvel from "../ressources/Marvel/image1-marvel.png";
import image2Marvel from "../ressources/Marvel/image2-marvel.png";
import image3Marvel from "../ressources/Marvel/image3-marvel.png";

const BodyPortfolio = () => {
  return (
    <div className="portfolio-place ">
      <div className="containerPortfolioCard">
        <CardPortfolio
          title="CHAT MESSENGER"
          image1={image1Chat}
          image2={image2Chat}
          image3={image3Chat}
          description="FullStack chat application made with Node.js/ Socket.io/ React /Mongoose
              Express"
          link="https://chat-app-boris.netlify.app/"
        />
        <CardPortfolio
          title="DELIVEROO CLONE"
          image1={image1Deliveroo}
          image2={image2Deliveroo}
          image3={image3Deliveroo}
          description="FullStack Deliveroo clone made with Express.js / React / Node.js"
          link="https://cocky-mccarthy-00488c.netlify.app/"
        />
      </div>
      <div className="containerPortfolioCard">
        <CardPortfolio
          title="VINTED CLONE"
          image1={image1Vinted}
          image2={image2Vinted}
          image3={image3Vinted}
          description="Frontend Vinted Application made with React"
          link="https://hardcore-golick-298b83.netlify.app/"
        />
        <CardPortfolio
          title="MARVEL CLONE"
          image1={image1Marvel}
          image2={image2Marvel}
          image3={image3Marvel}
          description="FullStack MARVEL APP  made with React/ Node.js / Express.js"
          link="https://cranky-kepler-3fa599.netlify.app/"
        />
      </div>
    </div>
  );
};

export default BodyPortfolio;
