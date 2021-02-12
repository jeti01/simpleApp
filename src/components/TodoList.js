import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return(
        <div className="todo-container">
        <ul className="todo-list">
            <h1>My Note</h1>
            <p>Category &middot; datas</p>
            {filteredTodos.map((todo) => (
                <Todo 
                setTodos={setTodos} 
                todos={todos}
                key={todo.id} 
                todo={todo}
                text={todo.text}
                />
            ))}
        </ul>
        </div>
        
    );
};

export default TodoList;