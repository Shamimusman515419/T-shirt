import React, { useContext } from 'react';
import Cousing from '../Cusing/Cousing';
import { MoneyConatext } from '../Grandar/Grander';

const Uncale = () => {

     const [monay,setmonay]=useContext(MoneyConatext)
     return (
          <div className=' text-center border-2 border-blue-500 m-2'>
                <h1> Uncale page</h1>
                <p> Uncale money ${monay}</p>
                <button onClick={()=>setmonay(monay + 100)}> give 100tk </button>
                <section className=' border-2 border-blue-700 flex justify-around gap-4'>
              <Cousing>  Masud </Cousing> 
              <Cousing>  Raihan </Cousing> 
              <Cousing>  Kilimullah </Cousing> 
              </section>
          </div>
     );
};

export default Uncale;