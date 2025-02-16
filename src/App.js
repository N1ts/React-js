import "./App.css"
import AnimalShow from './AnimalShow';
import {useState} from 'react';

const getRandomAnimal = ()=>{
    // getting a random animal from the animals array
    let animals = ['bird', 'cat', 'dog', 'gator', 'horse']
    return animals[Math.floor(Math.random()*animals.length)]
}

function App(){
    const [animals, setAnimals] = useState([])

    const handleClick = ()=>{
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index)=>{
        // with each iteration AnimalShow component will be called with a new {type} props
        // parent to child communication
        return <AnimalShow type = {animal} key={index} />
    })

    return (
        <> 
        <div className='app'>
            <button onClick={handleClick} className="btn">Add Animal</button>    
            <div>
                <div className="animal-list">{renderedAnimals}</div>
            </div>
        </div>
        </>
        
    )
    
}

export default App;