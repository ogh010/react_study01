
import './App.css';
import { Component } from 'react';
import Toc from './components/Toc'
import Content from './components/Content'
import Subject from './components/Subject'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'web',sub:'world wide web'},
      contents:[
        {id:1,title:'html',desc:'html is hypertext markup language'},
        {id:2,title:'css',desc:'css is hypertext markup language'},
        {id:3,title:'j',desc:'js is hypertext markup language'},
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
