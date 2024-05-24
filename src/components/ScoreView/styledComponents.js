import styled from 'styled-components'

export const ScoreViewContainer = styled.div`
  border: 1px solid #ffffff;
  border-radius: 10px;
  background-color: transparent;
  margin: 10px;
  width: 95%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Bree Serif;
  @media screen and (min-width: 768px) {
    width: 70%;
    margin-top: 40px;
    padding: 20px;
  }
`
export const GameHeading = styled.h1`
  color: #ffffff;
  font-size: 25px;
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 22px;
  font-wieght: 1000;
  line-height: 0;
  margin-bottom: 0;
`
export const ScoreNumber = styled.p`
  color: #223a5f;
  font-size: 55px;
  font-wieght: 900;
  line-height: 0;
  margin-top: 45px;
  font-family: Roboto;
`
