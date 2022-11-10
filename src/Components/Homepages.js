import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-multi-carousel/lib/styles.css'
import Header from './Header'
import Banner1 from './Banner1'
import CardItems from './CardItems'
import AboutContents from './AboutContents'
import Servicecontents from './Servicecontents'
import Item from './Item'
import Project from './Project'
import Feedback from './Feedback'
import Blocquote from './Blocquote'
import FooterList from './FooterList'
const Homepages = () => {
  return (
    <div className='project__back' id='home'>
      <div className='App'>
        <div>
          <Header />
        </div>

        <div className='banner '>
          <Banner1 />
        </div>
        <div>
          <CardItems />
        </div>
        <div>
          <AboutContents />
        </div>
        <div>
          <Servicecontents />
        </div>
        <div>
          <Item />
        </div>
        <div>
          <Project />
        </div>
        <div>
          <Feedback />
        </div>
        <div>
          <Blocquote />
        </div>
        <div className='footer'>
          <FooterList />
        </div>
      </div>
    </div>
  )
}

export default Homepages
