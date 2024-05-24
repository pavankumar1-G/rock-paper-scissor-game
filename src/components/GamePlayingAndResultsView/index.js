import {
  GameViewContainer,
  GamePlayingViewContainer,
  CustomPickupBtn,
  PickupImg,
  GameResultsViewContainer,
  PlayersAndPickedImgsContainer,
  PlayerAndImgContainer,
  You,
  PickedImg,
  Opponent,
  ResultState,
  PlayAgainBtn,
} from './styledComponents'

const GamePlayingAndResultsView = props => {
  const {
    choiceListDetails,
    pickAndShowResults,
    restartGame,
    resultText,
    newChoiceList,
    isPlayingView,
  } = props

  const showGameView = () => (
    <GameViewContainer>
      {isPlayingView && (
        <GamePlayingViewContainer>
          <CustomPickupBtn
            type="button"
            data-testid="rockButton"
            onClick={() => pickAndShowResults(choiceListDetails[0].id)}
          >
            <PickupImg
              src={choiceListDetails[0].imageUrl}
              alt={choiceListDetails[0].id}
              key={choiceListDetails[0].id}
            />
          </CustomPickupBtn>
          <CustomPickupBtn
            type="button"
            data-testid="scissorsButton"
            onClick={() => pickAndShowResults(choiceListDetails[1].id)}
          >
            <PickupImg
              src={choiceListDetails[1].imageUrl}
              alt={choiceListDetails[1].id}
              key={choiceListDetails[1].id}
            />
          </CustomPickupBtn>
          <CustomPickupBtn
            type="button"
            data-testid="paperButton"
            onClick={() => pickAndShowResults(choiceListDetails[2].id)}
          >
            <PickupImg
              src={choiceListDetails[2].imageUrl}
              alt={choiceListDetails[2].id}
              key={choiceListDetails[2].id}
            />
          </CustomPickupBtn>
        </GamePlayingViewContainer>
      )}
      {!isPlayingView && (
        <GameResultsViewContainer>
          <PlayersAndPickedImgsContainer>
            <PlayerAndImgContainer>
              <You>YOU</You>
              <PickedImg src={newChoiceList[[0]].imageUrl} alt="your choice" />
            </PlayerAndImgContainer>
            <PlayerAndImgContainer>
              <Opponent>OPPONENT</Opponent>
              <PickedImg
                src={newChoiceList[1].imageUrl}
                alt="opponent choice"
              />
            </PlayerAndImgContainer>
          </PlayersAndPickedImgsContainer>
          <ResultState>{resultText}</ResultState>
          <PlayAgainBtn type="button" onClick={restartGame}>
            PLAY AGAIN
          </PlayAgainBtn>
        </GameResultsViewContainer>
      )}
    </GameViewContainer>
  )
  return showGameView()
}
export default GamePlayingAndResultsView
