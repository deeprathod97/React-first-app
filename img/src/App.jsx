import './App.css'
import Card from './componets/Card';
import C from './assets/c.jpg';
import Html from './assets/html.jpg';
import Css from './assets/css.jpg';
import Express from './assets/express.jpg';
import Js from './assets/js.jpg';
import Mongodb from './assets/mongodb.jpg';
import Nodejs from './assets/nodejs.jpg';
import Php from './assets/php.jpg';
import Python from './assets/python.jpg';
import Reactjs from './assets/reactjs.jpg';

    

     


const data = [
  {
    img : C,
    name : "C",
    price : "100"
  },
  {
    img : Html,
    name : "Html",
    price : "200"
  },
  {
    img : Css,
    name : "Css",
    price : "300"
  },
  {
    img : Express,
    name : "Express",
    price : "400"
  },
  {
    img : Js ,
    name : "Js",
    price : "500"
  },
  {
    img : Mongodb,
    name : "Mongodb",
    price : "500"
  },
  {
    img : Nodejs,
    name : "Nodejs",
    price : "600"
  },
  {
    img : Php,
    name : "Php",
    price : "700"
  },
  {
    img : Python,
    name : "Python",
    price : "700"
  },
  {
    img : Reactjs,
    name : "Reactjs",
    price : "700"
  },
]

function App(){
    return(
      <>
      <h1 className='h1'>programming languages</h1>
      <section className='cardWrapper'>
        
          { data.map((card, index)=>(
             <Card
             key={index}
             img={card.img}
             name={card.name}
             price={card.price} />
          ))}
      </section>
      </>
    

        )

      }


export default App;

