import AddItem from './AddItem';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';
import SearchItem  from './SearchItem';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');


  const addItem = (item)=>{
    const id = (items.length) ? (items[items.length-1].id+1): 1;
    const myNewItem = {id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSave(listItems);
  }
  const setAndSave = (items)=>{
    setItems(items);
    localStorage.setItem('shoppinglist',JSON.stringify(items))

  }
  const handleSubmit = (e)=>{
    e.preventDefault(); 
    //to prevent reloading the page note that react is used to create single page apps
    if(!newItem) return; // if empty exist
    addItem(newItem);
    setNewItem('') //to remove the text after submitting
  


  }

  const HandleCheck = (id) =>{
      const listItems = items.map(
        (item)=> item.id === id ? {...item, checked : !item.checked} : item 
      );
      setAndSave(listItems);
    }
  
  const HandleDelete = (id) =>{
    const listItems = items.filter(
      (item)=> item.id !== id
    );
    setAndSave(listItems);
    
  }
  
  const selectedItems = items.filter(
    (item) => item.checked
  )
  return (
    <div className="App">
      <Header title="Grocery List"
            length={selectedItems.length}
            items={items} 
            />
      
        <SearchItem
        search = {search}
        setSearch = {setSearch} />
        <AddItem
        newItem= {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
         />
        <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
        HandleCheck={HandleCheck} 
        HandleDelete={HandleDelete} 
        />

      <Footer/>
    </div>
  );
}

export default App;
