import React from 'react'
import { Link } from 'gatsby';
import Button from 'react-bootstrap/Button';
import * as classes from './PostLink.module.scss';

const PostLink = ({ post }) => {
    return (
        <div className={`${classes.PostLink}`}>
            <div className={`${classes.Content}`}>
                <div className={`${classes.Tile}`}>
                    <div className={`${classes.ImgWrapper}`}>
                        <img src={require(`../../../assets/images/${post.frontmatter.preview}`).default} alt={`blog preview`} />
                    </div>
                    <div className={`${classes.DetailsWrapper}`}>
                        <h4 className={`${classes.Title}`}>{post.frontmatter.title}</h4>
                        <p className={`${classes.Desc}`}>{post.excerpt}</p>
                        <div className={`${classes.ReadBtnWrapper}`}>
                            <p className={`${classes.ReadTime}`}>{post.frontmatter.readTime}</p>
                            <Link  to={`${post.frontmatter.slug}/`}>
                                <Button variant={`primary`} className={`${classes.ReadBtn}`}>Read Post</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostLink