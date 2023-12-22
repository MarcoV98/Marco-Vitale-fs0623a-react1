import './App.css';
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx';
import MovieGallery from './components/MovieGallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <main>
      <MovieGallery title="Harry Potter" category="harry potter" cardLimit={6} />
      <MovieGallery title="Star Wars" category="star wars" cardLimit={6} />
      <MovieGallery title="Marvel" category="marvel" cardLimit={6} />
      </main>

      <footer>
      <Footer />
      </footer>
    </div>
  );
}

export default App;
