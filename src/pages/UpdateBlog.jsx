import { useEffect, useState } from "react";
import { useParams } from "react-router";

const UpdateBlog = () => {
    const {id} = useParams()
    
    const [blog, setBlog] = useState(null)

    useEffect(() => {
            fetch(`http://localhost:5000/posts/${id}`)
            .then(res=> res.json())
            .then(data=> {
                setBlog(data)
            })
            
    }, [id])

      const handleBlogSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value
        const content = e.target.content.value

        const data = {
            title,
            content,
        }
      
        fetch(`http://localhost:5000/posts/${id}`, {
            method: 'PUT',
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
           {blog &&  <form onSubmit={handleBlogSubmit}>
                <fieldset className="fieldset">
                  <input className="input" defaultValue={blog.title} type="text" name="title" placeholder="Title" required/>

                  <textarea className="textarea" defaultValue={blog.content} name="content" placeholder="Tell your story..." required></textarea>

                <button className="btn btn-success" type="submit">Update</button>
                </fieldset>
            </form>}
        </div>
    );
};

export default UpdateBlog;