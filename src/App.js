import P from 'prop-types'
import './App.css';
import { useEffect, useMemo, useState } from 'react';

const Post = ({post}) => {
  console.log("Filho Renderizou")
  return (
    <div key={post.id} className='post'>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

Post.prototype = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  })
}

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log("Pai, renderizou");
  
  // Comnent Did Mount
  useEffect(() => {
    setTimeout(function() {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, 5000);
  },[]);

  return (
    <div className="App">
      <p>
        <input
          type='search'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return(
          posts.length > 0 &&
         posts.map((post) => {
          return (<Post key={post.id} post={post} />)
         })
        );
      },[posts])}
      
      {posts.length <= 0 && 
        <p>ainda Não Existem Posts.</p>
      }

    </div>
  );
 }

export default App;
