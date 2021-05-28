import React from 'react';
import './homepage.styles.scss'

import Directory from '../../components/directory-menu/directory-menu.component'

const HomePage = () =>{
    return (
        <div className='homepage'>
            <Directory></Directory>
        </div>
    )
}


export default HomePage;
