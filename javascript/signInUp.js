function toggleSignUp() {
  const h1 = document.getElementById("signIn-Up-hd1");
  const h2 = document.getElementById("signIn-Up-hd2");
  const h3 = document.getElementById("signIn-Up-hd3");
  const h4 = document.getElementById("signIn-Up-hd4");
  h1.classList.toggle("d-none");
  h1.classList.toggle("fIn");
  h2.classList.toggle("d-none");
  h2.classList.toggle("fOut");
  h3.classList.toggle("d-none");
  h3.classList.toggle("fOut");
  h4.classList.toggle("d-none");
  h4.classList.toggle("fIn");
}

function toggleSignIn() {
  const h1 = document.getElementById("signIn-Up-hd1");
  const h2 = document.getElementById("signIn-Up-hd2");
  const h3 = document.getElementById("signIn-Up-hd3");
  const h4 = document.getElementById("signIn-Up-hd4");
  h1.classList.toggle("d-none");
  h1.classList.toggle("fOut");
  h2.classList.toggle("d-none");
  h2.classList.toggle("fIn");
  h3.classList.toggle("d-none");
  h3.classList.toggle("fIn");
  h4.classList.toggle("d-none");
  h4.classList.toggle("fOut");
}

function clickSignInButton() {
  const signInBtn = document.getElementById("bg-sign-in")

  if (signInBtn.classList.contains("animationOffSignIn")) {
    signInBtn.classList.remove("animationOffSignIn")
    signInBtn.classList.toggle("animationSignIn")
  }
  if (signInBtn.classList.contains("animationSignIn")) {
    signInBtn.classList.remove("animationSignIn")
    signInBtn.classList.toggle("animationOffSignIn")
  }

  signInBtn.classList.toggle("animationSignIn")

  signInBtn.classList.toggle("disable-scroll-y")
  document.body.style.overflowY = "auto";

  if (signInBtn.classList.contains("disable-scroll-y")) {
    document.body.style.overflowY = "hidden";
  }

}