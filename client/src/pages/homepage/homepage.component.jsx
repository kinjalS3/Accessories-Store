import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1>ACCESSORIES STORE</h1>
    <div class="tech-slideshow">
      <div class="mover-1"></div>
      <div class="mover-2"></div>
    </div>
    <br /><br /><br /><br /><br /><Directory />
  </div>
);

export default HomePage;
