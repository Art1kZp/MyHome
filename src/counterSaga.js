// import {useState} from 'react';

import { useDispatch, useSelector } from "react-redux";
import { asyncDecrementCreator, asyncIncrementCreator} from "./counterReducer";
import { fetchUsers } from "./customersReducer";
import { cleanUsers } from "./customersReducer"

function Counter() {
    const count = useSelector(state => state.counter.count)
    const user = useSelector(state => state.customers.users)
    const dispatch = useDispatch();

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
                {count}
                <button onClick={() => dispatch(asyncIncrementCreator())}>+</button>
                <button onClick={() => dispatch(asyncDecrementCreator())}>-</button>
            </div>
            <div>
            <button onClick={() => dispatch(fetchUsers())}>получить юзеров</button> 
            <button onClick={() => dispatch(cleanUsers())}>очистить юзеров</button>
                {user.map(user => 
                    <div key={user.id}>
                        {user.name}
                    </div>)
                }
            
            </div>   
                 
        </div>
    )
}

export default Counter;