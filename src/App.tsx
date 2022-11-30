import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TasksList } from "./components/TasksList";

import "./global-style.css";

const style2 = {
  display: "flex",
  justifyContent: "center",
  padding: "4rem 3rem",
};

export function App() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 3rem",
        }}
      >
        <NewTask />
      </div>
      <main style={style2}>
        <TasksList />
      </main>
    </div>
  );
}
