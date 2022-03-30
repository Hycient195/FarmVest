import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import businessImg from '../public/assets/patreons/Business.png';
import fidelityImg from '../public/assets/patreons/Fidelity.png';
import forbesImg from '../public/assets/patreons/Forbes.png';
import marketImg from '../public/assets/patreons/MarketWatch.png';
import wiredImg from '../public/assets/patreons/Wired.png';
import perk1 from '../public/assets/perks/1.png';
import perk2 from '../public/assets/perks/2.png';
import perk3 from '../public/assets/perks/3.png';
import item1 from '../public/assets/perks/item1.svg';
import item2 from '../public/assets/perks/item2.svg';
import item3 from '../public/assets/perks/item3.svg';
import item4 from '../public/assets/perks/item4.svg';
import PointDown from '../components/pieces/PointDown';
import review1 from '../public/assets/reviews/review1.png'
import review2 from '../public/assets/reviews/review2.png'
import store1 from '../public/assets/downloads/store1.svg'
import store2 from '../public/assets/downloads/store2.svg'



export default function Home() {
  return (
    <body className="margin-b-15">
      <header className="hero-header container centralize-item">
        <div className="header-content centralize-text centralize-item">
          <h1 className="hero-header-title">
            The easiest and fastest way to <span className="text-light-secondary">invest</span> in <br/>Agriculture
          </h1>
          <p className="hero-sub-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea nostrum
            quis asperiores, neque ducimus dolore, nobis illum corrupti libero dolorem. 
            
          </p>

          <div className="container form-container">
            <form action="" className="centralize-item  ">
              <input className="" type="text" placeholder="Enter your email"/>
              <input className="" type="submit" value="Get Started"/>
            </form>
          </div>
        </div>
        {/* <div className="container"> */}
          <div className="patreons row justify-space-between container gap-2 margin-tb-6">
            <div className="col-xs-4">
              <Image src={marketImg} alt=""/>
            </div>

            <div className="col-xs-4">
              <Image src={forbesImg} alt=""/>
            </div>

            <div className="col-xs-4">
              <Image src={businessImg} alt=""/>
            </div>

            <div className="col-xs-4">
              <Image src={fidelityImg} alt=""/>
            </div>

            <div className="col-xs-4">
              <Image src={wiredImg} alt=""/>
            </div>
          </div>
        {/* </div> */}
      </header>
    
      <main className="content margin-t-8">
        <section className="perks perk1 row  margin-b-10 gap-2 container">
          <div className="left col-xs-24 col-lg-12">
            <h2 className="title font-size-9">How <span className="text-light-secondary">FarmVest Works</span></h2>
            <p className="description font-size-4">Lorem ipsum dolor sit amet consectetur adipisicing
             elit. Tempora labore obcaecati sequi, tempore sit exercitationem dolorem
              numquam repellat et ea!
            </p>
            <ul>
            <li className="row">
                <i className="icon col-xs-5 col-lg-6"><Image src={item1} alt=""/></i>
                <div className="details col-xs-18 col-lg-17">
                  <h4 className="title font-size-5">Download Farmvest</h4>
                  <p className="description font-size-3">Start by downloading FarmVest app
                    on your Android or IOS
                  </p>
                </div>
              </li>

              <li className="row">
                <i className="icon col-xs-5 col-lg-6"><Image unoptimized={true} quality={100} src={item2}/></i>
                <div className="details col-xs-18 col-lg-17">
                  <h4 className="title font-size-5">Create account</h4>
                  <p className="description">Start by downloading FarmVest app
                    on your Android or IOS
                  </p>
                </div>
              </li>

              <li className="row">
                <i className="icon col-xs-5 col-lg-6"><Image src={item3}/></i>
                <div className="details col-xs-18 col-xs-17 col-lg-17">
                  <h4 className="title font-size-5">Link you bank account</h4>
                  <p className="description">Start by downloading FarmVest app
                    on your Android or IOS
                  </p>
                </div>
              </li>

              <li className="row">
                <i className="icon col-xs-5 col-lg-6"><Image src={item4} /></i>
                <div className="details col-xs-18 col-lg-17">
                  <h4 className="title font-size-5">Start Investing</h4>
                  <p className="description">Start by downloading FarmVest app
                    on your Android or IOS
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="right col-xs-24 col-lg-12">
            <div className="image-container">
              <Image src={perk1} alt=""/>
            </div>
          </div>
        </section>

        <section className="perks second-perk row container gap-2 centralize-item">
          
          <div className="right col-xs-24 col-lg-12">
            <div className="image-container">
              <Image src={perk2} alt=""/>
            </div>
          </div>

          <div className="left col-xs-24 col-lg-12">
            <h2 className="title font-size-9">Your <span className="text-light-secondary">pathway</span> to future investment</h2>
            <p className="description font-size-4">Lorem ipsum dolor sit amet consectetur adipisicing
             elit. Tempora labore obcaecati sequi, tempore sit exercitationem dolorem
              numquam repellat et ea!
            </p>
            <ul className="row justify-space-between margin-t-3">
              <li className="row col-xs-24 col-lg-24 bg-light-tertiary padding-5" >
                 <div className="details col-xs-24 col-lg-24">
                  <p className="title font-size-6 row justify-space-between fullwidth">What is FarmVest <PointDown/> </p>            
                </div>
              </li>

              <li className="row col-lg-24 bg-light-tertiary padding-5">
                 <div className="details col-xs-24 col-lg-24 ">
                  <p className="title font-size-6 row justify-space-between">What is FarmVest <PointDown/></p>            
                </div>
              </li>

              <li className="row col-lg-24 bg-light-tertiary padding-5">
                 <div className="details col-xs-24 col-lg-24 ">
                  <p className="title font-size-6 row justify-space-between">What is FarmVest <PointDown/></p>            
                </div>
              </li>

              <li className="row col-lg-24 bg-light-tertiary padding-5">
                 <div className="details col-xs-24 col-lg-24 ">
                  <p className="title font-size-6 row justify-space-between">What is FarmVest <PointDown/></p>            
                </div>
              </li>
            </ul>
          </div>
        </section>
        

        <section className="perks perk-3 row container margin-b-10 gap-2">
          <div className="left col-xs-24 col-lg-12">
            <h2 className="title font-size-9">Why choose <span className="text-light-secondary">FarmVest</span></h2>
            <p className="description font-size-4">Lorem ipsum dolor sit amet consectetur adipisicing
             elit. Tempora labore 
            </p>
            <ul>
            <li className="row ">
                <i className="icon col-xs-5 col-lg-6 bg-light-tertiary centralize-text font-size-12 no-m-p rounded-borders text-light-secondary number-list bold" >1</i>
                <div className="details col-lg-17 number-list">
                  <p className="description font-size-6">
                    Real-time checkup
                  </p>
                </div>
              </li>

              <li className="row gap-">
              <i className="icon col-xs-5 col-lg-6 bg-light-tertiary centralize-text font-size-12 no-m-p rounded-borders text-light-secondary number-list bold" >2</i>
                <div className="details col-lg-17 number-list">
                  <p className="description font-size-6">
                    Flexibility in Investment
                  </p>
                </div>
              </li>

              <li className="row gap-">
              <i className="icon col-xs-5 col-lg-6 bg-light-tertiary centralize-text font-size-5 no-m-p rounded-borders text-light-secondary number-list bold " >3</i>
                <div className="details col-lg-17 number-list">
                  <p className="description font-size-6">
                    Encrypted and Secured
                  </p>
                </div>
              </li>

              <li className="row gap-">
              <i className="icon col-lg-6 bg-light-tertiary centralize-text font-size-12 no-m-p rounded-borders text-light-secondary number-list bold" >4</i>
                <div className="details col-lg-17 number-list">
                  <p className="description font-size-6 row ">
                  Withdraw Anytime
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="right col-xs-24 col-lg-12">
            {/* <div className="image-container"> */}
              <Image src={perk3} alt=""/>
            {/* </div> */}
          </div>
        </section>

        <br/><br/><br/><br/>

{/* //////////////////////////////////////////////////////////////// */}
        <section className="reviews  centralize-item container">
          <h2 className="font-size-9 centralize-text">What <span className="text-light-secondary">Customers</span> have to say</h2>
          <p className="font-size-4 margin-3 centralize-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Iusto, sed vero. 
            Eaque quis culpa et itaque reprehenderit, possimus aliquid sed?
          </p>
          <div className="card-container ">

            <div className="row gap-2">
              <div className="card row col-sm-24  col-lg-12">
                <figure className="img-container col-xs-8 col-sm-9 col-lg-10 no-m-p">
                  <Image src={review1} alt=""/>
                </figure>
                <div className="review col-xs-16 col-sm-15 col-lg-14 padding-6 bg-light-tertiary">
                  <p className="review-text font-size-3 no-m-p">
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Laudantium est distinctio 
                    laborum nisi dolorum itaque voluptates 
                    
                  </p>
                  <p className="bold reviewer ">
                    Tonia Smart
                  </p>
                </div>
              </div>

              <div className="card row col-sm-24  col-lg-12">
                <figure className="img-container col-xs-8 col-sm-9 col-lg-10 no-m-p">
                  <Image src={review2} alt=""/>
                </figure>
                <div className="review col-xs-16 col-sm-15 col-lg-14 padding-6 bg-light-tertiary">
                  <p className="review-text font-size-3 no-m-p">
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Laudantium est distinctio 
                    laborum nisi dolorum itaque voluptates 
                    
                  </p>
                  <p className="bold reviewer ">
                    Tonia Smart
                  </p>
                </div>
              </div>

              {/* <div className="card row col-xs-24 col-sm-24 col-lg-12 no-m-p">
                <figure className="img-container col-xs-8 col-sm-9  col-lg-10 no-m-p">
                  <Image src={review2} alt=""/>
                </figure>
                <div className="review col-xs-16 col-sm-15 col-lg-14 padding-6 bg-light-tertiary ">
                  <p className="review-text font-size-3 no-m-p col-sm-24">
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Laudantium est distinctio 
                    laborum nisi dolorum itaque voluptates 
                  
                  </p>
                  <p className="bold reviewer col-sm-24">
                    Tonia Smart
                  </p>
                </div>
              </div> */}

              
            </div>
            <div className=" container centralize-text margin-t-3 margin-b-12">
                <button className="btn bg-light-secondary text-white centralize-item">View All</button>
              </div>
          </div>
        </section>
  {/* /////////////////////////  <div///////////////////////////// */}

        <section className="download centralize-text container centralize-item margin-t-10">
          <div className="bg-light-tertiary padding-15 br-8 fullwidth">
            <div className="">
              <h2 className="no-m-p">
                Download <span className="text-light-secondary">FarmVest app</span><br/>
                and invest in your future
              </h2>
            </div>
            <div className="download-buttons row justify-center margin-t-5">
              <a href="" className="col-sm-8 col-lg-6">
                <Image src={store1} />
              </a>
              <a href="" className="col-sm-8 col-lg-6">
                <Image src={store2} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </body>
  )
}
