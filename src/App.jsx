import { Button, Container, Flex, Input, Spacer, Item } from "./styles"
import { useState } from "react"
import React from "react";


function App() {

  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState([]);

  const addTask = () => {
    if (!task) {
      alert("Preencha uma tarefa")
    }
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    }

    setListTask([...listTask, newTask])
    setTask('')
  }

  const removeTask = (id) => {
    const newList = listTask.filter(task => task.id !== id);
    setListTask(newList)
  }

  const toggleChecked = (id, checked) => {
    const index = listTask.findIndex((task) => task.id === id)
    const newList = listTask
    newList[index].checked = !checked
    setListTask([...newList])
  }

  return (
    <Container>
      <h1 className="title">TO-DO LIST</h1>
      <Spacer />
      <Flex direction="row">
        <Input value={task} placeholder="Digite sua tarefa" onChange={(e) => setTask(e.target.value)} />
        <Button onClick={addTask}>Adicionar</Button>
      </Flex>
      <Spacer margin="16px" />

      <ul>
        {listTask.map((task) => (
          <React.Fragment key={task.id}> <Item key={task.id} checked={task.checked}>
            <p>{task.task}</p>
            <Flex direction="row" >
              <button onClick={() => toggleChecked(task.id, task.checked)}><i class='bx bx-check'></i></button>
              <button onClick={() => removeTask(task.id)}><i class='bx bx-trash'></i></button>
            </Flex>
          </Item>
            <Spacer margin="12px" /></React.Fragment>
        ))}


      </ul>



    </Container>
  )
}

export default App
