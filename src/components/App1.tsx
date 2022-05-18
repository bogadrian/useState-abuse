import { useState, useEffect, useRef } from 'react';
import { usersData, UserType } from '../utilis';
import { UsersList } from './Users';
import '../App.css';

export const App1 = () => {
  const [newUsers, setNewUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(false);

  const userNameRef = useRef<HTMLInputElement>(null);
  const userEmailRef = useRef<HTMLInputElement>(null);

  const handleUserAdd = () => {
    if (userNameRef.current?.value && userEmailRef.current?.value) {
      setNewUsers(prev => [
        ...prev,
        { name: userNameRef.current?.value, email: userEmailRef.current?.value }
      ]);
    }
  };

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      setLoading(true);
      const res = (await usersData()) as { users: UserType[]; status: string };
      if (res.status === 'ok' && mounted) {
        setNewUsers(res.users);
        setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="App">
      <div className="Component">
        <label htmlFor="name">Name</label>
        <input id="name" ref={userNameRef} />
        <label htmlFor="email">Email</label>
        <input id="email" ref={userEmailRef} />
      </div>
      <button onClick={handleUserAdd}>Add New User</button>
      {loading && <span>Loading...</span>}
      <UsersList users={newUsers} />
    </div>
  );
};
