import UserRow from "./UserRow";
import style from './UsersList.module.css';
const UsersList = ({ users, children }) => {
    const usersRenderd = users.length > 0 ? users.map(user => <UserRow key={user.name} {...user} />) : <p>No hay usuarios</p>;
    return (
        <div className={style.list}>
            {children}
            {usersRenderd}
        </div>
    );
};
export default UsersList;