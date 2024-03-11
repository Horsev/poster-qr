const getEndpoint = (id) => `https://assets.codepen.io/1959313/${id}.json`;

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

const getPageData = async (clientID) => {
  const ENDPOINT = getEndpoint(clientID);
  try {
    const response = await fetch(ENDPOINT);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const settings = await response.json();

    return { settings, menu };
  } catch ({ message }) {
    return { message, isError: true };
  }
};

export default getPageData;
