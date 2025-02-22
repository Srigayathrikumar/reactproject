import "./App.css";
import {useState} from "react";
export default function AddItem({addItemFun}){
    const [name,setName]=useState("");
    const [quantity,setQuantity]=useState("");
    const [price,setPrice]=useState(0);
    function onItemSubmit(e){
        e.preventDefault();
        console.log("Submitted");
        const item={name,quantity,price};
        addItemFun(item);
        console.log(item);
    }
    return (
    <div>
        <form className="add-item" onSubmit={onItemSubmit}>
            <div>
                <label>Item name: </label>
                <input type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div>
                <label>Quantity: </label>
                <select value={quantity}
                onChange={(e)=>setQuantity(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>
            <div>
                <label>Price: </label>
                <input type="number" value={price}
                onChange={(e)=>setPrice(e.target.value)}></input>
            </div>
            <button className="btn">Add Item</button>
        </form>
    </div>
    );
}