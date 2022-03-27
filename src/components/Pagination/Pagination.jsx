import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'

import BlogCard from '../BlogCard/BlogCard'
import classes from './Pagination.module.css'

const Pagination = (props) => {

    const [pageNumber, setPageNumber] = useState(0)

    const blogsPerPage = 6
    const pagesVisited = pageNumber * blogsPerPage

    const blogs = props.blogs
    const blogsList = blogs.slice(pagesVisited, pagesVisited + blogsPerPage)
    const blogCard = blogsList.map((blog, i) => {

        return (
            <BlogCard blog={blog} key={i} />
        )
    })

    const pageCount = Math.ceil(props.blogs.length / blogsPerPage)

    return (

        <div data-aos="fade" data-aos-delay="1400" className={classes.container}>
            {props.blogs.length === 0 ? <div className="text-center">No result found!</div> : null}
            <div className={classes.blogCards}>
                {blogCard}
            </div>
            <ReactPaginate
                previousLabel={<FontAwesomeIcon icon={faAngleDoubleLeft} />}
                nextLabel={<FontAwesomeIcon icon={faAngleDoubleRight} />}
                breakLabel={'...'}
                pageCount={pageCount}
                onPageChange={(page) => setPageNumber(page.selected)}
                containerClassName={classes.paginationBtn}
                previousLinkClassName={classes.previousBtn}
                nextLinkClassName={classes.nextBtn}
                disabledClassName={classes.disabledBtn}
                activeClassName={classes.activeBtn}
            />
        </div>

    )
}

export default Pagination
