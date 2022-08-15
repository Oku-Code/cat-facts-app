import axios from "axios";
import React from "react";

const CATURL = "https://catfact.ninja/fact";
const cat = {
  "name": "Lucifer",
  "color": "black"
}

export default function App() {
  const [fact, setFact] = React.useState(null);

  React.useEffect(() => {
    axios.get(CATURL).then((response) => {
      setFact(response.data)
    })
  }, []);

  if(!fact){
    return (
      <p>No response</p>
    )
  } else {
      return (
        <div>
          <p>{fact}</p>
        </div>
      )
    }
}


