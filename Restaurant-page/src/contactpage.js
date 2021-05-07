function createSection(titleValue, sectionClass, data) {
  const section = document.createElement('section');
  const sectionTitle = document.createElement('h2');
  sectionTitle.classList.add("section-title");
  sectionTitle.textContent = titleValue;

  const body = document.createElement('div');
  body.classList.add(sectionClass);

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

    body.appendChild(htmlSection);
  });


  section.appendChild(sectionTitle);
  section.appendChild(body);


  switchContent(section);
}

function loadContactPage() {
  createSection("Contact Us - Meepo's bakery", "3-col",
    [
      { HTMLType: "h3", value:"This is a h3 title"},
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
