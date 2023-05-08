import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email}
        console.log(user);

        fetch(`http://localhost:5000/user/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                alert('User updated successfully')
            }
        })
    }
    return (
        <div>
            <h2>Update information of {loadedUser.name}</h2>
            <div>
                <form onSubmit={handleUpdate}>
                   <input type="text" name="name" defaultValue={loadedUser.name} id="" />
                   <br />
                   <input type="email" name="email" defaultValue={loadedUser.email} id="" />
                   <br />
                   <input type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default Update;