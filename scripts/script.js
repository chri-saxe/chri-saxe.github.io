document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('mousemove', (event) => {
      if (event.buttons !== 1) return; // Ne dessine que lorsque le bouton gauche de la souris est enfoncé
  
      const circle = document.createElement('div');
      circle.className = 'circle';
      circle.style.left = `${event.clientX - 10}px`; // Centre le cercle sous la souris
      circle.style.top = `${event.clientY - 10}px`; // Centre le cercle sous la souris
  
      document.body.appendChild(circle);
  
      // Supprime le cercle après l'animation pour éviter de surcharger le DOM
      circle.addEventListener('animationend', () => {
        circle.remove();
      });
    });
  });