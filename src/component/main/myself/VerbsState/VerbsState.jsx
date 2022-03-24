import React, {useState} from 'react';


export default function VerbsState() {
    const [verbsState, setState] = useState([]);
    const [activeIndex, setActiveIndex] =useState(0)


    const nextClick = () => {
        setActiveIndex(prevState => prevState + 1)
    }

    const lastClick = () => {
        setActiveIndex(prevState => prevState - 1)
    }
    return (
        <div>
            <p>Глаголы состояния</p>
            <div>
                <button type="button" onClick={nextClick}>last</button>
                <button type="button" onClick={lastClick}>next</button>
            </div>
        </div>
    )
    
}