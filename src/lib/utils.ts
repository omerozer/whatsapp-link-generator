/**
 * Telefon numarasını temizler: baştaki 0 ve boşlukları kaldırır
 */
export function normalizePhoneNumber(phone: string): string {
  return phone.replace(/\s/g, '').replace(/^0+/, '')
}

/**
 * Sadece rakamları döndürür (ülke kodu + numara)
 */
export function digitsOnly(value: string): string {
  return value.replace(/\D/g, '')
}

/**
 * Numaranın geçerli olup olmadığını kontrol eder (en az 10 rakam)
 */
export function isValidPhone(digits: string): boolean {
  return digits.length >= 10 && digits.length <= 15
}

/**
 * Mesajı wa.me için URL-safe encode eder (Türkçe karakterler dahil)
 */
export function encodeMessage(text: string): string {
  return encodeURIComponent(text.trim())
}

/**
 * wa.me linki oluşturur
 */
export function buildWhatsAppUrl(phoneDigits: string, message?: string): string {
  const base = `https://wa.me/${phoneDigits}`
  if (message) {
    return `${base}?text=${encodeMessage(message)}`
  }
  return base
}
