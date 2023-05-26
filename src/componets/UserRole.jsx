import style from './UserRole.module.css';

const ROLE_STYLES = {
	teacher: ['profesor', style.teacher],
	student: ['alumno', style.student],
	graduate: ['egresado', style.graduate],
	other: ['otros', style.other]
};
//! Condicion or ALT + 124 ||
const UserRole = ({ role }) => {
	const [roleName, roleClassname] = ROLE_STYLES[role] || ROLE_STYLES.other;
    return (
        <span className={`${style.role} ${roleClassname}`}>{roleName}</span>
    )
};
export default UserRole;