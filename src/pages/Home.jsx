import { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaRegTrashCan } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";

const Home = () => {
  const { user } = use(AuthContext)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleDelete = (id) => {
    console.log(id)

    fetch(`http://localhost:5000/posts/${id}`, {
      method: 'DELETE'
    })
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
        const filteredData = posts.filter(post=> post._id != id)
        setPosts(filteredData)
    })

  }


  return (
    <div className="space-y-5 mt-5 max-w-5xl mx-auto">
      {posts.map((post) => (
        
          <div key={post._id} className="card bg-base-100  shadow-sm">

              <div className="mr-5 pt-2 flex items-center justify-end gap-3">

                 {(user && user.uid === post.user.uid) &&  <div className=" text-red-400 cursor-pointer" onClick={()=> handleDelete(post._id)}><FaRegTrashCan /></div>
                 }

                   {(user && user.uid === post.user.uid) &&  <Link to={`/update-blog/${post._id}`}><div className=" text-red-400 cursor-pointer"><CiEdit /></div></Link>
                 }
              </div>

          <Link  to={`/details/${post._id}`}>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>

              <p>{post.content.slice(0, post.content.length * 0.3)}...</p>

              <div className="flex items-center gap-2">
                <div>
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={post.user.photoURL} />
                    </div>
                  </div>
                </div>

                <div>
                  <div>{post.user.displayName}</div>
                  <div>{post.createdAt}</div>
                </div>
              </div>
            </div>
             </Link>

          </div>
        
       
      ))}
    </div>
  );
};

export default Home;
