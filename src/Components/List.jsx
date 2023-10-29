import ListItem from './ListItem';

function List(props) {
  return (
    <>
    <div>
      {props.result.map((comic, index) => <ListItem comic = {comic} key = {index}/>)}
    </div>
    </>
  )
}

export default List;
