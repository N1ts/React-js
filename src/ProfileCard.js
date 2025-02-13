function ProfileCard({title, handle, image, description}){
    return(
            <div style={{border: "1.5px black", borderStyle: "Solid"}}>
            <img src={image} style={{borderTop: "0", borderRight: "0", borderLeft: "0", borderBottom: "1.5px black", borderStyle: "Solid",
                width: "220px", height: "220px"
            }}/>
            <h2 style={{marginLeft:"15px" , height: "5px",  fontWeight: "400", marginTop: "5px"}}>{title}</h2>
            <h5 style={{marginLeft:"15px", height: "10px", fontWeight: "100"}}>{handle}</h5>
            <p style={{marginLeft:"15px", fontWeight: "400"}}>{description}</p>
            </div>
    )
}

export default ProfileCard;