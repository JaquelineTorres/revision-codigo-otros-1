/* Se toma el nombre del HTML*/
const $n = document.getElementById("name").innerHTML;

// Obtener los elementos del DOM donde queremos mostrar los datos
const userNameElement = document.getElementById('user-name');
const userAvatarElement = document.getElementById('user-avatar');

/* const $b = document.querySelector('.blog');
const $l = document.querySelector('.location'); */

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users/${$n}`;

/* wait necesita una función asyc */
/* async function displayUser(url) {

  try {
    $n.textContent = 'cargando...';
    const response = await fetch(url);
    console.log(data);
    $n.textContent = '${data.name}';
    $b.textContent = '${data.blog}';
    $l.textContent = '${data.location}';
  } catch (error) {
    console.error(`Algo salió mal: ${error}`);
  }

} */

/* function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  err.textContent = `Algo salió mal: ${err}`
}
*/
//displayUser(baseEndpoint); 


/* Se refactorizó la función displayUser */
const displayUser = async (url) => {
  try {
    //console.log(url);
    const resolve = await fetch(url);
    const data = await resolve.json();
    //console.log(data.name);
    //console.log(data.avatar_url);
    userNameElement.textContent = data.name;
    userAvatarElement.src = data.avatar_url;
  } catch (exception) {
    console.error(exception)
  }
};

displayUser(usersEndpoint);
