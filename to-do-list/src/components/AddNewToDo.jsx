import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const AddNewToDo = ({ addTask, editingTask, setEditingTask }) => {
  const [title, setTitle] = useState(editingTask ? editingTask.title : "");
  const [description, setDescription] = useState(editingTask ? editingTask.description : "");
  const [creator, setCreator] = useState(editingTask ? editingTask.creator : "");
  const [error, setError] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setError("");

    if (!title || !description || !creator) {
      setError("All fields are required.");
      return;
    }

    if (editingTask) {
      addTask({ title, description, creator, id: editingTask.id });
      setEditingTask(null);
    } else {
      addTask({ title, description, creator, id: uuidv4() });
    }

    setTitle(""); 
    setDescription(""); 
    setCreator(""); 
  };

  return (
    <div className='form-container'>
      <h2 className='text-center'>{editingTask ? 'Edit Task' : 'To Do List'}</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>Task</label>
          <input
            type='text'
            id='title'
            className='form-control'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>Description</label>
          <input
            type='text'
            id='description'
            className='form-control'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='creator' className='form-label'>Creator</label>
          <input
            type='text'
            id='creator'
            className='form-control'
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
          />
        </div>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <button type="submit" className="btn btn-outline-light">
          {editingTask ? 'Update Task' : 'Create Task'}
        </button>
        {editingTask && (
          <button
            type="button"
            className="btn btn-outline-secondary ms-2"
            onClick={() => setEditingTask(null)}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default AddNewToDo;
