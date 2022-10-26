import React from 'react';
import logo from '../../assets/logo2.svg';
import '../../main scss/mainPage.scss';
import LeftDataPanel from '../../components/RightNavigation/RightNavigation.component';
import FanIOTChart from '../FanIOT/FanIOTChart';
import FanIOT from '../FanIOT/FanIOT.route';
import DrinksIOT from '../DrinksIOT/DrinksIOT';
import Button from '@mui/material/Button';
import SnacksIOTChart from '../SnacksIOT/SnacksIOTLinechart';
import SnacksIOT from '../SnacksIOT/SnacksIOT.route';
import LightsIOT from '../LightsIOT/LightsIOT.route';
import { Switch } from '@mui/material';
import AvailableColors from '../../components/AvailableColors/AvailableColors.component';
import BarGraph from '../../components/BarGraph/BarGraph.component';
import Lights from '../../components/Lights/Lights.component';

const MainDashboardPage = () => {
    // GUYS
    // some of your code was really encapsulated way too far. It was also taking styles from each other?
    // Here you'll put your SWITCH's functions in, same as you would on your individual pages.
    // Had a contact session with Leo about this. 
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
                        <div className='mainpage__grid__toprow__studrinks__graph'>
                            <DrinksIOT />
                        </div>
                        <div className='mainpage__grid__toprow__studrinks__controls'>
                            {/* <Button variant="outlined">Dispense</Button> */}
                            <Button variant="contained" style={{ backgroundColor: '#23257A' }}>Dispense</Button>
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

                        <div className='mainpage__grid__toprow__stusnacks__graph'>
                            <SnacksIOTChart />
                        </div>
                        <div className='mainpage__grid__toprow__stusnacks__controls'>
                            <div className='mainpage__grid__toprow__stusnacks__controls__buttons'>
                                {/* <Button variant="outlined">Dispense</Button> */}
                                <Button variant="contained" style={{ backgroundColor: '#23257A' }}>Dispense</Button>
                            </div>
                            <div className='mainpage__grid__toprow__stusnacks__controls__switch'>
                                <p style={{ fontSize: '10px', color: 'white', fontWeight: 'bold' }}>Daily</p>
                                <Switch />
                                <p style={{ fontSize: '10px', color: 'white', paddingLeft: '8px', fontWeight: 'bold' }}>Hourly</p>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <div className='mainpage__bottomrow'>
                <Lights />
                <div className='mainpage__bottomrow__stulock'>
                    <div className='mainpage__bottomrow__stulock__graph'>
                        <BarGraph />
                    </div>
                    <div className='mainpage__bottomrow__stulock__buttons'>
                        <Button variant="contained" style={{ backgroundColor: '#23257A' }}>Start Timer</Button>
                        <div className='switchContainer'>
                            <p style={{ fontSize: '10px', color: 'white', fontWeight: 'bold' }}>ON</p>
                            <Switch />
                            <p style={{ fontSize: '10px', color: 'white', paddingLeft: '8px', fontWeight: 'bold' }}>OFF</p>
                        </div>
                    </div>

                    <div className='mainpage__bottomrow__stulock__timer'>
                        <input type={"text"} placeholder={"00"}></input>
                        <h4>:</h4>
                        <input type={"text"} placeholder={"00"}></input>
                        <h4>:</h4>
                        <input type={"text"} placeholder={"00"}></input>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default MainDashboardPage;