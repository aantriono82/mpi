function renderQuiz(questions, elId, scoreId){
  var box=document.getElementById(elId); if(!box) return;
  var score=0, answered=0;
  function updateScore(){ var s=document.getElementById(scoreId); if(s) s.textContent=score+" dari "+questions.length+" benar (skor ini hanya di halaman ini, hilang saat halaman ditutup)."; }
  questions.forEach(function(item, i){
    var div=document.createElement('div'); div.className='q';
    div.innerHTML='<p><b>'+(i+1)+'. '+item.q+'</b></p>';
    var exp=document.createElement('div'); exp.className='explain'; exp.textContent=item.e;
    item.o.forEach(function(opt, j){
      var b=document.createElement('button'); b.className='opt'; b.type='button'; b.textContent=opt;
      b.onclick=function(){
        if(div.dataset.done) return; div.dataset.done='1'; answered++;
        if(j===item.a){ b.classList.add('correct'); score++; } else { b.classList.add('wrong'); div.querySelectorAll('.opt')[item.a].classList.add('correct'); }
        exp.classList.add('show'); div.appendChild(exp); updateScore();
      };
      div.appendChild(b);
    });
    box.appendChild(div);
  });
  updateScore();
}
function val(id, fallback){ var v=parseFloat(document.getElementById(id).value); return isNaN(v)?fallback:v; }
function money(n){ return 'Rp'+Math.round(n).toLocaleString('id-ID'); }
