
import UserDisplay from './UserDisplay';
import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

//! Un Hook solo puede ser llamado dentro de la funcion
const UserRow = ({ username, name, active, role }) => {
	return (
		<div className={style.wrapper}>
			<div className={style.name}>
				<UserDisplay username={username} name={name} />
			</div>
			<div className={style.status}>
				<UserStatus active={active} />
			</div>
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.action}></div>
		</div>
	);
};
export default UserRow;
