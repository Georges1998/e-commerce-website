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
export const removeItemFromCart = (cardItems, cardItemToRemove) => {
  const itemExists = cardItems.find(
    (element) => element.id === cardItemToRemove.id
  );

  if (itemExists) {
    var arr = cardItems.map((item) =>
      cardItemToRemove.id === item.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    return arr.filter((item) => item.quantity !== 0);
  } else {
    return cardItems;
  }
};
