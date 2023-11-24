import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { ActionTypes } from "../redux/actionTypes/todoTypes";
import { addTodo } from "../redux/actıons/todoActıon";
import axios from "axios";


const AddForm = () => {
  const state = useSelector((store) => store.themeReducer);

  // dispatch kurulumu
  const dispatch = useDispatch();

  // form gönderilmesi
  const handleSubmit = (e) => {
    e.preventDefault();

    // todo objesi oluşturma
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date(),
    };

     //TODO PROBLEM VAR
    // veirtabanına ekle
    axios
      .post('/todos', newTodo)
      // veritabanına eklendiyse: store'u güncelle
      .then(() => dispatch(addTodo(newTodo)))
      // veritabanına eklenmediyse: haber ver
      .catch(() => alert('üzgünüz bir sorun oluştu'));
  };
  return (
    <form 
      onSubmit={handleSubmit}
      className="d-flex gap-2 justify-content-center "
    > 
      <input   className="form-control" type={ state.theme === "#000000" ? { color: "#fff" } : { color: "#000000" }} />
      <button style={
    state.theme === "#000000" ? { color: "#fff" } : { color: "#000000" }
  } className="btn btn-lg btn-outline-light">Ekle</button>
    </form>
  );
};

export default AddForm;
