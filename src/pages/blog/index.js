import React from "react"
import {graphql} from "gatsby"
import MainLayout from "../../layouts/mainLayout";
import BlogBanner from "../../components/sections/BlogBanner/BlogBanner";
import BlogPostsList from "../../components/sections/BlogPostsList/BlogPostsList";
import ContactMe from "../../components/sections/ContactMe1/ContactMe1";

const Index = ({
                   data: {
                       allMarkdownRemark: {edges},
                   },
               }) => {

    const posts = edges
        .filter(edge => !!edge.node.frontmatter.date)
        .map(edge => ({...edge.node}))

    return (
        <MainLayout>
            <title>Blog</title>

            <BlogBanner/>
            <BlogPostsList posts={posts}/>
            <ContactMe />
            <div className="footer-strip py-5"/>
        </MainLayout>
    )
}

export default Index

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            readTime
            preview
          }
        }
      }
    }
  }
`