import React from "react";

//stateless functional components
const Action = (props) => (
	<div>
		<button
			className="big-button"
			color="info"
			onClick={props.handlePick}
			disabled={!props.hasOptions}
		>
			what to do?
		</button>
	</div>
);
export default Action;
