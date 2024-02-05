import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Head />
    </div>
  );
}

const Navbar = (
  <nav className="navbar">
    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Me</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
);

const Head = (
"h1",
null,
"This is a heading"
);

export default App;
