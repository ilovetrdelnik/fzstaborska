import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Clock3,
  Coffee,
  FileText,
  GraduationCap,
  Hamburger,
  Mail,
  MapPin,
  Menu,
  Phone,
  School,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
  Image as ImageIcon
} from 'lucide-react';

const navItems = [
  { label: 'Domů', href: '#home' },
  { label: 'O škole', href: '#about' },
  { label: 'Aktuality', href: '#news' },
  { label: 'Pro rodiče', href: '#parents' },
  { label: 'Pro žáky', href: '#students' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Kontakty', href: '#contact' }
];

const latestNews = [
  {
    date: '14. 10. 2026',
    title: 'Vítáme nové žáky a rodiče ve školním roce',
    text: 'Seznamujeme se s novým ročním plánem, informačními akcemi a důležitými termíny pro začátek školního roku.',
    image: '/images/skola.jpg'
  },
  {
    date: '04. 10. 2026',
    title: 'Školní akce a soutěže v příštích týdnech',
    text: 'Naše škola připravila program pro žáky v oblasti sportu, vědy a tvořivosti pro širší veřejnost.',
    image: '/images/skola.jpg'
  },
  {
    date: '30. 09. 2026',
    title: 'Informace o školním stravování a objednávání obědů',
    text: 'Připomínáme důležité informace o stravování, dodržování pravidel a způsobu objednávání obědů.',
    image: '/images/skola.jpg'
  }
];

const galleryItems = [
  '/images/skola.jpg',
  '/images/skola.jpg',
  '/images/skola.jpg',
  '/images/skola.jpg',
  '/images/skola.jpg',
  '/images/skola.jpg'
];

const infoCards = [
  {
    icon: School,
    title: 'Moderní prostředí',
    text: 'Škola vytváří bezpečné a podnětné prostředí pro každodenní učení, spolupráci a rozvoj talentu.'
  },
  {
    icon: GraduationCap,
    title: 'Rozmanité vzdělávání',
    text: 'Díky vyváženému programu podporujeme nejen znalosti, ale i tvořivost, odpovědnost a aktivní účast.'
  },
  {
    icon: Sparkles,
    title: 'Aktivity mimo vyučování',
    text: 'Škola organizuje projekty, soutěže, zájmové aktivity a společenské akce, které rozvíjejí zájem dětí.'
  }
];

const resourceLinks = [
  'Školní řád',
  'Vnitřní organizace',
  'Plán školního roku',
  'Zásady bezpečnosti',
  'Dokumenty pro rodiče'
];

const studentLinks = [
  'E-learning a výukové materiály',
  'Termíny a rozvrhy',
  'Přehled soutěží a projektů',
  'Knihovna a studijní podpora'
];

const quickLinks = [
  { label: 'Seznamte se se školou', href: '#about' },
  { label: 'Informace pro rodiče', href: '#parents' },
  { label: 'Kontaktujte nás', href: '#contact' }
];

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filteredSections = useMemo(() => {
    const source = [
      { title: 'Domů', text: 'Úvodní informace o škole a aktuální důležité odkazy.' },
      { title: 'O škole', text: 'Představení školy, historie a vzdělávací zaměření.' },
      { title: 'Aktuality', text: 'Novinky, akce, soutěže a důležité školní informace.' },
      { title: 'Pro rodiče', text: 'Dokumenty, pravidla, organizace školního roku a užitečné odkazy.' },
      { title: 'Pro žáky', text: 'Skolní odkazy, projekty a nabídka aktivit.' },
      { title: 'Galerie', text: 'Fotografie z akcí a školního života.' },
      { title: 'Kontakty', text: 'Adresa, telefon, e-mail a důležité kontakty.' }
    ];

    if (!search.trim()) return source;

    return source.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.text.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="bg-school-cream text-school-ink">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 shadow-soft backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Domů">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-school-red text-white shadow-soft">
              <School size={22} />
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-tight text-school-ink">FZŠ Táborská</div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Praha 4</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-school-red"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm">
              <Search size={16} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Hledat"
                className="w-28 bg-transparent text-sm outline-none placeholder:text-slate-400"
                aria-label="Vyhledávání obsahu"
              />
            </div>
            <a
              href="#contact"
              className="rounded-full bg-school-red px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#c34f2b]"
            >
              Kontakt
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpenMenu((prev) => !prev)}
            className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm lg:hidden"
            aria-label="Otevřít menu"
          >
            {openMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {openMenu && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="mx-auto max-w-7xl space-y-3 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100"
                  onClick={() => setOpenMenu(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                <Search size={16} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Hledat"
                  className="w-full bg-transparent outline-none placeholder:text-slate-400"
                  aria-label="Vyhledávání obsahu"
                />
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="hero-image relative isolate min-h-[640px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1d1d1d]/70 via-[#1d1d1d]/30 to-[#1d1d1d]/10" />
            <div className="relative mx-auto flex min-h-[640px] max-w-7xl items-end px-4 pb-16 pt-20 sm:px-6 lg:px-8">
              <div className="max-w-xl rounded-[32px] border border-white/15 bg-white/10 p-6 backdrop-blur-[2px] sm:p-8">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                  <Sparkles size={14} />
                  Vítejte na naší škole
                </p>
                <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
                  Vítejte na naší škole
                </h1>
                <p className="mt-4 max-w-md text-base text-slate-100 sm:text-lg">
                  Místo, kde se učíme, objevujeme a společně rosteme.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#about"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-school-gold px-5 py-3 text-sm font-bold text-school-ink shadow-soft hover:-translate-y-0.5 hover:bg-[#efc438]"
                  >
                    Poznej naši školu
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="#parents"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/20"
                  >
                    Informace pro rodiče
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-soft hover:-translate-y-1 hover:border-school-red/30 hover:shadow-card"
              >
                <div className="mb-3 inline-flex rounded-2xl bg-school-cream p-2 text-school-red">
                  <ChevronRight size={18} />
                </div>
                <div className="text-lg font-bold text-school-ink">{link.label}</div>
                <div className="mt-2 text-sm text-slate-600">Rychlý přístup na důležité informace.</div>
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-school-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-school-red">
                <BookOpen size={14} /> O škole
              </p>
              <h2 className="text-3xl font-black tracking-tight text-school-ink sm:text-4xl">
                Vzdělávání v příjemném a podnětném prostředí
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-700">
                Naše škola poskytuje klidné, bezpečné a moderní prostředí pro rozvoj dětí v oblasti vzdělání, osobnosti a samostatnosti. Klademe důraz na kvalitní výuku, respekt k druhým a podporu každého žáka při jeho cestě k úspěchu.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Spolupracujeme s rodinami, podporujeme tvořivost, zájem o vědu a sport a dbáme na harmonický rozvoj žáků v každodenním školním procesu.
              </p>
            </div>

            <div className="space-y-4">
              {infoCards.map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-3xl border border-slate-200 bg-school-cream p-5 shadow-soft"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-white p-3 text-school-red shadow-sm">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-school-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-school-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-school-red">
                <CalendarDays size={14} /> Aktuality
              </p>
              <h2 className="text-3xl font-black tracking-tight text-school-ink sm:text-4xl">Nejnovější zprávy</h2>
            </div>
            <a href="#news" className="hidden text-sm font-semibold text-school-red sm:inline-flex">Všechny aktuality</a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {latestNews.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft hover:-translate-y-1 hover:shadow-card">
                <div className="h-52 bg-slate-200">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-school-cream px-3 py-1 text-xs font-semibold text-school-red">
                    <Clock3 size={14} />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-school-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{item.text}</p>
                  <button type="button" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-school-red">
                    Číst více <ChevronRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="parents" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-school-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-school-red">
                <FileText size={14} /> Pro rodiče
              </p>
              <h2 className="text-3xl font-black tracking-tight text-school-ink sm:text-4xl">Důležité informace</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-school-cream p-6 shadow-soft">
                <h3 className="text-2xl font-bold text-school-ink">Školní dokumenty a pravidla</h3>
                <ul className="mt-5 space-y-3 text-sm text-slate-700">
                  {resourceLinks.map((link) => (
                    <li key={link} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
                      <ShieldCheck className="text-school-red" size={18} />
                      {link}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-2xl font-bold text-school-ink">Organizace školního roku</h3>
                <div className="mt-5 space-y-4 text-sm text-slate-700">
                  <div className="flex gap-4 rounded-2xl bg-school-cream p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-school-red shadow-sm">
                      <CalendarDays size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-school-ink">Termíny a akce</div>
                      <div className="mt-1">Přehled důležitých termínů, akcí a školních událostí.</div>
                    </div>
                  </div>
                  <div className="flex gap-4 rounded-2xl bg-school-cream p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-school-red shadow-sm">
                      <UserRound size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-school-ink">Formuláře a žádosti</div>
                      <div className="mt-1">Vyplnění důležitých formulářů a žádostí pro rodiče.</div>
                    </div>
                  </div>
                  <div className="flex gap-4 rounded-2xl bg-school-cream p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-school-red shadow-sm">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-school-ink">Komunikace se školou</div>
                      <div className="mt-1">Kontakt pro dotazy, potvrzení a základní informace.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="students" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-school-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-school-red">
                <GraduationCap size={14} /> Pro žáky
              </p>
              <h2 className="text-3xl font-black tracking-tight text-school-ink sm:text-4xl">Užitečné odkazy a aktivity</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {studentLinks.map((link) => (
              <div key={link} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft hover:-translate-y-1 hover:border-school-red/30 hover:shadow-card">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-lg font-bold text-school-ink">{link}</div>
                  <div className="rounded-full bg-school-cream p-2 text-school-red">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="cafeteria" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[28px] border border-slate-200 bg-school-cream p-6 shadow-soft">
                <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-school-red">
                  <Coffee size={14} /> Školní jídelna
                </p>
                <h3 className="text-3xl font-black text-school-ink">Stravování a jídelníček</h3>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  Škola nabízí zajištění stravování pro žáky a poskytuje informace o aktuálním jídelníčku a objednávání obědů. Přehled nápojů, hlavních jídel a pravidel pro stravování je k dispozici na oficiálních informačních kanálech školy.
                </p>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                <h4 className="text-xl font-bold text-school-ink">Důležité informace</h4>
                <ul className="mt-5 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3"><ChevronRight className="mt-0.5 text-school-red" size={16} />Jídelníček podle aktuálního měsíce</li>
                  <li className="flex gap-3"><ChevronRight className="mt-0.5 text-school-red" size={16} />Objednávání obědů prostřednictvím školních informací</li>
                  <li className="flex gap-3"><ChevronRight className="mt-0.5 text-school-red" size={16} />Pravidla stravování a výdej obědů</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-school-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-school-red">
                <ImageIcon size={14} /> Galerie
              </p>
              <h2 className="text-3xl font-black tracking-tight text-school-ink sm:text-4xl">Školní akce a život školy</h2>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((src, i) => (
              <button
                key={src + i}
                type="button"
                onClick={() => setSelectedImage(src)}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft hover:-translate-y-1 hover:shadow-card"
              >
                <div className="h-64 overflow-hidden">
                  <img src={src} alt={`Galerie ${i + 1}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
              </button>
            ))}
          </div>
        </section>

        <section id="admissions" className="bg-school-gold/90 py-20">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-school-red">
              <BookOpen size={14} /> Zápis do školy
            </p>
            <h2 className="text-3xl font-black tracking-tight text-school-ink sm:text-4xl">Informace pro rodiče budoucích prvňáčků</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-800">
              Zápis do školy probíhá v souladu s platnými pravidly a pokyny. Rodiče naleznou důležité informace o náležitostech, termínech a organizačním postupu při přijetí dítěte do základního vzdělávání.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#contact" className="rounded-full bg-school-red px-5 py-3 text-sm font-bold text-white shadow-soft hover:bg-[#ca4e2b]">
                Kontakt pro zápis
              </a>
              <a href="#parents" className="rounded-full border border-school-ink/20 bg-white px-5 py-3 text-sm font-bold text-school-ink hover:bg-white/80">
                Více informací
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-school-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-school-red">
                <MapPin size={14} /> Kontakty
              </p>
              <h2 className="text-3xl font-black tracking-tight text-school-ink sm:text-4xl">Kontaktujte nás</h2>
              <div className="mt-6 space-y-4 text-base text-slate-700">
                <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft">
                  <MapPin className="mt-1 text-school-red" size={20} />
                  <div>
                    <div className="font-bold text-school-ink">Adresa</div>
                    <div>FZŠ Táborská 45, Praha 4</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft">
                  <Phone className="mt-1 text-school-red" size={20} />
                  <div>
                    <div className="font-bold text-school-ink">Telefon</div>
                    <div>Ke doplnění podle oficiálních informací</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft">
                  <Mail className="mt-1 text-school-red" size={20} />
                  <div>
                    <div className="font-bold text-school-ink">E-mail</div>
                    <div>Ke doplnění podle oficiálních informací</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-2xl font-bold text-school-ink">Užitečné odkazy</h3>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-3 rounded-2xl bg-school-cream p-3"><ChevronRight className="text-school-red" size={16} /> Oficiální web školy</li>
                <li className="flex items-center gap-3 rounded-2xl bg-school-cream p-3"><ChevronRight className="text-school-red" size={16} /> Rodičovský portál</li>
                <li className="flex items-center gap-3 rounded-2xl bg-school-cream p-3"><ChevronRight className="text-school-red" size={16} /> Školní dokumenty a formuláře</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-200">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-school-red text-white">
                <School size={22} />
              </div>
              <div>
                <div className="text-lg font-extrabold text-white">FZŠ Táborská</div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Praha 4</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-300">Navigace</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {navItems.map((item) => (
                <li key={item.label}><a href={item.href} className="hover:text-white">{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-300">Rychlé odkazy</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#parents" className="hover:text-white">Pro rodiče</a></li>
              <li><a href="#students" className="hover:text-white">Pro žáky</a></li>
              <li><a href="#gallery" className="hover:text-white">Galerie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-300">Kontakt</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>FZŠ Táborská 45</li>
              <li>Praha 4</li>
              <li>Ke doplnění</li>
            </ul>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg"
            >
              <X size={18} />
            </button>
            <img src={selectedImage} alt="Detail fotografie" className="max-h-[80vh] w-auto object-contain" />
          </div>
        </div>
      )}

      {search && filteredSections.length === 0 && (
        <div className="fixed inset-x-0 bottom-5 z-40 flex justify-center px-4">
          <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-soft">
            Nic jsme nenašli pro: {search}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
