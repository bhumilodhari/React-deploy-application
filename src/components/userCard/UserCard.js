import React from 'react';
import UserDetailStyle from '../../styles/UserCard/UserDetailStyle';
import UserInfo from './UserInfo';
import PlanDetails from './PlanDetails';
import PlanCount from './PlanCount';
import ProfilePicture from './ProfilePicture';
import User from '../../styles/UserCard/UserStyle';

const UserCard = (props) => {
  return (
    <>
      <UserDetailStyle>
        <User>
        <ProfilePicture />
        <UserInfo />
        <PlanDetails />
        <PlanCount />
        </User>
      </UserDetailStyle>
    </>
  )
}

export default UserCard