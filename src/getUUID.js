function getUUID() {
  return "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e, n) => {
    return (e === "x" ? (16 * Math.random()) | 0 : (3 & n) | 8).toString(16);
  });
}

export { getUUID };
