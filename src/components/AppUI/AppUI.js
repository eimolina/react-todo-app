import React, { Fragment } from 'react';
import { TodoContext } from '../../Context';
import TodoCounter from '../TodoCounter';
import TodoSearch from '../TodoSearch';
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';
import TodoButton from '../TodoButton';
import logo from '../../logo.jpg';
import TodoForm from '../TodoForm';
import { Modal } from '../Modal';
import TodoosLoading from '../TodosLoading';
import TodosError from '../TodosError';
import EmptyTodos from '../EmptyTodos';

function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <Fragment>
      <img src={logo} width="200" alt="Logo" />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodosError/>}
        {(loading && !error) && <TodoosLoading/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos/>}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            completar={() => completeTodo(index)}
            remover={() => deleteTodo(index)} />
        ))}
      </TodoList>
      {openModal && (<Modal>
        <TodoForm></TodoForm>
      </Modal>)}

      <TodoButton setOpenModal={setOpenModal} />
    </Fragment>
  );


  // BY RENDER PROPS

  // return (
  //   <Fragment>
  //     <img src={logo} width="200" alt="Logo" />
  //     <TodoCounter />
  //     <TodoSearch />
  //     <TodoContext.Consumer>
  //       {({error, loading, searchedTodos, completeTodo, deleteTodo}) => (
  //         <TodoList>
  //           {error && <p>Deseespérate, hubo un error....</p>}
  //           {loading && <p>Estamos cargando, no desesperes....</p>}
  //           {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
  //           {searchedTodos.map((todo, index) => (
  //             <TodoItem
  //               key={todo.id}
  //               text={todo.text}
  //               completed={todo.completed}
  //               completar={() => completeTodo(index)}
  //               remover={() => deleteTodo(index)} />
  //           ))}
  //         </TodoList>
  //       )}
  //     </TodoContext.Consumer>

  //     <TodoButton />
  //   </Fragment>
  // );
}

export { AppUI };