async function getData(file) {
	const response = await fetch(file);
	if (!response.ok) {
		throw new Error(`Failed to fetch ${file}: ${response.statusText}`);
	}
	return response.json();
}

function getHardSkillsMap(hardSkills) {
	return new Map(hardSkills.map((skill) => [skill.id, skill]));
}

function join(projects, skills) {
	projects.forEach((project) => {
		project.tags = project.tags.map((tagId) => skills.get(tagId).name);
	});
}

function displayProjects(projects) {
	const ul = document.getElementById("projects").lastElementChild;
	projects.forEach((project) => {
		const li = document.createElement("li");
		li.className = "card project-card";
		const title = document.createElement("h5");
		title.className = "title";
		title.innerHTML = project.title;
		const desc = document.createElement("p");
		desc.className = "proejct-description";
		desc.innerHTML = project.description;
		const tags = document.createElement("div");
		tags.className = "flex justify-evenly";
		tags.append(
			...project.tags.map((tag) => {
				const p = document.createElement("p");
				p.innerHTML = tag;
				return p;
			})
		);
		li.append(title, desc, tags);
		ul.appendChild(li);
	});
}

function createSkillCard(skill, index) {
	const cols = 4;
	const order = {
		0: 2,
		1: 3,
		2: 1,
		3: 4,
	};
	const li = document.createElement("li");
	li.className = `card skill-card mx-2`;
	const title = document.createElement("h5");
	title.className = "title";
	title.innerHTML = skill.name;
	li.appendChild(title);
	return li;
}

function displaySkills(skills) {
	const softUl = document.getElementById("soft-skills");
	const hardUl = document.getElementById("hard-skills");
	softUl.append(
		...skills.soft.map((skill, index) => {
			return createSkillCard(skill, index);
		})
	);
	hardUl.append(
		...skills.hard.map((skill, index) => {
			return createSkillCard(skill, index);
		})
	);
}

(async function main() {
	try {
		// Fetch skills and projects concurrently
		const [skills, projects] = await Promise.all([
			getData("skills.json"),
			getData("projects.json"),
		]);
		const hardSkillsById = getHardSkillsMap(skills.hard);
		join(projects, hardSkillsById);
		displayProjects(projects);
		displaySkills(skills);
	} catch (error) {
		console.error("Error:", error.message);
	}
})();
