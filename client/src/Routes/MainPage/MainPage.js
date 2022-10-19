import React from 'react';
import logo from '../../assets/logo2.svg';
import '../../main scss/mainPage.scss';
import LeftDataPanel from '../../components/RightNavigation/RightNavigation.component';
import FanIOTChart from '../FanIOT/FanIOTChart';
import FanIOT from '../FanIOT/FanIOT.route';



const MainDashboardPage = () => {

    return (
        <div className='mainpage'>
            <div className='mainpage__grid'>

                <div className='mainpage__grid__leftpanel'>
                    <img src={logo} />
                    <div className='mainpage__grid__leftpanel__panel'>
                        <LeftDataPanel />
                    </div>


                </div>

                <div className='mainpage__grid__toprow'>
                    <div className='mainpage__grid__toprow__studrinks'>
                        studrinks div
                        <div className='mainpage__grid__toprow__studrinks__graph'>

                        </div>
                        <div className='mainpage__grid__toprow__studrinks__controls'>
                            {/* graph here */}
                        </div>
                    </div>

                    <div className='mainpage__grid__toprow__stumaticfan'>
                        <div className='mainpage__grid__toprow__stumaticfan__graph'>
                            <FanIOTChart />

                        </div>
                        <div className='mainpage__grid__toprow__stumaticfan__controls'>
                            <FanIOT />
                        </div>
                    </div>

                    <div className='mainpage__grid__toprow__stusnacks'>
                        snack div
                        <div className='mainpage__grid__toprow__stusnacks__graph'>

                        </div>
                        <div className='mainpage__grid__toprow__stusnacks__controls'>
                            {/* graph here */}
                        </div>
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