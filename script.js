function generateStory() {
  const name = document.getElementById('heroName').value;
  const planet = document.getElementById('planet').value;
  const companion = document.getElementById('companion').value;
  const mission = document.getElementById('mission').value;
  const genre = document.getElementById('genre').value;

  if (!name) {
    alert("Please enter the astronaut's name!");
    return;
  }

  let story = "";

  if (genre === "epic") {
    story = `
      In the year 3045, Captain ${name}, the bravest warrior of the Galactic League, departed for ${planet} with ${companion}.
      Their quest: ${mission}. <br><br>
      Battling meteors and space pirates, they discovered an ancient force hidden beneath the surface.
      Only with courage and unity could they complete their mission and return as legends of the stars.
    `;
  } else if (genre === "comedy") {
    story = `
      Captain ${name} was *supposed* to go to ${planet} for a heroic mission: ${mission}. 
      But instead, they crash-landed in a puddle of alien slime, with ${companion} accidentally ordering 300 pizzas via space Wi-Fi.<br><br>
      Together, they somehow saved the day... mostly by accident.
    `;
  } else if (genre === "mystery") {
    story = `
      ${name} was sent to ${planet} with ${companion} for ${mission}. But nothing was as it seemed.<br><br>
      Ghost signals echoed. Shadows moved on their own. And a strange voice whispered from the caves.
      The truth? More chilling than they imagined. A forgotten space experiment... still alive.
    `;
  } else if (genre === "horror") {
    story = `
      Captain ${name} and ${companion} landed on ${planet} at midnight. Their mission was simple: ${mission}.<br><br>
      But strange creatures lurked in the darkness. The stars vanished. Their comms were silent. 
      One by one, the lights went out. And the planet whispered: "You should not have come."
    `;
  } else if (genre === "romance") {
    story = `
      ${name} never expected to find love on ${planet}, especially not while on a mission to ${mission}.<br><br>
      But ${companion} had always been there — loyal, brave, and oddly charming.
      Among the stars, they found more than danger... they found each other.
    `;
  }

  document.getElementById('story').innerHTML = story;
  document.querySelector("button").style.fontFamily = "Orbitron, sans-serif";
  document.querySelector("button").style.fontSize = "16px";
}
