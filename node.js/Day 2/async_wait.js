async function func() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });
  console.log("Suryakaran");
  let result = await promise;

  console.log(result);
}

func();
