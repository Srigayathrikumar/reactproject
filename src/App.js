import Header from "./Header";
import {useState} from "react";
import "./App.css";
import AddItem from "./Additem";
import ListItem from "./ListItem";
import Footer from "./Footer";
function App(){
  const [items,setItems]=useState([]);
  function addItemFun(newItem){
    setItems((items)=>[...items,newItem]);
    console.log(items);
  }
  function itemSelected(id){
    return setItems((items)=>{
      return items.map((item)=>{
        return item.id==id?{...item,selected:!item.selected}:item
      });
    });
  }

  function deleteItem(id){
    return setItems((items) => {
      return items.filter((item)=>item.id !=id);
    });
  }

  return (
    <div>
    <Header/>
    <AddItem addItemFun={addItemFun}/>
    <ListItem items={items} itemSelected={itemSelected} deleteItem={deleteItem} />
    <Footer items={items}/>
    </div>
  );
}
export default App;