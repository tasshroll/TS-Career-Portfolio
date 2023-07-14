import Header from './components/Header';
import PortfolioContainer from './components/PortfolioContainer';



// Import CSS to style the pages
import './App.css';

// Pass work array to Project component as a prop
export default function App() {
  return (
    <div className="App">
      <Header />
      <PortfolioContainer />
    </div>
  );
}