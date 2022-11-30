import { ClipboardText } from "phosphor-react";
import { Task } from "../Task";

import * as S from "./styles";





export function TasksList({content}: any) {
  return (
    <S.Container>
      <S.Info>
        <S.InfoContent>
          <S.CreatedTasks>Tarefas criadas</S.CreatedTasks>
          <S.Counter>0</S.Counter>
        </S.InfoContent>

        <S.InfoContent>
          <S.EndedTasks>Concluídas</S.EndedTasks>
          <S.Counter>0</S.Counter>
        </S.InfoContent>
      </S.Info>

      <S.Content>
          {/* <>
          <ClipboardText size={56} color="#333333" />
          <S.Strong>Você ainda não tem tarefas cadastradas</S.Strong>
          <S.Span>Crie tarefas e organize seus itens a fazer</S.Span>
          </> */}
        
        
         <Task task="asdasdasd" />
         {/* {
          content.map(item => <Task task={item} />)
         } */}
          
         
      </S.Content>
    </S.Container>
  );
}
