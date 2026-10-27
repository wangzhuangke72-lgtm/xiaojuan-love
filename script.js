// 修改这里即可统一调整称呼、开场与情书内容。
const COPY = {
  nickname: '小娟宝宝',
  letter: `亲爱的小娟宝宝：\n\n其实我有好多好多话想对你说。\n\n自从我们在一起之后，我发现幸福不一定是多么轰轰烈烈的事情。\n\n有时候是和你聊天时不自觉扬起的嘴角，是想到你时突然变好的心情，也是那些想和你一起度过的普通日子。\n\n我喜欢你的可爱，也喜欢和你在一起时那个更加快乐的自己。\n\n我不知道未来的每一天会是什么样子，但我知道，我想认真地陪着你，关心你，理解你，和你一起经历生活里的阳光与风雨。\n\n我不想只在特别的日子对你好。\n\n我希望每一个平凡的日子，你都能感受到自己被珍惜、被爱着。\n\n小娟宝宝，谢谢你一直在我身边。\n\n如果可以，我想把以后的很多很多个明天，都留给我们。\n\n永远偏爱你的人 ❤️`
};
const $ = s => document.querySelector(s);
const scenes = [...document.querySelectorAll('.scene')];
function showScene(id){scenes.forEach(s=>{const active=s.id===id;s.hidden=!active;s.classList.toggle('active',active)});window.scrollTo({top:0,behavior:'smooth'});if(id==='story') document.querySelector('.story-lines').classList.remove('played')}
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>{ripple(b);showScene(b.dataset.go)}));
function ripple(el){const r=document.createElement('span');r.className='particle';r.textContent='♡';r.style.left=`${el.getBoundingClientRect().left+el.offsetWidth/2}px`;r.style.top=`${el.getBoundingClientRect().top}px`;r.style.setProperty('--dx','0px');r.style.setProperty('--dy','-65px');document.body.append(r);setTimeout(()=>r.remove(),1900)}
const ambient=$('#ambient');for(let i=0;i<9;i++){const f=document.createElement('span');f.className='float';f.textContent=i%3?'♡':'✦';f.style.left=`${Math.random()*100}%`;f.style.fontSize=`${12+Math.random()*16}px`;f.style.animationDuration=`${13+Math.random()*12}s`;f.style.animationDelay=`-${Math.random()*20}s`;ambient.append(f)}
$('#envelope').addEventListener('click',()=>{const env=$('#envelope');if(env.classList.contains('open'))return;env.classList.add('open');setTimeout(()=>{$('#letterPaper').hidden=false;$('#letterNext').hidden=false;typeLetter()},450)});
let typingTimer, typed=false;function typeLetter(){if(typed)return;typed=true;const out=$('#letterText');let i=0;function tick(){out.textContent=COPY.letter.slice(0,i++);if(i<=COPY.letter.length)typingTimer=setTimeout(tick,28)}tick()}
$('#showAll').addEventListener('click',()=>{clearTimeout(typingTimer);typed=true;$('#letterText').textContent=COPY.letter;$('#letterNext').hidden=false});
let starCount=0,starTimer;$('#secretStar').addEventListener('click',()=>{starCount++;clearTimeout(starTimer);if(starCount>=5){starCount=0;$('#secretCard').hidden=false;$('#secretCard').scrollIntoView({behavior:'smooth',block:'center'});for(let i=0;i<10;i++)particle('✦')}else starTimer=setTimeout(()=>starCount=0,1800)});
$('#closeSecret').addEventListener('click',()=>$('#secretCard').hidden=true);
$('#yesButton').addEventListener('click',()=>{showScene('finale');for(let i=0;i<26;i++)particle(i%3?'♡':'✦')});$('#hugButton').addEventListener('click',()=>showScene('hugScene'));
function particle(symbol){const p=document.createElement('span');p.className='particle';p.textContent=symbol;p.style.left=`${innerWidth/2+(Math.random()-.5)*80}px`;p.style.top=`${innerHeight*.45}px`;p.style.color=['#ce6f8d','#d1a36b','#e8a5b8'][Math.floor(Math.random()*3)];p.style.fontSize=`${14+Math.random()*18}px`;p.style.setProperty('--dx',`${(Math.random()-.5)*innerWidth*.8}px`);p.style.setProperty('--dy',`${-50-Math.random()*innerHeight*.65}px`);document.body.append(p);setTimeout(()=>p.remove(),1900)}
const audio=$('#music'), musicButton=$('#musicToggle');musicButton.addEventListener('click',async()=>{if(audio.paused){try{await audio.play();musicButton.textContent='♫';musicButton.classList.add('playing');musicButton.setAttribute('aria-label','暂停背景音乐')}catch{toast('请先添加音乐：assets/music.mp3')}}else{audio.pause();musicButton.classList.remove('playing');musicButton.setAttribute('aria-label','播放背景音乐')}});audio.volume=.28;audio.addEventListener('error',()=>{});
let toastTimer;function toast(message){const t=$('#toast');t.textContent=message;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2600)}
