const MENU = [
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

const getEndpoint = (clientID) =>
  `https://assets.codepen.io/1959313/${clientID}.json`;

const getHttpError = ({ status }) => `HTTP error! Status: ${status}`;

const getClientData = async (clientID) => {
  const endpoint = getEndpoint(clientID);
  try {
    const response = await fetch(endpoint);
    const httpError = getHttpError(response);

    if (!response.ok) {
      throw new Error(httpError);
    }

    const settings = await response.json();

    return { settings, menu: MENU };
  } catch ({ message }) {
    return { message, isError: true };
  }
};

export default getClientData;
