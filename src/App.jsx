import axios from "axios";
import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "./redux/actıons/todoActıon";
import ThemeButton from "./components/ThemeButton";
import store from "./redux/store";

axios.defaults.baseURL = "http://localhost:4000/";

function App() {
  const state = useSelector((store) => store.themeReducer);
  console.log(store.theme);
  const dispatch = useDispatch();

  // veritabanındaki todoları al ve store'a aktar
  useEffect(() => {
    axios.get("/todos").then((res) => dispatch(setTodos(res.data)));
  }, []);

  return (
    <div 
      style={{height:"100vh",  backgroundColor: state.theme }}
      className="  d-flex flex-column gap-5 "
    >
      <h1 className="text-center shadow">
        
        REDUX <span className="text-danger shadow">TODO</span>
      </h1>

      <AddForm />
      <ThemeButton />
      <ListTodos />
    </div>
  );
}

export default App;
