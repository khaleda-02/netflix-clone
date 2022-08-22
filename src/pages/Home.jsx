import React from 'react'
import { Main } from '../components/Main'
import { Row } from '../components/Row'
import {requests} from "../api"
export const Home = () => {
  return (
    <>
      <Main />
      <div className='mt-5  translate-y-[-80px] ml-4'>
        <Row title='Trending' url={requests.requestTrending} id='1'/>
        <Row title='Upcoming' url={requests.requestUpcoming} id='2'/>
        <Row title='Top Rated' url={requests.requestTopRated} id='3'/>
        <Row title='Most popular' url={requests.requestPopular}  id='4'/>
        <Row title='Horror' url={requests.requestHorror}  id='5'/>
      </div>
    </>
  )
}
