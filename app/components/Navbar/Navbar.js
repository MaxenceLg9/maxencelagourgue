'use client'

import React, { useContext, useState } from 'react';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
// Use @mui/styles for the legacy makeStyles pattern in React 19
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';
import {scrollToSection} from "../ScrollToSection/ScrollToSection";

function Navbar() {
    const { theme } = useContext(ThemeContext);

    const navItems = [
        { id: 'home', text: 'Accueil', icon: <IoHomeSharp />, href: () => scrollToSection('home') },
        { id: 'about', text: 'A propos', icon: <FaUser />, href: () => scrollToSection('about') },
        { id: 'resume', text: 'CV', icon: <HiDocumentText />, href: headerData.resumePdf },
        { id: 'skills', text: 'Compétences', icon: <HiDocumentText />, href: () => scrollToSection('skills') },
        { id: 'projects', text: 'Projets', icon: <FaFolderOpen />, href: () => scrollToSection('projects')}, // Switches view entirely
        { id: 'contacts', text: 'Contact', icon: <MdPhone />, href: () => scrollToSection('contacts') },
    ];

    return (
        <nav className='navbar'>
            <div className='navbar--container'>
                <h1 className="nav-logo" style={{ color: '#ffffff' }}>
                    {headerData.name.split(' ')[0]}<span style={{ color: theme.primary }}>.</span>
                </h1>
                <div className='navbarRight'>
                    {navItems?.length > 0 ? (navItems.map((item) => (
                        typeof item.href === 'string' ? (
                            <Link href={item.href} key={item.id} className='drawer-item' download='resume' target='_blank' rel='noreferrer'>
                            {React.cloneElement(item.icon, { className: 'drawer-icon' })}
                                <span className='drawer-links'>{item.text}</span>
                            </Link>
                        ) : (
                            <span onClick={item.href} key={item.id} className='drawer-item'>
                            {React.cloneElement(item.icon, { className: 'drawer-icon' })}
                                <span className='drawer-links'>{item.text}</span>
                        </span>
                        )
                    ))) : <p>Aucun lien trouvé</p>}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;