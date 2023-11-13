import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

function Task(props) {
  const { task, index } = props
  return (
    <Draggable draggableId={task} index={index}>
      {(provided) => (
        <div className='task-container' {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
          {task}
        </div>
      )}
    </Draggable>
  )
}

export default Task