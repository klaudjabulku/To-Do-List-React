import { useState } from 'react';
import AddNewToDo from './components/AddNewToDO';
import DisplayList from './components/DisplayList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    if (editingTask) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      setTasks([...tasks, task]);
    }
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  return (
    <div className='container'>
      <AddNewToDo addTask={addTask} editingTask={editingTask} setEditingTask={setEditingTask} />
      <DisplayList tasks={tasks} handleEdit={handleEdit} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
