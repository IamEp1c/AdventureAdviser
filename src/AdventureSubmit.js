import React, {useState} from 'react'

function AdventureSubmit({addSubmit}) {

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [location, setLocation] = useState("")
  const [type, setType] = useState("")
  const [moreInfo, setMoreInfo] = useState("")

  function handleSubmit(e){
    e.preventDefault(); 
    const obj = {
      title: title, 
      image: image,
      location: location,
      isNew: true,
      type: type,
      moreInfo: moreInfo
    }
    fetch("http://localhost:8000/adventures", {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(obj)
    })
    addSubmit(obj)

    setTitle("")
    setImage("")
    setLocation("")
    setType("")
    setMoreInfo("")

  }

  return (
    <form onSubmit={handleSubmit}>
    <label>Enter title here</label>
    <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
    <label>Enter image here:</label>
    <input type="text" placeholder="imageURL" value={image} onChange={(e) => setImage(e.target.value)}/>
    <label>Enter location here:</label>
    <input type="text" placeholder="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
    <label>Enter type here:</label>
    <input type="text" placeholder="event or activity" value={type} onChange={(e) => setType(e.target.value)}/>
    <label>Enter your info here:</label>
    <input type="text" placeholder="more information" value={moreInfo} onChange={(e) => setMoreInfo(e.target.value)}/>
    <button type="submit">Add The Event!</button>
    </form>

  )
}

export default AdventureSubmit;