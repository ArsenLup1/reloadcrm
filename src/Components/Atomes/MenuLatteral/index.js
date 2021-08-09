
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuLateralStc from './menulateral.stc';
import { Container } from 'reactstrap';
import { FiSearch, FiThumbsUp } from 'react-icons/fi';
import { GiHamburgerMenu, GiMoneyStack } from 'react-icons/gi';
import { AiOutlineClockCircle, AiOutlineUser, AiFillHome } from 'react-icons/ai';
import { GoCalendar, GoFileSubmodule } from 'react-icons/go';
import { IoLogoUsd } from 'react-icons/io';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { FaTimes, FaWrench, FaUserSecret, FaBuilding, FaSignOutAlt, FaPowerOff } from 'react-icons/fa';
import { BsArchiveFill } from 'react-icons/bs';
import { BiCalendarCheck } from 'react-icons/bi';
import callcenter from '../../../img/callcenter.png'; 
import calll from '../../../img/calll.png'; 
import avatarr from '../../../img/avatarr.png';



const MenuLateral = () => {

    return ( 
        <MenuLateralStc>

            <nav className="navbar">
                <div className="nav__icon" onClick="toggleSidebar()">
                    <GiHamburgerMenu className="ikons" />
                </div>
                <div className="navbar__left">
                    <a href="#">Isolation</a>
                    <a href="#">Centre Professionel de Formation</a>
                    <a className="active__link" href="#">Admin</a>
                </div>
                <div className="navbar__right">
                    <a href="#">
                        <FiSearch className="ikons" />
                    </a>
                    <a href="#">
                        <AiOutlineClockCircle className="ikons" />
                    </a>
                    <a href="#">
                        <img src={avatarr } className="rounded thumbnail" alt="logo" width="30px" />
                    </a>
                </div>
                
                    <div className="sidebar__logout">
                        <FaPowerOff className="ikons" />
                        <a href="#">Log out</a>
                    </div>
            </nav>

            <main>
                <div className="main__container mx-auto">

                    <div className="main__title">
                        <img src={calll} className="rounded thumbnail" alt="logo" width="300px" />
                        <div className="main__greeting">
                            <h1>Hello Admin</h1>
                            <p>Welcome to your dashboard CRM</p>
                        </div>
                    </div>

                <div className="main__cards">

                    <div className="card">
                        <AiOutlineUser className="text-lightblue ikons"/>
                        <div className="card__inner">
                            <p className="text-primary-p">ISO</p>
                        </div>
                    </div>

                    <div className="card">
                        <GoCalendar className="text-red ikons"/>
                        <div className="card__inner">
                            <p className="text-primary-p">CPF</p>
                        </div>
                    </div>

                    <div className="card">
                        <AiOutlineUser className="text-black ikons"/>
                        <div className="card__inner">
                            <p className="text-primary-p">ENEGIE</p>
                        </div>
                    </div>

                    
                </div>
            </div>
                <div className="charts">
                    <div className="charts__left">
                        <div className='charts__left__title'>
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Lupin, Ain-Sebaâ, Casablanca</p>
                            </div>
                            <IoLogoUsd className="ikons" />
                        </div>
                        <div id="chart"></div>
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Stats Reports</h1>
                                <p>Cupertino, Ain-Sebaâ, Casablanca</p>
                            </div>
                            <IoLogoUsd className="ikons" /> 
                        </div>

                        <div className="charts__right__cards">

                            <div className="card1">
                                <h1>En attente</h1>
                                <p>$75,300</p>
                            </div>

                            <div className="card2">
                                <h1>Confirmer</h1>
                                <p>$125,500</p>
                            </div>

                            <div className="card3">
                                <h1>Users</h1>
                                <p>$7300</p>
                            </div>

                            <div className="card4">
                                <h1>Annuler</h1>
                                <p>$75,300</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
                <script src="script.js"></script>
            </main>

            
            
        </MenuLateralStc>

        )
}

export default MenuLateral;