# WhatsApp Link Oluşturucu

**whatsapp-link-generator**, telefon numarası ve isteğe bağlı hazır mesaj ile tıklanabilir WhatsApp (wa.me) bağlantısı oluşturan ve sitenize ekleyebileceğiniz HTML buton kodunu üreten ücretsiz bir mikro-SaaS araçtır.

**Canlı demo:** [whatsapp-link-generator-nu.vercel.app](https://whatsapp-link-generator-nu.vercel.app/)

---

## Ne İşe Yarar?

- Girilen telefon numarasına doğrudan WhatsApp sohbeti başlatan **wa.me** linki üretir.
- Hazır mesaj (ör. "Merhaba, ilanınız hakkında bilgi almak istiyorum") ekleyerek müşterinin doğrudan bu metinle yazmasını sağlar.
- Oluşan linki tek tıkla kopyalayabilirsiniz.
- Sitenize yapıştırabileceğiniz, renk ve metni özelleştirilebilir **HTML buton kodu** verir.

Tüm işlemler tarayıcıda, sunucuya veri göndermeden (client-side) yapılır; numara ve mesajınız dışarıya iletilmez.

---

## Kimler Kullanmalı?

- **Emlakçılar:** İlan sayfalarında "WhatsApp’tan sor" butonu
- **Klinikler / Hastaneler:** Randevu ve bilgi için tek tıkla WhatsApp
- **Restoranlar / Kafeler:** Sipariş veya rezervasyon talebi
- **E-ticaret / Mağazalar:** Müşteri hizmetleri ve sipariş takibi
- **Küçük işletmeler / Freelancer’lar:** Web sitelerinde hızlı iletişim
- **Etkinlik / Organizasyon:** Kayıt veya bilgi almak isteyenler için link

---

## Özellikler

- Ülke kodu seçimi (varsayılan: +90 Türkiye)
- Telefon numarası temizleme (baştaki 0 ve boşluklar otomatik kaldırılır)
- Türkçe karakterler dahil hazır mesaj (URL encode ile güvenli link)
- Özelleştirilebilir buton metni ve rengi
- wa.me linkini kopyalama
- Siteye eklenebilir HTML buton kodu ve kopyalama
- Hatalı numara girişinde kullanıcı uyarısı
- Responsive, mobil uyumlu arayüz
- Basit favicon ve SEO uyumlu sayfa başlığı / açıklama

---

## Kurulum

### Gereksinimler

- Node.js 18+ ve npm

### Adımlar

1. Projeyi klonlayın veya indirin:

```bash
git clone <repo-url>
cd whatsapp-link-generator
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

4. Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

### Production build

```bash
npm run build
npm start
```

---

## Kullanım

1. **Ülke kodu** alanından numaranızın ülke kodunu seçin (varsayılan: +90).
2. **Telefon numarası** alanına numarayı girin (0555 123 45 67 gibi; baştaki 0 ve boşluklar otomatik temizlenir).
3. İsterseniz **Hazır mesaj** alanına açılışta gidecek metni yazın (Türkçe karakterler desteklenir).
4. **Buton metni** ve **Buton rengi** ile HTML butonunun görünümünü özelleştirin.
5. **Link oluştur** butonuna tıklayın.
6. Oluşan **WhatsApp linkini** veya **HTML kodunu** kopyalayıp sitenizde kullanın.

---

## SEO Anahtar Kelimeler

WhatsApp link oluşturucu, wa.me link, WhatsApp butonu, WhatsApp sohbet linki, siteye WhatsApp butonu ekleme, tıklanabilir WhatsApp linki, hazır mesaj WhatsApp, Türkiye WhatsApp link.

---

## Lisans

Bu proje MIT lisansı altında sunulmaktadır. Ticari veya kişisel projelerinizde özgürce kullanabilirsiniz.

---

**Geliştirici:** [Ömer Özer](https://omersoft.com) – Freelance Web Developer
