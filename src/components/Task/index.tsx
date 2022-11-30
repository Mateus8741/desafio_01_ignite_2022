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
  }

  return (
    <S.Container isChecked={isChecked}>
      <S.Content>
        <input type="checkbox" onChange={handleCompleteTask} checked={isChecked}/>

        <S.DivText>
          <S.Text isChecked={isChecked}>{task}</S.Text>
        </S.DivText>
        <Trash size={24} color="#FFF" cursor="pointer" />
      </S.Content>
    </S.Container>
  );
}
