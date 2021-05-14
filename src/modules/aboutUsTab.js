export default function aboutUsTab() {
    const aboutUs = document.createElement('div');
    aboutUs.setAttribute('id', 'about-us');

    const aboutUsTitleContainer = document.createElement('div');
    aboutUsTitleContainer.classList.add('about-us-title');
    const aboutUsTitleEl = document.createElement('h1');
    aboutUsTitleEl.classList.add('title');
    aboutUsTitleEl.textContent = 'About Us';
    aboutUsTitleContainer.appendChild(aboutUsTitleEl);
    aboutUs.appendChild(aboutUsTitleContainer);

    aboutUs.appendChild(sections('section-light', 'Section One', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sunt iusto unde ducimus sint impedit, porro optio amet voluptas quas nulla aut, doloribus accusantium suscipit enim nam. Numquam totam quos pariatur, unde fugit reiciendis tempora omnis ut, praesentium, error atque temporibus. Corporis voluptates repellendus, tempore vel magni porro consequatur quae reiciendis eum optio eligendi vitae excepturi? Commodi assumenda placeat quas. Incidunt consequuntur culpa vitae voluptates facere ratione sint iure delectus ipsa ut, pariatur expedita repellendus, consequatur odit est dicta eaque nam molestiae sit eligendi quis voluptate repudiandae. Magnam, laudantium quae eligendi nihil, facere deleniti consequuntur, enim voluptates obcaecati veritatis incidunt.'))
    aboutUs.appendChild(pimg('pimg1', 'Image One Text'));


    aboutUs.appendChild(sections('section-dark', 'Section Two', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore laboriosam expedita, repellat accusamus pariatur maiores molestias ut porro? Voluptatem, doloremque repudiandae! Aut, ullam? Iusto, vero, eligendi porro aspernatur magni voluptatibus assumenda voluptatem ea enim repellendus laboriosam, tempore animi nulla ipsum? Culpa dolore consequuntur deleniti pariatur voluptatibus enim, recusandae atque aspernatur sint quam saepe maiores esse impedit cumque maxime ut laborum officiis ratione voluptatum a, explicabo inventore obcaecati placeat animi. Sequi vitae aperiam facere accusantium earum quia modi nobis nostrum eos est suscipit ad maiores excepturi sed porro officiis voluptas, iste, sint nemo dolorum reiciendis voluptates optio omnis. Dolore, veritatis.'))
    aboutUs.appendChild(pimg('pimg2', 'Image Two Text'));

    aboutUs.appendChild(sections('section-dark', 'Section-Three', 'Tempore laboriosam expedita, repellat accusamus pariatur maiores molestias ut porro? Voluptatem, doloremque repudiandae! Aut, ullam? Iusto, vero, eligendi porro aspernatur magni voluptatibus assumenda voluptatem ea enim repellendus laboriosam, tempore animi nulla ipsum? Culpa dolore consequuntur deleniti pariatur voluptatibus enim, recusandae atque aspernatur sint quam saepe maiores esse impedit cumque maxime ut laborum officiis ratione voluptatum a, explicabo inventore obcaecati placeat animi. Sequi vitae aperiam facere accusantium earum quia modi nobis nostrum eos est suscipit ad maiores excepturi sed porro officiis voluptas, iste. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, sapiente!'));

    return aboutUs;
}

function pimg(className, text) {
    const pimg = document.createElement('div');
    pimg.classList.add(`${className}`);
    pimg.innerHTML = `
        <div class="ptext">
        <span class="border" id="trans">${text}</span>
        </div>`;
    return pimg;
}

function sections(className, title, text) {
    const section = document.createElement('section');
    section.classList.add('section', `${className}`);
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = `${title}`;
    const sectionText = document.createElement('p');
    sectionText.textContent = `${text}`;
    section.appendChild(sectionTitle);
    section.appendChild(sectionText);
    return section;
}