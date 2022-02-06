import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import TodoForm from './form'
import { StyledHeader } from '../styles/styles'

export interface ITodo {
  todoTitle: string
  todoDetail: string
  id: number
}

const Home = () => {
  return (
    <div>
      <StyledHeader>
        <img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-bulb-electrical-devices-icongeek26-linear-colour-icongeek26.png" />
        <div>Note Keep</div>
      </StyledHeader>

      <TodoForm />
    </div>
  )
}

export default Home
