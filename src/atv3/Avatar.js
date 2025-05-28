

export default function Avatar({person, size}) {
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg"
    const description = "Gregorio T. Yara"
    return (
        <img 
            className="avatar"
            src={description}
            alt={description}
            width={200}
            height={200}
        
        />
    )
}