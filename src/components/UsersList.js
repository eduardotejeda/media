import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';

function UsersList() {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUserError, setLoadingUserError] = useState(null);


  const dispatch = useDispatch();
  const {data} = useSelector((state)=> {
    return state.users;
  })

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
    .unwrap()
    .then(()=>{
      setIsLoadingUsers(false);
    })
    .catch((err)=>{
    setLoadingUserError(err);
    setIsLoadingUsers(false);
     })
     
    //BAD!!
  }, [dispatch]);

  const handleUserAdd = () => {
    dispatch(addUser());
  }

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full"/>;
  }

  if (loadingUserError) {
    return <div>Error fetching data...</div>
  }

  const renderedUsers = data.map((user) => {
    return <div key={user.id} className='mb-2 border rounded'>
      <div className='flex p-2 justify-between items-center cursor-pointer'></div>
{user.name}
    </div>
  });

  return <div>
    <div className='flex flex-row justify-between m-3'></div>
    <h1 className='m-2 text-xl'>Users</h1>
    <Button onClick={handleUserAdd}>
      +Add User
    </Button>
    {renderedUsers}
  </div>;
}

export default UsersList;
