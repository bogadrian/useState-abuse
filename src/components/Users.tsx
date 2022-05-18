import { useEffect, useState, useMemo, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { UserType } from '../utilis';

interface IListProps {
  users: UserType[];
}

type NewUserType = UserType & { id: string };

const addId = (users: UserType[]): NewUserType[] => {
  const newUsers = users.reduce((acc: NewUserType[], curr: UserType) => {
    const newCurr = { ...curr, id: uuidv4() };
    acc = [...acc, newCurr];
    return acc;
  }, []);
  return newUsers;
};

export const UsersList: any = ({ users }: IListProps) => {
  const ref = useRef(0);

  ref.current++;

  console.log('I rendered', ref.current, 'times');
  console.log(addId(users));
  return (
    <div>
      {addId(users)?.map(user => (
        <ul key={user.id}>
          name: {user.name}, email: {user.email}
        </ul>
      ))}
    </div>
  );
};

/*----------------------------------------------------------------

















*/

//! //   const newUsersList = useMemo(() => {
//     const newUsers = users.reduce((acc: NewUserType[], curr: UserType) => {
//       const newCurr = { ...curr, id: uuidv4() };
//       acc = [...acc, newCurr];
//       return acc;
//     }, []);
//     return newUsers;
//   }, [users]);

//! // const addId = (users: UserType[]): NewUserType[] => {
//   const newUsers = users.reduce((acc: NewUserType[], curr: UserType) => {
//     const newCurr = { ...curr, id: uuidv4() };
//     acc = [...acc, newCurr];
//     return acc;
//   }, []);
//   return newUsers;
// };
