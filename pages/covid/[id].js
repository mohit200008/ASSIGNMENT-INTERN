import styles from '../../styles/style.module.css'
import style from '../../styles/Home.module.css'
import Link from 'next/link'

export const getStaticPaths = async () => {
  const res = await fetch('https://corona.lmao.ninja/v2/countries');
  const data = await res.json();

  const paths = data.map(ninja => {
    return {
      params: { id: "" + ninja.countryInfo._id }
    }

  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://corona.lmao.ninja/v2/countries/' + id);
  const data = await res.json();
 

  return {
    props: { ninja: data }
  }
}

const Details = ({ ninja }) => {
  return (
    <div className={styles.single} key={ninja.countryInfo._id}>
      <h1>Country:{ninja.country}</h1>
      <p>No Of Cases:{ninja.cases}</p>
      <p>Todays Cases:{ninja.todayCases}</p>
      <p>No of Deaths:{ninja.deaths}</p>
      <p>Total Recovered:{ninja.recovered}</p>
      <p>Total Recovered Today:{ninja.todayRecovered}</p>
      <p style={{ color: "red" }}>Critical Cases:{ninja.critical}</p>
      <Link href={"/covid/history/"+ ninja.country}>
        <a className={style.btn}>Show previous cases</a>
      </Link>


    </div>
  );
}

export default Details;