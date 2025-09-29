import { createContext, useState } from "react";
import type { TTodo } from "../types/todo";
import type { PropsWithChildren } from "react";
import { useContext } from "react";

interface ITodoContext {
    todos:TTodo[];
    doneTodos: TTodo[];
    addTodo:(text:string)=>void;
    completeTodo:(todo:TTodo)=>void;
    deleteTodo:(todo:TTodo)=>void;
}


export const TodoContext=createContext<ITodoContext | undefined>
(undefined);

export const TodoProvider= ({children}: 
    PropsWithChildren) : any => {
        const [todos,setTodos]=useState<TTodo[]>([]);
        const [doneTodos,setDoneTodos] =useState<TTodo[]>([]);

        const addTodo =(text:string): void=>{
            const newTodo:TTodo ={id:Date.now(),text};
            setTodos((prevTodos):TTodo[]=>[...prevTodos,newTodo]);
        }
        const completeTodo =(todo:TTodo):void=>{
            setTodos(prevTodos=>prevTodos.filter((t):boolean => t.id !==todo.id));
            setDoneTodos((prevDoneTodos):TTodo[]=>
            [...prevDoneTodos,todo]);
        };
        const deleteTodo=(todo:TTodo):void => {
            setDoneTodos((prevDoneTodo):TTodo[]=>
            prevDoneTodo.filter((t):boolean=>t.id !==todo.id)
            );
            
        };

        return (
            <TodoContext.Provider 
            value={{todos,doneTodos,addTodo,completeTodo,deleteTodo}}
            >
                {children}
            </TodoContext.Provider>
        );
    };

export const useTodo =() : any => {
    const context=useContext(TodoContext);
    //컨텍스트가 없는경우
    if (!context){
        throw new Error('useTodo를 사용하기 위해서는,무조건 todoProvider로 감싸야합니다.')
    }
    return context;
}