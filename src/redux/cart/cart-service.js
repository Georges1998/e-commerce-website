export const addItemToCard = (cardItems, cardItemToAdd) => {
  const itemExists = cardItems.find(
    (element) => element.id === cardItemToAdd.id
  );

  if (itemExists) {
    return cardItems.map((item) =>
      cardItemToAdd.id === item.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...cardItems, { ...cardItemToAdd, quantity: 1 }];
  }
};
