import React, { Component } from "react";
import Item from "./Item";
class List extends Component {
  render() {
    const {todo,update,deleteItem} = this.props
    return (
      <div>
        <section className="selt">
          <h2>
            全部任务
          </h2>
          <ol id="todolist" className="demo-box">
            {
              todo.map((item)=>{
                return < Item {...item} key={item.id} update={update} deleteItem={deleteItem}/>
              })
            }
          </ol>
        </section>
      </div>
    );
  }
}

export default List;
