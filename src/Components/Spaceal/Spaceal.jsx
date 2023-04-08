import React, { useContext } from 'react';
import { RingContact } from '../Grandar/Grander';

const Spaceal = ({ring}) => {
     const level=useContext(RingContact)
     return (
          <div>
          {/* <h1> {ring}</h1>   */}
          <h1> {level}</h1>
          </div>
     );
};

export default Spaceal;