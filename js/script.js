document.addEventListener('DOMContentLoaded', () => {

  I18N.apply(I18N.getLang());

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => I18N.apply(btn.dataset.lang));
  });

  const burger = document.getElementById('burger');
  const tlClips = document.getElementById('tlClips');
  if (burger && tlClips) {
    burger.addEventListener('click', () => {
      const open = tlClips.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    tlClips.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        tlClips.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const modal = document.getElementById('modal');
  const modalVideo = document.getElementById('modalVideo');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalTools = document.getElementById('modalTools');
  const modalTag = document.getElementById('modalTag');
  const cards = document.querySelectorAll('.clip-card');
  let activeCard = null;

  function renderModalText(card) {
    const lang = I18N.getLang();
    const title = card.dataset.title || '';
    const desc = card.dataset[`desc${lang.charAt(0).toUpperCase()}${lang.slice(1)}`] || card.dataset.descEn || '';
    const tools = card.dataset.tools || '';
    const tagKey = card.dataset.tagKey;

    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalTools.textContent = tools ? `${I18N.t('modal.toolsPrefix')} ${tools}` : '';
    modalTag.textContent = tagKey ? I18N.t(`tag.${tagKey}`) : '';
  }

  function openModal(card) {
    activeCard = card;
    renderModalText(card);

    const video = card.dataset.video;
    if (video) {
      if (video.endsWith('.mp4')) {
        modalVideo.innerHTML = `<video src="${video}" controls autoplay></video>`;
      } else {
        modalVideo.innerHTML = `<iframe src="${video}" title="${card.dataset.title || ''}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
      }
    } else {
      modalVideo.innerHTML = `<div class="modal-video-placeholder">${I18N.t('modal.placeholder')}</div>`;
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    activeCard = null;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalVideo.innerHTML = '';
    document.body.style.overflow = '';
  }

  cards.forEach(card => {
    card.addEventListener('click', () => openModal(card));
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card);
      }
    });
  });

  modal?.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) closeModal();
  });

  document.addEventListener('i18n:changed', () => {
    if (activeCard && modal.classList.contains('open')) renderModalText(activeCard);
  });

  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  if (form) {
    form.addEventListener('submit', (e) => {
      const action = form.getAttribute('action') || '';
      if (action.includes('your-id')) {
        e.preventDefault();
        formNote.textContent = I18N.t('contact.formNoteHint');
      } else {
        formNote.textContent = I18N.t('contact.formNoteSending');
      }
    });
  }
});