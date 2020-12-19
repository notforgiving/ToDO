import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { doneTask, removeTask } from "../redux/action/tasks";

function TaskItem(props) {
  const dispatch = useDispatch();

  const handleDoneTask = () => {
    dispatch(doneTask(props.task.id));
  };

  const handleRemoveTask = () => {
    dispatch(removeTask(props.id));
  };

  return (
    <Card>
      <Card.Body className="task__group">
        <div className={props.task.done ? "done task__text" : "task__text"}>{props.task.name} </div>
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

export default TaskItem;
