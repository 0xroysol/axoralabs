# AxoraLab - Studio Web Sitesi

Bu proje, AxoraLab için mevcut Next.js altyapısı korunarak güncellenmiş modern bir product studio web sitesidir.
Odak artık dar bir ajans-finans mesajı değil; şirketlere özel yazılım sistemleri tasarlayan ve geliştiren daha geniş bir studio konumlandırmasıdır.

## Bu Güncellemede Ne Değişti?

- Homepage tek sayfalık, anchor tabanlı studio yapısına dönüştürüldü.
- Ana mesaj; web app, mobil uygulama, operasyon paneli ve AI otomasyonlarını kapsayan daha geniş bir yazılım stüdyosu konumuna taşındı.
- Homepage içindeki eski ajans-finans ağırlıklı bloklar, pricing bölümü ve Vibe Coding görünürlüğü kaldırıldı.
- Navbar ve footer, anchored bilgi mimarisine göre sadeleştirildi.
- TR/EN içerikler yeni studio mesajına göre güncellendi.
- Demo route’ları korunarak pazarlama ana sayfasından ayrıştırıldı.
- Homepage için daha premium, light-first bir görsel ritim kuruldu.

## Teknoloji Yığını

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Three Fiber (mevcut demo altyapısında)

## Kurulum

1. Bağımlılıkları yükleyin:

```bash
npm install
```

2. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

3. Üretim derlemesi alın:

```bash
npm run build
npm run start
```

## Notlar

- Ana studio içerikleri `src/content/studioContent.ts` içinde merkezileştirildi.
- Eski demo ve servis sayfaları korunmuştur; homepage artık bunları merkeze koymaz.
- Dil geçişi istemci tarafında çalışır; içeriklerin tamamı çeviri sözlüğü üzerinden okunur.
