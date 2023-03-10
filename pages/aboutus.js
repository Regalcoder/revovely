import Image from 'next/image';
import Getapp from '../components/getapp';
import styles from '../styles/Aboutus.module.css'


const Aboutus = () => {
    return ( 
        <div className={styles.aboutusSection}>
            <div className="pt-5 container">
                <div className={styles.storySection}>
                    <h5>our story.</h5><br />
                    <p>Iaculis in ridiculus urna mauris et fermentum urna. Pulvinar ut purus dictumst sapien vitae tempus, 
                        eget tortor. Etiam habitant mauris accumsan, at. Ut ultrices felis odio feugiat ut. A imperdiet felis sollicitudin eu non ipsum natoque.
                         Neque malesuada mattis nibh mi ut. Eu at integer consectetur cras quis tincidunt. A metus rhoncus purus in sapien nibh pellentesque.</p>

                    <span><Image src="/assets/oval.png" width="159px" height="155px" alt=''/></span>
                    <span className={styles.cross}><Image src="/assets/plus.png" width="104px" height="104px" alt=''/></span>
                </div>
            </div><br></br>

            <div className={styles.people}>
                <div className="container">
                    <Image src="/assets/people.png" width="1058px" height='580' alt=''/><br /> <br />
                    <p className="mt-4">Amet, tortor id tempus, adipiscing enim. Sed ultrices justo, ut vel in. Semper est placerat faucibus tempor lectus placerat sed posuere viverra. In interdum lobortis risus.</p>
                </div>
            </div>

            <div className={styles.teamSection}>
                <div className="container">
                    <div className={styles.teamRow}>
                        <div className={styles.teamCard}>
                            <Image className={`pe-2 ${styles.img}`} src="/assets/person1.png" width="240px" height="280px" alt=''/>
                            <h5>shola allison</h5>
                            <h6>Founder & CEO</h6>
                        </div>
                        <div className={styles.teamCard}>
                            <Image className={`ps-2 ${styles.img}`} src="/assets/person2.png" width="240px" height="280px" alt=''/>
                            <h5>shola allison</h5>
                            <h6>Founder & CEO</h6>
                        </div>
                        <div className={styles.teamCard}>
                            <Image className={`pe-2 ${styles.img}`} src="/assets/person3.png" width="240px" height="280px" alt=''/>
                            <h5>shola allison</h5>
                            <h6>Founder & CEO</h6>
                        </div>
                        <div className={styles.teamCard}>
                            <Image className={`ps-2 ${styles.img}`} src="/assets/person1.png" width="240px" height="280px" alt=''/>
                            <h5>shola allison</h5>
                            <h6>Founder & CEO</h6>
                        </div>
                        <div className={styles.teamCard}>
                            <Image className={`pe-2 ${styles.img}`} src="/assets/person1.png" width="240px" height="280px" alt=''/>
                            <h5>shola allison</h5>
                            <h6>Founder & CEO</h6>
                        </div>
                        <div className={styles.teamCard}>
                            <Image className={`ps-2 ${styles.img}`} src="/assets/person2.png" width="240px" height="280px" alt=''/>
                            <h5>shola allison</h5>
                            <h6>Founder & CEO</h6>
                        </div>
                        <div className={styles.teamCard}>
                            <Image className={`pe-2 ${styles.img}`} src="/assets/person3.png" width="240px" height="280px" alt=''/>
                            <h5>shola allison</h5>
                            <h6>Founder & CEO</h6>
                        </div>
                        <div className={styles.teamCard}>
                            <Image className={`ps-2 ${styles.img}`} src="/assets/person1.png" width="240px" height="280px" alt=''/>
                            <h5>shola allison</h5>
                            <h6>Founder & CEO</h6>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <Getapp/>
        </div>
    );
}

Aboutus.layout = "Default"
export default Aboutus;