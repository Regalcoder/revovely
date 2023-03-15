import Link from 'next/link'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import Getapp from '../components/getapp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
  return (
   <>
    

    <div className={styles.body}>
      <Container className={styles.container1}>
        <Row className={styles.subcontainer}>
          <Col className={styles.textContainer}>
            <h1 className={styles.headerText}>Move your money freely</h1>
            <p className={styles.paraText}>Here at Revovely, we focus on making
              seamless ways for you to send and recieve
              money locally & internationally.
            </p>
            <button className={` ${styles.button}`}>Get started</button>
          </Col>
          <Col className={styles.imageContainer}>
            <Image className='img-fluid' src="/right-image.png" width='448px' height='448px' alt='' />
          </Col>
        </Row>
      </Container>
      <div className={styles.container2}>
        <div className={styles.subcontainer2}>
          
          <div className={styles.textContainer2}>
            <h6 className={styles.colorText}>Trusted Worldwide</h6>
            <h1 className={styles.mainHeader}>Trusted by over 600 million users</h1>
            <p className={styles.texts}>A ac venenatis quis malesuada. Duis quis bibendum laoreet euismod elementum commodo. 
              Massa aliquet habitasse cursus diam ipsum.
            </p>
            <hr className={styles.line}/>
            <Link href=''><a className={`mt-3 ${styles.colorLink}`}>Explore our Terms of use <Image className='img-fluid' src='/line.png' alt='' width='12px' height='9px'/></a></Link>
            <Link href=''><a className={`mt-3 ${styles.colorLink}`}>See the Privacy policy <Image className='img-fluid' src='/line.png' alt='' width='12px' height='9px'/></a></Link>
          </div>
          <div  className={styles.userContainer}>
        
            <div className={styles.flexContainer}>
              <div className={styles.columns}>
                <Image  src="/server.png" className={`img-fluid mb-2 mt-1`} width='38.4px' height='33.6px' alt=''/>
                <h3 className={styles.topText} >99.99% uptime</h3>
                <p className={` ${styles.paraSize} ${styles.textWidth }`}>On Revovely, there&apos;s zero 
                  maintenance downtime
                </p>
              </div>
              <div className={` ${styles.columns}`}>
                <Image src='/users.png' className={`img-fluid mb-2 mt-1 ${styles.tabMargin}`} width='43.2px' height='33.6px' alt=''/>
                <h3 className={styles.topText}>600M+ Users</h3>
                <p className={styles.paraSize}>trusted by over 600 million users
                  around the world 
                </p>
              </div>
            </div>
            <div className={`${styles.tabmargin} ${styles.flexContainer}`}>
              <div className={styles.columns2}>
                <Image src="/vector5.png" className={`img-fluid mb-2 mt-1`} width='38.4px' height='40.8px' alt=''/>
                <h3 className={styles.topText}>Millions</h3>
                <p className={styles.paraSize}>transaction per day</p>
              </div>
              <div className={styles.columns}>
                <Image src='/globe.png' className={`img-fluid mb-2 mt-1`} width='38.4px' height='38.4px' alt=''/>
                <h3 className={styles.topText}>10+ countries</h3>
                <p className={` ${styles.paraSize} ${styles.textWidth }`}>have used Revovely to send & receive money</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className={styles.container3}>
        <div className={`me-3 ${styles.subcontainer3}`}>
          <div className={styles.imageContainer}><Image src='/phone1.png' width='401px' height='420px' className={`img-fluid  ${styles.imageMargin}`} alt=''/></div>
          <div className={styles.rightContent}>
            <h2 className={styles.leftHeader}>Send money to friends & family seamlessly</h2>
            <p className={styles.leftText}>Blandit eget tellus nam leo in lacinia
              sed. Velit magna sed ornare tellus. Tempor
              amet egestas a nunc sapien.
            </p>
            <button className={styles.button}>Learn more <Image src='/arrow.png' width='10px' height='11' className={`img-fluid `} alt=''/></button>
          </div>
        </div>
        
      </div>
      <div className={styles.container4}>
        <div className={`me-1 ${styles.subcontainer4}`}>
          <div className={styles.rightContent}>
            <h2 className={styles.leftHeader}>Pay your bills instantly with a few taps</h2>
            <p className={styles.leftText}>Blandit eget tellus nam leo in lacinia
            sed. Velit magna sed ornare tellus. Tempor
            amet egestas a nunc sapien.
          </p>
          <button className={styles.button}>Learn more <Image src='/arrow.png' width='10px' height='9' className={`img-fluid`} alt=''/></button>
          </div>
          <div className={`mt-5 ${styles.imageContainer2}`}><Image src='/phone2.png' width='321px' height='421px' className={`img-fluid`} alt=''/></div>
        </div>
      </div>

      <div className={styles.containerNew}>
        <div className={`me-1 ${styles.subcontainer5}`}>
           <div className={`mt-5 mb-5 ${styles.imageContainer5}`}><Image src='/phone3.png' width='401px' height='400' className={`img-fluid ${styles.phoneImage}`} alt=''/></div>
        <div className={`${styles.rightContent5}`}>
          <h2 className={styles.leftHeader5}>Set goals and track your spendings</h2>
          <p className={styles.leftText5}>Blandit eget tellus nam leo in lacinia
            sed. Velit magna sed ornare tellus. Tempor
            amet egestas a nunc sapien.
          </p>
          <button className={styles.button}>Learn more <Image src='/arrow.png' width='10px' height='9' className={`img-fluid`} alt=''/></button>
        </div>
        </div>
        
      </div>
      <div className={styles.container4}>
        <div className={`me-1 ${styles.subcontainer4}`}>
        <div className={styles.rightContent}>
            <h2 className={styles.leftHeader}>Unlock rewards when you use the Revovely app</h2>
            <p className={styles.leftText}>Blandit eget tellus nam leo in lacinia
            sed. Velit magna sed ornare tellus. Tempor
            amet egestas a nunc sapien.
          </p>
          <button className={styles.button}>Learn more <Image src='/arrow.png' width='10px' height='9' className={`img-fluid`} alt=''/></button>
          </div>
          <div className={`mt-5 ${styles.imageContainer2}`}><Image src='/phone4.png' width='321px' height='400px' className={`img-fluid`} alt=''/></div>
        </div>
      </div>

    {/*  <div className={styles.faq}>
        <h6 className={styles.smallHeading}>Frequently asked questions</h6>
        <h3 className={styles.largeHeader}>Let&#39;s answer some of your questions</h3>
        <div className={styles.faqContents}>
         {/*<FAQ />*/} 
        </div>
      </div> */}
      
      
      <div className={styles.container5}>
        <h6 className={styles.smallHeading}>Testimonials</h6>
        <h3 className={styles.largeHeader}>What our customers are saying</h3>
        <div className={styles.containerbox2}>
          <Link href='#'><Image className='img-fluid' src="/leftArrow.png" width='56px' height='56px' alt='' /></Link>
          <p className={styles.textSize}>Quam mattis volutpat elementum eget ac mollis ac congue. 
            Congue a sodales vel pharetra, risus. Est nullam eu orci 
            platea felis quis ante duis sit. Sagittis posuere at sed 
            lobortis id. Aliquam.
          </p>
          <Link href='#'><Image className='img-fluid' src="/rightArrow.png" width='56px' height='56px' alt='' /></Link>
        </div>
        <div className={styles.imageFlex}>
          <Image className='img-fluid' src="/avatar.png" height='24px' width='24px' alt=''/>
          <p className='pt-3'>Majek Durosimi </p>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <Image src="/logo.png" height='27px' width='154px' className={`img-fluid ${styles.logos}`} alt='' />
        <Image src="/logo.png" height='27px' width='154px' className={`img-fluid ${styles.logos}`} alt='' />
        <Image src="/logo.png" height='27px' width='154px' className={`img-fluid ${styles.logos}`} alt='' />
        <Image src="/logo.png" height='27px' width='154px' className={`img-fluid ${styles.logos}`} alt='' />
        <Image src="/logo.png" height='27px' width='154px' className={`img-fluid ${styles.logos}`} alt='' />
        <Image src="/logo.png" height='27px' width='154px' className={`img-fluid ${styles.logos}`} alt='' />
      </div>
      
        <Getapp />
    </div>
  </>  
  );
}



Home.layout = "Default";
export default Home;
