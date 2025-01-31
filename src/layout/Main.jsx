// @flow strict

import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

function Main() {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;