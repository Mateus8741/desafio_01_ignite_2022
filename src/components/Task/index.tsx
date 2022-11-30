import { Trash } from "phosphor-react";
import React, { useState } from "react";

import * as S from "./styles";

interface Props {
  task: string;
  onDeleteTask: (comment: string) => void;
}

export function Task({ task, onDeleteTask }: Props, text: string) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCompleteTask() {
    setIsChecked(true);
  }

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <S.Container isChecked={isChecked}>
      <S.Content>
        <input
          type="checkbox"
          onChange={handleCompleteTask}
          checked={isChecked}
        />

        <S.DivText>
          <S.Text isChecked={isChecked}>{task}</S.Text>
        </S.DivText>
        <Trash
          size={24}
          color="#FFF"
          cursor="pointer"
          onClick={handleDeleteTask}
        />
      </S.Content>
    </S.Container>
  );
}
