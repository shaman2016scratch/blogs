const NewsComponent = ({newsData}) => {
    const News = ({data}) => {
        return (
            <div>
                <h3>{data.title}</h3>
                <p>{data.text} <i>{data.date}</i> <a href={data.link}>Open</a></p>
            </div>
        )
    }
    return (
        <>
            {newsData.map((data) => (
                <News data={data} />
            ))}
        </>
    )
}

export default NewsComponent