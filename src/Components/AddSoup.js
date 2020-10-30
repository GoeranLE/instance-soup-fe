import React from 'react'
import { useParams } from 'react-router-dom';

const AddSoup = () => {
  return (
  <div className="container">
    <form method="POST" action="/add-new-soup">
    <div class="form-group mt-5">
      <label for="eaddSoupTitle">Title</label>
      <input type="text" class="form-control" id="addSoupTitle" aria-describedby="title" placeholder="Enter your soup name" />
    </div>
    <div class="form-group">
      <label for="addSoupAuthor">Author</label>
      <input type="text" class="form-control" id="addSoupAuthor" placeholder="Your name" />
    </div>
    <div class="form-group">
      <label for="addSoupAbstract">Abstract</label>
      <input type="text" class="form-control" id="addSoupAbstract" placeholder="Abstract" />
    </div>
    <div class="form-group">
      <label for="addSoupDescription">Description</label>
      <textarea class="form-control" id="addSoupDescription" rows="3">Description</textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  )
}


export default AddSoup

/*     1:
    abstract: "Always hungry? Create a delicious recipe collection app with us!"
    author: "Goeran L."
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
    id: 2
    level: "easy"
    technologies: (4) ["Javascript", "HTML", "CSS", "Bootstrap"]
    title: "Cook Book"
    topics: (2) ["cooking", "programming basics"]
    video: "https://www.youtube.com/embed/wVvhqJBcmcg"
    __proto__: Object */