import styles from '../../../styles/style.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://corona.lmao.ninja/v2/historical');
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
        return {
            params: { country: "" + ninja.country }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const country = context.params.country;
    const res = await fetch('https://corona.lmao.ninja/v2/historical/' + country);
    const data = await res.json();

    return {
        props: { ninja: data }
    }
}




const Details = ({ ninja }) => {
    return (
        <div className={styles.single}>
            <h1>{ninja.country}</h1>
           
        
        </div>
    );
}

export default Details;