import React, {useContext} from 'react';
import {TodoContext} from "../context/TodoContext";

const TodoTable = () => {

    const context = useContext(TodoContext);

    return (
        <div>
            {context.todos.map(todo => (
                <h3>
                    Task: {todo.task[1]} <br></br> Deadline: {todo.deadline}
                </h3>
            ))}
        </div>
    );
};

export default TodoTable;