function getUUID(isLower) {
  const randomBytes = crypto.getRandomValues(new Uint8Array(31));
  let byteIndex = 0;
  const uuid = ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (c) =>
    (c ^ (randomBytes[byteIndex++] & (15 >> (c / 4)))).toString(16),
  );
  return isLower ? uuid : uuid.toUpperCase();
}

export { getUUID };
