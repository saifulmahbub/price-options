import DaisyNav from "./Components/DaisyNav/DaisyNav";
import NavBar from "./Components/NavBar/NavBar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <h1 className="text-7xl text-center bg-rose-600">Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
