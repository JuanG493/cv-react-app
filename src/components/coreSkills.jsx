import { useState } from "react";
import SetItems from "./setItems";
import VisualItems from "./visualItems";

let nextId = 1;

export default function Skills() {
    const [skills, setSkills] = useState([]);

    function handleOnClick(newElemnts) {
        setSkills([...newElemnts])
    }

    return (
        <div className="zone">
            <div className="wokZone">
                <h2>Add your skills</h2>
                <SetItems
                    textLabel={'skill '}
                    fillFunc={handleOnClick}
                    objTarget={skills}
                ></SetItems>
            </div>
            <div className="finalV showZone">

                <div className="headZone">
                    <span className="icon coreI"></span>
                    <h1> Core Skills </h1>
                </div>
                <VisualItems
                    listElements={skills}>
                </VisualItems>
            </div>
        </div>
    )
}