import {useState} from 'react';
import {db} from './firebaseConnection';
import './App.css';
import {doc, setDoc} from 'firebase/firestore';


function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [preco, setPreco] = useState('');


  async function handleAdd(){
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
  }

  return (
    <div>
      <h1>ReactJS + Firebase</h1>

      <div className="container">
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

      </div>

      

      <button onClick={handleAdd}>Cadastrar</button>



    </div>
  );
}

export default App;
