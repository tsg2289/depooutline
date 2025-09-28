/**
 * Client-side encryption utilities for E2EE
 * Uses Web Crypto API with AES-GCM and PBKDF2
 */

const ALGORITHM = 'AES-GCM';
const KEY_LENGTH = 256;
const IV_LENGTH = 12;
const SALT_LENGTH = 16;
const ITERATIONS = 100000;

export interface EncryptedData {
  cipher: Uint8Array;
  iv: Uint8Array;
  salt: Uint8Array;
}

/**
 * Derive encryption key from passphrase using PBKDF2
 */
async function deriveKey(passphrase: string, salt: Uint8Array): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const passphraseKey = await crypto.subtle.importKey(
    'raw',
    encoder.encode(passphrase),
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt as BufferSource,
      iterations: ITERATIONS,
      hash: 'SHA-256',
    },
    passphraseKey,
    { name: ALGORITHM, length: KEY_LENGTH },
    false,
    ['encrypt', 'decrypt']
  );
}

/**
 * Encrypt plaintext with passphrase
 */
export async function encrypt(plaintext: string, passphrase: string): Promise<EncryptedData> {
  const encoder = new TextEncoder();
  const data = encoder.encode(plaintext);
  
  // Generate random salt and IV
  const salt = crypto.getRandomValues(new Uint8Array(SALT_LENGTH));
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH));
  
  // Derive key from passphrase
  const key = await deriveKey(passphrase, salt);
  
  // Encrypt data
  const cipher = await crypto.subtle.encrypt(
    { name: ALGORITHM, iv: iv as BufferSource },
    key,
    data
  );

  return {
    cipher: new Uint8Array(cipher),
    iv: iv,
    salt: salt,
  };
}

/**
 * Decrypt ciphertext with passphrase
 */
export async function decrypt(
  encryptedData: EncryptedData,
  passphrase: string
): Promise<string> {
  // Derive key from passphrase
  const key = await deriveKey(passphrase, encryptedData.salt);
  
  // Decrypt data
  const decrypted = await crypto.subtle.decrypt(
    { name: ALGORITHM, iv: encryptedData.iv as BufferSource },
    key,
    encryptedData.cipher as BufferSource
  );

  const decoder = new TextDecoder();
  return decoder.decode(decrypted);
}

/**
 * Convert EncryptedData to base64 strings for storage
 */
export function encryptedDataToBase64(data: EncryptedData): {
  cipher: string;
  iv: string;
  salt: string;
} {
  return {
    cipher: btoa(String.fromCharCode(...data.cipher)),
    iv: btoa(String.fromCharCode(...data.iv)),
    salt: btoa(String.fromCharCode(...data.salt)),
  };
}

/**
 * Convert base64 strings back to EncryptedData
 */
export function base64ToEncryptedData(data: {
  cipher: string;
  iv: string;
  salt: string;
}): EncryptedData {
  return {
    cipher: new Uint8Array(atob(data.cipher).split('').map(c => c.charCodeAt(0))),
    iv: new Uint8Array(atob(data.iv).split('').map(c => c.charCodeAt(0))),
    salt: new Uint8Array(atob(data.salt).split('').map(c => c.charCodeAt(0))),
  };
}

/**
 * Generate a secure random passphrase
 */
export function generatePassphrase(): string {
  const words = [
    'apple', 'brave', 'chair', 'dance', 'eagle', 'flame', 'grace', 'heart',
    'image', 'joker', 'knife', 'light', 'magic', 'night', 'ocean', 'peace',
    'queen', 'river', 'stone', 'tiger', 'unity', 'voice', 'water', 'youth'
  ];
  
  const passphrase = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    passphrase.push(words[randomIndex]);
  }
  
  return passphrase.join('-');
}

/**
 * Validate passphrase strength
 */
export function validatePassphrase(passphrase: string): {
  isValid: boolean;
  message: string;
} {
  if (passphrase.length < 8) {
    return {
      isValid: false,
      message: 'Passphrase must be at least 8 characters long',
    };
  }
  
  return {
    isValid: true,
    message: 'Passphrase is valid',
  };
}
