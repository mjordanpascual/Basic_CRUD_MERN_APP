import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Create () {
    return (
        <div className='align-items-center text-center m-auto'>
            <div className='w-50 align-items-center text-center mt-5'>
            <h1>Create User</h1>
            <Form className='w-50'>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Enter your name'
                    />
                </Form.Group>
            </Form>            
        </div>
        </div>
    )
}