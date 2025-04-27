const produtos = [
    {
      nome: "Chá de Camomila",
      preco: 12.90,
      imagem: "img/camomila.jpg"
    },
    {
      nome: "Castanha-do-Pará",
      preco: 29.90,
      imagem: "img/castanha.jpg"
    },
    {
      nome: "Tempero Curry",
      preco: 7.50,
      imagem: "img/curry.jpg"
    }
  ];
  
  const container = document.querySelector('.produtos-container');
  
  produtos.forEach(p => {
    const div = document.createElement('div');
    div.classList.add('produto');
    div.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}">
      <h3>${p.nome}</h3>
      <p>R$ ${p.preco.toFixed(2)}</p>
      <button onclick="adicionarAoCarrinho('${p.nome}', ${p.preco})">Comprar</button>
    `;
    container.appendChild(div);
  });
  
  function adicionarAoCarrinho(nome, preco) {
    alert(`🛒 Você adicionou "${nome}" ao carrinho!`);
  }
  