import { SORT_OPTIONS } from "../../constants/sortOptions";
import { USER_ROLE } from "../../constants/userRoles";

export const sortUsers = (users, sortBy) => {
	const sortUsers = [...users];
	switch (sortBy) {
		case SORT_OPTIONS.NAME:
			return sortUsers.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		case SORT_OPTIONS.ROLE:
			return sortUsers.sort((a, b) => {
				if (a.role === b.role) return 0;
				if (a.role === USER_ROLE.TEACHER) return -1;
				if (a.role === USER_ROLE.STUDENT && b.role === USER_ROLE.OTHER) return 1;
				return 1;
			});
		case SORT_OPTIONS.ACTIVE:
			return sortUsers.sort((a, b) => {
				if (a.active === b.active) return 0;
				if (a.active && !b.active) return -1;
				return 1;
			});

		default:
			return sortUsers;
	}
};

export const filterActiveUsers = (users, active) => {
	if (!active) return [...users];

	return users.filter(user => user.active);
};
export const filterUsersByName = (users, search) => {
	if (!search) return [...users];

	const lowerCaseSearch = search.toLocaleLowerCase();

	return users.filter(user =>
		user.name.toLowerCase().includes(lowerCaseSearch)
	);
};

export const paginateUsers = (users, page, itemsPerPage) => {
	const starIndex = (page - 1) * itemsPerPage;
	const endIndex = starIndex + itemsPerPage;
	return users.slice(starIndex, endIndex);
};
