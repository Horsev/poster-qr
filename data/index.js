const settings = {
  logo: "/img/keds512.webp",
  name: "Паб Кеди",
  table: 30,
  url: "http://ps.me",
};

const menu = [
  { name: "Меню", icon: "book-open-cover" },
  {
    name: "Оплата",
    icon: "credit-card",
    description: "Перевіряйте та сплачуйте рахунок безконтактно",
  },
  {
    name: "Доставлення",
    icon: "moped",
    description: "Доставлення до ваших дверей",
  },
];

const getPageData = async () => ({
  settings,
  menu,
});

export default getPageData;
