goTo = (keyword) => {
  const identifier = "#" + keyword;
  const portfolio = document.querySelector(identifier);
  portfolio.scrollIntoView({ behavior: "smooth" });
};

scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("header").style.fontSize = "16px";
  } else {
    document.getElementById("header").style.fontSize = "40px";
  }
};
