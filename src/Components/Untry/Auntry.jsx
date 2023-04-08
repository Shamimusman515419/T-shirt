import React, { useContext } from 'react';
import Cousing from '../Cusing/Cousing';
import { MoneyConatext } from '../Grandar/Grander';

const Auntry = () => {
     const [monay,setmonay]=useContext(MoneyConatext)
     return (
          <div className=' text-center border-2 border-blue-500 m-2'>
              <h1>auntry</h1> 
              <p> untry monay ${monay}</p>
              <section className=' m-3 border-2 border-blue-700 flex justify-around gap-4'>
              <Cousing>  Abir </Cousing> 
              <Cousing>  Masud </Cousing> 
              <Cousing>  Khab </Cousing> 
              </section>
          </div>
     );
};

export default Auntry;