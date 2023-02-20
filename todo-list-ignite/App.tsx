import { StatusBar } from 'expo-status-bar';

import { TaskProvider } from './src/context/TaskContext';
import { Home } from './src/screens/Home/Home';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <TaskProvider>
        <Home />
      </TaskProvider>
    </>
  );
}
