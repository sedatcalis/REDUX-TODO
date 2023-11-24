import { useSelector } from "react-redux"
import TodoCard from "./TodoCard"


const ListTodos = () => {
  // todoreducer'da tutulan verilere abone olma işlemi
 const  state = useSelector((store) => store.todoReducer)

  return (
    <div>
    {state.todos.length === 0 ? (
      <h5 className="text-center text-danger">Herhangi bir şey eklenmedi !!</h5>
    ) : (
      state.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))
    )}
  </div>
  )
}

export default ListTodos
