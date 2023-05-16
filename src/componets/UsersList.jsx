import { useState } from 'react';
import style from './UsersList.module.css';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';
import { UsersContext } from '../lib/contexts/UsersContext';

const UsersList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFiltersFuntions } = getState();
	const { users, toggleUsersActive } = useUsers(initialUsers);

	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUser(usersFiltered, sortBy);

	return (
		<div className={style.wrapper}>
			<h1>Listado de usuarios</h1>
			<UsersListFilters
				search={search}
				onlyActive={onlyActive}
				sortBy={sortBy}
				{...setFiltersFuntions}
			/>
			<UsersContext.Provider value={{ toggleUsersActive }}>
				<UsersListRows users={usersFiltered} />
			</UsersContext.Provider>
		</div>
	);
};
const getState = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 0
	});

	const setSearch = search =>
		setFilters({
			...filters,
			search
		});
	const setOnlyActive = onlyActive =>
		setFilters({
			...filters,
			onlyActive
		});
	const setSortBy = sortBy =>
		setFilters({
			...filters,
			sortBy
		});

	return {
		...filters,
		setSearch,
		setOnlyActive,
		setSortBy
	};
};
const useUsers = initialUsers => {
	const [users, setUsers] = useState(initialUsers);

	const toggleUsersActive = userId => {
		const newUsers = [...users];
		const userIndex = newUsers.findIndex(user => user.id === userId);

		if (userIndex === -1) return;
		newUsers[userIndex].active = !newUsers[userIndex].active;

		setUsers(newUsers);
	};

	return { users, toggleUsersActive };
};

const sortUser = (users, sortBy) => {
	const sortUsers = [...users];
	switch (sortBy) {
		case 1:
			return sortUsers.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});

		default:
			return sortUsers;
	}
};

const filterActiveUsers = (users, active) => {
	if (!active) return [...users];

	return users.filter(user => user.active);
};
const filterUsersByName = (users, search) => {
	if (!search) return [...users];

	const lowerCaseSearch = search.toLocaleLowerCase();

	return users.filter(user =>
		user.name.toLowerCase().startsWith(lowerCaseSearch)
	);
};

export default UsersList;
