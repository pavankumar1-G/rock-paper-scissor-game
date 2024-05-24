import styled from 'styled-components'

export const RockPaperScissorsContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PopupViewContainer = styled.div`
  align-self: flex-end;
  margin: 20px;
`
export const TriggerButton = styled.button`
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  background-color: #ffffff;
  font-family: Bree Serif;
  font-weight: bold;
  height: 30px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 45px;
    width: 120px;
    font-size: 20px;
  }
`
export const PopupView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 576px) {
    height: 40vh;
  }
  @media screen and (min-width: 768px) {
    height: 45vh;
  }
  @media screen and (min-width: 991px) {
    height: 55vh;
  }
  @media screen and (min-width: 1200px) {
    height: 65vh;
  }
`
export const TriggerCloseBtn = styled.button`
  border: none;
  align-self: flex-end;
  margin-right: 0;
  margin-bottom: 6px;
  padding-top: 4px;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    height: 30px;
    width: 30px;
    padding-right: 20px
    padding-left: 0;
  }
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 40px;
    padding-right: 20px
    padding-left: 0;
  }
  @media screen and (min-width: 768px) {
    height: 45px;
    width: 45px;
    padding-right: 20px
    padding-left: 0;
  }
  @media screen and (min-width: 1200px) {
    height: 50px;
    width: 50px;
    padding-right: 20px
    padding-left: 0;
  }
`
export const PopupImg = styled.img`
  height: 150px;
  width: 150px;
  @media screen and (min-width: 576px) {
    height: 270px;
    width: 270px;
  }
  @media screen and (min-width: 768px) {
    height: 390px;
    width: 360px;
  }
  @media screen and (min-width: 991px) {
    height: 585px;
    width: 460px;
  }
  @media screen and (min-width: 1200px) {
    height: 585px;
    width: 580px;
  }
`
