import React from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage';


export default function useTodos() {

    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage("TODOS_V1", []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(x => x.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];
    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(x => x.text.toLowerCase()
            .includes(searchValue.toLowerCase()));
    }

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        saveTodos(newTodos);
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        const maxId = newTodos.length > 0 ? Math.max.apply(Math, newTodos.map(x => x.id)) : 0;
        newTodos.push({
            id: (maxId + 1),
            completed: false,
            text: text
        });
        saveTodos(newTodos);
    }

    return {
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }
}
