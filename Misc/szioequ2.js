function P(x) { return x=='p0' || x=='p1'; }
function X(x) { return /^x[0-3]$/.test(x); }
function p(x) { return P(x) || X(x); }
function r(x) { return x=='acc' || x=='dat'; }
function R(x) { return r(x) || p(x) || x=='null'; }
function L(x) { return /^[1-9]$|^1[0-5]$/.test(x); }
function I(x) { return /^-?[1-9]\d{0,2}$/.test(x) || x=='0'; }
function V(x) { return I(x) || R(x); }


function std(x) {
  var s = x.split(' '), i, j, q=0;
  for (i=1; i<s.length; i++)
    for (j=i+1; j<s.length; j++)
      q += p(s[i]) && s[i]==s[j];
  if ((s[0]=='mov') < q) throw 0;
  function check(u) {
    if (s.length != u.length+1) throw 0;
    for (i=1; i<s.length; i++) {
      if (!u[i-1](s[i])) throw 0;
      if (s[i]=='null') s[i]=0;
    }
  }
  switch (s[0]) {
  case 'nop':
    check([]);
    return x;
  case 'mov':
    check([V,R]);
    if (s[2]==0) s[2]='null';
    if (r(s[1]) && s[1]==s[2]) return 'nop';
    if (P(s[1]) && s[2] == 'null') return 'mov 0 '+s[1];
    if (X(s[1]) < (s[2] == 'null')) return 'nop';
    if (I(s[1]) && P(s[2])) {
      if (+s[1]>100) s[1]='100';
      if (+s[1]<0) s[1]='0';
    }
    return s.join(' ');
  case 'jmp':
    check([L]);
    return x;
  case 'slp':
    check([V]);
    if (I(s[1])) {
      if (+s[1]<0) return 'nop';
    }
    return 'slp '+s[1];
  case 'slx':
    check([X]);
    return x;
  case 'add':
    check([V]);
    if (I(s[1])) {
      if (s[1]=='0') return 'nop';
      if (+s[1]<0) return 'sub '+ -s[1];
    }
    return x;
  case 'sub':
    check([V]);
    if (I(s[1])) {
      if (s[1]=='0') return 'nop';
      if (+s[1]<0) return 'add '+ -s[1];
    }
    if (s[1]=='acc') return 'mov 0 acc';
    return x;
  case 'mul':
    check([V]);
    if (s[1]=='0') return 'mov 0 acc';
    if (s[1]=='1') return 'nop';
    if (s[1]=='2') return 'add acc';
    return x;
  case 'not':
    check([]);
    return x;
  case 'dgt':
    check([V]);
    if (I(s[1]) || s[1]=='acc') {
      if (s[1]!='0' && s[1]!='1' && s[1]!='2')
        return 'mov 0 acc';
    }
    return 'dgt '+s[1];
  case 'dst':
    check([V,V]);
    if (I(s[1])) {
      if (s[1]!='0' && s[1]!='1' && s[1]!='2')
        return std('mov '+s[2]+' null');
    }
    if (I(s[2])) s[2]=s[2]%10 || (s[2]<0 ? '-10' : '0');
    if (s[1]=='0' && s[2]=='acc') return 'nop';
    return s.join(' ');
  case 'teq':
    check([V,V]);
    if (p(s[1]) && p(s[2])) return x;
    if (s[1] == s[2]) return 'tcp 1 0';
    if (I(s[1]) && I(s[2]))
      return 'tcp 0 1';
    if (P(s[2]) && (+s[1]<0 || +s[1]>100)) return 'tgt 0 '+s[2];
    if (P(s[1]) && (+s[2]<0 || +s[2]>100)) return 'tgt 0 '+s[1];
    return 'teq '+[s[1],s[2]].sort().join(' ');
  case 'tgt':
    if (p(s[1]) && p(s[2])) return x;
    return std('tlt '+s[2]+' '+s[1]);
  case 'tlt':
    check([V,V]);
    if (I(s[1]) && I(s[2]))
      return +s[1]<+s[2]?'tcp 1 0':'tcp 0 1';
    if (s[2]=='-999' && !p(s[1])) return 'tcp 0 1';
    if (s[1] == s[2]) return 'tcp 0 1';
    if (P(s[2]) && (+s[1]<0)) return 'tgt 101 '+s[2];
    if (P(s[1]) && (+s[2]>100)) return 'tgt 101 '+s[1];
    if (P(s[2]) && (+s[1]>99)) return 'tgt 0 '+s[2];
    if (P(s[1]) && (+s[2]<1)) return 'tgt 0 '+s[1];
    if (P(s[1]) && (s[2]=='1')) return std('teq 0 '+s[1]);
    if (P(s[2]) && (+s[1]>99)) return std('teq 100 '+s[2]);
    return s.join(' ');
  case 'tcp':
    check([V,V]);
    if (I(s[1]) && I(s[2]))
      return 'tcp ' + +(+s[1]>+s[2]) +' '+ -(+s[1]<+s[2]);
    if (P(s[2]) && (+s[1]<0)) return 'tgt 0 '+s[2];
    if (P(s[1]) && (+s[2]>100)) return 'tgt 0 '+s[1];
    if (P(s[2]) && (+s[1]>99)) return 'tgt 101 '+s[2];
    if (P(s[1]) && (+s[2]<1)) return 'tgt 101 '+s[1];
    if (s[1] == s[2]) return 'tcp 0 0';
    return s.join(' ');
  case 'gen':
    check([P,V,V]);
    if (I(s[2])) {
      if (+s[2]<0) s[2]='0';
    }
    if (I(s[3])) {
      if (+s[3]<0) s[3]='0';
    }
    return s.join(' ');
  default:
    throw 0;
  }
}

function foo() {
  try {
    vout.innerHTML = std(vin.value);
  } catch(e) {
    vout.innerHTML = 'Invalid command';
  }
}
