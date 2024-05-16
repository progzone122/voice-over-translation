import { yandexHmacKey } from "./config/config.js";

async function getSignature(body) {
  // Create a key from the HMAC secret
  const utf8Encoder = new TextEncoder();
  const key = await window.crypto.subtle.importKey(
    "raw",
    utf8Encoder.encode(yandexHmacKey),
    { name: "HMAC", hash: { name: "SHA-256" } },
    false,
    ["sign", "verify"],
  );
  // Sign the body with the key
  const signature = await window.crypto.subtle.sign("HMAC", key, body);
  // Convert the signature to a hex string
  return new Uint8Array(signature).reduce(
    (str, byte) => str + byte.toString(16).padStart(2, "0"),
    "",
  );
}

export { getSignature };
