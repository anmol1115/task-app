import React, { useState } from 'react'

function Creater(props) {
  const { updateTasks } = props
  const [newTask, setNewTask] = useState("")

  function handleClick() {
    updateTasks(newTask)
    setNewTask("")
  }

  return (
    <div className='creater-container'>
        <span>Create a new task</span>
        <div className='flex creater-input'>
          <input value={newTask} onChange={(e) => {setNewTask(e.target.value)}}/>
          <button onClick={handleClick}>+</button>
        </div>
    </div>
  )
}

export default Creater