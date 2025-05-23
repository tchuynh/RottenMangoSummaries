fetch('rotten_mango.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('episodes-container');

    data.forEach(ep => {
      const card = document.createElement('article');
      card.className = 'episode-card';

      card.innerHTML = `
        <a href="episode.html?id=${ep.videoId}">
          <img src="${ep.thumbnail}" alt="${ep.title}" class="thumbnail">
          <h2>${ep.title}</h2>
        </a>
        <p>${ep.description.slice(0, 100)}...</p>
        <span class="date">${new Date(ep.publishedAt).toLocaleDateString()}</span>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Failed to load episode data:", err);
  });
