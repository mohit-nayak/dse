import React from 'react';
import * as classes from './BlogBanner.module.scss';

const BlogBanner = () => {
    return (
        <section className={`${classes.BlogBanner}`}>
            <div className={`container`}>
                <div className={`${classes.Content} text-white text-center`}>
                    <h1 className={`${classes.Title} fw-semibold`}>Package Headline</h1>
                    <p className={`${classes.Sub}`}>
                        Short description of this service. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                        no sea takimata sanctus est Lorem ipsum ....
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BlogBanner;