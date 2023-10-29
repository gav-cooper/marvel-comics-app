import ComicsItem from './ComicsItem';

function ComicsList(props) {
  return (
    <>
      {props.data.map((comics, index) => <ComicsItem comic = {comics} key = {index}/>)}
    </>
  )
}

export default ComicsList;