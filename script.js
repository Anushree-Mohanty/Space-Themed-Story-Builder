class SpaceStoryBuilder {
  constructor() {
    this.initializeElements()
    this.bindEvents()
    this.storyTemplates = this.getStoryTemplates()
  }

  initializeElements() {
    this.protagonist = document.getElementById("protagonist")
    this.setting = document.getElementById("setting")
    this.conflict = document.getElementById("conflict")
    this.companion = document.getElementById("companion")
    this.customElement = document.getElementById("customElement")
    this.generateBtn = document.getElementById("generateStory")
    this.clearBtn = document.getElementById("clearForm")
    this.storyDisplay = document.getElementById("storyDisplay")
    this.storyActions = document.getElementById("storyActions")
    this.saveBtn = document.getElementById("saveStory")
    this.shareBtn = document.getElementById("shareStory")
    this.newStoryBtn = document.getElementById("newStory")
  }

  bindEvents() {
    this.generateBtn.addEventListener("click", () => this.generateStory())
    this.clearBtn.addEventListener("click", () => this.clearForm())
    this.saveBtn.addEventListener("click", () => this.saveStory())
    this.shareBtn.addEventListener("click", () => this.shareStory())
    this.newStoryBtn.addEventListener("click", () => this.createNewStory())

    // Add enter key support for custom element input
    this.customElement.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.generateStory()
      }
    })
  }

  getStoryTemplates() {
    return [
      "In the vast expanse of space, {protagonist} found themselves on {setting}. It was here that they {conflict}. Accompanied by {companion}, they embarked on an adventure that would change the course of galactic history.",

      "The stars aligned perfectly when {protagonist} arrived at {setting}. Little did they know that they would soon {conflict}. With the help of {companion}, they discovered that the universe held more mysteries than they ever imagined.",

      "Deep in the cosmic void, {protagonist} was stationed on {setting} when the unexpected happened - they {conflict}. Together with {companion}, they faced challenges that tested not only their courage but their understanding of the universe itself.",

      "It was a routine mission until {protagonist} reached {setting} and {conflict}. The presence of {companion} proved invaluable as they navigated through dangers that lurked in the darkest corners of space.",

      "Among the countless worlds scattered across the galaxy, {protagonist} chose {setting} as their destination. Their journey took an extraordinary turn when they {conflict}. With {companion} by their side, they uncovered secrets that had been hidden for millennia.",
    ]
  }

  generateStory() {
    // Validate required fields
    if (!this.protagonist.value || !this.setting.value || !this.conflict.value) {
      this.showError("Please fill in at least the Hero, Setting, and Adventure fields!")
      return
    }

    // Show loading state
    this.showLoading()

    // Simulate story generation delay for better UX
    setTimeout(() => {
      const story = this.createStory()
      this.displayStory(story)
    }, 1500)
  }

  createStory() {
    // Get random template
    const template = this.storyTemplates[Math.floor(Math.random() * this.storyTemplates.length)]

    // Get form values
    const protagonist = this.protagonist.value
    const setting = this.setting.value
    const conflict = this.conflict.value
    const companion = this.companion.value || "their own determination and wit"

    // Replace placeholders in template
    let story = template
      .replace("{protagonist}", `the ${protagonist}`)
      .replace("{setting}", setting)
      .replace("{conflict}", conflict)
      .replace("{companion}", companion)

    // Add custom element if provided
    if (this.customElement.value.trim()) {
      const customEndings = [
        ` Along the way, they encountered ${this.customElement.value.trim()}, which added an unexpected twist to their journey.`,
        ` The adventure became even more thrilling when ${this.customElement.value.trim()} appeared, changing everything they thought they knew.`,
        ` As if the challenges weren't enough, ${this.customElement.value.trim()} emerged, creating new possibilities they had never considered.`,
        ` Their quest reached new heights when they discovered ${this.customElement.value.trim()}, opening doors to adventures beyond their wildest dreams.`,
      ]

      const randomEnding = customEndings[Math.floor(Math.random() * customEndings.length)]
      story += randomEnding
    }

    // Add epic conclusion
    const conclusions = [
      " In the end, their bravery and determination saved not just themselves, but countless worlds across the galaxy.",
      " Their adventure became the stuff of legends, inspiring future generations of space explorers.",
      " What started as a simple mission evolved into an epic tale that would be told throughout the cosmos.",
      " They returned home forever changed, carrying with them the wisdom of the stars and the bonds forged in the depths of space.",
      " The universe revealed its secrets to them, and they became guardians of knowledge that would shape the future of all civilizations.",
    ]

    story += conclusions[Math.floor(Math.random() * conclusions.length)]

    return {
      title: this.generateTitle(),
      content: story,
    }
  }

  generateTitle() {
    const titlePrefixes = [
      "The Chronicles of",
      "Adventures in",
      "The Legend of",
      "Journey to",
      "The Mystery of",
      "Guardians of",
      "The Quest for",
      "Secrets of",
    ]

    const titleSuffixes = [
      "the Cosmic Frontier",
      "the Stellar Void",
      "the Galactic Beyond",
      "the Infinite Stars",
      "the Nebula's Edge",
      "the Quantum Realm",
      "the Celestial Gateway",
      "the Astral Dimension",
    ]

    const prefix = titlePrefixes[Math.floor(Math.random() * titlePrefixes.length)]
    const suffix = titleSuffixes[Math.floor(Math.random() * titleSuffixes.length)]

    return `${prefix} ${suffix}`
  }

  showLoading() {
    this.storyDisplay.innerHTML = `
            <div class="placeholder">
                <div class="loading"></div>
                <p>Generating your cosmic adventure...</p>
                <p class="hint">The universe is aligning the perfect story for you!</p>
            </div>
        `
  }

  showError(message) {
    this.storyDisplay.innerHTML = `
            <div class="placeholder">
                <div style="font-size: 3rem; margin-bottom: 20px;">⚠️</div>
                <p style="color: #ff6b6b;">${message}</p>
            </div>
        `
  }

  displayStory(story) {
    this.storyDisplay.innerHTML = `
            <div class="generated-story">
                <h2 class="story-title">${story.title}</h2>
                <p>${story.content}</p>
            </div>
        `

    this.storyActions.style.display = "flex"
    this.currentStory = story

    // Add some visual flair
    this.storyDisplay.style.animation = "none"
    this.storyDisplay.offsetHeight // Trigger reflow
    this.storyDisplay.style.animation = "fadeIn 0.5s ease-in"
  }

  clearForm() {
    this.protagonist.value = ""
    this.setting.value = ""
    this.conflict.value = ""
    this.companion.value = ""
    this.customElement.value = ""

    this.storyDisplay.innerHTML = `
            <div class="placeholder">
                <div class="planet-icon">🪐</div>
                <p>Your cosmic adventure will appear here...</p>
                <p class="hint">Fill out the form and click "Generate Story" to begin!</p>
            </div>
        `

    this.storyActions.style.display = "none"
  }

  saveStory() {
    if (!this.currentStory) return

    const storyData = {
      title: this.currentStory.title,
      content: this.currentStory.content,
      timestamp: new Date().toISOString(),
      settings: {
        protagonist: this.protagonist.value,
        setting: this.setting.value,
        conflict: this.conflict.value,
        companion: this.companion.value,
        customElement: this.customElement.value,
      },
    }

    // Save to localStorage
    const savedStories = JSON.parse(localStorage.getItem("spaceStories") || "[]")
    savedStories.push(storyData)
    localStorage.setItem("spaceStories", JSON.stringify(savedStories))

    // Show confirmation
    this.showTemporaryMessage("Story saved to your device! 💾")
  }

  shareStory() {
    if (!this.currentStory) return

    const storyText = `${this.currentStory.title}\n\n${this.currentStory.content}\n\n--- Created with Cosmic Story Builder ---`

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(storyText)
        .then(() => {
          this.showTemporaryMessage("Story copied to clipboard! 📋")
        })
        .catch(() => {
          this.fallbackCopyToClipboard(storyText)
        })
    } else {
      this.fallbackCopyToClipboard(storyText)
    }
  }

  fallbackCopyToClipboard(text) {
    const textArea = document.createElement("textarea")
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()

    try {
      document.execCommand("copy")
      this.showTemporaryMessage("Story copied to clipboard! 📋")
    } catch (err) {
      this.showTemporaryMessage("Unable to copy. Please select and copy manually.")
    }

    document.body.removeChild(textArea)
  }

  createNewStory() {
    this.clearForm()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  showTemporaryMessage(message) {
    const messageDiv = document.createElement("div")
    messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #4ecdc4, #45b7d1);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 1000;
            font-weight: bold;
            animation: slideIn 0.3s ease-out;
        `
    messageDiv.textContent = message

    document.body.appendChild(messageDiv)

    setTimeout(() => {
      messageDiv.style.animation = "slideOut 0.3s ease-in forwards"
      setTimeout(() => {
        document.body.removeChild(messageDiv)
      }, 300)
    }, 3000)
  }
}

// Add CSS animations for messages
const style = document.createElement("style")
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`
document.head.appendChild(style)

// Initialize the story builder when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new SpaceStoryBuilder()
})
