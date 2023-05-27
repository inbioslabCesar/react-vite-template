import UsersList from "./componets/UsersList";

const USERS = [
    {
        username: 'Pablo',
        name: 'Pablo Castellanos',
        active: true,
        role: 'other'
    },
    {
        username: 'Jose',
        name: 'Jose Miguel Fernandez',
        active: true,
        role: 'teacher'
    },
    {
        username: 'Javier',
        name: 'Javier López',
        active: false,
        role: 'student'
    },
];
//! Children 
const App = () => (
	<UsersList initialUsers={USERS} />
);

export default App;