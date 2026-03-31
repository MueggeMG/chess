const C = 'rgba(201, 168, 76, 0.71)';
const FD = 17;

const P = {
  pawn: `
    <circle cx="20" cy="8" r="7.5"/>
    <path d="M17 14.5 Q14 22 13 31 L27 31 Q26 22 23 14.5 Q21.5 16 20 16 Q18.5 16 17 14.5Z"/>
    <path d="M13 31 Q12 36 11 40 L29 40 Q28 36 27 31Z"/>
    <rect x="8"  y="40" width="24" height="3"  rx="1.5"/>
    <rect x="5"  y="43" width="30" height="3"  rx="1.5"/>
    <rect x="3"  y="46" width="34" height="6"  rx="3"/>`,

  rook: `
    <rect x="4"  y="3"  width="9"  height="14" rx="1.5"/>
    <rect x="15" y="3"  width="10" height="14" rx="1.5"/>
    <rect x="27" y="3"  width="9"  height="14" rx="1.5"/>
    <rect x="4"  y="14" width="32" height="4"/>
    <rect x="7"  y="18" width="26" height="18"/>
    <path d="M7 36 Q5 40 5 43 L35 43 Q35 40 33 36Z"/>
    <rect x="3"  y="43" width="34" height="3"  rx="1.5"/>
    <rect x="1"  y="46" width="38" height="6"  rx="3"/>`,

  bishop: `
    <circle cx="20" cy="4"  r="4"/>
    <rect x="18.5" y="7" width="3" height="5" rx="1"/>
    <path d="M20 10 C15 19 12 29 13 39 L27 39 C28 29 25 19 20 10Z"/>
    <rect x="9"  y="39" width="22" height="3"  rx="1.5"/>
    <rect x="6"  y="42" width="28" height="3"  rx="1.5"/>
    <rect x="3"  y="45" width="34" height="7"  rx="3"/>`,

  queen: `
    <circle cx="20" cy="3"  r="3"/>
    <circle cx="11" cy="7"  r="2.5"/>
    <circle cx="29" cy="7"  r="2.5"/>
    <circle cx="4"  cy="12" r="2"/>
    <circle cx="36" cy="12" r="2"/>
    <polygon points="4,12 11,7 20,3 29,7 36,12 38,19 2,19"/>
    <path d="M4 19 Q5 28 7 38 L33 38 Q35 28 36 19Z"/>
    <rect x="5"  y="38" width="30" height="3"  rx="1.5"/>
    <rect x="3"  y="41" width="34" height="3"  rx="1.5"/>
    <rect x="1"  y="44" width="38" height="8"  rx="4"/>`,

  king: `
    <rect x="18.5" y="1"  width="3"  height="15" rx="1.5"/>
    <rect x="12"   y="6"  width="16" height="3"  rx="1.5"/>
    <path d="M15 16 Q13 26 12 38 L28 38 Q27 26 25 16Z"/>
    <rect x="9"  y="38" width="22" height="3"  rx="1.5"/>
    <rect x="6"  y="41" width="28" height="3"  rx="1.5"/>
    <rect x="3"  y="44" width="34" height="8"  rx="3"/>`,

  knight: `
    <path fill-rule="evenodd" d="
      M9 41 L9 31 Q8 24 11 19
      Q9 13 11 8
      Q14 3 20 3
      Q27 3 31 8
      Q35 13 34 19
      Q36 21 37 26 Q38 32 36 37 Q33 41 25 41 Z
      M24 14 m-3.5 0 a3.5 3.5 0 1 0 7 0 a3.5 3.5 0 1 0 -7 0
    "/>
    <polygon points="20,3 24,0 28,5 23,8"/>
    <ellipse cx="32" cy="21" rx="2.5" ry="1.5"/>
    <path d="M11 9 Q7 16 7 26 Q8 33 9 39 Q11 32 11.5 24 Q11.5 17 11 9Z"/>
    <rect x="8"  y="41" width="17" height="3"  rx="1.5"/>
    <rect x="5"  y="44" width="28" height="3"  rx="1.5"/>
    <rect x="3"  y="47" width="34" height="5"  rx="2.5"/>`,
};

const cfg = [
  { t: 'pawn', x: '2%', sz: 30, ra: 'rcw', rd: 11, fd: 0 },
  { t: 'rook', x: '9%', sz: 44, ra: 'rccw', rd: 9, fd: -3 },
  { t: 'bishop', x: '16%', sz: 38, ra: 'rcw', rd: 13, fd: -7 },
  { t: 'queen', x: '22%', sz: 50, ra: 'rccw', rd: 10, fd: -12 },
  { t: 'knight', x: '30%', sz: 46, ra: 'rcw', rd: 14, fd: -1 },
  { t: 'king', x: '37%', sz: 48, ra: 'rccw', rd: 8, fd: -5 },
  { t: 'pawn', x: '44%', sz: 28, ra: 'rccw', rd: 10, fd: -10 },
  { t: 'rook', x: '51%', sz: 42, ra: 'rcw', rd: 15, fd: -15 },
  { t: 'bishop', x: '58%', sz: 36, ra: 'rccw', rd: 12, fd: -8 },
  { t: 'queen', x: '64%', sz: 48, ra: 'rcw', rd: 9, fd: -2 },
  { t: 'knight', x: '71%', sz: 44, ra: 'rccw', rd: 11, fd: -13 },
  { t: 'king', x: '78%', sz: 46, ra: 'rcw', rd: 13, fd: -4 },
  { t: 'pawn', x: '84%', sz: 32, ra: 'rccw', rd: 12, fd: -9 },
  { t: 'bishop', x: '89%', sz: 36, ra: 'rcw', rd: 14, fd: -16 },
  { t: 'rook', x: '93%', sz: 40, ra: 'rccw', rd: 8, fd: -6 },
];

const sg = document.getElementById('sg');

cfg.forEach((c) => {
  const h = Math.round(c.sz * 1.3);
  const div = document.createElement('div');
  div.className = 'pw';
  div.style.cssText = `left:${c.x}; animation: fall ${FD}s linear ${c.fd}s infinite;`;
  div.innerHTML = `
    <svg viewBox="0 0 40 52" width="${c.sz}" height="${h}"
         style="animation: ${c.ra} ${c.rd}s linear ${c.fd}s infinite;"
         fill="${C}">
      ${P[c.t]}
    </svg>`;
  sg.appendChild(div);
});
