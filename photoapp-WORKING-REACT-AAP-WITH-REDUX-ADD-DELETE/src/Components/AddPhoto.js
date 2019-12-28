
import React, {Component} from 'react'
class AddPhoto extends Component {
 constructor() {
 super()
 this.handleSubmit = this.handleSubmit.bind(this)
 }
 handleSubmit(event) {
 event.preventDefault();
 const imageLink = event.target.elements.link.value
 const description = event.target.elements.description.value
 const imagesource = event.target.elements.imagesource.value
 //Creating a post with added photo
 const post = {
 id: Number(new Date()),
 description: description,
 imageLink: imageLink,
 imagesource:  imagesource
 }
 if (description && imageLink){
 this.props.onAddPhoto(post)
 }
 }
 render() {
 return (
 <div>
 <h1> Photowall </h1>
 <div className="form">
 <form onSubmit={this.handleSubmit}> 
 <input type ="text" placeholder="Link" name="link"/>
 <input type ="text" placeholder="Desciption" name="description"/>
 <input type ="text" placeholder="Image Source" name="imagesource"/>
 <button> Post </button>
 </form>
 </div>
 </div>
 )
 }
}
export default AddPhoto