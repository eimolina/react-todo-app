import React from "react"
import { AppUI } from "./AppUI";
import { TodoProvider } from "../../Context";

function App(props) {

  return (
    <TodoProvider>
       <AppUI/>
    </TodoProvider>
  );
}

export default App;
