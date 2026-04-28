import { boardData } from "@/app/data/BoardData";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem 0;
  max-width: 4xl;
  margin: auto;
`;

const Header = styled.div`
  text-align: left;
`;

const HeaderBackground = styled.div`
  background-color: #34d399;
  padding: 1rem 4px 4px 4px;
`;

const BoardTitle = styled.h2`
  font-weight: bold;
  color: #fff;
`;

const Content = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-left: 25px;
  background-color: #d8fff1;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;
`;

const ColumnHeader = styled.h3`
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 70vh;
`;

type TaskButtonProps = { isSelected: boolean };

const TaskButton = styled.button<TaskButtonProps>`
  border: 1px solid #e2e8f0;
  min-width: 200px;
  height: 50px;
  width: 100%;
  background-color: ${({ isSelected }) => (isSelected ? "#34d399" : "#fff")};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
  cursor: pointer;

  &:hover {
    background-color: #e2e8f0;
  }
`;

const UpdateTaskHeader = styled.h2`
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const UpdateTaskInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
`;

type TaskProps = {
    columnIndex: number;
    taskIndex: number
};

export const TaskBoard = () => {

    // loading the board data from the BoardData file
    const [board, setBoard] = useState<typeof boardData>(boardData);

    // the current selected task, this will be showing the data of it
    const [selectedTask, setSelectedTask] = useState<TaskProps | null>(null);

    // this will be called when the user clicks on a task, it will set the selected task to the task that was clicked
    const onSelectTask = (columnIndex: number, taskIndex: number) => {
        setSelectedTask({
            columnIndex,
            taskIndex,
        });
    };

    /**
     * This function will be called when the user changes the name of a task
     * @param e event that will be triggered when the user changes the name of a task,
     * it will be used to get the new name of the task, and also to prevent the default behavior
     * of the input element
     * @returns void
     */
    const onTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        // if there is no selected task, we cannot change the name of it
        if (!selectedTask) return;

        // destructing the columnIndex and taskIndex from the selectedTask state
        const { columnIndex, taskIndex } = selectedTask;

        // updating the board state
        setBoard((board) => {
            return {
                ...board,
                columns: [
                    ...board.columns.map((column, colIndex) => {
                        if(columnIndex !== colIndex){
                            return column;
                        }
                        return {
                            ...column,
                            tasks: column.tasks.map((task, taskId) => {
                                if(taskIndex !== taskId){
                                    return task;
                                }
                                return {
                                    ...task,
                                    name: e.target.value,
                                };
                            })
                        }

                    })
                ]
            }

        })

    }

    return (
        <Container>
            <Header>
                <HeaderBackground>
                    <BoardTitle>{board.name}</BoardTitle>
                </HeaderBackground>
                <Content>
                    {board.columns.map((column, columnIndex) => (
                        <ColumnContainer key={columnIndex}>
                            <ColumnHeader>{column.name}</ColumnHeader>
                            <TaskContainer>
                                {column.tasks.map((task, taskIndex) => (
                                    <TaskButton
                                        key={taskIndex}
                                        isSelected={
                                            columnIndex === selectedTask?.columnIndex &&
                          taskIndex === selectedTask?.taskIndex
                                        }
                                        onClick={() => onSelectTask(columnIndex, taskIndex)}
                                    >
                                        <h4>{task.name}</h4>
                                    </TaskButton>
                                ))}
                            </TaskContainer>
                        </ColumnContainer>
                    ))}
                    <div>
                        <UpdateTaskHeader>
                            {selectedTask ? "Update task" : "Select a task to update"}
                        </UpdateTaskHeader>
                        {selectedTask ? (
                            <UpdateTaskInput
                                type="text"
                                value={
                                    board.columns[selectedTask.columnIndex].tasks[
                                        selectedTask.taskIndex
                                    ].name
                                }
                                onChange={onTaskNameChange}
                            />
                        ) : null}
                    </div>
                </Content>
            </Header>
        </Container>
    );
}
