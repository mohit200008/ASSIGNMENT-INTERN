import styles from '../../styles/style.module.css'

export const getStaticPaths= async() => {
  const res= await fetch('https://corona.lmao.ninja/v2/countries');
  const data= await res.json();

  const paths= data.map(ninja=> {
    return{
      params: { id: "" + ninja.countryInfo._id} 
    }

  })

  return {
    paths,
    fallback:false
  }
}

export const getStaticProps=async(context)=> {
  const id = context.params.id;
  const res= await fetch('https://corona.lmao.ninja/v2/countries/'+id);
  const data= await res.json();
  console.log(data)

  return {
    props:{ninja: data}
  }
}
  
  const Details = ({ ninja }) => {
    return (
      <div className={styles.single}>
        <h1>Country:{ninja.country}</h1>
        <p>No Of Cases:{ninja.cases}</p>
        <p>Todays Cases:{ninja.todayCases}</p>
        <p>No of Deaths:{ninja.deaths}</p>
        <p>Total Recovered:{ninja.recovered}</p>
        <p>Total Recovered Today:{ninja.todayRecovered}</p>
        <p style={{ color:"red"}}>Critical Cases:{ninja.critical}</p>


      </div>
    );
  }
  
  export default Details;