import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../Request'

function Home() {
  return (
   <>
    <Main></Main>
    <Row rowId='1' title='UpComing' fetchURL={request.requestUpcoming}></Row>
    <Row rowId='2' title='Popular' fetchURL={request.requestPopular}></Row>
    <Row rowId='3' title='Trending' fetchURL={request.requestTrending}></Row>
    <Row rowId='4' title='Top Rated' fetchURL={request.requestTopRated}></Row>
    <Row rowId='5' title='Horror' fetchURL={request.requestHorror}></Row>
   </>
  )
}

export default Home
