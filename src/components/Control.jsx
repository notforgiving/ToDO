import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addTask } from "../redux/action/tasks";
import { useDispatch } from "react-redux";

function Control(props) {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleClick = () => {
    dispatch(addTask(newTask));
    setNewTask('')
  };

  return (
    <Form inline>
      <Form.Group>
        <Form.Label htmlFor="inputtext">Task</Form.Label>
        <Form.Control
          type="text"
          className="mx-sm-3"
          aria-describedby="inputtext"
          value={newTask}
          onChange={handleChange}
        />
        <Button onClick={handleClick} variant="primary">
          Save task
        </Button>
      </Form.Group>
    </Form>
  );
}

export default Control;
