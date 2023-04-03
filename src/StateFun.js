// rsf
import React, { useState } from 'react';

function StateFun(props) {
    const [color,setColor] = useState('white');
    const [barnd,setbarnd] = useState('vifnast');
    const [model,setmodel] = useState('vf9');
        const doimau = ()=> {
            setColor('red');
        }
    const hello = (name)=> {
 alert('xinchao'+name)
    }
    return (
        <div>
             <h1>thuonghieu{barnd}</h1>
                <h1>kieu {model}</h1>
                <h1>mau{color}</h1>
                <button onClick={ () =>doimau()}>doimau</button>
                <button onClick={ () =>hello('hihi')}>hello</button>

        </div>
    );
}

export default StateFun;