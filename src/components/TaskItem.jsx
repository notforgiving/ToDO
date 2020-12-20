import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { doneTask, removeTask } from "../redux/action/tasks";
import PropTypes from 'prop-types';

function TaskItem({task,id}) {
  const dispatch = useDispatch();

  const handleDoneTask = () => {
    dispatch(doneTask(task.id));
  };

  const handleRemoveTask = () => {
    dispatch(removeTask(id));
  };

  return (
    <Card>
      <Card.Body className="task__group">
        <div className={task.done ? "done task__text" : "task__text"}>{task.name} </div>
        <div>
          <Button onClick={handleDoneTask} variant="success">
            V
          </Button>{" "}
          <Button onClick={handleRemoveTask} variant="danger">
            X
          </Button>{" "}
        </div>
      </Card.Body>
    </Card>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};


export default TaskItem;
