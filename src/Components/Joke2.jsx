import React from "react";
import Joke from "../Joke";
import { Jokedb } from "../Jokedb";
import { useState } from "react";


function Joke2() {
  const [messages, setMessages] = useState(['a'])
  // console.log(Jokedb);

   const jokeElements = Jokedb.map((Item) => {
     return <Joke key={Item.id} setup={Item.setup} punchline={Item.punchline} />;
   });

  return (
<div>
{jokeElements} 
{messages.length === 0 && <h1>You are all caught up with {messages.length} messages </h1>}
<h1>You have {messages.length} unread message</h1>
{messages.length > 1 ? "messages": "message"}
{/* {messages.length > 0 &&<h1>You have {messages.length} unread messages!</h1>} */}
</div>

  )
  
}

export default Joke2;

// {/* // <d className='Joke'>

//   {<Joke */}
// {/* //     setUp = "I got my daughter a fridge for her birthday"
//     Punchline = "I can't wait to see her face light up when she opens it"
//     isPun={true}
//     upvotes={10}
//     downvotes={2}
//     comments={[{author:"", body: "", title: "", date:""}]}

// /> */}

// {/* // <Joke */}
// {/* //      setUp = "How did the hacker escape the police?"
//      Punchline= "He just ransomware!"
//         isPun={false}
//      /> */}

// {/* //      <Joke  */}
// {/* //       setUp = "Why don't pirates travel on mountain roads?"
//       Punchline = "Scurvy"
//         isPun={true}
//       /> */}

// {/* //       <Joke */}
// {/* //       setUp = "Why do bees stay in the hive in the winter?"
//       Punchline = "Swarm"
//         isPun= {true}
//       /> */}

// {/* // </div>  */}
