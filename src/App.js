import { useEffect, useState } from "react"

const STORAGE_KEY = 'shopping-list'

const App = () => {

    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const [items, setItems] = useState([])

    useEffect(() => {
        const tempList = localStorage.getItem(STORAGE_KEY)
        
        if (tempList != null) {
            setItems(JSON.parse(tempList))
        }
    }, [])

    const addItem = () => {
        const item = {
            amount, description
        }

        const newItems = [...items, item]
        
        setItems(newItems)
        setAmount('')
        setDescription('')

        localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems))
    }

    return (
        <div>
            <h1>Shopping List</h1>

            Adicione um item: <br />

            <input type="number" value={amount}
                onChange={event => setAmount(event.target.value)} />
            <input type="text" size="40" value={description}
                onChange={event => setDescription(event.target.value)} />

            <input type="button" value="+" onClick={addItem}/>

            <ul>
                {
                    items.map( (item, index) => (
                        <li key={index}>{item.amount} - {item.description}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default App;
