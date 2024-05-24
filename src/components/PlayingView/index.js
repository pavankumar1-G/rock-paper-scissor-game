import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'

import ScoreView from '../ScoreView'

import GamePlayingAndResultsView from '../GamePlayingAndResultsView'

import {
  RockPaperScissorsContainer,
  PopupViewContainer,
  TriggerButton,
  PopupView,
  TriggerCloseBtn,
  PopupImg,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class PlayingView extends Component {
  state = {
    isPlayingView: true,
    resultText: 'YOU WON',
    score: 0,
    newChoiceList: [choicesList[0], choicesList[1]],
  }

  getResultState = (mine, opponet) => {
    if (mine.id === 'ROCK') {
      switch (opponet.id) {
        case 'SCISSORS':
          return 'YOU WON'
        case 'PAPER':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else if (mine.id === 'SCISSORS') {
      switch (opponet.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponet.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  pickAndShowResults = id => {
    const {score} = this.state
    const mine = choicesList.filter(eachChoice => eachChoice.id === id)
    const opponet = choicesList[Math.floor(Math.random() * choicesList.length)]
    const resultState = this.getResultState(mine[0], opponet)
    let newScore = score
    if (resultState === 'YOU WON') {
      newScore = score + 1
    } else if (resultState === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      isPlayingView: false,
      newChoiceList: [mine[0], opponet],
      resultText: resultState,
      score: newScore,
    })
  }

  restartGame = () => {
    this.setState({isPlayingView: true})
  }

  render() {
    const {isPlayingView, score, resultText, newChoiceList} = this.state

    return (
      <RockPaperScissorsContainer>
        <ScoreView score={score} />
        <GamePlayingAndResultsView
          choiceListDetails={choicesList}
          pickAndShowResults={this.pickAndShowResults}
          restartGame={this.restartGame}
          resultText={resultText}
          newChoiceList={newChoiceList}
          isPlayingView={isPlayingView}
        />

        <PopupViewContainer>
          <Popup
            modal
            trigger={<TriggerButton type="button">Rules</TriggerButton>}
          >
            {close => (
              <PopupView>
                <TriggerCloseBtn type="button" onClick={() => close()}>
                  <RiCloseLine />
                </TriggerCloseBtn>
                <PopupImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupView>
            )}
          </Popup>
        </PopupViewContainer>
      </RockPaperScissorsContainer>
    )
  }
}
export default PlayingView
