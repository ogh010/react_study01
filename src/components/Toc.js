import { Component } from 'react';
class Toc extends Component {
    
    render(){
        let lists = [];
        let data = this.props.data;
        let i = 0;
        while(i<data.length){
            lists.push(<li><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
            i=i+1;
        }
        return(
        <nav>
            <ul>
                <li><a href="1.html">html</a></li>
                <li><a href="2.html">css</a></li>
                <li><a href="3.html">js</a></li>
            </ul>
        </nav>
        )
    }
}

export default Toc;