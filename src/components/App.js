import React, { Fragment } from "react"
// import { AppUI } from "./AppUI";
// import { TodoProvider } from "../../Context";
// import { TodoContext } from '../../Context';
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import TodoButton from './TodoButton';
import logo from '../../logo.jpg';
import TodoForm from './TodoForm';
import { Modal } from './Modal';
import TodoosLoading from './TodosLoading';
import TodosError from './TodosError';
import EmptyTodos from './EmptyTodos';
import TodoHeader from './TodoHeader';
import useTodos from '../Hooks/useTodos';

function App(props) {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo
  } = useTodos();

  // return (
  //   <TodoProvider>
  //      <AppUI/>
  //   </TodoProvider>
  // );

  return (
    <Fragment>
      <img src={logo} width="200" alt="Logo" />
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchValue={searchValue}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodoosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchTodos={(searchedText) => (
            <h3>No hay Resultados para "{searchedText}"</h3>
        )}

        // UTILIZANDO RENDER PROPS
        // render={(todo, index) => (
        //   <TodoItem
        //     key={todo.id}
        //     text={todo.text}
        //     completed={todo.completed}
        //     completar={() => completeTodo(index)}
        //     remover={() => deleteTodo(index)} />
        // )}
      >

        {/* UTILIZANDO RENDER FUNCTIONS */}
        {(todo, index) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            completar={() => completeTodo(index)}
            remover={() => deleteTodo(index)} />
        )}
      </TodoList>

      {/* <TodoList>
        {error && <TodosError />}
        {(loading && !error) && <TodoosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            completar={() => completeTodo(index)}
            remover={() => deleteTodo(index)} />
        ))}
      </TodoList> */}

      {openModal && (<Modal>
        <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}></TodoForm>
      </Modal>)}
      <TodoButton setOpenModal={setOpenModal} />
    </Fragment>
  );
}

export default App;
