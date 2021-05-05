import React from 'react'
import { FaReact, FaNode, FaDatabase } from 'react-icons/fa'
export default [
  {
    id: 1,
    icon: <FaReact className="service-icon" />,
    title: 'Front-End Development',
    text: `I'm most comfortable developing with React, having experience with different flavours such as CRA (Client Side), Next JS (Server-Side) and Gatsby JS (Static Sites). Styling libraries often used are Material UI and Bootstrap.`,
  },
  {
    id: 2,
    icon: <FaNode className="service-icon" />,
    title: 'Back-End Development',
    text: `I'm most comfortable with Node JS development on the server side, with significant experience in Express JS. I've also experimented with other frameworks such as Flask, Django and Laravel.`,
  },
  {
    id: 3,
    icon: <FaDatabase className="service-icon" />,
    title: 'Database Management',
    text: `I'm comfortable developing with both SQL and NoSQL databases. Worked namely with MongoDB, Firebase and PostgreSQL.`,
  },
]
