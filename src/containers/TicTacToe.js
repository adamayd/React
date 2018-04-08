import React from 'react'
import { Stage } from 'react-konva'
import { Board, Squares } from '../styled/TicTacToe.js'

class TicTacToe extends React.Component {

  constructor(props) {
    super(props)
    this.combos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
  }

  state = {
    rows: 3,
    gameState: new Array(9).fill(false),
    ownMark: 'X',
    otherMark: 'O',
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false
  }

  componentWillMount() {
    let height = window.innerHeight
    let width = window.innerWidth
    let size = (height < width) ? height * 0.8 : width * 0.8
    let rows = this.state.rows
    let unit = size / rows
    let coordinates = []
    for (var y = 0; y < rows; y++) {
      for (var x = 0; x < rows; x++) {
        coordinates.push([x * unit, y * unit])
      }
    }

    this.setState({
      size,
      rows,
      unit,
      coordinates
    })
  }

  move = (marker, index) => {
    // console.log('Move made', marker, index)
    this.setState((prevState, props) => {
      let {gameState, yourTurn, gameOver, winner} = prevState
      yourTurn = !yourTurn
      gameState.splice(index, 1, marker)
      let foundWin = this.winChecker(gameState)
      if (foundWin) {
        winner = gameState[foundWin[0]]
      }
      if (foundWin || !gameState.includes(false)) {
        gameOver = true
      }
      if (!yourTurn && !gameOver) {
        this.makeAIMove(gameState)
      }
      return {
        gameState,
        yourTurn,
        gameOver,
        win: foundWin || false,
        winner
      }
    })
  }

  makeAIMove = (gameState) => {
    let otherMark = this.state.otherMark
    let openSquares = []
    gameState.forEach((square, index) => {
      if(!square) {
        openSquares.push(index)
      }
    })
    let aiMove = openSquares[this.random(0, openSquares.length)]
    setTimeout(() => {
      this.move(otherMark, aiMove)
    }, 1000)
  }

  random =  (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  winChecker = (gameState) => {
    let combos = this.combos
    return combos.find((combo) => {
      let [a,b,c] = combo
      return (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c])
    })
  }

  turingTest = () => {

  }

  recordGame = () => {

  }

  render() {
    let { 
      size, 
      unit, 
      rows, 
      coordinates,
      gameState,
      win,
      gameOver,
      yourTurn,
      ownMark
    } = this.state
    return (
      <div>
        <Stage
          width={size}
          height={size}
        >
          <Board 
            size={size}
            rows={rows}
            unit={unit}
          />
          <Squares 
            unit={unit}
            coordinates={coordinates}
            gameState={gameState}
            win={win}
            gameOver={gameOver}
            yourTurn={yourTurn}
            ownMark={ownMark}
            move={this.move} 
          />
        </Stage>
      </div>
    )
  }
}

export default TicTacToe