import Avatar from "./Avatar"

export default function Profile() {
    return (
        <>
        <img 
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson "
        />

        <Avatar
            person= {{ name: 'Lin Lanying', imageId: '1bX5QH6'}}
            size={100}       
        />
        
        </>
    )
}