import axios from "axios";
import React, {useState, useEffect} from "react";

const CATURL = "https://catfact.ninja/fact";

// Hard coding a facts for testing
const newFact = {
  fact: "The cat is a domestic species of small carnivorous mammal",
  length: 57
};

const updatedFact = {
  fact: "Domestic cats are valued by humans for companionship and their ability to kill rodents",
  length: 86 
};

export default function App() {
  const [data, setData] = useState(null);
  //const [fact, setFact] = useState(null);
  
  // Check the connection with the API
  useEffect(() => {
    axios.get(CATURL).then((response) => {
      setData(response.data)
    })
  }, []);

  // This is an object {fact: "", length: ""}
  let dataFromApi = data; 
  
  //// Create a fact
  const createFact = () => {
    axios
      .post(CATURL, newFact).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
  }

  // Update a fact
  const updateFact = () => {
    axios
      .put(CATURL, updatedFact).then((response) => {
        setData(response.data)
      })
  }

  // Delete a fact
  const deleteFact = () => {
    axios
      .delete(CATURL).then(() => {
        alert("The post has been deleted, ^-^ ...");
        setData(null)
      })
  }


  // Control flow from the app
  if(!dataFromApi){
    return (
      alert(`Error, Can't Connect with: ${CATURL}`)
    )
  } else {
      return(
        <div>
          <h1>Cat facts</h1>
          <h2>Did you know !!!</h2>
          <p>{dataFromApi.fact}</p>
          <button onClick={createFact}>Create Fact</button>
          <button onClick={updateFact}>Update Fact</button>
          <button onClick={deleteFact}>Delete Fact</button>
        </div>
      )
   }
}


