import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from './Actions';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEditTask = () => {
    if (editedDescription.trim() !== '') {
      dispatch(editTask(task.id, editedDescription));
      setIsEditing(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleEditTask}>Save</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={handleToggleTask}
          />
          <span>{task.description}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Task;
