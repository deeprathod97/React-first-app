import { useState } from 'react';
import './card.css'


function Card({img,name,price}) {
    const [count, setCount] = useState(0);
    

    const inc = () => {
        setCount(count + 1)
    }

    const dec = () =>{
        setCount(count - 1)
    }
    return (
        <>
        
         <section id="card">
            
           <div className="card">
            <img src={img} className='imd'/>
             <h2>{name}</h2>
             <p>${price}</p>

               <div className="btn">
               <button onClick={inc}>+</button>
                 {count}
             <button onClick={dec}>-</button>
               </div>
             
           </div>     
           </section>
       </>

    );
}

 export default Card;
