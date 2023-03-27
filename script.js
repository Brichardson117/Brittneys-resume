function projects() {
  let projects = [
    {
      projectName: "Crypto Watch",
      repo: "https://github.com/Brichardson117/Crypto-Watch",
      deployed: "https://brichardson117.github.io/Crypto-Watch/",
      description:
        "Website to get monitor cryptocurrency values and get the latest on crypto. Built with a team of two other advisors using HTML, CSS, Bulma, JavaScript, and Reddit and Coincap API",
    },
    {
      projectName: "Weather App",
      repo: "https://github.com/Brichardson117/redesigned-octo-journey",
      deployed: "https://brichardson117.github.io/redesigned-octo-journey/",
      description:
        "Website to get the current weather and the forecast for a given location. built using HTML, CSS, JavaScript, Open Weather API, and Bootstrap",
    },
    {
      projectName: "E-commerce backend",
      repo: "https://github.com/Brichardson117/improved-bassoon",
      deployed: "https://youtu.be/Yu8h0E0yCIc",
      description:
        "a command-line application to view, add, update and remove products for a store",
    },
    {
      projectName: "Crypto Watch",
      repo: "https://github.com/Brichardson117/Crypto-Watch",
      deployed: "https://brichardson117.github.io/Crypto-Watch/",
      description:
        "Website to get monitor cryptocurrency values and get the latest on crypto. Built with a team of two other advisors using HTML, CSS, Bulma, JavaScript, and Reddit and Coincap API",
    },
  ];

  for (let i = 0; i < projects.length; i++) {
    let projectDiv = document.createElement("div");

    let projectName = document.createElement("h4");
    projectName.textContent = `${projects[i].projectName}`;

    let projectDescription = document.createElement("p");
    projectDescription.textContent = `${projects[i].description}`;

    let projectRepo = document.createElement("a");
    projectRepo.innerHTML = `${projects[i].projectName} repo`;
    projectRepo.setAttribute("href", `${projects[i].repo}`);
    projectRepo.setAttribute("target", "_blank");

    let projectDeployed = document.createElement("a");
    projectDeployed.innerHTML = `${projects[i].projectName} deployed or demo link`;
    projectDeployed.setAttribute("href", `${projects[i].deployed}`);
    projectDeployed.setAttribute("target", "_blank");

    console.log(projectName, projectDescription, projectRepo, projectDeployed);

    projectDiv.append(
      projectName,
      projectDescription,
      projectRepo,
      projectDeployed
    );

    document.querySelector("#displayProjects").append(projectDiv);
  }
}

projects();
