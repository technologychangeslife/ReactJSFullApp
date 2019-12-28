import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'



function Photo(props) {
 const post = props.post
 console.log('Post start');
 console.log(post.description);
 console.log(post.id);
 console.log(post.imageLink);
 console.log('Post end');
 return <figure className="figure"> 
          <Link to={`/single/${post.id}`}> 
            <img className= "photo" src={post.imageLink} alt={post.description}/></Link>
            <figcaption> <p> {post.description} - {post.imagesource} </p> </figcaption>
             <div className = "button-container">
                <button onClick = {() => {
                props.onRemovePhoto(props.index, post.id)
                //props.history.push('/')
                }}> Remove </button>
                <button onClick = {() => {
                alert(props.index)
                //props.history.push('/')
                }}> Remove </button>
                 <Link className="button" to={`/single/${post.id}`}> 
                 <div className="comment-count"> 
                  <div className="speech-bubble"> </div>
                    {/* {props.comments[post.id] ? props.comments[post.id].length : 0 } */}
                 </div>
                </Link>
             </div>
        </figure>
}
Photo.propTypes = {
 post: PropTypes.object.isRequired,
}
export default Photo