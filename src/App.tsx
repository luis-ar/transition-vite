import "./App.css";
import MyPlayer from "./Myplayer";
import { trackItems } from "./data";

function App() {
  return (
    <>
      <MyPlayer trackItems={trackItems} />
    </>
  );
}

export default App;
