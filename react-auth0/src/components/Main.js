
import React, {Component} from 'react'

export default class Main extends Component {
  
  render() {
    return (
      <div>
   <p className='App-intro'>
          Hello {this.props.name}! <br />
          Access to the secret area ? <a href="/secret">Click Here</a>
        </p>
        <hr />
          Please login first
        <hr />
        <button onClick={this.props.auth.signIn}>Login</button>
      </div>
    )
  }
}
