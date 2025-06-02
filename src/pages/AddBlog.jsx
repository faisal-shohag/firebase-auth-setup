import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const AddBlog = () => {
    const { user } = use(AuthContext)

    const handleBlogSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value
        const content = e.target.content.value

        const data = {
            title,
            content,
            createdAt: new Date(),
            user: {
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email,
                uid: user.uid,
            }
        }
      
        fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
        })
    }
    

    return (
        <div>
            <form onSubmit={handleBlogSubmit}>
                <fieldset className="fieldset">
                  <input className="input" type="text" name="title" placeholder="Title" required/>

                  <textarea className="textarea" name="content" placeholder="Tell your story..." required></textarea>

                <button className="btn btn-success" type="submit">Post</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddBlog;