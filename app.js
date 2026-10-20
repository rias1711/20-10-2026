const $ = s => document.querySelector(s);
const names = ['Quỳnh Anh', 'Amber', 'Bơ Chan'];
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
let currentName = '', bag = [], wishIndex = 0, hugs = 0;
function nickname() {
  if (!bag.length) {
    bag = [...names].sort(() => Math.random() - .5);
    if (bag.at(-1) === currentName) [bag[0], bag[2]] = [bag[2], bag[0]];
  }
  currentName = bag.pop();
  $('.recipient').textContent = currentName + '.';
  $('.name').textContent = currentName;
  $('#nickname-note').textContent = 'Hôm nay gọi em là ' + currentName + ' nha ♡';
  $('#modal h2').textContent = 'Gửi ' + currentName + ', người anh thương';
  return currentName;
}
const wishes = [
  name => `${name} ơi, chúc em 20/10 vui hết cỡ. Hoa anh đã chuẩn bị, em chỉ cần mang theo nụ cười!`,
  name => `Thông báo: ${name} vừa được cấp quyền dễ thương không giới hạn. Hiệu lực: mãi mãi.`,
  name => `Gojo có Vô Hạn, còn anh có vô vàn thương nhớ dành cho ${name}.`,
  name => `${name} cứ tự tin làm điều em thích nhé. Anh xin một ghế ở hàng cổ vũ đầu tiên!`,
  name => `Hôm nay ${name} được quyền nghỉ ngơi, ăn ngon và nhận thật nhiều yêu thương. Không nhận khiếu nại!`,
  name => `Nếu ${name} thấy mệt, trạm sạc cái ôm của anh luôn mở cửa. Phí dịch vụ: một nụ cười.`,
  name => `Cảm ơn ${name} vì đã làm những ngày bình thường của anh trở nên đáng mong chờ.`,
  name => `Hoa dành cho hôm nay, còn yêu thương anh muốn dành cho ${name} mỗi ngày.`
];
let currentWish = '';
function show(index) {
  wishIndex = index % wishes.length;
  nickname();
  currentWish = wishes[wishIndex](currentName);
  $('#wish').textContent = '“' + currentWish + '”';
}
function burst(symbols = ['♡', '🌸', '✦']) {
  if (reduced()) return;
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.cssText = `left:${Math.random() * 94}%;bottom:${5 + Math.random() * 25}%;color:#b95772;animation-delay:${Math.random() * .3}s`;
    document.body.append(heart);
    setTimeout(() => heart.remove(), 2600);
  }
}
document.querySelectorAll('.flowers button').forEach((button, i) => button.onclick = () => { show(i); burst(); });
$('#next').onclick = () => { show(wishIndex + 1); burst(); };
$('#nickname').onclick = () => { show(wishIndex); burst(['🥑', '♡']); };
$('#open').onclick = () => $('#modal').showModal();
$('#read').onclick = () => {
  $('#modal').close();

  burst();
};
const gojoLines = [
  name => `Lãnh địa triển khai: ${name} được cưng chiều! Trong lãnh địa này, mọi muộn phiền tạm thời đứng ngoài nhé.`,
  name => `Nhiệm vụ cấp đặc biệt: làm ${name} cười. Phần thưởng cho anh: một cái ôm.`,
  name => `Gojo sensei xác nhận: độ dễ thương của ${name} đã vượt ngưỡng đo. Máy đo xin nghỉ phép!`,
  name => `Vô Hạn đã bật. Khoảng cách giữa ${name} và bó hoa này bằng đúng một cú chạm!`
];
let gojoIndex = 0;
$('#gojo').onclick = () => {
  nickname();
  currentWish = wishes[wishIndex](currentName);
  $('#wish').textContent = '“' + currentWish + '”';
  $('#gojo-line').textContent = gojoLines[gojoIndex++ % gojoLines.length](currentName);
  burst(['✦', '💜', '∞']);
  if (!reduced()) {
    const effect = document.createElement('div');
    effect.className = 'domain'; document.body.append(effect);
    setTimeout(() => effect.remove(), 1000);
  }
};
$('#hug').onclick = () => {
  hugs++; nickname();
  currentWish = `Đã nhận ${hugs} cái ôm từ ${currentName}! Anh gửi lại ${hugs * 10} cái. Gojo bảo: phép tính này hợp lý ♡`;
  $('#wish').textContent = currentWish;
  burst(['♡', '💗', '🥑']);
  $('#wish').scrollIntoView({behavior: reduced() ? 'instant' : 'smooth', block:'center'});
};
$('#download').onclick = () => {
  const canvas = document.createElement('canvas'); canvas.width = 1080; canvas.height = 1350;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fbf5ed'; ctx.fillRect(0,0,1080,1350);
  ctx.strokeStyle = '#c4addc'; ctx.lineWidth = 3; ctx.strokeRect(45,45,990,1260);
  ctx.textAlign = 'center'; ctx.fillStyle = '#a94863'; ctx.font = '26px Arial';
  ctx.fillText('QUỲNH ANH · AMBER · BƠ CHAN',540,170);
  ctx.font = '70px Georgia'; ctx.fillText('Chúc mừng 20/10',540,310);
  ctx.font = 'italic 60px Georgia'; ctx.fillText(currentName,540,420);
  ctx.font = '110px Arial'; ctx.fillText('🌷 🥑 🌸',540,620);
  ctx.fillStyle = '#754655'; ctx.font = '34px Arial';
  let line = '', y = 760;
  for (const word of currentWish.split(' ')) {
    if (ctx.measureText(line + word).width > 800) {ctx.fillText(line.trim(),540,y); line=''; y+=53;}
    line += word + ' ';
  }
  ctx.fillText(line.trim(),540,y);
  ctx.font = 'italic 38px Georgia'; ctx.fillText('Thương em, Anh ♡',540,1160);
  ctx.font = '23px Arial'; ctx.fillStyle='#83628d'; ctx.fillText('Gojo delivery · Đã giao một vườn yêu thương ✦',540,1240);
  const link = document.createElement('a'); link.download = '20-10-Quynh-Anh.png'; link.href = canvas.toDataURL('image/png'); link.click();
};
show(0);
const memories = Array.from({length:5}, (_, i) => `photos/image${i}.webp`);
let photoIndex = Math.floor(Math.random() * memories.length);
function renderPhoto(index) {
  photoIndex = (index + memories.length) % memories.length;
  document.querySelector('main').style.setProperty('--card-photo', `url("${memories[photoIndex]}")`);
}
// Preload locally so every interaction can show the next background immediately.
memories.forEach(src => {const image = new Image(); image.src = src;});
renderPhoto(photoIndex);
document.querySelectorAll('.flowers button, .actions button').forEach(button => {
  button.addEventListener('click', () => {
    const offset = 1 + Math.floor(Math.random() * (memories.length - 1));
    renderPhoto(photoIndex + offset);
  });
});
