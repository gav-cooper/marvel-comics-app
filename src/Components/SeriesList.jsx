import SeriesItem from './SeriesItem';

function SeriesList(props) {
  console.log(props.id)
  return (
    <>
      {props.data.map((series, index) => <SeriesItem heroID = {props.id} series = {series} key = {index}/>)}
    </>
  )
}

export default SeriesList;