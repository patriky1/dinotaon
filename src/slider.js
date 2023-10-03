import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom';

const renderImages = [

{
    "image":"https://upload.wikimedia.org/wikipedia/commons/0/06/Vale_dos_Dinossauros%2C_Sousa%2C_Para%C3%ADba.jpg",
    "title":"VALE DOS DINOSSAUROS",
     route: '/vale',
    
},
{
     "image":require("./imagens/igreja.jpg"),
     "title":"IGREJA MATRIZ",
     route: '/igrejas',
 },
 {
  "image":require("./imagens/igrejaBJ.jpg"),
  "title":"IGREJA BOM JESUS",
   route: '/igrejas',
},


]

function Slider() {
  return (
    <Carousel className="fristcarousel" >
      {renderImages.map((slide) => (
        <Carousel.Item key={slide.image}>
          <img 
            style={{width:"100vw",objectFit:"inherit"}}
           src={slide.image} 
            alt="First slide" />
          <Carousel.Caption>
          <Link className='nav-link' to={slide.route}><h5>{slide.title}</h5></Link>
            
            
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
