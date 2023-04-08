import React from 'react';

const Card = ({card,RemoveCard}) => {
    
     const {name,_id}=card;

  
     return (
          <div className=' flex gap-2'>
               <h1 className=' text-3xl font-bold my-3'> {name}</h1>  
               <button onClick={ ()=>RemoveCard(_id)} className='  bg-red-500 text-white px-2  rounded-md text-2xl font-bold'> Delete</button> 
          </div>
     );
};

export default Card;