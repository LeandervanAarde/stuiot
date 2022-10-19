import React from 'react';
import logo from '../../assets/logo2.svg';
import '../../main scss/mainPage.scss';
import LeftDataPanel from '../../components/RightNavigation/RightNavigation.component';





const MainDashboardPage = () => {

    return (
        <div className='mainpage'>
            <div className='mainpage__grid'>

                <div className='mainpage__grid__leftpanel'>
                    <img src={logo} />
                    <LeftDataPanel />
                </div>

                <div className='mainpage__grid__toprow'>
                    <div className='mainpage__grid__toprow__studrinks'>
                        studrinks div
                    </div>
                    <div className='mainpage__grid__toprow__stumaticfan'>
                        matic div
                    </div>
                    <div className='mainpage__grid__toprow__stusnacks'>
                        snack div
                    </div>
                </div>


            </div>
            <div className='mainpage__bottomrow'>
                <div className='mainpage__bottomrow__studiolights'>
                    light
                </div>
                <div className='mainpage__bottomrow__stulock'>
                    stu lock div
                </div>
            </div>


        </div>
    );
}

export default MainDashboardPage;