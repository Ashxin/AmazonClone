const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () =>
{
  console.log(xhr.response);
});
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();
//xhr is an asynchronous code.
// setup the event listener first and trigger the event.
//status code that starts with 4 or 5 = failed
//if it starts with 4 its our problem, if its 5 its backends problem
//if it starts with 2 = success