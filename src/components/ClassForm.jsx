import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function ClassForm() {
    const [classdets, setClassDets] = useState(
        {
            "topic": "",
            details: ""
        }
        
    )
    const handleOnChange = (e) => {
        setClassDets({ ...classdets, [e.target.name]: e.target.value });
      };
    return (
        <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Class Topic</Form.Label>
                <Form.Control type="topic" name='topic' value={classdets.topic} onChange={handleOnChange} placeholder="Enter Class topic" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Description</Form.Label>
                <Form.Control type="details" placeholder="Description" name='details' value={classdets.details} onChange={handleOnChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default ClassForm;