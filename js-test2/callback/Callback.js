let myProjects = [
  {
    title: "clock",
    technologies: "JavaScript",
  },
  {
    title: "memory",
    technologies: "React",
  },
];

function show() {
  myProjects.forEach((project) => {
    console.log(project.title, project.technologies);
  });
}
show();
//promise
function add() {
  return new Promise((resolve, reject) => {
    newProject = {
      title: "foodBill",
      technologies: "nodejs",
    };
    setTimeout(() => {
      myProjectsLength = myProjects.length;
      myProjects.push(newProject);
      if (myProjects.length == myProjectsLength + 1) {
        resolve("myProjects added successfully!");
      } else {
        reject("Failed to add myProjects!");
      }
    }, 500);
  });
}
//then and catch promise
add().then(data=>console.log(data))
.catch(error=>console.log(error));
