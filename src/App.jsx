import { ArrowDownRight, ArrowUpRight, Code2, Download, Link2, Menu, X } from 'lucide-react'

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const projects = [
  {
    number: '01', title: 'POS Toko Madura', type: 'Web Application',
    description: 'Aplikasi point of sale yang membantu operasional toko madura menjadi lebih rapi dan efisien.',
    tags: ['Laravel', 'PHP', 'SaaS'],
    url: 'https://pos-umkm-production-61cf.up.railway.app',
    visual: 'from-emerald-400 via-lime-300 to-amber-200', icon: 'Rp', thumbnail: '/projects/pos-toko-madura.png'
  },
  {
    number: '02', title: 'Optimasi Jalur Kurir', type: 'AI / Data Project',
    description: 'Model AI untuk mencari rute pengantaran yang lebih efektif dan mendukung keputusan operasional.',
    tags: ['Python', 'Streamlit', 'AI'],
    url: 'https://ai-traditional-optimasi-jalur-kurir.streamlit.app',
    visual: 'from-violet-500 via-fuchsia-400 to-orange-300', icon: 'AI', thumbnail: '/projects/optimasi-jalur-kurir.png'
  },
  {
    number: '03', title: 'Preloved Campus Marketplace', type: 'Web Application',
    description: 'Platform marketplace barang preloved untuk kampus dengan pengalaman belanja yang aman dan terpercaya.',
    tags: ['Web', 'E-Commerce', 'PHP'],
    url: 'https://website-marketplace-production.up.railway.app/',
    visual: 'from-sky-400 via-cyan-300 to-teal-200', icon: 'M', thumbnail: '/projects/pw2-marketplace.png'
  },
  {
    number: '04', title: 'Voltmeter App', type: 'Utility Application',
    description: 'Aplikasi android untuk membantu petugas kelistrikan dapat melakukan pencatatan meteran listrik dengan mudah dan efisien.',
    tags: ['Android', 'Utility', 'Interface'],
    url: 'https://github.com/Vetians/voltmeter',
    visual: 'from-amber-300 via-yellow-200 to-stone-100', icon: 'V', thumbnail: '/projects/voltmeter.png'
  },
  {
    number: '05', title: 'Cinesync', type: 'Entertainment Platform',
    description: 'Platform yang menghubungkan komunitas film dan orang orang yang ingin mengetahui detail dari sebuah film yang sedang trending.',
    tags: ['React', 'Entertainment', 'Web'],
    url: 'https://cinesync-ruddy.vercel.app/',
    visual: 'from-rose-500 via-red-400 to-orange-300', icon: 'C', thumbnail: '/projects/cinesync.png'
  },
  {
    number: '06', title: 'Game Joko', type: 'Game Development',
    description: 'Proyek game interaktif yang dibangun untuk menggabungkan logika, cerita, permainan, dan kesadaran akan kebersihan lingkungan.',
    tags: ['Java', 'Greenfoot', 'Game'],
    url: 'https://www.greenfoot.org/scenarios/35743',
    visual: 'from-blue-500 via-indigo-400 to-violet-300', icon: 'J', thumbnail: '/projects/game-joko.png'
  },
]

function useScrollReveal() {
  useEffect(() => {
    const elements = [...document.querySelectorAll('[data-reveal]')]
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      elements.forEach(element => element.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    elements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

function ThreeHero() {
  const mount = useRef(null)
  useEffect(() => {
    const element = mount.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 2.7
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(window.innerWidth, window.innerHeight)
    element.appendChild(renderer.domElement)

    const count = 190
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 7
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const material = new THREE.PointsMaterial({ color: '#8cf0bf', size: 0.022, transparent: true, opacity: 0.52, depthWrite: false })
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.76, 0.006, 8, 80),
      new THREE.MeshBasicMaterial({ color: '#d9ff7c', transparent: true, opacity: 0.28 }),
    )
    ring.position.set(1.25, 0.2, -0.7)
    scene.add(ring)

    const pointer = { x: 0, y: 0 }
    const onPointerMove = event => { pointer.x = event.clientX / window.innerWidth - 0.5; pointer.y = event.clientY / window.innerHeight - 0.5 }
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('resize', onResize)
    const clock = new THREE.Clock()
    let frame
    const animate = () => {
      const elapsed = clock.getElapsedTime()
      particles.rotation.y = elapsed * 0.035 + window.scrollY * 0.00012
      particles.rotation.x += (pointer.y * 0.22 - particles.rotation.x) * 0.018
      particles.position.x += (pointer.x * 0.38 - particles.position.x) * 0.018
      ring.rotation.z = elapsed * 0.14
      ring.rotation.x = elapsed * 0.08
      renderer.render(scene, camera)
      frame = requestAnimationFrame(animate)
    }
    animate()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', onResize)
      geometry.dispose(); material.dispose(); ring.geometry.dispose(); ring.material.dispose(); renderer.dispose()
      element.replaceChildren()
    }
  }, [])
  return <div ref={mount} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-70" />
}

function ProjectCard({ project, index }) {
  const content = <>
    <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.visual} p-5 sm:h-64`}>
      {project.thumbnail && <><img src={project.thumbnail} alt={`Tampilan ${project.title}`} 
      className={`absolute inset-0 h-full w-full transition duration-500 group-hover:scale-105 ${
      project.thumbnailFit === 'contain'
        ? 'object-contain'
        : 'object-cover object-top'
      }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" /></>}
      {!project.thumbnail && <span className="absolute -bottom-8 -right-1 font-display text-[11rem] font-bold leading-none tracking-tighter text-black/15">{project.icon}</span>}
      <div className={`relative flex items-start justify-between text-xs font-bold ${project.thumbnail ? 'text-white/80' : 'text-black/60'}`}>
        <span>{project.number}</span>
        {project.url ? <ArrowUpRight size={20} strokeWidth={2.5} /> : <span className="rounded-full border border-black/20 px-2 py-1 text-[10px]">CASE STUDY</span>}
      </div>
      <div className="absolute bottom-5 left-5 right-5 flex gap-2 overflow-hidden">
        {project.tags.map(tag => <span key={tag} className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${project.thumbnail ? 'bg-white/15 text-white' : 'bg-black/10 text-black/70'}`}>{tag}</span>)}
      </div>
    </div>
    <div className="p-5 sm:p-6">
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-400">{project.type}</p>
      <h3 className="font-display text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">{project.description}</p>
    </div>
  </>
  const reveal = { '--reveal-delay': `${Math.min(index * 70, 280)}ms` }
  return project.url ? <a data-reveal style={reveal} href={project.url} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_18px_45px_rgba(0,0,0,.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">{content}</a> : <article data-reveal style={reveal} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">{content}</article>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useScrollReveal()
  const nav = ['Tentang', 'Pendidikan', 'Karya', 'Kontak']
  const jump = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }
  return <div className="min-h-screen overflow-x-hidden bg-[#101010] text-zinc-100 selection:bg-emerald-300 selection:text-black">
    <ThreeHero />
    <div className="pointer-events-none fixed inset-0 -z-0 opacity-50 [background:radial-gradient(circle_at_12%_8%,rgba(52,211,153,.14),transparent_25%),radial-gradient(circle_at_88%_30%,rgba(250,204,21,.10),transparent_22%)]" />
    <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
      <button onClick={() => jump('home')} className="font-display text-lg font-bold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">CM<span className="text-emerald-300">.</span></button>
      <nav className="hidden items-center gap-7 md:flex" aria-label="Navigasi utama">
        {nav.map(item => <button key={item} onClick={() => jump(item.toLowerCase())} className="text-sm text-zinc-400 transition hover:text-white focus:outline-none focus-visible:text-emerald-300">{item}</button>)}
      </nav>
      <a className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:border-emerald-300 hover:text-emerald-300 md:flex" href="https://www.linkedin.com/in/christian-melhan-455376334/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15}/></a>
      <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'} className="rounded-md p-2 text-white md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">{menuOpen ? <X /> : <Menu />}</button>
      {menuOpen && <nav className="absolute right-5 top-16 flex w-48 flex-col rounded-xl border border-white/10 bg-zinc-900 p-2 shadow-2xl md:hidden" aria-label="Navigasi seluler">{nav.map(item => <button key={item} onClick={() => jump(item.toLowerCase())} className="rounded-lg px-4 py-3 text-left text-sm text-zinc-300 hover:bg-white/5 hover:text-emerald-300">{item}</button>)}<a href="https://www.linkedin.com/in/christian-melhan-455376334/" target="_blank" rel="noreferrer" className="rounded-lg px-4 py-3 text-sm text-emerald-300">LinkedIn ↗</a></nav>}
    </header>
    <main className="relative z-10">
      <section id="home" className="mx-auto grid min-h-[72vh] max-w-7xl items-end gap-12 px-5 pb-16 pt-16 sm:px-8 lg:grid-cols-[1.35fr_.65fr] lg:px-10 lg:pb-24 lg:pt-24">
        <div data-reveal>
          <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-300" /> Active Student</p>
          <h1 className="font-display max-w-4xl text-5xl font-semibold leading-[.94] tracking-[-.055em] text-white sm:text-7xl lg:text-[6.7rem]">Creating things as <span className="text-emerald-300">manifestation of ideas</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">Halo, saya <span className="font-medium text-zinc-100">Christian Melhan</span> seorang mahasiswa aktif yang mengeksplorasi web, AI, dan produk interaktif untuk mewujudkan ide-ide menjadi sesuatu yang berguna.</p>
          <div className="mt-9 flex flex-wrap gap-3"><button onClick={() => jump('karya')} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">Lihat karya <ArrowDownRight size={17}/></button><a href="/CV_Christian Melhan.pdf" download className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-emerald-300 hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">Download CV <Download size={17}/></a><a href="https://www.linkedin.com/in/christian-melhan-455376334/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-white/40 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">Terhubung <Link2 size={17}/></a></div>
        </div>
        <div data-reveal className="lg:mb-3">
          <div className="relative mx-auto max-w-[310px] lg:ml-auto">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-emerald-300/30" />
            <img src="/profile-christian.png" alt="Christian Melhan" className="profile-photo aspect-square w-full object-cover object-center grayscale transition duration-500 hover:grayscale-0" />
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-zinc-900 px-5 py-4 shadow-xl"><p className="font-display text-3xl font-semibold tracking-tight text-white">06<span className="text-emerald-300">+</span></p><p className="mt-1 text-xs text-zinc-400">proyek pilihan</p></div>
          </div>
          <div className="mt-8 flex justify-center gap-3 lg:justify-end lg:pr-[calc(50%-155px)]">
            <a href="https://instagram.com/christianmelhannn" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-400 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-300/10 hover:text-emerald-300"><InstagramIcon /></a>
            <a href="https://www.linkedin.com/in/christian-melhan-455376334/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-400 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-300/10 hover:text-emerald-300"><LinkedInIcon /></a>
            <a href="https://wa.me/628968993392" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-400 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-300/10 hover:text-emerald-300"><WhatsAppIcon /></a>
          </div>
        </div>
      </section>
      <section id="tentang" data-reveal className="border-y border-white/10 bg-white/[.025]"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10"><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">01 — Tentang saya</p><div><h2 className="font-display text-3xl leading-tight tracking-tight text-white sm:text-5xl">Menghubungkan rasa ingin tahu teknis dengan produk yang punya tujuan.</h2><p className="mt-6 max-w-xl leading-7 text-zinc-400">Saya suka mengerjakan produk dari berbagai sudut: aplikasi operasional untuk UMKM, eksperimen AI untuk logistik, hingga pengalaman hiburan dan game. Setiap proyek adalah ruang untuk belajar sekaligus memberi dampak.</p><div className="mt-8 flex flex-wrap gap-2">{['Web Development', 'Artificial Intelligence', 'Product Thinking', 'UI / UX', 'Problem Solving'].map(skill => <span key={skill} className="rounded-full border border-white/15 px-3 py-2 text-xs font-medium text-zinc-300">{skill}</span>)}</div></div></div></section>
      <section id="pendidikan" data-reveal aria-labelledby="education-title" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">02 — Pendidikan</p><h2 id="education-title" className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Terus belajar, terus membangun.</h2></div>
          <div className="space-y-4">
            <article className="rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden"><img src="/ukrida.png" alt="Logo UKRIDA" className="w-full h-48 object-contain bg-zinc-800/50 p-6" /><div className="p-6"><p className="text-xs font-bold tracking-[.15em] text-emerald-300">2024 — 2028</p><h3 className="font-display text-xl font-semibold text-white">UKRIDA</h3><p className="mt-1 text-sm text-zinc-300">Informatika</p><p className="mt-3 text-sm leading-6 text-zinc-400">Mahasiswa aktif yang berfokus pada pengembangan web full-stack, sambil memperluas pengalaman organisasi dan kerja paruh waktu.</p></div></article>
            <article className="rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden"><img src="/mutiarabangsa.png" alt="Logo Mutiara Bangsa" className="w-full h-48 object-contain bg-zinc-800/50 p-6" /><div className="p-6"><p className="text-xs font-bold tracking-[.15em] text-emerald-300">2021 — 2023</p><h3 className="font-display text-xl font-semibold text-white">Mutiara Bangsa</h3><p className="mt-1 text-sm text-zinc-300">SMK — Multimedia</p><p className="mt-3 text-sm leading-6 text-zinc-400">Membangun dasar desain grafis, web design, dan produksi multimedia melalui pembelajaran vokasional.</p></div></article>
          </div>
        </div>
      </section>
      <section id="karya" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"><div data-reveal className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">03 — Selected work</p><h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Karya pilihan</h2></div><p className="max-w-xs text-sm leading-6 text-zinc-400">Klik proyek untuk melihat produk yang telah dipublikasikan.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</div></section>
      <section id="kontak" data-reveal className="mx-5 mb-5 rounded-3xl bg-emerald-300 text-zinc-950 sm:mx-8 lg:mx-10"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-14 lg:py-20"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-700">04 — Kontak</p><h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Punya ide yang ingin diwujudkan?</h2></div><a href="https://www.linkedin.com/in/christian-melhan-455376334/" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950">Mari terhubung <ArrowUpRight size={18}/></a></div></section>
    </main>
    <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
      <p>© {new Date().getFullYear()} Christian Melhan</p>
      <div className="flex items-center gap-4">
        <a href="https://instagram.com/christianmelhannn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><InstagramIcon /> Instagram</a>
        <a href="https://www.linkedin.com/in/christian-melhan-455376334/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><LinkedInIcon /> LinkedIn</a>
        <a href="https://wa.me/6289689993392" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><WhatsAppIcon /> WhatsApp</a>
        <a href="https://github.com/Vetians" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><Code2 size={14}/> GitHub</a>
      </div>
    </footer>
  </div>
}
