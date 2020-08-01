import React, {useState, useEffect, useContext} from 'react';
import '../App.css';
import RootContext from '../RootContext'



const PageA = (props) => {
    const [count, plusOne] = useState(0);
    useEffect(() => {
        document.title = `${count}`;
    });

    return (
        <div>
            {count}
            <div onClick = {()=> plusOne(count + 1)}>Add 1</div>
        </div>
    )
}
 

export default PageA;
