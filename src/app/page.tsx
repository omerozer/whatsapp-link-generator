'use client'

import { useState, useCallback } from 'react'
import {
  normalizePhoneNumber,
  digitsOnly,
  isValidPhone,
  buildWhatsAppUrl,
} from '@/lib/utils'

const COUNTRY_CODES = [
  { value: '90', label: '+90 (Türkiye)' },
  { value: '1', label: '+1 (ABD/Kanada)' },
  { value: '44', label: '+44 (İngiltere)' },
  { value: '49', label: '+49 (Almanya)' },
  { value: '33', label: '+33 (Fransa)' },
  { value: '31', label: '+31 (Hollanda)' },
  { value: '34', label: '+34 (İspanya)' },
  { value: '39', label: '+39 (İtalya)' },
  { value: '7', label: '+7 (Rusya)' },
  { value: '971', label: '+971 (BAE)' },
  { value: '966', label: '+966 (Suudi Arabistan)' },
  { value: '994', label: '+994 (Azerbaycan)' },
  { value: '998', label: '+998 (Özbekistan)' },
  { value: '996', label: '+996 (Kırgızistan)' },
  { value: '993', label: '+993 (Türkmenistan)' },
  { value: '992', label: '+992 (Tacikistan)' },
]

const DEFAULT_BUTTON_TEXT = "WhatsApp'tan Yazın"
const DEFAULT_BUTTON_COLOR = '#25D366'

export default function Home() {
  const [countryCode, setCountryCode] = useState('90')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [buttonText, setButtonText] = useState(DEFAULT_BUTTON_TEXT)
  const [buttonColor, setButtonColor] = useState(DEFAULT_BUTTON_COLOR)
  const [generatedLink, setGeneratedLink] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copiedLink, setCopiedLink] = useState(false)
  const [copiedHtml, setCopiedHtml] = useState(false)

  const generateLink = useCallback(() => {
    setError(null)
    const cleaned = digitsOnly(normalizePhoneNumber(phone))
    const full = countryCode + cleaned

    if (!cleaned) {
      setError('Lütfen geçerli bir telefon numarası girin.')
      setGeneratedLink(null)
      return
    }

    if (!isValidPhone(full)) {
      setError('Telefon numarası en az 10, en fazla 15 rakam olmalıdır.')
      setGeneratedLink(null)
      return
    }

    setGeneratedLink(buildWhatsAppUrl(full, message || undefined))
  }, [countryCode, phone, message])

  const copyLink = useCallback(async () => {
    if (!generatedLink) return
    await navigator.clipboard.writeText(generatedLink)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }, [generatedLink])

  const escapeForHtml = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const htmlCode = generatedLink
    ? `<a href="${generatedLink}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:${buttonColor};color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">${escapeForHtml(buttonText)}</a>`
    : ''

  const copyHtml = useCallback(async () => {
    if (!htmlCode) return
    await navigator.clipboard.writeText(htmlCode)
    setCopiedHtml(true)
    setTimeout(() => setCopiedHtml(false), 2000)
  }, [htmlCode])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <div className="max-w-2xl mx-auto px-4 py-5">
          <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
            whatsapp-link-generator
          </h1>
        </div>
      </header>

      <main className="flex-1 max-w-2xl w-full mx-auto px-4 py-8">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              Ülke kodu
            </label>
            <select
              id="country"
              value={countryCode}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCountryCode(e.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              {COUNTRY_CODES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              Telefon numarası
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
              placeholder="555 123 45 67"
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Baştaki 0 ve boşluklar otomatik temizlenir.
            </p>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              Hazır mesaj (isteğe bağlı)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
              placeholder="Merhaba, bilgi almak istiyorum."
              rows={3}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
            />
          </div>

          <div>
            <label
              htmlFor="buttonText"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              Buton metni
            </label>
            <input
              id="buttonText"
              type="text"
              value={buttonText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setButtonText(e.target.value)}
              placeholder={DEFAULT_BUTTON_TEXT}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label
              htmlFor="buttonColor"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              Buton rengi
            </label>
            <div className="flex items-center gap-3">
              <input
                id="buttonColor"
                type="color"
                value={buttonColor}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setButtonColor(e.target.value)}
                className="h-10 w-14 rounded border border-slate-300 dark:border-slate-600 cursor-pointer bg-white"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400 font-mono">
                {buttonColor}
              </span>
            </div>
          </div>

          {error && (
            <div
              role="alert"
              className="rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-4 py-3 text-sm"
            >
              {error}
            </div>
          )}

          <button
            type="button"
            onClick={generateLink}
            className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 transition-colors"
          >
            Link oluştur
          </button>

          {generatedLink && (
            <div className="space-y-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-4">
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  WhatsApp linki
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={generatedLink}
                    className="flex-1 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-3 py-2 text-sm"
                  />
                  <button
                    type="button"
                    onClick={copyLink}
                    className="rounded-lg bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-800 dark:text-slate-100 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors"
                  >
                    {copiedLink ? 'Kopyalandı!' : 'Kopyala'}
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Siteye eklemek için HTML kodu
                </p>
                <pre className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 p-3 text-xs text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-all">
                  {htmlCode}
                </pre>
                <button
                  type="button"
                  onClick={copyHtml}
                  className="mt-2 rounded-lg bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-800 dark:text-slate-100 px-4 py-2 text-sm font-medium transition-colors"
                >
                  {copiedHtml ? 'HTML kopyalandı!' : 'HTML kodu kopyala'}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-700 mt-auto py-4">
        <div className="max-w-2xl mx-auto px-4 text-center text-sm text-slate-500 dark:text-slate-400">
          Geliştirici: Ömer Özer
        </div>
      </footer>
    </div>
  )
}
