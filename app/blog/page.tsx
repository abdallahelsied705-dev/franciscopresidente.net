import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { getAllPosts } from "../lib/mdx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import JsonLd from "../components/JsonLd";
import { SITE_URL } from "../lib/site";

const BASE_URL = SITE_URL;

export const metadata: Metadata = {
  title: { absolute: "Guias de IPTV Portugal: Instalação, Apps e Dicas | IPTV Portugal" },
  description:
    "Guias de IPTV Portugal: como escolher um fornecedor, configurar Firestick, Smart TV e MAG, resolver buffering, comparar com TV por satélite e ver desporto em direto sem antena.",
  openGraph: {
    title: "Guias de IPTV Portugal: Instalação, Apps e Dicas | IPTV Portugal",
    description: "Guias de instalação, comparações de apps e conselhos de compra para IPTV em Portugal.",
    url: `${BASE_URL}/blog`,
  },
  alternates: { canonical: `${BASE_URL}/blog` },
};

const categoryColors: Record<string, string> = {
  Guias: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  Iniciantes: "bg-green-500/15 text-green-400 border-green-500/20",
  "Resolução de Problemas": "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  Desporto: "bg-brand-400/15 text-brand-400 border-brand-400/20",
  Comparações: "bg-purple-500/15 text-purple-400 border-purple-500/20",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog IPTV Portugal",
    description:
      "Guias, dicas, resolução de problemas e comparações de IPTV. Aprenda a tirar o máximo da sua subscrição de IPTV Portugal.",
    url: `${BASE_URL}/blog`,
    mainEntity: posts.map((post) => ({
      "@type": "Article",
      headline: post.title,
      url: `${BASE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      description: post.excerpt,
    })),
  };

  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />
      <Navbar />

      {/* Header */}
      <div className="bg-ink-900 border-b border-white/5 pt-24 pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Guias e Dicas de IPTV Portugal</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Tudo o que precisa para tirar o máximo do seu serviço de IPTV — guias de instalação, resolução de problemas, análises de apps e muito mais.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block bg-ink-800 border border-white/5 hover:border-brand-500/30 rounded-2xl p-8 mb-10 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[featured.category] ?? "bg-ink-700 text-zinc-400 border-white/10"}`}>
              <Tag size={11} /> {featured.category}
            </span>
            <span className="text-zinc-500 text-xs">Destaque</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
            {featured.title}
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6 max-w-3xl">{featured.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-zinc-500 text-xs">
              <time dateTime={featured.updated ?? featured.date}>
                {featured.updated ? `Atualizado ${formatDate(featured.updated)}` : formatDate(featured.date)}
              </time>
              <span className="flex items-center gap-1">
                <Clock size={11} /> {featured.readTime}
              </span>
            </div>
            <span className="flex items-center gap-1 text-brand-400 text-sm font-medium group-hover:gap-2 transition-all">
              Ler Mais <ArrowRight size={14} />
            </span>
          </div>
        </Link>

        {/* Rest of posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-ink-800 border border-white/5 hover:border-brand-500/30 rounded-2xl p-6 transition-all duration-300"
            >
              <span className={`self-start inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border mb-4 ${categoryColors[post.category] ?? "bg-ink-700 text-zinc-400 border-white/10"}`}>
                <Tag size={11} /> {post.category}
              </span>
              <h2 className="text-white font-bold text-lg mb-2 group-hover:text-brand-400 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-3 text-zinc-500 text-xs">
                  <time dateTime={post.updated ?? post.date}>
                    {post.updated ? `Atualizado ${formatDate(post.updated)}` : formatDate(post.date)}
                  </time>
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>
                <ArrowRight size={14} className="text-brand-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
