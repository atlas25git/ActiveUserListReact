import React from 'react';
import Card from '../Ui/Card';
import classes from './AddUser.module.css';
import Button from '../Ui/Button';
import {useState} from 'react';
import ErrorModal from '../Ui/ErrorModal';
import { message } from 'statuses';

const AddUser = props => {
    const [Username, setUsername] = useState();
    const [Age, setAge] = useState();
    const [error, setError] = useState();

    const userNameHandler = e => {
        setUsername(e.target.value);
        //console.log(Username);
    }
    const ageHandler = e => {
        setAge(e.target.value);
        //console.log(Age);
    }

    const addUserHandler = (e) => {
        e.preventDefault();
        if(Username.trim().length === 0 || Age.trim().length===1)
            {
                setError({
                    title: 'Empty Input',
                    message: 'Enter a valid name and age.'
                })
                return;
            }
        
            if(+Age<1)
            {
                setError({
                    title: 'You ain\'t born yet',
                    message: 'Comeback later.'
                })
                return;
            }
            
        props.onAddUser(Username,Age); 

        setUsername('');
        setAge('');

    };
    const errorHandler = () => {
        setError(null);
    }

    return (
    <>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">
            Username
        </label>
        <input id = "username" value={Username} type = "text" onChange={userNameHandler}></input>
        <label htmlFor="age">
            Age
        </label>
        <input id = "age" type = "number" value={Age} onChange={ageHandler}></input>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </>
    );
};

export default AddUser;