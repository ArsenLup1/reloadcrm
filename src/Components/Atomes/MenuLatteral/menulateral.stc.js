import Styled from 'styled-components';
import { Container, Row } from 'reactstrap';

const MenuLateralStc=Styled(Container)`
    margin: 0;
    padding: 0;
    display: grid;
    /*font-family: 'Lato', sans-serif;
    z-index: -6;*/

a{
    text-decoration: none;
}
    
.text-green{
    color: #3b9668;
}

.container{
    display: grid;
    box-sizing: border-box;
    height: 100vh;
    grid-template-columns: 0.8fr 1fr 1fr 1fr;
    grid-template-rows: 0.2fr 3fr;
    grid-template-areas:
        "sidebar nav nav nav"
        "sidebar main main main";
}

.text-primary-p{
    color: #a5aaad;
    font-size: 14px;
    font-weight: 700;
}

.navbar{
    background: #ffffff;
    grid-area: nav;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px 0px 30px;
    border-bottom: 1px solid lightgray;
}

.nav__icon{
    display: none;
}

.nav__icon > .ikons{
    font-size: 26px;
    color: #a5aaad;
}

.navbar__left > a{
    margin-right: 30px;
    text-decoration: none;
    color: #a5aaad;
    font-size: 15px;
    font-weight: 700;
}

.navbar__left .active__link{
    color: #265acc;
    border-bottom: 3px solid #265acc;
    padding-bottom: 12px;
}

.navbar__right{
    display: flex;
    justify-content: center;
    align-items: center;
}

.navbar__right > a{
    margin-left: 20px;
    text-decoration: none;
}

.navbar__right > a > .ikons{
    color: #a5aaad;
    font-size: 16px;
    border-radius: 50px;
    background: #ffffff;
    box-shadow: 2px 2px 5px #d9d9d9, -2px -2px 5px #ffffff;
}

main {
    background: #f3f4f6;
    grid-area: main;
    overflow-y: auto;
}

.main__container{
    padding: 60px 50px 0;
}

.main__title{
    display: flex;
    align-items: center;
    width: max-content;
}

.main__title > img {
    max-height: 100vh;
    object-fit: contain;
    margin-right: 20px;
}

.main__greeting > h1{
    font-size: 24px;
    color: #2e4a66;
    margin-bottom: 5px;
}

.main__greeting > p {
    font-size: 14px;
    color: #a5aaad;
    font-weight: 700;
}

.main__cards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    margin: 20px 0px;
}

.card{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 70px;
    padding: 25px;
    cursor: pointer;
    background: #000;
    box-shadow: 5px 5px 13px #ededed, 
                -5px -5px 13px #ffffff;
}

.card__inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card__inner > span {
    font-size: 25px;
}

.charts{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 50px;
}

.charts__left{
    padding: 25px;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 5px 5px 13px #ededed,
                -5px -5px 13px #ffffff;
}

.charts__left__title{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.charts__left__title > div > h1 {
    font-size: 24px;
    color: #2e4a66;
    margin-bottom: 5px;
}

.charts__left__title > div > p {
    font-size: 14px;
    font-weight: 700;
    color: #a5aaad;
}

.charts__left__title > div > .ikons{
    color: #ffffff;
    font-size: 20px;
    background: #ffc100;
    border-radius: 200px 0px 200px 200px;
    -moz-border-radius: 200px 0px 200px 200px;
    -webkit-border-radius: 200px 0px 200px 200px;
    border: 0px solid #000000;
    padding: 15px;
}

.charts__right {
    padding: 25px;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 5px 5px 13px #ededed,
                -5px -5px 13px #ffffff;
}

.charts__right__title{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.charts__right__title > div > h1 {
    font-size: 24px;
    color: #2e4a66;
    margin-bottom: 5px;
}

.charts__right__title > div > p {
    font-size: 14px;
    font-weight: 700;
    color: #a5aaad;
}

.charts__right__title > div > .ikons{
    color: #ffffff;
    font-size: 20px;
    background: #39447a;
    border-radius: 200px 0px 200px 200px;
    -moz-border-radius: 200px 0px 200px 200px;
    -webkit-border-radius: 200px 0px 200px 200px;
    border: 0px solid #000000;
    padding: 15px;
}

.charts__right__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 30px;
}

.card1{
    background: #d1ecf1;
    color: #35a4ba;
    text-align: center;
    padding: 25px;
    border-radius: 5px;
    font-size: 14px;
}

.card2{
    background: #d2f9ee;
    color: #38e1b0;
    text-align: center;
    padding: 25px;
    border-radius: 5px;
    font-size: 14px;
}

.card3{
    background: #d6d8d9;
    color: #3a3e41;
    text-align: center;
    padding: 25px;
    border-radius: 5px;
    font-size: 14px;
}

.card4{
    background: #fddcdf;
    color: #f65a6f;
    text-align: center;
    padding: 25px;
    border-radius: 5px;
    font-size: 14px;
}

#sidebar{
    background: #020509;
    grid-area: sidebar;
    overflow-y: auto;
    padding: 20px;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
}

.sidebar__img{
    display: flex;
    align-items: center;
}

.sidebar__title > div > img{
    width: 65px;
    object-fit: contain;
}

.sidebar__title > div > h1{
    font-size: 18px;
    display: inline;
}

.sidebar__title > .ikons{
    font-size: 18px;
    display: none;
}

.sidebar__title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f3f4f6;
    margin-bottom: 30px;
}

.sidebar__menu > h2{
    color: #3ea175;
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 5px;
    padding: 0 10px;
    font-weight: 700;
}

.sidebar__link{
    color: #f3f4f6;
    padding: 100px;
    border-radius: 3px;
    margin-bottom: 5px;
}

.active_menu_link {
    background: rgba(62, 161, 117, 0.3);
    color: #3ea175;
}

.active_menu_link .ikons{
    color: #3ea175!important;
}

.sidebar__link > .ikons{
    margin-right: 10px;
    font-size: 18px;
}

.sidebar__logout {
    margin-top: 20px;
    color: #e65061;
    padding: 10px;
}

.sidebar__logout > a{
    text-decoration: none;
    color: #e65061;
    font-weight: 700;
    text-transform: uppercase;
}

.sidebar__logout > .ikons{
    margin-right: 10px;
    font-size: 18px;
}

.sidebar__responsive{
    display: inline !important;
    z-index: 9999 !important;
    left: 0 !important;
    position: absolute;
}

.text-primary-p{
    color: #a5aaad;
    font-size: 14px;
    font-weight: 700;
}

.font-bold{
    font-weight: 700;
}

.text-title{
    color: #2e4a66;
}

.text-lightblue{
    color: #469cac;
}

.text-red{
    color: #cc3d38;
}

.text-black{
    color: #f65a6f;
}

.text-green{
    color: #3b9668;
}

@media only screen and (max-width: 978px) {
    .container {
        grid-template-columns: 1fr;
        grid-template-rows: 0.2fr 3fr;
        grid-template-areas: "nav" "main";
    }

    #sidebar{
        display: none;
    }

    .sidebar__title > .ikons{
        display: inline;
    }

    .nav__icon {
        display: inline;
    }
}

@media only screen and  (max-width: 855px) {
    .main__cards {
        grid-template-columns: 1fr;
        gap: 10px;
        margin-bottom: 0
    }

    .charts {
        grid-template-columns: 1fr;
        margin-top: 30px;
    }
}


`;
export default MenuLateralStc;