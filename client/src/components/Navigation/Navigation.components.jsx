import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import logo from '../../assets/logo2.svg';
import homeicon from '../../assets/homeicon.svg';
import snackicon from '../../assets/snackicon.svg';
import drinksicon from '../../assets/drinksicon.svg';
import fanicon from "../../assets/fanicon.svg"
import lightsicon from '../../assets/lightsicon.svg';
import productivitylockicon from '../../assets/productivityicon.svg';
import styles from "./Navigation.module.scss"
import { Link } from 'react-router-dom';


export default function NavigationPanel() {


    return (
        <div className={styles.navigationpanel}>
            {/* <ButtonGroup className={styles.homebutton}><Button>{HomeRoundedIcon}</Button></ButtonGroup> */}
            <Link to="/">
                <div className={styles.navigationpanel__logo}>
                    <img src={logo} className={styles.navigationpanel__logo__stu} />
                </div>
            </Link>
            <div className={styles.navigationpanel__linksgroup} >
                <Link to="/">
                    <Button > <img src={homeicon} className={styles.button} /></Button>
                </Link>

                <Link to="/stusnacks">
                    <Button ><img src={snackicon} /></Button>
                </Link>

                <Link to="/studrinks">
                    <Button > <img src={drinksicon} className={styles.button} /></Button>
                </Link>

                <Link to="/stumaticfan">
                    <Button><img src={fanicon}></img></Button>
                </Link>

                <Link to="/studiolights">
                    <Button><img src={lightsicon} /></Button>
                </Link>

                <Link to="/productivitytimer">
                    <Button><img src={productivitylockicon} /></Button>
                </Link>
            </div>
        </div>
    );
};

