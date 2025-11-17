const supportBtn = document.getElementById('supportBtn');
  const supportPanel = document.getElementById('supportPanel');
  const supportInput = document.getElementById('supportInput');
  const sendBtn = document.getElementById('sendBtn');
  const commentsList = document.getElementById('comments');

  // Agar true bo'lsa, panel yopilganda kommentlar DOM'dan o'chiriladi.
  // Agar false bo'lsa, kommentlar saqlanadi lekin panel yopilganda ko'rinmaydi.
  const clearOnClose = true;

  // Rasmga bosilganda panelni ochish/yopish (toggle)
  supportBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = supportPanel.classList.toggle('open');
    supportPanel.setAttribute('aria-hidden', String(!isOpen));
    if (isOpen) supportInput.focus();
    else if (clearOnClose) commentsList.innerHTML = '';
  });

  // Yuborish tugmasi
  sendBtn.addEventListener('click', () => {
    const text = supportInput.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.textContent = text;
    commentsList.appendChild(li);

    supportInput.value = '';
    supportInput.focus();
  });

  // Enter bilan yuborish
  supportInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendBtn.click();
    }
  });

  // Sahifaning boshqa joyiga bosilganda panelni yopish va kerak bo'lsa kommentlarni tozalash
  document.addEventListener('click', () => {
    if (supportPanel.classList.contains('open')) {
      supportPanel.classList.remove('open');
      supportPanel.setAttribute('aria-hidden', 'true');
      if (clearOnClose) commentsList.innerHTML = '';
    }
  });

  // Panel ichidagi kliklar tashqi klikni to'xtatadi (darhol yopilmasligi uchun)
  supportPanel.addEventListener('click', (e) => e.stopPropagation());



  