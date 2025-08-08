import js from '../logos/js.png';
import react from '../logos/react.png';
import html from '../logos/html.png';
import css from '../logos/css.png';
import node from '../logos/node.png';
import express from '../logos/express.svg';
import mongo from '../logos/mongo.png'
import git from '../logos/git.png';
import npm from '../logos/npm.png';
import heroku from '../logos/heroku.png';
import github from '../logos/github.png';
import webpack from '../logos/webpack.png';
import jest from '../logos/jest.png';
import redux from '../logos/redux.png';
import python from '../logos/python.png';
import indexSS from '../screenshots/indexScreenshot.png';
import postSS from '../screenshots/postScreenshot.png';
import regSS from '../screenshots/regScreenshot.png';
import postgresql from '../logos/postgresql.png';

export const frontEnd = [
    {name: 'Javascript', logo: js},
    {name: 'React', logo: react},
    //{name: 'Redux', logo: redux},
    {name: 'HTML', logo: html},
    {name: 'CSS', logo: css},
    //{name: 'Webpack', logo: webpack},
]

export const backEnd = [
    {name: 'Node', logo: node},
    {name: 'Express', logo: express},
    //{name: 'MongoDB', logo: mongo}
]

export const others = [
    {name: 'Git', logo: git},
    //{name: 'Python', logo: python},
    {name: 'NPM', logo: npm},
    //{name: 'Heroku', logo: heroku},
    {name: 'Github', logo: github},
    //{name: 'Jest', logo: jest}
]

export const projects = [
    {
        name: 'Message-board',
        description: 'A simple web application where users can register for an account, log in securely, and post messages. Designed to focus on core authentication, session handling, and basic CRUD operations.',
        screenshot: indexSS,
        link: 'https://members-only-production-26a9.up.railway.app',
        github: 'https://github.com/Fopuy/members-only',
        //stack: ['Node', 'Express', 'PostgreSQL', 'EJS', 'CSS', 'HTML'],
        stack: [
        { name: "React", icon: react },
        { name: "Node.js", icon: node },
        { name: "Express", icon: express },
        { name: "CSS", icon: css },
        { name: "HTML", icon: html },
        { name: "PostgreSQL", icon: postgresql }
        ], 
    }
]
