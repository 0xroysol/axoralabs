# AxoraLab - Studio Web Sitesi

Bu proje, AxoraLab için mevcut Next.js altyapısı korunarak yeniden kurgulanmış modern bir studio web sitesi içerir.
Odak artık dar bir sektör veya paket dili değil; şirketlerin operasyon ihtiyaçlarına göre özel yazılım sistemleri tasarlayan ve geliştiren modern bir product studio konumlandırmasıdır.

## Bu Güncellemede Ne Değişti?

- Ana sayfa mevcut parçalar yamalanmadan tamamen yeniden kuruldu.
- Homepage artık daha disiplinli, light-first ve tek sayfa studio landing yapısına sahip.
- Hero bölümü; tek güçlü dark sahne, daha kısa copy ve inandırıcı ürün mockup kompozisyonuyla yeniden tasarlandı.
- Studio Preview, What We Build, Systems, Process, About ve Final CTA bölümleri sıfırdan yeniden yazıldı.
- Homepage üzerinden pricing, Vibe Coding, finance-only dil, agency-only dil ve sektör bazlı dar anlatılar kaldırıldı.
- Navbar ve footer anchored studio bilgi mimarisine göre sadeleştirildi.
- TR/EN içerikler i18n yapısı korunarak yeni studio yönüne göre güncellendi.
- Demo route’ları içeride korunurken, ana sayfa artık onlardan bağımsız bir marketing vitrini olarak çalışır.

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

- Studio içerikleri `src/content/studioContent.ts` içinde merkezileştirildi.
- Demo ve diğer alt sayfalar korunmuştur; ancak homepage artık ayrı bir studio mesajı taşır.
- Dil geçişi istemci tarafında çalışır; homepage metinleri çeviri sözlüğü üzerinden okunur.
