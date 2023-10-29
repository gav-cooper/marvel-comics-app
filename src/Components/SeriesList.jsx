import SeriesItem from './SeriesItem';

function SeriesList(props) {
  console.log(props)
  return (
    <>
      {props.data.map((series, index) => <SeriesItem series = {series} key = {index}/>)}
    </>
  )
}

export default SeriesList;