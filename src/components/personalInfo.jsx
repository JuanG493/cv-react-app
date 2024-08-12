
import { useState } from "react";
import VPersonalInfo from "./visualizationPersonalInfo";

const objPerson = {
    name: '',
    lastName: '',
    position: '',
    phone: '',
    email: '',
    city: '',
    linkedIn: ''
}

export default function PersonalInfo() {
    const [person, setPerson] = useState(objPerson);
    function handleChange(event, propertie) {
        setPerson({
            ...person,
            [propertie]: event.target.value
        })
    }


    return (
        <div className="zone">
            <div className="workZone">
                <h2>General information</h2>
                <label>Name: </label>
                <input type="text" onChange={e => handleChange(e, 'name')}></input>
                <label>Last Name: </label>
                <input type="text" onChange={e => handleChange(e, 'lastName')}></input>
                <label>Cell phone: </label>
                <input type="text" onChange={e => handleChange(e, 'phone')}></input>
                <label>Position: </label>
                <input type="text" onChange={e => handleChange(e, 'position')}></input>
                <label>Email: </label>
                <input type="text" onChange={e => handleChange(e, 'email')}></input>
                <label>City: </label>
                <input type="text" onChange={e => handleChange(e, 'city')}></input>
                <label>LinkedIn: </label>
                <input type="text" onChange={e => handleChange(e, 'linkedIn')}></input>
            </div>
            <VPersonalInfo
                
                fullName={person.name + " " + person.lastName}
                position={person.position}
                phone={person.phone}
                email={person.email}
                city={person.city}
                linkedIn={person.linkedIn}
            ></VPersonalInfo>
        </div>
    );
}