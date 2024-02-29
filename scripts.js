let mos = document.querySelectorAll(".saal");

mos.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    this.style.backgroundColor = "yellow";
    this.style.color = "#fff";
    this.style.borderRadius = "20px";
    this.style.transition = "0.3s";
  });

  element.addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
    this.style.color = "";
    this.style.borderRadius = "";
    this.style.transition = "";
  });
});
