//handle pick pass down to action and setup onClick -bind here
//randomly pikc an option and alert it


class App extends React.Component{

    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.state = {
            options: ['first', 'second', 'third']
        }
    }
    handleDeleteOptions(){
        this.setState(()=>{
            return{
                options: []
            }
        })
    }
    handlePick(){
        this.setState(()=>{
            // return{
            //     pick: 
            // }
        })
    }
    render(){
        const title = 'React App';
        const subtitle = 'sub react app'

        return (
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action hasOptions = {this.state.options.length > 0} />
                <Options
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        )
    }
}

class Action extends React.Component{
    render(){
        return(
            <div>
                <button
                    onClick = {this.handlePick}
                    disabled = {!this.props.hasOptions}
                >
                what to do?
                </button>
            </div>
        )
    }
}


class Options extends React.Component{

    render(){
        return(
            <div>
                <button onClick = {this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => 
                        <Option key = {option} optionText = {option}/>
                    )
                }
            </div>
        )
    }
}
class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class Header extends React.Component{
    render() {
        return (
          <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
          </div>
        );
      }
}
class AddOption extends React.Component {
    handleAddOption(e) {
      e.preventDefault();
  
      const option = e.target.elements.option.value.trim();
  
      if (option) {
        alert(option);
      }
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));