import { useState } from 'react';
import './List2.css'

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' }
];


export default function List2() {
    const [artists, setArtists] = useState(initialArtists);
    
    return (
        <>
        
            <div  className="artists-list">

            <h1>Inspiring sculptors:</h1>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name}{' '}
                        <button onClick={() => {
                            setArtists(
                                artists.filter(a => a.id !== artist.id)
                            );
                        }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
}