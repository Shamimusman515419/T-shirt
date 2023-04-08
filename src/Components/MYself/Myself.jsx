import React from 'react';
import Spaceal from '../Spaceal/Spaceal';

const Myself = ({ring}) => {
     return (
          <div className=' border-2 border-blue-500 m-2'>
              <h1> myself </h1> 
              <Spaceal ring={ring}></Spaceal>
          </div>
     );
};

export default Myself;