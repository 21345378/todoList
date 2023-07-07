import React, { Component } from 'react';
import {nanoid} from 'nanoid'

class Header extends Component {
    handleKeyUp = (event) =>{
        const { keyCode,target} = event
        if(keyCode !== 13) return;
        if(target.value.trim() === ''){
            alert('请不要输入空数据')
            return;
        }
        const thingObj = {
            id:nanoid(),
            thing:target.value,
            done:false
          }
        this.props.addItem(thingObj)
        target.value = ''
    }
    render() {
        return (
            <header>
            <section>
              <label>ToDoList</label>
              <input
                onKeyUp={this.handleKeyUp}
                type="text"
                id="title"
                name="title"
                placeholder="添加ToDo"
                required="required"
              />
            </section>
          </header>
        );
    }
}

export default Header;
