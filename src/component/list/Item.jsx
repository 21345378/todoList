import React, { Component } from 'react';

class Item extends Component {


    state = {
        mouse:false,
    }
    // 由于我们在绑定函数的时候加上了小括号，则在render时就需要我们手动的给函数添加一个回调函数
    handleMouseMove(flag){
        return ()=>{
            this.setState({
                mouse:flag
            })
        }
    }

    // 这里进行的是对item进行勾选的相应操作
    handelChecked = (id) =>{
        // 使用箭头函数是为了避免this指向问题，且如果要进行event的修改，可以在回调函数中写
        return (event) =>{
            this.props.update(event.target.checked,id)
        }
    }


    deleteTodoItem = (id) =>{
        return () =>{
            this.props.deleteItem(id)
        }
    }
    render() {
        // 从父组件中传递的相关数值来进行对应的操作
        const {id,thing,done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouseMove(true)} onMouseLeave={this.handleMouseMove(false)}>
                <input type='checkbox' defaultChecked={done} className='temp' onChange={this.handelChecked(id)} />
                <p>{thing}</p>
                <button style={{display:mouse ? 'block' : 'none'}} onClick={this.deleteTodoItem(id)}>删除</button>
            </li>
        );
    }
}

export default Item;
