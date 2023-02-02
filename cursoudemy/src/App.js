import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        email: '',
        senha: '',
        sexo: 'masculino'
    }

    this.trocaEmail = this.trocaEmail.bind(this);
  }

  trocaEmail(e){
    let valorDigitado = e.target.value;
    this.setState({email: valorDigitado});
  }

  render(){
    return(
      <div>
        <h2>Login</h2>
        Email:
        <input type="email" name="email" value={this.state.email}></input>
        <br/>
        Senha:
        <input type="password" name="senha" value={this.state.email}></input>
      </div>
    );
  }

}

export default App;
