import styles from '../styles/Home.module.css'

const getapp = () => {
    return ( 

        <>
        <div className={styles.lastContainer}>
          <div className={styles.subContainer}>
            <div className={styles.columnFlex}>
              <h2 className={styles.header}>Get the app now, start paying with Revovely.</h2>
              <p>It only takes a few minutes to start enjoying the app. 
                Download Revovely on Google Play or the App Store.
              </p>
              <div className={`${styles.downloadLogo} ${styles.imageFlex}`}>
                <img src="path.png" width='146.46px' />
                <img src="shape.png" width='146.46px' />
              </div>
            </div>
            <div> <img src="decoration.png" className='pt-3' width='480px'/> </div>
          </div>
        </div>
          </>

     );
}
 
export default getapp;

