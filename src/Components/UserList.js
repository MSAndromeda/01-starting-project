import styles from './UserList.module.css';

export default function UserList ( props )
{
    return (
        <div className={ styles.users }>
            <ul>
                { props.List.map( ( user, index ) => ( <li key={ index }>{ user.name } { user.Age } Years Old</li> ) ) }
            </ul>
        </div>
    );
}