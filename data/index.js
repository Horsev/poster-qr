const settings = {
  logo: "/img/keds512.webp",
  name: "Паб Кеди",
  table: 30,
  url: "http://ps.me",
};

const menu = [
  { name: "Меню", icon: "fa-book-open-cover", description: "" },
  {
    name: "Оплата",
    icon: "fa-credit-card",
    description: "Перевіряйте та сплачуйте рахунок безконтактно",
  },
  {
    name: "Доставлення",
    icon: "fa-moped",
    description: "Доставлення до ваших дверей",
  },
];

const pageData = () => ({
  settings,
  menu,
});

export default pageData;
