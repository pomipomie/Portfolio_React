import About from './About';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <About/>
      <section>
        <article></article>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
