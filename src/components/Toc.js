// react 의 component 클래스를 가져옴
import { Component } from 'react';

// toc 클래스를 정의, component 클래스를 확장
class Toc extends Component {
    // render 메서드 : 컴포넌트 ui를 생성
    render(){
        // 빈 배열 생성
        let lists = [];
        // 부모 컴포넌트로부터 전달받은 데이터를 가져옴
        let data = this.props.data;
        let i = 0;

        // 반복문을 통해 데이터를 기반으로 목록을 생성
        while(i<data.length){
            // 목록에 각 아이템을 추가, 각 항목은 a 태그를 포함
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
            i=i+1;
        }
        return(
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
        )
    }
}

export default Toc;