import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

function IndividualIntervalsExample() {
  return (
    <Container>
    <Carousel mb-5>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 "
          src="http://josephinstudiof.in/wp-content/uploads/2022/03/blog-2.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-80"
          src="https://wedbook.in/wp-content/uploads/2021/08/Best-Wedding-Photographers-In-Hyderabad.jpg"
          alt="Second slide"
        />
        </Carousel.Item >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-80"
          src="https://i2.wp.com/shotmemories.com/wp-content/uploads/2021/06/SMP00016-scaled.jpg?fit=2560%2C1707&ssl=1"
          alt="Third slide"
        />
        </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default IndividualIntervalsExample;