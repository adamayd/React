import React from 'react'
import { Stage } from 'react-konva'
import { Board } from '../styled/TicTacToe.js'

class TicTacToe extends React.Component {

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

    this.setState({
      size,
      rows,
      unit
    })
  }

  move = () => {

  }

  makeAIMove = () => {

  }

  turingTest = () => {

  }

  recordGame = () => {

  }

  render() {
    let { size, unit, rows } = this.state
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
          {/* <Squares /> */}
        </Stage>
      </div>
    )
  }
}

export default TicTacToe