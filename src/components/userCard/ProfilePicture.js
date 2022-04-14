import React from 'react'
import { useSelector } from 'react-redux';
import ProfilePictureStyle from '../../styles/UserCard/ProfilePictureStyle';

const ProfilePicture = () => {
  const userCard = useSelector((state) => state.card.user);
  return (
      <>
    <ProfilePictureStyle src={userCard.avatar} />
    </>
  )
}

export default ProfilePicture