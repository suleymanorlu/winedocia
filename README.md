# 🍷 Winedocia - Wine Consultancy & Training Services

Kapadokya'da şarap danışmanlığı, tadımları ve profesyonel eğitim hizmetleri sunan modern danışmanlık şirketi web sitesi.

## 📋 Proje Hakkında

**Winedocia**, Kapadokya bölgesinde şarap kültürünü yaygınlaştırmak ve profesyonel danışmanlık hizmetleri sunmak için kurulmuştur. 

Hizmetlerimiz:
- 🍷 **Şarap Tadımları** - Profesyonel sommelierler eşliğinde tadım deneyimleri
- 🏨 **Otel & Restoran Danışmanlığı** - Şarap seçimi ve yönetimi hizmetleri
- 🍾 **Bar & Servis Eğitimleri** - Profesyonel personel eğitim programları
- 🏛️ **Wine House & Restoran** - Gelecek hedefleri (yakında açılacak)

## 🚀 Başlangıç

### Gereksinimleri
- Modern bir web tarayıcısı (Chrome, Firefox, Safari, Edge)
- İnternet bağlantısı

### Kurulum
1. Repository'yi klonlayın
```bash
git clone https://github.com/suleymanorlu/winedocia.git
cd winedocia
```

2. `index.html` dosyasını tarayıcıda açın
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Veya bir local server kullanabilirsiniz:
```bash
# Python 3
python -m http.server 8000

# Node.js (npm i -g http-server)
http-server
```

Daha sonra `http://localhost:8000` adresine gidin.

## 📁 Proje Yapısı

```
winedocia/
├── index.html       # Ana HTML dosyası
├── style.css        # CSS stil dosyası
├── script.js        # JavaScript işlevselliği
└── README.md        # Bu dosya
```

## 🎨 Özellikler

- ✅ **Duyarlı Tasarım** - Mobil, tablet ve masaüstü cihazlarda uyumlu
- ✅ **Modern UI/UX** - Profesyonel ve zarif arayüz
- ✅ **İletişim Formu** - Müşteri taleplerini kabul eden form
- ✅ **Smooth Scroll** - Pürüzsüz sayfalar arası geçiş
- ✅ **Animasyonlar** - Görsel olarak etkileyici animasyonlar
- ✅ **SEO Optimized** - Arama motorlarında iyi sıralanmak için optimize edilmiş
- ✅ **Erişilebilirlik** - WCAG standartlarına uyumlu

## 🛠️ Teknolojiler

- **HTML5** - Sayfa yapısı
- **CSS3** - Stil ve animasyonlar
- **JavaScript (Vanilla)** - İnteraktif işlevler

## 📱 Sayfalar

### 1. Ana Sayfa (Hero Section)
- Şirket adı ve misyon
- Çağrı yapı butonu (CTA)
- Görsel arka plan

### 2. Hizmetler (Services)
- Şarap Tadımları
- Otel & Restoran Danışmanlığı
- Bar & Servis Eğitimleri
- Wine House & Restoran

### 3. Hakkımızda (About)
- Şirket açıklaması
- Misyon ve vizyon
- Neden Winedocia? bölümü

### 4. İletişim (Contact)
- İletişim formu
- İletişim bilgileri
- Sosyal medya bağlantıları

## 🔧 Özelleştirme

### Renkler Değiştirme
`style.css` dosyasındaki `:root` bölümünde renkleri değiştirebilirsiniz:

```css
:root {
    --primary-color: #722f37;    /* Şarap kırmızısı */
    --secondary-color: #d4af37;  /* Altın */
    --accent-color: #f4e4c1;     /* Krem */
}
```

### İletişim Bilgileri Güncelleme
`index.html` dosyasında İletişim bölümünü bulun ve aşağıdaki bilgileri güncelleyin:
- Email adresi
- Telefon numarası
- Konumu
- Sosyal medya bağlantıları

### Form Işlemi
`script.js` dosyasındaki `handleFormSubmit()` fonksiyonunu değiştirerek form verilerini sunucunuza gönderebilirsiniz.

## 📞 İletişim Bilgileri

- 📧 Email: info@winedocia.com
- 📱 Telefon: +90 5XX XXX XX XX
- 📍 Konum: Kapadokya, Türkiye
- 🌐 Web: winedocia.com

## 📄 Lisans

Bu proje açık kaynak projesidir. MIT Lisansı altında sunulmaktadır.

## 👤 Yazar

**Süleyman ÖRLÜ** - Winedocia Kurucusu

---

**Not:** Bu site henüz tamamlanmamıştır. Gelecekte daha fazla özellik eklenecektir.

**Yapılması Gerekenler:**
- [ ] Backend sistemi kurma (form verilerini kaydetme)
- [ ] Veritabanı entegrasyonu
- [ ] Blog/Haberleri bölümü
- [ ] Galeri/Portfolio
- [ ] Müşteri yorumları
- [ ] İstatistikler/Metrikler
- [ ] Çok dil desteği (EN, FR, etc.)
- [ ] SSL Sertifikası ve HTTPS
- [ ] Performance optimizasyonu

---

**Yapılan Çalışmalar (2026-09-02):**
- ✅ Repository oluşturuldu
- ✅ Ana HTML sayfası oluşturuldu
- ✅ CSS stil dosyası oluşturuldu
- ✅ JavaScript işlevselliği eklendi
- ✅ README.md dosyası oluşturuldu