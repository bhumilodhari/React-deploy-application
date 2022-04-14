import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../../store/user'
import PageNavigationStyle from "../../styles/PageNavigationStyle";

function PageNavigation() {
  const dispatch = useDispatch()
  const { currentPage, totalPage, perPage } = useSelector(state => state.user)
  const current = currentPage;

  const prev = current !== 1 ? current - 1 : -1;
  const next = current < totalPage ? current + 1 : -1;

  const fetchNextPage = () => {
    dispatch(getUser({ page: next, perPage }))
  }
  const fetchPreviousPage = () => {
    dispatch(getUser({ page: prev, perPage }))
  }
  const perPageHandler = (event) => {
    dispatch(getUser({ page: 1, perPage: event.target.value }))
  }

  return (
    <PageNavigationStyle>
      {prev !== -1 && <button onClick={fetchPreviousPage} >Previous</button>}
      {prev !== -1 && <button onClick={fetchPreviousPage} >{current - 1}</button>}
      <button style={{ backgroundColor: "#ffa319" }}>{current}</button>
      {next !== -1 && <button onClick={fetchNextPage} >{current + 1}</button>}
      {next !== -1 && <button onClick={fetchNextPage} >Next</button>}
      <select onClick={perPageHandler}>
        <option value={2}>Per Page 2</option>
        <option value={3}>Per Page 3</option>
        <option value={4}>Per Page 4</option>
        <option value={5}>Per Page 5</option>
        <option value={6}>Per Page 6</option>
      </select>

    </PageNavigationStyle>
  );
}

export default PageNavigation;