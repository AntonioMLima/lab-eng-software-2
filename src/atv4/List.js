import { useState } from 'react';
import './List.css'

let nextId = 0;

export default function List() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return (
        <>
            <div className='list-container'>
            <h1>Inspiring sculptors:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setArtists([
                    ...artists,
                    {id: nextId++, name: name}
                ])
            }}>Add</button>
            <u1>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </u1>

            </div>
        </>
    );
}