//handle pick pass down to action and setup onClick -bind here
//randomly pikc an option and alert it

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			options: [],
		};
	}
	handleDeleteOptions() {
		this.setState(() => {
			return {
				options: [],
			};
		});
	}
	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}

	handleAddOption(option) {
		if (!option) {
			return "Enter a valid value";
		} else if (this.state.options.indexOf(option) > -1) {
			return "Already exists";
		}

		this.setState((prevState) => {
			return {
				options: prevState.options.concat([option]),
			};
		});
	}

	render() {
		const title = "React App 2.0";
		const subtitle = "sub react app";

		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

const Action = (props) => {
	return (
		<div>
			<button onClick={props.handlePick} disabled={!props.hasOptions}>
				what to do?
			</button>
		</div>
	);
};

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.map((option) => (
				<Option key={option} optionText={option} />
			))}
		</div>
	);
};
const Option = (props) => {
	return <div>{props.optionText}</div>;
};

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</div>
	);
};

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined,
		};
	}
	handleAddOption(e) {
		e.preventDefault();

		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		this.setState(() => {
			return { error };
		});
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
