import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage/PersonPage';
import HomePage from '@containers/HomePage/HomePage.jsx';
import NotFoundPage from '@containers/NotFoundPage/NotFoundPage';
import FavoritePage from '@containers/FavoritePage/FavoritePage';
import SearchPage from '@containers/SearchPage/SearchPage';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage.jsx'

const routesConfig = [
    {
        path: '/',
        exact: true,
        element: HomePage
    },
    {
        path: '/people',
        exact: true,
        element: PeoplePage
    },
    {
        path: '/people/:id',
        exact: true,
        element: PersonPage
    },
    {
        path: '/search',
        exact: true,
        element: SearchPage
    },
    {
        path: '/favorites',
        exact: true,
        element: FavoritePage
    },
    {
        path: '*',
        exact: false,
        element: NotFoundPage
    },
    {
        path: '/fail',
        exact: false,
        element: ErrorMessage
    },
]

export default routesConfig;