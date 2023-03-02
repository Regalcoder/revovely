import styles from '../styles/Getapp.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image';

const getapp = () => {
    return ( 

        <>
      
      <div>
        <Container className={styles.lastContainer}> 
          <Row  className={styles.subContainer}>
              
              <Col  className={`${styles.downloadLogo}  ${styles.columnFlex}`}>
                <h2 className={` ${styles.header}`}>Get the app now, start paying with Revovely.</h2>
                <p className={styles.paragraph}>It only takes a few minutes to start enjoying the app. 
                  Download Revovely on Google Play or the App Store.
                </p>
                <div className={styles.imageFlexNew}>
                  <Image className={`img-fluid ${styles.mobile}`} src="/path.png" width='146.46px' height='42px' alt=''/>
                  <Image className={`img-fluid ${styles.mobile}`} src="/shape.png" width='146.46px' height='42px' alt=''/>
                </div>
              </Col>
              <Col className={styles.phoneImage}>
                <Image src="/decoration.png" className={`  img-fluid ${styles.phone}`} width='620px' height='400px' alt=''/>
              </Col> 
            </Row>
        </Container>
      </div>
         
          </>

     );
}
 
export default getapp;

