// script.js - tabs + simple form success handler for demo
document.addEventListener('DOMContentLoaded', ()=>{
  const tabs = document.querySelectorAll('.tabs button');
  const panels = document.querySelectorAll('.tab-panel');
  tabs.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      tabs.forEach(b=>{ b.setAttribute('aria-selected','false'); });
      btn.setAttribute('aria-selected','true');
      const target = btn.dataset.target;
      panels.forEach(p=>{
        if(p.id === target){
          p.style.display='block';
          p.setAttribute('aria-hidden','false');
        } else {
          p.style.display='none';
          p.setAttribute('aria-hidden','true');
        }
      });
      document.querySelector('.content').scrollIntoView({behavior:'smooth'});
    });
  });

  // Local demo form handler: prevents navigation and shows a friendly message if endpoint is the placeholder.
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e)=>{
    const action = form.getAttribute('action');
    if(action.includes('AQUI_SEU_ENDPOINT_FORMSPREE')){
      e.preventDefault();
      alert('Formulário em modo de demonstração: substitua o atributo action pelo seu endpoint do Formspree para habilitar envio real.');
    } else {
      // allow normal submission for real endpoints
    }
  });
});
