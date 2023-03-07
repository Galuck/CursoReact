import {useState} from 'react';
import {db} from './firebaseConnection';
import './App.css';
import {doc, setDoc, collection} from 'firebase/firestore';


function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [preco, setPreco] = useState('');

  const [posts, setPosts] = useState('');

  async function handleAdd(){
    /*
    await setDoc(doc(db, "posts", "12345"), {
      title: titulo,
      author: autor,
      price: preco,
    })
    .then(() => {
      console.log("DADOS REGISTRADOS NO BANCO")
    })
    .catch((error) => {
      console.log("GEROU ERRO")
    })
    */
    
    await addDoc(collection(db, "posts"),{
      titulo:titulo,
      autor:autor
    })
    .then(()=>{
      console.log("CADASTRO REALIZADO COM SUCESSO")
    })
    .catch ((error) => {
      console.log("ERRO " + error)
    })

  }

  


  async function buscarPost(){
    /* const postRef = doc(db, "posts", "12345")

    await getDoc(postRef)
    .then((snapshot) =>{
      setAutor(snapshot.data().autor)
      setTitulo(snapshot.data().titulo)
    })
    .catch(()=>{
      console.log("ERRO AO BUSCAR" + error)
    }) */

    const postsRef = collection(db, "posts")
    await getDocs(postsRef)
    .then((snapshot)=>{
      let lista ={};
      snapshot.forEach((doc)=>{
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor,
        })
      })

      setPosts(lista);

    })
    .catch((error)=>{
      console.log("ERRO AO BUSCAR" + error)
    })

  }

  function editarPost(){
    alert("Teste")
  }

  return (
    <div>
      <h1>ReactJS + Firebase</h1>

      <div className="container">

        <label>ID do Post</label>
        <input 
          placeholder='Digite o ID do Post'
          value={idPost}
          onChange={ (e) => setIdPost(e.target.value)}
        ></input>
        <br/>

        <label>Titulo:</label>
        <textarea 
          type="text" 
          placeholder='Digite o título:'
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label>Autor:</label>
        <input 
          type="text" 
          placeholder="Autor do post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <label>Preco:</label>
        <input 
          type="number" 
          placeholder="Preco do livro"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar Post</button>

        <button onClick={editarPost}>Atualizar Post</button>

        <ul>
          {posts.map((post)=>{
            return(
              <li key={post.id}>
                <strong>ID: {post.id}</strong>
                <span>Titulo: {post.titulo}</span>
                <span>Autor: {post.autor}</span>
              </li>
            )
          })}
        </ul>

      </div>

    
    </div>
  );
}

export default App;
