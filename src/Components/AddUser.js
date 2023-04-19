import { useState } from 'react';
import styles from './AddUser.module.css';
import Button from './Button';
// import Card from './Card';

export default function AddUser ( props )
{
    const [ userName, setUserName ] = useState( '' );
    const [ age, setAge ] = useState( '' );
    const userNameHandler = ( e ) =>
    {
        setUserName( e.target.value );
    };
    const ageHandler = ( e ) =>
    {
        setAge( e.target.value );
    };

    const submitHandler = ( e ) =>
    {
        e.preventDefault();
        const newUser = {
            name: userName,
            Age: age
        };
        props.onNewUser( newUser );
        setUserName( "" );
        setAge( "" );
    };
    return (
        <form onSubmit={ submitHandler } className={ styles.input }>
            <label>Username</label>
            <input type='text' value={ userName } onChange={ userNameHandler }></input>

            <label>Age(Years)</label>
            <input type='number' value={ age } onChange={ ageHandler }></input>

            <Button text='Add User' />
        </form>
    );
};