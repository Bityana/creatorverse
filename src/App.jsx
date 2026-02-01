import { useRoutes, Link } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {
const routes = useRoutes([
{ path: '/', element: <ShowCreators /> },
{ path: '/creator/:id', element: <ViewCreator /> },
{ path: '/edit/:id', element: <EditCreator /> },
{ path: '/new', element: <AddCreator /> }
]);

return (
<div className="app-shell">
  <header className="app-header">
    <Link to="/" className="brand">
      <span>Creatorverse</span>
    </Link>
    <span className="header-tagline">Learn. Build. Share.</span>
  </header>
  <main className="container">
    {routes}
  </main>
</div>
);
}

export default App;
