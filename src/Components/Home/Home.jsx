import React, { useState } from 'react';
import Header from '../Header/Header';
import toast from 'react-hot-toast';
import { Outlet, useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Card from '../Card/Card';

const Home = () => {
  const tshirts = useLoaderData();
  const [saveTshirt, setsaveTshirt] = useState([])

  const heandletTshirtCard = (product) => {
    const exists = saveTshirt.find(ts => ts._id == product._id);
    if (!exists) {
      const newCars = [...saveTshirt, product];
      setsaveTshirt(newCars)
    } else {
      toast('Card Alredi exists try agine');
    }
  }

  const RemoveCard = (id) => {
    const removecardbox = saveTshirt.filter(pd => pd._id !== id);
    setsaveTshirt(removecardbox)
  }
let massge;
if(saveTshirt.length===0){
  massge= <h1 className=' text-xl   capitalize font-medium my-2 text-blue-500'> pleass add some product </h1>
}else{
   massge= <div>
    <h1 className=' text-xl   capitalize font-medium my-2 text-blue-500'> Boroloxxx </h1>
    <p className=' text-xl   capitalize font-medium my-2 text-blue-500'> Thanks giving for monay</p>
   </div>
}
  return (
    <div className=' grid md:grid-cols-4  gap-3'>
      <div className=' col-span-3 '>
        <div className=' grid md:grid-cols-3 gap-2 '>
          {
            tshirts.map(ts => <Tshirt tshirt={ts} key={ts._id} heandletTshirtCard={heandletTshirtCard}></Tshirt>)
          }
        </div>
      </div>
      <div className=' col-span-1' >
       <h1 className= {saveTshirt.length>2 ? " font-semibold text-3xl": " text-xs font-normal"}> Card Summary </h1>
         {massge}
         <p className={` font-bold text-xl ${saveTshirt.length>3? " text-red-700":" text-blue-700"}`}> add prduct</p>
         
        <div>
          {
           
           saveTshirt.map(card => 
              
              <Card card={card} key={card._id} RemoveCard={RemoveCard}></Card>
            
            
           )
          }

          {
           saveTshirt.length ===2 && <p> Dobule hoye gese </p> 
          }
          {
           saveTshirt.length ===3 || <p> thine ta to holo na </p> 
          }
        </div>
      </div>
    </div>
  );
};

export default Home;



