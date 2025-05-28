const today =  new Date()

function FormatDate(date) {
    return new Intl.DateTimeFormat(
        'pt-BR',
        { weekday: 'long'}
    ).format(date)
}

const person = {
    name: 'Hady Lamarr',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
}


export default function TodoList() {
    return(
        <>
            <div style={person.theme}>
                <h1>{person.name}'s Todos</h1> 
                <h1>To Do List for {FormatDate(today)}</h1>       
                <img
                
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                class="photo"
                
                />

                <ul>
                    <li>Invent new traffic lights</li>
                    <li>Reharse a movie scene</li>
                    <li>Improve the spectrum technology</li>
                </ul>
            </div>
        </>

    )
}