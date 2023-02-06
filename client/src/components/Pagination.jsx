import React from 'react';
import {Pagination} from '@mui/lab';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { PaginationItem } from '@mui/material';

const Paginate = () => {
    const {numberOfPages} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     if (page) {
    //         dispatch(getPosts(page));
    //     }
    // }, [page]);
    return (
        <>
            <Pagination
                className={"grid place-content-around "}
                count={5}
                page={1}
                variant={"outlined"}
                color={"primary"}
                renderItem={(item) => (
                    <PaginationItem {...item} component={Link} to={`/posts/page/${1}`}
                    />
                )}
            />
        </>
    );
};

export default Paginate;