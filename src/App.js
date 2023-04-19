import { React, useState } from 'react';
import AddUser from './Components/AddUser';
import UserList from './Components/UserList';
import ErrorModal from './Components/ErrorModal';

function App ()
{
  const [ uList, setNewUser ] = useState( [] );
  const newUserHandler = ( User ) =>
  {
    setNewUser( [ ...uList, User ] );
    console.log( [ ...uList, User ] );
  };
  return (
    <div>
      <AddUser onNewUser={ newUserHandler }></AddUser>
      <UserList List={ uList }></UserList>
      <ErrorModal />
    </div>
  );
}

export default App;
