import logo from "./Dashboard.png";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="w-full">
      <img className="w-full h-scree" src={logo} alt="logo" />
      <Dashboard />
    </div>
  );
}

export default App;
