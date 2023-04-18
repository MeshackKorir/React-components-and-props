// import './App.css';
import NavBar from './components/NavBar';
import Blog from './components/Blog';
import Comment from './components/Comment';


function App() {
  return (
    <div className="App">
     <NavBar />
     <Blog/>
     <Comment comment="Netflix is lively"/>
    </div>
  );
}

export default App;
 