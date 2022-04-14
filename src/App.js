import Container from './containers/Container';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUser } from './store/user';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const { currentPage, perPage } = useSelector(state => state.user)
  useEffect(() => {
    dispatch(getUser({ page: currentPage, perPage }))
  }, [dispatch, currentPage, perPage]);

  return (
    <>
      <Container />
    </>
  );
}

export default App;
