import Carousel from "react-bootstrap/Carousel";
const renderImages = [
//   {
//     "image": require("./imagens/fundo.png"),
//     "title":"imagem1",
//     "subtitle":"imagem1"
// },
{
    "image":"https://upload.wikimedia.org/wikipedia/commons/0/06/Vale_dos_Dinossauros%2C_Sousa%2C_Para%C3%ADba.jpg",
    "title":"imagem1",
    "subtitle":"imagem1"
},
// {
//     "image":require("./imagens/dino3.jpeg"),
//     "title":"imagem1",
//     "subtitle":"imagem1"
// },
// {
//     "image":require("./imagens/dino4.jpeg"),
//     "title":"imagem1",
//     "subtitle":"imagem1"
// }

]

function Slider({slides}) {
  return (
    <Carousel className="fristcarousel" >
      {renderImages.map((slide) => (
        <Carousel.Item key={slide.image}>
          <img 
            style={{width:"99vw",objectFit:"cover"}}
           src={slide.image} 
            alt="First slide" />
          <Carousel.Caption>
            <h5>{slide.title}</h5>
            <p>{slide.subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
