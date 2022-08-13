import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Savings.module.css'





const Savings = () => {
    return ( 
        
            <div className={styles.savingSection}>
                <div className="container">
                    <div className={styles.goalSection}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className={styles.goalContent}>
                                    <h4>Set goals and track your  spendings</h4>
                                    <p>Blandit eget tellus nam leo in lacinia sed. Velit magna sed ornare tellus. Tempor amet egestas a nunc sapien.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={styles.mobApp}>
                                    <img src="/assets/mobileapp.png" width="541px" height="589px" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.features}>
                    
                    </div>
                </div>
            </div>

            
        
    );
}
Savings.layout = "Default"
export default Savings;