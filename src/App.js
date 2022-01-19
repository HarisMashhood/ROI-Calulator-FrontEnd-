import "./App.css";
import Head from "./components/Head";
import Comp from "./components/Comp";
import Textbox from "./components/Textbox";
import Input from "./components/Input";
import TimeFrame from "./components/TimeFrame";
import Days from "./components/Days";
import Apy from "./components/Apy";
import SelectTier from "./components/SelectTier";
import HideDetails from "./components/HideDetails";
import Apy2 from "./components/Apy2";
import Points from "./components/Points";
import CakeDon from "./components/CakeDon";

function App() {
  return (
    <div className="App">
      <Head />
      <Comp />
      <Textbox value={"0.000 USD"} />
      <Input />
      <TimeFrame />
      <Days />
      <Apy />
      <SelectTier pValue={"Roi at Current Rates"} />
      <Textbox value={"0.00 USD"} />
      <CakeDon/>
      <HideDetails/>
      <Apy2/>
      <Points/>
    </div>
  );
}

export default App;
