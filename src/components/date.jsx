
import Form from 'react-bootstrap/Form';
export default function DateC({ objTarget, handlerChange }) {

    return (
        <>
            <Form.Group className="mb-2" >
                <Form.Label>From:</Form.Label>
                <Form.Control type="date" onChange={(e) => handlerChange(e.target.value, 'from')} />
            </Form.Group>
            <Form.Group className="mb-2" >
                <Form.Label>To:</Form.Label>
                <Form.Control type="date" onChange={(e) => handlerChange(e.target.value, 'to')} />
            </Form.Group>
        </>
    )
}