// import PropTypes from 'prop-types'
import React from 'react'
import './styles.scss'

const GameRules = props => {
  const rules = (
    <div
      className={
        !props.success && !!props.rules
          ? 'gw-rules show'
          : 'gw-rules hide'
      }
    >
      <p>
        Try to guess the word picked randomly by the computer. There are no
        repeated letters. If any letters matching the computer's word,
        they'll be rendered on screen once the word you've guessed has been
        submitted.{' '}
        <span>
          <br />
          Start at any time by entering a word and pressing the button.
        </span>
        <br />
        <br />
        <span className='gw-ps'>
          P.S. Word positioning is for nerds <strong>(:«())</strong> and
          it's not taken into account.
        </span>
      </p>
    </div>
  )

  return rules
}

// GameRules.propTypes = {
//   rules: PropTypes.string,
//   gameRules: PropTypes.bool
// }

export default GameRules
