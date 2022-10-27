async function firstSixIncomplete(num) {
  const promise = await fetch("http://jsonplaceholder.typicode.com/todos");

  const result = await promise.json();

  const incomplete = result.filter((elem) => !elem.completed).slice(0, 6);

  console.log(incomplete);
}

firstSixIncomplete(6);
