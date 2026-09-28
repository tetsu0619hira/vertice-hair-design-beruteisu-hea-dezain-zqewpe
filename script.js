const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
toggle.addEventListener('click', () => { const expanded = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!expanded)); navigation.classList.toggle('open', !expanded); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
document.querySelector('form').addEventListener('submit', event => { event.preventDefault(); document.querySelector('.form-status').textContent = '入力内容を確認しました。これはデモのため送信されていません。ご予約は電話またはInstagramのDMでお問い合わせください。'; });
