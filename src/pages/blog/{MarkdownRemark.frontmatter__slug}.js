import React from 'react';
import { graphql } from 'gatsby';
import MainLayout from '../../layouts/mainLayout';
import ContactMe from '../../components/sections/ContactMe2/ContactMe2';
import './postDetails.scss';

export default function Template({
                                     data,
                                 }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    console.log("entered", frontmatter, html)

    return (
        <MainLayout navAbsolute={false} navLight={true}>
            <title>{frontmatter.title}</title>

            <section className="blog-post-container">
                <div className={`container`}>
                    <article className="blog-post">
                        <h1 className="title">{frontmatter.title}</h1>
                        <div
                            className="blog-post-content block"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </article>
                </div>
            </section>
            
            <ContactMe />
            <div className="footer-strip py-5"/>
        </MainLayout>
    )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        readTime
        preview
      }
    }
  }
`