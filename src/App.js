import ProfileCard from './ProfileCard';
import Alexa from '../images/alexa.png';
import Cortana from '../images/cortana.png';
import Siri from '../images/siri.png';

function App(){
    return (
        <>
        <div style={{fontSize: '25px', backgroundColor: "#c5e8db", padding: "15px", marginBottom: "20px", border: "3px #82f5c9", borderStyle: "Solid"}}>Personal Digital Assistance</div>
        <div style={{margin: "auto", display: "flex", gap: "40px", justifyContent: "center"}}>
            <ProfileCard title="Alexa" handle="@alexa" image={Alexa} description="AlexaAlexaAlexa"/>
            <ProfileCard title="Cortana" handle="@Cortana" image={Cortana} description="CortanaCortanaCortana"/>
            <ProfileCard title="Siri" handle="@Siri" image={Siri} description="SiriSiriSiri"/>
        </div>
        </>
    )
    
}

export default App;