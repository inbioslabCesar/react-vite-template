import UserRow from "./UserRow";

const UsersListRows = ({users, toggleUsersActive}) => {
	if (!users.length) return <p>No hay usuarios</p>;

	return users.map(user => <UserRow key={user.id} {...user} toggleUsersActive={ toggleUsersActive } />);
};
export default UsersListRows;