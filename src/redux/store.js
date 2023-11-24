/**
 * !Store oluşturma
 * 1.redux kütüphanesinden "createStore" methodu import edilir
 * 
 * 2. store içerisinde tutulan verileri kategorize edilir ve
 * her bir kategori için reducer oluşturulur.
 * 
 * 3. oluşturulan reducerlar "combineReducers" methodunda bileştirilir
 * 
 * 4. store'a oluşturulan birleşmiş reducerlar tanıtılır
 * 
 * 5. oluşturlan store projeye tanıtılır
 * 
 */

import { combineReducers, createStore } from "redux";

import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";
import themeReducer from "./reducers/ThemeReducer";

// birden fazla reducer varsa birleştirir
const rootReducer = combineReducers({
    todoReducer,
    userReducer,
    themeReducer,
})

// store' oluşturma ve reducerları tanıtma
const store = createStore(rootReducer)

export default store