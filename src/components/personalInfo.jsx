import { useState } from "react";
import Form from 'react-bootstrap/Form';
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

                <Form.Group className="mb-2" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={e => handleChange(e, 'name')} />
                </Form.Group>
                <Form.Group className="mb-2" >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" onChange={e => handleChange(e, 'lastName')} />
                </Form.Group>
                <Form.Group className="mb-2" >
                    <Form.Label>Cell phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone" onChange={e => handleChange(e, 'phone')} />
                </Form.Group>
                <Form.Group className="mb-2" >
                    <Form.Label>Position</Form.Label>
                    <Form.Control type="text" placeholder="position" onChange={e => handleChange(e, 'position')} />
                </Form.Group>
                <Form.Group className="mb-2" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter a email" onChange={e => handleChange(e, 'email')} />
                </Form.Group>
                <Form.Group className="mb-2" >
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="city" onChange={e => handleChange(e, 'city')} />
                </Form.Group>
                <Form.Group className="mb-2" >
                    <Form.Label>LinkedIn</Form.Label>
                    <Form.Control type="url" placeholder="LinkedIn" onChange={e => handleChange(e, 'linkedIn')} />
                </Form.Group>
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