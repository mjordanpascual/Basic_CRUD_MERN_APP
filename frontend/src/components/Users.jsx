import { useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Users () {

    const [users, setUsers] = useState([{
        Name: "Kylj", 
        Email: "kylj@mail.com", 
        Age: 6
    }]);
    return (
        <div className='w-50 align-items-center m-auto text-center mt-5'>
            <h1>Users list</h1>
            <Table className='table table-bordered hover'> 
                <thead>
                <Button as={Link} to ="/create" className='btn btn-success'>Create User +</Button>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user) => {
                        return (
                            <>
                                <tr>
                                    <td>{user.Name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Age}</td>
                                    <td>
                                        <Button as={Link} to='/update' className='btn btn-primary'>Update</Button>
                                        <Button className='btn btn-danger'>Delete</Button>
                                    </td>
                                </tr>
                            </>
                        )
                        })
                    }
                </tbody>
            </Table>            
        </div>
    )
}