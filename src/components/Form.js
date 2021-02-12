import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus , setSearch}) => {
    const inputTextHandeler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandeler = (e) =>{
       e.preventDefault();
       setTodos([
           ...todos, 
           { text: inputText, completed: false, id: Math.random() * 1000} 
        ]);
       setInputText('');
    };
    const statusHandler = (e) =>{
        setStatus(e.target.value);
    };

    return(
        <form>
            <input value={inputText} onChange={inputTextHandeler} type="text" className="todo-input" />

            <button onClick={submitTodoHandeler} className="todo-button" type="submit"><i className="fas fa-plus-square">
            </i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo" >
                    <option value="all">All</option>
                    <option value="completed">Viewed</option>
                    <option value="uncompleted">Unviewed</option>
                </select>
               
            </div>
            
        </form>
    );
};

export default Form;