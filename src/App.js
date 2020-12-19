import React, { useEffect } from "react";
import { Container, Row, Card, ListGroup } from "react-bootstrap";
import Control from "./components/Control";
import TaskItem from "./components/TaskItem";
import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "./redux/action/tasks";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const { state } = useSelector((state) => state);

  useEffect(() => {
    axios.get(`http://localhost:3000/db.json`).then(({ data }) => {
      dispatch(setTasks(data.tasks));
    });
  }, [dispatch]);

  return (
    <Container className="block__center align-items-md-center">
      <Row className="align-items-md-center">
        <Card bg="light  " text="dark">
          <Card.Body>
            <Card.Title>To-Do:</Card.Title>
            <Card.Text>Add you task at list</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {
              state.tasks.map((task,index)=>{
                return <TaskItem key={`${task}${index}`} task={task} id={index}/>
              })
            }
          </ListGroup>
          <Card.Body>
            <Control />
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default App;
