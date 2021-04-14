import './App.css';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header order={{ id:1, name: "Primero"}}/>
      <Header order="2"/>
      <main>
          <h1>Hola Mundo</h1>
      </main>
      <footer>FOOTER</footer>
    </div>
  )
}

export default App;