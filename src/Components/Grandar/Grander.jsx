import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Auntry from '../Untry/Auntry';
import Uncale from '../Uncle/Uncale';
export const RingContact = createContext("gold");
export const MoneyConatext=createContext(0)
const Grander = () => {
     let ring = "GoldenRing"
      const [monay,setmonay]=useState(0)

     return (
          <div className=' text-center'>
              <MoneyConatext.Provider value={[monay,setmonay]}>
               <RingContact.Provider value='Ring Gold'>
                    <h1> Grander page </h1>
                    <p> as money {monay}</p>

                     <section className=' border-2 border-blue-700 flex justify-around gap-4'>
                         <Father ring={ring}></Father>
                         <Auntry></Auntry>
                         <Uncale> </Uncale>

                    </section>
               </RingContact.Provider>
               </MoneyConatext.Provider>
          </div>
     );
};

export default Grander;