import React from 'react';
import Footer from '../../common/footer/footer.component';
import Header from '../../common/header/header.component';
import Reward from '../../common/reward-section/reward.component';

import './home.component.css'

export default function Home(props) {
    return (
        <div className='home-wrapper'>
            <Header />

            <Reward />

            <Footer />
        </div>
    )
}