import { useState, useEffect, useContext } from 'react';
import Image from 'next/image'
import CheckloginContext from '../../../context/auth/CheckloginContext'
import Mstyles from '../../../Styles/home.module.css'
import { AiOutlineLogin } from 'react-icons/ai';
import { VscAccount, VscVerified } from "react-icons/vsc";
import { IoIosCall } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import HeaderMenuLeft from '../Subparts/HeaderMenuLeft'
import { LuShoppingBag, LuSearch, LuUserCircle2 } from "react-icons/lu";

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { ShortAbout, AppName, SocialHandles, Contactinfo, DomainURL } from '../../../Data/config'
const Navbarmain = (props) => {
    const Contextdata = useContext(CheckloginContext)

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    return (
        <div>
            <div className={Mstyles.OnlyDesktop}>
                <div className={Mstyles.navbarBox}>
                    <div className={Mstyles.Navbar}>
                        <div className={Mstyles.NavA}>
                            <div className={Mstyles.logo}>
                                <Link href='/'>
                                    <div className={Mstyles.logomain}>
                                        <img src='/tolodukanLogoWeb.svg' alt='logo' className={Mstyles.NavLogo} />
                                    </div>
                                </Link>
                            </div>
                            <div className={Mstyles.SearchTopBox}>
                                <div className={Mstyles.SearchTopBoxA}>
                                    <LuSearch size={20} />
                                </div>
                                <div className={Mstyles.SearchTopBoxB}>
                                    <span>Search for Products ...</span>
                                </div>
                            </div>

                        </div>
                        <div className={Mstyles.NavLeft}>

                            <div className={Mstyles.CartIconBox}>

                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={Contextdata.ItemsinCart} color="secondary">
                                        <LuShoppingBag />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                            <div className={Mstyles.loginbtnTopBtns}>
                                {!Contextdata.IsLogin && (
                                    <Link href='Login' style={{ textDecoration: 'none' }}>
                                        <div className={Mstyles.loginbtnTop}>
                                            <span><AiOutlineLogin /></span>
                                            <small>Login</small>
                                        </div>
                                    </Link>

                                )}
                                {Contextdata.IsLogin && (
                                    <Link href='/dashboards/main' style={{ textDecoration: 'none' }}>
                                        <div className={Mstyles.loginbtnTop}>
                                            <span><VscAccount /></span>
                                            <small>Dashboard</small>
                                        </div>
                                    </Link>

                                )}

                            </div>

                            {/* <div className={Mstyles.loginbtnTopBtns}>
                        <Link href='/educators' style={{ textDecoration: 'none' }}>
                            <div className={Mstyles.loginbtnTop}>
                                <span><BsFillEmojiSunglassesFill /></span>
                                <small>Become Educator</small>
                            </div>
       
                            </Link>

                    </div> */}


                        </div>
                    </div>
                </div >
            </div>
            <div className={Mstyles.OnlyMobile}>
                <div className={Mstyles.navbarBox}>
                    <div className={Mstyles.Navbar}>
                        <div className={Mstyles.NavA}>
                            <div className={Mstyles.logo}>
                                <Link href='/'>
                                    <div className={Mstyles.logomain}>
                                        <img src='/tolodukanLogoWeb.svg' alt='logo' className={Mstyles.NavLogo} />
                                    </div>
                                </Link>
                            </div>


                        </div>
                        <div className={Mstyles.NavLeft}>

                            <div className={Mstyles.CartIconBox}>

                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={Contextdata.ItemsinCart} color="secondary">
                                        <LuSearch />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                            <div className={Mstyles.CartIconBox}>

                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={Contextdata.ItemsinCart} color="secondary">
                                        <LuShoppingBag />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                            <div className={Mstyles.loginbtnTopBtns}>
                                {!Contextdata.IsLogin && (
                                    <Link href='Login' style={{ textDecoration: 'none' }}>
                                        <div className={Mstyles.loginbtnTop}>
                                            <span><AiOutlineLogin /></span>
                                            <small>Login</small>
                                        </div>
                                    </Link>

                                )}
                                {Contextdata.IsLogin && (
                                    <Link href='/dashboards/main' style={{ textDecoration: 'none' }}>
                                        <div className={Mstyles.CartIconBox}>

                                            <IconButton aria-label="cart">
                                                <StyledBadge badgeContent={Contextdata.ItemsinCart} color="secondary">
                                                    <LuUserCircle2 />
                                                </StyledBadge>
                                            </IconButton>
                                        </div>
                                    </Link>

                                )}

                            </div>

                            {/* <div className={Mstyles.loginbtnTopBtns}>
                        <Link href='/educators' style={{ textDecoration: 'none' }}>
                            <div className={Mstyles.loginbtnTop}>
                                <span><BsFillEmojiSunglassesFill /></span>
                                <small>Become Educator</small>
                            </div>
       
                            </Link>

                    </div> */}


                        </div>
                    </div>
                    
                </div>
               
            </div>
       </div>
    )
}

export default Navbarmain