import React from 'react'
import { useSelector } from 'react-redux'
import PageNavigation from '../pageNavigation/pageNav'
import UserItem from './UserItem'
import { CircleLoader } from "react-spinners";
import Override from '../../styles/Override';


const UserList = () => {

  const { users, status } = useSelector(state => state.user)


  return (
    <>
      <CircleLoader
        color={"orange"}
        loading={status === "loading"}
        css={Override}
        size={50}
      />
      {status === "success" &&
        users.map((user) =>
          <UserItem
            key={user.id}
            id={user.id}
            avatar={user.avatar}
            name={`${user.first_name} ${user.last_name}`}
            email={user.email}
          />
        )}
      <PageNavigation />
    </>
  )
}

export default UserList