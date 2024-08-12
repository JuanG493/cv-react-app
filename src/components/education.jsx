import { useState } from "react";
import DateC from "./date";

let nextId = 1;
const education = {
    id: 0,
    grade: '',
    college: '',
    from: '',
    to: ''
}

export default function Education() {
    const [record, setRecord] = useState(education);
    const [listRecords, setListRecords] = useState([]);

    function handelerChange(value, propertie) {
        setRecord({
            ...record,
            [propertie]: value
        });
    }

    function handleOnClick() {
        let newListRecords = ([
            ...listRecords,
            record
        ]);

        setListRecords(newListRecords);

        //set a new education ready for fill in
        setRecord({
            ...education,
            id: ++nextId,
        });


    }
    function handleDelete(id) {
        let newElemnts = listRecords.filter(s => s.id != id)
        if (newElemnts.length > 0) {
            setListRecords({
                ...newElemnts,
            })
        } else {
            setListRecords([]);
        }
    }

    function handleEdit(targetRecord) {
        handleDelete(targetRecord.id);
        setRecord({
            ...targetRecord,
        })
    }


    return (
        <div className="zone">
            <div className="workZone">

                <h2>Education</h2>
                <DateC
                    objTarget={record}
                    handlerChange={handelerChange}
                ></DateC>

                <label>Grade: </label>
                <input
                    type="text"
                    value={record.grade}
                    onChange={(e) => handelerChange(e.target.value, 'grade')}>
                </input>
                <label>Institution: </label>
                <input
                    type="text"
                    value={record.college}
                    onChange={(e) => handelerChange(e.target.value, 'college')}>
                </input>

                <BuildItem
                    listItems={listRecords}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                ></BuildItem>
                <button onClick={handleOnClick}>Add Record</button>

            </div>
            <Veducation
                records={listRecords}
            ></Veducation>
        </div >
    )
}

function BuildItem({ listItems, onDelete, onEdit }) {
    return (
        <ul>
            {listItems.map(item => {
                let formatDate = item.to != "" && item.from != "" ? <span> | {item.from}-{item.to}</span> : <></>;
                return (
                    <li key={item.id}>
                        {item.grade} | {item.college} {formatDate}
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                        <button onClick={() => onEdit(item)}>Edit</button>
                    </li>
                )
            })}
        </ul>
    )
}

function Veducation({ records }) {
    return (
        <div className="finalV showZone">
            <h1> Education</h1>
            <ul>
                {records.map(item => {
                    let formatDate = item.to != "" && item.from != "" ? <span> | {item.from}-{item.to}</span> : <></>;
                    return (
                        <li key={item.id}>
                            <b>{item.grade}</b> | {item.college} {formatDate}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}