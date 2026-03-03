import { useState } from "react";

function TemperatureInput({ temperature, onTemperatureChange }) {
  return (
    <div>
      <label> Enter Temperature:</label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
}

export default TemperatureInput;
