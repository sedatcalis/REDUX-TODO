import Modal from "./Modal";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../redux/actıons/todoActıon";
import axios from "axios";
import store from "../redux/store";


const TodoCard = ({ todo }) => {
  const state = useSelector((store) => store.themeReducer);

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  // store'dan todoyu kaldır
  const handleDelete = () => {
    // reducer'a haber ver
   console.log(store);

    axios.delete(`/todos/${todo.id}`).then(() => dispatch(deleteTodo(todo.id)));
  };

  const handleUpdate = () => {
    // todonun güncel halini belirleme
    const updated = { ...todo, is_done: !todo.is_done };

    dispatch(editTodo(updated));
  };
  return (
    <>
      <div className="border border-danger shadow shadow-lg p-4 my-3 ">
      <h5
  style={
    state.theme === "#000000" ? { color: "#fff" } : { color: "#000000" }
  }
>
  {todo.text}
</h5>


        <h6 
          style={
            state.theme === "#000000" ? { color: "#fff" } : { color: "#000000" }
          }
        
        >{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>

        <p   style={
            state.theme === "#000000" ? { color: "#fff" } : { color: "#000000" }
          } 
        >{new Date(todo.created_at).toLocaleDateString()}</p>

        <button onClick={handleUpdate} className="btn btn-success">
          {todo.is_done ? "Geri Al " : "Tamamla"}
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-warning mx-4"
        >
          Düzenle
        </button>
        <button onClick={handleDelete} className="btn btn-danger">
          Sil
        </button>
      </div>

      {/* modal */}
      {isOpen && <Modal close={() => setIsOpen(false)} todo={todo} />}
    </>
  );
};

export default TodoCard;
