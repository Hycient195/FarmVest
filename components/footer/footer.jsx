import Image from 'next/image';

import facebookIcon from '../../public/assets/footer/facebook.svg';
import instaIcon from '../../public/assets/footer/insta.svg';
import twitterIcon from '../../public/assets/footer/twitter.svg';
import siteLogo from '../../public/assets/footer/SiteLogo.svg';

export default function Footer(){
  return(
    <footer className="bg-light-tertiary padding-lr-12 padding-t-10 container">
      <div className="content row gap-2 margin-tb-6 justify-space-between">
        <div className="col-xs-24 col-sm-24 col-lg-8">
          <div className="site-logo"><Image src={siteLogo} alt=""/></div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Inventore reiciendis, ipsam sequi laborum velit 
            quisquam.
          </p>
        </div>

        <div className="col-sm-24 col-lg-8 column-2">
          <p className="">
            Subscribe to stay tuned for new web design <br/> and latest updates.
            Let&aposs do it.
          </p>
          <br/>
          <form action="" className="centralize-item">
            <input type="text" placeholder="Enter your email"/>
            <input type="submit" className="" value="Subscribe"/>
          </form>
        </div>

        <div className="col-sm-24 col-lg-8">
          <div className="row justify-space-between">
            <div className="col-lg-12">
              <h3>Follow us</h3>
              <a href="" className="instagram margin-r-1"><Image src={instaIcon}alt=""/></a>
              <a href="" className="facebook margin-r-1"><Image src={facebookIcon} alt=""/></a>
              <a href="" className="twitter margin-r-1"><Image src={twitterIcon} alt=""/></a>
            </div>
            <div className="col-lg-12">
              <h3>Call us</h3>
              <p className="margin-t-4">+2348102693805</p>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="row justify-space-between">
        <div className="col-lg">
          <p className="font-size-4">2022 All Rights Reserved</p>
        </div>
        <div className="col-lg- row">
          <a href="" className="padding-lr-1 padding-tb-7 margin-lr-1">Pivacy Policy</a>
          <a href="" className="padding-lr-1 padding-tb-7 margin-lr-1">Terms of Use</a>
          <a href="" className="padding-lr-1 padding-tb-7 margin-lr-1">Sales and Refunds</a>
          <a href="" className="padding-lr-1 padding-tb-7 margin-lr-1">Legal</a>
          <a href="" className="padding-lr-1 padding-tb-7 margin-lr-1">Site Map</a>
        </div>
      </div>
    </footer>
  )
}