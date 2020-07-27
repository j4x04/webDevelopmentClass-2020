import React, {useState, useEffect} from 'react';
import '../App.css';


const PageB = (props) => {
    const [name, setName] = useState("a");

    return (
        <div>
            {name}
            <div onClick = {()=> setName(name + 'a')}>Click Here to add 'a' to the end</div>
        </div>
    )
}


export default PageB;
