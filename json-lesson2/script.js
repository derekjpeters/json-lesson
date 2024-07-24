//Fetch and parse JSON data from seperate files
async function fetchData() {
	const learnerResponse = await fetch("/json-lesson2/learners.json");
	const languagesResponse = await fetch("/json-lesson2/languages.json");

	const learnersData = await learnerResponse.json();
	const languageData = await languagesResponse.json();
	console.log(learnersData);
	console.log(languageData);
	return { learners: learnersData.learners, languages: languageData.languages};
}

//Create the profile cards
async function createProfileCards() {
	const data = await fetchData();

	data.learners.forEach((learner) => {
		createProfileCard(learner, data.languages);
	});
}

// function to create and append a profile card for each learner

function createProfileCard(learner, languages) {
	const card = document.createElement("div");
	card.className = "profile-card";

	//create and append learner's name
	const nameElement = document.createElement("h2");
	nameElement.innerText = learner.name;
	card.appendChild(nameElement);

	//create and append the learner's bio
	const bioElement = document.createElement("p");
	bioElement.innerText = `Bio: ${learner.bio}`;
	card.appendChild(bioElement);

	//Finding the fav language
	const favoriteLanguage = languages.find(
		(language) => language.id === learner.favoriLanguageId
	);

	if (favoriteLanguage) {
		//create and append the favorite language
		const favoriteLanguageElement = document.createElement("p");
		const favoriteLanguageLink = document.createElement("span");

		favoriteLanguageLink.className = "language-link";
		favoriteLanguageLink.innerText = favoriteLanguage.name;
		favoriteLanguageLink.setAttribute("data-language-id", favoriteLanguage.id);
		favoriteLanguageElement.innertext = "Favorite Language: ";
		favoriteLanguageElement.appendChild(favoriteLanguageLink);
		card.appendChild(favoriteLanguageElement);

		//Create and append lang description
		const favoriteLanguageDescription = document.createElement("p");
		favoriteLanguageDescription.innerText = favoriteLanguage.description;
		card.appendChild(favoriteLanguageDescription);
	} else {
		//Handling data that may not exist
		const noLanguageExist = document.createElement("p");
		noLanguageExist.innerText = "Favorite language not found.";
		card.appendChild(noLanguageExist);
	}

	//create and append skills
	const skillsElement = document.createElement("p");
	skillsElement.innerText = "Skills: ";
	card.appendChild(skillsElement);

	const skillsList = document.createElement("ul");
	learner.skills.forEach((skill) => {
		const skillItem = document.createElement("li");
		skillItem.innerText = skill;
		skillsList.appendChild(skillItem);
	});
	card.appendChild(skillsList);

	//create and append email
	const emailElement = document.createElement("p");
	emailElement.innerText = `Email: ${learner.email}`;
	card.appendChild(emailElement);

	//create and append the location
	const locationElement = document.createElement("p");
	locationElement.innerText = (`Location: ${learner.location}`);

	//Adding CSS class for additional Styling
	card.classList.add("styled-card");

	//append the created card to the container in the DOM
	const container = document.getElementById("profile-container");
	container.appendChild(card);
}

//Event listener for the language links
document.addEventListener("click", (event) => {
	if (event.target.classList.contains("language-link")) {
		const languageId = parseInt(
			event.target.getAttribute("data-language-id"),
			10
		);
		fetchData().then((data) => {
			const language = data.languages.find((lang) => lang.id === languageId);
			if (language) {
				const languageInfo = document.getElementById("language-info");
				document.getElementById("language-name").innerText = language.name;
				document.getElementById("language-description").innerText =
					language.description;
				document.getElementById("language-link").href = language.mdnLink;
				languageInfo.classList.remove("hidden");
			}
		});
	}
});

createProfileCards();
