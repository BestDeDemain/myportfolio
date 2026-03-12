/* ==========================================================
   main.js — Rethicedev Portfolio
   ========================================================== */

var i18n = {
  fr: {
    nav_about:'À Propos', nav_skills:'Skills', nav_services:'Services', nav_projects:'Projets', nav_contact:'Contact',
    mob_home:'Accueil', mob_about:'À Propos', mob_skills:'Compétences', mob_services:'Services', mob_projects:'Projets', mob_contact:'Contact',
    hero_badge:'Disponible pour des missions freelance',
    hero_name1:'Rogélio', hero_name2:'Rethicedev',
    hero_desc:"Informaticien programmeur passionné par la création d'applications web & mobiles modernes. Je transforme vos idées en solutions digitales robustes.",
    hero_btn1:'Me Contacter', hero_btn2:'Voir mon CV', hero_scroll:'DÉFILER',
    roles:['Développeur Full-Stack','Laravel & PHP Developer','Flutter Dev','Community Manager','UI/UX Enthusiast'],
    stat1_label:'Projets terminés', stat2_label:'Clients satisfaits', stat3_label:'Collaborations', stat4_label:"Années d'expérience",
    about_tag:'À Propos', about_title:'Qui suis-je ?', about_badge:'Années Exp.',
    about_p1:"Informaticien programmeur motivé et polyvalent, passionné par le développement et l'optimisation de systèmes.",
    about_p2:"Compétent en développement web full-stack, maintenance logicielle et outils numériques. Je conçois, développe et maintiens des applications web et mobiles.",
    info_name:'Nom', info_dob:'Langues', info_addr:'Adresse', info_email:'Email',
    int_music:'Musique', int_travel:'Voyage', int_photo:'Photos', int_sport:'Sport',
    skills_tag:'Compétences', skills_title:'Stack technique',
    svc_tag:'Services', svc_title:"Ce que j'offre",
    svc1_title:'Développement Web', svc1_desc:"Création d'applications web modernes et responsives, du design à la mise en production, avec une attention aux performances.",
    svc2_title:'Développement Mobile', svc2_desc:"Applications mobiles cross-platform avec Flutter pour iOS et Android, interfaces fluides et expériences utilisateur soignées.",
    svc3_title:'UI/UX Design', svc3_desc:"Conception d'interfaces intuitives et modernes. Expériences optimisées, prototypage et design systems.",
    svc4_title:'Community Manager', svc4_desc:"Gestion de communautés digitales, stratégie de contenu et social media pour développer votre présence en ligne.",
    hire_title1:'Vous avez un', hire_hl:'projet en tête', hire_title2:' ?',
    hire_desc:"N'hésitez pas à me contacter. Je vous offrirai une solution sur mesure adaptée à vos besoins.",
    hire_btn:'Démarrons ensemble',
    proj_tag:'Projets', proj_title:'Mes réalisations',
    proj1_cat:'Développement Web', proj1_name:'App web pour Best De Demain',
    proj2_cat:'Développement Web', proj2_name:'Gestion de site e-commerce',
    proj3_cat:'Développement Web', proj3_name:'Site de gestion de bibliothèque',
    proj4_cat:'Web Design', proj4_name:'Branding & Illustration Design',
    testi_tag:'Témoignages', testi_title:'Ce que disent mes clients',
    t1_text:"Rethicedev a développé notre plateforme e-commerce de A à Z. Son expertise en Laravel et son sens du détail ont été déterminants. Livré dans les délais avec un code de qualité professionnelle.",
    t1_name:'Roger Scott', t1_role:'Marketing Manager',
    t2_text:"L'application mobile développée avec Flutter répond parfaitement à nos besoins. Rethice a su comprendre nos exigences et proposer des solutions innovantes. Excellent suivi.",
    t2_name:'Ama Mensah', t2_role:'CEO Startup Tech',
    t3_text:"En tant que Community Manager, Rethice a transformé notre présence digitale. Notre communauté a augmenté de 300% en 6 mois. Approche stratégique remarquable.",
    t3_name:'Koffi Dossou', t3_role:'Directeur Communication',
    t4_text:"La refonte de notre site institutionnel était un vrai challenge. Rethicedev a modernisé notre interface tout en conservant notre identité. Résultat : +40% de temps sur le site.",
    t4_name:'Paul Bello', t4_role:'DSI, Entreprise ONG',
    contact_tag:'Contact', contact_title:'Travaillons ensemble',
    contact_h3:'Démarrons une conversation',
    contact_desc:"Vous avez un projet ou une question ? Tous les canaux sont ouverts. Je réponds généralement sous 24h.",
    ci_email_lbl:'Email', ci_phone_lbl:'Téléphone', ci_loc_lbl:'Localisation',
    form_name_lbl:'Nom', form_email_lbl:'Email', form_subj_lbl:'Sujet', form_msg_lbl:'Message',
    form_name_ph:'Votre nom complet', form_email_ph:'votre@email.com', form_subj_ph:'Objet de votre message', form_msg_ph:'Décrivez votre projet...',
    form_send:'Envoyer le message', form_alert:'Veuillez remplir tous les champs.',
    footer_about_title:'À propos', footer_about_desc:'Développeur Full-Stack & Community Manager basé à Abomey-Calavi, Bénin. Disponible pour des projets freelance.',
    footer_nav:'Navigation', footer_svc:'Services', footer_contact:'Contact',
    footer_about:'À Propos', footer_skills:'Compétences', footer_services:'Services', footer_projects:'Projets', footer_contact_l:'Contact',
    footer_svc1:'Développement Web', footer_svc2:'Développement Mobile', footer_svc3:'UI/UX Design', footer_svc4:'Community Manager',
    footer_copy:'© {year} Rogélio Réthice IDOLEKE — rethicedev',
    footer_loc:'Abomey-Calavi, Bénin 🇧🇯'
  },
  en: {
    nav_about:'About', nav_skills:'Skills', nav_services:'Services', nav_projects:'Projects', nav_contact:'Contact',
    mob_home:'Home', mob_about:'About', mob_skills:'Skills', mob_services:'Services', mob_projects:'Projects', mob_contact:'Contact',
    hero_badge:'Available for freelance missions',
    hero_name1:'Rogélio', hero_name2:'Rethicedev',
    hero_desc:'Passionate programmer & developer crafting modern web & mobile applications. I turn your ideas into robust, elegant digital solutions.',
    hero_btn1:'Contact Me', hero_btn2:'View my CV', hero_scroll:'SCROLL',
    roles:['Full-Stack Developer','Laravel & PHP Developer','Flutter Dev','Community Manager','UI/UX Enthusiast'],
    stat1_label:'Completed Projects', stat2_label:'Happy Clients', stat3_label:'Collaborations', stat4_label:'Years of Experience',
    about_tag:'About', about_title:'Who am I?', about_badge:'Years Exp.',
    about_p1:'Motivated and versatile programmer, passionate about development, system optimization and solving technical challenges.',
    about_p2:'Skilled in full-stack web development, software maintenance and digital tools. I design, build and maintain complete web or mobile applications.',
    info_name:'Name', info_dob:'Language', info_addr:'Address', info_email:'Email',
    int_music:'Music', int_travel:'Travel', int_photo:'Photos', int_sport:'Sport',
    skills_tag:'Skills', skills_title:'Tech Stack',
    svc_tag:'Services', svc_title:'What I offer',
    svc1_title:'Web Development', svc1_desc:'Building modern, responsive web applications from design to production, with a focus on performance and clean code.',
    svc2_title:'Mobile Development', svc2_desc:'Cross-platform mobile apps with Flutter for iOS and Android. Smooth interfaces and polished user experiences.',
    svc3_title:'UI/UX Design', svc3_desc:'Designing intuitive and modern user interfaces. Optimized experiences, prototyping and design systems.',
    svc4_title:'Community Manager', svc4_desc:'Managing and growing digital communities, content strategy, social media and growth hacking to boost your online presence.',
    hire_title1:'Got a', hire_hl:'project in mind', hire_title2:'?',
    hire_desc:"Don't hesitate to reach out. I'll provide a tailor-made solution adapted to your needs and budget.",
    hire_btn:"Let's get started",
    proj_tag:'Projects', proj_title:'My Work',
    proj1_cat:'Web Development', proj1_name:'Web App for Best De Demain',
    proj2_cat:'Web Development', proj2_name:'E-commerce Management Site',
    proj3_cat:'Web Development', proj3_name:'Library Management System',
    proj4_cat:'Web Design', proj4_name:'Branding & Illustration Design',
    testi_tag:'Testimonials', testi_title:'What my clients say',
    t1_text:"Rethicedev built our e-commerce platform from scratch. His Laravel expertise and eye for detail were decisive. Delivered on time with professional-grade code.",
    t1_name:'Roger Scott', t1_role:'Marketing Manager',
    t2_text:"The Flutter mobile app perfectly meets our needs. Rethice understood our requirements and proposed innovative solutions. Excellent follow-up and responsiveness.",
    t2_name:'Ama Mensah', t2_role:'CEO Startup Tech',
    t3_text:"As our Community Manager, Rethice completely transformed our digital presence. Our community grew 300% in 6 months. His strategic approach is remarkable.",
    t3_name:'Koffi Dossou', t3_role:'Communications Director',
    t4_text:"Redesigning our institutional website was a real challenge. Rethicedev modernized our interface while preserving our identity. Result: +40% time spent on the site.",
    t4_name:'Paul Bello', t4_role:'CIO, NGO Organization',
    contact_tag:'Contact', contact_title:"Let's work together",
    contact_h3:'Start a conversation',
    contact_desc:'Have a project or a question? All channels are open. I usually reply within 24 hours.',
    ci_email_lbl:'Email', ci_phone_lbl:'Phone', ci_loc_lbl:'Location',
    form_name_lbl:'Name', form_email_lbl:'Email', form_subj_lbl:'Subject', form_msg_lbl:'Message',
    form_name_ph:'Your full name', form_email_ph:'your@email.com', form_subj_ph:'Message subject', form_msg_ph:'Describe your project...',
    form_send:'Send message', form_alert:'Please fill in all fields.',
    footer_about_title:'About', footer_about_desc:'Full-Stack Developer & Community Manager based in Abomey-Calavi, Benin. Available for freelance projects.',
    footer_nav:'Navigation', footer_svc:'Services', footer_contact:'Contact',
    footer_about:'About', footer_skills:'Skills', footer_services:'Services', footer_projects:'Projects', footer_contact_l:'Contact',
    footer_svc1:'Web Development', footer_svc2:'Mobile Development', footer_svc3:'UI/UX Design', footer_svc4:'Community Manager',
    footer_copy:'© {year} Rogélio Réthice IDOLEKE — rethicedev',
    footer_loc:'Abomey-Calavi, Benin 🇧🇯'
  }
};

var currentLang = 'fr';
var typedRoles = [], ri = 0, ci = 0, deleting = false, typedTimer = null;
var testiIndex = 0;

function applyLang(lang) {
  var t = i18n[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] === undefined) return;
    var val = String(t[key]).replace('{year}', new Date().getFullYear());
    var icon = el.querySelector('i');
    if ((el.tagName === 'A' || el.tagName === 'BUTTON') && icon) {
      el.innerHTML = icon.outerHTML + ' ' + val;
    } else {
      el.textContent = val;
    }
  });
  var ph = { cName:'form_name_ph', cEmail:'form_email_ph', cSubject:'form_subj_ph', cMsg:'form_msg_ph' };
  Object.keys(ph).forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.placeholder = t[ph[id]];
  });
  document.getElementById('langBtn').textContent = lang === 'fr' ? 'EN' : 'FR';
  typedRoles = t.roles.slice();
  ri = 0; ci = 0; deleting = false;
  clearTimeout(typedTimer);
  document.getElementById('typed-text').textContent = '';
  typeStep();
}

function toggleLang() { currentLang = currentLang === 'fr' ? 'en' : 'fr'; applyLang(currentLang); }
function toggleTheme() {
  document.body.classList.toggle('light');
  document.getElementById('themeBtn').textContent = document.body.classList.contains('light') ? '🌙' : '☀';
}
function toggleMobile() { document.getElementById('mobileMenu').classList.toggle('open'); }
function closeMobile()  { document.getElementById('mobileMenu').classList.remove('open'); }

function typeStep() {
  if (!typedRoles.length) return;
  var cur = typedRoles[ri];
  if (!deleting) {
    ci++; document.getElementById('typed-text').textContent = cur.slice(0, ci);
    if (ci === cur.length) { deleting = true; typedTimer = setTimeout(typeStep, 1800); return; }
  } else {
    ci--; document.getElementById('typed-text').textContent = cur.slice(0, ci);
    if (ci === 0) { deleting = false; ri = (ri + 1) % typedRoles.length; typedTimer = setTimeout(typeStep, 300); return; }
  }
  typedTimer = setTimeout(typeStep, deleting ? 45 : 75);
}

function slideTesti(dir) {
  var track = document.getElementById('testiTrack');
  var cards = track.querySelectorAll('.testi-card');
  var perPage = window.innerWidth < 900 ? 1 : 2;
  var max = Math.ceil(cards.length / perPage) - 1;
  testiIndex = Math.max(0, Math.min(testiIndex + dir, max));
  var cardW = cards[0].getBoundingClientRect().width + 24;
  track.style.transform = 'translateX(-' + (testiIndex * cardW * perPage) + 'px)';
}

function sendMsg() {
  var t = i18n[currentLang];
  var n = document.getElementById('cName').value.trim();
  var e = document.getElementById('cEmail').value.trim();
  var s = document.getElementById('cSubject').value.trim();
  var m = document.getElementById('cMsg').value.trim();
  if (!n || !e || !m) { alert(t.form_alert); return; }
  window.location.href = 'mailto:idolekerogelio71@gmail.com?subject=' + encodeURIComponent(s || 'Contact') + '&body=' + encodeURIComponent('Name: ' + n + '\n\n' + m);
}

document.addEventListener('DOMContentLoaded', function() {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  applyLang('fr');

  var cursor = document.getElementById('cursor');
  var ring = document.getElementById('cursor-ring');
  var mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = 'translate(' + (mx-6) + 'px,' + (my-6) + 'px)';
  });
  (function loop() {
    rx += (mx-rx)*0.12; ry += (my-ry)*0.12;
    ring.style.transform = 'translate(' + (rx-18) + 'px,' + (ry-18) + 'px)';
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a,button,.skill-card,.service-card,.project-card,.contact-item').forEach(function(el) {
    el.addEventListener('mouseenter', function() { ring.style.width='60px'; ring.style.height='60px'; ring.style.opacity='0.8'; });
    el.addEventListener('mouseleave', function() { ring.style.width='36px'; ring.style.height='36px'; ring.style.opacity='0.5'; });
  });

  window.addEventListener('scroll', function() {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  });

  var revObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(function(el) { revObs.observe(el); });

  var cntObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (!e.isIntersecting) return;
      var el = e.target, target = parseInt(el.dataset.target, 10), v = 0;
      var inc = Math.ceil(target / 40);
      var tmr = setInterval(function() { v = Math.min(v+inc,target); el.textContent = v; if (v >= target) clearInterval(tmr); }, 50);
      cntObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter').forEach(function(el) { cntObs.observe(el); });

  var barObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (!e.isIntersecting) return;
      var bar = e.target.querySelector('.skill-bar-fill');
      if (bar) bar.style.width = bar.dataset.width;
      barObs.unobserve(e.target);
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skill-card').forEach(function(el) { barObs.observe(el); });
});
