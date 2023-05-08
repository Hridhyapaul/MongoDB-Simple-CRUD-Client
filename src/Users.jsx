import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)
    const submitDelete = _id => {
        console.log(_id)
        fetch(`http://localhost:5000/user/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount>0){
                alert('Deleted successfully')
                const remaining = users.filter(user => user._id !== _id)
                setUsers(remaining)
            }
        })
    }

    
    return (
        <div>
            {
                users.map((user) => <h2 key={user._id}>{user.name} {user.email} {user._id}
                <Link to={`/update/${user._id}`}>
                <button>Update</button>
                </Link>
                <button onClick={() => submitDelete(user._id)}>X</button> </h2>)
            }
        </div>
    );
};

export default Users;