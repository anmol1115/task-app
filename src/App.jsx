import './App.css'
import Creater from './components/Creater'
import Tasklist from './components/Tasklist'
import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

function App() {
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  function updateTasks(newTask) {
    let taskCopy = tasks.slice()
    taskCopy.push(newTask)
    setTasks(taskCopy)
  }
  
  function handleDragEnd(result) {
    const { source, destination } = result

    if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
      return
    }

    let tasksCopy = Array.from(tasks)
    let completedTasksCopy = Array.from(completedTasks)
    let removed

    if (source.droppableId === "To do") {
      [removed] = tasksCopy.splice(source.index, 1)
    } else {
      [removed] = completedTasksCopy.splice(source.index, 1)
    }

    if (destination.droppableId === "To do") {
      tasksCopy.splice(destination.index, 0, removed)
    } else {
      completedTasksCopy.splice(destination.index, 0, removed)
    }

    setTasks(tasksCopy)
    setCompletedTasks(completedTasksCopy)
  }

  return (
    <div className='container flex'>
      <Creater updateTasks={updateTasks}/>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className='tasklist-wrapper flex'>
          <Tasklist banner={"To do"} tasks={tasks}/>
          <Tasklist banner={"Completed"} tasks={completedTasks}/>
        </div>
      </DragDropContext>
    </div>
  )
}

export default App
