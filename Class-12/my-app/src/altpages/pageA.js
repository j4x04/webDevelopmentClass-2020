import React, {useState, useEffect} from 'react';
import '../App.css';


const PageA = (props) => {
    //const [name, setName] = useState("1");
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
