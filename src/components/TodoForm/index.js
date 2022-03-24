import React from 'react'
import { TodoContext } from '../../Context';
import styles from './TodoForm.module.css';
import logo from '../../logo.jpg';

export default function TodoForm() {

  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {addTodo, setOpenModal} = React.useContext(TodoContext);

  const onChangeTodoText = (event) =>{
    setNewTodoValue(event.target.value);
  }

  const onCancel = ()=>{
    setNewTodoValue('');
    setOpenModal(false);
  }

  const onSave = (event)=>{
    event.preventDefault();
    event.stopPropagation();
    if(newTodoValue.trim()){
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  }
  return (
    <form className={styles.formTodo} onSubmit={onSave}>
      <img src={logo} width="100" alt="Logo" />
      <label className={styles.formInputLabel}>Añade una nueva tarea</label>
      <textarea 
        className={styles.formInputTexArea}
        value={newTodoValue}
        onChange={onChangeTodoText}
        placeholder='Recoger a los niños del colegio'
      />
      <div className={styles.formButtons}>
        <button type='button' onClick={onCancel}>Cancelar</button>&nbsp;
        <button type='submit'>Agregar</button>
      </div>
    </form>
  )
}
