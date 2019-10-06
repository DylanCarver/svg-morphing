let toggle = false;
const moonPath =
  "M98.5213 49.2771C98.5213 76.3569 76.5688 98.3094 49.489 98.3094C22.4092 98.3094 0.456726 76.3569 0.456726 49.2771C0.456726 22.1974 22.4092 0.244873 49.489 0.244873C25.0523 31.2007 55.9875 76.6056 98.5213 49.2771Z";
const sunPath =
  "M99.0323 50C99.0323 77.0798 77.0798 99.0323 50 99.0323C22.9202 99.0323 0.967712 77.0798 0.967712 50C0.967712 22.9202 22.9202 0.967743 50 0.967743C77.0798 0.967743 99.0323 22.9202 99.0323 50Z";
const darkMode = document.querySelector("#darkMode");

darkMode.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  });

  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }]
    })
    .add(
      {
        targets: "#darkMode",
        rotate: toggle ? -80 : 0
      },
      "-= 750"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "#eee" : "#333",
        color: toggle ? "#333" : "#fff"
      },
      "-=750"
    );
  toggle = !toggle;
});
