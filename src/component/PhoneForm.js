const { Component } = require("react");

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            // 1. I don't understand
            [e.target.name]: e.target.value
            
        })
    }
    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       placeholder="이름"
                       onChange={this.handleChange}
                       value={this.state.name}
                       name="name"/>
                <input type="text"
                       placeholder="전화번호"
                       onChange={this.handleChange}
                       value={this.state.phone}
                       name="phone"/>
                <button type="submit">등록</button>
            </form>
        )
    }
} 


export default PhoneForm;