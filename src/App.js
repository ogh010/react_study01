
import './App.css';
import { Component } from 'react';
import Toc from './components/Toc'
import Content from './components/Content'
import Subject from './components/Subject'


class App extends Component {
  constructor(props){
    super(props);
    // state값을 초기화 시킴
    // 컴포넌트가 실행될때 render라는 함수 전에 실행
    // 컴포넌트가 실행될 때 construcotr라는 함수가 있으면 초기화를 담당한다.
    this.state = {
      subject:{title:'web',sub:'world wide web'},
      contents:[
        {id:1,title:'html',desc:'html is hypertext markup language'},
        {id:2,title:'css',desc:'css is hypertext markup language'},
        {id:3,title:'js',desc:'js is hypertext markup language'},
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        {/* <Subject title="react" sub="for ui"></Subject> */}
        <Toc data={this.state.contents}></Toc>
        <Content title="html" desc="html is hypertext markup language"></Content>
      </div>
    );
  }
}

export default App;
