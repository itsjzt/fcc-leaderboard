import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  border: solid 1px #ccc;
  background: #fff;
  border-radius: 5px;
  width: 250px;
  margin: 12px;
  font-size: 16px;
`

const Img = styled.img`
  width: 100%;
  border: 0;
`

const Text = styled.div`
  padding: 8px;
  text-align: center;
  background: inherit;
  color: #454545;
`

const PointsDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 8px;
`

const Points = styled.span`
  flex-grow: 1;
  flex-basis: 50%;
`

const Time = styled.div`
  text-align: center;
  font-size: 80%;
  color: #787878;
`

const Value = styled.div`
  text-align: center;
  font-size: 120%;
  color: palevioletred;
`

const ProfileCard = (props) => {
  return (
    <Card>
      <Img src="https://avatars.githubusercontent.com/u/11003055?v=3" alt={`user Image`}></Img>
      <Text> Lorem ipdims </Text>
      <PointsDiv>
        <Points>
          <Time>Last 30 Days</Time>
          <Value>99</Value>
        </Points>
        <Points>
          <Time>All time</Time>
          <Value>564</Value>
        </Points>
      </PointsDiv>
    </Card>
  )
}

export default ProfileCard