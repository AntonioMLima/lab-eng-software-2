import './ToolBar.css'

function Button( {onClick, children}) {
    return (
        <button onClick={ e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
            
        </button>
    )
}


export default function ToolBar() {
    return (
        <>
        <div className="ToolBar" onClick={ () => {
            alert("You clicked ton the toolbar!")
        }}>

            <Button onClick={ ()=> alert('playing!')}>
                Play Movie
            </Button>

            <Button onClick={ ()=> alert('Uploading!')}>
                Upload Image
            </Button>
        </div>
        
        </>


    )
}