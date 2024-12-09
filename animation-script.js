// const { animate, scroll } = Motion;
// // Adiciona eventos de animação
// repos.forEach(repo => {
//     repo.addEventListener('mousemove', event => {
//       //const { motion } = window; // Acessa o Motion One via objeto global
//       const overlay = repo.querySelector('.repo');
//       const { left, top, width, height } = repo.getBoundingClientRect();
//       const x = ((event.clientX - left) / width) * 100;
//       const y = ((event.clientY - top) / height) * 100;
  
//       // Aplica animação gradiente conforme o mouse se move
//       motion(overlay, {
//         background: `radial-gradient(circle at ${x}% ${y}%, rgba(255, 0, 150, 0.7), rgba(0, 200, 255, 0))`,
//         filter: 'blur(5px)',
//       }, { duration: 0.3 });
//     });
  
//     repo.addEventListener('mouseleave', () => {
//       //const { motion } = window; // Acessa o Motion One via objeto global
//       const overlay = repo.querySelector('.repo');
  
//       // Restaura a animação ao estado inicial
//       motion(overlay, {
//         background: 'none',
//         filter: 'blur(0px)',
//       }, { duration: 0.3 });
//     });
//   });
console.log("Hi");