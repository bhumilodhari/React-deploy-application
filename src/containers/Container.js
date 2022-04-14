import React from 'react'
import Header from '../components/header/Header'
import UserList from '../components/user/UserList'
import UserCard from '../components/userCard/UserCard'
import ContainerStyle from '../styles/Container.style'
import { useSelector } from 'react-redux'

const Container = () => {
  const userCard = useSelector((state) => state.card.user); 
  return (
    <ContainerStyle>
      <Header />
      {userCard && <UserCard />}
      <UserList />
    </ContainerStyle>
  )
}

export default Container;