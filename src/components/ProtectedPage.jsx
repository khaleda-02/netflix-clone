import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const ProtectedPage = ({child}) => {
  const { user } = UserAuth()
  const nav = useNavigate()
  if (!user) {
    nav('/')
  } else {
    return (<>
      {child}
    </>)
  }
}

export default ProtectedPage