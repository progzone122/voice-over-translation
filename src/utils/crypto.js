export async function getHmacSha1(hmacKey, salt) {
  try {
    const utf8Encoder = new TextEncoder("utf-8");
    salt = utf8Encoder.encode(salt);
    const key = await window.crypto.subtle.importKey(
      "raw",
      utf8Encoder.encode(hmacKey),
      { name: "HMAC", hash: { name: "SHA-1" } },
      false,
      ["sign", "verify"],
    );
    const signature = await window.crypto.subtle.sign("HMAC", key, salt);
    return btoa(String.fromCharCode(...new Uint8Array(signature)));
  } catch (err) {
    console.error(err);
    return false;
  }
}
