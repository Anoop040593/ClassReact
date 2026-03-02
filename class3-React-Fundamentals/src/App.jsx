import { useState } from "react";
import "./App.css";
import passportPhoto from "./assets/8-PassportSizePhoto.jpg";
//Components
import Counter from "./component/Counter";
import UserCard from "./component/UserCard";
import ProductList from "./component/ProductList";
import Todo from "./component/Todo";

function App() {
  // const [name, setName] = useState("Anoop");
  // const handleUpdateName = () => {
  //   setName((prevValue) => {
  //     console.log(prevValue);
  //     return "Anoop Pemmaraju";
  //   });
  //   // setName("Anoop Pemmaraju")
  // }

  const userInfo = {
    name: "Anoop",
    email: "anuppemmaraju@gmail.com",
    age: "32",
    location: "Hyderabad",
    picture: passportPhoto,
  };

  const ProductsList = [
    { id: "1", name: "laptop", price: "1200" },
    { id: "2", name: "Mouse", price: "1200" },
    { id: "3", name: "Monitor", price: "1200" },
    { id: "4", name: "Desktop", price: "1200" },
    { id: "5", name: "Headphones", price: "1200" },
  ];
  return (
    <>
      {/* <h1>Hello I am {name}!</h1>
      <button onClick={handleUpdateName}>Update name</button> */}
      <h2>Counter</h2>
      <Counter initialCount={0} />

      <hr />
      <h2>User Card</h2>
      <UserCard user={userInfo} />

      <hr />
      <h2>Product List</h2>
      <ProductList products={ProductsList} />

      <hr />
      <Todo />
    </>
  );
}

export default App;
