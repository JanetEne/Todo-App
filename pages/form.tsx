import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { ITodo } from '.'
import {
  StyledImage,
  StyledInput,
  StyledInputContainer,
  StyledInputTextArea,
  StyledInputWrap,
  StyledTextArea,
  StyledTodoContainer
} from './styles'
import Todos from './todos'

const TodoForm = () => {
  const [showInput, setShowInput] = useState<Boolean>(false)
  const [todoTitle, setTodoTitle] = useState<string>('')
  const [todoDetail, setTodoDetail] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const toggleShowInput = () => {
    setShowInput(true)
  }

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value)
  }

  const handleTextAreaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodoDetail(e.target.value)
  }

  const addTodo = () => {
    if (todoDetail !== '' && todoTitle !== '') {
      setTodos([...todos, { todoDetail, todoTitle }])
      setTodoDetail('')
      setTodoTitle('')
    } else {
      toast.error('You cannot submit an empty field')
    }
  }

  return (
    <>
      <StyledInputWrap>
        <StyledInputContainer>
          {showInput ? (
            <>
              <StyledInput
                placeholder="Title"
                onChange={handleInputValue}
                value={todoTitle}
              />
              <hr />
              <StyledInputTextArea
                placeholder="Take a note..."
                cols="30"
                rows="1"
                onChange={handleTextAreaValue}
                value={todoDetail}
                autoFocus
              />

              <StyledImage
                src="https://img.icons8.com/ios-filled/50/000000/add--v1.png"
                onClick={addTodo}
              />
            </>
          ) : (
            <StyledTextArea
              placeholder="Take a note..."
              onClick={toggleShowInput}
              cols="30"
              rows="1"
              onChange={handleTextAreaValue}
              value={todoDetail}
            />
          )}
        </StyledInputContainer>
      </StyledInputWrap>

      {todos ? (
        <StyledTodoContainer>
          {todos.map((todo: ITodo, index: number) => (
            <Todos
              todoTitle={todo.todoTitle}
              todoDetail={todo.todoDetail}
              key={index}
              todos={todos}
              setTodo={setTodos}
              todo={todo}
            />
          ))}
        </StyledTodoContainer>
      ) : (
        ''
      )}
    </>
  )
}

export default TodoForm
