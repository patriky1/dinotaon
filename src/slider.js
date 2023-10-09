import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom';

const renderImages = [
  {
    "image": require("./imagens/entrada.jpeg"),
    "title": "VALE DOS DINOSSAUROS",
    "route": '/vale',
  },
  {
    "image": require("./imagens/igreja.jpg"),
    "title": "IGREJA MATRIZ",
    "route": '/igrejas',
  },
  {
    "image": require("./imagens/igrejaBJ.jpg"),
    "title": "IGREJA BOM JESUS",
    "route": '/igrejas',
  },
  {
    "image": require("./imagens/Cc.jpg"),
    "title": "CENTRO CULTURAL",
    "route": '/centroc',
  },
  {
    "image": require("./imagens/SG.jpg"),
    "title": "SÃO GONÇALO",
    "route": '/SGoncalo',
  },
  {
    "image": require("./imagens/MAM.jpeg"),
    "title": "MEMORIAL ANTÔNIO MARIZ",
    "route": '/memorial',
  },
  {
    "image": require("./imagens/FREIDM.jpeg"),
    "title": "ESTÁTUA FREI DAMIÃO",
    "route": '/EstFD',
  },
];

function Slider() {
  return (
    <Carousel className="fristcarousel">
      {renderImages.map((slide) => (
        <Carousel.Item key={slide.image}>
          <img
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
            src={slide.image}
            alt="Slide"
          />
          <Carousel.Caption>
            <Link className='nav-link' to={slide.route}>
              <Button variant="dark" size="lg">{slide.title}</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
