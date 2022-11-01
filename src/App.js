import './App.css';
import React from 'react';
import ProfileImage from './assets/profile__img.png';
import ShareButton  from "./assets/share button.png";
import Slack from "./assets/slack.png";
import Github from "./assets/Social icon.png";
import Zuri from "./assets/Zuri.png";
import I4G from "./assets/I4G.png";
import ProfileHover from './assets/profile_hover.png';
import Option from "./assets/option.png"


function App() {
  const twitter = 'https://twitter.com/Hayzhed5';
  const zuriBtn = 'https://training.zuri.team/';
  const zuriBooks = 'http://books.zuri.team/';
  const booksPython ='http://books.zuri.team/python-for-beginners'
  const pitch = 'https://background.zuri.team/';
  const zuriDesign = 'https://books.zuri.team/design-rules';
  

  return (
    <div className='linktree-body'>
      <div className='hero-header'>
        <div className='hero'>
        <div className='hero-image'>
        <img src={ProfileImage} alt="" id='profile__img'/>
        <img src={ProfileHover} alt='profile' id='profile_hover'/>
          <h2 id='twitter'>Hayzhed5</h2>
          <h2 id='slack'>Abdulazeez Kolawole</h2>
        </div>
        <div className='share-option'>
          <img src={ShareButton} alt="" id='share-button'/>
          <img src={Option} alt="" id='option-button'/>
        </div> 
        </div>
      </div>

      <div className='hero-body'>
      
        <a href={twitter} id='btn-twitter'>Twitter Link</a>
        <a href={zuriBtn} id='btn__zuri'>Zuri Team</a>
        <a href={zuriBooks} id='books' title='You can get books about design and coding here'>Zuri Books</a>
        <a href={booksPython} id='book__python' title='Upgrade your python knowledge '>Python Books</a>
        <a href={pitch} id='pitch' title='Survey outstanding programmers using our tools'>Background Check for Coders</a>
        <a href={zuriDesign} id='book__design' title='Get free design books offered by Zuri'>Design Books</a>
    
      </div>

      <div className='social-section'>
        <img src={Slack} alt="slack logo" id='slack-logo'/>
        <img src={Github} alt="Github logo" id="github"/>
      </div>

      <div className='footer'>
        <img src={Zuri} alt="Zuri Logo" id='zuri'/>
        <h6>HNG Internship 9 Frontend Task</h6>
        <img src={I4G} alt="I4G Logo" id='I4G'/>
      </div>
    </div> 
     
  )}

export default App;
