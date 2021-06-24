import styles from '../../styles/style.module.css'
import style from '../../styles/Home.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://corona.lmao.ninja/v2/countries');
    const data = await res.json();

    return {
        props: {
            data: data
        }
    }
}


const Ninjas = ({ data }) => {

    return (
        <div>
            <h1>All users</h1>
            {data.map(ninja => (
                <Link href={"/covid/" + ninja.countryInfo._id} key={ninja.countryInfo._id}>
                    <a className={styles.single}>
                        <h2>{ninja.country}</h2>
                        <p>Active Cases:{ninja.active}</p>
                        
                    </a>

                </Link>
            ))}
        </div>
    );
}

export default Ninjas;