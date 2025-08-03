function generateStory() {
  const name = document.getElementById('heroName').value;
  const planet = document.getElementById('planet').value;
  const companion = document.getElementById('companion').value;
  const mission = document.getElementById('mission').value;

  if (!name) {
    alert("Please enter the astronaut's name!");
    return;
  }

  const intro = `In the year 3045, Captain ${name}, the bravest astronaut in the Galaxy Corps, prepared for a daring mission to ${planet}.`;
  const crew = `Accompanied by ${companion}, their most trusted companion, they boarded the spaceship *Starlight Crusader*.`;
  const challenge = `Their mission: ${mission}. But as they entered the ${planet} atmosphere, unexpected turbulence shook the ship. Navigation systems flickered.`;
  const discovery = `Suddenly, they discovered a mysterious signal coming from the planet’s surface. It was ancient, encrypted, and strangely familiar.`;
  const action = `${name} and ${companion} ventured into the alien terrain, braving harsh storms, glowing rock formations, and eerie silence.`;
  const climax = `Deep inside a glowing cave, they uncovered a relic of an ancient civilization that held the power to change the fate of the galaxy.`;
  const ending = `With quick thinking and courage, ${name} activated the relic and restored peace to the galaxy. Their names were etched into the stars for eternity.`;

  const story = `
    ${intro}<br><br>
    ${crew}<br><br>
    ${challenge}<br><br>
    ${discovery}<br><br>
    ${action}<br><br>
    ${climax}<br><br>
    ${ending}
  `;

  document.getElementById('story').innerHTML = story;
}
