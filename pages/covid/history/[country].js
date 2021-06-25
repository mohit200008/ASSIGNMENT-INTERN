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
            <div style={{ display: "flex" }}>
                <div style={{ padding: 12, marginLeft: 15, border: '2px solid yellow' }}>
                    {
                        Object.keys(ninja.timeline.cases).map((key, i) => (
                            <table key={i}>
                                <tbody>
                                    <tr>
                                        <th>DATE</th>
                                        <th>Cases</th>
                                    </tr>
                                    <tr>
                                        <td>{key}</td>
                                        <td>{ninja.timeline.cases[key]}</td>
                                    </tr>
                                </tbody>

                            </table>
                        ))
                    }
                </div>
                <div style={{ padding: 12, marginLeft: 18, border: '2px solid red' }}>
                    {
                        Object.keys(ninja.timeline.deaths).map((key, i) => (
                            <table key={i}>
                                <tbody>
                                    <tr>
                                        <th>DATE</th>
                                        <th>Deaths</th>
                                    </tr>
                                    <tr>
                                        <td>{key}</td>
                                        <td>{ninja.timeline.deaths[key]}</td>
                                    </tr>
                                </tbody>

                            </table>
                        ))
                    }
                </div>
                <div style={{ padding: 12, marginLeft: 20, border: '2px solid green' }}>
                    {
                        Object.keys(ninja.timeline.recovered).map((key, i) => (
                            <table key={i}>
                                <tbody>
                                    <tr>
                                        <th>DATE</th>
                                        <th>Recovered</th>
                                    </tr>
                                    <tr>
                                        <td>{key}</td>
                                        <td style={{ marginLeft: 10 }}>{ninja.timeline.recovered[key]}</td>
                                    </tr>
                                </tbody>

                            </table>
                        ))
                    }
                </div>
            </div>


        </div>
    );
}

export default Details;