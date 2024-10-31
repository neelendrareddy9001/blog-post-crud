import {useState} from 'react'
import TododType from '../todo'
import TodoService from '../TodoService';

export const Todolist = () => {
    const [todos, setTodos] = useState<TododType[]>(TodoService.getTodos());
    const [editingTodoId, setEditingTodoId] = useState<number | null> (null);
    const [editedTodoText, setEditedTodoText] = useState<string>("")

    //function for handling edit actions
    const handleEditStart = (id:number, text: string) => {
        setEditingTodoId(id);
        setEditedTodoText(text);
    }

    const handleEditCancel = () => {
        setEditingTodoId(null);
        setEditedTodoText("")
    }

    const handlEditSave = (id: number) => {
        if(editedTodoText.trim() !== '') {
            const updateTodo = TodoService.updateTodo({
                id,
                text: editedTodoText,
                completed: false
            });
            setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? updateTodo : todo)))
        } 
    }


  return (
    <div className='todoContainer'>
        {/* Todo Input Form Component Goes Here */}
        {todos.map((todo) => {
            <div className='' key={todo.id}></div>
        })}
    </div>
  )
}
