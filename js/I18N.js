/* =========================================================
   I18N — переключение EN / RU / NL
   ========================================================= */
window.I18N = (function () {

  const dict = {
    en: {
      "nav.reel": "Reel", "nav.work": "Work", "nav.about": "About",
      "nav.skills": "Skills", "nav.contact": "Contact",

      "hero.eyebrow": "REC — video editing for hire",
      "hero.title": "I cut footage into stories<br>people finish watching.",
      "hero.sub": "I'm a video editor working in Premiere Pro and After Effects — color grading, sound, pacing. Available for ads, music videos, social content and wedding films.",
      "hero.ctaWork": "View work",
      "hero.ctaContact": "Start a project",
      "hero.scrollCue": "scroll",

      "work.eyebrow": "01 — Track V1",
      "work.heading": "Selected work",
      "work.lead": "A few recent projects. Click a card to see details.",

      "tag.wedding": "Wedding", "tag.advertising": "Advertising",
      "tag.musicvideo": "Music video", "tag.social": "Social",
      "tag.vlog": "Vlog", "tag.corporate": "Corporate",

      "about.eyebrow": "02 — Track V2",
      "about.heading": "About",
      "about.p1": "I edit at the point where rhythm meets meaning — cutting footage isn't just joining clips, it's guiding the viewer through a story they'll want to finish.",
      "about.p2": "I work with ads, music videos, wedding films and social content. Premiere Pro handles the edit and sound, After Effects covers motion graphics and compositing, DaVinci Resolve handles the grade. I keep deadlines and always talk through references before starting.",
      "about.factTools": "Tools", "about.factFormats": "Formats",
      "about.factFormatsVal": "Ads, music videos, weddings, Reels/TikTok, vlogs",
      "about.factTurnaround": "Turnaround",
      "about.factTurnaroundVal": "Short edit — 2–4 days, full project — by agreement",

      "skills.eyebrow": "03 — Track V3 / A1",
      "skills.heading": "Skills",
      "skills.lead": "Shown as timeline tracks — the longer the clip, the deeper the experience.",
      "skills.track1": "editing, sound, colour",
      "skills.track2": "motion graphics, titles",
      "skills.track3name": "Colour grading",
      "skills.track3": "DaVinci Resolve",
      "skills.track4name": "Sound &amp; music",
      "skills.track4": "mixing, track selection",

      "contact.eyebrow": "04 — Export",
      "contact.heading": "Let's talk about your project",
      "contact.lead": "Send a few lines about the job — I'll reply within a day.",
      "contact.formName": "Name", "contact.formNamePh": "How should I address you",
      "contact.formContact": "Contact", "contact.formContactPh": "Email or Telegram",
      "contact.formMessage": "About the project", "contact.formMessagePh": "What needs editing, and by when",
      "contact.formButton": "Export message",
      "contact.formNoteHint": "Connect the form to Formspree/Getform: replace the action in index.html with your own link.",
      "contact.formNoteSending": "Sending…",
      "contact.sideEmail": "Email", "contact.sideTelegram": "Telegram",
      "contact.sideInstagram": "Instagram", "contact.sideLocation": "Location",
      "contact.sideLocationVal": "Netherlands, remote",

      "footer.text": "© {year} Alex Reeve. All video rights belong to the respective clients.",

      "modal.placeholder": "Add a video link to the card's data-video attribute to play it here.",
      "modal.toolsPrefix": "Tools:",
    },

    ru: {
      "nav.reel": "Реел", "nav.work": "Работы", "nav.about": "Обо мне",
      "nav.skills": "Навыки", "nav.contact": "Контакты",

      "hero.eyebrow": "REC — монтаж видео на заказ",
      "hero.title": "Собираю кадры в истории,<br>которые досматривают.",
      "hero.sub": "Я видеомонтажёр, работаю в Premiere Pro и After Effects — цветокоррекция, звук, ритм монтажа. Беру рекламу, клипы, контент для соцсетей и свадебные фильмы.",
      "hero.ctaWork": "Смотреть работы",
      "hero.ctaContact": "Обсудить проект",
      "hero.scrollCue": "прокрутить",

      "work.eyebrow": "01 — Дорожка V1",
      "work.heading": "Избранные работы",
      "work.lead": "Несколько недавних проектов. Нажмите на карточку, чтобы увидеть детали.",

      "tag.wedding": "Свадьба", "tag.advertising": "Реклама",
      "tag.musicvideo": "Клип", "tag.social": "Соцсети",
      "tag.vlog": "Влог", "tag.corporate": "Корпоратив",

      "about.eyebrow": "02 — Дорожка V2",
      "about.heading": "Обо мне",
      "about.p1": "Я монтирую на стыке ритма и смысла — склеить кадры недостаточно, нужно провести зрителя через историю, которую он захочет досмотреть.",
      "about.p2": "Работаю с рекламой, клипами, свадебным видео и контентом для соцсетей. Premiere Pro — для монтажа и звука, After Effects — для моушн-графики и композитинга, DaVinci Resolve — для цвета. Держу дедлайны и всегда обсуждаю референсы перед началом.",
      "about.factTools": "Инструменты", "about.factFormats": "Форматы",
      "about.factFormatsVal": "Реклама, клипы, свадьбы, Reels/TikTok, влоги",
      "about.factTurnaround": "Сроки",
      "about.factTurnaroundVal": "Короткий ролик — 2–4 дня, полный проект — по договорённости",

      "skills.eyebrow": "03 — Дорожка V3 / A1",
      "skills.heading": "Навыки",
      "skills.lead": "Показаны как дорожки таймлайна — чем длиннее клип, тем увереннее владение.",
      "skills.track1": "монтаж, звук, цвет",
      "skills.track2": "моушн-графика, титры",
      "skills.track3name": "Цветокоррекция",
      "skills.track3": "DaVinci Resolve",
      "skills.track4name": "Звук и музыка",
      "skills.track4": "сведение, подбор треков",

      "contact.eyebrow": "04 — Экспорт",
      "contact.heading": "Обсудим проект?",
      "contact.lead": "Напишите пару слов о задаче — отвечу в течение дня.",
      "contact.formName": "Имя", "contact.formNamePh": "Как к вам обращаться",
      "contact.formContact": "Контакт", "contact.formContactPh": "Email или Telegram",
      "contact.formMessage": "О проекте", "contact.formMessagePh": "Что нужно смонтировать и в какие сроки",
      "contact.formButton": "Экспортировать сообщение",
      "contact.formNoteHint": "Подключите форму к Formspree/Getform: замените action в index.html на свою ссылку.",
      "contact.formNoteSending": "Отправляю…",
      "contact.sideEmail": "Email", "contact.sideTelegram": "Telegram",
      "contact.sideInstagram": "Instagram", "contact.sideLocation": "Локация",
      "contact.sideLocationVal": "Нидерланды, удалённо",

      "footer.text": "© {year} Алекс Рив. Все права на видео принадлежат соответствующим клиентам.",

      "modal.placeholder": "Добавьте ссылку на видео в атрибут data-video карточки, чтобы оно проигрывалось здесь.",
      "modal.toolsPrefix": "Инструменты:",
    },

    nl: {
      "nav.reel": "Reel", "nav.work": "Werk", "nav.about": "Over mij",
      "nav.skills": "Vaardigheden", "nav.contact": "Contact",

      "hero.eyebrow": "REC — videomontage op aanvraag",
      "hero.title": "Ik monteer beelden tot verhalen<br>die worden afgekeken.",
      "hero.sub": "Ik ben videomonteur en werk met Premiere Pro en After Effects — kleurcorrectie, geluid, montagetempo. Beschikbaar voor reclame, videoclips, social content en trouwfilms.",
      "hero.ctaWork": "Bekijk werk",
      "hero.ctaContact": "Project bespreken",
      "hero.scrollCue": "scroll",

      "work.eyebrow": "01 — Spoor V1",
      "work.heading": "Geselecteerd werk",
      "work.lead": "Enkele recente projecten. Klik op een kaart voor details.",

      "tag.wedding": "Bruiloft", "tag.advertising": "Reclame",
      "tag.musicvideo": "Videoclip", "tag.social": "Social media",
      "tag.vlog": "Vlog", "tag.corporate": "Zakelijk",

      "about.eyebrow": "02 — Spoor V2",
      "about.heading": "Over mij",
      "about.p1": "Ik monteer op het snijvlak van ritme en betekenis — beelden aan elkaar plakken is niet genoeg, de kijker moet door het verhaal worden meegenomen tot het einde.",
      "about.p2": "Ik werk aan reclame, videoclips, trouwfilms en social content. Premiere Pro voor montage en geluid, After Effects voor motion graphics en compositing, DaVinci Resolve voor de kleur. Ik houd me aan deadlines en bespreek referenties altijd vooraf.",
      "about.factTools": "Tools", "about.factFormats": "Formats",
      "about.factFormatsVal": "Reclame, videoclips, trouwfilms, Reels/TikTok, vlogs",
      "about.factTurnaround": "Doorlooptijd",
      "about.factTurnaroundVal": "Korte montage — 2–4 dagen, volledig project — in overleg",

      "skills.eyebrow": "03 — Spoor V3 / A1",
      "skills.heading": "Vaardigheden",
      "skills.lead": "Weergegeven als tijdlijnsporen — hoe langer de clip, hoe dieper de ervaring.",
      "skills.track1": "montage, geluid, kleur",
      "skills.track2": "motion graphics, titels",
      "skills.track3name": "Kleurcorrectie",
      "skills.track3": "DaVinci Resolve",
      "skills.track4name": "Geluid &amp; muziek",
      "skills.track4": "mixen, muziekkeuze",

      "contact.eyebrow": "04 — Exporteren",
      "contact.heading": "Zullen we je project bespreken?",
      "contact.lead": "Stuur een paar regels over de klus — ik reageer binnen een dag.",
      "contact.formName": "Naam", "contact.formNamePh": "Hoe mag ik je noemen",
      "contact.formContact": "Contact", "contact.formContactPh": "E-mail of Telegram",
      "contact.formMessage": "Over het project", "contact.formMessagePh": "Wat moet er gemonteerd worden en tegen wanneer",
      "contact.formButton": "Bericht exporteren",
      "contact.formNoteHint": "Koppel het formulier aan Formspree/Getform: vervang de action in index.html door je eigen link.",
      "contact.formNoteSending": "Bezig met verzenden…",
      "contact.sideEmail": "E-mail", "contact.sideTelegram": "Telegram",
      "contact.sideInstagram": "Instagram", "contact.sideLocation": "Locatie",
      "contact.sideLocationVal": "Nederland, op afstand",

      "footer.text": "© {year} Alex Reeve. Alle videorechten liggen bij de betreffende klanten.",

      "modal.placeholder": "Voeg een videolink toe aan het data-video-attribuut van de kaart om deze hier af te spelen.",
      "modal.toolsPrefix": "Tools:",
    },
  };

  let current = localStorage.getItem('lang') || 'en';
  if (!dict[current]) current = 'en';

  function t(key) {
    return (dict[current] && dict[current][key]) || dict.en[key] || key;
  }

  function apply(lang) {
    if (!dict[lang]) return;
    current = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });

    const yearHolder = t('footer.text').replace('{year}', new Date().getFullYear());
    const footerText = document.querySelector('[data-i18n="footer.text"]');
    if (footerText) footerText.innerHTML = yearHolder;

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang } }));
  }

  return { t, apply, getLang: () => current, dict };
})();