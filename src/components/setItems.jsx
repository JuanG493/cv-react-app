import { useState } from "react";
import Button from 'react-bootstrap/Button';


let nextId = 1;

export default function SetItems({ textLabel, objPropertie, fillFunc, objTarget }) {
    const [elements, setElements] = useState(objTarget);
    const [currentV, setCurrentV] = useState('');

    //let reset the state if a new objTarget it´s pass
    if (objTarget != elements) {
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

            <Button onClick={handleOnClick} className="addBtn">add</Button>
            <ul>
                {elements != undefined ? (elements.map((s) => {
                    return (
                        <li key={s.id}>{s.value}
                            <Button className="m-1" variant="secondary" onClick={() => handleDelete(s.id)}>Delete</Button>
                            <Button className="m-1" variant="secondary" onClick={() => handleEdit(s)}>Edit</Button>
                        </li>)
                })) : <></>
                }
            </ul>
        </div>
    )
}