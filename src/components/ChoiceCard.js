import React from 'react'


export default function ChoiceCard(props) {
    let result = ''
    if (props.previousWinner === 'Tie') {
        result = 'tie'
    }

    else if (props.previousWinner === 'You') {
        if (props.title === 'You') {
            result = 'winner'
        }

        else if (props.title === 'Computer') {
            result = 'loser'
        }

    }

    else if (props.previousWinner === 'Computer') {
        if (props.title === 'You') {
            result = 'loser'
        }

        else if (props.title === 'Computer') {
            result = 'winner'
        }

    }

    const DEFAULT_IMG =
        "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png";

    return (
        <div className={`ChoiceCard ${result}`}>
            <h1>{props.title}</h1>
            <div>{result}</div>
            <img src={props.imgURL || DEFAULT_IMG} alt={props.title} />

        </div>
    )
}



