import { USER_ROLE } from '../constants/userRoles';
import style from './UserRole.module.css';

const ROLE_STYLES = {
	[USER_ROLE.TEACHER]: ['profesor', style.teacher],
	[USER_ROLE.STUDENT]: ['alumno', style.student],
	[USER_ROLE.OTHER]: ['otros', style.other]
};
//! Condicion or ALT + 124 ||
const UserRole = ({ role }) => {
	const [roleName, roleClassname] = ROLE_STYLES[role] || ROLE_STYLES.other;
    return (
        <span className={`${style.role} ${roleClassname}`}>{roleName}</span>
    )
};
export default UserRole;