// JSON data: JSON (JavaScript Object Notation) is a format for storing and transporting data.
// JSON looks similar to JavaScript objects, but there are key differences.
// Most notably, in JSON, keys and string values must be enclosed in double quotes.

const data = `{
    "learners": [
      {
        "id": 1,
        "name": "Alice",
        "bio": "JavaScript enthusiast.",
        "favoriteLanguageId": 2,
        "skills": ["JavaScript", "React", "Node.js"],
        "email": "alice@example.com",
        "location": "New York"
      },
      {
        "id": 2,
        "name": "Bob",
        "bio": "Full-stack developer.",
        "favoriteLanguageId": 1,
        "skills": ["HTML", "CSS", "JavaScript"],
        "email": "bob@example.com",
        "location": "San Francisco"
      },
      {
        "id": 3,
        "name": "Charlie",
        "bio": "Backend developer.",
        "favoriteLanguageId": 3,
        "skills": ["Java", "Spring", "Hibernate"],
        "email": "charlie@example.com",
        "location": "Chicago"
      }
    ],
    "languages": [
      {
        "id": 1,
        "name": "JavaScript",
        "description": "A versatile programming language primarily used for web development.",
        "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "id": 2,
        "name": "Python",
        "description": "A popular programming language known for its readability and versatility.",
        "mdnLink": "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
      },
      {
        "id": 3,
        "name": "Java",
        "description": "A high-level programming language used for building server-side applications.",
        "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"
      },
      {
        "id": 4,
        "name": "C#",
        "description": "A modern programming language developed by Microsoft for a variety of applications.",
        "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "id": 5,
        "name": "Ruby",
        "description": "A dynamic programming language focused on simplicity and productivity.",
        "mdnLink": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      }
    ]
  }`;
  
  // Parsing JSON: Converting JSON data (which is a string) into a JavaScript object.
  const parsedData = JSON.parse(data);
  
  // Iterating over learners and creating profile cards.
  parsedData.learners.forEach(learner => {
    createProfileCard(learner);
  });
  
  // Function to create and append a profile card for each learner.
  function createProfileCard(learner) {
    const card = document.createElement('div');
    card.className = 'profile-card';
  
    // Creating and appending learner's name
    const nameElement = document.createElement('h2');
    nameElement.innerText = learner.name;
    card.appendChild(nameElement);
  
    // Creating and appending learner's bio
    const bioElement = document.createElement('p');
    bioElement.innerText = `Bio: ${learner.bio}`;
    card.appendChild(bioElement);
  
    // Finding the favorite language for the learner.
    const favoriteLanguage = parsedData.languages.find(language => language.id === learner.favoriteLanguageId);
  
    // JSON vs. JavaScript Object Notation: JSON requires double quotes for keys and string values.
    // JavaScript object notation does not have this requirement.
  
    if (favoriteLanguage) {
      // Creating and appending favorite language
      const favoriteLanguageElement = document.createElement('p');
      const favoriteLanguageLink = document.createElement('span');
      favoriteLanguageLink.className = 'language-link';
      favoriteLanguageLink.innerText = favoriteLanguage.name;
      favoriteLanguageLink.setAttribute('data-language-id', favoriteLanguage.id);
      favoriteLanguageElement.innerText = 'Favorite Language: ';
      favoriteLanguageElement.appendChild(favoriteLanguageLink);
      card.appendChild(favoriteLanguageElement);
  
      // Creating and appending favorite language description
      const favoriteLanguageDescription = document.createElement('p');
      favoriteLanguageDescription.innerText = favoriteLanguage.description;
      card.appendChild(favoriteLanguageDescription);
    } else {
      // Handling case where favorite language is not found
      const noLanguageElement = document.createElement('p');
      noLanguageElement.innerText = 'Favorite language not found.';
      card.appendChild(noLanguageElement);
    }
  
    // Creating and appending skills
    const skillsElement = document.createElement('p');
    skillsElement.innerText = 'Skills:';
    card.appendChild(skillsElement);
  
    const skillsList = document.createElement('ul');
    learner.skills.forEach(skill => {
      const skillItem = document.createElement('li');
      skillItem.innerText = skill;
      skillsList.appendChild(skillItem);
    });
    card.appendChild(skillsList);
  
    // Creating and appending email
    const emailElement = document.createElement('p');
    emailElement.innerText = `Email: ${learner.email}`;
    card.appendChild(emailElement);
  
    // Creating and appending location
    const locationElement = document.createElement('p');
    locationElement.innerText = `Location: ${learner.location}`;
    card.appendChild(locationElement);
  
    // Adding a CSS class for additional styling.
    card.classList.add('styled-card');
  
    // Appending the created card to the container in the DOM.
    const container = document.getElementById('profile-container');
    container.appendChild(card);
  }
  
  // Event listener for language links
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('language-link')) {
      const languageId = parseInt(event.target.getAttribute('data-language-id'), 10);
      const language = parsedData.languages.find(lang => lang.id === languageId);
      if (language) {
        const languageInfo = document.getElementById('language-info');
        document.getElementById('language-name').innerText = language.name;
        document.getElementById('language-description').innerText = language.description;
        document.getElementById('language-link').href = language.mdnLink;
        languageInfo.classList.remove('hidden');
      }
    }
  });
  
  // Remember: JSON keys and string values must be in double quotes.
  // JavaScript objects can use single quotes or no quotes at all for keys if they are valid identifiers.
  