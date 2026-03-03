import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/form";
import AdvancedForm from "./components/AdvancedForm";
import TemperatureDisplay from "./components/TemperatureDisplay";
import TemperatureInput from "./components/TemperatureInput";
import Test from "./components/useEffect";
function App() {
  const [count, setCount] = useState(0);
  const [temp, setTemp] = useState("");

  const handleTempChange = (newTemp) => {
    setTemp(newTemp);
  };
  return (
    <>
      <div>
        <Form />
      </div>

      <hr />

      <div>
        <AdvancedForm />
      </div>

      <hr />
      <div>
        <TemperatureInput
          temperature={temp}
          onTemperatureChange={handleTempChange}
        />

        <TemperatureDisplay temperature={temp} />
      </div>

      <hr />
      <Test />
    </>
  );
}

export default App;
