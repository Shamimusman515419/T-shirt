import React from 'react';

const Tshirt = ({ tshirt,heandletTshirtCard }) => {
     
     const { _id, price, picture, gender,name } = tshirt
     return (
          <div className=' mx-auto my-1 border-2 border-blue-800 p-2'>
             <img className=' h-60  w-72 block mx-auto' src={picture} alt="" />
             <h1 className=' text-2xl font-semibold my-2'>Name: {name}</h1>
              <p className=' text-xl font-medium'>Price: ${price} </p>
              <p className=' text-lg font-semibold my-2'> Gender: {gender}</p>
               <button onClick={()=>heandletTshirtCard(tshirt)}  className=' w-full mx-auto text-white block bg-[#f59f00] p-2  rounded-lg text-xl font-bold'> Buy Now</button>
           </div>
     );
};

export default Tshirt;