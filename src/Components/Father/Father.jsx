import React from 'react';
import Myself from '../MYself/Myself';
import Sister from '../Sister/Sister';
import Borther from '../Borther/Borther';

const Father = ({ring}) => {
     return (
          <div className=' text-center border-2 border-blue-500 m-2'>
                <h1 > father page</h1>
                <section className=' m-3 border-2 border-blue-700 flex justify-around gap-4'>
                    <Myself ring={ring}></Myself>
                     <Sister></Sister>
                     <Borther></Borther>


                </section>
          </div>
     );
};

export default Father;