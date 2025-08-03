function generateStory() {
  const name = document.getElementById('heroName').value;
  const planet = document.getElementById('planet').value;
  const companion = document.getElementById('companion').value;
  const mission = document.getElementById('mission').value;

  if (!name) {
    alert("Please enter the astronaut's name!");
    return;
  }

  const story = `
    Captain ${name} blasted off to ${planet} with ${companion}.
    Their mission: ${mission}. 
    The journey was full of challenges, but ${name}'s courage and ${companion}'s support made it legendary!
  `;

  document.getElementById('story').innerText = story;
}
