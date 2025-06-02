import { useEffect, useState } from "react";
import { useParams } from "react-router";

const BlogDetails = () => {
    const {id} = useParams()
    
    const [blog, setBlog] = useState(null)

    useEffect(() => {
            fetch(`http://localhost:5000/posts/${id}`)
            .then(res=> res.json())
            .then(data=> {
                setBlog(data)
            })
            
    }, [id])

    return (
        <div>
            { blog && 
                <>
                <h1>{blog.title}</h1>
                <div>{blog.user.displayName}</div>
            <p>{blog.content}</p>
                </>
            }
            
        </div>
    );
};

export default BlogDetails;