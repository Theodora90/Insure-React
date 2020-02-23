import React from 'react';
import Navbar from '../componenets/Navbar';
import '../app.scss';
import Hero from '../componenets/Hero';
import Flashsvg from '../assets/flash.svg';
import Usersvg from '../assets/user.svg';
import Coinsvg from '../assets/coin.svg';
import HomeCard from '../componenets/Homecard';
import CallBack from '../componenets/Callback';
import Foot from '../componenets/Footer';
import Facebooksvg from '../assets/facebook.svg';
import Twittersvg from '../assets/twitter.svg';
import Pinterestsvg from '../assets/pinterest.svg';
import Instagramsvg from '../assets/instagram.svg';


class Landing extends React.Component {
  constructor() {
    super()
    this.state={
      cards:[
        {
          img: Flashsvg,
          title: 'Snappy Process',
          subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

        },
        {
          img: Coinsvg,
          title: 'Affordable Prices',
          subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

        },
        {
          img: Usersvg,
          title: 'People First',
          subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

        }
      ]
    }

  }
  componentDidMount() {
    let value = this.context;
    console.log(value, 'mnmnmn')
  }
  render(){
    return (
      <React.Fragment>
        <Navbar />
        <Hero title ="Huamanizing your Insurance" subtitle = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." button = "view plans">
          <div className="heroimage">
          </div>
          </Hero>
        <section className="section container title">
          <h1>We're different</h1>
          <div className="columns">
            {
              this.state.cards.map((card, index)=>{
                return(
                  <HomeCard img={card.img} title={card.title} subtitle={card.subtitle}/>
                )
              })
            }
          </div>
        </section>
        <CallBack title= "Find out more" subtitle="About how we work" button="how we work"/>
        <Foot title= "INSURE" subtitle="contact" img={Facebooksvg} pic={Twittersvg} image={Pinterestsvg} picture={Instagramsvg} children={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} />
      </React.Fragment> 
    )
  }
}
export default Landing