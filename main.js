const navBar = document.querySelector('#nav');
const closeBar = document.querySelector('#close_bar');
const menuOption = document.querySelector('.menu_options');
const search = document.querySelector('#search');
const searchBox = document.querySelector('.search_box');
const instructorSection = document.querySelector('.desktop_instructor');
const mobileInstructorSection = document.querySelector('.mobile_instructor');

navBar.addEventListener('click', () => {
  menuOption.classList.add('visible');
});
closeBar.addEventListener('click', () => {
  menuOption.classList.remove('visible');
});
search.addEventListener('click', () => {
  searchBox.classList.toggle('visible');
});

const featuredInstructor = [
  {
    name: 'John Doe',
    position: 'CEO of united creative common wealth industry',
    description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus neque repudiandae quas aspernatur architecto amet?',
    image: './assets/john-doe.jpg',
  },
  {
    name: 'Ariel Camus',
    position: 'The Founder and CEO of Microverse',
    description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus neque repudiandae quas aspernatur architecto amet?',
    image: './assets/ariel-camus1.jpg',
  },
  {
    name: 'Bill Gates',
    position: 'Co-founder of Microsoft Corp',
    description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus neque repudiandae quas aspernatur architecto amet?',
    image: './assets/bill-gate.jpg',
  },
  {
    name: 'Warren Buffet',
    position: 'Chairman and CEO of Berkshire Hathaway.',
    description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus neque repudiandae quas aspernatur architecto amet?',
    image: './assets/warren-buffet.jpg',
  },

  {
    name: 'Mark Zuckerberg',
    position: 'The co-founder and CEO of metaverse',
    description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus neque repudiandae quas aspernatur architecto amet?',
    image: './assets/mark-zukerberg.jpg',
  },
  {
    name: 'Elon Musk',
    position: 'Founder, CEO, and Chief Engineer at SpaceX; angel investor, CEO, and product architect of Tesla, Inc.',
    description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus neque repudiandae quas aspernatur architecto amet?',
    image: './assets/elon-musk.jpg',
  },
];

const mobileFeaturedInstructor = [
  {
    name: 'John Doe',
    position: 'CEO of united creative common wealth industry',
    description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus neque repudiandae quas aspernatur architecto amet?',
    image: './assets/john-doe.jpg',
  },
  {
    name: 'Mark Zuckerberg',
    position: 'The co-founder and CEO of metaverse',
    description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus neque repudiandae quas aspernatur architecto amet?',
    image: './assets/mark-zukerberg.jpg',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('header');
  header.classList.add('instructor_header');
  const h2 = document.createElement('h2');
  h2.textContent = 'Featured Instructors';
  header.appendChild(h2);
  const div = document.createElement('div');
  div.classList.add('underline');
  header.appendChild(div);
  mobileInstructorSection.appendChild(header);
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('instructors');
  mobileInstructorSection.appendChild(containerDiv);
  mobileFeaturedInstructor.forEach((instructor) => {
    containerDiv.insertAdjacentHTML('beforeend', `
      <article class="instructor">
        <div class="instructor_image">
          <div class="instructor_image_top">
            <img
              src="${instructor.image}"
              alt="${instructor.name}"
              width="100px"
              height="120px"
            />
          </div>
          <div class="instructor_image_bottom">
            <img
              src='./assets/background-images-dots.png'
              alt="logo"
              width="100px"
              height="100px"
            />
          </div>
          </div>
          <div class="instructor_details">
            <h3 class="instructor_name">${instructor.name}</h3>
            <em class="colored_paragraph">
              ${instructor.position}
            </em>
            <hr width="10%" />
            <p class="instructor_desc">
              ${instructor.description}
            </p>
          </div>
      </article>
    `);
  });
  const h4 = document.createElement('h4');
  h4.classList.add('more');
  h4.textContent = 'More';
  const i = document.createElement('i');
  i.classList.add('fa');
  i.classList.add('fa-chevron-down');
  h4.appendChild(i);
  instructorSection.appendChild(h4);
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('header');
  header.classList.add('instructor_header');
  const h2 = document.createElement('h2');
  h2.textContent = 'Featured Instructors';
  header.appendChild(h2);
  const div = document.createElement('div');
  div.classList.add('underline');
  header.appendChild(div);
  instructorSection.append(header);
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('instructors');
  instructorSection.appendChild(containerDiv);
  featuredInstructor.forEach((instructor) => {
    containerDiv.insertAdjacentHTML('beforeend', `
      <article class="instructor">
        <div class="instructor_image">
          <div class="instructor_image_top">
            <img
              src="${instructor.image}"
              alt="${instructor.name}"
              width="100px"
              height="120px"
            />
          </div>
          <div class="instructor_image_bottom">
            <img
              src='./assets/background-images-dots.png'
              alt="logo"
              width="100px"
              height="100px"
            />
          </div>
          </div>
          <div class="instructor_details">
            <h3 class="instructor_name">${instructor.name}</h3>
            <em class="colored_paragraph">
              ${instructor.position}
            </em>
            <hr width="10%" />
            <p class="instructor_desc">
              ${instructor.description}
            </p>
          </div>
      </article>
    `);
  });
  const h4 = document.createElement('h4');
  h4.classList.add('more');
  h4.textContent = 'More';
  const i = document.createElement('i');
  i.classList.add('fa');
  i.classList.add('fa-chevron-down');
  h4.appendChild(i);
  mobileInstructorSection.appendChild(h4);
});
