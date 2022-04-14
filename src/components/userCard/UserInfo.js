import React from 'react'
import { useSelector } from 'react-redux';
import UserInfoStyle from '../../styles/UserCard/UserInfoStyle';

const UserInfo = () => {
  const userCard = useSelector((state) => state.card.user);
  return (
    <UserInfoStyle>
      <h4>{userCard.name}</h4>
      <p>{userCard.email}</p>
      <h4>Your Plan: Standard</h4>
      <button>Active User</button>
    </UserInfoStyle>
  )
}

export default UserInfo