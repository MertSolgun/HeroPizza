import Carousel from "react-bootstrap/Carousel";
import Pizza1 from "../components/pizza1.jpg";
import Pizza2 from "../components/pizza2.jpeg";
import Pizza3 from "../components/pizza3.jpeg";

function Home() {
  return (
    <Carousel data-bs-theme="dark" className="carousel">
      <Carousel.Item>
        <img className="d-block w-100" src={Pizza1} alt="First slide" />
        <Carousel.Caption>
          <h5>
            Where Pizza Becomes Art! <br></br>Hero Pizza
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Pizza2} alt="Second slide" />
        <Carousel.Caption>
          <h5>Quality service.</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Pizza3} alt="Third slide" />
        <Carousel.Caption>
          <h5>Reasonable price.</h5>
          <p className="fresh">Fresh products..</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
