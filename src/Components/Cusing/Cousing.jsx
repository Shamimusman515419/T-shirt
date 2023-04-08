import React, { useContext } from 'react';
import { MoneyConatext } from '../Grandar/Grander';

const Cousing = ( { children }) => {
const [monay,setmonay]=useContext(MoneyConatext)
     return (
          <div className=' text-center border-2 border-blue-500 m-2'>
                <p>money ${monay} </p>
               {children}   
          </div>
     );
};

export default Cousing;