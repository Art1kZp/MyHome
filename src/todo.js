import "./myTodo.css";
import { useState } from "react";


import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark, faTrash } from '@fortawesome/free-solid-svg-icons'


function Todo() {

    const [text, setText] = useState("");
    const [edit, setEdit] = useState(null);
    const [editInput, setEditInput] = useState('');

    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todoItem.todos);

    const handleAddTodo = () => {
        dispatch(addTodo(text))
        setText('');
    }
    
    const addTodo = (text) => {
        return {
            type: 'ADD_TODO',
            id: Math.floor(Math.random() * 1001),
            text,           
        }
        
    }
    const handleDeleteTodo = id => {
        dispatch(deleteTodo(id))
        setText('');
    }

    const deleteTodo = id => {
        return {
            type: 'DELETE_TODO',
            payload: id,
        }
    }

    const handleCompleteTodo = id => {
        dispatch(completeTodo(id))
    }

    const completeTodo = id => {
        return {
            type: 'COMPLETE_TODO',
            payload: id,
        }
    }
    
    const handleEditTodo = (item) => {
        setEdit(item.id)
    }

    const saveEdit = (newValue, id) => {
        setEdit(null)
        return {
            type: 'EDIT_TODO',
            payload: {
                newValue,
                id,
            }
        }   
    }

    return (
        <div className="App">
            <div className="app-inner">
                <h1 className="asd">Todo List</h1>
                <input
                    className="inputTask"
                    placeholder="Введите новую задачу"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                ></input>
                <button onClick={handleAddTodo}>Add Task</button>

                {todo.map((item) => (
                    <div style={{alignItems: 'center', marginTop: '5px',}} className="todoTask" key={item.id}>
                        <div id={item.id} style={{
                            fontSize: '19px',
                            alignItems: 'center',
                            textDecoration: item.completed ? 'line-through' : null}
                            }>
                            {item.text}
                        </div>
                        <button onClick={() => handleEditTodo(item)}>Изменить</button>
                        {
                            edit == item.id ? 
                                <div>
                                    <input
                                        className="inputTask"
                                        style={{marginLeft: '15px'}}
                                        onChange={(event) => setEditInput(event.target.value)}
                                    ></input>
                                    <button onClick={() => dispatch(saveEdit(editInput, edit))}>ok</button> 
                                </div>                          
                                :
                                <div style={{minWidth: '30px'}}>
                                    <button onClick={() => handleDeleteTodo(item.id)}>
                                    <FontAwesomeIcon icon={ faTrash } />
                                </button>
                                <button onClick={() => handleCompleteTodo(item.id)}>{!item.completed ? 'сделал' : '<-- выполнено'}</button>
                            {
                                item.completed ?                              
                                <FontAwesomeIcon style={{marginLeft: '6px'}} icon={ faCheck }/>
                                : 
                                <FontAwesomeIcon style={{marginLeft: '6px'}} icon={ faXmark }/>                          
                            }
                                </div>
                        }     
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todo;