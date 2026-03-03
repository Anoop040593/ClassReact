import React from "react";
import { useState } from "react";

const initialValue = { name: "", email: "" };
const AdvancedForm = () => {
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email) {
      return false;
    }

    // Additional validation logic
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      console.error("Form is invalid");
      return;
    }

    console.log(`Name: ${formData.name}, Email: ${formData.email}`);

    setFormData(initialValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AdvancedForm;
