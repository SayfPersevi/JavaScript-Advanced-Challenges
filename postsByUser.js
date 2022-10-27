async function postsByUser(uId) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const result = await response.json();

  const posts = result.filter((elem) => elem.userId === uId);

  console.log(posts);
}

postsByUser(6);
