import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="w-full h-fit bg-slate-900 text-slate-50">
      <NavBar/>
      <HomePage />
    </div>
  );
}

export default App;
