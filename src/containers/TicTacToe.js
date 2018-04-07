import React from 'react'
import { Stage } from 'react-konva'

class TicTacToe extends React.Component {

  state = {
    rows: 3
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
      units
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
      return (
        <div>
          <Stage
            width={}
            height={}
          >
            {/* <Board /> */}
            {/* <Squares /> */}
          </Stage>
        </div>
      )
  }
}

export default TicTacToe