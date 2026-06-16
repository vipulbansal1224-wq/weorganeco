import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const pagesPath = path.join(process.cwd(), "src/data/pages.json");
  let pagesData: any[] = [];
  try {
    const file = await fs.readFile(pagesPath, "utf-8");
    pagesData = JSON.parse(file);
  } catch(e) {}

  const page = pagesData.find((p) => p.slug === slug);

  if (!page) {
    return notFound();
  }

  return (
    <main style={{ paddingTop: '140px' }}>
      <div className="page-banner" style={{
        background: page.bannerImage ? `linear-gradient(rgba(44, 94, 59, 0.8), rgba(44, 94, 59, 0.8)), url(${page.bannerImage})` : 'var(--light-green)',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: page.bannerImage ? '#fff' : 'inherit',
        padding: '60px 24px',
        textAlign: 'center' as const,
        borderRadius: '0 0 24px 24px'
      }}>
        <h1 style={{ color: page.bannerImage ? '#fff' : 'var(--primary)', fontSize: '36px', fontWeight: '800' }}>{page.title}</h1>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: "60px 24px", minHeight: "50vh" }}>
        <div dangerouslySetInnerHTML={{ __html: page.content || "" }} />
      </div>
    </main>
  );
}
