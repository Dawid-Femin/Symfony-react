import React from 'react';
import TodoContextProvider from "./context/TodoContext";
import TodoTable from "./components/TodoTable";

const App = () => {

    return (
        <>
            <TodoContextProvider>
                <TodoTable />
            </TodoContextProvider>
        </>
    );
};

export default App;