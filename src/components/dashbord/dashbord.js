
import React , {useState} from 'react';


import axios from 'axios';

function Reddit(){
    const [posts,setPost] =useState([]);
    React.useEffect(() => {
        axios.get(`https://www.reddit.com/r/reactjs.json`)
        .then(res =>{
            console.log(res.data.data.children)
            console.log(res.data.data.children[1].data.title)
            const newPost = res.data.data.children
            .map(obj => 
                obj.data
                );
                console.log(newPost );
                
                setPost(newPost);
            })
        },[])  
        return(
            <div>
         <h1>
           hello world
         </h1>
        <ul>
          {posts.map(post =>(
              <li key={post.id}>{post.title}</li>
              ))}
        </ul>
      </div>
    )
}

export default Reddit
    
    
    
