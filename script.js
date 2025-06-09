// ---- Dados dinâmicos para atualizar o site ----
const realityStatus = {
  disponivel: true, // true = disponível para convite, false = está em realities
  realitiesAtuais: [
    {
      nome: 'The Farm Pink (@thefarmpink4)',
      linkTikTok: 'https://www.tiktok.com/@thefarmpink4/photo/7513346061688114438?_d=secCgYIASAHKAESPgo8e3ciJ%2FUj0PQ7tUMB8bAaeZ3DwSRJkeeMsrJj9nOXU3hBIForpnh1NhV4C4zPtqNNRQAv6uFhB5faOMaqGgA%3D&_r=1&_svg=1&checksum=bd11f4e694d6302fbeb38209ea9b84199cae3dc63b6012b1e2b5938cb7cc83c6&cover_exp=v1&link_reflow_popup_iteration_sharer=%7B%22dynamic_cover%22%3A1%2C%22follow_to_play_duration%22%3A-1%2C%22click_empty_to_play%22%3A1%2C%22profile_clickable%22%3A1%7D&preview_pb=0&sec_user_id=MS4wLjABAAAA9zutJ0EcDw6kvmhh7EvUJCPnkTPpJZJ1sZP5ap0L-NvSZmB4L3jHDfrh1faXB7l3&share_app_id=1233&share_item_id=7513346061688114438&share_link_id=B71048AE-1277-45A1-84E7-68963C75D51B&share_scene=11&sharer_language=pt&social_share_type=14&source=h5_m&timestamp=1749403106&tt_from=copy&u_code=djh4c38h137ib2&ug_btm=b5836%2Cb2878&ug_photo_idx=0&user_id=6985235919839331333&utm_campaign=client_share&utm_medium=ios&utm_source=copy',
      imagem: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-i-photomode-us/4bd120a4cab04457964ec933ff01f5da~tplv-photomode-image.jpeg?lk3s=81f88b70&x-expires=1749574800&x-signature=Wjoe4mFyILGUsRetsF%2BGGiYcgCY%3D&shp=81f88b70&shcp=-' // substitua pela imagem real
    },
    {
      nome: 'Power Of Stars 4 (@poweroffstars)',
      linkTikTok: 'https://www.tiktok.com/@poweroffstars/photo/7512242396252474630?_d=secCgYIASAHKAESPgo8b1SrnQs3O3WaDH9IhSOFEHV%2BoTj0ths8ETle1YsvDf0U77XVXtfjuzqqyT3wX%2BCRkJ4UUvhJrebcLMtZGgA%3D&_r=1&_svg=1&checksum=5160d18e3c9dfc84d070c5c1c04e78aa9ba0db668103645bb17040b9f94e9209&cover_exp=v1&link_reflow_popup_iteration_sharer=%7B%22dynamic_cover%22%3A1%2C%22follow_to_play_duration%22%3A-1%2C%22click_empty_to_play%22%3A1%2C%22profile_clickable%22%3A1%7D&preview_pb=0&sec_user_id=MS4wLjABAAAA9zutJ0EcDw6kvmhh7EvUJCPnkTPpJZJ1sZP5ap0L-NvSZmB4L3jHDfrh1faXB7l3&share_app_id=1233&share_item_id=7512242396252474630&share_link_id=86748186-A666-4951-B54C-C0F53184F548&share_scene=11&sharer_language=pt&social_share_type=14&source=h5_m&timestamp=1749403221&tt_from=copy&u_code=djh4c38h137ib2&ug_btm=b5836%2Cb2878&ug_photo_idx=0&user_id=6985235919839331333&utm_campaign=client_share&utm_medium=ios&utm_source=copy',
      imagem: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-i-photomode-us/7a6dded606bf42e2bc4c3651adf4501b~tplv-photomode-image.jpeg?lk3s=81f88b70&x-expires=1749574800&x-signature=LvJ7%2FsbREatkyuS8B8DgoQwydnc%3D&shp=81f88b70&shcp=-' // substitua pela imagem real
    }
  ],
  votacaoAtiva: false,
  proximaVotacao: '2025-06-10',
  mutirao: {
    alvo: 'JogadorX',
    objetivo: 'sair' // 'sair' ou 'ficar'
  }
};

// Lista de vídeos TikTok para posts recentes (adicione ou remova)
const postsTikTok = [
  {
    videoId: '7513647062345354501',
    descricao: 'Site Da Freira'
  },
  {
    videoId: '7505961112458890551',
    descricao: 'A Freira Dançando'
  },
  {
    videoId: '7511846396035681541',
    descricao: 'MUSICA OFICIAL DA FREIRA'
  }
];

// Função para mostrar ou esconder seções conforme scroll
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("revealed");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);

// Função para atualizar o status do reality (disponível ou realities atuais)
function atualizarStatusReality() {
  const container = document.getElementById('realityContent');
  container.innerHTML = ''; // limpa conteúdo antes de atualizar

  if (realityStatus.indisponivel) {
    // Disponível: mostra botão convidar
    const btn = document.createElement('a');
    btn.href = 'https://tiktok.com/@freira_rp'; // link para convite
    btn.target = '_blank';
    btn.textContent = 'Convidar a Freira para o Reality';
    btn.classList.add('btn');
    container.appendChild(btn);
  } else {
    // Indisponível: mostra realities que está participando
    const lista = document.createElement('div');
    lista.classList.add('post-grid');

    realityStatus.realitiesAtuais.forEach(reality => {
      const card = document.createElement('div');
      card.classList.add('post');

      const link = document.createElement('a');
      link.href = reality.linkTikTok;
      link.target = '_blank';

      const img = document.createElement('img');
      img.src = reality.imagem;
      img.alt = reality.nome;

      link.appendChild(img);
      card.appendChild(link);

      const nome = document.createElement('p');
      nome.textContent = reality.nome;
      card.appendChild(nome);

      lista.appendChild(card);
    });

    container.appendChild(lista);
  }

  // Informação sobre votação
  if (realityStatus.votacaoAtiva) {
    const votacaoInfo = document.createElement('p');
    votacaoInfo.style.marginTop = '20px';
    votacaoInfo.innerHTML = `<strong>Votação ativa!</strong> Próxima votação: ${realityStatus.proximaVotacao}.<br>
    Mutirão para <em>${realityStatus.mutirao.alvo}</em> ${realityStatus.mutirao.objetivo}.`;
    container.appendChild(votacaoInfo);
  }
}

// Função para montar os posts recentes com vídeos do TikTok
function montarPostsRecentes() {
  const grid = document.getElementById('postGrid');
  postsTikTok.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.tiktok.com/embed/v2/${post.videoId}`;
    iframe.width = '300';
    iframe.height = '500';
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    iframe.scrolling = 'no';

    const desc = document.createElement('p');
    desc.textContent = post.descricao;

    postDiv.appendChild(iframe);
    postDiv.appendChild(desc);
    grid.appendChild(postDiv);
  });
}

// Inicialização geral
window.addEventListener('load', () => {
  atualizarStatusReality();
  montarPostsRecentes();
  revealOnScroll();
});
