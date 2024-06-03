import React from 'react'

export default function GameRow({
  game = {}
}) {
  return (
    <li className='game-row'>
      <span className='game-name'>{ game.name }</span>
      { game.inWhishList && <span className='game-in-whish-list'>В желаемом</span> }
    </li>
  )
}
