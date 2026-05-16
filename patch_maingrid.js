const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. arc-item hover 캡션 CSS 추가
html = html.replace('.arc-fi:hover .arc-caption{opacity:1;}',
  '.arc-fi:hover .arc-caption{opacity:1;}\n.arc-item:hover .arc-caption{opacity:1;}');

// 2. 메인 그리드 img_01(동행 포스터) -> img_29(헤어질결심)로 교체
html = html.replace(
  /<div class="arc-item fi"><img src="assets\/img\/img_01\.jpeg"([^>]*)>/,
  '<div class="arc-item fi"><img src="assets/img/img_29.jpeg"$1>'
);

// 3. 해당 캡션도 헤어질결심으로 교체
html = html.replace(
  /<div class="arc-item fi"><img src="assets\/img\/img_29\.jpeg"[^>]*><div class="arc-caption"><span data-ko="[^"]*" data-en="[^"]*">[^<]*<\/span><\/div>/,
  (match) => match
    .replace(/data-ko="[^"]*"/, 'data-ko="2024 인천문화재단 지원사업 댄스컴퍼니 브레이브맨 〈헤어질결심〉 기획PD"')
    .replace(/data-en="[^"]*"/, 'data-en="2024 Incheon Cultural Foundation Support, Dance Company Braveman · Decision to Part · Creative Producer"')
    .replace(/>2[^<]*<\/span>/, '>2024 인천문화재단 지원사업 댄스컴퍼니 브레이브맨 〈헤어질결심〉 기획PD</span>')
);

fs.writeFileSync('index.html', html);
console.log('done');
