/**
 * !Reducer
 * store'un nasıl değinecegine karar verir
 * reducer normal bir fonksiyon
 * ve iki paremetre alır
 * > state: store'da tutulan verinin son durumu
 * > action: store'ın nasıl güncellenecegini söyleyeb obje
 *
 * reducerda return edilen veri store'un güncel halidir
 *
 */

import { ActionTypes } from "../actionTypes/todoTypes";

const initiaState = {
  todos: [],
  category: [],
  isEmpty: true,
};

const todoReducer = (state = initiaState, action) => {
  switch (action.type) {
    // 2. aşama add todo aksıyonu çalışınca storeda nasıl bir degişim
    // olucagına karar vericez
    case ActionTypes.ADD_TODO:
      const tempTodos = state.todos.concat(action.payload);
      // store'un güncel halini return et
      // store'un yeni degerini belirlerken
      // objedeki bir degeri güncellerken diğerlerini silmedigimize
      // emin olmamız gerekir: todosu güncellerken category'leri silmeyecegiz
      return { ...state, todos: tempTodos };

    case ActionTypes.TODO_DELETE:
      // payload'la gelen id'li todoyu diziden cıkarma
      // burada silme işlemi yapıldı
      const filtred = state.todos.filter((todo) => todo.id !== action.payload);
// state'un yeni halini belirle
      return { ...state, todos: filtred };

case ActionTypes.EDIT_TODO:
// aksıyonun payload'i ile gelen elemanın
//  state'daki halini bul
// oluşturucagımız yeni dizide state eski versiyounu cıkart
// yeni payload ile gelen versiynu ekle
const updatedTodos = state.todos.map((item) =>
item.id === action.payload.id ? action.payload : item
);

return { ...state, todos: updatedTodos };

case ActionTypes.SET_TODOS:
  return{...state,todos: action.payload}

 
    default:
      return state;
  }
};
export default todoReducer;
