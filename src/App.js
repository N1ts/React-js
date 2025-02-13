import AnimalShow from './AnimalShow';

const handleClick = ()=>{
    console.log("Button was clicked!")
}

function App(){
    return (
        <> 
            <button  onClick={handleClick} style={{border:"2px solid", backgroundColor:"white", width: "100px", height: "30px", borderRadius: "5px", marginBottom: "20px"}}>Add Animal</button>    
            <div>
                <AnimalShow />
            </div>
        </>
        
    )
    
}

export default App;