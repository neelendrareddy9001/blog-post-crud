import TododType from "./todo";

const LOCAL_STORAGE_KEY = 'todos';

const TodoService = {
    //Get Todos
    getTodos: (): TododType[] => {
        const todostr = localStorage.getItem(LOCAL_STORAGE_KEY);
        return todostr ? JSON.parse(todostr) : []
    }
}



export default TodoService