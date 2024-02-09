import Button from "../Button/Button";
import { useState, useEffect } from "react";

function Item(props) {
    var i = 20;
    const [name, setName] = useState("Harifyyyyy");
    const [number, setNumber] = useState("03");

    useEffect(()=>{
        setNumber(i);
    })

    const saka = () =>{
        setName('Hariajjaaaa');
        setNumber(i+1);
    }

    return (
        <>
            <p>Name : {name}{props.number}</p>
            <Button saka = {saka} name={props.name +" "+ props.number}/>
        </>
    );
}

export default Item;
