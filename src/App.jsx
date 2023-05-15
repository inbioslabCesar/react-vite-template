import UsersList from "./componets/UsersList";

const USERS = [
    {
        id: 0,
        name: 'Pablos Castellanos',
        active: true,
        role: 'teacher'
    },
    {
        id: 1,
        name: 'Jose Miguel Fernandez',
        active: true,
        role: 'teacher'
    },
    {
        id: 2,
        name: 'Javier López',
        active: false,
        role: 'student'
    },
    {
        id: 3,
        name: 'Cesar Perez Guimaraez',
        active: true,
        role: 'graduate'
    },
];
//! Children 
const App = () => (
	<UsersList initialUsers={USERS} />
);

export default App;