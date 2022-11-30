import { ClipboardText, PlusCircle } from "phosphor-react";
import { useState } from "react";
import { Task } from "../Task";

import * as S from "./styles";
import * as NT from "../NewTask/styles";

interface Props {
  content: {
    id: number;
    task: string;
  }[];
}

export function TasksList() {
  const [tasks, setTasks] = useState(["Compras"]);
  const [tk, setTk] = useState("");

  function handleCreateNewTask(e: any) {
    e?.preventDefault();
    setTasks([...tasks, tk]);
    setTk("");
  }

  function handleNewTask(e: any) {
    setTk(e.target.value);
  }

  function handleDeleteTask(tasksToDelete: any) {
    const tasksWithoutDeletedOne = tasks.filter((tasks) => {
      return tasks != tasksToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <S.Container>
      <form onSubmit={handleCreateNewTask}>
        <NT.Container>
          <NT.Input
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTask}
            value={tk}
          />
          <NT.Button type="submit">
            Criar <PlusCircle size={16} style={{ marginLeft: "6px" }} />
          </NT.Button>
        </NT.Container>
      </form>

      <S.Info>
        <S.InfoContent>
          <S.CreatedTasks>Tarefas criadas</S.CreatedTasks>
          <S.Counter>{tasks.length}</S.Counter>
        </S.InfoContent>

        <S.InfoContent>
          <S.EndedTasks>Concluídas</S.EndedTasks>
          <S.Counter>{tasks.length}</S.Counter>
        </S.InfoContent>
      </S.Info>

      <S.Content>
        {tasks.length === 0 && (
          <>
            <ClipboardText size={56} color="#333333" />
            <S.Strong>Você ainda não tem tarefas cadastradas</S.Strong>
            <S.Span>Crie tarefas e organize seus itens a fazer</S.Span>
          </>
        )}

        {tasks.map((item, index) => (
          <Task key={index} task={item} onDeleteTask={handleDeleteTask} />
        ))}
      </S.Content>
    </S.Container>
  );
}
