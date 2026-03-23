import "./App.css";
// import FocusInput from "./Components/FocusInput";
// import Timer from "./Components/Timer";
// import StopWatch from "./Components/stopWatch";
// import ImageCarousal from "./Components/ImageCarousal";
import Modal from "./Components/Modal/index";
import useVisibility from "./Components/useVisibility";
function App() {
  const { isVisible, show, hide, toggle } = useVisibility(false);
  return (
    <div>
      {/* <FocusInput /> */}
      {/* <Timer /> */}
      {/* <StopWatch /> */}
      {/* <ImageCarousal /> */}
      <h1>Custom Hook</h1>
      <button onClick={show}>Show Modal</button>
      <button style={{ marginLeft: "4px" }} onClick={toggle}>
        Toggle Modal
      </button>
      <Modal isVisible={isVisible} hide={hide} />
    </div>
  );
}

export default App;
