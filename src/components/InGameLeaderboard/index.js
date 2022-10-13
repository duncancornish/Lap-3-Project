import React from 'react'
import { useSelector } from 'react-redux';
import './style.css'

const InGameLeaderboard = ({ currentOrFinal }) => {
  const gameState = useSelector(state => state.gameState);

  return (
    <div role={"contentinfo"} className='igl-container'>
      <h1 style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#5e057e' }}>{currentOrFinal} Scores</h1>
      <ul className='leaderboard-list' role={"list"}>
        {gameState.users.map(user => { return <li style={{listStyle: "none"}} key={user.name}>{user.name}: {user.score}</li> })}
      </ul>
    </div>
  )
}

export default InGameLeaderboard
