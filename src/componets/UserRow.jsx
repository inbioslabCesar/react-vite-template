
import { useContext } from 'react';
import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';
import { UsersContext } from '../lib/contexts/UsersContext';

//! Un Hook solo puede ser llamado dentro de la funcion
const UserRow = ({ id, name, active, role }) => {
	const { toggleUsersActive } = useContext(UsersContext);

	console.log(toggleUsersActive)
	return (
		<div className={style.wrapper}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={style.status}>
				<UserStatus active={active} />
			</div>
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.action}>
				<button onClick={() => toggleUsersActive(id)}>
					{active ? 'Desactivar' : 'Activar'}
				</button>
			</div>
		</div>
	);
};
export default UserRow;
