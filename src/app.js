class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>

            </div>
        )
    }
}
class Action extends React.Component{
    handlePick(){
        alert('handlepick')
    }
    render(){
        return(
            <div>
                <button onClick={this.handlePick}>the button</button>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header title = "testASD"/>
        <Header subtitle = "testSUB"/>
        <Action/>

    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))
