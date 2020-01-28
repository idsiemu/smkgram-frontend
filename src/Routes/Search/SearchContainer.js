import React from "react";
import { withRouter } from "react-router-dom";
//withRouther url에 parameter값을 받아올 수 있다.
import SearchPresenter from "./SearchPresenter";
import { useQuery } from "react-apollo-hooks";
import {SEARCH} from "./SearchQueries";

export default withRouter(({location: {search}}) => {
    const searchTerm = search.split("=")[1];
    const {data, loading} = useQuery(SEARCH);
    return <SearchPresenter searchTerm={searchTerm} loading={loading} data={data}/>;
});