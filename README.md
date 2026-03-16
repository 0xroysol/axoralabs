# AxoraLab - Studio Web Sitesi

Bu proje, AxoraLab için mevcut Next.js altyapısı korunarak tamamen yeniden kurgulanmış modern bir studio ana sayfası içerir.
Odak artık dar bir ajans-finans mesajı değil; şirketlere özel yazılım sistemleri tasarlayan ve geliştiren daha geniş bir product studio konumlandırmasıdır.

## Bu Güncellemede Ne Değişti?

- Ana sayfa mevcut yapı yamalanmadan, sıfırdan yeniden tasarlandı.
- Homepage artık light-first, tek sayfa ve anchored bir studio deneyimi sunuyor.
- Hero bölümü; net copy, güçlü tipografi ve ürün benzeri mockup kompozisyonuyla yeniden kuruldu.
- “What We Build”, “Systems”, “Selected System Types”, “Process”, “Why”, “About”, “Final CTA” ve “Contact” bölümleri tamamen yeniden yazıldı.
- Eski dar agency-finance dili, pricing yapısı ve Vibe Coding görünürlüğü homepage akışından çıkarıldı.
- Navbar ve footer yeni anchored bilgi mimarisiyle sadeleştirildi.
- TR/EN içerikler i18n yapısı korunarak yeni konumlandırmaya göre güncellendi.
- Demo route’ları korunurken, marketing ana sayfası artık onlardan bağımsız bir studio vitrini olarak çalışıyor.

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
- Demo ve servis sayfaları korunmuştur; fakat homepage artık bağımsız bir studio mesajı taşır.
- Dil geçişi istemci tarafında çalışır; içeriklerin tamamı çeviri sözlüğü üzerinden okunur.
