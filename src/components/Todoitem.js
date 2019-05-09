import React, { Component } from 'react'

export default class Todoitem extends Component {
  
    dragStart(ev) {
        ev.persist();
        ev.dataTransfer.effectAllowed = 'move';
        ev.dataTransfer.setData("Text",JSON.stringify(this.props));
        ev.dataTransfer.setDragImage(ev.target,0,0);
    }
    
    
  render() {
    const {title, handledelete, handledit} = this.props;
    return (
      <div draggable="true" onDragStart={(ev)=>{this.dragStart(ev)}}>
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
            <span className="mx-2 text-success" onClick={handledit}>
                <i className="fas fa-pen" />
            </span>
            <span className="mx-2 text-danger" onClick={handledelete}>
                <i className="fas fa-trash" />
            </span>
        </div>
        </li>
      </div>
    )
  }
}

