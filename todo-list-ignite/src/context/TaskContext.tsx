/* eslint-disable no-unused-expressions */
import { createContext, ReactNode, useState } from 'react';

import { Tasks } from '../screens/Home/Home';

interface TasksProps {
  tasks: Tasks[];
  setTasks: (newState: Tasks[]) => void;
  text: string;
  setText: (newState: string) => void;
  countCreatedTasks: number;
  setCountCreatedTasks: (newState: number) => void;
  countFinishedTasks: number;
  setCountFinishedTasks: (newState: number) => void;
}

const initialType = {
  tasks: [],
  setTasks: () => {},
  text: '',
  setText: () => {},
  countCreatedTasks: 0,
  setCountCreatedTasks: () => {},
  countFinishedTasks: 0,
  setCountFinishedTasks: () => {},
};

export const TaskContext = createContext<TasksProps>(initialType);

interface TaskProviderProps {
  children: ReactNode;
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Tasks[]>(initialType.tasks);
  const [text, setText] = useState(initialType.text);
  const [countCreatedTasks, setCountCreatedTasks] = useState(initialType.countCreatedTasks);
  const [countFinishedTasks, setCountFinishedTasks] = useState(initialType.countFinishedTasks);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        text,
        setText,
        countCreatedTasks,
        setCountCreatedTasks,
        countFinishedTasks,
        setCountFinishedTasks,
      }}>
      {children}
    </TaskContext.Provider>
  );
}
