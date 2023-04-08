import React, { useContext } from 'react';
import { RingContact } from '../Grandar/Grander';

const Sister = () => {
     const lavel=useContext(RingContact)
     return (
          <div className=' border-2 border-blue-500 m-2'>
              <h1> sister</h1>  
              <p> {lavel}</p>
          </div>
     );
};

export default Sister;