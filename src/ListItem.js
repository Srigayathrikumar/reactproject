import "./App.css";
function ListItem({items,itemSelected,deleteItem}){
    const totalPrice=items.reduce((acc,item)=>{
        return (acc=acc+item.price*item.quantity);
    },0);
    if(!items.length)return <h2>No items added! Please add items.</h2>
    return (
        <div>
            <h3>ItemList</h3>{
                items.map((item)=>(
                    <ItemDisplay item={item} itemSelected={itemSelected} deleteItem={deleteItem} />
                ))
                    
                }
                <div>Total Price: {totalPrice}</div>

            
        </div>
    );

    
}
function ItemDisplay({item,itemSelected,deleteItem}){
    return (
        <div className="item">
            <div>
                <input type="checkbox" checked={item.selected} 
                onChange={()=>itemSelected(item.id)}/>
            </div>
            <div>{item.name}</div>
            <div>{item.quantity}</div>
            <div>{item.price}</div>
            <div>{item.quantity*item.price}</div>
            <div onclick={()=>deleteItem(item.id)}>x</div>
        </div>
    );
}
export default ListItem;