function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Roster</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      />
  
      <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
      <header>
        <h1>My team</h1>
      </header>
      <div class="roster">
        ${generateCards(data)}
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
        integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
        crossorigin="anonymous"
      ></script>
      <script src="../index.js"></script>
    </body>
  </html>
  `;
}

function generateCards(data) {
  let str = ``;
  str += `\n<div class="card" style="width: 18rem">
  <div class="card-header">
    <h2>${data.manager.name}</h2>
    <h4>Manager</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.manager.employeeID}</li>
    <li class="list-group-item">Email: <a href="mailto:${data.manager.email}">${data.manager.email}</a></li>
    <li class="list-group-item">Office Number: ${data.manager.officeNumber}</li>
  </ul>
</div>`;

  for (e of data.engineers) {
    str += `\n<div class="card" style="width: 18rem">
    <div class="card-header">
      <h2>${e.name}</h2>
      <h4>Engineer</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${e.employeeID}</li>
      <li class="list-group-item">Email: <a href="mailto:${e.email}">${e.email}</a></li>
      <li class="list-group-item">Github: <a href="https://github.com/${e.githubUsername}" target="_blank">${e.githubUsername}</a></li>
    </ul>
  </div>`;
  }

  for (i of data.interns) {
    str += `\n<div class="card" style="width: 18rem">
    <div class="card-header">
      <h2>${i.name}</h2>
      <h4>Intern</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${i.employeeID}</li>
      <li class="list-group-item">Email: <a href="mailto:${i.email}">${i.email}</a></li>
      <li class="list-group-item">School: ${i.school}</li>
    </ul>
  </div>`;
  }

  return str;
}

module.exports = { generateHTML };
