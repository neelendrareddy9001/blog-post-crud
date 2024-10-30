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
  return (
    <div>Todolist</div>
  )
}
