var Za =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (Q, pa, C) {
          if (C.get || C.set)
            throw new TypeError("ES3 does not support getters and setters.");
          Q != Array.prototype && Q != Object.prototype && (Q[pa] = C.value);
        },
  $a =
    "undefined" != typeof window && window === this
      ? this
      : "undefined" != typeof global && null != global
        ? global
        : this;
function ab() {
  ab = function () {};
  $a.Symbol || ($a.Symbol = gb);
}
var hb = 0;
function gb(Q) {
  return "jscomp_symbol_" + (Q || "") + hb++;
}
function qb() {
  ab();
  var Q = $a.Symbol.iterator;
  Q || (Q = $a.Symbol.iterator = $a.Symbol("iterator"));
  "function" != typeof Array.prototype[Q] &&
    Za(Array.prototype, Q, {
      configurable: !0,
      writable: !0,
      value: function () {
        return Gb(this);
      },
    });
  qb = function () {};
}
function Gb(Q) {
  var pa = 0;
  return Hb(function () {
    return pa < Q.length ? { done: !1, value: Q[pa++] } : { done: !0 };
  });
}
function Hb(Q) {
  qb();
  Q = { next: Q };
  Q[$a.Symbol.iterator] = function () {
    return this;
  };
  return Q;
}
function hc(Q) {
  qb();
  var pa = Q[Symbol.iterator];
  return pa ? pa.call(Q) : Gb(Q);
}
function ic(Q, pa) {
  qb();
  Q instanceof String && (Q += "");
  var C = 0,
    fa = {
      next: function () {
        if (C < Q.length) {
          var da = C++;
          return { value: pa(da, Q[da]), done: !1 };
        }
        fa.next = function () {
          return { done: !0, value: void 0 };
        };
        return fa.next();
      },
    };
  fa[Symbol.iterator] = function () {
    return fa;
  };
  return fa;
}
function hf(Q, pa) {
  if (pa) {
    for (var C = $a, fa = Q.split("."), da = 0; da < fa.length - 1; da++) {
      var W = fa[da];
      W in C || (C[W] = {});
      C = C[W];
    }
    fa = fa[fa.length - 1];
    da = C[fa];
    W = pa(da);
    W != da &&
      null != W &&
      Za(C, fa, { configurable: !0, writable: !0, value: W });
  }
}
hf("Array.prototype.values", function (Q) {
  return Q
    ? Q
    : function () {
        return ic(this, function (Q, C) {
          return C;
        });
      };
});
function jf(Q, pa) {
  return Object.prototype.hasOwnProperty.call(Q, pa);
}
hf("WeakMap", function (Q) {
  function pa(C) {
    this.jx = (W += Math.random() + 1).toString();
    if (C) {
      ab();
      qb();
      C = hc(C);
      for (var X; !(X = C.next()).done; ) (X = X.value), this.set(X[0], X[1]);
    }
  }
  function C(C) {
    jf(C, da) || Za(C, da, { value: {} });
  }
  function fa(Q) {
    var X = Object[Q];
    X &&
      (Object[Q] = function (Q) {
        C(Q);
        return X(Q);
      });
  }
  if (
    (function () {
      if (!Q || !Object.seal) return !1;
      try {
        var C = Object.seal({}),
          X = Object.seal({}),
          W = new Q([
            [C, 2],
            [X, 3],
          ]);
        if (2 != W.get(C) || 3 != W.get(X)) return !1;
        W["delete"](C);
        W.set(X, 4);
        return !W.has(C) && 4 == W.get(X);
      } catch (mb) {
        return !1;
      }
    })()
  )
    return Q;
  var da = "$jscomp_hidden_" + Math.random().toString().substring(2);
  fa("freeze");
  fa("preventExtensions");
  fa("seal");
  var W = 0;
  pa.prototype.set = function (Q, X) {
    C(Q);
    if (!jf(Q, da)) throw Error("WeakMap key fail: " + Q);
    Q[da][this.jx] = X;
    return this;
  };
  pa.prototype.get = function (C) {
    return jf(C, da) ? C[da][this.jx] : void 0;
  };
  pa.prototype.has = function (C) {
    return jf(C, da) && jf(C[da], this.jx);
  };
  pa.prototype["delete"] = function (C) {
    return jf(C, da) && jf(C[da], this.jx) ? delete C[da][this.jx] : !1;
  };
  return pa;
});
hf("Map", function (Q) {
  function pa() {
    var C = {};
    return (C.On = C.next = C.head = C);
  }
  function C(C, Q) {
    var X = C.kn;
    return Hb(function () {
      if (X) {
        for (; X.head != C.kn; ) X = X.On;
        for (; X.next != X.head; )
          return (X = X.next), { done: !1, value: Q(X) };
        X = null;
      }
      return { done: !0, value: void 0 };
    });
  }
  function fa(C, Q) {
    var X;
    X = Q && typeof Q;
    "object" == X || "function" == X
      ? W.has(Q)
        ? (X = W.get(Q))
        : ((X = "" + ++va), W.set(Q, X))
      : (X = "p_" + Q);
    var da = C.Ew[X];
    if (da && jf(C.Ew, X))
      for (var fa = 0; fa < da.length; fa++) {
        var pa = da[fa];
        if ((Q !== Q && pa.key !== pa.key) || Q === pa.key)
          return { id: X, list: da, index: fa, wh: pa };
      }
    return { id: X, list: da, index: -1, wh: void 0 };
  }
  function da(C) {
    this.Ew = {};
    this.kn = pa();
    this.size = 0;
    if (C) {
      C = hc(C);
      for (var X; !(X = C.next()).done; ) (X = X.value), this.set(X[0], X[1]);
    }
  }
  if (
    (function () {
      if (!Q || !Q.prototype.entries || "function" != typeof Object.seal)
        return !1;
      try {
        var C = Object.seal({ x: 4 }),
          W = new Q(hc([[C, "s"]]));
        if (
          "s" != W.get(C) ||
          1 != W.size ||
          W.get({ x: 4 }) ||
          W.set({ x: 4 }, "t") != W ||
          2 != W.size
        )
          return !1;
        var da = W.entries(),
          fa = da.next();
        if (fa.done || fa.value[0] != C || "s" != fa.value[1]) return !1;
        fa = da.next();
        return fa.done ||
          4 != fa.value[0].x ||
          "t" != fa.value[1] ||
          !da.next().done
          ? !1
          : !0;
      } catch (bb) {
        return !1;
      }
    })()
  )
    return Q;
  ab();
  qb();
  var W = new WeakMap();
  da.prototype.set = function (C, Q) {
    var X = fa(this, C);
    X.list || (X.list = this.Ew[X.id] = []);
    X.wh
      ? (X.wh.value = Q)
      : ((X.wh = {
          next: this.kn,
          On: this.kn.On,
          head: this.kn,
          key: C,
          value: Q,
        }),
        X.list.push(X.wh),
        (this.kn.On.next = X.wh),
        (this.kn.On = X.wh),
        this.size++);
    return this;
  };
  da.prototype["delete"] = function (C) {
    C = fa(this, C);
    return C.wh && C.list
      ? (C.list.splice(C.index, 1),
        C.list.length || delete this.Ew[C.id],
        (C.wh.On.next = C.wh.next),
        (C.wh.next.On = C.wh.On),
        (C.wh.head = null),
        this.size--,
        !0)
      : !1;
  };
  da.prototype.clear = function () {
    this.Ew = {};
    this.kn = this.kn.On = pa();
    this.size = 0;
  };
  da.prototype.has = function (C) {
    return !!fa(this, C).wh;
  };
  da.prototype.get = function (C) {
    return (C = fa(this, C).wh) && C.value;
  };
  da.prototype.entries = function () {
    return C(this, function (C) {
      return [C.key, C.value];
    });
  };
  da.prototype.keys = function () {
    return C(this, function (C) {
      return C.key;
    });
  };
  da.prototype.values = function () {
    return C(this, function (C) {
      return C.value;
    });
  };
  da.prototype.forEach = function (C, Q) {
    for (var X = this.entries(), W; !(W = X.next()).done; )
      (W = W.value), C.call(Q, W[1], W[0], this);
  };
  da.prototype[Symbol.iterator] = da.prototype.entries;
  var va = 0;
  return da;
});
hf("Array.prototype.keys", function (Q) {
  return Q
    ? Q
    : function () {
        return ic(this, function (Q) {
          return Q;
        });
      };
});
hf("Array.prototype.entries", function (Q) {
  return Q
    ? Q
    : function () {
        return ic(this, function (Q, C) {
          return [Q, C];
        });
      };
});
hf("Array.prototype.fill", function (Q) {
  return Q
    ? Q
    : function (Q, C, fa) {
        var da = this.length || 0;
        0 > C && (C = Math.max(0, da + C));
        if (null == fa || fa > da) fa = da;
        fa = Number(fa);
        0 > fa && (fa = Math.max(0, da + fa));
        for (C = Number(C || 0); C < fa; C++) this[C] = Q;
        return this;
      };
});
window.Runtime = function (Q, pa) {
  function C(a, b) {
    this.files = {};
    this.root = "";
    a && this.load(a, b);
  }
  function fa(a, b, c) {
    this.x = a;
    this.y = b;
    this.text = c;
  }
  function da() {
    this.sg = "";
    this.offset = this.Oa = 0;
    this.mk = !1;
  }
  function W() {
    this.oh = [];
  }
  function va(a, b, c, d) {
    this.left = a ? a : 0;
    this.top = b ? b : 0;
    this.right = c ? c : 0;
    this.bottom = d ? d : 0;
  }
  function X() {
    this.y = this.x = 0;
  }
  function rb() {
    this.Oc = 12;
    this.di = 400;
    this.ci = 0;
    this.Bh = "Arial";
    this.cp = !1;
  }
  function mb(a, b) {
    this.app = a;
    this.Ja = b;
    this.um = new W();
  }
  function Ca(a, b, c) {
    this.app = a;
    this.width = b;
    this.height = c;
    this.canvas = document.createElement("canvas");
    this.canvas.width = b;
    this.canvas.height = c;
    this.sh = this.canvas.getContext("2d");
  }
  function bb() {
    this.U2 =
      (!!window.opr && !!opr.kaa) ||
      !!window.opera ||
      0 <= navigator.userAgent.indexOf(" OPR/");
    this.T2 = "undefined" !== typeof InstallTrigger;
    this.V2 =
      0 <
        Object.prototype.toString
          .call(window.HTMLElement)
          .indexOf("Constructor") ||
      "[object SafariRemoteNotification]" ===
        (!window.safari || safari.pushNotification).toString();
    this.Gt = !!document.documentMode;
    this.Q2 = !this.Gt && !!window.StyleMedia;
    (this.R2 =
      (this.aQ =
        !!window.chrome &&
        (!!window.chrome.webstore || !!window.chrome.runtime)) &&
      -1 != navigator.userAgent.indexOf("Edg")) ||
      this.aQ ||
      this.Q2 ||
      this.Gt ||
      this.T2 ||
      this.U2 ||
      this.V2 ||
      this.hT(bb.t1);
    this.version =
      this.iT(navigator.userAgent) ||
      this.iT(navigator.appVersion) ||
      "Unknown version";
    this.hT(bb.v1);
  }
  function Va() {
    this.TG = null;
    this.height = this.width = 0;
    this.Bl = null;
    this.Ja = this.color = 0;
    this.b2 = null;
    this.KC = this.YH = this.O2 = this.uP = this.Wg = 0;
    this.SG = null;
    this.cp = !0;
  }
  function la() {}
  function ib() {
    this.Ja = 0;
    this.name = null;
    this.index = 0;
  }
  function Da() {}
  function sb() {}
  function Ib() {}
  function tb() {}
  function Jb() {}
  function jc() {}
  function kc() {}
  function lc() {}
  function mc() {}
  function nc() {}
  function oc() {}
  function pc() {}
  function qc() {}
  function rc() {}
  function sc() {}
  function tc() {}
  function uc() {}
  function vc() {}
  function wc() {}
  function xc() {}
  function yc() {}
  function zc() {}
  function Ac() {}
  function Bc() {}
  function Cc() {}
  function Dc() {}
  function Ec() {}
  function Fc() {}
  function Gc() {}
  function Hc() {}
  function Ic() {}
  function Jc() {}
  function Kc() {}
  function Lc() {}
  function Mc() {}
  function ka() {}
  function Ra() {}
  function Nc() {}
  function ka() {}
  function Oc() {}
  function Pc() {}
  function Qc() {}
  function Kb() {}
  function Lb() {}
  function Mb() {}
  function Nb() {}
  function Ob() {}
  function Pb() {}
  function Rc() {}
  function Sc() {}
  function Tc() {}
  function Uc() {}
  function Vc() {}
  function Wc() {}
  function Xc() {}
  function Yc() {}
  function Qb() {}
  function Zc() {}
  function $c() {}
  function ad() {}
  function bd() {}
  function cd() {}
  function sa() {}
  function Rb() {}
  function Sa() {}
  function Sb() {}
  function dd() {}
  function ed() {}
  function fd() {}
  function gd() {}
  function hd() {}
  function id() {}
  function jd() {}
  function kd() {}
  function ld() {}
  function md() {}
  function nd() {}
  function od() {}
  function pd() {}
  function qd() {}
  function rd() {}
  function sd() {}
  function td() {}
  function ud() {}
  function vd() {}
  function wd() {}
  function Tb() {
    Na.Vd.p3();
  }
  function xd() {
    Na.Vd.u3();
  }
  function q(a, b, c, d) {
    this.Y2 = !0 === d;
    this.eI = !1;
    this.Y2
      ? ((this.canvas = a.canvas), (this.UC = a.UC))
      : "string" === typeof a
        ? ((this.canvas = document.getElementById(a)),
          (this.UC = this.canvas.parentElement))
        : a instanceof HTMLElement &&
          ((this.canvas = document.createElement("canvas")), (this.UC = a));
    a = this.YG = a.YG || document.createElement("div");
    a.appendChild(this.canvas);
    this.UC.appendChild(a);
    a.style.overflow = "hidden";
    a.style.position = "relative";
    a.style.transform = "translateZ(0)";
    a.style.margin = "0";
    a.style.padding = "0";
    a.style.display = "block";
    a.style.boxSizing = "content-box";
    a.className = "MMFDiv";
    this.wP = this.xP = this.CH = null;
    this.yt = 0;
    this.appName = this.DH = null;
    this.Yt = 0;
    this.PH = this.RP = null;
    this.$x = 0;
    this.Vy = this.hf = this.ui = this.Xd = this.Ia = this.Sd = this.OH = null;
    this.yc = this.zT = 0;
    this.Uw = this.Vw = this.aS = this.Oy = this.rx = null;
    this.Hi = this.Ad = this.DK = 0;
    this.yb = this.file = this.frame = null;
    this.BJ = this.CJ = this.Sr = 0;
    this.Rk = this.ba = null;
    this.rI = !1;
    this.GH =
      this.tk =
      this.zP =
      this.AP =
      this.BP =
      this.rb =
      this.nb =
      this.Xw =
      this.Ww =
      this.dl =
      this.bl =
        0;
    this.BH = this.DJ = this.$R = null;
    this.Jk = this.Ik = this.s1 = this.r1 = this.GB = 0;
    this.Jf = null;
    this.AO = 0;
    this.cursor = "auto";
    this.gD = !1;
    this.rH = this.CB = null;
    this.mk = !1;
    this.Vp = this.Up = 0;
    this.XI = this.oR = null;
    this.QB = this.Cb = this.alpha = this.vh = this.uh = this.EO = 0;
    this.file = b;
    this.Ep = "";
    this.path = c;
    b = c.lastIndexOf("/");
    0 <= b && (this.Ep = c.substring(0, b + 1));
    this.vl = 0;
    this.ba = null;
    this.ln = this.mn = this.Lg = 0;
    this.lr = !1;
    this.Vc = [];
    this.ny = -1;
    this.aD = this.Vr = this.fS = this.hS = this.gS = this.eS = this.dS = 0;
    this.$k = this.kg = this.LK = this.transition = null;
    this.JG = !1;
    this.gB = new bb();
    this.ym = this.xm = this.Qj = null;
    this.Rx = q.yq;
    this.jb = null;
    this.Sv = this.pn = 0;
    this.UF = null;
    this.Rm = this.Qm = this.Aq = this.zq = 0;
    this.Fe = this.Ge = 1;
    this.hasFocus = !0;
    this.ix = this.KG = !1;
    this.QH = this.bD = null;
    this.WB = -1;
    this.lx = null;
    this.kx = 1e9;
    this.VB = null;
    0 <= window.location.href.indexOf("192.") &&
      ((b = window.location.href.indexOf("21700/")),
      0 <= b &&
        ((this.VB = window.location.href.substring(0, b + 6)),
        (this.WB = -1),
        (this.kx = 25)));
    this.ml = !1;
    this.u1 = 3;
    this.Dw = new W();
    this.vB = new W();
    this.Ae = [];
    this.Fh = 0;
    this.ti = null;
    this.LI = "Please touch the screen to start";
    this.fullScreen = !1;
    this.ZT = "***version***";
    this.PK = this.dz = 0;
    this.Gk = null;
  }
  function ub(a, b, c) {
    this.changedTouches = Array(1);
    this.changedTouches[0] = {
      pageX: a,
      pageY: b,
      target: c,
      identifier: q.QL,
    };
  }
  function V(a) {
    this.app = a;
    this.F = null;
    this.hQ = this.Kf = this.Ah = 0;
    this.bC = !1;
    this.xd = 0;
    this.cC = null;
    this.px = this.qx = 0;
    this.yP = null;
    this.Oe = 0;
    this.Pw = this.mg = this.ic = null;
    this.BQ = this.EC = this.jI = this.iI = this.fp = this.ep = this.Xl = 0;
    this.mi = this.li = this.Ox = this.xH = this.Sw = null;
    this.ap = this.jb = this.Fh = 0;
  }
  function xa(a) {
    this.app = a;
    this.Wb = null;
    this.FG = !1;
    this.EN = !0;
    this.qw = this.Yu = null;
    this.RQ = 0;
    this.Vq = null;
    this.fH = !1;
    this.Wb = Array(xa.Df);
    this.Yu = Array(xa.Df);
    this.qw = Array(xa.Df);
    this.FG = this.EN = !0;
    var b;
    for (b = 0; b < xa.Df; b++)
      (this.Wb[b] = null), (this.Yu[b] = 100), (this.qw[b] = !1);
    this.RQ = 100;
    b = new Audio();
    var c = Array(4);
    c[0] = b.canPlayType("audio/ogg");
    c[1] = b.canPlayType("audio/x-m4a");
    c[2] = b.canPlayType("audio/mpeg");
    c[3] = b.canPlayType("audio/wav");
    for (b = this.QI = this.JJ = 0; 4 > b; b++)
      "probably" == c[b] && (this.JJ |= 1 << b),
        "maybe" == c[b] && (this.QI |= 1 << b);
    for (; null != a.yb; ) a = a.yb;
    this.context = a.Vy;
    this.jt = a.zT;
    null == this.context &&
      ("undefined" !== typeof AudioContext
        ? ((this.context = new AudioContext()), (this.jt = 1))
        : "undefined" !== typeof webkitAudioContext &&
          ((this.context = new webkitAudioContext()), (this.jt = 0)),
      (a.Vy = this.context),
      (a.zT = this.jt));
  }
  function yd(a) {
    this.app = a;
  }
  function zd(a) {
    this.app = a;
    this.cI = !1;
    this.S = null;
    this.context = this.app.context;
    this.fh = this.app.gS;
    this.color = this.app.fS;
    this.ao = this.app.dS;
    0 > this.ao && (this.ao = this.app.nb / 2);
    this.bo = this.app.eS;
    0 > this.bo && (this.bo = this.app.rb / 2);
    this.size = this.app.hS;
    this.uJ = 0;
    this.pB = 25;
    this.Si = 0;
    this.fE = !1;
    this.Bl = new Image();
    var b = this;
    this.Bl.onload = function () {
      b.cI = !0;
    };
    this.Bl.src = this.app.Ep + "Preloader.png";
  }
  function Ad(a) {
    this.app = a;
    this.context = this.app.context;
    this.width = 100;
    this.height = 12;
    this.position = 0;
    this.Q0 = 10526880;
    this.borderColor = 8421504;
    this.R0 = 0;
    this.rect = new va();
    this.rect.left = this.app.nb / 2 - this.width / 2;
    this.rect.top = this.app.rb / 2 - this.height / 2;
    this.rect.right = this.rect.left + this.width;
    this.rect.bottom = this.rect.top + this.height;
    this.reset();
    this.fE = !1;
  }
  function Bd(a) {
    this.app = a;
    this.cI = !1;
    this.mf = new cb();
    this.S = new q(this.app, this.app.file, this.app.path, !0);
    this.S.eI = !0;
    this.S.lT(this.app, this.app.aD, 0, this.mf, this.app.nb, this.app.rb);
    this.S.digest();
    this.S.rI = !1;
    this.S.Su = !1;
    this.S.Cb &= ~q.eo;
    this.S.CK();
    this.S.SD(0, 0);
    this.S.Wy();
    this.mf.x = this.app.nb / 2 - this.S.frame.Ah / 2;
    this.mf.y = this.app.rb / 2 - this.S.frame.Kf / 2;
    this.n6 = 0 != (this.app.Cb & q.pV);
    this.app.Vc.push(this.S);
    this.ot = 0;
    this.fE = !1;
  }
  function I(a) {
    this.app = a;
    this.rP =
      this.qP =
      this.zh =
      this.tg =
      this.eQ =
      this.fI =
      this.dQ =
      this.kr =
      this.cQ =
      this.mx =
      this.fQ =
      this.It =
      this.aC =
      this.wd =
        null;
    this.Cc = Array(3);
    this.Dc = Array(3);
    this.Ja = this.jb = this.zk = this.yk = 0;
    this.touches = Array(3);
    this.HG = !1;
    this.nx = this.Cl = this.gQ = 0;
  }
  function t(a) {
    this.m = a;
    this.O = null;
    this.pm =
      this.Xb =
      this.Fy =
      this.rK =
      this.md =
      this.xf =
      this.wf =
      this.qK =
      this.Nj =
        0;
    this.s = this.ya = null;
    this.pi =
      this.Dy =
      this.GD =
      this.fs =
      this.Hp =
      this.Ee =
      this.pK =
      this.Xn =
      this.Ey =
      this.gs =
      this.Ea =
      this.za =
      this.Te =
      this.Se =
        0;
    this.sD = this.jK = this.tD = null;
    this.CD =
      this.kK =
      this.Eu =
      this.Au =
      this.Gu =
      this.Cu =
      this.Du =
      this.zu =
      this.Fu =
      this.Bu =
      this.lK =
      this.Re =
      this.wD =
      this.vD =
      this.yu =
      this.xu =
      this.FS =
      this.Uk =
      this.wu =
      this.vu =
      this.Ay =
      this.bs =
        0;
    this.om = this.nm = null;
    this.$a = this.Ku = this.ED = this.DD = this.Hu = this.mK = this.IS = 0;
    this.BD = this.Ju = this.Kb = null;
    this.Pf = 0;
    this.AD = this.ds = null;
    this.Iu = 0;
    this.es = null;
    this.pe = 0;
    this.fD = null;
    this.rw = !1;
    this.X = null;
    this.ZH = Array(2);
    this.Vo = !1;
    this.lP = 0;
    this.oK = 255;
    this.hD = this.f4 = !1;
  }
  function Cd() {
    this.Z0 = null;
    this.dO = this.aO = this.$N = this.cO = this.bO = this.mB = 0;
  }
  function ga() {
    this.tJ = this.rJ = this.Jc = this.fg = this.tc = this.Nf = 0;
    this.Ok = !1;
    this.jy =
      this.SR =
      this.TR =
      this.Pr =
      this.hu =
      this.eh =
      this.TC =
      this.Fg =
      this.Ld =
      this.xp =
      this.cm =
      this.vp =
      this.pJ =
      this.oJ =
      this.wp =
        0;
    this.Or = this.iu = null;
    this.qJ = 0;
    this.up = null;
    this.sJ = 0;
    this.Aj = null;
  }
  function kf() {
    this.Be = this.name = null;
  }
  function lf() {
    this.value = null;
    this.KD = this.LD = this.yf = this.bd = 0;
  }
  function mf() {
    this.text = null;
    this.bd = 0;
  }
  function nf() {
    this.um = this.values = null;
    this.Ja = 0;
  }
  function H() {
    this.sC = this.ia = 0;
    this.ah = !1;
    this.N = this.Ya = null;
    this.CQ = this.Nt = 0;
    this.C = this.o = null;
    this.De = new va();
    this.oC = this.nC = 0;
    this.PQ = this.mC = !1;
    this.tC = -1;
    this.C3 = !1;
  }
  function O() {
    this.kk = this.Ci = this.Sg = null;
  }
  function nb() {
    this.ik = 0;
    this.Go = this.jk = null;
  }
  function Dd() {
    this.Ss = this.oN = this.nN = this.WF = this.XF = 0;
    this.Bq = null;
  }
  function jb() {
    this.a = null;
    this.Zr = this.jD = this.jm = 0;
    this.XJ = !1;
    this.xy = 0;
    this.Pe = null;
    this.qu = this.iD = 0;
    this.wy = null;
    this.ru =
      this.Xr =
      this.Hj =
      this.Gj =
      this.wS =
      this.Yr =
      this.ou =
      this.vy =
      this.vS =
      this.pu =
      this.Ap =
      this.WJ =
        0;
    this.xS = -1;
  }
  function Ed(a, b) {
    this.Ia = a;
    this.app = a.app;
    this.handle = b;
  }
  function Fd(a) {
    this.app = a;
    this.images = this.file = null;
    this.xj = this.An = this.zd = 0;
    this.Ln =
      this.Ae =
      this.Mn =
      this.Fq =
      this.gr =
      this.Qn =
      this.ec =
      this.ub =
      this.Nr =
        null;
  }
  function qa() {
    this.app = null;
    this.ec =
      this.cl =
      this.al =
      this.Gb =
      this.Mb =
      this.height =
      this.width =
      this.handle =
        0;
    this.xn = this.Gr = this.uj = this.Ze = null;
    this.hr = this.mi = this.li = this.ne = 0;
  }
  function Gd(a) {
    this.app = a;
    this.RC = this.fonts = this.file = null;
    this.zn = 0;
    this.ub = null;
    this.Wl = this.Eh = 0;
    this.ec = null;
    this.cy = new Wa();
    this.cy.rB();
  }
  function Wa() {
    this.ci = this.di = this.Oc = this.handle = this.ec = 0;
    this.font = this.Bh = null;
    this.cp = !1;
  }
  function Hd(a) {
    this.app = a;
    this.Qp = null;
    this.ay = this.An = this.zd = 0;
    this.file = this.ec = this.ub = this.SC = null;
  }
  function vb(a) {
    this.Vd = a;
    this.context = a.hf.context;
    this.jt = a.hf.jt;
    this.d2 = a.hf.d2;
    this.type = 0;
    this.file = a.file;
    this.handle = -1;
    this.Lc = this.source = null;
    this.ec = 0;
    this.tw = !1;
    this.Bn = 0;
    this.name = null;
    this.Lo = this.fB = this.Zh = !1;
    this.frequency = 0;
    this.gain = this.response = null;
    this.volume = 100;
  }
  function Ub(a, b) {
    this.name = a;
    this.bS = [];
    this.position = 0;
    this.vx = !1;
    this.Y1 = b;
  }
  function Y(a) {
    this.Vd = a;
    this.F = null;
    this.JR = this.Xl = 0;
    this.Kr = Array(F.Uf + F.AM);
    this.Yx = this.Yl = 0;
    this.mr =
      this.gj =
      this.ue =
      this.we =
      this.Of =
      this.gg =
      this.je =
      this.hm =
        null;
    this.Ui = Array(F.Uf + 1);
    this.LS = !1;
    this.ej = null;
    this.ry = this.ty = this.qy = this.sy = 0;
    this.Cy = !1;
    this.Jh = null;
    this.FD = 0;
    this.Gp = Array(4);
    this.uu = this.Lj = this.Kj = !1;
    this.zD = this.Ti = this.$r = this.td = 0;
    this.uD = this.Vk = !1;
    this.lm = null;
    this.By = this.Mj = this.mm = 0;
    this.as = this.Vn = null;
    this.Zf = 0;
    this.ef = !1;
    this.iK = this.KS = this.ld = this.JS = 0;
    this.sw = !1;
    this.Fp = null;
    this.zy = 0;
    this.cs = null;
    this.PG = !1;
    this.WQ = 0;
    this.XG = !1;
    this.VG = null;
    this.lB = [];
    this.nt = U.QW;
    this.Cj = this.Bj = null;
  }
  function U() {
    this.vt = this.$q = this.qa = this.xh = this.dd = 0;
    this.tb = null;
    this.P1 = 0;
  }
  function oa() {}
  function of() {
    this.eP = this.id = 0;
  }
  function pf() {
    this.dD = this.cD = 0;
  }
  function qf(a, b, c, d, e) {
    this.t5 = a;
    this.code = b;
    this.v4 = c;
    this.u4 = d;
    this.Nk = e;
  }
  function Id() {
    this.LJ = this.eD = this.yp = this.mu = this.zp = this.fm = 0;
    this.MJ = this.Sk = !1;
    this.ja = null;
  }
  function Vb() {
    this.next = null;
    this.type = 0;
    this.name = null;
    this.index = this.jC = this.Xy = this.v6 = this.Lg = 0;
    this.EG = !1;
  }
  function Xa() {
    this.sx = this.kQ = this.nI = this.fC = this.eC = this.mj = this.gp = 0;
    this.mI = null;
    this.mI = Array(4);
    var a;
    for (a = 0; 4 > a; a++) this.mI[a] = null;
  }
  function Jd() {
    this.ub = this.list = null;
    this.dC = this.Kk = 0;
  }
  function ra(a) {
    this.app = a;
    this.Yq = this.Xq = this.oD = this.nD = this.y = this.x = 0;
    this.MA = this.ku = this.ju = null;
    this.$h = !1;
    this.Rr = null;
    this.IN =
      this.HN =
      this.KN =
      this.JN =
      this.GN =
      this.vh =
      this.uh =
      this.Zx =
      this.Xx =
      this.bv =
      this.av =
      this.Cb =
      this.cJ =
        0;
    this.bc = this.Md = this.Ce = null;
    this.angle = 0;
    this.scale = this.Fe = this.Ge = 1;
    this.Mb = this.ez = 320;
    this.Gb = this.iz = 240;
  }
  function Fa(a, b, c, d, e, f) {
    this.app = a;
    this.l3 = d;
    this.yj = this.type = 0;
    this.x = b;
    this.y = c;
    this.height = this.width = 0;
    this.Hh = null;
    this.gt = !1;
    this.bg = null;
    this.borderWidth = 0;
    this.borderColor = this.WG = this.Qq = null;
    this.vh = this.uh = 0;
    this.o = this.body = null;
    if (d)
      if (
        ((this.Hh = this.app.Sd.gn(d.mj)),
        (this.type = this.Hh.ni),
        (this.yj = this.Hh.Kd.QC),
        (this.borderWidth = this.Hh.Kd.OC),
        (this.SP = this.Hh.Kd.fy),
        (this.uh = this.Hh.lJ),
        (this.vh = this.Hh.mJ),
        (this.width = this.Hh.Kd.gJ),
        (this.height = this.Hh.Kd.hJ),
        (this.gt = 0 != this.Hh.Kd.PC),
        (this.Qq = this.Hh.Kd.Zl),
        (this.WG = this.Hh.Kd.fu),
        (this.borderColor = this.Hh.Kd.NC),
        1 == this.type)
      )
        (this.bg = this.app.Ia.Ac(this.Hh.Kd.Mk)),
          (this.width = this.bg.width),
          (this.height = this.bg.height);
      else {
        if (32 <= this.type) {
          a = this.app.ba;
          b = null;
          for (e = c = 0; e < a.Xb; e++) {
            for (; null == a.X[c]; ) c++;
            b = a.X[c];
            c++;
            if (b.n3 == d) break;
          }
          this.o = b;
        }
      }
    else {
      this.type = F.BM;
      this.bg = e;
      this.width = this.bg.width;
      this.height = this.bg.height;
      this.x -= this.bg.Mb;
      this.y -= this.bg.Gb;
      switch (f) {
        case 0:
          this.yj = ta.FM;
          break;
        case 1:
          this.yj = ta.wo;
          break;
        case 2:
          this.yj = ta.Bi;
          break;
        case 3:
          this.yj = ta.yF;
      }
      this.gt = !1;
    }
  }
  function F() {
    this.mJ = this.lJ = this.In = this.ni = this.hy = 0;
    this.Kd = this.nJ = null;
    this.RR = this.QR = 0;
  }
  function Kd() {
    this.bm = this.kd = this.Kn = 0;
    this.am = this.iy = this.Jn = null;
    this.uB = 0;
  }
  function ta() {}
  function Ld() {
    this.Mk = 0;
  }
  function kb() {
    this.Mk =
      this.fy =
      this.fu =
      this.Zl =
      this.gy =
      this.qp =
      this.En =
      this.NC =
      this.OC =
        0;
  }
  function J() {
    this.$l = 0;
    this.iJ = null;
    this.hd = this.rp = 0;
    this.Mf = this.Rc = this.pp = this.sp = this.Fn = this.bh = null;
    this.NR = this.OR = this.MR = 0;
    this.ey = this.gu = null;
  }
  function Md() {
    this.dh = this.PR = this.Hn = this.Gn = 0;
    this.jJ = null;
  }
  function Nd() {
    this.uO = this.vO = this.tO = 0;
  }
  function Ia() {
    this.Xt =
      this.fy =
      this.fu =
      this.Zl =
      this.gy =
      this.qp =
      this.En =
      this.NC =
      this.OC =
      this.tp =
      this.Mr =
      this.zj =
      this.kJ =
      this.Hn =
      this.Gn =
        0;
    this.frames = null;
  }
  function Od() {
    this.Hn = this.Gn = this.dh = 0;
    this.text = null;
  }
  function Ka() {
    this.MK = this.bz = this.Wu = 0;
    this.$n = null;
  }
  function Pd() {
    this.Qr = this.AJ = this.zJ = 0;
    this.ee = null;
  }
  function aa() {
    this.ve = this.Nc = 0;
    this.c = null;
    this.Zo = this.eb = this.Zd = this.Al = this.Bc = this.fx = 0;
    this.vd = null;
    this.RH = 0;
    this.SB = this.WP = null;
    this.gx = this.Ft = 0;
    this.ha = this.Et = null;
    this.E2 =
      this.jj =
      this.ug =
      this.UH =
      this.wa =
      this.ib =
      this.ga =
      this.ea =
      this.bb =
      this.ab =
      this.A =
      this.zl =
      this.w =
      this.yl =
        0;
    this.ex = !1;
    this.Z = this.cb = this.Wa = this.H = this.b = null;
  }
  function Qd() {
    this.AK = !1;
    this.Bl = null;
    this.lb = !1;
    this.xb = null;
    this.$h = !0;
    this.Ge = this.Fe = 1;
    this.y = this.x = this.angle = 0;
    this.ps = null;
  }
  function ha() {
    this.dh = this.Ja = 0;
    this.S = null;
    this.yJ = this.xJ = 0;
    this.UR = this.level = -1;
    this.ox = null;
    this.$h = !0;
  }
  function Rd() {
    this.Ih = this.sd = this.Un = 0;
    this.Jb = -1;
    this.Tc = this.Sc = 1;
    this.Kc = this.Rn = this.sa = this.Pa = this.uc = 0;
    this.jc = this.ka = !1;
    this.Tn = this.Sn = 0;
    this.lD = -1;
    this.bK = this.$J = this.aK = this.ZJ = this.YJ = this.kD = 0;
  }
  function za() {
    this.jg = this.ig = this.yf = this.bd = this.zb = this.type = 0;
    this.FN = this.lb = !1;
    this.Tg = this.Kk = this.rm = this.Iy = this.ff = 0;
    this.Mq = !1;
    this.xb = this.gb = null;
    this.Wg = 0;
    this.font = null;
    this.th = this.$b = !1;
  }
  function Sd() {
    this.type = this.ff = this.gf = this.jg = this.ig = this.zb = this.Yn = 0;
    this.lb = !0;
    this.Kk = 0;
    this.gb = null;
    this.Tg = 0;
    this.xb = null;
    this.Wg = 0;
    this.alpha = 1;
    this.Sq = "source-over";
    this.th = !1;
  }
  function Td() {
    this.type = this.ff = this.gf = this.jg = this.ig = this.zb = this.Yn = 0;
    this.lb = !0;
    this.Kk = 0;
    this.gb = null;
    this.Tg = 0;
    this.xb = null;
    this.Wg = 0;
    this.alpha = 1;
    this.Sq = "source-over";
    this.th = !1;
  }
  function Ud() {
    this.Mu = null;
    this.Jy = this.gf = this.bd = this.yf = 0;
    this.font = null;
    this.lb = !0;
    this.NS = this.Ja = 0;
    this.gb = this.xb = null;
    this.$b = !1;
    this.rect = new va();
    this.jg = this.ig = this.deltaY = 0;
    this.Lb = null;
    this.th = !1;
  }
  function Vd() {
    this.jg = this.ig = 0;
    this.gh = null;
    this.Tq = 0;
    this.Kg = [];
  }
  function Wd(a, b) {
    this.ext = b.m.CB.gC(a);
    this.dJ = !1;
    this.fJ = this.dy = this.IJ = 0;
    this.$b = !1;
    this.lb = !0;
    this.gb = this.xb = null;
  }
  function wb() {}
  function xb() {
    this.ox = this.dir = this.y = this.x = 0;
    this.GG = !1;
  }
  function Xd(a) {
    a.file.B();
    this.XT = a.file.B();
  }
  function rf(a) {
    this.Lg = a.file.v();
    this.jC = a.file.v();
    this.ol = a.file.B();
  }
  function sf(a) {
    this.color = a.file.Qe();
  }
  function tf(a) {
    this.ot = a.file.v();
    this.d1 = a.file.v();
  }
  function La(a) {
    this.ol = a.file.B();
    for (var b = a.file.Oa, c = 0, d; ; ) {
      c++;
      d = a.file.v();
      if (0 == d) break;
      d = a.file.B();
      6 < d && a.file.Qa(d - 6);
    }
    a.file.seek(b);
    this.Aa = Array(c);
    for (b = 0; b < c; b++) this.Aa[b] = sa.create(a.file);
  }
  function uf(a) {
    var b = a.file.B();
    a.file.Qa(4);
    this.data = 0;
    6 < b && ((this.data = a.file.Oa), a.file.Qa(b - 6));
  }
  function wa(a) {
    this.Yd = a.file.B();
    this.y2 = a.file.B();
  }
  function vf(a) {
    a.file.Qa(4);
    this.Oa = 0;
    this.id = a.file.B();
  }
  function db(a) {
    this.value = a.file.v();
    this.XT = 0;
  }
  function Yd(a) {
    this.key = a.file.B();
  }
  function wf(a) {
    this.jd = a.file.xa();
    this.Nk = a.file.xa();
    this.type = a.file.xa();
  }
  function xf(a) {
    a.file.Qa(4);
    this.fP = 0;
    for (this.kd = []; ; ) {
      var b = a.file.xa(),
        c = a.file.xa();
      if (-1 == b) break;
      this.kd.push(b);
      this.kd.push(c);
    }
  }
  function Ja() {}
  function Zd(a) {
    this.ly = a.file.xa();
    this.Ur = a.file.xa();
    this.ZC = a.file.xa();
    this.$C = a.file.xa();
    this.XC = a.file.xa();
    this.EJ = a.file.xa();
    this.WC = a.file.v();
    this.YC = a.file.xa();
    this.my = a.file.xa();
    this.FJ = a.file.xa();
  }
  function Wb(a) {
    this.ly = a.file.xa();
    this.Ur = a.file.xa();
    this.ZC = a.file.xa();
    this.$C = a.file.xa();
    this.XC = a.file.xa();
    this.EJ = a.file.xa();
    this.WC = a.file.v();
    this.YC = a.file.xa();
    this.my = a.file.xa();
    this.FJ = a.file.xa();
    this.jB = a.file.B();
    this.TN = a.file.B();
  }
  function $d(a) {
    this.ly = a.file.xa();
    this.Ur = a.file.xa();
    this.ZC = a.file.xa();
    this.$C = a.file.xa();
    this.XC = a.file.xa();
    this.EJ = a.file.xa();
    this.WC = a.file.v();
    this.YC = a.file.xa();
    this.my = a.file.xa();
    this.FJ = a.file.xa();
    this.jB = a.file.xa();
    this.TN = a.file.xa();
    a.file.Qa(4);
    a.file.B();
  }
  function yb(a) {
    this.Uy = a.file.B();
    this.h6 = a.file.B();
  }
  function Ea(a) {
    this.value = a.file.B();
  }
  function zb(a) {
    this.cd = a.file.Nd();
  }
  function yf(a) {
    this.Lg = a.file.v();
    this.jC = a.file.v();
  }
  function ae(a) {
    this.Zu = a.file.xa();
    this.gz = a.file.xa();
    this.$u = a.file.xa();
    this.hz = a.file.xa();
  }
  function zf(a, b, c) {
    this.index = a.file.v();
    this.s4 = a.file.v();
    this.global = b;
    c ? (this.WT = a.file.yS()) : ((this.WT = a.file.v()), a.file.Qa(4));
  }
  function be(a) {
    this.Ja = a.file.v();
    this.tP = a.file.v();
    this.a2 = a.file.v();
    this.values = [];
    for (var b = 1, c = 2, d = 4, e = 0; 4 > e && 0 != (this.Ja & b); e++) {
      var f = new zf(a, 0 != (this.Ja & c), 0 != (this.Ja & d)),
        b = b << 4,
        c = c << 4,
        d = d << 4;
      this.values.push(f);
    }
  }
  function Ab() {
    this.Pq = [];
  }
  function eb(a) {
    this.jz = this.fz = 1;
    this.vJ = -1;
    this.wJ = this.AK = !1;
    this.To = this.So = 0;
    if (!(this.Zb = a.getContext("2d")))
      throw Error("Failed to init standard renderer");
  }
  function Pa() {
    this.Fw = "";
    this.BO = this.$y = this.az = this.MT = this.NT = 0;
  }
  function ce() {}
  function K() {
    this.D = this.zx = this.yx = this.uC = 0;
    this.sb = this.OQ = !1;
    this.cn = this.GO = this.I = this.Fa = null;
  }
  function de(a) {
    this.app = a;
  }
  function ob() {}
  function ee() {
    this.QQ = this.j = this.l = this.zc = 0;
  }
  function fe() {
    this.j = this.l = this.zc = 0;
  }
  function ge() {
    this.rd = this.af = this.NG = this.nk = 0;
    this.Q3 = null;
  }
  function he() {
    this.j = this.l = this.yB = this.lc = 0;
  }
  function ie() {
    this.rd = this.af = this.yg = 0;
  }
  function je() {}
  function ke() {
    this.j = this.l = this.Hw = this.zc = this.lc = 0;
  }
  function le() {
    this.JI;
    this.ur = this.xr = this.Sl = this.Oi = this.fa = 0;
    this.ei = null;
  }
  function me() {
    this.j = this.l = this.zc = 0;
  }
  function ne() {
    this.II = this.j = this.l = this.zc = 0;
  }
  function oe() {
    this.yg;
    this.af;
    this.rd;
  }
  function pe() {
    this.j = this.l = this.SO = this.lc = this.zc = 0;
  }
  function qe() {
    this.j = this.l = this.zc = 0;
  }
  function re() {
    this.xe = this.j = this.l = this.zc = 0;
  }
  function se() {
    this.sr = this.rr = this.j = this.l = this.zc = 0;
  }
  function te() {
    this.Il = this.j = this.l = this.RO = this.Gw = this.lc = 0;
  }
  function ue() {
    this.qC = this.j = this.l = this.Gw = this.lc = 0;
  }
  function ve() {
    this.pC =
      this.BC =
      this.DC =
      this.yC =
      this.xg =
      this.vI =
      this.Na =
      this.Ma =
      this.ur =
      this.xr =
      this.Sl =
      this.Oi =
      this.fa =
      this.bU =
      this.jE =
      this.QK =
        0;
  }
  function we() {
    this.Dk = this.vr = this.j = this.l = this.lc = this.zc = 0;
  }
  function ze() {}
  function Ae() {
    this.j = this.l = this.lc = 0;
  }
  function Be(a, b) {
    var c = new da();
    Na.Vd = new q(a, c, b);
    c.getFile(b, Ce);
  }
  function Ce() {
    Na.Vd.load();
  }
  function Bb() {
    Na.Vd.Wy();
  }
  function cb() {
    this.y = this.x = 0;
    this.visible = !0;
    this.children = [];
    this.ml = !1;
  }
  function Ga() {}
  function Z() {
    this.ra = null;
    this.lineWidth =
      this.Gb =
      this.Mb =
      this.width =
      this.height =
      this.lineWidth =
        0;
  }
  function Af() {
    this.ra = null;
    this.angle = 0;
    this.Ge = this.Fe = 1;
    this.KK = 0;
  }
  function R() {
    this.a = null;
    this.Ha = this.Qd = this.Pd = this.MD = this.js = this.JD = this.ID = 0;
    this.sm = null;
  }
  function De() {
    this.$t = 0;
    this.um = null;
  }
  function Ee() {
    this.au = 0;
    this.values = null;
    this.Ja = 0;
  }
  function lb() {
    this.Ky = 0;
    this.hh = this.ge = null;
  }
  function pb(a) {
    this.app = a;
    this.br = null;
    this.LC = 0;
  }
  function Xb() {
    this.handle = 0;
  }
  function Oa() {
    this.C = this.o = null;
  }
  function Fe() {}
  function Ge() {}
  function He() {}
  function ia() {
    this.Ux = 100;
    this.JC = this.HR = this.IR = this.Jr = 0;
  }
  function Ie() {
    this.Zt = 0;
    this.vf = null;
  }
  function Je() {
    this.aR = this.bR = this.ZQ = this.$Q = this.Nx = 0;
  }
  function Ke() {
    this.hR = this.gR = this.fR = this.iR = 0;
  }
  function Le() {
    this.mR = this.kR = this.lR = this.jR = 0;
  }
  function Me() {
    this.GR = this.ER = this.bJ = this.BR = this.CR = this.Wt = 0;
    this.vc = null;
  }
  function Ne() {
    this.VI =
      this.dR =
      this.WI =
      this.RI =
      this.UI =
      this.TI =
      this.SI =
      this.eR =
        0;
    this.ji = null;
  }
  function Oe() {
    this.tR = this.sR = this.uR = this.rR = this.qR = this.vR = 0;
  }
  function Pe() {
    this.xR = this.wR = this.yR = this.aJ = this.$I = this.zR = 0;
  }
  function Qe() {}
  function Re() {
    this.Hk = null;
    this.data = 0;
    this.Ht = !1;
  }
  function ca() {
    this.a = null;
    this.Jp = this.Kh = this.qm = this.Od = this.Ig = this.Lu = this.Gy = 0;
  }
  function Qa() {
    this.hF = this.Sz = this.Fs = this.mM = this.Es = this.Tz = this.Rz = 0;
    this.ro = !1;
  }
  function Se() {
    this.Uz = !1;
    this.Gs = null;
  }
  function Te() {}
  function Ue() {
    this.jF = this.jl = this.kF = this.Hm = 0;
  }
  function Ve() {
    this.Wz = this.Xz = this.oF = this.nF = this.mF = this.lF = 0;
  }
  function We() {
    this.Qh =
      this.nq =
      this.mq =
      this.Nm =
      this.Mm =
      this.fA =
      this.Bv =
      this.Cv =
      this.lf =
        0;
    this.og = !1;
    this.Rb = null;
    this.Lm = this.hA = this.gA = this.Km = 0;
    this.Ks = null;
    this.eA = !1;
  }
  function ma() {
    this.Is =
      this.qM =
      this.so =
      this.ek =
      this.dk =
      this.Pg =
      this.pM =
      this.$z =
      this.lh =
      this.Xc =
        0;
    this.kq = null;
    this.qF = this.pF = 0;
    this.jq = !1;
  }
  function Cb() {
    this.rM =
      this.rF =
      this.sM =
      this.sF =
      this.lq =
      this.Js =
      this.tF =
      this.Qg =
      this.Jm =
        0;
  }
  function Db() {}
  function Xe(a) {
    this.oe = a;
    this.rh = 0;
  }
  function Ye() {
    this.C = this.o = null;
  }
  function fb() {
    this.hs = 0;
    this.oa = null;
    this.sK = 0;
    this.va = !1;
    this.Kp = 0;
    this.Ip = !1;
    this.Hy = 0;
  }
  function p() {
    this.Ja = 0;
    this.nc = null;
    this.oi =
      this.ai =
      this.Fj =
      this.Rj =
      this.Cm =
      this.Bm =
      this.NA =
      this.angle =
      this.Ca =
      this.Ki =
        0;
    this.Bw = null;
    this.FK = !1;
    this.wt = new W();
    this.Vu = new W();
    this.Ut = new W();
    this.HD = new W();
    this.PN = this.RN = this.ON = this.QN = 0;
    this.Be = new W();
    this.eu = new W();
    this.xk = new W();
    this.LR = this.KR = 0;
    this.uw = new W();
    this.Zh = this.Nq = !1;
  }
  function ea() {
    this.LG = !1;
  }
  function Ze(a, b) {
    this.R3 = a;
    this.JQ = b;
    this.ia = 0;
    this.me = null;
  }
  function z() {
    this.Wk = this.Xk = 0;
    this.PS = this.tK = !1;
    this.Ly = 0;
    this.ri = null;
    this.Po = 0;
    this.RS = !1;
    this.oO = 0;
    this.QS = !1;
    this.nO = 0;
    this.OS = !1;
    this.My = this.Ny = this.Ak = this.SS = this.TS = this.WS = this.mO = 0;
    this.le = null;
    this.uK = !1;
    this.bT =
      this.aT =
      this.$S =
      this.ZS =
      this.YS =
      this.XS =
      this.VS =
      this.US =
      this.Hd =
      this.kc =
      this.mt =
        0;
    this.VR = this.Kg = this.Lb = this.yn = this.EK = this.XH = null;
  }
  function Aa() {
    this.ia = p.Ph;
    this.FI =
      this.mC =
      this.oC =
      this.nC =
      this.HI =
      this.GI =
      this.V =
      this.Ic =
      this.sj =
      this.pj =
      this.Ag =
      this.qj =
      this.Il =
        0;
    this.qr = null;
    this.Ix = this.Hx = 1;
    this.LQ =
      this.KQ =
      this.uQ =
      this.vQ =
      this.NQ =
      this.MQ =
      this.vC =
      this.Bx =
      this.tx =
      this.kp =
      this.yI =
      this.zI =
        0;
    this.xC = this.wC = null;
    this.Er = !1;
  }
  function Ta() {
    this.V =
      this.rC =
      this.Hl =
      this.Gl =
      this.Il =
      this.uf =
      this.eg =
      this.Ag =
      this.xQ =
      this.zQ =
      this.yQ =
      this.wQ =
      this.AQ =
        0;
  }
  var Na = this,
    u = {
      extend: function (a, b) {
        var c = Object.create(a.prototype || a);
        if (void 0 !== b && (b = b.prototype || b))
          for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
        return c;
      },
      Lz: function (a) {
        return a >> 16;
      },
      XY: function (a) {
        return a & 65535;
      },
      YY: function (a, b) {
        return (b << 16) | (a & 65535);
      },
      Aba: function (a) {
        return (a >>> 16) & 255;
      },
      tba: function (a) {
        return (a >>> 8) & 255;
      },
      nba: function (a) {
        return a & 255;
      },
      k$: function (a, b, c) {
        return ((a & 255) << 16) | ((b & 255) << 8) | (c & 255);
      },
      Qca: function (a) {
        return (
          ((a & 255) << 16) | (((a >>> 8) & 255) << 8) | ((a >>> 16) & 255)
        );
      },
      Y0: function (a, b, c) {
        return Math.min(Math.max(a, b), c);
      },
      ij: function (a) {
        var b = ((a >>> 16) & 255).toString(16),
          c = ((a >>> 8) & 255).toString(16);
        for (a = (a & 255).toString(16); 2 > b.length; ) b = "0" + b;
        for (; 2 > c.length; ) c = "0" + c;
        for (; 2 > a.length; ) a = "0" + a;
        return "#" + b + c + a;
      },
      Hf: function (a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a);
      },
      maa: function (a) {
        return Math.round(a);
      },
      bI: function (a) {
        return Math.ceil(a) == a;
      },
      sB: function (a, b, c, d, e) {
        ox = (d / 2) * 0.5522848;
        oy = (e / 2) * 0.5522848;
        xe = b + d;
        ye = c + e;
        xm = b + d / 2;
        ym = c + e / 2;
        a.beginPath();
        a.moveTo(b, ym);
        a.bezierCurveTo(b, ym - oy, xm - ox, c, xm, c);
        a.bezierCurveTo(xm + ox, c, xe, ym - oy, xe, ym);
        a.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        a.bezierCurveTo(xm - ox, ye, b, ym + oy, b, ym);
        a.closePath();
      },
      Uaa: function (a, b) {
        a.beginPath();
        a.moveTo(b.left, b.top);
        a.lineTo(b.right, b.top);
        a.lineTo(b.right, b.bottom);
        a.lineTo(b.left, b.bottom);
        a.lineTo(b.left, b.top);
        a.closePath();
        a.stroke();
      },
      Taa: function (a, b, c, d, e) {
        a.beginPath();
        a.moveTo(b, c);
        a.lineTo(d, e);
        a.closePath();
        a.stroke();
      },
      Tw: function (a, b) {
        for (var c = a.toString(); 4 > c.length; ) c = "0" + c;
        return c + ("." + b);
      },
      he: function (a, b) {
        if (a == b) return !0;
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a == b;
      },
      cca: function (a) {
        var b = a.lastIndexOf("\\");
        0 < b && (a = a.substring(b + 1));
        return a;
      },
      ZY: 40,
      k0: [
        0, 1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17, 19, 20, 21, 23, 24, 25,
        27, 28, 29, 31, 32, 33, 35, 36, 37, 39, 40, 41, 43, 44, 45, 47, 48, 49,
        51, 52,
      ],
      Fba: function (a) {
        return a < u.ZY ? u.k0[a] : Math.round((96 * a) / 72);
      },
      cq: 0,
      eq: 0,
      bq: 1,
      AE: 2,
      wz: 8,
      ko: 4,
      EW: 32,
      zE: 1024,
      FW: 2048,
      QO: function (a, b, c, d, e, f) {
        if (0 == b.length)
          return 0 != (c & 1024) && ((d.right = d.left), (d.bottom = d.top)), 0;
        e.cp || (a.font = e.uk());
        var h = 0,
          k = String.fromCharCode(10),
          g = String.fromCharCode(13),
          n = b.indexOf(k);
        if (0 <= n) {
          var m = new va();
          m.jO(d);
          var v,
            A = 0,
            l = 0,
            P;
          do
            (v = -1),
              A < b.length && (v = b.indexOf(g, A)),
              (P = Math.max(n, v)),
              v == n - 1 && n--,
              (n = b.substring(A, n)),
              (v = u.qt(a, n, c, m, f, e)),
              (l = Math.max(l, m.right - m.left)),
              (h += v),
              (m.top += v),
              (m.bottom = d.bottom),
              (m.right = d.right),
              (A = P + 1),
              (n = -1),
              A < b.length
                ? (n = b.indexOf(k, A))
                : ((v = u.qt(a, "", c, m, f, e)),
                  (l = Math.max(l, m.right - m.left)),
                  (h += v),
                  (m.top += v),
                  (m.bottom = d.bottom),
                  (m.right = d.right));
          while (0 <= n);
          A < b.length &&
            ((n = b.substring(A)),
            (v = u.qt(a, n, c, m, f, e)),
            (l = Math.max(l, m.right - m.left)),
            (h += v));
          0 != (c & u.zE) && ((d.right = d.left + l), (d.bottom = m.bottom));
          return h;
        }
        return (h = u.qt(a, b, c | u.FW, d, f, e));
      },
      gE: null,
      qt: function (a, b, c, d, e, f) {
        0 == b.length && (b = " ");
        var h, k;
        h = f.Ii();
        k = f.cp ? f.measureText(" ") : a.measureText(" ").width;
        var g = d.right - d.left,
          n = 0,
          m = 0,
          v,
          A,
          l,
          P = 0,
          t = 0,
          M;
        null == u.gE && (u.gE = Array(100));
        var L,
          w,
          B = !1,
          G = !1,
          p = d.top;
        A = h;
        0 != (A & 1) && A++;
        var q = p;
        do {
          A = n;
          l = M = 0;
          t += h;
          do {
            u.gE[M] = l;
            M += 1;
            v = m;
            m = -1;
            A < b.length && (m = b.indexOf(" ", A));
            -1 == m && (m = b.length);
            if (m < A) {
              l -= k;
              break;
            }
            w = b.substring(A, m);
            L = f.cp ? f.measureText(w) : a.measureText(w).width;
            if (l + L > g) {
              M--;
              if (0 < M) {
                l -= k;
                m = v;
                break;
              }
              for (v = A; v < m; v++) {
                L = f.cp
                  ? f.measureText(b.substring(v, v + 1))
                  : a.measureText(b.substring(v, v + 1)).width;
                if (l + L >= g) {
                  v--;
                  if (0 < v) {
                    P = Math.max(l, P);
                    0 == (c & u.zE) &&
                      ((l =
                        0 != (c & u.bq)
                          ? d.left + (d.right - d.left) / 2 - l / 2
                          : 0 != (c & u.AE)
                            ? d.right - l
                            : d.left),
                      (w = b.substring(A, v)),
                      e.push(new fa(l, p, w)));
                    m = v - 1;
                    G = B = !0;
                    break;
                  }
                  m = v < b.length ? b.indexOf(" ", v) : -1;
                  B = !0;
                  0 <= m && (G = !0);
                  break;
                }
                l += L;
              }
            }
            if (B) break;
            l += L;
            if (l + k > g) break;
            l += k;
            A = m + 1;
          } while (1);
          if (0 == G) {
            if (B) break;
            P = Math.max(l, P);
            if (0 == (c & u.zE))
              for (
                l =
                  0 != (c & u.bq)
                    ? d.left + (d.right - d.left) / 2 - l / 2
                    : 0 != (c & u.AE)
                      ? d.right - l
                      : d.left,
                  A = n,
                  n = 0;
                n < M;
                n++
              ) {
                m = -1;
                A < b.length && (m = b.indexOf(" ", A));
                -1 == m && (m = b.length);
                if (m < A) break;
                w = b.substring(A, m);
                e.push(new fa(l + u.gE[n], p, w));
                A = m + 1;
              }
          }
          G = B = !1;
          p += h;
          n = m + 1;
        } while (n < b.length);
        d.right = d.left + P;
        d.bottom = q + t;
        return t;
      },
      dn: function (a, b, c, d, e, f) {
        var h;
        if (e.cp)
          for (f = 0; f < d.length; f++)
            (h = d[f]), e.fillText(a, h.text, b + h.x, c + h.y);
        else
          for (
            a.font = e.uk(),
              a.fillStyle = u.ij(f),
              a.textAlign = "left",
              a.textBaseline = "top",
              f = 0;
            f < d.length;
            f++
          )
            (h = d[f]), a.fillText(h.text, b + h.x, c + h.y);
      },
      bp: function (a, b) {
        var c = a.toString();
        if (0 != (b & za.EL)) {
          var d = b & za.EL;
          if (c.length > d) c = c.substring(c.length - d);
          else for (; c.length < d; ) c = "0" + c;
        }
        return c;
      },
      iH: function (a, b) {
        var c;
        if (0 == (b & za.hW)) c = a.toString();
        else {
          var d = Math.floor(((b & za.fW) >> za.gW) + 1);
          c = -1;
          0 != (b & za.jW)
            ? (c = (b & za.dW) >> za.eW)
            : 0 != a && -1 < a && 1 > a && (c = d);
          c = 0 > c ? a.toPrecision(d) : a.toFixed(c);
          var e, f, h;
          if (0 != (b & za.iW))
            for (f = e = 0; f < c.length; f++)
              (h = c.charAt(f)),
                "." != h && "+" != h && "-" != h && "e" != h && "E" != h && e++;
          f = !1;
          "-" == c.charAt(0) && ((f = !0), (c = c.substr(1)));
          for (; e < d; ) (c = "0" + c), e++;
          f && (c = "-" + c);
        }
        return c;
      },
      Pca: function (a, b) {
        for (var c = a, d = b, e = d.indexOf("\\"); 0 <= e; )
          c.substring(0, e) == d.substring(0, e) &&
            ((d = d.substring(e + 1)), (c = c.substring(e + 1))),
            (e = d.indexOf("\\", e + 1));
        return c;
      },
    },
    $e = !1,
    Eb = !1,
    Yb = !1,
    Zb = window.XMLHttpRequest ? new XMLHttpRequest() : null;
  if (Zb && Zb.overrideMimeType)
    try {
      (Eb = "string" === typeof new XMLHttpRequest().responseType),
        0 <= navigator.userAgent.toLowerCase().indexOf("safari") && (Eb = !1);
    } catch (a) {}
  else {
    var $e = !0,
      $b = document.createElement("script");
    $b.type = "text/vbscript";
    $b.innerHTML =
      'Function BinFileReaderImpl_IE_VBAjaxLoader(fileName)\n\r\n\t                Dim xhr\n\r\n\t                Set xhr = CreateObject("Microsoft.XMLHTTP")\n\r\n\t                xhr.Open "GET", fileName, False\n\r\n\t                xhr.setRequestHeader "Accept-Charset", "x-user-defined"\n\r\n\t                xhr.send\n\r\n\t                Dim byteArray()\n\r\n\t                if xhr.Status = 200 Then\n\r\n\t                    Dim byteString\n\r\n\t                    Dim i\n\r\n\t                    byteString=xhr.responseBody\n\r\n\t                    ReDim byteArray(LenB(byteString))\n\r\n\t                    For i = 1 To LenB(byteString)\n\r\n\t                        byteArray(i-1) = AscB(MidB(byteString, i, 1))\n\r\n\t                    Next\n\r\n\t                End If\n\r\n\t                BinFileReaderImpl_IE_VBAjaxLoader=byteArray\n\r\n\t            End Function';
    document.head.appendChild($b);
  }
  if (Eb) {
    var af = new FileReader();
    try {
      af.readAsBinaryString && (Yb = !0);
    } catch (a) {}
    af = null;
  }
  Zb = null;
  da.prototype = {
    Vb: function () {
      return this.sg.charCodeAt(this.Oa++) & 255;
    },
    getFile: function (a, b, c) {
      this.QG = b;
      if ($e)
        try {
          var d = BinFileReaderImpl_IE_VBAjaxLoader(a).toArray(),
            e,
            f = d.length;
          f > c && (f = c);
          for (e = 0; e < f; e++) this.sg += String.fromCharCode(d[e]);
          this.end = this.sg.length;
          this.QG();
        } catch (S) {}
      else {
        var h = new XMLHttpRequest();
        h.open("GET", a, !0);
        var k = this;
        Eb
          ? ((h.responseType = "blob"),
            (h.onload = function () {
              if (4 == h.readyState && 200 == h.status) {
                var a = new FileReader();
                a.onloadend = function () {
                  if (Yb) k.sg += a.result;
                  else {
                    var b = new Uint8Array(a.result),
                      c;
                    for (c = 0; c < b.length; c++)
                      k.sg += String.fromCharCode(b[c]);
                  }
                  k.end = k.sg.length;
                  k.QG();
                };
                Yb
                  ? a.readAsBinaryString(h.response)
                  : a.readAsArrayBuffer(h.response);
              }
            }))
          : (h.overrideMimeType("text/plain; charset=x-user-defined"),
            (h.onload = function () {
              4 == h.readyState &&
                200 == h.status &&
                ((k.sg += h.responseText), (k.end = k.sg.length), k.QG());
            }));
        h.send(null);
      }
    },
    W5: function (a) {
      this.sg = a;
      this.end = a.length;
      var b = this;
      this.Vb = function () {
        return b.sg.charCodeAt(b.Oa++) & 255;
      };
    },
    Yf: function (a, b) {
      var c = new da();
      c.sg = this.sg;
      c.offset = a;
      c.Oa = a;
      c.end = a + b;
      c.mk = this.mk;
      return c;
    },
    rT: function (a) {
      this.mk = a;
    },
    Qa: function (a) {
      this.Oa += a;
    },
    ZB: function () {
      return this.Oa >= this.end;
    },
    Uc: function () {
      return this.Vb();
    },
    B: function () {
      var a;
      a = this.Vb();
      return 256 * this.Vb() + a;
    },
    xa: function () {
      var a;
      a = this.Vb();
      a = 256 * this.Vb() + a;
      return 32768 > a ? a : a - 65536;
    },
    cK: function () {
      var a;
      a = this.Vb();
      return 256 * this.Vb() + a;
    },
    v: function () {
      var a, b, c;
      a = this.Vb();
      b = this.Vb();
      c = this.Vb();
      a = 16777216 * this.Vb() + 65536 * c + 256 * b + a;
      return 2147483647 >= a ? a : a - 4294967296;
    },
    Qe: function () {
      var a, b, c;
      a = this.Vb();
      b = this.Vb();
      c = this.Vb();
      this.Vb();
      return 65536 * a + 256 * b + c;
    },
    dK: function () {
      var a, b, c;
      a = this.Vb();
      b = this.Vb();
      c = this.Vb();
      a = 16777216 * this.Vb() + 65536 * c + 256 * b + a;
      2147483648 < a && (a -= 4294967296);
      return a / 65536;
    },
    yS: function () {
      var a, b, c, d, e, f, h;
      a = this.Vb();
      b = this.Vb();
      c = this.Vb();
      d = this.Vb();
      e = this.Vb();
      f = this.Vb();
      h = this.Vb();
      a =
        72057594037927936 * this.Vb() +
        281474976710656 * h +
        1099511627776 * f +
        4294967296 * e +
        16777216 * d +
        65536 * c +
        256 * b +
        a;
      0x7fffffffffffffff < a && (a -= 1.8446744073709552e19);
      return a / 4294967296;
    },
    Nd: function (a) {
      var b = "";
      if (this.mk)
        if (1 > arguments.length) {
          if (this.ZB()) return b;
          c = this.Oa;
          for (b = this.cK(); b && !this.ZB(); ) b = this.cK();
          b = (this.Oa - c - 2) / 2;
          this.Oa = c;
          b = this.Nd(b);
          this.Vb();
          this.Vb();
        } else {
          b = "";
          c = this.Oa;
          for (e = 0; e < a; e++) {
            d = this.cK();
            if (0 == d) break;
            b += String.fromCharCode(d);
          }
          this.Oa = c + 2 * a;
        }
      else if (1 > arguments.length) {
        if (this.ZB()) return b;
        for (var c = this.Oa, b = this.Vb(); b && !this.ZB(); ) b = this.Vb();
        b = this.Oa - c - 1;
        this.Oa = c;
        b = this.Nd(b);
        this.Vb();
      } else {
        for (var d, c = this.Oa, e = 0; e < a; ++e) {
          d = this.Vb();
          if (0 == d) break;
          b += String.fromCharCode(d);
        }
        this.Oa = c + a;
      }
      return b;
    },
    seek: function (a) {
      a >= this.end && (a = this.end);
      this.Oa = a;
    },
    g6: function (a) {
      var b = this.Oa,
        b = b - a;
      0 > b && (b = 0);
      this.Oa = b;
    },
    c5: function (a) {
      var b,
        c = a.length;
      for (b = 0; b < c; b++) a[b] = this.Vb();
    },
    zS: function (a) {
      var b = [],
        c;
      for (c = 0; c < a; c++) b[c] = this.Vb();
      return b;
    },
    eK: function () {
      var a = new rb();
      a.eK(this);
      return a;
    },
  };
  W.prototype = {
    add: function (a) {
      this.oh.push(a);
    },
    get: function (a) {
      return a < this.oh.length ? this.oh[a] : null;
    },
    put: function (a, b) {
      this.oh[a] = b;
    },
    set: function (a, b) {
      a < this.oh.length && (this.oh[a] = b);
    },
    Cp: function (a) {
      a < this.oh.length && this.oh.splice(a, 1);
    },
    indexOf: function (a) {
      return this.oh.indexOf(a);
    },
    contains: function (a) {
      return 0 <= this.oh.indexOf(a);
    },
    AS: function (a) {
      a = this.oh.indexOf(a);
      0 <= a && this.oh.splice(a, 1);
    },
    size: function () {
      return this.oh.length;
    },
    clear: function () {
      this.oh.length = 0;
    },
    sort: function (a) {
      Array.prototype.sort.call(this.oh, a);
    },
  };
  va.prototype = {
    load: function (a) {
      this.left = a.v();
      this.top = a.v();
      this.right = a.v();
      this.bottom = a.v();
    },
    jO: function (a) {
      this.left = a.left;
      this.right = a.right;
      this.top = a.top;
      this.bottom = a.bottom;
    },
  };
  rb.prototype = {
    uk: function () {
      var a;
      a = this.ci ? "italic " : "normal ";
      var b = 100 * Math.floor(this.di / 100),
        b = Math.max(b, 100),
        b = Math.min(b, 900);
      a = a + (b + " ") + (this.Oc + "px ");
      return (a += this.Bh);
    },
    Ii: function () {
      return this.Oc + Math.ceil(this.Oc / 8);
    },
    Da: function () {
      this.Bh = "Arial";
      this.Oc = 13;
      this.di = 400;
      this.ci = 0;
    },
    eK: function (a) {
      this.Oc = a.v();
      0 > this.Oc && (this.Oc = -this.Oc);
      a.Qa(12);
      this.di = a.v();
      this.ci = a.Uc();
      a.Uc();
      a.Uc();
      a.Qa(5);
      this.Bh = a.Nd(32);
    },
  };
  mb.separator = "{@24}";
  mb.J8 = 1;
  mb.I8 = 2;
  mb.prototype = {};
  Ca.prototype = {
    measureText: function (a, b) {
      b = this.app.JH(b);
      if (b.cp) return b.measureText(a);
      this.sh.font = b.uk();
      return this.sh.measureText(a).width;
    },
    ms: function (a, b, c, d, e) {
      if (
        a == this.k3 &&
        b == this.g3 &&
        c == this.j3 &&
        d == this.h3 &&
        e == this.f3
      )
        return this.i3;
      var f = this.sh;
      f.clearRect(0, 0, this.width, this.height);
      c || (c = new va(0, 0, this.width, this.height));
      var h = [];
      d = this.app.JH(d);
      var k = u.QO(f, a, b, c, d, h);
      if (0 != k) {
        var g = 0;
        0 != (b & u.wz)
          ? (g = this.height - k)
          : 0 != (b & u.ko) && (g = this.height / 2 - k / 2);
        u.dn(f, 0, g, h, d, e, 0, 0);
      }
      this.k3 = a;
      this.g3 = b;
      this.j3 = c;
      this.h3 = d;
      this.f3 = e;
      return (this.i3 = k);
    },
    UQ: function (a) {
      a
        ? ((this.sh.fillStyle = u.ij(a)),
          this.sh.fillRect(0, 0, this.width, this.height))
        : this.sh.clearRect(0, 0, this.width, this.height);
    },
    GC: function (a, b, c, d, e, f, h) {
      var k = [];
      c || (c = new va(0, 0, this.width, this.height));
      e = this.app.JH(e);
      a = u.QO(this.sh, a, b, c, e, k);
      if (0 != a)
        switch (
          ((c = 0),
          0 != (b & u.wz)
            ? (c = this.height - a)
            : 0 != (b & u.ko) && (c = this.height / 2 - a / 2),
          f)
        ) {
          case 1:
            u.dn(this.sh, 1, c + 1, k, e, h, 0, 0);
            u.dn(this.sh, 0, c, k, e, d, 0, 0);
            break;
          case 2:
            u.dn(this.sh, 1, c, k, e, h, 0, 0);
            u.dn(this.sh, 1, c + 2, k, e, h, 0, 0);
            u.dn(this.sh, 0, c + 1, k, e, h, 0, 0);
            u.dn(this.sh, 2, c + 1, k, e, h, 0, 0);
            u.dn(this.sh, 1, c + 1, k, e, d, 0, 0);
            break;
          case 0:
            u.dn(this.sh, 0, c, k, e, d, 0, 0);
        }
    },
    resize: function (a, b) {
      if (a != this.width || b != this.height)
        (this.width = a),
          (this.height = b),
          (this.canvas.width = a),
          (this.canvas.height = b);
    },
    Zc: function (a, b, c, d, e) {
      a.Dp(this.canvas, b, c, this.width, this.height, d, e);
    },
  };
  bb.t1 = [
    { cd: navigator.userAgent, Qf: "Chrome", Le: "Chrome" },
    { cd: navigator.userAgent, Qf: "OmniWeb", Xu: "OmniWeb/", Le: "OmniWeb" },
    { cd: navigator.vendor, Qf: "Apple", Le: "Safari", Xu: "Version" },
    { H4: window.opera, Le: "Opera", Xu: "Version" },
    { cd: navigator.vendor, Qf: "iCab", Le: "iCab" },
    { cd: navigator.vendor, Qf: "KDE", Le: "Konqueror" },
    { cd: navigator.userAgent, Qf: "Firefox", Le: "Firefox" },
    { cd: navigator.vendor, Qf: "Camino", Le: "Camino" },
    { cd: navigator.userAgent, Qf: "Netscape", Le: "Netscape" },
    { cd: navigator.userAgent, Qf: "MSIE", Le: "Explorer", Xu: "MSIE" },
    { cd: navigator.userAgent, Qf: "Gecko", Le: "Mozilla", Xu: "rv" },
    { cd: navigator.userAgent, Qf: "Mozilla", Le: "Netscape", Xu: "Mozilla" },
  ];
  bb.v1 = [
    { cd: navigator.platform, Qf: "Win", Le: "Windows" },
    { cd: navigator.platform, Qf: "Mac", Le: "MacOS" },
    { cd: navigator.userAgent, Qf: "iPhone", Le: "iOS" },
    { cd: navigator.userAgent, Qf: "iPod", Le: "iOS" },
    { cd: navigator.userAgent, Qf: "iPad", Le: "iOS" },
    { cd: navigator.userAgent, Qf: "Android", Le: "Android" },
    { cd: navigator.platform, Qf: "Windows Phone", Le: "Windows Phone" },
    { cd: navigator.platform, Qf: "Linux", Le: "Linux" },
  ];
  bb.prototype = {
    hT: function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b].cd,
          d = a[b].H4;
        this.$T = a[b].Xu || a[b].Le;
        if (c) {
          if (-1 != c.indexOf(a[b].Qf)) return a[b].Le;
        } else if (d) return a[b].Le;
      }
    },
    iT: function (a) {
      var b = a.indexOf(this.$T);
      if (-1 != b) return parseFloat(a.substring(b + this.$T.length + 1));
    },
  };
  u.dca = function (a, b, c, d) {
    var e = document.createElement("canvas");
    e.width = b.width;
    e.height = b.height;
    var f = e.getContext("2d");
    0 == b.ne
      ? f.drawImage(b.Ze, 0, 0)
      : f.drawImage(
          a.Ia.Ae[b.ne],
          b.li,
          b.mi,
          b.width,
          b.height,
          0,
          0,
          b.width,
          b.height,
        );
    var h = f.getImageData(0, 0, b.width, b.height),
      k = (d >> 16) & 255,
      g = (d >> 8) & 255;
    d &= 255;
    var n = (c >> 16) & 255,
      m = (c >> 8) & 255;
    c &= 255;
    var v, A, l;
    for (l = 0; l < b.height; l++)
      for (A = 0; A < b.width; A++)
        (v = 4 * (l * b.width + A)),
          h.data[v] == n &&
            h.data[v + 1] == m &&
            h.data[v + 2] == c &&
            ((h.data[v] = k), (h.data[v + 1] = g), (h.data[v + 2] = d));
    f.putImageData(h, 0, 0);
    f = new qa();
    f.app = a;
    f.width = b.width;
    f.height = b.height;
    f.Mb = b.Mb;
    f.Gb = b.Gb;
    f.al = b.al;
    f.cl = b.cl;
    f.ec = 0;
    f.Ze = e;
    f.uj = b.uj;
    f.Gr = b.Gr;
    f.xn = b.xn;
    return f;
  };
  Va.NX = 1;
  Va.i8 = 2;
  Va.MX = 4;
  Va.LX = 8;
  Va.prototype = {
    $0: function (a) {
      if (this.b2 != a.Bh || this.Wg != a.Oc) return !1;
      var b = 0 != (this.uP & Va.NX),
        c = 0 != a.ci;
      if (b != c) return !1;
      b = 0 != (this.uP & Va.MX);
      c = 400 < a.di;
      return b != c ? !1 : !0;
    },
    Ii: function () {
      return this.height + this.O2;
    },
    measureText: function (a) {
      var b = 0,
        c = a.length,
        d,
        e;
      for (d = 0; d < c; d++)
        (e = this.TG.indexOf(a.charAt(d))),
          (b = 0 <= e ? b + (this.SG[e] + this.YH) : b + this.width);
      return b;
    },
    fillText: function (a, b, c, d) {
      var e = b.length,
        f,
        h,
        k,
        g,
        n = this.Bl;
      if (0 == (this.Ja & Va.LX))
        for (f = 0; f < e; f++)
          (g = this.TG.indexOf(b.charAt(f))),
            0 <= g
              ? ((k = Math.floor(g / this.KC)),
                (h = g - k * this.KC),
                (k *= this.height + 1),
                (h *= this.width + 1),
                0 == n.ne
                  ? a.drawImage(
                      n.Ze,
                      h,
                      k,
                      this.width,
                      this.height,
                      Math.round(c),
                      Math.round(d),
                      this.width,
                      this.height,
                    )
                  : a.drawImage(
                      n.app.Ia.Ae[n.ne],
                      h + n.li,
                      k + n.mi,
                      this.width,
                      this.height,
                      Math.round(c),
                      Math.round(d),
                      this.width,
                      this.height,
                    ),
                (c += this.SG[g] + this.YH))
              : ((a.fillStyle = u.ij(this.color)),
                a.fillRect(c, d, this.width, this.height),
                (c += this.width));
      else
        for (c += this.measureText(b), f = e - 1; 0 <= f; f--)
          (g = this.TG.indexOf(b.charAt(f))),
            0 <= g
              ? ((c -= this.SG[g] + this.YH),
                (k = g / this.KC),
                (h = g - k * this.KC),
                (k *= this.height + 1),
                (h *= this.width + 1),
                0 == n.ne
                  ? a.drawImage(
                      n.Ze,
                      h,
                      k,
                      this.width,
                      this.height,
                      Math.round(c),
                      Math.round(d),
                      this.width,
                      this.height,
                    )
                  : a.drawImage(
                      n.app.Ia.Ae[n.ne],
                      h + n.li,
                      k + n.mi,
                      this.width,
                      this.height,
                      Math.round(c),
                      Math.round(d),
                      this.width,
                      this.height,
                    ))
              : ((c -= this.width),
                (a.fillStyle = u.ij(this.color)),
                a.fillRect(c, d, this.width, this.height));
    },
  };
  la.co = 1;
  la.LU = 17408;
  la.KU = 17664;
  la.GU = 17920;
  la.EU = 18176;
  la.FU = 18432;
  la.HU = 18688;
  la.NU = 18944;
  la.IU = 19200;
  la.L6 = 19456;
  la.M6 = 19712;
  la.OU = 19968;
  la.PU = 20224;
  la.JU = 20480;
  la.MU = 20736;
  la.iV = 983039;
  la.create = function (a) {
    var b = !1,
      c = !1,
      d = !1,
      e = !1,
      f = !1,
      h = !1,
      k = !1,
      g = !1,
      n = !1,
      m = !1,
      v = a.file.Oa,
      A = a.file.B(),
      l,
      P = a.file.v();
    switch (P) {
      case 65535:
        l = new Da();
        break;
      case 131071:
        l = new Da();
        break;
      case 262143:
        l = new sb();
        break;
      case 327679:
        l = new ACT_SUBVARG();
        break;
      case 393215:
        l = new tb();
        break;
      case 458751:
        l = new jc();
        break;
      case 524287:
        l = new kc();
        break;
      case 983039:
        l = new lc();
        break;
      case 1048575:
        l = new ACT_STOPLOOP();
        break;
      case 1114111:
        l = new ACT_SETLOOPINDEX();
        break;
      case 1179647:
        l = new ACT_RANDOMIZE();
        break;
      case 1310719:
        l = new ACT_SETGLOBALSTRING();
        break;
      case 1572863:
        l = new Da();
        break;
      case 1638399:
        l = new Da();
        break;
      case 1835007:
        l = new Ib();
        b = !0;
        break;
      case 1900543:
        l = new sb();
        break;
      case 1966079:
        l = new Ib();
        b = !0;
        break;
      case 2031615:
        l = new sb();
        break;
      case 2097151:
        l = new Jb();
        c = !0;
        break;
      case 2162687:
        l = new tb();
        break;
      case 2228223:
        l = new Jb();
        c = !0;
        break;
      case 2293759:
        l = new tb();
        break;
      case 2359295:
        l = new ACT_SUBVARGCONST();
        d = !0;
        break;
      case 2424831:
        l = new ACT_SUBVARG();
        break;
      case 2490367:
        l = new ACT_SUBVARGCONST();
        d = !0;
        break;
      case 2555903:
        l = new ACT_SUBVARG();
        break;
      case 2883583:
        l = new ACT_EXECUTECHILDEVENTS();
        break;
      case 2949119:
        l = new Da();
        break;
      case 65534:
        l = new mc();
        break;
      case 131070:
        l = new ACT_STOPSAMPLE();
        break;
      case 327678:
        l = new ACT_PLAYLOOPSAMPLE();
        break;
      case 458750:
        l = new nc();
        break;
      case 524286:
        l = new ACT_PAUSESAMPLE();
        break;
      case 589822:
        l = new ACT_RESUMESAMPLE();
        break;
      case 786430:
        l = new ACT_PLAYCHANNEL();
        break;
      case 851966:
        l = new ACT_PLAYLOOPCHANNEL();
        break;
      case 917502:
        l = new ACT_PAUSECHANNEL();
        break;
      case 983038:
        l = new ACT_RESUMECHANNEL();
        break;
      case 1048574:
        l = new ACT_STOPCHANNEL();
        break;
      case 1114110:
        l = new ACT_SETCHANNELPOS();
        break;
      case 1179646:
        l = new ACT_SETCHANNELVOL();
        break;
      case 1245182:
        l = new Da();
        break;
      case 1310718:
        l = new ACT_SETSAMPLEPOS();
        break;
      case 1376254:
        l = new ACT_SETSAMPLEMAINVOL();
        break;
      case 1441790:
        l = new oc();
        break;
      case 1507326:
        l = new Da();
        break;
      case 1572862:
        l = new Da();
        break;
      case 1638398:
        l = new ACT_PAUSEALLCHANNELS();
        break;
      case 1703934:
        l = new ACT_RESUMEALLCHANNELS();
        break;
      case 2031614:
        l = new ACT_LOCKCHANNEL();
        break;
      case 2097150:
        l = new ACT_UNLOCKCHANNEL();
        break;
      case 2162686:
        l = new ACT_SETCHANNELFREQ();
        break;
      case 2228222:
        l = new ACT_SETSAMPLEFREQ();
        break;
      case 2424830:
        l = new ACT_PLAYSAMPLE2();
        break;
      case 65533:
        l = new ACT_NEXTLEVEL();
        break;
      case 131069:
        l = new ACT_PREVLEVEL();
        break;
      case 196605:
        l = new ACT_GOLEVEL();
        break;
      case 262141:
        l = new ACT_PAUSEKEY();
        break;
      case 327677:
        l = new ACT_ENDGAME();
        break;
      case 393213:
        l = new pc();
        break;
      case 458749:
        l = new qc();
        break;
      case 524285:
        l = new ACT_CDISPLAY();
        break;
      case 589821:
        l = new ACT_CDISPLAYX();
        break;
      case 655357:
        l = new ACT_CDISPLAYY();
        break;
      case 983037:
        l = new ACT_FULLSCREENMODE();
        break;
      case 1048573:
        l = new ACT_WINDOWEDMODE();
        break;
      case 1114109:
        l = new ACT_SETFRAMERATE();
        break;
      case 1179645:
        l = new ACT_PAUSEKEY();
        break;
      case 1245181:
        l = new ACT_PAUSEANYKEY();
        break;
      case 1310717:
        l = new ACT_SETVSYNCON();
        break;
      case 1376253:
        l = new ACT_SETVSYNCOFF();
        break;
      case 1441789:
        l = new ACT_SETVIRTUALWIDTH();
        break;
      case 1507325:
        l = new ACT_SETVIRTUALHEIGHT();
        break;
      case 1572861:
        l = new ACT_SETFRAMEBDKCOLOR();
        break;
      case 1638397:
        l = new ACT_DELCREATEDBKDAT();
        break;
      case 1703933:
        l = new ACT_DELALLCREATEDBKD();
        break;
      case 1769469:
        l = new ACT_SETFRAMEWIDTH();
        break;
      case 1835005:
        l = new ACT_SETFRAMEHEIGHT();
        break;
      case 2097149:
        l = new ACT_PLAYDEMO();
        break;
      case 2162685:
        l = new Da();
        break;
      case 2228221:
        l = new Da();
        break;
      case 2293757:
        l = new Da();
        break;
      case 2359293:
        l = new Da();
        break;
      case 2424829:
        l = new Da();
        break;
      case 2490365:
        l = new ACT_SETSTRETCHRESAMPLING();
        break;
      case 65532:
        l = new ACT_SETTIMER();
        break;
      case 131068:
        l = new ACT_EVENTAFTER();
        break;
      case 196604:
        l = new ACT_NEVENTSAFTER();
        break;
      case 65530:
        l = new ACT_HIDECURSOR();
        break;
      case 131066:
        l = new ACT_SHOWCURSOR();
        break;
      case 65529:
        l = new ACT_SETSCORE();
        break;
      case 131065:
        l = new rc();
        break;
      case 196601:
        l = new ACT_NOINPUT();
        break;
      case 262137:
        l = new ACT_RESTINPUT();
        break;
      case 327673:
        l = new ACT_ADDSCORE();
        break;
      case 393209:
        l = new sc();
        break;
      case 458745:
        l = new ACT_SUBSCORE();
        break;
      case 524281:
        l = new tc();
        break;
      case 589817:
        l = new ACT_SETINPUT();
        break;
      case 655353:
        l = new ACT_SETINPUTKEY();
        break;
      case 720889:
        l = new ACT_SETPLAYERNAME();
        break;
      case 65531:
        l = new uc();
        break;
      case 131067:
        l = new ACT_CREATEBYNAME();
        break;
      case 196603:
        l = new ACT_CREATEEXP();
        break;
      case 262139:
        l = new ACT_CREATEBYNAMEEXP();
        break;
      case 5242883:
        l = new ACT_STRDESTROY();
        break;
      case 5308419:
        l = new ACT_STRDISPLAY();
        break;
      case 5373955:
        l = new ACT_STRDISPLAYDURING();
        break;
      case 5439491:
        l = new ACT_STRSETCOLOUR();
        break;
      case 5505027:
        l = new ACT_STRSET();
        break;
      case 5570563:
        l = new ACT_STRPREV();
        break;
      case 5636099:
        l = new ACT_STRNEXT();
        break;
      case 5701635:
        l = new ACT_STRDISPLAYSTRING();
        break;
      case 5767171:
        l = new ACT_STRSETSTRING();
        break;
      case 5242882:
        l = new ACT_SPRPASTE();
        break;
      case 5308418:
        l = new ACT_SPRFRONT();
        break;
      case 5373954:
        l = new ACT_SPRBACK();
        break;
      case 5439490:
        l = new ACT_SPRADDBKD();
        break;
      case 5505026:
        l = new ACT_SPRREPLACECOLOR();
        break;
      case 5570562:
        l = new ACT_SPRSETSCALE();
        break;
      case 5636098:
        l = new ACT_SPRSETSCALEX();
        break;
      case 5701634:
        l = new ACT_SPRSETSCALEY();
        break;
      case 5767170:
        l = new ACT_SPRSETANGLE();
        break;
      case 5242887:
        l = new vc();
        break;
      case 5308423:
        l = new ACT_CADDVALUE();
        break;
      case 5373959:
        l = new ACT_CSUBVALUE();
        break;
      case 5439495:
        l = new ACT_CSETMIN();
        break;
      case 5505031:
        l = new ACT_CSETMAX();
        break;
      case 5570567:
        l = new ACT_CSETCOLOR1();
        break;
      case 5636103:
        l = new ACT_CSETCOLOR2();
        break;
      case 5242884:
        l = new ACT_QASK();
        break;
      case 5242889:
        l = new ACT_CCARESTARTAPP();
        break;
      case 5308425:
        l = new ACT_CCARESTARTFRAME();
        break;
      case 5373961:
        l = new ACT_CCANEXTFRAME();
        break;
      case 5439497:
        l = new ACT_CCAPREVIOUSFRAME();
        break;
      case 5505033:
        l = new ACT_CCAENDAPP();
        break;
      case 5636105:
        l = new ACT_CCAJUMPFRAME();
        break;
      case 5701641:
        l = new ACT_CCASETGLOBALVALUE();
        break;
      case 5767177:
        l = new ACT_CCASHOW();
        break;
      case 5832713:
        l = new ACT_CCAHIDE();
        break;
      case 5898249:
        l = new ACT_CCASETGLOBALSTRING();
        break;
      case 5963785:
        l = new ACT_CCAPAUSEAPP();
        break;
      case 6029321:
        l = new ACT_CCARESUMEAPP();
        break;
      case 6094857:
        l = new ACT_CCASETWIDTH();
        break;
      case 6160393:
        l = new ACT_CCASETHEIGHT();
        break;
      default:
        switch (P & 4294901760) {
          case 0:
            l = new ACT_EXTEXTRA();
            m = !0;
            break;
          case 65536:
            l = new wc();
            break;
          case 131072:
            l = new xc();
            break;
          case 196608:
            l = new yc();
            break;
          case 262144:
            l = new zc();
            break;
          case 327680:
            l = new Ac();
            break;
          case 393216:
            l = new Bc();
            break;
          case 458752:
            l = new ACT_EXTMAXSPEED();
            break;
          case 524288:
            l = new ACT_EXTWRAP();
            break;
          case 589824:
            l = new ACT_EXTBOUNCE();
            break;
          case 655360:
            l = new ACT_EXTREVERSE();
            break;
          case 720896:
            l = new ACT_EXTNEXTMOVE();
            break;
          case 786432:
            l = new ACT_EXTPREVMOVE();
            break;
          case 851968:
            l = new Cc();
            break;
          case 917504:
            l = new ACT_EXTLOOKAT();
            break;
          case 983040:
            l = new ACT_EXTSTOPANIM();
            break;
          case 1048576:
            l = new ACT_EXTSTARTANIM();
            break;
          case 1114112:
            l = new Dc();
            break;
          case 1179648:
            l = new ACT_EXTFORCEDIR();
            break;
          case 1245184:
            l = new ACT_EXTFORCESPEED();
            break;
          case 1310720:
            l = new ACT_EXTRESTANIM();
            break;
          case 1376256:
            l = new ACT_EXTRESTDIR();
            break;
          case 1441792:
            l = new ACT_EXTRESTSPEED();
            break;
          case 1507328:
            l = new ACT_EXTSETDIR();
            break;
          case 1572864:
            l = new Ec();
            break;
          case 1638400:
            l = new ACT_EXTSHUFFLE();
            break;
          case 1703936:
            l = new Fc();
            break;
          case 1769472:
            l = new Gc();
            break;
          case 1835008:
            l = new ACT_EXTDISPLAYDURING();
            break;
          case 1900544:
            l = new ACT_EXTSHOOT();
            break;
          case 1966080:
            l = new ACT_EXTSHOOTTOWARD();
            break;
          case 2031616:
            l = new Hc();
            e = !0;
            break;
          case 2097152:
            l = new ACT_EXTADDVAR();
            f = !0;
            break;
          case 2162688:
            l = new ACT_EXTSUBVAR();
            h = !0;
            break;
          case 2228224:
            l = new ACT_EXTDISPATCHVAR();
            break;
          case 2293760:
            l = new ACT_EXTSETFLAG();
            k = !0;
            break;
          case 2359296:
            l = new ACT_EXTCLRFLAG();
            g = !0;
            break;
          case 2424832:
            l = new ACT_EXTCHGFLAG();
            n = !0;
            break;
          case 2490368:
            l = new ACT_EXTINKEFFECT();
            break;
          case 2555904:
            l = new ACT_EXTSETSEMITRANSPARENCY();
            break;
          case 2621440:
            l = new Jc();
            break;
          case 2686976:
            l = new ACT_EXTRESTFRAME();
            break;
          case 2752512:
            l = new ACT_EXTSETACCELERATION();
            break;
          case 2818048:
            l = new ACT_EXTSETDECELERATION();
            break;
          case 2883584:
            l = new ACT_EXTSETROTATINGSPEED();
            break;
          case 2949120:
            l = new ACT_EXTSETDIRECTIONS();
            break;
          case 3014656:
            l = new ACT_EXTBRANCHNODE();
            break;
          case 3080192:
            l = new Kc();
            break;
          case 3145728:
            l = new ACT_EXTGOTONODE();
            break;
          case 3211264:
            l = new ACT_EXTSETVARSTRING();
            break;
          case 3276800:
            l = new ACT_EXTSETFONTNAME();
            break;
          case 3342336:
            l = new ACT_EXTSETFONTSIZE();
            break;
          case 3407872:
            l = new ACT_EXTSETBOLD();
            break;
          case 3473408:
            l = new ACT_EXTSETITALIC();
            break;
          case 3538944:
            l = new ACT_EXTSETUNDERLINE();
            break;
          case 3604480:
            l = new Da();
            break;
          case 3670016:
            l = new ACT_EXTSETTEXTCOLOR();
            break;
          case 3735552:
            l = new ACT_EXTSPRFRONT();
            break;
          case 3801088:
            l = new ACT_EXTSPRBACK();
            break;
          case 3866624:
            l = new ACT_EXTMOVEBEFORE();
            break;
          case 3932160:
            l = new ACT_EXTMOVEAFTER();
            break;
          case 3997696:
            l = new Lc();
            break;
          case 4063232:
            l = new Da();
            break;
          case 4128768:
            l = new ACT_EXTSETEFFECT();
            break;
          case 4194304:
            l = new Da();
            break;
          case 4259840:
            l = new Mc();
            break;
          case 4325376:
            l = new ACT_EXTSETRGBCOEF();
            break;
          case 4390912:
            l = new Da();
            break;
          case 4456448:
            l = new ACT_EXTSETFRICTION();
            break;
          case 4521984:
            l = new ACT_EXTSETELASTICITY();
            break;
          case 4587520:
            l = new ACT_EXTAPPLYIMPULSE();
            break;
          case 4653056:
            l = new ACT_EXTAPPLYANGULARIMPULSE();
            break;
          case 4718592:
            l = new ACT_EXTAPPLYFORCE();
            break;
          case 4784128:
            l = new ACT_EXTAPPLYTORQUE();
            break;
          case 4849664:
            l = new ACT_EXTSETLINEARVELOCITY();
            break;
          case 4915200:
            l = new ACT_EXTSETANGULARVELOCITY();
            break;
          case 4980736:
            l = new ACT_EXTFOREACH();
            break;
          case 5046272:
            l = new ACT_EXTFOREACH2();
            break;
          case 5111808:
            l = new ACT_EXTSTOPFORCE();
            break;
          case 5177344:
            l = new ACT_EXTSTOPTORQUE();
            break;
          default:
            l = new Ge();
        }
    }
    if (null != l) {
      l.Ga = P;
      l.We = a.file.xa();
      l.hc = a.file.xa();
      l.Pb = a.file.Uc();
      l.yh = a.file.Uc();
      l.Ke = a.file.Uc();
      l.ar = a.file.Uc();
      P = 0;
      if (m) {
        l.Ke--;
        var m = a.file.Oa,
          t = a.file.B();
        a.file.B();
        P = a.file.B();
        a.file.seek(m + t);
      }
      if (0 < l.Ke)
        for (l.L = Array(l.Ke), m = 0; m < l.Ke; m++) l.L[m] = wb.create(a);
      if (0 != P) {
        m = null;
        switch (P) {
          case 1:
            m = new ACT_EXTSETFLAGBYEXP();
        }
        null != m &&
          ((m.Ga = l.Ga),
          (m.We = l.We),
          (m.hc = l.hc),
          (m.Pb = l.Pb),
          (m.yh = l.yh),
          (m.Ke = l.Ke),
          (m.ar = l.ar),
          (m.L = l.L),
          (l = m));
      }
      if (b || c || d)
        (b = l.L[0]), (l.Dn = b.value), (b = l.L[1]), (l.value = b.Aa[0].value);
      if (e || f || h)
        (m = null),
          (b = l.L[0]),
          53 != b.code &&
            ((c = b.value),
            (b = l.L[1]),
            0 <= c &&
              2 == b.Aa.length &&
              (0 >= b.Aa[1].code || 1310720 <= b.Aa[1].code) &&
              (65535 == b.Aa[0].code || 1572863 == b.Aa[0].code) &&
              (e
                ? ((m = new Ic()), (m.Dn = c), (m.value = b.Aa[0].value))
                : f
                  ? ((m = new ACT_EXTADDVARCONST()),
                    (m.Dn = c),
                    (m.value = b.Aa[0].value))
                  : h &&
                    ((m = new ACT_EXTSUBVARCONST()),
                    (m.Dn = c),
                    (m.value = b.Aa[0].value))),
            null != m &&
              ((m.Ga = l.Ga),
              (m.We = l.We),
              (m.hc = l.hc),
              (m.Pb = l.Pb),
              (m.yh = l.yh),
              (m.Ke = l.Ke),
              (m.ar = l.ar),
              (m.L = l.L),
              (l = m)));
      if (k || g || n)
        (m = null),
          (e = l.L[0]),
          2 == e.Aa.length &&
            (0 >= e.Aa[1].code || 1310720 <= e.Aa[1].code) &&
            65535 == e.Aa[0].code &&
            (k
              ? ((m = new ACT_EXTSETFLAGCONST()), (m.ra = 1 << e.Aa[0].value))
              : g
                ? ((m = new ACT_EXTCLRFLAGCONST()), (m.ra = 1 << e.Aa[0].value))
                : n &&
                  ((m = new ACT_EXTCHGFLAGCONST()),
                  (m.ra = 1 << e.Aa[0].value))),
          null != m &&
            ((m.Ga = l.Ga),
            (m.We = l.We),
            (m.hc = l.hc),
            (m.Pb = l.Pb),
            (m.yh = l.yh),
            (m.Ke = l.Ke),
            (m.ar = l.ar),
            (m.L = l.L),
            (l = m));
    }
    a.file.seek(v + A);
    return l;
  };
  ib.Cz = 1;
  Da.prototype = { Qb: function () {} };
  sb.prototype = {
    Qb: function (a) {
      var b;
      b = 52 == this.L[0].code ? a.fd(this.L[0]) - 1 : this.L[0].value;
      var c = a.hn(this.L[1]);
      a.m.yK(b, c);
    },
  };
  Ib.prototype = {
    Qb: function (a) {
      a.m.yK(this.Dn, this.value);
    },
  };
  tb.prototype = {
    Qb: function (a) {
      var b;
      b = 52 == this.L[0].code ? a.fd(this.L[0]) - 1 : this.L[0].value;
      var c = a.hn(this.L[1]);
      a.m.qN(b, c);
    },
  };
  Jb.prototype = {
    Qb: function (a) {
      a.m.qN(this.Dn, this.value);
    },
  };
  jc.prototype = {
    Qb: function (a) {
      var b = this.L[0].Oa,
        c = a.s.je[b].tb[0].L[0],
        d = 0 != (c.Yd & wa.Em);
      c.Yd &= ~wa.Em;
      d && this.UP(a, b);
    },
    UP: function (a, b) {
      var c = a.s.je[b],
        d = c.tb[0],
        d = d.L[0],
        e,
        f;
      if (0 == (d.Yd & wa.lo))
        for (c.qa &= ~U.Oh, b++, f = !1, e = 1; ; ) {
          c = a.s.je[b];
          d = c.tb[0];
          switch (d.Ga) {
            case -589825:
              d = d.L[0];
              1 == e && (d.Yd &= ~wa.lo);
              if (0 == (d.Yd & wa.Em)) {
                b = this.UP(a, b);
                continue;
              } else e++;
              break;
            case -655361:
              e--;
              0 == e && ((c.qa &= ~U.Oh), (f = !0), b++);
              break;
            case -1441793:
              1 == e && ((c.qa &= ~U.Oh), (c.qa &= ~U.mv));
              break;
            case -2686977:
              c.qa |= U.Oh;
              break;
            default:
              1 == e && (c.qa &= ~U.Oh);
          }
          if (f) break;
          b++;
        }
      else
        for (b++, f = !1, e = 1; ; b++) {
          c = a.s.je[b];
          d = c.tb[0];
          switch (d.Ga) {
            case -589825:
              e++;
              break;
            case -655361:
              e--;
              0 == e && ((f = !0), b++);
              break;
            case -2686977:
              c.qa |= U.Oh;
          }
          if (f) break;
        }
      return b;
    },
  };
  kc.prototype = {
    Qb: function (a) {
      var b = this.L[0].Oa,
        c = a.s.je[b].tb[0].L[0],
        d = 0 == (c.Yd & wa.Em);
      c.Yd |= wa.Em;
      1 == d && 0 == (c.Yd & wa.lo) && this.VP(a, b);
    },
    VP: function (a, b) {
      var c = a.s.je[b],
        d;
      c.qa |= U.Oh;
      var e, f;
      b++;
      f = !1;
      for (e = 1; ; ) {
        c = a.s.je[b];
        d = c.tb[0];
        switch (d.Ga) {
          case -589825:
            c = d.L[0];
            d = 0 == (c.Yd & wa.lo);
            1 == e && (c.Yd |= wa.lo);
            if (0 != d && 0 == (c.Yd & wa.Em)) {
              b = this.VP(a, b);
              continue;
            } else e++;
            break;
          case -655361:
            e--;
            0 == e && ((c.qa |= U.Oh), (f = !0), b++);
            break;
          default:
            1 == e && (c.qa |= U.Oh);
        }
        if (f) break;
        b++;
      }
      return b;
    },
  };
  lc.prototype = {
    Qb: function (a) {
      var b = !1,
        c;
      if (0 == a.s.XG && null != a.hg) {
        var d = this.L[0].mP;
        if (0 == d && ((c = a.jn(this.L[0])), (b = !0), 0 != c.length)) {
          var e;
          for (e = 0; e < a.hg.length; e++)
            if (u.he(c, a.hg[e].name)) {
              d = e + 1;
              break;
            }
        }
        if (0 != d && ((d = a.hg[d - 1]), 0 == d.vx)) {
          b = Math.floor(a.fd(this.L[1]));
          c = a.om.get(d.Y1);
          c.Ja &= ~ib.Cz;
          e = !1;
          0 > b && ((e = !0), (b = 10));
          var f = a.nm,
            h = a.s.Kj,
            k = a.s.Ti;
          for (c.index = 0; c.index < b; c.index++) {
            a.nm = c.name;
            a.s.Lj = !1;
            a.s.f1(d.bS);
            if (0 != (c.Ja & ib.Cz)) break;
            e && (b = c.index + 10);
          }
          a.s.Ti = k;
          a.s.Kj = h;
          a.nm = f;
          a.s.Lj = !0;
          return;
        }
      }
      b || (c = a.jn(this.L[0]));
      if (0 != c.length) {
        b = Math.floor(a.fd(this.L[1]));
        d = a.KA(c);
        a.om.get(d);
        c = a.om.get(d);
        c.Ja &= ~ib.Cz;
        e = !1;
        0 > b && ((e = !0), (b = 10));
        f = a.nm;
        h = a.s.Kj;
        k = a.s.Ti;
        for (c.index = 0; c.index < b; c.index++) {
          a.nm = c.name;
          a.s.Lj = !1;
          a.s.bi(-983041);
          if (0 != (c.Ja & ib.Cz)) break;
          e && (b = c.index + 10);
        }
        a.s.Ti = k;
        a.s.Kj = h;
        a.nm = f;
        a.s.Lj = !0;
      }
    },
  };
  mc.prototype = {
    Qb: function (a) {
      var b = this.L[0],
        c = !1;
      45 == b.code
        ? ((b = a.jn(b)), (b = a.m.ui.KB(b)))
        : ((c = 0 != (b.h6 & yb.f$)), (b = b.Uy));
      0 <= b && a.m.hf.play(b, 1, -1, c, -1, 0);
    },
  };
  nc.prototype = {
    Qb: function (a) {
      var b = this.L[0];
      45 == b.code ? ((b = a.jn(b)), (b = a.m.ui.KB(b))) : (b = b.Uy);
      0 <= b && a.m.hf.o6(b);
    },
  };
  oc.prototype = {
    Qb: function (a) {
      var b = this.L[0];
      45 == b.code ? ((b = a.jn(b)), (b = a.m.ui.KB(b))) : (b = b.Uy);
      var c = a.fd(this.L[1]);
      0 <= b && 0 <= c && 100 >= c && a.m.hf.e6(b, c);
    },
  };
  pc.prototype = {
    Qb: function (a) {
      a.md = t.cF;
    },
  };
  qc.prototype = {
    Qb: function (a) {
      a.md = t.kM;
    },
  };
  rc.prototype = {
    Qb: function (a) {
      var b = a.fd(this.L[0]);
      a.VF(this.We, b);
    },
  };
  sc.prototype = {
    Qb: function (a) {
      var b = a.fd(this.L[0]),
        c = this.We,
        b = a.m.Bt()[c] + b;
      a.VF(c, b);
    },
  };
  tc.prototype = {
    Qb: function (a) {
      var b = a.fd(this.L[0]),
        c = this.We,
        b = a.m.Bt()[c] - b;
      a.VF(c, b);
    },
  };
  uc.prototype = {
    Qb: function (a) {
      var b = this.L[0],
        c = new xb();
      b.mD(a, 17, c) &&
        (c.GG ? ((this.Pb |= la.co), (a.s.Kj = !0)) : (this.Pb &= ~la.co),
        (b = a.vH(b.jB, b.TN, c.x, c.y, c.dir, 0, c.ox, -1)),
        0 <= b &&
          ((b = a.X[b]),
          a.s.Qw(b),
          b && 32 <= b.eb && a.p0(b),
          (c = a.fc(b)) ? c.Dm() : null != a.wca && a.Wn.pS(b)));
    },
  };
  vc.prototype = {
    Qb: function (a) {
      var b = a.s.If(this);
      null != b && ((a = a.hn(this.L[0])), b.ZG(a), b.Cw(a));
    },
  };
  wc.prototype = {
    Qb: function (a) {
      var b = a.s.If(this);
      if (null != b) {
        var c = new xb();
        this.L[0].mD(a, 1, c) &&
          (t.Cd(b, c.x),
          t.Dd(b, c.y),
          -1 != c.dir &&
            ((c = c.dir &= 31),
            a.Fd(b) != c &&
              ((b.b.Pa = c),
              (b.b.ka = !0),
              b.H.oa.Lh(c),
              2 == b.eb && b.Wa.Eq(0))));
      }
    },
  };
  xc.prototype = {
    Qb: function (a) {
      var b = a.s.If(this);
      null != b && ((a = a.fd(this.L[0])), t.Cd(b, Math.floor(a)));
    },
  };
  yc.prototype = {
    Qb: function (a) {
      var b = a.s.If(this);
      null != b && ((a = a.fd(this.L[0])), t.Dd(b, Math.floor(a)));
    },
  };
  zc.prototype = {
    Qb: function (a) {
      a = a.s.If(this);
      null != a && null != a.H && a.H.oa.stop();
    },
  };
  Ac.prototype = {
    Qb: function (a) {
      a = a.s.If(this);
      null != a && null != a.H && a.H.oa.start();
    },
  };
  Bc.prototype = {
    Qb: function (a) {
      var b = a.s.If(this);
      null != b && ((a = a.fd(this.L[0])), null != b.H && b.H.oa.ih(a));
    },
  };
  Cc.prototype = {
    Qb: function (a) {
      var b = a.s.If(this);
      null != b &&
        ((a = 22 == this.L[0].code ? a.fd(this.L[0]) : this.L[0].value),
        null != b.H && b.H.V5(b, a));
    },
  };
  Dc.prototype = {
    Qb: function (a) {
      var b = a.s.If(this);
      null != b &&
        ((a = 10 == this.L[0].code ? this.L[0].value : a.fd(this.L[0])),
        0 > a && (a = 0),
        b.Wa.OA(a),
        (b.b.ka = !0));
    },
  };
  Ec.prototype = {
    Qb: function (a) {
      var b = a.s.If(this);
      null != b &&
        (3 == b.eb
          ? 0 != (b.NS & t.CL)
            ? (b.Z.MC(), (b.Z.Ha &= ~R.Pm), (b.wa |= aa.Fm))
            : ((b.wa |= aa.xi), a.rl(b.Nc))
          : 0 == (b.wa & aa.xi) &&
            ((b.wa |= aa.xi),
            0 != (b.ib & J.pq) || 0 != (b.ib & J.rq)
              ? a.$P(b)
              : ((b.ex = !1), a.rl(b.Nc))));
    },
  };
  Fc.prototype = {
    Qb: function (a) {
      a = a.s.If(this);
      null != a && t.i4(a);
    },
  };
  Gc.prototype = {
    Qb: function (a) {
      a = a.s.If(this);
      null != a && t.j4(a);
    },
  };
  Hc.prototype = {
    Qb: function (a) {
      var b = a.s.If(this);
      if (null != b) {
        var c;
        c = 53 == this.L[0].code ? a.fd(this.L[0]) : this.L[0].value;
        0 <= c &&
          null != b.cb &&
          (c >= b.cb.ge.length && b.cb.OB(c + 10),
          (a = a.hn(this.L[1])),
          (b.cb.ge[c] = a));
      }
    },
  };
  Ic.prototype = {
    Qb: function (a) {
      a = a.s.If(this);
      null != a &&
        0 <= this.Dn &&
        null != a.cb &&
        (this.Dn >= a.cb.ge.length && a.cb.OB(this.Dn + 10),
        (a.cb.ge[this.Dn] = this.value));
    },
  };
  Jc.prototype = {
    Qb: function (a) {
      var b = a.s.If(this);
      null != b && ((a = a.fd(this.L[0])), b.Wa.v0(a), (b.b.ka = !0));
    },
  };
  Kc.prototype = {
    Qb: function (a) {
      var b = a.s.If(this);
      null != b && ((a = a.fd(this.L[0])), b.H.oa.Np(a));
    },
  };
  Lc.prototype = {
    Qb: function (a) {
      var b = a.s.If(this);
      if (null != b && null != b.Z) {
        var c = a.fd(this.L[0]);
        0 < c &&
          c <= a.O.Oe &&
          b.ug != c - 1 &&
          (--c, null != b.Z && ((b.ug = c), (b.Z.js = c), b.bn(), b.Z.sO(!1)));
      }
    },
  };
  Mc.prototype = {
    Qb: function (a) {
      var b = a.s.If(this);
      if (null != b && null != b.Z) {
        a = u.Y0(255 - a.fd(this.L[0]), 0, 255);
        var c = 0 == (b.Z.Pd & R.nz);
        b.Z.Pd = (b.Z.Pd & R.rE) | R.nz;
        var d = 16777215;
        c || (d = b.Z.Qd);
        b.Z.Qd = (a << 24) | (d & 16777215);
        b.Z.c4(b.Z.Pd, b.Z.Qd);
      }
    },
  };
  ka.vM = 6;
  ka.VV = -983041;
  ka.WV = -1507329;
  ka.XV = -1572865;
  ka.create = function (a) {
    var b = a.file.Oa,
      c = a.file.B(),
      d,
      e = a.file.v();
    switch (e) {
      case -2752513:
        d = new CND_STARTCHILDEVENT();
        break;
      case -2686977:
        d = new Ra();
        break;
      case -2555905:
        d = new CND_RUNNINGAS();
        break;
      case -2490369:
        d = new Pb();
        break;
      case -2424833:
        d = new Ob();
        break;
      case -2359297:
        d = new Nb();
        break;
      case -2293761:
        d = new Mb();
        break;
      case -2228225:
        d = new Lb();
        break;
      case -2162689:
        d = new Kb();
        break;
      case -2097153:
        d = new Pb();
        break;
      case -2031617:
        d = new Ob();
        break;
      case -1966081:
        d = new Nb();
        break;
      case -1900545:
        d = new Mb();
        break;
      case -1835009:
        d = new Lb();
        break;
      case -1769473:
        d = new Kb();
        break;
      case -1703937:
        d = new Ra();
        break;
      case -1638401:
        d = new CND_CHANCE();
        break;
      case -1572865:
        d = new Ra();
        break;
      case -1507329:
        d = new Ra();
        break;
      case -1441793:
        d = new Oc();
        break;
      case -1245185:
        d = new CND_COMPAREGSTRING();
        break;
      case -983041:
        d = new Pc();
        break;
      case -720897:
        d = new CND_GROUPACTIVATED();
        break;
      case -655361:
        d = new Ra();
        break;
      case -589825:
        d = new Ra();
        break;
      case -524289:
        d = new Ra();
        break;
      case -458753:
        d = new Qc();
        break;
      case -393217:
        d = new CND_NOTALWAYS();
        break;
      case -327681:
        d = new CND_ONCE();
        break;
      case -262145:
        d = new CND_REPEAT();
        break;
      case -196609:
        d = new CND_NOMORE();
        break;
      case -131073:
        d = new CND_COMPARE();
        break;
      case -65537:
        d = new Ra();
        break;
      case -1:
        d = new Nc();
        break;
      case -524290:
        d = new CND_SPCHANNELPAUSED();
        break;
      case -458754:
        d = new CND_NOSPCHANNELPLAYING();
        break;
      case -327682:
        d = new CND_SPSAMPAUSED();
        break;
      case -131074:
        d = new CND_NOSAMPLAYING();
        break;
      case -2:
        d = new Rc();
        break;
      case -458755:
        d = new CND_ENDOFPAUSE();
        break;
      case -393219:
        d = new CND_ISVSYNCON();
        break;
      case -327683:
        d = new CND_ISLADDER();
        break;
      case -262147:
        d = new CND_ISOBSTACLE();
        break;
      case -196611:
        d = new CND_QUITAPPLICATION();
        break;
      case -131075:
        d = new CND_LEVEL();
        break;
      case -65539:
        d = new CND_END();
        break;
      case -3:
        d = new Sc();
        break;
      case -458756:
        d = new CND_EVERY2();
        break;
      case -393220:
        d = new CND_TIMEREQUALS();
        break;
      case -327684:
        d = new CND_ONEVENT();
        break;
      case -262148:
        d = new CND_TIMEOUT();
        break;
      case -196612:
        d = new CND_EVERY();
        break;
      case -131076:
        d = new CND_TIMER();
        break;
      case -65540:
        d = new CND_TIMERINF();
        break;
      case -4:
        d = new CND_TIMERSUP();
        break;
      case -720902:
        d = new CND_ONMOUSEWHEELDOWN();
        break;
      case -655366:
        d = new CND_ONMOUSEWHEELUP();
        break;
      case -589830:
        d = new CND_MOUSEON();
        break;
      case -524294:
        d = new CND_ANYKEY();
        break;
      case -458758:
        d = new CND_MKEYDEPRESSED();
        break;
      case -393222:
        d = new CND_MCLICKONOBJECT();
        break;
      case -327686:
        d = new CND_MCLICKINZONE();
        break;
      case -262150:
        d = new Tc();
        break;
      case -196614:
        d = new CND_MONOBJECT();
        break;
      case -131078:
        d = new CND_MINZONE();
        break;
      case -65542:
        d = new Uc();
        break;
      case -6:
        d = new Vc();
        break;
      case -327687:
        d = new CND_JOYPUSHED();
        break;
      case -262151:
        d = new CND_NOMORELIVE();
        break;
      case -196615:
        d = new CND_JOYPRESSED();
        break;
      case -131079:
        d = new Wc();
        break;
      case -65543:
        d = new CND_SCORE();
        break;
      case -7:
        d = new CND_PLAYERPLAYING();
        break;
      case -1441797:
        d = new CND_CHOOSEALLINLINE();
        break;
      case -1376261:
        d = new CND_CHOOSEFLAGRESET();
        break;
      case -1310725:
        d = new CND_CHOOSEFLAGSET();
        break;
      case -1245189:
        d = new CND_CHOOSEVALUE();
        break;
      case -1179653:
        d = new CND_PICKFROMID();
        break;
      case -1114117:
        d = new CND_CHOOSEALLINZONE();
        break;
      case -1048581:
        d = new CND_CHOOSEALL();
        break;
      case -983045:
        d = new CND_CHOOSEZONE();
        break;
      case -917509:
        d = new CND_NUMOFALLOBJECT();
        break;
      case -851973:
        d = new CND_NUMOFALLZONE();
        break;
      case -786437:
        d = new CND_NOMOREALLZONE();
        break;
      case -720901:
        d = new CND_CHOOSEFLAGRESET_OLD();
        break;
      case -655365:
        d = new CND_CHOOSEFLAGSET_OLD();
        break;
      case -458757:
        d = new CND_CHOOSEVALUE_OLD();
        break;
      case -393221:
        d = new CND_PICKFROMID_OLD();
        break;
      case -327685:
        d = new CND_CHOOSEALLINZONE_OLD();
        break;
      case -262149:
        d = new CND_CHOOSEALL_OLD();
        break;
      case -196613:
        d = new CND_CHOOSEZONE_OLD();
        break;
      case -131077:
        d = new CND_NUMOFALLOBJECT_OLD();
        break;
      case -65541:
        d = new CND_NUMOFALLZONE_OLD();
        break;
      case -5:
        d = new CND_NOMOREALLZONE_OLD();
        break;
      case -5505022:
        d = new CND_CMPSCALEY();
        break;
      case -5439486:
        d = new CND_CMPSCALEX();
        break;
      case -5373950:
        d = new CND_CMPANGLE();
        break;
      case -5308409:
        d = new CND_CCOUNTER();
        break;
      case -5439484:
        d = new CND_QEQUAL();
        break;
      case -5373948:
        d = new CND_QFALSE();
        break;
      case -5308412:
        d = new CND_QEXACT();
        break;
      case -5505015:
        d = new CND_CCAISPAUSED();
        break;
      case -5439479:
        d = new CND_CCAISVISIBLE();
        break;
      case -5373943:
        d = new CND_CCAAPPFINISHED();
        break;
      case -5308407:
        d = new CND_CCAFRAMECHANGED();
        break;
      default:
        switch (e & 4294901760) {
          case -3211264:
            d = new CND_EXTCMPINSTANCEDATA();
            break;
          case -3145728:
            d = new CND_EXTPICKMAXVALUE();
            break;
          case -3080192:
            d = new CND_EXTPICKMINVALUE();
            break;
          case -3014656:
            d = new CND_EXTCMPLAYER();
            break;
          case -2949120:
            d = new CND_EXTCOMPARE();
            break;
          case -2883584:
            d = new CND_EXTPICKCLOSEST();
            break;
          case -2818048:
            d = new Qb();
            break;
          case -2752512:
            d = new Qb();
            break;
          case -2686976:
            d = new CND_EXTONLOOP();
            break;
          case -2621440:
            d = new CND_EXTISSTRIKEOUT();
            break;
          case -2555904:
            d = new CND_EXTISUNDERLINE();
            break;
          case -2490368:
            d = new CND_EXTISITALIC();
            break;
          case -2424832:
            d = new CND_EXTISBOLD();
            break;
          case -2359296:
            d = new CND_EXTCMPVARSTRING();
            break;
          case -2293760:
            d = new CND_EXTPATHNODENAME();
            break;
          case -2228224:
            d = new Xc();
            break;
          case -2162688:
            d = new CND_EXTNOMOREOBJECT();
            break;
          case -2097152:
            d = new CND_EXTNUMOFOBJECT();
            break;
          case -2031616:
            d = new CND_EXTNOMOREZONE();
            break;
          case -1966080:
            d = new CND_EXTNUMBERZONE();
            break;
          case -1900544:
            d = new CND_EXTSHOWN();
            break;
          case -1835008:
            d = new CND_EXTHIDDEN();
            break;
          case -1769472:
            d = new Yc();
            break;
          case -1703936:
            d = new CND_EXTCMPVARFIXED();
            break;
          case -1638400:
            d = new CND_EXTFLAGSET();
            break;
          case -1572864:
            d = new CND_EXTFLAGRESET();
            break;
          case -1507328:
            d = new CND_EXTISCOLBACK();
            break;
          case -1441792:
            d = new Zc();
            break;
          case -1376256:
            d = new $c();
            break;
          case -1310720:
            d = new CND_EXTPATHNODE();
            break;
          case -1245184:
            d = new CND_EXTCMPACC();
            break;
          case -1179648:
            d = new CND_EXTCMPDEC();
            break;
          case -1114112:
            d = new ad();
            break;
          case -1048576:
            d = new CND_EXTCMPY();
            break;
          case -983040:
            d = new CND_EXTCMPSPEED();
            break;
          case -917504:
            d = new bd();
            break;
          case -851968:
            d = new CND_EXTCOLBACK();
            break;
          case -786432:
            d = new CND_EXTOUTPLAYFIELD();
            break;
          case -720896:
            d = new CND_EXTINPLAYFIELD();
            break;
          case -655360:
            d = new CND_EXTISOUT();
            break;
          case -589824:
            d = new CND_EXTISIN();
            break;
          case -524288:
            d = new CND_EXTFACING();
            break;
          case -458752:
            d = new CND_EXTSTOPPED();
            break;
          case -393216:
            d = new CND_EXTBOUNCING();
            break;
          case -327680:
            d = new CND_EXTREVERSED();
            break;
          case -262144:
            d = new cd();
            break;
          case -196608:
            d = new CND_EXTANIMPLAYING();
            break;
          case -131072:
            d = new CND_EXTANIMENDOF();
            break;
          case -65536:
            d = new CND_EXTCMPFRAME();
            break;
          default:
            d = new He();
        }
    }
    if (
      null != d &&
      ((d.Ga = e),
      (d.We = a.file.xa()),
      (d.hc = a.file.xa()),
      (d.Pb = a.file.Uc()),
      (d.yh = a.file.Uc()),
      (d.Ke = a.file.Uc()),
      (d.ar = a.file.Uc()),
      (d.gP = a.file.B()),
      0 < d.Ke)
    ) {
      d.L = Array(d.Ke);
      for (e = 0; e < d.Ke; e++) d.L[e] = wb.create(a);
      -2686976 == d.Ga &&
        ((e = d.L[0]),
        2 == e.Aa.length &&
          e.Aa[0].code == sa.ys &&
          0 == e.Aa[1].code &&
          ((d.waa = !0), (d.name = e.Aa[0].cd.toLowerCase())));
    }
    a.file.seek(b + c);
    return d;
  };
  ka.Lr = function (a) {
    return a.yh & oa.ws ? !1 : !0;
  };
  ka.bu = function (a) {
    return a.yh & oa.ws ? !0 : !1;
  };
  ka.e4 = function (a, b) {
    return a.yh & oa.ws ? !b : b;
  };
  ka.i1 = function (a) {
    var b = a.s.Jh,
      c = b.$q;
    a = b.$q = a.Ee;
    if (a == c) return !1;
    a--;
    return a == c ? !1 : !0;
  };
  ka.fO = function (a, b) {
    var c,
      d = b.SB;
    if (null == d) (d = new W()), (b.SB = d);
    else for (c = 0; c < d.size(); c++) if (d.get(c) == a) return !1;
    d.add(a);
    d = b.WP;
    if (null == d) return !0;
    for (c = 0; c < d.size(); c++) if (d.get(c) == a) return !1;
    return !0;
  };
  ka.V0 = function (a, b) {
    return 0 == b ? !1 : b == a.Ee || b == a.Ee - 1 ? !0 : !1;
  };
  Ra.prototype = {
    pd: function () {
      return !1;
    },
    mb: function () {
      return !1;
    },
  };
  Nc.prototype = {
    pd: function () {
      return !0;
    },
    mb: function () {
      return !0;
    },
  };
  ka.prototype = {
    BB: function (a, b) {
      var c = a.s.fn(this.hc),
        d = a.s.Zf,
        e = this.L[0],
        f;
      f = e.Aa[0];
      if (0 != (this.yh & oa.KL))
        for (
          f =
            (f.code != sa.PL && f.code != sa.fX) || 0 != e.Aa[1].code
              ? a.fd(e)
              : f.value;
          null != c;

        )
          0 == b.uH(c, f, e.ol) && (d--, a.s.Vg()), (c = a.s.ul());
      else
        for (; null != c; )
          (f = a.fd(e)),
            0 == b.uH(c, f, e.ol) && (d--, a.s.Vg()),
            (c = a.s.ul());
      return 0 != d ? !0 : !1;
    },
    N1: function (a, b) {
      for (var c = a.s.fn(this.hc), d = a.s.Zf; null != c; )
        0 == b.O1(c) && (d--, a.s.Vg()), (c = a.s.ul());
      return 0 != d ? !0 : !1;
    },
    $H: function (a) {
      if (a.s.Vk) return a.s.fn(this.hc), a.s.fn(this.L[0].jd), !1;
      var b = !1;
      0 != (this.yh & oa.ws) && (b = !0);
      var c = a.s.fn(this.hc);
      if (null == c) return ka.bu(this);
      var d = a.s.Zf,
        e = this.L[0].Nk;
      0 <= e
        ? ((a.ZH[0] = e), (a.ZH[1] = this.L[0].jd), (e = a.ZH))
        : (e = a.s.gg[this.L[0].jd & 32767].ja);
      var f,
        h = new W(),
        k,
        g;
      do {
        k = c.w;
        g = c.A;
        3 <= this.Ke && ((k = a.fd(this.L[1])), (g = a.fd(this.L[2])));
        f = a.du(c, c.b.Jb, c.b.uc, c.b.Sc, c.b.Tc, k, g, e);
        if (null == f) 0 == b && (d--, a.s.Vg());
        else {
          c = !1;
          for (k = 0; k < f.size(); k++)
            (g = f.get(k)), 0 == (g.wa & aa.xi) && (h.add(g), (c = !0));
          1 == b ? 1 == c && (d--, a.s.Vg()) : 0 == c && (d--, a.s.Vg());
        }
        c = a.s.ul();
      } while (null != c);
      if (0 == d) return !1;
      c = a.s.fn(this.L[0].jd);
      if (null == c) return !1;
      d = a.s.Zf;
      if (0 == b) {
        do {
          for (k = 0; k < h.size() && ((g = h.get(k)), c != g); k++);
          k == h.size() && (d--, a.s.Vg());
          c = a.s.ul();
        } while (null != c);
        return 0 != d ? !0 : !1;
      }
      do {
        for (k = 0; k < h.size(); k++)
          if (((g = h.get(k)), c == g)) {
            d--;
            a.s.Vg();
            break;
          }
        c = a.s.ul();
      } while (null != c);
      return 0 != d ? !0 : !1;
    },
  };
  Oc.prototype = {
    pd: function (a) {
      return this.mb(a);
    },
    mb: function (a) {
      a = a.s.Jh;
      if (0 != (a.qa & U.mv)) return ka.bu(this);
      a.qa |= U.mv;
      return ka.Lr(this);
    },
  };
  Pc.prototype = {
    pd: function (a) {
      var b = this.L[0];
      if (2 == b.Aa.length && 262143 == b.Aa[0].code && 0 == b.Aa[1].code)
        return u.he(a.nm, b.Aa[0].cd) ? !0 : !1;
      b = a.jn(b);
      if (0 == u.he(a.nm, b)) return !1;
      a.s.Lj = !1;
      return !0;
    },
    mb: function () {
      return !1;
    },
  };
  Qc.prototype = {
    pd: function (a) {
      return this.mb(a);
    },
    mb: function (a) {
      var b;
      b = 52 == this.L[0].code ? a.fd(this.L[0]) - 1 : this.L[0].value;
      b = a.m.xl(b);
      a = a.hn(this.L[1]);
      return t.Rq(b, a, this.L[1].ol);
    },
  };
  Kb.prototype = {
    pd: function (a) {
      return this.mb(a);
    },
    mb: function (a) {
      return a.m.xl(this.L[0].value) == this.L[1].Aa[0].value;
    },
  };
  Lb.prototype = {
    pd: function (a) {
      return this.mb(a);
    },
    mb: function (a) {
      return a.m.xl(this.L[0].value) != this.L[1].Aa[0].value;
    },
  };
  Mb.prototype = {
    pd: function (a) {
      return this.mb(a);
    },
    mb: function (a) {
      return a.m.xl(this.L[0].value) <= this.L[1].Aa[0].value;
    },
  };
  Nb.prototype = {
    pd: function (a) {
      return this.mb(a);
    },
    mb: function (a) {
      return a.m.xl(this.L[0].value) < this.L[1].Aa[0].value;
    },
  };
  Ob.prototype = {
    pd: function (a) {
      return this.mb(a);
    },
    mb: function (a) {
      return a.m.xl(this.L[0].value) >= this.L[1].Aa[0].value;
    },
  };
  Pb.prototype = {
    pd: function (a) {
      return this.mb(a);
    },
    mb: function (a) {
      return a.m.xl(this.L[0].value) > this.L[1].Aa[0].value;
    },
  };
  Rc.prototype = {
    pd: function (a) {
      return this.mb(a);
    },
    mb: function (a) {
      var b = this.L[0],
        c = !1;
      45 == b.code ? ((b = a.jn(b)), (b = a.m.ui.KB(b))) : (b = b.Uy);
      0 <= b && (c = a.m.hf.W2(b));
      return c ? ka.bu(this) : ka.Lr(this);
    },
  };
  Sc.prototype = {
    pd: function (a) {
      return 2 < a.Ee ? !1 : !0;
    },
    mb: function (a) {
      return 2 < a.Ee ? !1 : !0;
    },
  };
  Tc.prototype = {
    pd: function (a) {
      return this.L[0].value != a.s.ld ? !1 : !0;
    },
    mb: function (a) {
      return this.L[0].value == a.s.iK ? !0 : !1;
    },
  };
  Uc.prototype = {
    pd: function (a) {
      return this.mb(a);
    },
    mb: function (a) {
      return ka.e4(this, a.m.Jf[this.L[0].key]);
    },
  };
  Vc.prototype = {
    pd: function (a) {
      return this.mb(a);
    },
    mb: function (a) {
      return 0 == a.m.Jf[this.L[0].key]
        ? ka.bu(this)
        : ka.i1(a)
          ? ka.Lr(this)
          : ka.bu(this);
    },
  };
  Wc.prototype = {
    pd: function (a) {
      return this.mb(a);
    },
    mb: function (a) {
      var b = a.hn(this.L[0]);
      return t.Rq(a.m.Bt()[this.We], b, this.L[0].ol);
    },
  };
  Xc.prototype = {
    pd: function (a) {
      return this.mb(a);
    },
    mb: function (a) {
      a.s.lO(this.hc, -1);
      if (0 == a.s.Zf) return !1;
      var b = a.random(a.s.Zf),
        b = a.s.lO(this.hc, b);
      if (0 < this.Ke) {
        var c = this.L[0];
        if (68 == c.code && 0 == c.evaluate(b)) return !1;
      }
      a.s.R1(this.hc, b);
      return !0;
    },
  };
  Yc.prototype = {
    pd: function (a) {
      return this.mb(a);
    },
    mb: function (a) {
      var b = a.s.fn(this.hc);
      if (null == b) return !1;
      var c = a.s.Zf,
        d,
        e = this.L[1],
        f;
      if (0 != (this.yh & oa.KL)) {
        f = 53 == this.L[0].code ? a.fd(this.L[0]) : this.L[0].value;
        d = a.hn(e);
        do
          0 <= f && null != b.cb
            ? ((b = f < b.cb.ge.length ? b.cb.Ct(f) : 0),
              0 == t.Rq(b, d, e.ol) && (c--, a.s.Vg()))
            : (c--, a.s.Vg()),
            (b = a.s.ul());
        while (null != b);
      } else {
        do
          (f = 53 == this.L[0].code ? a.fd(this.L[0]) : this.L[0].value),
            0 <= f && null != b.cb
              ? ((b = f < b.cb.ge.length ? b.cb.Ct(f) : 0),
                (d = a.hn(e)),
                0 == t.Rq(b, d, e.ol) && (c--, a.s.Vg()))
              : (c--, a.s.Vg()),
            (b = a.s.ul());
        while (null != b);
      }
      return 0 != c;
    },
  };
  Qb.prototype = {
    pd: function (a) {
      return this.mb(a);
    },
    mb: function (a) {
      var b = a.s.fn(this.hc);
      if (null == b) return !1;
      var c = a.s.Zf,
        d = this.L[0].value,
        e = this.L[1],
        f = e.Aa[0].value;
      do
        0 <= d && null != b.cb
          ? ((b = d < b.cb.ge.length ? b.cb.Ct(d) : 0),
            0 == t.Rq(b, f, e.ol) && (c--, a.s.Vg()))
          : (c--, a.s.Vg()),
          (b = a.s.ul());
      while (null != b);
      return 0 != c;
    },
  };
  Zc.prototype = u.extend(new ka(), {
    pd: function (a) {
      return this.BB(a, this);
    },
    mb: function (a) {
      return this.BB(a, this);
    },
    uH: function (a, b) {
      var c = a.c.za + b,
        d = a.w - a.ab;
      if (d <= c) return ka.Lr(this);
      c = a.c.za + a.c.vD - b;
      d += a.ea;
      if (d >= c) return ka.Lr(this);
      c = a.c.Ea + b;
      d = a.A - a.bb;
      if (d <= c) return ka.Lr(this);
      c = a.c.Ea + a.c.wD - b;
      d += a.ga;
      return d >= c ? ka.Lr(this) : ka.bu(this);
    },
  });
  $c.prototype = u.extend(new ka(), {
    pd: function () {
      return !0;
    },
    mb: function (a) {
      return this.N1(a, this);
    },
    O1: function (a) {
      return a.b.sd != ia.iZ ? !1 : ka.V0(a.c, a.gx);
    },
  });
  ad.prototype = u.extend(new ka(), {
    pd: function (a) {
      return this.BB(a, this);
    },
    mb: function (a) {
      return this.BB(a, this);
    },
    uH: function (a, b, c) {
      return t.a1(a.w, b, c);
    },
  });
  bd.prototype = u.extend(new ka(), {
    pd: function (a, b) {
      for (var c = a.X[a.s.zy], d = this.We, e = this.L[0], f = e.Nk; ; ) {
        if (d == b.Bc) {
          if (f == c.Bc) break;
          if (0 <= f) return !1;
          if (this.ht(a, e.jd, c.Bc)) break;
          return !1;
        }
        if (f == b.Bc) {
          if (d == c.Bc) break;
          if (0 <= d) return !1;
          if (this.ht(a, this.hc, c.Bc)) break;
          return !1;
        }
        if (0 > d) {
          if (0 > f) {
            if (this.ht(a, this.hc, b.Bc)) {
              if (this.ht(a, e.jd, c.Bc)) break;
              if (0 == this.ht(a, e.jd, b.Bc)) return !1;
            }
            if (this.ht(a, this.hc, c.Bc)) break;
          } else if (f == c.Bc) break;
          return !1;
        }
        if (0 <= f || d != c.Bc) return !1;
        break;
      }
      var h = (c.Zo << 16) | (this.gP & 65535);
      if (0 == ka.fO(h, b)) {
        if (0 == (a.s.Jh.qa & U.Az)) return !1;
        a.s.uD = !0;
      }
      h = (b.Zo << 16) | (this.gP & 65535);
      if (0 == ka.fO(h, c)) {
        if (0 == (a.s.Jh.qa & U.Az)) return !1;
        a.s.uD = !0;
      }
      0 > d && a.s.iP(this.hc);
      0 > f && a.s.iP(e.jd);
      a.s.Qw(b);
      a.s.Qw(c);
      c.H.oa.Ig == a.Re
        ? (b.H.oa.Ig = a.Re)
        : b.H.oa.Ig == a.Re && (c.H.oa.Ig = a.Re);
      return !0;
    },
    mb: function (a) {
      return this.$H(a);
    },
    ht: function (a, b, c) {
      if (-1 == b) return !1;
      a = a.s.gg[b & 32767];
      for (b = 0; b < a.ja.length; b += 2) {
        var d = a.ja[b];
        if (0 > d) break;
        if (d == c) return !0;
      }
      return !1;
    },
  });
  cd.prototype = u.extend(new ka(), {
    pd: function (a) {
      return this.$H(a);
    },
    mb: function (a) {
      return this.$H(a);
    },
  });
  sa.jX = 8960;
  sa.lX = 9216;
  sa.iX = 9472;
  sa.mX = 9728;
  sa.gX = 9984;
  sa.kX = 10752;
  sa.hX = 11008;
  sa.ys = 262143;
  sa.PL = 65535;
  sa.fX = 1572863;
  sa.create = function (a) {
    var b = a.Oa,
      c,
      d = a.v();
    switch (d) {
      case 0:
        c = new Sa();
        break;
      case 131072:
        c = new md();
        break;
      case 262144:
        c = new nd();
        break;
      case 393216:
        c = new EXP_MULT();
        break;
      case 524288:
        c = new od();
        break;
      case 655360:
        c = new EXP_MOD();
        break;
      case 786432:
        c = new EXP_POW();
        break;
      case 917504:
        c = new EXP_AND();
        break;
      case 1048576:
        c = new EXP_OR();
        break;
      case 1179648:
        c = new EXP_XOR();
        break;
      case 65535:
        c = new Sb();
        break;
      case 131071:
        c = new pd();
        break;
      case 196607:
        c = new EXP_VARGLO();
        break;
      case 262143:
        c = new id();
        break;
      case 327679:
        c = new EXP_STR();
        break;
      case 393215:
        c = new EXP_VAL();
        break;
      case 458751:
      case 524287:
      case 589823:
      case 655359:
        c = new Rb();
        break;
      case 720895:
        c = new EXP_SIN();
        break;
      case 786431:
        c = new EXP_COS();
        break;
      case 851967:
        c = new EXP_TAN();
        break;
      case 917503:
        c = new EXP_SQR();
        break;
      case 983039:
        c = new EXP_LOG();
        break;
      case 1048575:
        c = new EXP_LN();
        break;
      case 1114111:
        c = new EXP_HEX();
        break;
      case 1179647:
        c = new EXP_BIN();
        break;
      case 1245183:
        c = new EXP_EXP();
        break;
      case 1310719:
        c = new EXP_LEFT();
        break;
      case 1376255:
        c = new EXP_RIGHT();
        break;
      case 1441791:
        c = new EXP_MID();
        break;
      case 1507327:
        c = new EXP_LEN();
        break;
      case 1572863:
        c = new dd();
        break;
      case 1638399:
        c = new hd();
        break;
      case 1900543:
        c = new EXP_INT();
        break;
      case 1966079:
        c = new EXP_ABS();
        break;
      case 2031615:
        c = new EXP_CEIL();
        break;
      case 2097151:
        c = new EXP_FLOOR();
        break;
      case 2162687:
        c = new EXP_ACOS();
        break;
      case 2228223:
        c = new EXP_ASIN();
        break;
      case 2293759:
        c = new EXP_ATAN();
        break;
      case 2359295:
        c = new EXP_NOT();
        break;
      case 2686975:
        c = new EXP_MIN();
        break;
      case 2752511:
        c = new EXP_MAX();
        break;
      case 2818047:
        c = new EXP_GETRGB();
        break;
      case 2883583:
        c = new EXP_GETRED();
        break;
      case 2949119:
        c = new EXP_GETGREEN();
        break;
      case 3014655:
        c = new EXP_GETBLUE();
        break;
      case 3080191:
        c = new EXP_LOOPINDEX();
        break;
      case 3145727:
        c = new EXP_NEWLINE();
        break;
      case 3211263:
        c = new EXP_ROUND();
        break;
      case 3276799:
        c = new EXP_STRINGGLO();
        break;
      case 3342335:
        c = new gd();
        break;
      case 3407871:
        c = new EXP_LOWER();
        break;
      case 3473407:
        c = new EXP_UPPER();
        break;
      case 3538943:
        c = new EXP_FIND();
        break;
      case 3604479:
        c = new EXP_REVERSEFIND();
        break;
      case 3866623:
        c = new EXP_FLOATTOSTRING();
        break;
      case 3932159:
        c = new EXP_ATAN2();
        break;
      case 3997695:
        c = new Sa();
        break;
      case 4063231:
        c = new Rb();
        break;
      case 4128767:
        c = new EXP_DISTANCE();
        break;
      case 4194303:
        c = new EXP_ANGLE();
        break;
      case 4259839:
        c = new EXP_RANGE();
        break;
      case 4325375:
        c = new EXP_RANDOMRANGE();
        break;
      case 4456447:
        c = new EXP_RUNTIMENAME();
        break;
      case 4521983:
        c = new jd();
        break;
      case -1:
        c = new qd();
        break;
      case -65537:
        c = new rd();
        break;
      case -131073:
        c = new EXP_VIRGULE();
        break;
      case 65534:
        c = new EXP_GETSAMPLEMAINVOL();
        break;
      case 131070:
        c = new EXP_GETSAMPLEVOL();
        break;
      case 196606:
        c = new EXP_GETCHANNELVOL();
        break;
      case 262142:
        c = new Sa();
        break;
      case 327678:
        c = new EXP_GETSAMPLEPAN();
        break;
      case 393214:
        c = new EXP_GETCHANNELPAN();
        break;
      case 458750:
        c = new EXP_GETSAMPLEPOS();
        break;
      case 524286:
        c = new EXP_GETCHANNELPOS();
        break;
      case 589822:
        c = new EXP_GETSAMPLEDUR();
        break;
      case 655358:
        c = new EXP_GETCHANNELDUR();
        break;
      case 720894:
        c = new EXP_GETSAMPLEFREQ();
        break;
      case 786430:
        c = new EXP_GETCHANNELFREQ();
        break;
      case 851966:
        c = new EXP_GETCHANNELSNDNAME();
        break;
      case 65533:
        c = new EXP_GAMLEVEL();
        break;
      case 131069:
        c = new EXP_GAMNPLAYER();
        break;
      case 196605:
        c = new EXP_PLAYXLEFT();
        break;
      case 262141:
        c = new EXP_PLAYXRIGHT();
        break;
      case 327677:
        c = new EXP_PLAYYTOP();
        break;
      case 393213:
        c = new EXP_PLAYYBOTTOM();
        break;
      case 458749:
        c = new EXP_PLAYWIDTH();
        break;
      case 524285:
        c = new EXP_PLAYHEIGHT();
        break;
      case 589821:
        c = new EXP_GAMLEVELNEW();
        break;
      case 655357:
        c = new EXP_GETCOLLISIONMASK();
        break;
      case 720893:
        c = new EXP_FRAMERATE();
        break;
      case 786429:
        c = new EXP_GETVIRTUALWIDTH();
        break;
      case 851965:
        c = new EXP_GETVIRTUALHEIGHT();
        break;
      case 917501:
        c = new EXP_GETFRAMEBKDCOLOR();
        break;
      case 983037:
        c = new Sa();
        break;
      case 1048573:
        c = new Sa();
        break;
      case 1114109:
        c = new EXP_FRAMEALPHACOEF();
        break;
      case 1179645:
        c = new EXP_FRAMERGBCOEF();
        break;
      case 1245181:
        c = new Sa();
        break;
      case 65532:
        c = new EXP_TIMVALUE();
        break;
      case 131068:
        c = new EXP_TIMCENT();
        break;
      case 196604:
        c = new EXP_TIMSECONDS();
        break;
      case 262140:
        c = new EXP_TIMHOURS();
        break;
      case 327676:
        c = new EXP_TIMMINITS();
        break;
      case 393212:
        c = new EXP_EVENTAFTER();
        break;
      case 65530:
        c = new sd();
        break;
      case 131066:
        c = new td();
        break;
      case 196602:
        c = new EXP_MOUSEWHEELDELTA();
        break;
      case 65529:
        c = new EXP_PLASCORE();
        break;
      case 131065:
        c = new EXP_PLALIVES();
        break;
      case 196601:
        c = new EXP_GETINPUT();
        break;
      case 262137:
        c = new EXP_GETINPUTKEY();
        break;
      case 327673:
        c = new EXP_GETPLAYERNAME();
        break;
      case 65531:
        c = new EXP_CRENUMBERALL();
        break;
      case 131067:
        c = new EXP_LASTFIXEDVALUE();
        break;
      case 5242883:
        c = new EXP_STRNUMBER();
        break;
      case 5308419:
        c = new EXP_STRGETCURRENT();
        break;
      case 5373955:
        c = new EXP_STRGETNUMBER();
        break;
      case 5439491:
        c = new EXP_STRGETNUMERIC();
        break;
      case 5505027:
        c = new EXP_STRGETNPARA();
        break;
      case 5242882:
        c = new EXP_GETRGBAT();
        break;
      case 5308418:
        c = new EXP_GETSCALEX();
        break;
      case 5373954:
        c = new EXP_GETSCALEY();
        break;
      case 5439490:
        c = new EXP_GETANGLE();
        break;
      case 5242887:
        c = new EXP_CVALUE();
        break;
      case 5308423:
        c = new EXP_CGETMIN();
        break;
      case 5373959:
        c = new EXP_CGETMAX();
        break;
      case 5439495:
        c = new EXP_CGETCOLOR1();
        break;
      case 5505031:
        c = new EXP_CGETCOLOR2();
        break;
      case 5242889:
        c = new EXP_CCAGETFRAMENUMBER();
        break;
      case 5308425:
        c = new EXP_CCAGETGLOBALVALUE();
        break;
      case 5373961:
        c = new EXP_CCAGETGLOBALSTRING();
        break;
      default:
        switch (d & 4294901760) {
          case 65536:
            c = new ud();
            break;
          case 131072:
            c = new EXP_EXTISPR();
            break;
          case 196608:
            c = new EXP_EXTSPEED();
            break;
          case 262144:
            c = new EXP_EXTACC();
            break;
          case 327680:
            c = new EXP_EXTDEC();
            break;
          case 393216:
            c = new EXP_EXTDIR();
            break;
          case 458752:
            c = new EXP_EXTXLEFT();
            break;
          case 524288:
            c = new EXP_EXTXRIGHT();
            break;
          case 589824:
            c = new EXP_EXTYTOP();
            break;
          case 655360:
            c = new EXP_EXTYBOTTOM();
            break;
          case 720896:
            c = new vd();
            break;
          case 786432:
            c = new EXP_EXTIDENTIFIER();
            break;
          case 851968:
            c = new EXP_EXTFLAG();
            break;
          case 917504:
            c = new EXP_EXTNANI();
            break;
          case 983040:
            c = new EXP_EXTNOBJECTS();
            break;
          case 1048576:
            c = new ed();
            break;
          case 1114112:
            c = new EXP_EXTGETSEMITRANSPARENCY();
            break;
          case 1179648:
            c = new EXP_EXTNMOVE();
            break;
          case 1245184:
            c = new fd();
            break;
          case 1310720:
            c = new EXP_EXTGETFONTNAME();
            break;
          case 1376256:
            c = new EXP_EXTGETFONTSIZE();
            break;
          case 1441792:
            c = new EXP_EXTGETFONTCOLOR();
            break;
          case 1507328:
            c = new EXP_EXTGETLAYER();
            break;
          case 1572864:
            c = new EXP_EXTGETGRAVITY();
            break;
          case 1638400:
            c = new EXP_EXTXAP();
            break;
          case 1703936:
            c = new EXP_EXTYAP();
            break;
          case 1769472:
            c = new wd();
            break;
          case 1835008:
            c = new EXP_EXTRGBCOEF();
            break;
          case 1900544:
            c = new Sa();
            break;
          case 1966080:
            c = new kd();
            break;
          case 2031616:
            c = new ld();
            break;
          case 2097152:
            c = new EXP_EXTDISTANCE();
            break;
          case 2162688:
            c = new EXP_EXTANGLE();
            break;
          case 2228224:
            c = new EXP_EXTLOOPINDEX();
            break;
          case 2293760:
            c = new EXP_EXTGETFRICTION();
            break;
          case 2359296:
            c = new EXP_EXTGETRESTITUTION();
            break;
          case 2424832:
            c = new EXP_EXTGETDENSITY();
            break;
          case 2490368:
            c = new EXP_EXTGETVELOCITY();
            break;
          case 2555904:
            c = new EXP_EXTGETANGLE();
            break;
          case 2621440:
            c = new EXP_EXTWIDTH();
            break;
          case 2686976:
            c = new EXP_EXTHEIGHT();
            break;
          case 2752512:
            c = new EXP_EXTGETMASS();
            break;
          case 2818048:
            c = new EXP_EXTGETANGULARVELOCITY();
            break;
          case 2883584:
            c = new EXP_EXTGETNAME();
            break;
          case 2949120:
            c = new EXP_NUMBEROFSELECTED();
            break;
          case 3014656:
            c = new EXP_EXTINSTANCEDATA();
            break;
          default:
            c = new Fe();
        }
    }
    if (null != c && ((c.code = d), 0 != d)) {
      var e = a.B(),
        f;
      switch (d) {
        case 262143:
          c.cd = a.Nd();
          break;
        case 65535:
          c.value = a.v();
          break;
        case 1572863:
          c.value = a.yS();
          break;
        case 1638399:
          a.Qa(4);
          c.Lk = a.B();
          break;
        case 3342335:
          a.Qa(4);
          c.Lk = a.B();
          break;
        default:
          if (
            ((f = d & 65535),
            0 != (f & 32768) && (f -= 65536),
            2 <= f || f == F.CM)
          )
            switch (((c.Nk = a.xa()), (c.jd = a.xa()), d & 4294901760)) {
              case 1048576:
                c.Lk = a.B();
                break;
              case 1245184:
                c.Lk = a.B();
            }
      }
      a.seek(b + e);
    }
    return c;
  };
  Rb.prototype = {
    evaluate: function (a) {
      a.Kb[a.$a] = "";
    },
  };
  Sa.prototype = {
    evaluate: function (a) {
      a.Kb[a.$a] = 0;
    },
  };
  Sb.prototype = {
    evaluate: function (a) {
      a.Kb[a.$a] = this.value;
    },
  };
  dd.prototype = {
    evaluate: function (a) {
      a.Kb[a.$a] = this.value;
      a.Vo = !0;
    },
  };
  ed.prototype = {
    evaluate: function (a) {
      var b = a.s.Xo(this.jd);
      null == b
        ? (a.Kb[a.$a] = 0)
        : ((b = null != b.cb ? b.cb.Ct(this.Lk) : 0),
          u.bI(b) || (a.Vo = !0),
          (a.Kb[a.$a] = b));
    },
  };
  fd.prototype = {
    evaluate: function (a) {
      var b = a.s.Xo(this.jd);
      a.Kb[a.$a] = null == b ? "" : b.cb.MP(this.Lk);
    },
  };
  gd.prototype = {
    evaluate: function (a) {
      a.Kb[a.$a] = a.m.DP(this.Lk);
    },
  };
  hd.prototype = {
    evaluate: function (a) {
      a.Kb[a.$a] = a.m.xl(this.Lk);
    },
  };
  id.prototype = {
    evaluate: function (a) {
      a.Kb[a.$a] = this.cd;
    },
  };
  jd.prototype = {
    evaluate: function (a) {
      a.Pf++;
      var b = a.getExpression();
      a.Pf++;
      var c = a.getExpression();
      a.Pf++;
      var d = a.getExpression();
      a.Kb[a.$a] = b.split(c).join(d);
    },
  };
  kd.prototype = {
    evaluate: function (a) {
      var b = a.s.Xo(this.jd);
      a.Pf++;
      var c = a.NH();
      null != b && null != b.cb && 0 <= c && c < b.cb.ge.length
        ? ((b = b.cb.Ct(c)), u.bI(b) || (a.Vo = !0), (a.Kb[a.$a] = b))
        : (a.Kb[a.$a] = 0);
    },
  };
  ld.prototype = {
    evaluate: function (a) {
      var b = a.s.Xo(this.jd);
      a.Pf++;
      var c = a.NH();
      a.Kb[a.$a] =
        null != b && null != b.cb && 0 <= c && c < b.cb.hh.length
          ? b.cb.MP(c)
          : "";
    },
  };
  md.prototype = {
    evaluate: function (a) {
      a.Kb[a.$a] += a.Kb[a.$a + 1];
    },
  };
  nd.prototype = {
    evaluate: function (a) {
      a.rw
        ? (a.Pf++, a.ds[a.Pf].evaluate(a), (a.Kb[a.$a] = -a.Kb[a.$a]))
        : (a.Kb[a.$a] -= a.Kb[a.$a + 1]);
    },
  };
  od.prototype = {
    evaluate: function (a) {
      var b = a.Kb[a.$a],
        c = a.Kb[a.$a + 1];
      a.Kb[a.$a] =
        0 != c ? (0 == a.Vo ? u.Hf(b / c) : a.Kb[a.$a] / a.Kb[a.$a + 1]) : 0;
    },
  };
  pd.prototype = {
    evaluate: function (a) {
      a.Pf++;
      var b = a.NH();
      a.Kb[a.$a] = a.random(b);
    },
  };
  qd.prototype = {
    evaluate: function (a) {
      a.Pf++;
      a.Kb[a.$a] = a.getExpression();
    },
  };
  rd.prototype = { evaluate: function () {} };
  sd.prototype = {
    evaluate: function (a) {
      a.Kb[a.$a] = a.q2();
    },
  };
  td.prototype = {
    evaluate: function (a) {
      a.Kb[a.$a] = a.r2();
    },
  };
  ud.prototype = {
    evaluate: function (a) {
      var b = a.s.Xo(this.jd);
      a.Kb[a.$a] = null == b ? 0 : b.A;
    },
  };
  vd.prototype = {
    evaluate: function (a) {
      var b = a.s.Xo(this.jd);
      a.Kb[a.$a] = null == b ? 0 : b.w;
    },
  };
  wd.prototype = {
    evaluate: function (a) {
      var b = a.s.Xo(this.jd);
      if (null == b) a.Kb[a.$a] = 0;
      else {
        var c = b.Z.Pd,
          b = b.Z.Qd,
          d = 0;
        switch (c & R.rE) {
          case R.EV:
            d = 255 - ((b >> 24) & 255);
            break;
          case R.Wi:
            d = 255 - (128 == b ? 0 : 255 - 2 * b);
            break;
          default:
            c & R.nz && (d = 255 - ((b >> 24) & 255));
        }
        a.Kb[a.$a] = d;
      }
    },
  };
  Na.FusionVersion = "Clickteam Fusion HTML5 Exporter Build 292.24";
  q.il = 4;
  q.p$ = 770;
  q.zv = 8;
  q.v8 = 2;
  q.YX = 4;
  q.w8 = 8;
  q.WL = 16;
  q.u8 = 128;
  q.t8 = 256;
  q.s8 = 512;
  q.XX = 1024;
  q.r8 = 2048;
  q.VX = 1;
  q.TX = 4;
  q.UX = 8;
  q.o8 = 64;
  q.m8 = 128;
  q.l8 = 512;
  q.n8 = 1024;
  q.WX = 4096;
  q.q8 = 4096;
  q.p8 = 8192;
  q.o$ = 1;
  q.wA = 0;
  q.Ps = 1;
  q.JF = 2;
  q.Ns = 3;
  q.vA = 4;
  q.uA = 5;
  q.Os = 6;
  q.v$ = 7;
  q.lM = 203;
  q.Q$ = 37;
  q.baa = 39;
  q.eaa = 38;
  q.N$ = 40;
  q.hk = 200;
  q.OF = 201;
  q.CA = 202;
  q.S$ = 96;
  q.T$ = 97;
  q.U$ = 98;
  q.V$ = 99;
  q.W$ = 100;
  q.X$ = 101;
  q.Y$ = 102;
  q.Z$ = 103;
  q.$$ = 104;
  q.aaa = 105;
  q.caa = 83;
  q.M$ = 68;
  q.O$ = 69;
  q.faa = 88;
  q.P$ = 123;
  q.daa = 16;
  q.L$ = 17;
  q.R$ = 18;
  q.O7 = 0;
  q.J7 = 1;
  q.K7 = 2;
  q.L7 = 3;
  q.M7 = 4;
  q.N7 = 5;
  q.YK = 4;
  q.k7 = 128;
  q.nV = 1;
  q.SK = 4;
  q.P6 = 65536;
  q.lE = 32768;
  q.qV = 1048576;
  q.pV = 8388608;
  q.eo = 16777216;
  q.oV = 33554432;
  q.mV = 67108864;
  q.kE = 2;
  q.ng = 10;
  q.QL = 592880741;
  q.yq = 1770410840;
  q.bZ = 300;
  Na.loadApplication = Tb;
  Na.loadInfo = xd;
  q.prototype = {
    u3: function () {
      var a = this.lx.v();
      0 > this.WB && (this.WB = a);
      a != this.WB &&
        (this.lx.rT(!0), (a = this.lx.Nd()), window.open(this.VB + a, "_self"));
      this.kx = 25;
    },
    load: function () {
      this.h4 = this.file.B();
      this.tB = 1;
      this.hC = new da();
      var a = this.file.v();
      this.hC.getFile(
        this.path.substring(0, this.path.length - 1) + this.tB.toString(),
        Tb,
        a,
      );
    },
    p3: function () {
      this.tB++;
      if (this.tB > this.h4) {
        var a = new C(this.hC.sg, "content").file("Application.ccj").uN();
        this.hC = null;
        this.file = new da();
        this.file.W5(a);
        this.digest();
        this.CK();
      } else
        (a = this.file.v()),
          this.hC.getFile(
            this.path.substring(0, this.path.length - 1) + this.tB.toString(),
            Tb,
            a,
          );
    },
    digest: function () {
      this.file.seek(0);
      var a = this.file.zS(4);
      this.mk = !1;
      80 == a[0] && 65 == a[1] && 77 == a[2] && 85 == a[3] && (this.mk = !0);
      this.file.rT(this.mk);
      this.file.Qa(8);
      this.file.Qa(4);
      this.Sd = new Kd();
      this.Ia = new Fd(this);
      this.Xd = new Gd(this);
      this.ui = new Hd(this);
      this.hf = new xa(this);
      for (var b, c = 0; 32639 != c; )
        if (((c = this.file.B()), this.file.B(), (b = this.file.v()), 0 != b)) {
          a = this.file.Oa + b;
          switch (c) {
            case 8739:
              this.o3();
              this.CH = Array(this.tk);
              this.xP = Array(this.tk);
              this.wP = Array(this.tk);
              this.DH = Array(this.tk);
              for (b = 0; b < this.tk; b++) this.DH[b] = null;
              break;
            case 8773:
              this.Cb = this.file.v();
              this.file.v();
              this.file.v();
              this.file.B();
              this.file.B();
              this.file.B();
              this.QB = this.file.B();
              break;
            case 8740:
              this.appName = this.file.Nd();
              break;
            case 8774:
              this.file.v();
              break;
            case 8750:
              this.file.Nd();
              break;
            case 8782:
              this.LI = this.file.Nd();
              break;
            case 8754:
              this.t3();
              break;
            case 8755:
              this.s3();
              break;
            case 8745:
            case 8767:
              this.CB = new pb(this);
              this.CB.n1(this.file);
              this.Sd.Nn(this.file);
              break;
            case 8747:
              this.q3(b);
              break;
            case 8778:
              this.ny = this.file.v();
              this.dS = this.file.v();
              this.eS = this.file.v();
              this.gS = this.file.v();
              this.hS = this.file.v();
              this.fS = this.file.Qe();
              this.Vr = this.file.v();
              -1 != this.Vr && (this.file.g6(4), (this.Vr = this.file.Qe()));
              this.aD = this.file.v();
              this.rI = !0;
              break;
            case 13107:
              this.CH[this.yt] = this.file.Oa;
              for (var d = 0; 32639 != d; )
                if (
                  ((d = this.file.B()),
                  this.file.B(),
                  (b = this.file.v()),
                  0 != b)
                ) {
                  var e = this.file.Oa + b;
                  switch (d) {
                    case 13108:
                      0 == this.yt && (this.file.Qa(8), this.file.Qe());
                      break;
                    case 13110:
                      this.DH[this.yt] = this.file.Nd();
                      break;
                    case 13129:
                      this.xP[this.yt] = this.file.v();
                      this.wP[this.yt] = this.file.v();
                      break;
                    case 13128:
                      var f = b / 6;
                      for (b = 0; b < f; b++) {
                        var h = this.file.B();
                        this.file.Qa(4);
                        0 != h &&
                          ((this.Ae[h] = 1),
                          (this.Fh = Math.max(this.Fh, h + 1)));
                      }
                  }
                  this.file.seek(e);
                }
              this.yt++;
              break;
            case 8760:
              d = this.file.v();
              this.rH = Array(d);
              for (b = 0; b < d; b++)
                (this.rH[b] = new yd(this)), this.rH[b].Nn();
              break;
            case 26214:
              this.Ia.Nn(this.file);
              break;
            case 26215:
              this.Xd.Nn(this.file);
              break;
            case 26216:
              this.ui.Nn(this.file);
          }
          this.file.seek(a);
        }
      this.context = new eb(this.canvas);
      this.hf.b6(0 != (this.Ww & q.XX));
      null == this.yb && (this.ii = new cb());
    },
    lT: function (a, b, c, d, e, f) {
      this.yb = a;
      this.Sr = c;
      this.ii = d;
      this.DK = b;
      this.CJ = e;
      this.BJ = f;
    },
    M2: function () {
      this.ml = !1;
      this.gT = 0;
      this.O5 = this.P5 = 1;
      this.R5 = this.Q5 = this.nb / 2;
      this.T5 = this.S5 = this.rb / 2;
    },
    TD: function () {
      window.setTimeout(Bb.bind(this), 20);
    },
    CK: function () {
      (this.ix = !!(
        /iPad|iPhone|iPod/.test(navigator.platform) ||
        ("MacIntel" === navigator.platform &&
          "undefined" !== typeof navigator.Oca)
      )) &&
        0 < this.ui.zd &&
        ((this.ti = new vb(this)), this.ti.y3());
      this.tu();
      this.Jf = Array(q.lM);
      var a;
      for (a = 0; a < q.lM; a++) this.Jf[a] = !1;
      this.canvas.Vd = this;
      if (null == this.yb) {
        var b = this;
        window.addEventListener(
          "keypress",
          function (a) {
            b.C1(a);
          },
          !1,
        );
        window.addEventListener(
          "keydown",
          function (a) {
            b.hasFocus || (window.focus(), (b.hasFocus = !0));
            b.sH();
            b.NO(a);
          },
          !1,
        );
        window.addEventListener(
          "keyup",
          function (a) {
            b.OO(a);
          },
          !1,
        );
        window.addEventListener(
          "blur",
          function () {
            b.hasFocus = !1;
          },
          !1,
        );
        window.addEventListener(
          "focus",
          function () {
            b.hasFocus = !0;
          },
          !1,
        );
        if (window !== window.top)
          try {
            var c = window.top;
            c.addEventListener("focus", function () {
              b.hasFocus = !0;
              b.canvas.focus();
            });
            c.addEventListener("blur", function () {
              b.hasFocus = !1;
            });
          } catch (d) {}
        window.addEventListener(
          "resize",
          function () {
            b.tu();
          },
          !1,
        );
        document.addEventListener(
          "blur",
          function () {
            b.hasFocus = !1;
          },
          !1,
        );
        document.addEventListener(
          "focus",
          function () {
            b.hasFocus = !0;
          },
          !1,
        );
        document.addEventListener(
          "fullscreenchange",
          function () {
            b.fullScreen = document.kba;
            b.tu();
          },
          !1,
        );
        document.addEventListener(
          "mozfullscreenchange",
          function () {
            b.fullScreen = document.mozFullScreen;
            b.tu();
          },
          !1,
        );
        document.addEventListener(
          "webkitfullscreenchange",
          function () {
            b.fullScreen = document.webkitIsFullScreen;
            b.tu();
          },
          !1,
        );
        window.PointerEvent
          ? ("undefined" !== typeof CRunMultipleTouch &&
              (this.canvas.setAttribute("style", "-ms-touch-action: none;"),
              this.canvas.setAttribute("style", "touch-action: none;")),
            this.canvas.addEventListener(
              "pointerdown",
              function (a) {
                switch (a.pointerType) {
                  case "mouse":
                  case "pen":
                    b.Qx(a, !0);
                    break;
                  case "touch":
                    b.Zy(a, !0);
                }
                a.preventDefault && a.preventDefault();
              },
              !1,
            ),
            this.canvas.addEventListener(
              "pointermove",
              function (a) {
                switch (a.pointerType) {
                  case "mouse":
                  case "pen":
                    b.Hr(a, b.canvas);
                    break;
                  case "touch":
                    b.Yy(a, !0);
                }
                a.preventDefault && a.preventDefault();
              },
              !1,
            ),
            this.canvas.addEventListener(
              "pointerup",
              function (a) {
                switch (a.pointerType) {
                  case "mouse":
                  case "pen":
                    b.Sx(a);
                    break;
                  case "touch":
                    b.Zn(a, !0);
                }
                a.preventDefault && a.preventDefault();
              },
              !1,
            ),
            this.canvas.addEventListener(
              "pointercancel",
              function (a) {
                switch (a.pointerType) {
                  case "touch":
                    b.Zn(a, !0);
                }
                a.preventDefault && a.preventDefault();
              },
              !1,
            ))
          : (this.canvas.addEventListener(
              "mousemove",
              function (a) {
                b.Hr(a, b.canvas);
                a.preventDefault && a.preventDefault();
              },
              !1,
            ),
            this.canvas.addEventListener(
              "mousedown",
              function (a) {
                b.Qx(a, !1);
                a.preventDefault && a.preventDefault();
              },
              !1,
            ),
            this.canvas.addEventListener(
              "mouseup",
              function (a) {
                b.Sx(a);
                a.preventDefault && a.preventDefault();
              },
              !1,
            ),
            this.canvas.addEventListener(
              "mouseout",
              function (a) {
                b.YI(a);
                a.preventDefault && a.preventDefault();
              },
              !1,
            ),
            this.canvas.addEventListener(
              "click",
              function (a) {
                b.click(a);
                a.preventDefault && a.preventDefault();
              },
              !1,
            ),
            this.canvas.addEventListener(
              "dblclick",
              function (a) {
                b.eH(a);
                a.preventDefault && a.preventDefault();
              },
              !1,
            ));
        this.canvas.addEventListener(
          "contextmenu",
          function (a) {
            a.preventDefault && a.preventDefault();
          },
          !1,
        );
        a = /Firefox/i.test(navigator.userAgent)
          ? "DOMMouseScroll"
          : "mousewheel";
        document.attachEvent
          ? document.attachEvent("on" + a, function (a) {
              b.pR(a);
            })
          : document.addEventListener &&
            document.addEventListener(
              a,
              function (a) {
                b.pR(a);
              },
              !1,
            );
        document.onselectstart = function () {
          return !1;
        };
        this.canvas.onselectstart = function (a) {
          a.preventDefault && a.preventDefault();
          return !1;
        };
        this.ZD = this.Z2();
        this.Pj = new W();
        this.Qj = Array(q.ng);
        this.Mo = Array(q.ng);
        this.Uu = Array(q.ng);
        this.xm = Array(q.ng);
        this.ym = Array(q.ng);
        for (a = 0; a < q.ng; a++)
          (this.Qj[a] = q.yq),
            (this.xm[a] = 0),
            (this.ym[a] = 0),
            (this.Mo[a] = !1),
            (this.Uu[a] = 0);
        this.ZD &&
          !window.PointerEvent &&
          (this.canvas.addEventListener(
            "touchstart",
            function (a) {
              b.Zy(a, !1);
              a.preventDefault && a.preventDefault();
            },
            !1,
          ),
          this.canvas.addEventListener(
            "touchmove",
            function (a) {
              b.Yy(a, !1);
              a.preventDefault && a.preventDefault();
            },
            !1,
          ),
          this.canvas.addEventListener(
            "touchend",
            function (a) {
              b.Zn(a, !1);
              a.preventDefault && a.preventDefault();
            },
            !1,
          ),
          this.canvas.addEventListener(
            "touchcancel",
            function (a) {
              b.Zn(a, !1);
              a.preventDefault && a.preventDefault();
            },
            !1,
          ));
        window.focus();
        this.TD();
      } else
        for (
          this.ZD = this.yb.ZD,
            this.Pj = new W(),
            this.Qj = Array(q.ng),
            this.Mo = Array(q.ng),
            this.Uu = Array(q.ng),
            this.xm = Array(q.ng),
            this.ym = Array(q.ng),
            a = 0;
          a < q.ng;
          a++
        )
          (this.Qj[a] = q.yq),
            (this.xm[a] = 0),
            (this.ym[a] = 0),
            (this.Mo[a] = !1),
            (this.Uu[a] = 0);
      this.yc = this.Vp = this.Up = 0;
      this.Hi = -2;
      this.ba = new t(this);
    },
    tu: function () {
      var a = this.nb,
        b = this.rb,
        c,
        d;
      this.fullScreen || this.Ww & q.WL
        ? ((c = window.innerWidth),
          (d = window.innerHeight),
          (document.documentElement.style.overflow = "hidden"),
          (document.body.scroll = "no"))
        : ((c = a), (d = b));
      c /= a;
      d /= b;
      if (this.Cb & q.nV || (this.Ww & q.WL && this.Ww & q.YX))
        c = d = Math.min(c, d);
      if (c != this.Fe || d != this.Ge)
        if (
          ((this.Fe = c),
          (this.Ge = d),
          (this.canvas.width = Math.floor(this.Fe * a)),
          (this.canvas.height = Math.floor(this.Ge * b)),
          this.context.oT(this.Fe, this.Ge),
          (a = this.canvas.offsetParent))
        )
          (a.style.width = this.canvas.width.toString() + "px"),
            (a.style.height = this.canvas.height.toString() + "px"),
            (a.position = "absolute");
      this.ba && this.ba.Ho();
    },
    Z2: function () {
      var a =
          "Android;webOS;iPhone;iPad;iPod;Blackberry;Windows Phone;Touch".split(
            ";",
          ),
        b = navigator.userAgent,
        c;
      for (c in a) if (0 <= b.indexOf(a[c])) return !0;
      return "ontouchstart" in window ||
        0 < navigator.maxTouchPoints ||
        0 < navigator.msMaxTouchPoints
        ? !0
        : !1;
    },
    Qo: function (a) {
      this.vB.AS(a);
      this.ln++;
    },
    Tv: function (a) {
      this.Dw.add(a);
      this.mn++;
      this.Dl = !0;
    },
    Wy: function () {
      this.VB &&
        (this.kx--,
        0 > this.kx &&
          ((this.kx = 1e9),
          (this.lx = new da()),
          this.lx.getFile(this.VB + "info.dat", xd)));
      this.Lg = new Date().getTime();
      if (this.D4(!1)) {
        if (this.Dl) {
          if (null == this.Rk) {
            var a = this.vl;
            this.rI
              ? ((this.Rk = 0 == this.ny ? new zd(this) : new Bd(this)),
                0 == this.ny && -1 != this.Vr && (a = this.Vr))
              : (this.Rk = new Ad(this));
            this.iS = !1;
            this.hK = !0;
            null == this.yb &&
              (this.frame.bC
                ? this.context.ww(0, 0, this.canvas.width, this.canvas.height)
                : this.context.df(0, 0, this.nb, this.rb, a),
              this.TD());
            return;
          }
          if (null != this.Rk && 0 == this.iS) {
            this.iS = this.Rk.load();
            null == this.yb && this.TD();
            return;
          }
          for (; 0 < this.Dw.size() && this.vB.size() < this.u1; )
            (a = this.Dw.get(0)), this.vB.add(a), this.Dw.Cp(0), a.hH();
          this.hf.w1();
          a = !1;
          0 == this.Dw.size() && 0 == this.vB.size() && (a = !0);
          null != this.Rk &&
            ((0 != (this.Cb & q.eo) && !this.Rk.fE) ||
              0 != (this.frame.ap & V.AY)) &&
            (this.hK || (this.Rk.reset(), (this.hK = !0)),
            this.Rk.step(),
            (a = this.Rk.aI())) &&
            (this.Rk.fE = !0);
          a &&
            ((this.hK = !1),
            this.ba.resume(),
            this.ba.Zm(),
            (this.Dl = !1),
            this.Ia.Jj(),
            this.ui.Jj(),
            this.Xd.Jj(),
            (this.ln = this.mn = 0),
            this.JG &&
              ((this.JG = !1),
              0 != this.ba.xB()
                ? (this.yc = q.uA)
                : ((this.yc = q.Ns), this.CT(this.$k), (this.$k = null))));
          null == this.yb && this.TD();
        } else
          null == this.yb &&
            (null == this.kg
              ? (this.context.rD(0 != (this.Cb & q.SK)),
                this.bD
                  ? this.context.Dp(this.bD, 0, 0, this.nb, this.rb, 0, 0)
                  : this.frame.bC
                    ? this.context.ww(0, 0, this.nb, this.rb)
                    : this.context.df(0, 0, this.nb, this.rb, this.vl),
                (a = this.context.Zb),
                this.ml &&
                  ((bRestore = !0),
                  a.save(),
                  a.translate(this.Q5, this.S5),
                  0 != this.gT && a.rotate(0.0174532925 * -this.gT),
                  a.scale(Math.max(0.001, this.O5), Math.max(0.001, this.P5)),
                  a.translate(-this.R5, -this.T5)),
                this.ii.Zc(this.context, 0, 0),
                this.ml && a.restore(),
                this.pn && this.jb.Zc(this.context),
                this.PK &&
                  (this.PK--,
                  this.eE ||
                    ((a = new Wa()),
                    a.rB(),
                    (a.Oc = 16),
                    (this.eE = new Ca(this, this.nb, 30)),
                    this.eE.UQ(16711680),
                    this.eE.GC(
                      window.FusionVersion,
                      u.bq | u.ko,
                      null,
                      16777215,
                      a,
                      1,
                      10526880,
                    )),
                  this.eE.Zc(this.context, 0, 0, 0, 0)))
              : (this.context.rD(),
                this.context.Dp(this.kg, 0, 0, this.nb, this.rb, 0, 0)),
            0 != (this.Xw & q.WX) && window.requestAnimationFrame
              ? window.requestAnimationFrame(Bb)
              : ((a = new Date().getTime() - this.Lg),
                (a = Math.max(1e3 / this.GH - a, 1)),
                window.setTimeout(Bb, a)));
        return !0;
      }
      this.tH();
      return !1;
    },
    PO: function (a, b, c, d) {
      this.Dl ||
        (this.context.rD(0 != (this.Cb & q.SK)),
        null == this.kg
          ? (d || this.context.df(b, c, this.CJ, this.BJ, this.vl),
            this.context.clip(b, c, this.CJ, this.BJ),
            this.ii.Zc(this.context, 0, 0),
            this.context.A6())
          : (this.context.rD(),
            this.context.Dp(this.kg, b, c, this.nb, this.rb, 0, 0)));
    },
    U0: function () {
      0 == (this.Cb & q.qV) &&
        (this.hasFocus
          ? this.KG && (this.ba.resume(), (this.KG = !1))
          : (this.ba.pause(this.Xw & q.UX), (this.KG = !0)));
    },
    D4: function (a) {
      this.U0();
      var b = !0,
        c = !0;
      do
        switch (this.yc) {
          case q.wA:
            if ((this.K2(), (this.Ad = this.DK), (this.yc = 1), this.c3(), a)) {
              b = !1;
              break;
            }
          case q.Ps:
            this.m6();
            break;
          case q.JF:
            0 == this.z3()
              ? (this.I1(), (this.yc != q.Os && this.yc != q.wA) || this.Ow())
              : (b = !1);
            break;
          case q.Ns:
            this.ba.xB();
            0 != this.ba.md
              ? this.k6()
                ? (this.yc = q.vA)
                : this.Ow()
              : (b = !1);
            break;
          case q.vA:
            0 == this.A3()
              ? (this.dP(), (this.yc != q.Os && this.yc != q.wA) || this.Ow())
              : (b = !1);
            break;
          case q.uA:
            this.Ow();
            break;
          default:
            b = !1;
        }
      while (1 == b);
      this.yc == q.Os && (c = !1);
      return c;
    },
    tH: function () {
      null == this.yb &&
        (window.PointerEvent
          ? (this.canvas.addEventListener(
              "pointerdown",
              function (a) {
                switch (a.pointerType) {
                  case "mouse":
                  case "pen":
                    that.Qx(a, !0);
                    break;
                  case "touch":
                    that.Zy(a, !0);
                }
                a.preventDefault && a.preventDefault();
              },
              !1,
            ),
            this.canvas.addEventListener(
              "pointermove",
              function (a) {
                switch (a.pointerType) {
                  case "mouse":
                  case "pen":
                    that.Hr(a, that.canvas);
                    break;
                  case "touch":
                    that.Yy(a, !0);
                }
                a.preventDefault && a.preventDefault();
              },
              !1,
            ),
            this.canvas.addEventListener(
              "pointerup",
              function (a) {
                switch (a.pointerType) {
                  case "mouse":
                  case "pen":
                    that.Sx(a);
                    break;
                  case "touch":
                    that.Zn(a, !0);
                }
                a.preventDefault && a.preventDefault();
              },
              !1,
            ),
            this.canvas.addEventListener(
              "pointercancel",
              function (a) {
                switch (a.pointerType) {
                  case "touch":
                    that.Zn(a, !0);
                }
                a.preventDefault && a.preventDefault();
              },
              !1,
            ))
          : (this.canvas.addEventListener(
              "mousemove",
              function (a) {
                that.Hr(a, that.canvas);
                a.preventDefault && a.preventDefault();
              },
              !1,
            ),
            this.canvas.addEventListener(
              "mousedown",
              function (a) {
                that.Qx(a, !1);
                a.preventDefault && a.preventDefault();
              },
              !1,
            ),
            this.canvas.addEventListener(
              "mouseup",
              function (a) {
                that.Sx(a);
                a.preventDefault && a.preventDefault();
              },
              !1,
            ),
            this.canvas.addEventListener(
              "mouseout",
              function (a) {
                that.YI(a);
                a.preventDefault && a.preventDefault();
              },
              !1,
            ),
            this.canvas.addEventListener(
              "click",
              function (a) {
                that.click(a);
                a.preventDefault && a.preventDefault();
              },
              !1,
            ),
            this.canvas.addEventListener(
              "dblclick",
              function (a) {
                that.eH(a);
                a.preventDefault && a.preventDefault();
              },
              !1,
            )),
        this.canvas.addEventListener(
          "contextmenu",
          function (a) {
            a.preventDefault && a.preventDefault();
          },
          !1,
        ));
      null == this.hf || this.eI || this.hf.GK();
      this.ti && (this.ti = null);
    },
    m6: function () {
      this.Ad != this.Hi &&
        ((this.frame = new V(this)), this.frame.r3(this.Ad));
      this.vl = this.frame.hQ;
      this.Hi = this.Ad;
      this.frame.ep = this.frame.fp = 0;
      this.frame.iI = this.frame.jI = 0;
      this.frame.MS = !1;
      this.M2();
      var a;
      null != this.yb
        ? (this.dl = this.bl = 0)
        : ((this.bl = this.nb / 2 - this.frame.qx / 2),
          (this.dl = this.rb / 2 - this.frame.px / 2));
      for (a = 0; a < this.frame.Oe; a++) this.frame.ic[a].o1(this.bl, this.dl);
      this.frame.xd & V.QY && (document.title = this.frame.yP);
      this.bD = null;
      this.frame.xd & V.RY && (this.bD = this.$k);
      this.frame.xd & V.SY && (this.frame.bC = !0);
      this.ba.X5(this.frame);
      this.ba.L2(null != this.frame.Sw);
      this.yc = q.Ns;
      null != this.frame.Sw
        ? this.Dl
          ? (this.JG = !0)
          : 0 != this.ba.xB()
            ? (this.yc = q.uA)
            : ((this.yc = q.Ns), this.CT(this.$k), (this.$k = null))
        : (this.$k = null);
      this.Dl ? this.ba.pause(!0) : this.ba.Zm();
    },
    ES: function () {
      null != this.yb
        ? (this.dl = this.bl = 0)
        : ((this.bl = this.nb / 2 - this.frame.qx / 2),
          (this.dl = this.rb / 2 - this.frame.px / 2));
      var a;
      for (a = 0; a < this.frame.Oe; a++) this.frame.ic[a].r5(this.bl, this.dl);
    },
    Ow: function () {
      var a;
      a = this.ba.d3(!1);
      if (0 != (this.Xw & q.TX)) this.yc = q.Os;
      else
        switch (u.XY(a)) {
          case 1:
            this.Ad = this.Hi + 1;
            1 == this.ny && this.Ad == this.aD && this.Ad++;
            this.yc = q.Ps;
            this.Ad >= this.tk && (this.yc = q.Os);
            break;
          case 2:
            this.Ad = Math.max(0, this.Hi - 1);
            1 == this.ny &&
              this.Ad == this.aD &&
              (0 == this.Ad ? (this.Ad = this.Hi) : this.Ad--);
            this.yc = q.Ps;
            break;
          case 3:
            this.yc = q.Ps;
            0 != (u.Lz(a) & 32768)
              ? ((this.Ad = u.Lz(a) & 32767),
                this.Ad >= this.tk && (this.Ad = this.tk - 1),
                0 > this.Ad && (this.Ad = 0))
              : u.Lz(a) < this.GB
                ? ((this.Ad = this.BH[u.Lz(a)]),
                  -1 == this.Ad && (this.Ad = this.Hi + 1))
                : (this.Ad = this.Hi + 1);
            break;
          case 4:
            this.yc = q.wA;
            this.Ad = this.DK;
            break;
          default:
            this.yc = q.Os;
        }
      this.yc == q.Ps &&
        (0 > this.Ad || this.Ad >= this.tk) &&
        (this.yc = this.Hi);
      if (this.yc != q.Ps || this.Ad != this.Hi) {
        for (a = 0; a < this.frame.Oe; a++) this.frame.ic[a].DO();
        this.frame = null;
        this.Hi = -1;
      }
    },
    LH: function () {
      null == this.LK && (this.LK = new de(this));
      return this.LK;
    },
    CT: function (a) {
      var b,
        c,
        d = this.frame.Sw;
      if (null != d) {
        b = document.createElement("canvas");
        b.width = this.nb;
        b.height = this.rb;
        c = document.createElement("canvas");
        c.width = this.nb;
        c.height = this.rb;
        var e = new eb(c);
        e.df(0, 0, this.nb, this.rb, this.vl);
        this.ii.Zc(e, 0, 0);
        e = new eb(b);
        0 != (d.az & Pa.AA)
          ? e.df(0, 0, this.nb, this.rb, d.$y)
          : (e.df(0, 0, this.nb, this.rb, this.zP),
            null != a && e.Dp(a, 0, 0, a.width, a.height, 0, 0));
        this.kg = document.createElement("canvas");
        this.kg.width = this.nb;
        this.kg.height = this.rb;
        this.kg.getContext("2d").drawImage(b, 0, 0);
        this.transition = this.LH().kt(d, this.kg, b, c);
        if (null != this.transition) return (this.yc = q.JF), !0;
      }
      this.kg = null;
      this.yc = q.Ns;
      this.ba.rO();
      return !1;
    },
    z3: function () {
      if (null != this.transition) {
        if (this.transition.YB()) return !1;
        this.transition.Rd(K.NF);
        return !0;
      }
      return !1;
    },
    I1: function () {
      null != this.transition &&
        (this.transition.end(),
        (this.kg = this.transition = null),
        this.yc == q.JF && (this.yc = q.Ns),
        this.ba.rO());
      return !0;
    },
    k6: function () {
      var a,
        b,
        c = this.frame.xH;
      if (null != c) {
        a = document.createElement("canvas");
        a.width = this.nb;
        a.height = this.rb;
        b = document.createElement("canvas");
        b.width = this.nb;
        b.height = this.rb;
        var d = new eb(a);
        d.df(0, 0, this.nb, this.rb, this.vl);
        this.ii.Zc(d, 0, 0);
        d = new eb(b);
        0 != (c.az & Pa.AA)
          ? d.df(0, 0, this.nb, this.rb, c.$y)
          : d.df(0, 0, this.nb, this.rb, 0);
        this.kg = document.createElement("canvas");
        this.kg.width = this.nb;
        this.kg.height = this.rb;
        this.kg.getContext("2d").drawImage(a, 0, 0);
        this.transition = this.LH().kt(c, this.kg, a, b);
        if (null != this.transition) return (this.yc = q.vA), !0;
      }
      this.kg = null;
      return !1;
    },
    A3: function () {
      if (null != this.transition) {
        if (this.transition.YB()) return this.dP(), !1;
        this.transition.Rd(K.BA);
      }
      return !0;
    },
    dP: function () {
      null != this.transition &&
        ((this.$k = this.transition.I),
        this.transition.end(),
        (this.kg = this.transition = null),
        this.yc == q.vA && (this.yc = q.uA));
      return !0;
    },
    o3: function () {
      this.file.Qa(4);
      this.Ww = this.file.B();
      this.Xw = this.file.B();
      this.file.B();
      this.file.B();
      this.nb = this.file.B();
      this.rb = this.file.B();
      this.BP = this.file.v();
      this.AP = this.file.v();
      var a, b;
      this.$R = Array(q.il);
      for (a = 0; a < q.il; a++) this.$R[a] = this.file.B();
      this.DJ = Array(q.il * q.zv);
      for (a = 0; a < q.il; a++)
        for (b = 0; b < q.zv; b++) this.DJ[a * q.zv + b] = this.file.B();
      this.zP = this.file.Qe();
      this.tk = this.file.v();
      this.GH = this.file.v();
      this.file.Qa(1);
      this.file.Qa(3);
    },
    t3: function () {
      this.Yt = this.file.B();
      this.PH = Array(this.Yt);
      this.RP = Array(this.Yt);
      var a;
      for (a = 0; a < this.Yt; a++) this.PH[a] = this.file.v();
      this.file.c5(this.RP);
    },
    s3: function () {
      this.$x = this.file.v();
      this.OH = Array(this.$x);
      var a;
      for (a = 0; a < this.$x; a++) this.OH[a] = this.file.Nd();
    },
    q3: function (a) {
      this.GB = a / 2;
      this.BH = Array(this.GB);
      for (a = 0; a < this.GB; a++) this.BH[a] = this.file.B();
    },
    JH: function (a) {
      if (this.QH) {
        var b;
        for (b = 0; b < this.QH.size(); b++)
          if (((gFont = this.QH.get(b)), gFont.$0(a))) return gFont;
      }
      return a;
    },
    c3: function () {
      this.Fo = null;
    },
    K2: function () {
      var a;
      if (null == this.yb || (null != this.yb && 0 == (this.Sr & ha.KV)))
        for (this.rx = Array(q.il), a = 0; a < q.il; a++)
          this.rx[a] = this.AP ^ 4294967295;
      else this.rx = null;
      if (null == this.yb || (null != this.yb && 0 == (this.Sr & ha.MV)))
        for (this.Oy = Array(q.il), a = 0; a < q.il; a++)
          this.Oy[a] = this.BP ^ 4294967295;
      else this.Oy = null;
      this.aS = Array(q.il);
      for (a = 0; a < q.il; a++) this.aS[a] = "";
      if (null == this.yb || (null != this.yb && 0 == (this.Sr & ha.mL)))
        for (this.Vw = Array(this.Yt), a = 0; a < this.Yt; a++)
          this.Vw[a] = this.PH[a];
      else this.Vw = null;
      if (null == this.yb || (null != this.yb && 0 == (this.Sr & ha.mL)))
        for (this.Uw = Array(this.$x), a = 0; a < this.$x; a++)
          this.Uw[a] = this.OH[a];
      else this.Uw = null;
    },
    Bt: function () {
      for (var a = this; null == a.rx; ) a = this.yb;
      return a.rx;
    },
    LP: function () {
      for (var a = this; null == a.Oy; ) a = this.yb;
      return a.Oy;
    },
    g2: function () {
      for (var a = this; null != a.yb && 0 != (a.Sr & ha.LV); ) a = a.yb;
      return a.DJ;
    },
    l2: function () {
      for (var a = this; null == a.Vw; ) a = a.yb;
      return a.Vw;
    },
    k2: function () {
      for (var a = this; null == a.Uw; ) a = a.yb;
      return a.Uw;
    },
    UG: function (a) {
      var b = this.l2();
      if (0 > a || 1e3 < a) return null;
      var c = b.length;
      if (a + 1 > c) for (; c < a + 1; c++) b.push(0);
      return b;
    },
    xl: function (a) {
      var b = this.UG(a);
      return null != b ? b[a] : 0;
    },
    yK: function (a, b) {
      var c = this.UG(a);
      null != c && (c[a] = b);
    },
    qN: function (a, b) {
      var c = this.UG(a);
      null != c && (c[a] += b);
    },
    XN: function (a) {
      var b = this.k2();
      if (0 > a || 1e3 < a) return null;
      var c = b.length;
      if (a + 1 > c) for (; c < a + 1; c++) b.push("");
      return b;
    },
    DP: function (a) {
      var b = this.XN(a);
      return null != b ? b[a] : "";
    },
    Z5: function (a, b) {
      var c = this.XN(a);
      null != c && (c[a] = b);
    },
    C1: function (a) {
      a &&
        (this.ZT.charCodeAt(this.dz) == a.charCode
          ? (this.dz++,
            this.dz == this.ZT.length && ((this.PK = 250), (this.dz = 0)))
          : (this.dz = 0));
    },
    NO: function (a) {
      if (a) {
        var b = a.keyCode;
        this.lr = this.Jf[b] = !0;
        null != this.ba && null != this.ba.s && this.ba.s.p4(b);
        for (b = 0; b < this.Vc.length; b++) this.Vc[b].NO(a);
      }
    },
    OO: function (a) {
      if (a) {
        this.Jf[a.keyCode] = !1;
        var b;
        for (b = 0; b < this.Vc.length; b++) this.Vc[b].OO(a);
      }
    },
    SD: function (a, b) {
      this.Up = a;
      this.Vp = b;
    },
    Hr: function (a, b) {
      a.pageX
        ? ((this.Ik = a.pageX), (this.Jk = a.pageY))
        : a.clientY &&
          ((this.Ik =
            a.clientX +
            document.body.scrollLeft +
            document.documentElement.scrollLeft),
          (this.Jk =
            a.clientY +
            document.body.scrollTop +
            document.documentElement.scrollTop));
      for (var c = 0, d = 0, e = b; e && "BODY" != e.tagName; )
        (c += e.offsetTop), (d += e.offsetLeft), (e = e.offsetParent);
      this.Ik -= d + this.Up;
      this.Jk -= c + this.Vp;
      this.Ik = Math.floor(this.Ik / this.Fe);
      this.Jk = Math.floor(this.Jk / this.Ge);
      null != this.ba && null != this.ba.s && this.ba.s.WR();
      for (c = 0; c < this.Vc.length; c++) this.Vc[c].Hr(a, b);
      this.Yy(new ub(a.pageX, a.pageY, this.canvas), !1);
    },
    mN: function (a) {
      if (a.which)
        switch (a.which) {
          case 2:
            return q.OF;
          case 3:
            return q.CA;
          default:
            return q.hk;
        }
      else
        switch (a.button) {
          case 2:
            return q.CA;
          case 4:
            return q.OF;
          default:
            return q.hk;
        }
    },
    Sx: function (a) {
      var b = this.mN(a);
      this.Hr(a, this.canvas, 305419896);
      this.Jf[b] = !1;
      for (b = 0; b < this.Vc.length; b++) this.Vc[b].Sx(a);
      this.Zn(new ub(a.pageX, a.pageY, this.canvas), !1);
    },
    Qx: function (a, b) {
      var c = this.mN(a);
      this.Hr(a, this.canvas, 305419896);
      this.lr = !0;
      this.Jf[c] = !0;
      this.sH();
      if (null != this.ba && null != this.ba.s)
        if (b) {
          var d = Date.now(),
            e = null !== this.XI && this.oR == c && d - this.XI <= q.bZ ? 2 : 1;
          this.oR = c;
          this.XI = d;
          this.ba.s.ky(c - q.hk, e);
        } else
          this.gB.Gt
            ? this.ba.s.ky(c - q.hk, 1)
            : this.ba.s.ky(c - q.hk, 0 == a.detail % 2 ? 2 : 1);
      for (c = 0; c < this.Vc.length; c++) this.Vc[c].Qx(a, b);
      this.Zy(new ub(a.pageX, a.pageY, this.canvas), !1);
      window.focus();
    },
    YI: function (a) {
      this.Jf[q.hk] = !1;
      this.Jf[q.OF] = !1;
      this.Jf[q.CA] = !1;
      var b;
      for (b = 0; b < this.Vc.length; b++) this.Vc[b].YI(a);
      this.Zn(new ub(a.pageX, a.pageY, this.canvas), !1);
    },
    click: function (a) {
      if (this.gB.Gt) {
        var b;
        for (b = 0; b < this.Vc.length; b++) this.Vc[b].click(a);
      }
    },
    eH: function (a) {
      if (this.gB.Gt) {
        null != this.ba && null != this.ba.s && this.ba.s.ky(0, 2);
        var b;
        for (b = 0; b < this.Vc.length; b++) this.Vc[b].eH(a);
      }
    },
    pR: function (a) {
      this.EO =
        "undefined" != typeof a.wheelDelta ? a.wheelDelta / 40 : -a.detail;
      null != this.ba && null != this.ba.s && this.ba.q4(this.EO);
    },
    sH: function () {
      this.gB.Gt ||
        null == this.Vy ||
        "suspended" != this.Vy.state ||
        this.Vy.resume();
    },
    Zy: function (a, b) {
      this.sH();
      !this.ix && this.ti && (this.ti.Tr(), (this.ti = null));
      if (null != this.Qj) {
        var c,
          d,
          e = b ? 1 : a.changedTouches.length;
        for (c = 0; c < e; c++) {
          var f;
          b
            ? ((f = a), (f.identifier = a.pointerId))
            : (f = a.changedTouches[c]);
          for (d = 0; d < q.ng; d++)
            if (this.Qj[d] == q.yq) {
              this.Qj[d] = f.identifier;
              this.Mo[d] = !1;
              for (o = 0; o < this.Pj.size(); o++)
                if (this.Pj.get(o).x6(f)) {
                  this.Mo[d] = !0;
                  this.Uu[d] = o;
                  break;
                }
              if (
                !this.Mo[d] &&
                ((this.xm[d] = this.bx(f)),
                (this.ym[d] = this.cx(f)),
                this.Rx == q.yq && f.identifier != q.QL)
              )
                for (
                  this.Rx = d,
                    this.Ik = this.xm[d],
                    this.Jk = this.ym[d],
                    this.lr = !0,
                    this.Jf[q.hk] = !0,
                    null != this.ba && null != this.ba.s && this.ba.s.ky(0, 1),
                    d = 0;
                  d < this.Vc.length;
                  d++
                )
                  this.Vc[d].Zy(a, b);
              break;
            }
        }
      }
    },
    Yy: function (a, b) {
      if (null != this.Qj) {
        var c,
          d,
          e,
          f = b ? 1 : a.changedTouches.length;
        for (c = 0; c < f; c++) {
          var h;
          b
            ? ((h = a), (h.identifier = a.pointerId))
            : (h = a.changedTouches[c]);
          for (d = 0; d < q.ng; d++)
            if (this.Qj[d] == h.identifier) {
              if (this.Mo[d]) this.Pj.get(this.Uu[d]).LT(h);
              else {
                for (e = 0; e < this.Pj.size(); e++) this.Pj.get(e).LT(h);
                this.xm[d] = this.bx(h);
                this.ym[d] = this.cx(h);
              }
              if (this.Rx == d)
                for (
                  this.Ik = this.xm[d],
                    this.Jk = this.ym[d],
                    null != this.ba && null != this.ba.s && this.ba.s.WR(),
                    d = 0;
                  d < this.Vc.length;
                  d++
                )
                  this.Vc[d].Yy(a, b);
              break;
            }
        }
      }
    },
    Zn: function (a, b) {
      this.ix && this.ti && (this.ti.Tr(), (this.ti = null));
      if (null != this.Qj) {
        var c,
          d,
          e,
          f = b ? 1 : a.changedTouches.length;
        for (c = 0; c < f; c++) {
          var h;
          b
            ? ((h = a), (h.identifier = a.pointerId))
            : (h = a.changedTouches[c]);
          for (d = 0; d < q.ng; d++)
            if (this.Qj[d] == h.identifier) {
              this.Qj[d] = q.yq;
              if (this.Mo[d]) this.Pj.get(this.Uu[d]).JT(h);
              else {
                for (e = 0; e < this.Pj.size(); e++) this.Pj.get(e).JT(h);
                this.xm[d] = this.bx(h);
                this.ym[d] = this.cx(h);
              }
              if (d == this.Rx)
                for (
                  this.Ik = this.xm[d],
                    this.Jk = this.ym[d],
                    this.Rx = q.yq,
                    this.Jf[q.hk] = !1,
                    e = 0;
                  e < this.Vc.length;
                  e++
                )
                  this.Vc[e].Zn(a, b);
            }
        }
      }
    },
    bx: function (a) {
      var b = a.pageX;
      for (a = a.target; a && "BODY" != a.tagName; )
        (b -= a.offsetLeft), (a = a.offsetParent);
      return Math.floor((b - this.Up) / this.Fe);
    },
    cx: function (a) {
      var b = a.pageY;
      for (a = a.target; a && "BODY" != a.tagName; )
        (b -= a.offsetTop), (a = a.offsetParent);
      return Math.floor((b - this.Vp) / this.Ge);
    },
    zK: function (a) {
      this.AO = a;
      this.canvas.style.cursor = 0 <= this.AO ? this.cursor : "none";
    },
    DT: function (a, b) {
      null == this.jb &&
        ((this.jb = new I(this)),
        this.jb.mQ(),
        this.jb.reset(b),
        (this.pn = 1),
        null != this.frame && 0 != (this.frame.ap & V.VE)
          ? (this.canvas.setAttribute(
              "style",
              "-ms-touch-action: manipulation;",
            ),
            this.canvas.setAttribute("style", "touch-action: manipulation;"))
          : (this.canvas.setAttribute("style", "-ms-touch-action: none;"),
            this.canvas.setAttribute("style", "touch-action: none;")),
        0 > this.Pj.indexOf(this.jb) && this.Pj.add(this.jb));
    },
    i6: function () {
      this.j6();
      this.pn = 2;
    },
    J1: function () {
      null != this.jb &&
        (1 == this.pn && this.Pj.AS(this.jb), (this.jb = null));
      2 == this.pn && this.G1();
      this.pn = 0;
    },
    j6: function () {
      0 == this.Sv &&
        window.DeviceMotionEvent &&
        ((this.UF = this.j0.bind(this)),
        window.addEventListener("devicemotion", this.UF));
      this.Sv++;
    },
    j0: function (a) {
      var b = a.acceleration.x / 9.780318,
        c = a.acceleration.y / 9.780318,
        d = a.accelerationIncludingGravity.x / 9.780318;
      a = a.accelerationIncludingGravity.y / 9.780318;
      this.zq = b;
      this.Aq = c;
      this.Qm = d;
      this.Rm = a;
      switch (window.orientation) {
        case 0:
          this.zq = -b;
          this.Aq = c;
          this.Qm = -d;
          this.Rm = a;
          break;
        case 90:
          this.zq = c;
          this.Aq = b;
          this.Qm = a;
          this.Rm = d;
          break;
        case 180:
          this.zq = b;
          this.Aq = -c;
          this.Qm = d;
          this.Rm = -a;
          break;
        case -90:
          (this.zq = -c), (this.Aq = -b), (this.Qm = -a), (this.Rm = -d);
      }
      this.ix &&
        ((this.zq = -this.zq),
        (this.Aq = -this.Aq),
        (this.Qm = -this.Qm),
        (this.Rm = -this.Rm));
    },
    G1: function () {
      this.Sv--;
      0 >= this.Sv &&
        (window.DeviceMotionEvent &&
          window.removeEventListener("devicemotion", this.UF),
        (this.Sv = 0));
    },
    Zw: function () {
      var a = 0;
      -0.2 > this.Qm && (a |= 4);
      0.2 < this.Qm && (a |= 8);
      -0.2 > this.Rm && (a |= 1);
      0.2 < this.Rm && (a |= 2);
      return a;
    },
    jH: function (a) {
      if (a.os) {
        null == this.ti && (a.KT = 2);
        switch (a.KT) {
          case 0:
            0 < a.Zk && ((a.Zk -= 2), 0 > a.Zk && ((a.Zk = 0), phase++));
            break;
          case 2:
            128 > a.Zk &&
              ((a.Zk += 4), 128 <= a.Zk && ((a.Zk = 128), (a.YD = !0)));
        }
        this.context.df(
          a.Mh.left,
          a.Mh.top,
          a.Mh.right - a.Mh.left,
          a.Mh.bottom - a.Mh.top,
          this.vl,
          0,
          0,
        );
        a.os.Zc(this.context, a.Mh.left, a.Mh.top, R.Wi, a.Zk);
        a.YD && ((a.os = null), (a.Mh = null), (a.Tu = null));
      } else if (((a.YD = !0), null != this.ti && 0 != (this.Cb & q.oV))) {
        a.Tu = new Wa();
        a.Tu.rB();
        a.Tu.Oc = 24;
        var b = a.Tu.Oc + 6;
        a.os = new Ca(this, 120, b);
        var c = a.os.measureText(this.LI, a.Tu) + 64;
        a.os.resize(c, b);
        a.os.UQ();
        a.os.GC(this.LI, u.ko | u.bq, null, 16776960, a.Tu, 2, 0);
        a.Mh = new va();
        a.Mh.left = this.nb / 2 - c / 2;
        a.Mh.top = this.rb / 2 - b / 2;
        a.Mh.right = a.Mh.left + c;
        a.Mh.bottom = a.Mh.top + b;
        a.Zk = 128;
        a.KT = 0;
        a.YD = !1;
        this.context.df(0, 0, this.nb, this.rb, this.vl, 0, 0);
      }
      return a.YD;
    },
  };
  V.QY = 1;
  V.O8 = 2;
  V.RY = 4;
  V.iM = 32;
  V.Q8 = 256;
  V.P8 = 2048;
  V.Ue = 32768;
  V.SY = 131072;
  V.pz = 0;
  V.jh = 1;
  V.OV = 1;
  V.PV = 2;
  V.Bs = 6;
  V.EY = 1;
  V.FY = 2;
  V.GY = 4;
  V.VE = 8;
  V.AY = 256;
  V.LY = 0;
  V.MY = 1;
  V.JY = 2;
  V.KY = 3;
  V.prototype = {
    r3: function (a) {
      this.app.file.seek(this.app.CH[a]);
      this.Pw = new Y(this.app);
      this.mg = new Jd();
      this.cC = new va();
      var b = 0;
      for (this.EC = -1; 32639 != b; )
        if (
          ((b = this.app.file.B()),
          this.app.file.B(),
          (a = this.app.file.v()),
          0 != a)
        ) {
          this.F4 = this.app.file.Oa + a;
          switch (b) {
            case 13108:
              this.pI();
              null != this.app.yb && 0 != (this.app.Sr & ha.JV)
                ? ((this.qx = this.app.r1), (this.px = this.app.s1))
                : ((this.qx = Math.min(this.app.nb, this.Ah)),
                  (this.px = Math.min(this.app.rb, this.Kf)));
              break;
            case 13128:
              var c = a / 6;
              this.Ox = Array(c);
              this.li = Array(c);
              this.mi = Array(c);
              for (a = this.Fh = 0; a < c; a++)
                (this.Ox[a] = this.app.file.B()),
                  (this.Fh = Math.max(this.Fh, this.Ox[a])),
                  (this.li[a] = this.app.file.B()),
                  (this.mi[a] = this.app.file.B());
              this.Fh++;
              break;
            case 13130:
              this.jb = this.app.file.B();
              this.ap = this.app.file.B();
              break;
            case 13122:
              this.cC.load(this.app.file);
              break;
            case 13124:
              this.EC = this.app.file.B();
              break;
            case 13127:
              this.BQ = this.app.file.v();
              break;
            case 13109:
              this.yP = this.app.file.Nd();
              break;
            case 13115:
              this.Sw = new Pa();
              this.Sw.load(this.app.file);
              break;
            case 13116:
              this.xH = new Pa();
              this.xH.load(this.app.file);
              break;
            case 13121:
              this.w3();
              break;
            case 13125:
              this.v3();
              break;
            case 13112:
              this.mg.load(this.app);
              break;
            case 13117:
              this.Pw.load(this.app), (this.Xl = this.Pw.Xl);
          }
          this.app.file.seek(this.F4);
        }
      this.app.Sd.Jj();
      for (a = 0; a < this.mg.Kk; a++) this.app.Sd.Op(this.mg.EP(a).mj);
      this.app.Ia.Jj();
      this.app.ui.Jj();
      this.app.Xd.Jj();
      this.app.Sd.load(this.app.file);
      this.app.Sd.te(this.app.Ia, this.app.Xd);
      this.app.Cb & q.eo &&
        (this.app.Xd.Py(),
        this.app.ui.Py(),
        (0 == this.app.Fh || this.app.eI) && this.app.Ia.Py());
      this.app.Ia.load(this.app.file);
      this.app.Xd.load(this.app.file);
      this.Pw.L1(this.app.ui);
      this.app.ui.load();
      this.app.Sd.q5();
      for (a = 0; a < this.mg.Kk; a++)
        (b = this.mg.list[a]), b.sx >= F.Ed && this.app.Sd.c6(b.mj);
      if (0 != (this.app.QB & q.kE))
        for (a = 0; a < this.app.Sd.Kn; a++)
          (b = this.app.Sd.kd[a]),
            null != b &&
              null != b.Kd &&
              b.ni == F.xM &&
              ((b = b.Kd),
              (c = b.QC),
              0 == b.PC ||
                (c != ta.wo && c != ta.Bi) ||
                ((b.PC = 0),
                (b = this.app.Ia.Ac(b.Mk)),
                null != b && (b.hr |= qa.vv)));
    },
    w3: function () {
      this.Oe = this.app.file.v();
      this.ic = Array(this.Oe);
      var a;
      for (a = 0; a < this.Oe; a++)
        (this.ic[a] = new ra(this.app)), this.ic[a].load(this.app.file);
    },
    v3: function () {
      var a;
      for (a = 0; a < this.Oe; a++)
        (this.ic[a].uh = this.app.file.v()),
          (this.ic[a].vh = this.app.file.v()),
          this.app.file.Qa(12);
    },
    pI: function () {
      this.Ah = this.app.file.v();
      this.Kf = this.app.file.v();
      this.hQ = this.app.file.Qe();
      this.xd = this.app.file.v();
    },
  };
  xa.Df = 48;
  xa.prototype = {
    m0: function (a) {
      null == this.Vq && (this.Vq = new W());
      this.Vq.add(a);
    },
    w1: function () {
      if (null != this.Vq && 0 < this.Vq.size() && !this.fH) {
        var a = this.Vq.get(0);
        this.Vq.Cp(0);
        this.fH = !0;
        var b = this;
        b.context.decodeAudioData(
          a.response,
          function (c) {
            a.buffer = c;
            a.response = null;
            b.app.Qo(a);
            b.fH = !1;
          },
          function (b) {
            console.log(
              "Sound Error, name: " + a.name + " and error: " + b.message,
            );
          },
        );
      }
    },
    reset: function () {
      var a;
      for (a = 0; a < xa.Df; a++) this.qw[a] = !1;
    },
    play: function (a, b, c, d, e, f) {
      if (0 != this.EN) {
        var h = this.app.ui.p2(a);
        if (null != h) {
          0 == this.FG && (c = 0);
          if (0 > c) {
            for (
              a = 0;
              a < xa.Df && (null != this.Wb[a] || 0 != this.qw[a]);
              a++
            );
            if (a == xa.Df)
              for (
                a = 0;
                a < xa.Df &&
                (0 != this.qw[a] || null == this.Wb[a] || 0 != this.Wb[a].tw);
                a++
              );
            c = a;
            0 <= c && c < xa.Df && -1 == e && (this.Yu[c] = this.RQ);
          }
          if (!(0 > c || c >= xa.Df)) {
            if (null != this.Wb[c]) {
              if (1 == this.Wb[c].tw) return;
              this.Wb[c] != h && (this.Wb[c].stop(), (this.Wb[c] = null));
            }
            for (a = 0; a < xa.Df; a++)
              this.Wb[a] == h && (this.Wb[a].stop(), (this.Wb[a] = null));
            this.Wb[c] = h;
            -1 != e && (this.Yu[c] = e);
            h.play(b, d, this.Yu[c]);
            0 != f && h.Y5(f);
          }
        }
      }
    },
    b6: function (a) {
      this.FG = a;
    },
    b3: function () {
      var a;
      for (a = 0; a < xa.Df; a++)
        null != this.Wb[a] &&
          this.Wb[a].bQ() &&
          this.app.ui.Op(this.Wb[a].handle);
    },
    GK: function () {
      var a;
      for (a = 0; a < xa.Df; a++)
        null != this.Wb[a] && (this.Wb[a].stop(), (this.Wb[a] = null));
    },
    o6: function (a) {
      var b;
      for (b = 0; b < xa.Df; b++)
        null != this.Wb[b] &&
          this.Wb[b].handle == a &&
          (this.Wb[b].stop(), (this.Wb[b] = null));
    },
    W2: function (a) {
      var b;
      for (b = 0; b < xa.Df; b++)
        if (null != this.Wb[b] && this.Wb[b].handle == a)
          return this.Wb[b].bQ();
      return !1;
    },
    pause: function () {
      var a;
      for (a = 0; a < xa.Df; a++) null != this.Wb[a] && this.Wb[a].v2();
    },
    resume: function () {
      var a;
      for (a = 0; a < xa.Df; a++) null != this.Wb[a] && this.Wb[a].w2();
    },
    e6: function (a, b) {
      0 > b && (b = 0);
      100 < b && (b = 100);
      var c;
      for (c = 0; c < xa.Df; c++)
        null != this.Wb[c] &&
          this.Wb[c].handle == a &&
          ((this.Yu[c] = b), this.Wb[c].d6(b));
    },
    X0: function () {
      var a;
      for (a = 0; a < xa.Df; a++)
        null != this.Wb[a] && this.Wb[a].W0() && (this.Wb[a] = null);
    },
  };
  yd.prototype = {
    Nn: function () {
      var a = this.app.file.B();
      this.path = this.app.file.Nd(a);
      a = this.path.lastIndexOf("\\");
      0 <= a && (this.path = this.path.substring(a + 1));
      this.length = this.app.file.v();
      this.offset = this.app.file.Oa;
      this.app.file.Qa(this.length);
    },
    open: function () {
      return this.app.file.Yf(this.offset, this.length);
    },
  };
  zd.prototype = {
    load: function () {
      return this.cI;
    },
    reset: function () {
      this.uJ = this.Si = 0;
      this.pB = 25;
    },
    step: function () {
      switch (this.Si) {
        case 0:
          -1 != this.app.Vr
            ? this.context.df(0, 0, this.app.nb, this.app.rb, this.app.Vr)
            : this.context.ww(0, 0, this.app.nb, this.app.rb);
          this.context.Dp(
            this.Bl,
            this.ao - this.Bl.width / 2,
            this.bo - this.Bl.height / 2,
            this.Bl.width,
            this.Bl.height,
            0,
            0,
          );
          this.Si++;
          break;
        case 1:
          this.angle = (this.app.ln / this.app.mn) * 2 * Math.PI;
          this.qt(this.angle);
          this.app.ln == this.app.mn && this.Si++;
          break;
        case 2:
          0 < this.pB && this.pB--;
          0 == this.pB && this.Si++;
          break;
        case 3:
          this.app.jH(this) && this.Si++;
      }
    },
    aI: function () {
      return 4 == this.Si;
    },
    qt: function (a) {
      var b, c, d, e, f;
      for (b = this.uJ; b <= a; b += 0.005) {
        c = this.ao + Math.cos(b) * (this.fh - this.size);
        d = this.bo - Math.sin(b) * (this.fh - this.size);
        e = this.ao + Math.cos(b) * this.fh;
        f = this.bo - Math.sin(b) * this.fh;
        this.context.cf(c, d, e, f, this.color, 1, 0, 0);
        var h;
        for (h = 0; 3 > h; h++)
          (c = this.ao + Math.cos(b) * (this.fh - this.size - h)),
            (d = this.bo - Math.sin(b) * (this.fh - this.size - h)),
            (e = this.ao + Math.cos(b) * (this.fh - this.size - h - 1)),
            (f = this.bo - Math.sin(b) * (this.fh - this.size - h - 1)),
            this.context.cf(c, d, e, f, this.color, 1, 0, 0),
            (c = this.ao + Math.cos(b) * (this.fh + h)),
            (d = this.bo - Math.sin(b) * (this.fh + h)),
            (e = this.ao + Math.cos(b) * (this.fh + h + 1)),
            (f = this.bo - Math.sin(b) * (this.fh + h + 1)),
            this.context.cf(c, d, e, f, this.color, 1, 0, 0);
      }
      this.uJ = a;
    },
  };
  Ad.prototype = {
    load: function () {
      return !0;
    },
    reset: function () {
      this.gD = !1;
      this.Si = 0;
      this.alpha = 128;
      this.position = 0;
    },
    step: function () {
      if (this.app.ln < this.app.mn)
        switch (this.Si) {
          case 0:
            0 < this.alpha &&
              ((this.alpha -= 2),
              0 >= this.alpha && ((this.alpha = 0), this.Si++));
        }
      else
        switch (this.Si) {
          case 0:
          case 1:
            this.Si = 2;
            break;
          case 2:
            128 > this.alpha && (this.alpha += 4);
            128 <= this.alpha &&
              ((this.alpha = 128),
              null == this.app.ti ? (this.gD = !0) : this.Si++);
            break;
          default:
            this.gD = this.app.jH(this);
            return;
        }
      this.context.df(
        this.rect.left,
        this.rect.top,
        this.width,
        this.height,
        this.Q0,
        R.Wi,
        this.alpha,
      );
      this.context.yy(
        this.rect.left,
        this.rect.top,
        this.width,
        this.height,
        this.borderColor,
        1,
        R.Wi,
        this.alpha,
      );
      this.position = (this.app.ln / this.app.mn) * (this.width - 2);
      this.context.df(
        this.rect.left + 1,
        this.rect.top + 1,
        this.position,
        this.height - 2,
        this.R0,
        R.Wi,
        this.alpha,
      );
    },
    aI: function () {
      return this.gD && this.app.ln == this.app.mn;
    },
  };
  Bd.prototype = {
    load: function () {
      this.step();
      return !this.S.Dl;
    },
    reset: function () {
      this.S.ba.kP();
      this.S.ba.gI();
      this.S.ba.iE(!1);
      this.S.ba.su(-1, !1);
      this.S.ba.s.bE();
      this.S.ba.HB();
      this.S.ba.EH();
      this.S.ba.O.ep = this.S.ba.O.iI = this.S.ba.xu = 0;
      this.S.ba.O.fp = this.S.ba.O.jI = this.S.ba.yu = 0;
      this.S.ES();
      this.S.ba.ZF();
      this.S.ba.WH();
      this.S.ba.su(-1, !1);
      this.S.ba.GJ();
      this.S.ba.$G(!1);
      this.S.ba.kH();
      this.S.ba.oI();
      this.S.ba.s.HJ();
      this.S.ba.s.PA(this.S.ba);
      this.S.ba.wH();
      this.S.ba.iB();
      this.S.ba.md = 0;
      this.S.ba.Fy = 0;
      this.S.Su = !1;
      this.app.Vc.push(this.S);
      this.ot = 0;
    },
    step: function () {
      this.S.Su ||
        (this.n6 && (this.S.Su = this.app.ln == this.app.mn),
        0 == this.S.Wy() && (this.S.Su = !0),
        this.S.PO(this.context, this.mf.x, this.mf.y, !1));
      this.S.Su && this.app.ti && this.app.jH(this);
    },
    aI: function () {
      var a = this.S.Su;
      if (a) {
        if (0 < this.ot && (this.ot--, 0 < this.ot)) return !1;
        this.S.ba.md = t.Pz;
        0 !== this.S.ba.xB() &&
          this.S.context.ww(0, 0, this.S.canvas.width, this.S.canvas.height);
        this.S.tH();
        var b;
        for (b = 0; b < this.app.Vc.length; b++)
          if (this.app.Vc[b] == this.S) {
            this.app.Vc.splice(b, 1);
            break;
          }
      }
      return a;
    },
  };
  I.Nb = 0;
  I.Af = 1;
  I.Bf = 2;
  I.hM = -1;
  I.ng = 3;
  I.qo = 1;
  I.fl = 2;
  I.gl = 4;
  I.dM = 8;
  I.po = 16;
  I.M8 = 2147483648;
  I.NY = 70;
  I.xW = 0.25;
  I.prototype = {
    mQ: function () {
      null == this.wd &&
        ((this.wd = qa.Yf(this.app, "joyback.png")),
        (this.aC = qa.Yf(this.app, "joyfront.png")));
      null == this.It &&
        0 != (this.app.frame.ap & V.VE) &&
        ((this.It = qa.Yf(this.app, "joyup.png")),
        (this.fQ = qa.Yf(this.app, "joyupd.png")),
        (this.mx = qa.Yf(this.app, "joydown.png")),
        (this.cQ = qa.Yf(this.app, "joydownd.png")),
        (this.kr = qa.Yf(this.app, "joyleft.png")),
        (this.dQ = qa.Yf(this.app, "joyleftd.png")),
        (this.fI = qa.Yf(this.app, "joyright.png")),
        (this.eQ = qa.Yf(this.app, "joyrightd.png")));
      null == this.tg &&
        ((this.tg = qa.Yf(this.app, "fire1U.png")),
        (this.zh = qa.Yf(this.app, "fire2U.png")),
        (this.qP = qa.Yf(this.app, "fire1D.png")),
        (this.rP = qa.Yf(this.app, "fire2D.png")));
    },
    reset: function (a) {
      this.Ja = a;
      null != this.wd && 0 != this.wd.width ? this.mT() : (this.HG = !0);
      this.Cl = (I.NY * Math.PI) / 180;
    },
    mT: function () {
      var a, b;
      a = this.app.nb;
      b = this.app.rb;
      this.nx =
        0 != (this.Ja & I.po)
          ? Math.ceil(
              Math.sqrt(
                this.kr.width * this.kr.width + this.It.height * this.It.height,
              ),
            )
          : Math.ceil(
              Math.sqrt(
                ((this.wd.width / 2) * this.wd.width) / 2 +
                  ((this.wd.height / 2) * this.wd.height) / 2,
              ),
            );
      this.gQ = I.xW * this.nx;
      0 == (this.Ja & I.dM)
        ? (0 != (this.Ja & I.qo) &&
            (0 != (this.Ja & I.po)
              ? ((this.Cc[I.Nb] = 16 + this.kr.width),
                (this.Dc[I.Nb] = b - 16 - this.mx.height))
              : ((this.Cc[I.Nb] = 16 + this.wd.width / 2),
                (this.Dc[I.Nb] = b - 16 - this.wd.height / 2))),
          0 != (this.Ja & I.fl) && 0 != (this.Ja & I.gl)
            ? ((this.Cc[I.Af] = a - this.tg.width / 2 - 32),
              (this.Dc[I.Af] = b - this.tg.height / 2 - 16),
              (this.Cc[I.Bf] = a - this.zh.width / 2 - 16),
              (this.Dc[I.Bf] = b - this.zh.height / 2 - this.tg.height - 24))
            : 0 != (this.Ja & I.fl)
              ? ((this.Cc[I.Af] = a - this.tg.width / 2 - 16),
                (this.Dc[I.Af] = b - this.tg.height / 2 - 16))
              : 0 != (this.Ja & I.gl) &&
                ((this.Cc[I.Bf] = a - this.zh.width / 2 - 16),
                (this.Dc[I.Bf] = b - this.zh.height / 2 - 16)))
        : (0 != (this.Ja & I.qo) &&
            (0 != (this.Ja & I.po)
              ? ((this.Cc[I.Nb] = a - 16 - this.kr.width),
                (this.Dc[I.Nb] = b - 16 - this.mx.height))
              : ((this.Cc[I.Nb] = a - 16 - this.wd.width / 2),
                (this.Dc[I.Nb] = b - 16 - this.wd.height / 2))),
          0 != (this.Ja & I.fl) && 0 != (this.Ja & I.gl)
            ? ((this.Cc[I.Af] =
                this.tg.width / 2 + 16 + (2 * this.zh.width) / 3),
              (this.Dc[I.Af] = b - this.tg.height / 2 - 16),
              (this.Cc[I.Bf] = this.zh.width / 2 + 16),
              (this.Dc[I.Bf] = b - this.zh.height / 2 - this.tg.height - 24))
            : 0 != (this.Ja & I.fl)
              ? ((this.Cc[I.Af] = this.tg.width / 2 + 16),
                (this.Dc[I.Af] = b - this.tg.height / 2 - 16))
              : 0 != (this.Ja & I.gl) &&
                ((this.Cc[I.Bf] = this.zh.width / 2 + 16),
                (this.Dc[I.Bf] = b - this.zh.height / 2 - 16)));
    },
    Cd: function (a, b) {
      0 != (a & I.qo)
        ? (this.Cc[I.Nb] = b)
        : 0 != (a & I.fl)
          ? (this.Cc[I.Af] = b)
          : 0 != (a & I.gl) && (this.Cc[I.Bf] = b);
    },
    Dd: function (a, b) {
      0 != (a & I.qo)
        ? (this.Dc[I.Nb] = b)
        : 0 != (a & I.fl)
          ? (this.Dc[I.Af] = b)
          : 0 != (a & I.gl) && (this.Dc[I.Bf] = b);
    },
    Zc: function (a) {
      this.HG && ((this.HG = !1), this.mT());
      var b, c;
      if (0 != (this.Ja & I.qo))
        if (0 != (this.Ja & I.po)) {
          var d = this.jb & 1 ? this.fQ : this.It;
          b = this.Cc[I.Nb] - d.width / 2;
          c = this.Dc[I.Nb] - d.height;
          a.Hg(d, b, c, 0, 1, 1, 0, 0);
          d = this.jb & 2 ? this.cQ : this.mx;
          b = this.Cc[I.Nb] - d.width / 2;
          c = this.Dc[I.Nb];
          a.Hg(d, b, c, 0, 1, 1, 0, 0);
          d = this.jb & 4 ? this.dQ : this.kr;
          b = this.Cc[I.Nb] - d.width;
          c = this.Dc[I.Nb] - d.height / 2;
          a.Hg(d, b, c, 0, 1, 1, 0, 0);
          d = this.jb & 8 ? this.eQ : this.fI;
          b = this.Cc[I.Nb];
          c = this.Dc[I.Nb] - d.height / 2;
          a.Hg(d, b, c, 0, 1, 1, 0, 0);
        } else
          (b = this.Cc[I.Nb] - this.wd.width / 2),
            (c = this.Dc[I.Nb] - this.wd.height / 2),
            a.Hg(this.wd, b, c, 0, 1, 1, 0, 0),
            (b = this.Cc[I.Nb] + this.yk - this.aC.width / 2),
            (c = this.Dc[I.Nb] + this.zk - this.aC.height / 2),
            a.Hg(this.aC, b, c, 0, 1, 1, 0, 0);
      0 != (this.Ja & I.fl) &&
        ((d = 0 == (this.jb & 16) ? this.tg : this.qP),
        (b = this.Cc[I.Af] - d.width / 2),
        (c = this.Dc[I.Af] - d.height / 2),
        a.Hg(d, b, c, 0, 1, 1, 0, 0));
      0 != (this.Ja & I.gl) &&
        ((d = 0 == (this.jb & 32) ? this.zh : this.rP),
        (b = this.Cc[I.Bf] - d.width / 2),
        (c = this.Dc[I.Bf] - d.height / 2),
        a.Hg(d, b, c, 0, 1, 1, 0, 0));
    },
    QT: function (a, b) {
      this.yk = a - this.Cc[I.Nb];
      this.zk = b - this.Dc[I.Nb];
      0 == (this.Ja & I.po) &&
        (this.yk < -this.wd.width / 4 && (this.yk = -this.wd.width / 4),
        this.yk > this.wd.width / 4 && (this.yk = this.wd.width / 4),
        this.zk < -this.wd.height / 4 && (this.zk = -this.wd.height / 4),
        this.zk > this.wd.height / 4 && (this.zk = this.wd.height / 4));
      var c = (2 * Math.PI - Math.atan2(this.zk, this.yk)) % (2 * Math.PI);
      this.jb &= 240;
      var d = Math.sqrt(this.yk * this.yk + this.zk * this.zk);
      if (d > this.gQ && d <= this.nx) {
        this.yk = (Math.cos(c) * this.nx) / 2;
        this.zk = (Math.sin(c) * -this.nx) / 2;
        d = 0;
        if (0 <= c)
          for (;;) {
            if (this.nn(c, 0, this.Cl) || this.nn(c, 2 * Math.PI, this.Cl)) {
              d = 8;
              break;
            }
            if (this.nn(c, Math.PI / 2, this.Cl)) {
              d = 1;
              break;
            }
            if (this.nn(c, Math.PI, this.Cl)) {
              d = 4;
              break;
            }
            if (this.nn(c, (Math.PI / 4) * 6, this.Cl)) {
              d = 2;
              break;
            }
            if (this.nn(c, Math.PI / 4, Math.PI / 2 - this.Cl)) {
              d = 9;
              break;
            }
            if (this.nn(c, (Math.PI / 4) * 3, Math.PI / 2 - this.Cl)) {
              d = 5;
              break;
            }
            if (this.nn(c, (Math.PI / 4) * 5, Math.PI / 2 - this.Cl)) {
              d = 6;
              break;
            }
            if (this.nn(c, (Math.PI / 4) * 7, Math.PI / 2 - this.Cl)) {
              d = 10;
              break;
            }
            break;
          }
        this.jb |= d;
      }
    },
    x6: function (a) {
      var b = !1,
        c = this.app.bx(a),
        d = this.app.cx(a),
        e = this.getKey(c, d);
      e != I.hM &&
        ((this.touches[e] = a.identifier),
        e == I.Nb &&
          ((this.jb &= 240), (b = !0), 0 != (this.Ja & I.po) && this.QT(c, d)),
        e == I.Af
          ? ((this.jb |= 16), (b = !0))
          : e == I.Bf && ((this.jb |= 32), (b = !0)));
      return b;
    },
    LT: function (a) {
      var b = this.app.bx(a),
        c = this.app.cx(a);
      this.getKey(b, c) == I.Nb && (this.touches[I.Nb] = a.identifier);
      this.touches[I.Nb] == a.identifier && this.QT(b, c);
    },
    nn: function (a, b, c) {
      return a > b - c / 2 && a < b + c / 2;
    },
    JT: function (a) {
      var b;
      for (b = 0; b < I.ng; b++)
        if (this.touches[b] == a.identifier) {
          this.touches[b] = 0;
          switch (b) {
            case I.Nb:
              this.zk = this.yk = 0;
              this.jb &= 240;
              break;
            case I.Af:
              this.jb &= -17;
              break;
            case I.Bf:
              this.jb &= -33;
          }
          break;
        }
    },
    getKey: function (a, b) {
      if (0 != (this.Ja & I.qo))
        if (0 != (this.Ja & I.po)) {
          if (
            a >= this.Cc[I.Nb] - this.kr.width &&
            a < this.Cc[I.Nb] + this.fI.width &&
            b > this.Dc[I.Nb] - this.It.height &&
            b < this.Dc[I.Nb] + this.mx.height
          )
            return I.Nb;
        } else if (
          a >= this.Cc[I.Nb] - this.wd.width / 2 &&
          a < this.Cc[I.Nb] + this.wd.width / 2 &&
          b > this.Dc[I.Nb] - this.wd.height / 2 &&
          b < this.Dc[I.Nb] + this.wd.height / 2
        )
          return I.Nb;
      return 0 != (this.Ja & I.fl) &&
        a >= this.Cc[I.Af] - this.tg.width / 2 &&
        a < this.Cc[I.Af] + this.tg.width / 2 &&
        b > this.Dc[I.Af] - this.tg.height / 2 &&
        b < this.Dc[I.Af] + this.tg.height / 2
        ? I.Af
        : 0 != (this.Ja & I.gl) &&
            a >= this.Cc[I.Bf] - this.zh.width / 2 &&
            a < this.Cc[I.Bf] + this.zh.width / 2 &&
            b > this.Dc[I.Bf] - this.zh.height / 2 &&
            b < this.Dc[I.Bf] + this.zh.height / 2
          ? I.Bf
          : I.hM;
    },
    Zw: function () {
      return this.jb;
    },
  };
  t.k8 = 2;
  t.PX = 4;
  t.qv = 16;
  t.QX = 32;
  t.SX = 64;
  t.RX = 128;
  t.PE = 512;
  t.T7 = 2;
  t.V7 = 4;
  t.X7 = 8;
  t.U7 = 16;
  t.S7 = 32;
  t.Y7 = 64;
  t.W7 = 128;
  t.Z7 = 256;
  t.UL = 480;
  t.VL = 300;
  t.fv = 64;
  t.gv = 16;
  t.gaa = 1;
  t.iaa = 2;
  t.haa = 4;
  t.p_ = 1;
  t.m$ = 2;
  t.l$ = 4;
  t.n$ = 8;
  t.FM = 0;
  t.wo = 1;
  t.Bi = 2;
  t.yF = 3;
  t.qZ = 4;
  t.$V = 1;
  t.ev = 2;
  t.CL = 4;
  t.BL = 8;
  t.Qz = 10;
  t.dF = 1;
  t.eF = 2;
  t.bF = 3;
  t.cF = 4;
  t.T8 = 5;
  t.U8 = 6;
  t.R8 = 7;
  t.V8 = 8;
  t.S8 = 9;
  t.Pz = -2;
  t.WY = 100;
  t.kM = 101;
  t.Vj = 1;
  t.Wj = 2;
  t.Xj = 4;
  t.Uj = 8;
  t.GV = 15;
  t.gF = 128;
  t.$j = 2147483647;
  t.ov = 1110591041;
  t.Rv = 1110594637;
  t.BZ = 1110600435;
  t.yv = 1110874198;
  t.Ms = 1110634490;
  t.Xp = 1110590791;
  var bf = !1;
  t.B4 = [
    0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 0, 0, 255, 255, 255, 0, 255, 255, 255,
    255,
  ];
  t.jN = [
    0,
    t.Vj,
    t.Wj,
    0,
    t.Xj,
    t.Xj + t.Vj,
    t.Xj + t.Wj,
    0,
    t.Uj,
    t.Uj + t.Vj,
    t.Uj + t.Wj,
    0,
    0,
    0,
    0,
    0,
  ];
  t.DN = !1;
  t.Rq = function (a, b, c) {
    switch (c) {
      case 0:
        return a == b;
      case 1:
        return a != b;
      case 2:
        return a <= b;
      case 3:
        return a < b;
      case 4:
        return a >= b;
      case 5:
        return a > b;
    }
    return !1;
  };
  t.a1 = function (a, b, c) {
    switch (c) {
      case 0:
        return a == b;
      case 1:
        return a != b;
      case 2:
        return a <= b;
      case 3:
        return a < b;
      case 4:
        return a >= b;
      case 5:
        return a > b;
    }
    return !1;
  };
  t.xba = function (a) {
    a = a.eb >= F.hl ? a.ext.KP() : a.uk();
    null == a && (a = new rb());
    return a;
  };
  t.Ica = function (a, b, c) {
    a.eb >= F.hl ? a.ext.nT(b, c) : a.ls(b, c);
  };
  t.zba = function (a) {
    return a.eb >= F.hl ? 0 : a.IB();
  };
  t.Jca = function (a, b) {
    a.eb >= F.hl || a.RD(b);
  };
  t.j4 = function (a) {
    null != a.Z && (a.Z.eJ(), (a.Z.Ha |= R.Pm), (a.Z.ID = 0));
  };
  t.i4 = function (a) {
    null != a.Z && (a.Z.MC(), (a.Z.Ha &= ~R.Pm), (a.Z.ID = 0));
  };
  t.Cd = function (a, b) {
    null != a.H
      ? a.H.oa.Cd(b)
      : a.w != b && ((a.w = b), null != a.b && ((a.b.ka = !0), (a.b.jc = !0)));
  };
  t.Dd = function (a, b) {
    null != a.H
      ? a.H.oa.Dd(b)
      : a.A != b && ((a.A = b), null != a.b && ((a.b.ka = !0), (a.b.jc = !0)));
  };
  t.Eba = function (a, b) {
    if (0 == a) return 0 <= b ? 24 : 8;
    if (0 == b) return 0 <= a ? 0 : 16;
    var c,
      d = !1,
      e = !1;
    0 > a && ((d = !0), (a = -a));
    0 > b && ((e = !0), (b = -b));
    c = (256 * a) / b;
    var f;
    for (f = 0; !(c >= ca.ts[f]); f += 2);
    c = ca.ts[f + 1];
    e && (c = (-c + 32) & 31);
    d && (c = ((-((c - 8) & 31) & 31) + 8) & 31);
    return c;
  };
  t.prototype = {
    X5: function (a) {
      this.O = a;
    },
    ZF: function () {
      this.X = Array(this.O.Xl);
      this.s = this.O.Pw;
      this.Nj = 0;
      var a;
      for (a = this.m.Sd.CP(); null != a; a = this.m.Sd.FP())
        a.ni >= F.Ed && this.Nj++;
      this.kK = -1 == this.O.EC ? this.m.Lg & 65535 : this.O.EC;
      this.es = Array(Math.round(this.O.Xl / 32 + 1));
      this.om = new W();
      this.nm = "";
      this.pm = this.O.Xl;
      this.qK = this.s.JR;
      this.O.ep = 0;
      this.O.fp = 0;
      this.za = this.O.ep;
      this.Ea = this.O.fp;
      this.ED = this.DD = 0;
      this.Se = this.O.cC.right;
      -1 == this.Se && (this.Se = 2147479552);
      this.Te = this.O.cC.bottom;
      -1 == this.Te && (this.Te = 2147479552);
      this.rK = this.md = this.Xb = 0;
      this.wf &= t.RX;
      this.wf |= t.PX;
      this.Iu = 0;
      this.AD = Array(t.Qz);
      this.hg = null;
      this.wf |= t.SX;
      this.Kb = Array(t.gF);
      this.Ju = Array(t.gF);
      this.BD = new Sa();
      this.BD.code = 0;
      this.tD = Array(4);
      this.jK = Array(4);
      this.sD = Array(4);
      this.xf = Array(4);
      for (a = this.pe = 0; a < t.Qz; a++) this.AD[a] = 50;
      this.MG = this.hD = !1;
      this.O.MS = !0;
    },
    EH: function () {
      this.O.MS = !1;
      this.hg = this.om = this.nm = this.es = this.ya = this.X = null;
      var a;
      for (a = 0; a < t.gF; a++) this.Kb[a] = 0;
      this.BD = null;
    },
    L2: function (a) {
      this.ZF();
      this.m.pn = 0;
      if (null == this.m.yb && this.m.ZD)
        if (this.O.jb == V.KY)
          null == this.m.jb && ((this.m.jb = new I(this.m)), this.m.jb.mQ()),
            this.m.jb.reset(0),
            this.m.DT();
        else if (this.O.jb != V.LY) {
          var b = 0;
          0 != (this.O.ap & V.EY) && (b = I.fl);
          0 != (this.O.ap & V.FY) && (b |= I.gl);
          0 != (this.O.ap & V.GY) && (b |= I.dM);
          0 != (this.O.ap & V.VE) && (b |= I.po);
          this.O.jb == V.MY && (b |= I.qo);
          0 != (b & (I.fl | I.gl | I.qo)) && (this.m.DT(b), this.m.jb.reset(b));
          this.O.jb == V.JY && this.m.i6();
        }
      this.oK = 255;
      a && (this.wf |= t.qv);
      this.WH();
      this.su(-1, !1);
      this.GJ();
      this.Ee = 0;
      this.$G(a);
      this.kH();
      this.D2();
      this.oI();
      this.s.HJ();
      this.s.PA(this);
      this.xT();
      this.Fy = 0;
      this.wH();
      this.MG = !1;
    },
    xB: function () {
      if (0 < this.Uk && null == this.m.Gk)
        this.hD &&
          (1 == this.m.lr &&
            (0 <= this.CD
              ? this.m.Jf[this.CD] &&
                (this.resume(), (this.md = 0), this.s.bi(-458755))
              : this.m.lr &&
                (this.resume(), (this.md = 0), this.s.bi(-458755))),
          (this.m.lr = !1)),
          null != this.fD && this.fD.z2(),
          (a = this.md);
      else {
        this.m.bG |= q.YK;
        var a = this.X1();
        this.m.bG &= ~q.YK;
        0 != (this.wf & t.qv) &&
          ((this.lP = new Date().getTime() - this.fs),
          this.iE(!0),
          this.s.bE());
      }
      if (a == t.dF || a == t.eF || a == t.bF) {
        this.m.$k = document.createElement("canvas");
        this.m.$k.width = this.m.nb;
        this.m.$k.height = this.m.rb;
        var b = new eb(this.m.$k);
        this.m.frame.bC
          ? b.ww(0, 0, this.nb, this.rb)
          : b.df(0, 0, this.nb, this.rb, this.vl);
        b.df(0, 0, this.m.nb, this.m.rb, this.m.vl);
        this.m.ii.Zc(b, 0, 0);
      }
      if (0 != a)
        switch (a) {
          case 5:
            this.pause();
            this.m.lr = !1;
            this.hD = !0;
            a = 0;
            break;
          case 101:
            if (this.O.fba) break;
            this.kP();
            this.gI();
            this.iE(!1);
            this.su(-1, !1);
            this.s.bE();
            this.HB();
            this.EH();
            this.O.ep = this.O.iI = this.xu = 0;
            this.O.fp = this.O.jI = this.yu = 0;
            this.m.ES();
            this.ZF();
            this.WH();
            this.su(-1, !1);
            this.GJ();
            this.$G(!1);
            this.kH();
            this.oI();
            this.s.HJ();
            this.s.PA(this);
            this.wH();
            this.xT();
            this.Fy = a = 0;
            break;
          case 100:
          case -2:
            this.s.bi(-196611);
        }
      return (this.md = a);
    },
    d3: function (a) {
      var b;
      100 < this.md && (this.md = t.Pz);
      b = this.Fy;
      this.N5();
      this.gI();
      this.iE(a);
      this.s.bE();
      this.EH();
      this.HB();
      this.su(-1, !0);
      this.m.J1();
      return u.YY(this.md, b);
    },
    WH: function () {
      var a;
      for (a = 0; a < this.pm; a++) this.X[a] = null;
    },
    GJ: function () {
      var a, b;
      this.wf |= t.QX;
      this.wf |= t.PE;
      var c = (this.Ay = 0);
      this.ya = Array(this.Nj);
      this.pi = 0;
      for (a = this.m.Sd.CP(); null != a; a = this.m.Sd.FP())
        if (((b = a.ni), b >= F.Ed)) {
          this.ya[c] = new ga();
          this.ya[c].l1(a);
          this.ya[c].sJ = c;
          this.ya[c].jy = -1;
          if (b == F.Om || b == F.DM)
            for (a = this.O.mg.FB(); null != a; a = this.O.mg.by())
              if (a.mj == this.ya[c].Nf) {
                this.ya[c].jy = a.gp;
                break;
              }
          c++;
        }
      this.s.G4(this.ya);
      for (c = 0; c < this.O.Oe; c++) this.O.ic[c].cJ = 1;
      return 0;
    },
    rO: function () {
      var a, b, c, d, e;
      this.wf &= ~t.qv;
      c = 0;
      for (e = this.O.mg.FB(); null != e; c++, e = this.O.mg.by())
        if (
          ((a = this.m.Sd.gn(e.mj)),
          (b = a.Kd),
          (a = a.ni),
          !(a < F.hl) && 0 == (b.$l & J.JM) && ((d = t.BL), e.nI == Xa.LM))
        ) {
          if (0 == (b.rp & J.lA)) {
            if (a != F.Om) continue;
            d |= t.ev;
          }
          0 == (b.$l & J.GM) &&
            this.vH(e.gp, e.mj, 2147483648, 2147483648, -1, d, -1, -1);
        }
      this.s.PA(this);
      this.fs = new Date().getTime() - this.lP;
    },
    $G: function (a) {
      var b, c, d, e, f;
      d = 0;
      for (f = this.O.mg.FB(); null != f; d++, f = this.O.mg.by())
        if (
          ((b = this.m.Sd.gn(f.mj)),
          (c = b.Kd),
          (b = b.ni),
          (e = t.BL),
          f.nI == Xa.LM)
        ) {
          b == F.Om && (e |= t.CL);
          if (0 == (c.rp & J.lA)) {
            if (b == F.DM) continue;
            e |= t.ev;
          }
          (a && b >= F.hl && 0 == (c.$l & J.JM)) ||
            (0 == (c.$l & J.GM) &&
              this.vH(f.gp, f.mj, 2147483648, 2147483648, -1, e, -1, -1));
        }
      this.wf &= ~t.PE;
    },
    gI: function () {
      var a;
      for (a = 0; a < this.pm && 0 != this.Xb; a++)
        if (null != this.X[a]) {
          var b = this.X[a];
          (32 > b.eb || b.ha.hd != t.Xp) && this.EB(a, !0);
        }
      for (a = 0; a < this.pm && 0 != this.Xb; a++)
        null != this.X[a] &&
          ((b = this.X[a]), 32 <= b.eb && b.ha.hd == t.Xp && this.EB(a, !0));
    },
    iE: function (a) {
      a || (0 == (this.m.Xw & q.VX) ? this.m.hf.GK() : this.m.hf.b3());
    },
    su: function (a, b) {
      var c, d;
      d = -1 == a ? this.O.Oe : a + 1;
      for (c = 0; c < d; c++) {
        var e = this.O.ic[c];
        e.reset();
        e.y1();
        b && e.DO();
      }
    },
    iB: function () {
      0 != this.pi && this.jT(-1);
    },
    HB: function () {
      0 != this.pi && this.jT(0);
    },
    IO: function (a) {
      var b = 0,
        c,
        d = 0;
      for (c = 0; c < this.Xb; c++) {
        for (; null == this.X[d]; ) d++;
        var e = this.X[d];
        d++;
        e != a &&
          e.ib & J.$i &&
          ((e = e.ha.bh.vf[e.H.hs]), e.Ux == ia.uF && (b |= 1 << (e.Jr - 1)));
      }
      b != this.pi &&
        (0 != this.pi && this.HB(), (this.pi = b), 0 != this.pi && this.iB());
    },
    r4: function (a) {
      var b = this.pi;
      a.ib & J.$i &&
        ((a = a.ha.bh.vf[a.H.hs]),
        a.Ux == ia.uF && ((this.pi |= 1 << (a.Jr - 1)), 0 == b && this.iB()));
    },
    jT: function (a) {
      0 <= a ? this.m.zK(1) : this.m.zK(-1);
    },
    xT: function () {
      this.m.zK(1);
    },
    KA: function (a) {
      var b, c;
      for (
        c = 0;
        c < this.om.size() && ((b = this.om.get(c)), !u.he(b.name, a));
        c++
      );
      c == this.om.size() &&
        ((b = new ib()),
        this.om.add(b),
        (c = this.om.size() - 1),
        (b.name = a),
        (b.Ja = 0));
      return c;
    },
    N5: function () {
      var a, b, c, d, e, f;
      for (c = 0; c < this.ya.length; c++)
        if (
          ((b = this.ya[c]),
          (f = b.Jc),
          32767 != b.Nf &&
            0 == (f & 2147483648) &&
            ((d = this.m.Sd.gn(b.Nf)),
            0 != (d.In & F.KM) &&
              ((a = this.X[f]), b.fg == F.Om || b.fg == F.Ev || null != a.cb)))
        ) {
          e = b.Or + b.fg.toString();
          null == this.m.Fo && (this.m.Fo = new W());
          var h = !1;
          d = null;
          for (a = 0; a < this.m.Fo.size(); a++)
            if (((d = this.m.Fo.get(a)), e == d.name)) {
              h = !0;
              break;
            }
          0 == h
            ? ((d = new kf()), (d.name = e), (d.Be = new W()), this.m.Fo.add(d))
            : d.Be.clear();
          for (;;) {
            a = this.X[f];
            if (b.fg == F.Om)
              (f = new mf()), (f.text = a.Mu), (f.bd = a.bd), d.Be.add(f);
            else if (b.fg == F.Ev)
              (f = new lf()),
                (f.value = a.zb),
                (f.bd = a.bd),
                (f.yf = a.yf),
                (f.LD = a.LD),
                (f.KD = a.KD),
                d.Be.add(f);
            else {
              e = new nf();
              e.Ja = a.cb.Ky;
              e.values = Array(a.cb.ge.length);
              for (f = 0; f < a.cb.ge.length; f++) e.values[f] = a.cb.ge[f];
              e.um = Array(a.cb.hh.length);
              for (f = 0; f < a.cb.hh.length; f++) e.um[f] = a.cb.hh[f];
              d.Be.add(e);
            }
            f = a.Zd;
            if (0 != (f & 2147483648)) break;
          }
        }
    },
    oI: function () {
      var a, b, c, d, e, f;
      if (null != this.m.Fo)
        for (c = 0; c < this.ya.length; c++)
          if (
            ((b = this.ya[c]),
            (a = b.Jc),
            32767 != b.Nf &&
              0 <= a &&
              ((e = this.m.Sd.gn(b.Nf)), 0 != (e.In & F.KM)))
          )
            for (f = b.Or + b.fg.toString(), d = 0; d < this.m.Fo.size(); d++)
              if (((e = this.m.Fo.get(d)), f == e.name)) {
                for (d = 0; ; ) {
                  a = this.X[a];
                  if (b.fg == F.Om)
                    (f = e.Be.get(d)),
                      (a.Mu = f.text),
                      (a.bd = f.bd),
                      (a.b.ka = !0),
                      (a.xaa = !0);
                  else if (b.fg == F.Ev)
                    (f = e.Be.get(d)),
                      (a.zb = f.value),
                      (a.bd = f.bd),
                      (a.yf = f.yf),
                      (a.LD = f.LD),
                      (a.KD = f.KD),
                      (a.vaa = !0),
                      (a.b.ka = !0);
                  else {
                    f = e.Be.get(d);
                    a.cb.Ky = f.Ja;
                    a.cb.OB(f.values.length);
                    a.cb.x2(f.um.length);
                    var h;
                    for (h = 0; h < f.values.length; h++)
                      a.cb.ge[h] = f.values[h];
                    for (h = 0; h < f.um.length; h++) a.cb.hh[h] = f.um[h];
                  }
                  a = a.Zd;
                  if (0 != (a & 2147483648)) break;
                  d++;
                  if (d >= e.Be.size()) break;
                }
                break;
              }
    },
    vH: function (a, b, c, d, e, f, h, k) {
      for (;;) {
        var g = new Cd(),
          n = null;
        -1 != a && (n = this.O.mg.m2(a));
        var m = this.m.Sd.gn(b),
          v = m.Kd;
        0 == (v.rp & J.lA) && (f |= t.ev);
        if (this.Xb >= this.pm) break;
        var A = null,
          l = new aa();
        switch (m.ni) {
          case 2:
            A = new Qd();
            break;
          case 3:
            A = new Ud();
            break;
          case 4:
            A = new Vd();
            break;
          case 5:
            A = new Sd();
            break;
          case 6:
            A = new Td();
            break;
          case 7:
            A = new za();
            break;
          case 8:
            break;
          case 9:
            A = new ha();
            break;
          default:
            (A = new Wd(m.ni, this)), null == A.ext && (A = null);
        }
        if (null == A) break;
        A.prototype = l;
        A.n3 = n;
        if (0 > k) for (k = 0; k < this.pm && null != this.X[k]; k++);
        if (k >= this.pm) break;
        this.X[k] = A;
        this.Xb++;
        A.E2 = v.hd;
        A.ib = v.$l;
        k > this.IS && this.mK++;
        A.Nc = k;
        this.Ay++;
        0 == this.Ay && (this.Ay = 1);
        A.Zo = this.Ay;
        A.Bc = b;
        A.fx = a;
        A.eb = m.ni;
        this.m4(A);
        A.c = this;
        A.ex = !0;
        A.ha = v;
        a = A.vd;
        if (null != a.Aj)
          for (m = a.sJ, l = 0; l < a.Aj.length; l++) {
            var P = a.Aj[l],
              p = !1,
              M,
              L = this.s.gg[P],
              w = L.ja.length;
            for (M = 0; M < w; M += 2) {
              if (0 > L.ja[M + 1]) {
                w = M;
                break;
              }
              if (L.ja[M + 1] == m) {
                p = !0;
                break;
              }
            }
            if (!p) {
              P = this.s.Of[P];
              p = -1;
              for (M = 0; M < P.ja.length; M += 2)
                if (P.ja[M + 1] == m) {
                  p = M;
                  break;
                }
              if (0 <= p) {
                var B = !0;
                if (0 <= L.ja[0])
                  for (p += 2; B && p < P.ja.length; p += 2) {
                    var G = P.ja[p + 1];
                    for (M = 0; 0 <= L.ja[M + 1]; M += 2)
                      if (L.ja[M + 1] == G) {
                        for (B = w; B > M; B -= 2)
                          (L.ja[B] = L.ja[B - 2]), (L.ja[B + 1] = L.ja[B - 1]);
                        L.ja[M] = b;
                        L.ja[M + 1] = m;
                        B = !1;
                        break;
                      }
                  }
                B && ((L.ja[w] = b), (L.ja[w + 1] = m));
              }
            }
          }
        0 == (A.ib & J.HM) &&
          ((A.ib &= ~J.qq),
          0 != (A.jj & ga.nA) && 0 != (this.O.xd & V.iM) && (A.ib |= J.qq),
          0 != (A.jj & (ga.nh | ga.oA)) && (A.ib |= J.qq));
        b = c;
        2147483648 == b && (b = n.eC);
        g.bO = b;
        A.w = b;
        2147483648 == d && (d = n.fC);
        g.cO = d;
        A.A = d;
        null != n && -1 == h && (h = n.kQ);
        g.aO = h;
        A.ug = h;
        h = this.O.ic[h];
        h.cJ++;
        g.dO = h.cJ;
        g.mB = f;
        g.$N = e;
        g.Z0 = n;
        A.b = null;
        0 != (A.ib & (J.pq | J.$i | J.rq)) && ((A.b = new Rd()), A.b.Da());
        A.H = null;
        0 != (A.ib & J.$i) &&
          ((A.H = new fb()), 0 == (g.mB & t.$V) && A.H.Da(0, A, v, g, -1));
        A.Wa = null;
        0 != (A.ib & J.pq) && ((A.Wa = new jb()), A.Wa.Da(A));
        A.Z = null;
        0 != (A.ib & J.rq) && ((A.Z = new R()), A.Z.I2(A, v, g));
        A.cb = null;
        0 != (A.ib & J.wZ) && ((A.cb = new lb()), A.cb.Da(A, v, g));
        A.Da(v, g);
        0 != (A.ib & J.rq) && A.Z.VH(!0);
        1 <= this.Ee && A.Zm();
        return k;
      }
      return -1;
    },
    EB: function (a, b) {
      var c = this.X[a];
      if (null != c) {
        if (1 != b || 0 != c.Zo)
          this.e3(c),
            null != c.H && c.H.gd(b),
            null != c.cb && c.cb.gd(b),
            null != c.Z && c.Z.gd(b),
            null != c.b && c.b.gd(b),
            c.gd(b),
            this.l4(c);
        this.X[a] = null;
        this.Xb--;
      }
    },
    rl: function (a) {
      this.es[Math.floor(a / 32)] |= 1 << (a & 31);
      this.Dy++;
    },
    A1: function () {
      if (0 != this.Dy)
        for (var a = 0, b, c; a < this.pm; ) {
          b = this.es[a / 32];
          if (0 != b) {
            for (c = this.es[a / 32] = 0; 0 != b && 32 > c; c++) {
              if (0 != (b & 1)) {
                var d = this.X[a + c];
                if (
                  null != d &&
                  1 == d.vd.wp &&
                  (this.s.Gd(d, d.eb | -2162688), (d = d.vd), null != d.Aj)
                ) {
                  var e = d.sJ,
                    f;
                  for (f = 0; f < d.Aj.length; f++) {
                    var h,
                      k = this.s.gg[d.Aj[f]];
                    for (h = 0; h < k.ja.length && 0 <= k.ja[h]; h += 2)
                      if (k.ja[h + 1] == e) {
                        for (; h < k.ja.length - 2 && 0 <= k.ja[h]; h += 2)
                          (k.ja[h] = k.ja[h + 2]), (k.ja[h + 1] = k.ja[h + 3]);
                        h < k.ja.length && ((k.ja[h] = -1), (k.ja[h + 1] = -1));
                        break;
                      }
                  }
                }
                this.EB(a + c, !1);
                this.Dy--;
              }
              b >>= 1;
            }
            if (0 == this.Dy) break;
          }
          a += 32;
        }
    },
    e3: function (a) {
      var b = 0,
        c,
        d;
      if (0 != (a.wa & aa.bM))
        for (c = 0; c < this.Xb; c++) {
          for (; null == this.X[b]; ) b++;
          d = this.X[b];
          b++;
          null != d.H &&
            d.b.sd == ia.eZ &&
            ((d = d.H.oa), d.Gs == a && 1 == d.Uz && d.AT());
        }
    },
    Zm: function () {
      var a, b, c;
      for (c = a = 0; a < this.Xb; a++) {
        for (; null == this.X[c]; ) c++;
        c++;
      }
      for (c = a = 0; a < this.Xb; a++) {
        for (; null == this.X[c]; ) c++;
        b = this.X[c];
        c++;
        b.Zm();
      }
    },
    m4: function (a) {
      var b = a.Bc,
        c;
      for (c = 0; c < this.Nj && this.ya[c].Nf != b; c++);
      b = this.ya[c];
      0 != (b.Jc & 2147483648)
        ? ((b.Jc = a.Nc), (a.Al = c | 2147483648), (a.Zd = 2147483648))
        : ((c = this.X[b.Jc]),
          (a.Al = c.Al),
          (c.Al = a.Nc),
          (a.Zd = c.Nc),
          (b.Jc = a.Nc));
      a.RH = b.rJ;
      a.vd = b;
      a.jj = b.eh;
      -1 == a.fx ? (a.fx = b.jy) : -1 == b.jy && (b.jy = a.fx);
      b.wp += 1;
    },
    l4: function (a) {
      var b = a.vd;
      --b.wp;
      var c;
      0 == (a.Al & 2147483648)
        ? ((c = this.X[a.Al]),
          0 == (a.Zd & 2147483648)
            ? ((b = this.X[a.Zd]),
              null != c && (c.Zd = a.Zd),
              null != b && (b.Al = a.Al))
            : null != c && (c.Zd = 2147483648))
        : 0 == (a.Zd & 2147483648)
          ? ((c = this.X[a.Zd]), null != c && ((c.Al = a.Al), (b.Jc = c.Nc)))
          : (b.Jc = 2147483648);
    },
    wW: function () {
      var a = this.As();
      if (null != a) {
        var b = 0,
          c;
        for (c = 0; c < this.Xb; b++, c++) {
          for (; null == this.X[b]; ) b++;
          var d = this.X[b];
          32 <= d.eb &&
            (d.ha.hd == t.ov ||
            d.ha.hd == t.Rv ||
            d.ha.hd == t.BZ ||
            d.ha.hd == t.Ms ||
            d.ha.hd == t.yv
              ? d.ext.VJ()
              : d.ha.hd == t.Xp && d.ext.VJ());
        }
        for (c = b = 0; c < this.Xb; b++, c++) {
          for (; null == this.X[b]; ) b++;
          d = this.X[b];
          if (0 != (d.ib & J.$i)) {
            var e = !1;
            if (d.b.sd == ia.Ai) {
              var f = d.ha.bh.vf[d.H.hs];
              f.Ht && (d.H.oa.oe.Dm(), (e = !0));
            }
            0 == e && 2 == d.eb && a.pS(d);
          }
        }
        for (c = b = 0; c < this.Xb; b++, c++) {
          for (; null == this.X[b]; ) b++;
          d = this.X[b];
          0 != (d.ib & J.$i) &&
            d.b.sd == ia.Ai &&
            ((f = d.ha.bh.vf[d.H.hs]), f.Ht && d.H.oa.oe.xc());
        }
      }
    },
    As: function () {
      if (0 == this.GS) {
        this.GS = !0;
        this.Wn = null;
        var a = 0,
          b;
        for (b = 0; b < this.Xb; a++, b++) {
          for (; null == this.X[a]; ) a++;
          var c = this.X[a];
          if (32 <= c.eb && c.ha.hd == t.Xp) {
            this.Wn = c.ext;
            break;
          }
        }
      }
      return this.Wn;
    },
    fc: function (a) {
      return a &&
        0 == (a.wa & aa.xi) &&
        0 != (a.ib & J.$i) &&
        a.b.sd == ia.Ai &&
        a.ha.bh.vf[a.H.hs].Ht
        ? a.H.oa.oe
        : null;
    },
    p0: function (a) {
      if (
        a.ha.hd == t.ov ||
        a.ha.hd == t.Rv ||
        a.ha.hd == t.yv ||
        a.ha.hd == t.Ms
      ) {
        var b = 0,
          c;
        for (c = 0; c < this.Xb; b++, c++) {
          for (; null == this.X[b]; ) b++;
          var d = this.X[b];
          32 <= d.eb &&
            d.ha.hd == t.Xp &&
            (a.ha.hd == t.ov
              ? a.ext.identifier == d.ext.identifier && d.ext.wt.add(a.ext)
              : a.ha.hd == t.Rv
                ? a.ext.identifier == d.ext.identifier && d.ext.Vu.add(a.ext)
                : a.ha.hd == t.yv
                  ? a.ext.identifier == d.ext.identifier && d.ext.Ut.add(a.ext)
                  : a.ha.hd == t.Ms &&
                    a.ext.identifier == d.ext.identifier &&
                    d.ext.HD.add(a.ext));
        }
        if (a.ha.hd != t.Ms)
          for (c = b = 0; c < this.Xb; b++, c++) {
            for (; null == this.X[b]; ) b++;
            d = this.X[b];
            d.eb == F.Ed && (d = this.fc(d)) && a.ext.QJ(d);
          }
      }
    },
    Fd: function (a) {
      return null != a.H && null != a.H.oa ? a.H.oa.Fd() : a.b.Pa;
    },
    pause: function (a) {
      if (0 == this.Uk) {
        this.Uk = 1;
        this.FS = this.m.Lg;
        var b = 0,
          c;
        for (c = 0; c < this.Xb; c++) {
          for (; null == this.X[b]; ) b++;
          b++;
        }
        a || this.m.hf.pause();
      }
    },
    resume: function () {
      if (!this.f4 && 0 != this.Uk) {
        this.Uk = 0;
        this.iB();
        var a = 0,
          b;
        for (b = 0; b < this.Xb; b++) {
          for (; null == this.X[a]; ) a++;
          a++;
        }
        this.m.hf.resume();
        a = this.m.Lg;
        a -= this.FS;
        this.fs += a;
        this.CD = 0;
        this.hD = !1;
      }
    },
    kP: function () {
      this.m.hf.GK();
    },
    Ho: function () {
      var a = 0,
        b;
      for (b = 0; b < this.Xb; b++) {
        for (; null == this.X[a]; ) a++;
        var c = this.X[a];
        a++;
        c.Ho();
      }
    },
    nl: function (a, b, c) {
      a = this.H6(a, b, c);
      return null != a ? a.top : t.$j;
    },
    H6: function (a, b, c) {
      b -= this.za;
      c -= this.Ea;
      var d;
      -1 == a ? ((d = 0), (a = this.O.Oe)) : ((d = a), (a += 1));
      for (; d < a; d++) {
        var e = this.O.ic[d].n2(b, c);
        if (null != e) return e;
      }
      return null;
    },
    wH: function () {
      this.fs = this.m.Lg;
      this.Dy = this.rK = this.md = this.Ee = this.Hp = 0;
      var a;
      for (a = 0; a < (this.pm + 31) / 32; a++) this.es[a] = 0;
      this.vD = this.O.qx;
      this.wD = this.O.px;
      this.Cu = -t.UL;
      this.Gu = -t.VL;
      this.Au = this.Se + t.UL;
      this.Eu = this.Te + t.VL;
      this.xu = a = this.za;
      a -= t.fv;
      0 > a && (a = this.Cu);
      this.Bu = a;
      this.yu = a = this.Ea;
      a -= t.gv;
      0 > a && (a = this.Gu);
      this.Fu = a;
      a = this.za;
      a += this.vD + t.fv;
      a > this.Se && (a = this.Au);
      this.zu = a;
      a = this.Ea;
      a += this.wD + t.gv;
      a > this.Te && (a = this.Eu);
      this.Du = a;
      for (a = this.Uk = this.Ku = this.Hu = this.lK = 0; 4 > a; a++)
        (this.xf[a] = 0), (this.tD[a] = 0), (this.sD[a] = 255);
      this.bs = 0;
      this.s.PG = !1;
      this.s.Cy = !1;
      this.CD = 0;
      this.Wn = null;
      this.GS = !1;
      this.nK = this.yD = this.xD = this.HS = null;
      for (a = 0; a < t.Qz; a++) this.AD[a] = 20;
      this.Iu = 0;
    },
    X1: function () {
      this.m.hf.X0();
      if (null != this.m.yb && this.m.Dl)
        return (this.fs = this.m.Lg), (this.Hp = 0), this.md;
      if (null != this.m.Gk) return this.m.Gk.handle(), 0;
      this.MG || (this.wW(), (this.MG = !0));
      var a = this.m.Lg - this.fs,
        b = this.Hp;
      this.Hp = a;
      this.GD = a -= b;
      this.Ku += a;
      this.Ee += 1;
      this.pe = (this.GD * this.O.BQ) / 1e3;
      this.AD[this.Iu] = a;
      this.Iu++;
      this.Iu >= t.Qz && (this.Iu = 0);
      for (a = 0; 4 > a; a++) this.tD[a] = this.xf[a];
      this.a3();
      1 == this.m.pn
        ? (this.xf[0] |= this.m.jb.Zw() & this.oK)
        : 2 == this.m.pn && (this.xf[0] |= this.m.Zw() & this.oK);
      if (0 != this.pi)
        for (
          this.KH(),
            this.bs = 0,
            this.m.Jf[q.hk] && (this.bs |= 16),
            this.m.Jf[q.CA] && (this.bs |= 32),
            a = 0;
          a < this.qK;
          a++
        )
          0 != (this.Xba & 1) &&
            ((b = this.xf[a] & 207), (b |= this.bs), (this.xf[a] = b));
      else this.KH();
      for (a = 0; 4 > a; a++)
        if (
          ((b = this.xf[a] & t.B4[4 * this.qK + a]),
          (b &= this.sD[a]),
          (this.xf[a] = b),
          (b ^= this.tD[a]),
          (this.jK[a] = b),
          0 != b)
        )
          if (((b &= this.xf[a]), 0 != (b & 240)))
            (this.s.JS = a),
              (b = this.jK[a]),
              0 != (b & 240) && ((this.s.ld = b), this.s.bi(-196615)),
              0 != (b & 15) && ((this.s.ld = b), this.s.bi(-196615));
          else {
            var c = this.s.we[this.s.Ui[-F.CM] + 4];
            0 != c && ((this.s.ld = b), this.s.fj(c, null));
          }
      if (0 != this.Xb) {
        a = this.Xb;
        b = 0;
        do {
          for (this.mK = 0; null == this.X[b]; ) b++;
          c = this.X[b];
          c.WP = c.SB;
          c.SB = null;
          c.ex && ((this.IS = b), c.handle());
          a += this.mK;
          b++;
          a--;
        } while (0 != a);
      }
      this.Re++;
      this.s.j1();
      this.s.C2();
      this.s.LS && 0 == (this.wf & t.qv) && this.s.fj(0, null);
      this.s.B2();
      this.A1();
      this.doScroll();
      this.s.iK = -1;
      this.Hu++;
      if (0 == this.md) return this.rK;
      (this.md != t.dF &&
        this.md != t.eF &&
        this.md != t.Pz &&
        this.md != t.bF &&
        this.md != t.WY &&
        this.md != t.cF) ||
        this.s.bi(-65539);
      return this.md;
    },
    a3: function () {
      var a;
      for (a = 0; 4 > a; a++) this.xf[a] = 0;
      var b = this.m.g2();
      for (a = 0; 4 > a; a++) {
        var c;
        for (c = 0; c < q.zv; c++)
          this.m.Jf[b[a * q.zv + c]] && (this.xf[a] |= 1 << c);
      }
    },
    KH: function () {
      this.vu = this.m.Ik + this.za - this.m.bl;
      this.wu = this.m.Jk + this.Ea - this.m.dl;
    },
    Pi: function (a) {
      a.H.va = !1;
      t.DN = !1;
      a.H.Hy = 0;
      var b, c;
      0 != (a.jj & ga.oA) &&
        ((b = this.PJ(a.b.ZJ, a.b.aK, a.b.$J, a.b.bK)),
        0 != b &&
          ((c = this.PJ(
            a.w - a.ab,
            a.A - a.bb,
            a.w - a.ab + a.ea,
            a.A - a.bb + a.ga,
          )),
          0 == c &&
            ((b ^= c),
            0 != b &&
              ((a.H.Hy |= fb.JW),
              (this.s.ld = b),
              this.s.Gd(a, -720896 | (a.eb & 65535))))),
        (b = this.PJ(
          a.w - a.ab,
          a.A - a.bb,
          a.w - a.ab + a.ea,
          a.A - a.bb + a.ga,
        )),
        0 != (b & a.H.sK) &&
          ((c = a.H.va),
          0 != (b & t.Vj)
            ? a.H.oa.Cd(a.w + this.Se)
            : 0 != (b & t.Wj) && a.H.oa.Cd(a.w - this.Se),
          0 != (b & t.Xj)
            ? a.H.oa.Dd(a.A + this.Te)
            : 0 != (b & t.Uj) && a.H.oa.Dd(a.A - this.Te),
          a.b.sd != ia.iA && a.b.sd != ia.Ai && (a.H.va = c)),
        (b = this.Wr(a.b.ZJ, a.b.aK, a.b.$J, a.b.bK)),
        b != t.GV &&
          ((c = this.Wr(
            a.w - a.ab,
            a.A - a.bb,
            a.w - a.ab + a.ea,
            a.A - a.bb + a.ga,
          )),
          (b = ~b & c),
          0 != b &&
            ((a.H.Hy |= fb.KW),
            (this.s.ld = b),
            this.s.Gd(a, -786432 | (a.eb & 65535)))));
      0 != (a.jj & ga.nA) &&
        (a.b.sd == ia.iA
          ? a.H.oa.d4()
          : this.xw(a, a.b.Jb, a.b.uc, a.b.Sc, a.b.Tc, a.w, a.A, 0, V.jh) &&
            this.s.Gd(a, -851968 | (a.eb & 65535)));
      if (
        0 != (a.jj & ga.Hv) &&
        ((b = this.du(a, a.b.Jb, a.b.uc, a.b.Sc, a.b.Tc, a.w, a.A, a.vd.up)),
        null != b)
      )
        for (c = 0; c < b.size(); c++) {
          var d = b.get(c);
          if (0 == (d.wa & aa.xi)) {
            var e = a.eb,
              f = a,
              h = d;
            f.eb > h.eb && ((f = d), (h = a), (e = f.eb));
            this.s.ld = h.Bc;
            this.s.zy = h.Nc;
            this.s.Gd(f, -917504 | (e & 65535));
          }
        }
      return t.DN;
    },
    du: function (a, b, c, d, e, f, h, k) {
      var g = null;
      f -= a.ab;
      var n = f + a.ea;
      h -= a.bb;
      var m = h + a.ga,
        v,
        A;
      if (0 != (a.wa & aa.Fm) || 0 != (a.wa & aa.xi)) return g;
      var l = !1,
        P = null,
        p = -1;
      a.eb == F.Ed && 0 == (a.Z.Ha & R.tq) && (l = !0);
      a.eb == F.Ed && (p = a.Z.js);
      var M = a.wa;
      a.wa |= aa.Fm;
      var L = 0,
        w,
        B,
        G;
      if (null != k)
        for (L = 0; L < k.length; L += 2) {
          w = k[L + 1];
          if (0 > w) break;
          for (var t = this.ya[w].Jc; 0 == (t & 2147483648); )
            if (
              ((w = this.X[t]),
              (t = w.Zd),
              0 == (w.wa & aa.Fm) &&
                0 == (w.wa & aa.xi) &&
                ((B = w.w - w.ab),
                (G = w.A - w.bb),
                B < n && B + w.ea > f && G < m && G + w.ga > h))
            )
              switch (w.eb) {
                case F.Ed:
                  (0 > p || (0 <= p && p == w.Z.js)) &&
                    0 != (w.Z.Ha & R.uq) &&
                    (0 == l || 0 != (w.Z.Ha & R.tq)
                      ? (null == g && (g = new W()), g.add(w))
                      : (null == P &&
                          ((A = this.m.Ia.Ac(b)),
                          null != A && (P = A.Ji(0, c, d, e))),
                        (A = this.m.Ia.Ac(w.b.Jb)),
                        null != A && (v = A.Ji(0, w.b.uc, w.b.Sc, w.b.Tc)),
                        null != P &&
                          null != v &&
                          P.Rp(f, h, 0, v, B, G, 0) &&
                          (null == g && (g = new W()), g.add(w))));
                  break;
                case F.Om:
                case F.Ev:
                case F.xF:
                case F.EM:
                case F.zM:
                  null == g && (g = new W());
                  g.add(w);
                  break;
                default:
                  null == g && (g = new W()), g.add(w);
              }
        }
      else
        for (k = 0; k < this.Xb; k++) {
          for (; null == this.X[L]; ) L++;
          w = this.X[L];
          L++;
          if (
            0 == (w.wa & aa.Fm) &&
            ((B = w.w - w.ab),
            (G = w.A - w.bb),
            B < n && B + w.ea > f && G < m && G + w.ga > h)
          )
            switch (w.eb) {
              case F.Ed:
                (0 > p || (0 <= p && p == w.Z.js)) &&
                  0 != (w.Z.Ha & R.uq) &&
                  (0 == l || 0 != (w.Z.Ha & R.tq)
                    ? (null == g && (g = new W()), g.add(w))
                    : (null == P &&
                        ((A = this.m.Ia.Ac(b)),
                        null != A && (P = A.Ji(0, c, d, e))),
                      (A = this.m.Ia.Ac(w.b.Jb)),
                      null != A && (v = A.Ji(0, w.b.uc, w.b.Sc, w.b.Tc)),
                      null != P &&
                        null != v &&
                        P.Rp(f, h, 0, v, B, G, 0) &&
                        (null == g && (g = new W()), g.add(w))));
                break;
              case F.Om:
              case F.Ev:
              case F.xF:
              case F.EM:
              case F.zM:
                null == g && (g = new W());
                g.add(w);
                break;
              default:
                null == g && (g = new W()), g.add(w);
            }
        }
      a.wa = M;
      return g;
    },
    xw: function (a, b, c, d, e, f, h, k, g) {
      b = this.O.ic[a.ug];
      switch (a.eb) {
        case F.Ed:
          if (0 == (a.Z.Ha & R.tq)) {
            if (((a = this.m.Ia.Ac(a.b.Jb)), null != a))
              return (
                (a = a.Ji(Z.zs, c, d, e)),
                null != b.Rp(a, f - this.za, h - this.Ea, k, g)
              );
          } else
            return (
              (f = f - a.ab - this.za),
              (h = h - a.bb - this.Ea),
              (c = f + a.ea),
              (a = h + a.ga),
              (k = null != b.XD(f, h, c, a, k, g))
            );
          return !1;
        default:
          return (
            (f = f - a.ab - this.za),
            (h = h - a.bb - this.Ea),
            (c = f + a.ea),
            (a = h + a.ga),
            (k = null != b.XD(f, h, c, a, k, g))
          );
      }
    },
    Wr: function (a, b, c, d) {
      var e = 0;
      0 > a && (e |= t.Vj);
      0 > b && (e |= t.Xj);
      c > this.Se && (e |= t.Wj);
      d > this.Te && (e |= t.Uj);
      return t.jN[e];
    },
    PJ: function (a, b, c, d) {
      var e = 15;
      a < this.Se && (e &= ~t.Wj);
      b < this.Te && (e &= ~t.Uj);
      0 < c && (e &= ~t.Vj);
      0 < d && (e &= ~t.Xj);
      return t.jN[e];
    },
    random: function (a) {
      var b = 31415 * this.kK + 1;
      this.kK = b &= 65535;
      return (b * a) >>> 16;
    },
    QP: function (a) {
      if (0 == a || -1 == a) return this.random(32);
      var b,
        c = 0,
        d = 0,
        e = a;
      for (b = 0; 32 > b; b++) 0 != (e & 1) && (d++, (c = b)), (e >>>= 1);
      if (1 == d) return c;
      d = this.random(d);
      e = a;
      for (b = 0; 32 > b; b++) {
        if (0 != (e & 1) && (d--, 0 > d)) return b;
        e >>>= 1;
      }
      return 0;
    },
    hn: function (a) {
      this.ds = a.Aa;
      this.Pf = 0;
      this.Vo = !1;
      return this.getExpression();
    },
    fd: function (a) {
      this.ds = a.Aa;
      this.Pf = 0;
      this.Vo = !1;
      return this.getExpression();
    },
    jn: function (a) {
      this.ds = a.Aa;
      this.Pf = 0;
      this.Vo = !1;
      return this.getExpression();
    },
    NH: function () {
      this.Vo = !1;
      var a = this.getExpression();
      return 0 > a ? Math.ceil(a) : Math.floor(a);
    },
    getExpression: function () {
      var a,
        b = this.$a;
      this.Ju[this.$a] = this.BD;
      do {
        this.$a++;
        this.rw = !0;
        this.ds[this.Pf].evaluate(this);
        this.rw = !1;
        this.Pf++;
        do
          if (((a = this.ds[this.Pf]), 0 < a.code && 1310720 > a.code))
            a.code > this.Ju[this.$a - 1].code
              ? ((this.Ju[this.$a] = a),
                this.Pf++,
                this.$a++,
                (this.rw = !0),
                this.ds[this.Pf].evaluate(this),
                (this.rw = !1),
                this.Pf++)
              : (this.$a--, this.Ju[this.$a].evaluate(this));
          else {
            this.$a--;
            if (this.$a == b) break;
            this.Ju[this.$a].evaluate(this);
          }
        while (1);
      } while (this.$a > b + 1);
      return this.Kb[b + 1];
    },
    E6: function (a, b, c) {
      a++;
      var d = 0,
        e;
      for (e = 0; e < this.Xb; e++) {
        for (; null == this.X[d]; ) d++;
        var f = this.X[d];
        if (f.eb == b)
          switch (b) {
            case 5:
              f.Yn == a && f.UD(c);
              break;
            case 6:
              f.Yn == a && f.UD(c);
          }
        d++;
      }
    },
    VF: function (a, b) {
      var c = this.m.Bt();
      b != c[a] &&
        (0 == b && 0 != c[a] && this.s.lS(0, -262151, 0, null, a),
        (c[a] = b),
        this.E6(a, F.xF, b));
    },
    $P: function (a) {
      var b = !1,
        c = 0;
      if (0 != (a.ib & J.pq)) {
        if (null != a.Z && a.Z.J2()) return;
        null != a.Wa && a.Wa.Sm(O.Wp) && (c = 1);
      }
      0 == c && (b = !0);
      b
        ? ((a.ex = !1), this.rl(a.Nc))
        : (null != a.Z && (a.Z.QD(!1), (a.wa |= aa.Fm)),
          null != a.H && (a.H.gd(!1), a.H.N2(a, ia.fZ, !1), (a.b.sa = 0)),
          0 != (c & 1) && (a.Wa.OA(O.Wp), a.Wa.aG()));
    },
    kH: function () {
      var a,
        b = new va(),
        c;
      for (c = 0; c < this.O.Oe; c++) {
        var d = this.O.ic[c],
          e = 0 != (d.Cb & ra.IE),
          f = 0 != (d.Cb & ra.JE),
          h = d.Xx,
          k;
        for (k = 0; k < h; k++) {
          a = this.O.mg.EP(d.Zx + k);
          a.sx < F.Ed && ((b.left = a.eC), (b.top = a.fC));
          var g;
          g = new Fa(this.m, b.left, b.top, a, null, 0);
          g.rg(0, d);
          e
            ? ((g = new Fa(this.m, this.O.Ah + b.left, b.top, a, null, 0)),
              g.rg(1, d),
              b.left + g.width > this.O.Ah &&
                ((g = new Fa(this.m, b.left - this.O.Ah, b.top, a, null, 0)),
                g.rg(4, d)),
              f &&
                ((g = new Fa(this.m, b.left, this.O.Kf + b.top, a, null, 0)),
                g.rg(2, d),
                (g = new Fa(
                  this.m,
                  this.O.Ah + b.left,
                  this.O.Kf + b.top,
                  a,
                  null,
                  0,
                )),
                g.rg(3, d),
                b.top + g.height > this.O.Kf &&
                  ((g = new Fa(this.m, b.left, b.top - this.O.Kf, a, null, 0)),
                  g.rg(5, d))))
            : f &&
              ((g = new Fa(this.m, b.left, this.O.Kf + b.top, a, null, 0)),
              g.rg(2, d),
              b.top + g.height > this.O.Kf &&
                ((g = new Fa(this.m, b.left, b.top - this.O.Kf, a, null, 0)),
                g.rg(5, d)));
        }
      }
    },
    U5: function () {
      for (var a, b = this.xu, c = this.yu, d, e, f = 0; f < this.O.Oe; f++) {
        a = this.O.ic[f];
        d = b;
        e = c;
        0 != (a.Cb & (ra.KE | ra.LE)) &&
          (0 != (a.Cb & ra.KE) && (d *= a.av),
          0 != (a.Cb & ra.LE) && (e *= a.bv));
        d += a.nD;
        e += a.oD;
        d += a.Xq;
        e += a.Yq;
        var h = 0 != (a.Cb & ra.JE);
        0 != (a.Cb & ra.IE) && ((d %= this.O.Ah), 0 > d && (d += this.O.Ah));
        h && ((e %= this.O.Kf), 0 > e && (e += this.O.Kf));
        a.x = d;
        a.y = e;
        a.nD += a.Xq;
        a.oD += a.Yq;
        a.Ce.x = -d + this.m.bl;
        a.Ce.y = -e + this.m.dl;
        a.Md.x = -d + this.m.bl;
        a.Md.y = -e + this.m.dl;
        a.bc.x = -d + this.m.bl;
        a.bc.y = -e + this.m.dl;
      }
      this.O.ep = b;
      this.O.fp = c;
    },
    D2: function () {
      var a;
      for (a = 0; a < this.O.Oe; a++) {
        var b = this.O.ic[a];
        b.Cb & ra.Dz && b.RB();
      }
    },
    D6: function (a, b) {
      var c = !1;
      this.DD = a - this.za;
      this.ED = b - this.Ea;
      if (0 != this.DD || 0 != this.ED) c = !0;
      var d;
      if (!c)
        for (var e = 0; e < this.O.Oe; e++)
          if (((d = this.O.ic[e]), 0 != d.Xq || 0 != d.Yq)) {
            c = !0;
            break;
          }
      var e = this.za,
        f = this.Ea,
        h = this.DD,
        k = this.ED;
      this.za = a;
      this.Bu = a - t.fv;
      0 > this.Bu && (this.Bu = this.Cu);
      this.Ea = b;
      this.Fu = b - t.gv;
      0 > this.Fu && (this.Fu = this.Gu);
      this.zu = a + this.vD + t.fv;
      this.zu > this.Se && (this.zu = this.Au);
      this.Du = b + this.wD + t.gv;
      this.Du > this.Te && (this.Du = this.Eu);
      if (c)
        for (var g = (c = 0); g < this.Xb; g++) {
          for (; null == this.X[c]; ) c++;
          var n = this.X[c];
          c++;
          if (0 != (n.ib & J.vZ))
            null == n.H
              ? ((n.w += h), (n.A += k))
              : (n.H.oa.Cd(n.w + h), n.H.oa.Dd(n.A + k));
          else if (((d = n.ug), d < this.O.Oe)) {
            var m = e,
              v = f,
              A = a,
              l = b;
            d = this.O.ic[d];
            0 != (d.Cb & ra.KE) && ((m *= d.av), (A *= d.av));
            0 != (d.Cb & ra.LE) && ((v *= d.bv), (l *= d.bv));
            m = n.w + m - A + h - d.Xq;
            d = n.A + v - l + k - d.Yq;
            0 == (n.ib & J.$i)
              ? ((n.w = m), (n.A = d))
              : (n.H.oa.Cd(m), n.H.oa.Dd(d));
            n.xt();
          }
        }
    },
    doScroll: function () {
      if (0 != (this.lK & t.p_)) {
        this.lK = 0;
        var a = this.O.ep != this.xu || this.O.fp != this.yu;
        if (!a)
          for (var b = 0; b < this.O.Oe; b++)
            if (0 != this.O.ic[b].Xq || 0 != this.O.ic[b].Yq) {
              a = !0;
              break;
            }
        if (a)
          for (
            this.U5(), this.D6(this.O.ep, this.O.fp), b = 0;
            b < this.O.Oe;
            b++
          )
            (this.O.ic[b].Xq = 0), (this.O.ic[b].Yq = 0);
        this.xu = this.za;
        this.yu = this.Ea;
      }
    },
    HA: function (a, b, c, d, e, f) {
      d = this.O.ic[d];
      var h = new Fa(this.m, b - this.za + d.x, c - this.za + d.y, null, a, e);
      h.rg(0, d);
      !f ||
        (e != ta.wo && e != ta.Bi) ||
        null == this.Wn ||
        (h.body = this.Wn.K4(
          pHo.w - this.za + d.x,
          pHo.A - this.Ea + d.y,
          pHo.b.Jb,
          e,
        ));
      f = 0 != (d.Cb & ra.JE);
      0 != (d.Cb & ra.IE)
        ? ((h = new Fa(
            this.m,
            this.O.Ah + b - this.za + d.x,
            c - this.Ea + d.y,
            null,
            a,
            e,
          )),
          h.rg(1, d),
          b + h.width > this.O.Ah &&
            ((h = new Fa(
              this.m,
              b - this.za + d.x - this.O.Ah,
              c - this.Ea + d.y,
              null,
              a,
              e,
            )),
            h.rg(4, d)),
          f &&
            ((h = new Fa(
              this.m,
              b - this.za + d.x,
              this.O.Kf + c - this.Ea + d.y,
              null,
              a,
              e,
            )),
            h.rg(2, d),
            (h = new Fa(
              this.m,
              this.O.Ah + b - this.za + d.x,
              this.O.Kf + c - this.Ea + d.y,
              null,
              a,
              e,
            )),
            h.rg(3, d),
            c + h.height > this.O.Kf &&
              ((h = new Fa(
                this.m,
                b - this.za + d.x,
                c - this.Ea + d.y - this.O.Kf,
                null,
                a,
                e,
              )),
              h.rg(5, d))))
        : f &&
          ((h = new Fa(
            this.m,
            b - this.za + d.x,
            this.O.Kf + c - this.Ea + d.y,
            null,
            a,
            e,
          )),
          h.rg(2, d),
          c + h.height > this.O.Kf &&
            ((h = new Fa(
              this.m,
              b - this.za + d.x,
              c - this.Ea + d.y - this.O.Kf,
              null,
              a,
              e,
            )),
            h.rg(5, d)));
    },
    q2: function () {
      return 0 != this.pi ? 0 : this.vu;
    },
    r2: function () {
      return 0 != this.pi ? 0 : this.wu;
    },
    q4: function (a) {
      0 > a ? this.s.bi(-720902) : this.s.bi(-655366);
    },
    oP: function (a) {
      var b, c;
      if (0 != this.Xb)
        for (b = 0; b < this.pm; b++)
          if ((c = this.X[b]) && c.vd.Or == a)
            return (this.zH = c.vd.wp - 1), c;
      return null;
    },
    pP: function (a) {
      if (a && this.zH) {
        var b = a.Nc + 1;
        a = a.vd.Or;
        for (var c; ; ) {
          c = this.X[b];
          if (null != c && c.vd.Or == a) return this.zH--, c;
          b++;
        }
      }
      this.zH = 0;
      return null;
    },
  };
  Cd.ev = 2;
  ga.Z9 = 15;
  ga.zZ = 16;
  ga.Hv = 128;
  ga.nh = 256;
  ga.nA = 512;
  ga.oA = 1024;
  ga.a$ = 2048;
  ga.pA = 4096;
  ga.yZ = 65535;
  ga.prototype = {
    l1: function (a) {
      this.Nf = a.hy;
      this.fg = a.ni;
      var b = a.Kd;
      this.Pr = b.rp;
      this.TR = a.lJ;
      this.SR = a.mJ;
      this.TC = b.$l;
      this.Ld = 0;
      this.Jc = -1;
      this.eh = ga.yZ;
      null != a.nJ && (this.Or = a.nJ);
      this.iu = Array(8);
      for (a = 0; 8 > a; a++) this.iu[a] = b.iJ[a];
      this.Aj = null;
    },
  };
  H.Ph = 0;
  H.fk = 1;
  H.gk = 2;
  H.zi = 3;
  H.bA = 4;
  H.cA = 5;
  H.dA = 6;
  H.aA = 7;
  H.to = 8;
  H.uo = 9;
  H.e9 = 0;
  H.c9 = 1;
  H.g9 = 2;
  H.d9 = 3;
  H.f9 = 4;
  H.TK = 123456789;
  H.prototype = {
    ak: function (a, b) {
      this.Ya = a;
      this.ia = b;
      this.ah = !1;
      m_currentAngle = 0;
    },
    u_: function () {
      this.mC && ((this.mC = !1), (this.oC = this.nC = 0));
      this.PQ && (this.PQ = !1);
    },
    Vf: function () {
      this.ah = !1;
      this.CQ = this.Ya.c.Hu;
    },
    M_: function (a) {
      this.ah = a;
    },
    Dm: function () {
      return !1;
    },
    xc: function () {},
    Kv: function () {},
    Ov: function () {},
    Qs: function () {},
    yA: function () {},
    Da: function (a) {
      this.o = a;
      this.C = this.o.c;
    },
    XB: function () {},
    gd: function () {},
    move: function () {
      return !1;
    },
    setPosition: function () {},
    Cd: function () {},
    Dd: function () {},
    stop: function () {},
    dj: function () {},
    reverse: function () {},
    start: function () {},
    ih: function () {},
    Yk: function () {},
    Lh: function () {},
    Qy: function () {},
    Qu: function () {},
    Np: function () {},
    GA: function () {
      return 0;
    },
    ax: function () {
      return 0;
    },
    IH: function () {
      return 0;
    },
    Yw: function () {
      return 0;
    },
    pt: function (a) {
      return this.o.H.pt(this.o, a, 32);
    },
    Tm: function (a) {
      this.o.b.Ih = a;
      null != this.o.Wa && this.o.Wa.Di();
    },
    nB: function () {
      this.o.c.Re++;
      this.o.H.oa.Ig = this.o.c.Re;
      this.o.c.Pi(this.o);
    },
    sN: function (a, b, c, d, e, f, h) {
      a -= this.o.c.za;
      b -= this.o.c.Ea;
      c -= this.o.c.za;
      d -= this.o.c.Ea;
      a = this.o.H.oa.np(a, b, c, d, e, f, h);
      h.x += this.o.c.za;
      h.y += this.o.c.Ea;
      return a;
    },
    IT: function (a, b, c, d, e) {
      return this.o.H.oa.Tp(a, b, c, d, e);
    },
    Zw: function (a) {
      return this.o.c.xf[a];
    },
    zt: function () {
      return 0;
    },
    PD: function () {},
  };
  O.Mg = 0;
  O.He = 1;
  O.vi = 2;
  O.kz = 3;
  O.Wp = 4;
  O.rV = 5;
  O.XK = 6;
  O.WK = 7;
  O.VK = 8;
  O.UK = 9;
  O.mE = 10;
  O.lz = 11;
  O.Q6 = 12;
  O.r6 = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  O.prototype = {
    load: function (a) {
      var b = a.Oa,
        c = Array(32),
        d;
      for (d = 0; 32 > d; d++) c[d] = a.B();
      this.Sg = Array(32);
      this.Ci = Array(32);
      this.kk = Array(32);
      for (d = 0; 32 > d; d++)
        (this.Sg[d] = null),
          (this.Ci[d] = 0),
          (this.kk[d] = 0),
          0 != c[d] &&
            ((this.Sg[d] = new Dd()), a.seek(b + c[d]), this.Sg[d].load(a));
    },
    te: function (a) {
      var b;
      for (b = 0; 32 > b; b++) null != this.Sg[b] && this.Sg[b].te(a);
    },
    z0: function (a) {
      var b, c, d, e, f;
      for (b = 0; 32 > b; b++)
        if (null == this.Sg[b]) {
          c = 0;
          for (e = b + 1; 32 > c; c++, e++)
            if (((e &= 31), null != this.Sg[e])) {
              this.Ci[b] = e;
              break;
            }
          d = 0;
          for (f = b - 1; 32 > d; d++, f--)
            if (((f &= 31), null != this.Sg[f])) {
              this.kk[b] = f;
              break;
            }
          e == f || c < d ? (this.Ci[b] |= 64) : d < c && (this.kk[b] |= 64);
        } else 16 > a && 0 == O.r6[a] && (this.Sg[b].XF = this.Sg[b].WF);
    },
  };
  nb.HT = [
    O.kz,
    O.He,
    O.vi,
    0,
    O.vi,
    O.Mg,
    0,
    0,
    O.He,
    O.Mg,
    0,
    0,
    O.Mg,
    O.He,
    O.vi,
    0,
    O.Mg,
    0,
    0,
    0,
    O.Mg,
    O.He,
    O.vi,
    0,
    O.Mg,
    O.He,
    O.vi,
    0,
    O.He,
    O.vi,
    O.Mg,
    0,
    O.Mg,
    O.He,
    O.vi,
    0,
    O.He,
    O.vi,
    O.Mg,
    0,
    O.Mg,
    O.He,
    O.vi,
    0,
    O.Mg,
    O.He,
    O.vi,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  nb.prototype = {
    load: function (a) {
      var b = a.Oa;
      a.Qa(2);
      this.ik = a.B();
      var c = Array(this.ik),
        d;
      for (d = 0; d < this.ik; d++) c[d] = a.B();
      this.jk = Array(this.ik);
      this.Go = Array(this.ik);
      for (d = 0; d < this.ik; d++)
        (this.jk[d] = null),
          (this.Go[d] = 0),
          0 != c[d] &&
            ((this.jk[d] = new O()),
            a.seek(b + c[d]),
            this.jk[d].load(a),
            (this.Go[d] = 1));
      for (a = 0; a < this.ik; a++)
        if (0 == this.Go[a]) {
          b = !1;
          if (12 > a)
            for (d = 0; 4 > d; d++)
              if (0 != this.Go[nb.HT[4 * a + d]]) {
                this.jk[a] = this.jk[nb.HT[4 * a + d]];
                b = !0;
                break;
              }
          if (0 == b)
            for (d = 0; d < this.ik; d++)
              if (0 != this.Go[d]) {
                this.jk[a] = this.jk[d];
                break;
              }
        } else this.jk[a].z0(a);
    },
    te: function (a) {
      var b;
      for (b = 0; b < this.ik; b++) 0 != this.Go[b] && this.jk[b].te(a);
    },
  };
  Dd.prototype = {
    load: function (a) {
      this.XF = a.Uc();
      this.WF = a.Uc();
      this.nN = a.B();
      this.oN = a.B();
      this.Ss = a.B();
      this.Bq = Array(this.Ss);
      var b;
      for (b = 0; b < this.Ss; b++) this.Bq[b] = a.B();
    },
    te: function (a) {
      var b;
      for (b = 0; b < this.Ss; b++)
        if (null != a) {
          var c = a.tl(this.Bq[b]);
          -1 != c && (this.Bq[b] = c);
        }
    },
  };
  jb.$F = [
    O.Mg,
    O.He,
    O.vi,
    O.rV,
    O.XK,
    O.WK,
    O.VK,
    O.UK,
    O.mE,
    O.lz,
    12,
    13,
    14,
    15,
    -1,
  ];
  jb.prototype = {
    Da: function (a) {
      this.a = a;
      this.ru = 0;
      this.ZP(O.He);
      if (this.Sm(O.kz)) (this.ru = 1), this.OA(O.kz), this.aG(), this.Tm();
      else {
        for (a = 0; 0 <= jb.$F[a] && !this.Sm(jb.$F[a]); a++);
        0 > jb.$F[a] &&
          this.Sm(O.Wp) &&
          ((this.ru = 2), this.OA(O.Wp), this.aG(), this.Tm());
      }
    },
    ZP: function (a) {
      this.a.b.Ih = a;
      this.XJ = !1;
      this.Gj = this.vy = this.Xr = this.Zr = this.jD = this.jm = 0;
      this.qu = this.Ap = this.xy = -1;
      this.wy = this.Pe = null;
      this.Tm();
    },
    Di: function () {
      switch (this.ru) {
        case 0:
          return this.Tm();
        case 1:
          this.w0();
          break;
        case 2:
          this.x0();
      }
      return !1;
    },
    Tm: function () {
      var a = this.a.w;
      this.a.b.Sn = a;
      a -= this.a.ab;
      this.a.b.ZJ = a;
      a += this.a.ea;
      this.a.b.$J = a;
      a = this.a.A;
      this.a.b.Tn = a;
      a -= this.a.bb;
      this.a.b.aK = a;
      a += this.a.ga;
      this.a.b.bK = a;
      this.a.b.lD = this.a.b.Jb;
      this.a.b.kD = this.a.b.uc;
      return this.Eq(1);
    },
    Eq: function (a) {
      var b = this.a.ha,
        c = this.a.b.sa,
        d = this.a.b.Ih;
      0 != this.Zr && (c = this.Zr - 1);
      d == O.He && (0 == c && (d = O.Mg), 75 <= c && (d = O.vi));
      0 != this.jm && (d = this.jm - 1);
      d != this.xy &&
        ((this.xy = d),
        d >= b.pp.ik && (d = b.pp.ik - 1),
        (b = b.pp.jk[d]),
        b != this.Pe &&
          ((this.Pe = b),
          (this.iD = -1),
          (this.Gj = 0),
          0 == (this.a.ib & J.uZ) && (this.vy = 0)));
      var e,
        f = this.a.b.Pa % 32,
        b = !1;
      0 != this.jD && (f = this.jD - 1);
      if (
        this.iD != f &&
        ((this.iD = f),
        (e = this.Pe.Sg[f]),
        null == e
          ? 0 != (this.Pe.kk[f] & 64)
            ? (f = this.Pe.kk[f] & 63)
            : 0 != (this.Pe.Ci[f] & 64)
              ? (f = this.Pe.Ci[f] & 63)
              : ((e = f),
                0 > this.qu
                  ? (f = this.Pe.Ci[f] & 63)
                  : ((f -= this.qu),
                    (f =
                      15 < (f & 31) ? this.Pe.Ci[e] & 63 : this.Pe.kk[e] & 63)))
          : (this.qu = f),
        (e = this.Pe.Sg[f]),
        null != this.Pe.Sg[0] &&
          0 != (this.a.ha.rp & J.rZ) &&
          ((this.a.b.uc = (360 * this.iD) / 32),
          (e = this.Pe.Sg[0]),
          (this.wy = null),
          (b = !0)),
        this.wy != e)
      ) {
        this.wy = e;
        this.Yr = e.nN;
        this.wS = e.oN;
        var f = e.XF,
          h = e.WF;
        if (f != this.Ap || h != this.pu)
          (this.Ap = f),
            (this.pu = h),
            (this.vS = h - f),
            (this.ou = f),
            (this.WJ = -1);
        this.Hj = e.Ss;
        0 != this.Xr && this.Xr - 1 >= this.Hj && (this.Xr = 0);
        this.Gj >= this.Hj && (this.Gj = 0);
        e = e.Bq[this.Gj];
        0 == this.XJ &&
          ((this.a.b.Jb = e),
          (e = this.a.c.m.Ia.er(e, this.a.b.uc, this.a.b.Sc, this.a.b.Tc)),
          null != e &&
            ((this.a.ea = e.width),
            (this.a.ga = e.height),
            (this.a.ab = e.Mb),
            (this.a.bb = e.Gb),
            (this.a.SH = e.al),
            (this.a.TH = e.cl)),
          (this.a.b.ka = !0),
          (this.a.b.jc = !0));
        if (1 == this.Hj) {
          0 == this.Ap && (this.Hj = 0);
          e = this.a.b.Jb;
          if (0 == e) return !1;
          e = this.a.c.m.Ia.er(e, this.a.b.uc, this.a.b.Sc, this.a.b.Tc);
          null != e &&
            ((this.a.ea = e.width),
            (this.a.ga = e.height),
            (this.a.ab = e.Mb),
            (this.a.bb = e.Gb),
            (this.a.SH = e.al),
            (this.a.TH = e.cl));
          return !1;
        }
      }
      if ((0 == a && 0 == this.Xr) || (0 == b && 0 == this.Hj && d != O.Wp))
        return !1;
      a = this.vS;
      c != this.WJ &&
        ((this.WJ = c),
        0 == a
          ? ((this.ou = this.Ap), 0 != this.Zr && (this.ou = this.Zr - 1))
          : ((d = this.a.b.Kc - this.a.b.Rn),
            0 == d
              ? 0 != this.Zr
                ? ((a = (a * c) / 100 + this.Ap), a > this.pu && (a = this.pu))
                : ((a /= 2), (a += this.Ap))
              : ((a = (a * c) / d + this.Ap), a > this.pu && (a = this.pu)),
            (this.ou = a)));
      e = this.wy;
      a = this.Xr;
      if (0 == a) {
        if (0 == this.ou || this.XJ) return !1;
        c = this.vy;
        a = this.Gj;
        d = this.ou;
        0 != (this.a.c.O.xd & V.Ue) && (d = Math.round(d * this.a.c.pe));
        for (c += d; 100 < c; )
          if (
            ((c -= 100),
            a++,
            a >= this.Hj &&
              ((a = this.wS), 0 != this.Yr && (this.Yr--, 0 == this.Yr)))
          ) {
            this.Gj = this.Hj - 1;
            0 > this.Gj && (this.Gj = 0);
            this.Hj = 0;
            0 != this.jm && (this.Zr = this.jD = this.jm = 0);
            this.Gj < e.Ss &&
              ((e = e.Bq[this.Gj]),
              e != this.a.b.Jb &&
                ((this.a.b.Jb = e), (this.a.b.ka = !0), (this.a.b.jc = !0)));
            this.vy = c;
            if (0 != (this.a.c.wf & t.PE)) return !1;
            b &&
              ((this.a.b.ka = !0),
              (this.a.b.jc = !0),
              (e = this.a.c.m.Ia.er(
                this.a.b.Jb,
                this.a.b.uc,
                this.a.b.Sc,
                this.a.b.Tc,
              )),
              null != e &&
                ((this.a.ea = e.width),
                (this.a.ga = e.height),
                (this.a.ab = e.Mb),
                (this.a.bb = e.Gb),
                (this.a.SH = e.al),
                (this.a.TH = e.cl)));
            b = -131072;
            b |= this.a.eb & 65535;
            this.a.c.s.ld = this.a.Wa.xy;
            return this.a.c.s.Gd(this.a, b);
          }
        this.vy = c;
      } else a--;
      this.Gj = a;
      this.a.b.ka = !0;
      this.a.b.jc = !0;
      e = e.Bq[a];
      if (this.a.b.Jb != e || this.xS != this.a.b.uc)
        (this.a.b.Jb = e),
          (this.xS = this.a.b.uc),
          0 <= e &&
            ((e = this.a.c.m.Ia.er(e, this.a.b.uc, this.a.b.Sc, this.a.b.Tc)),
            null != e &&
              ((this.a.ea = e.width),
              (this.a.ga = e.height),
              (this.a.ab = e.Mb),
              (this.a.bb = e.Gb),
              (this.a.SH = e.al),
              (this.a.TH = e.cl)));
      return !1;
    },
    Sm: function (a) {
      return 0 == this.a.ha.pp.Go[a] ? !1 : !0;
    },
    aG: function () {
      0 == this.Yr && (this.Yr = 1);
    },
    OA: function (a) {
      this.jm = a + 1;
      this.Eq(0);
    },
    y0: function () {
      this.jm = 0;
      this.Eq(0);
    },
    v0: function (a) {
      a >= this.Hj && (a = this.Hj - 1);
      0 > a && (a = 0);
      this.Xr = a + 1;
      this.Eq(0);
    },
    w0: function () {
      this.Eq(1);
      this.jm != O.kz + 1 &&
        (this.Sm(O.Mg) || this.Sm(O.He) || this.Sm(O.vi)
          ? ((this.ru = 0), this.y0())
          : ((this.ru = 2), this.a.c.$P(this.a)));
    },
    x0: function () {
      0 == (this.a.wa & aa.oo) &&
        (this.Eq(1), this.jm != O.Wp + 1 && this.a.c.rl(this.a.Nc));
    },
  };
  Ed.prototype = {
    hH: function () {
      var a = this.app.Ep + "M" + u.Tw(this.handle, "png"),
        b = new Image();
      this.Ia.Ae[this.handle] = b;
      var c = this;
      b.onload = function () {
        c.app.Qo(c);
      };
      b.onerror = function () {
        c.app.Qo(c);
      };
      b.src = a;
    },
  };
  Fd.prototype = {
    Nn: function (a) {
      this.file = a;
      this.zd = this.file.B();
      this.Nr = Array(this.zd);
      a = this.file.B();
      var b,
        c,
        d = new qa();
      for (b = 0; b < a; b++)
        (c = this.file.Oa), d.Jt(this.file), (this.Nr[d.handle] = c);
      this.ec = Array(this.zd);
      for (b = 0; b < this.zd; b++) this.ec[b] = 0;
      this.ub = null;
      this.An = this.zd;
      this.xj = 0;
      this.images = null;
    },
    Ac: function (a) {
      return 0 <= a && a < this.An && -1 != this.ub[a]
        ? this.images[this.ub[a]]
        : null;
    },
    Py: function () {
      var a;
      for (a = 0; a < this.zd; a++) this.Nr[a] && (this.ec[a] = 1);
    },
    Jj: function () {
      if (0 == (this.app.Cb & q.eo) && 0 == (this.app.Cb & q.lE)) {
        var a;
        for (a = 0; a < this.zd; a++) this.ec[a] = 0;
      }
      this.Ln = null;
    },
    Op: function (a) {
      this.ec[a]++;
    },
    tl: function (a) {
      this.Op(a);
      return -1;
    },
    nQ: function (a) {
      null == this.Ae[a] &&
        (null != this.Ln && a < this.Ln.length && null != this.Ln[a]
          ? (this.Ae[a] = this.Ln[a])
          : ((this.Ae[a] = new Ed(this, a)), this.app.Tv(this.Ae[a])));
    },
    load: function (a) {
      var b;
      if (0 < this.app.Fh)
        if (null == this.Ae) {
          if (((this.Ae = Array(this.app.Fh)), this.app.Cb & q.eo))
            for (b = 0; b < this.app.Fh; b++) this.app.Ae[b] && this.nQ(b);
        } else if (0 == (this.app.Cb & q.eo)) {
          this.Ln = Array(this.app.Fh);
          for (b = 0; b < this.app.Fh; b++) this.Ln[b] = this.Ae[b];
          this.Ae = Array(this.app.Fh);
          for (b = 0; b < this.app.Fh; b++) this.Ae[b] = null;
        }
      for (b = this.xj = 0; b < this.zd; b++) 0 != this.ec[b] && this.xj++;
      b = Array(this.xj);
      var c = 0,
        d;
      for (d = 0; d < this.zd; d++)
        if (0 != this.ec[d]) {
          if (
            null != this.images &&
            -1 != this.ub[d] &&
            null != this.images[this.ub[d]]
          ) {
            if (
              ((b[c] = this.images[this.ub[d]]),
              (b[c].ec = this.ec[d]),
              null != this.Ae && null != this.Ln)
            ) {
              var e = b[c].ne;
              0 < e && (this.Ae[e] = this.Ln[e]);
            }
          } else
            0 != this.Nr[d] &&
              ((b[c] = new qa()),
              a.seek(this.Nr[d]),
              b[c].load(this.app),
              (b[c].ec = this.ec[d]));
          c++;
        }
      this.images = b;
      this.ub = Array(this.zd);
      for (b = 0; b < this.zd; b++) this.ub[b] = -1;
      for (b = 0; b < this.xj; b++)
        this.images[b] && (this.ub[this.images[b].handle] = b);
      this.An = this.zd;
    },
    lQ: function (a) {
      var b;
      for (b = 0; b < a.length; b++)
        if (
          0 <= a[b] &&
          a[b] < this.An &&
          0 != this.Nr[a[b]] &&
          null == this.Ac(a[b])
        ) {
          var c,
            d = -1;
          for (c = 0; c < this.xj; c++)
            if (null == this.images[c]) {
              d = c;
              break;
            }
          if (-1 == d) {
            var e = Array(this.xj + 10);
            for (c = 0; c < this.xj; c++) e[c] = this.images[c];
            for (; c < this.xj + 10; c++) e[c] = null;
            d = this.xj;
            this.xj += 10;
            this.images = e;
          }
          this.ub[a[b]] = d;
          this.images[d] = new qa();
          this.images[d].ec = 1;
          this.file.seek(this.Nr[a[b]]);
          this.images[d].load(this.app);
        }
    },
    er: function (a, b, c, d) {
      var e;
      null == this.Mn && (this.Mn = new qa());
      e = this.Ac(a);
      if (null != e) {
        a = e.width;
        var f = e.height,
          h = e.Mb,
          k = e.Gb,
          g = e.al;
        e = e.cl;
        0 == b
          ? (1 != c && ((h *= c), (g *= c), (a *= c)),
            1 != d && ((k *= d), (e *= d), (f *= d)))
          : (1 != c && ((h *= c), (g *= c), (a *= c)),
            1 != d && ((k *= d), (e *= d), (f *= d)),
            null == this.Qn && (this.Qn = new va()),
            null == this.gr && (this.gr = new X()),
            null == this.Fq && (this.Fq = new X()),
            (this.gr.x = h),
            (this.gr.y = k),
            (this.Fq.x = g),
            (this.Fq.y = e),
            (this.Qn.left = this.Qn.top = 0),
            (this.Qn.right = a),
            (this.Qn.bottom = f),
            this.D1(this.Qn, this.gr, this.Fq, b),
            (a = this.Qn.right),
            (f = this.Qn.bottom),
            (h = this.gr.x),
            (k = this.gr.y),
            (g = this.Fq.x),
            (e = this.Fq.y));
        this.Mn.width = a;
        this.Mn.height = f;
        this.Mn.Mb = h;
        this.Mn.Gb = k;
        this.Mn.al = g;
        this.Mn.cl = e;
        return this.Mn;
      }
      return e;
    },
    D1: function (a, b, c, d) {
      var e, f, h;
      90 == d
        ? ((d = 0), (h = 1))
        : 180 == d
          ? ((d = -1), (h = 0))
          : 270 == d
            ? ((d = 0), (h = -1))
            : ((h = (d * Math.PI) / 180), (d = Math.cos(h)), (h = Math.sin(h)));
      var k, g, n, m, v;
      null == b
        ? (k = g = v = f = 0)
        : ((n = -b.x * d),
          (m = -b.x * h),
          (v = -b.y * d),
          (f = -b.y * h),
          (k = n + f),
          (g = v - m));
      e = null == b ? a.right : a.right - b.x;
      n = e * d;
      m = e * h;
      e = n + f;
      v -= m;
      var A;
      f = null == b ? a.bottom : a.bottom - b.y;
      A = n + f * h;
      f = f * d - m;
      var l, P;
      l = k + A - e;
      P = g + f - v;
      n = Math.min(k, Math.min(e, Math.min(A, l)));
      m = Math.min(g, Math.min(v, Math.min(f, P)));
      k = Math.max(k, Math.max(e, Math.max(A, l)));
      g = Math.max(g, Math.max(v, Math.max(f, P)));
      null != c &&
        (null == b
          ? ((e = c.x), (f = c.y))
          : ((e = c.x - b.x), (f = c.y - b.y)),
        (c.x = e * d + f * h - n),
        (c.y = f * d - e * h - m));
      null != b && ((b.x = -n), (b.y = -m));
      a.right = k - n;
      a.bottom = g - m;
    },
  };
  qa.Y3 = 10;
  qa.vv = 1;
  qa.Yf = function (a, b) {
    var c = new qa();
    c.app = a;
    c.Ze = new Image();
    c.Ze.onload = function () {
      c.app.ln++;
      c.width = c.Ze.width;
      c.height = c.Ze.height;
    };
    a.mn++;
    a.Dl = !0;
    c.Ze.src = a.Ep + b;
    return c;
  };
  qa.prototype = {
    Jt: function (a) {
      this.handle = a.B();
      a.Qa(12);
    },
    hH: function () {
      this.Ze = new Image();
      var a = this;
      this.Ze.onload = function () {
        a.app.Qo(a);
      };
      this.Ze.onerror = function () {
        a.app.Qo(a);
      };
      this.Ze.src = this.app.Ep + u.Tw(this.handle, "png");
    },
    load: function (a) {
      this.app = a;
      this.handle = a.file.B();
      this.width = a.file.B();
      this.height = a.file.B();
      this.Mb = a.file.xa();
      this.Gb = a.file.xa();
      this.al = a.file.xa();
      this.cl = a.file.xa();
      this.ne = 0;
      this.Ze = null;
      null != this.app.frame.Ox
        ? ((this.ne = this.app.frame.Ox[this.handle]),
          0 != this.ne
            ? (this.app.Ia.nQ(this.ne),
              (this.li = this.app.frame.li[this.handle]),
              (this.mi = this.app.frame.mi[this.handle]))
            : this.app.Tv(this))
        : this.app.Tv(this);
    },
    createElement: function () {
      var a = document.createElement("div");
      a.style.width = this.width + "px";
      a.style.height = this.height + "px";
      a.style.backgroundRepeat = "no-repeat";
      0 == this.ne
        ? (a.style.backgroundImage = "url('" + this.Ze.src + "')")
        : ((a.style.backgroundPosition =
            "-" + this.li + "px -" + this.mi + "px"),
          (a.style.backgroundImage =
            "url('" + this.app.Ep + "M" + u.Tw(this.ne, "png") + "')"));
      return a;
    },
    Ji: function (a, b, c, d) {
      if (0 == (a & Z.gq)) {
        null == this.uj &&
          ((this.uj = new Z()),
          this.hr & qa.vv
            ? this.uj.bH(this.app, this, a)
            : this.uj.aH(this.app, this, a));
        if (0 == b && 1 == c && 1 == d) return this.uj;
        null == this.xn && (this.xn = new W());
        var e,
          f = 2147483647,
          h = -1;
        for (e = 0; e < this.xn.size(); e++) {
          a = this.xn.get(e);
          if (b == a.angle && c == a.Fe && d == a.Ge) return a.ra;
          a.KK < f && ((f = a.KK), (h = e));
        }
        this.xn.size() < this.Y3 && (h = -1);
        a = new Af();
        a.ra = new Z();
        a.ra.p1(this.uj, b, c, d);
        a.angle = b;
        a.Fe = c;
        a.Ge = d;
        a.KK = this.app.Lg;
        0 > h ? this.xn.add(a) : this.xn.set(h, a);
        return a.ra;
      }
      null == this.Gr &&
        (null == this.uj &&
          ((this.uj = new Z()),
          this.hr & qa.vv
            ? this.uj.bH(this.app, this, 0)
            : this.uj.aH(this.app, this, 0)),
        (this.Gr = new Z()),
        this.hr & qa.vv
          ? this.Gr.bH(this.app, this, a)
          : this.Gr.aH(this.app, this, a));
      return this.Gr;
    },
  };
  Gd.prototype = {
    Nn: function (a) {
      var b = a.v(),
        c;
      this.Eh = 0;
      var d = a.Oa,
        e = new Wa();
      for (c = 0; c < b; c++)
        e.Jt(a), (this.Eh = Math.max(this.Eh, e.handle + 1));
      a.seek(d);
      this.RC = Array(this.Eh);
      for (c = 0; c < b; c++) (d = a.Oa), e.Jt(a), (this.RC[e.handle] = d);
      this.ec = Array(this.Eh);
      for (c = 0; c < this.Eh; c++) this.ec[c] = 0;
      this.ub = null;
      this.Wl = this.Eh;
      this.zn = 0;
      this.fonts = null;
    },
    load: function (a) {
      var b;
      for (b = this.zn = 0; b < this.Eh; b++) 0 != this.ec[b] && this.zn++;
      b = Array(this.zn);
      var c = 0,
        d;
      for (d = 0; d < this.Eh; d++)
        0 != this.ec[d] &&
          (null != this.fonts &&
          -1 != this.ub[d] &&
          null != this.fonts[this.ub[d]]
            ? (b[c] = this.fonts[this.ub[d]])
            : ((b[c] = new Wa()), a.seek(this.RC[d]), b[c].load(a)),
          (b[c].ec = this.ec[d]),
          c++);
      this.fonts = b;
      this.ub = Array(this.Eh);
      for (b = 0; b < this.Eh; b++) this.ub[b] = -1;
      for (b = 0; b < this.zn; b++) this.ub[this.fonts[b].handle] = b;
      this.Wl = this.Eh;
    },
    vk: function (a) {
      return -1 == a
        ? this.cy
        : 0 <= a && a < this.Wl && -1 != this.ub[a]
          ? this.fonts[this.ub[a]]
          : null;
    },
    JB: function (a) {
      return this.vk(a).j2();
    },
    Jj: function () {
      if (0 == (this.app.Vaa & q.eo) && 0 == (this.app.Cb & q.lE)) {
        var a;
        for (a = 0; a < this.Eh; a++) this.ec[a] = 0;
      }
    },
    Py: function () {
      var a;
      for (a = 0; a < this.Eh; a++) this.RC[a] && (this.ec[a] = 1);
    },
    Op: function (a) {
      -1 == a
        ? null == this.cy && ((this.cy = new Wa()), this.cy.rB())
        : this.ec[a]++;
    },
    tl: function (a) {
      this.Op(a);
      return -1;
    },
    LA: function (a) {
      var b, c;
      for (
        c = 0;
        c < this.zn &&
        (null == this.fonts[c] ||
          this.fonts[c].Oc != a.Oc ||
          this.fonts[c].di != a.di ||
          this.fonts[c].ci != a.ci ||
          this.fonts[c].Bh != a.Bh);
        c++
      );
      if (c < this.zn) return this.fonts[c].handle;
      c = -1;
      for (b = this.Eh; b < this.Wl && -1 != this.ub[b]; b++);
      if (-1 == c) {
        var d = Array(this.Wl + 10);
        for (b = 0; b < this.Wl; b++) d[b] = this.ub[b];
        for (; b < this.Wl + 10; b++) d[b] = -1;
        c = this.Wl;
        this.Wl += 10;
        this.ub = d;
      }
      d = -1;
      for (b = 0; b < this.zn; b++)
        if (null == this.fonts[b]) {
          d = b;
          break;
        }
      -1 == d && ((d = this.zn), this.fonts.push(null));
      this.ub[c] = d;
      this.fonts[d] = new Wa();
      this.fonts[d].handle = c;
      this.fonts[d].Oc = a.Oc;
      this.fonts[d].di = a.di;
      this.fonts[d].ci = a.ci;
      this.fonts[d].Bh = a.Bh;
      return c;
    },
  };
  Wa.prototype = {
    Jt: function (a) {
      this.handle = a.v();
      0 == a.mk ? a.Qa(72) : a.Qa(104);
    },
    load: function (a) {
      this.handle = a.v();
      var b = a.Oa;
      a.Qa(12);
      this.Oc = a.v();
      0 > this.Oc && (this.Oc = -this.Oc);
      a.v();
      a.v();
      a.v();
      this.di = a.v();
      this.ci = a.Uc();
      a.Uc();
      a.Uc();
      a.Uc();
      a.Uc();
      a.Uc();
      a.Uc();
      a.Uc();
      this.Bh = a.Nd();
      0 == a.mk ? a.seek(b + 72) : a.seek(b + 104);
    },
    j2: function () {
      var a = new rb();
      a.Oc = this.Oc;
      a.di = this.di;
      a.ci = this.ci;
      a.Bh = this.Bh;
      return a;
    },
    rB: function () {
      this.Bh = "Arial";
      this.Oc = 13;
      this.di = 400;
      this.ci = 0;
    },
    Ii: function () {
      return this.Oc + Math.ceil(this.Oc / 8);
    },
    uk: function () {
      if (null == this.font) {
        this.font = this.ci ? "italic " : "normal ";
        var a = 100 * Math.floor(this.di / 100),
          a = Math.max(a, 100),
          a = Math.min(a, 900);
        this.font += a + " ";
        this.font += this.Oc + "px ";
        this.font += this.Bh;
      }
      return this.font;
    },
  };
  Hd.prototype = {
    Nn: function (a) {
      this.file = a;
      this.zd = this.file.B();
      this.SC = Array(this.zd);
      this.ec = Array(this.zd);
      this.ub = Array(this.zd);
      for (a = 0; a < this.zd; a++) (this.ec[a] = 0), (this.ub[a] = -1);
      var b = this.file.B(),
        c = new vb(this.app),
        d;
      for (a = 0; a < b; a++)
        (d = this.file.Oa), c.Jt(), (this.SC[c.handle] = d);
      this.An = this.zd;
      this.ay = 0;
      this.Qp = null;
    },
    p2: function (a) {
      return 0 <= a && a < this.An && -1 != this.ub[a]
        ? this.Qp[this.ub[a]]
        : null;
    },
    KB: function (a) {
      for (var b = 0; b < this.An; b++)
        if (-1 != this.ub[b] && this.Qp[this.ub[b]].name == a) return b;
      return -1;
    },
    Jj: function () {
      if (0 == (this.app.Cb & q.eo) && 0 == (this.app.Cb & q.lE)) {
        var a;
        for (a = 0; a < this.zd; a++) this.ec[a] = 0;
      }
    },
    Py: function () {
      var a;
      for (a = 0; a < this.zd; a++) this.SC[a] && (this.ec[a] = 1);
    },
    Op: function (a) {
      this.ec[a]++;
    },
    tl: function (a) {
      this.Op(a);
      return -1;
    },
    load: function () {
      var a;
      for (a = this.ay = 0; a < this.zd; a++) 0 != this.ec[a] && this.ay++;
      a = Array(this.ay);
      var b = 0,
        c;
      for (c = 0; c < this.zd; c++)
        0 != this.ec[c] &&
          (null != this.Qp && -1 != this.ub[c] && null != this.Qp[this.ub[c]]
            ? (a[b] = this.Qp[this.ub[c]])
            : ((a[b] = new vb(this.app)),
              this.file.seek(this.SC[c]),
              a[b].load()),
          (a[b].ec = this.ec[c]),
          b++);
      this.Qp = a;
      this.ub = Array(this.zd);
      for (a = 0; a < this.zd; a++) this.ub[a] = -1;
      for (a = 0; a < this.ay; a++) this.ub[this.Qp[a].handle] = a;
      this.An = this.zd;
      this.Jj();
    },
  };
  vb.prototype = {
    Jt: function () {
      this.handle = this.file.B();
      this.file.Qa(5);
      var a = this.file.B();
      0 == this.file.mk ? this.file.Qa(a) : this.file.Qa(2 * a);
    },
    hH: function () {
      var a,
        b = this.Vd.hf.JJ & this.type;
      0 == b && (b = this.Vd.hf.QI & this.type);
      for (a = 0; 4 > a && !(b & (1 << a)); a++);
      if (4 > a) {
        b = "";
        switch (a) {
          case 0:
            b = "ogg";
            break;
          case 1:
            b = "m4a";
            break;
          case 2:
            b = "mp3";
            break;
          case 3:
            b = "wav";
        }
        if (this.context) {
          var c = this,
            d = new XMLHttpRequest();
          d.open("GET", this.Vd.Ep + u.Tw(this.handle, b), !0);
          d.responseType = "arraybuffer";
          d.addEventListener("load", function () {
            c.response = d.response;
            c.Vd.hf.m0(c);
          });
          d.send();
        } else
          (this.Lc = new Audio()),
            (this.Lc.eca = "auto"),
            (c = this),
            this.Lc.addEventListener(
              "loadeddata",
              function (a) {
                c.Vd.Qo(c);
                c.Lc.removeEventListener("loadeddata", arguments.callee, !1);
              },
              !1,
            ),
            this.Lc.addEventListener(
              "error",
              function () {
                c.Vd.Qo(c);
                c.Lc = null;
              },
              !1,
            ),
            (this.Lc.src = this.Vd.Ep + u.Tw(this.handle, b)),
            this.Lc.load(),
            (this.Lc.autoplay = !1);
      } else this.Vd.Qo(this);
    },
    load: function () {
      this.handle = this.file.B();
      this.type = this.file.Uc();
      this.lt = this.frequency = this.file.v();
      var a = this.file.B();
      this.name = this.file.Nd(a);
      this.Lc = null;
      this.Vd.Tv(this);
    },
    y3: function () {
      this.handle = 9999;
      this.type = 4;
      this.lt = this.frequency = 4e4;
      this.name = "";
      this.Lc = null;
      this.Vd.Tv(this);
    },
    Tr: function (a, b) {
      a || (a = 0);
      b || (b = this.frequency);
      if (this.Lc)
        (this.Lc.volume = this.volume / 100),
          (this.lt = b),
          (this.Lc.playbackRate = b / this.frequency),
          this.Lc.duration && (this.Lc.currentTime = 0),
          this.Lc.play();
      else if (this.buffer) {
        this.source = this.context.createBufferSource();
        this.source.buffer = this.buffer;
        0 == this.jt
          ? ((this.source.gain.value = this.volume / 100),
            this.source.connect(this.context.destination))
          : ((this.gain = this.context.createGain()),
            this.source.connect(this.gain),
            this.gain.connect(this.context.destination),
            (this.gain.gain.value = this.volume / 100));
        a || (a = 0);
        b || (b = this.frequency);
        this.lt = b;
        this.source.playbackRate.value = b / this.frequency;
        this.startTime = Date.now() - a;
        "undefined" !== typeof this.source.start
          ? this.source.start(0, a / 1e3)
          : this.source.noteOn(a);
        var c = this;
        this.source.onended = function () {
          c.CN = !0;
        };
      }
      this.Zh = !1;
      this.Lo = !0;
      this.CN = !1;
    },
    play: function (a, b, c) {
      this.Bn = a;
      0 == this.Bn && (this.Bn = 1e7);
      this.volume = c;
      this.Tr();
    },
    stop: function () {
      this.Lc
        ? this.Lc.pause()
        : this.source &&
          this.Lo &&
          ("undefined" !== typeof this.source.stop
            ? this.source.stop(0)
            : this.source.noteOff(0),
          (this.source.onended = null));
      this.Lo = this.tw = !1;
    },
    d6: function (a) {
      this.volume = a;
      this.Lc
        ? (this.Lc.volume = a / 100)
        : this.source &&
          (this.gain
            ? (this.gain.gain.value = a / 100)
            : (this.source.gain.value = a / 100));
    },
    pause: function () {
      this.Zh ||
        (this.Lc
          ? this.Lc.pause()
          : this.source &&
            ((this.source.onended = null),
            "undefined" !== typeof this.source.stop
              ? this.source.stop(0)
              : this.source.noteOff(0),
            (this.y4 = Date.now() - this.startTime)),
        (this.Zh = !0));
    },
    v2: function () {
      this.Zh ? (this.fB = !1) : (this.pause(), (this.fB = !0));
    },
    resume: function () {
      this.Zh &&
        (this.Lc ? this.Lc.play() : this.source && this.Tr(this.y4),
        (this.Zh = !1));
    },
    w2: function () {
      this.fB && (this.resume(), (this.fB = !1));
    },
    dI: function () {
      return this.Zh;
    },
    bQ: function () {
      return (this.Lc || this.source) && this.Lo ? !0 : !1;
    },
    setPosition: function (a) {
      this.Lc
        ? (this.Lc.currentTime = a / 1e3)
        : this.source &&
          (this.Lo &&
            ((this.source.onended = null),
            "undefined" !== typeof this.source.stop
              ? this.source.stop(0)
              : this.source.noteOff(0)),
          this.Tr(a));
    },
    Y5: function (a) {
      var b = a / this.frequency;
      this.lt = a;
      this.Lc
        ? (this.Lc.playbackRate = b)
        : this.source && (this.source.playbackRate.value = b);
    },
    W0: function () {
      if (1 == this.Lo && 0 == this.Zh)
        if (this.Lc) {
          if (this.Lc.ended) {
            if (0 < this.Bn && (this.Bn--, 0 < this.Bn))
              return this.Tr(0, this.lt), !1;
            this.Lo = this.tw = !1;
            return !0;
          }
        } else if (this.source && (3 == this.source.playbackState || this.CN)) {
          if (0 < this.Bn && (this.Bn--, 0 < this.Bn))
            return this.Tr(0, this.lt), !1;
          this.Lo = this.tw = !1;
          return !0;
        }
      return !1;
    },
  };
  Ub.prototype = {
    bL: function (a) {
      this.bS[this.position++] = a;
    },
  };
  Y.wi = 80;
  Y.qz = 52;
  Y.QV = Y.wi;
  Y.RV = Y.QV + 1 - Y.qz;
  Y.jA = 4;
  Y.uE = 199 + Y.wi;
  Y.SV = Y.uE + 1 - Y.jA - Y.qz;
  Y.AZ = 256;
  Y.LW = 1;
  Y.zaa = function (a, b) {
    var c = b >> 5,
      d = 1 << (b & 31),
      e = 0 != (a[c] & d);
    a[c] |= d;
    return e;
  };
  Y.Q1 = function (a) {
    return a.dd + 0;
  };
  Y.Xi = function (a) {
    a &= 65535;
    return 0 != (a & 32768) ? a - 65536 : a;
  };
  Y.HE = function (a) {
    return a >> 16;
  };
  Y.dr = function (a) {
    return a & 4294901760;
  };
  Y.prototype = {
    fn: function (a) {
      var b;
      this.Zf = 0;
      this.lm = null;
      this.mm = -1;
      if (0 != (a & 32768)) return 32767 == (a & 32767) ? null : this.I4(a);
      var c = this.F.ya[a];
      if (c.Ld == this.td) {
        if (0 != (c.tc & 2147483648)) return null;
        b = this.F.X[c.tc];
        this.Vn = null;
        this.as = c;
        this.Mj = b;
        this.By = a;
      } else {
        c.Ld = this.td;
        if (this.Vk) return (c.tc = -1), (c.Fg = 0), null;
        c.tc = c.Jc;
        if (0 != (c.Jc & 2147483648)) return (c.Fg = 0), null;
        var d = c.Jc;
        do (b = this.F.X[d]), (d = b.Zd), (b.ve = d);
        while (0 == (d & 2147483648));
        b = this.F.X[c.Jc];
        this.Vn = null;
        this.as = c;
        this.Mj = b;
        this.By = a;
        c.Fg = c.wp;
      }
      this.Zf = c.Fg;
      return b;
    },
    I4: function (a) {
      var b,
        c,
        d = 0,
        e = 0;
      for (a = this.gg[a & 32767]; e < a.ja.length; ) {
        c = a.ja[e + 1];
        if (0 > c) break;
        c = this.F.ya[c];
        if (c.Ld == this.td)
          (b = 0),
            0 == (c.tc & 2147483648) &&
              ((b = c.Fg), null == this.lm && ((this.lm = a), (this.mm = e)));
        else if (((b = 0), (c.Ld = this.td), this.Vk)) (c.tc = -1), (c.Fg = 0);
        else if (((c.tc = c.Jc), 0 != (c.Jc & 2147483648))) c.Fg = 0;
        else {
          null == this.lm && ((this.lm = a), (this.mm = e));
          b = c.Jc;
          do (b = this.F.X[b]), (b = b.ve = b.Zd);
          while (0 == (b & 2147483648));
          b = c.Fg = c.wp;
        }
        d += b;
        e += 2;
      }
      a = this.lm;
      return null != a
        ? ((c = this.F.ya[a.ja[this.mm + 1]]),
          (this.Vn = null),
          (this.as = c),
          (this.Mj = b = this.F.X[c.tc]),
          (this.By = a.ja[this.mm + 1]),
          (this.Zf = d),
          b)
        : null;
    },
    ul: function () {
      var a = this.Mj,
        b;
      if (null == a && ((b = this.F.ya[this.By]), 0 == (b.tc & 2147483648)))
        return (
          (a = this.F.X[b.tc]), (this.Vn = null), (this.as = b), (this.Mj = a)
        );
      if (null != a && 0 == (a.ve & 2147483648))
        return (this.Vn = a), (this.as = null), (this.Mj = a = this.F.X[a.ve]);
      if (null == this.lm) return null;
      do {
        this.mm += 2;
        if (this.mm >= this.lm.ja.length) return null;
        a = this.lm.ja[this.mm + 1];
        if (0 > a) return null;
        b = this.F.ya[a];
      } while (0 != (b.tc & 2147483648));
      this.Vn = null;
      this.as = b;
      this.Mj = a = this.F.X[b.tc];
      this.By = this.lm.ja[this.mm + 1];
      return a;
    },
    iP: function (a) {
      a = this.gg[a & 32767];
      for (var b = 0, c; b < a.ja.length; ) {
        c = a.ja[b + 1];
        if (0 > c) break;
        c = this.F.ya[c];
        c.Ld = this.td;
        c.Fg = 0;
        c.tc = -1;
        b += 2;
      }
    },
    Vg: function () {
      --this.Mj.vd.Fg;
      null != this.Vn
        ? ((this.Vn.ve = this.Mj.ve), (this.Mj = this.Vn))
        : ((this.as.tc = this.Mj.ve), (this.Mj = null));
    },
    Qw: function (a) {
      var b = a.vd;
      if (b.Ld != this.td)
        (b.Ld = this.td), (b.tc = a.Nc), (b.Fg = 1), (a.ve = -1);
      else {
        var c = b.tc;
        if (0 != (c & 2147483648)) (b.tc = a.Nc), (b.Fg += 1), (a.ve = -1);
        else {
          do {
            if (a.Nc == c) return;
            b = this.F.X[c];
            c = b.ve;
          } while (0 == (c & 2147483648));
          b.ve = a.Nc;
          a.ve = -1;
          a.vd.Fg += 1;
        }
      }
    },
    FO: function (a) {
      a = this.F.ya[a];
      a.Ld = this.td;
      a.tc = -1;
      a.Fg = 0;
    },
    R1: function (a, b) {
      if (0 == (a & 32768)) this.FO(a);
      else {
        if (32767 == (a & 32767)) return;
        var c = this.gg[a & 32767],
          d;
        for (d = 0; d < c.ja.length; d += 2) {
          var e = c.ja[d + 1];
          if (0 > e) break;
          this.FO(e);
        }
      }
      b.ve = -1;
      b.vd.tc = b.Nc;
      b.vd.Fg = 1;
      b.vd.Ld = this.td;
    },
    jP: function () {
      var a, b, c;
      for (b = 0; b < this.F.Nj; b++)
        if (((c = this.F.ya[b]), c.Ld == this.td)) {
          if (c.qJ != this.zD)
            for (c.qJ = this.zD, a = c.Jc; 0 == (a & 2147483648); )
              (a = this.F.X[a]), (a.UH = 0), (a = a.Zd);
          for (a = c.tc; 0 == (a & 2147483648); )
            (a = this.F.X[a]), (a.UH = 1), (a = a.ve);
        }
    },
    hP: function () {
      var a, b, c, d, e;
      for (d = 0; d < this.F.Nj; d++)
        if (((e = this.F.ya[d]), e.qJ == this.zD))
          for (e.Ld = this.td, a = e.Jc, c = null; 0 == (a & 2147483648); )
            (b = this.F.X[a]),
              0 != b.UH &&
                (null != c ? (c.ve = a) : (e.tc = a), (b.ve = -1), (c = b)),
              (a = b.Zd);
    },
    Xo: function (a) {
      if (this.Lj) return (this.uu = !1), (a = this.LB(a));
      var b;
      if (0 == (a & 32768))
        return (
          (b = this.F.ya[a]),
          b.Ld == this.td && 0 == (b.tc & 2147483648)
            ? this.F.X[b.tc]
            : 0 == (b.Jc & 2147483648)
              ? this.F.X[b.Jc]
              : null
        );
      a = this.gg[a & 32767];
      var c = 0;
      if (c >= a.ja.length) return null;
      do {
        b = a.ja[c + 1];
        if (0 > b) break;
        b = this.F.ya[b];
        if (b.Ld == this.td && 0 == (b.tc & 2147483648)) return this.F.X[b.tc];
        c += 2;
      } while (c < a.ja.length);
      c = 0;
      do {
        b = a.ja[c + 1];
        if (0 > b) break;
        b = this.F.ya[b];
        if (0 == (b.Jc & 2147483648)) return this.F.X[b.Jc];
        c += 2;
      } while (c < a.ja.length);
      return null;
    },
    u2: function (a, b) {
      this.uu = !0;
      var c = this.LB(a);
      if (null != c)
        return 0 != this.ef && ((b.Pb |= la.co), (this.Kj = !0)), c;
      b.Pb |= oa.xs;
      return c;
    },
    If: function (a) {
      a.Pb &= ~oa.xs;
      this.uu = !0;
      var b = this.LB(a.hc);
      if (null != b)
        return 0 != this.ef && ((a.Pb |= la.co), (this.Kj = !0)), b;
      a.Pb |= oa.xs;
      return b;
    },
    LB: function (a) {
      return 0 == (a & 32768) ? this.s2(a) : this.t2(a);
    },
    s2: function (a) {
      var b = this.F.ya[a];
      if (b.oJ != this.$r) {
        b.oJ = this.$r;
        b.pJ = this.Ti;
        if (b.Ld == this.td && 0 == (b.tc & 2147483648)) {
          b.cm = b.tc;
          a = this.F.X[b.tc];
          b.xp = a.ve;
          if (0 != (a.ve & 2147483648))
            return (b.Ok = !1), (b.vp = 1), (this.ef = !1), a;
          b.Ok = !0;
          b.vp = 2;
          this.ef = !0;
          return a;
        }
        if (this.uu && b.Ld == this.td) return (b.vp = 0), (b.cm = -1), null;
        if (0 == (b.Jc & 2147483648)) {
          b.cm = b.Jc;
          a = this.F.X[b.Jc];
          if (null == a) return (b.vp = 0), (b.cm = -1), null;
          if (0 == (a.Zd & 2147483648))
            return (b.xp = a.Zd), (b.Ok = !0), (b.vp = 3), (this.ef = !0), a;
          b.Ok = !1;
          b.vp = 1;
          this.ef = !1;
          return a;
        }
        b.vp = 0;
        b.cm = -1;
        return null;
      }
      if (b.pJ != this.Ti) {
        var c;
        b.pJ = this.Ti;
        switch (b.vp) {
          case 0:
            return (this.ef = b.Ok), null;
          case 1:
            return (a = this.F.X[b.cm]), (this.ef = b.Ok), a;
          case 2:
            b.cm = b.xp;
            a = this.F.X[b.xp];
            if (null == a) return null;
            c = a.ve;
            0 != (c & 2147483648) && ((b.Ok = !1), (c = b.tc));
            b.xp = c;
            this.ef = b.Ok;
            return a;
          case 3:
            b.cm = b.xp;
            a = this.F.X[b.xp];
            if (null == a) return null;
            c = a.Zd;
            0 != (c & 2147483648) && ((b.Ok = !1), (c = b.Jc));
            b.xp = c;
            this.ef = b.Ok;
            return a;
        }
      }
      if (0 > b.cm) return null;
      a = this.F.X[b.cm];
      this.ef = b.Ok;
      return a;
    },
    t2: function (a) {
      var b,
        c = this.gg[a & 32767];
      if (c.eD != this.$r) {
        c.eD = this.$r;
        c.LJ = this.Ti;
        b = this.nS(c);
        if (0 <= b) {
          c.fm = b;
          a = this.F.X[b];
          if (null == a) return (c.yp = 0), (c.fm = -1), null;
          b = a.ve;
          if (0 != (b & 2147483648) && ((b = this.OJ(c)), 0 > b))
            return (c.yp = 1), (this.ef = c.Sk = !1), a;
          c.zp = b;
          c.yp = 2;
          this.ef = c.Sk = !0;
          return a;
        }
        if (this.uu && c.MJ) return (c.yp = 0), (c.fm = -1), null;
        b = this.mS(c);
        if (0 <= b && ((c.fm = b), (a = this.F.X[b]), null != a)) {
          b = a.Zd;
          if (
            0 != (b & 2147483648) &&
            ((b = this.NJ(c)), 0 != (b & 2147483648))
          )
            return (c.yp = 1), (this.ef = c.Sk = !1), a;
          c.zp = b;
          c.yp = 3;
          this.ef = c.Sk = !0;
          return a;
        }
        c.yp = 0;
        c.fm = -1;
        return null;
      }
      if (c.LJ != this.Ti)
        switch (((c.LJ = this.Ti), c.yp)) {
          case 0:
            return (this.ef = c.Sk), null;
          case 1:
            return (a = this.F.X[c.fm]), (this.ef = c.Sk), a;
          case 2:
            return (
              (c.fm = c.zp),
              (a = this.F.X[c.zp]),
              null != a &&
                ((b = a.ve),
                0 != (b & 2147483648) &&
                  ((b = this.OJ(c)), 0 > b && ((c.Sk = !1), (b = this.nS(c)))),
                (c.zp = b)),
              (this.ef = c.Sk),
              a
            );
          case 3:
            return (
              (c.fm = c.zp),
              (a = this.F.X[c.zp]),
              null != a &&
                ((b = a.Zd),
                0 != (b & 2147483648) &&
                  ((b = this.NJ(c)),
                  0 != (b & 2147483648) && ((c.Sk = !1), (b = this.mS(c)))),
                (c.zp = b)),
              (this.ef = c.Sk),
              a
            );
        }
      if (0 > c.fm) return null;
      a = this.F.X[c.fm];
      this.ef = c.Sk;
      return a;
    },
    OJ: function (a) {
      for (var b = a.mu, c; b < a.ja.length; ) {
        c = a.ja[b + 1];
        if (0 > c) break;
        c = this.F.ya[c];
        if (c.Ld == this.td && ((a.MJ = !0), 0 == (c.tc & 2147483648)))
          return (a.mu = b + 2), c.tc;
        b += 2;
      }
      return -1;
    },
    nS: function (a) {
      a.mu = 0;
      a.MJ = !1;
      return this.OJ(a);
    },
    NJ: function (a) {
      for (var b = a.mu, c; b < a.ja.length; ) {
        c = a.ja[b + 1];
        if (0 > c) break;
        c = this.F.ya[c];
        if (0 == (c.Jc & 2147483648)) return (a.mu = b + 2), c.Jc;
        b += 2;
      }
      return -1;
    },
    mS: function (a) {
      a.mu = 0;
      return this.NJ(a);
    },
    H1: function () {
      this.PG = !1;
      for (var a = this.F.xD, b = this.F.yD; ; ) {
        for (var c = null, d = null, e = this.F.HS; null != e; ) {
          if (0 > e.index) {
            (c = e.next) && (u.he(e.name, c.name) || (c = null));
            break;
          }
          d = e;
          e = e.next;
        }
        if (null == e) break;
        var f = -2686976,
          h = -2686976,
          k = null;
        0 < e.Lk && (k = e.Be[0].eb == F.Ed ? this.Cj : this.Bj);
        null != k &&
          ((k = k.get(e.name)),
          void 0 != k && (f = 65536 * -k),
          null != c &&
            ((k = null),
            0 < c.Lk && (k = c.Be[0].eb == F.Ed ? this.Cj : this.Bj),
            null != k &&
              ((k = k.get(c.name)), void 0 != k && (h = 65536 * -k))));
        e.stop = !1;
        for (e.index = 0; e.index < e.Lk; e.index++) {
          this.F.xD = e;
          if ((this.F.yD = c)) c.index = e.index;
          this.Lj = 0;
          this.Gd(e.Be[e.index], f);
          if (e.stop) break;
        }
        if (c)
          for (c.index = 0; c.index < c.Lk; c.index++) {
            this.F.xD = c;
            if ((this.F.yD = e)) e.index = c.index;
            this.Lj = 0;
            this.Gd(c.Be[c.index], h);
            if (c.stop) break;
          }
        c && (e.next = c.next);
        null == d ? (this.F.HS = e.next) : (d.next = e.next);
      }
      this.F.xD = a;
      this.F.yD = b;
    },
    S1: function (a, b) {
      for (var c = 0; c < a.length; c += 2) {
        var d = this.F.ya[a[c + 1]];
        if (d.Ld == this.td) {
          var e = b.get(d);
          void 0 != e ? (e.length = 0) : ((e = []), b.set(d, e));
          for (d = d.tc; 0 <= d; ) {
            var f = this.F.X[d];
            if (null == f) break;
            0 == (f.wa & aa.xi) && e.push(d);
            d = f.ve;
          }
        }
      }
    },
    T1: function (a) {
      var b = this.lB.length,
        c = new Map();
      if (0 < b)
        for (
          var b = this.lB[b - 1], d = hc(b.keys()), e = d.next();
          !e.done;
          e = d.next()
        ) {
          var e = e.value,
            f = b.get(e).slice();
          c.set(e, f);
        }
      this.S1(a.kd, c);
      this.lB.push(c);
      this.fj(a.fP, null);
      this.lB.pop();
    },
    bi: function (a) {
      var b = a & 65535;
      0 != (b & 32768) && (b = 65536 - b);
      a = this.we[this.Ui[b] + -(a >> 16)];
      0 != a && this.fj(a, null);
    },
    Gd: function (a, b) {
      this.FD = b;
      var c = this.we[a.RH + -(b >> 16)];
      return 0 != c ? (this.fj(c, a), !0) : !1;
    },
    C2: function () {
      for (var a = !1, b = this.F.nK; b; ) {
        if (this.F.Hp >= b.Lg)
          if (b.type == Vb.a0) {
            this.F.s.ld = b.name;
            var c = this.we[this.Ui[-F.Fv] + ka.vM];
            0 != c && this.fj(c, null);
            a = b.EG = !0;
          } else
            for (0 == b.Xy && (b.Xy = this.F.Hp); this.F.Hp >= b.Xy; ) {
              this.F.s.ld = b.name;
              this.F.s.KS = b.index;
              c = this.we[this.Ui[-F.Fv] + ka.vM];
              0 != c && this.fj(c, null);
              b.index++;
              b.jC--;
              if (0 == b.jC) {
                a = b.EG = !0;
                break;
              }
              b.Xy += b.v6;
            }
        b = b.next;
      }
      if (a)
        for (b = this.F.nK, a = null; b; )
          (c = b.next),
            b.EG ? (null == a ? (this.F.nK = c) : (a.next = c)) : (a = b),
            (b = c);
    },
    j1: function () {
      var a;
      if (0 != (this.F.wf & t.qv))
        (a = this.we[this.Ui[-F.kA] + 1]),
          0 != a &&
            ((this.we[this.Ui[-F.kA] + 1] = -1),
            this.fj(a, null),
            (this.Cy = !0));
      else {
        a = this.we[this.Ui[-F.Fv] + 3];
        0 != a && this.fj(a, null);
        a = this.we[this.Ui[-F.kA] + 1];
        var b, c, d, e, f;
        if (0 != a) {
          if (this.Cy) {
            e = null;
            b = a;
            do {
              d = this.ue[b];
              if (d != e)
                for (e = d, c = d.dd; c < d.dd + d.xh; c++)
                  (f = d.tb[c]), 0 == (f.Pb & oa.xs) && (f.Pb |= oa.xz);
              b++;
            } while (null != this.ue[b]);
          }
          this.fj(a, null);
          this.we[this.Ui[-F.kA] + 1] = 0;
          if (this.Cy) {
            e = null;
            b = a;
            do {
              d = this.ue[b];
              if (d != e)
                for (e = d, c = d.dd; c < d.dd + d.xh; c++)
                  (f = d.tb[c]), (f.Pb &= ~oa.xz);
              b++;
            } while (null != this.ue[b]);
            this.Cy = !1;
          }
        }
        a = this.we[this.Ui[-F.Fv] + 2];
        0 != a && this.fj(a, null);
        a = this.we[this.Ui[-F.Fv] + 1];
        0 != a && this.fj(a, null);
      }
    },
    f1: function (a) {
      var b,
        c,
        d = 0;
      do {
        b = a[d];
        if (0 == (b.qa & U.Oh)) {
          this.Jh = b;
          this.Gp[0] = 0;
          this.Gp[1] = 0;
          this.Gp[2] = 0;
          this.Gp[3] = 0;
          this.td += 1;
          this.Vk = !1;
          for (c = 1; c < b.dd && 0 != b.tb[c].mb(this.F); c++);
          c == b.dd && this.hB(b);
        }
        d++;
      } while (d < a.length);
    },
    fj: function (a, b) {
      var c, d, e;
      this.uD = !1;
      do
        if (((d = this.ue[a]), 0 == (d.qa & U.Oh)))
          if (
            ((this.Jh = d),
            (this.Gp[0] = 0),
            (this.Gp[1] = 0),
            (this.Gp[2] = 0),
            (this.Gp[3] = 0),
            0 == (d.qa & U.EE))
          ) {
            this.td += 1;
            this.Vk = !1;
            e = 0;
            if (d.tb[e].pd(this.F, b))
              for (e++; e < d.dd && 0 != d.tb[e].mb(this.F); e++);
            if (e == d.dd)
              if (this.uD) null != b && this.T0(b);
              else if ((this.hB(d), 0 != (d.qa & U.lv))) break;
            a++;
          } else {
            this.zD++;
            if (0 == (d.qa & U.OL)) {
              c = !1;
              do {
                this.td++;
                this.Vk = !1;
                e = this.gj[a];
                0 == d.tb[e].pd(this.F, b) && (this.Vk = !0);
                for (e++; e < d.dd && -1507329 != d.tb[e].Ga; )
                  0 == d.tb[e].mb(this.F) && (this.Vk = !0), e++;
                this.jP();
                0 == this.Vk && (c = !0);
                a++;
                d = this.ue[a];
                if (null == d) break;
              } while (d == this.Jh);
            } else {
              var f;
              c = this.Vk = !1;
              do {
                this.td++;
                f = !1;
                e = this.gj[a];
                if (d.tb[e].pd(this.F, b))
                  for (e++; e < d.dd && -1572865 != d.tb[e].Ga; ) {
                    if (0 == d.tb[e].mb(this.F)) {
                      f = !0;
                      break;
                    }
                    e++;
                  }
                else f = !0;
                0 == f && (this.jP(), (c = !0));
                a++;
                d = this.ue[a];
                if (null == d) break;
              } while (d == this.Jh);
            }
            if (
              c &&
              (this.td++,
              this.hP(),
              (d = 0 != (this.Jh.qa & U.lv)),
              this.hB(this.Jh),
              d)
            )
              break;
          }
        else if ((a++, null != this.ue[a]))
          for (c = this.ue[a]; c == d; ) {
            a++;
            if (null == this.ue[a]) break;
            c = this.ue[a];
          }
      while (null != this.ue[a]);
    },
    hB: function (a) {
      this.VG = null;
      if (0 != (a.qa & U.NL)) {
        0 != (a.qa & U.GE) && (this.Fp = new W());
        if (0 != (a.qa & U.DE)) {
          var b = this.F.Ee,
            c = a.$q;
          a.$q = b;
          if (b == c || b - 1 == c) return;
        }
        if (0 != (a.qa & U.FE))
          if (0 != a.vt) a.vt--;
          else return;
        if (0 != (a.qa & U.zz)) {
          b = this.F.Hp / 10;
          c = a.vt;
          if (0 != c && b < c) return;
          a.vt = b + a.$q;
        }
      }
      this.$r++;
      this.Kj = !1;
      this.Ti = 0;
      this.Lj = !0;
      b = 0;
      do
        (c = a.tb[b + a.dd]),
          0 == (c.Pb & (oa.LL | oa.xz)) && ((c.Pb &= ~la.co), c.Qb(this.F)),
          b++;
      while (b < a.xh);
      if (this.Kj) {
        do
          for (this.Kj = !1, this.Ti++, b = 0; b < a.xh; b++)
            (c = a.tb[b + a.dd]),
              0 != (c.Pb & la.co) && ((c.Pb &= ~la.co), c.Qb(this.F));
        while (this.Kj);
      }
      b = this.VG;
      0 != (a.qa & U.lv) && 0 != (a.qa & U.yz) && (b = null);
      this.VG = null;
      this.Lj = !1;
      null != this.Fp && this.K1();
      this.PG && this.H1();
      b && this.T1(b);
    },
    T0: function (a) {
      var b;
      b = a.Bc;
      this.td += 1;
      this.Qw(a);
      this.$r++;
      this.Kj = !1;
      this.Ti = 0;
      this.Lj = !0;
      var c = 0,
        d;
      do {
        a = this.Jh.tb[this.Jh.dd + c];
        d = a.Ga & 4294901760;
        if (262144 == d || 589824 == d)
          if (b == a.We) a.Qb(this.F);
          else if (((d = a.hc), 0 != (d & 32768))) {
            var e = this.gg[d & 32767];
            for (d = 0; d < e.ja.length; ) {
              var f = e.ja[d];
              if (0 > f) break;
              if (f == b) {
                a.Qb(this.F);
                break;
              }
              d += 2;
            }
          }
        c++;
      } while (c < this.Jh.xh);
      this.Lj = !1;
    },
    K1: function () {
      if (!(1 >= this.Fp.size())) {
        var a = this.F.random(this.Fp.size()),
          b;
        do b = this.F.random(this.Fp.size());
        while (a == b);
        a = this.Fp.get(a);
        b = this.Fp.get(b);
        var c = a.w,
          d = a.A,
          e = b.A;
        t.Cd(a, b.w);
        t.Dd(a, e);
        t.Cd(b, c);
        t.Dd(b, d);
        this.Fp = null;
      }
    },
    ky: function (a, b) {
      var c;
      if (
        null != this.F &&
        (this.F.KH(),
        0 == this.F.Uk &&
          0 != this.sw &&
          ((c = a), 2 == b && (c += Y.AZ), (this.F.Ku = 0), 0 == this.F.pi))
      ) {
        this.iK = this.ld = c;
        this.bi(-262150);
        this.bi(-327686);
        c = 0;
        var d,
          e,
          f,
          h,
          k,
          g,
          n = new W();
        for (d = 0; d < this.F.Xb; d++) {
          for (; null == this.F.X[c]; ) c++;
          e = this.F.X[c];
          c++;
          f = e.w - e.ab;
          h = e.A - e.bb;
          k = f + e.ea;
          g = h + e.ga;
          this.F.vu >= f &&
            this.F.vu < k &&
            this.F.wu >= h &&
            this.F.wu < g &&
            0 != (e.jj & ga.nh) &&
            0 == (e.wa & aa.xi) &&
            (e.eb == F.Ed
              ? 0 == (e.Z.Ha & R.tq)
                ? this.Vd.Ia.Ac(e.b.Jb)
                    .Ji(Z.zs, 0, 1, 1)
                    .u6(
                      this.F.vu - e.w,
                      this.F.wu - e.A,
                      e.b.uc,
                      e.b.Sc,
                      e.b.Tc,
                    ) && n.add(e)
                : n.add(e)
              : n.add(e));
        }
        for (c = 0; c < n.size(); c++)
          (e = n.get(c)), (this.KS = e.Bc), this.bi(-393222);
      }
    },
    p4: function () {
      null != this.F && 0 != this.sw && ((this.F.Ku = 0), this.bi(-524294));
    },
    WR: function () {
      0 != this.sw && 0 == this.F.Uk && (this.F.Ku = 0);
    },
    kO: function (a, b) {
      var c = this.F.ya[a];
      if (c.Ld != this.td) {
        if (this.Vk) return (this.Zf = 0), null;
        for (c = c.Jc; 0 == (c & 2147483648); ) {
          c = this.F.X[c];
          if (null == c) break;
          if (0 == (c.wa & aa.xi) && (this.Zf++, this.Zf == b)) return c;
          c = c.Zd;
        }
        return null;
      }
      for (c = c.tc; 0 == (c & 2147483648); ) {
        c = this.F.X[c];
        if (null == c) break;
        if (0 == (c.wa & aa.xi) && (this.Zf++, this.Zf == b)) return c;
        c = c.ve;
      }
      return null;
    },
    lO: function (a, b) {
      b++;
      this.Zf = 0;
      if (0 == (a & 32768)) return this.kO(a, b);
      if (32767 == (a & 32767)) return null;
      var c = this.gg[a & 32767],
        d;
      for (d = 0; d < c.ja.length; d += 2) {
        var e = c.ja[d + 1];
        if (0 > e) break;
        e = this.kO(e, b);
        if (null != e) return e;
      }
      return null;
    },
    lS: function (a, b, c, d, e) {
      a = new qf(a, b, c, d, e);
      null == this.cs && (this.cs = new W());
      this.cs.add(a);
    },
    B2: function () {
      if (null != this.cs) {
        var a;
        for (a = 0; a < this.cs.size(); a++) {
          var b = this.cs.get(a);
          if (null != b && 0 != b.code)
            switch (((this.ld = b.v4), (this.JS = b.Nk), b.t5)) {
              case 0:
                this.bi(b.code);
                break;
              case 1:
                this.Gd(b.u4, b.code);
            }
        }
        this.cs.clear();
      }
    },
    load: function (a) {
      for (var b, c, d = 0; ; )
        if (
          ((b = a.file.zS(4)),
          69 == b[0] && 82 == b[1] && 62 == b[2] && 62 == b[3])
        ) {
          this.Xl = a.file.B();
          300 > this.Xl && (this.Xl = 300);
          a.file.B();
          this.JR = a.file.B();
          for (c = 0; c < 7 + F.AM; c++) this.Kr[c] = a.file.B();
          this.Kr[F.Uf + F.Ed] < Y.uE + 1 && (this.Kr[F.Uf + F.Ed] = Y.uE + 1);
          this.Yl = a.file.B();
          if (0 < this.Yl)
            for (this.hm = Array(this.Yl), c = 0; c < this.Yl; c++)
              (this.hm[c] = new pf()),
                (this.hm[c].cD = a.file.xa()),
                (this.hm[c].dD = a.file.xa());
        } else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 115 == b[3])
          a.file.v(), (this.Yx = a.file.v()), (this.je = Array(this.Yx));
        else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 118 == b[3])
          for (a.file.v(), b = a.file.v(), c = 0; c < b; c++)
            (this.je[d] = U.create(a)), d++;
        else if (69 == b[0] && 82 == b[1] && 111 == b[2] && 112 == b[3])
          0 != (a.file.v() & Y.LW) && (this.nt |= U.lv);
        else if (60 == b[0] && 60 == b[1] && 69 == b[2] && 82 == b[3]) break;
      this.WQ = Math.max(this.WQ, d);
    },
    YP: function (a) {
      var b, c;
      c = this.je[a];
      c.qa &= this.nt;
      c.qa |= U.Oh;
      a++;
      for (b = !1; ; ) {
        c = this.je[a];
        c.qa &= this.nt;
        c.qa |= U.Oh;
        c = c.tb[0];
        switch (c.Ga) {
          case -589825:
            c = c.L[0];
            c.Yd |= wa.lo;
            a = this.YP(a);
            continue;
          case -655361:
            (b = !0), a++;
        }
        if (b) break;
        a++;
      }
      return a;
    },
    HJ: function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        h = new W(),
        k;
      for (d = 0; d < this.je.length; )
        (a = this.je[d]),
          (a.qa &= this.nt),
          (b = a.tb[0]),
          -589825 == b.Ga &&
            ((a = b.L[0]),
            (k = new of()),
            (k.id = a.y2),
            (k.eP = d),
            h.add(k),
            (a.Yd &= ~(wa.lo | wa.Em)),
            0 != (a.Yd & wa.ZX) && (a.Yd |= wa.Em)),
          d++;
      for (d = 0; d < this.je.length; ) {
        a = this.je[d];
        a.qa &= this.nt;
        b = a.tb[0];
        if (
          -589825 == b.Ga &&
          ((a = b.L[0]), (a.Yd &= ~wa.lo), 0 != (a.Yd & wa.Em))
        ) {
          d = this.YP(d);
          continue;
        }
        d++;
      }
      for (d = 0; d < this.je.length; d++)
        switch (((a = this.je[d]), (b = a.tb[0]), b.Ga)) {
          case -589825:
          case -655361:
            break;
          default:
            for (a.$q = 0, e = a.vt = 0; e < a.dd + a.xh; e++)
              if (
                ((b = a.tb[e]),
                (b.Pb = 0 > b.Ga ? b.Pb & oa.NW : b.Pb & ~(la.co | oa.xs)),
                0 != b.Ke)
              )
                for (f = 0; f < b.Ke; f++)
                  switch (((c = b.L[f]), c.code)) {
                    case 25:
                      c.XT = 0;
                      break;
                    case 13:
                      c.d1 = c.ot;
                      break;
                    case 39:
                      var g;
                      for (g = 0; g < h.size(); g++)
                        if (((k = h.get(g)), k.id == c.id)) {
                          c.Oa = k.eP;
                          break;
                        }
                  }
        }
    },
    G4: function (a) {
      qualToOiListFull = qualToOiList = null;
      if (0 < this.Yl) {
        var b,
          c,
          d,
          e,
          f = Array(this.Yl);
        for (d = 0; d < a.length; d++) (a[d].Ld = 0), (a[d].Aj = null);
        for (c = 0; c < this.Yl; c++)
          for (e = this.hm[c].cD & 32767, d = f[c] = 0; d < a.length; d++) {
            var h = a[d];
            if (h.fg == this.hm[c].dD)
              for (b = 0; 8 > b && -1 != h.iu[b]; b++)
                if (e == h.iu[b]) {
                  f[c]++;
                  h.Ld++;
                  break;
                }
          }
        this.gg = Array(this.Yl);
        this.Of = Array(this.Yl);
        for (c = 0; c < this.Yl; c++) {
          this.gg[c] = new Id();
          this.Of[c] = new Id();
          b = f[c];
          0 != b &&
            ((this.gg[c].ja = Array(2 * b)), (this.Of[c].ja = Array(2 * b)));
          var k = 0;
          e = this.hm[c].cD & 32767;
          for (d = 0; d < a.length; d++)
            if (((h = a[d]), h.fg == this.hm[c].dD))
              for (b = 0; 8 > b && -1 != h.iu[b]; b++)
                if (e == h.iu[b]) {
                  this.Of[c].ja[2 * k] = h.Nf;
                  this.Of[c].ja[2 * k + 1] = d;
                  this.gg[c].ja[2 * k] = -1;
                  this.gg[c].ja[2 * k + 1] = -1;
                  null == h.Aj &&
                    0 != h.Ld &&
                    ((h.Aj = Array(h.Ld)), (h.Ld = 0));
                  null != h.Aj && (h.Aj[h.Ld++] = c);
                  k++;
                  break;
                }
          this.gg[c].eD = -1;
          this.Of[c].eD = -1;
        }
        for (d = 0; d < a.length; d++) a[d].Ld = 0;
      }
    },
    PA: function (a) {
      var b, c, d, e, f, h, k, g, n, m, v, A, l, P, p, M;
      this.F = a;
      var L = (this.$r = 0);
      for (k = a = 0; k < this.F.Nj; k++)
        -1 != this.F.ya[k].Nf &&
          ((this.F.ya[k].oJ = -1),
          (this.F.ya[k].eh = 0),
          (this.F.ya[k].hu = -1),
          a++,
          this.F.ya[k].Nf + 1 > L && (L = this.F.ya[k].Nf + 1));
      this.ej = Array(200 * L + 1);
      a = 0;
      h = [];
      var w;
      for (P = 0; P < this.je.length; P++) {
        b = this.je[P];
        for (w = 0; w < b.xh + b.dd; w++) {
          c = b.tb[w];
          c.Pb &= ~oa.LL;
          0 <= Y.Xi(c.Ga) && (c.hc = this.Dt(c.We, Y.Xi(c.Ga)));
          if (c.Ga == la.iV)
            (d = c.L[0]),
              (d.mP = 0),
              d.Aa[0].code == sa.ys &&
                0 == d.Aa[1].code &&
                ((m = {}),
                (m.q0 = c.L[0]),
                (m.name = d.Aa[0].cd),
                h.push(m),
                this.F.KA(d.Aa[0].cd));
          else if (c.Ga == la.O6 || c.Ga == la.N6)
            (d = c.L[0]),
              d.Aa[0].code == sa.ys &&
                0 == d.Aa[1].code &&
                ((d.Aa[0] = new Sb()),
                (d.Aa[0].code = sa.PL),
                (d.Aa[0].value = this.F.KA(d.Aa[0].cd)));
          if (0 < c.Ke)
            for (m = 0; m < c.Ke; m++)
              switch (((d = c.L[m]), d.code)) {
                case 25:
                  d.value = 0;
                  break;
                case 21:
                  if (0 == (c.We & F.AF))
                    for (
                      v = this.F.O.mg.FB();
                      null != v;
                      v = this.F.O.mg.by()
                    ) {
                      if (c.We == v.mj) {
                        d.jB = v.gp;
                        break;
                      }
                    }
                  else d.jB = -1;
                  f = d.ly;
                  -1 != f && (d.my = this.Dt(f, d.YC));
                  break;
                case 9:
                case 18:
                case 16:
                  f = d.ly;
                  -1 != f && (d.my = this.Dt(f, d.YC));
                  break;
                case 1:
                  d.jd = this.Dt(d.Nk, d.type);
                  break;
                case 69:
                  for (k = 0; k < d.kd.length; k += 2)
                    d.kd[k + 1] = this.Dt(d.kd[k], 0);
                  break;
                case 15:
                case 27:
                case 28:
                case 45:
                case 46:
                case 22:
                case 23:
                case 52:
                case 59:
                case 53:
                case 62:
                case 54:
                  for (v = d, k = 0; k < v.Aa.length; k++)
                    0 < Y.Xi(v.Aa[k].code) &&
                      ((g = v.Aa[k]), (g.jd = this.Dt(g.Nk, Y.Xi(g.code))));
              }
        }
        m = 0;
        v = U.mv | U.NL | U.Az;
        for (w = 0; w < b.dd + b.xh; w++) {
          c = b.tb[w];
          e = Y.Xi(c.Ga);
          f = c.Ga;
          g = n = k = 0;
          d = null;
          if (e >= F.Ed)
            switch (Y.dr(f)) {
              case 262144:
              case 589824:
                m |= U.Az;
                f = c.We;
                if (0 != (f & F.AF))
                  for (e = this.J4(c.hc); -1 != e; e = this.oS())
                    a = this.SQ(b, a, this.F.ya[e].Nf);
                else a = this.SQ(b, a, f);
                break;
              case 1638400:
                m |= U.GE;
                break;
              case -917504:
                d = c.L[0];
                k = c.L[0];
                this.JA(c.hc, c.We, k.jd, k.Nk);
                this.JA(k.jd, k.Nk, c.hc, c.We);
                g = Y.Xi(c.Ga);
                g = this.$B(g) ? ga.nh | ga.Hv : ga.nh | ga.pA | ga.Hv;
                n = k.type;
                n = this.$B(n) ? ga.nh | ga.Hv : ga.nh | ga.pA | ga.Hv;
                this.Vd.QB & q.kE && this.qD(c.hc, c.We, k.jd, k.Nk);
                k = 3;
                break;
              case -262144:
                g = Y.Xi(c.Ga);
                g = this.$B(g) ? ga.nh : ga.nh | ga.pA;
                d = c.L[0];
                n = c.L[0].type;
                n = this.$B(n) ? ga.nh : ga.nh | ga.pA;
                0 != (this.Vd.QB & q.kE) && this.qD(c.hc, c.We, d.jd, d.Nk);
                k = 3;
                break;
              case -720896:
              case -786432:
                n = ga.oA;
                k = 1;
                break;
              case -851968:
                (n = ga.nA), (k = 1);
            }
          else
            switch (f) {
              case -327681:
                v &= ~U.mv;
                break;
              case -393217:
                v |= U.zz;
                break;
              case -262145:
                v |= U.zz;
                break;
              case -196609:
                v |= U.DE + U.FE;
                break;
              case -196614:
                g = ga.nh;
                d = c.L[0];
                k = 2;
                break;
              case -393222:
                (g = ga.nh), (d = c.L[1]), (k = 2);
            }
          if (0 != (k & 1))
            for (e = this.gm(c.hc); -1 != e; e = this.Tk())
              this.F.ya[e].eh |= n;
          if (0 != (k & 2))
            for (e = this.gm(d.jd); -1 != e; e = this.Tk())
              this.F.ya[e].eh |= g;
        }
        b.qa &= ~v;
        b.qa |= m;
      }
      this.ej[a] = -1;
      n = !1;
      if (null == this.Bj && null == this.Cj) {
        this.Bj = new Map();
        this.Cj = new Map();
        n = !0;
        for (P = 0; P < this.je.length && n; P++)
          if (((b = this.je[P]), null != b)) {
            for (w = 0; w < b.dd; w++)
              if (
                ((c = b.tb[w]),
                null != c &&
                  ((e = Y.Xi(c.Ga)), e >= F.Ed && -2686976 == Y.dr(c.Ga)))
              ) {
                var B = c.L[0];
                if (
                  2 == B.Aa.length &&
                  B.Aa[0].code == sa.ys &&
                  0 == B.Aa[1].code
                ) {
                  B = B.Aa[0].cd.toLowerCase();
                  c = e == F.Ed ? this.Cj : this.Bj;
                  var G = c.get(B);
                  void 0 == G ? (G = 1) : G++;
                  c.set(B, G);
                } else {
                  n = !1;
                  break;
                }
              }
            for (k = 0; k < b.xh && n; k++)
              if (
                ((c = b.tb[k + b.dd]),
                null != c &&
                  ((e = Y.Xi(c.Ga)), e >= F.Ed && 5046272 == Y.dr(c.Ga)))
              ) {
                n = !1;
                break;
              }
          }
        if (n) {
          for (; this.Bj.size > Y.RV; ) {
            b = 1e9;
            c = null;
            w = hc(this.Bj.entries());
            for (P = w.next(); !P.done; P = w.next())
              (m = P.value), (P = m[1]), P < b && ((c = m[0]), (b = P));
            null != c && this.Bj["delete"](c);
          }
          b = Y.qz;
          P = hc(this.Bj.keys());
          for (c = P.next(); !c.done; c = P.next()) this.Bj.set(c.value, b++);
          for (; this.Cj.size > Y.SV; ) {
            b = 1e9;
            c = null;
            w = hc(this.Cj.entries());
            for (P = w.next(); !P.done; P = w.next())
              (m = P.value), (P = m[1]), P < b && ((c = m[0]), (b = P));
            null != c && this.Cj["delete"](c);
          }
          b = Y.qz;
          P = hc(this.Cj.keys());
          for (c = P.next(); !c.done; c = P.next())
            this.Cj.set(c.value, b++), b == Y.wi + 1 && (b += Y.jA);
          b > Y.wi + 1 + Y.jA &&
            (this.Kr[F.Uf + F.Ed] += b - (Y.wi + 1 + Y.jA));
        } else this.Cj = this.Bj = null;
      }
      v = Array(F.Uf + L + 1);
      b = P = 0;
      for (e = -F.Uf; 0 > e; e++, b++) (v[b] = P), (P += this.Kr[F.Uf + e]);
      for (oil = 0; oil < this.F.Nj; oil++, b++)
        (v[b] = P),
          (P =
            this.F.ya[oil].fg < F.hl
              ? P + (this.Kr[F.Uf + this.F.ya[oil].fg] + Y.wi + 1)
              : P + (this.Vd.CB.$w(this.F.ya[oil].fg) + Y.wi + 1));
      l = P;
      this.we = Array(l);
      for (k = 0; k < l; k++) this.we[k] = 0;
      m = A = 0;
      g = Array(this.F.O.Xl);
      for (P = 0; P < this.Yx; P++)
        for (b = this.je[P], b.qa &= ~U.EE, d = !0, w = p = 0; w < b.dd; w++) {
          c = b.tb[w];
          e = Y.Xi(c.Ga);
          f = c.Ga;
          k = -Y.HE(f);
          n &&
            e >= F.Ed &&
            -2686976 == Y.dr(f) &&
            ((B = c.L[0]),
            2 == B.Aa.length &&
              B.Aa[0].code == sa.ys &&
              0 == B.Aa[1].code &&
              ((B = B.Aa[0].cd.toLowerCase()),
              (G = (e == F.Ed ? this.Cj : this.Bj).get(B)),
              void 0 != G &&
                ((k = G), (f = (f & 65535) + 65536 * -k), (c.Ga = f))));
          if (d && -2686977 != c.Ga)
            if (
              (0 != (c.Pb & oa.CE) && (A++, 0 == (b.qa & U.yz) && m++), 0 > e)
            )
              this.we[v[7 + e] + k]++;
            else {
              d = 0;
              for (e = this.gm(c.hc); -1 != e; e = this.Tk())
                this.we[v[F.Uf + e] + k]++, (g[d++] = e);
              g[d] = -1;
              if (-917504 == Y.dr(f))
                for (d = c.L[0], f = this.gm(d.jd); -1 != f; f = this.Tk()) {
                  for (d = 0; g[d] != f && -1 != g[d]; ) d++;
                  -1 == g[d] && this.we[v[F.Uf + f] + k]++;
                }
            }
          d = !1;
          if (-1507329 == c.Ga || -1572865 == c.Ga)
            (d = !0),
              (b.qa |= U.EE),
              0 == p ? (p = c.Ga) : (c.Ga = p),
              -1572865 == p && (b.qa |= U.OL);
          -2686977 == c.Ga && (A++, (b.qa |= U.Oh));
        }
      c = A + 1;
      for (b = 0; b < l; b++)
        0 != this.we[b] && ((P = this.we[b]), (this.we[b] = c), (c += P + 1));
      this.ue = Array(c);
      this.gj = Array(c);
      for (k = 0; k < c; k++) (this.ue[k] = null), (this.gj[k] = 0);
      n = Array(l);
      for (k = 0; k < l; k++) n[k] = this.we[k];
      this.F.hg = null;
      l = 0;
      A = [];
      p = [];
      B = m + 1;
      this.XG = !1;
      for (P = 0; P < this.Yx; P++) {
        b = this.je[P];
        d = !0;
        for (w = 0; w < b.dd; w++) {
          c = b.tb[w];
          e = Y.Xi(c.Ga);
          f = c.Ga;
          k = -Y.HE(f);
          if (d && -2686977 != c.Ga)
            if (
              (0 != (c.Pb & oa.CE) &&
                (0 != (b.qa & U.yz)
                  ? 0 < A.length &&
                    ((G = A[A.length - 1]), G.push(b), G.push(w))
                  : ((this.ue[l] = b), (this.gj[l] = w), l++)),
              0 > e)
            ) {
              if (
                ((G = v[F.Uf + e] + k),
                (this.ue[n[G]] = b),
                (this.gj[n[G]] = w),
                n[G]++,
                c.Ga == ka.VV)
              ) {
                f = !1;
                for (
                  k = 0;
                  k < b.dd && b.tb[k].Ga != ka.WV && b.tb[k].Ga != ka.XV;
                  k++
                );
                k < b.dd && (f = !0);
                d = c.L[0];
                if (d.Aa[0].code == sa.ys && 0 == d.Aa[1].code) {
                  k = null;
                  d = d.Aa[0].cd;
                  e = this.F.KA(d);
                  for (G = 0; G < h.length; G++) {
                    var t = h[G];
                    if (u.he(t.name, d)) {
                      this.F.hg || (this.F.hg = []);
                      if (null == k) {
                        for (
                          M = 0;
                          M < this.F.hg.length &&
                          ((k = this.F.hg[M]), !u.he(d, k.name));
                          M++
                        );
                        M == this.F.hg.length &&
                          ((k = new Ub(d, e)), this.F.hg.push(k));
                        k.bL(b);
                        k.vx |= f;
                      }
                      t.q0.mP = M + 1;
                    }
                  }
                  if (null == k) {
                    this.F.hg || (this.F.hg = []);
                    for (
                      M = 0;
                      M < this.F.hg.length &&
                      ((k = this.F.hg[M]), !u.he(d, k.name));
                      M++
                    );
                    M == this.F.hg.length &&
                      ((k = new Ub(d, e)), this.F.hg.push(k));
                    k.bL(b);
                    k.vx |= f;
                  }
                } else this.XG = !0;
              }
            } else {
              d = 0;
              for (e = this.gm(c.hc); -1 != e; e = this.Tk())
                (G = v[F.Uf + e] + k),
                  (this.ue[n[G]] = b),
                  (this.gj[n[G]] = w),
                  n[G]++,
                  (g[d++] = e);
              g[d] = -1;
              if (-917504 == Y.dr(f))
                for (d = c.L[0], f = this.gm(d.jd); -1 != f; f = this.Tk()) {
                  for (d = 0; g[d] != f && -1 != g[d]; ) d++;
                  -1 == g[d] &&
                    ((G = v[F.Uf + f] + k),
                    (this.ue[n[G]] = b),
                    (this.gj[n[G]] = w),
                    n[G]++);
                }
            }
          d = !1;
          if (-1507329 == c.Ga || -1572865 == c.Ga) d = !0;
          if (-2686977 == c.Ga && 0 < A.length) {
            p.pop().fP = B;
            G = A.pop();
            for (c = 0; c < G.length; c += 2)
              (this.ue[B] = G[c]), (this.gj[B] = G[c + 1]), B++;
            this.ue[B] = null;
            this.gj[B] = null;
            B++;
          }
        }
        if (0 != (b.qa & U.ML))
          for (G = [], A.push(G), k = 0; k < b.xh; k++)
            if (((c = b.tb[b.dd + k]), 2883583 == c.Ga)) {
              0 < c.Ke && ((d = c.L[0]), p.push(d));
              break;
            }
      }
      this.mr = Array(L + 1 + a / 2);
      for (oil = L = 0; oil < this.F.Nj; oil++)
        if (
          ((M = this.F.ya[oil]),
          (b = v[F.Uf + oil]),
          (M.rJ = b),
          0 != (M.TC & J.$i))
        ) {
          a = 0;
          P = this.we[b - Y.HE(-786432)];
          if (0 != P)
            for (; null != this.ue[P]; ) {
              b = this.ue[P];
              c = b.tb[this.gj[P]];
              h = c.L[0].value;
              w = Y.Q1(b);
              for (k = b.xh; 0 < k; k--, w++)
                (c = b.tb[w]), c.Ga == (524288 | (M.fg & 65535)) && (a |= h);
              P++;
            }
          M.tJ = a;
          h = M.Nf;
          for (c = a = 0; -1 != this.ej[a]; a += 2)
            if (this.ej[a] == h)
              if (((b = this.ej[a + 1]), 0 != (b & 32768))) M.eh |= b;
              else {
                for (P = 0; P < c && this.mr[L + P] != b; ) P++;
                P == c && (this.mr[L + c++] = b);
              }
          0 < c && ((M.hu = L), (this.mr[L + c++] = -1), (L += c));
        }
      this.Ui[0] = 0;
      for (k = 1; k <= F.Uf; k++) this.Ui[k] = v[F.Uf - k];
      for (oil = 0; oil < this.F.Nj; oil++)
        if (((M = this.F.ya[oil]), (e = M.Jc), 0 == (e & 2147483648))) {
          do
            (a = this.F.X[e]),
              (a.RH = M.rJ),
              (a.vd = M),
              (a.jj = M.eh),
              0 != (a.ib & J.$i) && (a.H.sK = M.tJ),
              0 != (a.ib & J.rq) && 0 == (a.jj & ga.nh) && a.Z.QD(!1),
              0 == (a.ib & J.HM) &&
                ((a.ib &= ~J.qq),
                0 != (a.jj & ga.nA) &&
                  0 != (this.F.O.xd & V.iM) &&
                  (a.ib |= J.qq),
                0 != (a.jj & (ga.nh | ga.oA)) && (a.ib |= J.qq)),
              (e = a.Zd);
          while (0 == (e & 2147483648));
        }
      this.LS = 0 != m ? !0 : !1;
      this.ej = null;
      this.sw = !0;
    },
    bE: function () {
      this.sw = !1;
      this.gj = this.ue = this.we = this.mr = this.gg = null;
    },
    Dt: function (a, b) {
      if (0 != (a & F.AF)) {
        var c;
        for (c = 0; a != this.hm[c].cD || b != this.hm[c].dD; ) c++;
        return c | 32768;
      }
      for (c = 0; c < this.F.Nj && this.F.ya[c].Nf != a; ) c++;
      return c;
    },
    $B: function (a) {
      var b;
      for (b = 0; b < this.F.Nj; b++)
        if (-1 != this.F.ya[b].Nf && this.F.ya[b].fg == a)
          if (0 != (this.F.ya[b].TC & J.rq) && 0 == (this.F.ya[b].TC & J.zF))
            break;
          else return !1;
      return !0;
    },
    gm: function (a) {
      if (0 == (a & 32768)) return (this.sy = -1), a;
      if (-1 == a) return -1;
      this.sy = a & 32767;
      this.qy = 0;
      return this.Tk();
    },
    Tk: function () {
      var a;
      if (-1 == this.sy || this.qy >= this.Of[this.sy].ja.length) return -1;
      a = this.Of[this.sy].ja[this.qy + 1];
      this.qy += 2;
      return a;
    },
    J4: function (a) {
      if (0 == (a & 32768)) return (this.ty = -1), a;
      if (-1 == a) return -1;
      this.ty = a & 32767;
      this.ry = 0;
      return this.oS();
    },
    oS: function () {
      var a;
      if (-1 == this.ty || this.ry >= this.Of[this.ty].ja.length) return -1;
      a = this.Of[this.ty].ja[this.ry + 1];
      this.ry += 2;
      return a;
    },
    JA: function (a, b, c, d) {
      var e, f;
      if (0 > b) {
        if (null != this.Of)
          for (e = this.Of[a & 32767], f = 0; f < e.ja.length; )
            this.JA(e.ja[f + 1], e.ja[f], c, d), (f += 2);
      } else if (0 > d) {
        if (null != this.Of)
          for (e = this.Of[c & 32767], f = 0; f < e.ja.length; )
            this.JA(a, b, e.ja[f + 1], e.ja[f]), (f += 2);
      } else {
        a = this.F.ya[a];
        if (null == a.up) (a.up = []), (a = a.up);
        else for (a = a.up, b = 0; b < a.length; b += 2) if (d == a[b]) return;
        a.push(d);
        a.push(c);
      }
    },
    qD: function (a, b, c, d) {
      var e, f;
      if (0 > b) {
        if (null != this.Of)
          for (e = this.Of[a & 32767], f = 0; f < e.ja.length; )
            this.qD(e.ja[f + 1], e.ja[f], c, d), (f += 2);
      } else if (0 > d) {
        if (null != this.Of)
          for (e = this.Of[c & 32767], f = 0; f < e.ja.length; )
            this.qD(a, b, e.ja[f + 1], e.ja[f]), (f += 2);
      } else if (
        ((a = this.F.ya[a]),
        (c = this.F.ya[c]),
        a.fg == F.Ed &&
          c.fg == F.Ed &&
          (a.Pr & J.Gv) != (c.Pr & J.Gv) &&
          (0 != (c.Pr & J.Gv) && ((a = c), (b = d)),
          (d = this.Vd.Sd.gn(b)),
          (e = d.Kd),
          (c = !1),
          0 != (e.$l & J.$i) &&
            null != e.bh &&
            0 < e.bh.Zt &&
            ((e = e.bh.vf[0]), e.Ux == ia.Ai && (c = e.Ht)),
          !c))
      ) {
        a.Pr &= ~J.Gv;
        for (a = a.Jc; 0 == (a & 2147483648); ) {
          a = this.F.X[a];
          if (null == a) break;
          a.Z.Ha &= ~R.tq;
          a = a.Zd;
        }
        null != this.Vd.Sd.am && this.Vd.Sd.am[b] && d.te(this, null);
      }
    },
    tl: function (a) {
      a = this.Vd.Ia.Ac(a);
      null != a && (a.hr |= qa.vv);
      return -1;
    },
    SQ: function (a, b, c) {
      var d, e, f, h, k;
      for (k = 0; k < a.dd; k++)
        if (((h = a.tb[k]), 2 <= Y.Xi(h.Ga)))
          switch (((e = 32768 + ga.zZ), (f = Y.dr(h.Ga)), f)) {
            case -917504:
              f = h.L[0];
              for (d = this.gm(h.hc); -1 != d; d = this.Tk())
                (d = this.F.ya[d].Nf),
                  c == d && ((e = 0), (b = this.TQ(b, c, f.jd)));
              if (0 == e) break;
              for (d = this.gm(f.jd); -1 != d; d = this.Tk())
                (d = this.F.ya[d].Nf), c == d && (b = this.TQ(b, c, h.hc));
              break;
            case -786432:
              (f = h.L[0]), (e = 32768 + f.value);
            case -851968:
              for (d = this.gm(h.hc); -1 != d; d = this.Tk())
                (d = this.F.ya[d].Nf),
                  c == d && ((this.ej[b++] = c), (this.ej[b++] = e));
          }
      return b;
    },
    TQ: function (a, b, c) {
      for (c = this.gm(c); -1 != c; c = this.Tk()) {
        c = this.F.ya[c].Nf;
        var d;
        for (d = 0; d < a && (this.ej[d] != b || this.ej[d + 1] != c); d += 2);
        d == a && ((this.ej[a++] = b), (this.ej[a++] = c));
      }
      return a;
    },
    L1: function (a) {
      var b, c, d, e, f, h;
      for (d = 0; d < this.Yx; d++)
        for (b = this.je[d], e = 0; e < b.dd + b.xh; e++)
          for (c = b.tb[e], f = 0; f < c.Ke; f++)
            switch (c.L[f].code) {
              case 6:
              case 35:
                (h = c.L[f]), a.tl(h.Uy);
            }
    },
  };
  U.mv = 1;
  U.DE = 2;
  U.FE = 4;
  U.zz = 8;
  U.GE = 16;
  U.ML = 64;
  U.lv = 128;
  U.PW = 256;
  U.e8 = 512;
  U.EE = 1024;
  U.Az = 2048;
  U.OL = 4096;
  U.RW = 8192;
  U.Oh = 16384;
  U.yz = 32768;
  U.NL = U.GE + U.DE + U.FE + U.zz;
  U.QW = U.PW + U.RW + U.ML + U.yz;
  U.create = function (a) {
    var b = a.file.Oa,
      c = a.file.xa(),
      d = new U();
    d.dd = a.file.Uc();
    d.xh = a.file.Uc();
    d.qa = a.file.B();
    d.P1 = a.file.B();
    d.$q = a.file.v();
    d.vt = a.file.v();
    d.tb = Array(d.dd + d.xh);
    var e,
      f = 0;
    for (e = 0; e < d.dd; e++) d.tb[f++] = ka.create(a);
    for (e = 0; e < d.xh; e++) d.tb[f++] = la.create(a);
    a.file.seek(b - c);
    return d;
  };
  oa.OW = 1;
  oa.d8 = 2;
  oa.MW = 4;
  oa.xz = 8;
  oa.xs = 16;
  oa.CE = 32;
  oa.c8 = 64;
  oa.LL = 128;
  oa.NW = oa.CE + oa.OW + oa.MW + oa.xz + oa.xs;
  oa.ws = 1;
  oa.KL = 32;
  Vb.a0 = 0;
  Vb.A$ = 1;
  Xa.LM = 0;
  Xa.c$ = 1;
  Xa.d$ = 2;
  Xa.e$ = 3;
  Xa.prototype = {
    load: function (a) {
      this.gp = a.B();
      this.mj = a.B();
      this.eC = a.v();
      this.fC = a.v();
      this.nI = a.B();
      a.B();
      this.kQ = a.B();
      a.Qa(2);
    },
    rg: function (a, b) {
      this.mI[a] = b;
    },
  };
  Jd.prototype = {
    load: function (a) {
      this.Kk = a.file.v();
      this.list = Array(this.Kk);
      var b,
        c = 0;
      for (b = 0; b < this.Kk; b++)
        (this.list[b] = new Xa()),
          this.list[b].load(a.file),
          this.list[b].gp + 1 > c && (c = this.list[b].gp + 1),
          (this.list[b].sx = a.Sd.gn(this.list[b].mj).ni);
      this.ub = Array(c);
      for (b = 0; b < this.Kk; b++) this.ub[this.list[b].gp] = b;
    },
    EP: function (a) {
      return this.list[a];
    },
    m2: function (a) {
      return a < this.ub.length ? this.list[this.ub[a]] : null;
    },
    by: function () {
      var a;
      if (this.dC < this.Kk) {
        do if (((a = this.list[this.dC++]), 2 <= a.sx)) return a;
        while (this.dC < this.Kk);
      }
      return null;
    },
    FB: function () {
      this.dC = 0;
      return this.by();
    },
  };
  ra.KE = 1;
  ra.LE = 2;
  ra.f8 = 4;
  ra.Ez = 16;
  ra.IE = 32;
  ra.JE = 64;
  ra.g8 = 65536;
  ra.Dz = 131072;
  ra.h8 = 262144;
  ra.prototype = {
    load: function (a) {
      this.Cb = a.v();
      this.av = a.dK();
      this.bv = a.dK();
      this.Xx = a.v();
      this.Zx = a.v();
      a.Nd();
      this.GN = this.Cb;
      this.JN = this.av;
      this.KN = this.bv;
      this.HN = this.Xx;
      this.IN = this.Zx;
    },
    reset: function () {
      this.Cb = this.GN;
      this.av = this.JN;
      this.bv = this.KN;
      this.Xx = this.HN;
      this.Zx = this.IN;
      this.x = this.y = this.Xq = this.Yq = this.nD = this.oD = 0;
      this.MA = this.Rr = this.ku = this.ju = null;
      this.PD(0);
      this.scale = 1;
      this.pT(1);
      this.qT(1);
      this.tT(this.app.nb / 2);
      this.vT(this.app.rb / 2);
      this.sT(this.app.nb / 2);
      this.uT(this.app.rb / 2);
      this.wT(!1);
      this.Cb & ra.Dz
        ? ((this.$h = !0), this.RB())
        : ((this.$h = !1), this.show());
    },
    y1: function () {
      this.Ce.o5();
    },
    o0: function (a) {
      null == this.ju && (this.ju = new W());
      this.ju.add(a);
    },
    rN: function (a) {
      null == this.ku && (this.ku = new W());
      this.ku.add(a);
    },
    HA: function (a) {
      null == this.MA && (this.MA = new W());
      this.MA.add(a);
    },
    o1: function (a, b) {
      this.Ce = new cb();
      this.Ce.x = a;
      this.Ce.y = b;
      this.Md = new cb();
      this.Md.x = a;
      this.Md.y = b;
      this.bc = new cb();
      this.bc.x = a;
      this.bc.y = b;
      this.PD(0);
      this.scale = 1;
      this.pT(1);
      this.qT(1);
      this.tT(this.app.nb / 2);
      this.vT(this.app.rb / 2);
      this.sT(this.app.nb / 2);
      this.uT(this.app.rb / 2);
      this.wT(!1);
      this.app.ii.Vh(this.Ce);
      this.app.ii.Vh(this.Md);
      this.app.ii.Vh(this.bc);
      this.f6();
    },
    PD: function (a) {
      this.angle = a;
      this.Ce.angle = a;
      this.Md.angle = a;
      this.bc.angle = a;
    },
    pT: function (a) {
      this.Fe = a;
      this.Ce.Fe = a;
      this.Md.Fe = a;
      this.bc.Fe = a;
    },
    qT: function (a) {
      this.Ge = a;
      this.Ce.Ge = a;
      this.Md.Ge = a;
      this.bc.Ge = a;
    },
    tT: function (a) {
      this.Mb = a;
      this.Ce.Mb = a;
      this.Md.Mb = a;
      this.bc.Mb = a;
    },
    vT: function (a) {
      this.Gb = a;
      this.Ce.Gb = a;
      this.Md.Gb = a;
      this.bc.Gb = a;
    },
    sT: function (a) {
      this.ez = a = this.app.nb - a;
      this.Ce.ez = a;
      this.Md.ez = a;
      this.bc.ez = a;
    },
    uT: function (a) {
      this.iz = a = this.app.rb - a;
      this.Ce.iz = a;
      this.Md.iz = a;
      this.bc.iz = a;
    },
    wT: function (a) {
      this.ml = a;
      this.Ce.ml = a;
      this.Md.ml = a;
      this.bc.ml = a;
    },
    r5: function (a, b) {
      this.Ce.x = a;
      this.Ce.y = b;
      this.Md.x = a;
      this.Md.y = b;
      this.bc.x = a;
      this.bc.y = b;
      this.show();
    },
    f6: function () {
      this.Cb & ra.Ez ? this.show() : this.RB();
    },
    RB: function () {
      this.Cb &= ~ra.Dz;
      this.$h &&
        ((this.Ce.visible = !1),
        (this.Md.visible = !1),
        (this.$h = this.bc.visible = !1));
    },
    show: function () {
      0 == this.$h &&
        ((this.Ce.visible = !0),
        (this.Md.visible = !0),
        (this.$h = this.bc.visible = !0));
    },
    DO: function () {
      null != this.Ce && (this.app.ii.removeChild(this.Ce), (this.Ce = null));
      null != this.Md && (this.app.ii.removeChild(this.Md), (this.Md = null));
      null != this.bc && (this.app.ii.removeChild(this.bc), (this.bc = null));
    },
    n0: function (a, b, c, d) {
      var e = new va();
      e.left = a;
      e.top = b;
      e.right = c;
      e.bottom = d;
      null == this.Rr && (this.Rr = new W());
      this.Rr.add(e);
    },
    n2: function (a, b) {
      a += this.x;
      b += this.y;
      if (null != this.Rr) {
        var c, d;
        for (c = 0; c < this.Rr.size(); c++)
          if (
            ((d = this.Rr.get(c)),
            a >= d.left && b >= d.top && a < d.right && b < d.bottom)
          )
            return d;
      }
      return null;
    },
    Rp: function (a, b, c, d, e) {
      b = b + this.x - a.Mb;
      c = c + this.y - a.Gb;
      var f = b + a.width,
        h = c + a.height,
        k = c;
      0 != d && (k = h - d);
      var g, n;
      n = e == Ga.pz ? this.ju : this.ku;
      if (null == n) return null;
      for (e = 0; e < n.size(); e++)
        if (
          ((g = n.get(e)),
          g.x < f &&
            g.x + g.width > b &&
            g.y < h &&
            g.y + g.height > k &&
            g.Rp(a, b, c, d))
        )
          return g;
      return null;
    },
    XD: function (a, b, c, d, e, f) {
      f = f == Ga.pz ? this.ju : this.ku;
      if (null == f) return null;
      a += this.x;
      b += this.y;
      c += this.x;
      d += this.y;
      0 != e && (b = d - e);
      for (e = 0; e < f.size(); e++) {
        var h = f.get(e);
        if (
          h.x < c &&
          h.x + h.width > a &&
          h.y < d &&
          h.y + h.height > b &&
          h.XD(a, b, c, d)
        )
          return h;
      }
      return null;
    },
  };
  Fa.prototype = {
    Zc: function (a, b, c) {
      if (null != this.l3)
        if (this.type == F.yM) {
          var d = this.Hh.Kd,
            e;
          switch (d.qp) {
            case 1:
              switch (d.En) {
                case 1:
                  a.cf(
                    b + this.x,
                    c + this.y,
                    this.width,
                    this.height,
                    this.Qq,
                    this.uh,
                    this.vh,
                  );
                  break;
                case 2:
                  a.df(
                    b + this.x,
                    c + this.y,
                    this.width,
                    this.height,
                    this.Qq,
                    this.uh,
                    this.vh,
                  );
                  break;
                case 3:
                  a.gK(
                    b + this.x,
                    c + this.y,
                    this.width,
                    this.height,
                    this.Qq,
                    this.uh,
                    this.vh,
                  );
              }
              break;
            case 2:
              switch (d.En) {
                case 1:
                  a.cf(
                    b + this.x,
                    c + this.y,
                    this.width,
                    this.height,
                    this.Qq,
                    this.uh,
                    this.vh,
                  );
                  break;
                case 2:
                  a.fK(
                    b + this.x,
                    c + this.y,
                    this.width,
                    this.height,
                    this.Qq,
                    this.WG,
                    0 != this.SP,
                    this.uh,
                    this.vh,
                  );
                  break;
                case 3:
                  a.BS(
                    b + this.x,
                    c + this.y,
                    this.width,
                    this.height,
                    this.Qq,
                    this.WG,
                    0 != this.SP,
                    this.uh,
                    this.vh,
                  );
              }
              break;
            case 3:
              switch (d.En) {
                case 2:
                  e = this.app.Ia.Ac(d.Mk);
                  a.CS(
                    e,
                    b + this.x,
                    c + this.y,
                    this.width,
                    this.height,
                    this.uh,
                    this.vh,
                  );
                  break;
                case 3:
                  (e = this.app.Ia.Ac(d.Mk)),
                    a.DS(
                      e,
                      b + this.x,
                      c + this.y,
                      this.width,
                      this.height,
                      this.uh,
                      this.vh,
                    );
              }
          }
          if (0 < this.borderWidth)
            switch (d.En) {
              case 1:
                var f = (e = 0),
                  h = this.width,
                  k = this.height;
                0 != (d.gy & kb.TY) && ((e += h), (h = -h));
                0 != (d.gy & kb.UY) && ((f += k), (k = -k));
                a.cf(
                  b + this.x + e,
                  c + this.y + f,
                  b + this.x + e + h,
                  c + this.y + f + k,
                  this.borderColor,
                  this.borderWidth,
                );
                break;
              case 2:
                a.yy(
                  b + this.x,
                  c + this.y,
                  this.width,
                  this.height,
                  this.borderColor,
                  this.borderWidth,
                );
                break;
              case 3:
                a.pD(
                  b + this.x,
                  c + this.y,
                  this.width,
                  this.height,
                  1,
                  this.borderColor,
                  this.borderWidth,
                );
            }
        } else
          this.type == F.xM
            ? a.Hg(
                this.bg,
                b + this.x + this.bg.Mb,
                c + this.y + this.bg.Gb,
                0,
                1,
                1,
                this.uh,
                this.vh,
              )
            : null != this.o && this.o.Zc(a, b, c);
      else
        a.Hg(
          this.bg,
          b + this.x + this.bg.Mb,
          c + this.y + this.bg.Gb,
          0,
          1,
          1,
          this.uh,
          this.vh,
        );
    },
    kT: function (a, b) {
      this.uh = a;
      this.vh = b;
    },
    rg: function (a, b) {
      b.Ce.Vh(this);
      this.type == F.BM && b.HA(this);
      switch (this.yj) {
        case ta.wo:
          b.o0(this);
          b.rN(this);
          break;
        case ta.Bi:
          b.rN(this);
          break;
        case ta.yF:
          b.n0(this.x, this.y, this.x + this.width, this.y + this.height);
      }
    },
    Rp: function (a, b, c, d) {
      var e;
      switch (this.type) {
        case 0:
          return (
            (e = this.height),
            this.yj == ta.Bi && (e = V.Bs),
            a.JK(b, c, d, this.x, this.y, this.width, e, 0)
          );
        case 1:
          if (0 != this.gt) return !0;
          e = Z.zs;
          this.yj == ta.Bi && (e = Z.gq);
          e = this.bg.Ji(e, 0, 1, 1);
          return a.Rp(b, c, d, e, this.x, this.y, 0);
        case 11:
          if (0 != this.gt) return !0;
          e = Z.zs;
          this.yj == ta.Bi && (e = Z.gq);
          e = this.bg.Ji(e, 0, 1, 1);
          return a.Rp(b, c, d, e, this.x, this.y, 0);
      }
      return !1;
    },
    XD: function (a, b, c, d) {
      var e;
      switch (this.type) {
        case 0:
          if (this.yj == ta.Bi) {
            a = this.y + Math.min(this.height, V.Bs);
            if (this.y < d && a > b) return !0;
            break;
          }
          return !0;
        case 1:
          if (0 != this.gt) return !0;
          e = Z.zs;
          this.yj == ta.Bi && (e = Z.gq);
          e = this.bg.Ji(e, 0, 1, 1);
          return e.JK(this.x, this.y, 0, a, b, c, d, 0);
        case 11:
          if (0 != this.gt) return !0;
          e = Z.zs;
          this.yj == ta.Bi && (e = Z.gq);
          e = this.bg.Ji(e, 0, 1, 1);
          return e.JK(this.x, this.y, 0, a, b, c, d, 0);
      }
      return !1;
    },
  };
  F.W9 = 1;
  F.U9 = 2;
  F.Y9 = 4;
  F.X9 = 8;
  F.mA = 16;
  F.xZ = 32;
  F.V9 = 64;
  F.T9 = 1;
  F.S9 = 2;
  F.KM = 4;
  F.Uf = 7;
  F.CM = -7;
  F.q9 = -6;
  F.p9 = -5;
  F.Fv = -4;
  F.kA = -3;
  F.s9 = -2;
  F.t9 = -1;
  F.yM = 0;
  F.xM = 1;
  F.Ed = 2;
  F.Om = 3;
  F.DM = 4;
  F.EM = 5;
  F.xF = 6;
  F.Ev = 7;
  F.r9 = 8;
  F.zM = 9;
  F.n9 = 10;
  F.BM = 11;
  F.AM = 10;
  F.hl = 32;
  F.AF = 32768;
  F.prototype = {
    pI: function (a) {
      this.hy = a.B();
      this.ni = a.B();
      this.In = a.B();
      a.Qa(2);
      this.lJ = a.v();
      this.mJ = a.v();
    },
    load: function (a) {
      a.seek(this.QR);
      switch (this.ni) {
        case 0:
          this.Kd = new kb();
          break;
        case 1:
          this.Kd = new Ld();
          break;
        default:
          this.Kd = new J();
      }
      this.Kd.load(a, this.ni);
      this.RR = 0;
    },
    B6: function () {
      this.Kd = null;
    },
    te: function (a, b) {
      this.Kd.te(a, b);
    },
  };
  Kd.prototype = {
    Nn: function (a) {
      this.Kn = a.v();
      this.kd = Array(this.Kn);
      var b;
      for (b = this.bm = 0; b < this.Kn; b++)
        for (var c = 0, d; 32639 != c; )
          if (((c = a.B()), a.B(), (d = a.v()), 0 != d)) {
            d = a.Oa + d;
            switch (c) {
              case 17476:
                this.kd[b] = new F();
                this.kd[b].pI(a);
                this.kd[b].hy >= this.bm && (this.bm = this.kd[b].hy + 1);
                break;
              case 17477:
                this.kd[b].nJ = a.Nd();
                break;
              case 17478:
                this.kd[b].QR = a.Oa;
            }
            a.seek(d);
          }
      this.Jn = Array(this.bm);
      for (b = 0; b < this.Kn; b++) this.Jn[this.kd[b].hy] = b;
      this.iy = Array(this.bm);
      this.am = Array(this.bm);
      for (a = 0; a < this.bm; a++) (this.iy[a] = 0), (this.am[a] = 0);
    },
    gn: function (a) {
      return this.kd[this.Jn[a]];
    },
    q5: function () {
      var a;
      for (a = 0; a < this.Kn; a++) this.kd[a].In &= ~F.mA;
    },
    c6: function (a) {
      this.kd[this.Jn[a]].In |= F.mA;
    },
    CP: function () {
      var a;
      for (a = 0; a < this.Kn; a++)
        if (0 != (this.kd[a].In & F.mA)) return (this.uB = a), this.kd[a];
      return null;
    },
    FP: function () {
      if (this.uB < this.Kn) {
        var a;
        for (a = this.uB + 1; a < this.Kn; a++)
          if (0 != (this.kd[a].In & F.mA)) return (this.uB = a), this.kd[a];
      }
      return null;
    },
    Jj: function () {
      var a;
      for (a = 0; a < this.bm; a++) this.iy[a] = 0;
    },
    Op: function (a) {
      this.iy[a] = 1;
    },
    load: function (a) {
      var b;
      for (b = 0; b < this.bm; b++)
        if (0 != this.iy[b]) {
          if (
            0 == this.am[b] ||
            (0 != this.am[b] && 0 != (this.kd[this.Jn[b]].RR & F.xZ))
          )
            this.kd[this.Jn[b]].load(a), (this.am[b] = 1);
        } else 0 != this.am[b] && (this.kd[this.Jn[b]].B6(), (this.am[b] = 0));
      this.Jj();
    },
    te: function (a, b) {
      var c;
      for (c = 0; c < this.bm; c++)
        0 != this.am[c] && this.kd[this.Jn[c]].te(a, b);
    },
  };
  ta.FM = 0;
  ta.wo = 1;
  ta.Bi = 2;
  ta.yF = 3;
  ta.qZ = 4;
  Ld.prototype = {
    load: function (a) {
      a.Qa(4);
      this.QC = a.B();
      this.PC = a.B();
      this.gJ = a.v();
      this.hJ = a.v();
      this.Mk = a.B();
    },
    te: function (a) {
      null != a && ((a = a.tl(this.Mk)), -1 != a && (this.Mk = a));
    },
  };
  kb.TY = 1;
  kb.UY = 2;
  kb.prototype = {
    load: function (a) {
      a.Qa(4);
      this.QC = a.B();
      this.PC = a.B();
      this.gJ = a.v();
      this.hJ = a.v();
      this.OC = a.B();
      this.NC = a.Qe();
      this.En = a.B();
      this.qp = a.B();
      if (1 == this.En) this.gy = a.B();
      else
        switch (this.qp) {
          case 1:
            this.Zl = this.fu = a.Qe();
            break;
          case 2:
            this.Zl = a.Qe();
            this.fu = a.Qe();
            this.fy = a.v();
            break;
          case 3:
            this.Mk = a.B();
        }
    },
    te: function (a) {
      3 == this.qp &&
        null != a &&
        ((a = a.tl(this.Mk)), -1 != a && (ocImage = a));
    },
  };
  J.C9 = 1;
  J.B9 = 2;
  J.tZ = 4;
  J.JM = 8;
  J.$i = 16;
  J.pq = 32;
  J.E9 = 64;
  J.G9 = 128;
  J.wZ = 256;
  J.rq = 512;
  J.D9 = 1024;
  J.vZ = 2048;
  J.zF = 4096;
  J.IM = 8192;
  J.qq = 16384;
  J.HM = 32768;
  J.F9 = 65536;
  J.GM = 131072;
  J.uZ = 1048576;
  J.u9 = 1;
  J.A9 = 2;
  J.Gv = 4;
  J.lA = 8;
  J.w9 = 4;
  J.v9 = 48;
  J.z9 = 16;
  J.y9 = 32;
  J.x9 = 48;
  J.rZ = 64;
  J.sZ = 128;
  J.I9 = 1;
  J.P9 = 2;
  J.O9 = 4;
  J.Q9 = 8;
  J.N9 = 16;
  J.K9 = 32;
  J.H9 = 64;
  J.M9 = 128;
  J.L9 = 256;
  J.R9 = 512;
  J.J9 = 1024;
  J.prototype = ta;
  J.prototype = {
    load: function (a, b) {
      var c = a.Oa;
      this.iJ = Array(8);
      var d;
      a.Qa(4);
      a.Qa(2);
      var e = a.B();
      a.Qa(2);
      var f = a.B(),
        h = a.B(),
        k = a.B();
      this.$l = a.v();
      for (d = 0; 8 > d; d++) this.iJ[d] = a.xa();
      a.B();
      var g = a.B(),
        n = a.B();
      this.rp = a.B();
      var m = a.B();
      this.hd = a.v();
      a.Qe();
      d = a.v();
      var v = a.v();
      this.ey = this.gu = null;
      0 != k && (a.seek(c + k), (this.bh = new Ie()), this.bh.load(a));
      0 != g &&
        (a.seek(c + g),
        (this.Fn = new Ee()),
        this.Fn.load(a, 0 != (this.rp & J.sZ)));
      0 != n && (a.seek(c + n), (this.sp = new De()), this.sp.load(a));
      0 != h && (a.seek(c + h), (this.pp = new nb()), this.pp.load(a));
      0 != f && (a.seek(c + f), (this.Mf = new Nd()), this.Mf.load(a));
      0 != m &&
        (a.seek(c + m),
        (f = a.v()),
        a.Qa(4),
        (this.OR = a.v()),
        a.v(),
        (this.NR = a.v()),
        0 != f - 20 && (this.MR = a.Oa));
      0 != d && (a.seek(c + d), (this.gu = new Pa()), this.gu.load(a));
      0 != v && (a.seek(c + v), (this.ey = new Pa()), this.ey.load(a));
      if (0 != e)
        switch ((a.seek(c + e), b)) {
          case 3:
          case 4:
            this.Mf = new Pd();
            this.Mf.load(a);
            break;
          case 5:
          case 6:
          case 7:
            this.Rc = new Ia();
            this.Rc.load(a);
            break;
          case 8:
            this.Mf = new Od();
            this.Mf.load(a);
            this.$l &= ~(J.rq | J.zF | J.tZ);
            break;
          case 9:
            (this.Mf = new Md()), this.Mf.load(a);
        }
    },
    te: function (a, b) {
      null != this.pp && this.pp.te(a);
      null != this.Mf && this.Mf.te(a, b);
      null != this.Rc && this.Rc.te(a, b);
    },
  };
  Md.prototype = {
    load: function (a) {
      a.Qa(4);
      this.Gn = a.v();
      this.Hn = a.v();
      a.B();
      this.PR = a.B();
      this.dh = a.v();
      a.Qa(8);
      this.jJ = a.Nd();
    },
    te: function () {},
  };
  Nd.prototype = {
    load: function (a) {
      a.Qa(2);
      this.tO = a.v();
      this.vO = a.v();
      this.uO = a.v();
    },
    te: function () {},
  };
  Ia.H7 = 0;
  Ia.G7 = 1;
  Ia.lW = 2;
  Ia.kW = 3;
  Ia.F7 = 4;
  Ia.I7 = 5;
  Ia.qE = 256;
  Ia.prototype = {
    load: function (a) {
      a.Qa(4);
      this.Gn = a.v();
      this.Hn = a.v();
      this.kJ = a.B();
      this.zj = a.B();
      this.Mr = a.B();
      this.tp = a.B();
      switch (this.zj) {
        case 1:
        case 4:
          this.Xt = a.B();
          this.frames = Array(this.Xt);
          var b;
          for (b = 0; b < this.Xt; b++) this.frames[b] = a.B();
          break;
        case 2:
        case 3:
        case 5:
          if (
            ((this.OC = a.B()),
            (this.NC = a.Qe()),
            (this.En = a.B()),
            (this.qp = a.B()),
            1 == this.En)
          )
            this.gy = a.B();
          else
            switch (this.qp) {
              case 1:
                this.Zl = a.Qe();
                break;
              case 2:
                (this.Zl = a.Qe()), (this.fu = a.Qe()), (this.fy = a.v());
            }
      }
    },
    te: function (a, b) {
      switch (this.zj) {
        case 1:
        case 4:
          var c;
          for (c = 0; c < this.Xt; c++) null != a && a.tl(this.frames[c]);
          break;
        case 5:
          null != b && b.tl(this.tp);
      }
    },
  };
  Od.prototype = {
    load: function (a) {
      a.v();
      a.v();
      this.dh = a.v();
      a.Qe();
      this.Gn = a.v();
      this.Hn = a.v();
      a.Qa(4);
      var b = a.v();
      this.text = a.Nd(b);
    },
    te: function () {},
  };
  Ka.D$ = 0;
  Ka.C$ = 1;
  Ka.E$ = 2;
  Ka.F$ = 4;
  Ka.B$ = 15;
  Ka.b0 = 256;
  Ka.hN = 512;
  Ka.prototype = {
    load: function (a) {
      this.Wu = a.xa();
      this.bz = a.B();
      this.MK = a.Qe();
      this.$n = a.Nd();
    },
    te: function (a, b) {
      null != b && b.tl(this.Wu);
    },
  };
  Pd.prototype = {
    load: function (a) {
      var b = a.Oa;
      a.Qa(4);
      this.zJ = a.v();
      this.AJ = a.v();
      this.Qr = a.v();
      this.ee = Array(this.Qr);
      var c = Array(this.Qr),
        d;
      for (d = 0; d < this.Qr; d++) c[d] = a.v();
      for (d = 0; d < this.Qr; d++)
        (this.ee[d] = new Ka()), a.seek(b + c[d]), this.ee[d].load(a);
    },
    te: function (a, b) {
      var c;
      for (c = 0; c < this.Qr; c++) this.ee[c].te(a, b);
    },
  };
  aa.xi = 1;
  aa.UE = 2;
  aa.G8 = 4;
  aa.no = 8;
  aa.oo = 16;
  aa.zY = 32;
  aa.bM = 64;
  aa.Fm = 8192;
  aa.F8 = 16384;
  aa.H8 = 32768;
  aa.prototype = {
    oT: function (a, b) {
      if (this.b.Sc != a || this.b.Tc != b) {
        0 <= a && (this.b.Sc = a);
        0 <= b && (this.b.Tc = b);
        this.b.ka = !0;
        var c = this.c.m.Ia.er(this.b.Jb, this.b.uc, this.b.Sc, this.b.Tc);
        null != c &&
          ((this.ea = c.width),
          (this.ga = c.height),
          (this.ab = c.Mb),
          (this.bb = c.Gb));
      }
    },
    Da: function () {},
    handle: function () {},
    Zm: function () {},
    qO: function () {},
    display: function () {},
    gd: function () {},
    f2: function () {
      return null;
    },
    kT: function () {},
    YF: function () {},
    Ts: function () {},
    bn: function () {
      return 0;
    },
    Pp: function () {},
    Yo: function () {},
    Ru: function () {},
    $f: function () {
      return -1;
    },
    At: function () {
      return 0;
    },
    si: function () {},
    Ho: function () {},
    xt: function () {},
  };
  Qd.prototype = u.extend(new aa(), {
    handle: function () {
      this.Z.handle();
      this.b.ka && (this.b.ka = !1);
    },
    YF: function (a, b, c, d, e) {
      this.xb = this.c.O.ic[d];
      this.lb = e;
      this.xb.bc.Vh(this);
    },
    Zc: function (a, b, c) {
      if (this.lb && (0 == (this.wa & aa.no) || this.Z.sm)) {
        var d = this.Z.Pd;
        this.Z.Ha & R.r_ && (d |= R.fL);
        var e = this.c.m.Ia.Ac(this.b.Jb);
        e &&
          (this.ps
            ? a.Dp(
                this.ps,
                b + this.w - this.c.za + this.xb.x - e.Mb,
                c + this.A - this.c.Ea + this.xb.y - e.Gb,
                this.ps.width * this.b.Sc,
                this.ps.height * this.b.Tc,
                d,
                this.Z.Qd,
              )
            : a.Hg(
                e,
                b + this.w - this.c.za + this.xb.x,
                c + this.A - this.c.Ea + this.xb.y,
                this.b.uc,
                this.b.Sc,
                this.b.Tc,
                d,
                this.Z.Qd,
              ));
      }
    },
    bn: function () {
      return this.xb.bc.removeChild(this);
    },
    Pp: function () {
      this.lb = !0;
    },
    Yo: function () {
      this.lb = !1;
    },
    $f: function () {
      return this.xb.bc.$f(this);
    },
    At: function () {
      return this.xb.bc.children.length;
    },
    si: function (a) {
      a >= this.xb.bc.children.length && (a = this.xb.bc.children.length);
      0 > a && (a = 0);
      this.xb.bc.si(this, a);
    },
    Ru: function (a) {
      this.Z.Pd = R.Wi;
      this.Z.Qd = a;
    },
  });
  ha.mL = 1;
  ha.KV = 2;
  ha.MV = 4;
  ha.B7 = 8;
  ha.NV = 16;
  ha.z7 = 32;
  ha.m7 = 64;
  ha.D7 = 128;
  ha.l7 = 256;
  ha.E7 = 512;
  ha.C7 = 1024;
  ha.p7 = 2048;
  ha.oz = 4096;
  ha.o7 = 8192;
  ha.lL = 16384;
  ha.v7 = 32768;
  ha.IV = 65536;
  ha.w7 = 131072;
  ha.n7 = 262144;
  ha.LV = 524288;
  ha.x7 = 1048576;
  ha.JV = 2097152;
  ha.u7 = 12582912;
  ha.r7 = 0;
  ha.t7 = 4194304;
  ha.s7 = 8388608;
  ha.q7 = 12582912;
  ha.A7 = 16777216;
  ha.y7 = 33554432;
  ha.prototype = u.extend(new aa(), {
    BT: function (a, b, c) {
      b = a.Mf;
      this.ea = b.Gn;
      this.ga = b.Hn;
      this.dh = b.dh;
      0 != (this.dh & ha.NV) && (this.dh |= ha.IV);
      -1 == c && ((c = 0), 0 != (this.dh & ha.lL) && (c = b.PR));
      null == b.jJ ||
        0 != b.jJ.length ||
        0 == (this.dh & ha.lL) ||
        c >= this.c.m.tk ||
        c == this.c.m.Hi ||
        ((this.$h = 0 != (a.rp & J.lA) ? !0 : !1),
        (this.mf = new cb()),
        (this.mf.x = this.w - this.c.za),
        (this.mf.y = this.A - this.c.Ea),
        this.c.m.ii.Vh(this),
        (this.xJ = this.w),
        (this.yJ = this.A),
        (this.S = new q(this.c.m, this.c.m.file, this.c.m.path, !0)),
        this.S.lT(this.c.m, c, this.dh, this.mf, this.ea, this.ga),
        this.S.digest(),
        0 != (this.dh & ha.oz) &&
          null == this.c.m.Gk &&
          ((this.c.m.Gk = this), this.c.m.ba.pause()),
        this.S.CK(),
        this.S.SD(
          (this.c.m.Up + this.mf.x) * this.c.m.Fe,
          (this.c.m.Vp + this.mf.y) * this.c.m.Ge,
        ),
        this.S.Wy(),
        this.c.m.Vc.push(this.S));
    },
    Da: function (a) {
      this.BT(a, !0, -1);
    },
    handle: function () {
      this.H.move();
      if (null != this.S) {
        if (this.xJ != this.w || this.yJ != this.A)
          (this.mf.x = this.w - this.c.za),
            (this.mf.y = this.A - this.c.Ea),
            (this.xJ = this.w),
            (this.yJ = this.A),
            this.S.SD(this.mf.x * this.c.m.Fe, this.mf.y * this.c.m.Ge),
            this.C6();
        0 == this.S.Wy()
          ? (this.wB(),
            0 != (this.dh & ha.oz) &&
              null != this.S.yb &&
              this.S.yb.Gk == this &&
              ((this.S.yb.Gk = null), this.S.yb.ba.resume()),
            (this.S = null))
          : ((this.UR = this.level), (this.level = this.S.Hi));
      }
    },
    Zc: function (a) {
      this.$h && null != this.S && this.S.PO(a, this.mf.x, this.mf.y);
    },
    gd: function () {
      if (null != this.S) {
        switch (this.S.yc) {
          case 3:
            this.S.Ow();
        }
        this.wB();
        this.S.tH();
        0 != (this.dh & ha.oz) &&
          null != this.S.yb &&
          this.S.yb.Gk == this &&
          ((this.S.yb.Gk = null), this.S.yb.ba.resume());
        this.S = null;
      }
    },
    wB: function () {
      var a;
      for (a = 0; a < this.c.m.Vc.length; a++)
        if (this.c.m.Vc[a] == this.S) {
          this.c.m.Vc.splice(a, 1);
          break;
        }
      this.c.m.ii.removeChild(this.mf);
    },
    uca: function () {
      if (null != this.S) {
        if (null != this.S.ba) {
          this.S.ba.md = t.cF;
          return;
        }
        this.gd(!0);
      }
      this.BT(this.ha, !1, -1);
    },
    eba: function () {
      null != this.S &&
        (null != this.S.ba && (this.S.ba.md = t.Pz),
        0 != (this.dh & ha.oz) &&
          null != this.S.yb &&
          this.S.yb.Gk == this &&
          ((this.S.yb.Gk = null), this.S.yb.ba.resume()));
    },
    RB: function () {
      this.$h = !1;
    },
    show: function () {
      this.$h = !0;
    },
    Nba: function (a) {
      null != this.S &&
        null != this.S.ba &&
        0 <= a &&
        4096 > a &&
        ((this.S.ba.md = t.bF), (this.S.ba.Fy = 32768 | a));
    },
    Ad: function () {
      null != this.S && null != this.S.ba && (this.S.ba.md = t.dF);
    },
    fca: function () {
      null != this.S && null != this.S.ba && (this.S.ba.md = t.eF);
    },
    vca: function () {
      null != this.S && null != this.S.ba && (this.S.ba.md = t.kM);
    },
    pause: function () {
      null != this.S && null != this.S.ba && this.S.ba.pause();
    },
    resume: function () {
      null != this.S && null != this.S.ba && this.S.ba.resume();
    },
    Hca: function (a, b) {
      null != this.S && this.S.yK(a, b);
    },
    Gca: function (a, b) {
      null != this.S && this.S.Z5(a, b);
    },
    dI: function () {
      return null != this.S && null != this.S.ba ? 0 != this.S.ba.Uk : !1;
    },
    laa: function () {
      return null == this.S;
    },
    Hba: function () {
      return this.$h;
    },
    iba: function () {
      return this.level != this.UR;
    },
    uba: function (a) {
      return null != this.S ? this.S.DP(a) : "";
    },
    vba: function (a) {
      return null != this.S ? this.S.xl(a) : 0;
    },
    sba: function () {
      return this.level + 1;
    },
    Ty: function () {},
    Ry: function () {},
    yaa: function () {
      null != this.S &&
        this.$h &&
        (hoAdRunHeader.m.C4.removeChild(this), hoAdRunHeader.m.C4.Vh(this));
    },
    C6: function () {
      if (null != this.S && null != this.S.ba) {
        var a = this.S.ba,
          b = 0,
          c;
        for (c = 0; c < a.Xb; c++) {
          for (; null == a.X[b]; ) b++;
          var d = a.X[b];
          b++;
          d.xt();
        }
      }
    },
    Ho: function () {
      null != this.S &&
        (this.S.SD(
          (this.c.m.Up + this.mf.x) * this.c.m.Fe,
          (this.c.m.Vp + this.mf.y) * this.c.m.Ge,
        ),
        this.S.tu());
    },
  });
  Rd.prototype = {
    Da: function () {
      this.Tc = this.Sc = 1;
      this.uc = 0;
      this.sd = -1;
    },
    gd: function () {},
  };
  za.EL = 15;
  za.fW = 240;
  za.gW = 4;
  za.dW = 61440;
  za.eW = 12;
  za.hW = 512;
  za.jW = 1024;
  za.iW = 2048;
  za.prototype = u.extend(new aa(), {
    Da: function () {
      this.gf = -1;
      this.Iy = this.ff = 0;
      this.ea = this.ga = 1;
      if (null == this.ha.Rc) this.ga = this.jg = this.ea = this.ig = 1;
      else {
        var a = this.ha.Rc;
        this.ea = this.ig = a.Gn;
        this.ga = this.jg = a.Hn;
        this.Tg = a.Mr;
        this.type = a.zj;
        switch (this.type) {
          case 5:
            var b = this.gf;
            -1 == b && (b = a.tp);
            this.font = this.c.m.Xd.vk(b);
            this.Wg = this.font.Ii();
            this.ff = a.Zl;
            break;
          case 2:
          case 3:
            (this.ff = a.Zl), (this.Iy = a.fu);
        }
      }
      a = this.ha.Mf;
      this.bd = a.vO;
      this.yf = a.uO;
      this.zb = a.tO;
      this.Mq = !1;
    },
    gd: function () {},
    handle: function () {
      this.Z.handle();
      this.b.ka && (this.b.ka = !1);
    },
    uk: function () {
      var a = this.ha.Rc;
      if (5 == this.type) {
        var b = rsFont;
        -1 == b && (b = a.tp);
        return this.c.m.Xd.JB(b);
      }
      return null;
    },
    ls: function (a, b) {
      5 == this.type &&
        ((this.gf = this.c.m.Xd.LA(a)),
        (this.font = this.c.m.Xd.vk(this.gf)),
        (this.Wg = this.font.Ii()),
        null != b &&
          ((this.ea = this.ig = b.right - b.left),
          (this.ga = this.jg = b.bottom - b.top)),
        this.Mc());
    },
    IB: function () {
      return this.ff;
    },
    RD: function (a) {
      this.ff = a;
      this.Mc();
    },
    ZG: function (a) {
      0 != this.Mq || u.bI(a) || (this.Mq = !0);
    },
    Cw: function (a) {
      0 == this.Mq
        ? ((a = u.Hf(a)),
          a < this.bd && (a = this.bd),
          a > this.yf && (a = this.yf),
          a != Math.round(this.zb) &&
            ((this.zb = a), (this.b.ka = !0), this.Mc()))
        : (a < this.bd && (a = this.bd),
          a > this.yf && (a = this.yf),
          a != this.zb && ((this.zb = a), (this.b.ka = !0), this.Mc()));
    },
    Eaa: function (a) {
      this.ZG(a);
      this.Cw(this.zb + a);
    },
    Oaa: function (a) {
      this.ZG(a);
      this.Cw(this.zb - a);
    },
    Naa: function (a) {
      this.bd = a;
      this.Cw(this.zb);
    },
    Maa: function (a) {
      this.yf = a;
      this.Cw(this.zb);
    },
    Kaa: function (a) {
      this.ff = a;
      this.Mc();
    },
    Laa: function (a) {
      this.Iy = a;
      this.Mc();
    },
    Jaa: function () {
      return this.zb;
    },
    Iaa: function () {
      return this.bd;
    },
    Haa: function () {
      return this.yf;
    },
    Faa: function () {
      return this.ff;
    },
    Gaa: function () {
      return this.Iy;
    },
    Ts: function (a, b, c, d, e, f) {
      null != this.ha.Rc &&
        1 != this.$b &&
        ((this.$b = !0),
        (this.FN = d),
        (this.lb = e),
        (this.xb = this.c.O.ic[c]),
        (this.gb = this.FN ? this.xb.Md : this.xb.bc),
        0 > f ? this.gb.Vh(this) : this.gb.IA(this, f),
        5 != this.type && this.Mc());
    },
    bn: function () {
      if (null == this.ha.Rc || 0 == this.$b) return -1;
      this.$b = !1;
      var a = this.gb.$f(this);
      this.gb.removeChild(this);
      return a;
    },
    $f: function () {
      return this.$b ? this.gb.$f(this) : -1;
    },
    At: function () {
      return this.$b ? this.gb.children.length : -1;
    },
    si: function (a) {
      this.$b && this.gb.si(this, a);
    },
    Pp: function () {
      null != this.ha.Rc && 0 == this.lb && ((this.lb = !0), this.Mc());
    },
    Yo: function () {
      null != this.ha.Rc && 1 == this.lb && (this.lb = !1);
    },
    Zm: function () {
      this.th || this.Mc();
    },
    Mc: function () {
      var a,
        b = this.ha.Rc;
      switch (this.type) {
        case 4:
          this.rm =
            this.yf <= this.bd
              ? 0
              : Math.floor(((this.zb - this.bd) * b.Xt) / (this.yf - this.bd));
          this.rm = Math.min(this.rm, b.Xt - 1);
          a = this.c.m.Ia.Ac(b.frames[Math.max(this.rm, 0)]);
          this.ea = a.width;
          this.ga = a.height;
          this.ab = a.Mb;
          this.bb = a.Gb;
          break;
        case 2:
        case 3:
          a = this.ig;
          b.zj == Ia.lW && (a = this.jg);
          this.rm =
            this.yf <= this.bd
              ? 0
              : ((this.zb - this.bd) * a) / (this.yf - this.bd);
          b.zj == Ia.kW
            ? ((this.bb = 0),
              (this.ga = this.jg),
              (this.ea = this.rm),
              (this.ab = 0 != (b.Mr & Ia.qE) ? this.rm - this.ig : 0))
            : ((this.ab = 0),
              (this.ea = this.ig),
              (this.ga = this.rm),
              (this.bb = 0 != (b.Mr & Ia.qE) ? this.rm - this.jg : 0));
          break;
        case 1:
          a = 0 == this.Mq ? u.bp(this.zb, this.Tg) : u.iH(this.zb, this.Tg);
          var c,
            d,
            e,
            f = 0,
            h = 0;
          for (c = a.length - 1; 0 <= c; c--)
            (d = a.charCodeAt(c)),
              (e = 0),
              45 == d
                ? (e = b.frames[10])
                : 46 == d
                  ? (e = b.frames[12])
                  : 43 == d
                    ? (e = b.frames[11])
                    : 101 == d || 69 == d
                      ? (e = b.frames[13])
                      : 48 <= d && 57 >= d && (e = b.frames[d - 48]),
              0 <= e &&
                ((d = this.c.m.Ia.Ac(e)),
                null != d
                  ? ((f += d.width), (h = Math.max(h, d.height)))
                  : (toto = 2));
          this.ab = f;
          this.bb = h;
          this.ea = f;
          this.ga = h;
          break;
        case 5:
          (a = 0 == this.Mq ? u.bp(this.zb, this.Tg) : u.iH(this.zb, this.Tg)),
            (this.ab = b =
              null != this.Lb
                ? this.Lb.measureText(a, this.font)
                : new Ca(this.c.m, 16, 16).measureText(a, this.font)),
            (this.bb = this.jg / 2 + this.Wg / 2),
            (this.ea = b),
            (this.ga = this.Wg),
            null == this.Lb
              ? (this.Lb = new Ca(this.c.m, this.ea, this.ga))
              : (this.ea > this.Lb.width || this.ga > this.Lb.height) &&
                this.Lb.resize(this.ea, this.ga),
            this.Lb.ms(
              a,
              u.cq | u.eq,
              new va(0, 0, 1e3, 1e3),
              this.font,
              this.ff,
            );
      }
      this.th = !0;
    },
    Zc: function (a, b, c) {
      if (this.lb && this.th) {
        var d, e, f;
        d = this.ha.Rc;
        b = b + this.w - this.ab - this.c.za + this.xb.x;
        c = c + this.A - this.bb - this.c.Ea + this.xb.y;
        var h = this.ea,
          k = this.ga;
        switch (this.type) {
          case 4:
            d = this.c.m.Ia.Ac(d.frames[Math.max(this.rm, 0)]);
            a.Hg(d, b + d.Mb, c + d.Gb, 0, 1, 1, this.Z.Pd, this.Z.Qd);
            break;
          case 2:
          case 3:
            e = this.ff;
            f = this.Iy;
            switch (d.qp) {
              case 1:
                a.df(b, c, h, k, e, this.Z.Pd, this.Z.Qd);
                break;
              case 2:
                0 != (d.Mr & Ia.qE) && ((dl = e), (e = f), (f = dl)),
                  a.fK(b, c, h, k, e, f, 0 != d.fy, this.Z.Pd, this.Z.Qd);
            }
            break;
          case 1:
            e = 0 == this.Mq ? u.bp(this.zb, this.Tg) : u.iH(this.zb, this.Tg);
            for (f = 0; f < e.length; f++)
              (k = e.charCodeAt(f)),
                (h = 0),
                45 == k
                  ? (h = d.frames[10])
                  : 46 == k || 44 == k
                    ? (h = d.frames[12])
                    : 43 == k
                      ? (h = d.frames[11])
                      : 69 == k || 101 == k
                        ? (h = d.frames[13])
                        : 48 <= k && 57 >= k && (h = d.frames[k - 48]),
                (h = this.c.m.Ia.Ac(h)),
                null != h &&
                  (a.Hg(h, b + h.Mb, c + h.Gb, 0, 1, 1, this.Z.Pd, this.Z.Qd),
                  (b += h.width));
            break;
          case 5:
            this.Lb.Zc(a, b, c, this.Z.Pd, this.Z.Qd);
        }
      }
    },
    Ru: function (a) {
      this.Z.Pd = R.Wi;
      this.Z.Qd = a;
    },
  });
  Sd.prototype = u.extend(new aa(), {
    Da: function () {
      this.gf = -1;
      this.ff = 0;
      var a = this.ha.Rc;
      this.ea = this.ig = a.Gn;
      this.ga = this.jg = a.Hn;
      this.type = a.zj;
      this.ff = a.Zl;
      this.Yn = a.kJ;
      this.zb = this.c.m.LP()[this.Yn - 1];
      this.Tg = a.Mr;
      if (5 == this.type) {
        var b = this.gf;
        -1 == b && (b = a.tp);
        this.font = this.c.m.Xd.vk(b);
        this.Wg = this.font.Ii();
      }
    },
    gd: function () {},
    handle: function () {
      var a = this.c.m.LP()[this.Yn - 1];
      a != this.zb && ((this.zb = a), this.Mc());
      this.Z.handle();
      this.b.ka && (this.b.ka = !1);
    },
    uk: function () {
      var a = this.ha.Rc;
      if (5 == a.zj) {
        var b = this.gf;
        -1 == b && (b = a.tp);
        return this.c.m.Xd.JB(b);
      }
      return null;
    },
    ls: function (a, b) {
      5 == type &&
        ((this.gf = hoAdRunHeader.m.Xd.LA(a)),
        (a = this.c.m.Xd.vk(this.gf)),
        (this.Wg = a.Ii()),
        null != b &&
          ((this.ea = this.ig = b.right - b.left),
          (this.ga = this.jg = b.bottom - b.top)),
        this.Mc());
    },
    IB: function () {
      return this.ff;
    },
    RD: function (a) {
      this.ff = a;
      this.Mc();
    },
    Ts: function (a, b, c, d, e, f) {
      null != this.ha.Rc &&
        1 != this.$b &&
        ((this.$b = !0),
        (this.lb = e),
        (this.xb = this.c.O.ic[c]),
        (this.gb = d ? this.xb.Md : this.xb.bc),
        0 > f ? this.gb.Vh(this) : this.gb.IA(this, f),
        5 != this.type && this.Mc());
    },
    bn: function () {
      if (null == this.ha.Rc || 0 == this.$b) return -1;
      this.$b = !1;
      var a = this.gb.$f(this);
      this.gb.removeChild(this);
      return a;
    },
    $f: function () {
      return this.$b ? this.gb.$f(this) : -1;
    },
    At: function () {
      return this.$b ? this.gb.children.length : -1;
    },
    si: function (a) {
      this.$b && this.gb.si(this, a);
    },
    Pp: function () {
      null != this.ha.Rc && 0 == this.lb && ((this.lb = !0), this.Mc());
    },
    Yo: function () {
      null != this.ha.Rc && 1 == this.lb && (this.lb = !1);
    },
    UD: function (a) {
      a != this.zb && ((this.zb = a), this.Mc());
    },
    Zm: function () {
      this.th || this.Mc();
    },
    Mc: function () {
      this.th = !0;
      this.ea = this.ga = 1;
      if (null != this.ha.Rc) {
        var a = this.ha.Rc,
          b,
          c = u.bp(this.zb, this.Tg);
        switch (a.zj) {
          case 1:
            var d,
              e,
              f = 0,
              h = 0;
            for (d = c.length - 1; 0 <= d; d--)
              (e = c.charCodeAt(d)),
                (b = 0),
                45 == e
                  ? (b = a.frames[10])
                  : 46 == e
                    ? (b = a.frames[12])
                    : 43 == e
                      ? (b = a.frames[11])
                      : 101 == e || 69 == e
                        ? (b = a.frames[13])
                        : 48 <= e && 57 >= e && (b = a.frames[e - 48]),
                0 <= b &&
                  ((b = this.c.m.Ia.Ac(b)),
                  (f += b.width),
                  (h = Math.max(h, b.height)));
            this.ab = f;
            this.bb = h;
            this.ea = f;
            this.ga = h;
            break;
          case 5:
            (this.ab = a =
              null != this.Lb
                ? this.Lb.measureText(c, this.font)
                : new Ca(this.c.m, 8, 8).measureText(c, this.font)),
              (this.bb = this.jg / 2 + this.Wg / 2),
              (this.ea = a),
              (this.ga = this.Wg),
              null == this.Lb
                ? (this.Lb = new Ca(this.c.m, this.ea, this.ga))
                : (this.ea > this.Lb.width || this.ga > this.Lb.height) &&
                  this.Lb.resize(this.ea, this.ga),
              this.Lb.ms(
                c,
                u.cq | u.eq,
                new va(0, 0, 1e3, 1e3),
                this.font,
                this.ff,
              );
        }
      }
    },
    Zc: function (a, b, c) {
      if (this.lb && this.th) {
        this.globalAlpha = this.alpha;
        this.globalCompositeOperation = this.Sq;
        var d = this.ha.Rc;
        b = b + this.w - this.ab - this.c.za + this.xb.x;
        var e = c + this.A - this.bb - this.c.Ea + this.xb.y;
        c = u.bp(this.zb, this.Tg);
        switch (this.type) {
          case 1:
            var f, h;
            for (f = 0; f < c.length; f++) {
              var k = c.charCodeAt(f);
              h = 0;
              45 == k
                ? (h = d.frames[10])
                : 46 == k || 44 == k
                  ? (h = d.frames[12])
                  : 43 == k
                    ? (h = d.frames[11])
                    : 69 == k || 101 == k
                      ? (h = d.frames[13])
                      : 48 <= k && 57 >= k && (h = d.frames[k - 48]);
              h = this.c.m.Ia.Ac(h);
              a.Hg(h, b + h.Mb, e + h.Gb, 0, 1, 1, this.Z.Pd, this.Z.Qd);
              b += h.width;
            }
            break;
          case 5:
            this.Lb.Zc(a, b, e, this.Z.Pd, this.Z.Qd);
        }
      }
    },
    Ru: function (a) {
      this.Z.Pd = R.Wi;
      this.Z.Qd = a;
    },
  });
  Td.prototype = u.extend(new aa(), {
    Da: function () {
      this.gf = -1;
      this.ff = 0;
      var a = this.ha.Rc;
      this.ea = this.ig = a.Gn;
      this.ga = this.jg = a.Hn;
      this.type = a.zj;
      this.ff = a.Zl;
      this.Yn = a.kJ;
      this.zb = this.c.m.Bt()[this.Yn - 1];
      this.Tg = a.Mr;
      if (5 == this.type) {
        var b = this.gf;
        -1 == b && (b = a.tp);
        this.font = this.c.m.Xd.vk(b);
        this.Wg = this.font.Ii();
      }
    },
    gd: function () {},
    handle: function () {
      var a = this.c.m.Bt()[this.Yn - 1];
      a != this.zb && ((this.zb = a), this.Mc());
      this.Z.handle();
      this.b.ka && (this.b.ka = !1);
    },
    uk: function () {
      var a = this.ha.Rc;
      if (5 == a.zj) {
        var b = this.gf;
        -1 == b && (b = a.tp);
        return this.c.m.Xd.JB(b);
      }
      return null;
    },
    ls: function (a, b) {
      5 == type &&
        ((this.gf = hoAdRunHeader.m.Xd.LA(a)),
        (a = this.c.m.Xd.vk(this.gf)),
        (this.Wg = a.Ii()),
        null != b &&
          ((this.ea = this.ig = b.right - b.left),
          (this.ga = this.jg = b.bottom - b.top)),
        this.Mc());
    },
    IB: function () {
      return this.ff;
    },
    RD: function (a) {
      this.ff = a;
      this.Mc();
    },
    Ts: function (a, b, c, d, e, f) {
      null != this.ha.Rc &&
        1 != this.$b &&
        ((this.$b = !0),
        (this.lb = e),
        (this.xb = this.c.O.ic[c]),
        (this.gb = d ? this.xb.Md : this.xb.bc),
        0 > f ? this.gb.Vh(this) : this.gb.IA(this, f),
        5 != this.type && this.Mc());
    },
    bn: function () {
      if (null == this.ha.Rc || 0 == this.$b) return -1;
      this.$b = !1;
      var a = this.gb.$f(this);
      this.gb.removeChild(this);
      return a;
    },
    $f: function () {
      return this.$b ? this.gb.$f(this) : -1;
    },
    At: function () {
      return this.$b ? this.gb.children.length : -1;
    },
    si: function (a) {
      this.$b && this.gb.si(this, a);
    },
    Pp: function () {
      null != this.ha.Rc && 0 == this.lb && ((this.lb = !0), this.Mc());
    },
    Yo: function () {
      null != this.ha.Rc && 1 == this.lb && (this.lb = !1);
    },
    UD: function (a) {
      a != this.zb && ((this.zb = a), this.Mc());
    },
    Zm: function () {
      this.th || this.Mc();
    },
    Mc: function () {
      this.th = !0;
      this.ea = this.ga = 1;
      if (null != this.ha.Rc) {
        var a = this.ha.Rc;
        switch (a.zj) {
          case 4:
            if (0 != this.zb) {
              var b = this.c.m.Ia.Ac(a.frames[0]),
                c = this.zb * b.width;
              c <= this.ig
                ? ((this.ea = c), (this.ga = b.height))
                : ((this.ea = this.ig),
                  (this.ga = (this.ig / b.width + this.zb - 1) * b.height));
              break;
            }
            this.ea = this.ga = 1;
            break;
          case 1:
            var d,
              e,
              b,
              f = 0,
              h = 0,
              c = u.bp(this.zb, this.Tg);
            for (d = c.length - 1; 0 <= d; d--)
              (b = c.charCodeAt(d)),
                (e = 0),
                45 == b
                  ? (e = a.frames[10])
                  : 46 == b
                    ? (e = a.frames[12])
                    : 43 == b
                      ? (e = a.frames[11])
                      : 101 == b || 69 == b
                        ? (e = a.frames[13])
                        : 48 <= b && 57 >= b && (e = a.frames[b - 48]),
                0 <= e &&
                  ((b = this.c.m.Ia.Ac(e)),
                  (f += b.width),
                  (h = Math.max(h, b.height)));
            this.ab = f;
            this.bb = h;
            this.ea = f;
            this.ga = h;
            break;
          case 5:
            (c = u.bp(this.zb, this.Tg)),
              (this.ab = a =
                null != this.Lb
                  ? this.Lb.measureText(c, this.font)
                  : new Ca(this.c.m, 8, 8).measureText(c, this.font)),
              (this.bb = this.jg / 2 + this.Wg / 2),
              (this.ea = a),
              (this.ga = this.Wg),
              null == this.Lb
                ? (this.Lb = new Ca(this.c.m, this.ea, this.ga))
                : (this.ea > this.Lb.width || this.ga > this.Lb.height) &&
                  this.Lb.resize(this.ea, this.ga),
              this.Lb.ms(
                c,
                u.cq | u.eq,
                new va(0, 0, 1e3, 1e3),
                this.font,
                this.ff,
              );
        }
      }
    },
    Zc: function (a, b, c) {
      if (this.lb && this.th) {
        this.globalAlpha = this.alpha;
        this.globalCompositeOperation = this.Sq;
        var d,
          e = this.ha.Rc;
        b = b + this.w - this.ab - this.c.za + this.xb.x;
        c = c + this.A - this.bb - this.c.Ea + this.xb.y;
        switch (this.type) {
          case 1:
            var f, h;
            d = u.bp(this.zb, this.Tg);
            for (f = 0; f < d.length; f++) {
              var k = d.charCodeAt(f);
              h = 0;
              45 == k
                ? (h = e.frames[10])
                : 46 == k || 44 == k
                  ? (h = e.frames[12])
                  : 43 == k
                    ? (h = e.frames[11])
                    : 69 == k || 101 == k
                      ? (h = e.frames[13])
                      : 48 <= k && 57 >= k && (h = e.frames[k - 48]);
              h = this.c.m.Ia.Ac(h);
              a.Hg(h, b + h.Mb, c + h.Gb, 0, 1, 1, this.Z.Pd, this.Z.Qd);
              b += h.width;
            }
            break;
          case 4:
            if (0 != this.zb) {
              d = b + this.ea;
              f = c + this.ga;
              var k = b,
                g = this.zb;
              for (
                h = this.c.m.Ia.Ac(e.frames[0]);
                c < f && 0 < g;
                c += h.height
              )
                for (b = k; b < d && 0 < g; b += h.width, --g)
                  a.Hg(h, b + h.Mb, c + h.Gb, 0, 1, 1, this.Z.Pd, this.Z.Qd);
            }
            break;
          case 5:
            this.Lb.Zc(a, b, c, this.Z.Pd, this.Z.Qd);
        }
      }
    },
    Ru: function (a) {
      this.Z.Pd = R.Wi;
      this.Z.Qd = a;
    },
  });
  Ud.prototype = u.extend(new aa(), {
    Da: function (a, b) {
      var c = a.Mf;
      this.ea = c.zJ;
      this.ga = c.AJ;
      this.ig = c.zJ;
      this.jg = c.AJ;
      this.yf = c.Qr;
      this.Jy = 0;
      0 < c.ee.length && (this.Jy = c.ee[0].MK);
      this.Mu = null;
      this.gf = -1;
      this.bd = 0;
      this.lb = !0;
      this.NS = b.mB;
      0 < c.ee.length && (this.Mu = c.ee[0].$n);
      var d = this.gf;
      -1 == d && 0 < c.ee.length && (d = c.ee[0].Wu);
      this.font = this.c.m.Xd.vk(d);
      this.Lb = new Ca(this.c.m, this.ea, this.ga);
    },
    gd: function () {},
    handle: function () {
      this.Z.handle();
      this.b.ka && (this.b.ka = !1);
    },
    uk: function () {
      var a = this.gf;
      -1 == a && (a = this.ha.Mf.ee[0].Wu);
      return this.c.m.Xd.JB(a);
    },
    ls: function (a, b) {
      this.gf = this.c.m.Xd.LA(a);
      this.font = this.c.m.Xd.vk(this.gf);
      null != b &&
        ((this.ea = b.right - b.left),
        (this.ga = b.bottom - b.top),
        this.Lb.resize(this.ea, this.ga));
      this.b.ka = !0;
      this.Mc();
    },
    IB: function () {
      return this.Jy;
    },
    RD: function (a) {
      this.Jy = a;
      this.Mc();
    },
    Ts: function (a, b, c, d, e, f) {
      1 != this.$b &&
        ((this.$b = !0),
        (this.lb = e),
        (this.xb = this.c.O.ic[c]),
        (this.gb = d ? this.xb.Md : this.xb.bc),
        0 > f ? this.gb.Vh(this) : this.gb.IA(this, f));
    },
    bn: function () {
      if (0 == this.$b) return -1;
      this.$b = !1;
      var a = this.gb.$f(this);
      this.gb.removeChild(this);
      return a;
    },
    $f: function () {
      return this.$b ? this.gb.$f(this) : -1;
    },
    At: function () {
      return this.$b ? this.gb.children.length : -1;
    },
    si: function (a) {
      this.$b && this.gb.si(this, a);
    },
    Pp: function () {
      0 == this.lb && (this.lb = !0);
    },
    Yo: function () {
      1 == this.lb && (this.lb = !1);
    },
    Sca: function (a) {
      -1 > a && (a = -1);
      a >= this.yf && (a = this.yf - 1);
      if (a == this.bd) return !1;
      this.bd = a;
      0 <= a && this.y6(this.ha.Mf.ee[this.bd].$n);
      this.Mc();
      return 0 != (this.Z.Ha & R.xo) ? !1 : !0;
    },
    y6: function (a) {
      this.Mu = a;
      this.Mc();
    },
    Zm: function () {
      this.th || this.Mc();
    },
    Mc: function () {
      this.th = !0;
      var a = this.ha.Mf,
        b = a.ee[0].bz;
      this.bb = this.ab = 0;
      this.rect.left = 0;
      this.rect.top = 0;
      this.rect.right = this.ea;
      this.rect.bottom = this.ga;
      0 <= this.bd
        ? (a = a.ee[this.bd].$n)
        : ((a = this.Mu), null == a && (a = ""));
      b &= u.cq | u.bq | u.AE | u.eq | u.wz | u.ko | u.EW;
      a = this.Lb.ms(a, b, this.rect, this.font, this.Jy);
      0 == (b & (u.wz | u.ko)) && (this.ga = a);
    },
    Ru: function (a) {
      this.Z.Pd = R.Wi;
      this.Z.Qd = a;
    },
    Zc: function (a, b, c) {
      this.lb &&
        this.th &&
        this.Lb.Zc(
          a,
          b + this.w - this.c.za + this.xb.x,
          c + this.A - this.c.Ea + this.xb.y,
          this.Z.Pd,
          this.Z.Qd,
        );
    },
  });
  Vd.prototype = u.extend(new aa(), {
    Da: function () {},
    gd: function () {},
    handle: function () {
      this.c.pause();
      this.c.fD = this;
      this.c.O.ic[this.c.O.Oe - 1].bc.Vh(this);
      this.h1();
    },
    wB: function () {
      this.c.O.ic[this.c.O.Oe - 1].bc.removeChild(this);
    },
    z2: function () {
      var a;
      a = this.c.m.Ik - this.c.m.bl;
      var b = this.c.m.Jk - this.c.m.dl;
      0 == this.Tq
        ? this.c.m.Jf[q.hk] && ((a = this.JP(a, b)), 0 != a && (this.Tq = a))
        : this.c.m.Jf[q.hk] ||
          (this.JP(a, b) == this.Tq
            ? ((this.c.s.ld = this.Tq),
              this.c.s.Gd(this, -5439484),
              0 != (this.ha.Mf.ee[this.Tq].bz & Ka.b0)
                ? this.c.s.Gd(this, -5308412)
                : this.c.s.Gd(this, -5373948),
              this.wB(),
              (this.c.fD = null),
              this.c.resume(),
              this.c.EB(this.Nc, !0))
            : (this.Tq = 0));
    },
    JP: function (a, b) {
      var c;
      if (null != this.gh)
        for (c = 1; c < this.gh.length; c++)
          if (
            a >= this.gh[c].left &&
            a < this.gh[c].right &&
            b > this.gh[c].top &&
            b < this.gh[c].bottom
          )
            return c;
      return 0;
    },
    MN: function (a, b, c) {
      var d, e;
      c ? ((d = 8421504), (e = 16777215)) : ((e = 8421504), (d = 16777215));
      a.yy(b.left, b.top, b.right - b.left, b.bottom - b.top, 0, 1);
      var f = Array(3),
        h;
      for (h = 0; 3 > h; h++) f[h] = new X();
      f[0].x = b.right - 1;
      0 == c && --f[0].x;
      f[0].y = b.top + 1;
      f[1].y = b.top + 1;
      f[1].x = b.left + 1;
      f[2].x = b.left + 1;
      f[2].y = b.bottom;
      0 == c && --f[2].y;
      a.cf(f[0].x, f[0].y, f[1].x, f[1].y, d, 1);
      a.cf(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
      0 == c && --f[0].x;
      f[0].y += 1;
      f[1].x += 1;
      f[1].y += 1;
      f[2].x += 1;
      0 == c && --f[2].y;
      a.cf(f[0].x, f[0].y, f[1].x, f[1].y, d, 1);
      a.cf(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
      0 == c &&
        ((f[0].x += 2),
        (f[1].x = b.right - 1),
        (f[1].y = b.bottom - 1),
        (f[2].y = b.bottom - 1),
        --f[2].x,
        a.cf(f[0].x, f[0].y, f[1].x, f[1].y, e, 1),
        a.cf(f[1].x, f[1].y, f[2].x, f[2].y, e, 1),
        --f[0].x,
        (f[0].y += 1),
        --f[1].x,
        --f[1].y,
        (f[2].x += 1),
        --f[2].y,
        a.cf(f[0].x, f[0].y, f[1].x, f[1].y, e, 1),
        a.cf(f[1].x, f[1].y, f[2].x, f[2].y, e, 1));
    },
    l5: function (a, b, c) {
      var d = new va();
      d.jO(this.gh[b]);
      this.MN(a, this.gh[b], c);
      d.left += 2;
      d.top += 2;
      d.right -= 4;
      d.bottom -= 4;
      c && ((d.left += 2), (d.top += 2));
      this.Kg[b].Zc(
        a,
        (d.left + d.right) / 2 - this.Kg[b].width / 2,
        (d.top + d.bottom) / 2 - this.Kg[b].height / 2,
        0,
        0,
      );
    },
    h1: function () {
      this.HC = new Ca(this.c.m, 8, 8);
      var a = this.ha.Mf,
        b = this.c,
        c = a.ee[1],
        d = c.MK,
        e = 0 != (c.bz & Ka.hN),
        f = b.m.Xd.vk(c.Wu);
      this.hE = Math.floor((3 * this.HC.measureText("X", f)) / 2);
      this.$o = 4;
      this.Xg = 64;
      var h;
      for (h = 1; h < a.ee.length; h++)
        (c = a.ee[h]),
          0 < c.$n.length &&
            ((c = this.HC.measureText(c.$n, f)),
            (this.Xg = Math.max(this.Xg, c + 2 * this.hE + 4)),
            (this.$o = Math.max(this.$o, Math.floor((3 * f.Ii()) / 2))));
      this.TB = Math.max(Math.floor(this.$o / 4), 2);
      this.Xg += 2 * this.hE + 4;
      var k = new va();
      for (h = 1; h < a.ee.length; h++)
        (c = a.ee[h]),
          (this.Kg[h] = new Ca(b.m, this.Xg, this.$o)),
          (k.right = this.Xg),
          (k.bottom = this.$o),
          this.Kg[h].GC(c.$n, u.bq | u.ko, k, d, f, e ? 1 : 0, 16777215);
      a = a.ee[0];
      e = 0 != (a.bz & Ka.hN);
      f = b.m.Xd.vk(a.Wu);
      h = Math.floor((3 * this.HC.measureText("X", f)) / 2);
      c = this.HC.measureText(a.$n, f);
      this.hx = Math.floor((3 * f.Ii()) / 2);
      this.Xg = Math.max(this.Xg, c + 2 * h + 4);
      this.Xg > b.m.nb
        ? (this.Xg = b.m.nb)
        : this.Xg > b.O.Ah && (this.Xg = b.O.Ah);
      k.right = this.Xg;
      k.bottom = this.hx;
      this.Kg[0] = new Ca(b.m, this.Xg, this.hx);
      this.Kg[0].GC(a.$n, u.bq | u.ko, k, d, f, e ? 1 : 0, 16777215);
    },
    Zc: function (a) {
      var b = this.ha.Mf,
        c = this.c,
        d = this.w - c.za,
        c = this.A - c.Ea,
        e = new va();
      e.left = d;
      e.top = c;
      var f =
        this.hx + 1 + (this.$o + this.TB) * (b.ee.length - 1) + this.TB + 4;
      e.right = d + this.Xg;
      e.bottom = c + f;
      a.df(e.left, e.top, e.right - e.left, e.bottom - e.top, 12632256, 0, 0);
      this.MN(a, e, !1);
      e.left += 2;
      e.top += 2;
      e.right -= 2;
      e.bottom = e.top + this.hx;
      this.Kg[0].Zc(
        a,
        (e.left + e.right) / 2 - this.Kg[0].width / 2,
        (e.top + e.bottom) / 2 - this.Kg[0].height / 2,
        0,
        0,
      );
      e.top = e.bottom;
      a.cf(e.left, e.top, e.right, e.bottom, 8421504, 1, 0, 0);
      e.top += 1;
      e.bottom += 1;
      a.cf(e.left, e.top, e.right, e.bottom, 16777215, 1, 0, 0);
      if (null == this.gh)
        for (this.gh = Array(b.ee.length), Ba = 1; Ba < b.ee.length; Ba++)
          (this.gh[Ba] = new va()),
            (this.gh[Ba].left = d + 2 + this.hE),
            (this.gh[Ba].right = d + this.Xg - 2 - this.hE),
            (this.gh[Ba].top =
              c + 2 + this.hx + 1 + this.TB + (this.$o + this.TB) * (Ba - 1)),
            (this.gh[Ba].bottom = this.gh[Ba].top + this.$o);
      for (Ba = 1; Ba < b.ee.length; Ba++) this.l5(a, Ba, this.Tq == Ba);
    },
  });
  Wd.prototype = u.extend(new aa(), {
    Da: function (a, b) {
      this.ext.Da(this);
      var c = this.c.m.file.Yf(a.MR);
      this.IJ = a.NR;
      this.ext.cH(c, b, a.OR);
    },
    YF: function (a, b, c, d, e) {
      this.xb = this.c.O.ic[d];
      this.lb = e;
      1 != this.$b &&
        ((this.$b = !0), (this.gb = this.xb.bc), this.gb.Vh(this));
    },
    Ts: function (a, b, c, d, e) {
      this.xb = this.c.O.ic[c];
      this.lb = e;
      1 != this.$b &&
        ((this.$b = !0),
        (this.gb = d ? this.xb.Md : this.xb.bc),
        this.gb.Vh(this));
    },
    bn: function () {
      if (0 == this.$b) return -1;
      this.$b = !1;
      var a = this.gb.$f(this);
      this.gb.removeChild(this);
      return a;
    },
    handle: function () {
      0 != (this.ib & 512)
        ? this.Z.handle()
        : 16 == (this.ib & 48) || 48 == (this.ib & 48)
          ? this.H.move()
          : 32 == (this.ib & 48) && this.Wa.Di();
      var a = 0;
      0 == this.dJ && (a = this.ext.PB());
      0 != (a & Oa.PM) && (this.dJ = !0);
      null != this.b && this.b.ka && (this.b.ka = !1);
    },
    Ho: function () {
      this.ext.Ho();
    },
    qO: function () {},
    Zc: function (a, b, c) {
      this.lb && this.ext.MO(a, b, c);
    },
    gd: function (a) {
      this.ext.gH(a);
    },
    f2: function () {
      return null;
    },
    Aw: function (a, b) {
      return this.ext.Aw(a, b);
    },
    action: function (a, b) {
      this.ext.action(a, b);
    },
    Rw: function (a) {
      return this.ext.Rw(a);
    },
    Ru: function (a) {
      this.Z.Pd = R.Wi;
      this.Z.Qd = a;
    },
    Fca: function () {},
    Pp: function () {
      this.lb = !0;
    },
    Yo: function () {
      this.lb = !1;
    },
    $f: function () {
      return this.gb.$f(this);
    },
    At: function () {
      return this.gb.children.length;
    },
    si: function (a) {
      a >= this.gb.children.length && (a = this.gb.children.length);
      0 > a && (a = 0);
      this.gb.si(this, a);
    },
    x4: function () {},
    k1: function () {},
    xt: function () {
      this.ext.xt();
    },
    lQ: function (a) {
      this.c.m.Ia.lQ(a);
    },
    wba: function (a) {
      return this.c.m.Ia.Ac(a);
    },
    mba: function () {
      return this.c.m;
    },
    Cba: function () {
      return this.w;
    },
    Dba: function () {
      return this.A;
    },
    Bba: function () {
      return this.ea;
    },
    Ii: function () {
      return this.ga;
    },
    VD: function (a) {
      null != this.H
        ? this.H.oa.Cd(a)
        : ((this.w = a),
          null != this.b && ((this.b.ka = !0), (this.b.jc = !0)));
    },
    WD: function (a) {
      null != this.H
        ? this.H.oa.Dd(a)
        : ((this.A = a),
          null != this.b && ((this.b.ka = !0), (this.b.jc = !0)));
    },
    Ty: function (a) {
      this.ea = a;
    },
    Ry: function (a) {
      this.ga = a;
    },
    Sy: function (a, b) {
      this.ea = a;
      this.ga = b;
    },
    rca: function () {
      this.dJ = !1;
    },
    Xe: function (a, b) {
      if (0 == this.c.Uk) {
        var c = this.c.s.ld;
        this.c.s.ld = b;
        a = -(a + Y.wi + 1) << 16;
        a |= this.eb & 65535;
        this.c.s.Gd(this, a);
        this.c.s.ld = c;
      }
    },
    lu: function (a, b) {
      0 == this.c.Uk &&
        ((a = -(a + Y.wi + 1) << 16),
        (a |= this.eb & 65535),
        this.c.s.lS(1, a, b, this, this.Bc));
    },
    pause: function () {
      this.c.pause();
    },
    resume: function () {
      this.c.resume();
    },
    sca: function () {},
    Saa: function () {
      this.c.rl(this.Nc);
    },
    setPosition: function (a, b) {
      null != this.H
        ? (this.H.oa.Cd(a), this.H.oa.Dd(b))
        : ((this.w = a),
          (this.A = b),
          null != this.b && ((this.b.ka = !0), (this.b.jc = !0)));
    },
    qba: function () {
      return this.IJ;
    },
    Eca: function (a) {
      this.IJ = a;
    },
    HA: function (a, b, c, d, e) {
      this.c.HA(a, b, c, e, d, !0);
    },
    oba: function () {
      return this.c.Hu;
    },
    wl: function () {
      this.c.Pf++;
      return this.c.getExpression();
    },
    pba: function () {
      return this.c.s.ld;
    },
    SN: function (a, b, c) {
      return 0 != (a.ib & J.$i) && a.b.sd == ia.Ai ? a.H.oa.SN(b, c) : 0;
    },
    rba: function () {
      this.fJ = this.dy = 0;
      return this.o2();
    },
    o2: function () {
      if (this.fJ < this.c.Xb) {
        for (; null == this.c.X[this.dy]; ) this.dy++;
        var a = this.c.X[this.dy];
        this.fJ++;
        this.dy++;
        return a;
      }
      return null;
    },
    yba: function (a) {
      var b = 0,
        c;
      for (c = 0; c < this.c.Xb; c++) {
        for (; null == this.c.X[b]; ) b++;
        var d = this.c.X[b];
        b++;
        if (((d.Zo << 16) | (d.Nc & 65535)) == a) return d;
      }
      return null;
    },
    oP: function (a) {
      return this.c.oP(a);
    },
    pP: function (a) {
      return this.c.pP(a);
    },
    t4: function (a) {
      return hoAdRunHeader.m.t4(a);
    },
    Daa: function () {},
  });
  wb.b$ = 22;
  wb.create = function (a) {
    var b = a.file.Oa,
      c = null,
      d = a.file.B(),
      e = a.file.B();
    switch (e) {
      case 1:
        c = new wf(a);
        break;
      case 2:
        c = new yf(a);
        break;
      case 3:
        c = new Ea(a);
        break;
      case 4:
        c = new Ea(a);
        break;
      case 5:
        c = new db(a);
        break;
      case 6:
        c = new yb(a);
        break;
      case 7:
        c = new db(a);
        break;
      case 9:
        c = new Wb(a);
        break;
      case 10:
        c = new Ea(a);
        break;
      case 11:
        c = new Ea(a);
        break;
      case 12:
        c = new Ea(a);
        break;
      case 13:
        c = new tf(a);
        break;
      case 14:
        c = new Yd(a);
        break;
      case 15:
        c = new La(a);
        break;
      case 16:
        c = new Zd(a);
        break;
      case 17:
        c = new Ea(a);
        break;
      case 18:
        c = new $d(a);
        break;
      case 19:
        c = new ae(a);
        break;
      case 21:
        c = new Wb(a);
        break;
      case 22:
        c = new La(a);
        break;
      case 23:
        c = new La(a);
        break;
      case 24:
        c = new sf(a);
        break;
      case 25:
        c = new db(a);
        break;
      case 26:
        c = new Ea(a);
        break;
      case 27:
        c = new La(a);
        break;
      case 28:
        c = new La(a);
        break;
      case 29:
        c = new db(a);
        break;
      case 31:
        c = new Ea(a);
        break;
      case 32:
        c = new Ea(a);
        break;
      case 34:
        c = new db(a);
        break;
      case 35:
        c = new yb(a);
        break;
      case 36:
        c = new yb(a);
        break;
      case 37:
        c = new Ea(a);
        break;
      case 38:
        c = new wa(a);
        break;
      case 39:
        c = new vf(a);
        break;
      case 40:
        c = new zb(a);
        break;
      case 41:
        c = new zb(a);
        break;
      case 42:
        c = new rf(a);
        break;
      case 43:
        c = new Ea(a);
        break;
      case 44:
        c = new Yd(a);
        break;
      case 45:
        c = new La(a);
        break;
      case 46:
        c = new La(a);
        break;
      case 47:
        c = new Xd(a);
        break;
      case 48:
        c = new db(a);
        break;
      case 49:
        c = new Ea(a);
        break;
      case 50:
        c = new Ea(a);
        break;
      case 51:
        c = new Xd(a);
        break;
      case 52:
        c = new La(a);
        break;
      case 53:
        c = new La(a);
        break;
      case 54:
        c = new La(a);
        break;
      case 55:
        c = new uf(a);
        break;
      case 56:
        c = new db(a);
        break;
      case 57:
        c = new Ea(a);
        break;
      case 58:
        c = new Ea(a);
        break;
      case 59:
        c = new La(a);
        break;
      case 60:
        c = new Ea(a);
        break;
      case 61:
        c = new Ea(a);
        break;
      case 62:
        c = new La(a);
        break;
      case 63:
        c = new zb(a);
        break;
      case 64:
        c = new zb(a);
        break;
      case 67:
        c = new Ea(a);
        break;
      case 68:
        c = new be(a);
        break;
      case 69:
        c = new xf(a);
        break;
      case 72:
        c = new ae(a);
    }
    c.code = e;
    a.file.seek(b + d);
    return c;
  };
  wa.ZX = 1;
  wa.x8 = 2;
  wa.lo = 4;
  wa.Em = 8;
  wa.y8 = 16;
  Ja.bW = 1;
  Ja.aW = 2;
  Ja.cW = 4;
  Ja.DL = 8;
  Ja.prototype = {
    mD: function (a, b, c) {
      c.ox = -1;
      if (-1 == this.ly) {
        0 != b &&
          ((c.dir = -1), 0 == (this.Ur & Ja.DL) && (c.dir = a.QP(this.WC)));
        c.x = this.ZC;
        c.y = this.$C;
        var d = this.FJ;
        d > a.O.Oe - 1 && (d = a.O.Oe - 1);
        c.ox = d;
        c.GG = !1;
      } else {
        a.s.uu = !1;
        d = a.s.LB(this.my);
        c.GG = a.s.ef;
        if (null == d) return !1;
        c.x = d.w;
        c.y = d.A;
        c.ox = d.ug;
        if (0 != (this.Ur & Ja.aW) && 0 != (d.ib & J.pq) && 0 <= d.b.Jb) {
          var e;
          e = d.b.uc;
          var f = a.fc(d);
          null != f && ((e = f.zt()), e == H.TK && (e = d.b.uc));
          e = a.m.Ia.er(d.b.Jb, e, d.b.Sc, d.b.Tc);
          c.x += e.al - e.Mb;
          c.y += e.cl - e.Gb;
        }
        0 != (this.Ur & Ja.bW)
          ? ((e = (this.EJ + d.c.Fd(d)) & 31),
            (f = ca.i2(this.XC, e)),
            (c.x += ca.h2(this.XC, e)),
            (c.y += f))
          : ((c.x += this.ZC), (c.y += this.$C));
        0 != (b & 1) &&
          (c.dir =
            0 != (this.Ur & Ja.DL)
              ? -1
              : 0 != (this.Ur & Ja.cW)
                ? d.c.Fd(d)
                : a.QP(this.WC));
      }
      return 0 != (b & 2) &&
        (c.x < a.Cu || c.x > a.Au || c.y < a.Gu || c.y > a.Eu)
        ? !1
        : !0;
    },
  };
  Zd.prototype = u.extend(new Ja(), {});
  Wb.prototype = u.extend(new Ja(), {});
  $d.prototype = u.extend(new Ja(), {});
  be.prototype = {
    evaluate: function (a) {
      if (null == a.cb || (0 != this.tP && (a.cb.Ky & this.tP) != this.a2))
        return !1;
      for (var b = 0; b < this.values.length; b++) {
        var c = this.values[b],
          d;
        d = c.global ? a.c.m.xl(c.index) : a.cb.Ct(c.index);
        if (!t.Rq(d, c.WT, c.s4)) return !1;
      }
      return !0;
    },
  };
  Ab.prototype = {
    df: function () {},
    gK: function () {},
    fK: function () {},
    BS: function () {},
    Hg: function () {},
    Dp: function () {},
    CS: function () {},
    DS: function () {},
    cf: function () {},
    yy: function () {},
    pD: function () {},
    p5: function () {},
    kS: function (a, b, c, d) {
      var e = this.Pq[this.Pq.length - 1];
      e &&
        (a < e.x && (a = e.x),
        b < e.y && (b = e.y),
        a + c > e.x + e.ud && (c = e.x + e.ud - a),
        b + d > e.y + e.dx && (d = e.y + e.dx - b));
      a = { x: a, y: b, ud: c, dx: d };
      this.Pq.push(a);
      return a;
    },
    cS: function () {
      this.Pq.pop();
    },
  };
  eb.prototype = u.extend(new Ab(), {
    rD: function (a) {
      this.wJ = this.AK = a;
      this.Zb.imageSmoothingEnabled = a;
      this.Zb.webkitImageSmoothingEnabled = a;
      this.Zb.mozImageSmoothingEnabled = a;
      this.Zb.msImageSmoothingEnabled = a;
      this.vJ = -1;
      this.Oj(0, 0);
    },
    oT: function (a, b) {
      this.Zb.scale(a, b);
      this.fz = a;
      this.jz = b;
      this.To = this.So = 0;
      1 < this.fz
        ? (this.So = 1)
        : 0 < this.fz && 1 > this.fz && (this.So = 1 / this.fz);
      1 < this.jz && (this.To = 1);
      0 < this.jz && 1 > this.jz && (this.To = 1 / this.jz);
    },
    ww: function (a, b, c, d) {
      this.Zb.clearRect(a, b, c, d);
    },
    df: function (a, b, c, d, e, f, h) {
      var k = this.Zb;
      this.Oj(f, h);
      k.fillStyle = u.ij(e);
      e = a - Math.floor(a);
      f = b - Math.floor(b);
      0 != e && (e = 1 - e);
      0 != f && (f = 1 - f);
      e += this.So;
      f += this.To;
      k.fillRect(a, b, c + e, d + f);
    },
    gK: function (a, b, c, d, e, f, h) {
      var k = this.Zb;
      this.Oj(f, h);
      k.fillStyle = u.ij(e);
      u.sB(k, a, b, c, d);
      k.fill();
    },
    fK: function (a, b, c, d, e, f, h, k, g) {
      if (e == f) return this.df(a, b, c, d, e, k, g);
      var S = this.Zb;
      this.Oj(k, g);
      k = a - Math.floor(a);
      g = b - Math.floor(b);
      0 != k && (k = 1 - k);
      0 != g && (g = 1 - g);
      k += this.So;
      g += this.To;
      this.gO(a, b, c + k, d + g, h, e, f);
      S.fillRect(a, b, c + k, d + g);
    },
    BS: function (a, b, c, d, e, f, h, k, g) {
      if (e == f) return this.gK(a, b, c, d, e, k, g);
      var S = this.Zb;
      this.Oj(k, g);
      this.gO(a, b, c, d, h, e, f);
      u.sB(S, a, b, c, d);
      this.Zb.fill();
    },
    Hg: function (a, b, c, d, e, f, h, k) {
      var g = this.Zb,
        n = b - a.Mb,
        m = c - a.Gb;
      this.Oj(h, k);
      h = b - Math.floor(b);
      k = c - Math.floor(c);
      0 != h && (h = 1 - h);
      0 != k && (k = 1 - k);
      h += this.So;
      k += this.To;
      var v = 0,
        A = 0,
        l;
      0 == a.ne
        ? (l = a.Ze)
        : ((l = a.app.Ia.Ae[a.ne]), (v = a.li), (A = a.mi));
      null != l &&
        (0 == d && 1 == e && 1 == f
          ? 0 == a.ne && 0 == h && 0 == k
            ? g.drawImage(l, n, m)
            : g.drawImage(
                l,
                v,
                A,
                a.width,
                a.height,
                n,
                m,
                a.width + h,
                a.height + k,
              )
          : (g.save(),
            g.translate(b, c),
            0 != d && g.rotate(0.0174532925 * -d),
            g.scale(Math.max(0.001, e), Math.max(0.001, f)),
            g.translate(-a.Mb, -a.Gb),
            g.drawImage(l, v, A, a.width, a.height, 0, 0, a.width, a.height),
            g.restore()));
    },
    Dp: function (a, b, c, d, e, f, h) {
      this.Oj(f, h);
      f = b - Math.floor(b);
      h = c - Math.floor(c);
      0 != f && (f = 1 - f);
      0 != h && (h = 1 - h);
      f += this.So;
      h += this.To;
      this.Zb.drawImage(a, b, c, d + f, e + h);
    },
    CS: function (a, b, c, d, e, f, h) {
      var k = this.Zb;
      this.Oj(f, h);
      k.save();
      k.beginPath();
      k.moveTo(b, c);
      k.lineTo(b + d, c);
      k.lineTo(b + d, c + e);
      k.lineTo(b, c + e);
      k.lineTo(b, c);
      k.clip();
      f = a.width;
      h = a.height;
      d = Math.floor(d / f) + 1;
      e = Math.floor(e / h) + 1;
      var g,
        n,
        m = b - Math.floor(b),
        v = c - Math.floor(c);
      0 != m && (m = 1 - m);
      0 != v && (v = 1 - v);
      var m = m + this.So,
        v = v + this.To,
        A = 0,
        l = 0,
        P;
      0 == a.ne
        ? (P = a.Ze)
        : ((P = a.app.Ia.Ae[a.ne]), (A = a.li), (l = a.mi));
      if (null != P)
        for (g = 0; g < d; g++)
          for (n = 0; n < e; n++)
            k.drawImage(
              P,
              A,
              l,
              a.width,
              a.height,
              b + g * f,
              c + n * h,
              a.width + m,
              a.height + v,
            );
      k.restore();
    },
    DS: function (a, b, c, d, e, f, h) {
      if (!(a instanceof qa))
        throw Error("renderPatternEllipse: bad image type: " + typeof a);
      var k = this.Zb;
      this.Oj(f, h);
      0 == a.ne
        ? null != a.Ze && (k.fillStyle = k.createPattern(a.Ze, "repeat"))
        : (a.pattern ||
            ((a.pattern = document.createElement("canvas")),
            (a.pattern.width = a.width),
            (a.pattern.height = a.height),
            (k = a.pattern.getContext("2d")),
            k.drawImage(
              a.app.Ia.Ae[a.ne],
              a.li,
              a.mi,
              a.width,
              a.height,
              0,
              0,
              a.width,
              a.height,
            )),
          (k.fillStyle = k.createPattern(a.pattern, "repeat")));
      u.sB(k, b, c, d, e);
      this.Zb.fill();
    },
    cf: function (a, b, c, d, e, f, h, k) {
      var g = this.Zb;
      this.Oj(h, k);
      g.strokeStyle = u.ij(e);
      g.lineCap = "round";
      g.lineWidth = f;
      g.beginPath();
      g.moveTo(a, b);
      g.lineTo(c, d);
      g.closePath();
      g.stroke();
    },
    yy: function (a, b, c, d, e, f, h, k) {
      var g = this.Zb;
      this.Oj(h, k);
      g.strokeStyle = u.ij(e);
      g.lineWidth = f;
      g.strokeRect(a, b, c, d);
    },
    pD: function (a, b, c, d, e, f, h, k) {
      var g = this.Zb;
      this.Oj(h, k);
      g.lineWidth = e;
      g.strokeStyle = u.ij(f);
      u.sB(g, a, b, c, d);
      this.Zb.stroke();
    },
    p5: function (a, b, c, d, e, f) {
      var h = this.Zb;
      e = u.ij(e);
      1 == f
        ? (h.beginPath(),
          h.moveTo(a, b),
          h.lineTo(a + c, b),
          h.lineTo(a + c / 2, b - d))
        : (h.beginPath(),
          h.moveTo(a, b),
          h.lineTo(a, b - c),
          h.lineTo(a - d, b - c / 2));
      h.closePath();
      h.lineWidth = 1;
      h.strokeStyle = e;
      h.stroke();
      h.fillStyle = e;
      h.fill();
    },
    clip: function (a, b, c, d) {
      var e = this.Zb;
      e.save();
      e.beginPath();
      e.rect(a, b, c, d);
      e.clip();
    },
    A6: function () {
      this.Zb.restore();
    },
    kS: function () {
      var a = this.Zb,
        b = Ab.prototype.kS.apply(this, arguments);
      a.beginPath();
      a.rect(b.x, b.y, b.ud, b.dx);
      a.clip();
    },
    cS: function () {
      var a = this.Zb;
      Ab.prototype.cS.apply(this, arguments);
      if (0 < this.Pq.length) {
        var b = this.Pq[this.Pq.length - 1];
        a.beginPath();
        a.rect(b.x, b.y, b.ud, b.dx);
        a.clip();
      } else a.tca();
    },
    Oj: function (a, b) {
      var c = this.Zb;
      if ("undefined" == typeof a) (c.globalAlpha = 1), (c.Sq = "source-over");
      else if (a != this.vJ || b != this.n4) {
        this.vJ = a;
        this.n4 = b;
        var d = a & R.rE,
          e = (0 != (a & R.fL)) | this.AK;
        e != this.wJ &&
          ((this.wJ = e),
          (c.imageSmoothingEnabled = e),
          (c.webkitImageSmoothingEnabled = e),
          (c.mozImageSmoothingEnabled = e),
          (c.msImageSmoothingEnabled = e));
        c.globalAlpha =
          0 != (a & R.nz)
            ? ((b >>> 24) & 255) / 255
            : d == R.Wi
              ? (128 - b) / 128
              : 1;
        switch (d) {
          case R.DV:
            c.Sq = "lighter";
            break;
          case R.FV:
            c.Sq = "xor";
            break;
          default:
            c.Sq = "source-over";
        }
      }
    },
    gO: function (a, b, c, d, e, f, h) {
      a = e
        ? this.Zb.createLinearGradient(a, b, a, b + d)
        : this.Zb.createLinearGradient(a, b, a + c, b);
      a.addColorStop(0, u.ij(f));
      a.addColorStop(1, u.ij(h));
      this.Zb.fillStyle = a;
    },
  });
  Pa.AA = 1;
  Pa.prototype = {
    load: function (a) {
      var b = a.Oa;
      a.Qa(4);
      this.NT = a.v();
      this.MT = a.v();
      this.az = a.v();
      this.$y = a.Qe();
      var c = a.v(),
        d = a.v();
      a.seek(b + c);
      this.Fw = a.Nd();
      this.Fw = this.Fw.substr(0, this.Fw.indexOf("."));
      this.BO = b + d;
    },
  };
  ce.prototype = {
    NP: function () {
      return null;
    },
  };
  K.Oz = 0;
  K.rA = 1;
  K.gN = 2;
  K.gL = 3;
  K.sE = 0;
  K.aF = 1;
  K.oL = 2;
  K.fN = 3;
  K.Ao = 0;
  K.Bo = 1;
  K.Zp = 2;
  K.$p = 3;
  K.nL = 4;
  K.IL = 0;
  K.DW = 1;
  K.NF = 1;
  K.BA = 2;
  K.prototype = {
    start: function (a, b, c, d) {
      this.GO = b;
      this.cn = this.GO.getContext("2d");
      this.Fa = c;
      this.I = d;
      this.uC = new Date().getTime();
      this.D = a.MT;
      0 == this.D && (this.D = 1);
      this.yx = this.uC;
      this.zx = this.uC + this.D;
      this.sb = this.OQ = !0;
    },
    finish: function () {},
    YB: function () {
      if (this.OQ) {
        var a = new Date();
        return a.getTime() >= this.zx ? !0 : a.getTime() >= this.zx;
      }
      return !0;
    },
    Ye: function () {
      this.yx = new Date().getTime();
      this.yx > this.zx && (this.yx = this.zx);
      return this.yx - this.uC;
    },
    Y: function (a, b, c, d, e, f, h) {
      this.zC && (this.cn.globalCompositeOperation = "source-atop");
      1 == arguments.length
        ? this.cn.drawImage(a, 0, 0)
        : 0 < f && 0 < h && this.cn.drawImage(a, d, e, f, h, b, c, f, h);
    },
    stretch: function (a, b, c, d, e, f, h, k, g) {
      this.zC && (this.cn.globalCompositeOperation = "source-atop");
      0 < d &&
        0 < e &&
        0 < k &&
        0 < g &&
        this.cn.drawImage(a, f, h, k, g, b, c, d, e);
    },
    Rd: function () {},
    end: function () {},
    Da: function () {},
  };
  de.prototype = {
    l6: function (a, b) {
      var c = a.ha.gu;
      b && (c = a.ha.ey);
      var d = null,
        e;
      if (0 != (a.ib & J.pq)) {
        var f = this.app.Ia.Ac(a.b.Jb),
          d = document.createElement("canvas");
        d.width = f.width;
        d.height = f.height;
        e = d.getContext("2d");
        0 == f.ne
          ? e.drawImage(f.Ze, 0, 0)
          : e.drawImage(
              this.app.Ia.Ae[f.ne],
              f.li,
              f.mi,
              f.width,
              f.height,
              0,
              0,
              f.width,
              f.height,
            );
      } else
        32 <= a.eb &&
          ((d = document.createElement("canvas")),
          (d.width = a.ea),
          (d.height = a.ga),
          new StandardRendered(d),
          (d = null));
      if (null == d) return null;
      e = d.width;
      var h = d.height,
        f = document.createElement("canvas");
      f.width = e;
      f.height = h;
      var k = document.createElement("canvas");
      k.width = e;
      k.height = h;
      var g = document.createElement("canvas");
      g.width = e;
      g.height = h;
      b
        ? ((e = k.getContext("2d")),
          e.drawImage(d, 0, 0),
          (e = f.getContext("2d")),
          e.drawImage(d, 0, 0),
          0 != (c.az & Pa.AA) && this.iO(g, d, c.$y))
        : ((e = g.getContext("2d")),
          e.drawImage(d, 0, 0),
          0 != (c.az & Pa.AA) && this.iO(k, d, c.$y));
      c = this.kt(c, f, k, g);
      null != c &&
        ((d = 0),
        0 != (a.wa & aa.oo)
          ? ((c.zC = !0), (d |= K.BA))
          : ((c.zC = !1), (d |= K.NF)),
        (a.ps = f),
        c.Rd(d));
      return c;
    },
    iO: function (a, b, c) {
      a = a.getContext("2d");
      a.drawImage(b, 0, 0);
      var d = b.width;
      b = b.height;
      var e = a.getImageData(0, 0, d, b),
        f,
        h = (c & 16711680) >> 16,
        k = (c & 65280) >> 8,
        g = c & 255;
      for (f = 0; f < b; f++)
        for (c = 0; c < d; c++)
          0 != e.data[4 * (f * d + c) + 3] &&
            ((e.data[4 * (f * d + c)] = h),
            (e.data[4 * (f * d + c) + 1] = k),
            (e.data[4 * (f * d + c) + 2] = g));
      a.putImageData(e, 0, 0);
    },
    kt: function (a, b, c, d) {
      var e = null;
      "cctrans" == a.Fw.toLowerCase() && (e = new ob());
      return null != e
        ? ((e = e.NP(a)),
          this.app.file.seek(a.BO),
          (e.zC = !1),
          e.Da(a, this.app.file, b, c, d),
          e)
        : null;
    },
  };
  ob.XP =
    "BAND SE00 SE10 SE12 DOOR SE03 MOSA SE05 SE06 SCRL SE01 SE07 SE09 SE13 SE08 SE02 ZIGZ SE04 ZOOM SE11 FADE".split(
      " ",
    );
  ob.prototype = u.extend(new ce(), {
    NP: function (a) {
      var b = a.NT;
      a = "" + String.fromCharCode(b & 255);
      b >>= 8;
      a += String.fromCharCode(b & 255);
      b >>= 8;
      a += String.fromCharCode(b & 255);
      a += String.fromCharCode((b >> 8) & 255);
      for (b = 0; b < ob.XP.length && a != ob.XP[b]; b++);
      a = null;
      switch (b) {
        case 0:
          a = new ge();
          break;
        case 1:
          a = new ee();
          break;
        case 2:
          a = new fe();
          break;
        case 3:
          a = new he();
          break;
        case 4:
          a = new ie();
          break;
        case 5:
          a = new ke();
          break;
        case 6:
          a = new le();
          break;
        case 7:
          a = new me();
          break;
        case 8:
          a = new ne();
          break;
        case 9:
          a = new oe();
          break;
        case 10:
          a = new pe();
          break;
        case 11:
          a = new qe();
          break;
        case 12:
          a = new re();
          break;
        case 13:
          a = new se();
          break;
        case 14:
          a = new te();
          break;
        case 15:
          a = new ue();
          break;
        case 16:
          a = new ve();
          break;
        case 17:
          a = new we();
          break;
        case 18:
          a = new ze();
          break;
        case 19:
          a = new Ae();
          break;
        case 20:
          a = new je();
      }
      return a;
    },
  });
  ee.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.zc = b.v();
      this.start(a, c, d, e);
    },
    Rd: function () {
      this.sb &&
        ((this.sb = !1),
        (this.l = this.I.width),
        (this.j = this.I.height),
        (this.QQ = 8 != this.zc ? this.zc : Math.floor(8 * Math.random())));
      var a = this.Ye();
      if (1 < a / this.D) this.Y(this.I);
      else {
        var b, c;
        switch (this.QQ) {
          case 0:
            b = ((this.l / 3) * a) / this.D;
            c = this.j;
            this.Y(this.I, 0, 0, this.l / 3 - b, 0, b, c);
            this.Y(this.I, this.l - b, 0, (2 * this.l) / 3, 0, b, c);
            b = this.l / 3;
            c = (this.j * a) / this.D;
            this.Y(this.I, b, 0, b, this.j - c, b, c);
            break;
          case 1:
            b = ((this.l / 3) * a) / this.D;
            c = this.j;
            this.Y(this.I, 0, 0, this.l / 3 - b, 0, b, c);
            this.Y(this.I, this.l - b, 0, (2 * this.l) / 3, 0, b, c);
            b = this.l / 3;
            c = (this.j * a) / this.D;
            this.Y(this.I, b, this.j - c, b, 0, b, c);
            break;
          case 2:
            b = ((this.l / 3) * a) / this.D;
            c = this.j;
            this.Y(this.I, 0, 0, this.l / 3 - b, 0, b, c);
            this.Y(this.I, this.l - b, 0, (2 * this.l) / 3, 0, b, c);
            b = this.l / 3;
            c = (this.j * a) / this.D;
            this.Y(this.I, b, 0, b, 0, b, c);
            break;
          case 3:
            b = ((this.l / 3) * a) / this.D;
            c = this.j;
            this.Y(this.I, 0, 0, this.l / 3 - b, 0, b, c);
            this.Y(this.I, this.l - b, 0, (2 * this.l) / 3, 0, b, c);
            b = this.l / 3;
            c = (this.j * a) / this.D;
            this.Y(this.I, b, this.j - c, b, this.j - c, b, c);
            break;
          case 4:
            b = ((this.l / 3) * a) / this.D;
            c = this.j;
            this.Y(this.I, 0, 0, this.l / 3 - b, 0, b, c);
            this.Y(this.I, this.l - b, 0, (2 * this.l) / 3, 0, b, c);
            b = this.l / 3;
            c = ((this.j / 2) * a) / this.D;
            this.Y(this.I, b, 0, b, this.j / 2 - c, b, c);
            this.Y(this.I, b, this.j - c, b, this.j / 2, b, c);
            break;
          case 5:
            b = ((this.l / 3) * a) / this.D;
            c = this.j;
            this.Y(this.I, 0, 0, this.l / 3 - b, 0, b, c);
            this.Y(this.I, this.l - b, 0, (2 * this.l) / 3, 0, b, c);
            b = this.l / 3;
            c = ((this.j / 2) * a) / this.D;
            this.Y(this.I, b, 0, b, 0, b, c);
            this.Y(this.I, b, this.j - c, b, this.j - c, b, c);
            break;
          case 6:
            b = this.l / 3;
            c = (this.j * a) / this.D;
            this.Y(this.I, 0, this.j - c, 0, 0, b, c);
            this.Y(this.I, b, 0, b, this.j - c, b, c);
            this.Y(this.I, 2 * b, this.j - c, 2 * b, 0, b, c);
            break;
          case 7:
            b = this.l / 7;
            c = (this.j * a) / this.D;
            this.Y(this.I, 0, this.j - c, 0, 0, b, c);
            this.Y(this.I, b, 0, b, this.j - c, b, c);
            this.Y(this.I, 2 * b, this.j - c, 2 * b, 0, b, c);
            this.Y(this.I, 3 * b, 0, 3 * b, this.j - c, b, c);
            this.Y(this.I, 4 * b, this.j - c, 4 * b, 0, b, c);
            this.Y(this.I, 5 * b, 0, 5 * b, this.j - c, b, c);
            this.Y(this.I, 6 * b, this.j - c, 6 * b, 0, 2 * b, c);
            break;
          default:
            this.Y(this.I);
        }
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  fe.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.zc = b.v();
      this.start(a, c, d, e);
    },
    Rd: function () {
      this.sb &&
        ((this.sb = !1), (this.l = this.I.width), (this.j = this.I.height));
      var a = this.Ye();
      if (1 < a / this.D) this.Y(this.I);
      else {
        var b, c;
        this.Y(this.I);
        switch (this.zc) {
          case 0:
            b = ((this.l / 2) * a) / this.D;
            b = this.l / 2 - b;
            c = ((this.j / 2) * a) / this.D;
            c = this.j / 2 - c;
            this.stretch(this.Fa, 0, 0, b, c, 0, 0, this.l / 2, this.j / 2);
            b = ((this.l / 2) * a) / this.D;
            c = ((this.j / 2) * a) / this.D;
            c = this.j / 2 - c;
            this.stretch(
              this.Fa,
              this.l / 2 + b,
              0,
              this.l / 2 - b,
              c,
              this.l / 2,
              0,
              this.l / 2,
              this.j / 2,
            );
            b = ((this.l / 2) * a) / this.D;
            b = this.l / 2 - b;
            c = ((this.j / 2) * a) / this.D;
            this.stretch(
              this.Fa,
              0,
              this.j / 2 + c,
              b,
              this.j / 2 - c,
              0,
              this.j / 2,
              this.l / 2,
              this.j / 2,
            );
            b = ((this.l / 2) * a) / this.D;
            c = ((this.j / 2) * a) / this.D;
            this.stretch(
              this.Fa,
              this.l / 2 + b,
              this.j / 2 + c,
              this.l / 2 - b,
              this.j / 2 - c,
              this.l / 2,
              this.j / 2,
              this.l / 2,
              this.j / 2,
            );
            break;
          case 1:
            b = (this.l * a) / this.D;
            b = this.l - b;
            c = (this.j * a) / this.D;
            c = this.j - c;
            this.Y(this.Fa, 0, 0, this.l - b, this.j - c, b, c);
            break;
          case 2:
            b = (this.l * a) / this.D;
            c = (this.j * a) / this.D;
            c = this.j - c;
            this.Y(this.Fa, b, 0, 0, this.j - c, this.l - b, c);
            break;
          case 3:
            b = (this.l * a) / this.D;
            b = this.l - b;
            c = (this.j * a) / this.D;
            this.Y(this.Fa, 0, c, this.l - b, 0, b, this.j - c);
            break;
          case 4:
            b = (this.l * a) / this.D;
            c = (this.j * a) / this.D;
            this.Y(this.Fa, b, c, 0, 0, this.l - b, this.j - c);
            break;
          case 5:
            b = ((this.l / 2) * a) / this.D;
            b = this.l / 2 - b;
            c = ((this.j / 2) * a) / this.D;
            c = this.j / 2 - c;
            this.Y(
              this.Fa,
              b - this.l / 2,
              c - this.j / 2,
              0,
              0,
              this.l / 2,
              this.j / 2,
            );
            b = ((this.l / 2) * a) / this.D;
            c = ((this.j / 2) * a) / this.D;
            c = this.j / 2 - c;
            this.Y(
              this.Fa,
              this.l / 2 + b,
              c - this.j / 2,
              this.l / 2,
              0,
              this.l / 2,
              this.j / 2,
            );
            b = ((this.l / 2) * a) / this.D;
            b = this.l / 2 - b;
            c = ((this.j / 2) * a) / this.D;
            this.Y(
              this.Fa,
              b - this.l / 2,
              this.j / 2 + c,
              0,
              this.j / 2,
              this.l / 2,
              this.j / 2,
            );
            b = ((this.l / 2) * a) / this.D;
            c = ((this.j / 2) * a) / this.D;
            this.Y(
              this.Fa,
              this.l / 2 + b,
              this.j / 2 + c,
              this.l / 2,
              this.j / 2,
              this.l / 2,
              this.j / 2,
            );
            break;
          case 6:
            c = ((this.j / 2) * a) / this.D;
            c = this.j / 2 - c;
            this.Y(this.Fa, 0, c - this.j / 2, 0, 0, this.l, this.j / 2);
            this.Y(this.Fa, 0, this.j - c, 0, this.j / 2, this.l, this.j / 2);
            break;
          case 7:
            (b = ((this.l / 2) * a) / this.D),
              (b = this.l / 2 - b),
              this.Y(this.Fa, b - this.l / 2, 0, 0, 0, this.l / 2, this.j),
              this.Y(this.Fa, this.l - b, 0, this.l / 2, 0, this.l / 2, this.j);
        }
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  ge.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.nk = b.B();
      this.NG = b.B();
      this.start(a, c, d, e);
    },
    Rd: function () {
      var a = this.Fa.width,
        b = this.Fa.height,
        c;
      if (this.sb) {
        0 == this.nk && (this.nk = 1);
        switch (this.NG) {
          case K.Oz:
          case K.rA:
            this.af = (a + this.nk - 1) / this.nk;
            0 == this.af && ((this.af = 1), (this.nk = a));
            break;
          default:
            (this.af = (b + this.nk - 1) / this.nk),
              0 == this.af && ((this.af = 1), (this.nk = b));
        }
        this.rd = 0;
        this.sb = !1;
      }
      if (0 >= this.nk || 0 >= this.af || 0 == this.D) this.Y(this.I);
      else {
        var d = (this.af * this.Ye()) / this.D;
        if (d > this.rd) {
          var e = 0,
            f = 0,
            h = 0,
            k = 0;
          for (c = 0; c < this.nk; c++) {
            switch (this.NG) {
              case K.Oz:
                e = this.rd + c * this.af;
                f = 0;
                h = d - this.rd;
                k = b;
                break;
              case K.rA:
                e = a - (this.rd + c * this.af) - (d - this.rd);
                f = 0;
                h = d - this.rd;
                k = b;
                break;
              case K.gN:
                e = 0;
                f = this.rd + c * this.af;
                h = a;
                k = d - this.rd;
                break;
              case K.gL:
                (e = 0),
                  (f = b - (this.rd + c * this.af) - (d - this.rd)),
                  (h = a),
                  (k = d - this.rd);
            }
            this.Y(this.I, e, f, e, f, h, k);
          }
        }
        this.rd = d;
      }
      return this.Q3;
    },
    end: function () {
      this.finish();
    },
  });
  he.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.lc = b.v();
      this.yB = b.v();
      this.start(a, c, d, e);
    },
    Rd: function () {
      this.sb &&
        ((this.sb = !1), (this.l = this.I.width), (this.j = this.I.height));
      var a = this.Ye();
      if (1 < a / this.D) this.Y(this.I);
      else {
        var b, c, d, e, f, h, k, g, n, m;
        n = this.l / this.lc;
        m = this.j / this.yB;
        d = this.l / this.lc;
        e = this.j / this.yB;
        for (f = 0; f < this.lc; f++)
          for (h = 0; h < this.yB; h++)
            (b = f * n),
              (c = h * m),
              (k = (d * a) / this.D),
              (g = (e * a) / this.D),
              this.stretch(
                this.I,
                b + (d - k) / 2,
                c + (e - g) / 2,
                k,
                g,
                b + (d - k) / 2,
                c + (e - g) / 2,
                k,
                g,
              );
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  ie.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.yg = b.B();
      this.start(a, c, d, e);
    },
    Rd: function () {
      if (this.sb) {
        switch (this.yg) {
          case K.sE:
          case K.aF:
            this.af = this.Fa.width / 2;
            break;
          default:
            this.af = this.Fa.height / 2;
        }
        this.rd = 0;
        this.sb = !1;
      }
      if (0 == this.af) this.Y(this.I);
      else {
        var a = 0,
          b = 0,
          c = 0,
          d = 0,
          e = (this.af * this.Ye()) / this.D;
        if (e > this.rd) {
          switch (this.yg) {
            case K.sE:
              a = this.Fa.width / 2 - e;
              b = 0;
              c = e - this.rd;
              d = this.I.height;
              break;
            case K.aF:
              a = this.rd;
              b = 0;
              c = e - this.rd;
              d = this.I.height;
              break;
            case K.oL:
              a = 0;
              b = this.Fa.height / 2 - e;
              c = this.I.width;
              d = e - this.rd;
              break;
            case K.fN:
              (a = 0), (b = this.rd), (c = this.I.width), (d = e - this.rd);
          }
          this.Y(this.I, a, b, a, b, c, d);
          switch (this.yg) {
            case K.sE:
              a = this.Fa.width / 2 + this.rd;
              break;
            case K.aF:
              a = this.Fa.width - e;
              break;
            case K.oL:
              b = this.Fa.height / 2 + this.rd;
              break;
            case K.fN:
              b = this.Fa.height - e;
          }
          this.Y(this.I, a, b, a, b, c, d);
        }
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  je.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.start(a, c, d, e);
    },
    Rd: function () {
      this.sb && (this.sb = !1);
      var a;
      this.cn.globalAlpha = 1;
      this.Y(this.Fa);
      a = this.Ye() / this.D;
      this.cn.globalAlpha = a;
      this.Y(this.I);
      return null;
    },
    end: function () {
      this.cn.globalAlpha = 1;
      this.finish();
    },
  });
  ke.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.lc = b.v();
      this.zc = b.v();
      this.Hw = b.v();
      this.start(a, c, d, e);
    },
    Rd: function () {
      this.sb &&
        ((this.sb = !1), (this.l = this.I.width), (this.j = this.I.height));
      var a = this.Ye();
      if (1 < a / this.D) this.Y(this.I);
      else {
        var b, c, d, e, f;
        b = 0;
        var h;
        if (0 == this.zc)
          for (h = this.j / this.lc, f = 0; f < this.lc; f++)
            0 == b
              ? ((b = 0),
                (c = f * h),
                (d = (this.l * a) / this.D),
                (e = f == this.lc - 1 ? this.j : h + 1),
                0 == this.Hw
                  ? this.Y(this.I, b, c, b, c, d, e)
                  : this.Y(this.I, b, c, this.l - d, c, d, e),
                (b = 1))
              : ((c = f * h),
                (d = (this.l * a) / this.D),
                (b = this.l - d),
                (e = f == this.lc - 1 ? this.j : h + 1),
                0 == this.Hw
                  ? this.Y(this.I, b, c, b, c, d, e)
                  : this.Y(this.I, b, c, 0, c, d, e),
                (b = 0));
        else
          for (h = this.l / this.lc, f = 0; f < this.lc; f++)
            0 == b
              ? ((b = f * h),
                (c = 0),
                (e = (this.j * a) / this.D),
                (d = f == this.lc - 1 ? this.l : h + 1),
                0 == this.Hw
                  ? this.Y(this.I, b, c, b, c, d, e)
                  : this.Y(this.I, b, c, b, this.j - e, d, e),
                (b = 1))
              : ((b = f * h),
                (e = (this.j * a) / this.D),
                (c = this.j - e),
                (d = f == this.lc - 1 ? this.l : h + 1),
                0 == this.Hw
                  ? this.Y(this.I, b, c, b, c, d, e)
                  : this.Y(this.I, b, c, b, 0, d, e),
                (b = 0));
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  le.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.JI = b.v();
      this.start(a, c, d, e);
    },
    Rd: function () {
      if (this.sb) {
        var a = this.Fa.width,
          b = this.Fa.height;
        this.fa = Math.floor(((a * this.JI) / 100 + (b * this.JI) / 100) / 2);
        0 == this.fa && (this.fa = 1);
        this.Oi = (a + this.fa - 1) / this.fa;
        this.Sl = (b + this.fa - 1) / this.fa;
        this.xr = this.Oi * this.Sl;
        a = Math.floor((this.xr + 7) / 8 + 2);
        this.ur = 0;
        this.ei = Array(a);
        for (b = 0; b < a; b++) this.ei[b] = 0;
        this.sb = !1;
      }
      if (null == this.ei || 2 > this.Oi || 2 > this.Sl || 0 == this.D)
        this.Y(this.I);
      else {
        var c,
          d,
          b = (a = 0);
        c = Math.floor((this.xr * this.Ye()) / this.D);
        var e = c - this.ur;
        if (0 != e)
          for (this.ur = c, d = 0; d < e; d++) {
            for (c = 0; 1 > c; c++) {
              var a = Math.floor(this.Oi * Math.random()),
                b = Math.floor(this.Sl * Math.random()),
                f,
                h;
              f = b * this.Oi + a;
              h = Math.floor(f / 8);
              f = 1 << (f & 7);
              if (0 == (this.ei[h] & f)) {
                this.ei[h] |= f;
                break;
              }
              var k = h,
                g = (this.xr + 7) / 8,
                n,
                m = !1;
              for (n = h; n < g; n++, k++)
                if (-1 != this.ei[k]) {
                  b = Math.floor((8 * n) / this.Oi);
                  a = Math.floor((8 * n) % this.Oi);
                  for (f = 1; 0 != f; f <<= 1) {
                    if (0 == (this.ei[k] & f)) {
                      this.ei[k] |= f;
                      m = !0;
                      break;
                    }
                    if (++a >= this.Oi && ((a = 0), ++b >= this.Sl)) break;
                  }
                  if (m) break;
                }
              if (m) break;
              for (n = k = 0; n < h; n++, k++) {
                if (255 != this.ei[k]) {
                  b = Math.floor((8 * n) / m_nbBlockPerLine);
                  a = Math.floor((8 * n) % m_nbBlockPerLine);
                  for (f = 1; 0 != f; f <<= 1) {
                    if (0 == (this.ei[k] & f)) {
                      this.ei[k] |= f;
                      m = !0;
                      break;
                    }
                    if (++a >= this.Oi && ((a = 0), ++b >= this.Sl)) break;
                  }
                  if (m) break;
                }
                if (m) break;
                m = !1;
              }
            }
            1 > c &&
              this.Y(
                this.I,
                Math.floor(a * this.fa),
                Math.floor(b * this.fa),
                Math.floor(a * this.fa),
                Math.floor(b * this.fa),
                this.fa,
                this.fa,
              );
          }
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  me.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.zc = b.v();
      this.start(a, c, d, e);
    },
    Rd: function () {
      this.sb &&
        ((this.sb = !1), (this.l = this.I.width), (this.j = this.I.height));
      var a = this.Ye(),
        b = a / this.D;
      if (1 < b) this.Y(this.I);
      else {
        var c, d, e;
        0.25 > b
          ? ((d = (2 * this.l * a) / this.D),
            (d *= 2),
            (e = this.j / 7),
            (b = this.l / 2 - d / 2),
            (c = this.j / 2 - e / 2),
            this.Y(this.I, b, c, b, c, d, e),
            (d = this.l / 7),
            (e = (2 * this.j * a) / this.D),
            (e *= 2),
            (b = this.l / 2 - d / 2),
            (c = this.j / 2 - e / 2))
          : ((b = this.l / 2),
            (d = (this.l * a) / this.D - b),
            (e = this.j / 2),
            (c = 0),
            this.Y(this.I, b, c, b, c, d, e),
            (c = this.j / 2),
            (e = (this.j * a) / this.D - c),
            (b = d = this.l / 2),
            this.Y(this.I, b, c, b, c, d, e),
            (d = (this.l * a) / this.D - this.l / 2),
            (b = this.l / 2 - d),
            (c = e = this.j / 2),
            this.Y(this.I, b, c, b, c, d, e),
            (e = (this.j * a) / this.D - this.j / 2),
            (c = this.j / 2 - e),
            (d = this.l / 2),
            (b = 0));
        this.Y(this.I, b, c, b, c, d, e);
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  ne.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.zc = b.v();
      this.start(a, c, d, e);
    },
    Rd: function () {
      this.sb &&
        ((this.sb = !1),
        (this.l = this.I.width),
        (this.j = this.I.height),
        (this.II = !1));
      var a = this.Ye(),
        b = a / this.D;
      if (1 < b) this.Y(this.I);
      else {
        var c, d, e, f;
        if (0.5 >= b)
          switch (this.zc) {
            case 0:
              e = ((this.l * a) / this.D) * 2;
              f = this.j / 2;
              c = this.l - e;
              d = this.j / 2;
              this.Y(this.I, 0, 0, c, d, e, f);
              break;
            case 1:
              e = ((this.l * a) / this.D) * 2;
              f = this.j / 2;
              c = this.l - e;
              d = this.j / 2;
              this.Y(this.I, c, 0, 0, d, e, f);
              break;
            case 2:
              e = ((this.l * a) / this.D) * 2;
              f = this.j / 2;
              c = this.l - e;
              d = this.j / 2;
              this.Y(this.I, 0, d, c, 0, e, f);
              break;
            case 3:
              (e = ((this.l * a) / this.D) * 2),
                (f = this.j / 2),
                (c = this.l - e),
                (d = this.j / 2),
                this.Y(this.I, c, d, 0, 0, e, f);
          }
        if (0.5 < b)
          switch (
            (0 == this.II &&
              (1 >= this.zc
                ? this.Y(this.I, 0, 0, 0, this.j / 2, this.l, this.j / 2)
                : this.Y(this.I, 0, this.j / 2, 0, 0, this.l, this.j / 2),
              (this.II = !0)),
            (b = a - this.D / 2),
            (b /= this.D / 2),
            (f = ((this.j / 2) * 1e3 * b) / 1e3),
            this.zc)
          ) {
            case 0:
            case 1:
              this.stretch(
                this.I,
                0,
                f,
                this.l,
                this.j / 2,
                0,
                this.j / 2,
                this.l,
                this.j / 2,
              );
              this.stretch(
                this.I,
                0,
                0,
                this.l,
                f,
                0,
                this.j / 2 - f,
                this.l,
                f,
              );
              break;
            case 2:
            case 3:
              this.stretch(
                this.I,
                0,
                this.j / 2 - f,
                this.l,
                this.j / 2,
                0,
                0,
                this.l,
                this.j / 2,
              ),
                this.stretch(
                  this.I,
                  0,
                  this.j - f,
                  this.l,
                  f,
                  0,
                  this.j / 2,
                  this.l,
                  f,
                );
          }
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  oe.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.yg = b.v();
      this.start(a, c, d, e);
    },
    Rd: function () {
      var a = this.Fa.width,
        b = this.Fa.height;
      if (this.sb) {
        switch (this.yg) {
          case K.Oz:
          case K.rA:
            this.af = a;
            break;
          default:
            this.af = b;
        }
        this.rd = 0;
        this.sb = !1;
      }
      if (0 == this.D) this.Y(this.I);
      else {
        var c = (this.af * this.Ye()) / this.D;
        if (c > this.rd) {
          var d = 0,
            e = 0;
          switch (this.yg) {
            case K.Oz:
              d = c - a;
              e = 0;
              break;
            case K.rA:
              d = a - c;
              e = 0;
              break;
            case K.gN:
              d = 0;
              e = c - b;
              break;
            case K.gL:
              (d = 0), (e = b - c);
          }
          this.Y(this.I, d, e, 0, 0, a, b);
          this.rd = c;
        }
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  pe.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.zc = b.v();
      this.lc = b.v();
      this.SO = b.v();
      this.start(a, c, d, e);
    },
    Rd: function () {
      this.sb &&
        ((this.sb = !1), (this.l = this.I.width), (this.j = this.I.height));
      var a = this.Ye();
      if (1 < a / this.D) this.Y(this.I);
      else {
        var b, c, d, e, f, h;
        f = (this.l * this.lc) / 100;
        h = (this.j * this.lc) / 100;
        d = (f * a) / this.D;
        e = (h * a) / this.D;
        b = this.l / 2 - d / 2;
        c = this.j / 2 - e / 2;
        0 == this.SO
          ? this.Y(this.I, b, c, b, c, d, e)
          : this.stretch(
              this.I,
              b,
              c,
              d,
              e,
              this.l / 2 - f / 2,
              this.j / 2 - h / 2,
              f,
              h,
            );
        b = 100 - this.lc;
        f = (this.l * b) / 100;
        h = (this.j * b) / 100;
        d = ((f / 2) * a) / this.D;
        e = ((h / 2) * a) / this.D;
        this.Y(this.I, 0, 0, 0, 0, this.l, e);
        this.Y(this.I, 0, 0, 0, 0, d, this.j);
        this.Y(this.I, 0, this.j - e, 0, this.j - e, this.l, e);
        this.Y(this.I, this.l - d, 0, this.l - d, 0, d, this.j);
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  qe.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.zc = b.v();
      this.start(a, c, d, e);
    },
    Rd: function () {
      this.sb &&
        ((this.sb = !1), (this.l = this.I.width), (this.j = this.I.height));
      var a = this.Ye();
      if (1 < a / this.D) this.Y(this.I);
      else {
        var b, c;
        switch (this.zc) {
          case 0:
            b = (this.l * a) / this.D;
            c = (this.j * a) / this.D;
            this.stretch(this.I, 0, 0, b, c, 0, 0, this.l, this.j);
            break;
          case 1:
            b = (this.l * a) / this.D;
            c = (this.j * a) / this.D;
            this.stretch(this.I, this.l - b, 0, b, c, 0, 0, this.l, this.j);
            break;
          case 2:
            b = (this.l * a) / this.D;
            c = (this.j * a) / this.D;
            this.stretch(this.I, 0, this.j - c, b, c, 0, 0, this.l, this.j);
            break;
          case 3:
            b = (this.l * a) / this.D;
            c = (this.j * a) / this.D;
            this.stretch(
              this.I,
              this.l - b,
              this.j - c,
              b,
              c,
              0,
              0,
              this.l,
              this.j,
            );
            break;
          case 4:
            b = ((this.l / 2) * a) / this.D;
            c = ((this.j / 2) * a) / this.D;
            5 > c && (c = 5);
            this.stretch(
              this.I,
              0,
              0,
              b,
              c,
              0,
              0,
              this.Fa.width / 2,
              this.Fa.height / 2,
            );
            b = ((this.l / 2) * a) / this.D;
            c = ((this.j / 2) * a) / this.D;
            5 > c && (c = 5);
            this.stretch(
              this.I,
              this.l - b,
              0,
              b,
              c,
              this.l / 2,
              0,
              this.l / 2,
              this.j / 2,
            );
            b = ((this.l / 2) * a) / this.D;
            c = ((this.j / 2) * a) / this.D;
            this.stretch(
              this.I,
              0,
              this.j - c,
              b,
              c,
              0,
              this.j / 2,
              this.l / 2,
              this.j / 2,
            );
            b = ((this.l / 2) * a) / this.D;
            c = ((this.j / 2) * a) / this.D;
            this.stretch(
              this.I,
              this.l - b,
              this.j - c,
              b,
              c,
              this.l / 2,
              this.j / 2,
              this.l / 2,
              this.j / 2,
            );
            break;
          case 5:
            b = ((this.l / 2) * a) / this.D;
            c = ((this.j / 2) * a) / this.D;
            5 > c && (c = 5);
            this.stretch(
              this.I,
              this.l / 2 - b,
              this.j / 2 - c,
              b,
              c,
              0,
              0,
              this.Fa.width / 2,
              this.Fa.height / 2,
            );
            b = ((this.l / 2) * a) / this.D;
            c = ((this.j / 2) * a) / this.D;
            5 > c && (c = 5);
            this.stretch(
              this.I,
              this.l / 2,
              this.j / 2 - c,
              b,
              c,
              this.l / 2,
              0,
              this.l / 2,
              this.j / 2,
            );
            b = ((this.l / 2) * a) / this.D;
            c = ((this.j / 2) * a) / this.D;
            this.stretch(
              this.I,
              this.l / 2 - b,
              this.j / 2,
              b,
              c,
              0,
              this.j / 2,
              this.l / 2,
              this.j / 2,
            );
            b = ((this.l / 2) * a) / this.D;
            c = ((this.j / 2) * a) / this.D;
            this.stretch(
              this.I,
              this.l / 2,
              this.j / 2,
              b,
              c,
              this.l / 2,
              this.j / 2,
              this.l / 2,
              this.j / 2,
            );
            break;
          case 6:
            b = this.l;
            c = (this.j * a) / this.D;
            this.stretch(this.I, 0, 0, b, c, 0, 0, this.l, this.j);
            break;
          case 7:
            b = (this.l * a) / this.D;
            c = this.j;
            this.stretch(this.I, 0, 0, b, c, 0, 0, this.l, this.j);
            break;
          case 8:
            b = (this.l * a) / this.D;
            c = this.j;
            this.stretch(this.I, this.l - b, 0, b, c, 0, 0, this.l, this.j);
            break;
          case 9:
            (b = this.l),
              (c = (this.j * a) / this.D),
              this.stretch(this.I, 0, this.j - c, b, c, 0, 0, this.l, this.j);
        }
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  re.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.zc = b.v();
      this.start(a, c, d, e);
    },
    Rd: function () {
      this.sb &&
        ((this.sb = !1),
        (this.l = this.I.width),
        (this.j = this.I.height),
        (this.xe = 0));
      var a = this.Ye();
      if (1 < a / this.D) this.Y(this.I);
      else {
        var b, c;
        switch (this.zc) {
          case 0:
            0 == this.xe
              ? ((b = (2 * this.l * a) / this.D),
                (b = this.l - b),
                (c = (2 * this.j * a) / this.D),
                (c = this.j - c),
                this.stretch(this.Fa, 0, 0, b, c, 0, 0, this.l, this.j),
                a >= this.D / 2 && (this.xe = 1))
              : ((b = (2 * this.l * a) / this.D),
                (b -= this.l),
                (c = (2 * this.j * a) / this.D),
                (c -= this.j),
                this.stretch(this.I, 0, 0, b, c, 0, 0, this.l, this.j));
            break;
          case 1:
            0 == this.xe
              ? ((b = this.l),
                (c = (2 * this.j * a) / this.D),
                (c = this.j - c),
                this.stretch(this.Fa, 0, 0, b, c, 0, 0, this.l, this.j),
                a >= this.D / 2 && (this.xe = 1))
              : ((b = this.l),
                (c = (2 * this.j * a) / this.D),
                (c -= this.j),
                this.stretch(this.I, 0, 0, b, c, 0, 0, this.l, this.j));
            break;
          case 2:
            0 == this.xe
              ? ((b = (2 * this.l * a) / this.D),
                (b = this.l - b),
                (c = (2 * this.j * a) / this.D),
                (c = this.j - c),
                this.stretch(
                  this.Fa,
                  this.l - b,
                  0,
                  b,
                  c,
                  0,
                  0,
                  this.l,
                  this.j,
                ),
                a >= this.D / 2 && (this.xe = 1))
              : ((b = (2 * this.l * a) / this.D),
                (b -= this.l),
                (c = (2 * this.j * a) / this.D),
                (c -= this.j),
                this.stretch(
                  this.I,
                  this.l - b,
                  0,
                  b,
                  c,
                  0,
                  0,
                  this.l,
                  this.j,
                ));
            break;
          case 3:
            0 == this.xe
              ? ((b = (2 * this.l * a) / this.D),
                (b = this.l - b),
                (c = this.j),
                this.stretch(this.Fa, 0, 0, b, c, 0, 0, this.l, this.j),
                a >= this.D / 2 && (this.xe = 1))
              : ((b = (2 * this.l * a) / this.D),
                (b -= this.l),
                (c = this.j),
                this.stretch(this.I, 0, 0, b, c, 0, 0, this.l, this.j));
            break;
          case 4:
            0 == this.xe
              ? ((b = (2 * this.l * a) / this.D),
                (b = this.l - b),
                (c = this.j),
                this.stretch(
                  this.Fa,
                  this.l / 2 - b / 2,
                  0,
                  b,
                  c,
                  0,
                  0,
                  this.l,
                  this.j,
                ),
                a >= this.D / 2 && (this.xe = 1))
              : ((b = (2 * this.l * a) / this.D),
                (b -= this.l),
                (c = this.j),
                this.stretch(
                  this.I,
                  this.l / 2 - b / 2,
                  0,
                  b,
                  c,
                  0,
                  0,
                  this.l,
                  this.j,
                ));
            break;
          case 5:
            0 == this.xe
              ? ((c = (2 * this.j * a) / this.D),
                (c = this.j - c),
                (b = this.l),
                this.stretch(
                  this.Fa,
                  0,
                  this.j / 2 - c / 2,
                  b,
                  c,
                  0,
                  0,
                  this.l,
                  this.j,
                ),
                a >= this.D / 2 && (this.xe = 1))
              : ((c = (2 * this.j * a) / this.D),
                (c -= this.j),
                (b = this.l),
                this.stretch(
                  this.I,
                  0,
                  this.j / 2 - c / 2,
                  b,
                  c,
                  0,
                  0,
                  this.l,
                  this.j,
                ));
            break;
          case 6:
            0 == this.xe
              ? ((b = (2 * this.l * a) / this.D),
                (b = this.l - b),
                (c = (2 * this.j * a) / this.D),
                (c = this.j - c),
                this.stretch(
                  this.Fa,
                  this.l / 2 - b / 2,
                  this.j / 2 - c / 2,
                  b,
                  c,
                  0,
                  0,
                  this.l,
                  this.j,
                ),
                a >= this.D / 2 && (this.xe = 1))
              : ((b = (2 * this.l * a) / this.D),
                (b -= this.l),
                (c = (2 * this.j * a) / this.D),
                (c -= this.j),
                this.stretch(
                  this.I,
                  this.l / 2 - b / 2,
                  this.j / 2 - c / 2,
                  b,
                  c,
                  0,
                  0,
                  this.l,
                  this.j,
                ));
            break;
          case 7:
            0 == this.xe
              ? ((b = (2 * this.l * a) / this.D),
                (b = this.l - b),
                (c = this.j),
                this.stretch(
                  this.Fa,
                  this.l - b,
                  0,
                  b,
                  c,
                  0,
                  0,
                  this.l,
                  this.j,
                ),
                a >= this.D / 2 && (this.xe = 1))
              : ((b = (2 * this.l * a) / this.D),
                (b -= this.l),
                (c = this.j),
                this.stretch(
                  this.I,
                  this.j - b,
                  0,
                  b,
                  c,
                  0,
                  0,
                  this.l,
                  this.j,
                ));
            break;
          case 8:
            0 == this.xe
              ? ((b = (2 * this.l * a) / this.D),
                (b = this.l - b),
                (c = (2 * this.j * a) / this.D),
                (c = this.j - c),
                this.stretch(
                  this.Fa,
                  0,
                  this.j - c,
                  b,
                  c,
                  0,
                  0,
                  this.l,
                  this.j,
                ),
                a >= this.D / 2 && (this.xe = 1))
              : ((b = (2 * this.l * a) / this.D),
                (b -= this.l),
                (c = (2 * this.j * a) / this.D),
                (c -= this.j),
                this.stretch(
                  this.I,
                  0,
                  this.j - c,
                  b,
                  c,
                  0,
                  0,
                  this.l,
                  this.j,
                ));
            break;
          case 9:
            0 == this.xe
              ? ((b = this.l),
                (c = (2 * this.j * a) / this.D),
                (c = this.j - c),
                this.stretch(
                  this.Fa,
                  0,
                  this.j - c,
                  b,
                  c,
                  0,
                  0,
                  this.l,
                  this.j,
                ),
                a >= this.D / 2 && (this.xe = 1))
              : ((b = this.l),
                (c = (2 * this.j * a) / this.D),
                (c -= this.j),
                this.stretch(
                  this.I,
                  0,
                  this.j - c,
                  b,
                  c,
                  0,
                  0,
                  this.l,
                  this.j,
                ));
            break;
          case 10:
            0 == this.xe
              ? ((b = (2 * this.l * a) / this.D),
                (b = this.l - b),
                (c = (2 * this.j * a) / this.D),
                (c = this.j - c),
                this.stretch(
                  this.Fa,
                  this.l - b,
                  this.j - c,
                  b,
                  c,
                  0,
                  0,
                  this.l,
                  this.j,
                ),
                a >= this.D / 2 && (this.xe = 1))
              : ((b = (2 * this.l * a) / this.D),
                (b -= this.l),
                (c = (2 * this.j * a) / this.D),
                (c -= this.j),
                this.stretch(
                  this.I,
                  this.l - b,
                  this.j - c,
                  b,
                  c,
                  0,
                  0,
                  this.l,
                  this.j,
                ));
        }
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  se.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.zc = b.v();
      this.start(a, c, d, e);
    },
    Rd: function () {
      this.sb &&
        ((this.sb = !1),
        (this.l = this.I.width),
        (this.j = this.I.height),
        (this.sr = this.rr = 0));
      var a = this.Ye();
      if (1 < a / this.D) this.Y(this.I);
      else {
        var b, c, d, e;
        b = (this.j * a) / this.D;
        a = (this.l * a) / this.D;
        if (0 == this.zc) {
          e = b % 2;
          for (c = 0; c < this.l; c += 2) {
            for (d = this.rr; d < b; d++) this.Y(this.I, c, d, c, d, 1, 1);
            for (d = this.j - b - e; d < this.j - this.rr; d++)
              this.Y(this.I, c + 1, d + 1, c + 1, d + 1, 1, 1);
          }
          this.rr = 0 == b % 2 ? b : b - 1;
        }
        if (1 == this.zc) {
          e = a % 2;
          for (d = 0; d < this.j; d++) {
            for (c = this.sr; c < a; c += 2)
              this.Y(this.I, c + 1, d, c + 1, d, 1, 1);
            for (c = this.l - a - e; c < this.l - this.sr; c += 2)
              this.Y(this.I, c, d + 1, c, d + 1, 1, 1);
          }
          this.sr = 0 == a % 2 ? a : a - 1;
        }
        if (2 == this.zc) {
          e = b % 2;
          for (c = 0; c < this.l; c += 2) {
            for (d = this.rr; d < b; d += 2) this.Y(this.I, c, d, c, d, 1, 1);
            for (d = this.j - b - e; d < this.j - this.rr; d += 2)
              this.Y(this.I, c + 1, d + 1, c + 1, d + 1, 1, 1);
          }
          e = a % 2;
          for (d = 0; d < this.j; d += 2) {
            for (c = this.sr; c < a; c += 2)
              this.Y(this.I, c + 1, d, c + 1, d, 1, 1);
            for (c = this.l - a - e; c < this.l - this.sr; c += 2)
              this.Y(this.I, c, d + 1, c, d + 1, 1, 1);
          }
          this.rr = 0 == b % 2 ? b : b - 1;
          this.sr = 0 == a % 2 ? a : a - 1;
        }
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  te.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.lc = b.v();
      this.Gw = b.v();
      this.RO = b.v();
      this.start(a, c, d, e);
    },
    Rd: function () {
      this.sb &&
        ((this.sb = !1),
        (this.l = this.I.width),
        (this.j = this.I.height),
        (this.Il = 0));
      var a = this.Ye();
      if (1 < a / this.D) this.Y(this.I);
      else {
        var b, c, d;
        b = this.l / 2;
        d = this.j / 2;
        this.Il = (6.28318 * this.lc * a) / this.D;
        1 == this.RO && (this.Il = 6.28318 - this.Il);
        c = this.l / 2 - ((this.l / 2) * a) / this.D;
        b = Math.floor(b + Math.cos(this.Il) * c);
        c = Math.floor(d + Math.sin(this.Il) * c);
        d = (this.l * a) / this.D;
        a = (this.j * a) / this.D;
        this.stretch(
          this.Fa,
          0,
          0,
          this.l,
          this.j,
          0,
          0,
          this.Fa.width,
          this.Fa.height,
        );
        1 == this.Tca
          ? this.stretch(
              this.I,
              b - d / 2,
              c - a / 2,
              d,
              a,
              0,
              0,
              this.l,
              this.j,
            )
          : this.stretch(
              this.I,
              b - d / 2,
              c - a / 2,
              d,
              a,
              this.l - d,
              this.j - a,
              d,
              a,
            );
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  ue.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.lc = b.v();
      this.Gw = b.v();
      this.start(a, c, d, e);
    },
    Rd: function () {
      this.sb &&
        ((this.sb = !1),
        (this.l = this.I.width),
        (this.j = this.I.height),
        (this.qC = 0));
      var a = this.Ye();
      if (1 < a / this.D) this.Y(this.I);
      else {
        var b, c, d;
        b = this.l / 2;
        c = this.j / 2;
        d = (6.28318 * this.lc * a) / this.D;
        d -= 6.28318 * this.qC;
        1 == this.Gw && (d = 6.28318 - d);
        a = (this.l * a) / this.D;
        b = Math.floor(b + Math.cos(d) * a);
        c = Math.floor(c + Math.sin(d) * a);
        this.Y(this.I);
        this.Y(this.Fa, b - this.l / 2, c - this.j / 2, 0, 0, this.l, this.j);
        0 == this.Gw ? 6.28318 <= d && this.qC++ : 0 >= d && this.qC++;
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  ve.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.QK = b.v();
      this.jE = b.B();
      this.bU = b.B();
      this.start(a, c, d, e);
    },
    Rd: function () {
      var a = this.Fa.width,
        b = this.Fa.height;
      if (this.sb) {
        this.fa = Math.floor(((a * this.QK) / 100 + (b * this.QK) / 100) / 2);
        0 == this.fa && (this.fa = 1);
        this.Oi = (a + this.fa - 1) / this.fa;
        this.Sl = (b + this.fa - 1) / this.fa;
        this.vI = this.bU;
        this.xg = this.jE;
        switch (this.jE) {
          case K.Ao:
            this.Ma = this.Na = 0;
            break;
          case K.Bo:
            this.Ma = a - this.fa;
            this.Na = 0;
            break;
          case K.Zp:
            this.Ma = 0;
            this.Na = b - this.fa;
            break;
          case K.$p:
            this.Ma = a - this.fa;
            this.Na = b - this.fa;
            break;
          case K.nL:
            (this.Ma = a / 2 - this.fa),
              (this.Na = b / 2 - this.fa),
              (this.xg = this.vI == K.IL ? K.Ao : K.Bo),
              (this.yC = this.Ma - this.fa),
              (this.DC = this.Na - this.fa),
              (this.pC = this.Na + 2 * this.fa),
              (this.BC = this.Ma + 2 * this.fa),
              (this.Oi = 2 + (2 * (this.Ma + this.fa - 1)) / this.fa),
              (this.Sl = 2 + (2 * (this.Na + this.fa - 1)) / this.fa);
        }
        this.xr = Math.floor(this.Oi * this.Sl);
        this.ur = 0;
        this.sb = !1;
      }
      if (this.fa >= a || this.fa >= b) this.Y(this.I);
      else {
        var c;
        c = Math.floor((this.xr * this.Ye()) / this.D);
        var d = c - this.ur;
        if (0 != d)
          for (this.ur = c, c = 0; c < d; c++)
            if (
              (this.Y(
                this.I,
                this.Ma,
                this.Na,
                this.Ma,
                this.Na,
                this.fa,
                this.fa,
              ),
              this.jE == K.nL)
            )
              switch (this.xg) {
                case K.Ao:
                  this.Ma += this.fa;
                  this.Ma >= this.BC &&
                    ((this.Ma -= this.fa),
                    (this.Na += this.fa),
                    (this.xg = K.Bo),
                    (this.BC += this.fa));
                  break;
                case K.Bo:
                  this.Na += this.fa;
                  this.Na >= this.pC &&
                    ((this.Na -= this.fa),
                    (this.Ma -= this.fa),
                    (this.xg = K.$p),
                    (this.pC += this.fa));
                  break;
                case K.$p:
                  this.Ma -= this.fa;
                  this.Ma + this.fa <= this.yC &&
                    ((this.Ma += this.fa),
                    (this.Na -= this.fa),
                    (this.xg = K.Zp),
                    (this.yC -= this.fa));
                  break;
                case K.Zp:
                  (this.Na -= this.fa),
                    this.Na + this.fa <= this.DC &&
                      ((this.Na += this.fa),
                      (this.Ma += this.fa),
                      (this.xg = K.Ao),
                      (this.DC -= this.fa));
              }
            else
              switch (this.vI) {
                case K.IL:
                  switch (this.xg) {
                    case K.Ao:
                      this.Ma += this.fa;
                      this.Ma >= a &&
                        ((this.Ma -= this.fa),
                        (this.Na += this.fa),
                        (this.xg = K.Bo));
                      break;
                    case K.Bo:
                      this.Ma -= this.fa;
                      0 >= this.Ma + this.fa &&
                        ((this.Ma += this.fa),
                        (this.Na += this.fa),
                        (this.xg = K.Ao));
                      break;
                    case K.Zp:
                      this.Ma += this.fa;
                      this.Ma >= a &&
                        ((this.Ma -= this.fa),
                        (this.Na -= this.fa),
                        (this.xg = K.$p));
                      break;
                    case K.$p:
                      (this.Ma -= this.fa),
                        0 >= this.Ma + this.fa &&
                          ((this.Ma += this.fa),
                          (this.Na -= this.fa),
                          (this.xg = K.Zp));
                  }
                  break;
                case K.DW:
                  switch (this.xg) {
                    case K.Ao:
                      this.Na += this.fa;
                      this.Na >= b &&
                        ((this.Na -= this.fa),
                        (this.Ma += this.fa),
                        (this.xg = K.Zp));
                      break;
                    case K.Bo:
                      this.Na += this.fa;
                      this.Na >= b &&
                        ((this.Na -= this.fa),
                        (this.Ma -= this.fa),
                        (this.xg = K.$p));
                      break;
                    case K.Zp:
                      this.Na -= this.fa;
                      0 >= this.Na + this.fa &&
                        ((this.Na += this.fa),
                        (this.Ma += this.fa),
                        (this.xg = K.Ao));
                      break;
                    case K.$p:
                      (this.Na -= this.fa),
                        0 >= this.Na + this.fa &&
                          ((this.Na += this.fa),
                          (this.Ma -= this.fa),
                          (this.xg = K.Bo));
                  }
              }
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  we.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.zc = b.v();
      this.lc = b.v();
      this.start(a, c, d, e);
    },
    Rd: function () {
      this.sb &&
        ((this.sb = !1),
        (this.l = this.I.width),
        (this.j = this.I.height),
        (this.Dk = this.vr = 0));
      var a = this.Ye();
      if (1 < a / this.D) this.Y(this.I);
      else {
        var b, c, d, e;
        0 == this.zc
          ? ((b = this.j / this.lc),
            (e = Math.floor(this.vr * b) + Math.floor(b)),
            (c = 0),
            (d = (this.l * a) / this.D),
            (d = (d * this.lc) / 2),
            (d -= this.l * this.vr),
            (b = 0 == this.Dk ? 0 : this.l - d),
            this.Y(this.I, b, c, b, c, d, e),
            (c = this.j - e),
            (b = 1 == this.Dk ? 0 : this.l - d),
            this.Y(this.I, b, c, b, c, d, e),
            d >= this.l &&
              (this.vr++, this.Dk++, 2 == this.Dk && (this.Dk = 0)))
          : ((b = this.l / this.lc),
            (d = Math.floor(this.vr * b) + Math.floor(b)),
            (b = 0),
            (e = (this.j * a) / this.D),
            (e = (e * this.lc) / 2),
            (e -= this.j * this.vr),
            (c = 0 == this.Dk ? 0 : this.j - e),
            this.Y(this.I, b, c, b, c, d, e),
            (b = this.l - d),
            (c = 1 == this.Dk ? 0 : this.j - e),
            this.Y(this.I, b, c, b, c, d, e),
            e >= this.j &&
              (this.vr++, this.Dk++, 2 == this.Dk && (this.Dk = 0)));
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  ze.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.start(a, c, d, e);
    },
    Rd: function (a) {
      var b = this.Fa.width,
        c = this.Fa.height;
      this.sb && (this.sb = !1);
      if (0 == this.D) this.Y(this.I);
      else {
        var d;
        d = this.Ye();
        0 != (a & K.BA)
          ? ((a = Math.floor(b - (b * d) / this.D)),
            (d = Math.floor(c - (c * d) / this.D)),
            this.Y(this.I),
            this.stretch(this.Fa, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c))
          : ((a = Math.floor((b * d) / this.D)),
            (d = Math.floor((c * d) / this.D)),
            this.Y(this.Fa),
            this.stretch(this.I, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c));
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  Ae.prototype = u.extend(new K(), {
    Da: function (a, b, c, d, e) {
      this.lc = b.v();
      this.start(a, c, d, e);
    },
    Rd: function () {
      this.sb &&
        ((this.sb = !1), (this.l = this.I.width), (this.j = this.I.height));
      var a = this.Ye();
      if (1 < a / this.D) this.Y(this.I);
      else {
        var b, c, d;
        0 == this.lc
          ? ((c = (this.l * a) / this.D),
            (d = (this.j * a) / this.D),
            (a = this.l / 2 - c / 2),
            (b = this.j / 2 - d / 2),
            this.stretch(this.I, 0, 0, this.l, this.j, a, b, c, d))
          : ((c = (this.l * a) / this.D),
            (c = this.l - c),
            (d = (this.j * a) / this.D),
            (d = this.j - d),
            (a = this.l / 2 - c / 2),
            (b = this.j / 2 - d / 2),
            this.stretch(this.Fa, 0, 0, this.l, this.j, a, b, c, d));
      }
      return null;
    },
    end: function () {
      this.finish();
    },
  });
  C.tm = {
    jM: "PK\u0003\u0004",
    pL: "PK\u0001\u0002",
    tE: "PK\u0005\u0006",
    lN: "PK\u0006\u0007",
    i0: "PK\u0006\u0006",
    R7: "PK\u0007\b",
  };
  C.x1 = { Ym: !1, No: !1, dir: !1, rk: null, it: null };
  C.prototype = (function () {
    function a(d) {
      "/" != d.slice(-1) && (d += "/");
      if (!this.files[d]) {
        var e = b(d);
        e && a.call(this, e);
        c.call(this, d, null, { dir: !0 });
      }
      return this.files[d];
    }
    function b(a) {
      "/" == a.slice(-1) && (a = a.substring(0, a.length - 1));
      var b = a.lastIndexOf("/");
      return 0 < b ? a.substring(0, b) : "";
    }
    function c(c, e, g) {
      var k = b(c);
      k && a.call(this, k);
      g = g || {};
      !0 === g.Ym && null == g.No && (g.No = !0);
      g = d(g, C.x1);
      g.rk = g.rk || new Date();
      null !== g.it && (g.it = g.it.toUpperCase());
      g.dir || null === e || "undefined" === typeof e
        ? ((g.Ym = !1), (g.No = !1), (e = null))
        : C.ns.aE && e instanceof Uint8Array
          ? ((g.Ym = !1), (g.No = !0), (e = C.Am.$D(e)))
          : C.ns.tN && e instanceof ArrayBuffer
            ? ((g.Ym = !1),
              (g.No = !0),
              (e = new Uint8Array(e)),
              (e = C.Am.$D(e)))
            : g.No && !g.Ym && (!0 !== g.XR && (e = C.Am.ET(e)), delete g.XR);
      return (this.files[c] = new f(c, e, g));
    }
    function d() {
      var a = {},
        b,
        c;
      for (b = 0; b < arguments.length; b++)
        for (c in arguments[b])
          arguments[b].hasOwnProperty(c) &&
            "undefined" === typeof a[c] &&
            (a[c] = arguments[b][c]);
      return a;
    }
    function e(a, b) {
      var c = "",
        d;
      for (d = 0; d < b; d++) (c += String.fromCharCode(a & 255)), (a >>>= 8);
      return c;
    }
    function f(a, b, c) {
      this.name = a;
      this.data = b;
      this.options = c;
    }
    f.prototype = {
      uN: function () {
        var a = this.data;
        if (null === a || "undefined" === typeof a) return "";
        this.options.Ym && (a = ac.decode(a));
        this.options.No || (a = C.prototype.VT(a));
        return a;
      },
    };
    return {
      load: function () {
        throw Error(
          "Load method is not defined. Is the file jszip-load.js included ?",
        );
      },
      filter: function (a) {
        var b = [],
          c,
          e,
          g;
        for (c in this.files)
          this.files.hasOwnProperty(c) &&
            ((e = this.files[c]),
            (g = new f(e.name, e.data, d(e.options))),
            (e = c.slice(this.root.length, c.length)),
            c.slice(0, this.root.length) === this.root && a(e, g) && b.push(g));
        return b;
      },
      file: function (a, b, d) {
        if (1 === arguments.length) {
          if (a instanceof RegExp) {
            var e = a;
            return this.filter(function (a, b) {
              return !b.options.dir && e.test(a);
            });
          }
          return (
            this.filter(function (b, c) {
              return !c.options.dir && b === a;
            })[0] || null
          );
        }
        a = this.root + a;
        c.call(this, a, b, d);
        return this;
      },
      hba: function (b) {
        if (!b) return this;
        if (b instanceof RegExp)
          return this.filter(function (a, c) {
            return c.options.dir && b.test(a);
          });
        var c = a.call(this, this.root + b),
          d = this.clone();
        d.root = c.name;
        return d;
      },
      remove: function (a) {
        a = this.root + a;
        var b = this.files[a];
        b || ("/" != a.slice(-1) && (a += "/"), (b = this.files[a]));
        if (b)
          if (b.options.dir)
            for (
              var b = this.filter(function (b, c) {
                  return c.name.slice(0, a.length) === a;
                }),
                c = 0;
              c < b.length;
              c++
            )
              delete this.files[b[c].name];
          else delete this.files[a];
        return this;
      },
      lba: function (a) {
        var b, c;
        a = d(a || {}, { Ym: !0, it: "STORE", type: "base64" });
        var f = a.it.toUpperCase();
        if (!C.qk[f]) throw f + " is not a valid compression method !";
        var g = [],
          h = [],
          A = 0,
          l;
        for (l in this.files)
          if (this.files.hasOwnProperty(l)) {
            b = this.files[l];
            var P = this.VT(b.name),
              p,
              M,
              L;
            M = b;
            b = P;
            var w = f;
            p = b !== M.name;
            c = M.uN();
            var B = M.options;
            L = B.rk.getHours();
            L = (L << 6) | B.rk.getMinutes();
            L = (L << 5) | (B.rk.getSeconds() / 2);
            M = B.rk.getFullYear() - 1980;
            M = (M << 4) | (B.rk.getMonth() + 1);
            M = (M << 5) | B.rk.getDate();
            var G = null !== c && 0 !== c.length,
              w = B.it || w;
            if (!C.qk[w]) throw w + " is not a valid compression method !";
            B = C.qk[w];
            w = G ? B.b1(c) : "";
            p =
              "\n\x00" +
              (p ? "\x00\b" : "\x00\x00") +
              (G ? B.FC : C.qk.STORE.FC);
            p += e(L, 2);
            p += e(M, 2);
            p += G ? e(this.qB(c), 4) : "\x00\x00\x00\x00";
            p += G ? e(w.length, 4) : "\x00\x00\x00\x00";
            p += G ? e(c.length, 4) : "\x00\x00\x00\x00";
            p += e(b.length, 2);
            b = p += "\x00\x00";
            c = w;
            c = C.tm.jM + b + P + c;
            P =
              C.tm.pL +
              "\u0014\x00" +
              b +
              "\x00\x00\x00\x00\x00\x00" +
              (!0 === this.files[l].options.dir
                ? "\u0010\x00\x00\x00"
                : "\x00\x00\x00\x00") +
              e(A, 4) +
              P;
            A += c.length;
            h.push(c);
            g.push(P);
          }
        f = h.join("");
        g = g.join("");
        h =
          f +
          g +
          (C.tm.tE +
            "\x00\x00\x00\x00" +
            e(h.length, 2) +
            e(h.length, 2) +
            e(g.length, 4) +
            e(f.length, 4) +
            "\x00\x00");
        switch (a.type.toLowerCase()) {
          case "uint8array":
            return C.Am.HK(h);
          case "arraybuffer":
            return C.Am.HK(h).buffer;
          case "blob":
            return C.Am.p6(h);
          case "base64":
            return a.Ym ? ac.encode(h) : h;
          default:
            return h;
        }
      },
      qB: function (a, b) {
        if ("" === a || "undefined" === typeof a) return 0;
        var c = [
          0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615,
          3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864,
          162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666,
          4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639,
          325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465,
          4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242,
          1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684,
          3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665,
          651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731,
          3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812,
          795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534,
          2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059,
          2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813,
          2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878,
          1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704,
          2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405,
          1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311,
          2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856,
          1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306,
          3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015,
          1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873,
          3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842,
          3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804,
          225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377,
          4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355,
          426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852,
          4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558,
          953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859,
          3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669,
          829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366,
          3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608,
          733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221,
          2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151,
          1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112,
          2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610,
          1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567,
          2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745,
          1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938,
          2808555105, 3495958263, 1231636301, 1047427035, 2932959818,
          3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863,
          817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493,
          3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746,
          711928724, 3020668471, 3272380065, 1510334235, 755167117,
        ];
        "undefined" == typeof b && (b = 0);
        var d;
        b ^= -1;
        for (var e = 0, f = a.length; e < f; e++)
          (d = (b ^ a.charCodeAt(e)) & 255), (d = c[d]), (b = (b >>> 8) ^ d);
        return b ^ -1;
      },
      clone: function () {
        var a = new C(),
          b;
        for (b in this) "function" !== typeof this[b] && (a[b] = this[b]);
        return a;
      },
      VT: function (a) {
        for (var b = "", c = 0; c < a.length; c++) {
          var d = a.charCodeAt(c);
          128 > d
            ? (b += String.fromCharCode(d))
            : (127 < d && 2048 > d
                ? (b += String.fromCharCode((d >> 6) | 192))
                : ((b += String.fromCharCode((d >> 12) | 224)),
                  (b += String.fromCharCode(((d >> 6) & 63) | 128))),
              (b += String.fromCharCode((d & 63) | 128)));
        }
        return b;
      },
      UT: function (a) {
        for (var b = "", c = 0, d, e, f; c < a.length; )
          (d = a.charCodeAt(c)),
            128 > d
              ? ((b += String.fromCharCode(d)), c++)
              : 191 < d && 224 > d
                ? ((e = a.charCodeAt(c + 1)),
                  (b += String.fromCharCode(((d & 31) << 6) | (e & 63))),
                  (c += 2))
                : ((e = a.charCodeAt(c + 1)),
                  (f = a.charCodeAt(c + 2)),
                  (b += String.fromCharCode(
                    ((d & 15) << 12) | ((e & 63) << 6) | (f & 63),
                  )),
                  (c += 3));
        return b;
      },
    };
  })();
  C.qk = {
    STORE: {
      FC: "\x00\x00",
      b1: function (a) {
        return a;
      },
      NK: function (a) {
        return a;
      },
    },
  };
  C.ns = {
    tN: "undefined" !== typeof ArrayBuffer && "undefined" !== typeof Uint8Array,
    aE: "undefined" !== typeof Uint8Array,
    blob: (function () {
      if ("undefined" === typeof ArrayBuffer) return !1;
      var a = new ArrayBuffer(0);
      try {
        return 0 === new Blob([a], { type: "application/zip" }).size;
      } catch (c) {}
      try {
        var b = new (window.BlobBuilder ||
          window.WebKitBlobBuilder ||
          window.lZ ||
          window.dZ)();
        b.append(a);
        return 0 === b.getBlob("application/zip").size;
      } catch (c) {}
      return !1;
    })(),
  };
  C.Am = {
    ET: function (a) {
      for (var b = "", c = 0; c < a.length; c++)
        b += String.fromCharCode(a.charCodeAt(c) & 255);
      return b;
    },
    HK: function (a) {
      if (!C.ns.aE) throw Error("Uint8Array is not supported by this browser");
      for (
        var b = new ArrayBuffer(a.length), b = new Uint8Array(b), c = 0;
        c < a.length;
        c++
      )
        b[c] = a.charCodeAt(c);
      return b;
    },
    $D: function (a) {
      if (!C.ns.aE) throw Error("Uint8Array is not supported by this browser");
      for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a[c]);
      return b;
    },
    p6: function (a) {
      if (!C.ns.blob) throw Error("Blob is not supported by this browser");
      a = C.Am.HK(a).buffer;
      try {
        return new Blob([a], { type: "application/zip" });
      } catch (c) {}
      try {
        var b = new (window.BlobBuilder ||
          window.WebKitBlobBuilder ||
          window.lZ ||
          window.dZ)();
        b.append(a);
        return b.getBlob("application/zip");
      } catch (c) {}
      throw Error("Bug : can't construct the Blob.");
    },
  };
  var ac = (function () {
    return {
      encode: function (a) {
        for (var b = "", c, d, e, f, g, k, S = 0; S < a.length; )
          (c = a.charCodeAt(S++)),
            (d = a.charCodeAt(S++)),
            (e = a.charCodeAt(S++)),
            (f = c >> 2),
            (c = ((c & 3) << 4) | (d >> 4)),
            (g = ((d & 15) << 2) | (e >> 6)),
            (k = e & 63),
            isNaN(d) ? (g = k = 64) : isNaN(e) && (k = 64),
            (b =
              b +
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                f,
              ) +
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                c,
              ) +
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                g,
              ) +
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                k,
              ));
        return b;
      },
      decode: function (a) {
        var b = "",
          c,
          d,
          e,
          f,
          g,
          k = 0;
        for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); k < a.length; )
          (c =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
              a.charAt(k++),
            )),
            (d =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                a.charAt(k++),
              )),
            (f =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                a.charAt(k++),
              )),
            (g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                a.charAt(k++),
              )),
            (c = (c << 2) | (d >> 4)),
            (d = ((d & 15) << 4) | (f >> 2)),
            (e = ((f & 3) << 6) | g),
            (b += String.fromCharCode(c)),
            64 != f && (b += String.fromCharCode(d)),
            64 != g && (b += String.fromCharCode(e));
        return b;
      },
    };
  })();
  if (!C) throw "JSZip not defined";
  (function () {
    function a() {
      this.list = this.next = null;
    }
    function b() {
      this.n = this.lk = this.e = 0;
      this.t = null;
    }
    function c(c, d, e, f, k, g) {
      this.Yp = 16;
      this.oZ = 288;
      this.status = 0;
      this.root = null;
      this.Fl = 0;
      var r = Array(this.Yp + 1),
        h,
        D,
        E,
        N,
        l,
        ba,
        T,
        m = Array(this.Yp + 1),
        na,
        ja,
        Ha,
        w = new b(),
        n = Array(this.Yp);
      N = Array(this.oZ);
      var ua,
        S = Array(this.Yp + 1),
        Ya,
        M,
        v;
      v = this.root = null;
      for (l = 0; l < r.length; l++) r[l] = 0;
      for (l = 0; l < m.length; l++) m[l] = 0;
      for (l = 0; l < n.length; l++) n[l] = null;
      for (l = 0; l < N.length; l++) N[l] = 0;
      for (l = 0; l < S.length; l++) S[l] = 0;
      h = 256 < d ? c[256] : this.Yp;
      na = c;
      ja = 0;
      l = d;
      do r[na[ja]]++, ja++;
      while (0 < --l);
      if (r[0] == d) (this.root = null), (this.status = this.Fl = 0);
      else {
        for (ba = 1; ba <= this.Yp && 0 == r[ba]; ba++);
        T = ba;
        g < ba && (g = ba);
        for (l = this.Yp; 0 != l && 0 == r[l]; l--);
        E = l;
        g > l && (g = l);
        for (Ya = 1 << ba; ba < l; ba++, Ya <<= 1)
          if (0 > (Ya -= r[ba])) {
            this.status = 2;
            this.Fl = g;
            return;
          }
        if (0 > (Ya -= r[l])) (this.status = 2), (this.Fl = g);
        else {
          r[l] += Ya;
          S[1] = ba = 0;
          na = r;
          ja = 1;
          for (Ha = 2; 0 < --l; ) S[Ha++] = ba += na[ja++];
          na = c;
          l = ja = 0;
          do 0 != (ba = na[ja++]) && (N[S[ba]++] = l);
          while (++l < d);
          d = S[E];
          S[0] = l = 0;
          na = N;
          ja = 0;
          N = -1;
          ua = m[0] = 0;
          Ha = null;
          for (M = 0; T <= E; T++)
            for (c = r[T]; 0 < c--; ) {
              for (; T > ua + m[1 + N]; ) {
                ua += m[1 + N];
                N++;
                M = (M = E - ua) > g ? g : M;
                if ((D = 1 << (ba = T - ua)) > c + 1)
                  for (
                    D -= c + 1, Ha = T;
                    ++ba < M && !((D <<= 1) <= r[++Ha]);

                  )
                    D -= r[Ha];
                ua + ba > h && ua < h && (ba = h - ua);
                M = 1 << ba;
                m[1 + N] = ba;
                Ha = Array(M);
                for (D = 0; D < M; D++) Ha[D] = new b();
                v = null == v ? (this.root = new a()) : (v.next = new a());
                v.next = null;
                v.list = Ha;
                n[N] = Ha;
                0 < N &&
                  ((S[N] = l),
                  (w.lk = m[N]),
                  (w.e = 16 + ba),
                  (w.t = Ha),
                  (ba = (l & ((1 << ua) - 1)) >> (ua - m[N])),
                  (n[N - 1][ba].e = w.e),
                  (n[N - 1][ba].lk = w.lk),
                  (n[N - 1][ba].n = w.n),
                  (n[N - 1][ba].t = w.t));
              }
              w.lk = T - ua;
              ja >= d
                ? (w.e = 99)
                : na[ja] < e
                  ? ((w.e = 256 > na[ja] ? 16 : 15), (w.n = na[ja++]))
                  : ((w.e = k[na[ja] - e]), (w.n = f[na[ja++] - e]));
              D = 1 << (T - ua);
              for (ba = l >> ua; ba < M; ba += D)
                (Ha[ba].e = w.e),
                  (Ha[ba].lk = w.lk),
                  (Ha[ba].n = w.n),
                  (Ha[ba].t = w.t);
              for (ba = 1 << (T - 1); 0 != (l & ba); ba >>= 1) l ^= ba;
              for (l ^= ba; (l & ((1 << ua) - 1)) != S[N]; ) (ua -= m[N]), N--;
            }
          this.Fl = m[1];
          this.status = 0 != Ya && 1 != E ? 1 : 0;
        }
      }
    }
    function d(a) {
      for (; L < a; )
        (M |= (I.length == H ? -1 : I.charCodeAt(H++) & 255) << L), (L += 8);
    }
    function e(a) {
      return M & r[a];
    }
    function f(a) {
      M >>= a;
      L -= a;
    }
    function g(a, b, c) {
      var k, g, r;
      if (0 == c) return 0;
      for (r = 0; ; ) {
        d(z);
        g = u.list[e(z)];
        for (k = g.e; 16 < k; ) {
          if (99 == k) return -1;
          f(g.lk);
          k -= 16;
          d(k);
          g = g.t[e(k)];
          k = g.e;
        }
        f(g.lk);
        if (16 == k) (A &= 32767), (a[b + r++] = v[A++] = g.n);
        else {
          if (15 == k) break;
          d(k);
          G = g.n + e(k);
          f(k);
          d(F);
          g = q.list[e(F)];
          for (k = g.e; 16 < k; ) {
            if (99 == k) return -1;
            f(g.lk);
            k -= 16;
            d(k);
            g = g.t[e(k)];
            k = g.e;
          }
          f(g.lk);
          d(k);
          t = A - g.n - e(k);
          for (f(k); 0 < G && r < c; )
            G--, (t &= 32767), (A &= 32767), (a[b + r++] = v[A++] = v[t++]);
        }
        if (r == c) return c;
      }
      w = -1;
      return r;
    }
    function k(a, b, k) {
      var r,
        h,
        l,
        m,
        na,
        w,
        ua,
        n = Array(316);
      for (r = 0; r < n.length; r++) n[r] = 0;
      d(5);
      w = 257 + e(5);
      f(5);
      d(5);
      ua = 1 + e(5);
      f(5);
      d(4);
      r = 4 + e(4);
      f(4);
      if (286 < w || 30 < ua) return -1;
      for (h = 0; h < r; h++) d(3), (n[ja[h]] = e(3)), f(3);
      for (; 19 > h; h++) n[ja[h]] = 0;
      z = 7;
      h = new c(n, 19, 19, null, null, z);
      if (0 != h.status) return -1;
      u = h.root;
      z = h.Fl;
      m = w + ua;
      for (r = l = 0; r < m; )
        if ((d(z), (na = u.list[e(z)]), (h = na.lk), f(h), (h = na.n), 16 > h))
          n[r++] = l = h;
        else if (16 == h) {
          d(2);
          h = 3 + e(2);
          f(2);
          if (r + h > m) return -1;
          for (; 0 < h--; ) n[r++] = l;
        } else {
          17 == h
            ? (d(3), (h = 3 + e(3)), f(3))
            : (d(7), (h = 11 + e(7)), f(7));
          if (r + h > m) return -1;
          for (; 0 < h--; ) n[r++] = 0;
          l = 0;
        }
      z = 9;
      h = new c(n, w, 257, E, D, z);
      0 == z && (h.status = 1);
      if (0 != h.status) return -1;
      u = h.root;
      z = h.Fl;
      for (r = 0; r < ua; r++) n[r] = n[r + w];
      F = 6;
      h = new c(n, ua, 0, N, T, F);
      q = h.root;
      F = h.Fl;
      return (0 == F && 257 < w) || 0 != h.status ? -1 : g(a, b, k);
    }
    function S(a, b) {
      var r, h;
      for (r = 0; r < b && (!B || -1 != w); ) {
        if (0 < G) {
          if (0 != w)
            for (; 0 < G && r < b; )
              G--, (t &= 32767), (A &= 32767), (a[0 + r++] = v[A++] = v[t++]);
          else {
            for (; 0 < G && r < b; )
              G--, (A &= 32767), d(8), (a[0 + r++] = v[A++] = e(8)), f(8);
            0 == G && (w = -1);
          }
          if (r == b) break;
        }
        if (-1 == w) {
          if (B) break;
          d(1);
          0 != e(1) && (B = !0);
          f(1);
          d(2);
          w = e(2);
          f(2);
          u = null;
          G = 0;
        }
        switch (w) {
          case 0:
            var ba = a,
              ja = 0 + r,
              na = b - r;
            h = L & 7;
            f(h);
            d(16);
            h = e(16);
            f(16);
            d(16);
            if (h != (~M & 65535)) h = -1;
            else {
              f(16);
              G = h;
              for (h = 0; 0 < G && h < na; )
                G--, (A &= 32767), d(8), (ba[ja + h++] = v[A++] = e(8)), f(8);
              0 == G && (w = -1);
            }
            break;
          case 1:
            if (null != u) h = g(a, 0 + r, b - r);
            else
              a: {
                var n;
                h = a;
                ba = 0 + r;
                ja = b - r;
                if (null == l) {
                  na = Array(288);
                  for (n = 0; 144 > n; n++) na[n] = 8;
                  for (; 256 > n; n++) na[n] = 9;
                  for (; 280 > n; n++) na[n] = 7;
                  for (; 288 > n; n++) na[n] = 8;
                  p = 7;
                  n = new c(na, 288, 257, E, D, p);
                  if (0 != n.status) {
                    alert("HufBuild error: " + n.status);
                    h = -1;
                    break a;
                  }
                  l = n.root;
                  p = n.Fl;
                  for (n = 0; 30 > n; n++) na[n] = 5;
                  m = 5;
                  n = new c(na, 30, 0, N, T, m);
                  if (1 < n.status) {
                    l = null;
                    alert("HufBuild error: " + n.status);
                    h = -1;
                    break a;
                  }
                  P = n.root;
                  m = n.Fl;
                }
                u = l;
                q = P;
                z = p;
                F = m;
                h = g(h, ba, ja);
              }
            break;
          case 2:
            h = null != u ? g(a, 0 + r, b - r) : k(a, 0 + r, b - r);
            break;
          default:
            h = -1;
        }
        if (-1 == h) return B ? 0 : -1;
        r += h;
      }
      return r;
    }
    function n(a) {
      var b, c, d;
      null == v && (v = Array(65536));
      L = M = A = 0;
      w = -1;
      B = !1;
      G = t = 0;
      u = null;
      I = a;
      H = 0;
      b = Array(1024);
      for (a = ""; 0 < (c = S(b, b.length)); )
        for (d = 0; d < c; d++) a += String.fromCharCode(b[d]);
      I = null;
      return a;
    }
    var m,
      v,
      A,
      l = null,
      P,
      p,
      M,
      L,
      w,
      B,
      G,
      t,
      u,
      q,
      z,
      F,
      I,
      H,
      r = [
        0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383,
        32767, 65535,
      ],
      E = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
      ],
      D = [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0, 99, 99,
      ],
      N = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
      ],
      T = [
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ],
      ja = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    C.qk.DEFLATE
      ? (C.qk.DEFLATE.NK = n)
      : (C.qk.DEFLATE = { FC: "\b\x00", NK: n });
  })();
  (function () {
    function a(a) {
      var b = "",
        c,
        d;
      for (d = 0; d < (a || "").length; d++)
        (c = a.charCodeAt(d)),
          (b += "\\x" + (16 > c ? "0" : "") + c.toString(16).toUpperCase());
      return b;
    }
    function b(a) {
      this.stream = "";
      C.ns.aE && a instanceof Uint8Array
        ? (this.stream = C.Am.$D(a))
        : C.ns.tN && a instanceof ArrayBuffer
          ? ((a = new Uint8Array(a)), (this.stream = C.Am.$D(a)))
          : (this.stream = C.Am.ET(a));
      this.index = 0;
    }
    function c(a, b) {
      this.options = a;
      this.qI = b;
    }
    function d(a, b) {
      this.files = [];
      this.qI = b;
      a && this.load(a);
    }
    b.prototype = {
      ZN: function (a) {
        this.YN(this.index + a);
      },
      YN: function (a) {
        if (this.stream.length < a || 0 > a)
          throw Error(
            "End of stream reached (stream length = " +
              this.stream.length +
              ", asked index = " +
              a +
              "). Corrupted zip ?",
          );
      },
      Pu: function (a) {
        this.YN(a);
        this.index = a;
      },
      yT: function (a) {
        this.Pu(this.index + a);
      },
      S0: function (a) {
        return this.stream.charCodeAt(a);
      },
      Eb: function (a) {
        var b = 0,
          c;
        this.ZN(a);
        for (c = this.index + a - 1; c >= this.index; c--)
          b = (b << 8) + this.S0(c);
        this.index += a;
        return b;
      },
      Ij: function (a) {
        this.ZN(a);
        var b = this.stream.slice(this.index, this.index + a);
        this.index += a;
        return b;
      },
      f5: function () {
        var a = this.Eb(4);
        return new Date(
          ((a >> 25) & 127) + 1980,
          ((a >> 21) & 15) - 1,
          (a >> 16) & 31,
          (a >> 11) & 31,
          (a >> 5) & 63,
          (a & 31) << 1,
        );
      },
    };
    c.prototype = {
      S2: function () {
        return 1 === (this.LN & 1);
      },
      F6: function () {
        return 2048 === (this.LN & 2048);
      },
      j5: function (b) {
        var c, d;
        b.yT(22);
        this.yH = b.Eb(2);
        d = b.Eb(2);
        this.fileName = b.Ij(this.yH);
        b.yT(d);
        if (-1 == this.oB || -1 == this.cE)
          throw Error(
            "Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)",
          );
        this.c1 = b.Ij(this.oB);
        a: {
          b = this.eO;
          for (c in C.qk)
            if (C.qk.hasOwnProperty(c) && C.qk[c].FC === b) {
              c = C.qk[c];
              break a;
            }
          c = null;
        }
        if (null === c)
          throw Error(
            "Corrupted zip : compression " +
              a(this.eO) +
              " unknown (inner file : " +
              this.fileName +
              ")",
          );
        this.OK = c.NK(this.c1);
        if (this.OK.length !== this.cE)
          throw Error("Bug : uncompressed data size mismatch");
        if (this.qI.Aaa && C.prototype.qB(this.OK) !== this.qB)
          throw Error("Corrupted zip : CRC32 mismatch");
      },
      e5: function (a) {
        a.Ij(2);
        a.Eb(2);
        this.LN = a.Eb(2);
        this.eO = a.Ij(2);
        this.rk = a.f5();
        this.qB = a.Eb(4);
        this.oB = a.Eb(4);
        this.cE = a.Eb(4);
        this.yH = a.Eb(2);
        this.W1 = a.Eb(2);
        this.Z1 = a.Eb(2);
        this.KO = a.Eb(2);
        a.Eb(2);
        this.V1 = a.Eb(4);
        this.sI = a.Eb(4);
        if (this.S2()) throw Error("Encrypted zip are not supported");
        this.fileName = a.Ij(this.yH);
        this.h5(a);
        this.w4(a);
        this.nP = a.Ij(this.Z1);
        this.dir = this.V1 & 16 ? !0 : !1;
      },
      w4: function () {
        if (this.DB[1]) {
          var a = new b(this.DB[1].value);
          -1 === this.cE && (this.cE = a.Eb(8));
          -1 === this.oB && (this.oB = a.Eb(8));
          -1 === this.sI && (this.sI = a.Eb(8));
          -1 === this.KO && (this.KO = a.Eb(4));
        }
      },
      h5: function (a) {
        var b = a.index,
          c,
          d,
          e;
        for (this.DB = this.DB || {}; a.index < b + this.W1; )
          (c = a.Eb(2)),
            (d = a.Eb(2)),
            (e = a.Ij(d)),
            (this.DB[c] = { id: c, length: d, value: e });
      },
      A2: function () {
        this.F6() &&
          ((this.fileName = C.prototype.UT(this.fileName)),
          (this.nP = C.prototype.UT(this.nP)));
      },
    };
    d.prototype = {
      kB: function (b) {
        var c = this.mc.Ij(4);
        if (c !== b)
          throw Error(
            "Corrupted zip or bug : unexpected signature (" +
              a(c) +
              ", expected " +
              a(b) +
              ")",
          );
      },
      Z4: function () {
        this.JO = this.mc.Eb(2);
        this.LO = this.mc.Eb(2);
        this.VN = this.mc.Eb(2);
        this.UN = this.mc.Eb(2);
        this.WN = this.mc.Eb(4);
        this.RG = this.mc.Eb(4);
        this.K6 = this.mc.Eb(2);
        this.mc.Ij(this.K6);
      },
      a5: function () {
        this.I6 = this.mc.Eb(8);
        this.mc.Ij(2);
        this.mc.Eb(2);
        this.JO = this.mc.Eb(4);
        this.LO = this.mc.Eb(4);
        this.VN = this.mc.Eb(8);
        this.UN = this.mc.Eb(8);
        this.WN = this.mc.Eb(8);
        this.RG = this.mc.Eb(8);
        this.J6 = {};
        for (var a = this.I6 - 44, b, c, d; 0 < a; )
          (b = this.mc.Eb(2)),
            (c = this.mc.Eb(4)),
            (d = this.mc.Ij(c)),
            (this.J6[b] = { id: b, length: c, value: d });
      },
      b5: function () {
        this.mc.Eb(4);
        this.n5 = this.mc.Eb(8);
        this.B1 = this.mc.Eb(4);
        if (1 < this.B1) throw Error("Multi-volumes zip are not supported");
      },
      i5: function () {
        var a, b;
        for (a = 0; a < this.files.length; a++)
          (b = this.files[a]),
            this.mc.Pu(b.sI),
            this.kB(C.tm.jM),
            b.j5(this.mc),
            b.A2();
      },
      d5: function () {
        var a;
        for (this.mc.Pu(this.RG); this.mc.Ij(4) === C.tm.pL; )
          (a = new c({ aU: this.aU }, this.qI)),
            a.e5(this.mc),
            this.files.push(a);
      },
      g5: function () {
        var a = this.mc.stream.lastIndexOf(C.tm.tE);
        if (-1 === a)
          throw Error("Corrupted zip : can't find end of central directory");
        this.mc.Pu(a);
        this.kB(C.tm.tE);
        this.Z4();
        if (
          65535 === this.JO ||
          65535 === this.LO ||
          65535 === this.VN ||
          65535 === this.UN ||
          -1 === this.WN ||
          -1 === this.RG
        ) {
          this.aU = !0;
          a = this.mc.stream.lastIndexOf(C.tm.lN);
          if (-1 === a)
            throw Error(
              "Corrupted zip : can't find the ZIP64 end of central directory locator",
            );
          this.mc.Pu(a);
          this.kB(C.tm.lN);
          this.b5();
          this.mc.Pu(this.n5);
          this.kB(C.tm.i0);
          this.a5();
        }
      },
      load: function (a) {
        this.mc = new b(a);
        this.g5();
        this.d5();
        this.i5();
      },
    };
    C.prototype.load = function (a, b) {
      var c, e, f;
      b = b || {};
      b.Ym && (a = ac.decode(a));
      c = new d(a, b).files;
      for (e = 0; e < c.length; e++)
        (f = c[e]),
          this.file(f.fileName, f.OK, { No: !0, XR: !0, rk: f.rk, dir: f.dir });
      return this;
    };
  })();
  var ff = document.getElementsByTagName("script"),
    gf = ff[ff.length - 1].src;
  document.Mca = gf.substring(0, gf.lastIndexOf("/") + 1);
  Na.Runtime = Be;
  Na.headerLoaded = Ce;
  Na.z6 = "updateApplication";
  Na[window.z6] = Bb;
  cb.prototype = {
    Zc: function (a, b, c) {
      if (this.visible) {
        this.ml &&
          (a.Zb.save(),
          a.Zb.translate(this.ez, this.iz),
          0 != this.angle && a.Zb.rotate(0.0174532925 * -this.angle),
          a.Zb.scale(Math.max(0.001, this.Fe), Math.max(0.001, this.Ge)),
          a.Zb.translate(-this.Mb, -this.Gb));
        var d;
        for (d = 0; d < this.children.length; d++)
          this.children[d].Zc(a, b + this.x, c + this.y);
        this.ml && a.Zb.restore();
      }
    },
    Vh: function (a) {
      this.children.push(a);
    },
    IA: function (a, b) {
      b >= this.children.length
        ? this.children.push(a)
        : (0 > b && (b = 0), this.children.splice(b, 0, a));
    },
    o5: function () {
      this.children.length = 0;
    },
    removeChild: function (a) {
      var b;
      for (b = 0; b < this.children.length; b++)
        if (this.children[b] == a) return this.children.splice(b, 1), b;
      return -1;
    },
    $f: function (a) {
      var b;
      for (b = 0; b < this.children.length; b++)
        if (this.children[b] == a) return b;
      return -1;
    },
    si: function (a, b) {
      var c,
        d = null;
      for (c = 0; c < this.children.length; c++)
        if (this.children[c] == a) {
          d = this.children[c];
          break;
        }
      null != d &&
        (this.children.splice(c, 1),
        b > c && b--,
        0 > b && (b = 0),
        b >= this.children.length
          ? this.children.push(a)
          : this.children.splice(b, 0, a));
    },
  };
  Ga.pz = 0;
  Ga.jh = 1;
  Ga.OV = 1;
  Ga.PV = 2;
  Ga.fv = 64;
  Ga.gv = 16;
  Ga.Bs = 6;
  Z.t$ = 0;
  Z.u$ = 1;
  Z.zs = 0;
  Z.gq = 1;
  Z.hI = [
    65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7,
    3, 1,
  ];
  Z.TJ = [
    0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472,
    65504, 65520, 65528, 65532, 65534, 65535,
  ];
  Z.wm = new X();
  Z.Sp = new X();
  Z.ft = new X();
  Z.Oo = new X();
  Z.prototype = {
    aH: function (a, b, c) {
      var d, e;
      this.width = b.width;
      this.height = b.height;
      this.Mb = b.Mb;
      this.Gb = b.Gb;
      var f = Math.floor(((this.width + 15) & 4294967280) / 16);
      this.lineWidth = f;
      e = f * this.height + 1;
      if ("undefined" != typeof ArrayBuffer)
        this.ra = new Uint16Array(new ArrayBuffer(2 * e));
      else for (this.ra = Array(e), d = 0; d < e; d++) this.ra[d] = 0;
      d = document.createElement("canvas");
      d.width = b.width;
      d.height = b.height;
      d = d.getContext("2d");
      0 == b.ne
        ? d.drawImage(b.Ze, 0, 0)
        : d.drawImage(
            a.Ia.Ae[b.ne],
            b.li,
            b.mi,
            b.width,
            b.height,
            0,
            0,
            b.width,
            b.height,
          );
      a = d.getImageData(0, 0, this.width, this.height);
      if (0 == (c & Z.gq))
        for (c = 0; c < this.height; c++) {
          e = c * b.width * 4 + 3;
          var g = c * f,
            k = 32768;
          for (d = 0; d < this.width; d++)
            0 != a.data[e] && (this.ra[g] |= k),
              (e += 4),
              (k >>>= 1),
              0 == k && ((k = 32768), g++);
        }
      else
        for (d = 0; d < this.width; d++) {
          for (
            c = 0;
            c < this.height && 0 == a.data[4 * (c * b.width + d) + 3];
            c++
          );
          if (c < this.height)
            for (
              g = Math.min(this.height, c + Ga.Bs), k = 32768 >> (d & 15);
              c < g;
              c++
            )
              0 != a.data[4 * (c * b.width + d) + 3] &&
                ((e = Math.floor(c * f + (d & 4294967280) / 16)),
                (this.ra[e] |= k));
        }
    },
    bH: function (a, b, c) {
      var d;
      this.width = b.width;
      this.height = b.height;
      this.Mb = b.Mb;
      this.Gb = b.Gb;
      this.lineWidth = a = Math.floor(((this.width + 15) & 4294967280) / 16);
      b = a * this.height + 1;
      this.ra =
        "undefined" != typeof ArrayBuffer
          ? new Uint16Array(new ArrayBuffer(2 * b))
          : Array(b);
      b = this.height;
      0 != (c & Z.gq) && b > Ga.Bs && (b = Ga.Bs);
      var e = a,
        f = 0;
      0 != (this.width & 15) &&
        ((f = (65535 << (16 - (this.width & 15))) & 65535), e--);
      for (d = 0; d < b; d++) {
        var g = d * a;
        for (c = 0; c < e; c++) this.ra[g++] = 65535;
        0 != f && (this.ra[g] = f);
      }
    },
    s5: function (a, b, c) {
      var d, e, f;
      90 == c
        ? ((c = 0), (f = 1))
        : 180 == c
          ? ((c = -1), (f = 0))
          : 270 == c
            ? ((c = 0), (f = -1))
            : ((f = (c * Math.PI) / 180), (c = Math.cos(f)), (f = Math.sin(f)));
      var g, k;
      null == b
        ? ((e = k = 0), (Z.wm.x = Z.wm.y = 0))
        : ((g = -b.x * c),
          (d = -b.x * f),
          (e = -b.y * c),
          (k = -b.y * f),
          (Z.wm.x = Math.floor(g + k)),
          (Z.wm.y = Math.floor(e - d)));
      d = null == b ? a.right : a.right - b.x;
      g = d * c;
      d *= f;
      Z.Sp.x = Math.floor(g + k);
      Z.Sp.y = Math.floor(e - d);
      e = null == b ? a.bottom : a.bottom - b.y;
      Z.Oo.x = Math.floor(g + e * f);
      Z.Oo.y = Math.floor(e * c - d);
      Z.ft.x = Z.wm.x + Z.Oo.x - Z.Sp.x;
      Z.ft.y = Z.wm.y + Z.Oo.y - Z.Sp.y;
      c = Math.min(Z.wm.x, Math.min(Z.Sp.x, Math.min(Z.Oo.x, Z.ft.x)));
      f = Math.min(Z.wm.y, Math.min(Z.Sp.y, Math.min(Z.Oo.y, Z.ft.y)));
      g = Math.max(Z.wm.x, Math.max(Z.Sp.x, Math.max(Z.Oo.x, Z.ft.x)));
      d = Math.max(Z.wm.y, Math.max(Z.Sp.y, Math.max(Z.Oo.y, Z.ft.y)));
      null != b && ((b.x = -c), (b.y = -f));
      a.right = g - c;
      a.bottom = d - f;
    },
    p1: function (a, b, c, d) {
      var e,
        f,
        g = a.width;
      e = a.height;
      var k = new va();
      k.right = Math.floor(a.width * c);
      k.bottom = Math.floor(a.height * d);
      var S = new X();
      S.x = Math.floor(a.Mb * c);
      S.y = Math.floor(a.Gb * d);
      this.s5(k, S, b);
      var n = k.right,
        k = k.bottom;
      if (0 >= n || 0 >= k) return !1;
      var m = a.lineWidth,
        v = ((n + 15) & 2147483632) / 16;
      this.ra =
        "undefined" != typeof ArrayBuffer
          ? new Uint16Array(new ArrayBuffer(2 * (v * k + 1)))
          : Array(v * k + 1);
      var A;
      for (A = v * k; 0 <= A; A--) this.ra[A] = 0;
      this.lineWidth = v;
      this.width = n;
      this.height = k;
      this.Mb = S.x;
      this.Gb = S.y;
      b *= 0.017453292;
      f = Math.cos(b);
      var l = Math.sin(b);
      b = 0;
      S = Math.floor(65536 * (g / 2 - ((n / 2) * f - (k / 2) * l) / c));
      A = Math.floor(65536 * (e / 2 - ((n / 2) * l + (k / 2) * f) / d));
      var p = Math.floor((65536 * f) / c),
        t = Math.floor((65536 * l) / d),
        M = n / 16,
        n = n % 16;
      d = Math.floor((65536 * f) / d);
      c = Math.floor((65536 * l) / c);
      var g = 65536 * g,
        l = 65536 * e,
        L,
        w;
      for (f = 0; f < k; f++) {
        var B = S,
          G = A,
          u = b,
          q;
        for (e = 0; e < M; e++) {
          var z = 0;
          0 <= B &&
            B < g &&
            0 <= G &&
            G < l &&
            ((q = Math.floor(B / 65536)),
            (w = Math.floor(G / 65536)),
            (L = 32768 >>> q % 16),
            (w = a.ra[Math.floor(w * m + q / 16)]),
            0 != (w & L) && (z |= 32768));
          B += p;
          G += t;
          0 <= B &&
            B < g &&
            0 <= G &&
            G < l &&
            ((q = Math.floor(B / 65536)),
            (w = Math.floor(G / 65536)),
            (L = 32768 >>> q % 16),
            (w = a.ra[Math.floor(w * m + q / 16)]),
            0 != (w & L) && (z |= 16384));
          B += p;
          G += t;
          0 <= B &&
            B < g &&
            0 <= G &&
            G < l &&
            ((q = Math.floor(B / 65536)),
            (w = Math.floor(G / 65536)),
            (L = 32768 >>> q % 16),
            (w = a.ra[Math.floor(w * m + q / 16)]),
            0 != (w & L) && (z |= 8192));
          B += p;
          G += t;
          0 <= B &&
            B < g &&
            0 <= G &&
            G < l &&
            ((q = Math.floor(B / 65536)),
            (w = Math.floor(G / 65536)),
            (L = 32768 >>> q % 16),
            (w = a.ra[Math.floor(w * m + q / 16)]),
            0 != (w & L) && (z |= 4096));
          B += p;
          G += t;
          0 <= B &&
            B < g &&
            0 <= G &&
            G < l &&
            ((q = Math.floor(B / 65536)),
            (w = Math.floor(G / 65536)),
            (L = 32768 >>> q % 16),
            (w = a.ra[Math.floor(w * m + q / 16)]),
            0 != (w & L) && (z |= 2048));
          B += p;
          G += t;
          0 <= B &&
            B < g &&
            0 <= G &&
            G < l &&
            ((q = Math.floor(B / 65536)),
            (w = Math.floor(G / 65536)),
            (L = 32768 >>> q % 16),
            (w = a.ra[Math.floor(w * m + q / 16)]),
            0 != (w & L) && (z |= 1024));
          B += p;
          G += t;
          0 <= B &&
            B < g &&
            0 <= G &&
            G < l &&
            ((q = Math.floor(B / 65536)),
            (w = Math.floor(G / 65536)),
            (L = 32768 >>> q % 16),
            (w = a.ra[Math.floor(w * m + q / 16)]),
            0 != (w & L) && (z |= 512));
          B += p;
          G += t;
          0 <= B &&
            B < g &&
            0 <= G &&
            G < l &&
            ((q = Math.floor(B / 65536)),
            (w = Math.floor(G / 65536)),
            (L = 32768 >>> q % 16),
            (w = a.ra[Math.floor(w * m + q / 16)]),
            0 != (w & L) && (z |= 256));
          B += p;
          G += t;
          0 <= B &&
            B < g &&
            0 <= G &&
            G < l &&
            ((q = Math.floor(B / 65536)),
            (w = Math.floor(G / 65536)),
            (L = 32768 >>> q % 16),
            (w = a.ra[Math.floor(w * m + q / 16)]),
            0 != (w & L) && (z |= 128));
          B += p;
          G += t;
          0 <= B &&
            B < g &&
            0 <= G &&
            G < l &&
            ((q = Math.floor(B / 65536)),
            (w = Math.floor(G / 65536)),
            (L = 32768 >>> q % 16),
            (w = a.ra[Math.floor(w * m + q / 16)]),
            0 != (w & L) && (z |= 64));
          B += p;
          G += t;
          0 <= B &&
            B < g &&
            0 <= G &&
            G < l &&
            ((q = Math.floor(B / 65536)),
            (w = Math.floor(G / 65536)),
            (L = 32768 >>> q % 16),
            (w = a.ra[Math.floor(w * m + q / 16)]),
            0 != (w & L) && (z |= 32));
          B += p;
          G += t;
          0 <= B &&
            B < g &&
            0 <= G &&
            G < l &&
            ((q = Math.floor(B / 65536)),
            (w = Math.floor(G / 65536)),
            (L = 32768 >>> q % 16),
            (w = a.ra[Math.floor(w * m + q / 16)]),
            0 != (w & L) && (z |= 16));
          B += p;
          G += t;
          0 <= B &&
            B < g &&
            0 <= G &&
            G < l &&
            ((q = Math.floor(B / 65536)),
            (w = Math.floor(G / 65536)),
            (L = 32768 >>> q % 16),
            (w = a.ra[Math.floor(w * m + q / 16)]),
            0 != (w & L) && (z |= 8));
          B += p;
          G += t;
          0 <= B &&
            B < g &&
            0 <= G &&
            G < l &&
            ((q = Math.floor(B / 65536)),
            (w = Math.floor(G / 65536)),
            (L = 32768 >>> q % 16),
            (w = a.ra[Math.floor(w * m + q / 16)]),
            0 != (w & L) && (z |= 4));
          B += p;
          G += t;
          0 <= B &&
            B < g &&
            0 <= G &&
            G < l &&
            ((q = Math.floor(B / 65536)),
            (w = Math.floor(G / 65536)),
            (L = 32768 >>> q % 16),
            (w = a.ra[Math.floor(w * m + q / 16)]),
            0 != (w & L) && (z |= 2));
          B += p;
          G += t;
          0 <= B &&
            B < g &&
            0 <= G &&
            G < l &&
            ((q = Math.floor(B / 65536)),
            (w = Math.floor(G / 65536)),
            (L = 32768 >>> q % 16),
            (w = a.ra[Math.floor(w * m + q / 16)]),
            0 != (w & L) && (z |= 1));
          B += p;
          G += t;
          this.ra[u++] = z;
        }
        if (0 != n) {
          z = 32768;
          for (e = q = 0; e < n; e++, z = (z >> 1) & 32767) {
            if (0 <= B && B < g && 0 <= G && G < l) {
              w = Math.floor(B / 65536);
              var C = Math.floor(G / 65536);
              L = 32768 >>> w % 16;
              w = a.ra[Math.floor(C * m + w / 16)];
              0 != (w & L) && (q |= z);
            }
            B += p;
            G += t;
          }
          this.ra[u] = q;
        }
        b += v;
        S -= c;
        A += d;
      }
      return !0;
    },
    Rp: function (a, b, c, d, e, f, g) {
      var k, h, n;
      a <= e
        ? ((k = this),
          (n = Math.floor(c)),
          (c = Math.floor(g)),
          (h = Math.floor(a)),
          (g = Math.floor(b)),
          (a = Math.floor(e)),
          (b = Math.floor(f)))
        : ((k = d),
          (d = this),
          (n = Math.floor(g)),
          (c = Math.floor(c)),
          (h = Math.floor(e)),
          (g = Math.floor(f)),
          (a = Math.floor(a)),
          (b = Math.floor(b)));
      f = k.height;
      var m = 0;
      0 != n && ((f = n), (g += k.height - n), (m = k.height - n));
      e = d.height;
      var v = 0;
      0 != c && ((e = c), (b += d.height - c), (v = d.height - c));
      if (h >= a + d.width || h + k.width <= a || g >= b + e || g + f < b)
        return !1;
      c = a - h;
      n = Math.floor(c / 16);
      c %= 16;
      h = Math.min(h + k.width - a, d.width);
      h = Math.floor((h + 15) / 16);
      g <= b
        ? ((a = b - g + m), (m = v), (g = Math.min(g + f, b + e) - b))
        : ((a = m), (m = g - b + v), (g = Math.min(g + f, b + e) - g));
      b = a * k.lineWidth;
      e = m * d.lineWidth;
      if (0 != c)
        switch (h) {
          case 1:
            for (a = 0; a < g; a++) {
              m = k.ra[b + n] << c;
              if (
                0 != (m & d.ra[e]) ||
                (n + 1 < k.lineWidth &&
                  ((m = k.ra[b + n + 1] << c), (m >>>= 16), 0 != (m & d.ra[e])))
              )
                return !0;
              b += k.lineWidth;
              e += d.lineWidth;
            }
            break;
          case 2:
            for (a = 0; a < g; a++) {
              m = k.ra[b + n] << c;
              if (0 != (m & d.ra[e])) return !0;
              m = k.ra[b + n + 1] << c;
              v = m >>> 16;
              if (
                0 != (v & d.ra[e]) ||
                0 != (m & d.ra[e + 1]) ||
                (n + 2 < k.lineWidth &&
                  ((m = k.ra[b + n + 2] << c),
                  (m >>>= 16),
                  0 != (m & d.ra[e + 1])))
              )
                return !0;
              b += k.lineWidth;
              e += d.lineWidth;
            }
            break;
          default:
            for (a = 0; a < g; a++) {
              m = k.ra[b + n] << c;
              if (0 != (m & d.ra[e])) return !0;
              for (f = 0; f < h - 1; f++)
                if (
                  ((m = k.ra[b + n + f + 1] << c),
                  (v = m >>> 16),
                  0 != (v & d.ra[e + f]) || 0 != (m & d.ra[e + f + 1]))
                )
                  return !0;
              if (
                n + f + 1 < k.lineWidth &&
                ((m = k.ra[b + n + f + 1] << c),
                (m >>>= 16),
                0 != (m & d.ra[e + f]))
              )
                return !0;
              b += k.lineWidth;
              e += d.lineWidth;
            }
        }
      else
        for (a = 0; a < g; a++) {
          for (f = 0; f < h; f++)
            if (((m = k.ra[b + n + f]), 0 != (d.ra[e + f] & m))) return !0;
          b += k.lineWidth;
          e += d.lineWidth;
        }
      return !1;
    },
    JK: function (a, b, c, d, e, f, g, k) {
      a = Math.floor(a);
      b = Math.floor(b);
      d = Math.floor(d);
      e = Math.floor(e);
      var h = 0,
        n = this.height;
      0 < c && ((h = this.height - c), (b += h), (n = c));
      c = g;
      0 < k && ((e += g - k), (c = k));
      if (a >= d + f || a + this.width <= d || b >= e + c || b + n < e)
        return !1;
      a <= d
        ? ((g = d - a), (a = Math.min(this.width - g, f)))
        : ((g = 0), (a = Math.min(d + f - a, this.width)));
      b <= e
        ? ((h = e - b + h), (b = Math.min(b + n, e + c) - e))
        : (b = Math.min(b + n, e + c) - b);
      e = Math.floor(g / 8);
      n = Math.floor((g + a + 15) / 16) - Math.floor(g / 16);
      for (f = 0; f < b; f++)
        switch (((d = (f + h) * this.lineWidth), n)) {
          case 1:
            c = Z.hI[g & 15] & Z.TJ[((g + a - 1) & 15) + 1];
            if (0 != (this.ra[d + e] & c)) return !0;
            break;
          case 2:
            c = Z.hI[g & 15];
            if (0 != (this.ra[d + e] & c)) return !0;
            c = Z.TJ[((g + a - 1) & 15) + 1];
            if (0 != (this.ra[d + e + 1] & c)) return !0;
            break;
          default:
            c = Z.hI[g & 15];
            if (0 != (this.ra[d + e] & c)) return !0;
            for (k = 1; k < n - 1; k++) if (0 != this.ra[d + e + k]) return !0;
            c = Z.TJ[((g + a - 1) & 15) + 1];
            if (0 != (this.ra[d + e + k] & c)) return !0;
        }
      return !1;
    },
    u6: function (a, b, c, d, e) {
      a = Math.floor(a);
      b = Math.floor(b);
      var f = a,
        g = b;
      if (0 == c) {
        if (1 != d || 1 != e) (f = Math.floor(f / d)), (g = Math.floor(g / e));
      } else if (
        ((f = (3.141592653589 * c) / 180),
        (c = Math.cos(f)),
        (g = Math.sin(f)),
        (f = a * c - b * g),
        (g = b * c + a * g),
        1 != d || 1 != e)
      )
        (f /= d), (g /= e);
      f += this.Mb;
      g += this.Gb;
      a = Math.floor(f);
      b = Math.floor(g);
      return 0 > a || a >= this.width || 0 > b || b >= this.height
        ? !1
        : 0 !=
            (this.ra[b * this.lineWidth + Math.floor(a / 16)] &
              (32768 >>> (a & 15)))
          ? !0
          : !1;
    },
  };
  R.xo = 1;
  R.q_ = 2;
  R.FF = 4;
  R.r_ = 16;
  R.Pm = 32;
  R.uq = 64;
  R.tq = 128;
  R.x$ = 0;
  R.w$ = 1;
  R.d7 = 0;
  R.Wi = 1;
  R.f7 = 2;
  R.FV = 3;
  R.Z6 = 4;
  R.i7 = 5;
  R.c7 = 6;
  R.e7 = 7;
  R.a7 = 8;
  R.DV = 9;
  R.h7 = 10;
  R.j7 = 11;
  R.b7 = 12;
  R.EV = 13;
  R.g7 = 13;
  R.rE = 4095;
  R.nz = 4096;
  R.fL = 8192;
  R.prototype = {
    I2: function (a, b, c) {
      this.a = a;
      this.js = c.aO;
      this.MD = c.dO;
      this.Ha = 0;
      this.Ha |= R.uq;
      0 == (this.a.jj & ga.nh) && (this.Ha &= ~R.uq);
      0 != (this.a.vd.Pr & J.Gv) && (this.Ha |= R.tq);
      0 != (c.mB & t.ev)
        ? ((this.Ha |= R.xo),
          this.a.eb == F.Om && ((this.a.wa |= aa.Fm), (this.Ha &= ~R.uq)))
        : (this.Ha |= R.Pm);
      this.Pd = this.a.vd.TR;
      this.Qd = this.a.vd.SR;
      this.a.b.sd == ia.hZ && (this.Ha |= R.q_);
    },
    VH: function (a) {
      this.sO(a);
      a && this.a.ha.gu && (this.a.wa |= aa.no);
    },
    handle: function () {
      var a = this.a.c,
        b,
        c,
        d,
        e;
      0 != (this.a.wa & aa.no)
        ? (this.sm || this.kt(!1), this.z4())
        : 0 != (this.a.wa & aa.oo)
          ? this.A4()
          : 0 == (this.Ha & R.FF)
            ? (0 != this.ID &&
                ((this.JD -= a.GD),
                0 > this.JD &&
                  ((this.JD = this.ID),
                  0 == (this.Ha & R.Pm)
                    ? ((this.Ha |= R.Pm), this.eJ())
                    : ((this.Ha &= ~R.Pm), this.MC()))),
              null != this.a.H && this.a.H.move(),
              0 == this.a.b.Un &&
                (0 != (this.a.ib & J.qq)
                  ? 0 == (this.a.ib & J.IM) &&
                    0 != (a.m.Cb & q.mV) &&
                    ((b = this.a.w - this.a.ab),
                    (c = this.a.A - this.a.bb),
                    (d = b + this.a.ea),
                    (e = c + this.a.ga),
                    (d < a.Cu || b > a.Au || e < a.Gu || c > a.Eu) &&
                      a.rl(this.a.Nc))
                  : ((b = this.a.w - this.a.ab),
                    (c = this.a.A - this.a.bb),
                    (d = b + this.a.ea),
                    (e = c + this.a.ga),
                    (d >= a.Bu && b <= a.zu && e >= a.Fu && c <= a.Du) ||
                      (d >= a.Cu && b <= a.Au && e >= a.Gu && c <= a.Eu
                        ? ((this.Ha |= R.FF), (this.MD = this.a.bn()))
                        : 0 == (this.a.ib & J.IM) && a.rl(this.a.Nc)))))
            : ((b = this.a.w - this.a.ab),
              (c = this.a.A - this.a.bb),
              (d = b + this.a.ea),
              (e = c + this.a.ga),
              d >= a.Bu &&
                b <= a.zu &&
                e >= a.Fu &&
                c <= a.Du &&
                ((this.Ha &= ~R.FF), this.VH(!1), this.a.si(this.MD)));
    },
    sO: function () {
      0 != (this.a.ib & J.pq)
        ? this.a.YF(
            this.a.w - this.a.c.za,
            this.a.A - this.a.c.Ea,
            this.a.b.Jb,
            this.js,
            0 == (this.Ha & R.xo),
          )
        : ((this.a.wa |= aa.zY),
          this.a.Ts(
            this.a.w - this.a.c.za,
            this.a.A - this.a.c.Ea,
            this.js,
            0 != (this.a.ib & J.zF),
            0 == (this.Ha & R.xo),
            -1,
          ));
      this.a.kT(this.Pd, this.Qd);
    },
    kt: function (a) {
      this.a.wa &= ~(aa.no | aa.oo);
      if (0 == a) {
        if (!this.a.ha.gu) return !1;
        this.a.wa |= aa.no;
      } else {
        if (!this.a.ha.ey) return !1;
        this.a.wa |= aa.oo;
      }
      this.sm = this.a.c.m.LH().l6(this.a, a);
      return this.sm ? !0 : ((this.a.wa &= ~(aa.no | aa.oo)), !1);
    },
    z4: function () {
      if (0 != (this.a.wa & aa.no)) {
        if (this.sm.YB())
          return (this.a.wa &= ~aa.no), (this.sm = this.a.ps = null), !1;
        this.sm.Rd(K.NF);
        return !0;
      }
      return !1;
    },
    A4: function () {
      if (0 != (this.a.wa & aa.oo)) {
        if (this.sm.YB())
          return (this.ps = this.sm = null), this.a.c.rl(this.a.Nc), !1;
        this.sm.Rd(K.BA);
        return !0;
      }
      return !1;
    },
    J2: function () {
      return this.kt(!0) ? ((this.a.wa |= aa.Fm), !0) : !1;
    },
    gd: function () {
      this.MD = this.a.bn();
    },
    MC: function () {
      0 == (this.Ha & R.xo) &&
        ((this.Ha |= R.xo), (this.a.b.ka = !0), this.a.Yo());
    },
    eJ: function () {
      0 != (this.Ha & R.xo) &&
        (this.a.c.O.ic[this.a.ug].Cb & (ra.Dz | ra.Ez)) == ra.Ez &&
        ((this.Ha &= ~R.xo),
        (this.a.wa &= ~aa.Fm),
        (this.a.b.ka = !0),
        this.a.Pp());
    },
    QD: function (a) {
      this.Ha = a ? this.Ha | R.uq : this.Ha & ~R.uq;
    },
    c4: function (a, b) {
      this.Pd = a;
      this.Qd = b;
    },
  };
  De.prototype = {
    load: function (a) {
      this.$t = a.B();
      this.um = Array(this.$t);
      var b;
      for (b = 0; b < this.$t; b++) this.um[b] = a.Nd();
    },
  };
  Ee.prototype = {
    load: function (a, b) {
      this.au = a.B();
      this.values = Array(this.au);
      var c;
      for (c = 0; c < this.au; c++) this.values[c] = a.v();
      b && (this.Ja = a.v());
    },
  };
  lb.g0 = 26;
  lb.A_ = 10;
  lb.prototype = {
    Da: function (a, b) {
      this.Ky = 0;
      var c = lb.g0;
      null != b.Fn && b.Fn.au > c && (c = b.Fn.au);
      this.ge = Array(c);
      c = lb.A_;
      null != b.sp && b.sp.$t > c && (c = b.sp.$t);
      this.hh = Array(c);
      for (c = 0; c < this.ge.length; c++) this.ge[c] = 0;
      for (c = 0; c < this.hh.length; c++) this.hh[c] = "";
      if (null != b.Fn)
        for (this.Ky = b.Fn.Ja, c = 0; c < b.Fn.au; c++)
          this.ge[c] = b.Fn.values[c];
      if (null != b.sp) for (c = 0; c < b.sp.$t; c++) this.hh[c] = b.sp.um[c];
    },
    gd: function () {
      var a;
      for (a = 0; a < this.ge.length; a++) this.ge[a] = 0;
      for (a = 0; a < this.hh.length; a++) this.hh[a] = null;
    },
    Ct: function (a) {
      return a < this.ge.length ? this.ge[a] : 0;
    },
    MP: function (a) {
      return a < this.hh.length ? this.hh[a] : "";
    },
    UD: function (a, b) {
      a >= this.cb.ge.length && this.OB(a + 10);
      this.ge[a] = b;
    },
    OB: function (a) {
      if (a > this.ge.length) {
        var b;
        for (b = this.ge.length; b < a; b++) this.ge[b] = 0;
      }
    },
    x2: function (a) {
      if (a > this.hh.length) {
        var b;
        for (b = this.hh.length; b < a; b++) this.hh[b] = "";
      }
    },
  };
  pb.hl = 32;
  pb.prototype = {
    n1: function () {
      this.br = Array(2);
      this.LC = Array(2);
      var a;
      for (a = 0; 2 > a; a++) (this.br[a] = null), (this.LC[a] = 0);
      a = new Xb();
      a.handle = 0;
      this.pN(a);
      a = new Xb();
      a.handle = 1;
      this.pN(a);
    },
    pN: function (a) {
      var b = a.gC();
      null != b && ((this.br[a.handle] = a), (this.LC[a.handle] = b.$w()));
    },
    gC: function (a) {
      a -= pb.hl;
      var b = null;
      a < this.br.length && null != this.br[a] && (b = this.br[a].gC());
      return b;
    },
    $w: function (a) {
      a -= pb.hl;
      return a < this.br.length ? this.LC[a] : 0;
    },
  };
  Xb.prototype = {
    gC: function () {
      switch (this.handle) {
        case 0:
          return new p();
        case 1:
          return new z();
      }
      return null;
    },
  };
  Oa.CF = 1;
  Oa.PM = 2;
  Oa.prototype = {
    Da: function (a) {
      this.o = a;
      this.C = a.c;
    },
    $w: function () {
      return 0;
    },
    cH: function () {
      return !1;
    },
    PB: function () {
      return Oa.PM;
    },
    MO: function () {},
    gH: function () {},
    qO: function () {},
    x4: function () {},
    k1: function () {},
    Aw: function () {
      return !1;
    },
    action: function () {},
    Rw: function () {
      return null;
    },
    KP: function () {
      return null;
    },
    nT: function () {},
    Ho: function () {},
    xt: function () {},
  };
  Fe.prototype = {
    evaluate: function (a) {
      var b = a.s.Xo(this.jd);
      if (null == b) a.Kb[a.$a] = 0;
      else {
        var c = (this.code >> 16) - Y.wi;
        a.dH = this;
        a.Kb[a.$a] = b.Rw(c);
      }
    },
  };
  Ge.prototype = {
    Qb: function (a) {
      var b = a.s.If(this);
      if (null != b) {
        var c = (this.Ga >>> 16) - Y.wi;
        a.dH = this;
        b.action(c, this);
      }
    },
    ed: function (a, b) {
      return a.s.u2(this.L[b].jd, this);
    },
    HP: function (a, b) {
      var c = new xb();
      this.L[b].mD(a, 0, c) && (c.vP = !0);
      return c;
    },
    La: function (a, b) {
      return a.fd(this.L[b]);
    },
    ag: function (a, b) {
      return a.jn(this.L[b]);
    },
    GP: function (a, b) {
      return a.hn(this.L[b]);
    },
    IP: function (a, b) {
      return 2 == this.L[b].code ? this.L[b].Lg : a.fd(this.L[b]);
    },
  };
  He.prototype = {
    pd: function (a, b) {
      if (null == b) return this.mb(a);
      b.wa |= aa.UE;
      var c = -(this.Ga >> 16) - Y.wi - 1;
      a.dH = this;
      return b.Aw(c, this) ? (a.s.Qw(b), !0) : !1;
    },
    mb: function (a) {
      var b = a.s.fn(this.hc),
        c = a.s.Zf,
        d = -(this.Ga >> 16) - Y.wi - 1;
      for (a.dH = this; null != b; )
        (b.wa &= ~aa.UE),
          b.Aw(d, this)
            ? 0 != (this.yh & oa.ws) && (c--, a.s.Vg())
            : 0 == (this.yh & oa.ws) && (c--, a.s.Vg()),
          (b = a.s.ul());
      return 0 != c ? !0 : !1;
    },
    ed: function (a, b) {
      return this.L[b];
    },
    IP: function (a, b) {
      return 2 == this.L[b].code ? this.L[b].Lg : a.fd(this.L[b]);
    },
    HP: function (a, b) {
      var c = new xb();
      this.L[b].mD(a, 0, c) && (c.vP = !0);
      return c;
    },
    La: function (a, b) {
      return a.fd(this.L[b]);
    },
    ag: function (a, b) {
      return a.jn(this.L[b]);
    },
    zw: function (a, b, c) {
      a = this.L[b];
      return t.Rq(c, a.Lg, a.ol);
    },
  };
  (function () {
    this.element = null;
    this.hO = !1;
  }).prototype = u.extend(new Oa(), {
    xt: function () {
      this.setPosition(this.o.w, this.o.A);
    },
    Ho: function () {
      this.setPosition(this.o.w, this.o.A);
      this.Sy(this.o.ea, this.o.ga);
    },
    Dca: function (a, b) {
      this.element = a;
      a.style.position = "absolute";
      this.Sy(this.o.ea, this.o.ga);
      this.setPosition(this.o.w, this.o.A);
      this.AH && this.ls(this.AH);
      this.IG = this.o.lb = b;
      this.C.m.Dl
        ? ((a.style.visibility = "hidden"), (this.IG = !1))
        : (a.style.visibility = b ? "visible" : "hidden");
      this.C.m.YG.appendChild(a);
    },
    OP: function () {
      return this.C.m.canvas ? this.C.m.canvas.offsetLeft : 0;
    },
    PP: function () {
      return this.C.m.canvas ? this.C.m.canvas.offsetTop : 0;
    },
    VD: function (a) {
      this.yO = a;
      this.o.VD(a);
      this.element &&
        (this.element.style.left =
          this.OP() +
          this.C.m.Up +
          (this.o.w - this.o.c.za) * this.C.m.Fe +
          "px");
    },
    WD: function (a) {
      this.zO = a;
      this.o.WD(a);
      this.element &&
        (this.element.style.top =
          this.PP() +
          this.C.m.Vp +
          (this.o.A - this.o.c.Ea) * this.C.m.Ge +
          "px");
    },
    setPosition: function (a, b) {
      this.yO = a;
      this.zO = b;
      this.o.setPosition(a, b);
      this.element &&
        ((this.element.style.left =
          this.OP() +
          this.C.m.Up +
          (this.o.w - this.o.c.za) * this.C.m.Fe +
          "px"),
        (this.element.style.top =
          this.PP() +
          this.C.m.Vp +
          (this.o.A - this.o.c.Ea) * this.C.m.Ge +
          "px"));
    },
    Ty: function (a) {
      this.xO = a;
      this.o.Ty(a);
      this.element &&
        (this.element.style.width = this.o.ea * this.C.m.Fe + "px");
    },
    Ry: function (a) {
      this.wO = a;
      this.o.Ry(a);
      this.element &&
        !this.hO &&
        (this.element.style.height = this.o.ga * this.C.m.Ge + "px");
    },
    Sy: function (a, b) {
      this.xO = a;
      this.wO = b;
      this.o.Sy(a, b);
      this.element &&
        ((this.element.style.width = this.o.ea * this.C.m.Fe + "px"),
        this.hO ||
          (this.element.style.height = this.o.ga * this.C.m.Ge + "px"));
    },
    ls: function (a) {
      this.AH = a;
      this.element && (this.element.style.font = a.uk());
    },
    gH: function () {
      this.element && this.C.m.YG.removeChild(this.element);
    },
    KP: function () {
      return this.AH;
    },
    nT: function (a) {
      this.ls(a);
    },
    PB: function () {
      this.C.m.Dl ||
        this.o.lb == this.IG ||
        ((this.IG = this.o.lb),
        this.element &&
          (this.element.style.visibility = this.o.lb ? "visible" : "hidden"));
      (this.o.w == this.yO && this.o.A == this.zO) ||
        this.setPosition(this.o.w, this.o.A);
      (this.o.ea == this.xO && this.o.ga == this.wO) ||
        this.Sy(this.o.ea, this.o.ga);
      return 0;
    },
  });
  ia.hZ = 0;
  ia.uF = 1;
  ia.gZ = 2;
  ia.j9 = 3;
  ia.i9 = 4;
  ia.iZ = 5;
  ia.iA = 9;
  ia.fZ = 11;
  ia.h9 = 12;
  ia.eZ = 13;
  ia.Ai = 14;
  ia.prototype = {
    setData: function (a, b, c, d, e) {
      this.Ux = a;
      this.Jr = b;
      this.IR = c;
      this.HR = d;
      this.JC = e;
    },
  };
  Ie.prototype = {
    load: function (a) {
      var b = a.Oa;
      this.Zt = a.v();
      this.vf = Array(this.Zt);
      var c;
      for (c = 0; c < this.Zt; c++) {
        a.seek(b + 4 + 16 * c);
        var d = a.v(),
          e = a.v(),
          f = a.v(),
          g = a.v();
        a.seek(b + f);
        var f = a.B(),
          k = a.B(),
          S = a.Uc(),
          n = a.Uc();
        a.Qa(2);
        var m = a.v();
        switch (k) {
          case 0:
            this.vf[c] = new Qe();
            break;
          case 1:
            this.vf[c] = new Le();
            break;
          case 2:
            this.vf[c] = new Pe();
            break;
          case 3:
            this.vf[c] = new Ke();
            break;
          case 4:
            this.vf[c] = new Je();
            break;
          case 5:
            this.vf[c] = new Me();
            break;
          case 9:
            this.vf[c] = new Oe();
            break;
          case 14:
            this.vf[c] = new Re();
        }
        this.vf[c].setData(k, f, S, m, n);
        this.vf[c].load(a, g - 12);
        14 == k &&
          (a.seek(b + d),
          (d = a.Nd()),
          (d = d.substring(0, d.length - 4)),
          (d = d.toLowerCase()),
          this.vf[c].a6(d, e));
      }
    },
  };
  Je.prototype = u.extend(new ia(), {
    load: function (a) {
      this.Nx = a.B();
      this.$Q = a.B();
      this.ZQ = a.B();
      this.bR = a.B();
      this.aR = a.B();
    },
  });
  Ke.prototype = u.extend(new ia(), {
    load: function (a) {
      this.iR = a.B();
      this.fR = a.B();
      this.gR = a.B();
      a.B();
      this.hR = a.v();
    },
  });
  Le.prototype = u.extend(new ia(), {
    load: function (a) {
      this.jR = a.xa();
      this.lR = a.xa();
      this.kR = a.xa();
      this.mR = a.xa();
      a.B();
    },
  });
  Me.prototype = u.extend(new ia(), {
    load: function (a) {
      this.Wt = a.B();
      this.CR = a.B();
      this.BR = a.B();
      this.bJ = a.Uc();
      this.ER = a.Uc();
      this.GR = a.Uc();
      a.Qa(1);
      this.vc = Array(this.Wt);
      var b, c, d;
      for (b = 0; b < this.Wt; b++)
        (d = a.Oa),
          (this.vc[b] = new Ne()),
          a.Vb(),
          (c = a.Vb()),
          this.vc[b].load(a),
          a.seek(d + c);
    },
  });
  Ne.prototype = {
    load: function (a) {
      this.eR = a.Uc();
      this.SI = a.Uc();
      this.TI = a.xa();
      this.UI = a.xa();
      this.RI = a.xa();
      this.WI = a.xa();
      this.dR = a.B();
      this.VI = a.B();
      a = a.Nd();
      0 < a.length && (this.ji = a);
    },
  };
  Oe.prototype = u.extend(new ia(), {
    load: function (a) {
      this.vR = a.B();
      this.qR = a.B();
      this.rR = a.B();
      this.uR = a.B();
      this.sR = a.B();
      this.tR = a.B();
    },
  });
  Pe.prototype = u.extend(new ia(), {
    load: function (a) {
      this.zR = a.B();
      this.$I = a.B();
      this.aJ = a.B();
      this.yR = a.B();
      a.B();
      this.wR = a.B();
      this.xR = a.B();
    },
  });
  Qe.prototype = u.extend(new ia(), { load: function () {} });
  Re.prototype = u.extend(new ia(), {
    load: function (a) {
      a.Qa(14);
      this.data = a.Oa;
    },
    a6: function (a) {
      this.Hk = a;
      if (
        u.he(this.Hk, "box2d8directions") ||
        u.he(this.Hk, "box2dspring") ||
        u.he(this.Hk, "box2dspaceship") ||
        u.he(this.Hk, "box2dstatic") ||
        u.he(this.Hk, "box2dracecar") ||
        u.he(this.Hk, "box2daxial") ||
        u.he(this.Hk, "box2dplatform") ||
        u.he(this.Hk, "box2dbouncingball") ||
        u.he(this.Hk, "box2dbackground")
      )
        this.Ht = !0;
    },
  });
  ca.aq = [
    256, 251, 236, 212, 181, 142, 97, 49, 0, -49, -97, -142, -181, -212, -236,
    -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181,
    212, 236, 251,
  ];
  ca.wq = [
    0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181,
    -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251, 256, 251, 236, 212, 181,
    142, 97, 49,
  ];
  ca.l0 = [
    2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 48, 56, 64, 72, 80, 88, 96, 104, 112,
    120, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 320, 336, 352, 368,
    384, 400, 416, 432, 448, 480, 512, 544, 560, 592, 624, 640, 672, 688, 720,
    736, 768, 784, 816, 848, 864, 896, 928, 944, 976, 992, 1024, 1120, 1216,
    1312, 1440, 1536, 1632, 1728, 1824, 1952, 2048, 2240, 2432, 2688, 2880,
    3072, 3264, 3456, 3712, 3904, 4096, 6544, 4914, 5216, 5732, 6144, 6553,
    6962, 7366, 7780, 8192, 9836, 11672, 13316, 14960, 16604, 18248, 19892,
    21504, 25600, 25600,
  ];
  ca.PY = [-1, 8, 24, -1, 16, 12, 20, 16, 0, 4, 28, 0, -1, 8, 24, -1];
  ca.ts = [
    2599, 0, 844, 31, 479, 30, 312, 29, 210, 28, 137, 27, 78, 26, 25, 25, 0, 24,
  ];
  ca.wj = [
    0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, -4, 0, -8, 0, 0, 0, -2, -2, 2, 2, -4,
    -4, 4, 4, -8, -8, 8, 8, -4, 4, -8, 8, 0, 0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0,
    8, 0, 0, 4, 0, 8, 0, 0, -2, 2, 2, -2, -4, 4, 4, -4, -8, 8, 8, -8, 4, 4, 8,
    8, 0, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 4, 0, 8, 0, 0, 0, 2, 2, -2,
    -2, 4, 4, -4, -4, 8, 8, -8, -8, 4, -4, 8, -8, 0, 0, 2, 0, -2, 0, 4, 0, -4,
    0, 8, 0, -8, 0, 0, -4, 0, -8, 0, 0, 2, -2, -2, 2, 4, -4, -4, 4, 8, -8, -8,
    8, -4, -4, -8, -8, 0, 0,
  ];
  ca.Dv = 1;
  ca.h2 = function (a, b) {
    return (a * ca.aq[b]) / 256;
  };
  ca.i2 = function (a, b) {
    return (a * ca.wq[b]) / 256;
  };
  ca.prototype = {
    op: function (a, b) {
      this.a.c.Re++;
      this.Ig = this.a.c.Re;
      this.a.H.va = !1;
      if (0 == a) return this.a.c.Pi(this.a), !1;
      var c, d, e;
      for (
        e =
          0 != (this.a.c.O.xd & V.Ue)
            ? Math.floor(a * this.a.c.pe * 32)
            : a << 5;
        2048 < e;

      ) {
        c = 65536 * this.a.w + (this.a.yl & 65535);
        d = 65536 * this.a.A + (this.a.zl & 65535);
        c += 2048 * ca.aq[b];
        d += 2048 * ca.wq[b];
        this.a.yl = c & 65535;
        this.a.w = Math.floor(c / 65536);
        this.a.zl = d & 65535;
        this.a.A = Math.floor(d / 65536);
        if (this.a.c.Pi(this.a)) return !0;
        if (this.a.H.va) break;
        e -= 2048;
      }
      if (
        !this.a.H.va &&
        ((c = 65536 * this.a.w + (this.a.yl & 65535)),
        (d = 65536 * this.a.A + (this.a.zl & 65535)),
        (c += ca.aq[b] * e),
        (d += ca.wq[b] * e),
        (this.a.yl = c & 65535),
        (this.a.w = Math.floor(c / 65536)),
        (this.a.zl = d & 65535),
        (this.a.A = Math.floor(d / 65536)),
        this.a.c.Pi(this.a))
      )
        return !0;
      this.a.b.ka = !0;
      this.a.H.va || (this.a.c.gs = 0);
      return this.a.H.va;
    },
    Tx: function (a) {
      0 == a.IR && this.stop();
    },
    Wo: function (a) {
      return 100 >= a ? ca.l0[a] : a << 8;
    },
    Vx: function (a) {
      if (a) this.cR(!1);
      else
        switch (this.a.c.s.FD & 4294901760) {
          case -786432:
            a = this.a.w - this.a.ab;
            var b = this.a.A - this.a.bb,
              c = this.a.c.Wr(a, b, a + this.a.ea, b + this.a.ga);
            a = this.a.w;
            b = this.a.A;
            0 != (c & t.Vj) && (a = this.a.ab);
            0 != (c & t.Wj) && (a = this.a.c.Se - this.a.ea + this.a.ab);
            0 != (c & t.Xj) && (b = this.a.bb);
            0 != (c & t.Uj) && (b = this.a.c.Te - this.a.ga + this.a.bb);
            this.a.w = a;
            this.a.A = b;
            break;
          case -851968:
          case -917504:
            a = 18 * (this.a.c.Fd(this.a) >> 2);
            do {
              if (this.zm(this.a.w + ca.wj[a], this.a.A + ca.wj[a + 1], !1)) {
                this.a.w += ca.wj[a];
                this.a.A += ca.wj[a + 1];
                return;
              }
              a += 2;
            } while (0 != ca.wj[a] || 0 != ca.wj[a + 1]);
            this.a.w = this.a.b.Sn;
            this.a.A = this.a.b.Tn;
            this.a.b.Jb = this.a.b.lD;
            this.a.b.uc = this.a.b.kD;
        }
    },
    cR: function (a) {
      switch (this.a.c.s.FD & 4294901760) {
        case -786432:
          a = this.a.w - this.a.ab;
          var b = this.a.A - this.a.bb,
            c = this.a.c.Wr(a, b, a + this.a.ea, b + this.a.ga);
          a = this.a.w;
          b = this.a.A;
          0 != (c & t.Vj) && (a = this.a.ab);
          0 != (c & t.Wj) && (a = this.a.c.Se - this.a.ea + this.a.ab);
          0 != (c & t.Xj) && (b = this.a.bb);
          0 != (c & t.Uj) && (b = this.a.c.Te - this.a.ga + this.a.bb);
          this.a.w = a;
          this.a.A = b;
          break;
        case -851968:
        case -917504:
          if (
            ((b = new X()),
            this.a4(this.a.w, this.a.A, this.a.b.Sn, this.a.b.Tn, a, b))
          )
            (this.a.w = b.x), (this.a.A = b.y);
          else {
            b = 18 * (this.a.c.Fd(this.a) >> 2);
            do {
              if (this.zm(this.a.w + ca.wj[b], this.a.A + ca.wj[b + 1], a)) {
                this.a.w += ca.wj[b];
                this.a.A += ca.wj[b + 1];
                return;
              }
              b += 2;
            } while (0 != ca.wj[b] || 0 != ca.wj[b + 1]);
            0 == a &&
              ((this.a.w = this.a.b.Sn),
              (this.a.A = this.a.b.Tn),
              (this.a.b.Jb = this.a.b.lD),
              (this.a.b.uc = this.a.b.kD));
          }
      }
    },
    Tp: function (a, b, c, d, e) {
      var f;
      f = -1;
      e && (f = this.a.Bc);
      e = this.a.vd;
      if (0 != (e.eh & 15)) {
        var g = a - this.a.ab,
          k = b - this.a.bb;
        if (0 != (this.a.c.Wr(g, k, g + this.a.ea, k + this.a.ga) & e.eh))
          return !1;
      }
      if (
        0 != (e.eh & 16) &&
        this.a.c.xw(
          this.a,
          this.a.b.Jb,
          this.a.b.uc,
          this.a.b.Sc,
          this.a.b.Tc,
          a,
          b,
          c,
          d,
        )
      )
        return !1;
      if (-1 == e.hu) return !0;
      a = this.a.c.du(
        this.a,
        this.a.b.Jb,
        this.a.b.uc,
        this.a.b.Sc,
        this.a.b.Tc,
        a,
        b,
        e.up,
      );
      if (null == a) return !0;
      b = this.a.c.s.mr;
      for (c = 0; c < a.size(); c++)
        if (((d = a.get(c).Bc), d != f))
          for (g = e.hu; 0 <= b[g]; g++) if (b[g] == d) return !1;
      return !0;
    },
    zm: function (a, b, c) {
      var d;
      d = -1;
      c && (d = this.a.Bc);
      c = this.a.vd;
      if (0 != (c.eh & 15)) {
        var e = a - this.a.ab,
          f = b - this.a.bb;
        if (0 != (this.a.c.Wr(e, f, e + this.a.ea, f + this.a.ga) & c.eh))
          return !1;
      }
      if (
        0 != (c.eh & 16) &&
        this.a.c.xw(
          this.a,
          this.a.b.Jb,
          this.a.b.uc,
          this.a.b.Sc,
          this.a.b.Tc,
          a,
          b,
          0,
          V.jh,
        )
      )
        return !1;
      if (-1 == c.hu) return !0;
      a = this.a.c.du(
        this.a,
        this.a.b.Jb,
        this.a.b.uc,
        this.a.b.Sc,
        this.a.b.Tc,
        a,
        b,
        c.up,
      );
      if (null == a) return !0;
      b = this.a.c.s.mr;
      for (e = 0; e < a.size(); e++)
        if (((f = a.get(e).Bc), f != d)) {
          var g;
          for (g = c.hu; 0 <= b[g]; g++) if (b[g] == f) return !1;
        }
      return !0;
    },
    np: function (a, b, c, d, e, f, g) {
      var k = u.Hf((a + c) / 2),
        h = u.Hf((b + d) / 2),
        n,
        m;
      do
        if (this.Tp(k + this.a.c.za, h + this.a.c.Ea, e, f, !1)) {
          if (
            ((c = k),
            (d = h),
            (n = k),
            (m = h),
            (k = u.Hf((c + a) / 2)),
            (h = u.Hf((d + b) / 2)),
            k == n && h == m)
          )
            return (
              (c == a && d == b) ||
                !this.Tp(a + this.a.c.za, b + this.a.c.Ea, e, f, !1) ||
                ((k = a), (h = b)),
              (g.x = k),
              (g.y = h),
              !0
            );
        } else if (
          ((a = k),
          (b = h),
          (n = k),
          (m = h),
          (k = u.Hf((c + a) / 2)),
          (h = u.Hf((d + b) / 2)),
          k == n && h == m)
        ) {
          if (
            (c != a || d != b) &&
            this.Tp(c + this.a.c.za, d + this.a.c.Ea, e, f, !1)
          )
            return (g.x = c), (g.y = d), !0;
          g.x = k;
          g.y = h;
          return !1;
        }
      while (1);
    },
    a4: function (a, b, c, d, e, f) {
      var g = u.Hf((a + c) / 2),
        k = u.Hf((b + d) / 2),
        S,
        n;
      do
        if (this.zm(g, k, e)) {
          if (
            ((c = g),
            (d = k),
            (S = g),
            (n = k),
            (g = u.Hf((c + a) / 2)),
            (k = u.Hf((d + b) / 2)),
            g == S && k == n)
          )
            return (
              (c == a && d == b) || !this.zm(a, b, e) || ((g = a), (k = b)),
              (f.x = g),
              (f.y = k),
              !0
            );
        } else if (
          ((a = g),
          (b = k),
          (S = g),
          (n = k),
          (g = u.Hf((c + a) / 2)),
          (k = u.Hf((d + b) / 2)),
          g == S && k == n)
        ) {
          if ((c != a || d != b) && this.zm(c, d, e))
            return (f.x = c), (f.y = d), !0;
          f.x = g;
          f.y = k;
          return !1;
        }
      while (1);
    },
    Qy: function (a) {
      this.Lu = a;
      this.Kh = this.Wo(a);
      this.a.b.sd == ia.Ai && this.oe.Qy(a);
    },
    Qu: function (a) {
      this.a.b.sd == ia.gZ &&
        (250 < a && (a = 250), 0 > a && (a = 0), this.Qu(a));
      this.a.b.sd == ia.Ai && this.oe.Qu(a);
    },
    Np: function (a) {
      this.a.b.sd == ia.iA &&
        (250 < a && (a = 250), 0 > a && (a = 0), this.Np(a));
      this.a.b.sd == ia.Ai && this.oe.Np(a);
    },
    ax: function () {
      return this.a.b.sd == ia.Ai ? this.oe.ax() : this.a.b.sa;
    },
    Fd: function () {
      return this.a.b.sd == ia.Ai && this.oe.Fd ? this.oe.Fd() : this.a.b.Pa;
    },
    Yw: function () {
      return this.a.b.sd == ia.iA
        ? this.Yba.$z
        : this.a.b.sd == ia.Ai
          ? this.oe.Yw()
          : 0;
    },
    gd: function () {},
    start: function () {},
  };
  Qa.k5 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 30, 31, 0, 1, 4, 3, 2, 1, 0, 31,
    30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 24, 25, 26, 27, 27, 28, 28, 28,
    28, 29, 29, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 16, 17, 18,
    19, 19, 20, 20, 20, 20, 21, 21, 22, 23, 24, 25, 28, 27, 26, 25, 0, 31, 30,
    29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 20, 21, 22, 22, 23,
    24, 24, 24, 24, 25, 26, 27, 28, 29, 30, 8, 7, 6, 5, 4, 8, 9, 10, 11, 11, 12,
    12, 12, 12, 13, 13, 14, 15, 16, 17, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11,
    10, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 16, 15, 14, 13, 12, 11, 10,
    9, 8, 12, 13, 14, 15, 15, 16, 16, 16, 16, 17, 17, 18, 19, 20, 21, 24, 23,
    22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20,
    19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17,
    3, 3, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    0, 31, 30, 29, 28, 0, 1, 2, 0, 0, 1, 1, 2, 3, 4, 5, 8, 7, 6, 5, 4, 3, 2, 1,
    0, 31, 30, 29, 28, 27, 26, 25, 24, 28, 29, 30, 31, 31, 0, 0, 0, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 26, 25, 24, 25, 26, 27,
    28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 25, 25, 24, 25, 26, 27, 28, 29, 30,
    31, 0, 4, 5, 6, 7, 7, 8, 8, 8, 8, 9, 9, 10, 11, 12, 13, 16, 15, 14, 13, 12,
    11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3,
    2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 16, 15, 14, 13, 12,
    11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13, 12, 11, 10, 9, 8,
    9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  Qa.kZ = [4294967292, 4294967294, 4294967295];
  Qa.CZ = [-4, 4, -2, 2, -1, 1];
  Qa.DZ = [-4, 4, -4, 4, -4, 4];
  Qa.prototype = u.extend(new ca(), {
    Da: function (a, b) {
      this.a = a;
      this.a.yl = 0;
      this.a.zl = 0;
      this.a.b.sa = b.Nx;
      this.a.b.Kc = b.Nx;
      this.a.b.Rn = b.Nx;
      this.Fs = b.Nx << 8;
      var c = b.aR;
      0 != c && ((c = this.Wo(c)), (this.a.b.Rn = 0));
      this.Kh = c;
      this.mM = b.$Q;
      this.Rz = b.ZQ;
      this.Sz = Qa.kZ[this.Rz];
      this.ro = !1;
      this.hF = -1;
      this.Es = this.Tz = (100 - b.bR) / 8;
      this.Tx(b);
      this.a.b.ka = !0;
    },
    move: function () {
      this.a.H.Ip = !1;
      this.a.c.gs = 1;
      this.a.b.Ih = O.He;
      null != this.a.Wa && this.a.Wa.Di();
      if (0 != this.Kh) {
        var a = this.Fs;
        if (0 < a) {
          var b = this.Kh;
          0 != (this.a.c.O.xd & V.Ue) && (b *= this.a.c.pe);
          a -= b;
          0 > a && (a = 0);
          this.Fs = a;
          this.a.b.sa = a >> 8;
        }
      }
      this.op(this.a.b.sa, this.a.c.Fd(this.a));
    },
    stop: function () {
      0 == this.Od &&
        ((this.Od = this.a.b.sa | 32768),
        (this.Fs = this.a.b.sa = 0),
        (this.a.H.va = !0));
    },
    start: function () {
      var a = this.Od;
      0 != a &&
        ((a &= 32767),
        (this.a.b.sa = a),
        (this.Fs = a << 8),
        (this.Od = 0),
        (this.a.H.va = !0));
    },
    dj: function () {
      if (0 == this.Od && this.a.c.Ee != this.hF) {
        this.hF = this.a.c.Ee;
        this.Ig == this.a.c.Re && this.cR(this.ro);
        var a = this.a.w,
          b = this.a.A,
          c = 0,
          a = a - 8,
          b = b - 8;
        0 == this.zm(a, b, this.ro) && (c |= 1);
        a += 16;
        0 == this.zm(a, b, this.ro) && (c |= 2);
        b += 16;
        0 == this.zm(a, b, this.ro) && (c |= 4);
        0 == this.zm(a - 16, b, this.ro) && (c |= 8);
        a = Qa.k5[32 * c + this.a.c.Fd(this.a)];
        a &= this.Sz;
        if (!this.Wx(a)) {
          var c = (b = Qa.DZ[2 * this.Rz + 1]),
            d = !1;
          do {
            a -= b;
            a &= 31;
            if (this.Wx(a)) {
              d = !0;
              break;
            }
            a += 2 * b;
            a &= 31;
            if (this.Wx(a)) {
              d = !0;
              break;
            }
            a -= b;
            a &= 31;
            b += c;
          } while (16 >= b);
          if (0 == d) {
            this.ro = !0;
            this.a.b.Pa = this.a.c.random(32) & this.Sz;
            this.a.H.Ip = !0;
            this.a.H.va = !0;
            return;
          }
        }
        this.ro = !1;
        this.a.b.Pa = a;
        a = this.a.c.random(100);
        if (
          a < this.mM &&
          ((a >>= 2), 25 > a && ((a = (a - 12) & 31 & this.Sz), this.Wx(a)))
        ) {
          this.a.b.Pa = a;
          this.a.H.Ip = !0;
          this.a.H.va = !0;
          return;
        }
        a = this.a.c.Fd(this.a) & 7;
        12 != this.Es &&
          (0 == a
            ? (this.Es--,
              0 > this.Es &&
                ((a =
                  this.a.c.Fd(this.a) +
                  Qa.CZ[this.a.c.random(2) + 2 * this.Rz]),
                (a &= 31),
                this.Wx(a) && ((this.a.b.Pa = a), (this.Es = this.Tz))))
            : (this.Es = this.Tz));
        this.a.H.Ip = !0;
        this.a.H.va = !0;
      }
    },
    Wx: function (a) {
      var b = 2048 * ca.aq[a] + (65536 * this.a.w + (this.a.yl & 65535));
      a = 2048 * ca.wq[a] + (65536 * this.a.A + (this.a.zl & 65535));
      b = Math.floor(b / 65536);
      a = Math.floor(a / 65536);
      return this.zm(b, a, !1);
    },
    Lh: function () {},
    ih: function (a) {
      0 > a && (a = 0);
      250 < a && (a = 250);
      this.a.b.sa = a;
      this.Fs = a << 8;
      this.Od = 0;
      this.a.H.va = !0;
    },
    Yk: function (a) {
      this.ih(a);
    },
    reverse: function () {
      0 == this.Od &&
        ((this.a.H.va = !0), (this.a.b.Pa += 16), (this.a.b.Pa &= 31));
    },
    Cd: function (a) {
      this.a.w != a &&
        ((this.a.w = a),
        (this.a.H.va = !0),
        (this.a.b.ka = !0),
        (this.a.b.jc = !0));
    },
    Dd: function (a) {
      this.a.A != a &&
        ((this.a.A = a),
        (this.a.H.va = !0),
        (this.a.b.ka = !0),
        (this.a.b.jc = !0));
    },
  });
  Se.prototype = u.extend(new ca(), {
    Da: function (a) {
      this.a = a;
      this.F = a.c;
      this.F.As();
      null != this.a.Z && this.a.Z.QD(!1);
      null != this.a.Z && ((this.a.Z.Ha &= ~R.Pm), this.a.Z.MC());
      this.Uz = !0;
      this.a.yl = 0;
      this.a.zl = 0;
      null != this.a.Wa && this.a.Wa.ZP(O.He);
      this.a.b.sa = 0;
      this.a.b.jc = !0;
      this.a.b.ka = !0;
    },
    VH: function (a) {
      this.a.b.Kc = this.a.b.sa;
      this.a.b.Rn = this.a.b.sa;
      this.Gs = a;
      null != a && (a.wa |= aa.bM);
    },
    gd: function () {
      this.c2(this.a);
    },
    move: function () {
      if (this.Uz) {
        if (null != this.Gs.Wa && this.Gs.Wa.xy == O.XK) return;
        this.AT();
      }
      null != this.a.Wa && this.a.Wa.Di();
      this.op(this.a.b.sa, this.a.c.Fd(this.a));
      if (
        -64 > this.a.w ||
        this.a.w > this.a.c.Se + 64 ||
        -64 > this.a.A ||
        this.a.A > this.a.c.Te + 64
      )
        (this.a.ex = !1), this.a.c.rl(this.a.Nc);
      this.a.b.jc && ((this.a.b.jc = !1), this.a.c.Pi(this.a));
    },
    AT: function () {
      null != this.a.Z && this.a.Z.QD(!0);
      null != this.a.Z && ((this.a.Z.Ha |= R.Pm), this.a.Z.eJ());
      if (null != this.F.Wn) {
        var a = this.F.fc(this.Gs);
        if (null != a) {
          var b = this.F.Wn,
            c = new H();
          this.iF = c;
          c.ak(this.a, H.Ph);
          c.sC = b.identifier;
          this.Av = b.W4(a.Nt, (this.a.b.sa / 250) * 50, c);
          c.N = this.Av;
          null == this.Av && (this.iF = null);
        }
      }
      this.Uz = !1;
      this.Gs = null;
    },
    c2: function () {
      null != this.Av &&
        ((pBase = this.a.c.Wn), pBase.uy(this.Av), (this.Av = null));
      null != this.iF && (this.iF = null);
    },
    Cd: function (a) {
      this.a.w != a &&
        ((this.a.w = a),
        (this.a.H.va = !0),
        (this.a.b.ka = !0),
        (this.a.b.jc = !0));
    },
    Dd: function (a) {
      this.a.A != a &&
        ((this.a.A = a),
        (this.a.H.va = !0),
        (this.a.b.ka = !0),
        (this.a.b.jc = !0));
    },
    Lh: function () {},
    reverse: function () {},
    stop: function () {},
    start: function () {},
    dj: function () {},
    ih: function () {},
    Yk: function () {},
  });
  Te.prototype = u.extend(new ca(), {
    Da: function (a) {
      this.a = a;
    },
    move: function () {
      0 == (this.a.wa & aa.oo) &&
        null != this.a.Wa &&
        (this.a.Wa.Di(), this.a.Wa.jm != O.Wp + 1 && this.a.c.rl(this.a.Nc));
    },
    Cd: function (a) {
      this.a.w != a && ((this.a.w = a), (this.a.H.va = !0), (this.a.b.ka = !0));
    },
    Dd: function (a) {
      this.a.A != a && ((this.a.A = a), (this.a.H.va = !0), (this.a.b.ka = !0));
    },
    Lh: function () {},
    reverse: function () {},
    stop: function () {},
    start: function () {},
    dj: function () {},
    ih: function () {},
    Yk: function () {},
  });
  Ue.prototype = u.extend(new ca(), {
    Da: function (a, b) {
      this.a = a;
      this.a.yl = 0;
      this.jl = this.a.zl = 0;
      this.Hm = this.a.b.sa = 0;
      this.jF = -1;
      this.a.b.Un = b.Jr;
      this.Gy = b.fR;
      this.qm = this.Wo(this.Gy);
      this.Lu = b.gR;
      this.Kh = this.Wo(this.Lu);
      this.a.b.Kc = b.iR;
      this.a.b.Rn = 0;
      this.kF = b.hR;
      this.Jp = b.JC;
      this.a.b.ka = !0;
    },
    move: function () {
      var a, b, c, d;
      this.a.c.gs = 1;
      a = this.a.c.Fd(this.a);
      this.a.b.YJ = a;
      if (0 == this.Hm) {
        this.a.H.Ip = !1;
        b = 0;
        c = this.a.c.xf[this.a.b.Un - 1] & 15;
        0 != c &&
          ((d = ca.PY[c]),
          -1 != d && 0 != ((1 << d) & this.kF) && ((b = 1), (a = d)));
        c = this.jl;
        0 == b
          ? 0 != c &&
            ((b = this.Kh),
            0 != (this.a.c.O.xd & V.Ue) && (b *= this.a.c.pe),
            (c -= b),
            0 >= c && (c = 0))
          : c >> 8 < this.a.b.Kc &&
            ((b = this.qm),
            0 != (this.a.c.O.xd & V.Ue) && (b *= this.a.c.pe),
            (c += b),
            c >> 8 > this.a.b.Kc && (c = this.a.b.Kc << 8));
        this.jl = c;
        this.a.b.sa = c >> 8;
        this.a.b.Pa = a;
        this.a.b.Ih = O.He;
        null != this.a.Wa && this.a.Wa.Di();
        if (0 == this.op(this.a.b.sa, this.a.c.Fd(this.a))) return;
        if (0 == this.a.b.sa) {
          c = this.jl;
          if (0 == c || this.a.b.YJ == this.a.c.Fd(this.a)) return;
          this.a.b.sa = c >> 8;
          this.a.b.Pa = this.a.b.YJ;
          if (0 == this.op(this.a.b.sa, this.a.c.Fd(this.a))) return;
        }
      }
      for (; 0 != this.Hm && 0 != this.a.c.gs; )
        if (((c = this.jl), (c -= this.Kh), 0 < c)) {
          if (
            ((this.jl = c),
            (c >>= 8),
            (this.a.b.sa = c),
            (d = this.a.c.Fd(this.a)),
            0 != this.Hm && ((d += 16), (d &= 31)),
            0 == this.op(c, d))
          )
            break;
        } else {
          this.jl = 0;
          this.Hm = this.a.b.sa = 0;
          break;
        }
    },
    dj: function () {
      this.Ig == this.a.c.Re && this.Vx(0 != (this.Jp & ca.Dv));
      this.a.c.Ee != this.jF &&
        ((this.jF = this.a.c.Ee),
        this.Hm++,
        12 <= this.Hm ? this.stop() : ((this.a.H.Ip = !0), (this.a.H.va = !0)));
    },
    reverse: function () {},
    Lh: function () {},
    stop: function () {
      this.jl = this.Hm = this.a.b.sa = 0;
      this.a.H.va = !0;
      this.Ig == this.a.c.Re &&
        (this.Vx(0 != (this.Jp & ca.Dv)), (this.Hm = 0));
    },
    start: function () {
      this.a.H.va = !0;
      this.Od = 0;
    },
    Yk: function (a) {
      0 > a && (a = 0);
      250 < a && (a = 250);
      this.a.b.Kc = a;
      this.a.b.sa > a && ((this.a.b.sa = a), (this.jl = a << 8));
      this.a.H.va = !0;
    },
    ih: function (a) {
      0 > a && (a = 0);
      250 < a && (a = 250);
      a > this.a.b.Kc && (a = this.a.b.Kc);
      this.a.b.sa = a;
      this.jl = a << 8;
      this.a.H.va = !0;
    },
    Cd: function (a) {
      this.a.w != a &&
        ((this.a.w = a),
        (this.a.H.va = !0),
        (this.a.b.ka = !0),
        (this.a.b.jc = !0));
    },
    Dd: function (a) {
      this.a.A != a &&
        ((this.a.A = a),
        (this.a.H.va = !0),
        (this.a.b.ka = !0),
        (this.a.b.jc = !0));
    },
    Cca: function (a) {
      this.kF = a;
    },
  });
  Ve.prototype = u.extend(new ca(), {
    Da: function (a, b) {
      this.a = a;
      this.a.b.Un = b.Jr;
      this.lF = b.jR + this.a.w;
      this.mF = b.kR + this.a.A;
      this.nF = b.lR + this.a.w;
      this.oF = b.mR + this.a.A;
      this.Xz = this.Wz = this.a.b.sa = 0;
      this.a.b.Rn = 0;
      this.a.b.Kc = 100;
      this.Jp = b.JC;
      this.Tx(b);
      this.a.b.ka = !0;
      this.a.c.r4(this.a);
    },
    gd: function () {
      this.a.c.IO(this.a);
    },
    move: function () {
      var a = this.a.w,
        b = this.a.A,
        c,
        d,
        e,
        f;
      if (
        0 == this.Od &&
        0 != this.a.c.sD[this.a.b.Un - 1] &&
        ((a = this.a.c.vu),
        a < this.lF && (a = this.lF),
        a > this.nF && (a = this.nF),
        (b = this.a.c.wu),
        b < this.mF && (b = this.mF),
        b > this.oF && (b = this.oF),
        (c = a - this.a.w),
        (d = b - this.a.A),
        (e = 0),
        0 > c && ((c = -c), (e |= 1)),
        0 > d && ((d = -d), (e |= 2)),
        (f = (c + d) << 2),
        250 < f && (f = 250),
        (this.a.b.sa = f),
        0 != f)
      ) {
        0 == d && (d = 1);
        c = (c << 8) / d;
        for (d = 0; !(c >= ca.ts[d]); d += 2);
        c = ca.ts[d + 1];
        0 != (e & 2) && (c = (-c + 32) & 31);
        0 != (e & 1) && (c = ((-((c - 8) & 31) & 31) + 8) & 31);
        this.a.b.Pa = c;
      }
      0 != this.a.b.sa && ((this.Xz = 0), (this.Wz = this.a.b.sa));
      this.Xz++;
      10 < this.Xz && (this.Wz = 0);
      this.a.b.sa = this.Wz;
      null != this.a.Wa && this.a.Wa.Di();
      this.a.w = a;
      this.a.A = b;
      this.a.b.ka = !0;
      this.a.c.Re++;
      this.Ig = this.a.c.Re;
      this.a.c.Pi(this.a);
    },
    stop: function () {
      this.Ig == this.a.c.Re && this.Vx(0 != (this.Jp & ca.Dv));
      this.a.b.sa = 0;
    },
    start: function () {
      this.Od = 0;
      this.a.H.va = !0;
    },
    dj: function () {
      this.stop();
    },
    reverse: function () {},
    Lh: function () {},
    Cd: function (a) {
      this.a.w != a &&
        ((this.a.w = a),
        (this.a.H.va = !0),
        (this.a.b.ka = !0),
        (this.a.b.jc = !0));
    },
    Dd: function (a) {
      this.a.A != a &&
        ((this.a.A = a),
        (this.a.H.va = !0),
        (this.a.b.ka = !0),
        (this.a.b.jc = !0));
    },
  });
  We.prototype = u.extend(new ca(), {
    Da: function (a, b) {
      this.a = a;
      this.gA = this.a.w;
      this.hA = this.a.A;
      this.og = !1;
      this.Lm = 0;
      this.a.Ft = 0;
      this.Rb = b;
      this.a.b.Rn = b.CR;
      this.a.b.Kc = b.BR;
      this.Km = 0;
      this.Ks = null;
      this.Ir(0);
      this.Tx(b);
      this.a.b.sa = this.lf;
      this.a.b.ka = !0;
      0 == this.Rb.vc.length && this.stop();
    },
    move: function () {
      this.a.Ft = 0;
      this.a.b.Ih = O.He;
      null != this.a.Wa && this.a.Wa.Di();
      if (0 == this.lf) {
        var a = this.Lm;
        if (0 == a) {
          this.a.b.sa = 0;
          this.a.c.Pi(this.a);
          return;
        }
        a -= this.a.c.GD;
        if (0 < a) {
          this.Lm = a;
          this.a.b.sa = 0;
          this.a.c.Pi(this.a);
          return;
        }
        this.Lm = 0;
        this.lf = this.Od & 32767;
        this.Od = 0;
        this.a.b.sa = this.lf;
      }
      a = 0 != (this.a.c.O.xd & V.Ue) ? 256 * this.a.c.pe : 256;
      this.a.c.Xn = a;
      for (var b; ; ) {
        b = !1;
        this.a.c.Ey = a;
        a *= this.lf;
        a <<= 5;
        524288 >= a
          ? (this.a.c.pK = a)
          : ((a = 16384),
            (a /= this.lf),
            (this.a.c.Ey = a),
            (this.a.c.pK = 524288));
        for (;;) {
          this.eA = !1;
          if (1 == this.DR(this.a.c.pK) && 0 == this.eA) {
            b = !0;
            break;
          }
          if (this.a.c.Xn == this.a.c.Ey) {
            b = !0;
            break;
          }
          if (this.a.c.Xn > this.a.c.Ey) {
            this.a.c.Xn -= this.a.c.Ey;
            a = this.a.c.Xn;
            break;
          }
          a = this.a.c.Xn * MT_Speed;
          a <<= 5;
          this.DR(a);
          b = !0;
          break;
        }
        if (b) break;
      }
    },
    DR: function (a) {
      a += this.Km;
      var b = a >>> 16;
      if (b < this.fA)
        return (
          (this.Km = a),
          (a = (b * this.Cv) / 16384 + this.Nm),
          (this.a.w = (b * this.Bv) / 16384 + this.Mm),
          (this.a.A = a),
          (this.a.b.ka = !0),
          this.a.c.Pi(this.a),
          this.a.H.va
        );
      b -= this.fA;
      a = (b << 16) | (a & 65535);
      0 != this.lf && (a /= this.lf);
      this.a.c.Xn += (a >> 5) & 65535;
      this.a.w = this.mq;
      this.a.A = this.nq;
      this.a.b.ka = !0;
      this.a.c.Pi(this.a);
      if (this.a.H.va) return !0;
      this.a.Ft = this.a.c.Ee;
      this.a.Et = null;
      b = this.Qh;
      this.Km = 0;
      if (0 == this.og) {
        b++;
        if (b < this.Rb.Wt) {
          this.a.Et = this.Rb.vc[b].ji;
          if (
            null != this.Ks &&
            null != this.Rb.vc[b].ji &&
            u.he(this.Ks, this.Rb.vc[b].ji)
          )
            return (this.Qh = b), this.vj(), this.IC();
          this.Ir(b);
          this.vj();
          return this.a.H.va;
        }
        this.a.gx = this.a.c.Ee;
        this.Qh = b;
        if (this.og) return this.vj(), this.a.H.va;
        if (0 != this.Rb.GR)
          return (
            (this.og = !0),
            b--,
            (this.a.Et = this.Rb.vc[b].ji),
            this.Vt(b),
            this.vj(),
            this.a.H.va
          );
        this.FR();
        if (0 == this.Rb.bJ) return this.IC(), this.vj(), this.a.H.va;
        b = 0;
      } else {
        if (
          null != this.Ks &&
          null != this.Rb.vc[b].ji &&
          u.he(this.Ks, this.Rb.vc[b].ji)
        )
          return this.vj(), this.IC();
        this.a.Et = this.Rb.vc[b].ji;
        this.Lm = this.Rb.vc[b].VI;
        b--;
        if (0 <= b) return this.Vt(b), this.vj(), this.a.H.va;
        this.FR();
        if (0 == this.og) return this.vj(), this.a.H.va;
        if (0 == this.Rb.bJ) return this.IC(), this.vj(), this.a.H.va;
        b = 0;
        this.og = !1;
      }
      this.Ir(b);
      this.vj();
      return this.a.H.va;
    },
    Ir: function (a) {
      a >= this.Rb.vc.length
        ? this.stop()
        : ((this.og = !1),
          (this.Qh = a),
          (this.Lm = this.Rb.vc[a].VI),
          (this.Bv = this.Rb.vc[a].RI),
          (this.Cv = this.Rb.vc[a].WI),
          (this.Mm = this.a.w),
          (this.Nm = this.a.A),
          (this.mq = this.a.w + this.Rb.vc[a].TI),
          (this.nq = this.a.A + this.Rb.vc[a].UI),
          (this.a.b.Pa = this.Rb.vc[a].SI),
          this.AR());
    },
    Vt: function (a) {
      a >= this.Rb.vc.length
        ? this.stop()
        : ((this.og = !0),
          (this.Qh = a),
          (this.Bv = -this.Rb.vc[a].RI),
          (this.Cv = -this.Rb.vc[a].WI),
          (this.Mm = this.a.w),
          (this.Nm = this.a.A),
          (this.mq = this.a.w - this.Rb.vc[a].TI),
          (this.nq = this.a.A - this.Rb.vc[a].UI),
          (this.a.b.Pa = (this.Rb.vc[a].SI + 16) & 31),
          this.AR());
    },
    AR: function () {
      this.fA = this.Rb.vc[this.Qh].dR;
      var a = this.Rb.vc[this.Qh].eR,
        b = this.Lm;
      0 != b && ((this.Lm = 20 * b), (this.Od = a |= 32768));
      0 != this.Od && (a = 0);
      if (a != this.lf || 0 != a) (this.lf = a), (this.eA = this.a.H.va = !0);
      this.a.b.sa = this.lf;
    },
    vj: function () {
      this.a.Ft == this.a.c.Ee &&
        ((this.a.c.s.ld = 0),
        this.a.c.s.Gd(this.a, -1310720 | (this.a.eb & 65535)),
        this.a.c.s.Gd(this.a, -2293760 | (this.a.eb & 65535)));
      this.a.gx == this.a.c.Ee &&
        ((this.a.c.s.ld = 0),
        this.a.c.s.Gd(this.a, -1376256 | (this.a.eb & 65535)));
    },
    IC: function () {
      this.Od = this.lf = 0;
      this.a.H.va = !0;
      this.eA = !1;
      return !0;
    },
    FR: function () {
      0 != this.Rb.ER &&
        ((this.a.w = this.gA), (this.a.A = this.hA), (this.a.b.ka = !0));
    },
    Zba: function (a) {
      var b;
      for (b = 0; b < this.Rb.Wt; b++)
        if (null != this.Rb.vc[b].ji && u.he(a, this.Rb.vc[b].ji)) {
          0 == this.og
            ? (this.Ir(b),
              (this.a.Ft = this.a.c.Ee),
              (this.a.Et = this.Rb.vc[b].ji),
              (this.a.gx = 0),
              this.vj())
            : 0 < b &&
              (b--,
              this.Vt(b),
              (this.a.Ft = this.a.c.Ee),
              (this.a.Et = this.Rb.vc[b].ji),
              (this.a.gx = 0),
              this.vj());
          this.a.H.va = !0;
          break;
        }
    },
    $ba: function (a) {
      var b;
      for (b = 0; b < this.Rb.Wt; b++)
        if (null != this.Rb.vc[b].ji && u.he(a, this.Rb.vc[b].ji)) {
          if (b == this.Qh && 0 == this.Km) break;
          this.Ks = a;
          if (0 == this.og)
            if (b > this.Qh) {
              if (0 != this.lf) break;
              0 != (this.Od & 32768) ? this.start() : this.Ir(this.Qh);
            } else {
              if (0 != this.lf) {
                this.reverse();
                break;
              }
              0 != (this.Od & 32768)
                ? (this.start(), this.reverse())
                : this.Vt(MT_MoveNumber - 1);
            }
          else if (b <= this.Qh) {
            if (0 != this.lf) break;
            0 != (this.Od & 32768) ? this.start() : this.Vt(this.Qh - 1);
          } else {
            if (0 != this.lf) {
              this.reverse();
              break;
            }
            0 != (this.Od & 32768)
              ? (this.start(), this.reverse())
              : this.Ir(this.Qh);
          }
          break;
        }
    },
    stop: function () {
      0 == this.Od && (this.Od = this.lf | 32768);
      this.lf = 0;
      this.a.H.va = !0;
    },
    start: function () {
      0 != (this.Od & 32768) &&
        ((this.lf = this.Od & 32767),
        (this.Od = this.Lm = 0),
        (this.a.H.va = !0));
    },
    reverse: function () {
      if (0 == this.Od) {
        this.a.H.va = !0;
        var a = this.Qh;
        if (0 == this.Km)
          (this.og = !this.og)
            ? 0 == a
              ? (this.og = !this.og)
              : (a--, this.Vt(a))
            : this.Ir(a);
        else {
          this.og = !this.og;
          this.Bv = -this.Bv;
          this.Cv = -this.Cv;
          var a = this.Mm,
            b = this.mq;
          this.Mm = b;
          this.mq = a;
          a = this.Nm;
          this.Nm = b = this.nq;
          this.nq = a;
          this.a.b.Pa += 16;
          this.a.b.Pa &= 31;
          a = this.Km >>> 16;
          a = this.fA - a;
          this.Km = (a << 16) | (this.Km & 65535);
        }
      }
    },
    Cd: function (a) {
      var b = this.a.w;
      this.a.w = a;
      b -= this.Mm;
      a -= b;
      this.mq = b = this.mq - this.Mm + a;
      b = this.Mm;
      this.Mm = a;
      this.gA -= b - a;
      this.a.H.va = !0;
      this.a.b.ka = !0;
      this.a.b.jc = !0;
    },
    Dd: function (a) {
      var b = this.a.A;
      this.a.A = a;
      b -= this.Nm;
      a -= b;
      this.nq = b = this.nq - this.Nm + a;
      b = this.Nm;
      this.Nm = a;
      this.hA -= b - a;
      this.a.H.va = !0;
      this.a.b.ka = !0;
      this.a.b.jc = !0;
    },
    ih: function (a) {
      0 > a && (a = 0);
      250 < a && (a = 250);
      this.lf = a;
      this.a.b.sa = a;
      this.a.H.va = !0;
    },
    Yk: function (a) {
      this.ih(a);
    },
    Lh: function () {},
  });
  ma.b9 = 0;
  ma.cZ = 1;
  ma.Z8 = 2;
  ma.a9 = 3;
  ma.Im = 0;
  ma.Hs = 1;
  ma.Zz = 2;
  ma.Yz = 3;
  ma.nM = 4;
  ma.oM = 5;
  ma.prototype = u.extend(new ca(), {
    Da: function (a, b) {
      this.a = a;
      this.F = this.a.c;
      this.a.yl = 0;
      this.lh = this.a.zl = 0;
      this.a.b.sa = 0;
      this.a.b.Un = b.Jr;
      this.Gy = b.qR;
      this.qm = this.Wo(this.Gy);
      this.Lu = b.rR;
      this.Kh = this.Wo(this.Lu);
      this.a.b.Kc = b.vR;
      this.a.b.Rn = 0;
      this.$z = b.sR;
      this.pM = b.tR;
      var c = b.uR;
      3 < c && (c = ma.cZ);
      this.qM = c;
      this.Is = this.Pg = 0;
      this.kq = null;
      this.Tx(b);
      this.a.b.ka = !0;
      this.Xc = ma.Im;
    },
    move: function () {
      var a, b;
      this.a.c.gs = 1;
      a = this.a.c.xf[this.a.b.Un - 1];
      this.OG();
      b = this.lh;
      var c;
      0 == this.Is &&
        (0 >= b &&
          (0 != (a & 4)
            ? ((c = this.qm),
              0 != (this.a.c.O.xd & V.Ue) && (c *= this.a.c.pe),
              (b -= c),
              b / 256 < -this.a.b.Kc && (b = 256 * -this.a.b.Kc))
            : 0 > b &&
              ((c = this.Kh),
              0 != (this.a.c.O.xd & V.Ue) && (c *= this.a.c.pe),
              (b += c),
              0 < b && (b = 0)),
          0 != (a & 8) && (b = -b)),
        0 <= b &&
          (0 != (a & 8)
            ? ((c = this.qm),
              0 != (this.a.c.O.xd & V.Ue) && (c *= this.a.c.pe),
              (b += c),
              b / 256 > this.a.b.Kc && (b = 256 * this.a.b.Kc))
            : 0 < b &&
              ((c = this.Kh),
              0 != (this.a.c.O.xd & V.Ue) && (c *= this.a.c.pe),
              (b -= c),
              0 > b && (b = 0)),
          0 != (a & 4) && (b = -b)),
        (this.lh = b));
      var d = this.Pg;
      for (c = !1; ; ) {
        switch (this.Xc) {
          case 2:
          case 3:
            c = this.$z << 5;
            0 != (this.a.c.O.xd & V.Ue) && (c *= this.a.c.pe);
            d += c;
            64e3 < d && (d = 64e3);
            break;
          case 0:
            if (0 != (a & 1)) {
              if (
                this.F.nl(
                  this.a.ug,
                  this.a.w + this.dk,
                  this.a.A + this.ek - 4,
                ) == t.$j
              )
                break;
              this.Xc = ma.Hs;
              c = !0;
              continue;
            }
            if (
              0 != (a & 2) &&
              this.F.nl(
                this.a.ug,
                this.a.w + this.dk,
                this.a.A + this.ek + 4,
              ) != t.$j
            ) {
              this.Xc = ma.Hs;
              c = !0;
              continue;
            }
            break;
          case 1:
            if (
              0 == c &&
              ((this.Is = 0),
              this.F.nl(this.a.ug, this.a.w + this.dk, this.a.A + this.ek) ==
                t.$j &&
                this.F.nl(
                  this.a.ug,
                  this.a.w + this.dk,
                  this.a.A + this.ek - 4,
                ) == t.$j)
            )
              break;
            0 >= d &&
              (0 != (a & 1)
                ? ((c = this.qm),
                  0 != (this.a.c.O.xd & V.Ue) && (c *= this.a.c.pe),
                  (d -= c),
                  (c = d / 256),
                  c < -this.a.b.Kc && (d = 256 * -this.a.b.Kc))
                : ((c = this.Kh),
                  0 != (this.a.c.O.xd & V.Ue) && (c *= this.a.c.pe),
                  (d += c),
                  0 < d && (d = 0)),
              0 != (a & 2) && (d = -d));
            0 <= d &&
              (0 != (a & 2)
                ? ((c = this.qm),
                  0 != (this.a.c.O.xd & V.Ue) && (c *= this.a.c.pe),
                  (d += c),
                  (c = d / 256),
                  c > this.a.b.Kc && (d = 256 * this.a.b.Kc))
                : ((c = this.Kh),
                  0 != (this.a.c.O.xd & V.Ue) && (c *= this.a.c.pe),
                  (d -= c),
                  0 > d && (d = 0)),
              0 != (a & 1) && (d = -d));
        }
        break;
      }
      this.Pg = d;
      var e = 0;
      0 > b && (e = 16);
      c = b;
      var f = d;
      if (0 != f) {
        var g = 0;
        0 > c && ((g |= 1), (c = -c));
        0 > f && ((g |= 2), (f = -f));
        c = (c << 8) / f;
        for (e = 0; !(c >= ca.ts[e]); e += 2);
        e = ca.ts[e + 1];
        0 != (g & 2) && (e = (-e + 32) & 31);
        0 != (g & 1) && (e = ((-((e - 8) & 31) & 31) + 8) & 31);
      }
      c = b;
      g = ca.aq[e];
      f = ca.wq[e];
      0 > g && (g = -g);
      0 > f && (f = -f);
      g < f && ((g = f), (c = d));
      0 > c && (c = -c);
      c /= g;
      250 < c && (c = 250);
      this.a.b.sa = c;
      switch (this.Xc) {
        case 1:
          0 > d ? (this.a.b.Pa = 8) : 0 < d && (this.a.b.Pa = 24);
          break;
        case 3:
          this.a.b.Pa = e;
          break;
        default:
          0 > b ? (this.a.b.Pa = 16) : 0 < b && (this.a.b.Pa = 0);
      }
      switch (this.Xc) {
        case 4:
          this.a.b.Ih = O.mE;
          break;
        case 5:
          this.a.b.Ih = O.lz;
          break;
        case 3:
          this.a.b.Ih = O.VK;
          break;
        case 2:
          this.a.b.Ih = O.WK;
          break;
        case 1:
          this.a.b.Ih = O.UK;
          break;
        default:
          this.a.b.Ih = O.He;
      }
      null != this.a.Wa && this.a.Wa.Di();
      this.OG();
      this.op(this.a.b.sa, e);
      (this.Xc != ma.Im && this.Xc != ma.Hs) ||
        0 != this.jq ||
        ((b = !1),
        (d = this.qM),
        0 != d &&
          (d--,
          0 == d
            ? (5 == (a & 5) && (b = !0), 9 == (a & 9) && (b = !0))
            : 0 != (a & (d << 4)) && (b = !0)),
        b && ((this.Pg = -this.pM << 8), (this.Xc = ma.Zz)));
      switch (this.Xc) {
        case 2:
          0 <= this.Pg && (this.Xc = ma.Yz);
          break;
        case 3:
          this.F.nl(this.a.ug, this.a.w + this.dk, this.a.A + this.ek) !=
            t.$j && ((this.Pg = 0), (this.Xc = ma.Hs), (this.a.b.Pa = 8));
          break;
        case 0:
          if (
            0 != (a & 3) &&
            0 == (a & 12) &&
            this.F.nl(this.a.ug, this.a.w + this.dk, this.a.A + this.ek) != t.$j
          ) {
            this.Xc = ma.Hs;
            this.lh = 0;
            break;
          }
          0 != (a & 2) &&
            null != this.a.Wa &&
            this.a.Wa.Sm(O.mE) &&
            ((this.lh = 0), (this.Xc = ma.nM));
          if (
            this.F.nl(this.a.ug, this.a.w + this.dk, this.a.A + this.ek) != t.$j
          )
            break;
          0 == this.Tp(this.a.w, this.a.A + 10, this.so, V.jh, !0)
            ? ((a = this.a.w - this.a.c.za),
              (b = this.a.A - this.a.c.Ea),
              (d = new X()),
              this.np(a, b + this.so - 1, a, b, this.so, V.jh, d),
              (this.a.w = d.x + this.a.c.za),
              (this.a.A = d.y + this.a.c.Ea),
              (this.jq = !1))
            : (this.Xc = ma.Yz);
          break;
        case 1:
          if (
            this.F.nl(this.a.ug, this.a.w + this.dk, this.a.A + this.ek) == t.$j
          ) {
            if (0 > this.Pg)
              for (f = 0; 32 > f; f++)
                if (
                  this.F.nl(
                    this.a.ug,
                    this.a.w + this.dk,
                    this.a.A + this.ek + f,
                  ) != t.$j
                ) {
                  this.a.A += f;
                  break;
                }
            this.Pg = 0;
          }
          0 != (a & 12) && ((this.Xc = ma.Im), (this.Pg = 0));
          break;
        case 4:
          0 == (a & 2) &&
            (null != this.a.Wa && this.a.Wa.Sm(O.lz)
              ? ((this.Xc = ma.oM),
                (this.a.b.Ih = O.lz),
                this.a.Wa.Di(),
                (this.a.Wa.Yr = 1))
              : (this.Xc = ma.Im));
          break;
        case 5:
          null != this.a.Wa && 0 == this.a.Wa.Hj && (this.Xc = ma.Im);
      }
      if (this.Xc == ma.Im || this.Xc == ma.nM || this.Xc == ma.oM) {
        do {
          a = null;
          null != this.a.vd && (a = this.a.vd.up);
          if (
            null ==
              this.a.c.du(
                this.a,
                this.a.b.Jb,
                this.a.b.uc,
                this.a.b.Sc,
                this.a.b.Tc,
                this.a.w,
                this.a.A,
                a,
              ) &&
            ((a = this.a.c.du(
              this.a,
              this.a.b.Jb,
              this.a.b.uc,
              this.a.b.Sc,
              this.a.b.Tc,
              this.a.w,
              this.a.A + 1,
              a,
            )),
            null != a && 1 == a.size())
          ) {
            a = a.get(0);
            if (null == this.kq || this.kq != a) {
              if (this.a.Bc != a.Bc) {
                this.kq = a;
                this.pF = a.w;
                this.qF = a.A;
                break;
              }
              if (null == this.kq) break;
            }
            b = a.w - this.pF;
            d = a.A - this.qF;
            this.pF = a.w;
            this.qF = a.A;
            this.a.w += b;
            this.a.A += d;
            this.a.c.Pi(this.a);
            this.a.b.ka = !0;
            break;
          }
          this.kq = null;
        } while (0);
      } else this.kq = null;
    },
    ZI: function () {
      this.Pg = this.lh = this.a.b.sa = 0;
    },
    dj: function () {
      this.stop();
    },
    stop: function () {
      if (this.Ig != this.a.c.Re) this.ZI();
      else {
        this.a.H.va = !0;
        var a = this.a.w - this.a.c.za,
          b = this.a.A - this.a.c.Ea,
          c;
        switch (this.a.c.s.FD & 4294901760) {
          case -786432:
            a = this.a.w - this.a.ab;
            b = this.a.A - this.a.bb;
            c = this.a.c.Wr(a, b, a + this.a.ea, b + this.a.ga);
            a = this.a.w;
            b = this.a.A;
            0 != (c & t.Vj) && ((a = this.a.ab), (this.lh = 0), (this.jq = !0));
            0 != (c & t.Wj) &&
              ((a = this.a.c.Se - this.a.ea + this.a.ab),
              (this.lh = 0),
              (this.jq = !0));
            0 != (c & t.Xj) && ((b = this.a.bb), (this.Pg = 0), (this.jq = !1));
            0 != (c & t.Uj) &&
              ((b = this.a.c.Te - this.a.ga + this.a.bb),
              (this.Pg = 0),
              (this.jq = !1));
            this.a.w = a;
            this.a.A = b;
            this.Xc = this.Xc == ma.Zz ? ma.Yz : ma.Im;
            this.Is = 0;
            break;
          case -851968:
          case -917504:
            if (((this.jq = !1), (c = new X()), this.Xc == ma.Yz))
              this.np(
                a,
                b,
                this.a.b.Sn - this.a.c.za,
                this.a.b.Tn - this.a.c.Ea,
                this.so,
                V.jh,
                c,
              ),
                (this.a.w = c.x + this.a.c.za),
                (this.a.A = c.y + this.a.c.Ea),
                (this.Xc = ma.Im),
                (this.a.b.ka = !0),
                this.Tp(this.a.w, this.a.A + 1, 0, V.jh, !0)
                  ? (this.lh = this.a.b.sa = 0)
                  : ((this.Is = 0),
                    (this.a.b.sa = Math.abs(this.lh / 256)),
                    (this.Pg = 0));
            else {
              if (this.Xc == ma.Im) {
                if (this.np(a, b, a, b - this.so, 0, V.jh, c)) {
                  this.a.w = c.x + this.a.c.za;
                  this.a.A = c.y + this.a.c.Ea;
                  this.a.b.ka = !0;
                  break;
                }
                if (
                  this.np(
                    a,
                    b,
                    this.a.b.Sn - this.a.c.za,
                    this.a.b.Tn - this.a.c.Ea,
                    0,
                    V.jh,
                    c,
                  )
                ) {
                  this.a.w = c.x + this.a.c.za;
                  this.a.A = c.y + this.a.c.Ea;
                  this.a.b.ka = !0;
                  this.ZI();
                  break;
                }
              }
              if (this.Xc == ma.Zz) {
                if (this.np(a, b, a, b - this.so, 0, V.jh, c)) {
                  this.a.w = c.x + this.a.c.za;
                  this.a.A = c.y + this.a.c.Ea;
                  this.a.b.ka = !0;
                  break;
                }
                this.Is = 1;
                this.lh = 0;
              }
              this.Xc == ma.Hs &&
              this.np(
                a,
                b,
                this.a.b.Sn - this.a.c.za,
                this.a.b.Tn - this.a.c.Ea,
                0,
                V.jh,
                c,
              )
                ? ((this.a.w = c.x + this.a.c.za),
                  (this.a.A = c.y + this.a.c.Ea),
                  (this.a.b.ka = !0),
                  this.ZI())
                : ((this.a.b.Jb = this.a.b.lD),
                  (this.a.b.uc = this.a.b.kD),
                  this.Tp(this.a.w, this.a.A, 0, V.jh, !0) ||
                    ((this.a.w = this.a.b.Sn),
                    (this.a.A = this.a.b.Tn),
                    (this.a.b.ka = !0)));
            }
        }
      }
    },
    Cd: function (a) {
      this.a.w != a &&
        ((this.a.w = a),
        (this.a.H.va = !0),
        (this.a.b.ka = !0),
        (this.a.b.jc = !0));
    },
    Dd: function (a) {
      this.a.A != a &&
        ((this.a.A = a),
        (this.a.H.va = !0),
        (this.a.b.ka = !0),
        (this.a.b.jc = !0));
    },
    ih: function (a) {
      0 > a && (a = 0);
      250 < a && (a = 250);
      a > this.a.b.Kc && (a = this.a.b.Kc);
      this.a.b.sa = a;
      this.lh = this.a.b.sa * ca.aq[this.a.c.Fd(this.a)];
      this.Pg = this.a.b.sa * ca.wq[this.a.c.Fd(this.a)];
      this.a.H.va = !0;
    },
    Yk: function (a) {
      0 > a && (a = 0);
      250 < a && (a = 250);
      this.a.b.Kc = a;
      a <<= 8;
      this.lh > a && (this.lh = a);
      this.a.H.va = !0;
    },
    Np: function (a) {
      this.$z = a;
    },
    Lh: function (a) {
      this.a.b.Pa = a;
      this.lh = this.a.b.sa * ca.aq[a];
      this.Pg = this.a.b.sa * ca.wq[a];
    },
    OG: function () {
      var a;
      0 < this.a.b.Jb
        ? (a = this.a.c.m.Ia.er(
            this.a.b.Jb,
            this.a.b.uc,
            this.a.b.Sc,
            this.a.b.Tc,
          ))
        : ((a = new qa()),
          (a.width = this.a.ea),
          (a.height = this.a.ga),
          (a.Mb = this.a.ab),
          (a.Gb = this.a.bb));
      this.dk = 0;
      this.ek = a.height - a.Gb;
      this.so = (2 * a.height + a.height) >>> 3;
    },
    d4: function () {
      this.OG();
      this.F.nl(this.a.ug, this.a.w + this.dk, this.a.A + this.ek) == t.$j &&
        ((0 ==
          this.a.c.xw(
            this.a,
            this.a.b.Jb,
            this.a.b.uc,
            this.a.b.Sc,
            this.a.b.Tc,
            this.a.w,
            this.a.A,
            0,
            V.pz,
          ) &&
          ((this.Xc == ma.Zz && 0 > this.Pg) ||
            0 ==
              this.a.c.xw(
                this.a,
                this.a.b.Jb,
                this.a.b.uc,
                this.a.b.Sc,
                this.a.b.Tc,
                this.a.w,
                this.a.A,
                this.so,
                V.jh,
              ))) ||
          this.a.c.s.Gd(this.a, -851968 | (this.a.eb & 65535)));
    },
  });
  Cb.s_ = [4294967288, 4294967292, 4294967294, 4294967295];
  Cb.prototype = u.extend(new ca(), {
    Da: function (a, b) {
      this.a = a;
      this.Qg = 0;
      this.Jm = this.a.b.sa = 0;
      this.rM = -1;
      this.a.b.Un = b.Jr;
      this.Gy = b.$I;
      this.qm = this.Wo(b.$I);
      this.Lu = b.aJ;
      this.Kh = this.Wo(b.aJ);
      this.a.b.Kc = b.zR;
      this.a.b.Rn = 0;
      this.sM = b.xR;
      this.a.H.Kp = 0;
      this.Jp = b.JC;
      this.rF = 0;
      this.sF = Cb.s_[b.wR];
      this.tF = b.yR;
      this.Js = 0;
      this.lq = this.a.c.Fd(this.a);
      this.a.yl = 0;
      this.a.zl = 0;
      this.Tx(b);
      this.a.b.ka = !0;
    },
    move: function () {
      var a, b, c;
      this.a.c.gs = 1;
      if (0 == this.Jm) {
        this.a.H.Ip = !1;
        a = this.a.c.xf[this.a.b.Un - 1] & 15;
        b = 0;
        0 != (a & 8) && (b = -1);
        0 != (a & 4) && (b = 1);
        if (0 != b) {
          c = this.tF;
          0 != (this.a.c.O.xd & V.Ue) && (c *= this.a.c.pe);
          for (this.Js += c; 100 < this.Js; )
            (this.Js -= 100),
              (this.lq += b),
              (this.lq &= 31),
              (this.a.b.Pa = this.lq & this.sF);
          this.a.b.ka = !0;
        }
        c = 0;
        0 != this.a.H.Kp
          ? (0 != (a & 1) && (c = 1), 0 != (a & 2) && (c = 2))
          : (0 != (a & 1) && (c = 2), 0 != (a & 2) && (c = 1));
        for (b = this.Qg; ; ) {
          if (0 != (c & 1)) {
            if (0 == this.Qg) {
              if (0 == this.sM) break;
              if (0 != (this.rF & 3)) break;
              this.a.H.Kp ^= 1;
              c = this.qm;
              0 != (this.a.c.O.xd & V.Ue) && (c *= this.a.c.pe);
              b += c;
              c = b >> 8;
              c > this.a.b.Kc && (this.Qg = b = this.a.b.Kc << 8);
              this.Qg = b;
              break;
            }
            c = this.Kh;
            0 != (this.a.c.O.xd & V.Ue) && (c *= this.a.c.pe);
            b -= c;
            0 > b && (b = 0);
            this.Qg = b;
          } else
            0 != (c & 2) &&
              ((c = this.qm),
              0 != (this.a.c.O.xd & V.Ue) && (c *= this.a.c.pe),
              (b += c),
              (c = b >> 8),
              c > this.a.b.Kc && (this.Qg = b = this.a.b.Kc << 8),
              (this.Qg = b));
          break;
        }
        this.rF = a;
        this.a.b.sa = this.Qg >> 8;
        this.a.b.Ih = O.He;
        null != this.a.Wa && this.a.Wa.Di();
        a = this.a.c.Fd(this.a);
        0 != this.a.H.Kp && (a = (a + 16) & 31);
        if (0 == this.op(this.a.b.sa, a)) return;
      }
      do {
        if (0 == this.Jm) break;
        if (0 == this.a.c.gs) break;
        b = this.Qg;
        b -= this.Kh;
        if (0 >= b) {
          this.Jm = this.Qg = 0;
          break;
        }
        this.Qg = b;
        b >>= 8;
        a = this.a.c.Fd(this.a);
        0 != this.Jm && ((a += 16), (a &= 31));
        if (0 == this.op(b, a)) break;
      } while (1);
    },
    reverse: function () {},
    stop: function () {
      this.Qg = this.Jm = 0;
      this.a.H.Kp = 0;
      this.Ig == this.a.c.Re &&
        (this.Vx(0 != (this.Jp & ca.Dv)), (this.a.H.va = !0));
    },
    start: function () {
      this.Od = 0;
      this.a.H.va = !0;
    },
    dj: function () {
      this.Ig == this.a.c.Re && this.Vx(0 != (this.Jp & ca.Dv));
      this.a.c.Ee != this.rM &&
        ((this.Jm = this.a.H.Kp),
        (this.a.H.Kp = 0),
        this.Jm++,
        16 <= this.Jm ? this.stop() : ((this.a.H.va = !0), (this.a.H.Ip = !0)));
    },
    ih: function (a) {
      0 > a && (a = 0);
      250 < a && (a = 250);
      a > this.a.b.Kc && (a = this.a.b.Kc);
      this.Qg = a << 8;
      this.a.H.va = !0;
    },
    Yk: function (a) {
      0 > a && (a = 0);
      250 < a && (a = 250);
      this.a.b.Kc = a;
      a <<= 8;
      this.Qg > a && (this.Qg = a);
      this.a.H.va = !0;
    },
    Qu: function (a) {
      this.tF = a;
    },
    Cd: function (a) {
      this.a.w != a &&
        ((this.a.w = a),
        (this.a.H.va = !0),
        (this.a.b.ka = !0),
        (this.a.b.jc = !0));
    },
    Dd: function (a) {
      this.a.A != a &&
        ((this.a.A = a),
        (this.a.H.va = !0),
        (this.a.b.ka = !0),
        (this.a.b.jc = !0));
    },
    Lh: function (a) {
      this.lq = a;
      this.a.b.Pa = a & this.sF;
    },
  });
  Db.prototype = u.extend(new ca(), {
    Da: function (a) {
      this.a = a;
      this.a.b.sa = 0;
      this.a.b.jc = !0;
      this.a.b.ka = !0;
    },
    move: function () {
      null != this.a.Wa && this.a.Wa.Di();
      this.a.b.jc && ((this.a.b.jc = !1), this.a.c.Pi(this.a));
    },
    Cd: function (a) {
      this.a.w != a && ((this.a.w = a), (this.a.H.va = !0), (this.a.b.ka = !0));
      this.a.b.jc = !0;
    },
    Dd: function (a) {
      this.a.A != a && ((this.a.A = a), (this.a.H.va = !0), (this.a.b.ka = !0));
      this.a.b.jc = !0;
    },
    Lh: function () {},
    reverse: function () {},
    stop: function () {},
    start: function () {},
    dj: function () {},
    ih: function () {},
    Yk: function () {},
  });
  Xe.prototype = u.extend(new ca(), {
    Da: function (a, b) {
      this.a = a;
      var c = a.c.m.file.Yf(b.data);
      this.oe.XB(c);
      this.a.b.jc = !0;
      this.a.b.ka = !0;
    },
    gd: function () {
      this.oe.gd();
    },
    move: function () {
      this.oe.move() && (this.a.b.ka = !0);
    },
    stop: function () {
      this.oe.stop(this.Ig == this.a.c.Re);
    },
    start: function () {
      this.oe.start();
    },
    dj: function () {
      this.oe.dj(this.Ig == this.a.c.Re);
    },
    ih: function (a) {
      this.oe.ih(a);
    },
    Yk: function (a) {
      this.oe.Yk(a);
    },
    reverse: function () {
      this.oe.reverse();
    },
    Cd: function (a) {
      this.oe.Cd(a);
      this.a.b.ka = !0;
      this.a.b.jc = !0;
    },
    Dd: function (a) {
      this.oe.Dd(a);
      this.a.b.ka = !0;
      this.a.b.jc = !0;
    },
    Lh: function (a) {
      this.oe.Lh(a);
      this.a.b.ka = !0;
      this.a.b.jc = !0;
    },
    SN: function (a, b) {
      this.rh = b;
      return this.oe.GA(a);
    },
  });
  Ye.prototype = {
    Da: function (a) {
      this.o = a;
      this.C = this.o.c;
    },
    XB: function () {},
    gd: function () {},
    move: function () {
      return !1;
    },
    setPosition: function () {},
    Cd: function () {},
    Dd: function () {},
    stop: function () {},
    dj: function () {},
    reverse: function () {},
    start: function () {},
    ih: function () {},
    Yk: function () {},
    Lh: function () {},
    Qy: function () {},
    Qu: function () {},
    Np: function () {},
    GA: function () {
      return 0;
    },
    ax: function () {
      return 0;
    },
    IH: function () {
      return 0;
    },
    Yw: function () {
      return 0;
    },
    Fd: function () {
      return this.o.b.Pa;
    },
    pt: function (a) {
      return this.o.H.pt(this.o, a, 32);
    },
    Tm: function (a) {
      this.o.b.Ih = a;
      null != this.o.Wa && this.o.Wa.Di();
    },
    nB: function () {
      this.o.c.Re++;
      this.o.H.oa.Ig = this.o.c.Re;
      this.o.c.Pi(this.o);
    },
    sN: function (a, b, c, d, e, f, g) {
      a -= this.o.c.za;
      b -= this.o.c.Ea;
      c -= this.o.c.za;
      d -= this.o.c.Ea;
      a = this.o.H.oa.np(a, b, c, d, e, f, g);
      g.x += this.o.c.za;
      g.y += this.o.c.Ea;
      return a;
    },
    IT: function (a, b, c, d, e) {
      return this.o.H.oa.Tp(a, b, c, d, e);
    },
    Zw: function (a) {
      return this.o.c.xf[a];
    },
  };
  fb.JW = 1;
  fb.KW = 2;
  fb.b8 = 4;
  fb.prototype = {
    Da: function (a, b, c, d, e) {
      null != this.oa && this.oa.gd();
      null != d && (b.b.Pa = d.$N);
      this.sK = b.vd.tJ;
      d = b.b.sd;
      b.b.sd = -1;
      if (null != c.bh && a < c.bh.Zt) {
        c = c.bh.vf[a];
        this.hs = a;
        -1 == e && (e = c.Ux);
        b.b.sd = e;
        switch (e) {
          case 0:
            this.oa = new Db();
            break;
          case 1:
            this.oa = new Ve();
            break;
          case 2:
            this.oa = new Cb();
            break;
          case 3:
            this.oa = new Ue();
            break;
          case 4:
            this.oa = new Qa();
            break;
          case 5:
            this.oa = new We();
            break;
          case 9:
            this.oa = new ma();
            break;
          case 14:
            (this.oa = this.x3(b, c)), null == this.oa && (this.oa = new Db());
        }
        b.b.Pa = this.pt(b, c.HR, b.b.Pa);
        this.oa.Da(b, c);
      }
      d != b.b.sd && d == ia.uF && b.c.IO();
      -1 == b.b.sd &&
        ((b.b.sd = 0), (this.oa = new Db()), this.oa.Da(b, null), (b.b.Pa = 0));
    },
    x3: function (a, b) {
      var c = b.Hk,
        d = null;
      "box2dstatic" == c && (d = new Aa());
      "pinball" == c && (d = new Ta());
      return null != d ? (d.Da(a), new Xe(d)) : null;
    },
    N2: function (a, b, c) {
      null != this.oa && this.oa.gd();
      a.b.sd = b;
      switch (b) {
        case 11:
          this.oa = new Te();
          break;
        case 13:
          this.oa = new Se();
      }
      this.oa.a = a;
      0 == c && this.oa.Da(a, null);
    },
    gd: function () {
      this.oa.gd();
    },
    move: function () {
      this.oa.move();
    },
    V5: function (a, b) {
      var c = a.ha;
      null != c.bh &&
        0 <= b &&
        b < c.bh.Zt &&
        (this.Da(b, a, c, null, -1), (c = a.c.fc(a)) && c.Dm());
    },
    pt: function (a, b, c) {
      if (0 > c || 32 <= c) {
        var d = 0,
          e = b,
          f;
        for (c = 0; 32 > c; c++) (f = e), (e >>= 1), 0 != (f & 1) && d++;
        if (0 == d) c = 0;
        else
          for (
            d = a.c.random(d), e = b, c = 0;
            !((f = e), (e >>= 1), 0 != (f & 1) && (d--, 0 > d));
            c++
          );
      }
      return c;
    },
  };
  p.ov = 1110591041;
  p.Rv = 1110594637;
  p.yv = 1110874198;
  p.XL = 1110593103;
  p.Ms = 1110634490;
  p.kL = 1;
  p.jL = 2;
  p.HV = 4;
  p.qA = 1448633650;
  p.zW = 0;
  p.AW = 1;
  p.BW = 2;
  p.yW = 3;
  p.pZ = 0;
  p.Bi = 1;
  p.eL = 1;
  p.AV = 2;
  p.yV = 4;
  p.c0 = 0;
  p.Co = 1;
  p.bj = 2;
  p.aj = 3;
  p.iN = 4;
  p.H$ = 5;
  p.I$ = 6;
  p.J$ = 7;
  p.EF = 20;
  p.DF = 10;
  p.MM = 20;
  p.NM = 10;
  p.uV = 19;
  p.sV = 0.1;
  p.tV = 5;
  p.vV = 1;
  p.IF = 20.5;
  p.HF = 15;
  p.OY = 0;
  p.gM = 1;
  p.eM = 2;
  p.fM = 3;
  p.ZE = 0;
  p.YE = 1;
  p.$Y = 24;
  p.aZ = 24;
  p.BU = 0;
  p.AU = 1;
  p.fU = 8;
  p.eU = 9;
  p.gU = 10;
  p.sU = 11;
  p.rU = 12;
  p.tU = 13;
  p.kU = 14;
  p.jU = 15;
  p.lU = 16;
  p.cU = 23;
  p.DU = 24;
  p.wU = 25;
  p.yU = 26;
  p.xU = 27;
  p.zU = 28;
  p.hU = 29;
  p.uU = 30;
  p.vU = 31;
  p.mU = 32;
  p.nU = 33;
  p.pU = 34;
  p.oU = 35;
  p.dU = 38;
  p.CU = 39;
  p.iU = 40;
  p.qU = 41;
  p.VW = 0;
  p.UW = 1;
  p.eX = 2;
  p.bX = 3;
  p.TW = 4;
  p.SW = 5;
  p.WW = 6;
  p.cX = 7;
  p.ZW = 8;
  p.YW = 9;
  p.XW = 10;
  p.dX = 11;
  p.aX = 12;
  p.$W = 13;
  p.prototype = u.extend(new Oa(), {
    qY: function () {
      var a = this.o.c,
        b = 0,
        c;
      for (c = 0; c < a.Xb; b++, c++) {
        for (; null == a.X[b]; ) b++;
        var d = a.X[b];
        32 <= d.eb &&
          (d.ha.hd == p.ov &&
            d.ext.identifier == this.identifier &&
            this.wt.add(d.ext),
          d.ha.hd == p.yv &&
            d.ext.identifier == this.identifier &&
            this.Ut.add(d.ext),
          d.ha.hd == p.Rv &&
            d.ext.identifier == this.identifier &&
            this.Vu.add(d.ext),
          d.ha.hd == p.Ms &&
            d.ext.identifier == this.identifier &&
            this.HD.add(d.ext));
      }
      return null;
    },
    Y4: function (a) {
      a.x = a.x * this.Ca - this.Bm;
      a.y = this.Cm - a.y * this.Ca;
    },
    mca: function (a) {
      a.x = (this.Bm + a.x) / this.Ca;
      a.y = (this.Cm - a.y) / this.Ca;
    },
    nca: function (a, b, c) {
      b = (b * g.M.pa.Ab) / 180;
      c = (c * g.M.pa.Ab) / 180;
      b > c ? a.fq(!1) : (a.fq(!0), a.Lv(b, c));
    },
    oca: function (a, b, c) {
      b = (b / 100) * p.EF;
      c = (c / 100) * p.DF;
      var d = !0;
      0 == b && 0 == c && (d = !1);
      a.nv(d);
      a.$M(b);
      a.Mv(c);
    },
    qca: function (a, b, c, d) {
      a.Yb(b, c, d);
      return this.nc.xc(a);
    },
    SJ: function (a, b, c, d, e, f, h) {
      if (b == p.OY) return null;
      var k = 0,
        S,
        n = null,
        m = 1e7;
      for (S = 0; S < this.C.Xb; k++, S++) {
        for (; null == this.C.X[k]; ) k++;
        var v = this.C.X[k];
        if (u.he(v.vd.Or, e) && ((v = this.fc(v)), null != v)) {
          var A = v.Ya.w - a.Ya.w,
            l = v.Ya.A - a.Ya.A,
            A = Math.sqrt(A * A + l * l);
          A <= m && ((m = A), (n = v));
        }
      }
      if (null != n && ((d = this.xc(d)), null != d))
        switch (b) {
          case p.gM:
            b = new g.i.T.Xm();
            b.Xf = !0;
            f > h ? (b.en = !1) : ((b.en = !0), (b.oQ = f), (b.RT = h));
            var t;
            switch (c) {
              case p.ZE:
                t = a.N.R.position;
                break;
              case p.YE:
                t = this.Yi(a);
            }
            b.Yb(a.N, n.N, t);
            d.Rh(p.bj, this.nc.xc(b));
            return d.me;
          case p.eM:
            b = new g.i.T.kl();
            b.Xf = !0;
            b.cr = f;
            b.Uq = h;
            var q, M;
            switch (c) {
              case p.ZE:
                q = a.N.R.position;
                M = n.N.R.position;
                break;
              case p.YE:
                (q = this.Yi(a)), (M = this.Yi(n));
            }
            b.Yb(a.N, n.N, q, M);
            d.Rh(p.Co, this.nc.xc(b));
            return d.me;
          case p.fM:
            b = new g.i.T.Wm();
            b.Xf = !0;
            f > h
              ? (b.en = !1)
              : ((b.en = !0), (b.kC = f / this.Ca), (b.dE = h / this.Ca));
            switch (c) {
              case p.ZE:
                q = a.N.R.position;
                M = n.N.R.position;
                break;
              case p.YE:
                (q = this.Yi(a)), (M = this.Yi(n));
            }
            c = new g.M.Math.kb(M.x - q.x, M.y - q.y);
            b.Yb(a.N, n.N, q, c);
            d.Rh(p.aj, this.nc.xc(b));
            return d.me;
        }
      return null;
    },
    im: function (a, b, c, d, e, f, h, k) {
      if (null != f && a != g.i.od.re && f.ia != H.uo && f.ia != H.to) {
        var S;
        for (S = 0; S < this.wt.size(); S++) this.wt.get(S).QJ(f);
        for (S = 0; S < this.Ut.size(); S++) this.Ut.get(S).QJ(f);
        for (S = 0; S < this.Vu.size(); S++) this.Vu.get(S).QJ(f);
      }
      S = new g.i.Gq();
      S.type = a;
      S.position.Set((this.Bm + b) / this.Ca, (this.Cm - c) / this.Ca);
      S.angle = (d * g.M.pa.Ab) / 180;
      S.TP = e;
      S.Nh = f;
      h & p.kL && (S.sP = !0);
      h & p.jL && (S.NN = !0);
      h & p.HV && (S.iQ = k);
      return this.nc.Dm(S);
    },
    uy: function (a) {
      if (null != a)
        if ((this.Nq || this.nc.Jv(this.Bw), this.Bw.LG)) this.uw.add(a);
        else {
          var b = a.Zj();
          if (null != b) {
            if (b.ia != H.uo && b.ia != H.to) {
              var c;
              for (c = 0; c < this.wt.size(); c++) this.wt.get(c).UJ(b);
              for (c = 0; c < this.Ut.size(); c++) this.Ut.get(c).UJ(b);
              for (c = 0; c < this.Vu.size(); c++) this.Vu.get(c).UJ(b);
              for (c = 0; c < this.HD.size(); c++) this.HD.get(c).UJ(b);
            }
            a.LF(null);
          }
          this.z1(a);
          this.nc.JL(a);
          this.Nq || this.nc.Jv(null);
        }
    },
    Q4: function (a, b) {
      a.GW(b);
    },
    Pn: function (a, b, c, d, e, f, h, k, S) {
      --e;
      --f;
      null != b &&
        ((b.De.left = -e / 2),
        (b.De.right = e / 2),
        (b.De.top = -f / 2),
        (b.De.bottom = f / 2));
      b = new g.K.pb.Fi();
      c = new g.M.Math.kb((this.Bm + c) / this.Ca, (this.Cm - d) / this.Ca);
      b.TM(e / 2 / this.Ca, f / 2 / this.Ca, a.Ng(c));
      e = new g.i.ll();
      e.shape = b;
      e.Ro = h;
      e.ai = k;
      e.oi = S;
      e.Nh = this;
      return a.io(e);
    },
    qS: function (a, b, c, d, e, f, h, k) {
      null != b &&
        ((b.De.left = -e),
        (b.De.right = e),
        (b.De.top = -e),
        (b.De.bottom = e));
      b = new g.K.pb.Io();
      b.Db = e / this.Ca;
      c = new g.M.Math.kb((this.Bm + c) / this.Ca, (this.Cm - d) / this.Ca);
      c = a.Ng(c);
      b.sf.Set(c.x, c.y);
      c = new g.i.ll();
      c.shape = b;
      c.Ro = f;
      c.ai = h;
      c.oi = k;
      c.Nh = this;
      return a.io(c);
    },
    kca: function (a, b, c, d, e, f) {
      var h = new g.M.Math.kb(a.R.position.x, a.R.position.y);
      h.x += e / this.Ca;
      h.y += f / this.Ca;
      e = new g.M.Math.kb(b.R.position.x, b.R.position.y);
      f = new g.i.T.kl();
      f.Xf = !1;
      f.cr = d;
      f.Uq = c;
      f.Yb(a, b, h, e);
      this.nc.xc(f);
    },
    N4: function (a, b, c) {
      new g.M.Math.kb(a.R.position.x, a.R.position.y);
      b = new g.M.Math.kb(
        b * Math.cos((c * g.M.pa.Ab) / 180),
        b * Math.sin((c * g.M.pa.Ab) / 180),
      );
      a.ho(b);
    },
    U4: function (a) {
      a.w_();
    },
    M4: function (a, b) {
      a.oE(b);
    },
    P4: function (a, b) {
      a.oE(b);
    },
    V4: function (a) {
      a.x_();
    },
    sS: function (a, b) {
      a.C_(b);
    },
    L4: function (a, b, c) {
      var d = a.u;
      d.x += b;
      d.y += c;
      a.yo(d);
    },
    O4: function (a, b, c) {
      var d = a.u;
      360 < c && (c -= 360);
      b = new g.M.Math.kb(
        b * Math.cos((c * g.M.pa.Ab) / 180),
        b * Math.sin((c * g.M.pa.Ab) / 180),
      );
      d.x += b.x / a.da;
      d.y += b.y / a.da;
      a.yo(d);
    },
    hca: function (a, b, c) {
      var d = new g.M.Math.kb(a.R.position.x, a.R.position.y);
      b = new g.M.Math.kb(
        b * Math.cos((c * g.M.pa.Ab) / 180),
        b * Math.sin((c * g.M.pa.Ab) / 180),
      );
      a.xV(b, d);
    },
    R4: function (a) {
      return (180 * a.Zi()) / g.M.pa.Ab;
    },
    RJ: function (a, b, c) {
      var d = a.Zi(),
        e = new g.M.Math.kb(a.R.position.x, a.R.position.y);
      b != p.qA && (e.x = (this.Bm + b) / this.Ca);
      c != p.qA && (e.y = (this.Cm - c) / this.Ca);
      a.Nv(e, d);
    },
    rS: function (a, b) {
      var c = new g.M.Math.kb(a.R.position.x, a.R.position.y);
      a.Nv(c, (b * g.M.pa.Ab) / 180);
    },
    tS: function (a, b, c) {
      b = new g.M.Math.kb(
        b * Math.cos((c * g.M.pa.Ab) / 180),
        b * Math.sin((c * g.M.pa.Ab) / 180),
      );
      a.yo(b);
    },
    gca: function (a, b, c) {
      b = new g.M.Math.kb(
        b * Math.cos((c * g.M.pa.Ab) / 180),
        b * Math.sin((c * g.M.pa.Ab) / 180),
      );
      c = a.u;
      c.x += b.x;
      c.y += b.y;
      a.yo(c);
    },
    T4: function (a, b, c, d, e) {
      b = new g.M.Math.kb(
        b * Math.cos((c * g.M.pa.Ab) / 180) + d,
        b * Math.sin((c * g.M.pa.Ab) / 180) + e,
      );
      a.yo(b);
    },
    lj: function (a, b, c) {
      return (
        0 != (a.ra[c * a.lineWidth + Math.floor(b / 16)] & (32768 >>> (b & 15)))
      );
    },
    sq: function (a, b, c, d, e) {
      var f = e.angle;
      e.angle = 57.2957795 * Math.atan2(b - d, a - c);
      return f == e.angle ? !1 : !0;
    },
    nu: function (a, b, c, d, e, f, h, k, S, n) {
      new g.K.pb.Fi();
      var m = this.C.m.Ia.Ac(e).Ji(0, 0, 1, 1),
        v = m.width,
        A = m.height,
        l,
        p,
        q,
        M;
      e = [];
      var L = [],
        w,
        B,
        t,
        u = 0;
      null != b &&
        ((b.De.left = (-v / 2) * S),
        (b.De.right = (v / 2) * S),
        (b.De.top = (-A / 2) * n),
        (b.De.bottom = (A / 2) * n));
      var z = !1;
      0 > f && ((z = !0), (f = 0));
      p = A - 1;
      for (w = -1; 0 <= p; p--)
        for (l = v - 1; 0 <= l; l--)
          if (this.lj(m, l, p)) {
            l > w && ((w = l), (B = p));
            break;
          }
      if (0 > w) return this.Pn(a, b, c, d, m.width, m.height, f, h, k);
      q = e[u] = w;
      M = L[u] = B;
      u++;
      p = 0;
      for (w = -1; p < A; p++)
        for (l = v - 1; 0 <= l; l--)
          if (this.lj(m, l, p)) {
            l > w && ((w = l), (B = p));
            break;
          }
      t = { angle: 1e3 };
      if (this.sq(w, B, q, M, t)) {
        for (l = 0; l < u && (e[l] != w || L[l] != B); l++);
        l == u && ((q = e[u] = w), (M = L[u++] = B));
      }
      l = v - 1;
      for (B = 1e4; 0 <= l; l--)
        for (p = 0; p < A; p++)
          if (this.lj(m, l, p)) {
            p < B && ((w = l), (B = p));
            break;
          }
      for (l = 0; l < u && (e[l] != w || L[l] != B); l++);
      l == u &&
        (this.sq(w, B, q, M, t) || u--, (q = e[u] = w), (M = L[u++] = B));
      l = 0;
      for (B = 1e4; l < v; l++)
        for (p = 0; p < A; p++)
          if (this.lj(m, l, p)) {
            p < B && ((w = l), (B = p));
            break;
          }
      for (l = 0; l < u && (e[l] != w || L[l] != B); l++);
      l == u &&
        (this.sq(w, B, q, M, t) || u--, (q = e[u] = w), (M = L[u++] = B));
      p = 0;
      for (w = 1e4; p < A; p++)
        for (l = 0; l < v; l++)
          if (this.lj(m, l, p)) {
            l < w && ((w = l), (B = p));
            break;
          }
      for (l = 0; l < u && (e[l] != w || L[l] != B); l++);
      l == u &&
        (this.sq(w, B, q, M, t) || u--, (q = e[u] = w), (M = L[u++] = B));
      p = A - 1;
      for (w = 1e4; 0 <= p; p--)
        for (l = 0; l < v; l++)
          if (this.lj(m, l, p)) {
            l < w && ((w = l), (B = p));
            break;
          }
      for (l = 0; l < u && (e[l] != w || L[l] != B); l++);
      l == u &&
        (this.sq(w, B, q, M, t) || u--, (q = e[u] = w), (M = L[u++] = B));
      l = 0;
      for (B = -1; l < v; l++)
        for (p = A - 1; 0 <= p; p--)
          if (this.lj(m, l, p)) {
            p > B && ((w = l), (B = p));
            break;
          }
      for (l = 0; l < u && (e[l] != w || L[l] != B); l++);
      l == u &&
        (this.sq(w, B, q, M, t) || u--, (q = e[u] = w), (M = L[u++] = B));
      l = v - 1;
      for (B = -1; 0 <= l; l--)
        for (p = A - 1; 0 <= p; p--)
          if (this.lj(m, l, p)) {
            p > B && ((w = l), (B = p));
            break;
          }
      for (l = 0; l < u && (e[l] != w || L[l] != B); l++);
      l == u && (this.sq(w, B, q, M, t) || u--, (e[u] = w), (L[u++] = B));
      if (1 >= u) return this.Pn(a, b, c, d, m.width, m.height, f, h, k);
      2 == u &&
        ((u = []),
        (b = []),
        e[0] != e[1]
          ? ((u[0] = e[0]),
            (b[0] = L[0] + 1),
            (u[1] = e[0]),
            (b[1] = L[0]),
            (u[2] = e[1]),
            (b[2] = L[1]),
            (u[3] = e[1]),
            (b[3] = L[1] + 1))
          : ((u[0] = e[0]),
            (b[0] = L[0]),
            (u[1] = e[1]),
            (b[1] = L[1]),
            (u[2] = e[1] - 1),
            (b[2] = L[1]),
            (u[3] = e[0] - 1),
            (b[3] = L[0])),
        (e = u),
        (L = b),
        (u = 4));
      c = b = 0;
      if (z) (b = v / 2), (c = A / 2);
      else {
        for (A = 0; A < u; A++) (b += e[A]), (c += L[A]);
        b /= u;
        c /= u;
      }
      v = [];
      for (A = 0; A < u; A++)
        (v[A] = new g.M.Math.kb(0, 0)),
          v[A].Set(
            ((e[A] - b) / this.Ca) * S * 1,
            ((c - L[A]) / this.Ca) * n * 1,
          );
      n = new g.i.ll();
      S = new g.K.pb.Fi();
      S.xA(v, u);
      n.shape = S;
      n.Ro = f;
      n.ai = h;
      n.oi = k;
      n.Nh = this;
      return a.io(n);
    },
    W4: function (a, b, c) {
      if (0 == (this.Ja & p.AV)) return null;
      var d = c.Ya,
        e = new g.i.Gq();
      e.type = g.i.od.nf;
      e.position.Set((this.Bm + d.w) / this.Ca, (this.Cm - d.A) / this.Ca);
      e.angle = (a * g.M.pa.Ab) / 180;
      e.TP = this.QN;
      e.Nh = c;
      pBody = this.nc.Dm(e);
      this.nu(
        pBody,
        c,
        d.w,
        d.A,
        d.b.Jb,
        this.ON,
        this.PN,
        this.RN,
        d.b.Sc,
        d.b.Tc,
      );
      a = new g.M.Math.kb(
        b * Math.cos((a * g.M.pa.Ab) / 180),
        b * Math.sin((a * g.M.pa.Ab) / 180),
      );
      pBody.yo(a);
      return pBody;
    },
    S4: function (a) {
      a.GF();
    },
    jca: function (a, b, c) {
      a.Nv(b, c);
    },
    uS: function (a, b) {
      var c = a.R.position,
        c = new g.M.Math.kb(c.x, c.y);
      this.Y4(c);
      b.x = u.Hf(c.x);
      b.y = u.Hf(c.y);
      b.angle = u.Hf((180 * a.Zi()) / g.M.pa.Ab);
    },
    X4: function (a, b) {
      var c = this.C.m.Ia.Ac(a).Ji(0, 0, 1, 1),
        d,
        e;
      b.gz = 0;
      b.hz = c.height - 1;
      var f;
      e = 0;
      for (f = !1; e < c.height; e++) {
        for (d = 0; d < c.width; d++)
          if (this.lj(c, d, e)) {
            b.gz = e;
            f = !0;
            break;
          }
        if (f) break;
      }
      e = c.height - 1;
      for (f = !1; 0 <= e; e--) {
        for (d = 0; d < c.width; d++)
          if (this.lj(c, d, e)) {
            b.hz = e;
            f = !0;
            break;
          }
        if (f) break;
      }
      b.Zu = 0;
      b.$u = c.width - 1;
      d = 0;
      for (f = !1; d < c.width; d++) {
        for (e = 0; e < c.height; e++)
          if (this.lj(c, d, e)) {
            b.Zu = d;
            f = !0;
            break;
          }
        if (f) break;
      }
      d = c.width - 1;
      for (f = !1; 0 <= d; d--) {
        for (e = c.height - 1; 0 <= e; e--)
          if (this.lj(c, d, e)) {
            b.$u = d;
            f = !0;
            break;
          }
        if (f) break;
      }
    },
    ica: function (a, b, c, d, e, f, h, k, S, n, m, v) {
      d = {};
      this.X4(c, d);
      d.Zu *= n;
      d.$u *= n;
      d.gz *= m;
      d.hz *= m;
      v = Math.max(v, 0.1);
      this.C.m.Ia.Ac(c).Ji(0, 0, 1, 1);
      c = [];
      for (n = 0; 6 > n; n++) c[n] = new g.M.Math.kb(0, 0);
      n = d.$u - d.Zu;
      m = (d.Zu + d.$u) / 2;
      e = (d.gz + d.hz) / 2;
      d = 0;
      c[0].Set(((-n / 4) * v) / this.Ca, d / this.Ca);
      c[1].Set(((n / 4) * v) / this.Ca, d / this.Ca);
      c[2].Set(((n / 2) * v) / this.Ca, (0 + e / 8) / this.Ca);
      d = 0 + 2 * e;
      c[3].Set(((n / 2) * v) / this.Ca, d / this.Ca);
      c[4].Set(((-n / 2) * v) / this.Ca, d / this.Ca);
      c[5].Set(((-n / 2) * v) / this.Ca, (0 + e / 8) / this.Ca);
      S.offsetX = n;
      S.offsetY = e;
      b.De.left = -m * v;
      b.De.right = m * v;
      b.De.top = -e;
      b.De.bottom = e;
      b = new g.K.pb.Fi();
      b.xA(c, 6);
      v = new g.i.ll();
      v.shape = b;
      v.Ro = f;
      v.ai = h;
      v.oi = k;
      v.Nh = this;
      S.bca = a.io(v);
    },
    g1: function () {
      for (var a = this.o.c, b = 0, c = new W(), d, e = 0; e < a.Xb; e++) {
        for (; null == a.X[b]; ) b++;
        var f = a.X[b];
        b++;
        if (32 <= f.eb && f.ha.hd == p.XL) {
          var h = f.ext;
          if (h.identifier == this.identifier) {
            var k;
            for (k = 0; k < c.size() && c.get(k) != f.ha; k++);
            if (k == c.size()) {
              c.add(f.ha);
              d = f.ha;
              var S = h.k4,
                n = h.direction,
                m = b,
                v = new W();
              v.add(h);
              for (var A = e + 1; A < a.Xb; A++) {
                for (; 0 == a.X[m]; ) m++;
                f = a.X[m];
                m++;
                32 <= f.eb &&
                  f.ha.hd == p.XL &&
                  f.ha == d &&
                  ((f = f.ext),
                  f.identifier == this.identifier &&
                    f.k4 == S &&
                    f.direction == n &&
                    v.add(f));
              }
              if (1 < v.size()) {
                var l;
                do {
                  l = !1;
                  d = 0;
                  do {
                    k = v.get(d);
                    var q = v.get(d + 1),
                      f = k.o.w + 8,
                      m = q.o.w + 8,
                      A = k.o.A + 8,
                      t = q.o.A + 8;
                    switch (n) {
                      case p.zW:
                        m < f &&
                          ((f = k), v.set(d, q), v.set(d + 1, f), (l = !0));
                        break;
                      case p.AW:
                        m > f &&
                          ((f = k), v.set(d, q), v.set(d + 1, f), (l = !0));
                        break;
                      case p.BW:
                        t < A &&
                          ((f = k), v.set(d, q), v.set(d + 1, f), (l = !0));
                        break;
                      case p.yW:
                        t > A &&
                          ((f = k), v.set(d, q), v.set(d + 1, f), (l = !0));
                    }
                    d++;
                  } while (d < v.size() - 1);
                } while (l);
                for (d = 0; d < v.size() - 1; d++) {
                  k = v.get(d);
                  q = v.get(d + 1);
                  f = k.o.w + 8;
                  m = q.o.w + 8;
                  A = k.o.A + 8;
                  t = q.o.A + 8;
                  k = m - f;
                  var M = Math.abs(t - A),
                    q = (f + m) / 2;
                  l = (A + t) / 2;
                  n = new H();
                  n.ak(null, S == p.pZ ? H.to : H.uo);
                  n.N = this.im(g.i.od.re, q, l, 0, 0, n, 0);
                  n.De.left = -k;
                  n.De.right = k;
                  n.De.top = -M;
                  n.De.bottom = M;
                  M = [];
                  for (k = 0; 4 > k; k++) M[k] = new g.M.Math.kb(0, 0);
                  M[0].Set((f - q) / this.Ca, (l - A) / this.Ca);
                  M[1].Set((f - q) / this.Ca, (l - A - 8) / this.Ca);
                  M[2].Set((m - q) / this.Ca, (l - t - 8) / this.Ca);
                  M[3].Set((m - q) / this.Ca, (l - t) / this.Ca);
                  f = new g.K.pb.Fi();
                  f.xA(M, 4);
                  m = new g.i.ll();
                  m.shape = f;
                  m.Ro = 1;
                  m.ai = h.ai;
                  m.oi = h.oi;
                  m.Nh = this;
                  n.N.io(m);
                }
              }
            }
          }
        }
      }
    },
    m1: function () {
      var a = new H();
      a.ak(null, H.aA);
      a.N = this.im(g.i.od.re, this.C.Se / 2, this.C.Te + 8, 0, 0, a, 0, 0);
      this.Pn(a.N, a, this.C.Se / 2, this.C.Te + 8, this.C.Se, 16, 0, 1, 0);
      a = new H();
      a.ak(null, H.bA);
      a.N = this.im(g.i.od.re, -8, this.C.Te / 2, 0, 0, a, 0, 0);
      this.Pn(a.N, a, -8, this.C.Te / 2, 16, this.C.Te, 0, 1, 0);
      a = new H();
      a.ak(null, H.cA);
      a.N = this.im(g.i.od.re, this.C.Se + 8, this.C.Te / 2, 0, 0, a, 0, 0);
      this.Pn(a.N, a, this.C.Se + 8, this.C.Te / 2, 16, this.C.Te, 0, 1, 0);
      a = new H();
      a.ak(null, H.dA);
      a.N = this.im(g.i.od.re, this.C.Se / 2, -8, 0, 0, a, 0, 0);
      this.Pn(a.N, a, this.C.Se / 2, -8, this.C.Se, 16, 0, 1, 0);
    },
    j8: function (a, b) {
      for (var c = 0, d = 0; d < b.Xb; d++) {
        for (; null == b.X[c]; ) c++;
        var e = b.X[c];
        if (a == e.fx) return e;
        c++;
      }
      return null;
    },
    e1: function () {
      var a = this.C,
        b = a.O,
        a = a.m,
        c,
        d,
        e;
      for (c = 0; c < b.ic.length; c++) {
        var f = b.ic[c];
        if (0 != (f.Cb & ra.Ez)) {
          var h;
          d = f.Zx;
          for (h = 0; h < f.Xx; d++, h++) {
            e = this.C.O.mg.list[d];
            var k,
              S,
              n = e.sx,
              m,
              v,
              p;
            if (
              !(n >= F.Ed) &&
              ((k = e.eC),
              (S = e.fC),
              (e = a.Sd.gn(e.mj)),
              null != e &&
                null != e.Kd &&
                ((e = e.Kd),
                (m = e.gJ),
                (v = e.hJ),
                (p = e.QC),
                p == ta.wo || p == ta.Bi))
            ) {
              var l = new H();
              l.ak(null, p == ta.wo ? H.to : H.uo);
              l.N = this.im(g.i.od.re, k + m / 2, S + v / 2, 0, 0, l, 0, 0);
              n == F.yM
                ? this.Pn(
                    l.N,
                    l,
                    k + m / 2,
                    S + v / 2,
                    m,
                    v,
                    0,
                    this.ai,
                    this.oi,
                  )
                : this.nu(
                    l.N,
                    l,
                    k + m / 2,
                    S + v / 2,
                    e.Mk,
                    -1,
                    this.ai,
                    this.oi,
                    1,
                    1,
                  );
            }
          }
        }
      }
    },
    $w: function () {
      return 0;
    },
    mW: function () {
      var a = 0,
        b;
      for (b = 0; b < this.C.Xb; a++, b++) {
        for (; null == this.C.X[a]; ) a++;
        var c = this.C.X[a];
        if (
          32 <= c.eb &&
          c.ha.hd == t.Xp &&
          c != this.o &&
          c.ext.identifier == this.identifier
        )
          return !0;
      }
      return !1;
    },
    dI: function () {
      return this.Zh;
    },
    VJ: function () {
      0 == this.FK &&
        ((this.FK = !0), this.qY(), this.g1(), this.Ja & p.eL && this.e1(this));
      return !1;
    },
    cH: function (a) {
      this.Bm = 0;
      this.Cm = this.C.m.rb;
      this.Ja = a.v();
      this.Rj = a.v();
      this.Fj = a.v();
      a.Qa(4);
      this.angle = (a.v() * g.M.pa.Ab) / 16;
      this.Ca = a.v();
      this.ai = a.v() / 100;
      this.oi = a.v() / 100;
      this.PN = a.v() / 100;
      this.RN = a.v() / 100;
      this.QN = a.v() / 100;
      this.ON = a.v() / 100;
      this.Ki = a.dK();
      this.identifier = a.v();
      this.KR = a.v() / 100;
      this.LR = a.v() / 100;
      a = new g.M.Math.kb(
        this.Ki * Math.cos(this.angle),
        this.Ki * Math.sin(this.angle),
      );
      this.nc = new g.i.qh(a, !1);
      this.Bw = new ea();
      this.nc.Jv(this.Bw);
      this.FK = !1;
      this.Nq = !0;
      this.Zh = !1;
      this.mW() && (this.identifier = 1e3 + this.o.Nc);
      this.m1();
      return 0;
    },
    gH: function () {
      this.nc = null;
    },
    hY: function (a) {
      var b = this.C.X[a & 65535];
      return null != b && b.Zo == a >> 16 ? b : null;
    },
    HH: function (a, b) {
      var c = a.Wa;
      if (null != c.Pe.Sg[b]) return b;
      if (0 != (c.Pe.kk[b] & 64)) b = c.Pe.kk[b] & 63;
      else if (0 != (c.Pe.Ci[b] & 64)) b = c.Pe.Ci[b] & 63;
      else {
        var d = b;
        0 > c.qu
          ? (b = c.Pe.Ci[b] & 63)
          : ((b -= c.qu),
            (b = 15 < (b & 31) ? c.Pe.Ci[d] & 63 : c.Pe.kk[d] & 63));
      }
      return b;
    },
    PB: function () {
      this.VJ(this);
      if (this.Zh) return this.Nq && this.nc.Jv(null), (this.Nq = !1), 0;
      this.Nq || this.nc.Jv(this.Bw);
      this.Nq = !0;
      var a;
      for (a = 0; a < this.eu.size(); a++) {
        var b = this.eu.get(a),
          b = this.hY(b),
          c = this.Be.get(a);
        null != b && c.Ya != b && (b = null);
        if (null == b) this.uy(c.N), this.eu.Cp(a), this.Be.Cp(a), a--;
        else {
          var d = new g.M.Math.kb(
            (this.Bm + b.w) / this.Ca,
            (this.Cm - b.A) / this.Ca,
          );
          c.N.Nv(d, (this.HH(b, b.b.Pa) * g.M.pa.Ab) / 16);
        }
      }
      null != this.nc && this.nc.zo(1 / this.C.m.GH, this.Rj, this.Fj);
      if (0 < this.uw.size()) {
        for (a = 0; a < this.uw.size(); a++) this.uy(this.uw.get(a));
        this.uw.clear();
      }
      return 0;
    },
    fc: function (a) {
      return null == a || null == a.H || 0 != (a.wa & aa.xi)
        ? null
        : a.b.sd == ia.Ai &&
            a.ha.bh.vf[a.H.hs].Ht &&
            ((a = a.H.oa.oe), a.sC == this.identifier)
          ? a
          : null;
    },
    YZ: function (a) {
      var b = a.ed(this.C, 0),
        b = this.fc(b);
      null != b && ((a = a.La(this.C, 1)), b.yA(a));
    },
    $Z: function (a) {
      var b = a.ed(this.C, 0),
        b = this.fc(b);
      null != b && ((a = a.La(this.C, 1)), b.Kv(a));
    },
    ZZ: function (a) {
      var b = a.ed(this.C, 0),
        b = this.fc(b);
      null != b && ((a = a.La(this.C, 1)), b.Ov(a));
    },
    a_: function (a) {
      var b = a.ed(this.C, 0),
        b = this.fc(b);
      null != b && ((a = a.La(this.C, 1)), b.Qs(a));
    },
    KZ: function () {
      this.Zh = !0;
    },
    SZ: function () {
      this.Zh = !1;
    },
    d_: function (a) {
      this.Rj = a.La(this.C, 0);
      this.Fj = a.La(this.C, 1);
    },
    c_: function (a) {
      this.Ki = a.GP(this.C, 0);
      a = new g.M.Math.kb(
        this.Ki * Math.cos(this.angle),
        this.Ki * Math.sin(this.angle),
      );
      this.nc.Qs(a);
    },
    b_: function (a) {
      this.NA = a.La(this.C, 0);
      this.angle = (this.NA * g.M.pa.Ab) / 180;
      a = new g.M.Math.kb(
        this.Ki * Math.cos(this.angle),
        this.Ki * Math.sin(this.angle),
      );
      this.nc.Qs(a);
    },
    xc: function (a) {
      a = new Ze(this, a);
      this.xk.add(a);
      return a;
    },
    kf: function (a, b, c) {
      var d,
        e = 0;
      if (null != a) {
        e = this.xk.indexOf(a);
        if (0 > e) return null;
        e++;
      }
      for (
        a = e;
        a < this.xk.size() && ((d = this.xk.get(a)), !u.he(d.JQ, b));
        a++
      );
      return a < this.xk.size() && (c == p.c0 || c == d.ia) ? d : null;
    },
    Yi: function (a) {
      var b = a.Ya,
        c = b.w,
        d = b.A;
      if (-1 != a.tC) {
        var b = b.b.uc,
          e = this.C.m.Ia.Ac(a.tC),
          b = (g.M.pa.Ab / 180) * b;
        a = e.al - e.Mb;
        e = e.cl - e.Gb;
        c += a * Math.cos(b) - e * Math.sin(b);
        d += a * Math.sin(b) + e * Math.cos(b);
      }
      return new g.M.Math.kb((this.Bm + c) / this.Ca, (this.Cm - d) / this.Ca);
    },
    HZ: function (a) {
      var b = a.ag(this.C, 0),
        c = this.fc(a.ed(this.C, 1));
      a = this.fc(a.ed(this.C, 2));
      if (null != c && null != a) {
        var b = this.xc(b),
          d = new g.i.T.kl();
        d.Xf = !0;
        var e = new g.M.Math.kb(c.N.R.position.x, c.N.R.position.y),
          f = new g.M.Math.kb(a.N.R.position.x, a.N.R.position.y);
        d.Yb(c.N, a.N, e, f);
        b.Rh(p.Co, this.nc.xc(d));
      }
      return !0;
    },
    GZ: function (a) {
      var b = a.ag(this.C, 0),
        c = this.fc(a.ed(this.C, 1));
      a = this.fc(a.ed(this.C, 2));
      if (null != c && null != a) {
        var b = this.xc(b),
          d = new g.i.T.kl();
        d.Xf = !0;
        d.cr = 0;
        d.Uq = 0;
        var e = this.Yi(c),
          f = this.Yi(a);
        d.Yb(c.N, a.N, e, f);
        b.Rh(p.Co, this.nc.xc(d));
      }
    },
    JZ: function (a) {
      var b = a.ag(this.C, 0),
        c = a.GP(this.C, 1);
      a = a.La(this.C, 2) / 100;
      for (var d = this.kf(null, b, p.Co); null != d; ) {
        var e = d.me;
        e.WM(c);
        e.VM(a);
        d = this.kf(d, b, p.Co);
      }
    },
    sv: function (a, b, c) {
      a = a.N.R.position;
      a.x += b / this.Ca;
      a.y -= c / this.Ca;
      return a;
    },
    IZ: function (a) {
      var b = a.ag(this.C, 0),
        c = this.fc(a.ed(this.C, 1)),
        d = a.La(this.C, 2),
        e = a.La(this.C, 3),
        f = this.fc(a.ed(this.C, 4)),
        h = a.La(this.C, 5);
      a = a.La(this.C, 6);
      null != c &&
        null != f &&
        ((b = this.xc(b)),
        (d = this.sv(c, d, e)),
        (h = this.sv(f, h, a)),
        (e = new g.i.T.kl()),
        (e.Xf = !0),
        e.Yb(c.N, f.N, d, h),
        b.Rh(p.Co, this.nc.xc(e)));
    },
    UZ: function (a) {
      var b = a.ag(this.C, 0),
        c = this.fc(a.ed(this.C, 1));
      a = this.fc(a.ed(this.C, 2));
      if (null != c && null != a) {
        var b = this.xc(b),
          d = new g.i.T.Xm();
        d.Xf = !0;
        d.Yb(c.N, a.N, c.N.R.position);
        b.Rh(p.bj, this.nc.xc(d));
      }
    },
    TZ: function (a) {
      var b = a.ag(this.C, 0),
        c = this.fc(a.ed(this.C, 1));
      a = this.fc(a.ed(this.C, 2));
      if (null != c && null != a) {
        var b = this.xc(b),
          d = new g.i.T.Xm();
        d.Xf = !0;
        var e = this.Yi(c);
        d.Yb(c.N, a.N, e);
        b.Rh(p.bj, this.nc.xc(d));
      }
    },
    VZ: function (a) {
      var b = a.ag(this.C, 0),
        c = this.fc(a.ed(this.C, 1)),
        d = a.La(this.C, 2),
        e = a.La(this.C, 3);
      a = this.fc(a.ed(this.C, 4));
      if (null != c && null != a) {
        var b = this.xc(b),
          f = new g.i.T.Xm();
        f.Xf = !0;
        d = this.sv(c, d, e);
        f.Yb(c.N, a.N, d);
        b.Rh(p.bj, this.nc.xc(f));
      }
    },
    WZ: function (a) {
      var b = a.ag(this.C, 0),
        c = (a.La(this.C, 1) * g.M.pa.Ab) / 180;
      a = (a.La(this.C, 2) * g.M.pa.Ab) / 180;
      for (var d = this.kf(null, b, p.bj); null != d; ) {
        var e = d.me;
        c > a ? e.fq(!1) : (e.fq(!0), e.Lv(c, a));
        d = this.kf(d, b, p.bj);
      }
    },
    XZ: function (a) {
      var b = a.ag(this.C, 0),
        c = (a.La(this.C, 1) / 100) * p.EF;
      a = (a.La(this.C, 2) / 100) * p.DF;
      for (var d = this.kf(null, b, p.bj); null != d; ) {
        var e = d.me,
          f = !0;
        0 == c && 0 == a && (f = !1);
        e.nv(f);
        e.$M(c);
        e.Mv(-a);
        d = this.kf(d, b, p.bj);
      }
    },
    MZ: function (a) {
      var b = a.ag(this.C, 0),
        c = this.fc(a.ed(this.C, 1));
      a = this.fc(a.ed(this.C, 2));
      if (null != c && null != a) {
        var b = this.xc(b),
          d = new g.i.T.Wm();
        d.Xf = !0;
        var e = c.N.R.position,
          f = a.N.R.position,
          f = new g.M.Math.kb(f.x - e.x, f.y - e.y);
        d.Yb(c.N, a.N, e, f);
        b.Rh(p.aj, this.nc.xc(d));
      }
    },
    LZ: function (a) {
      var b = a.ag(this.C, 0),
        c = this.fc(a.ed(this.C, 1));
      a = this.fc(a.ed(this.C, 2));
      if (null != c && null != a) {
        var b = this.xc(b),
          d = new g.i.T.Wm();
        d.Xf = !0;
        var e = this.Yi(c),
          f = this.Yi(a),
          f = new g.M.Math.kb(f.x - e.x, f.y - e.y);
        d.Yb(c.N, a.N, e, f);
        b.Rh(p.aj, this.nc.xc(d));
      }
    },
    NZ: function (a) {
      var b = a.ag(this.C, 0),
        c = this.fc(a.ed(this.C, 1)),
        d = a.La(this.C, 2),
        e = a.La(this.C, 3),
        f = this.fc(a.ed(this.C, 4)),
        h = a.La(this.C, 5),
        k = a.La(this.C, 6);
      null != c &&
        null != f &&
        ((b = this.xc(b)),
        (a = new g.i.T.Wm()),
        (a.Xf = !0),
        (d = this.sv(c, d, e)),
        (h = this.sv(c, h, k)),
        (h = new g.M.Math.kb(h.x - d.x, h.y - d.y)),
        a.Yb(c.N, f.N, d, h),
        b.Rh(p.aj, this.nc.xc(a)));
    },
    OZ: function (a) {
      var b = a.ag(this.C, 0),
        c = a.La(this.C, 1) / this.Ca;
      a = a.La(this.C, 2) / this.Ca;
      for (var d = this.kf(null, b, p.aj); null != d; ) {
        var e = d.me,
          f = !0;
        c > a && (f = !1);
        e.fq(f);
        e.Lv(c, a);
        d = this.kf(d, b, p.aj);
      }
    },
    PZ: function (a) {
      var b = a.ag(this.C, 0),
        c = (a.La(this.C, 1) / 100) * p.MM;
      a = (a.La(this.C, 2) / 100) * p.NM;
      for (var d = this.kf(null, b, p.aj); null != d; ) {
        var e = d.me,
          f = !0;
        0 == c && 0 == a && (f = !1);
        e.nv(f);
        e.ZM(c);
        e.Mv(a);
        d = this.kf(d, b, p.aj);
      }
    },
    RZ: function (a) {
      var b = a.ag(this.C, 0),
        c = this.fc(a.ed(this.C, 1)),
        d = this.fc(a.ed(this.C, 2));
      if (null != c && null != d) {
        var b = this.xc(b),
          e = new g.i.T.Jq();
        e.Xf = !0;
        var f = c.N.R.position,
          h = d.N.R.position,
          k = a.La(this.C, 3) / this.Ca,
          S = (a.La(this.C, 4) * g.M.pa.Ab) / 180,
          n = a.La(this.C, 5) / this.Ca,
          m = (a.La(this.C, 6) * g.M.pa.Ab) / 180;
        a = a.La(this.C, 7) / 100;
        k = new g.M.Math.kb(f.x + k * Math.cos(S), f.y + k * Math.sin(S));
        n = new g.M.Math.kb(h.x + n * Math.cos(m), h.y + n * Math.sin(m));
        e.Yb(c.N, d.N, k, n, f, h, a);
        b.Rh(p.iN, this.nc.xc(e));
      }
    },
    QZ: function (a) {
      var b = a.ag(this.C, 0),
        c = this.fc(a.ed(this.C, 1)),
        d = this.fc(a.ed(this.C, 2));
      if (null != c && null != d) {
        var b = this.xc(b),
          e = new g.i.T.Jq();
        e.Xf = !0;
        var f = this.Yi(c),
          h = this.Yi(d),
          k = a.La(this.C, 3) / this.Ca,
          S = (a.La(this.C, 4) * g.M.pa.Ab) / 180,
          n = a.La(this.C, 5) / this.Ca,
          m = (a.La(this.C, 6) * g.M.pa.Ab) / 180;
        a = a.La(this.C, 7) / 100;
        k = new g.M.Math.kb(f.x + k * Math.cos(S), f.y + k * Math.sin(S));
        n = new g.M.Math.kb(h.x + n * Math.cos(m), h.y + n * Math.sin(m));
        e.Yb(c.N, d.N, k, n, f, h, a);
        b.Rh(p.iN, this.nc.xc(e));
      }
    },
    FZ: function (a) {
      var b = a.ag(this.C, 0);
      for (a = 0; a < this.xk.size(); a++) {
        var c = this.xk.get(a);
        u.he(c.JQ, b) && (this.nc.kv(c.me), this.xk.Cp(a), a--);
      }
    },
    z1: function (a) {
      var b;
      for (b = 0; b < this.xk.size(); b++) {
        var c = this.xk.get(b);
        if (c.me.Xa == a || c.me.Ka == a) this.xk.Cp(b), b--;
      }
    },
    lca: function (a) {
      this.nc.kv(a);
    },
    pS: function (a) {
      if (
        this.Ja & p.yV &&
        0 > this.Be.indexOf(a) &&
        2 == a.eb &&
        null == this.fc(a)
      ) {
        var b = new H();
        b.ak(a, H.zi);
        b.N = this.im(
          g.i.od.re,
          a.w,
          a.A,
          11.25 * this.HH(a, a.b.Pa),
          0,
          b,
          0,
          0,
        );
        this.nu(b.N, b, a.w, a.A, a.b.Jb, this.KR, this.LR, 0, a.b.Sc, a.b.Tc);
        this.Be.add(b);
        this.eu.add((a.Zo << 16) | (a.Nc & 65535));
      }
    },
    K4: function (a, b, c, d) {
      if (this.Ja & p.eL) {
        var e = this.C.m.Ia.Ac(c),
          f = new H();
        f.ak(null, d == ta.wo ? H.to : H.uo);
        f.N = this.im(
          g.i.od.re,
          a + e.width / 2,
          b + e.height / 2,
          0,
          0,
          f,
          0,
          0,
        );
        this.nu(
          f.N,
          f,
          a + e.width / 2,
          b + e.height / 2,
          c,
          -1,
          this.ai,
          this.oi,
          1,
          1,
        );
        return f.N;
      }
      return null;
    },
    pca: function (a) {
      this.nc.JL(a);
    },
    EZ: function (a) {
      var b = a.ed(this.C, 0);
      if (
        0 > this.Be.indexOf(b) &&
        null != b.H &&
        null != b.Wa &&
        null == this.fc(b)
      ) {
        var c = new H();
        c.ak(b, H.zi);
        var d = 11.25 * this.HH(b, b.b.Pa),
          e = a.La(this.C, 1) / 100,
          f = a.La(this.C, 2) / 100;
        a = a.La(this.C, 3);
        c.N = this.im(g.i.od.re, b.w, b.A, d, 0, c, 0, 0);
        switch (a) {
          case 0:
            this.Pn(c.N, c, b.w, b.A, b.ea, b.ga, e, f, 0);
            break;
          case 1:
            this.qS(c.N, c, b.w, b.A, b.ea / 4, e, f, 0);
            break;
          default:
            this.nu(c.N, c, b.w, b.A, b.b.Jb, e, f, 0, b.b.Sc, b.b.Tc);
        }
        this.Be.add(c);
        this.eu.add((b.Zo << 16) | (b.Nc & 65535));
      }
    },
    e_: function (a) {
      a = a.ed(this.C, 0);
      a = this.Be.indexOf(a);
      if (0 <= a) {
        var b = this.Be.get(a);
        this.uy(b.N);
        this.Be.Cp(a);
        this.eu.Cp(a);
      }
    },
    action: function (a, b) {
      switch (a) {
        case p.BU:
          this.c_(b);
          break;
        case p.AU:
          this.b_(b);
          break;
        case p.fU:
          this.HZ(b);
          break;
        case p.eU:
          this.GZ(b);
          break;
        case p.gU:
          this.IZ(b);
          break;
        case p.sU:
          this.UZ(b);
          break;
        case p.rU:
          this.TZ(b);
          break;
        case p.tU:
          this.VZ(b);
          break;
        case p.kU:
          this.MZ(b);
          break;
        case p.jU:
          this.LZ(b);
          break;
        case p.lU:
          this.NZ(b);
          break;
        case p.cU:
          this.EZ(b);
          break;
        case p.DU:
          this.e_(b);
          break;
        case p.hU:
          this.JZ(b);
          break;
        case p.uU:
          this.WZ(b);
          break;
        case p.vU:
          this.XZ(b);
          break;
        case p.mU:
          this.OZ(b);
          break;
        case p.nU:
          this.PZ(b);
          break;
        case p.pU:
          this.RZ(b);
          break;
        case p.oU:
          this.QZ(b);
          break;
        case p.dU:
          this.FZ(b);
          break;
        case p.CU:
          this.d_(b);
          break;
        case p.wU:
          this.YZ(b);
          break;
        case p.yU:
          this.$Z(b);
          break;
        case p.xU:
          this.ZZ(b);
          break;
        case p.zU:
          this.a_(b);
          break;
        case p.iU:
          this.KZ(b);
          break;
        case p.qU:
          this.SZ(b);
      }
    },
    h$: function () {
      return this.Ki;
    },
    g$: function () {
      return this.NA;
    },
    j$: function () {
      return this.Rj;
    },
    i$: function () {
      return this.Fj;
    },
    g_: function () {
      var a = this.o.wl(),
        a = this.kf(null, a, p.Co);
      return null != a ? a.me.jp : 0;
    },
    f_: function () {
      var a = this.o.wl(),
        a = this.kf(null, a, p.Co);
      return null != a ? 100 * a.me.Ot : 0;
    },
    h_: function () {
      var a = this.o.wl(),
        a = this.kf(null, a, p.bj);
      if (null != a) return (180 * a.me.Iz()) / g.M.pa.Ab;
    },
    n_: function () {
      var a = this.o.wl(),
        a = this.kf(null, a, p.bj);
      return null != a ? (180 * a.me.Jz()) / g.M.pa.Ab : 0;
    },
    k_: function () {
      var a = this.o.wl(),
        a = this.kf(null, a, p.bj);
      return null != a ? (100 * a.me.z8()) / p.EF : 0;
    },
    j_: function () {
      var a = this.o.wl(),
        a = this.kf(null, a, p.bj);
      return null != a ? (100 * a.me.Rl) / p.DF : 0;
    },
    i_: function () {
      var a = this.o.wl(),
        a = this.kf(null, a, p.aj);
      return null != a ? a.me.Iz() * this.Ca : 0;
    },
    o_: function () {
      var a = this.o.wl(),
        a = this.kf(null, a, p.aj);
      return null != a ? a.me.Jz() * this.Ca : 0;
    },
    m_: function () {
      var a = this.o.wl(),
        a = this.kf(null, a, p.aj);
      return null != a ? (100 * a.me.Rt) / p.MM : 0;
    },
    l_: function () {
      var a = this.o.wl(),
        a = this.kf(null, a, p.aj);
      return null != a ? (100 * a.me.Rl) / p.NM : 0;
    },
    Rw: function (a) {
      switch (a) {
        case p.VW:
          return this.Ki;
        case p.UW:
          return this.NA;
        case p.eX:
          return this.Rj;
        case p.bX:
          return this.Fj;
        case p.TW:
          return this.g_();
        case p.SW:
          return this.f_();
        case p.WW:
          return this.h_();
        case p.cX:
          return this.n_();
        case p.ZW:
          return this.k_();
        case p.YW:
          return this.j_();
        case p.XW:
          return this.i_();
        case p.dX:
          return this.o_();
        case p.aX:
          return this.m_();
        case p.$W:
          return this.l_();
      }
      return 0;
    },
  });
  ea.vE = -917504;
  ea.qL = -851968;
  ea.Vj = 1;
  ea.Wj = 2;
  ea.Xj = 4;
  ea.Uj = 8;
  ea.rz = -786432;
  ea.X8 = 305419896;
  ea.tz = 1;
  ea.yL = 2;
  ea.zL = 3;
  ea.AL = 4;
  ea.xL = 5;
  ea.YV = 6;
  ea.uz = 7;
  ea.sz = 1;
  ea.prototype = {
    OM: function (a) {
      this.LG = !0;
      var b = new g.K.Kq();
      a.wY(b);
      var c = a.qd.N,
        d = a.yd.N,
        e = a.qd.Zj().o.c,
        f = c.Zj(),
        h = d.Zj();
      if (null == f || null == h) a.ob();
      else if (f.ia == H.bA || h.ia == H.bA)
        switch (((b = f.ia == H.bA ? h : f), (f = b.Ya), b.ia)) {
          case H.Ph:
            b.Vf();
            f = b.Ya;
            e.s.ld = ea.Vj;
            e.s.Gd(f, ea.rz);
            b.ah || a.ob();
            break;
          case H.zi:
            a.ob();
            break;
          case H.gk:
            c = b;
            e = c.parent;
            e.pl = c;
            e.ql = null;
            e.Fb = !1;
            f.Xe(ea.yL, 0);
            e.Fb || a.ob();
            break;
          case H.fk:
            (c = b),
              (e = c.parent),
              (e.an = c),
              (e.Fb = !1),
              f.Xe(ea.yL, 0),
              e.Fb || a.ob();
        }
      else if (f.ia == H.cA || h.ia == H.cA)
        switch (((b = f.ia == H.cA ? h : f), (f = b.Ya), b.ia)) {
          case H.Ph:
            b.Vf();
            f = b.Ya;
            e.s.ld = ea.Wj;
            e.s.Gd(f, ea.rz);
            b.ah || a.ob();
            break;
          case H.zi:
            a.ob();
            break;
          case H.gk:
            c = b;
            e = c.parent;
            e.pl = c;
            e.ql = null;
            e.Fb = !1;
            f.Xe(ea.zL, 0);
            e.Fb || a.ob();
            break;
          case H.fk:
            (c = b),
              (e = c.parent),
              (e.an = c),
              (e.Fb = !1),
              f.Xe(ea.zL, 0),
              e.Fb || a.ob();
        }
      else if (f.ia == H.dA || h.ia == H.dA)
        switch (((b = f.ia == H.dA ? h : f), (f = b.Ya), b.ia)) {
          case H.Ph:
            b.Vf();
            f = b.Ya;
            e.s.ld = ea.Xj;
            e.s.Gd(f, ea.rz);
            b.ah || a.ob();
            break;
          case H.zi:
            a.ob();
            break;
          case H.gk:
            c = b;
            e = c.parent;
            e.pl = c;
            e.ql = null;
            e.Fb = !1;
            f.Xe(ea.AL, 0);
            e.Fb || a.ob();
            break;
          case H.fk:
            (c = b),
              (e = c.parent),
              (e.an = c),
              (e.Fb = !1),
              f.Xe(ea.AL, 0),
              e.Fb || a.ob();
        }
      else if (f.ia == H.aA || h.ia == H.aA)
        switch (((b = f.ia == H.aA ? h : f), (f = b.Ya), b.ia)) {
          case H.Ph:
            b.Vf();
            f = b.Ya;
            e.s.ld = ea.Uj;
            e.s.Gd(f, ea.rz);
            b.ah || a.ob();
            break;
          case H.zi:
            a.ob();
            break;
          case H.gk:
            c = b;
            e = c.parent;
            e.pl = c;
            e.ql = null;
            e.Fb = !1;
            f.Xe(ea.xL, 0);
            e.Fb || a.ob();
            break;
          case H.fk:
            (c = b),
              (e = c.parent),
              (e.an = c),
              (e.Fb = !1),
              f.Xe(ea.xL, 0),
              e.Fb || a.ob();
        }
      else if (f.ia == H.to || h.ia == H.to)
        switch (((b = f.ia == H.to ? h : f), (f = b.Ya), b.ia)) {
          case H.Ph:
            b.Vf();
            f = b.Ya;
            e.s.Gd(f, ea.qL);
            b.ah || a.ob();
            break;
          case H.zi:
            a.ob();
            break;
          case H.gk:
            c = b;
            e = c.parent;
            e.pl = c;
            e.ql = null;
            e.Fb = !1;
            f.Xe(ea.uz, 0);
            e.Fb || a.ob();
            break;
          case H.fk:
            (c = b),
              (e = c.parent),
              (e.an = c),
              (e.Fb = !1),
              f.Xe(ea.uz, 0),
              e.Fb || a.ob();
        }
      else if (f.ia == H.uo || h.ia == H.uo)
        switch (
          (f.ia == H.uo ? ((b = h), (h = f), (c = d.u)) : ((b = f), (c = c.u)),
          (f = b.Ya),
          b.ia)
        ) {
          case H.Ph:
            b.Vf();
            e.s.Gd(f, ea.qL);
            if (b.ah) {
              e = !1;
              if (null != b.Tb) {
                d = {};
                b.Tb.uS(h.N, d);
                var b = d.x + h.De.right,
                  k = d.y + h.De.bottom;
                f.w >= d.x + h.De.left && f.w <= b && f.A <= k && (e = !0);
              }
              e || (0 <= c.y && a.ob());
            } else a.ob();
            break;
          case H.zi:
            a.ob();
            break;
          case H.gk:
            c = b;
            e = c.parent;
            e.pl = c;
            e.ql = null;
            e.Fb = !1;
            c = c.N.u;
            f.Xe(ea.uz, 0);
            e.Fb ? 0 <= c.y && a.ob() : a.ob();
            break;
          case H.fk:
            (c = b),
              (e = c.parent),
              (e.an = c),
              (e.Fb = !1),
              (c = c.N.u),
              f.Xe(ea.uz, 0),
              e.Fb ? 0 <= c.y && a.ob() : a.ob();
        }
      else
        switch (((obstacle = b = f), b.ia)) {
          case H.Ph:
            switch (h.ia) {
              case H.Ph:
                b.C3 && ((f = b), (b = h), (h = f));
                b.Vf();
                h.Vf();
                f = b.Ya;
                c = h.Ya;
                e.s.zy = c.Nc;
                e.s.Gd(f, ea.vE);
                b.ah || h.ah || a.ob();
                break;
              case H.zi:
                b.Vf();
                f = b.Ya;
                c = h.Ya;
                e.s.zy = c.Nc;
                e.s.Gd(f, ea.vE);
                b.ah || a.ob();
                break;
              case H.gk:
                c = h;
                e = c.parent;
                e.pl = c;
                e.ql = null;
                e.Fb = !1;
                e.yw = b.Ya;
                b.Vf();
                c.Ya.Xe(ea.tz, obstacle.Ya.Bc);
                e.Fb || a.ob();
                break;
              case H.fk:
                (c = h),
                  (f = c.parent),
                  (f.q1 = obstacle),
                  (f.an = c),
                  (f.Fb = !1),
                  (f.yw = b.Ya),
                  b.Vf(),
                  c.Ya.Xe(ea.sz, obstacle.Ya.Bc),
                  b.ah || f.Fb || a.ob();
            }
            break;
          case H.zi:
            switch (h.ia) {
              case H.Ph:
                h.Vf();
                e.s.zy = b.Ya.Nc;
                e.s.Gd(h.Ya, ea.vE);
                h.ah || a.ob();
                break;
              case H.zi:
                a.ob();
                break;
              case H.gk:
                c = h;
                e = c.parent;
                e.pl = c;
                e.ql = null;
                e.Fb = !1;
                e.yw = b.Ya;
                b.Vf();
                c.Ya.Xe(ea.tz, obstacle.Ya.Bc);
                e.Fb || a.ob();
                break;
              case H.fk:
                (c = h),
                  (f = c.parent),
                  (f.q1 = obstacle),
                  (f.an = c),
                  (f.Fb = !1),
                  (f.yw = b.Ya),
                  b.Vf(),
                  c.Ya.Xe(ea.sz, obstacle.Ya.Bc),
                  f.Fb || a.ob();
            }
            break;
          case H.gk:
            switch (h.ia) {
              case H.Ph:
                c = b;
                e = c.parent;
                e.pl = c;
                e.ql = null;
                e.Fb = !1;
                e.yw = h.Ya;
                h.Vf();
                b.Ya.Xe(ea.tz, h.Ya.Bc);
                e.Fb || a.ob();
                break;
              case H.zi:
                c = b;
                e = c.parent;
                e.pl = c;
                e.ql = null;
                e.Fb = !1;
                h.Vf();
                b.Ya.Xe(ea.tz, h.Ya.Bc);
                e.Fb || a.ob();
                break;
              case H.gk:
                e = b.parent;
                e.pl = f;
                e.ql = h;
                e.Fb = !1;
                b.Ya.Xe(ea.YV, 0);
                e.Fb || a.ob();
                break;
              case H.fk:
                a.ob();
            }
            break;
          case H.fk:
            switch (h.ia) {
              case H.Ph:
                c = b;
                e = c.parent;
                e.an = c;
                e.Fb = !1;
                e.yw = h.Ya;
                h.Vf();
                f.Ya.Xe(ea.sz, h.Ya.Bc);
                h.ah || e.Fb || a.ob();
                break;
              case H.zi:
                c = b;
                e = c.parent;
                e.an = c;
                e.Fb = !1;
                h.Vf();
                f.Ya.Xe(ea.sz, h.Ya.Bc);
                h.ah || e.Fb || a.ob();
                break;
              case H.gk:
                a.ob();
                break;
              case H.fk:
                a.ob();
            }
        }
      this.LG = !1;
    },
  };
  Ze.prototype = {
    kv: function () {
      null != this.me && this.R3.nc.kv(this.me);
    },
    Rh: function (a, b) {
      this.ia = a;
      this.me = b;
    },
  };
  var g = {};
  (function (a, b) {
    function c() {}
    !(Object.prototype.defineProperty instanceof Function) &&
      Object.prototype.__defineGetter__ instanceof Function &&
      Object.prototype.__defineSetter__ instanceof Function &&
      (Object.defineProperty = function (a, b, c) {
        c.get instanceof Function && a.__defineGetter__(b, c.get);
        c.set instanceof Function && a.__defineSetter__(b, c.set);
      });
    a.Ec = function (a, b) {
      c.prototype = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
    };
    a.e2 = function (a, b) {
      return function () {
        b.apply(a, arguments);
      };
    };
    a.nZ = function (a) {
      a === b && (a = 0);
      for (var c = Array(a || 0), d = 0; d < a; ++d) c[d] = 0;
      return c;
    };
    a.is = function (a, c) {
      return null === a
        ? !1
        : (c instanceof Function && a instanceof c) ||
            (a.constructor.PF != b && a.constructor.PF[c])
          ? !0
          : !1;
    };
    a.Dj = function (a) {
      return Math.abs(parseInt(a));
    };
  })(g);
  var ya = Array,
    Ma = g.nZ;
  "undefined" === typeof g && (g = {});
  "undefined" === typeof g.K && (g.K = {});
  "undefined" === typeof g.K.pb && (g.K.pb = {});
  "undefined" === typeof g.M && (g.M = {});
  "undefined" === typeof g.M.Math && (g.M.Math = {});
  "undefined" === typeof g.i && (g.i = {});
  "undefined" === typeof g.i.ua && (g.i.ua = {});
  "undefined" === typeof g.i.Wc && (g.i.Wc = {});
  "undefined" === typeof g.i.T && (g.i.T = {});
  (function () {
    function a() {
      a.QA.apply(this, arguments);
    }
    function b() {
      b.cG.apply(this, arguments);
    }
    function c() {
      c.Uv.apply(this, arguments);
      this.constructor === c && this.Uv.apply(this, arguments);
    }
    function d() {
      d.Ef.apply(this, arguments);
    }
    function e() {
      e.Ws.apply(this, arguments);
      this.constructor === e && this.Ws.apply(this, arguments);
    }
    function f() {
      f.TA.apply(this, arguments);
    }
    function h() {
      h.Hq.apply(this, arguments);
    }
    function k() {
      k.UA.apply(this, arguments);
    }
    function S() {
      S.VA.apply(this, arguments);
    }
    function n() {
      n.WA.apply(this, arguments);
    }
    function m() {
      m.Xv.apply(this, arguments);
      this.constructor === m && this.Xv.apply(this, arguments);
    }
    function v() {
      v.XA.apply(this, arguments);
    }
    function p() {
      p.oG.apply(this, arguments);
    }
    function l() {
      l.pG.apply(this, arguments);
    }
    function q() {
      q.Um.apply(this, arguments);
      this.constructor === q && this.Um.apply(this, arguments);
    }
    function t() {
      t.gw.apply(this, arguments);
      this.constructor === t && this.gw.apply(this, arguments);
    }
    function M() {
      M.vG.apply(this, arguments);
    }
    function L() {
      L.lw.apply(this, arguments);
      this.constructor === L && this.lw.apply(this, arguments);
    }
    function w() {
      w.zG.apply(this, arguments);
    }
    function B() {
      B.AG.apply(this, arguments);
    }
    function u() {
      u.bt.apply(this, arguments);
    }
    function z() {
      z.mw.apply(this, arguments);
      this.constructor === z && this.mw.apply(this, arguments);
    }
    function C() {
      C.ZA.apply(this, arguments);
    }
    function F() {
      F.BG.apply(this, arguments);
    }
    function I() {
      I.ph.apply(this, arguments);
    }
    function H() {
      H.$A.apply(this, arguments);
    }
    function J() {
      J.Kq.apply(this, arguments);
      this.constructor === J && this.Kq.apply(this, arguments);
    }
    function K() {
      K.xE.apply(this, arguments);
    }
    function r() {
      r.ME.apply(this, arguments);
    }
    function E() {
      E.Io.apply(this, arguments);
      this.constructor === E && this.Io.apply(this, arguments);
    }
    function D() {
      D.Yv.apply(this, arguments);
      this.constructor === D && this.Yv.apply(this, arguments);
    }
    function N() {
      N.Zv.apply(this, arguments);
      this.constructor === N && this.Zv.apply(this, arguments);
    }
    function T() {
      T.YA.apply(this, arguments);
    }
    function ja() {
      ja.Fi.apply(this, arguments);
      this.constructor === ja && this.Fi.apply(this, arguments);
    }
    function na() {
      na.Yc.apply(this, arguments);
      this.constructor === na && this.Yc.apply(this, arguments);
    }
    function ua() {
      ua.Us.apply(this, arguments);
      this.constructor === ua && this.Us.apply(this, arguments);
    }
    function Ua() {
      Ua.pa.apply(this, arguments);
    }
    function Ya() {
      Ya.Vm.apply(this, arguments);
      this.constructor === Ya && this.Vm.apply(this, arguments);
    }
    function ba() {
      ba.Zs.apply(this, arguments);
      this.constructor === ba && this.Zs.apply(this, arguments);
    }
    function Ha() {
      Ha.Ei.apply(this, arguments);
    }
    function cf() {
      cf.nw.apply(this, arguments);
    }
    function bc() {
      bc.Ko.apply(this, arguments);
      this.constructor === bc && this.Ko.apply(this, arguments);
    }
    function cc() {
      cc.kb.apply(this, arguments);
      this.constructor === cc && this.kb.apply(this, arguments);
    }
    function dc() {
      dc.ct.apply(this, arguments);
      this.constructor === dc && this.ct.apply(this, arguments);
    }
    function ec() {
      ec.od.apply(this, arguments);
      this.constructor === ec && this.od.apply(this, arguments);
    }
    function fc() {
      fc.Gq.apply(this, arguments);
      this.constructor === fc && this.Gq.apply(this, arguments);
    }
    function df() {
      df.RA.apply(this, arguments);
    }
    function ef() {
      ef.jG.apply(this, arguments);
    }
    function O() {
      O.SA.apply(this, arguments);
    }
    function gc() {
      gc.Xs.apply(this, arguments);
      this.constructor === gc && this.Xs.apply(this, arguments);
    }
    function Q() {
      Q.Wh.apply(this, arguments);
      this.constructor === Q && this.Wh.apply(this, arguments);
    }
    function R() {
      R.nG.apply(this, arguments);
    }
    function V() {
      V.rG.apply(this, arguments);
    }
    function U() {
      U.$v.apply(this, arguments);
      this.constructor === U && this.$v.apply(this, arguments);
    }
    function W() {
      W.ll.apply(this, arguments);
      this.constructor === W && this.ll.apply(this, arguments);
    }
    function X() {
      X.Ys.apply(this, arguments);
      this.constructor === X && this.Ys.apply(this, arguments);
    }
    function Y() {
      Y.aB.apply(this, arguments);
    }
    function Z() {
      Z.qh.apply(this, arguments);
      this.constructor === Z && this.qh.apply(this, arguments);
    }
    function aa() {
      aa.eG.apply(this, arguments);
    }
    function ca() {
      ca.Ob.apply(this, arguments);
      this.constructor === ca && this.Ob.apply(this, arguments);
    }
    function da() {
      da.Vv.apply(this, arguments);
      this.constructor === da && this.Vv.apply(this, arguments);
    }
    function ea() {
      ea.hG.apply(this, arguments);
    }
    function fa() {
      fa.iG.apply(this, arguments);
    }
    function ga() {
      ga.Vs.apply(this, arguments);
      this.constructor === ga && this.Vs.apply(this, arguments);
    }
    function ha() {
      ha.kG.apply(this, arguments);
    }
    function ia() {
      ia.lG.apply(this, arguments);
    }
    function ka() {
      ka.Jo.apply(this, arguments);
      this.constructor === ka && this.Jo.apply(this, arguments);
    }
    function la() {
      la.qG.apply(this, arguments);
    }
    function ma() {
      ma.jw.apply(this, arguments);
      this.constructor === ma && this.jw.apply(this, arguments);
    }
    function oa() {
      oa.wG.apply(this, arguments);
    }
    function qa() {
      qa.xG.apply(this, arguments);
    }
    function ra() {
      ra.yG.apply(this, arguments);
    }
    function pa() {
      pa.Iq.apply(this, arguments);
      this.constructor === pa && this.Iq.apply(this, arguments);
    }
    function sa() {
      sa.dG.apply(this, arguments);
    }
    function ta() {
      ta.fG.apply(this, arguments);
    }
    function va() {
      va.gG.apply(this, arguments);
    }
    function wa() {
      wa.qe.apply(this, arguments);
    }
    function xa() {
      xa.mG.apply(this, arguments);
    }
    function ya() {
      ya.sG.apply(this, arguments);
    }
    function Ca() {
      Ca.CG.apply(this, arguments);
    }
    function za() {
      za.Wv.apply(this, arguments);
      this.constructor === za && this.Wv.apply(this, arguments);
    }
    function Aa() {
      Aa.kl.apply(this, arguments);
      this.constructor === Aa && this.kl.apply(this, arguments);
    }
    function Ba() {
      Ba.aw.apply(this, arguments);
      this.constructor === Ba && this.aw.apply(this, arguments);
    }
    function Da() {
      Da.bw.apply(this, arguments);
      this.constructor === Da && this.bw.apply(this, arguments);
    }
    function Ea() {
      Ea.cw.apply(this, arguments);
      this.constructor === Ea && this.cw.apply(this, arguments);
    }
    function Fa() {
      Fa.dw.apply(this, arguments);
      this.constructor === Fa && this.dw.apply(this, arguments);
    }
    function Ia() {
      Ia.tG.apply(this, arguments);
    }
    function Ga() {
      Ga.ta.apply(this, arguments);
      this.constructor === Ga && this.ta.apply(this, arguments);
    }
    function Ja() {
      Ja.Sa.apply(this, arguments);
      this.constructor === Ja && this.Sa.apply(this, arguments);
    }
    function Na() {
      Na.uG.apply(this, arguments);
    }
    function Ka() {
      Ka.ew.apply(this, arguments);
      this.constructor === Ka && this.ew.apply(this, arguments);
    }
    function La() {
      La.fw.apply(this, arguments);
      this.constructor === La && this.fw.apply(this, arguments);
    }
    function Ma() {
      Ma.hw.apply(this, arguments);
      this.constructor === Ma && this.hw.apply(this, arguments);
    }
    function Oa() {
      Oa.iw.apply(this, arguments);
      this.constructor === Oa && this.iw.apply(this, arguments);
    }
    function Pa() {
      Pa.kw.apply(this, arguments);
      this.constructor === Pa && this.kw.apply(this, arguments);
    }
    function Qa() {
      Qa.Wm.apply(this, arguments);
      this.constructor === Qa && this.Wm.apply(this, arguments);
    }
    function Ra() {
      Ra.$s.apply(this, arguments);
      this.constructor === Ra && this.$s.apply(this, arguments);
    }
    function Sa() {
      Sa.Jq.apply(this, arguments);
      this.constructor === Sa && this.Jq.apply(this, arguments);
    }
    function Ta() {
      Ta.at.apply(this, arguments);
      this.constructor === Ta && this.at.apply(this, arguments);
    }
    function Va() {
      Va.Xm.apply(this, arguments);
      this.constructor === Va && this.Xm.apply(this, arguments);
    }
    function Wa() {
      Wa.ow.apply(this, arguments);
      this.constructor === Wa && this.ow.apply(this, arguments);
    }
    function Xa() {
      Xa.pw.apply(this, arguments);
      this.constructor === Xa && this.pw.apply(this, arguments);
    }
    g.K.CY = "Box2D.Collision.IBroadPhase";
    g.K.QA = a;
    g.K.cG = b;
    g.K.Uv = c;
    g.K.Ef = d;
    g.K.Ws = e;
    g.K.TA = f;
    g.K.Hq = h;
    g.K.UA = k;
    g.K.VA = S;
    g.K.WA = n;
    g.K.Xv = m;
    g.K.XA = v;
    g.K.oG = p;
    g.K.pG = l;
    g.K.Um = q;
    g.K.gw = t;
    g.K.vG = M;
    g.K.lw = L;
    g.K.zG = w;
    g.K.AG = B;
    g.K.bt = u;
    g.K.mw = z;
    g.K.ZA = C;
    g.K.BG = F;
    g.K.ph = I;
    g.K.$A = H;
    g.K.Kq = J;
    g.K.xE = K;
    g.K.ME = r;
    g.K.pb.Io = E;
    g.K.pb.Yv = D;
    g.K.pb.Zv = N;
    g.K.pb.YA = T;
    g.K.pb.Fi = ja;
    g.K.pb.Yc = na;
    g.M.uaa = "Box2D.Common.b2internal";
    g.M.Us = ua;
    g.M.pa = Ua;
    g.M.Math.Vm = Ya;
    g.M.Math.Zs = ba;
    g.M.Math.Ei = Ha;
    g.M.Math.nw = cf;
    g.M.Math.Ko = bc;
    g.M.Math.kb = cc;
    g.M.Math.ct = dc;
    g.i.od = ec;
    g.i.Gq = fc;
    g.i.RA = df;
    g.i.jG = ef;
    g.i.SA = O;
    g.i.Xs = gc;
    g.i.Wh = Q;
    g.i.nG = R;
    g.i.rG = V;
    g.i.$v = U;
    g.i.ll = W;
    g.i.Ys = X;
    g.i.aB = Y;
    g.i.qh = Z;
    g.i.ua.eG = aa;
    g.i.ua.Ob = ca;
    g.i.ua.Vv = da;
    g.i.ua.hG = ea;
    g.i.ua.iG = fa;
    g.i.ua.Vs = ga;
    g.i.ua.kG = ha;
    g.i.ua.lG = ia;
    g.i.ua.Jo = ka;
    g.i.ua.qG = la;
    g.i.ua.jw = ma;
    g.i.ua.wG = oa;
    g.i.ua.xG = qa;
    g.i.ua.yG = ra;
    g.i.ua.Iq = pa;
    g.i.Wc.dG = sa;
    g.i.Wc.fG = ta;
    g.i.Wc.gG = va;
    g.i.Wc.qe = wa;
    g.i.Wc.mG = xa;
    g.i.Wc.sG = ya;
    g.i.Wc.CG = Ca;
    g.i.T.Wv = za;
    g.i.T.kl = Aa;
    g.i.T.aw = Ba;
    g.i.T.bw = Da;
    g.i.T.cw = Ea;
    g.i.T.dw = Fa;
    g.i.T.tG = Ia;
    g.i.T.ta = Ga;
    g.i.T.Sa = Ja;
    g.i.T.uG = Na;
    g.i.T.ew = Ka;
    g.i.T.fw = La;
    g.i.T.hw = Ma;
    g.i.T.iw = Oa;
    g.i.T.kw = Pa;
    g.i.T.Wm = Qa;
    g.i.T.$s = Ra;
    g.i.T.Jq = Sa;
    g.i.T.at = Ta;
    g.i.T.Xm = Va;
    g.i.T.ow = Wa;
    g.i.T.pw = Xa;
  })();
  g.fe = [];
  (function () {
    var a = g.K.pb.Io,
      b = g.K.pb.Fi,
      c = g.K.pb.Yc,
      d = g.M.pa,
      e = g.M.Math.Ei,
      f = g.M.Math.nw,
      h = g.M.Math.Ko,
      k = g.M.Math.kb,
      p = g.K.QA,
      n = g.K.cG,
      m = g.K.Uv,
      v = g.K.Ef,
      q = g.K.Ws,
      l = g.K.TA,
      t = g.K.Hq,
      u = g.K.UA,
      M = g.K.VA,
      L = g.K.WA,
      w = g.K.Xv,
      B = g.K.XA,
      G = g.K.oG,
      z = g.K.pG,
      C = g.K.Um,
      F = g.K.gw,
      I = g.K.vG,
      H = g.K.lw,
      J = g.K.zG,
      K = g.K.AG,
      r = g.K.bt,
      E = g.K.mw,
      D = g.K.ZA,
      N = g.K.BG,
      T = g.K.ph,
      ja = g.K.$A,
      na = g.K.Kq,
      ua = g.K.xE,
      Ua = g.K.ME,
      Ya = g.K.CY;
    p.QA = function () {
      this.lowerBound = new k();
      this.upperBound = new k();
    };
    p.prototype.Ds = function () {
      var a = this.upperBound.y - this.lowerBound.y;
      return (a =
        (a = 0 <= this.upperBound.x - this.lowerBound.x && 0 <= a) &&
        this.lowerBound.Ds() &&
        this.upperBound.Ds());
    };
    p.prototype.$X = function () {
      return new k(
        (this.lowerBound.x + this.upperBound.x) / 2,
        (this.lowerBound.y + this.upperBound.y) / 2,
      );
    };
    p.prototype.yE = function (a) {
      var b;
      return (b =
        (b =
          (b =
            (b = this.lowerBound.x <= a.lowerBound.x) &&
            this.lowerBound.y <= a.lowerBound.y) &&
          a.upperBound.x <= this.upperBound.x) &&
        a.upperBound.y <= this.upperBound.y);
    };
    p.prototype.Do = function (a) {
      var b = a.lowerBound.y - this.upperBound.y,
        c = this.lowerBound.y - a.upperBound.y;
      return 0 < a.lowerBound.x - this.upperBound.x ||
        0 < b ||
        0 < this.lowerBound.x - a.upperBound.x ||
        0 < c
        ? !1
        : !0;
    };
    p.rs = function (a, b) {
      var c = new p();
      c.rs(a, b);
      return c;
    };
    p.prototype.rs = function (a, b) {
      this.lowerBound.x = Math.min(a.lowerBound.x, b.lowerBound.x);
      this.lowerBound.y = Math.min(a.lowerBound.y, b.lowerBound.y);
      this.upperBound.x = Math.max(a.upperBound.x, b.upperBound.x);
      this.upperBound.y = Math.max(a.upperBound.y, b.upperBound.y);
    };
    n.cG = function () {};
    n.prototype.$_ = function (a) {
      var b = this.value,
        c = this.KJ,
        d = this.BK;
      this.value = a.value;
      this.KJ = a.KJ;
      this.BK = a.BK;
      a.value = b;
      a.KJ = c;
      a.BK = d;
    };
    m.Uv = function () {};
    m.prototype.Uv = function () {
      this.pQ = new Ma();
      this.pQ[0] = 0;
      this.pQ[1] = 0;
      this.ST = new Ma();
      this.ST[0] = 0;
      this.ST[1] = 0;
    };
    v.Ef = function () {};
    v.FL = function (a, b, c, d) {
      void 0 === d && (d = 0);
      var e,
        f = 0;
      e = b[0];
      var g = e.Vi;
      e = b[1];
      var k = e.Vi,
        r = c.x * g.x + c.y * g.y - d;
      e = c.x * k.x + c.y * k.y - d;
      0 >= r && a[f++].Set(b[0]);
      0 >= e && a[f++].Set(b[1]);
      0 > r * e &&
        ((c = r / (r - e)),
        (e = a[f]),
        (e = e.Vi),
        (e.x = g.x + c * (k.x - g.x)),
        (e.y = g.y + c * (k.y - g.y)),
        (e = a[f]),
        (e.id = (0 < r ? b[0] : b[1]).id),
        ++f);
      return f;
    };
    v.Bz = function (a, b, c, d, e) {
      void 0 === c && (c = 0);
      var f = a.na,
        g = a.Jd;
      a = parseInt(d.ad);
      d = d.na;
      var k, r;
      k = b.P;
      r = g[c];
      var g = k.g.x * r.x + k.h.x * r.y,
        h = k.g.y * r.x + k.h.y * r.y;
      k = e.P;
      var D = k.g.x * g + k.g.y * h;
      k = k.h.x * g + k.h.y * h;
      for (var E = 0, N = Number.MAX_VALUE, l = 0; l < a; ++l)
        (r = d[l]), (r = r.x * D + r.y * k), r < N && ((N = r), (E = l));
      r = f[c];
      k = b.P;
      c = b.position.x + (k.g.x * r.x + k.h.x * r.y);
      b = b.position.y + (k.g.y * r.x + k.h.y * r.y);
      r = d[E];
      k = e.P;
      return (
        (e.position.x + (k.g.x * r.x + k.h.x * r.y) - c) * g +
        (e.position.y + (k.g.y * r.x + k.h.y * r.y) - b) * h
      );
    };
    v.RL = function (a, b, c, d, e) {
      var f = parseInt(b.ad),
        g = b.Jd,
        k,
        r;
      r = e.P;
      k = d.rn;
      var h = e.position.x + (r.g.x * k.x + r.h.x * k.y),
        D = e.position.y + (r.g.y * k.x + r.h.y * k.y);
      r = c.P;
      k = b.rn;
      h -= c.position.x + (r.g.x * k.x + r.h.x * k.y);
      D -= c.position.y + (r.g.y * k.x + r.h.y * k.y);
      r = h * c.P.g.x + D * c.P.g.y;
      for (
        var D = h * c.P.h.x + D * c.P.h.y, h = 0, E = -Number.MAX_VALUE, N = 0;
        N < f;
        ++N
      )
        (k = g[N]), (k = k.x * r + k.y * D), k > E && ((E = k), (h = N));
      g = v.Bz(b, c, h, d, e);
      E = parseInt(0 <= h - 1 ? h - 1 : f - 1);
      r = v.Bz(b, c, E, d, e);
      N = parseInt(h + 1 < f ? h + 1 : 0);
      D = v.Bz(b, c, N, d, e);
      if (r > g && r > D) k = -1;
      else if (D > g) (k = 1), (E = N), (r = D);
      else return (a[0] = h), g;
      for (;;)
        if (
          ((h = -1 == k ? (0 <= E - 1 ? E - 1 : f - 1) : E + 1 < f ? E + 1 : 0),
          (g = v.Bz(b, c, h, d, e)),
          g > r)
        )
          (E = h), (r = g);
        else break;
      a[0] = E;
      return r;
    };
    v.OX = function (a, b, c, d, e, f) {
      void 0 === d && (d = 0);
      var g = b.Jd,
        k = parseInt(e.ad);
      b = e.na;
      e = e.Jd;
      var r;
      r = c.P;
      c = g[d];
      var g = r.g.x * c.x + r.h.x * c.y,
        h = r.g.y * c.x + r.h.y * c.y;
      r = f.P;
      c = r.g.x * g + r.g.y * h;
      h = r.h.x * g + r.h.y * h;
      g = c;
      r = 0;
      for (var D = Number.MAX_VALUE, E = 0; E < k; ++E)
        (c = e[E]), (c = g * c.x + h * c.y), c < D && ((D = c), (r = E));
      e = parseInt(r);
      g = parseInt(e + 1 < k ? e + 1 : 0);
      k = a[0];
      c = b[e];
      r = f.P;
      k.Vi.x = f.position.x + (r.g.x * c.x + r.h.x * c.y);
      k.Vi.y = f.position.y + (r.g.y * c.x + r.h.y * c.y);
      k.id.hj.m5 = d;
      k.id.hj.F2 = e;
      k.id.hj.G2 = 0;
      k = a[1];
      c = b[g];
      r = f.P;
      k.Vi.x = f.position.x + (r.g.x * c.x + r.h.x * c.y);
      k.Vi.y = f.position.y + (r.g.y * c.x + r.h.y * c.y);
      k.id.hj.m5 = d;
      k.id.hj.F2 = g;
      k.id.hj.G2 = 1;
    };
    v.vF = function () {
      var a = new ya(2);
      a[0] = new ua();
      a[1] = new ua();
      return a;
    };
    v.sW = function (a, b, c, e, f) {
      a.ye = 0;
      var g = b.Db + e.Db,
        k;
      v.wK[0] = 0;
      var r = v.RL(v.wK, b, c, e, f);
      k = v.wK[0];
      if (!(r > g)) {
        var h;
        v.xK[0] = 0;
        var D = v.RL(v.xK, e, f, b, c);
        h = v.xK[0];
        if (!(D > g)) {
          D > 0.98 * r + 0.001
            ? ((r = e), (e = b), (b = f), (a.ia = C.Zq), (k = 1))
            : ((r = b), (b = c), (c = f), (h = k), (a.ia = C.sk), (k = 0));
          f = v.w5;
          v.OX(f, r, b, h, e, c);
          D = r.na;
          e = D[h];
          var E;
          E = h + 1 < parseInt(r.ad) ? D[parseInt(h + 1)] : D[0];
          r = v.y5;
          r.Set(E.x - e.x, E.y - e.y);
          r.mh();
          D = v.x5;
          D.x = r.y;
          D.y = -r.x;
          var N = v.A5;
          N.Set(0.5 * (e.x + E.x), 0.5 * (e.y + E.y));
          var l = v.G5;
          h = b.P;
          l.x = h.g.x * r.x + h.h.x * r.y;
          l.y = h.g.y * r.x + h.h.y * r.y;
          var ba = v.H5;
          ba.x = -l.x;
          ba.y = -l.y;
          r = v.z5;
          r.x = l.y;
          r.y = -l.x;
          var m = v.K5,
            T = v.L5;
          m.x = b.position.x + (h.g.x * e.x + h.h.x * e.y);
          m.y = b.position.y + (h.g.y * e.x + h.h.y * e.y);
          T.x = b.position.x + (h.g.x * E.x + h.h.x * E.y);
          T.y = b.position.y + (h.g.y * E.x + h.h.y * E.y);
          b = r.x * m.x + r.y * m.y;
          h = l.x * T.x + l.y * T.y + g;
          E = v.u5;
          e = v.v5;
          f = v.FL(E, f, ba, -l.x * m.x - l.y * m.y + g);
          if (!(2 > f || ((f = v.FL(e, E, l, h)), 2 > f))) {
            a.Lf.W(D);
            a.Ib.W(N);
            for (N = D = 0; N < d.Yh; ++N)
              (f = e[N]),
                r.x * f.Vi.x + r.y * f.Vi.y - b <= g &&
                  ((l = a.Ub[D]),
                  (h = c.P),
                  (ba = f.Vi.x - c.position.x),
                  (m = f.Vi.y - c.position.y),
                  (l.Ib.x = ba * h.g.x + m * h.g.y),
                  (l.Ib.y = ba * h.h.x + m * h.h.y),
                  l.un.Set(f.id),
                  (l.un.hj.gba = k),
                  ++D);
            a.ye = D;
          }
        }
      }
    };
    v.qW = function (a, b, c, d, e) {
      a.ye = 0;
      var f, g;
      f = c.P;
      g = b.sf;
      var k = c.position.x + (f.g.x * g.x + f.h.x * g.y);
      c = c.position.y + (f.g.y * g.x + f.h.y * g.y);
      f = e.P;
      g = d.sf;
      k = e.position.x + (f.g.x * g.x + f.h.x * g.y) - k;
      e = e.position.y + (f.g.y * g.x + f.h.y * g.y) - c;
      f = b.Db + d.Db;
      k * k + e * e > f * f ||
        ((a.ia = C.nH),
        a.Ib.W(b.sf),
        a.Lf.qb(),
        (a.ye = 1),
        a.Ub[0].Ib.W(d.sf),
        (a.Ub[0].un.key = 0));
    };
    v.rW = function (a, b, c, d, e) {
      a.ye = 0;
      var f, g, k, r;
      r = e.P;
      k = d.sf;
      var h = e.position.y + (r.g.y * k.x + r.h.y * k.y);
      f = e.position.x + (r.g.x * k.x + r.h.x * k.y) - c.position.x;
      g = h - c.position.y;
      r = c.P;
      c = f * r.g.x + g * r.g.y;
      r = f * r.h.x + g * r.h.y;
      var D = 0;
      e = -Number.MAX_VALUE;
      var h = b.Db + d.Db,
        E = parseInt(b.ad),
        N = b.na;
      b = b.Jd;
      for (var l = 0; l < E; ++l) {
        k = N[l];
        f = c - k.x;
        g = r - k.y;
        k = b[l];
        k = k.x * f + k.y * g;
        if (k > h) return;
        k > e && ((e = k), (D = l));
      }
      k = parseInt(D);
      f = N[k];
      E = N[parseInt(k + 1 < E ? k + 1 : 0)];
      if (e < Number.MIN_VALUE)
        (a.ye = 1),
          (a.ia = C.sk),
          a.Lf.W(b[D]),
          (a.Ib.x = 0.5 * (f.x + E.x)),
          (a.Ib.y = 0.5 * (f.y + E.y));
      else if (
        ((e = (c - E.x) * (f.x - E.x) + (r - E.y) * (f.y - E.y)),
        0 >= (c - f.x) * (E.x - f.x) + (r - f.y) * (E.y - f.y))
      ) {
        if ((c - f.x) * (c - f.x) + (r - f.y) * (r - f.y) > h * h) return;
        a.ye = 1;
        a.ia = C.sk;
        a.Lf.x = c - f.x;
        a.Lf.y = r - f.y;
        a.Lf.mh();
        a.Ib.W(f);
      } else if (0 >= e) {
        if ((c - E.x) * (c - E.x) + (r - E.y) * (r - E.y) > h * h) return;
        a.ye = 1;
        a.ia = C.sk;
        a.Lf.x = c - E.x;
        a.Lf.y = r - E.y;
        a.Lf.mh();
        a.Ib.W(E);
      } else {
        D = 0.5 * (f.x + E.x);
        f = 0.5 * (f.y + E.y);
        e = (c - D) * b[k].x + (r - f) * b[k].y;
        if (e > h) return;
        a.ye = 1;
        a.ia = C.sk;
        a.Lf.x = b[k].x;
        a.Lf.y = b[k].y;
        a.Lf.mh();
        a.Ib.Set(D, f);
      }
      a.Ub[0].Ib.W(d.sf);
      a.Ub[0].un.key = 0;
    };
    v.Do = function (a, b) {
      var c = b.lowerBound,
        d = a.upperBound,
        e = c.x - d.x,
        f = c.y - d.y,
        c = a.lowerBound,
        d = b.upperBound,
        g = c.y - d.y;
      return 0 < e || 0 < f || 0 < c.x - d.x || 0 < g ? !1 : !0;
    };
    g.fe.push(function () {
      g.K.Ef.w5 = v.vF();
      g.K.Ef.u5 = v.vF();
      g.K.Ef.v5 = v.vF();
      g.K.Ef.wK = new Ma(1);
      g.K.Ef.xK = new Ma(1);
      g.K.Ef.y5 = new k();
      g.K.Ef.x5 = new k();
      g.K.Ef.A5 = new k();
      g.K.Ef.z5 = new k();
      g.K.Ef.G5 = new k();
      g.K.Ef.H5 = new k();
      g.K.Ef.K5 = new k();
      g.K.Ef.L5 = new k();
      g.K.Ef.oaa = new k();
      g.K.Ef.saa = 255;
    });
    q.Ws = function () {
      this.hj = new Ua();
    };
    q.prototype.Ws = function () {
      this.hj.Eo = this;
    };
    q.prototype.Set = function (a) {
      this.key = a.Uh;
    };
    q.prototype.Rf = function () {
      var a = new q();
      a.key = this.key;
      return a;
    };
    Object.defineProperty(q.prototype, "key", {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.Uh;
      },
    });
    Object.defineProperty(q.prototype, "key", {
      enumerable: !1,
      configurable: !0,
      set: function (a) {
        void 0 === a && (a = 0);
        this.Uh = a;
        this.hj.TF = this.Uh & 255;
        this.hj.RF = ((this.Uh & 65280) >> 8) & 255;
        this.hj.SF = ((this.Uh & 16711680) >> 16) & 255;
        this.hj.QF = ((this.Uh & 4278190080) >> 24) & 255;
      },
    });
    l.TA = function () {
      this.position = new k();
      this.YT = new k();
      this.Qi = new k();
      this.id = new q();
    };
    t.Hq = function () {};
    t.BE = function (a, b, c) {
      ++t.qaa;
      var d = c.dm,
        f = c.em,
        g = c.OT,
        r = c.PT,
        h = t.E5;
      h.t_(b, d, g, f, r);
      var D = h.na,
        E = t.C5,
        N = t.D5,
        l;
      h.YL();
      for (var m, T = 0; 20 > T; ) {
        l = h.$c;
        for (m = 0; m < l; m++) (E[m] = D[m].qf), (N[m] = D[m].rf);
        switch (h.$c) {
          case 2:
            h.U_();
            break;
          case 3:
            h.V_();
        }
        if (3 == h.$c) break;
        h.YL();
        m = h.rY();
        if (m.fF() < Number.MIN_VALUE * Number.MIN_VALUE) break;
        var ba = D[h.$c];
        ba.qf = d.SE(e.vo(g.P, m.mo()));
        ba.lg = e.Ve(g, d.Tf(ba.qf));
        ba.rf = f.SE(e.vo(r.P, m));
        ba.Sj = e.Ve(r, f.Tf(ba.rf));
        ba.ud = e.Td(ba.Sj, ba.lg);
        ++T;
        ++t.raa;
        var ja = !1;
        for (m = 0; m < l; m++)
          if (ba.qf == E[m] && ba.rf == N[m]) {
            ja = !0;
            break;
          }
        if (ja) break;
        ++h.$c;
      }
      t.H0 = e.pg(t.H0, T);
      h.vY(a.Pk, a.Qk);
      a.Wq = e.Td(a.Pk, a.Qk).Gm();
      a.Mba = T;
      h.h0(b);
      c.TT &&
        ((b = d.Db),
        (f = f.Db),
        a.Wq > b + f && a.Wq > Number.MIN_VALUE
          ? ((a.Wq -= b + f),
            (c = e.Td(a.Qk, a.Pk)),
            c.mh(),
            (a.Pk.x += b * c.x),
            (a.Pk.y += b * c.y),
            (a.Qk.x -= f * c.x),
            (a.Qk.y -= f * c.y))
          : ((f = new k()),
            (f.x = 0.5 * (a.Pk.x + a.Qk.x)),
            (f.y = 0.5 * (a.Pk.y + a.Qk.y)),
            (a.Pk.x = a.Qk.x = f.x),
            (a.Pk.y = a.Qk.y = f.y),
            (a.Wq = 0)));
    };
    g.fe.push(function () {
      g.K.Hq.E5 = new E();
      g.K.Hq.C5 = new Ma(3);
      g.K.Hq.D5 = new Ma(3);
    });
    u.UA = function () {};
    M.VA = function () {
      this.Pk = new k();
      this.Qk = new k();
    };
    L.WA = function () {};
    L.prototype.Set = function (d) {
      switch (d.nd()) {
        case c.rt:
          d = d instanceof a ? d : null;
          this.na = new ya(1, !0);
          this.na[0] = d.sf;
          this.$c = 1;
          this.Db = d.Db;
          break;
        case c.st:
          (d = d instanceof b ? d : null),
            (this.na = d.na),
            (this.$c = d.ad),
            (this.Db = d.Db);
      }
    };
    L.prototype.SE = function (a) {
      for (
        var b = 0, c = this.na[0].x * a.x + this.na[0].y * a.y, d = 1;
        d < this.$c;
        ++d
      ) {
        var e = this.na[d].x * a.x + this.na[d].y * a.y;
        e > c && ((b = d), (c = e));
      }
      return b;
    };
    L.prototype.uv = function (a) {
      for (
        var b = 0, c = this.na[0].x * a.x + this.na[0].y * a.y, d = 1;
        d < this.$c;
        ++d
      ) {
        var e = this.na[d].x * a.x + this.na[d].y * a.y;
        e > c && ((b = d), (c = e));
      }
      return this.na[b];
    };
    L.prototype.Tf = function (a) {
      void 0 === a && (a = 0);
      return this.na[a];
    };
    w.Xv = function () {};
    w.prototype.Xv = function () {
      this.Ax = this.Ul = null;
    };
    w.prototype.jv = function (a, b) {
      var c = this.dL(),
        e = d.bB,
        f = d.bB;
      c.oc.lowerBound.x = a.lowerBound.x - e;
      c.oc.lowerBound.y = a.lowerBound.y - f;
      c.oc.upperBound.x = a.upperBound.x + e;
      c.oc.upperBound.y = a.upperBound.y + f;
      c.Nh = b;
      this.cM(c);
      return c;
    };
    w.prototype.vs = function (a) {
      this.RM(a);
      this.OE(a);
    };
    w.prototype.wF = function (a, b, c) {
      if (a.oc.yE(b)) return !1;
      this.RM(a);
      var e = d.bB + d.vN * (0 < c.x ? c.x : -c.x);
      c = d.bB + d.vN * (0 < c.y ? c.y : -c.y);
      a.oc.lowerBound.x = b.lowerBound.x - e;
      a.oc.lowerBound.y = b.lowerBound.y - c;
      a.oc.upperBound.x = b.upperBound.x + e;
      a.oc.upperBound.y = b.upperBound.y + c;
      this.cM(a);
      return !0;
    };
    w.prototype.rv = function (a) {
      return a.oc;
    };
    w.prototype.Zj = function (a) {
      return a.Nh;
    };
    w.prototype.BF = function (a, b) {
      if (null != this.Ul) {
        var c = new ya(),
          d = 0;
        for (c[d++] = this.Ul; 0 < d; ) {
          var e = c[--d];
          if (e.oc.Do(b))
            if (e.WE()) {
              if (!a(e)) break;
            } else (c[d++] = e.Gi), (c[d++] = e.$m);
        }
      }
    };
    w.prototype.dL = function () {
      if (this.Ax) {
        var a = this.Ax;
        this.Ax = a.parent;
        a.parent = null;
        a.Gi = null;
        a.$m = null;
        return a;
      }
      return new G();
    };
    w.prototype.OE = function (a) {
      a.parent = this.Ax;
      this.Ax = a;
    };
    w.prototype.cM = function (a) {
      if (null == this.Ul) (this.Ul = a), (this.Ul.parent = null);
      else {
        var b = a.oc.$X(),
          c = this.Ul;
        if (0 == c.WE()) {
          do
            var d = c.Gi,
              c = c.$m,
              c =
                Math.abs((d.oc.lowerBound.x + d.oc.upperBound.x) / 2 - b.x) +
                  Math.abs((d.oc.lowerBound.y + d.oc.upperBound.y) / 2 - b.y) <
                Math.abs((c.oc.lowerBound.x + c.oc.upperBound.x) / 2 - b.x) +
                  Math.abs((c.oc.lowerBound.y + c.oc.upperBound.y) / 2 - b.y)
                  ? d
                  : c;
          while (0 == c.WE());
        }
        b = c.parent;
        d = this.dL();
        d.parent = b;
        d.Nh = null;
        d.oc.rs(a.oc, c.oc);
        if (b) {
          c.parent.Gi == c ? (b.Gi = d) : (b.$m = d);
          d.Gi = c;
          d.$m = a;
          c.parent = d;
          a.parent = d;
          do {
            if (b.oc.yE(d.oc)) break;
            b.oc.rs(b.Gi.oc, b.$m.oc);
            d = b;
            b = b.parent;
          } while (b);
        } else (d.Gi = c), (d.$m = a), (c.parent = d), (this.Ul = a.parent = d);
      }
    };
    w.prototype.RM = function (a) {
      if (a == this.Ul) this.Ul = null;
      else {
        var b = a.parent,
          c = b.parent;
        a = b.Gi == a ? b.$m : b.Gi;
        if (c)
          for (
            c.Gi == b ? (c.Gi = a) : (c.$m = a), a.parent = c, this.OE(b);
            c;

          ) {
            b = c.oc;
            c.oc = p.rs(c.Gi.oc, c.$m.oc);
            if (b.yE(c.oc)) break;
            c = c.parent;
          }
        else (this.Ul = a), (a.parent = null), this.OE(b);
      }
    };
    B.XA = function () {
      this.tj = new w();
      this.wr = new ya();
      this.Fx = new ya();
      this.zr = 0;
    };
    B.prototype.jv = function (a, b) {
      var c = this.tj.jv(a, b);
      this.hL(c);
      return c;
    };
    B.prototype.vs = function (a) {
      this.e0(a);
      this.tj.vs(a);
    };
    B.prototype.wF = function (a, b, c) {
      this.tj.wF(a, b, c) && this.hL(a);
    };
    B.prototype.Do = function (a, b) {
      return this.tj.rv(a).Do(this.tj.rv(b));
    };
    B.prototype.Zj = function (a) {
      return this.tj.Zj(a);
    };
    B.prototype.rv = function (a) {
      return this.tj.rv(a);
    };
    B.prototype.f0 = function (a) {
      for (var b = this, c = (b.zr = 0), d, c = 0; c < b.wr.length; ++c)
        (d = b.wr[c]),
          b.tj.BF(function (a) {
            if (a == d) return !0;
            b.zr == b.Fx.length && (b.Fx[b.zr] = new z());
            var c = b.Fx[b.zr];
            c.dm = a < d ? a : d;
            c.em = a >= d ? a : d;
            ++b.zr;
            return !0;
          }, b.tj.rv(d));
      for (c = b.wr.length = 0; c < b.zr; ) {
        var e = b.Fx[c];
        a(b.tj.Zj(e.dm), b.tj.Zj(e.em));
        for (++c; c < b.zr; ) {
          var f = b.Fx[c];
          if (f.dm != e.dm || f.em != e.em) break;
          ++c;
        }
      }
    };
    B.prototype.BF = function (a, b) {
      this.tj.BF(a, b);
    };
    B.prototype.hL = function (a) {
      this.wr[this.wr.length] = a;
    };
    B.prototype.e0 = function (a) {
      this.wr.splice(parseInt(this.wr.indexOf(a)), 1);
    };
    B.PF = {};
    B.PF[Ya] = !0;
    G.oG = function () {
      this.oc = new p();
    };
    G.prototype.WE = function () {
      return null == this.Gi;
    };
    z.pG = function () {};
    C.Um = function () {
      this.ye = 0;
    };
    C.prototype.Um = function () {
      this.Ub = new ya(d.Yh);
      for (var a = 0; a < d.Yh; a++) this.Ub[a] = new F();
      this.Lf = new k();
      this.Ib = new k();
    };
    C.prototype.qg = function () {
      for (var a = 0; a < d.Yh; a++)
        (this.Ub[a] instanceof F ? this.Ub[a] : null).qg();
      this.Lf.qb();
      this.Ib.qb();
      this.ye = this.ia = 0;
    };
    C.prototype.Set = function (a) {
      this.ye = a.ye;
      for (var b = 0; b < d.Yh; b++)
        (this.Ub[b] instanceof F ? this.Ub[b] : null).Set(a.Ub[b]);
      this.Lf.W(a.Lf);
      this.Ib.W(a.Ib);
      this.ia = a.ia;
    };
    C.prototype.Rf = function () {
      var a = new C();
      a.Set(this);
      return a;
    };
    g.fe.push(function () {
      g.K.Um.nH = 1;
      g.K.Um.sk = 2;
      g.K.Um.Zq = 4;
    });
    F.gw = function () {
      this.Ib = new k();
      this.un = new q();
    };
    F.prototype.gw = function () {
      this.qg();
    };
    F.prototype.qg = function () {
      this.Ib.qb();
      this.Fr = this.yr = 0;
      this.un.key = 0;
    };
    F.prototype.Set = function (a) {
      this.Ib.W(a.Ib);
      this.yr = a.yr;
      this.Fr = a.Fr;
      this.un.Set(a.un);
    };
    I.vG = function () {
      this.p = new k();
    };
    H.lw = function () {
      this.YR = new k();
      this.ZR = new k();
    };
    H.prototype.lw = function (a, b) {
      void 0 === a && (a = null);
      void 0 === b && (b = null);
      a && this.YR.W(a);
      b && this.ZR.W(b);
    };
    J.zG = function () {
      this.Qi = new k();
    };
    K.AG = function () {
      this.YR = new k();
      this.ZR = new k();
    };
    r.bt = function () {
      this.Ib = new k();
      this.la = new k();
    };
    r.prototype.Yb = function (a, b, c, d, f) {
      this.lp = b;
      this.mp = d;
      var g, h, D, E, N;
      if (1 == parseInt(a.count))
        (this.ia = r.$O),
          (g = this.lp.Tf(a.qf[0])),
          (h = this.mp.Tf(a.rf[0])),
          (E = g),
          (D = c.P),
          (g = c.position.x + (D.g.x * E.x + D.h.x * E.y)),
          (c = c.position.y + (D.g.y * E.x + D.h.y * E.y)),
          (E = h),
          (D = f.P),
          (h = f.position.x + (D.g.x * E.x + D.h.x * E.y)),
          (f = f.position.y + (D.g.y * E.x + D.h.y * E.y)),
          (this.la.x = h - g),
          (this.la.y = f - c),
          this.la.mh();
      else {
        if (a.rf[0] == a.rf[1])
          (this.ia = r.sk),
            (b = this.lp.Tf(a.qf[0])),
            (d = this.lp.Tf(a.qf[1])),
            (h = this.mp.Tf(a.rf[0])),
            (this.Ib.x = 0.5 * (b.x + d.x)),
            (this.Ib.y = 0.5 * (b.y + d.y)),
            (this.la = e.jo(e.Td(d, b), 1)),
            this.la.mh(),
            (E = this.la),
            (D = c.P),
            (b = D.g.x * E.x + D.h.x * E.y),
            (d = D.g.y * E.x + D.h.y * E.y),
            (E = this.Ib),
            (D = c.P),
            (g = c.position.x + (D.g.x * E.x + D.h.x * E.y)),
            (c = c.position.y + (D.g.y * E.x + D.h.y * E.y)),
            (E = h),
            (D = f.P),
            (h = f.position.x + (D.g.x * E.x + D.h.x * E.y)),
            (f = f.position.y + (D.g.y * E.x + D.h.y * E.y)),
            (N = (h - g) * b + (f - c) * d);
        else if (a.qf[0] == a.qf[0])
          (this.ia = r.Zq),
            (D = this.mp.Tf(a.rf[0])),
            (E = this.mp.Tf(a.rf[1])),
            (g = this.lp.Tf(a.qf[0])),
            (this.Ib.x = 0.5 * (D.x + E.x)),
            (this.Ib.y = 0.5 * (D.y + E.y)),
            (this.la = e.jo(e.Td(E, D), 1)),
            this.la.mh(),
            (E = this.la),
            (D = f.P),
            (b = D.g.x * E.x + D.h.x * E.y),
            (d = D.g.y * E.x + D.h.y * E.y),
            (E = this.Ib),
            (D = f.P),
            (h = f.position.x + (D.g.x * E.x + D.h.x * E.y)),
            (f = f.position.y + (D.g.y * E.x + D.h.y * E.y)),
            (E = g),
            (D = c.P),
            (g = c.position.x + (D.g.x * E.x + D.h.x * E.y)),
            (c = c.position.y + (D.g.y * E.x + D.h.y * E.y)),
            (N = (g - h) * b + (c - f) * d);
        else {
          b = this.lp.Tf(a.qf[0]);
          d = this.lp.Tf(a.qf[1]);
          D = this.mp.Tf(a.rf[0]);
          E = this.mp.Tf(a.rf[1]);
          e.Ve(c, g);
          N = e.Cf(c.P, e.Td(d, b));
          e.Ve(f, h);
          var l = e.Cf(f.P, e.Td(E, D));
          h = N.x * N.x + N.y * N.y;
          g = l.x * l.x + l.y * l.y;
          var m = e.Td(l, N);
          a = N.x * m.x + N.y * m.y;
          var m = l.x * m.x + l.y * m.y,
            l = N.x * l.x + N.y * l.y,
            T = h * g - l * l;
          N = 0;
          0 != T && (N = e.wc((l * m - a * g) / T, 0, 1));
          0 > (l * N + m) / g && (N = e.wc((l - a) / h, 0, 1));
          g = new k();
          g.x = b.x + N * (d.x - b.x);
          g.y = b.y + N * (d.y - b.y);
          h = new k();
          h.x = D.x + N * (E.x - D.x);
          h.y = D.y + N * (E.y - D.y);
          0 == N || 1 == N
            ? ((this.ia = r.Zq),
              (this.la = e.jo(e.Td(E, D), 1)),
              this.la.mh(),
              (this.Ib = h))
            : ((this.ia = r.sk),
              (this.la = e.jo(e.Td(d, b), 1)),
              (this.Ib = g));
        }
        0 > N && this.la.wM();
      }
    };
    r.prototype.Yj = function (a, b) {
      var c, d, f;
      switch (this.ia) {
        case r.$O:
          return (
            (c = e.vo(a.P, this.la)),
            (d = e.vo(b.P, this.la.mo())),
            (c = this.lp.uv(c)),
            (d = this.mp.uv(d)),
            (c = e.Ve(a, c)),
            (d = e.Ve(b, d)),
            (f = (d.x - c.x) * this.la.x + (d.y - c.y) * this.la.y)
          );
        case r.sk:
          return (
            (f = e.Cf(a.P, this.la)),
            (c = e.Ve(a, this.Ib)),
            (d = e.vo(b.P, f.mo())),
            (d = this.mp.uv(d)),
            (d = e.Ve(b, d)),
            (f = (d.x - c.x) * f.x + (d.y - c.y) * f.y)
          );
        case r.Zq:
          return (
            (f = e.Cf(b.P, this.la)),
            (d = e.Ve(b, this.Ib)),
            (c = e.vo(a.P, f.mo())),
            (c = this.lp.uv(c)),
            (c = e.Ve(a, c)),
            (f = (c.x - d.x) * f.x + (c.y - d.y) * f.y)
          );
        default:
          return 0;
      }
    };
    g.fe.push(function () {
      g.K.bt.$O = 1;
      g.K.bt.sk = 2;
      g.K.bt.Zq = 4;
    });
    E.mw = function () {
      this.Za = new N();
      this.wb = new N();
      this.hi = new N();
      this.na = new ya(3);
    };
    E.prototype.mw = function () {
      this.na[0] = this.Za;
      this.na[1] = this.wb;
      this.na[2] = this.hi;
    };
    E.prototype.t_ = function (a, b, c, d, f) {
      var g, k;
      this.$c = a.count;
      for (var r = this.na, h = 0; h < this.$c; h++) {
        var D = r[h];
        D.qf = a.qf[h];
        D.rf = a.rf[h];
        g = b.Tf(D.qf);
        k = d.Tf(D.rf);
        D.lg = e.Ve(c, g);
        D.Sj = e.Ve(f, k);
        D.ud = e.Td(D.Sj, D.lg);
        D.$ = 0;
      }
      1 < this.$c &&
        ((a = a.b4),
        (g = this.aM()),
        g < 0.5 * a || 2 * a < g || g < Number.MIN_VALUE) &&
        (this.$c = 0);
      0 == this.$c &&
        ((D = r[0]),
        (D.qf = 0),
        (D.rf = 0),
        (g = b.Tf(0)),
        (k = d.Tf(0)),
        (D.lg = e.Ve(c, g)),
        (D.Sj = e.Ve(f, k)),
        (D.ud = e.Td(D.Sj, D.lg)),
        (this.$c = 1));
    };
    E.prototype.h0 = function (a) {
      a.b4 = this.aM();
      a.count = g.Dj(this.$c);
      for (var b = this.na, c = 0; c < this.$c; c++)
        (a.qf[c] = g.Dj(b[c].qf)), (a.rf[c] = g.Dj(b[c].rf));
    };
    E.prototype.rY = function () {
      switch (this.$c) {
        case 1:
          return this.Za.ud.mo();
        case 2:
          var a = e.Td(this.wb.ud, this.Za.ud);
          return 0 < e.us(a, this.Za.ud.mo()) ? e.GL(1, a) : e.jo(a, 1);
        default:
          return new k();
      }
    };
    E.prototype.YL = function () {
      switch (this.$c) {
        case 0:
          new k();
          break;
        case 1:
          break;
        case 2:
          new k(
            this.Za.$ * this.Za.ud.x + this.wb.$ * this.wb.ud.x,
            this.Za.$ * this.Za.ud.y + this.wb.$ * this.wb.ud.y,
          );
          break;
        default:
          new k();
      }
    };
    E.prototype.vY = function (a, b) {
      switch (this.$c) {
        case 1:
          a.W(this.Za.lg);
          b.W(this.Za.Sj);
          break;
        case 2:
          a.x = this.Za.$ * this.Za.lg.x + this.wb.$ * this.wb.lg.x;
          a.y = this.Za.$ * this.Za.lg.y + this.wb.$ * this.wb.lg.y;
          b.x = this.Za.$ * this.Za.Sj.x + this.wb.$ * this.wb.Sj.x;
          b.y = this.Za.$ * this.Za.Sj.y + this.wb.$ * this.wb.Sj.y;
          break;
        case 3:
          (b.x = a.x =
            this.Za.$ * this.Za.lg.x +
            this.wb.$ * this.wb.lg.x +
            this.hi.$ * this.hi.lg.x),
            (b.y = a.y =
              this.Za.$ * this.Za.lg.y +
              this.wb.$ * this.wb.lg.y +
              this.hi.$ * this.hi.lg.y);
      }
    };
    E.prototype.aM = function () {
      switch (this.$c) {
        case 0:
          return 0;
        case 1:
          return 0;
        case 2:
          return e.Td(this.Za.ud, this.wb.ud).Gm();
        case 3:
          return e.us(
            e.Td(this.wb.ud, this.Za.ud),
            e.Td(this.hi.ud, this.Za.ud),
          );
        default:
          return 0;
      }
    };
    E.prototype.U_ = function () {
      var a = this.Za.ud,
        b = this.wb.ud,
        c = e.Td(b, a),
        a = -(a.x * c.x + a.y * c.y);
      0 >= a
        ? (this.$c = this.Za.$ = 1)
        : ((b = b.x * c.x + b.y * c.y),
          0 >= b
            ? ((this.$c = this.wb.$ = 1), this.Za.Set(this.wb))
            : ((c = 1 / (b + a)),
              (this.Za.$ = b * c),
              (this.wb.$ = a * c),
              (this.$c = 2)));
    };
    E.prototype.V_ = function () {
      var a = this.Za.ud,
        b = this.wb.ud,
        c = this.hi.ud,
        d = e.Td(b, a),
        f = e.Sf(b, d),
        g = -e.Sf(a, d),
        k = e.Td(c, a),
        r = e.Sf(c, k),
        h = -e.Sf(a, k),
        D = e.Td(c, b),
        E = e.Sf(c, D),
        D = -e.Sf(b, D),
        k = e.us(d, k),
        d = k * e.us(b, c),
        c = k * e.us(c, a),
        a = k * e.us(a, b);
      0 >= g && 0 >= h
        ? (this.$c = this.Za.$ = 1)
        : 0 < f && 0 < g && 0 >= a
          ? ((r = 1 / (f + g)),
            (this.Za.$ = f * r),
            (this.wb.$ = g * r),
            (this.$c = 2))
          : 0 < r && 0 < h && 0 >= c
            ? ((f = 1 / (r + h)),
              (this.Za.$ = r * f),
              (this.hi.$ = h * f),
              (this.$c = 2),
              this.wb.Set(this.hi))
            : 0 >= f && 0 >= D
              ? ((this.$c = this.wb.$ = 1), this.Za.Set(this.wb))
              : 0 >= r && 0 >= E
                ? ((this.$c = this.hi.$ = 1), this.Za.Set(this.hi))
                : 0 < E && 0 < D && 0 >= d
                  ? ((f = 1 / (E + D)),
                    (this.wb.$ = E * f),
                    (this.hi.$ = D * f),
                    (this.$c = 2),
                    this.Za.Set(this.hi))
                  : ((f = 1 / (d + c + a)),
                    (this.Za.$ = d * f),
                    (this.wb.$ = c * f),
                    (this.hi.$ = a * f),
                    (this.$c = 3));
    };
    D.ZA = function () {
      this.qf = new Ma(3);
      this.rf = new Ma(3);
    };
    N.BG = function () {};
    N.prototype.Set = function (a) {
      this.lg.W(a.lg);
      this.Sj.W(a.Sj);
      this.ud.W(a.ud);
      this.$ = a.$;
      this.qf = a.qf;
      this.rf = a.rf;
    };
    T.ph = function () {};
    T.d0 = function (a) {
      ++T.M0;
      var b = a.dm,
        c = a.em,
        d = a.FT,
        f = a.GT,
        g = b.Db + c.Db;
      a = a.w6;
      var k = 0,
        r = 0,
        h = 0;
      T.vK.count = 0;
      for (T.Nu.TT = !1; ; ) {
        d.Og(T.Lp, k);
        f.Og(T.Mp, k);
        T.Nu.dm = b;
        T.Nu.em = c;
        T.Nu.OT = T.Lp;
        T.Nu.PT = T.Mp;
        t.BE(T.eT, T.vK, T.Nu);
        if (0 >= T.eT.Wq) {
          k = 1;
          break;
        }
        T.ND.Yb(T.vK, b, T.Lp, c, T.Mp);
        var D = T.ND.Yj(T.Lp, T.Mp);
        if (0 >= D) {
          k = 1;
          break;
        }
        0 == r && (h = D > g ? e.pg(g - a, 0.75 * g) : e.pg(D - a, 0.02 * g));
        if (D - h < 0.5 * a) {
          if (0 == r) {
            k = 1;
            break;
          }
          break;
        }
        var E = k,
          N = k,
          l = 1;
        d.Og(T.Lp, l);
        f.Og(T.Mp, l);
        var m = T.ND.Yj(T.Lp, T.Mp);
        if (m >= h) {
          k = 1;
          break;
        }
        for (var ja = 0; ; ) {
          var na;
          na = ja & 1 ? N + ((h - D) * (l - N)) / (m - D) : 0.5 * (N + l);
          d.Og(T.Lp, na);
          f.Og(T.Mp, na);
          var w = T.ND.Yj(T.Lp, T.Mp);
          if (e.jf(w - h) < 0.025 * a) {
            E = na;
            break;
          }
          w > h ? ((N = na), (D = w)) : ((l = na), (m = w));
          ++ja;
          ++T.O0;
          if (50 == ja) break;
        }
        T.BN = e.pg(T.BN, ja);
        if (E < (1 + 100 * Number.MIN_VALUE) * k) break;
        k = E;
        r++;
        ++T.N0;
        if (1e3 == r) break;
      }
      T.AN = e.pg(T.AN, r);
      return k;
    };
    g.fe.push(function () {
      g.K.ph.M0 = 0;
      g.K.ph.N0 = 0;
      g.K.ph.AN = 0;
      g.K.ph.O0 = 0;
      g.K.ph.BN = 0;
      g.K.ph.vK = new D();
      g.K.ph.Nu = new u();
      g.K.ph.Lp = new h();
      g.K.ph.Mp = new h();
      g.K.ph.ND = new r();
      g.K.ph.eT = new M();
    });
    ja.$A = function () {
      this.dm = new L();
      this.em = new L();
      this.FT = new f();
      this.GT = new f();
    };
    na.Kq = function () {
      this.vb = new k();
    };
    na.prototype.Kq = function () {
      this.Ub = new ya(d.Yh);
      for (var a = 0; a < d.Yh; a++) this.Ub[a] = new k();
    };
    na.prototype.Yb = function (a, b, c, d, e) {
      void 0 === c && (c = 0);
      void 0 === e && (e = 0);
      if (0 != a.ye) {
        var f, g, k, r, h, D, E, N;
        switch (a.ia) {
          case C.nH:
            k = b.P;
            g = a.Ib;
            f = b.position.x + k.g.x * g.x + k.h.x * g.y;
            b = b.position.y + k.g.y * g.x + k.h.y * g.y;
            k = d.P;
            g = a.Ub[0].Ib;
            a = d.position.x + k.g.x * g.x + k.h.x * g.y;
            d = d.position.y + k.g.y * g.x + k.h.y * g.y;
            g = a - f;
            k = d - b;
            r = g * g + k * k;
            r > Number.MIN_VALUE * Number.MIN_VALUE
              ? ((r = Math.sqrt(r)), (this.vb.x = g / r), (this.vb.y = k / r))
              : ((this.vb.x = 1), (this.vb.y = 0));
            g = b + c * this.vb.y;
            d -= e * this.vb.y;
            this.Ub[0].x = 0.5 * (f + c * this.vb.x + (a - e * this.vb.x));
            this.Ub[0].y = 0.5 * (g + d);
            break;
          case C.sk:
            k = b.P;
            g = a.Lf;
            r = k.g.x * g.x + k.h.x * g.y;
            h = k.g.y * g.x + k.h.y * g.y;
            k = b.P;
            g = a.Ib;
            D = b.position.x + k.g.x * g.x + k.h.x * g.y;
            E = b.position.y + k.g.y * g.x + k.h.y * g.y;
            this.vb.x = r;
            this.vb.y = h;
            for (f = 0; f < a.ye; f++)
              (k = d.P),
                (g = a.Ub[f].Ib),
                (N = d.position.x + k.g.x * g.x + k.h.x * g.y),
                (g = d.position.y + k.g.y * g.x + k.h.y * g.y),
                (this.Ub[f].x =
                  N + 0.5 * (c - (N - D) * r - (g - E) * h - e) * r),
                (this.Ub[f].y =
                  g + 0.5 * (c - (N - D) * r - (g - E) * h - e) * h);
            break;
          case C.Zq:
            for (
              k = d.P,
                g = a.Lf,
                r = k.g.x * g.x + k.h.x * g.y,
                h = k.g.y * g.x + k.h.y * g.y,
                k = d.P,
                g = a.Ib,
                D = d.position.x + k.g.x * g.x + k.h.x * g.y,
                E = d.position.y + k.g.y * g.x + k.h.y * g.y,
                this.vb.x = -r,
                this.vb.y = -h,
                f = 0;
              f < a.ye;
              f++
            )
              (k = b.P),
                (g = a.Ub[f].Ib),
                (N = b.position.x + k.g.x * g.x + k.h.x * g.y),
                (g = b.position.y + k.g.y * g.x + k.h.y * g.y),
                (this.Ub[f].x =
                  N + 0.5 * (e - (N - D) * r - (g - E) * h - c) * r),
                (this.Ub[f].y =
                  g + 0.5 * (e - (N - D) * r - (g - E) * h - c) * h);
        }
      }
    };
    ua.xE = function () {
      this.Vi = new k();
      this.id = new q();
    };
    ua.prototype.Set = function (a) {
      this.Vi.W(a.Vi);
      this.id.Set(a.id);
    };
    Ua.ME = function () {};
    Object.defineProperty(Ua.prototype, "referenceEdge", {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.TF;
      },
    });
    Object.defineProperty(Ua.prototype, "referenceEdge", {
      enumerable: !1,
      configurable: !0,
      set: function (a) {
        void 0 === a && (a = 0);
        this.TF = a;
        this.Eo.Uh = (this.Eo.Uh & 4294967040) | (this.TF & 255);
      },
    });
    Object.defineProperty(Ua.prototype, "incidentEdge", {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.RF;
      },
    });
    Object.defineProperty(Ua.prototype, "incidentEdge", {
      enumerable: !1,
      configurable: !0,
      set: function (a) {
        void 0 === a && (a = 0);
        this.RF = a;
        this.Eo.Uh = (this.Eo.Uh & 4294902015) | ((this.RF << 8) & 65280);
      },
    });
    Object.defineProperty(Ua.prototype, "incidentVertex", {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.SF;
      },
    });
    Object.defineProperty(Ua.prototype, "incidentVertex", {
      enumerable: !1,
      configurable: !0,
      set: function (a) {
        void 0 === a && (a = 0);
        this.SF = a;
        this.Eo.Uh = (this.Eo.Uh & 4278255615) | ((this.SF << 16) & 16711680);
      },
    });
    Object.defineProperty(Ua.prototype, "flip", {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.QF;
      },
    });
    Object.defineProperty(Ua.prototype, "flip", {
      enumerable: !1,
      configurable: !0,
      set: function (a) {
        void 0 === a && (a = 0);
        this.QF = a;
        this.Eo.Uh = (this.Eo.Uh & 16777215) | ((this.QF << 24) & 4278190080);
      },
    });
  })();
  (function () {
    var a = g.M.pa,
      b = g.K.pb.Io,
      c = g.K.pb.Yv,
      d = g.K.pb.Zv,
      e = g.K.pb.YA,
      f = g.K.pb.Fi,
      h = g.K.pb.Yc,
      k = g.M.Math.Vm,
      p = g.M.Math.Ei,
      n = g.M.Math.Ko,
      m = g.M.Math.kb,
      v = g.K.Hq,
      q = g.K.UA,
      l = g.K.VA,
      t = g.K.WA,
      u = g.K.ZA;
    g.Ec(b, g.K.pb.Yc);
    b.prototype.Ba = g.K.pb.Yc.prototype;
    b.Io = function () {
      g.K.pb.Yc.Yc.apply(this, arguments);
      this.sf = new m();
    };
    b.prototype.Rf = function () {
      var a = new b();
      a.Set(this);
      return a;
    };
    b.prototype.Set = function (a) {
      this.Ba.Set.call(this, a);
      g.is(a, b) && this.sf.W((a instanceof b ? a : null).sf);
    };
    b.prototype.ss = function (a, b) {
      var c = b.P,
        d = b.position.x + (c.g.x * this.sf.x + c.h.x * this.sf.y),
        c = b.position.y + (c.g.y * this.sf.x + c.h.y * this.sf.y);
      a.lowerBound.Set(d - this.Db, c - this.Db);
      a.upperBound.Set(d + this.Db, c + this.Db);
    };
    b.prototype.iv = function (b, c) {
      void 0 === c && (c = 0);
      b.Vl = c * a.Ab * this.Db * this.Db;
      b.pk.W(this.sf);
      b.Cs =
        b.Vl *
        (0.5 * this.Db * this.Db +
          (this.sf.x * this.sf.x + this.sf.y * this.sf.y));
    };
    b.prototype.vz = function (a, b, c, d) {
      void 0 === b && (b = 0);
      c = p.Ve(c, this.sf);
      var e = -(p.Sf(a, c) - b);
      if (e < -this.Db + Number.MIN_VALUE) return 0;
      if (e > this.Db) return d.W(c), Math.PI * this.Db * this.Db;
      b = this.Db * this.Db;
      var f = e * e,
        e = b * (Math.asin(e / this.Db) + Math.PI / 2) + e * Math.sqrt(b - f);
      b = ((-2 / 3) * Math.pow(b - f, 1.5)) / e;
      d.x = c.x + a.x * b;
      d.y = c.y + a.y * b;
      return e;
    };
    b.prototype.Io = function (a) {
      void 0 === a && (a = 0);
      this.Ba.Yc.call(this);
      this.ia = h.rt;
      this.Db = a;
    };
    c.Yv = function () {};
    c.prototype.Yv = function () {};
    g.Ec(d, g.K.pb.Yc);
    d.prototype.Ba = g.K.pb.Yc.prototype;
    d.Zv = function () {
      g.K.pb.Yc.Yc.apply(this, arguments);
      new m();
      this.Za = new m();
      this.wb = new m();
      this.F3 = new m();
      this.G3 = new m();
      this.vb = new m();
      this.yg = new m();
      new m();
      this.H3 = new m();
    };
    d.prototype.ss = function (a, b) {
      var c = b.P,
        d = b.position.x + (c.g.x * this.Za.x + c.h.x * this.Za.y),
        e = b.position.y + (c.g.y * this.Za.x + c.h.y * this.Za.y),
        f = b.position.x + (c.g.x * this.wb.x + c.h.x * this.wb.y),
        c = b.position.y + (c.g.y * this.wb.x + c.h.y * this.wb.y);
      d < f
        ? ((a.lowerBound.x = d), (a.upperBound.x = f))
        : ((a.lowerBound.x = f), (a.upperBound.x = d));
      e < c
        ? ((a.lowerBound.y = e), (a.upperBound.y = c))
        : ((a.lowerBound.y = c), (a.upperBound.y = e));
    };
    d.prototype.iv = function (a) {
      a.Vl = 0;
      a.pk.W(this.Za);
      a.Cs = 0;
    };
    d.prototype.vz = function (a, b, c, d) {
      void 0 === b && (b = 0);
      var e = new m(a.x * b, a.y * b),
        f = p.Ve(c, this.Za);
      c = p.Ve(c, this.wb);
      var g = p.Sf(a, f) - b;
      a = p.Sf(a, c) - b;
      if (0 < g) {
        if (0 < a) return 0;
        f.x = (-a / (g - a)) * f.x + (g / (g - a)) * c.x;
        f.y = (-a / (g - a)) * f.y + (g / (g - a)) * c.y;
      } else
        0 < a &&
          ((c.x = (-a / (g - a)) * f.x + (g / (g - a)) * c.x),
          (c.y = (-a / (g - a)) * f.y + (g / (g - a)) * c.y));
      d.x = (e.x + f.x + c.x) / 3;
      d.y = (e.y + f.y + c.y) / 3;
      return 0.5 * ((f.x - e.x) * (c.y - e.y) - (f.y - e.y) * (c.x - e.x));
    };
    d.prototype.Zv = function (b, c) {
      this.Ba.Yc.call(this);
      this.ia = h.oH;
      this.Za = b;
      this.wb = c;
      this.yg.Set(this.wb.x - this.Za.x, this.wb.y - this.Za.y);
      this.AI = this.yg.mh();
      this.vb.Set(this.yg.y, -this.yg.x);
      this.F3.Set(
        -a.eB * (this.vb.x - this.yg.x) + this.Za.x,
        -a.eB * (this.vb.y - this.yg.y) + this.Za.y,
      );
      this.G3.Set(
        -a.eB * (this.vb.x + this.yg.x) + this.wb.x,
        -a.eB * (this.vb.y + this.yg.y) + this.wb.y,
      );
      this.H3.Set(-this.vb.x, -this.vb.y);
    };
    e.YA = function () {
      this.Vl = 0;
      this.pk = new m(0, 0);
      this.Cs = 0;
    };
    g.Ec(f, g.K.pb.Yc);
    f.prototype.Ba = g.K.pb.Yc.prototype;
    f.Fi = function () {
      g.K.pb.Yc.Yc.apply(this, arguments);
    };
    f.prototype.Rf = function () {
      var a = new f();
      a.Set(this);
      return a;
    };
    f.prototype.Set = function (a) {
      this.Ba.Set.call(this, a);
      if (g.is(a, f)) {
        a = a instanceof f ? a : null;
        this.rn.W(a.rn);
        this.ad = a.ad;
        this.Iv(this.ad);
        for (var b = 0; b < this.ad; b++)
          this.na[b].W(a.na[b]), this.Jd[b].W(a.Jd[b]);
      }
    };
    f.prototype.xA = function (a, b) {
      void 0 === b && (b = 0);
      var c = new ya(),
        d,
        e;
      for (d = 0; d < a.length; ++d) (e = a[d]), c.push(e);
      this.UM(c, b);
    };
    f.T6 = function (a, b) {
      void 0 === b && (b = 0);
      var c = new f();
      c.xA(a, b);
      return c;
    };
    f.prototype.UM = function (a, b) {
      void 0 === b && (b = 0);
      0 == b && (b = a.length);
      this.ad = b;
      this.Iv(b);
      var c;
      for (c = 0; c < this.ad; c++) this.na[c].W(a[c]);
      for (c = 0; c < this.ad; ++c) {
        var d = p.Td(
          this.na[parseInt(c + 1 < this.ad ? c + 1 : 0)],
          this.na[parseInt(c)],
        );
        this.Jd[c].W(p.jo(d, 1));
        this.Jd[c].mh();
      }
      this.rn = f.uW(this.na, this.ad);
    };
    f.X6 = function (a, b) {
      void 0 === b && (b = 0);
      var c = new f();
      c.UM(a, b);
      return c;
    };
    f.prototype.TM = function (a, b) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      this.ad = 4;
      this.Iv(4);
      this.na[0].Set(-a, -b);
      this.na[1].Set(a, -b);
      this.na[2].Set(a, b);
      this.na[3].Set(-a, b);
      this.Jd[0].Set(0, -1);
      this.Jd[1].Set(1, 0);
      this.Jd[2].Set(0, 1);
      this.Jd[3].Set(-1, 0);
      this.rn.qb();
    };
    f.U6 = function (a, b) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      var c = new f();
      c.TM(a, b);
      return c;
    };
    f.prototype.E_ = function (a, b, c, d) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      void 0 === c && (c = null);
      void 0 === d && (d = 0);
      this.ad = 4;
      this.Iv(4);
      this.na[0].Set(-a, -b);
      this.na[1].Set(a, -b);
      this.na[2].Set(a, b);
      this.na[3].Set(-a, b);
      this.Jd[0].Set(0, -1);
      this.Jd[1].Set(1, 0);
      this.Jd[2].Set(0, 1);
      this.Jd[3].Set(-1, 0);
      this.rn = c;
      a = new n();
      a.position = c;
      a.P.Set(d);
      for (c = 0; c < this.ad; ++c)
        (this.na[c] = p.Ve(a, this.na[c])),
          (this.Jd[c] = p.Cf(a.P, this.Jd[c]));
    };
    f.W6 = function (a, b, c, d) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      void 0 === c && (c = null);
      void 0 === d && (d = 0);
      var e = new f();
      e.E_(a, b, c, d);
      return e;
    };
    f.prototype.D_ = function (a, b) {
      this.ad = 2;
      this.Iv(2);
      this.na[0].W(a);
      this.na[1].W(b);
      this.rn.x = 0.5 * (a.x + b.x);
      this.rn.y = 0.5 * (a.y + b.y);
      this.Jd[0] = p.jo(p.Td(b, a), 1);
      this.Jd[0].mh();
      this.Jd[1].x = -this.Jd[0].x;
      this.Jd[1].y = -this.Jd[0].y;
    };
    f.V6 = function (a, b) {
      var c = new f();
      c.D_(a, b);
      return c;
    };
    f.prototype.ss = function (a, b) {
      for (
        var c = b.P,
          d = this.na[0],
          e = b.position.x + (c.g.x * d.x + c.h.x * d.y),
          f = b.position.y + (c.g.y * d.x + c.h.y * d.y),
          g = e,
          k = f,
          h = 1;
        h < this.ad;
        ++h
      )
        var d = this.na[h],
          l = b.position.x + (c.g.x * d.x + c.h.x * d.y),
          d = b.position.y + (c.g.y * d.x + c.h.y * d.y),
          e = e < l ? e : l,
          f = f < d ? f : d,
          g = g > l ? g : l,
          k = k > d ? k : d;
      a.lowerBound.x = e - this.Db;
      a.lowerBound.y = f - this.Db;
      a.upperBound.x = g + this.Db;
      a.upperBound.y = k + this.Db;
    };
    f.prototype.iv = function (a, b) {
      void 0 === b && (b = 0);
      if (2 == this.ad)
        (a.pk.x = 0.5 * (this.na[0].x + this.na[1].x)),
          (a.pk.y = 0.5 * (this.na[0].y + this.na[1].y)),
          (a.Vl = 0),
          (a.Cs = 0);
      else {
        for (var c = 0, d = 0, e = 0, f = 0, g = 1 / 3, k = 0; k < this.ad; ++k)
          var h = this.na[k],
            l = k + 1 < this.ad ? this.na[parseInt(k + 1)] : this.na[0],
            m = h.x - 0,
            n = h.y - 0,
            r = l.x - 0,
            E = l.y - 0,
            D = m * E - n * r,
            N = 0.5 * D,
            e = e + N,
            c = c + N * g * (0 + h.x + l.x),
            d = d + N * g * (0 + h.y + l.y),
            h = m,
            f =
              f +
              D *
                (g * (0.25 * (h * h + r * h + r * r) + (0 * h + 0 * r)) +
                  0 +
                  (g * (0.25 * (n * n + E * n + E * E) + (0 * n + 0 * E)) + 0));
        a.Vl = b * e;
        a.pk.Set((1 / e) * c, (1 / e) * d);
        a.Cs = b * f;
      }
    };
    f.prototype.vz = function (a, b, c, d) {
      void 0 === b && (b = 0);
      var f = p.vo(c.P, a),
        g = b - p.Sf(a, c.position),
        k = new Ma(),
        h = 0,
        l = -1;
      b = -1;
      var n = !1;
      for (a = 0; a < this.ad; ++a) {
        k[a] = p.Sf(f, this.na[a]) - g;
        var v = k[a] < -Number.MIN_VALUE;
        0 < a && (v ? n || ((l = a - 1), h++) : n && ((b = a - 1), h++));
        n = v;
      }
      switch (h) {
        case 0:
          return n
            ? ((a = new e()), this.iv(a, 1), d.W(p.Ve(c, a.pk)), a.Vl)
            : 0;
        case 1:
          -1 == l ? (l = this.ad - 1) : (b = this.ad - 1);
      }
      a = parseInt((l + 1) % this.ad);
      f = parseInt((b + 1) % this.ad);
      g = (0 - k[l]) / (k[a] - k[l]);
      k = (0 - k[b]) / (k[f] - k[b]);
      l = new m(
        this.na[l].x * (1 - g) + this.na[a].x * g,
        this.na[l].y * (1 - g) + this.na[a].y * g,
      );
      b = new m(
        this.na[b].x * (1 - k) + this.na[f].x * k,
        this.na[b].y * (1 - k) + this.na[f].y * k,
      );
      k = 0;
      g = new m();
      for (h = this.na[a]; a != f; )
        (a = (a + 1) % this.ad),
          (n = a == f ? b : this.na[a]),
          (v = 0.5 * ((h.x - l.x) * (n.y - l.y) - (h.y - l.y) * (n.x - l.x))),
          (k += v),
          (g.x += (v * (l.x + h.x + n.x)) / 3),
          (g.y += (v * (l.y + h.y + n.y)) / 3),
          (h = n);
      g.Rg(1 / k);
      d.W(p.Ve(c, g));
      return k;
    };
    f.prototype.SE = function (a) {
      for (
        var b = 0, c = this.na[0].x * a.x + this.na[0].y * a.y, d = 1;
        d < this.ad;
        ++d
      ) {
        var e = this.na[d].x * a.x + this.na[d].y * a.y;
        e > c && ((b = d), (c = e));
      }
      return b;
    };
    f.prototype.uv = function (a) {
      for (
        var b = 0, c = this.na[0].x * a.x + this.na[0].y * a.y, d = 1;
        d < this.ad;
        ++d
      ) {
        var e = this.na[d].x * a.x + this.na[d].y * a.y;
        e > c && ((b = d), (c = e));
      }
      return this.na[b];
    };
    f.prototype.Fi = function () {
      this.Ba.Yc.call(this);
      this.ia = h.st;
      this.rn = new m();
      this.na = new ya();
      this.Jd = new ya();
    };
    f.prototype.Iv = function (a) {
      void 0 === a && (a = 0);
      for (var b = parseInt(this.na.length); b < a; b++)
        (this.na[b] = new m()), (this.Jd[b] = new m());
    };
    f.uW = function (a, b) {
      void 0 === b && (b = 0);
      for (var c = new m(), d = 0, e = 1 / 3, f = 0; f < b; ++f) {
        var g = a[f],
          k = f + 1 < b ? a[parseInt(f + 1)] : a[0],
          h = 0.5 * ((g.x - 0) * (k.y - 0) - (g.y - 0) * (k.x - 0)),
          d = d + h;
        c.x += h * e * (0 + g.x + k.x);
        c.y += h * e * (0 + g.y + k.y);
      }
      c.x *= 1 / d;
      c.y *= 1 / d;
      return c;
    };
    f.Q7 = function (a, b, c) {
      void 0 === c && (c = 0);
      var d,
        e = new ya(c + 1);
      for (d = 0; d < c; ++d) e[d] = b[d];
      e[c] = e[0];
      b = Number.MAX_VALUE;
      for (d = 1; d <= c; ++d) {
        for (
          var f = e[parseInt(d - 1)],
            g = e[d].x - f.x,
            k = e[d].y - f.y,
            h = Math.sqrt(g * g + k * k),
            g = g / h,
            k = k / h,
            l = -k,
            m = g,
            n = (h = Number.MAX_VALUE),
            r = -Number.MAX_VALUE,
            E = -Number.MAX_VALUE,
            D = 0;
          D < c;
          ++D
        ) {
          var N = e[D].x - f.x,
            T = e[D].y - f.y,
            ja = g * N + k * T,
            N = l * N + m * T;
          ja < h && (h = ja);
          N < n && (n = N);
          ja > r && (r = ja);
          N > E && (E = N);
        }
        D = (r - h) * (E - n);
        D < 0.95 * b &&
          ((b = D),
          (a.P.g.x = g),
          (a.P.g.y = k),
          (a.P.h.x = l),
          (a.P.h.y = m),
          (g = 0.5 * (h + r)),
          (k = 0.5 * (n + E)),
          (l = a.P),
          (a.pk.x = f.x + (l.g.x * g + l.h.x * k)),
          (a.pk.y = f.y + (l.g.y * g + l.h.y * k)),
          (a.U1.x = 0.5 * (r - h)),
          (a.U1.y = 0.5 * (E - n)));
      }
    };
    g.fe.push(function () {
      g.K.pb.Fi.Aca = new k();
    });
    h.Yc = function () {};
    h.prototype.Rf = function () {
      return null;
    };
    h.prototype.Set = function (a) {
      this.Db = a.Db;
    };
    h.prototype.nd = function () {
      return this.ia;
    };
    h.prototype.ss = function () {};
    h.prototype.iv = function () {};
    h.prototype.vz = function () {
      return 0;
    };
    h.Do = function (a, b, c, d) {
      var e = new q();
      e.dm = new t();
      e.dm.Set(a);
      e.em = new t();
      e.em.Set(c);
      e.OT = b;
      e.PT = d;
      e.TT = !0;
      a = new u();
      a.count = 0;
      b = new l();
      v.BE(b, a, e);
      return b.Wq < 10 * Number.MIN_VALUE;
    };
    h.prototype.Yc = function () {
      this.ia = h.F1;
      this.Db = a.pc;
    };
    g.fe.push(function () {
      g.K.pb.Yc.F1 = -1;
      g.K.pb.Yc.rt = 0;
      g.K.pb.Yc.st = 1;
      g.K.pb.Yc.oH = 2;
      g.K.pb.Yc.AB = 3;
      g.K.pb.Yc.Zaa = 1;
      g.K.pb.Yc.aba = 0;
      g.K.pb.Yc.dba = -1;
    });
  })();
  (function () {
    var a = g.M.Us,
      b = g.M.pa,
      c = g.M.Math.Ei;
    a.Us = function () {
      this.DA = this.EA = this.FA = 0;
    };
    a.prototype.Us = function (a, b, f) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      void 0 === f && (f = 0);
      this.FA = g.Dj(255 * c.wc(a, 0, 1));
      this.EA = g.Dj(255 * c.wc(b, 0, 1));
      this.DA = g.Dj(255 * c.wc(f, 0, 1));
    };
    a.prototype.Set = function (a, b, f) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      void 0 === f && (f = 0);
      this.FA = g.Dj(255 * c.wc(a, 0, 1));
      this.EA = g.Dj(255 * c.wc(b, 0, 1));
      this.DA = g.Dj(255 * c.wc(f, 0, 1));
    };
    Object.defineProperty(a.prototype, "r", {
      enumerable: !1,
      configurable: !0,
      set: function (a) {
        void 0 === a && (a = 0);
        this.FA = g.Dj(255 * c.wc(a, 0, 1));
      },
    });
    Object.defineProperty(a.prototype, "g", {
      enumerable: !1,
      configurable: !0,
      set: function (a) {
        void 0 === a && (a = 0);
        this.EA = g.Dj(255 * c.wc(a, 0, 1));
      },
    });
    Object.defineProperty(a.prototype, "b", {
      enumerable: !1,
      configurable: !0,
      set: function (a) {
        void 0 === a && (a = 0);
        this.DA = g.Dj(255 * c.wc(a, 0, 1));
      },
    });
    Object.defineProperty(a.prototype, "color", {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return (this.FA << 16) | (this.EA << 8) | this.DA;
      },
    });
    b.pa = function () {};
    b.C0 = function (a, b) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      return Math.sqrt(a * b);
    };
    b.D0 = function (a, b) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      return a > b ? a : b;
    };
    b.naa = function () {};
    g.fe.push(function () {
      g.M.pa.VERSION = "2.1alpha";
      g.M.pa.K$ = 65535;
      g.M.pa.Ab = Math.PI;
      g.M.pa.Yh = 2;
      g.M.pa.bB = 0.1;
      g.M.pa.vN = 2;
      g.M.pa.taa = 2 * b.pc;
      g.M.pa.pc = 0.005;
      g.M.pa.Lq = (2 / 180) * b.Ab;
      g.M.pa.eB = 8 * b.pc;
      g.M.pa.J0 = 32;
      g.M.pa.K0 = 32;
      g.M.pa.P0 = 1;
      g.M.pa.Xh = 0.2;
      g.M.pa.cB = (8 / 180) * b.Ab;
      g.M.pa.et = 2;
      g.M.pa.zN = b.et * b.et;
      g.M.pa.dt = 0.5 * b.Ab;
      g.M.pa.yN = b.dt * b.dt;
      g.M.pa.DG = 0.2;
      g.M.pa.L0 = 0.5;
      g.M.pa.xN = 0.01;
      g.M.pa.wN = (2 / 180) * b.Ab;
    });
  })();
  (function () {
    var a = g.M.Math.Vm,
      b = g.M.Math.Zs,
      c = g.M.Math.Ei,
      d = g.M.Math.nw,
      e = g.M.Math.Ko,
      f = g.M.Math.kb,
      h = g.M.Math.ct;
    a.Vm = function () {
      this.g = new f();
      this.h = new f();
    };
    a.prototype.Vm = function () {
      this.zA();
    };
    a.Gz = function (b) {
      void 0 === b && (b = 0);
      var c = new a();
      c.Set(b);
      return c;
    };
    a.pv = function (b, c) {
      var d = new a();
      d.N_(b, c);
      return d;
    };
    a.prototype.Set = function (a) {
      void 0 === a && (a = 0);
      var b = Math.cos(a);
      a = Math.sin(a);
      this.g.x = b;
      this.h.x = -a;
      this.g.y = a;
      this.h.y = b;
    };
    a.prototype.N_ = function (a, b) {
      this.g.W(a);
      this.h.W(b);
    };
    a.prototype.Rf = function () {
      var b = new a();
      b.vq(this);
      return b;
    };
    a.prototype.vq = function (a) {
      this.g.W(a.g);
      this.h.W(a.h);
    };
    a.prototype.mz = function (a) {
      this.g.x += a.g.x;
      this.g.y += a.g.y;
      this.h.x += a.h.x;
      this.h.y += a.h.y;
    };
    a.prototype.zA = function () {
      this.g.x = 1;
      this.h.x = 0;
      this.g.y = 0;
      this.h.y = 1;
    };
    a.prototype.qb = function () {
      this.g.x = 0;
      this.h.x = 0;
      this.g.y = 0;
      this.h.y = 0;
    };
    a.prototype.Zi = function () {
      return Math.atan2(this.g.y, this.g.x);
    };
    a.prototype.QE = function (a) {
      var b = this.g.x,
        c = this.h.x,
        d = this.g.y,
        e = this.h.y,
        f = b * e - c * d;
      0 != f && (f = 1 / f);
      a.g.x = f * e;
      a.h.x = -f * c;
      a.g.y = -f * d;
      a.h.y = f * b;
    };
    a.prototype.xq = function (a, b, c) {
      void 0 === b && (b = 0);
      void 0 === c && (c = 0);
      var d = this.g.x,
        e = this.h.x,
        f = this.g.y,
        g = this.h.y,
        k = d * g - e * f;
      0 != k && (k = 1 / k);
      a.x = k * (g * b - e * c);
      a.y = k * (d * c - f * b);
      return a;
    };
    a.prototype.jf = function () {
      this.g.jf();
      this.h.jf();
    };
    b.Zs = function () {
      this.g = new h();
      this.h = new h();
      this.hb = new h();
    };
    b.prototype.Zs = function (a, b, c) {
      void 0 === a && (a = null);
      void 0 === b && (b = null);
      void 0 === c && (c = null);
      a || b || c
        ? (this.g.W(a), this.h.W(b), this.hb.W(c))
        : (this.g.qb(), this.h.qb(), this.hb.qb());
    };
    b.prototype.Rf = function () {
      return new b(this.g, this.h, this.hb);
    };
    b.prototype.vq = function (a) {
      this.g.W(a.g);
      this.h.W(a.h);
      this.hb.W(a.hb);
    };
    b.prototype.mz = function (a) {
      this.g.x += a.g.x;
      this.g.y += a.g.y;
      this.g.z += a.g.z;
      this.h.x += a.h.x;
      this.h.y += a.h.y;
      this.h.z += a.h.z;
      this.hb.x += a.hb.x;
      this.hb.y += a.hb.y;
      this.hb.z += a.hb.z;
    };
    b.prototype.zA = function () {
      this.g.x = 1;
      this.h.x = 0;
      this.hb.x = 0;
      this.g.y = 0;
      this.h.y = 1;
      this.hb.y = 0;
      this.g.z = 0;
      this.h.z = 0;
      this.hb.z = 1;
    };
    b.prototype.qb = function () {
      this.g.x = 0;
      this.h.x = 0;
      this.hb.x = 0;
      this.g.y = 0;
      this.h.y = 0;
      this.hb.y = 0;
      this.g.z = 0;
      this.h.z = 0;
      this.hb.z = 0;
    };
    b.prototype.Rs = function (a, b, c) {
      void 0 === b && (b = 0);
      void 0 === c && (c = 0);
      var d = this.g.x,
        e = this.h.x,
        f = this.g.y,
        g = this.h.y,
        k = d * g - e * f;
      0 != k && (k = 1 / k);
      a.x = k * (g * b - e * c);
      a.y = k * (d * c - f * b);
      return a;
    };
    b.prototype.Qv = function (a, b, c, d) {
      void 0 === b && (b = 0);
      void 0 === c && (c = 0);
      void 0 === d && (d = 0);
      var e = this.g.x,
        f = this.g.y,
        g = this.g.z,
        k = this.h.x,
        h = this.h.y,
        m = this.h.z,
        n = this.hb.x,
        p = this.hb.y,
        q = this.hb.z,
        t = e * (h * q - m * p) + f * (m * n - k * q) + g * (k * p - h * n);
      0 != t && (t = 1 / t);
      a.x =
        t * (b * (h * q - m * p) + c * (m * n - k * q) + d * (k * p - h * n));
      a.y =
        t * (e * (c * q - d * p) + f * (d * n - b * q) + g * (b * p - c * n));
      a.z =
        t * (e * (h * d - m * c) + f * (m * b - k * d) + g * (k * c - h * b));
      return a;
    };
    c.Ei = function () {};
    c.Ds = function (a) {
      void 0 === a && (a = 0);
      return isFinite(a);
    };
    c.Sf = function (a, b) {
      return a.x * b.x + a.y * b.y;
    };
    c.us = function (a, b) {
      return a.x * b.y - a.y * b.x;
    };
    c.jo = function (a, b) {
      void 0 === b && (b = 0);
      return new f(b * a.y, -b * a.x);
    };
    c.GL = function (a, b) {
      void 0 === a && (a = 0);
      return new f(-a * b.y, a * b.x);
    };
    c.Cf = function (a, b) {
      return new f(a.g.x * b.x + a.h.x * b.y, a.g.y * b.x + a.h.y * b.y);
    };
    c.vo = function (a, b) {
      return new f(c.Sf(b, a.g), c.Sf(b, a.h));
    };
    c.Ve = function (a, b) {
      var d = c.Cf(a.P, b);
      d.x += a.position.x;
      d.y += a.position.y;
      return d;
    };
    c.mZ = function (a, b) {
      var d = c.Td(b, a.position),
        e = d.x * a.P.g.x + d.y * a.P.g.y;
      d.y = d.x * a.P.h.x + d.y * a.P.h.y;
      d.x = e;
      return d;
    };
    c.cL = function (a, b) {
      return new f(a.x + b.x, a.y + b.y);
    };
    c.Td = function (a, b) {
      return new f(a.x - b.x, a.y - b.y);
    };
    c.BE = function (a, b) {
      var c = a.x - b.x,
        d = a.y - b.y;
      return Math.sqrt(c * c + d * d);
    };
    c.a8 = function (a, b) {
      var c = a.x - b.x,
        d = a.y - b.y;
      return c * c + d * d;
    };
    c.k9 = function (a, b) {
      void 0 === a && (a = 0);
      return new f(a * b.x, a * b.y);
    };
    c.S6 = function (b, d) {
      return a.pv(c.cL(b.g, d.g), c.cL(b.h, d.h));
    };
    c.l9 = function (b, d) {
      return a.pv(c.Cf(b, d.g), c.Cf(b, d.h));
    };
    c.m9 = function (b, d) {
      var e = new f(c.Sf(b.g, d.g), c.Sf(b.h, d.g)),
        g = new f(c.Sf(b.g, d.h), c.Sf(b.h, d.h));
      return a.pv(e, g);
    };
    c.jf = function (a) {
      void 0 === a && (a = 0);
      return 0 < a ? a : -a;
    };
    c.ZK = function (a) {
      return new f(c.jf(a.x), c.jf(a.y));
    };
    c.R6 = function (b) {
      return a.pv(c.ZK(b.g), c.ZK(b.h));
    };
    c.oq = function (a, b) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      return a < b ? a : b;
    };
    c.uM = function (a, b) {
      return new f(c.oq(a.x, b.x), c.oq(a.y, b.y));
    };
    c.pg = function (a, b) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      return a > b ? a : b;
    };
    c.tM = function (a, b) {
      return new f(c.pg(a.x, b.x), c.pg(a.y, b.y));
    };
    c.wc = function (a, b, c) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      void 0 === c && (c = 0);
      return a < b ? b : a > c ? c : a;
    };
    c.P7 = function (a, b, d) {
      return c.tM(b, c.uM(a, d));
    };
    c.$_ = function (a, b) {
      var c = a[0];
      a[0] = b[0];
      b[0] = c;
    };
    c.q$ = function () {
      return 2 * Math.random() - 1;
    };
    c.r$ = function (a, b) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      return (b - a) * Math.random() + a;
    };
    c.o9 = function (a) {
      void 0 === a && (a = 0);
      a |= (a >> 1) & 2147483647;
      a |= (a >> 2) & 1073741823;
      a |= (a >> 4) & 268435455;
      a |= (a >> 8) & 16777215;
      return (a | ((a >> 16) & 65535)) + 1;
    };
    c.K8 = function (a) {
      void 0 === a && (a = 0);
      return 0 < a && 0 == (a & (a - 1));
    };
    g.fe.push(function () {
      g.M.Math.Ei.E0 = new f(0, 0);
      g.M.Math.Ei.B0 = a.pv(new f(1, 0), new f(0, 1));
      g.M.Math.Ei.paa = new e(c.E0, c.B0);
    });
    d.nw = function () {
      this.ca = new f();
      this.Ff = new f();
      this.J = new f();
    };
    d.prototype.Set = function (a) {
      this.ca.W(a.ca);
      this.Ff.W(a.Ff);
      this.J.W(a.J);
      this.cj = a.cj;
      this.$ = a.$;
      this.Jg = a.Jg;
    };
    d.prototype.Rf = function () {
      var a = new d();
      a.ca.W(this.ca);
      a.Ff.W(this.Ff);
      a.J.W(this.J);
      a.cj = this.cj;
      a.$ = this.$;
      a.Jg = this.Jg;
      return a;
    };
    d.prototype.Og = function (a, b) {
      void 0 === b && (b = 0);
      a.position.x = (1 - b) * this.Ff.x + b * this.J.x;
      a.position.y = (1 - b) * this.Ff.y + b * this.J.y;
      a.P.Set((1 - b) * this.cj + b * this.$);
      var c = a.P;
      a.position.x -= c.g.x * this.ca.x + c.h.x * this.ca.y;
      a.position.y -= c.g.y * this.ca.x + c.h.y * this.ca.y;
    };
    d.prototype.fo = function (a) {
      void 0 === a && (a = 0);
      if (this.Jg < a && 1 - this.Jg > Number.MIN_VALUE) {
        var b = (a - this.Jg) / (1 - this.Jg);
        this.Ff.x = (1 - b) * this.Ff.x + b * this.J.x;
        this.Ff.y = (1 - b) * this.Ff.y + b * this.J.y;
        this.cj = (1 - b) * this.cj + b * this.$;
        this.Jg = a;
      }
    };
    e.Ko = function () {
      this.position = new f();
      this.P = new a();
    };
    e.prototype.Ko = function (a, b) {
      void 0 === a && (a = null);
      void 0 === b && (b = null);
      a && (this.position.W(a), this.P.vq(b));
    };
    e.prototype.Yb = function (a, b) {
      this.position.W(a);
      this.P.vq(b);
    };
    e.prototype.zA = function () {
      this.position.qb();
      this.P.zA();
    };
    e.prototype.Set = function (a) {
      this.position.W(a.position);
      this.P.vq(a.P);
    };
    e.prototype.Zi = function () {
      return Math.atan2(this.P.g.y, this.P.g.x);
    };
    f.kb = function () {};
    f.prototype.kb = function (a, b) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      this.x = a;
      this.y = b;
    };
    f.prototype.qb = function () {
      this.y = this.x = 0;
    };
    f.prototype.Set = function (a, b) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      this.x = a;
      this.y = b;
    };
    f.prototype.W = function (a) {
      this.x = a.x;
      this.y = a.y;
    };
    f.prototype.mo = function () {
      return new f(-this.x, -this.y);
    };
    f.prototype.wM = function () {
      this.x = -this.x;
      this.y = -this.y;
    };
    f.jZ = function () {
      var a = 0,
        b = 0;
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      return new f(a, b);
    };
    f.prototype.Rf = function () {
      return new f(this.x, this.y);
    };
    f.prototype.qs = function (a) {
      this.x += a.x;
      this.y += a.y;
    };
    f.prototype.bN = function (a) {
      this.x -= a.x;
      this.y -= a.y;
    };
    f.prototype.Rg = function (a) {
      void 0 === a && (a = 0);
      this.x *= a;
      this.y *= a;
    };
    f.prototype.jo = function (a) {
      void 0 === a && (a = 0);
      var b = this.x;
      this.x = a * this.y;
      this.y = -a * b;
    };
    f.prototype.GL = function (a) {
      void 0 === a && (a = 0);
      var b = this.x;
      this.x = -a * this.y;
      this.y = a * b;
    };
    f.prototype.uM = function (a) {
      this.x = this.x < a.x ? this.x : a.x;
      this.y = this.y < a.y ? this.y : a.y;
    };
    f.prototype.tM = function (a) {
      this.x = this.x > a.x ? this.x : a.x;
      this.y = this.y > a.y ? this.y : a.y;
    };
    f.prototype.jf = function () {
      0 > this.x && (this.x = -this.x);
      0 > this.y && (this.y = -this.y);
    };
    f.prototype.Gm = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    f.prototype.fF = function () {
      return this.x * this.x + this.y * this.y;
    };
    f.prototype.mh = function () {
      var a = Math.sqrt(this.x * this.x + this.y * this.y);
      if (a < Number.MIN_VALUE) return 0;
      var b = 1 / a;
      this.x *= b;
      this.y *= b;
      return a;
    };
    f.prototype.Ds = function () {
      return c.Ds(this.x) && c.Ds(this.y);
    };
    h.ct = function () {};
    h.prototype.ct = function (a, b, c) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      void 0 === c && (c = 0);
      this.x = a;
      this.y = b;
      this.z = c;
    };
    h.prototype.qb = function () {
      this.x = this.y = this.z = 0;
    };
    h.prototype.Set = function (a, b, c) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      void 0 === c && (c = 0);
      this.x = a;
      this.y = b;
      this.z = c;
    };
    h.prototype.W = function (a) {
      this.x = a.x;
      this.y = a.y;
      this.z = a.z;
    };
    h.prototype.mo = function () {
      return new h(-this.x, -this.y, -this.z);
    };
    h.prototype.wM = function () {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
    };
    h.prototype.Rf = function () {
      return new h(this.x, this.y, this.z);
    };
    h.prototype.qs = function (a) {
      this.x += a.x;
      this.y += a.y;
      this.z += a.z;
    };
    h.prototype.bN = function (a) {
      this.x -= a.x;
      this.y -= a.y;
      this.z -= a.z;
    };
    h.prototype.Rg = function (a) {
      void 0 === a && (a = 0);
      this.x *= a;
      this.y *= a;
      this.z *= a;
    };
  })();
  (function () {
    var a = g.M.Math.Ei,
      b = g.M.Math.nw,
      c = g.M.Math.Ko,
      d = g.M.Math.kb,
      e = g.M.Us,
      f = g.M.pa,
      h = g.K.QA,
      k = g.K.TA,
      p = g.K.XA,
      n = g.K.pb.YA,
      m = g.i.od,
      v = g.i.Gq,
      q = g.i.RA,
      l = g.i.jG,
      t = g.i.SA,
      u = g.i.Xs,
      z = g.i.Wh,
      C = g.i.nG,
      w = g.i.rG,
      B = g.i.$v,
      G = g.i.ll,
      F = g.i.Ys,
      I = g.i.aB,
      H = g.i.qh,
      J = g.i.ua.Ob,
      K = g.i.ua.Vs,
      O = g.i.ua.Jo,
      Q = g.i.T.ta;
    m.od = function () {
      this.R = new c();
      this.f = new b();
      this.u = new d();
      this.Ml = new d();
    };
    m.prototype.io = function (a) {
      if (1 == this.ze.wv()) return null;
      var b = new B();
      b.kh(this, this.R, a);
      this.V & m.Iw && b.jv(this.ze.wg.or, this.R);
      b.Va = this.Ll;
      this.Ll = b;
      ++this.wI;
      b.N = this;
      0 < b.pj && this.GF();
      this.ze.V |= H.qH;
      return b;
    };
    m.prototype.GW = function (a) {
      if (1 != this.ze.wv()) {
        for (var b = this.Ll, c = null; null != b; ) {
          if (b == a) {
            c ? (c.Va = a.Va) : (this.Ll = a.Va);
            break;
          }
          c = b;
          b = b.Va;
        }
        for (b = this.Fc; b; ) {
          var c = b.Wd,
            b = b.next,
            d = c.yd;
          (a != c.qd && a != d) || this.ze.wg.Ie(c);
        }
        this.V & m.Iw && a.vs(this.ze.wg.or);
        a.Ie();
        a.N = null;
        a.Va = null;
        --this.wI;
        this.GF();
      }
    };
    m.prototype.Nv = function (a, b) {
      void 0 === b && (b = 0);
      var c;
      if (1 != this.ze.wv()) {
        this.R.P.Set(b);
        this.R.position.W(a);
        c = this.R.P;
        var d = this.f.ca;
        this.f.J.x = c.g.x * d.x + c.h.x * d.y;
        this.f.J.y = c.g.y * d.x + c.h.y * d.y;
        this.f.J.x += this.R.position.x;
        this.f.J.y += this.R.position.y;
        this.f.Ff.W(this.f.J);
        this.f.cj = this.f.$ = b;
        d = this.ze.wg.or;
        for (c = this.Ll; c; c = c.Va) c.cN(d, this.R, this.R);
        this.ze.wg.Fz();
      }
    };
    m.prototype.Og = function () {
      return this.R;
    };
    m.prototype.aN = function (a) {
      this.Nv(a, this.Zi());
    };
    m.prototype.Zi = function () {
      return this.f.$;
    };
    m.prototype.yo = function (a) {
      this.ia != m.re && this.u.W(a);
    };
    m.prototype.C_ = function (a) {
      void 0 === a && (a = 0);
      this.ia != m.re && (this.U = a);
    };
    m.prototype.ho = function (a) {
      this.ia == m.nf &&
        (0 == this.Je() && this.Sb(!0), (this.Ml.x += a.x), (this.Ml.y += a.y));
    };
    m.prototype.w_ = function () {
      this.ia == m.nf &&
        (0 == this.Je() && this.Sb(!0), (this.Ml.x = 0), (this.Ml.y = 0));
    };
    m.prototype.oE = function (a) {
      void 0 === a && (a = 0);
      this.ia == m.nf && (0 == this.Je() && this.Sb(!0), (this.Kx += a));
    };
    m.prototype.x_ = function () {
      this.ia == m.nf && (0 == this.Je() && this.Sb(!0), (this.Kx = 0));
    };
    m.prototype.xV = function (a, b) {
      this.ia == m.nf &&
        (0 == this.Je() && this.Sb(!0),
        (this.u.x += this.aa * a.x),
        (this.u.y += this.aa * a.y),
        (this.U +=
          this.ma * ((b.x - this.f.J.x) * a.y - (b.y - this.f.J.y) * a.x)));
    };
    m.prototype.$L = function (a) {
      a.Vl = this.da;
      a.Cs = this.nj;
      a.pk.W(this.f.ca);
    };
    m.prototype.GF = function () {
      this.ma = this.nj = this.aa = this.da = 0;
      this.f.ca.qb();
      if (this.ia != m.re && this.ia != m.I0) {
        for (var b = d.jZ(), c = this.Ll; c; c = c.Va)
          if (0 != c.pj) {
            var e = c.$L();
            this.da += e.Vl;
            b.x += e.pk.x * e.Vl;
            b.y += e.pk.y * e.Vl;
            this.nj += e.Cs;
          }
        0 < this.da
          ? ((this.aa = 1 / this.da), (b.x *= this.aa), (b.y *= this.aa))
          : (this.aa = this.da = 1);
        0 < this.nj && 0 == (this.V & m.UO)
          ? ((this.nj -= this.da * (b.x * b.x + b.y * b.y)),
            (this.nj *= this.L3),
            (this.ma = 1 / this.nj))
          : (this.ma = this.nj = 0);
        c = this.f.J.Rf();
        this.f.ca.W(b);
        this.f.Ff.W(a.Ve(this.R, this.f.ca));
        this.f.J.W(this.f.Ff);
        this.u.x += this.U * -(this.f.J.y - c.y);
        this.u.y += this.U * +(this.f.J.x - c.x);
      }
    };
    m.prototype.Kz = function (a) {
      var b = this.R.P;
      a = new d(b.g.x * a.x + b.h.x * a.y, b.g.y * a.x + b.h.y * a.y);
      a.x += this.R.position.x;
      a.y += this.R.position.y;
      return a;
    };
    m.prototype.TE = function (b) {
      return a.Cf(this.R.P, b);
    };
    m.prototype.Ng = function (b) {
      return a.mZ(this.R, b);
    };
    m.prototype.RE = function (b) {
      return a.vo(this.R.P, b);
    };
    m.prototype.lY = function (a) {
      return new d(
        this.u.x - this.U * (a.y - this.f.J.y),
        this.u.y + this.U * (a.x - this.f.J.x),
      );
    };
    m.prototype.YM = function (a) {
      void 0 === a && (a = 0);
      this.kp = a;
    };
    m.prototype.B_ = function (a) {
      void 0 === a && (a = 0);
      this.tx = a;
    };
    m.prototype.nd = function () {
      return this.ia;
    };
    m.prototype.Mz = function () {
      return (this.V & m.mH) == m.mH;
    };
    m.prototype.Sb = function (a) {
      a
        ? ((this.V |= m.Jw), (this.Dr = 0))
        : ((this.V &= ~m.Jw),
          (this.Dr = 0),
          this.u.qb(),
          (this.U = 0),
          this.Ml.qb(),
          (this.Kx = 0));
    };
    m.prototype.Je = function () {
      return (this.V & m.Jw) == m.Jw;
    };
    m.prototype.hq = function () {
      return (this.V & m.Iw) == m.Iw;
    };
    m.prototype.Zj = function () {
      return this.wn;
    };
    m.prototype.LF = function (a) {
      this.wn = a;
    };
    m.prototype.od = function (a, b) {
      this.V = 0;
      a.NN && (this.V |= m.mH);
      a.sP && (this.V |= m.UO);
      a.r0 && (this.V |= m.lH);
      a.A0 && (this.V |= m.Jw);
      a.active && (this.V |= m.Iw);
      this.ze = b;
      this.R.position.W(a.position);
      this.R.P.Set(a.angle);
      this.f.ca.qb();
      this.f.Jg = 1;
      this.f.cj = this.f.$ = a.angle;
      var c = this.R.P,
        d = this.f.ca;
      this.f.J.x = c.g.x * d.x + c.h.x * d.y;
      this.f.J.y = c.g.y * d.x + c.h.y * d.y;
      this.f.J.x += this.R.position.x;
      this.f.J.y += this.R.position.y;
      this.f.Ff.W(this.f.J);
      this.Fc = this.ip = this.ce = null;
      this.uI = 0;
      this.Va = this.tf = null;
      this.u.W(a.jQ);
      this.U = a.u0;
      this.kp = a.iQ;
      this.tx = a.s0;
      this.xI = a.TP;
      this.Ml.Set(0, 0);
      this.Dr = this.Kx = 0;
      this.ia = a.type;
      this.aa = this.ia == m.nf ? (this.da = 1) : (this.da = 0);
      this.ma = this.nj = 0;
      this.L3 = a.H2;
      this.wn = a.Nh;
      this.Ll = null;
      this.wI = 0;
    };
    m.prototype.XM = function (a) {
      this.xI = a;
    };
    m.prototype.dN = function () {
      var a = m.M5;
      a.P.Set(this.f.cj);
      var b = a.P,
        c = this.f.ca;
      a.position.x = this.f.Ff.x - (b.g.x * c.x + b.h.x * c.y);
      a.position.y = this.f.Ff.y - (b.g.y * c.x + b.h.y * c.y);
      c = this.ze.wg.or;
      for (b = this.Ll; b; b = b.Va) b.cN(c, a, this.R);
    };
    m.prototype.Ud = function () {
      this.R.P.Set(this.f.$);
      var a = this.R.P,
        b = this.f.ca;
      this.R.position.x = this.f.J.x - (a.g.x * b.x + a.h.x * b.y);
      this.R.position.y = this.f.J.y - (a.g.y * b.x + a.h.y * b.y);
    };
    m.prototype.Pv = function (a) {
      if (this.ia != m.nf && a.ia != m.nf) return !1;
      for (var b = this.ce; b; b = b.next)
        if (b.Ri == a && 0 == b.on.rQ) return !1;
      return !0;
    };
    m.prototype.fo = function (a) {
      void 0 === a && (a = 0);
      this.f.fo(a);
      this.f.J.W(this.f.Ff);
      this.f.$ = this.f.cj;
      this.Ud();
    };
    g.fe.push(function () {
      g.i.od.M5 = new c();
      g.i.od.se = 1;
      g.i.od.Jw = 2;
      g.i.od.lH = 4;
      g.i.od.mH = 8;
      g.i.od.UO = 16;
      g.i.od.Iw = 32;
      g.i.od.re = 0;
      g.i.od.I0 = 1;
      g.i.od.nf = 2;
    });
    v.Gq = function () {
      this.position = new d();
      this.jQ = new d();
    };
    v.prototype.Gq = function () {
      this.Nh = null;
      this.position.Set(0, 0);
      this.angle = 0;
      this.jQ.Set(0, 0);
      this.s0 = this.iQ = this.u0 = 0;
      this.A0 = this.r0 = !0;
      this.NN = this.sP = !1;
      this.type = m.re;
      this.active = !0;
      this.H2 = 1;
    };
    q.RA = function () {};
    q.prototype.Pv = function (a, b) {
      var c = a.ZL(),
        d = b.ZL();
      return c.fr == d.fr && 0 != c.fr
        ? 0 < c.fr
        : 0 != (c.Mx & d.vw) && 0 != (c.vw & d.Mx);
    };
    g.fe.push(function () {
      g.i.RA.F0 = new q();
    });
    l.jG = function () {
      this.g4 = new Ma(f.Yh);
      this.s6 = new Ma(f.Yh);
    };
    t.SA = function () {};
    t.prototype.OM = function () {};
    g.fe.push(function () {
      g.i.SA.G0 = new t();
    });
    u.Xs = function () {};
    u.prototype.Xs = function () {
      this.ze = null;
      this.oj = 0;
      this.tQ = q.F0;
      this.xx = t.G0;
      this.sQ = new K(this.hp);
      this.or = new p();
    };
    u.prototype.wV = function (a, b) {
      var c = a instanceof B ? a : null,
        d = b instanceof B ? b : null,
        e = c.N,
        f = d.N;
      if (e != f) {
        for (var g = f.Fc; g; ) {
          if (g.Ri == e) {
            var r = g.Wd.qd,
              h = g.Wd.yd;
            if ((r == c && h == d) || (r == d && h == c)) return;
          }
          g = g.next;
        }
        0 != f.Pv(e) &&
          0 != this.tQ.Pv(c, d) &&
          ((g = this.sQ.kh(c, d)),
          (c = g.qd),
          (d = g.yd),
          (e = c.N),
          (f = d.N),
          (g.tf = null),
          (g.Va = this.ze.Fc),
          null != this.ze.Fc && (this.ze.Fc.tf = g),
          (this.ze.Fc = g),
          (g.cg.Wd = g),
          (g.cg.Ri = f),
          (g.cg.Bd = null),
          (g.cg.next = e.Fc),
          null != e.Fc && (e.Fc.Bd = g.cg),
          (e.Fc = g.cg),
          (g.dg.Wd = g),
          (g.dg.Ri = e),
          (g.dg.Bd = null),
          (g.dg.next = f.Fc),
          null != f.Fc && (f.Fc.Bd = g.dg),
          (f.Fc = g.dg),
          ++this.ze.oj);
      }
    };
    u.prototype.Fz = function () {
      this.or.f0(g.e2(this, this.wV));
    };
    u.prototype.Ie = function (a) {
      var b = a.qd.N,
        c = a.yd.N;
      a.tf && (a.tf.Va = a.Va);
      a.Va && (a.Va.tf = a.tf);
      a == this.ze.Fc && (this.ze.Fc = a.Va);
      a.cg.Bd && (a.cg.Bd.next = a.cg.next);
      a.cg.next && (a.cg.next.Bd = a.cg.Bd);
      a.cg == b.Fc && (b.Fc = a.cg.next);
      a.dg.Bd && (a.dg.Bd.next = a.dg.next);
      a.dg.next && (a.dg.next.Bd = a.dg.Bd);
      a.dg == c.Fc && (c.Fc = a.dg.next);
      this.sQ.Ie(a);
      --this.oj;
    };
    u.prototype.pW = function () {
      for (var a = this.ze.Fc; a; ) {
        var b = a.qd,
          c = a.yd,
          d = b.N,
          e = c.N;
        if (0 == d.Je() && 0 == e.Je()) a = a.Va;
        else {
          if (a.V & J.pH) {
            if (0 == e.Pv(d)) {
              b = a;
              a = b.Va;
              this.Ie(b);
              continue;
            }
            if (0 == this.tQ.Pv(b, c)) {
              b = a;
              a = b.Va;
              this.Ie(b);
              continue;
            }
            a.V &= ~J.pH;
          }
          0 == this.or.Do(b.Ar, c.Ar)
            ? ((b = a), (a = b.Va), this.Ie(b))
            : (a.kN(this.xx), (a = a.Va));
        }
      }
    };
    g.fe.push(function () {
      g.i.Xs.yca = new k();
    });
    z.Wh = function () {};
    z.prototype.Wh = function () {};
    g.fe.push(function () {
      g.i.Wh.cba = 1;
      g.i.Wh.$aa = 2;
      g.i.Wh.Waa = 4;
      g.i.Wh.bba = 8;
      g.i.Wh.Xaa = 16;
      g.i.Wh.Yaa = 32;
    });
    C.nG = function () {};
    w.rG = function () {
      this.vw = 1;
      this.Mx = 65535;
      this.fr = 0;
    };
    w.prototype.Rf = function () {
      var a = new w();
      a.vw = this.vw;
      a.Mx = this.Mx;
      a.fr = this.fr;
      return a;
    };
    B.$v = function () {
      this.DQ = new w();
    };
    B.prototype.nd = function () {
      return this.Ic.nd();
    };
    B.prototype.iq = function () {
      return this.M3;
    };
    B.prototype.ZL = function () {
      return this.DQ.Rf();
    };
    B.prototype.Zj = function () {
      return this.wn;
    };
    B.prototype.LF = function (a) {
      this.wn = a;
    };
    B.prototype.$L = function (a) {
      void 0 === a && (a = null);
      null == a && (a = new n());
      this.Ic.iv(a, this.pj);
      return a;
    };
    B.prototype.yA = function (a) {
      void 0 === a && (a = 0);
      this.pj = a;
    };
    B.prototype.Kv = function (a) {
      void 0 === a && (a = 0);
      this.qj = a;
    };
    B.prototype.Ov = function (a) {
      void 0 === a && (a = 0);
      this.sj = a;
    };
    B.prototype.$v = function () {
      this.Kt = new h();
      this.Ic = this.Va = this.N = this.wn = null;
      this.sj = this.qj = this.pj = 0;
    };
    B.prototype.kh = function (a, b, c) {
      this.wn = c.Nh;
      this.qj = c.ai;
      this.sj = c.oi;
      this.N = a;
      this.Va = null;
      this.DQ = c.filter.Rf();
      this.M3 = c.X2;
      this.Ic = c.shape.Rf();
      this.pj = c.Ro;
    };
    B.prototype.Ie = function () {
      this.Ic = null;
    };
    B.prototype.jv = function (a, b) {
      this.Ic.ss(this.Kt, b);
      this.Ar = a.jv(this.Kt, this);
    };
    B.prototype.vs = function (a) {
      null != this.Ar && (a.vs(this.Ar), (this.Ar = null));
    };
    B.prototype.cN = function (b, c, d) {
      if (this.Ar) {
        var e = new h(),
          f = new h();
        this.Ic.ss(e, c);
        this.Ic.ss(f, d);
        this.Kt.rs(e, f);
        c = a.Td(d.position, c.position);
        b.wF(this.Ar, this.Kt, c);
      }
    };
    G.ll = function () {
      this.filter = new w();
    };
    G.prototype.ll = function () {
      this.Nh = this.shape = null;
      this.ai = 0.2;
      this.Ro = this.oi = 0;
      this.filter.vw = 1;
      this.filter.Mx = 65535;
      this.filter.fr = 0;
      this.X2 = !1;
    };
    F.Ys = function () {};
    F.prototype.Ys = function () {
      this.Jl = new ya();
      this.Mt = new ya();
      this.Fk = new ya();
    };
    F.prototype.Yb = function (a, b, c, d, e, f) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      void 0 === c && (c = 0);
      this.D3 = b;
      this.N3 = c;
      this.Ch = this.oj = this.vg = 0;
      this.hp = d;
      this.O3 = e;
      this.pr = f;
      for (d = this.Jl.length; d < a; d++) this.Jl[d] = null;
      for (d = this.Mt.length; d < b; d++) this.Mt[d] = null;
      for (d = this.Fk.length; d < c; d++) this.Fk[d] = null;
    };
    F.prototype.wE = function () {
      this.Ch = this.oj = this.vg = 0;
    };
    F.prototype.xq = function (b, c, d) {
      var e, g, h;
      for (e = 0; e < this.vg; ++e)
        (g = this.Jl[e]),
          g.nd() == m.nf &&
            ((g.u.x += b.Bb * (c.x * g.xI + g.aa * g.Ml.x)),
            (g.u.y += b.Bb * (c.y * g.xI + g.aa * g.Ml.y)),
            (g.U += b.Bb * g.ma * g.Kx),
            g.u.Rg(a.wc(1 - b.Bb * g.kp, 0, 1)),
            (g.U *= a.wc(1 - b.Bb * g.tx, 0, 1)));
      this.pr.Yb(b, this.Mt, this.oj, this.hp);
      c = this.pr;
      c.yi(b);
      for (e = 0; e < this.Ch; ++e) (h = this.Fk[e]), h.yi(b);
      for (e = 0; e < b.Rj; ++e) {
        for (g = 0; g < this.Ch; ++g) (h = this.Fk[g]), h.Th(b);
        c.Th();
      }
      for (e = 0; e < this.Ch; ++e) (h = this.Fk[e]), h.NE();
      c.NE();
      for (e = 0; e < this.vg; ++e)
        if (((g = this.Jl[e]), g.nd() != m.re)) {
          var k = b.Bb * g.u.x,
            r = b.Bb * g.u.y;
          k * k + r * r > f.zN &&
            (g.u.mh(),
            (g.u.x = g.u.x * f.et * b.kj),
            (g.u.y = g.u.y * f.et * b.kj));
          k = b.Bb * g.U;
          k * k > f.yN && (g.U = 0 > g.U ? -f.dt * b.kj : f.dt * b.kj);
          g.f.Ff.W(g.f.J);
          g.f.cj = g.f.$;
          g.f.J.x += b.Bb * g.u.x;
          g.f.J.y += b.Bb * g.u.y;
          g.f.$ += b.Bb * g.U;
          g.Ud();
        }
      for (e = 0; e < b.Fj; ++e) {
        k = c.Sh(f.DG);
        r = !0;
        for (g = 0; g < this.Ch; ++g)
          (h = this.Fk[g]), (h = h.Sh(f.DG)), (r = r && h);
        if (k && r) break;
      }
      this.SM(c.Kl);
      if (d) {
        d = Number.MAX_VALUE;
        c = f.xN * f.xN;
        k = f.wN * f.wN;
        for (e = 0; e < this.vg; ++e)
          (g = this.Jl[e]),
            g.nd() != m.re &&
              (0 == (g.V & m.lH) && (d = g.Dr = 0),
              0 == (g.V & m.lH) || g.U * g.U > k || a.Sf(g.u, g.u) > c
                ? (d = g.Dr = 0)
                : ((g.Dr += b.Bb), (d = a.oq(d, g.Dr))));
        if (d >= f.L0) for (e = 0; e < this.vg; ++e) (g = this.Jl[e]), g.Sb(!1);
      }
    };
    F.prototype.MF = function (a) {
      var b, c;
      this.pr.Yb(a, this.Mt, this.oj, this.hp);
      var d = this.pr;
      for (b = 0; b < this.Ch; ++b) this.Fk[b].yi(a);
      for (b = 0; b < a.Rj; ++b)
        for (d.Th(), c = 0; c < this.Ch; ++c) this.Fk[c].Th(a);
      for (b = 0; b < this.vg; ++b)
        if (((c = this.Jl[b]), c.nd() != m.re)) {
          var e = a.Bb * c.u.x,
            g = a.Bb * c.u.y;
          e * e + g * g > f.zN &&
            (c.u.mh(),
            (c.u.x = c.u.x * f.et * a.kj),
            (c.u.y = c.u.y * f.et * a.kj));
          e = a.Bb * c.U;
          e * e > f.yN && (c.U = 0 > c.U ? -f.dt * a.kj : f.dt * a.kj);
          c.f.Ff.W(c.f.J);
          c.f.cj = c.f.$;
          c.f.J.x += a.Bb * c.u.x;
          c.f.J.y += a.Bb * c.u.y;
          c.f.$ += a.Bb * c.U;
          c.Ud();
        }
      for (b = 0; b < a.Fj; ++b) {
        e = d.Sh(0.75);
        g = !0;
        for (c = 0; c < this.Ch; ++c) var h = this.Fk[c].Sh(f.DG), g = g && h;
        if (e && g) break;
      }
      this.SM(d.Kl);
    };
    F.prototype.SM = function (a) {
      if (null != this.O3)
        for (var b = 0; b < this.oj; ++b)
          for (var c = a[b], d = 0; d < c.Ej; ++d)
            (F.fT.g4[d] = c.Gg[d].bf), (F.fT.s6[d] = c.Gg[d].vm);
    };
    F.prototype.nE = function (a) {
      a.Rba = this.vg;
      this.Jl[this.vg++] = a;
    };
    F.prototype.$K = function (a) {
      this.Mt[this.oj++] = a;
    };
    F.prototype.aL = function (a) {
      this.Fk[this.Ch++] = a;
    };
    g.fe.push(function () {
      g.i.Ys.fT = new l();
    });
    I.aB = function () {};
    I.prototype.Set = function (a) {
      this.Bb = a.Bb;
      this.kj = a.kj;
      this.Fj = a.Fj;
      this.Rj = a.Rj;
      this.Tj = a.Tj;
    };
    H.qh = function () {
      this.F5 = new ya();
      this.wg = new u();
      this.pr = new O();
      this.FQ = new F();
    };
    H.prototype.qh = function (a, b) {
      this.ip = this.ce = this.Fc = this.$d = null;
      this.uI = this.Ch = this.oj = this.vg = 0;
      H.V3 = !0;
      H.E3 = !0;
      this.B3 = b;
      this.Ag = a;
      this.EQ = 0;
      this.wg.ze = this;
      var c = new v();
      this.K3 = this.Dm(c);
    };
    H.prototype.Jv = function (a) {
      this.wg.xx = a;
    };
    H.prototype.Dm = function (a) {
      if (1 == this.wv()) return null;
      a = new m(a, this);
      a.tf = null;
      if ((a.Va = this.$d)) this.$d.tf = a;
      this.$d = a;
      ++this.vg;
      return a;
    };
    H.prototype.JL = function (a) {
      if (1 != this.wv()) {
        for (var b = a.ce; b; ) {
          var c = b,
            b = b.next;
          this.kv(c.on);
        }
        for (b = a.ip; b; ) (c = b), (b = b.Cn), c.controller.QM(a);
        for (b = a.Fc; b; ) (c = b), (b = b.next), this.wg.Ie(c.Wd);
        a.Fc = null;
        for (b = a.Ll; b; ) (c = b), (b = b.Va), c.vs(this.wg.or), c.Ie();
        a.Ll = null;
        a.wI = 0;
        a.tf && (a.tf.Va = a.Va);
        a.Va && (a.Va.tf = a.tf);
        a == this.$d && (this.$d = a.Va);
        --this.vg;
      }
    };
    H.prototype.xc = function (a) {
      var b = Q.kh(a, null);
      b.tf = null;
      if ((b.Va = this.ce)) this.ce.tf = b;
      this.ce = b;
      ++this.Ch;
      b.Yg.on = b;
      b.Yg.Ri = b.Ka;
      b.Yg.Bd = null;
      if ((b.Yg.next = b.Xa.ce)) b.Xa.ce.Bd = b.Yg;
      b.Xa.ce = b.Yg;
      b.Zg.on = b;
      b.Zg.Ri = b.Xa;
      b.Zg.Bd = null;
      if ((b.Zg.next = b.Ka.ce)) b.Ka.ce.Bd = b.Zg;
      b.Ka.ce = b.Zg;
      var c = a.gc,
        d = a.qc;
      if (0 == a.Xf) for (a = d.Fc; a; ) a.Ri == c && a.Wd.SL(), (a = a.next);
      return b;
    };
    H.prototype.kv = function (a) {
      var b = a.rQ;
      a.tf && (a.tf.Va = a.Va);
      a.Va && (a.Va.tf = a.tf);
      a == this.ce && (this.ce = a.Va);
      var c = a.Xa,
        d = a.Ka;
      c.Sb(!0);
      d.Sb(!0);
      a.Yg.Bd && (a.Yg.Bd.next = a.Yg.next);
      a.Yg.next && (a.Yg.next.Bd = a.Yg.Bd);
      a.Yg == c.ce && (c.ce = a.Yg.next);
      a.Yg.Bd = null;
      a.Yg.next = null;
      a.Zg.Bd && (a.Zg.Bd.next = a.Zg.next);
      a.Zg.next && (a.Zg.next.Bd = a.Zg.Bd);
      a.Zg == d.ce && (d.ce = a.Zg.next);
      a.Zg.Bd = null;
      a.Zg.next = null;
      Q.Ie(a, null);
      --this.Ch;
      if (0 == b) for (a = d.Fc; a; ) a.Ri == c && a.Wd.SL(), (a = a.next);
    };
    H.prototype.Qs = function (a) {
      this.Ag = a;
    };
    H.prototype.zo = function (a, b, c) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      void 0 === c && (c = 0);
      this.V & H.qH && (this.wg.Fz(), (this.V &= ~H.qH));
      var d = H.J5;
      d.Bb = a;
      d.Rj = b;
      d.Fj = c;
      d.kj = 0 < a ? 1 / a : 0;
      d.ie = this.EQ * a;
      d.Tj = H.V3;
      this.wg.pW();
      0 < d.Bb && this.xq(d);
      H.E3 && 0 < d.Bb && this.MF(d);
      0 < d.Bb && (this.EQ = d.kj);
      this.V &= ~H.YO;
    };
    H.prototype.wv = function () {
      return 0 < (this.V & H.YO);
    };
    H.prototype.xq = function (a) {
      for (var b, c = this.ip; c; c = c.Va) c.zo(a);
      c = this.FQ;
      c.Yb(this.vg, this.oj, this.Ch, null, this.wg.xx, this.pr);
      for (b = this.$d; b; b = b.Va) b.V &= ~m.se;
      for (var d = this.Fc; d; d = d.Va) d.V &= ~J.se;
      for (d = this.ce; d; d = d.Va) d.tr = !1;
      for (var d = this.F5, e = this.$d; e; e = e.Va)
        if (!(e.V & m.se) && 0 != e.Je() && 0 != e.hq() && e.nd() != m.re) {
          c.wE();
          var f = 0;
          d[f++] = e;
          for (e.V |= m.se; 0 < f; )
            if (
              ((b = d[--f]), c.nE(b), 0 == b.Je() && b.Sb(!0), b.nd() != m.re)
            ) {
              for (var g, h = b.Fc; h; h = h.next)
                h.Wd.V & J.se ||
                  1 == h.Wd.iq() ||
                  0 == h.Wd.Nz() ||
                  0 == h.Wd.XE() ||
                  (c.$K(h.Wd),
                  (h.Wd.V |= J.se),
                  (g = h.Ri),
                  g.V & m.se || ((d[f++] = g), (g.V |= m.se)));
              for (b = b.ce; b; b = b.next)
                1 != b.on.tr &&
                  ((g = b.Ri),
                  0 != g.hq() &&
                    (c.aL(b.on),
                    (b.on.tr = !0),
                    g.V & m.se || ((d[f++] = g), (g.V |= m.se))));
            }
          c.xq(a, this.Ag, this.B3);
          for (f = 0; f < c.vg; ++f)
            (b = c.Jl[f]), b.nd() == m.re && (b.V &= ~m.se);
        }
      for (f = 0; f < d.length && d[f]; ++f) d[f] = null;
      for (b = this.$d; b; b = b.Va)
        0 != b.Je() && 0 != b.hq() && b.nd() != m.re && b.dN();
      this.wg.Fz();
    };
    H.prototype.MF = function (a) {
      var b,
        c,
        d,
        e = this.FQ;
      e.Yb(this.vg, f.J0, f.K0, null, this.wg.xx, this.pr);
      var g = H.B5;
      for (b = this.$d; b; b = b.Va) (b.V &= ~m.se), (b.f.Jg = 0);
      for (d = this.Fc; d; d = d.Va) d.V &= ~(J.tt | J.se);
      for (d = this.ce; d; d = d.Va) d.tr = !1;
      for (;;) {
        var h = null,
          k = 1;
        for (d = this.Fc; d; d = d.Va)
          if (1 != d.iq() && 0 != d.Nz() && 0 != d.IY()) {
            if (d.V & J.tt) b = d.U3;
            else {
              b = d.qd;
              c = d.yd;
              b = b.N;
              c = c.N;
              if (
                !(
                  (b.nd() == m.nf && 0 != b.Je()) ||
                  (c.nd() == m.nf && 0 != c.Je())
                )
              )
                continue;
              var r = b.f.Jg;
              b.f.Jg < c.f.Jg
                ? ((r = c.f.Jg), b.f.fo(r))
                : c.f.Jg < b.f.Jg && ((r = b.f.Jg), c.f.fo(r));
              b = d.vW(b.f, c.f);
              0 < b && 1 > b && ((b = (1 - b) * r + b), 1 < b && (b = 1));
              d.U3 = b;
              d.V |= J.tt;
            }
            Number.MIN_VALUE < b && b < k && ((h = d), (k = b));
          }
        if (null == h || 1 - 100 * Number.MIN_VALUE < k) break;
        b = h.qd;
        c = h.yd;
        b = b.N;
        c = c.N;
        H.cT.Set(b.f);
        H.dT.Set(c.f);
        b.fo(k);
        c.fo(k);
        h.kN(this.wg.xx);
        h.V &= ~J.tt;
        if (1 == h.iq() || 0 == h.Nz())
          b.f.Set(H.cT), c.f.Set(H.dT), b.Ud(), c.Ud();
        else if (0 != h.XE()) {
          b.nd() != m.nf && (b = c);
          e.wE();
          h = d = 0;
          g[d + h++] = b;
          for (b.V |= m.se; 0 < h; )
            if (
              ((b = g[d++]),
              --h,
              e.nE(b),
              0 == b.Je() && b.Sb(!0),
              b.nd() == m.nf)
            ) {
              for (c = b.Fc; c && e.oj != e.D3; c = c.next)
                c.Wd.V & J.se ||
                  1 == c.Wd.iq() ||
                  0 == c.Wd.Nz() ||
                  0 == c.Wd.XE() ||
                  (e.$K(c.Wd),
                  (c.Wd.V |= J.se),
                  (r = c.Ri),
                  r.V & m.se ||
                    (r.nd() != m.re && (r.fo(k), r.Sb(!0)),
                    (g[d + h] = r),
                    ++h,
                    (r.V |= m.se)));
              for (b = b.ce; b; b = b.next)
                e.Ch != e.N3 &&
                  1 != b.on.tr &&
                  ((r = b.Ri),
                  0 != r.hq() &&
                    (e.aL(b.on),
                    (b.on.tr = !0),
                    r.V & m.se ||
                      (r.nd() != m.re && (r.fo(k), r.Sb(!0)),
                      (g[d + h] = r),
                      ++h,
                      (r.V |= m.se))));
            }
          d = H.I5;
          d.Tj = !1;
          d.Bb = (1 - k) * a.Bb;
          d.kj = 1 / d.Bb;
          d.ie = 0;
          d.Rj = a.Rj;
          d.Fj = a.Fj;
          e.MF(d);
          for (k = 0; k < e.vg; ++k)
            if (((b = e.Jl[k]), (b.V &= ~m.se), 0 != b.Je() && b.nd() == m.nf))
              for (b.dN(), c = b.Fc; c; c = c.next) c.Wd.V &= ~J.tt;
          for (k = 0; k < e.oj; ++k) (d = e.Mt[k]), (d.V &= ~(J.tt | J.se));
          for (k = 0; k < e.Ch; ++k) (d = e.Fk[k]), (d.tr = !1);
          this.wg.Fz();
        }
      }
    };
    g.fe.push(function () {
      g.i.qh.J5 = new I();
      g.i.qh.Bca = new c();
      g.i.qh.cT = new b();
      g.i.qh.dT = new b();
      g.i.qh.I5 = new I();
      g.i.qh.B5 = new ya();
      g.i.qh.zca = new e(0.5, 0.8, 0.8);
      g.i.qh.qH = 1;
      g.i.qh.YO = 2;
    });
  })();
  (function () {
    var a = g.K.pb.Io,
      b = g.K.pb.Fi,
      c = g.K.pb.Yc,
      d = g.i.ua.eG,
      e = g.i.ua.Ob,
      f = g.i.ua.Vv,
      h = g.i.ua.hG,
      k = g.i.ua.iG,
      p = g.i.ua.Vs,
      n = g.i.ua.kG,
      m = g.i.ua.lG,
      v = g.i.ua.Jo,
      q = g.i.ua.qG,
      l = g.i.ua.jw,
      t = g.i.ua.wG,
      u = g.i.ua.xG,
      z = g.i.ua.yG,
      C = g.i.ua.Iq,
      w = g.i.od,
      B = g.i.aB,
      G = g.M.pa,
      F = g.M.Math.Vm,
      I = g.M.Math.Ei,
      H = g.M.Math.kb,
      J = g.K.Ef,
      K = g.K.Ws,
      O = g.K.Um,
      Q = g.K.ph,
      r = g.K.$A,
      E = g.K.Kq;
    g.Ec(d, g.i.ua.Ob);
    d.prototype.Ba = g.i.ua.Ob.prototype;
    d.eG = function () {
      g.i.ua.Ob.Ob.apply(this, arguments);
    };
    d.kh = function () {
      return new d();
    };
    d.Ie = function () {};
    d.prototype.qg = function (a, b) {
      this.Ba.qg.call(this, a, b);
    };
    d.prototype.Yj = function () {
      J.qW(
        this.gi,
        this.qd.Ic instanceof a ? this.qd.Ic : null,
        this.qd.N.R,
        this.yd.Ic instanceof a ? this.yd.Ic : null,
        this.yd.N.R,
      );
    };
    e.Ob = function () {
      this.cg = new k();
      this.dg = new k();
      this.gi = new O();
      this.Ex = new O();
    };
    e.prototype.wY = function (a) {
      var b = this.yd.N,
        c = this.qd.Ic,
        d = this.yd.Ic;
      a.Yb(this.gi, this.qd.N.Og(), c.Db, b.Og(), d.Db);
    };
    e.prototype.XE = function () {
      return (this.V & e.ut) == e.ut;
    };
    e.prototype.IY = function () {
      return (this.V & e.Kw) == e.Kw;
    };
    e.prototype.iq = function () {
      return (this.V & e.Mw) == e.Mw;
    };
    e.prototype.ob = function () {
      this.V &= ~e.Lw;
    };
    e.prototype.Nz = function () {
      return (this.V & e.Lw) == e.Lw;
    };
    e.prototype.SL = function () {
      this.V |= e.pH;
    };
    e.prototype.Ob = function () {};
    e.prototype.qg = function (a, b) {
      void 0 === a && (a = null);
      void 0 === b && (b = null);
      this.V = e.Lw;
      if (a && b) {
        if (a.iq() || b.iq()) this.V |= e.Mw;
        var c = a.N,
          d = b.N;
        if (c.nd() != w.nf || c.Mz() || d.nd() != w.nf || d.Mz())
          this.V |= e.Kw;
        this.qd = a;
        this.yd = b;
        this.gi.ye = 0;
        this.Va = this.tf = null;
        this.cg.Wd = null;
        this.cg.Bd = null;
        this.cg.next = null;
        this.cg.Ri = null;
        this.dg.Wd = null;
        this.dg.Bd = null;
        this.dg.next = null;
        this.dg.Ri = null;
      } else this.yd = this.qd = null;
    };
    e.prototype.kN = function (a) {
      var b = this.Ex;
      this.Ex = this.gi;
      this.gi = b;
      this.V |= e.Lw;
      var d = !1,
        f = (this.V & e.ut) == e.ut,
        g = this.qd.N,
        b = this.yd.N,
        h = this.qd.Kt.Do(this.yd.Kt);
      if (this.V & e.Mw)
        h &&
          ((d = this.qd.Ic),
          (f = this.yd.Ic),
          (g = g.Og()),
          (b = b.Og()),
          (d = c.Do(d, g, f, b))),
          (this.gi.ye = 0);
      else {
        this.V =
          g.nd() != w.nf || g.Mz() || b.nd() != w.nf || b.Mz()
            ? this.V | e.Kw
            : this.V & ~e.Kw;
        if (h)
          for (this.Yj(), d = 0 < this.gi.ye, h = 0; h < this.gi.ye; ++h) {
            var k = this.gi.Ub[h];
            k.yr = 0;
            k.Fr = 0;
            for (var r = k.un, l = 0; l < this.Ex.ye; ++l) {
              var D = this.Ex.Ub[l];
              if (D.un.key == r.key) {
                k.yr = D.yr;
                k.Fr = D.Fr;
                break;
              }
            }
          }
        else this.gi.ye = 0;
        d != f && (g.Sb(!0), b.Sb(!0));
      }
      this.V = d ? this.V | e.ut : this.V & ~e.ut;
      0 == (this.V & e.Mw) && a.OM(this, this.Ex);
    };
    e.prototype.Yj = function () {};
    e.prototype.vW = function (a, b) {
      e.Ou.dm.Set(this.qd.Ic);
      e.Ou.em.Set(this.yd.Ic);
      e.Ou.FT = a;
      e.Ou.GT = b;
      e.Ou.w6 = G.pc;
      return Q.d0(e.Ou);
    };
    g.fe.push(function () {
      g.i.ua.Ob.Mw = 1;
      g.i.ua.Ob.Kw = 2;
      g.i.ua.Ob.se = 4;
      g.i.ua.Ob.tt = 8;
      g.i.ua.Ob.ut = 16;
      g.i.ua.Ob.Lw = 32;
      g.i.ua.Ob.pH = 64;
      g.i.ua.Ob.Ou = new r();
    });
    f.Vv = function () {
      this.iC = new H();
      this.El = new H();
      this.Qi = new H();
      this.cu = new F();
      this.zf = new F();
    };
    f.prototype.Vv = function () {
      this.Gg = new ya(G.Yh);
      for (var a = 0; a < G.Yh; a++) this.Gg[a] = new h();
    };
    h.hG = function () {
      this.El = new H();
      this.cc = new H();
      this.dc = new H();
    };
    k.iG = function () {};
    p.Vs = function () {};
    p.prototype.Vs = function (a) {
      this.hp = a;
      this.HY();
    };
    p.prototype.cv = function (a, b, c, d) {
      void 0 === c && (c = 0);
      void 0 === d && (d = 0);
      this.Tl[c][d].pO = a;
      this.Tl[c][d].HO = b;
      this.Tl[c][d].jS = !0;
      c != d &&
        ((this.Tl[d][c].pO = a),
        (this.Tl[d][c].HO = b),
        (this.Tl[d][c].jS = !1));
    };
    p.prototype.HY = function () {
      this.Tl = new ya(c.AB);
      for (var a = 0; a < c.AB; a++) {
        this.Tl[a] = new ya(c.AB);
        for (var b = 0; b < c.AB; b++) this.Tl[a][b] = new n();
      }
      this.cv(d.kh, d.Ie, c.rt, c.rt);
      this.cv(t.kh, t.Ie, c.st, c.rt);
      this.cv(z.kh, z.Ie, c.st, c.st);
      this.cv(q.kh, q.Ie, c.oH, c.rt);
      this.cv(u.kh, u.Ie, c.st, c.oH);
    };
    p.prototype.kh = function (a, b) {
      var c = this.Tl[parseInt(a.nd())][parseInt(b.nd())],
        d;
      if (c.VC) return (d = c.VC), (c.VC = d.Va), c.E4--, d.qg(a, b), d;
      d = c.pO;
      return null != d
        ? (c.jS
            ? ((d = d(this.hp)), d.qg(a, b))
            : ((d = d(this.hp)), d.qg(b, a)),
          d)
        : null;
    };
    p.prototype.Ie = function (a) {
      0 < a.gi.ye && (a.qd.N.Sb(!0), a.yd.N.Sb(!0));
      var b = this.Tl[parseInt(a.qd.nd())][parseInt(a.yd.nd())];
      b.E4++;
      a.Va = b.VC;
      b.VC = a;
      b = b.HO;
      b(a, this.hp);
    };
    n.kG = function () {};
    m.lG = function () {
      this.position = new H();
      this.Qi = new H();
      this.id = new K();
    };
    v.Jo = function () {
      this.T3 = new B();
      this.Kl = new ya();
    };
    v.prototype.Jo = function () {};
    v.prototype.Yb = function (a, b, c, d) {
      void 0 === c && (c = 0);
      var e;
      this.T3.Set(a);
      this.hp = d;
      for (this.wx = c; this.Kl.length < this.wx; )
        this.Kl[this.Kl.length] = new f();
      for (a = 0; a < c; ++a) {
        e = b[a];
        d = e.qd;
        var g = e.yd,
          h = d.Ic.Db,
          k = g.Ic.Db,
          r = d.N,
          l = g.N,
          D = e.gi,
          E = G.C0(d.qj, g.qj),
          N = G.D0(d.sj, g.sj),
          m = r.u.x,
          p = r.u.y,
          n = l.u.x,
          T = l.u.y,
          ja = r.U,
          q = l.U;
        v.ks.Yb(D, r.R, h, l.R, k);
        g = v.ks.vb.x;
        e = v.ks.vb.y;
        d = this.Kl[a];
        d.gc = r;
        d.qc = l;
        d.W3 = D;
        d.Qi.x = g;
        d.Qi.y = e;
        d.Ej = D.ye;
        d.ai = E;
        d.oi = N;
        d.iC.x = D.Lf.x;
        d.iC.y = D.Lf.y;
        d.El.x = D.Ib.x;
        d.El.y = D.Ib.y;
        d.fh = h + k;
        d.type = D.ia;
        for (h = 0; h < d.Ej; ++h) {
          E = D.Ub[h];
          k = d.Gg[h];
          k.bf = E.yr;
          k.vm = E.Fr;
          k.El.W(E.Ib);
          var E = (k.cc.x = v.ks.Ub[h].x - r.f.J.x),
            N = (k.cc.y = v.ks.Ub[h].y - r.f.J.y),
            t = (k.dc.x = v.ks.Ub[h].x - l.f.J.x),
            w = (k.dc.y = v.ks.Ub[h].y - l.f.J.y),
            u = E * e - N * g,
            A = t * e - w * g,
            u = u * u,
            A = A * A;
          k.cu = 1 / (r.aa + l.aa + r.ma * u + l.ma * A);
          var z = r.da * r.aa + l.da * l.aa,
            z = z + (r.da * r.ma * u + l.da * l.ma * A);
          k.M1 = 1 / z;
          A = e;
          z = -g;
          u = E * z - N * A;
          A = t * z - w * A;
          u *= u;
          A *= A;
          k.t6 = 1 / (r.aa + l.aa + r.ma * u + l.ma * A);
          k.cz = 0;
          E =
            d.Qi.x * (n + -q * w - m - -ja * N) +
            d.Qi.y * (T + q * t - p - ja * E);
          E < -G.P0 && (k.cz += -d.oi * E);
        }
        2 == d.Ej &&
          ((T = d.Gg[0]),
          (n = d.Gg[1]),
          (D = r.aa),
          (r = r.ma),
          (m = l.aa),
          (l = l.ma),
          (p = T.cc.x * e - T.cc.y * g),
          (T = T.dc.x * e - T.dc.y * g),
          (ja = n.cc.x * e - n.cc.y * g),
          (n = n.dc.x * e - n.dc.y * g),
          (g = D + m + r * p * p + l * T * T),
          (e = D + m + r * ja * ja + l * n * n),
          (l = D + m + r * p * ja + l * T * n),
          g * g < 100 * (g * e - l * l)
            ? (d.zf.g.Set(g, l), d.zf.h.Set(l, e), d.zf.QE(d.cu))
            : (d.Ej = 1));
      }
    };
    v.prototype.yi = function (a) {
      for (var b = 0; b < this.wx; ++b) {
        var c = this.Kl[b],
          d = c.gc,
          e = c.qc,
          f = d.aa,
          g = d.ma,
          h = e.aa,
          k = e.ma,
          r = c.Qi.x,
          l = c.Qi.y,
          D = l,
          E = -r,
          m,
          p;
        if (a.Tj)
          for (p = c.Ej, m = 0; m < p; ++m) {
            var n = c.Gg[m];
            n.bf *= a.ie;
            n.vm *= a.ie;
            var v = n.bf * r + n.vm * D,
              q = n.bf * l + n.vm * E;
            d.U -= g * (n.cc.x * q - n.cc.y * v);
            d.u.x -= f * v;
            d.u.y -= f * q;
            e.U += k * (n.dc.x * q - n.dc.y * v);
            e.u.x += h * v;
            e.u.y += h * q;
          }
        else
          for (p = c.Ej, m = 0; m < p; ++m)
            (d = c.Gg[m]), (d.bf = 0), (d.vm = 0);
      }
    };
    v.prototype.Th = function () {
      for (var a, b, c, d, e, f, g, h, k, r, l = 0; l < this.wx; ++l) {
        e = this.Kl[l];
        var E = e.gc,
          m = e.qc,
          n = E.U,
          p = m.U,
          v = E.u,
          q = m.u,
          t = E.aa,
          w = E.ma,
          u = m.aa,
          A = m.ma;
        h = e.Qi.x;
        var z = (k = e.Qi.y);
        r = -h;
        g = e.ai;
        for (a = 0; a < e.Ej; a++)
          (b = e.Gg[a]),
            (c = q.x - p * b.dc.y - v.x + n * b.cc.y),
            (d = q.y + p * b.dc.x - v.y - n * b.cc.x),
            (c = c * z + d * r),
            (c = b.t6 * -c),
            (d = g * b.bf),
            (d = I.wc(b.vm + c, -d, d)),
            (c = d - b.vm),
            (f = c * z),
            (c *= r),
            (v.x -= t * f),
            (v.y -= t * c),
            (n -= w * (b.cc.x * c - b.cc.y * f)),
            (q.x += u * f),
            (q.y += u * c),
            (p += A * (b.dc.x * c - b.dc.y * f)),
            (b.vm = d);
        if (1 == e.Ej)
          (b = e.Gg[0]),
            (c = q.x + -p * b.dc.y - v.x - -n * b.cc.y),
            (d = q.y + p * b.dc.x - v.y - n * b.cc.x),
            (e = c * h + d * k),
            (c = -b.cu * (e - b.cz)),
            (d = b.bf + c),
            (d = 0 < d ? d : 0),
            (c = d - b.bf),
            (f = c * h),
            (c *= k),
            (v.x -= t * f),
            (v.y -= t * c),
            (n -= w * (b.cc.x * c - b.cc.y * f)),
            (q.x += u * f),
            (q.y += u * c),
            (p += A * (b.dc.x * c - b.dc.y * f)),
            (b.bf = d);
        else {
          b = e.Gg[0];
          a = e.Gg[1];
          c = b.bf;
          g = a.bf;
          var B =
              (q.x - p * b.dc.y - v.x + n * b.cc.y) * h +
              (q.y + p * b.dc.x - v.y - n * b.cc.x) * k,
            C =
              (q.x - p * a.dc.y - v.x + n * a.cc.y) * h +
              (q.y + p * a.dc.x - v.y - n * a.cc.x) * k;
          d = B - b.cz;
          f = C - a.cz;
          r = e.zf;
          d -= r.g.x * c + r.h.x * g;
          for (f -= r.g.y * c + r.h.y * g; ; ) {
            r = e.cu;
            z = -(r.g.x * d + r.h.x * f);
            r = -(r.g.y * d + r.h.y * f);
            if (0 <= z && 0 <= r) {
              c = z - c;
              g = r - g;
              e = c * h;
              c *= k;
              h *= g;
              k *= g;
              v.x -= t * (e + h);
              v.y -= t * (c + k);
              n -= w * (b.cc.x * c - b.cc.y * e + a.cc.x * k - a.cc.y * h);
              q.x += u * (e + h);
              q.y += u * (c + k);
              p += A * (b.dc.x * c - b.dc.y * e + a.dc.x * k - a.dc.y * h);
              b.bf = z;
              a.bf = r;
              break;
            }
            z = -b.cu * d;
            r = 0;
            C = e.zf.g.y * z + f;
            if (0 <= z && 0 <= C) {
              c = z - c;
              g = r - g;
              e = c * h;
              c *= k;
              h *= g;
              k *= g;
              v.x -= t * (e + h);
              v.y -= t * (c + k);
              n -= w * (b.cc.x * c - b.cc.y * e + a.cc.x * k - a.cc.y * h);
              q.x += u * (e + h);
              q.y += u * (c + k);
              p += A * (b.dc.x * c - b.dc.y * e + a.dc.x * k - a.dc.y * h);
              b.bf = z;
              a.bf = r;
              break;
            }
            z = 0;
            r = -a.cu * f;
            B = e.zf.h.x * r + d;
            if (0 <= r && 0 <= B) {
              c = z - c;
              g = r - g;
              e = c * h;
              c *= k;
              h *= g;
              k *= g;
              v.x -= t * (e + h);
              v.y -= t * (c + k);
              n -= w * (b.cc.x * c - b.cc.y * e + a.cc.x * k - a.cc.y * h);
              q.x += u * (e + h);
              q.y += u * (c + k);
              p += A * (b.dc.x * c - b.dc.y * e + a.dc.x * k - a.dc.y * h);
              b.bf = z;
              a.bf = r;
              break;
            }
            r = z = 0;
            B = d;
            C = f;
            if (0 <= B && 0 <= C) {
              c = z - c;
              g = r - g;
              e = c * h;
              c *= k;
              h *= g;
              k *= g;
              v.x -= t * (e + h);
              v.y -= t * (c + k);
              n -= w * (b.cc.x * c - b.cc.y * e + a.cc.x * k - a.cc.y * h);
              q.x += u * (e + h);
              q.y += u * (c + k);
              p += A * (b.dc.x * c - b.dc.y * e + a.dc.x * k - a.dc.y * h);
              b.bf = z;
              a.bf = r;
              break;
            }
            break;
          }
        }
        E.U = n;
        m.U = p;
      }
    };
    v.prototype.NE = function () {
      for (var a = 0; a < this.wx; ++a)
        for (var b = this.Kl[a], c = b.W3, d = 0; d < b.Ej; ++d) {
          var e = c.Ub[d],
            f = b.Gg[d];
          e.yr = f.bf;
          e.Fr = f.vm;
        }
    };
    v.prototype.Sh = function (a) {
      void 0 === a && (a = 0);
      for (var b = 0, c = 0; c < this.wx; c++) {
        var d = this.Kl[c],
          e = d.gc,
          f = d.qc,
          g = e.da * e.aa,
          h = e.da * e.ma,
          k = f.da * f.aa,
          r = f.da * f.ma;
        v.OD.Yb(d);
        for (var l = v.OD.vb, D = 0; D < d.Ej; D++) {
          var E = d.Gg[D],
            m = v.OD.Ub[D],
            n = v.OD.CC[D],
            p = m.x - e.f.J.x,
            q = m.y - e.f.J.y,
            t = m.x - f.f.J.x,
            m = m.y - f.f.J.y,
            b = b < n ? b : n,
            n = -E.M1 * I.wc(a * (n + G.pc), -G.Xh, 0),
            E = n * l.x,
            n = n * l.y;
          e.f.J.x -= g * E;
          e.f.J.y -= g * n;
          e.f.$ -= h * (p * n - q * E);
          e.Ud();
          f.f.J.x += k * E;
          f.f.J.y += k * n;
          f.f.$ += r * (t * n - m * E);
          f.Ud();
        }
      }
      return b > -1.5 * G.pc;
    };
    g.fe.push(function () {
      g.i.ua.Jo.ks = new E();
      g.i.ua.Jo.OD = new C();
    });
    g.Ec(q, g.i.ua.Ob);
    q.prototype.Ba = g.i.ua.Ob.prototype;
    q.qG = function () {
      g.i.ua.Ob.Ob.apply(this, arguments);
    };
    q.kh = function () {
      return new q();
    };
    q.Ie = function () {};
    q.prototype.qg = function (a, b) {
      this.Ba.qg.call(this, a, b);
    };
    q.prototype.Yj = function () {};
    g.Ec(l, g.i.ua.Ob);
    l.prototype.Ba = g.i.ua.Ob.prototype;
    l.jw = function () {
      g.i.ua.Ob.Ob.apply(this, arguments);
    };
    l.prototype.jw = function () {
      this.Ba.Ob.call(this);
    };
    l.prototype.Yj = function () {};
    g.Ec(t, g.i.ua.Ob);
    t.prototype.Ba = g.i.ua.Ob.prototype;
    t.wG = function () {
      g.i.ua.Ob.Ob.apply(this, arguments);
    };
    t.kh = function () {
      return new t();
    };
    t.Ie = function () {};
    t.prototype.qg = function (a, b) {
      this.Ba.qg.call(this, a, b);
    };
    t.prototype.Yj = function () {
      J.rW(
        this.gi,
        this.qd.Ic instanceof b ? this.qd.Ic : null,
        this.qd.N.R,
        this.yd.Ic instanceof a ? this.yd.Ic : null,
        this.yd.N.R,
      );
    };
    g.Ec(u, g.i.ua.Ob);
    u.prototype.Ba = g.i.ua.Ob.prototype;
    u.xG = function () {
      g.i.ua.Ob.Ob.apply(this, arguments);
    };
    u.kh = function () {
      return new u();
    };
    u.Ie = function () {};
    u.prototype.qg = function (a, b) {
      this.Ba.qg.call(this, a, b);
    };
    u.prototype.Yj = function () {};
    g.Ec(z, g.i.ua.Ob);
    z.prototype.Ba = g.i.ua.Ob.prototype;
    z.yG = function () {
      g.i.ua.Ob.Ob.apply(this, arguments);
    };
    z.kh = function () {
      return new z();
    };
    z.Ie = function () {};
    z.prototype.qg = function (a, b) {
      this.Ba.qg.call(this, a, b);
    };
    z.prototype.Yj = function () {
      J.sW(
        this.gi,
        this.qd.Ic instanceof b ? this.qd.Ic : null,
        this.qd.N.R,
        this.yd.Ic instanceof b ? this.yd.Ic : null,
        this.yd.N.R,
      );
    };
    C.Iq = function () {};
    C.prototype.Iq = function () {
      this.vb = new H();
      this.CC = new Ma(G.Yh);
      this.Ub = new ya(G.Yh);
      for (var a = 0; a < G.Yh; a++) this.Ub[a] = new H();
    };
    C.prototype.Yb = function (a) {
      var b, c, d, e, f, g;
      switch (a.type) {
        case O.nH:
          e = a.gc.R.P;
          d = a.El;
          b = a.gc.R.position.x + (e.g.x * d.x + e.h.x * d.y);
          c = a.gc.R.position.y + (e.g.y * d.x + e.h.y * d.y);
          e = a.qc.R.P;
          d = a.Gg[0].El;
          f = a.qc.R.position.x + (e.g.x * d.x + e.h.x * d.y);
          e = a.qc.R.position.y + (e.g.y * d.x + e.h.y * d.y);
          d = f - b;
          g = e - c;
          var h = d * d + g * g;
          h > Number.MIN_VALUE * Number.MIN_VALUE
            ? ((h = Math.sqrt(h)), (this.vb.x = d / h), (this.vb.y = g / h))
            : ((this.vb.x = 1), (this.vb.y = 0));
          this.Ub[0].x = 0.5 * (b + f);
          this.Ub[0].y = 0.5 * (c + e);
          this.CC[0] = d * this.vb.x + g * this.vb.y - a.fh;
          break;
        case O.sk:
          e = a.gc.R.P;
          d = a.iC;
          this.vb.x = e.g.x * d.x + e.h.x * d.y;
          this.vb.y = e.g.y * d.x + e.h.y * d.y;
          e = a.gc.R.P;
          d = a.El;
          f = a.gc.R.position.x + (e.g.x * d.x + e.h.x * d.y);
          g = a.gc.R.position.y + (e.g.y * d.x + e.h.y * d.y);
          e = a.qc.R.P;
          for (b = 0; b < a.Ej; ++b)
            (d = a.Gg[b].El),
              (c = a.qc.R.position.x + (e.g.x * d.x + e.h.x * d.y)),
              (d = a.qc.R.position.y + (e.g.y * d.x + e.h.y * d.y)),
              (this.CC[b] = (c - f) * this.vb.x + (d - g) * this.vb.y - a.fh),
              (this.Ub[b].x = c),
              (this.Ub[b].y = d);
          break;
        case O.Zq:
          e = a.qc.R.P;
          d = a.iC;
          this.vb.x = e.g.x * d.x + e.h.x * d.y;
          this.vb.y = e.g.y * d.x + e.h.y * d.y;
          e = a.qc.R.P;
          d = a.El;
          f = a.qc.R.position.x + (e.g.x * d.x + e.h.x * d.y);
          g = a.qc.R.position.y + (e.g.y * d.x + e.h.y * d.y);
          e = a.gc.R.P;
          for (b = 0; b < a.Ej; ++b)
            (d = a.Gg[b].El),
              (c = a.gc.R.position.x + (e.g.x * d.x + e.h.x * d.y)),
              (d = a.gc.R.position.y + (e.g.y * d.x + e.h.y * d.y)),
              (this.CC[b] = (c - f) * this.vb.x + (d - g) * this.vb.y - a.fh),
              this.Ub[b].Set(c, d);
          this.vb.x *= -1;
          this.vb.y *= -1;
      }
    };
    g.fe.push(function () {
      g.i.ua.Iq.Baa = new H();
      g.i.ua.Iq.Caa = new H();
    });
  })();
  (function () {
    var a = g.M.Math.Vm,
      b = g.M.Math.Ei,
      c = g.M.Math.kb,
      d = g.i.Wc.dG,
      e = g.i.Wc.fG,
      f = g.i.Wc.gG,
      h = g.i.Wc.qe,
      k = g.i.Wc.mG,
      p = g.i.Wc.sG,
      n = g.i.Wc.CG;
    g.Ec(d, g.i.Wc.qe);
    d.prototype.Ba = g.i.Wc.qe.prototype;
    d.dG = function () {
      g.i.Wc.qe.qe.apply(this, arguments);
      this.Qi = new c(0, -1);
      this.Ro = this.offset = 0;
      this.YT = new c(0, 0);
      this.m3 = 2;
      this.t0 = 1;
      this.G6 = !0;
      this.Ki = null;
    };
    d.prototype.zo = function () {
      if (this.$d) {
        this.G6 && (this.Ki = this.ze.Ag.Rf());
        for (var a = this.$d; a; a = a.Gh) {
          var b = a.body;
          if (0 != b.Je()) {
            for (
              var d = new c(), e = new c(), f = 0, g = 0, h = b.Ll;
              h;
              h = h.Va
            ) {
              var k = new c(),
                n = h.Ic.vz(this.Qi, this.offset, b.Og(), k),
                f = f + n;
              d.x += n * k.x;
              d.y += n * k.y;
              g += 1 * n;
              e.x += n * k.x * 1;
              e.y += n * k.y * 1;
            }
            d.x /= f;
            d.y /= f;
            e.x /= g;
            e.y /= g;
            f < Number.MIN_VALUE ||
              ((e = this.Ki.mo()),
              e.Rg(this.Ro * f),
              b.ho(e),
              (d = b.lY(d)),
              d.bN(this.YT),
              d.Rg(-this.m3 * f),
              b.ho(d),
              b.oE((-b.nj / b.da) * f * b.U * this.t0));
          }
        }
      }
    };
    g.Ec(e, g.i.Wc.qe);
    e.prototype.Ba = g.i.Wc.qe.prototype;
    e.fG = function () {
      g.i.Wc.qe.qe.apply(this, arguments);
      this.RK = new c(0, 0);
    };
    e.prototype.zo = function (a) {
      a = new c(this.RK.x * a.Bb, this.RK.y * a.Bb);
      for (var b = this.$d; b; b = b.Gh) {
        var d = b.body;
        d.Je() && d.yo(new c(d.u.x + a.x, d.u.y + a.y));
      }
    };
    g.Ec(f, g.i.Wc.qe);
    f.prototype.Ba = g.i.Wc.qe.prototype;
    f.gG = function () {
      g.i.Wc.qe.qe.apply(this, arguments);
      this.JX = new c(0, 0);
    };
    f.prototype.zo = function () {
      for (var a = this.$d; a; a = a.Gh) {
        var b = a.body;
        b.Je() && b.ho(this.JX);
      }
    };
    h.qe = function () {};
    h.prototype.zo = function () {};
    h.prototype.nE = function (a) {
      var b = new k();
      b.controller = this;
      b.body = a;
      b.Gh = this.$d;
      b.oy = null;
      this.$d = b;
      b.Gh && (b.Gh.oy = b);
      this.vg++;
      b.Cn = a.ip;
      b.py = null;
      a.ip = b;
      b.Cn && (b.Cn.py = b);
      a.uI++;
    };
    h.prototype.QM = function (a) {
      for (var b = a.ip; b && b.controller != this; ) b = b.Cn;
      b.oy && (b.oy.Gh = b.Gh);
      b.Gh && (b.Gh.oy = b.oy);
      b.Cn && (b.Cn.py = b.py);
      b.py && (b.py.Cn = b.Cn);
      this.$d == b && (this.$d = b.Gh);
      a.ip == b && (a.ip = b.Cn);
      a.uI--;
      this.vg--;
    };
    h.prototype.wE = function () {
      for (; this.$d; ) this.QM(this.$d.body);
    };
    k.mG = function () {};
    g.Ec(p, g.i.Wc.qe);
    p.prototype.Ba = g.i.Wc.qe.prototype;
    p.sG = function () {
      g.i.Wc.qe.qe.apply(this, arguments);
      this.TL = 1;
      this.P2 = !0;
    };
    p.prototype.zo = function () {
      var a, b, d, e, f, g, h, k, n;
      if (this.P2)
        for (a = this.$d; a; a = a.Gh)
          for (b = a.body, d = b.f.J, e = b.da, f = this.$d; f != a; f = f.Gh)
            (g = f.body),
              (h = g.f.J),
              (k = h.x - d.x),
              (n = h.y - d.y),
              (h = k * k + n * n),
              h < Number.MIN_VALUE ||
                ((k = new c(k, n)),
                k.Rg((this.TL / h / Math.sqrt(h)) * e * g.da),
                b.Je() && b.ho(k),
                k.Rg(-1),
                g.Je() && g.ho(k));
      else
        for (a = this.$d; a; a = a.Gh)
          for (b = a.body, d = b.f.J, e = b.da, f = this.$d; f != a; f = f.Gh)
            (g = f.body),
              (h = g.f.J),
              (k = h.x - d.x),
              (n = h.y - d.y),
              (h = k * k + n * n),
              h < Number.MIN_VALUE ||
                ((k = new c(k, n)),
                k.Rg((this.TL / h) * e * g.da),
                b.Je() && b.ho(k),
                k.Rg(-1),
                g.Je() && g.ho(k));
    };
    g.Ec(n, g.i.Wc.qe);
    n.prototype.Ba = g.i.Wc.qe.prototype;
    n.CG = function () {
      g.i.Wc.qe.qe.apply(this, arguments);
      this.eN = new a();
      this.OI = 0;
    };
    n.prototype.zo = function (a) {
      a = a.Bb;
      if (!(a <= Number.MIN_VALUE)) {
        a > this.OI && 0 < this.OI && (a = this.OI);
        for (var d = this.$d; d; d = d.Gh) {
          var e = d.body;
          if (e.Je()) {
            var f = e.TE(b.Cf(this.eN, e.RE(e.u)));
            e.yo(new c(e.u.x + f.x * a, e.u.y + f.y * a));
          }
        }
      }
    };
  })();
  (function () {
    var a = g.M.pa,
      b = g.M.Math.Vm,
      c = g.M.Math.Zs,
      d = g.M.Math.Ei,
      e = g.M.Math.kb,
      f = g.M.Math.ct,
      h = g.i.T.Wv,
      k = g.i.T.kl,
      p = g.i.T.aw,
      n = g.i.T.bw,
      m = g.i.T.cw,
      q = g.i.T.dw,
      t = g.i.T.tG,
      l = g.i.T.ta,
      u = g.i.T.Sa,
      z = g.i.T.uG,
      C = g.i.T.ew,
      F = g.i.T.fw,
      w = g.i.T.hw,
      B = g.i.T.iw,
      G = g.i.T.kw,
      H = g.i.T.Wm,
      I = g.i.T.$s,
      J = g.i.T.Jq,
      K = g.i.T.at,
      O = g.i.T.Xm,
      Q = g.i.T.ow,
      R = g.i.T.pw;
    g.Ec(h, g.i.T.ta);
    h.prototype.Ba = g.i.T.ta.prototype;
    h.Wv = function () {
      g.i.T.ta.ta.apply(this, arguments);
      this.Ta = new e();
      this.Ua = new e();
      this.$e = new e();
    };
    h.prototype.WM = function (a) {
      void 0 === a && (a = 0);
      this.jp = a;
    };
    h.prototype.VM = function (a) {
      void 0 === a && (a = 0);
      this.Ot = a;
    };
    h.prototype.Wv = function (a) {
      this.Ba.ta.call(this, a);
      this.Ta.W(a.Me);
      this.Ua.W(a.Ne);
      this.AI = a.length;
      this.jp = a.cr;
      this.Ot = a.Uq;
      this.qQ = this.zg = this.G = 0;
    };
    h.prototype.yi = function (b) {
      var c,
        d,
        e = this.Xa,
        f = this.Ka;
      c = e.R.P;
      var g = this.Ta.x - e.f.ca.x,
        h = this.Ta.y - e.f.ca.y;
      d = c.g.x * g + c.h.x * h;
      h = c.g.y * g + c.h.y * h;
      g = d;
      c = f.R.P;
      var k = this.Ua.x - f.f.ca.x,
        r = this.Ua.y - f.f.ca.y;
      d = c.g.x * k + c.h.x * r;
      r = c.g.y * k + c.h.y * r;
      k = d;
      this.$e.x = f.f.J.x + k - e.f.J.x - g;
      this.$e.y = f.f.J.y + r - e.f.J.y - h;
      d = Math.sqrt(this.$e.x * this.$e.x + this.$e.y * this.$e.y);
      d > a.pc ? this.$e.Rg(1 / d) : this.$e.qb();
      c = g * this.$e.y - h * this.$e.x;
      var l = k * this.$e.y - r * this.$e.x;
      c = e.aa + e.ma * c * c + f.aa + f.ma * l * l;
      this.da = 0 != c ? 1 / c : 0;
      if (0 < this.jp) {
        d -= this.AI;
        var l = 2 * Math.PI * this.jp,
          m = this.da * l * l;
        this.zg = b.Bb * (2 * this.da * this.Ot * l + b.Bb * m);
        this.zg = 0 != this.zg ? 1 / this.zg : 0;
        this.qQ = d * b.Bb * m * this.zg;
        this.da = c + this.zg;
        this.da = 0 != this.da ? 1 / this.da : 0;
      }
      b.Tj
        ? ((this.G *= b.ie),
          (b = this.G * this.$e.x),
          (c = this.G * this.$e.y),
          (e.u.x -= e.aa * b),
          (e.u.y -= e.aa * c),
          (e.U -= e.ma * (g * c - h * b)),
          (f.u.x += f.aa * b),
          (f.u.y += f.aa * c),
          (f.U += f.ma * (k * c - r * b)))
        : (this.G = 0);
    };
    h.prototype.Th = function () {
      var a,
        b = this.Xa,
        c = this.Ka;
      a = b.R.P;
      var d = this.Ta.x - b.f.ca.x,
        e = this.Ta.y - b.f.ca.y,
        f = a.g.x * d + a.h.x * e,
        e = a.g.y * d + a.h.y * e,
        d = f;
      a = c.R.P;
      var g = this.Ua.x - c.f.ca.x,
        h = this.Ua.y - c.f.ca.y,
        f = a.g.x * g + a.h.x * h,
        h = a.g.y * g + a.h.y * h,
        g = f,
        f =
          -this.da *
          (this.$e.x * (c.u.x + -c.U * h - (b.u.x + -b.U * e)) +
            this.$e.y * (c.u.y + c.U * g - (b.u.y + b.U * d)) +
            this.qQ +
            this.zg * this.G);
      this.G += f;
      a = f * this.$e.x;
      f *= this.$e.y;
      b.u.x -= b.aa * a;
      b.u.y -= b.aa * f;
      b.U -= b.ma * (d * f - e * a);
      c.u.x += c.aa * a;
      c.u.y += c.aa * f;
      c.U += c.ma * (g * f - h * a);
    };
    h.prototype.Sh = function () {
      var b;
      if (0 < this.jp) return !0;
      var c = this.Xa,
        e = this.Ka;
      b = c.R.P;
      var f = this.Ta.x - c.f.ca.x,
        g = this.Ta.y - c.f.ca.y,
        h = b.g.x * f + b.h.x * g,
        g = b.g.y * f + b.h.y * g,
        f = h;
      b = e.R.P;
      var k = this.Ua.x - e.f.ca.x,
        l = this.Ua.y - e.f.ca.y,
        h = b.g.x * k + b.h.x * l,
        l = b.g.y * k + b.h.y * l,
        k = h,
        m = e.f.J.x + k - c.f.J.x - f,
        n = e.f.J.y + l - c.f.J.y - g,
        p = Math.sqrt(m * m + n * n);
      b = p - this.AI;
      b = d.wc(b, -a.Xh, a.Xh);
      h = -this.da * b;
      this.$e.Set(m / p, n / p);
      m = h * this.$e.x;
      h *= this.$e.y;
      c.f.J.x -= c.aa * m;
      c.f.J.y -= c.aa * h;
      c.f.$ -= c.ma * (f * h - g * m);
      e.f.J.x += e.aa * m;
      e.f.J.y += e.aa * h;
      e.f.$ += e.ma * (k * h - l * m);
      c.Ud();
      e.Ud();
      return d.jf(b) < a.pc;
    };
    g.Ec(k, g.i.T.Sa);
    k.prototype.Ba = g.i.T.Sa.prototype;
    k.kl = function () {
      g.i.T.Sa.Sa.apply(this, arguments);
      this.Me = new e();
      this.Ne = new e();
    };
    k.prototype.kl = function () {
      this.Ba.Sa.call(this);
      this.type = l.TO;
      this.length = 1;
      this.Uq = this.cr = 0;
    };
    k.prototype.Yb = function (a, b, c, d) {
      this.gc = a;
      this.qc = b;
      this.Me.W(this.gc.Ng(c));
      this.Ne.W(this.qc.Ng(d));
      a = d.x - c.x;
      c = d.y - c.y;
      this.length = Math.sqrt(a * a + c * c);
      this.Uq = this.cr = 0;
    };
    g.Ec(p, g.i.T.ta);
    p.prototype.Ba = g.i.T.ta.prototype;
    p.aw = function () {
      g.i.T.ta.ta.apply(this, arguments);
      this.Mi = new e();
      this.Ni = new e();
      this.DI = new b();
      this.Li = new e();
    };
    p.prototype.aw = function (a) {
      this.Ba.ta.call(this, a);
      this.Mi.W(a.Me);
      this.Ni.W(a.Ne);
      this.DI.qb();
      this.ux = 0;
      this.Li.qb();
      this.qn = 0;
      this.EI = a.MI;
      this.P3 = a.Z3;
    };
    p.prototype.yi = function (a) {
      var c,
        d,
        e = this.Xa,
        f = this.Ka;
      c = e.R.P;
      var g = this.Mi.x - e.f.ca.x,
        h = this.Mi.y - e.f.ca.y;
      d = c.g.x * g + c.h.x * h;
      h = c.g.y * g + c.h.y * h;
      g = d;
      c = f.R.P;
      var k = this.Ni.x - f.f.ca.x,
        r = this.Ni.y - f.f.ca.y;
      d = c.g.x * k + c.h.x * r;
      r = c.g.y * k + c.h.y * r;
      k = d;
      c = e.aa;
      d = f.aa;
      var l = e.ma,
        m = f.ma,
        n = new b();
      n.g.x = c + d;
      n.h.x = 0;
      n.g.y = 0;
      n.h.y = c + d;
      n.g.x += l * h * h;
      n.h.x += -l * g * h;
      n.g.y += -l * g * h;
      n.h.y += l * g * g;
      n.g.x += m * r * r;
      n.h.x += -m * k * r;
      n.g.y += -m * k * r;
      n.h.y += m * k * k;
      n.QE(this.DI);
      this.ux = l + m;
      0 < this.ux && (this.ux = 1 / this.ux);
      a.Tj
        ? ((this.Li.x *= a.ie),
          (this.Li.y *= a.ie),
          (this.qn *= a.ie),
          (a = this.Li),
          (e.u.x -= c * a.x),
          (e.u.y -= c * a.y),
          (e.U -= l * (g * a.y - h * a.x + this.qn)),
          (f.u.x += d * a.x),
          (f.u.y += d * a.y),
          (f.U += m * (k * a.y - r * a.x + this.qn)))
        : (this.Li.qb(), (this.qn = 0));
    };
    p.prototype.Th = function (a) {
      var b,
        c,
        f = this.Xa,
        g = this.Ka,
        h = f.u,
        k = f.U,
        r = g.u,
        l = g.U,
        m = f.aa,
        n = g.aa,
        p = f.ma,
        q = g.ma;
      b = f.R.P;
      var t = this.Mi.x - f.f.ca.x,
        u = this.Mi.y - f.f.ca.y;
      c = b.g.x * t + b.h.x * u;
      u = b.g.y * t + b.h.y * u;
      t = c;
      b = g.R.P;
      var v = this.Ni.x - g.f.ca.x,
        w = this.Ni.y - g.f.ca.y;
      c = b.g.x * v + b.h.x * w;
      w = b.g.y * v + b.h.y * w;
      v = c;
      c = -this.ux * (l - k);
      var z = this.qn;
      b = a.Bb * this.P3;
      this.qn = d.wc(this.qn + c, -b, b);
      c = this.qn - z;
      k -= p * c;
      l += q * c;
      b = d.Cf(
        this.DI,
        new e(-(r.x - l * w - h.x + k * u), -(r.y + l * v - h.y - k * t)),
      );
      c = this.Li.Rf();
      this.Li.qs(b);
      b = a.Bb * this.EI;
      this.Li.fF() > b * b && (this.Li.mh(), this.Li.Rg(b));
      b = d.Td(this.Li, c);
      h.x -= m * b.x;
      h.y -= m * b.y;
      k -= p * (t * b.y - u * b.x);
      r.x += n * b.x;
      r.y += n * b.y;
      l += q * (v * b.y - w * b.x);
      f.U = k;
      g.U = l;
    };
    p.prototype.Sh = function () {
      return !0;
    };
    g.Ec(n, g.i.T.Sa);
    n.prototype.Ba = g.i.T.Sa.prototype;
    n.bw = function () {
      g.i.T.Sa.Sa.apply(this, arguments);
      this.Me = new e();
      this.Ne = new e();
    };
    n.prototype.bw = function () {
      this.Ba.Sa.call(this);
      this.type = l.VO;
      this.Z3 = this.MI = 0;
    };
    n.prototype.Yb = function (a, b, c) {
      this.gc = a;
      this.qc = b;
      this.Me.W(this.gc.Ng(c));
      this.Ne.W(this.qc.Ng(c));
    };
    g.Ec(m, g.i.T.ta);
    m.prototype.Ba = g.i.T.ta.prototype;
    m.cw = function () {
      g.i.T.ta.ta.apply(this, arguments);
      this.sn = new e();
      this.tn = new e();
      this.Ta = new e();
      this.Ua = new e();
      this.Id = new t();
    };
    m.prototype.cw = function (a) {
      this.Ba.ta.call(this, a);
      var b = parseInt(a.ir.ia),
        c = parseInt(a.jr.ia);
      this.Tt = this.Cr = this.St = this.Br = null;
      this.I3 = a.ir.Xa;
      this.Xa = a.ir.Ka;
      b == l.zB
        ? ((this.Br = a.ir instanceof K ? a.ir : null),
          this.sn.W(this.Br.Ta),
          this.Ta.W(this.Br.Ua),
          (b = this.Br.Hz()))
        : ((this.St = a.ir instanceof G ? a.ir : null),
          this.sn.W(this.St.Ta),
          this.Ta.W(this.St.Ua),
          (b = this.St.tv()));
      this.J3 = a.jr.Xa;
      this.Ka = a.jr.Ka;
      c == l.zB
        ? ((this.Cr = a.jr instanceof K ? a.jr : null),
          this.tn.W(this.Cr.Ta),
          this.Ua.W(this.Cr.Ua),
          (c = this.Cr.Hz()))
        : ((this.Tt = a.jr instanceof G ? a.jr : null),
          this.tn.W(this.Tt.Ta),
          this.Ua.W(this.Tt.Ua),
          (c = this.Tt.tv()));
      this.de = a.ratio;
      this.Lt = b + this.de * c;
      this.G = 0;
    };
    m.prototype.yi = function (a) {
      var b = this.I3,
        c = this.J3,
        d = this.Xa,
        e = this.Ka,
        f,
        g,
        h,
        k,
        l,
        r = 0;
      this.Id.qb();
      this.Br
        ? ((this.Id.Cq = -1), (r += d.ma))
        : ((k = b.R.P),
          (f = this.St.Dh),
          (b = k.g.x * f.x + k.h.x * f.y),
          (f = k.g.y * f.x + k.h.y * f.y),
          (k = d.R.P),
          (g = this.Ta.x - d.f.ca.x),
          (h = this.Ta.y - d.f.ca.y),
          (l = k.g.x * g + k.h.x * h),
          (h = k.g.y * g + k.h.y * h),
          (k = l * f - h * b),
          this.Id.Bk.Set(-b, -f),
          (this.Id.Cq = -k),
          (r += d.aa + d.ma * k * k));
      this.Cr
        ? ((this.Id.Dq = -this.de), (r += this.de * this.de * e.ma))
        : ((k = c.R.P),
          (f = this.Tt.Dh),
          (b = k.g.x * f.x + k.h.x * f.y),
          (f = k.g.y * f.x + k.h.y * f.y),
          (k = e.R.P),
          (g = this.Ua.x - e.f.ca.x),
          (h = this.Ua.y - e.f.ca.y),
          (l = k.g.x * g + k.h.x * h),
          (h = k.g.y * g + k.h.y * h),
          (k = l * f - h * b),
          this.Id.Ck.Set(-this.de * b, -this.de * f),
          (this.Id.Dq = -this.de * k),
          (r += this.de * this.de * (e.aa + e.ma * k * k)));
      this.da = 0 < r ? 1 / r : 0;
      a.Tj
        ? ((d.u.x += d.aa * this.G * this.Id.Bk.x),
          (d.u.y += d.aa * this.G * this.Id.Bk.y),
          (d.U += d.ma * this.G * this.Id.Cq),
          (e.u.x += e.aa * this.G * this.Id.Ck.x),
          (e.u.y += e.aa * this.G * this.Id.Ck.y),
          (e.U += e.ma * this.G * this.Id.Dq))
        : (this.G = 0);
    };
    m.prototype.Th = function () {
      var a = this.Xa,
        b = this.Ka,
        c = -this.da * this.Id.tW(a.u, a.U, b.u, b.U);
      this.G += c;
      a.u.x += a.aa * c * this.Id.Bk.x;
      a.u.y += a.aa * c * this.Id.Bk.y;
      a.U += a.ma * c * this.Id.Cq;
      b.u.x += b.aa * c * this.Id.Ck.x;
      b.u.y += b.aa * c * this.Id.Ck.y;
      b.U += b.ma * c * this.Id.Dq;
    };
    m.prototype.Sh = function () {
      var b = this.Xa,
        c = this.Ka,
        d,
        e;
      d = this.Br ? this.Br.Hz() : this.St.tv();
      e = this.Cr ? this.Cr.Hz() : this.Tt.tv();
      d = -this.da * (this.Lt - (d + this.de * e));
      b.f.J.x += b.aa * d * this.Id.Bk.x;
      b.f.J.y += b.aa * d * this.Id.Bk.y;
      b.f.$ += b.ma * d * this.Id.Cq;
      c.f.J.x += c.aa * d * this.Id.Ck.x;
      c.f.J.y += c.aa * d * this.Id.Ck.y;
      c.f.$ += c.ma * d * this.Id.Dq;
      b.Ud();
      c.Ud();
      return 0 < a.pc;
    };
    g.Ec(q, g.i.T.Sa);
    q.prototype.Ba = g.i.T.Sa.prototype;
    q.dw = function () {
      g.i.T.Sa.Sa.apply(this, arguments);
    };
    q.prototype.dw = function () {
      this.Ba.Sa.call(this);
      this.type = l.WO;
      this.jr = this.ir = null;
      this.ratio = 1;
    };
    t.tG = function () {
      this.Bk = new e();
      this.Ck = new e();
    };
    t.prototype.qb = function () {
      this.Bk.qb();
      this.Cq = 0;
      this.Ck.qb();
      this.Dq = 0;
    };
    t.prototype.Set = function (a, b, c, d) {
      void 0 === b && (b = 0);
      void 0 === d && (d = 0);
      this.Bk.W(a);
      this.Cq = b;
      this.Ck.W(c);
      this.Dq = d;
    };
    t.prototype.tW = function (a, b, c, d) {
      void 0 === b && (b = 0);
      void 0 === d && (d = 0);
      return (
        this.Bk.x * a.x +
        this.Bk.y * a.y +
        this.Cq * b +
        (this.Ck.x * c.x + this.Ck.y * c.y) +
        this.Dq * d
      );
    };
    l.ta = function () {
      this.Yg = new z();
      this.Zg = new z();
      this.Pl = new e();
      this.Ql = new e();
    };
    l.prototype.nd = function () {
      return this.ia;
    };
    l.prototype.Zj = function () {
      return this.wn;
    };
    l.prototype.LF = function (a) {
      this.wn = a;
    };
    l.prototype.hq = function () {
      return this.Xa.hq() && this.Ka.hq();
    };
    l.kh = function (a) {
      var b = null;
      switch (a.type) {
        case l.TO:
          b = new h(a instanceof k ? a : null);
          break;
        case l.ZO:
          b = new w(a instanceof B ? a : null);
          break;
        case l.aP:
          b = new G(a instanceof H ? a : null);
          break;
        case l.zB:
          b = new K(a instanceof O ? a : null);
          break;
        case l.bP:
          b = new I(a instanceof J ? a : null);
          break;
        case l.WO:
          b = new m(a instanceof q ? a : null);
          break;
        case l.XO:
          b = new C(a instanceof F ? a : null);
          break;
        case l.cP:
          b = new Q(a instanceof R ? a : null);
          break;
        case l.VO:
          b = new p(a instanceof n ? a : null);
      }
      return b;
    };
    l.Ie = function () {};
    l.prototype.ta = function (a) {
      this.ia = a.type;
      this.Va = this.tf = null;
      this.Xa = a.gc;
      this.Ka = a.qc;
      this.rQ = a.Xf;
      this.tr = !1;
      this.wn = a.Nh;
    };
    l.prototype.yi = function () {};
    l.prototype.Th = function () {};
    l.prototype.NE = function () {};
    l.prototype.Sh = function () {
      return !1;
    };
    g.fe.push(function () {
      g.i.T.ta.E1 = 0;
      g.i.T.ta.zB = 1;
      g.i.T.ta.aP = 2;
      g.i.T.ta.TO = 3;
      g.i.T.ta.bP = 4;
      g.i.T.ta.ZO = 5;
      g.i.T.ta.WO = 6;
      g.i.T.ta.XO = 7;
      g.i.T.ta.cP = 8;
      g.i.T.ta.VO = 9;
      g.i.T.ta.Ug = 0;
      g.i.T.ta.sl = 1;
      g.i.T.ta.Gf = 2;
      g.i.T.ta.Uo = 3;
    });
    u.Sa = function () {};
    u.prototype.Sa = function () {
      this.type = l.E1;
      this.qc = this.gc = this.Nh = null;
      this.Xf = !1;
    };
    z.uG = function () {};
    g.Ec(C, g.i.T.ta);
    C.prototype.Ba = g.i.T.ta.prototype;
    C.ew = function () {
      g.i.T.ta.ta.apply(this, arguments);
      this.Ta = new e();
      this.Ua = new e();
      this.Dh = new e();
      this.vn = new e();
      this.la = new e();
      this.fb = new e();
      this.Ra = new b();
      this.G = new e();
    };
    C.prototype.tv = function () {
      var a = this.Xa,
        b = this.Ka,
        c = a.Kz(this.Ta),
        d = b.Kz(this.Ua),
        b = d.x - c.x,
        c = d.y - c.y,
        a = a.TE(this.Dh);
      return a.x * b + a.y * c;
    };
    C.prototype.fq = function (a) {
      this.Xa.Sb(!0);
      this.Ka.Sb(!0);
      this.fi = a;
    };
    C.prototype.Iz = function () {
      return this.Dg;
    };
    C.prototype.Jz = function () {
      return this.Eg;
    };
    C.prototype.Lv = function (a, b) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      this.Xa.Sb(!0);
      this.Ka.Sb(!0);
      this.Dg = a;
      this.Eg = b;
    };
    C.prototype.nv = function (a) {
      this.Xa.Sb(!0);
      this.Ka.Sb(!0);
      this.Ek = a;
    };
    C.prototype.Mv = function (a) {
      void 0 === a && (a = 0);
      this.Xa.Sb(!0);
      this.Ka.Sb(!0);
      this.Rl = a;
    };
    C.prototype.ZM = function (a) {
      void 0 === a && (a = 0);
      this.Xa.Sb(!0);
      this.Ka.Sb(!0);
      this.Rt = a;
    };
    C.prototype.ew = function (a) {
      this.Ba.ta.call(this, a);
      this.Ta.W(a.Me);
      this.Ua.W(a.Ne);
      this.Dh.W(a.nr);
      this.vn.x = -this.Dh.y;
      this.vn.y = this.Dh.x;
      this.G.qb();
      this.ac = this.$g = 0;
      this.Dg = a.kC;
      this.Eg = a.dE;
      this.Rt = a.NI;
      this.Rl = a.Px;
      this.fi = a.en;
      this.Ek = a.Nw;
      this.Hb = l.Ug;
      this.la.qb();
      this.fb.qb();
    };
    C.prototype.yi = function (b) {
      var c = this.Xa,
        e = this.Ka,
        f,
        g;
      this.Pl.W(c.f.ca);
      this.Ql.W(e.f.ca);
      var h = c.Og();
      e.Og();
      f = c.R.P;
      var k = this.Ta.x - this.Pl.x,
        r = this.Ta.y - this.Pl.y;
      g = f.g.x * k + f.h.x * r;
      r = f.g.y * k + f.h.y * r;
      k = g;
      f = e.R.P;
      var m = this.Ua.x - this.Ql.x,
        n = this.Ua.y - this.Ql.y;
      g = f.g.x * m + f.h.x * n;
      n = f.g.y * m + f.h.y * n;
      m = g;
      f = e.f.J.x + m - c.f.J.x - k;
      g = e.f.J.y + n - c.f.J.y - r;
      this.ae = c.aa;
      this.be = e.aa;
      this.Bg = c.ma;
      this.Cg = e.ma;
      this.la.W(d.Cf(h.P, this.Dh));
      this.rc = (f + k) * this.la.y - (g + r) * this.la.x;
      this.sc = m * this.la.y - n * this.la.x;
      this.$g =
        this.ae +
        this.be +
        this.Bg * this.rc * this.rc +
        this.Cg * this.sc * this.sc;
      this.$g = this.$g > Number.MIN_VALUE ? 1 / this.$g : 0;
      this.fb.W(d.Cf(h.P, this.vn));
      this.Gc = (f + k) * this.fb.y - (g + r) * this.fb.x;
      this.Hc = m * this.fb.y - n * this.fb.x;
      h = this.ae;
      k = this.be;
      r = this.Bg;
      m = this.Cg;
      this.Ra.g.x = h + k + r * this.Gc * this.Gc + m * this.Hc * this.Hc;
      this.Ra.g.y = r * this.Gc * this.rc + m * this.Hc * this.sc;
      this.Ra.h.x = this.Ra.g.y;
      this.Ra.h.y = h + k + r * this.rc * this.rc + m * this.sc * this.sc;
      this.fi
        ? ((f = this.la.x * f + this.la.y * g),
          d.jf(this.Eg - this.Dg) < 2 * a.pc
            ? (this.Hb = l.Uo)
            : f <= this.Dg
              ? this.Hb != l.sl && ((this.Hb = l.sl), (this.G.y = 0))
              : f >= this.Eg
                ? this.Hb != l.Gf && ((this.Hb = l.Gf), (this.G.y = 0))
                : ((this.Hb = l.Ug), (this.G.y = 0)))
        : (this.Hb = l.Ug);
      0 == this.Ek && (this.ac = 0);
      b.Tj
        ? ((this.G.x *= b.ie),
          (this.G.y *= b.ie),
          (this.ac *= b.ie),
          (b = this.G.x * this.fb.x + (this.ac + this.G.y) * this.la.x),
          (f = this.G.x * this.fb.y + (this.ac + this.G.y) * this.la.y),
          (g = this.G.x * this.Gc + (this.ac + this.G.y) * this.rc),
          (h = this.G.x * this.Hc + (this.ac + this.G.y) * this.sc),
          (c.u.x -= this.ae * b),
          (c.u.y -= this.ae * f),
          (c.U -= this.Bg * g),
          (e.u.x += this.be * b),
          (e.u.y += this.be * f),
          (e.U += this.Cg * h))
        : (this.G.qb(), (this.ac = 0));
    };
    C.prototype.Th = function (a) {
      var b = this.Xa,
        c = this.Ka,
        f = b.u,
        g = b.U,
        h = c.u,
        k = c.U,
        r,
        m,
        n;
      this.Ek &&
        this.Hb != l.Uo &&
        ((n =
          this.$g *
          (this.Rl -
            (this.la.x * (h.x - f.x) +
              this.la.y * (h.y - f.y) +
              this.sc * k -
              this.rc * g))),
        (r = this.ac),
        (a = a.Bb * this.Rt),
        (this.ac = d.wc(this.ac + n, -a, a)),
        (n = this.ac - r),
        (r = n * this.la.x),
        (a = n * this.la.y),
        (m = n * this.rc),
        (n *= this.sc),
        (f.x -= this.ae * r),
        (f.y -= this.ae * a),
        (g -= this.Bg * m),
        (h.x += this.be * r),
        (h.y += this.be * a),
        (k += this.Cg * n));
      a =
        this.fb.x * (h.x - f.x) +
        this.fb.y * (h.y - f.y) +
        this.Hc * k -
        this.Gc * g;
      this.fi && this.Hb != l.Ug
        ? ((m =
            this.la.x * (h.x - f.x) +
            this.la.y * (h.y - f.y) +
            this.sc * k -
            this.rc * g),
          (r = this.G.Rf()),
          (n = this.Ra.xq(new e(), -a, -m)),
          this.G.qs(n),
          this.Hb == l.sl
            ? (this.G.y = d.pg(this.G.y, 0))
            : this.Hb == l.Gf && (this.G.y = d.oq(this.G.y, 0)),
          (a = -a - (this.G.y - r.y) * this.Ra.h.x),
          (this.G.x = 0 != this.Ra.g.x ? a / this.Ra.g.x + r.x : r.x),
          (n.x = this.G.x - r.x),
          (n.y = this.G.y - r.y),
          (r = n.x * this.fb.x + n.y * this.la.x),
          (a = n.x * this.fb.y + n.y * this.la.y),
          (m = n.x * this.Gc + n.y * this.rc),
          (n = n.x * this.Hc + n.y * this.sc))
        : ((n = 0 != this.Ra.g.x ? -a / this.Ra.g.x : 0),
          (this.G.x += n),
          (r = n * this.fb.x),
          (a = n * this.fb.y),
          (m = n * this.Gc),
          (n *= this.Hc));
      f.x -= this.ae * r;
      f.y -= this.ae * a;
      g -= this.Bg * m;
      h.x += this.be * r;
      h.y += this.be * a;
      k += this.Cg * n;
      b.u.W(f);
      b.U = g;
      c.u.W(h);
      c.U = k;
    };
    C.prototype.Sh = function () {
      var c = this.Xa,
        f = this.Ka,
        g = c.f.J,
        h = c.f.$,
        k = f.f.J,
        l = f.f.$,
        m,
        n,
        p,
        q,
        t,
        u,
        v = 0;
      p = !1;
      var w = 0,
        z = b.Gz(h);
      t = b.Gz(l);
      m = z;
      var A = this.Ta.x - this.Pl.x;
      q = this.Ta.y - this.Pl.y;
      n = m.g.x * A + m.h.x * q;
      q = m.g.y * A + m.h.y * q;
      A = n;
      m = t;
      t = this.Ua.x - this.Ql.x;
      u = this.Ua.y - this.Ql.y;
      n = m.g.x * t + m.h.x * u;
      u = m.g.y * t + m.h.y * u;
      t = n;
      m = k.x + t - g.x - A;
      n = k.y + u - g.y - q;
      if (this.fi) {
        this.la = d.Cf(z, this.Dh);
        this.rc = (m + A) * this.la.y - (n + q) * this.la.x;
        this.sc = t * this.la.y - u * this.la.x;
        var B = this.la.x * m + this.la.y * n;
        d.jf(this.Eg - this.Dg) < 2 * a.pc
          ? ((w = d.wc(B, -a.Xh, a.Xh)), (v = d.jf(B)), (p = !0))
          : B <= this.Dg
            ? ((w = d.wc(B - this.Dg + a.pc, -a.Xh, 0)),
              (v = this.Dg - B),
              (p = !0))
            : B >= this.Eg &&
              ((w = d.wc(B - this.Eg + a.pc, 0, a.Xh)),
              (v = B - this.Eg),
              (p = !0));
      }
      this.fb = d.Cf(z, this.vn);
      this.Gc = (m + A) * this.fb.y - (n + q) * this.fb.x;
      this.Hc = t * this.fb.y - u * this.fb.x;
      z = new e();
      A = this.fb.x * m + this.fb.y * n;
      v = d.pg(v, d.jf(A));
      p
        ? ((p = this.ae),
          (q = this.be),
          (t = this.Bg),
          (u = this.Cg),
          (this.Ra.g.x = p + q + t * this.Gc * this.Gc + u * this.Hc * this.Hc),
          (this.Ra.g.y = t * this.Gc * this.rc + u * this.Hc * this.sc),
          (this.Ra.h.x = this.Ra.g.y),
          (this.Ra.h.y = p + q + t * this.rc * this.rc + u * this.sc * this.sc),
          this.Ra.xq(z, -A, -w))
        : ((p = this.ae),
          (q = this.be),
          (t = this.Bg),
          (u = this.Cg),
          (w = p + q + t * this.Gc * this.Gc + u * this.Hc * this.Hc),
          (z.x = 0 != w ? -A / w : 0),
          (z.y = 0));
      w = z.x * this.fb.x + z.y * this.la.x;
      p = z.x * this.fb.y + z.y * this.la.y;
      A = z.x * this.Gc + z.y * this.rc;
      z = z.x * this.Hc + z.y * this.sc;
      g.x -= this.ae * w;
      g.y -= this.ae * p;
      h -= this.Bg * A;
      k.x += this.be * w;
      k.y += this.be * p;
      l += this.Cg * z;
      c.f.$ = h;
      f.f.$ = l;
      c.Ud();
      f.Ud();
      return v <= a.pc && 0 <= a.Lq;
    };
    g.Ec(F, g.i.T.Sa);
    F.prototype.Ba = g.i.T.Sa.prototype;
    F.fw = function () {
      g.i.T.Sa.Sa.apply(this, arguments);
      this.Me = new e();
      this.Ne = new e();
      this.nr = new e();
    };
    F.prototype.fw = function () {
      this.Ba.Sa.call(this);
      this.type = l.XO;
      this.nr.Set(1, 0);
      this.en = !1;
      this.dE = this.kC = 0;
      this.Nw = !1;
      this.Px = this.NI = 0;
    };
    F.prototype.Yb = function (a, b, c, d) {
      this.gc = a;
      this.qc = b;
      this.Me = this.gc.Ng(c);
      this.Ne = this.qc.Ng(c);
      this.nr = this.gc.RE(d);
    };
    g.Ec(w, g.i.T.ta);
    w.prototype.Ba = g.i.T.ta.prototype;
    w.hw = function () {
      g.i.T.ta.ta.apply(this, arguments);
      this.zf = new b();
      this.bk = new b();
      this.ck = new b();
      this.Pt = new e();
      this.Jx = new e();
      this.G = new e();
      this.da = new b();
      this.lC = new e();
    };
    w.prototype.WM = function (a) {
      void 0 === a && (a = 0);
      this.jp = a;
    };
    w.prototype.VM = function (a) {
      void 0 === a && (a = 0);
      this.Ot = a;
    };
    w.prototype.hw = function (a) {
      this.Ba.ta.call(this, a);
      this.Jx.W(a.target);
      var b = this.Jx.x - this.Ka.R.position.x,
        c = this.Jx.y - this.Ka.R.position.y,
        d = this.Ka.R.P;
      this.Pt.x = b * d.g.x + c * d.g.y;
      this.Pt.y = b * d.h.x + c * d.h.y;
      this.EI = a.MI;
      this.G.qb();
      this.jp = a.cr;
      this.Ot = a.Uq;
      this.zg = this.tI = 0;
    };
    w.prototype.yi = function (a) {
      var b = this.Ka,
        c = b.da,
        d = 2 * Math.PI * this.jp,
        e = c * d * d;
      this.zg = a.Bb * (2 * c * this.Ot * d + a.Bb * e);
      this.zg = 0 != this.zg ? 1 / this.zg : 0;
      this.tI = a.Bb * e * this.zg;
      var e = b.R.P,
        c = this.Pt.x - b.f.ca.x,
        d = this.Pt.y - b.f.ca.y,
        f = e.g.x * c + e.h.x * d,
        d = e.g.y * c + e.h.y * d,
        c = f,
        e = b.aa,
        f = b.ma;
      this.bk.g.x = e;
      this.bk.h.x = 0;
      this.bk.g.y = 0;
      this.bk.h.y = e;
      this.ck.g.x = f * d * d;
      this.ck.h.x = -f * c * d;
      this.ck.g.y = -f * c * d;
      this.ck.h.y = f * c * c;
      this.zf.vq(this.bk);
      this.zf.mz(this.ck);
      this.zf.g.x += this.zg;
      this.zf.h.y += this.zg;
      this.zf.QE(this.da);
      this.lC.x = b.f.J.x + c - this.Jx.x;
      this.lC.y = b.f.J.y + d - this.Jx.y;
      b.U *= 0.98;
      this.G.x *= a.ie;
      this.G.y *= a.ie;
      b.u.x += e * this.G.x;
      b.u.y += e * this.G.y;
      b.U += f * (c * this.G.y - d * this.G.x);
    };
    w.prototype.Th = function (a) {
      var b = this.Ka,
        c,
        d,
        e;
      c = b.R.P;
      var f = this.Pt.x - b.f.ca.x,
        g = this.Pt.y - b.f.ca.y;
      d = c.g.x * f + c.h.x * g;
      g = c.g.y * f + c.h.y * g;
      f = d;
      d = b.u.x + -b.U * g;
      var h = b.u.y + b.U * f;
      c = this.da;
      d = d + this.tI * this.lC.x + this.zg * this.G.x;
      e = h + this.tI * this.lC.y + this.zg * this.G.y;
      h = -(c.g.x * d + c.h.x * e);
      e = -(c.g.y * d + c.h.y * e);
      c = this.G.x;
      d = this.G.y;
      this.G.x += h;
      this.G.y += e;
      a = a.Bb * this.EI;
      this.G.fF() > a * a && this.G.Rg(a / this.G.Gm());
      h = this.G.x - c;
      e = this.G.y - d;
      b.u.x += b.aa * h;
      b.u.y += b.aa * e;
      b.U += b.ma * (f * e - g * h);
    };
    w.prototype.Sh = function () {
      return !0;
    };
    g.Ec(B, g.i.T.Sa);
    B.prototype.Ba = g.i.T.Sa.prototype;
    B.iw = function () {
      g.i.T.Sa.Sa.apply(this, arguments);
      this.target = new e();
    };
    B.prototype.iw = function () {
      this.Ba.Sa.call(this);
      this.type = l.ZO;
      this.MI = 0;
      this.cr = 5;
      this.Uq = 0.7;
    };
    g.Ec(G, g.i.T.ta);
    G.prototype.Ba = g.i.T.ta.prototype;
    G.kw = function () {
      g.i.T.ta.ta.apply(this, arguments);
      this.Ta = new e();
      this.Ua = new e();
      this.Dh = new e();
      this.vn = new e();
      this.la = new e();
      this.fb = new e();
      this.Ra = new c();
      this.G = new f();
    };
    G.prototype.tv = function () {
      var a = this.Xa,
        b = this.Ka,
        c = a.Kz(this.Ta),
        d = b.Kz(this.Ua),
        b = d.x - c.x,
        c = d.y - c.y,
        a = a.TE(this.Dh);
      return a.x * b + a.y * c;
    };
    G.prototype.fq = function (a) {
      this.Xa.Sb(!0);
      this.Ka.Sb(!0);
      this.fi = a;
    };
    G.prototype.Iz = function () {
      return this.Dg;
    };
    G.prototype.Jz = function () {
      return this.Eg;
    };
    G.prototype.Lv = function (a, b) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      this.Xa.Sb(!0);
      this.Ka.Sb(!0);
      this.Dg = a;
      this.Eg = b;
    };
    G.prototype.nv = function (a) {
      this.Xa.Sb(!0);
      this.Ka.Sb(!0);
      this.Ek = a;
    };
    G.prototype.Mv = function (a) {
      void 0 === a && (a = 0);
      this.Xa.Sb(!0);
      this.Ka.Sb(!0);
      this.Rl = a;
    };
    G.prototype.ZM = function (a) {
      void 0 === a && (a = 0);
      this.Xa.Sb(!0);
      this.Ka.Sb(!0);
      this.Rt = a;
    };
    G.prototype.kw = function (a) {
      this.Ba.ta.call(this, a);
      this.Ta.W(a.Me);
      this.Ua.W(a.Ne);
      this.Dh.W(a.nr);
      this.vn.x = -this.Dh.y;
      this.vn.y = this.Dh.x;
      this.S3 = a.Bp;
      this.G.qb();
      this.ac = this.$g = 0;
      this.Dg = a.kC;
      this.Eg = a.dE;
      this.Rt = a.NI;
      this.Rl = a.Px;
      this.fi = a.en;
      this.Ek = a.Nw;
      this.Hb = l.Ug;
      this.la.qb();
      this.fb.qb();
    };
    G.prototype.yi = function (b) {
      var c = this.Xa,
        e = this.Ka,
        f,
        g;
      this.Pl.W(c.f.ca);
      this.Ql.W(e.f.ca);
      var h = c.Og();
      e.Og();
      f = c.R.P;
      var k = this.Ta.x - this.Pl.x,
        r = this.Ta.y - this.Pl.y;
      g = f.g.x * k + f.h.x * r;
      r = f.g.y * k + f.h.y * r;
      k = g;
      f = e.R.P;
      var m = this.Ua.x - this.Ql.x,
        n = this.Ua.y - this.Ql.y;
      g = f.g.x * m + f.h.x * n;
      n = f.g.y * m + f.h.y * n;
      m = g;
      f = e.f.J.x + m - c.f.J.x - k;
      g = e.f.J.y + n - c.f.J.y - r;
      this.ae = c.aa;
      this.be = e.aa;
      this.Bg = c.ma;
      this.Cg = e.ma;
      this.la.W(d.Cf(h.P, this.Dh));
      this.rc = (f + k) * this.la.y - (g + r) * this.la.x;
      this.sc = m * this.la.y - n * this.la.x;
      this.$g =
        this.ae +
        this.be +
        this.Bg * this.rc * this.rc +
        this.Cg * this.sc * this.sc;
      this.$g > Number.MIN_VALUE && (this.$g = 1 / this.$g);
      this.fb.W(d.Cf(h.P, this.vn));
      this.Gc = (f + k) * this.fb.y - (g + r) * this.fb.x;
      this.Hc = m * this.fb.y - n * this.fb.x;
      h = this.ae;
      k = this.be;
      r = this.Bg;
      m = this.Cg;
      this.Ra.g.x = h + k + r * this.Gc * this.Gc + m * this.Hc * this.Hc;
      this.Ra.g.y = r * this.Gc + m * this.Hc;
      this.Ra.g.z = r * this.Gc * this.rc + m * this.Hc * this.sc;
      this.Ra.h.x = this.Ra.g.y;
      this.Ra.h.y = r + m;
      this.Ra.h.z = r * this.rc + m * this.sc;
      this.Ra.hb.x = this.Ra.g.z;
      this.Ra.hb.y = this.Ra.h.z;
      this.Ra.hb.z = h + k + r * this.rc * this.rc + m * this.sc * this.sc;
      this.fi
        ? ((f = this.la.x * f + this.la.y * g),
          d.jf(this.Eg - this.Dg) < 2 * a.pc
            ? (this.Hb = l.Uo)
            : f <= this.Dg
              ? this.Hb != l.sl && ((this.Hb = l.sl), (this.G.z = 0))
              : f >= this.Eg
                ? this.Hb != l.Gf && ((this.Hb = l.Gf), (this.G.z = 0))
                : ((this.Hb = l.Ug), (this.G.z = 0)))
        : (this.Hb = l.Ug);
      0 == this.Ek && (this.ac = 0);
      b.Tj
        ? ((this.G.x *= b.ie),
          (this.G.y *= b.ie),
          (this.ac *= b.ie),
          (b = this.G.x * this.fb.x + (this.ac + this.G.z) * this.la.x),
          (f = this.G.x * this.fb.y + (this.ac + this.G.z) * this.la.y),
          (g = this.G.x * this.Gc + this.G.y + (this.ac + this.G.z) * this.rc),
          (h = this.G.x * this.Hc + this.G.y + (this.ac + this.G.z) * this.sc),
          (c.u.x -= this.ae * b),
          (c.u.y -= this.ae * f),
          (c.U -= this.Bg * g),
          (e.u.x += this.be * b),
          (e.u.y += this.be * f),
          (e.U += this.Cg * h))
        : (this.G.qb(), (this.ac = 0));
    };
    G.prototype.Th = function (a) {
      var b = this.Xa,
        c = this.Ka,
        g = b.u,
        h = b.U,
        k = c.u,
        r = c.U,
        m,
        n,
        p;
      this.Ek &&
        this.Hb != l.Uo &&
        ((p =
          this.$g *
          (this.Rl -
            (this.la.x * (k.x - g.x) +
              this.la.y * (k.y - g.y) +
              this.sc * r -
              this.rc * h))),
        (m = this.ac),
        (a = a.Bb * this.Rt),
        (this.ac = d.wc(this.ac + p, -a, a)),
        (p = this.ac - m),
        (m = p * this.la.x),
        (a = p * this.la.y),
        (n = p * this.rc),
        (p *= this.sc),
        (g.x -= this.ae * m),
        (g.y -= this.ae * a),
        (h -= this.Bg * n),
        (k.x += this.be * m),
        (k.y += this.be * a),
        (r += this.Cg * p));
      n =
        this.fb.x * (k.x - g.x) +
        this.fb.y * (k.y - g.y) +
        this.Hc * r -
        this.Gc * h;
      a = r - h;
      this.fi && this.Hb != l.Ug
        ? ((p =
            this.la.x * (k.x - g.x) +
            this.la.y * (k.y - g.y) +
            this.sc * r -
            this.rc * h),
          (m = this.G.Rf()),
          (p = this.Ra.Qv(new f(), -n, -a, -p)),
          this.G.qs(p),
          this.Hb == l.sl
            ? (this.G.z = d.pg(this.G.z, 0))
            : this.Hb == l.Gf && (this.G.z = d.oq(this.G.z, 0)),
          (n = -n - (this.G.z - m.z) * this.Ra.hb.x),
          (a = -a - (this.G.z - m.z) * this.Ra.hb.y),
          (a = this.Ra.Rs(new e(), n, a)),
          (a.x += m.x),
          (a.y += m.y),
          (this.G.x = a.x),
          (this.G.y = a.y),
          (p.x = this.G.x - m.x),
          (p.y = this.G.y - m.y),
          (p.z = this.G.z - m.z),
          (m = p.x * this.fb.x + p.z * this.la.x),
          (a = p.x * this.fb.y + p.z * this.la.y),
          (n = p.x * this.Gc + p.y + p.z * this.rc),
          (p = p.x * this.Hc + p.y + p.z * this.sc))
        : ((p = this.Ra.Rs(new e(), -n, -a)),
          (this.G.x += p.x),
          (this.G.y += p.y),
          (m = p.x * this.fb.x),
          (a = p.x * this.fb.y),
          (n = p.x * this.Gc + p.y),
          (p = p.x * this.Hc + p.y));
      g.x -= this.ae * m;
      g.y -= this.ae * a;
      h -= this.Bg * n;
      k.x += this.be * m;
      k.y += this.be * a;
      r += this.Cg * p;
      b.u.W(g);
      b.U = h;
      c.u.W(k);
      c.U = r;
    };
    G.prototype.Sh = function () {
      var c = this.Xa,
        g = this.Ka,
        h = c.f.J,
        k = c.f.$,
        l = g.f.J,
        m = g.f.$,
        n,
        p,
        q,
        t,
        u = 0,
        v;
      q = !1;
      var w = 0,
        z = b.Gz(k),
        A = b.Gz(m);
      n = z;
      v = this.Ta.x - this.Pl.x;
      var B = this.Ta.y - this.Pl.y;
      p = n.g.x * v + n.h.x * B;
      B = n.g.y * v + n.h.y * B;
      v = p;
      n = A;
      A = this.Ua.x - this.Ql.x;
      t = this.Ua.y - this.Ql.y;
      p = n.g.x * A + n.h.x * t;
      t = n.g.y * A + n.h.y * t;
      A = p;
      n = l.x + A - h.x - v;
      p = l.y + t - h.y - B;
      if (this.fi) {
        this.la = d.Cf(z, this.Dh);
        this.rc = (n + v) * this.la.y - (p + B) * this.la.x;
        this.sc = A * this.la.y - t * this.la.x;
        var C = this.la.x * n + this.la.y * p;
        d.jf(this.Eg - this.Dg) < 2 * a.pc
          ? ((w = d.wc(C, -a.Xh, a.Xh)), (u = d.jf(C)), (q = !0))
          : C <= this.Dg
            ? ((w = d.wc(C - this.Dg + a.pc, -a.Xh, 0)),
              (u = this.Dg - C),
              (q = !0))
            : C >= this.Eg &&
              ((w = d.wc(C - this.Eg + a.pc, 0, a.Xh)),
              (u = C - this.Eg),
              (q = !0));
      }
      this.fb = d.Cf(z, this.vn);
      this.Gc = (n + v) * this.fb.y - (p + B) * this.fb.x;
      this.Hc = A * this.fb.y - t * this.fb.x;
      z = new f();
      B = this.fb.x * n + this.fb.y * p;
      A = m - k - this.S3;
      u = d.pg(u, d.jf(B));
      v = d.jf(A);
      q
        ? ((q = this.ae),
          (t = this.be),
          (n = this.Bg),
          (p = this.Cg),
          (this.Ra.g.x = q + t + n * this.Gc * this.Gc + p * this.Hc * this.Hc),
          (this.Ra.g.y = n * this.Gc + p * this.Hc),
          (this.Ra.g.z = n * this.Gc * this.rc + p * this.Hc * this.sc),
          (this.Ra.h.x = this.Ra.g.y),
          (this.Ra.h.y = n + p),
          (this.Ra.h.z = n * this.rc + p * this.sc),
          (this.Ra.hb.x = this.Ra.g.z),
          (this.Ra.hb.y = this.Ra.h.z),
          (this.Ra.hb.z =
            q + t + n * this.rc * this.rc + p * this.sc * this.sc),
          this.Ra.Qv(z, -B, -A, -w))
        : ((q = this.ae),
          (t = this.be),
          (n = this.Bg),
          (p = this.Cg),
          (w = n * this.Gc + p * this.Hc),
          (C = n + p),
          this.Ra.g.Set(
            q + t + n * this.Gc * this.Gc + p * this.Hc * this.Hc,
            w,
            0,
          ),
          this.Ra.h.Set(w, C, 0),
          (w = this.Ra.Rs(new e(), -B, -A)),
          (z.x = w.x),
          (z.y = w.y),
          (z.z = 0));
      w = z.x * this.fb.x + z.z * this.la.x;
      q = z.x * this.fb.y + z.z * this.la.y;
      B = z.x * this.Gc + z.y + z.z * this.rc;
      z = z.x * this.Hc + z.y + z.z * this.sc;
      h.x -= this.ae * w;
      h.y -= this.ae * q;
      k -= this.Bg * B;
      l.x += this.be * w;
      l.y += this.be * q;
      m += this.Cg * z;
      c.f.$ = k;
      g.f.$ = m;
      c.Ud();
      g.Ud();
      return u <= a.pc && v <= a.Lq;
    };
    g.Ec(H, g.i.T.Sa);
    H.prototype.Ba = g.i.T.Sa.prototype;
    H.Wm = function () {
      g.i.T.Sa.Sa.apply(this, arguments);
      this.Me = new e();
      this.Ne = new e();
      this.nr = new e();
    };
    H.prototype.Wm = function () {
      this.Ba.Sa.call(this);
      this.type = l.aP;
      this.nr.Set(1, 0);
      this.Bp = 0;
      this.en = !1;
      this.dE = this.kC = 0;
      this.Nw = !1;
      this.Px = this.NI = 0;
    };
    H.prototype.Yb = function (a, b, c, d) {
      this.gc = a;
      this.qc = b;
      this.Me = this.gc.Ng(c);
      this.Ne = this.qc.Ng(c);
      this.nr = this.gc.RE(d);
      this.Bp = this.qc.Zi() - this.gc.Zi();
    };
    g.Ec(I, g.i.T.ta);
    I.prototype.Ba = g.i.T.ta.prototype;
    I.$s = function () {
      g.i.T.ta.ta.apply(this, arguments);
      this.sn = new e();
      this.tn = new e();
      this.Ta = new e();
      this.Ua = new e();
      this.Pc = new e();
      this.Qc = new e();
    };
    I.prototype.$s = function (a) {
      this.Ba.ta.call(this, a);
      this.rj = this.Xa.ze.K3;
      this.sn.x = a.MB.x - this.rj.R.position.x;
      this.sn.y = a.MB.y - this.rj.R.position.y;
      this.tn.x = a.NB.x - this.rj.R.position.x;
      this.tn.y = a.NB.y - this.rj.R.position.y;
      this.Ta.W(a.Me);
      this.Ua.W(a.Ne);
      this.de = a.ratio;
      this.Lt = a.kI + this.de * a.lI;
      this.GQ = d.oq(a.XQ, this.Lt - this.de * I.dB);
      this.HQ = d.oq(a.YQ, (this.Lt - I.dB) / this.de);
      this.Ol = this.Nl = this.G = 0;
    };
    I.prototype.yi = function (b) {
      var c = this.Xa,
        d = this.Ka,
        e;
      e = c.R.P;
      var f = this.Ta.x - c.f.ca.x,
        g = this.Ta.y - c.f.ca.y,
        h = e.g.x * f + e.h.x * g,
        g = e.g.y * f + e.h.y * g,
        f = h;
      e = d.R.P;
      var k = this.Ua.x - d.f.ca.x,
        m = this.Ua.y - d.f.ca.y,
        h = e.g.x * k + e.h.x * m,
        m = e.g.y * k + e.h.y * m,
        k = h;
      e = d.f.J.x + k;
      var h = d.f.J.y + m,
        r = this.rj.R.position.x + this.tn.x,
        n = this.rj.R.position.y + this.tn.y;
      this.Pc.Set(
        c.f.J.x + f - (this.rj.R.position.x + this.sn.x),
        c.f.J.y + g - (this.rj.R.position.y + this.sn.y),
      );
      this.Qc.Set(e - r, h - n);
      e = this.Pc.Gm();
      h = this.Qc.Gm();
      e > a.pc ? this.Pc.Rg(1 / e) : this.Pc.qb();
      h > a.pc ? this.Qc.Rg(1 / h) : this.Qc.qb();
      0 < this.Lt - e - this.de * h
        ? ((this.KI = l.Ug), (this.G = 0))
        : (this.KI = l.Gf);
      e < this.GQ ? ((this.BI = l.Ug), (this.Nl = 0)) : (this.BI = l.Gf);
      h < this.HQ ? ((this.CI = l.Ug), (this.Ol = 0)) : (this.CI = l.Gf);
      e = f * this.Pc.y - g * this.Pc.x;
      h = k * this.Qc.y - m * this.Qc.x;
      this.Cx = c.aa + c.ma * e * e;
      this.Dx = d.aa + d.ma * h * h;
      this.AC = this.Cx + this.de * this.de * this.Dx;
      this.Cx = 1 / this.Cx;
      this.Dx = 1 / this.Dx;
      this.AC = 1 / this.AC;
      b.Tj
        ? ((this.G *= b.ie),
          (this.Nl *= b.ie),
          (this.Ol *= b.ie),
          (b = (-this.G - this.Nl) * this.Pc.x),
          (e = (-this.G - this.Nl) * this.Pc.y),
          (h = (-this.de * this.G - this.Ol) * this.Qc.x),
          (r = (-this.de * this.G - this.Ol) * this.Qc.y),
          (c.u.x += c.aa * b),
          (c.u.y += c.aa * e),
          (c.U += c.ma * (f * e - g * b)),
          (d.u.x += d.aa * h),
          (d.u.y += d.aa * r),
          (d.U += d.ma * (k * r - m * h)))
        : (this.Ol = this.Nl = this.G = 0);
    };
    I.prototype.Th = function () {
      var a = this.Xa,
        b = this.Ka,
        c;
      c = a.R.P;
      var e = this.Ta.x - a.f.ca.x,
        f = this.Ta.y - a.f.ca.y,
        g = c.g.x * e + c.h.x * f,
        f = c.g.y * e + c.h.y * f,
        e = g;
      c = b.R.P;
      var h = this.Ua.x - b.f.ca.x,
        k = this.Ua.y - b.f.ca.y,
        g = c.g.x * h + c.h.x * k,
        k = c.g.y * h + c.h.y * k,
        h = g,
        m,
        n;
      this.KI == l.Gf &&
        ((c = a.u.x + -a.U * f),
        (g = a.u.y + a.U * e),
        (m = b.u.x + -b.U * k),
        (n = b.u.y + b.U * h),
        (c =
          -(this.Pc.x * c + this.Pc.y * g) -
          this.de * (this.Qc.x * m + this.Qc.y * n)),
        (n = this.AC * -c),
        (c = this.G),
        (this.G = d.pg(0, this.G + n)),
        (n = this.G - c),
        (c = -n * this.Pc.x),
        (g = -n * this.Pc.y),
        (m = -this.de * n * this.Qc.x),
        (n = -this.de * n * this.Qc.y),
        (a.u.x += a.aa * c),
        (a.u.y += a.aa * g),
        (a.U += a.ma * (e * g - f * c)),
        (b.u.x += b.aa * m),
        (b.u.y += b.aa * n),
        (b.U += b.ma * (h * n - k * m)));
      this.BI == l.Gf &&
        ((c = a.u.x + -a.U * f),
        (g = a.u.y + a.U * e),
        (c = -(this.Pc.x * c + this.Pc.y * g)),
        (n = -this.Cx * c),
        (c = this.Nl),
        (this.Nl = d.pg(0, this.Nl + n)),
        (n = this.Nl - c),
        (c = -n * this.Pc.x),
        (g = -n * this.Pc.y),
        (a.u.x += a.aa * c),
        (a.u.y += a.aa * g),
        (a.U += a.ma * (e * g - f * c)));
      this.CI == l.Gf &&
        ((m = b.u.x + -b.U * k),
        (n = b.u.y + b.U * h),
        (c = -(this.Qc.x * m + this.Qc.y * n)),
        (n = -this.Dx * c),
        (c = this.Ol),
        (this.Ol = d.pg(0, this.Ol + n)),
        (n = this.Ol - c),
        (m = -n * this.Qc.x),
        (n = -n * this.Qc.y),
        (b.u.x += b.aa * m),
        (b.u.y += b.aa * n),
        (b.U += b.ma * (h * n - k * m)));
    };
    I.prototype.Sh = function () {
      var b = this.Xa,
        c = this.Ka,
        e,
        f = this.rj.R.position.x + this.sn.x,
        g = this.rj.R.position.y + this.sn.y,
        h = this.rj.R.position.x + this.tn.x,
        k = this.rj.R.position.y + this.tn.y,
        m,
        n,
        p,
        q,
        t,
        u,
        v,
        w = 0;
      this.KI == l.Gf &&
        ((e = b.R.P),
        (m = this.Ta.x - b.f.ca.x),
        (n = this.Ta.y - b.f.ca.y),
        (t = e.g.x * m + e.h.x * n),
        (n = e.g.y * m + e.h.y * n),
        (m = t),
        (e = c.R.P),
        (p = this.Ua.x - c.f.ca.x),
        (q = this.Ua.y - c.f.ca.y),
        (t = e.g.x * p + e.h.x * q),
        (q = e.g.y * p + e.h.y * q),
        (p = t),
        (e = b.f.J.x + m),
        (t = b.f.J.y + n),
        (u = c.f.J.x + p),
        (v = c.f.J.y + q),
        this.Pc.Set(e - f, t - g),
        this.Qc.Set(u - h, v - k),
        (e = this.Pc.Gm()),
        (t = this.Qc.Gm()),
        e > a.pc ? this.Pc.Rg(1 / e) : this.Pc.qb(),
        t > a.pc ? this.Qc.Rg(1 / t) : this.Qc.qb(),
        (e = this.Lt - e - this.de * t),
        (w = d.pg(w, -e)),
        (e = d.wc(e + a.pc, -a.Xh, 0)),
        (v = -this.AC * e),
        (e = -v * this.Pc.x),
        (t = -v * this.Pc.y),
        (u = -this.de * v * this.Qc.x),
        (v = -this.de * v * this.Qc.y),
        (b.f.J.x += b.aa * e),
        (b.f.J.y += b.aa * t),
        (b.f.$ += b.ma * (m * t - n * e)),
        (c.f.J.x += c.aa * u),
        (c.f.J.y += c.aa * v),
        (c.f.$ += c.ma * (p * v - q * u)),
        b.Ud(),
        c.Ud());
      this.BI == l.Gf &&
        ((e = b.R.P),
        (m = this.Ta.x - b.f.ca.x),
        (n = this.Ta.y - b.f.ca.y),
        (t = e.g.x * m + e.h.x * n),
        (n = e.g.y * m + e.h.y * n),
        (m = t),
        (e = b.f.J.x + m),
        (t = b.f.J.y + n),
        this.Pc.Set(e - f, t - g),
        (e = this.Pc.Gm()),
        e > a.pc ? ((this.Pc.x *= 1 / e), (this.Pc.y *= 1 / e)) : this.Pc.qb(),
        (e = this.GQ - e),
        (w = d.pg(w, -e)),
        (e = d.wc(e + a.pc, -a.Xh, 0)),
        (v = -this.Cx * e),
        (e = -v * this.Pc.x),
        (t = -v * this.Pc.y),
        (b.f.J.x += b.aa * e),
        (b.f.J.y += b.aa * t),
        (b.f.$ += b.ma * (m * t - n * e)),
        b.Ud());
      this.CI == l.Gf &&
        ((e = c.R.P),
        (p = this.Ua.x - c.f.ca.x),
        (q = this.Ua.y - c.f.ca.y),
        (t = e.g.x * p + e.h.x * q),
        (q = e.g.y * p + e.h.y * q),
        (p = t),
        (u = c.f.J.x + p),
        (v = c.f.J.y + q),
        this.Qc.Set(u - h, v - k),
        (t = this.Qc.Gm()),
        t > a.pc ? ((this.Qc.x *= 1 / t), (this.Qc.y *= 1 / t)) : this.Qc.qb(),
        (e = this.HQ - t),
        (w = d.pg(w, -e)),
        (e = d.wc(e + a.pc, -a.Xh, 0)),
        (v = -this.Dx * e),
        (u = -v * this.Qc.x),
        (v = -v * this.Qc.y),
        (c.f.J.x += c.aa * u),
        (c.f.J.y += c.aa * v),
        (c.f.$ += c.ma * (p * v - q * u)),
        c.Ud());
      return w < a.pc;
    };
    g.fe.push(function () {
      g.i.T.$s.dB = 2;
    });
    g.Ec(J, g.i.T.Sa);
    J.prototype.Ba = g.i.T.Sa.prototype;
    J.Jq = function () {
      g.i.T.Sa.Sa.apply(this, arguments);
      this.MB = new e();
      this.NB = new e();
      this.Me = new e();
      this.Ne = new e();
    };
    J.prototype.Jq = function () {
      this.Ba.Sa.call(this);
      this.type = l.bP;
      this.MB.Set(-1, 1);
      this.NB.Set(1, 1);
      this.Me.Set(-1, 0);
      this.Ne.Set(1, 0);
      this.YQ = this.lI = this.XQ = this.kI = 0;
      this.ratio = 1;
      this.Xf = !0;
    };
    J.prototype.Yb = function (a, b, c, d, e, f, g) {
      void 0 === g && (g = 0);
      this.gc = a;
      this.qc = b;
      this.MB.W(c);
      this.NB.W(d);
      this.Me = this.gc.Ng(e);
      this.Ne = this.qc.Ng(f);
      a = e.x - c.x;
      c = e.y - c.y;
      this.kI = Math.sqrt(a * a + c * c);
      c = f.x - d.x;
      d = f.y - d.y;
      this.lI = Math.sqrt(c * c + d * d);
      this.ratio = g;
      g = this.kI + this.ratio * this.lI;
      this.XQ = g - this.ratio * I.dB;
      this.YQ = (g - I.dB) / this.ratio;
    };
    g.Ec(K, g.i.T.ta);
    K.prototype.Ba = g.i.T.ta.prototype;
    K.at = function () {
      g.i.T.ta.ta.apply(this, arguments);
      this.zf = new b();
      this.bk = new b();
      this.ck = new b();
      this.xv = new b();
      this.pf = new f();
      this.wk = new e();
      this.km = new e();
      this.Ta = new e();
      this.Ua = new e();
      this.G = new f();
      this.da = new c();
    };
    K.prototype.Hz = function () {
      return this.Ka.f.$ - this.Xa.f.$ - this.Gx;
    };
    K.prototype.fq = function (a) {
      this.fi = a;
    };
    K.prototype.Iz = function () {
      return this.Qt;
    };
    K.prototype.Jz = function () {
      return this.Lx;
    };
    K.prototype.Lv = function (a, b) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      this.Qt = a;
      this.Lx = b;
    };
    K.prototype.nv = function (a) {
      this.Ek = a;
    };
    K.prototype.Mv = function (a) {
      void 0 === a && (a = 0);
      this.Xa.Sb(!0);
      this.Ka.Sb(!0);
      this.Rl = a;
    };
    K.prototype.$M = function (a) {
      void 0 === a && (a = 0);
      this.IQ = a;
    };
    K.prototype.at = function (a) {
      this.Ba.ta.call(this, a);
      this.Ta.W(a.Me);
      this.Ua.W(a.Ne);
      this.Gx = a.Bp;
      this.G.qb();
      this.ac = 0;
      this.Qt = a.oQ;
      this.Lx = a.RT;
      this.IQ = a.X3;
      this.Rl = a.Px;
      this.fi = a.en;
      this.Ek = a.Nw;
      this.Hb = l.Ug;
    };
    K.prototype.yi = function (b) {
      var c = this.Xa,
        e = this.Ka,
        f,
        g;
      f = c.R.P;
      var h = this.Ta.x - c.f.ca.x,
        k = this.Ta.y - c.f.ca.y;
      g = f.g.x * h + f.h.x * k;
      k = f.g.y * h + f.h.y * k;
      h = g;
      f = e.R.P;
      var m = this.Ua.x - e.f.ca.x,
        n = this.Ua.y - e.f.ca.y;
      g = f.g.x * m + f.h.x * n;
      n = f.g.y * m + f.h.y * n;
      m = g;
      f = c.aa;
      g = e.aa;
      var p = c.ma,
        r = e.ma;
      this.da.g.x = f + g + k * k * p + n * n * r;
      this.da.h.x = -k * h * p - n * m * r;
      this.da.hb.x = -k * p - n * r;
      this.da.g.y = this.da.h.x;
      this.da.h.y = f + g + h * h * p + m * m * r;
      this.da.hb.y = h * p + m * r;
      this.da.g.z = this.da.hb.x;
      this.da.h.z = this.da.hb.y;
      this.da.hb.z = p + r;
      this.$g = 1 / (p + r);
      0 == this.Ek && (this.ac = 0);
      if (this.fi) {
        var q = e.f.$ - c.f.$ - this.Gx;
        d.jf(this.Lx - this.Qt) < 2 * a.Lq
          ? (this.Hb = l.Uo)
          : q <= this.Qt
            ? (this.Hb != l.sl && (this.G.z = 0), (this.Hb = l.sl))
            : q >= this.Lx
              ? (this.Hb != l.Gf && (this.G.z = 0), (this.Hb = l.Gf))
              : ((this.Hb = l.Ug), (this.G.z = 0));
      } else this.Hb = l.Ug;
      b.Tj
        ? ((this.G.x *= b.ie),
          (this.G.y *= b.ie),
          (this.ac *= b.ie),
          (b = this.G.x),
          (q = this.G.y),
          (c.u.x -= f * b),
          (c.u.y -= f * q),
          (c.U -= p * (h * q - k * b + this.ac + this.G.z)),
          (e.u.x += g * b),
          (e.u.y += g * q),
          (e.U += r * (m * q - n * b + this.ac + this.G.z)))
        : (this.G.qb(), (this.ac = 0));
    };
    K.prototype.Th = function (a) {
      var b = this.Xa,
        c = this.Ka,
        e,
        f,
        g,
        h,
        k,
        m = b.u,
        n = b.U,
        p = c.u,
        r = c.U,
        q = b.aa,
        t = c.aa,
        u = b.ma,
        v = c.ma;
      this.Ek &&
        this.Hb != l.Uo &&
        ((g = this.$g * -(r - n - this.Rl)),
        (h = this.ac),
        (a = a.Bb * this.IQ),
        (this.ac = d.wc(this.ac + g, -a, a)),
        (g = this.ac - h),
        (n -= u * g),
        (r += v * g));
      if (this.fi && this.Hb != l.Ug) {
        e = b.R.P;
        g = this.Ta.x - b.f.ca.x;
        h = this.Ta.y - b.f.ca.y;
        f = e.g.x * g + e.h.x * h;
        h = e.g.y * g + e.h.y * h;
        g = f;
        e = c.R.P;
        a = this.Ua.x - c.f.ca.x;
        k = this.Ua.y - c.f.ca.y;
        f = e.g.x * a + e.h.x * k;
        k = e.g.y * a + e.h.y * k;
        a = f;
        f = p.x + -r * k - m.x - -n * h;
        var w = p.y + r * a - m.y - n * g;
        this.da.Qv(this.pf, -f, -w, -(r - n));
        this.Hb == l.Uo
          ? this.G.qs(this.pf)
          : this.Hb == l.sl
            ? ((e = this.G.z + this.pf.z),
              0 > e &&
                (this.da.Rs(this.km, -f, -w),
                (this.pf.x = this.km.x),
                (this.pf.y = this.km.y),
                (this.pf.z = -this.G.z),
                (this.G.x += this.km.x),
                (this.G.y += this.km.y),
                (this.G.z = 0)))
            : this.Hb == l.Gf &&
              ((e = this.G.z + this.pf.z),
              0 < e &&
                (this.da.Rs(this.km, -f, -w),
                (this.pf.x = this.km.x),
                (this.pf.y = this.km.y),
                (this.pf.z = -this.G.z),
                (this.G.x += this.km.x),
                (this.G.y += this.km.y),
                (this.G.z = 0)));
        m.x -= q * this.pf.x;
        m.y -= q * this.pf.y;
        n -= u * (g * this.pf.y - h * this.pf.x + this.pf.z);
        p.x += t * this.pf.x;
        p.y += t * this.pf.y;
        r += v * (a * this.pf.y - k * this.pf.x + this.pf.z);
      } else
        (e = b.R.P),
          (g = this.Ta.x - b.f.ca.x),
          (h = this.Ta.y - b.f.ca.y),
          (f = e.g.x * g + e.h.x * h),
          (h = e.g.y * g + e.h.y * h),
          (g = f),
          (e = c.R.P),
          (a = this.Ua.x - c.f.ca.x),
          (k = this.Ua.y - c.f.ca.y),
          (f = e.g.x * a + e.h.x * k),
          (k = e.g.y * a + e.h.y * k),
          (a = f),
          this.da.Rs(
            this.wk,
            -(p.x + -r * k - m.x - -n * h),
            -(p.y + r * a - m.y - n * g),
          ),
          (this.G.x += this.wk.x),
          (this.G.y += this.wk.y),
          (m.x -= q * this.wk.x),
          (m.y -= q * this.wk.y),
          (n -= u * (g * this.wk.y - h * this.wk.x)),
          (p.x += t * this.wk.x),
          (p.y += t * this.wk.y),
          (r += v * (a * this.wk.y - k * this.wk.x));
      b.u.W(m);
      b.U = n;
      c.u.W(p);
      c.U = r;
    };
    K.prototype.Sh = function () {
      var b,
        c,
        e = this.Xa,
        f = this.Ka,
        g = 0,
        h,
        k,
        m;
      if (this.fi && this.Hb != l.Ug) {
        b = f.f.$ - e.f.$ - this.Gx;
        var n = 0;
        this.Hb == l.Uo
          ? ((b = d.wc(b - this.Qt, -a.cB, a.cB)),
            (n = -this.$g * b),
            (g = d.jf(b)))
          : this.Hb == l.sl
            ? ((b -= this.Qt),
              (g = -b),
              (b = d.wc(b + a.Lq, -a.cB, 0)),
              (n = -this.$g * b))
            : this.Hb == l.Gf &&
              ((g = b -= this.Lx),
              (b = d.wc(b - a.Lq, 0, a.cB)),
              (n = -this.$g * b));
        e.f.$ -= e.ma * n;
        f.f.$ += f.ma * n;
        e.Ud();
        f.Ud();
      }
      c = e.R.P;
      n = this.Ta.x - e.f.ca.x;
      b = this.Ta.y - e.f.ca.y;
      h = c.g.x * n + c.h.x * b;
      b = c.g.y * n + c.h.y * b;
      n = h;
      c = f.R.P;
      var p = this.Ua.x - f.f.ca.x,
        q = this.Ua.y - f.f.ca.y;
      h = c.g.x * p + c.h.x * q;
      q = c.g.y * p + c.h.y * q;
      p = h;
      k = f.f.J.x + p - e.f.J.x - n;
      m = f.f.J.y + q - e.f.J.y - b;
      var t = k * k + m * m;
      c = Math.sqrt(t);
      h = e.aa;
      var u = f.aa,
        v = e.ma,
        w = f.ma,
        z = 10 * a.pc;
      t > z * z &&
        ((t = 1 / (h + u)),
        (k = t * -k),
        (m = t * -m),
        (e.f.J.x -= 0.5 * h * k),
        (e.f.J.y -= 0.5 * h * m),
        (f.f.J.x += 0.5 * u * k),
        (f.f.J.y += 0.5 * u * m),
        (k = f.f.J.x + p - e.f.J.x - n),
        (m = f.f.J.y + q - e.f.J.y - b));
      this.bk.g.x = h + u;
      this.bk.h.x = 0;
      this.bk.g.y = 0;
      this.bk.h.y = h + u;
      this.ck.g.x = v * b * b;
      this.ck.h.x = -v * n * b;
      this.ck.g.y = -v * n * b;
      this.ck.h.y = v * n * n;
      this.xv.g.x = w * q * q;
      this.xv.h.x = -w * p * q;
      this.xv.g.y = -w * p * q;
      this.xv.h.y = w * p * p;
      this.zf.vq(this.bk);
      this.zf.mz(this.ck);
      this.zf.mz(this.xv);
      this.zf.xq(K.IK, -k, -m);
      k = K.IK.x;
      m = K.IK.y;
      e.f.J.x -= e.aa * k;
      e.f.J.y -= e.aa * m;
      e.f.$ -= e.ma * (n * m - b * k);
      f.f.J.x += f.aa * k;
      f.f.J.y += f.aa * m;
      f.f.$ += f.ma * (p * m - q * k);
      e.Ud();
      f.Ud();
      return c <= a.pc && g <= a.Lq;
    };
    g.fe.push(function () {
      g.i.T.at.IK = new e();
    });
    g.Ec(O, g.i.T.Sa);
    O.prototype.Ba = g.i.T.Sa.prototype;
    O.Xm = function () {
      g.i.T.Sa.Sa.apply(this, arguments);
      this.Me = new e();
      this.Ne = new e();
    };
    O.prototype.Xm = function () {
      this.Ba.Sa.call(this);
      this.type = l.zB;
      this.Me.Set(0, 0);
      this.Ne.Set(0, 0);
      this.Px = this.X3 = this.RT = this.oQ = this.Bp = 0;
      this.Nw = this.en = !1;
    };
    O.prototype.Yb = function (a, b, c) {
      this.gc = a;
      this.qc = b;
      this.Me = this.gc.Ng(c);
      this.Ne = this.qc.Ng(c);
      this.Bp = this.qc.Zi() - this.gc.Zi();
    };
    g.Ec(Q, g.i.T.ta);
    Q.prototype.Ba = g.i.T.ta.prototype;
    Q.ow = function () {
      g.i.T.ta.ta.apply(this, arguments);
      this.Mi = new e();
      this.Ni = new e();
      this.G = new f();
      this.da = new c();
    };
    Q.prototype.ow = function (a) {
      this.Ba.ta.call(this, a);
      this.Mi.W(a.Me);
      this.Ni.W(a.Ne);
      this.Gx = a.Bp;
      this.G.qb();
      this.da = new c();
    };
    Q.prototype.yi = function (a) {
      var b,
        c,
        d = this.Xa,
        e = this.Ka;
      b = d.R.P;
      var f = this.Mi.x - d.f.ca.x,
        g = this.Mi.y - d.f.ca.y;
      c = b.g.x * f + b.h.x * g;
      g = b.g.y * f + b.h.y * g;
      f = c;
      b = e.R.P;
      var h = this.Ni.x - e.f.ca.x,
        k = this.Ni.y - e.f.ca.y;
      c = b.g.x * h + b.h.x * k;
      k = b.g.y * h + b.h.y * k;
      h = c;
      b = d.aa;
      c = e.aa;
      var l = d.ma,
        m = e.ma;
      this.da.g.x = b + c + g * g * l + k * k * m;
      this.da.h.x = -g * f * l - k * h * m;
      this.da.hb.x = -g * l - k * m;
      this.da.g.y = this.da.h.x;
      this.da.h.y = b + c + f * f * l + h * h * m;
      this.da.hb.y = f * l + h * m;
      this.da.g.z = this.da.hb.x;
      this.da.h.z = this.da.hb.y;
      this.da.hb.z = l + m;
      a.Tj
        ? ((this.G.x *= a.ie),
          (this.G.y *= a.ie),
          (this.G.z *= a.ie),
          (d.u.x -= b * this.G.x),
          (d.u.y -= b * this.G.y),
          (d.U -= l * (f * this.G.y - g * this.G.x + this.G.z)),
          (e.u.x += c * this.G.x),
          (e.u.y += c * this.G.y),
          (e.U += m * (h * this.G.y - k * this.G.x + this.G.z)))
        : this.G.qb();
    };
    Q.prototype.Th = function () {
      var a,
        b,
        c = this.Xa,
        d = this.Ka,
        e = c.u,
        g = c.U,
        h = d.u,
        k = d.U,
        l = c.aa,
        m = d.aa,
        n = c.ma,
        p = d.ma;
      a = c.R.P;
      var q = this.Mi.x - c.f.ca.x,
        t = this.Mi.y - c.f.ca.y;
      b = a.g.x * q + a.h.x * t;
      t = a.g.y * q + a.h.y * t;
      q = b;
      a = d.R.P;
      var u = this.Ni.x - d.f.ca.x,
        v = this.Ni.y - d.f.ca.y;
      b = a.g.x * u + a.h.x * v;
      v = a.g.y * u + a.h.y * v;
      u = b;
      a = h.x - k * v - e.x + g * t;
      b = h.y + k * u - e.y - g * q;
      var w = k - g,
        z = new f();
      this.da.Qv(z, -a, -b, -w);
      this.G.qs(z);
      e.x -= l * z.x;
      e.y -= l * z.y;
      g -= n * (q * z.y - t * z.x + z.z);
      h.x += m * z.x;
      h.y += m * z.y;
      k += p * (u * z.y - v * z.x + z.z);
      c.U = g;
      d.U = k;
    };
    Q.prototype.Sh = function () {
      var b,
        c,
        e = this.Xa,
        g = this.Ka;
      b = e.R.P;
      var h = this.Mi.x - e.f.ca.x,
        k = this.Mi.y - e.f.ca.y;
      c = b.g.x * h + b.h.x * k;
      k = b.g.y * h + b.h.y * k;
      h = c;
      b = g.R.P;
      var l = this.Ni.x - g.f.ca.x,
        m = this.Ni.y - g.f.ca.y;
      c = b.g.x * l + b.h.x * m;
      m = b.g.y * l + b.h.y * m;
      l = c;
      b = e.aa;
      c = g.aa;
      var n = e.ma,
        p = g.ma,
        q = g.f.J.x + l - e.f.J.x - h,
        t = g.f.J.y + m - e.f.J.y - k,
        u = g.f.$ - e.f.$ - this.Gx,
        v = 10 * a.pc,
        w = Math.sqrt(q * q + t * t),
        z = d.jf(u);
      w > v && ((n *= 1), (p *= 1));
      this.da.g.x = b + c + k * k * n + m * m * p;
      this.da.h.x = -k * h * n - m * l * p;
      this.da.hb.x = -k * n - m * p;
      this.da.g.y = this.da.h.x;
      this.da.h.y = b + c + h * h * n + l * l * p;
      this.da.hb.y = h * n + l * p;
      this.da.g.z = this.da.hb.x;
      this.da.h.z = this.da.hb.y;
      this.da.hb.z = n + p;
      v = new f();
      this.da.Qv(v, -q, -t, -u);
      e.f.J.x -= b * v.x;
      e.f.J.y -= b * v.y;
      e.f.$ -= n * (h * v.y - k * v.x + v.z);
      g.f.J.x += c * v.x;
      g.f.J.y += c * v.y;
      g.f.$ += p * (l * v.y - m * v.x + v.z);
      e.Ud();
      g.Ud();
      return w <= a.pc && z <= a.Lq;
    };
    g.Ec(R, g.i.T.Sa);
    R.prototype.Ba = g.i.T.Sa.prototype;
    R.pw = function () {
      g.i.T.Sa.Sa.apply(this, arguments);
      this.Me = new e();
      this.Ne = new e();
    };
    R.prototype.pw = function () {
      this.Ba.Sa.call(this);
      this.type = l.cP;
      this.Bp = 0;
    };
    R.prototype.Yb = function (a, b, c) {
      this.gc = a;
      this.qc = b;
      this.Me.W(this.gc.Ng(c));
      this.Ne.W(this.qc.Ng(c));
      this.Bp = this.qc.Zi() - this.gc.Zi();
    };
  })();
  (function () {
    var a = g.i.Wh;
    a.Wh = function () {};
    a.prototype.Wh = function () {};
  })();
  var Ba;
  for (Ba = 0; Ba < g.fe.length; ++Ba) g.fe[Ba]();
  delete g.fe;
  z.TV = 0;
  z.vL = 1;
  z.tL = 2;
  z.sL = 3;
  z.rL = 4;
  z.uL = 5;
  z.wL = 6;
  z.UV = 7;
  z.ZV = 8;
  z.SU = 0;
  z.$U = 1;
  z.XU = 2;
  z.WU = 3;
  z.VU = 4;
  z.UU = 5;
  z.YU = 6;
  z.cV = 7;
  z.RU = 8;
  z.gV = 9;
  z.jV = 10;
  z.fV = 11;
  z.QU = 12;
  z.ZU = 13;
  z.TU = 14;
  z.hV = 15;
  z.kV = 16;
  z.aV = 17;
  z.dV = 18;
  z.bV = 19;
  z.eV = 20;
  z.pX = 0;
  z.BX = 1;
  z.xX = 2;
  z.uX = 3;
  z.tX = 4;
  z.sX = 5;
  z.AX = 6;
  z.GX = 7;
  z.qX = 8;
  z.nX = 9;
  z.oX = 10;
  z.vX = 11;
  z.wX = 12;
  z.yX = 13;
  z.zX = 14;
  z.CX = 15;
  z.DX = 16;
  z.rX = 17;
  z.EX = 18;
  z.HX = 19;
  z.FX = 20;
  z.IX = 21;
  z.el = 0;
  z.HL = 1;
  z.DY = 2;
  z.iL = 3;
  z.dv = 0;
  z.y$ = 1;
  z.hv = 2;
  z.z_ = 0;
  z.VY = 1;
  z.KX = 2;
  z.ki = [
    0, 26784e4, 50976e4, 7776e5, 11232e5, 130464e4, 156384e4, 183168e4,
    209952e4, 235872e4, 262656e4, 288576e4,
  ];
  z.q6 = "I II III IV V VI VII VIII IX X XI XII".split(" ");
  z.prototype = u.extend(new Oa(), {
    $w: function () {
      return 9;
    },
    cH: function (a, b) {
      this.o.VD(b.bO);
      this.o.WD(b.cO);
      this.o.ab = 0;
      this.o.bb = 0;
      this.o.Ty(a.B());
      this.o.Ry(a.B());
      a.Qa(64);
      this.Xk = a.B();
      this.Wk = a.B();
      this.tK = 0 == a.B() ? !1 : !0;
      this.PS = 0 == a.B() ? !1 : !0;
      this.Ly = a.B();
      this.ri = a.eK();
      8 == this.ri.Oc && "SYSTEM" == this.ri.Bh.toUpperCase() && this.ri.Da();
      this.ri.uk();
      this.Po = a.Qe();
      a.Qa(80);
      this.RS = 0 == a.B() ? !1 : !0;
      this.oO = a.Qe();
      this.QS = 0 == a.B() ? !1 : !0;
      this.nO = a.Qe();
      this.OS = 0 == a.B() ? !1 : !0;
      this.mO = a.Qe();
      this.WS = a.B();
      this.TS = a.B();
      this.SS = a.B();
      a.Qa(80);
      var c = a.B(),
        d = a.B(),
        e = a.B();
      this.Ak = 36e4 * c + 6e3 * d + 100 * e;
      this.Ny = a.B();
      this.My = a.B();
      this.uK = !0;
      this.XH = new Date();
      this.EK = new Date();
      this.le = new Date();
      this.kc = this.mt = 0;
      return !0;
    },
    PB: function () {
      var a = 0;
      this.uK && ((this.uK = !1), (a = Oa.CF));
      var b,
        c = this.ke();
      b = Math.floor(
        z.ki[c.getMonth()] +
          864e4 * (c.getDate() - 1) +
          36e4 * c.getHours() +
          6e3 * c.getMinutes() +
          100 * c.getSeconds() +
          c.getMilliseconds() / 10,
      );
      (b < this.mt || (b > this.mt + 200 && 0 != this.mt)) &&
        0 != this.kc &&
        ((this.Hd += Math.abs(this.mt - this.kc)), (this.kc = b));
      this.mt = b;
      switch (this.Xk) {
        case z.el:
        case z.HL:
        case z.DY:
          this.le.getSeconds() != c.getSeconds() &&
            (this.le.setSeconds(c.getSeconds()),
            this.o.lu(z.vL, this.o.c.s.ld),
            (a = Oa.CF),
            this.le.getMinutes() != c.getMinutes() &&
              (this.le.setMinutes(c.getMinutes()),
              this.o.lu(z.tL, this.o.c.s.ld),
              this.le.getHours() != c.getHours() &&
                (this.le.setHours(c.getHours()),
                this.o.lu(z.sL, this.o.c.s.ld))));
          break;
        case z.iL:
          this.le.getHours() != c.getHours() &&
            (this.le.setHours(c.getHours()),
            this.le.getDate() != c.getDate() &&
              (this.le.setDate(c.getDate()),
              this.o.lu(z.rL, this.o.c.s.ld),
              (a = Oa.CF),
              this.le.getMonth() != c.getMonth() &&
                (this.le.setMonth(c.getMonth()),
                this.o.lu(z.uL, this.o.c.s.ld),
                this.le.FH != c.FH &&
                  ((this.le.FH = c.FH), this.o.lu(z.wL, this.o.c.s.ld)))));
      }
      this.le.setTime(c.getTime());
      return a;
    },
    MO: function (a, b, c) {
      var d = new va(),
        e;
      d.left = b + this.o.w;
      d.right = d.left + this.o.ea;
      d.top = c + this.o.A;
      d.bottom = d.top + this.o.ga;
      var f = this.le.getHours(),
        g = Math.floor(this.le.getMilliseconds() / 10);
      c = this.le.getMinutes();
      b = this.le.getSeconds();
      var k = this.le.getDate(),
        p = this.le.getMonth() + 1;
      switch (this.Xk) {
        case z.el:
          z.dv == this.Wk
            ? (11 < f && (f -= 12),
              2 != this.Ly
                ? ((e = new va()),
                  (e.left = d.left + this.Ny / 2),
                  (e.right = d.right - this.Ny / 2),
                  (e.top = d.top + this.My / 2),
                  (e.bottom = d.bottom - this.My / 2),
                  this.sA(a, f, c, b, e))
                : this.sA(a, f, c, b, d))
            : (0 != this.kc
                ? ((b =
                    z.ki[p - 1] +
                    864e4 * (k - 1) +
                    36e4 * f +
                    6e3 * c +
                    100 * b +
                    g),
                  (c = this.Hd + (b - this.kc)))
                : (c = this.Hd),
              z.hv == this.Wk && ((c = this.Ak - c), 0 > c && (c = 0)),
              (f = Math.floor(c / 36e4)),
              11 < f && (f -= 12),
              (b = Math.floor((c - 36e4 * f) / 6e3)),
              (c = Math.floor((c - 36e4 * f - 6e3 * b) / 100)),
              2 != this.Ly
                ? ((e = new va()),
                  (e.left = d.left + this.Ny / 2),
                  (e.right = d.right - this.Ny / 2),
                  (e.top = d.top + this.My / 2),
                  (e.bottom = d.bottom - this.My / 2),
                  this.sA(a, f, b, c, e))
                : this.sA(a, f, b, c, d));
          break;
        case z.HL:
          switch (this.WS) {
            case 0:
              z.dv == this.Wk
                ? ((e = " AM"),
                  11 < f && ((f -= 12), (e = "")),
                  (f = f.toString()),
                  (f = this.Wf(f)),
                  (g = c.toString()),
                  (g = this.Wf(g)),
                  (b = f + ":" + g + e))
                : (0 != this.kc
                    ? ((b =
                        z.ki[p - 1] +
                        864e4 * (k - 1) +
                        36e4 * f +
                        6e3 * c +
                        100 * b +
                        g),
                      (c = this.Hd + (b - this.kc)))
                    : (c = this.Hd),
                  z.hv == this.Wk && ((c = this.Ak - c), 0 > c && (c = 0)),
                  (f = Math.floor(c / 36e4)),
                  11 < f && (f -= 12),
                  (b = Math.floor((c - 36e4 * f) / 6e3)),
                  (f = f.toString()),
                  (f = this.Wf(f)),
                  (g = b.toString()),
                  (g = this.Wf(g)),
                  (b = f + ":" + g));
              this.tA(a, b, d);
              break;
            case 1:
              z.dv == this.Wk
                ? ((e = " AM"),
                  12 < f && ((f -= 12), (e = "")),
                  (f = f.toString()),
                  (f = this.Wf(f)),
                  (g = c.toString()),
                  (g = this.Wf(g)),
                  (b = b.toString()),
                  (b = this.Wf(b)),
                  (b = f + ":" + g + ":" + b + e))
                : (0 != this.kc
                    ? ((b =
                        z.ki[p - 1] +
                        864e4 * (k - 1) +
                        36e4 * f +
                        6e3 * c +
                        100 * b +
                        g),
                      (c = this.Hd + (b - this.kc)))
                    : (c = this.Hd),
                  z.hv == this.Wk && ((c = this.Ak - c), 0 > c && (c = 0)),
                  (f = Math.floor(c / 36e4)),
                  11 < f && (f -= 12),
                  (b = Math.floor((c - 36e4 * f) / 6e3)),
                  (c = Math.floor((c - 36e4 * f - 6e3 * b) / 100)),
                  11 < f && (f -= 12),
                  (f = f.toString()),
                  (f = this.Wf(f)),
                  (g = b.toString()),
                  (g = this.Wf(g)),
                  (b = c.toString()),
                  (b = this.Wf(b)),
                  (b = f + ":" + g + ":" + b));
              this.tA(a, b, d);
              break;
            case 2:
              z.dv == this.Wk
                ? ((f = f.toString()), (f = this.Wf(f)), (g = c.toString()))
                : (0 != this.kc
                    ? ((b =
                        z.ki[p - 1] +
                        864e4 * (k - 1) +
                        36e4 * f +
                        6e3 * c +
                        100 * b +
                        g),
                      (c = this.Hd + (b - this.kc)))
                    : (c = this.Hd),
                  z.hv == this.Wk && ((c = this.Ak - c), 0 > c && (c = 0)),
                  (f = Math.floor(c / 36e4)),
                  (b = Math.floor((c - 36e4 * f) / 6e3)),
                  (f = f.toString()),
                  (f = this.Wf(f)),
                  (g = b.toString()));
              g = this.Wf(g);
              this.tA(a, f + ":" + g, d);
              break;
            case 3:
              z.dv == this.Wk
                ? ((f = f.toString()),
                  (f = this.Wf(f)),
                  (g = c.toString()),
                  (g = this.Wf(g)),
                  (b = b.toString()))
                : (0 != this.kc
                    ? ((b =
                        z.ki[p - 1] +
                        864e4 * (k - 1) +
                        36e4 * f +
                        6e3 * c +
                        100 * b +
                        g),
                      (c = this.Hd + (b - this.kc)))
                    : (c = this.Hd),
                  z.hv == this.Wk && ((c = this.Ak - c), 0 > c && (c = 0)),
                  (f = Math.floor(c / 36e4)),
                  (b = Math.floor((c - 36e4 * f) / 6e3)),
                  (c = Math.floor((c - 36e4 * f - 6e3 * b) / 100)),
                  (f = f.toString()),
                  (f = this.Wf(f)),
                  (g = b.toString()),
                  (g = this.Wf(g)),
                  (b = c.toString())),
                (b = this.Wf(b)),
                this.tA(a, f + ":" + g + ":" + b, d);
          }
          break;
        case z.iL:
          switch (this.TS) {
            case z.z_:
              e = "dd/mm/yyyy";
              break;
            case z.VY:
              e = "dddd dd mmmm yyyy";
              break;
            case z.KX:
              switch (this.SS) {
                case 0:
                  e = "dd/mm/yyyy";
                  break;
                case 1:
                  e = "dd mmmm yyyy";
                  break;
                case 2:
                  e = "dd mmmm, yyyy";
                  break;
                case 3:
                  e = "mmmm dd, yyyy";
                  break;
                case 4:
                  e = "dd-mmm-yyyy";
                  break;
                case 5:
                  e = "mmmm, yyyy";
                  break;
                case 6:
                  e = "mmm-yy";
              }
          }
          b = this.le.format(e);
          this.y_(a, b, d);
      }
    },
    Wf: function (a) {
      2 > a.length && (a = "0" + a);
      return a;
    },
    sA: function (a, b, c, d, e) {
      var f = Array(3);
      f[0] = new X();
      f[1] = new X();
      f[2] = new X();
      f[0].y = e.top + (e.bottom - e.top) / 2;
      f[0].x = e.left + (e.right - e.left) / 2;
      this.VS = f[0].x;
      this.US = f[0].y;
      e =
        e.right - e.left > e.bottom - e.top
          ? (e.bottom - e.top) / 2
          : (e.right - e.left) / 2;
      e--;
      a.lineCap = "round";
      1 == this.OS &&
        ((f[1].x =
          f[0].x + (e / 1.5) * Math.cos(0.523 * (b + Number(c) / 60) - 1.57)),
        (f[1].y =
          f[0].y + (e / 1.5) * Math.sin(0.523 * (b + Number(c) / 60) - 1.57)),
        (this.XS = f[1].x),
        (this.YS = f[1].y),
        a.cf(f[0].x, f[0].y, f[1].x, f[1].y, this.mO, 2, 0, 0));
      1 == this.QS &&
        ((f[1].x = f[0].x + Math.cos(0.104 * c - 1.57) * e),
        (f[1].y = f[0].y + Math.sin(0.104 * c - 1.57) * e),
        (this.ZS = f[1].x),
        (this.$S = f[1].y),
        a.cf(f[0].x, f[0].y, f[1].x, f[1].y, this.nO, 2, 0, 0));
      1 == this.RS &&
        ((f[1].x = f[0].x + Math.cos(0.104 * Number(d) - 1.57) * e),
        (f[1].y = f[0].y + Math.sin(0.104 * Number(d) - 1.57) * e),
        (this.aT = f[1].x),
        (this.bT = f[1].y),
        a.cf(f[0].x, f[0].y, f[1].x, f[1].y, this.oO, 1, 0, 0));
      if (1 == this.PS)
        for (b = 1; 13 > b; b++)
          (f[1].x = f[0].x + 0.9 * Math.cos(0.523 * b - 1.57) * e),
            (f[1].y = f[0].y + 0.9 * Math.sin(0.523 * b - 1.57) * e),
            (f[2].x = f[0].x + Math.cos(0.523 * b - 1.57) * e),
            (f[2].y = f[0].y + Math.sin(0.523 * b - 1.57) * e),
            a.cf(f[1].x, f[1].y, f[2].x, f[2].y, this.Po, 1, 0, 0);
      if (2 != this.Ly) {
        var g,
          k = new va();
        null == this.Kg && (this.Kg = Array(13));
        this.yn || (this.yn = new Ca(this.C.m, 2, 2));
        for (b = 1; 13 > b; b++) {
          var p, n;
          c = 0 == this.Ly ? b.toString() : z.q6[b - 1];
          d = this.yn.measureText(c, this.ri);
          g = this.ri.Oc;
          p = f[0].x + Math.cos(0.523 * b - 1.57) * e;
          n = f[0].y + Math.sin(0.523 * b - 1.57) * e;
          switch (b) {
            case 1:
            case 2:
              k.left = p;
              k.bottom = n;
              k.right = k.left + d;
              k.top = k.bottom - g;
              break;
            case 3:
              k.left = p + 2;
              k.top = n - g / 2;
              k.right = k.left + d;
              k.bottom = k.top + g;
              break;
            case 4:
            case 5:
              k.left = p;
              k.top = n;
              k.right = k.left + d;
              k.bottom = k.top + g;
              break;
            case 6:
              k.left = p - d / 2;
              k.top = n + 1;
              k.right = k.left + d;
              k.bottom = k.top + g;
              break;
            case 7:
            case 8:
              k.right = p;
              k.top = n;
              k.left = k.right - d;
              k.bottom = k.top + g;
              break;
            case 9:
              k.right = p - 2;
              k.top = n - g / 2;
              k.left = k.right - d;
              k.bottom = k.top + g;
              break;
            case 10:
            case 11:
              k.right = p;
              k.bottom = n;
              k.left = k.right - d;
              k.top = k.bottom - g;
              break;
            case 12:
              (k.left = p - d / 2),
                (k.bottom = n - 1),
                (k.right = k.left + d),
                (k.top = k.bottom - g);
          }
          this.Kg[b] ||
            ((this.Kg[b] = new Ca(this.C.m, d, g)),
            this.Kg[b].ms(c, u.cq | u.eq, null, this.ri, this.Po));
          this.Kg[b].Zc(
            a,
            k.left + (k.right - k.left) / 2 - d / 2,
            k.top + (k.bottom - k.top) / 2 + g / 2 - g + 2,
          );
        }
      }
      1 == this.tK &&
        (a.pD(f[0].x - e, f[0].y - e, 2 * e, 2 * e, 1, this.Po, 0, 0),
        a.pD(f[0].x - e, f[0].y - e, 2 * e + 1, 2 * e + 1, 1, this.Po, 0, 0));
    },
    tA: function (a, b, c) {
      this.yn || (this.yn = new Ca(this.C.m, 2, 2));
      var d = this.yn.measureText(b, this.ri),
        e = this.ri.Oc,
        f = c.left + (c.right - c.left) / 2 - d / 2,
        g = c.top + (c.bottom - c.top) / 2 - e / 2;
      if (null == this.Lb || b != this.o4)
        (this.o4 = b),
          (this.Lb = new Ca(this.C.m, d, e)),
          this.Lb.ms(b, u.eq | u.cq, null, this.ri, this.Po);
      this.Lb.Zc(a, Math.floor(f), Math.floor(g), 0, 0);
      1 == this.tK &&
        a.yy(
          c.left + 1,
          c.top + 1,
          c.right - c.left,
          c.bottom - c.top,
          this.Po,
          2,
          0,
          0,
        );
    },
    y_: function (a, b, c) {
      this.yn || (this.yn = new Ca(this.C.m, 2, 2));
      var d = this.yn.measureText(b, this.ri),
        e = this.ri.Oc,
        f = c.left + (c.right - c.left) / 2 - d / 2;
      c = c.top + (c.bottom - c.top) / 2 - e / 2;
      if (null == this.Lb || this.VR != b)
        (this.VR = b),
          (this.Lb = new Ca(this.C.m, d, e)),
          this.Lb.ms(b, u.eq | u.cq, null, this.ri, this.Po);
      this.Lb.Zc(a, Math.floor(f), Math.floor(c));
    },
    ke: function () {
      var a = new Date();
      a.setTime(this.XH.getTime() + (a.getTime() - this.EK.getTime()));
      return a;
    },
    Oq: function (a) {
      this.XH.setTime(a.getTime());
      this.le.setTime(a.getTime());
      this.EK = new Date();
    },
    Aw: function (a, b) {
      switch (a) {
        case z.TV:
          return this.nW(b);
        case z.vL:
          return this.Ls();
        case z.tL:
          return this.Ls();
        case z.sL:
          return this.Ls();
        case z.rL:
          return this.Ls();
        case z.uL:
          return this.Ls();
        case z.wL:
          return this.Ls();
        case z.UV:
          return this.oW(b);
        case z.ZV:
          return this.o.lb;
      }
      return !1;
    },
    nW: function (a) {
      if (0 != this.kc) {
        var b = this.ke();
        return this.zw(
          a,
          0,
          10 *
            (this.Hd +
              (Math.floor(
                z.ki[b.getMonth()] +
                  864e4 * (b.getDate() - 1) +
                  36e4 * b.getHours() +
                  6e3 * b.getMinutes() +
                  100 * b.getSeconds() +
                  b.getMilliseconds() / 10,
              ) -
                this.kc)),
        );
      }
      return this.zw(a, 0, 10 * this.Hd);
    },
    zw: function (a, b, c) {
      var d = a.L[b].Lg;
      switch (a.L[b].ol) {
        case 0:
          return c == d;
        case 1:
          return c != d;
        case 2:
          return c <= d;
        case 3:
          return c < d;
        case 4:
          return c >= d;
        case 5:
          return c > d;
      }
      return !1;
    },
    Ls: function () {
      return 0 != (this.o.wa & aa.UE) || this.C.Hu == sEventCount ? !0 : !1;
    },
    oW: function (a) {
      var b;
      if (0 != this.kc)
        (b = this.ke()),
          (b =
            this.Ak -
            (this.Hd +
              (Math.floor(
                z.ki[b.getMonth()] +
                  864e4 * (b.getDate() - 1) +
                  36e4 * b.getHours() +
                  6e3 * b.getMinutes() +
                  100 * b.getSeconds() +
                  b.getMilliseconds() / 10,
              ) -
                this.kc)));
      else return (b = this.Ak - this.Hd), this.zw(a, 0, 10 * b);
      0 > b && (b = 0);
      return this.zw(a, 0, 10 * b);
    },
    L8: function () {
      return this.o.lb;
    },
    action: function (a, b) {
      switch (a) {
        case z.SU:
          this.F_(b.La(this.C, 0));
          break;
        case z.$U:
          this.L_(b.La(this.C, 0));
          break;
        case z.XU:
          this.J_(b.La(this.C, 0));
          break;
        case z.WU:
          this.I_(b.La(this.C, 0));
          break;
        case z.VU:
          b.La(this.C, 0);
          break;
        case z.UU:
          this.H_(b.La(this.C, 0));
          break;
        case z.YU:
          this.K_(b.La(this.C, 0));
          break;
        case z.cV:
          this.S_(b.La(this.C, 0));
          break;
        case z.RU:
          this.v_();
          break;
        case z.gV:
          this.W_();
          break;
        case z.jV:
          this.Y_();
          break;
        case z.fV:
          this.T_();
          break;
        case z.QU:
          this.BY();
          break;
        case z.ZU:
          this.aN(b.HP(this.C, 0));
          break;
        case z.TU:
          this.G_(b.IP(this.C, 0));
          break;
        case z.hV:
          this.X_();
          break;
        case z.kV:
          this.Z_();
          break;
        case z.aV:
          this.O_(b.La(this.C, 0));
          break;
        case z.dV:
          this.Q_(b.La(this.C, 0));
          break;
        case z.bV:
          this.P_(b.La(this.C, 0));
          break;
        case z.eV:
          this.R_(b.La(this.C, 0));
      }
    },
    F_: function (a) {
      if (0 <= a && 100 > a) {
        var b = this.ke();
        b.setMilliseconds(10 * a);
        this.Oq(b);
      }
    },
    L_: function (a) {
      if (0 <= a && 60 > a) {
        var b = this.ke();
        b.setSeconds(a);
        this.Oq(b);
      }
    },
    J_: function (a) {
      if (0 <= a && 60 > a) {
        var b = this.ke();
        b.setMinutes(a);
        this.Oq(b);
      }
    },
    I_: function (a) {
      if (0 <= a && 24 > a) {
        var b = this.ke();
        b.setHours(a);
        this.Oq(b);
      }
    },
    z$: function () {},
    H_: function (a) {
      if (1 <= a && 32 > a) {
        var b = this.ke();
        b.setDate(a);
        this.Oq(b);
      }
    },
    K_: function (a) {
      if (1 <= a && 13 > a) {
        var b = this.ke();
        b.setMonth(a - 1);
        this.Oq(b);
      }
    },
    S_: function (a) {
      if (1979 < a && 2100 > a) {
        var b = this.ke();
        b.setFullYear(a);
        this.Oq(b);
      }
    },
    v_: function () {
      this.Hd = this.kc = 0;
    },
    W_: function () {
      if (0 == this.kc) {
        var a = this.ke();
        this.kc = Math.floor(
          z.ki[a.getMonth()] +
            864e4 * (a.getDate() - 1) +
            36e4 * a.getHours() +
            6e3 * a.getMinutes() +
            100 * a.getSeconds() +
            a.getMilliseconds() / 10,
        );
      }
    },
    Y_: function () {
      if (0 != this.kc) {
        var a = this.ke();
        this.Hd +=
          Math.floor(
            z.ki[a.getMonth()] +
              864e4 * (a.getDate() - 1) +
              36e4 * a.getHours() +
              6e3 * a.getMinutes() +
              100 * a.getSeconds() +
              a.getMilliseconds() / 10,
          ) - this.kc;
        this.kc = 0;
      }
    },
    T_: function () {
      this.o.Pp();
    },
    BY: function () {
      this.o.Yo();
    },
    aN: function (a) {
      a.vP && this.o.setPosition(a.x, a.y);
    },
    G_: function (a) {
      this.Ak = a / 10;
      this.Hd = this.kc = 0;
    },
    X_: function () {
      if (0 == this.kc) {
        var a = this.ke();
        this.kc = Math.floor(
          z.ki[a.getMonth()] +
            864e4 * (a.getDate() - 1) +
            36e4 * a.getHours() +
            6e3 * a.getMinutes() +
            100 * a.getSeconds() +
            a.getMilliseconds() / 10,
        );
      }
    },
    Z_: function () {
      if (0 != this.kc) {
        var a = this.ke();
        this.Hd +=
          Math.floor(
            z.ki[a.getMonth()] +
              864e4 * (a.getDate() - 1) +
              36e4 * a.getHours() +
              6e3 * a.getMinutes() +
              100 * a.getSeconds() +
              a.getMilliseconds() / 10,
          ) - this.kc;
        this.kc = 0;
      }
    },
    O_: function (a) {
      this.o.VD(a);
    },
    Q_: function (a) {
      this.o.WD(a);
    },
    P_: function (a) {
      this.o.Ty(a);
    },
    R_: function (a) {
      this.o.Ry(a);
    },
    Rw: function (a) {
      switch (a) {
        case z.pX:
          return this.aY();
        case z.BX:
          return this.uY();
        case z.xX:
          return this.oY();
        case z.uX:
          return this.kY();
        case z.tX:
          return this.gY();
        case z.sX:
          return this.fY();
        case z.AX:
          return this.pY();
        case z.GX:
          return this.yY();
        case z.qX:
          return this.dY();
        case z.nX:
          return this.bY();
        case z.oX:
          return this.cY();
        case z.vX:
          return this.iY();
        case z.wX:
          return this.jY();
        case z.yX:
          return this.mY();
        case z.zX:
          return this.nY();
        case z.CX:
          return this.sY();
        case z.DX:
          return this.tY();
        case z.rX:
          return this.eY();
        case z.EX:
          return this.o.w;
        case z.HX:
          return this.o.A;
        case z.FX:
          return this.o.ea;
        case z.IX:
          return this.xY();
      }
      return 0;
    },
    aY: function () {
      return Math.floor(this.ke().getMilliseconds() / 10);
    },
    uY: function () {
      return this.ke().getSeconds();
    },
    oY: function () {
      return this.ke().getMinutes();
    },
    kY: function () {
      return this.ke().getHours();
    },
    gY: function () {
      return this.ke().getDay();
    },
    fY: function () {
      return this.ke().getDate();
    },
    pY: function () {
      return this.ke().getMonth() + 1;
    },
    yY: function () {
      return this.ke().getFullYear();
    },
    dY: function () {
      if (0 != this.kc) {
        var a = this.ke();
        return (
          this.Hd +
          (Math.floor(
            z.ki[a.getMonth()] +
              864e4 * (a.getDate() - 1) +
              36e4 * a.getHours() +
              6e3 * a.getMinutes() +
              100 * a.getSeconds() +
              a.getMilliseconds() / 10,
          ) -
            this.kc)
        );
      }
      return this.Hd;
    },
    bY: function () {
      return z.el == this.Xk ? this.US + this.C.za : 0;
    },
    cY: function () {
      return z.el == this.Xk ? this.VS + this.C.Ea : 0;
    },
    iY: function () {
      return z.el == this.Xk ? this.XS + this.C.za : 0;
    },
    jY: function () {
      return z.el == this.Xk ? this.YS + this.C.Ea : 0;
    },
    mY: function () {
      return z.el == this.Xk ? this.ZS + this.C.za : 0;
    },
    nY: function () {
      return z.el == this.Xk ? this.$S + this.C.Ea : 0;
    },
    sY: function () {
      return z.el == this.Xk ? this.aT + this.C.za : 0;
    },
    tY: function () {
      return z.el == this.Xk ? this.bT + this.C.Ea : 0;
    },
    eY: function () {
      var a;
      0 != this.kc
        ? ((a = this.ke()),
          (a =
            this.Ak -
            (this.Hd +
              (Math.floor(
                z.ki[a.getMonth()] +
                  864e4 * (a.getDate() - 1) +
                  36e4 * a.getHours() +
                  6e3 * a.getMinutes() +
                  100 * a.getSeconds() +
                  a.getMilliseconds() / 10,
              ) -
                this.kc))))
        : (a = this.Ak - this.Hd);
      0 > a && (a = 0);
      return a;
    },
    A8: function () {
      return this.o.w;
    },
    C8: function () {
      return this.o.A;
    },
    B8: function () {
      return this.o.ea;
    },
    xY: function () {
      return this.o.Ii();
    },
  });
  var Fb = (function () {
    function a(a, b) {
      a = String(a);
      for (b = b || 2; a.length < b; ) a = "0" + a;
      return a;
    }
    var b = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
      c =
        /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
      d = /[^-+\dA-Z]/g;
    return function (e, f, g) {
      var k = Fb;
      1 != arguments.length ||
        "[object String]" != Object.prototype.toString.call(e) ||
        /\d/.test(e) ||
        ((f = e), (e = void 0));
      e = e ? new Date(e) : new Date();
      if (isNaN(e)) throw SyntaxError("invalid date");
      f = String(k.VQ[f] || f || k.VQ["default"]);
      "UTC:" == f.slice(0, 4) && ((f = f.slice(4)), (g = !0));
      var h = g ? "getUTC" : "get",
        n = e[h + "Date"](),
        m = e[h + "Day"](),
        p = e[h + "Month"](),
        q = e[h + "FullYear"](),
        l = e[h + "Hours"](),
        t = e[h + "Minutes"](),
        u = e[h + "Seconds"](),
        h = e[h + "Milliseconds"](),
        z = g ? 0 : e.getTimezoneOffset(),
        C = {
          d: n,
          Paa: a(n),
          Qaa: k.UB.CO[m],
          Raa: k.UB.CO[m + 7],
          Fl: p + 1,
          Uba: a(p + 1),
          Vba: k.UB.nR[p],
          Wba: k.UB.nR[p + 12],
          Uca: String(q).slice(2),
          Vca: q,
          dx: l % 12 || 12,
          Gba: a(l % 12 || 12),
          D8: l,
          E8: a(l),
          W8: t,
          Y8: a(t),
          xca: u,
          Nca: a(u),
          Oba: a(h, 3),
          N8: a(99 < h ? Math.round(h / 10) : h),
          t: 12 > l ? "a" : "p",
          Rca: 12 > l ? "am" : "pm",
          eN: 12 > l ? "A" : "P",
          G$: 12 > l ? "AM" : "PM",
          jaa: g ? "UTC" : (String(e).match(c) || [""]).pop().replace(d, ""),
          aca:
            (0 < z ? "-" : "+") +
            a(100 * Math.floor(Math.abs(z) / 60) + (Math.abs(z) % 60), 4),
          s$: ["th", "st", "nd", "rd"][
            3 < n % 10 ? 0 : ((10 != (n % 100) - (n % 10)) * n) % 10
          ],
        };
      return f.replace(b, function (a) {
        return a in C ? C[a] : a.slice(1, a.length - 1);
      });
    };
  })();
  Fb.VQ = {
    default: "ddd mmm dd yyyy HH:MM:ss",
    Kca: "m/d/yy",
    Sba: "mmm d, yyyy",
    Pba: "mmmm d, yyyy",
    jba: "dddd, mmmm d, yyyy",
    Lca: "h:MM TT",
    Tba: "h:MM:ss TT",
    Qba: "h:MM:ss TT Z",
    Iba: "yyyy-mm-dd",
    Kba: "HH:MM:ss",
    Jba: "yyyy-mm-dd'T'HH:MM:ss",
    Lba: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
  };
  Fb.UB = {
    CO: "Sun Mon Tue Wed Thu Fri Sat Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
      " ",
    ),
    nR: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec January February March April May June July August September October November December".split(
      " ",
    ),
  };
  Date.prototype.format = function (a, b) {
    return Fb(this, a, b);
  };
  Aa.pE = 1;
  Aa.Y6 = 2;
  Aa.zV = 4;
  Aa.CV = 8;
  Aa.BV = 16;
  Aa.$E = 0.05;
  Aa.lV = 0.05;
  Aa.prototype = u.extend(new H(), {
    HW: function (a) {
      for (var b = 0, c = a, d, e = 0; 32 > e; e++)
        (d = c), (c >>= 1), d & 1 && b++;
      if (0 == b) a = 0;
      else
        for (
          b = this.C.random(b), c = a, a = 0;
          !((d = c), (c >>= 1), d & 1 && (b--, 0 > b));
          a++
        );
      return a;
    },
    XB: function (a) {
      a.Qa(1);
      this.Il = (180 * this.HW(a.v())) / 16;
      this.qj = a.v() / 100;
      this.Ag = a.v() / 100;
      this.pj = a.v() / 100;
      this.sj = a.v() / 100;
      this.V = a.v();
      this.Ic = a.B();
      this.sC = a.v();
      this.kp = a.v() * Aa.$E;
      this.tx = a.v() * Aa.lV;
      this.Bx = a.B();
      this.vC = a.B();
      this.wC = a.Nd(p.$Y);
      this.xC = a.Nd(p.aZ);
      this.MQ = (a.v() * g.M.pa.Ab) / 180;
      this.NQ = (a.v() * g.M.pa.Ab) / 180;
      this.vQ = a.v();
      this.uQ = a.v() / 100;
      this.KQ = a.v();
      this.LQ = a.v();
      this.oC = this.nC = 0;
      this.mC = !1;
      this.FI = -1;
      this.Er = !1;
      this.Tb = this.As();
      this.N = null;
      this.ak(this.o, H.Ph);
    },
    gd: function () {
      var a = this.As();
      null != a && a.uy(this.N);
    },
    As: function () {
      var a = 0,
        b;
      for (b = 0; b < this.C.Xb; a++, b++) {
        for (; null == this.C.X[a]; ) a++;
        var c = this.C.X[a];
        if (32 <= c.eb && c.ha.hd == t.Xp && c.ext.identifier == this.sC)
          return c.ext;
      }
      return null;
    },
    Dm: function () {
      if (null != this.N) return !0;
      null == this.Tb &&
        ((this.Tb = this.As()),
        null != this.Tb ||
          bf ||
          (alert("Please drop a Physics - Engine object in the frame."),
          (bf = !0)));
      if (null == this.Tb) return !1;
      var a = 0;
      this.V & Aa.zV && (a |= p.jL);
      this.V & Aa.CV && (a |= p.kL);
      this.N = this.Tb.im(
        g.i.od.nf,
        this.o.w,
        this.o.A,
        this.Il,
        this.Ag,
        this,
        a,
        0,
      );
      this.N.YM(this.kp);
      this.N.B_(this.tx);
      this.o.Wa
        ? ((this.tC = this.o.b.Jb),
          (a = this.C.m.Ia.Ac(this.tC)),
          (this.zI = a.width),
          (this.yI = a.height))
        : ((this.Ic = 0), (this.zI = this.o.ea), (this.yI = this.o.ga));
      this.io();
      a = this.N.R.position;
      this.GI = a.x;
      this.HI = a.y;
      return !0;
    },
    io: function () {
      null != this.qr && this.Tb.Q4(this.N, this.qr);
      this.Hx = this.o.b.Sc;
      this.Ix = this.o.b.Tc;
      switch (this.Ic) {
        case 0:
          this.qr = this.Tb.Pn(
            this.N,
            this,
            this.o.w,
            this.o.A,
            this.zI * this.Hx,
            this.yI * this.Ix,
            this.pj,
            this.qj,
            this.sj,
          );
          break;
        case 1:
          this.qr = this.Tb.qS(
            this.N,
            this,
            this.o.w,
            this.o.A,
            Math.round(
              (((this.o.ea + this.o.ga + 3) / 4) * (this.Hx + this.Ix)) / 2,
            ),
            this.pj,
            this.qj,
            this.sj,
          );
          break;
        case 2:
          this.qr = this.Tb.nu(
            this.N,
            this,
            this.o.w,
            this.o.A,
            this.o.b.Jb,
            this.pj,
            this.qj,
            this.sj,
            this.Hx,
            this.Ix,
          );
      }
    },
    xc: function () {
      switch (this.Bx) {
        case p.gM:
          this.Tb.SJ(
            this,
            this.Bx,
            this.vC,
            this.wC,
            this.xC,
            this.MQ,
            this.NQ,
          );
          break;
        case p.eM:
          this.Tb.SJ(
            this,
            this.Bx,
            this.vC,
            this.wC,
            this.xC,
            this.vQ,
            this.uQ,
          );
          break;
        case p.fM:
          this.Tb.SJ(
            this,
            this.Bx,
            this.vC,
            this.wC,
            this.xC,
            this.KQ,
            this.LQ,
          );
      }
    },
    move: function () {
      if (!this.Dm() || this.Tb.dI()) return !1;
      (this.o.b.Sc == this.Hx && this.o.b.Tc == this.Ix) || this.io();
      this.Tb.L4(this.N, this.nC, this.oC);
      this.u_();
      var a = {};
      this.Tb.uS(this.N, a);
      this.Nt = a.angle;
      if (a.x != this.o.w || a.y != this.o.A)
        (this.o.w = a.x), (this.o.A = a.y), (this.Er = !0), (this.o.b.ka = !0);
      this.KF(this.Nt);
      var a = this.N.R.position,
        b = (a.x - this.GI) * this.Tb.Ca,
        c = (a.y - this.HI) * this.Tb.Ca;
      this.GI = a.x;
      this.HI = a.y;
      a = Math.sqrt(b * b + c * c);
      b = 1;
      0 != (this.C.O.xd & V.Ue) && 0 != this.C.pe && (b = this.C.pe);
      this.o.b.sa = Math.floor((50 * a) / 7 / b);
      this.o.b.sa = Math.min(this.o.b.sa, 250);
      a = O.Mg;
      0 < this.o.b.sa && (a = O.He);
      this.Tm(a);
      this.Ja & Aa.BV && this.nB();
      return 0 != this.o.b.ka;
    },
    KF: function (a) {
      if (a != this.FI)
        if (((this.FI = this.Nt = a), (this.o.b.ka = !0), this.V & Aa.pE))
          (this.o.b.uc = a), (this.o.b.Pa = 0);
        else {
          for (this.o.b.Pa = Math.floor(a / 11.25); 0 > this.o.b.Pa; )
            this.o.b.Pa += 32;
          for (; 32 <= this.o.b.Pa; ) this.o.b.Pa -= 32;
        }
    },
    Kv: function (a) {
      this.qj = a / 100;
      this.qr.Kv(this.qj);
    },
    Qs: function (a) {
      this.Ag = a / 100;
      this.N.XM(this.Ag);
    },
    yA: function (a) {
      this.pj = a / 100;
      this.Tb.S4(this.N);
    },
    Ov: function (a) {
      this.sj = a / 100;
      this.qr.Ov(this.sj);
    },
    setPosition: function (a, b) {
      if (a != this.o.w || b != this.o.A)
        this.Er || ((this.o.w = a), (this.o.A = b)), this.Tb.RJ(this.N, a, b);
    },
    Cd: function (a) {
      a != this.o.w && (this.Er || (this.o.w = a), this.Tb.RJ(this.N, a, p.qA));
    },
    Dd: function (a) {
      a != this.o.A && (this.Er || (this.o.A = a), this.Tb.RJ(this.N, p.qA, a));
    },
    PD: function (a) {
      this.Tb.rS(this.N, a);
      this.Er || this.KF(a);
    },
    zt: function () {
      if (this.V & Aa.pE) {
        for (var a = this.Nt; 360 <= a; ) a -= 360;
        for (; 0 > a; ) a += 360;
        return a;
      }
      return H.TK;
    },
    stop: function () {
      this.M_(!0);
      this.CQ != this.C.Hu && this.Tb.T4(this.N, 0, 0, 0, 0);
    },
    Qu: function (a) {
      this.Tb.sS(this.N, (a / 100) * p.HF);
    },
    ih: function (a) {
      var b = this.N.u;
      this.Tb.tS(
        this.N,
        (a / 100) * p.IF,
        0.001 > Math.abs(b.x) && 0.001 > Math.abs(b.y)
          ? this.Tb.R4(this.N)
          : (180 * Math.atan2(b.y, b.x)) / g.M.pa.Ab,
      );
    },
    Qy: function (a) {
      this.kp = a * Aa.$E;
      this.N.YM(this.kp);
    },
    IH: function () {
      return Math.floor(this.kp / Aa.$E);
    },
    Lh: function (a) {
      this.Tb.rS(this.N, 11.25 * a);
      this.Er || this.KF(11.25 * a);
    },
    Fd: function () {
      return this.V & Aa.pE ? Math.floor(this.Nt / 11.25) : this.o.b.Pa;
    },
    Np: function (a) {
      this.Ag = a / 100;
      this.N.XM(this.Ag);
    },
    ax: function () {
      return this.o.b.sa;
    },
    Yw: function () {
      return 100 * this.Ag;
    },
    GA: function (a) {
      if (null == this.Tb) return 0;
      switch (a) {
        case la.MU:
          this.Qs(this.o.H.oa.rh);
          break;
        case la.LU:
          this.Kv(this.o.H.oa.rh);
          break;
        case la.KU:
          this.Ov(this.o.H.oa.rh);
          break;
        case la.JU:
          this.yA(this.o.H.oa.rh);
          break;
        case la.GU:
          a = (this.o.H.oa.rh[0] / 100) * p.uV;
          var b = this.o.H.oa.rh[1];
          this.Tb.O4(this.N, a, b);
          break;
        case la.EU:
          a = (this.o.H.oa.rh / 100) * p.sV;
          this.Tb.M4(this.N, a);
          break;
        case la.FU:
          a = (this.o.H.oa.rh[0] / 100) * p.tV;
          b = this.o.H.oa.rh[1];
          this.Tb.N4(this.N, a, b);
          break;
        case la.HU:
          a = (this.o.H.oa.rh / 100) * p.vV;
          this.Tb.P4(this.N, a);
          break;
        case la.NU:
          a = (this.o.H.oa.rh[0] / 100) * p.IF;
          b = this.o.H.oa.rh[1];
          this.Tb.tS(this.N, a, b);
          break;
        case la.IU:
          a = (this.o.H.oa.rh / 100) * p.HF;
          this.Tb.sS(this.N, a);
          break;
        case la.OU:
          this.Tb.U4(this.N);
          break;
        case la.PU:
          this.Tb.V4(this.N);
          break;
        case sa.jX:
          return 100 * this.qj;
        case sa.lX:
          return 100 * this.sj;
        case sa.iX:
          return 100 * this.pj;
        case sa.mX:
          return (
            (a = this.N.u),
            (a = (100 * Math.sqrt(a.x * a.x + a.y * a.y)) / p.IF),
            0.001 > a && (a = 0),
            a
          );
        case sa.gX:
          a = this.N.u;
          if (0.001 > Math.abs(a.x) && 0.001 > Math.abs(a.y)) return -1;
          b = (180 * Math.atan2(a.y, a.x)) / 3.141592653589;
          0 > b && (b = 360 + b);
          return b;
        case sa.kX:
          return this.N.da;
        case sa.hX:
          return (100 * this.N.U) / p.HF;
      }
      return 0;
    },
  });
  Ta.IW = 1;
  Ta.Vz = 1;
  Ta.prototype = u.extend(new Ye(), {
    XB: function (a) {
      a.Qa(1);
      this.AQ = a.v();
      this.wQ = a.v();
      this.yQ = a.v();
      this.zQ = a.v();
      this.xQ = a.v();
      this.Gl = this.o.w;
      this.Hl = this.o.A;
      this.o.b.sa = this.AQ;
      this.o.b.Pa = this.pt(this.zQ);
      a = (2 * this.o.b.Pa * Math.PI) / 32;
      this.Ag = this.yQ;
      this.rC = this.wQ;
      this.eg = this.o.b.sa * Math.cos(a);
      this.uf = -this.o.b.sa * Math.sin(a);
      this.V = 0;
      0 == (this.xQ & Ta.IW) && (this.V |= Ta.Vz);
    },
    zt: function (a, b) {
      var c = Math.sqrt(a * a + b * b);
      if (0 == c) return 0;
      c = Math.acos(a / c);
      0 < b && (c = 2 * Math.PI - c);
      return c;
    },
    MH: function (a, b) {
      return Math.sqrt(a * a + b * b);
    },
    move: function () {
      var a = 1;
      0 != (this.o.c.O.xd & V.Ue) && (a = this.o.c.pe);
      if (0 != (this.V & Ta.Vz)) return this.Tm(O.Mg), this.nB(), !1;
      this.uf += (this.Ag / 10) * a;
      var b = this.zt(this.eg, this.uf),
        c = this.MH(this.eg, this.uf),
        c = c - (this.rC / 50) * a;
      0 > c && (c = 0);
      this.eg = c * Math.cos(b);
      this.uf = -c * Math.sin(b);
      this.Gl += (this.eg / 10) * a;
      this.Hl += (this.uf / 10) * a;
      this.o.b.sa = Math.round(c);
      250 < this.o.b.sa && (this.o.b.sa = 250);
      this.o.b.Pa = u.Hf((32 * b) / (2 * Math.PI));
      this.Tm(O.He);
      this.o.w = Math.round(this.Gl);
      this.o.A = Math.round(this.Hl);
      this.nB();
      return !0;
    },
    setPosition: function (a, b) {
      this.Gl -= this.o.w - a;
      this.Hl -= this.o.A - b;
      this.o.w = Math.round(a);
      this.o.A = Math.round(b);
    },
    Cd: function (a) {
      this.Gl -= this.o.w - a;
      this.o.w = Math.round(a);
    },
    Dd: function (a) {
      this.Hl -= this.o.A - a;
      this.o.A = Math.round(a);
    },
    stop: function () {
      this.V |= Ta.Vz;
    },
    dj: function (a) {
      if (a) {
        a = new X();
        this.sN(this.o.w, this.o.A, this.o.b.Sn, this.o.b.Tn, 0, Ga.jh, a);
        this.o.w = Math.round(a.x);
        this.o.A = Math.round(a.y);
        this.Gl = a.x;
        this.Hl = a.y;
        a = this.zt(this.eg, this.uf);
        var b = this.MH(this.eg, this.uf),
          c,
          d = -1e3;
        for (c = 0; c < 2 * Math.PI; c += Math.PI / 32)
          if (
            this.IT(
              Math.round(this.Gl + 16 * Math.cos(a + c)),
              Math.round(this.Hl + -16 * Math.sin(a + c)),
              0,
              Ga.jh,
              !1,
            )
          ) {
            d = c;
            break;
          }
        -1e3 == d
          ? ((this.eg = -this.eg), (this.uf = -this.uf))
          : ((a += 2 * d),
            a > 2 * Math.PI && (a -= 2 * Math.PI),
            (this.eg = b * Math.cos(a)),
            (this.uf = -b * Math.sin(a)),
            (this.o.b.Pa = u.Hf((32 * a) / (2 * Math.PI))));
      } else (this.eg = -this.eg), (this.uf = -this.uf);
    },
    reverse: function () {
      this.eg = -this.eg;
      this.uf = -this.uf;
    },
    start: function () {
      this.V &= ~Ta.Vz;
    },
    ih: function (a) {
      250 < a && (a = 250);
      this.o.b.sa = a;
      var b = this.zt(this.eg, this.uf);
      this.eg = a * Math.cos(b);
      this.uf = -a * Math.sin(b);
    },
    Lh: function (a) {
      this.o.b.Pa = a;
      var b = this.MH(this.eg, this.uf);
      a = (2 * a * Math.PI) / 32;
      this.eg = b * Math.cos(a);
      this.uf = -b * Math.sin(a);
    },
    Qy: function (a) {
      this.rC = a;
    },
    Np: function (a) {
      this.Ag = a;
    },
    GA: function () {
      this.Ag = this.o.H.oa.rh;
      return 0;
    },
    ax: function () {
      return this.o.b.sa;
    },
    IH: function () {
      return this.rC;
    },
    Yw: function () {
      return this.Ag;
    },
  });
  Be(Q, pa);
};
