import { sculptureList } from "./data.js";
import { useState } from "react";
import './Gallery.css';

export default function Gallery() {
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)

    function handleClick() {
        if (index + 1 > 11) {
            setIndex(0)
        } else {
            setIndex(index + 1);

        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <div className="gallery">

            <button onClick={handleClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.all}
            />
            <p>
                {sculpture.description}
            </p>
            </div>
        </>
    );
}