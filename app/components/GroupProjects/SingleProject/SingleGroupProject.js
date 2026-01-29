import React from 'react';
import { FaPlay, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import placeholder from '../../../assets/png/placeholder.png';
import '../SingleProject/SingleProject.css';
import Image from "next/image";
import { scrollToSection } from '../../ScrollToSection/ScrollToSection';
import Link from "next/link";

export function SingleGroupProject({ id, name, desc, tags, code, demo, image, skills }) {
    return (
        <div key={id} className='project-card-technical'>
            {/* Top Bar: Serial Number and Name */}
            <div className='project-card-header'>
                <span className="project-serial">SEC-0</span>
                <h3 className="project-title">{name}</h3>
            </div>

            <div className='project-visual-area'>
                <div className="project-image-wrapper">
                    <Image
                        src={image ? image : placeholder}
                        alt={name}
                        className="project-image"
                        width={500}
                        height={220}
                    />
                </div>

                {/* Overlay that appears on hover - subtle and professional */}
                <div className="project-overlay-technical">
                    <div className='project-actions'>
                        <a href={demo} target='_blank' rel='noreferrer' className="tech-btn">
                            <FaExternalLinkAlt /> <span>LIVE DEMO</span>
                        </a>
                        <a href={code} target='_blank' rel='noreferrer' className="tech-btn">
                            <FaCode /> <span>SOURCE</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className='project-footer-technical'>
                <p className='project-description-text'>{desc}</p>
                <div className='project-links'>
                    <div className='project-skills-grid'>
                        {skills?.length > 0 ?
                            (skills.map((skill, index) => (
                            <span onClick={() => scrollToSection("skills")} key={index} className="skill-badge">{skill}</span>
                        ))) : <p></p>}
                    </div>
                    <div className='project-tags-grid'>
                        {tags.map((tag, index) => (
                            <span key={index} className="tech-tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleGroupProject;