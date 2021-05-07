const contactPageContent = () => '<h1>Contact us - the meepo bakery</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat elementum ipsum eget posuere. Morbi laoreet urna varius justo cursus sodales. Nam accumsan cursus ligula, a fringilla neque ullamcorper quis. Vestibulum porta cursus viverra. Aenean vel dui accumsan, malesuada turpis efficitur, faucibus sapien. Curabitur pharetra mattis ipsum. Vestibulum bibendum vestibulum dictum. Integer dignissim bibendum enim, id dictum diam accumsan sed. Sed tempor cursus suscipit.In suscipit dui quis dictum efficitur.</p><div class="two-col"><img src="https://source.unsplash.com/random/600x600/?abstract"><img src="https://source.unsplash.com/random/600x600/?abstract"></div><div class="three-col"><img src="https://source.unsplash.com/random/600x600/?abstract"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat elementum ipsum eget posuere. Morbi laoreet urna varius justo cursus sodales. Nam accumsan cursus ligula, a fringilla neque ullamcorper quis. Vestibulum porta cursus viverra. Aenean vel dui accumsan, malesuada turpis efficitur, faucibus sapien. Curabitur pharetra mattis ipsum. Vestibulum bibendum vestibulum dictum. Integer dignissim bibendum enim, id dictum diam accumsan sed. Sed tempor cursus suscipit.</p><img src="https://source.unsplash.com/random/600x600/?abstract"></div>'

function createSection(titleValue, data) {
  const section = document.createElement('section');
  section.classList.add("section");

  const title = document.createElement('h1');
  title.classList.add("section-title");
  title.textContent = titleValue;
  section.appendChild(title);

  data.forEach(element => {
    const htmlSection = document.createElement(element.HTMLType);
    if(element.class && !element.class.length == 0) {
      htmlSection.classList.add(element.class);
    }

    if(element.HTMLType == "img") {
      htmlSection.setAttribute("alt", element.value);
      htmlSection.setAttribute("src", element.src);
    } else {
      htmlSection.textContent = element.value;
    }

    section.appendChild(htmlSection);
  });

  switchContent(section);
}

function loadContactPage() {
  createSection("Contact Us - Meepo's bakery",
    [
      { HTMLType: "h2", value:"This is a h2 title"},
      { HTMLType: "p", value:"This is some example text over here", class:"" },
      { HTMLType: "img", src:"https://source.unsplash.com/random/600x600/?abstract", value:"This is some example text over here", class:"" },
    ]
  );
}

function switchContent(element) {
  document.getElementById("content").innerHTML = "";
  document.getElementById("content").appendChild(element);
}

export { loadContactPage }
