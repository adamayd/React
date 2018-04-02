import React from 'react'

class Template extends React.Component {
    render() {
        return (
          <div>
            <header>
              <h1>Tic Tac Turing</h1>
            </header>
            <main>
              {this.props.children}
            </main>
          </div>
        )
    }
}

export default Template