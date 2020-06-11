import React from 'react'

export class Controls extends React.Component {

    onClick = () => {
        this.props.decrementTimer()
    }

    toggleSound = () => {
        let soundVal
        this.props.sound === 'on' ? soundVal = 'off' : soundVal = 'on'
        this.props.setSound(soundVal)
    }

    reset = () => {
        this.props.setTimer()
    }


    render() {
        return (
            <div className='title-level'>
                <button onClick={this.onClick}>>/=</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.toggleSound}>Sound</button>
            </div>
        )
    }
}