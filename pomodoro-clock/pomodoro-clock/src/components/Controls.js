import React from 'react'

export class Controls extends React.Component {

    onClick = () => {
        console.log('test')
    }


    render() {
        return (
            <div className='title-level'>
                <button onClick={this.onClick}>Pause/Play</button>
                <button onClick={this.onClick}>Reset</button>
            </div>
        )
    }
}