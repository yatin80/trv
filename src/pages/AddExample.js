import React, { useState } from 'react'

export default function AddExample() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');


    const handleAddItem = () => {
        setItems([...items, newItem]);
        setNewItem('');
    }
    console.log(items);

    return (
        <div>
            <input
                type='text'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
