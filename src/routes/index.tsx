import { createFileRoute } from "@tanstack/react-router";
import { Satellite, Signal, ShieldCheck, ExternalLink, AlertTriangle, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guia Internet via Satélite no Brasil" },
      { name: "description", content: "Guia independente sobre internet via satélite: como funciona, como verificar cobertura e como se proteger de golpes." },
      { property: "og:title", content: "Guia Internet via Satélite no Brasil" },
      { property: "og:description", content: "Entenda a internet via satélite e verifique cobertura apenas em canais oficiais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const official = [
  { name: "Vivo — site oficial", url: "https://www.vivo.com.br" },
  { name: "Starlink — verificar disponibilidade", url: "https://www.starlink.com/br" },
  { name: "Anatel — consulta de operadoras", url: "https://www.gov.br/anatel" },
];

const features = [
  { icon: Satellite, title: "Órbita baixa", text: "Satélites a cerca de 550 km da Terra reduzem a latência em comparação aos satélites tradicionais." },
  { icon: Signal, title: "Cobertura ampla", text: "Útil em áreas rurais e remotas onde não chega fibra ou sinal móvel estável." },
  { icon: ShieldCheck, title: "Contratação oficial", text: "A ativação é feita só pelos canais da operadora — nunca por apps baixados de links." },
];

const faq = [
  { q: "Preciso instalar um app para \"calibrar\" o sinal?", a: "Não. Nenhuma operadora pede para baixar arquivos APK de sites externos. Celulares não \"calibram\" sinal de satélite por aplicativo." },
  { q: "É seguro baixar APK de fonte desconhecida?", a: "Não. APKs fora da Play Store podem roubar senhas, dados bancários e mensagens. Instale apps apenas das lojas oficiais." },
  { q: "Como sei se tenho cobertura?", a: "Consulte diretamente o site ou o app oficial da operadora, ou ligue para a central de atendimento dela." },
  { q: "Recebi um link prometendo internet grátis. E agora?", a: "Não clique. Denuncie a mensagem e, se já instalou algo, desinstale, troque suas senhas e fale com seu banco." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-space">
        <div className="mx-auto max-w-5xl px-6 pb-24 pt-10">
          <header className="flex items-center gap-2 text-sm text-muted-foreground">
            <Satellite className="h-5 w-5 text-primary" />
            <span className="font-display font-semibold text-foreground">Guia Satélite</span>
            <span className="ml-auto rounded-full border px-3 py-1 text-xs">Site independente</span>
          </header>
          <div className="mt-20 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Internet via satélite</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
              Conexão do espaço, com segurança na Terra.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Entenda como funciona a internet via satélite no Brasil, verifique a cobertura nos canais oficiais e aprenda a reconhecer golpes.
            </p>
            <a href="#oficiais" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
              <MapPin className="h-4 w-4" /> Verificar cobertura oficial
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 py-20 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border bg-card p-6">
            <f.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <div className="flex gap-4 rounded-xl border border-destructive/40 bg-destructive/10 p-6">
          <AlertTriangle className="h-6 w-6 shrink-0 text-destructive" />
          <div>
            <h2 className="font-display text-xl font-semibold">Cuidado com o golpe da "calibração de sinal"</h2>
            <p className="mt-2 text-muted-foreground">
              Sites falsos usam nomes de operadoras e prometem internet via satélite grátis desde que você baixe um app. Esse app costuma ser um vírus. Operadoras nunca pedem isso.
            </p>
          </div>
        </div>
      </section>

      <section id="oficiais" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-3xl font-bold">Canais oficiais</h2>
        <p className="mt-2 text-muted-foreground">Consulte cobertura, planos e preços somente aqui:</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {official.map((o) => (
            <a key={o.url} href={o.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border bg-card p-5 transition hover:border-primary">
              <span className="font-medium">{o.name}</span>
              <ExternalLink className="h-4 w-4 text-primary" />
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="font-display text-3xl font-bold">Perguntas frequentes</h2>
        <div className="mt-8 space-y-3">
          {faq.map((f) => (
            <details key={f.q} className="rounded-xl border bg-card p-5">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t px-6 py-8 text-center text-xs text-muted-foreground">
        Site informativo independente, sem vínculo com Vivo, Starlink ou qualquer operadora. Marcas pertencem aos seus donos.
      </footer>
    </main>
  );
}
