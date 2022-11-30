import { PlusCircle } from "phosphor-react";

import * as S from "./styles";

export function NewTask() {
  return (
    <S.Container>
      <S.Input placeholder="Adicione uma nova tarefa" />
      <S.Button>
        Criar <PlusCircle size={16} style={{ marginLeft: "6px" }} />
      </S.Button>
    </S.Container>
  );
}
