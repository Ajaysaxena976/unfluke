import logo from './logo.svg';
import CollapsibleExample from "./CollapsibleExample"; // Adjust the path if necessary
import Navbar from "./Navbar";
import StrategyTable from "./TABLE";
import './App.css';

function App() {
  return (
    <>
      <CollapsibleExample />
      <Navbar />
      <div className="contain">
        <h1 className="mt-4 mb-4 text-center heading">LEADERBOARDS</h1>
      </div>

      <StrategyTable />
    </>
  );
}

export default App;
