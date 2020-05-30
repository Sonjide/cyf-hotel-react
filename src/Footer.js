/*
#### 4. Create a Footer component
**Instructions:** Create a `<Footer />` component which should be rendered at the bottom of the page. Pass the following array as a prop to this component: `["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]`. Inside the component, use the data you passed as a prop to render a `<ul>` list with each item of the array displayed as a `<li>`.

//PokeDex exersize
// function BestPokemon(props) {
//     return (
//       <div>
//         <p><strong>Which is your favourite Pokemon?</strong></p>
//         <ul>{props.abilities.map((ability, index) => (
//           <li key={index}>{ability} </li>
//         ))}</ul>
//       </div>
//     );
//   }
//pokedex app.js file <BestPokemon abilities={['Anticipation', 'Adaptability', 'Run-Away']}/>

**Hint:** The `.map()` method will by useful.

**Test:** The footer should render at the bottom of the page with each address property displayed as a list item.

*/

import React from "react";

function Footer(props) {
  return (
    <div>
      <ul>
        {props.fakeAddress.map((fakeAddress, index) => (
          <li key={index}>{fakeAddress} </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
