import Image from "next/image";
import { Mail, FolderGit2, ExternalLink, Sparkles } from "lucide-react";
import { skillCategories, projects, experiences, social } from "./data";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0d0d0f]/80 border-b border-white/5">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <a
            href="#"
            className="font-serif italic text-2xl font-bold text-[#d4b47a] tracking-tight"
          >
            hamza
          </a>
          <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#hakkimda" className="hover:text-[#d4b47a] transition-colors">
              Hakkımda
            </a>
            <a href="#yetenekler" className="hover:text-[#d4b47a] transition-colors">
              Yetenekler
            </a>
            <a href="#deneyim" className="hover:text-[#d4b47a] transition-colors">
              Deneyim
            </a>
            <a href="#projeler" className="hover:text-[#d4b47a] transition-colors">
              Projeler
            </a>
            <a
              href="#iletisim"
              className="text-zinc-100 border border-white/10 rounded-full px-4 py-1.5 hover:border-[#d4b47a] hover:text-[#d4b47a] transition-colors"
            >
              İletişim
            </a>
          </div>
        </nav>
      </header>

      <main className="flex flex-col bg-[#0d0d0f]">
        {/* Hero */}
        <section
          id="home"
          className="min-h-screen flex items-center px-6 pt-32 pb-16"
        >
          <div className="max-w-5xl w-full mx-auto grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 mb-6">
                <Sparkles size={14} className="text-[#d4b47a]" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#d4b47a]">
                  Yazılım Mühendisliği · 4. Sınıf
                </span>
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-zinc-100 mb-6">
                Merhaba, ben{" "}
                <span className="font-serif italic text-[#d4b47a]">
                  Hamza Yılan
                </span>
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-zinc-400 max-w-lg mb-10">
                Mobil uygulama (React Native, Flutter) ve Yapay Zeka / Derin
                Öğrenme alanlarında çözümler üretiyorum. Şu anda röntgen
                görüntülerinden kemik kırığı tespiti yapan bitirme projemi
                yürütüyor, Solid-ICT bünyesinde yazılım mühendisliği stajımı
                sürdürüyorum.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projeler"
                  className="inline-flex items-center gap-2 bg-[#d4b47a] text-[#0d0d0f] font-bold py-3.5 px-7 rounded-full transition-all hover:brightness-110 hover:scale-105 active:scale-95 shadow-[0_8px_24px_rgba(212,180,122,0.25)]"
                >
                  Projelerimi İncele
                </a>
                <a
                  href={`mailto:${social.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-zinc-100 hover:border-[#d4b47a] hover:text-[#d4b47a] transition-colors"
                >
                  Bana Mail At
                </a>
              </div>

              <div className="flex items-center gap-3 mt-8">
                <a
                  href={social.github}
                  aria-label="GitHub profilime git"
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-[#d4b47a] hover:text-[#d4b47a] transition-colors"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
                <a
                  href={social.linkedin}
                  aria-label="LinkedIn profilime git"
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-[#d4b47a] hover:text-[#d4b47a] transition-colors"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="justify-self-center">
              <div className="relative w-full max-w-[280px] aspect-square rounded-[40px] border border-white/10 bg-[#18191c] shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden flex items-center justify-center">
                <span className="font-serif italic text-8xl text-[#d4b47a]/80">
                  HY
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f]/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Hakkımda & Yetenekler */}
        <section id="hakkimda" className="py-24 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <div className="space-y-5">
              <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-zinc-100">
                Hakkımda
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Mobil uygulama geliştirme (React Native, Flutter) ve Yapay Zeka /
                Derin Öğrenme alanlarında proje geliştirme deneyimine sahibim;
                biri devam eden, biri tamamlanmış olmak üzere iki mobil uygulama
                geliştirdim. Modern backend teknolojileri (Supabase, Python) ve
                makine öğrenmesi mimarileri (Evrişimli Sinir Ağları) kullanarak
                uçtan uca yenilikçi çözümler üretmeye odaklanıyorum.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Tıbbi görüntüleme alanında zatürre (pnömoni) tespiti yapan bir
                derin öğrenme modeli geliştirdim ve halihazırda röntgen
                görüntülerinden kemik kırığı/çıkığı tespitine yönelik bitirme
                projemi yürütüyorum. Siber güvenlik ve ağ yönetimi konularında
                temel bilgilere sahibim; öğrenmeye istekli ve takım çalışmasına
                yatkın bir mühendis adayıyım.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Şu anda Şişli&apos;de bulunan Solid-ICT bünyesinde yazılım
                mühendisliği stajımı sürdürüyorum ve gerçek ekip ortamında
                yazılım geliştirme süreçlerine aktif olarak katkı sağlıyorum.
              </p>
            </div>

            <div id="yetenekler" className="space-y-8">
              <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-zinc-100">
                Yetenekler
              </h2>
              <div className="space-y-6">
                {skillCategories.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#d4b47a] mb-3">
                      {group.category}
                    </h3>
                    <div className="space-y-2">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between gap-4 rounded-xl bg-white/[0.03] border border-white/10 px-4 py-2.5"
                        >
                          <span className="text-sm font-medium text-zinc-200">
                            {skill.name}
                          </span>
                          <div className="flex gap-1 shrink-0" aria-hidden="true">
                            {Array.from({ length: 4 }).map((_, i) => (
                              <span
                                key={i}
                                className={`h-2 w-2 rounded-full ${
                                  i < skill.level ? "bg-[#d4b47a]" : "bg-white/10"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deneyim */}
        <section id="deneyim" className="py-24 px-6 border-t border-white/5">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-zinc-100 text-center">
              Deneyim
            </h2>

            <div className="space-y-8">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="border-l-2 border-[#d4b47a]/30 pl-6 relative"
                >
                  <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-[#d4b47a]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-zinc-100">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-[#d4b47a]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-zinc-500 mb-2">
                    {exp.organization}
                  </p>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projeler */}
        <section id="projeler" className="py-24 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-zinc-100 text-center">
              Projeler
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl border border-white/10 overflow-hidden bg-[#18191c] transition-all duration-300 hover:-translate-y-2 hover:border-[#d4b47a]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} proje görseli`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-zinc-100">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 px-3 py-1 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {(project.githubUrl || project.liveUrl) && (
                      <div className="flex items-center gap-4 pt-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-[#d4b47a] transition-colors"
                          >
                            <FolderGit2 size={16} aria-hidden="true" />
                            Kodları Gör
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-[#d4b47a] transition-colors"
                          >
                            <ExternalLink size={16} aria-hidden="true" />
                            Canlıya Git
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* İletişim & Footer */}
      <footer
        id="iletisim"
        className="bg-[#18191c] border-t border-white/5 px-6 py-24"
      >
        <div className="max-w-2xl mx-auto text-center space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5">
            <Sparkles size={14} className="text-[#d4b47a]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4b47a]">
              İletişim
            </span>
          </span>

          <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-zinc-100">
            Birlikte Çalışalım
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Yeni bir proje fikriniz mi var ya da ekibinize katkı sağlayacak bir
            yazılım mühendisi mi arıyorsunuz? Aşağıdaki adrese mail atmanız
            yeterli, size en kısa sürede dönüş yapacağım.
          </p>

          <a
            href={`mailto:${social.email}`}
            className="inline-flex items-center gap-2 bg-[#d4b47a] text-[#0d0d0f] font-bold py-4 px-8 rounded-full transition-all hover:brightness-110 hover:scale-105 active:scale-95 shadow-[0_8px_24px_rgba(212,180,122,0.25)]"
          >
            <Mail size={20} aria-hidden="true" />
            {social.email}
          </a>

          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href={social.github}
              aria-label="GitHub profilime git"
              className="flex items-center justify-center h-11 w-11 rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-[#d4b47a] hover:text-[#d4b47a] transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={social.linkedin}
              aria-label="LinkedIn profilime git"
              className="flex items-center justify-center h-11 w-11 rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-[#d4b47a] hover:text-[#d4b47a] transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>

          <p className="text-zinc-600 text-sm pt-8">
            © 2026 Hamza Yılan. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </>
  );
}
