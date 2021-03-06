import Lexer from './Lexer'
import { makeToJSON } from '../utils/helpers'

export default Score

class Score {
  constructor(score, style) {
    this.name = 'score'
    this.style = style
    if (typeof score === 'string') {
      this.parse(new Lexer(score))
    } else {
      this.head = score.head
      this.body = score.body
    }
  }

  parse(lexer) {
    this.head = new Head(lexer, this.style)
    this.body = new Body(lexer, this.style)
  }

  toString() {}
  toJSON = makeToJSON('head', 'body')
}
