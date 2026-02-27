# AxoraLab.ai - Premium Next.js Kurumsal Web Sitesi

Bu proje, **AxoraLab.ai** için tasarlanmış üretime hazır bir Next.js (App Router) web sitesidir.
Hedef: yüksek güven veren, premium, modern ve yatırımcı sunumuna uygun bir dijital vitrin oluşturmak.

## Teknoloji Yığını

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Three Fiber

## Özellikler

- Premium dark tema (`#0A0F14`) ve cam/glow tabanlı görsel dil
- Sticky navbar ve servis dropdown menüsü
- Tam responsive (mobile-first) yapı
- 3D hero (subtle holographic orb)
- Servis detay sayfaları (intro, hedef kitle, teslimatlar, KPI, fiyat, engagement, FAQ)
- Demos sayfası (finans KPI’ları, çizgi grafik, mali kırılım)
- Process, About ve Contact sayfaları
- Contact formunda client-side doğrulama + mock başarı bildirimi
- SEO metadata + OpenGraph + sitemap + robots
- Erişilebilirlik odakları: semantik yapı, ARIA kullanımı, reduced motion desteği

## Kurulum

> Not: Bu ortamda `node` kurulu olmadığı için derleme/test komutları çalıştırılamadı.

1. Node.js 20+ kurun.
2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

4. Üretim derlemesi:

```bash
npm run build
npm run start
```

## Klasör Yapısı

```text
app/
  about/page.tsx
  contact/page.tsx
  demos/page.tsx
  process/page.tsx
  services/
    page.tsx
    finance-dashboards/page.tsx
    industry-panels/page.tsx
    ai-assistants/page.tsx
    vibe-coding/page.tsx
  globals.css
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts

src/
  components/
    layout/
    sections/
    three/
    ui/
  content/siteContent.ts
```

## Tasarım ve İçerik Notları

- Tüm ana içerikler `src/content/siteContent.ts` içinde merkezileştirilmiştir.
- Tekrarlayan UI elemanları yeniden kullanılabilir bileşenler olarak ayrılmıştır:
  - `ServiceCard`
  - `PricingCard`
  - `FAQAccordion`
  - `KPIWidget`

## Sonraki Adımlar (Öneri)

- Gerçek takvim bağlantısı (Calendly vb.)
- Form gönderimini gerçek backend/API ile bağlama
- Gerçek demo veri kaynağıyla grafiklerin canlılaştırılması
- Lighthouse/axe denetimleriyle son kalite turu
