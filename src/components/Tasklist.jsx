import React from 'react'
import Task from './Task'
import { Droppable } from 'react-beautiful-dnd'

function Tasklist(props) {
  const { banner, tasks } = props

  return (
    <Droppable droppableId={banner}>
      {(provided) => (
      <div className='tasklist-container flex' {...provided.droppableProps} ref={provided.innerRef}>
        <span className='flex'>{banner}</span>
        <div className='task-wrapper flex'>
          {tasks.map((task, idx) => {
            return <Task key={task} task={task} index={idx}/>
          })}
          {provided.placeholder}
        </div>
      </div>
      )}
    </Droppable>
  )
}

export default Tasklist