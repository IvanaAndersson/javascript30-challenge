const buttonToClick = document.getElementById("loadRepos");
const input = document.getElementById("username");
const listOfRepos = document.getElementById("repos");

buttonToClick.addEventListener("click", loadRepos2);

function drawHTML(data) {
  return data
    .map(x => {
      let li = document.createElement("LI");
      let a = document.createElement("A");
      a.setAttribute("href", `${x[1]}`);
      a.appendChild(document.createTextNode(`${x[0]}`));
      // li.appendChild(document.createTextNode(`${x[0]}`));
      li.appendChild(a);

      return li;
    })
    .map(li => listOfRepos.appendChild(li));
}

function processData(data) {
  return data.map(x => [x.full_name, x.html_url]);
}

function handleErrors(x) {
  if (x.documentation_url && x.message) {
    throw new Error(`${x.message} -> ${x.documentation_url}`);
  }
  return x;
}

//first version with .then
function loadRepos() {
  fetch(`https://api.github.com/users/${input.value}/repos`)
    .then(res => {
      //in here we can handle different status code errors if needed
      //here we can include errors, which are not going to send back documentation url,
      //since we are not reaching the API at all
      if (!res.ok && res.status !== 404 && res.status >= 500) {
        throw new Error(`${res.status} | ${res.statusText}`);
      }
      return res.json();
    })
    .then(handleErrors)
    .then(processData)
    .then(drawHTML)
    .catch(console.error);
}
//second version with async await
async function loadRepos2() {
  try {
    //we are awaiting the result from the fetch
    //this will unpack the Promise
    const response = await fetch(
      `https://api.github.com/users/${input.value}/repos`
    );
    const json = await response.json();
    handleErrors(json);
    const fullNames = processData(json);
    drawHTML(fullNames);
  } catch (err) {
    console.error;
  }
}
