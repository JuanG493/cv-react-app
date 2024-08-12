import { useState } from "react";
import DateC from "./date";
import SetItems from "./setItems";
import VisualItems from "./visualItems";
import VisualExperience from "./visualizationCarrerSumarry";

let nextId = 0;
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
                <label>Position in company </label>
                <input
                    type="text"
                    value={careerExp.position}
                    onChange={(e) => handelerChange(e.target.value, 'position')}>
                </input>
                <label>Company Name: </label>
                <input
                    type="text"
                    value={careerExp.company}
                    onChange={(e) => handelerChange(e.target.value, 'company')}>
                </input>
                <label>City: </label>
                <input
                    type="text"
                    value={careerExp.city}
                    onChange={(e) => handelerChange(e.target.value, 'city')}>
                </input>
                <div>
                    <label>Outline: </label>
                    <textarea value={careerExp.outline}
                        onChange={(e) => handelerChange(e.target.value, 'outline')}>
                    </textarea>
                </div>

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
                <button onClick={handleOnClick}>Add summary</button>
                <BuiltItems
                    listItems={listCareerExperience} >
                </BuiltItems>
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
}

