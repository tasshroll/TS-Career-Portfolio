import Header from './components/Header';
import Project from './components/Project';

// Import the work array listing all work info
import work from './work'

// Import CSS to style the pages
import './App.css';

// Pass work array to Project component as a prop
export default function App() {
  return (
    <div className="App">
      <Header />
      <Project work ={work}/>
    </div>
  );
}