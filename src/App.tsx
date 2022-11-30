import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

import "./global-style.css";

const style = { display: "flex", justifyContent: "center", padding: "0 3rem" };

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
