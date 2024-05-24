import {
  ScoreViewContainer,
  GameHeading,
  ScoreContainer,
  ScoreHeading,
  ScoreNumber,
} from './styledComponents'

const ScoreView = props => {
  const {score} = props

  return (
    <ScoreViewContainer>
      <GameHeading>
        ROCK <br /> PAPER <br /> SCISSORS
      </GameHeading>
      <ScoreContainer>
        <ScoreHeading>Score</ScoreHeading>
        <ScoreNumber>{score}</ScoreNumber>
      </ScoreContainer>
    </ScoreViewContainer>
  )
}
export default ScoreView
