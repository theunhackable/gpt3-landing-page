import React from 'react';
import './blog.css';

import { BlogsContainer } from '../../containers';
import recent_blog from '../../assets/imgs/recent-blog.png';
import blog1 from '../../assets/imgs/blog1.png';
import blog2 from '../../assets/imgs/blog2.png';
import blog3 from '../../assets/imgs/blog3.png';
import blog4 from '../../assets/imgs/blog4.png';

const Blog = () => {
  return (

    <section id="Blog">
      <div className="gpt3__blog-container">
        <h1 className='gradient-text'>
          A lot is happening,<br/>
          We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-blogs-wrapper">
        <div className="gpt3__blog-blogs-wrapper1">

          <BlogsContainer class="recent" date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" src={recent_blog} alt="blog" link="" link_text={"read full article"}/>
        </div>
        <div className="gpt3__blog-blogs-wrapper2">
          <BlogsContainer class="" date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" src={blog1} alt="blog" link="" link_text={"read full article"}/>
          <BlogsContainer class="" date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" src={blog2} alt="blog" link="" link_text={"read full article"}/>
          <BlogsContainer class="" date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" src={blog3} alt="blog" link="" link_text={"read full article"}/> 
          <BlogsContainer class="" date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" src={blog4} alt="blog" link="" link_text={"read full article"}/>
        </div>
      </div>

    </section>
  )
}

export default Blog;