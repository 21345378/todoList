
import Header from "./component/header";
import List from "./component/list";
import Fotter from "./component/fotter";
import React, { Component } from 'react';
class App extends Component {
  state = {
    todoList:[
      {
        id:'001',
        thing:'吃饭1',
        done:false,
      },
      {
        id:'00',
        thing:'吃饭2',
        done:true,
      },
      {
        id:'0030000',
        thing:'吃饭3',
        done:false,
      },
      {
        id:'004',
        thing:'吃饭4',
        done:true,
      }
    ]
  }

  //向子组件中传递一个函数和vue类似完成子组件向父组件传参,使用箭头函数避免this指向问题
  addThingItem = (thingObj) =>{
    const { todoList} = this.state
    const newTodoList = [thingObj,...todoList]
    this.setState({todoList:newTodoList})
  }
  // 向子组件中传递一个函数用于回调获取值
  updateThingItem = (flag,id) =>{
    console.log(flag,id)
    const {todoList} = this.state
    const newList = todoList.map((item)=>{
      if(item.id === id) return {...item,done:flag}
      else return item
    })
    console.log(newList)
    this.setState({
      todoList:newList
    })
  }

  // 向子组件中传递一个数组，实现删除操作
  deleteThingItem = (id) =>{
    const {todoList} = this.state
   const newList =  todoList.filter((item) => {
      return item.id !== id
    })
    console.log(newList)
    this.setState({
      todoList:newList
    })
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="App">
      <Header addItem = {this.addThingItem}/>
      <List todo={todoList} update={this.updateThingItem} deleteItem={this.deleteThingItem}/>
      <Fotter/>
    </div>
    );
  }
}

export default App;

