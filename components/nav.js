import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Nav = () => {
    return ( 
        <>
           <nav className={styles.navContainer} >
               <img className={styles.logo} src="/logo.png"  height='33px'/>
               <div className={styles.menuContainer}>
                    <ul className={styles.menus}>
                        <li className={styles.menuList}><Link href='/'><a className={styles.menu}>Home</a></Link></li>
                        <li className={styles.menuList}><Link href=''><a className={styles.menu}>Payments</a></Link></li>
                        <li className={styles.menuList}><Link href=''><a className={styles.menu}>Bill Payment</a></Link></li>
                        <li className={styles.menuList}><Link href=''><a className={styles.menu}>Savings</a></Link></li>
                        <li className={styles.menuList}><Link href=''><a className={styles.menu}>Rewards</a></Link></li>
                    </ul>
                    <button className={styles.menuButton}>Get the app</button>
                </div>
           </nav>
        </>
    
    
    );
}
 
export default Nav;