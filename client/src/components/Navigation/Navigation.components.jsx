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

        <>
            <div className={styles.navigationpanel}>
                {/* <ButtonGroup className={styles.homebutton}><Button>{HomeRoundedIcon}</Button></ButtonGroup> */}
                <div className={styles.navigationpanel__logo}>
                    <img src={logo} className={styles.navigationpanel__logo__stu}></img>
                </div>
                <div className={styles.navigationpanel__linksgroup} >


                    <a href="/" ><Button > <img src={homeicon} className={styles.button}></img>
                    </Button></a>

                    <a href="/stusnacks" ><Button ><img src={snackicon} ></img></Button></a>
                    <a href="/studrinks" ><Button ><img src={drinksicon}></img></Button></a>
                    <a href="/stumaticfan" ><Button><img src={fanicon}></img></Button></a>
                    <a href="/studiolights" ><Button><img src={lightsicon}></img></Button></a>
                    <a href="/productivitytimer" > <Button><img src={productivitylockicon}></img></Button></a>

                </div>
            </div>
        </>
    );
};

