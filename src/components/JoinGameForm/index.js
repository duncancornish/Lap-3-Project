import React from 'react'

import './style.css'

const JoinGameForm = () => {
    return (
        <>
            <div className='join-game-container'>
                <form className='join-existing-game-form' action="">
                    <label htmlFor="game-pin">JOIN EXISTING GAME:</label>
                    <input placeholder='Enter Game PIN' id='game-pin' type="number" minValue='10000' maxValue='99999' />
                    <input type="submit" value={'JOIN GAME'} />
                </form>
            </div>
            <div className='create-game-container'>

                <form className='create-new-game-form' action="">
                    <label htmlFor="number-of-questions">Number of questions</label>
                    <select name="number-of-questions" id="number-of-questions">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                    <label htmlFor="category">Pick your category</label>
                    <select name="category" id="category">
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals and Theatre</option>
                        <option value="14">Entertainment: TV</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science and Nature</option>
                        <option value="18">Computers</option>
                        <option value="19">Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Comics</option>
                        <option value="30">Gadgets</option>
                        <option value="31">Japanese Anime and Manga</option>
                        <option value="32">Cartoon and Animations</option>
                    </select>
                    <label htmlFor="difficulty">Choose your difficulty</label>
                    <select name="difficulty" id="difficulty">
                        <option value="mixed">Mixed</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <input type="submit" value="CREATE GAME" />
                </form>
            </div>
        </>
    )
}

export default JoinGameForm