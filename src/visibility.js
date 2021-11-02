
class VisibilityToggle extends React.Component{

    constructor(props){
        super(props)
        this.handleVisibility = this.handleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }

    handleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Toggle Visibility</h1>
                <button onClick ={this.handleVisibility}>
                    {this.state.visibility? 'Hide' : 'Show'}
                </button>
                {this.state.visibility&&(
                    <div>
                        <p>Now u can see</p>
                    </div>
                )}
            </div>
        )}

}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));