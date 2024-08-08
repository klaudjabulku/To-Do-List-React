const DisplayList = ({ tasks, handleEdit, deleteTask }) => {
    return (
      <div className='task-container'>
        <h2 className='text-center mt-5'>To Do List</h2>
        {
          tasks.length > 0 ? (
            tasks.map((task) => (
              <div key={task.id} className='task'>
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <p>{task.creator}</p>
                <button 
                  onClick={() => handleEdit(task)}
                  className="btn btn-outline-primary me-2"
                >
                  Edit
                </button>
                <button 
                  onClick={() => deleteTask(task.id)} 
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className='text-center'>No tasks available</p>
          )
        }
      </div>
    );
  };
  
  export default DisplayList;
  