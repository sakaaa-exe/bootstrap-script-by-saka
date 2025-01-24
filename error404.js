const body = document.body;

    function createMeteor() {
      const meteor = document.createElement('div');
      meteor.classList.add('meteor');
      meteor.style.top = Math.random() * window.innerHeight + 'px';
      meteor.style.left = Math.random() * window.innerWidth + 'px';
      body.appendChild(meteor);
      setTimeout(() => meteor.remove(), 6000);
    }

    function createBubble() {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.left = Math.random() * 100 + 'vw';
      body.appendChild(bubble);
      setTimeout(() => bubble.remove(), 6000);
    }

    function createSymbol() {
      const symbol = document.createElement('div');
      symbol.classList.add('symbol');
      symbol.textContent = Math.random() > 0.5 ? '!' : '?';
      symbol.style.left = Math.random() * 100 + 'vw';
      symbol.style.top = Math.random() * 100 + 'vh';
      body.appendChild(symbol);
      setTimeout(() => symbol.remove(), 4000);
    }

    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');
      star.textContent = '✦';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.top = Math.random() * 100 + 'vh';
      body.appendChild(star);
      setTimeout(() => star.remove(), 3000);
    }

    setInterval(createMeteor, 800);
    setInterval(createBubble, 300);
    setInterval(createSymbol, 600);
    setInterval(createStar, 1000);

