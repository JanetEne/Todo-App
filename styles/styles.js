import styled from 'styled-components'

export const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: #f3c3b0;
  color: white;
  font-size: 30px;
  align-items: center;
  display: flex;
  font-weight: 500;
  padding-left: 15px;
`

export const StyledInputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

export const StyledInputContainer = styled.form`
  width: 30%;
  height: auto;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 20px;
  position: relative;
`

export const StyledInput = styled.input`
  border: none;
  color: #000;
  display: block;
  width: 100%;
  font-size: 18px;
  margin: 10px 0;
  outline: none;
  &::placeholder {
    color: #3c4043;
    opacity: 1;
  }
  :disabled {
    background-color: transparent;
  }
`

export const StyledInputTextArea = styled.textarea`
  border: none;
  color: #000;
  display: block;
  height: 80px;
  width: 100%;
  font-size: 18px;
  outline: none;
  resize: none;
  overflow: hidden;
  min-height: 10px;
  &::placeholder {
    color: #3c4043;
    opacity: 1;
  }
  overflow: auto;
`

export const StyledTextArea = styled.textarea`
  border: none;
  color: #000;
  display: block;
  width: 100%;
  font-size: 18px;
  outline: none;
  resize: none;
  overflow: hidden;
  min-height: 10px;
  &::placeholder {
    color: #3c4043;
    opacity: 1;
  }
  :disabled {
    background-color: transparent;
  }
`

export const StyledImage = styled.img`
  position: absolute;
  top: 150px;
  right: 20px;
  cursor: pointer;
`

export const StyledContainer = styled.div`
  width: 300px;
  height: auto;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 20px;
  margin-left: 30px;
`

export const StyledTodoContainer = styled.div`
  display: flex;
  margin-top: 50px;
`

export const StyledIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const StyledEditIcon = styled.div`
  margin-right: 10px;
  cursor: pointer;
`

export const StyledTrashIcon = styled.div`
  cursor: pointer;
`

export const StyledButton = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  background-color: #f3c3b0;
  color: white;
`
