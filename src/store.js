
import {configureStore, createSlice} from "@reduxjs/toolkit";

const toDos = createSlice({
    name:'toDosReducer',
    initialState:[],
    reducers:{
        addToDo:(state,action)=>{
            state.push({text:action.payload, id:Date.now()})
        },
        deleteToDo:(state,action)=>
            state.filter(toDo=>toDo.id !== action.payload)

    }
})

const store= configureStore({reducer: toDos.reducer});

export const {
    addToDo,
    deleteToDo,
} = toDos.actions;

export default store;

//version 1
// import {createStore} from "redux";

// const ADD ="ADD";
// const DELETE="DELETE";

// const addToDo= text =>{
//     return{
//         type:ADD,
//         text
//     };
// };

// const deleteToDo= id =>{
//     return {
//         type:DELETE,
//         id:parseInt(id)
//     };
// };

// const reducer=(state=[], action)=>{
//     switch(action.type){
//         case ADD:
//             return[{text:action.text, id:Date.now()}, ...state];
//         case DELETE:
//             return state.filter(toDo=>toDo.id !== action.id);
//         default:
//             return state;
//     }
// }


//version 2
// const reducer=(state=[], action)=>{
//     switch(action.type){
//         case addToDo.type:
//             return[{text:action.payload, id:Date.now()}, ...state];
//         case deleteToDo.type:
//             return state.filter(toDo=>toDo.id !== action.payload);
//         default:
//             return state;
//     }
// }

// version 1, 2 공통
// const store= createStore(reducer);


// version 3
// import {configureStore, createAction, createReducer, createSlice} from "@reduxjs/toolkit";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = createReducer([],{
//     [addToDo]:(state,action)=>{
//         state.push({text:action.payload, id:Date.now()})
//     },
//     [deleteToDo]:(state,action)=>
//         state.filter(toDo=>toDo.id !== action.payload)
// })

// const store= configureStore({reducer});

// version 1,2,3 공통

// export const actionCreators ={
//     addToDo,
//     deleteToDo
// };