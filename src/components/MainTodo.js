import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from './Todo';
import { db } from '../firebase'
import { collection, query, where, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import classes from './mainTodo.module.css';


function MainTodo({ deleteTodoHandler }) {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    let getFirebaseResponseObject = JSON.parse(localStorage.getItem('firebaseToken'));
    useEffect(() => {

        const q = query(collection(db, "todos"), where("userId", "==", getFirebaseResponseObject.localId));
        onSnapshot(q, (snapshot) => {

            // console.log(snapshot.docs);
            setTodos(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))


        })

    }, [input, getFirebaseResponseObject]);



    const addTodo = (e) => {
        e.preventDefault();

        // console.log(getFirebaseResponseObject.localId)

        if (input.trim() === '') {
            alert('Input field is required')
            setInput('')
            return;
        }
        addDoc(collection(db, 'todos'), {
            todo: input,
            userId: getFirebaseResponseObject.localId,
            timestamp: serverTimestamp()
        })
        setInput('')
        // console.log(todos)
    };
    return (
        <div className={classes.MainTodo}>
            <h2> TODO List App</h2>
            <form>
                <TextField id="outlined-basic" label="Make Todo" variant="outlined" style={{ "margin": "0px 5px", "autoFocus": true }} size="small" value={input}
                    onChange={e => setInput(e.target.value)} />
                <Button variant="contained" color="primary" onClick={addTodo}  >Add +</Button>
            </form>
            <h4>Total Todo: {todos.length}</h4>
            <ul>
                {todos.map(item => <Todo key={item.id} arr={item} deleteTodoHandler={deleteTodoHandler} />)}
            </ul>
        </div>
    );
}
export default MainTodo;