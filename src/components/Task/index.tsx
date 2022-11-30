import { Trash } from "phosphor-react";
import { useState } from "react";

import * as S from "./styles";

interface Props {
  task: string;
}

export function Task({ task }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCompleteTask() {
    setIsChecked(true);
    console.log('checado');
    
  }

  return (
    <S.Container>
      <S.Content>
        <input
          type="checkbox"
          onClick={handleCompleteTask}
          checked={isChecked}
        />

        <S.DivText>
          <S.Text>{task}</S.Text>
        </S.DivText>
        <Trash size={24} color="#FFF" />
      </S.Content>
    </S.Container>
  );
}
