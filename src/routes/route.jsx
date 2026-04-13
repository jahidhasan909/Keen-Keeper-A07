import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../MainLayout/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import TimeLine from '../pages/TimeLine/TimeLine';
import Stats from '../pages/Stats/Stats';
import ErrorElement from '../Components/ErrorElement/ErrorElement';
import DetailPage from '../pages/DetailsPage/DetailPage';

const route = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            { index: true, Component: HomePage },
            { path: '/timeline', Component: TimeLine },
            { path: '/stats', Component: Stats },
            {
                path: '/details/:id',
                Component: DetailPage,
                loader: () => fetch(`/data.json`)
            }
        ],
        errorElement: <ErrorElement></ErrorElement>
    }
])

export default route;