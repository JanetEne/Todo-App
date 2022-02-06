import React, { createRef, FC, RefObject, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { ITodo } from '.'
import {
  StyledButton,
  StyledContainer,
  StyledEditIcon,
  StyledIconContainer,
  StyledInput,
  StyledTextArea,
  StyledTrashIcon
} from '../styles/styles'

interface Props {
  todoTitle: string
  todoDetail: string
  todos: ITodo[]
  setTodo: Function
  todo: ITodo
}

const Todos: FC<Props> = ({ todoTitle, todoDetail, todos, setTodo, todo }) => {
  const [disabled, setDisabled] = useState<Boolean>(true)
  const [updatedTodotitle, setUpdatedTodotitle] = useState<string>('')
  const [updatedTododetails, setUpdatedTododetails] = useState<string>('')
  const [showSaveButton, setShowSaveButton] = useState(false)

  const deleteTodo = (id) => {
    const getTodo = todos.find((item, index) => item.id === id)

    if (getTodo) {
      const filteredArray = todos.filter((item: ITodo) => item.id !== id)
      toast.success('Note Trashed', {
        duration: 3000
      })
      setTodo(filteredArray)
    }
  }

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTodotitle(e.target.value)
  }

  const handleTextAreaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpdatedTododetails(e.target.value)
  }

  const editTodo = (id) => {
    const getTodo = todos.find((item) => item === todo)

    if (getTodo) {
      const editedTodo = todos.filter((item) => {
        if (item.id === id) {
          todo.todoDetail = updatedTododetails || todo.todoDetail
          todo.todoTitle = updatedTodotitle || todo.todoTitle
          toast.success('Todo edited', {
            duration: 3000
          })
          setShowSaveButton(false)
        }
        return todo
      })
      setTodo(editedTodo)
    }
  }

  const ref: RefObject<HTMLDivElement> = createRef()

  const editIconClick = () => {
    setDisabled(false)
    ref.current.focus()
    setShowSaveButton(true)
  }

  return (
    <StyledContainer>
      <StyledInput
        defaultValue={todoTitle}
        onChange={handleInputValue}
        disabled={disabled}
        ref={ref}
      />
      <hr />
      <StyledTextArea
        defaultValue={todoDetail}
        onChange={handleTextAreaValue}
        disabled={disabled}
      />

      <StyledIconContainer>
        {showSaveButton ? (
          <StyledButton onClick={() => editTodo(todo.id)}>Save</StyledButton>
        ) : (
          <>
            <StyledEditIcon>
              <img
                src="https://img.icons8.com/material-two-tone/24/000000/edit--v1.png"
                onClick={editIconClick}
              />
            </StyledEditIcon>
            <StyledTrashIcon>
              <img
                src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"
                onClick={() => deleteTodo(todo.id)}
              />
            </StyledTrashIcon>{' '}
          </>
        )}
      </StyledIconContainer>
    </StyledContainer>
  )
}

export default Todos
