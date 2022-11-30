import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList";

import "./global-style.css";

const style2 = {
  display: "flex",
  justifyContent: "center",
  padding: "0 3rem",
};

export function App() {
  return (
    <div>
      <Header />
      <main style={style2}>
        <TasksList />
      </main>
    </div>
  );
}
