import React from 'react';
import { MdCheck, MdWarning } from 'react-icons/md';

import './styles.css';

const Operational = () => (
	<div className="operational status-icon">
		<MdCheck size={16} />
	</div>
)

const Warning = () => (
	<div className="warning status-icon">
		<MdWarning size={20} />
	</div>
)

const Status = ({ status }) => {
	{
		status === 'operational' ? (
			// ? <Warning />
			// : <Operational />
			<Operational />
		) : (
			<Warning />
		)
	}
}

export default Status;