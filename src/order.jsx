import React, { Component } from 'react'

export default class order extends Component {
    render() {
        return (
            <div className="order">
                        <h1 className='title'>Order</h1>
                        {this.props.data.selected.length <= 0 && (
                            <h1>Not Selected</h1>
                        )}
                        {this.props.data.selected.map((value) => (
                            <div className="order">
                                <h1>
                                    {value.title} - {value.price}som
                                    <button onClick={()=> this.props.onDelete(value.selectedId)}>Delete</button>
                                </h1>
                            </div>
                        ))}
                        <h1 className="title">Total {this.props.data.total} som</h1>
                        <button onClick={this.props.onCancel}>Cancel</button>
                        <button>Order</button>
                    </div>
        )
    }
}
