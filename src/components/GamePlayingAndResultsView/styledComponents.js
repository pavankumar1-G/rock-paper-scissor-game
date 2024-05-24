import styled from 'styled-components'

export const GameViewContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const GamePlayingViewContainer = styled.div``
export const CustomPickupBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const PickupImg = styled.img`
  height: 145px;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
  @media screen and (min-width: 991px) {
    width: 350px;
  }
  @media screen and (min-width: 1199px) {
    width: 400px;
  }
  @media screen and (min-width: 575px) {
    height: 250px;
  }
`
export const GameResultsViewContainer = styled.div`
  font-family: Roboto;
`
export const PlayersAndPickedImgsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const PlayerAndImgContainer = styled.div``
export const You = styled.h1`
  color: #ffffff;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const PickedImg = styled.img`
  height: 145px;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
  @media screen and (min-width: 991px) {
    width: 350px;
    height: 400px;
  }
  @media screen and (min-width: 1199px) {
    width: 400px;
    height: 500px;
  }
  @media screen and (min-width: 575px) {
    height: 250px;
  }
`
export const Opponent = styled.h1`
  color: #ffffff;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const ResultState = styled.p`
  color: #ffffff;
  font-size: 25px;
  font-weight: 900;
  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
`
export const PlayAgainBtn = styled.button`
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  background-color: #ffffff;
  font-family: Bree Serif;
  font-weight: bold;
  height: 36px;
  width: 120px;
  @media screen and (min-width: 768px) {
    height: 45px;
    width: 155px;
  }
  @media screen and (min-width: 991px) {
    width: 165px;
    height: 48px;
  }
  @media screen and (min-width: 1199px) {
    width: 160px;
    height: 55px;
  }
  @media screen and (min-width: 575px) {
    height: 40px;
    width: 135px;
  }
`
