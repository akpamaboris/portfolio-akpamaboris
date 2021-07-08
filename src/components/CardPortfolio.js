import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader for react-responsive-carousel

const CardPortfolio = ({
  title,
  image1,
  image2,
  image3,
  description,
  link,
}) => {
  return (
    <div className="cardPortfolio">
      <h1 className="cardTitle">{title}</h1>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={1500}
        stopOnHover={true}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img className="cardCaroussel" alt="element image1" src={image1} />
        </div>
        <div>
          <img className="cardCaroussel" alt="element image2" src={image2} />
        </div>
        <div>
          <img className="cardCaroussel" alt="element image3" src={image3} />
        </div>
      </Carousel>
      <p className="cardDescription">
        {description}
        <p style={{ marginTop: "20px" }}>
          See it live{" "}
          <a href={link} target="_blank" rel="noreferrer">
            CLICK HERE
          </a>
        </p>
      </p>
    </div>
  );
};

export default CardPortfolio;
