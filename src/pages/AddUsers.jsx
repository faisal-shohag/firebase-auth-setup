
const AddUsers = () => {
   
    const handleAddUser = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const age = e.target.age.value

        const user = {name, email, age}

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
        })
    }

    return (
        <div>
            <form onSubmit={handleAddUser}>
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input className="input" type="text" name="name" placeholder="Name"/>

                    <label className="label">Email</label>
                    <input className="input" type="email" name="email" placeholder="Email"/>

                    <label className="label">Age</label>
                    <input className="input" type="number" name="age" placeholder="Age"/>


                    <button type="submit"  className="btn btn-success"> Add User</button>

                </fieldset>
            </form>
        </div>
    );
};

export default AddUsers;