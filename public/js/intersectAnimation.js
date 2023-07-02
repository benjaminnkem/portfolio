const toDown = document.querySelectorAll(".toDown");
const toTop = document.querySelectorAll(".toTop");
const blur = document.querySelectorAll(".blurApp");
// const scaleDown = document.querySelectorAll(".scaleDown");
// const scaleUp = document.querySelectorAll(".scaleUp");

const topToDown = new IntersectionObserver((entry) => {
  entry.forEach((entries) => {
    if (entries.isIntersecting) {
      entries.target.classList.remove("topDownStyle");
    }
  });
});

const downToTop = new IntersectionObserver((entry) => {
  entry.forEach((entries) => {
    if (entries.isIntersecting) {
      entries.target.classList.remove("downTopStyle");
    }
  });
});

const blurAppearObserve = new IntersectionObserver((entry) => {
  entry.forEach((entries) => {
    if (entries.isIntersecting) {
      entries.target.classList.remove("blurThenAppear");
    }
  });
});

// const scaleDownObserver = new IntersectionObserver((entry) => {
//   entry.forEach((entries) => {
//     if (entries.isIntersecting) {
//       entries.target.classList.remove("scaleDownStyle");
//     }
//   });
// });

// const scaleUpObserver = new IntersectionObserver((entry) => {
//   entry.forEach((entries) => {
//     if (entries.isIntersecting) {
//       entries.target.classList.remove("scaleUpStyle");
//     }
//   });
// });

toDown.forEach((el) => topToDown.observe(el));
toTop.forEach((el) => downToTop.observe(el));
blur.forEach((el) => blurAppearObserve.observe(el));
// scaleDown.forEach((el) => scaleDownObserver.observe(el));
