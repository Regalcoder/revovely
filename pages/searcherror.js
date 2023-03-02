import styles from '../styles/Searcherror.module.css'
import Link from 'next/link'
import Image from 'next/image';
const searcherror = () => {
    return ( 
        <>
         <div className={styles.searchContainer}>
            <div className={styles.subContainer}>
                <h3 className={styles.searchText}>Search Result For &apos;Money&apos;</h3>
                <Image className='img-fluid' src="/searchError.png" width='95px' height='95' alt=''/>
                <h2 className={styles.errorHeader}>Oops! Search Not Found</h2>
                <p className={styles.errorText}>Nothing matched your search criteria.
                    Please try again with different keywords.
                </p>
                <input className={styles.seacrhBox} type="search" name="search" id="" placeholder='Type keyword' />
                <Link href='/'><button className={styles.backButon}>Or Back To Home Page</button></Link>
            </div>
            
         </div>
        </>
     );
}
 
searcherror.layout = 'Default'
export default searcherror;