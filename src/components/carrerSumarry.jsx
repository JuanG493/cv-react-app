import { useState } from "react";
import { Button } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import DateC from "./date";
import SetItems from "./setItems";
import VisualItems from "./visualItems";
import VisualExperience from "./visualizationCarrerSumarry";

let nextId = 0;
let nextIdAccordion = 1;
const experience = {
    id: 0,
    position: '',
    company: '',
    from: '',
    to: '',
    outline: '',
    city: '',
    responsabilities: [],
    achievements: []
}
export default function CarrerSumary() {
    const [careerExp, setCareerExp] = useState(experience)
    const [listCareerExperience, setListCareerExperience] = useState([]);

    function handelerChange(value, propertie) {
        setCareerExp({
            ...careerExp,
            [propertie]: value
        })
    }
    function handlerDate(value, propertie) {
        setCareerExp({
            ...careerExp,
            [propertie]: value
        })
    }

    function handleOnClick() {
        let careerExpPlusId = ({
            ...careerExp,
            id: nextId++
        })

        let newCareerExp = ([
            ...listCareerExperience,
            careerExpPlusId
        ]);

        setListCareerExperience(newCareerExp);
        //to reset the state
        setCareerExp(experience);
    }
    function handleDeleteExp(id) {
        let filterElm = listCareerExperience.filter(elm => elm.id != id)
        setListCareerExperience(filterElm)
    }

    function handleEditExp(id) {
        let target = listCareerExperience.filter(elm => elm.id == id)
        setCareerExp(target[0])
        handleDeleteExp(id)
    }

    return (
        <div className="zone">
            <div className="workZone">
                <h2>Career experience</h2>
                <div>
                    <DateC
                        objTarget={careerExp}
                        handlerChange={handlerDate}
                    ></DateC>
                </div>

                <Form.Group className="mb-2" >
                    <Form.Label>Position in company</Form.Label>
                    <Form.Control
                        type="text"
                        value={careerExp.position}
                        placeholder="position"
                        onChange={e => handelerChange(e.target.value, 'position')} />
                </Form.Group>

                <Form.Group className="mb-2" >
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={careerExp.company}
                        placeholder="company name"
                        onChange={e => handelerChange(e.target.value, 'company')} />
                </Form.Group>

                <Form.Group className="mb-2" >
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        value={careerExp.city}
                        placeholder="city"
                        onChange={e => handelerChange(e.target.value, 'city')} />
                </Form.Group>

                <Form.Group className="mb-2" >
                    <Form.Label>Outline</Form.Label>
                    <Form.Control as={"textarea"} rows={3} value={careerExp.outline}
                        onChange={(e) => handelerChange(e.target.value, 'outline')}
                    ></Form.Control>
                </Form.Group>

                <SetItems
                    textLabel={'Key responsabilities'}
                    objPropertie={'responsabilities'}
                    fillFunc={handelerChange}
                    objTarget={careerExp.responsabilities}
                >
                </SetItems>
                <SetItems
                    textLabel={'Key Achievements'}
                    objPropertie={'achievements'}
                    fillFunc={handelerChange}
                    objTarget={careerExp.achievements}
                >
                </SetItems>
                <Button className="mb-3" onClick={handleOnClick}>Add summary</Button>
                <BuiltItems2
                    listItems={listCareerExperience} >
                </BuiltItems2>
            </div>

            <VisualExperience
                listExp={listCareerExperience}
            ></VisualExperience>
        </div>


    )

    function BuiltItems({ listItems: listCareerExp }) {
        let nextId = 1;
        return (
            <div >
                {listCareerExp.map(careerExp => {
                    return (
                        <ul key={nextId++}>
                            <li>
                                date: {careerExp.from} - {careerExp.to}
                                <br></br>
                                company: {careerExp.company} city : {careerExp.city}
                                <br></br>
                                position: {careerExp.position}
                                <br></br>
                                outLine: {careerExp.outline}
                                <br></br>
                                <VisualItems
                                    listElements={careerExp.responsabilities}
                                    text={"responsabilities"}
                                ></VisualItems>
                                <VisualItems
                                    listElements={careerExp.achievements}
                                    text={"achievements"}
                                ></VisualItems>
                            </li>
                            <button onClick={() => handleDeleteExp(careerExp.id)} >Delete</button>
                            <button onClick={() => handleEditExp(careerExp.id)} >Edit</button>
                        </ul>
                    )
                })}
            </div>
        )
    }

    function BuiltItems2({ listItems: listCareerExp }) {
        let nextId = 1;
        return (
            <Accordion >
                {listCareerExp.map(careerExp => {
                    return (
                        <Accordion.Item eventKey={careerExp.id} key={nextIdAccordion++}>
                            <Accordion.Header>{careerExp.outline.substr(0, 50)}...</Accordion.Header>
                            <Accordion.Body key={nextId++}>
                                <li>
                                    date: {careerExp.from} - {careerExp.to}
                                    <br></br>
                                    company: {careerExp.company} city : {careerExp.city}
                                    <br></br>
                                    position: {careerExp.position}
                                    <br></br>
                                    outLine: {careerExp.outline}
                                    <br></br>
                                    <VisualItems
                                        listElements={careerExp.responsabilities}
                                        text={"responsabilities"}
                                        ></VisualItems>
                                    <VisualItems
                                        listElements={careerExp.achievements}
                                        text={"achievements"}
                                        ></VisualItems>
                                </li>
                                <button onClick={() => handleDeleteExp(careerExp.id)} >Delete</button>
                                <button onClick={() => handleEditExp(careerExp.id)} >Edit</button>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        )
    }
}