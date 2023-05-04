import React from 'react'
import './blogs-container.css'

function BlogsContainer(props) {
  return (
    <div className={"blog-container " + props.class}>
        <img src={props.src} alt={props.alt} className="blog-img" />
        <div className="blog-text">
            <div>

                <p>{props.date}</p>
                <h1>{props.heading}</h1>
            </div>
            <div>
                <a href={props.link}>{props.link_text}</a>
            </div>
        </div>
    </div>
  )
}

export default BlogsContainer;