const menuArr = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://images.unsplash.com/photo-1515467705959-1142c6a92b19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=643&q=80",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://images.unsplash.com/photo-1593272280654-b56e97e002e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    }
];

export default function menuTab() {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('menu-title');

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('title');
    menuTitle.textContent = 'Menu';
    titleContainer.appendChild(menuTitle);
    menu.appendChild(titleContainer);

    const menuContent = document.createElement('section');
    menuContent.setAttribute('id', 'menu-content');
    menuContent.innerHTML = menuArr.map(item => {
        return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="">
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
        </article>`
    }).join('');


    menu.appendChild(menuContent);

    return menu;
}