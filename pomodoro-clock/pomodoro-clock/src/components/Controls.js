import React from 'react'

export class Controls extends React.Component {

    onClick = () => {
        this.props.decrementTimer()
    }


    render() {
        return (
            <div className='title-level'>
                <button onClick={this.onClick}>>/=</button>
                <button onClick={this.onClick}>Reset</button>
                <button onClick={this.props.toggleSound}>Sound</button>
            </div>
        )
    }
}