import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

import "./global-style.css";

const style = { display: "flex", justifyContent: "center" };

export function App() {
  return (
    <div>
      <Header />
      <div style={style}>
        <NewTask />
        <main></main>
      </div>
    </div>
  );
}