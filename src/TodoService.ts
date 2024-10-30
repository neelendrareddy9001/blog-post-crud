import TododType from "./todo";

const LOCAL_STORAGE_KEY = 'todos';

const TodoService = {
    //Get Todos
    getTodos: (): TododType[] => {
        const todostr = localStorage.getItem(LOCAL_STORAGE_KEY);
        return todostr ? JSON.parse(todostr) : []
    },

    //Adding Todos
    addTodos: (text: string) : TododType => {
        const todos = TodoService.getTodos();
        const newTodo : TododType = {id: todos.length + 1, text, completed: false};
        const updateTodos = [...todos, newTodo]; 
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos))
        return newTodo
    },


    //updating the todo
    updateTodo: (todo: TododType): void => {
        const todos = TodoService.getTodos();
        const updateTodos = todos.map((t) => (t.id === todo.id ? todo : t));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    },


    //deleting the todos
    deleteTodos: (id: number): void => {
        const todos = TodoService.getTodos();
        const updateTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos))
    }
}


export default TodoService