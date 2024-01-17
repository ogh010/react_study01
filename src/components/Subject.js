import { Component } from 'react';
class Subject extends Component {
    /* Subject라는 컴포넌트를 만들겠다 */
    render(){
        return(
        /* 컴포넌트를 만들때에는 하나의 최상위 태그만 써야함 */
        <header>
            <h1>{this.props.title}</h1>
            {this.props.sub}
        </header>
        );
    }
}
export default Subject;