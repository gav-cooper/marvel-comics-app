function ListItem(props) {
  const {title, images, issueNumber, pageCount, dates, prices, digitalId} = props.comic;

  let link = ""

  if (digitalId !== 0) { link = `https://read.marvel.com/#/book/${digitalId}`}
  return (
    <>
      <div className="comic">
        <div className="comic-cover-container">
          <img className="comic-cover" src={`${images[0].path}.${images[0].extension}`}></img>
        </div>
        <div className="comic-data-container">
          <h1>{title}</h1>
          <p>Issue: {issueNumber}</p>
          <p>Pages: {pageCount}</p>
          <p>Date: {new Date(dates[0].date).toLocaleDateString()}</p>
          <p>Price: ${prices[0].price}</p>
          { digitalId == 0 ? <p>Not available to read!</p> : <p>Read on <a href={link}>Marvel Unlimited</a></p> }        </div>
      </div>
    </>
  )
}

export default ListItem;
