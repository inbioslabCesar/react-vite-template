import Title from "./componets/Title";
import UsersList from "./componets/UsersList";

const USERS = [
    {
        name: 'Pablos Castellanos',
        active: true,
        role: 'teacher'
    },
    {
        name: 'Jose Miguel Fernandez',
        active: true,
        role: 'teacher'
    },
    {
        name: 'Javier López',
        active: false,
        role: 'student'
    },
    {
        name: 'Cesar Perez Guimaraez',
        active: true,
        role: 'graduate'
    },
];
const App = () => (
	<UsersList users={USERS}>
		<Title>Listado de usuarios</Title>		
	</UsersList>
);

export default App;