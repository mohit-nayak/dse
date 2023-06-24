import React, { useState, useEffect, useRef } from 'react';
import PostLink from '../../common/PostLink/PostLink';
import Pagination from 'react-bootstrap/Pagination';
import * as classes from './BlogPostsList.module.scss';

const showPerPage = 5;
const mobileWidth = 991;

const BlogPostsList = ({posts}) => {
    const [mobileView, setMobileView] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [indexStart, setIndexStart] = useState(0);
    const [indexEnd, setIndexEnd] = useState(0);
    const [paginationStart, setPaginationStart] = useState(0);
    const [paginationEnd, setPaginationEnd] = useState(4);

    const totalPages = Math.ceil(posts.length/showPerPage);
    const pages = new Array(totalPages).fill(0);
    pages.forEach((item, index) => pages[index] = index);

    const rootRef = useRef(null);

    const changePaginationHandler = (page) => {
        rootRef.current.scrollIntoView();
        setCurrentPage(page);
    };

    useEffect(() => {
        setIndexEnd(currentPage * showPerPage);
        setIndexStart(currentPage * showPerPage - showPerPage);

        const pageStart = currentPage - 3;
        const pageEnd = currentPage + 2;
        setPaginationStart(pageStart < 0 ? 0 : pageStart);
        setPaginationEnd(pageEnd > totalPages ? totalPages : pageEnd);
    }, [currentPage]);

    useEffect(() => {
        setMobileView(window.innerWidth <= mobileWidth);
    }, []);

    return (
        <section className={`${classes.BlogPostsList}`} ref={rootRef}>
            <div className={`container`}>
                <div className={`${classes.Content}`}>
                    <h5 className={`${classes.Title}`}>Blog Posts</h5>

                    <div>
                        { posts.length > 0 && posts.slice(indexStart, indexEnd).map(post => (
                            <PostLink key={post.id} post={post}/>
                        ))}
                    </div>

                    <div className={`${classes.PaginationWrapper}`}>
                        <Pagination className={`${classes.Pagination}`}>
                            { (!mobileView && currentPage > 1) && <Pagination.First onClick={() => changePaginationHandler(1)} />}
                            { currentPage > 1 && <Pagination.Prev onClick={() => changePaginationHandler(currentPage - 1)} />}
                            { (!mobileView && ((currentPage - 3) > 0)) && <Pagination.Ellipsis />}

                            { pages.slice(paginationStart, paginationEnd).map(item => {
                                const page = item + 1;
                                return (
                                     <Pagination.Item active={page === currentPage}
                                                      onClick={() => changePaginationHandler(page)}
                                                      key={page}>
                                         {page}
                                     </Pagination.Item>
                                );
                            })}

                            { (!mobileView && ((currentPage + 2) < totalPages)) && <Pagination.Ellipsis />}
                            { currentPage < totalPages && <Pagination.Next onClick={() => changePaginationHandler(currentPage + 1)} />}
                            { (!mobileView && currentPage < totalPages) && <Pagination.Last onClick={() => changePaginationHandler(totalPages)} />}
                        </Pagination>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPostsList;