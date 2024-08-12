import { useState } from "react";

let nextId = 1;

export default function SetItems({ textLabel, objPropertie, fillFunc, objTarget}) {
    const [elements, setElements] = useState(objTarget);
    const [currentV, setCurrentV] = useState('');

    //let reset the state if a new objTarget it´s pass
    if(objTarget != elements){
        setElements(objTarget)
    }
    

    function handleOnClick() {
        let newElemnts = ([
            ...elements,
            { id: nextId++, value: currentV }
        ])
        setElements(newElemnts)
        //let to return the data to the parent
        fillFunc(newElemnts, objPropertie)
        setCurrentV('')
    }

    function handleDelete(id) {
        let newElemnts = elements.filter(s => s.id != id)
        setElements(newElemnts)
        fillFunc(newElemnts, objPropertie)
    }

    function handleEdit(skill) {
        setCurrentV(skill.value);
        handleDelete(skill.id);
    }

    return (
        <div>
            <label>{textLabel}</label>
            <input
                type="text"
                value={currentV}
                onChange={e => setCurrentV(e.target.value)}>
            </input>

            <button onClick={handleOnClick}>add</button>
            <ul>
                {elements != undefined ? (elements.map((s) => {
                    return (
                        <li key={s.id}>{s.value}
                            <button onClick={() => handleDelete(s.id)}>Delete</button>
                            <button onClick={() => handleEdit(s)}>Edit</button>
                        </li>)
                })) : <></>
                }
            </ul>
        </div>
    )
}