const welcome = () => console.log("Suryakaran");

const wish = () => console.log("How are you!");

const msg = () => {
  console.log("Hey");
  setTimeout(wish, 5000);
  //setTimeout(wish, 0);  it will excute at that time only because time is 0 and dosnt have to wait
  welcome();
};

msg();
