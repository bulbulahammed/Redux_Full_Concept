# This may help to understand fundamental of Redux
## We need to know about this topics before Learn Redux


- State Management
- Global State Management
- Context
- useReducer

## You may find more about Redux in other Repository in my Profile.

 After This Repository You can follow another Repository called Redux

# To Start Your local Machine.
- Clone This Repository
- Install npm using "npm i or npm install" command
- 

# Redux


## What is Redux?
 
Redux is a predictable state container for Javascript. You use it in any javascript framework or in vanilla javascript.

Predictable: Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

Centralized: Centralizing your application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more.

Debuggable: The Redux DevTools make it easy to trace when, where, why, and how your application's state changed. Redux's architecture lets you log changes, use "time-travel debugging", and even send complete error reports to a server.

Flexible: Redux works with any UI layer, and has a large ecosystem of addons to fit your needs












Simple Data flow in state management–
















Data Flow in old way of  Redux Way – External Data handle with Redux thunk middleware.









       Redux-ReduxToolkit Tutorial

video playlist link here: https://youtube.com/playlist?list=PLgH5QX0i9K3pe7Z7ATcyLdUW3grE4Vfld

## 1. Introduction to Redux

## 1.1 What is Redux & why Redux?
A small JS Library
for managing medium/large amount of states globally in your app.
useContext + useReducer Hook ideas will help you to understand redux.
## 1.2 Some common terms related to redux


## 1.3 how redux works?


2. redux core concept
3. Complete Counter App
4. payload in action
5. Multiple reducers & combine multiple reducers
6. Middleware
7. API Calling - async actions using redux-thunk
8. React-redux counter example
9. API calling in react-redux




## 10. redux-toolkit counter app

step1: install packages -> npm install @reduxjs/toolkit react-redux
step2: create a recommended folder structure for redux-toolkit - features (contains individual feature of our app) - app (contains store of our app)
step3: create slice. collection of logic for a feature is called slices in redux. - src/features/counter/counterSlice ```js import { createSlice } from "@reduxjs/toolkit";
   // state: count:0
   // increment, decrement, reset

   // const incrementCounter = () => {
   //   return { type: "INCREMENT" };
   // };

   export const counterSlice = createSlice({
     name: "counter",
     initialState: { count: 0 },
     reducers: {
       increment: (state) => {
         state.count = state.count + 1;
       },
       decrement: (state) => {
         state.count = state.count - 1;
       },
       reset: (state) => {
         state.count = 0;
       },
       increaseByAmount: (state, action) => {
         state.count = state.count + action.payload;
       },
     },
   });

   // export reducer and action createor
   // Action creators are generated for each case reducer function
   export const { increment, decrement, reset, increaseByAmount } =
     counterSlice.actions;

   export default counterSlice.reducer;

   ```
step4: create store -> app/store.js ```js import { configureStore } from "@reduxjs/toolkit";
     import counterReducer from "../features/counter/counterSlice";

     const store = configureStore({
       reducer: {
         counter: counterReducer,
       },
     });
     export default store;
  ```
step5: provide store in root file -> src/index.js ```js import React from 'react'; import ReactDOM from 'react-dom/client'; import './index.css'; import App from './App'; import reportWebVitals from './reportWebVitals'; import { Provider } from 'react-redux';
     import store from './app/store';

     const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render(
       <Provider store={store}>
         <App />
       </Provider>
     );

  ```
step6: use store & dispatch actions ```js import React from "react"; import { useDispatch, useSelector } from "react-redux"; import { decrement, increaseByAmount, increment, reset } from "./counterSlice";
   const CounterView = () => {
     const count = useSelector((state) => state.counter.count);

     const dispatch = useDispatch();

     return (
       <div>
         <h2>Counter: {count}</h2>
         <button
           onClick={() => {
             dispatch(increment());
           }}
         >
           Increment
         </button>
         <button
           onClick={() => {
             dispatch(reset());
           }}
         >
           reset
         </button>
         <button
           onClick={() => {
             dispatch(decrement());
           }}
         >
           Decrement
         </button>
         <button
           onClick={() => {
             dispatch(increaseByAmount(5));
           }}
         >
           IncrementBy5
         </button>
       </div>
     );
   };

export default CounterView;


