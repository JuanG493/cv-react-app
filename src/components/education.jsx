import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
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

                <Form.Group className="mb-2" >
                    <Form.Label>Grade</Form.Label>
                    <Form.Control
                        type="text"
                        value={record.grade}
                        placeholder="grade"
                        onChange={e => handelerChange(e.target.value, 'grade')} />
                </Form.Group>

                <Form.Group className="mb-2" >
                    <Form.Label>Institution</Form.Label>
                    <Form.Control
                        type="text"
                        value={record.college}
                        placeholder="college"
                        onChange={e => handelerChange(e.target.value, 'college')} />
                </Form.Group>

                <BuildItem
                    listItems={listRecords}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                ></BuildItem>
                <Button className="m-2" onClick={handleOnClick}>Add Record</Button>

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
                         {item.college} {formatDate}
                        <Button variant="secondary" className="m-2" onClick={() => onDelete(item.id)}>Delete</Button>
                        <Button variant="secondary" className="m-2" onClick={() => onEdit(item)}>Edit</Button>
                    </li>
                )
            })}
        </ul>
    )
}

function Veducation({ records }) {
    return (
        <div className="finalV showZone">
            <div className="headZone">
                <span className="icon educationI"></span>
                <h1> Education</h1>
            </div>
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