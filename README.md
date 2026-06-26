<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vashistha Consulting Group — Recruitment · Staffing · Executive Search</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
  :root{
    --bg:#0E1019;
    --bg-2:#141826;
    --panel:#171b2a;
    --ink:#ECEEF6;
    --muted:#8A90A6;
    --faint:#5a6076;
    --line:rgba(255,255,255,0.09);
    --line-2:rgba(255,255,255,0.05);
    --blue:#8FB4F0;
    --lav:#C4A6E6;
    --teal:#54C9B4;
    --display:"Bricolage Grotesque",sans-serif;
    --body:"Inter",sans-serif;
    --mono:"Space Mono",monospace;
    --maxw:1240px;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{
    background:var(--bg);
    color:var(--ink);
    font-family:var(--body);
    line-height:1.5;
    -webkit-font-smoothing:antialiased;
    overflow-x:hidden;
  }
  a{color:inherit;text-decoration:none}
  ::selection{background:var(--lav);color:#11131c}
  .wrap{max-width:var(--maxw);margin:0 auto;padding:0 28px}

  .eyebrow{
    font-family:var(--mono);
    font-size:12px;
    letter-spacing:.22em;
    text-transform:uppercase;
    color:var(--blue);
    display:inline-flex;align-items:center;gap:10px;
  }
  .eyebrow::before{content:"";width:26px;height:1px;background:var(--blue);opacity:.6}

  /* ---------- aurora background ---------- */
  .aurora{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
  .blob{position:absolute;border-radius:50%;filter:blur(90px);opacity:.30;mix-blend-mode:screen}
  .b1{width:560px;height:560px;background:var(--blue);top:-160px;left:-120px;animation:drift1 26s ease-in-out infinite}
  .b2{width:520px;height:520px;background:var(--lav);top:18%;right:-160px;animation:drift2 30s ease-in-out infinite}
  .b3{width:480px;height:480px;background:var(--teal);bottom:-160px;left:30%;animation:drift3 34s ease-in-out infinite;opacity:.22}
  @keyframes drift1{50%{transform:translate(120px,80px) scale(1.1)}}
  @keyframes drift2{50%{transform:translate(-100px,120px) scale(1.08)}}
  @keyframes drift3{50%{transform:translate(80px,-90px) scale(1.12)}}
  .grain{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:.035;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}

  /* ---------- nav ---------- */
  header.nav{position:fixed;top:0;left:0;right:0;z-index:50;
    transition:background .35s,border-color .35s,backdrop-filter .35s;
    border-bottom:1px solid transparent;}
  header.nav.scrolled{background:rgba(14,16,25,.72);backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}
  .nav-inner{max-width:var(--maxw);margin:0 auto;padding:16px 28px;display:flex;align-items:center;justify-content:space-between;gap:24px}
  .brand{display:flex;align-items:center;gap:12px;font-family:var(--display);font-weight:700;font-size:16px;letter-spacing:-.01em}
  .mark{width:30px;height:30px;border-radius:8px;display:grid;place-items:center;
    background:linear-gradient(135deg,var(--blue),var(--lav));color:#11131c;font-weight:800;font-size:14px;font-family:var(--display)}
  .brand small{display:block;font-family:var(--mono);font-size:9px;letter-spacing:.2em;color:var(--muted);text-transform:uppercase;font-weight:400}
  .nav-links{display:flex;gap:30px;font-size:14px;color:var(--muted)}
  .nav-links a{position:relative;transition:color .2s}
  .nav-links a:hover{color:var(--ink)}
  .nav-links a::after{content:"";position:absolute;left:0;bottom:-4px;width:0;height:1px;background:var(--blue);transition:width .25s}
  .nav-links a:hover::after{width:100%}
  .nav-right{display:flex;align-items:center;gap:20px}
  .clock{font-family:var(--mono);font-size:11px;color:var(--faint);letter-spacing:.08em;white-space:nowrap}
  .clock b{color:var(--teal);font-weight:400}
  .cta{font-family:var(--mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase;
    padding:9px 16px;border:1px solid var(--line);border-radius:999px;color:var(--ink);transition:.25s;white-space:nowrap}
  .cta:hover{background:var(--ink);color:#11131c;border-color:var(--ink)}
  .burger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:6px}
  .burger span{width:22px;height:2px;background:var(--ink);transition:.3s}

  /* ---------- hero ---------- */
  section{position:relative;z-index:2}
  .hero{min-height:100vh;display:flex;align-items:center;padding:140px 0 80px}
  .hero h1{font-family:var(--display);font-weight:700;letter-spacing:-.03em;line-height:.95;
    font-size:clamp(48px,9vw,118px);margin:24px 0 0}
  .hero h1 .l2{color:var(--muted)}
  .hero .thesis{font-family:var(--display);font-size:clamp(20px,2.6vw,30px);font-weight:500;
    max-width:640px;margin:34px 0 0;color:var(--ink);line-height:1.25}
  .hero .thesis em{font-style:italic;background:linear-gradient(120deg,var(--blue),var(--lav),var(--teal));
    -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
  .hero-foot{display:flex;flex-wrap:wrap;align-items:center;gap:18px;margin-top:42px}
  .btn-primary{display:inline-flex;align-items:center;gap:10px;background:var(--ink);color:#11131c;
    font-weight:600;font-size:15px;padding:14px 24px;border-radius:999px;transition:.25s}
  .btn-primary:hover{transform:translateY(-2px);box-shadow:0 14px 34px -10px rgba(143,180,240,.5)}
  .btn-ghost{display:inline-flex;align-items:center;gap:10px;color:var(--muted);font-size:14px;font-family:var(--mono);letter-spacing:.05em}
  .btn-ghost:hover{color:var(--ink)}

  .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:78px;border-top:1px solid var(--line)}
  .stat{padding:24px 0 0;border-right:1px solid var(--line-2)}
  .stat:last-child{border-right:0}
  .stat .num{font-family:var(--display);font-size:clamp(28px,3.6vw,44px);font-weight:700;letter-spacing:-.02em;line-height:1}
  .stat .num span{background:linear-gradient(120deg,var(--blue),var(--lav));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
  .stat .lbl{color:var(--muted);font-size:13px;margin-top:8px;font-family:var(--mono);letter-spacing:.03em}

  /* ---------- section frame ---------- */
  .sec{padding:120px 0}
  .sec-head{display:flex;justify-content:space-between;align-items:flex-end;gap:30px;margin-bottom:56px;flex-wrap:wrap}
  .sec-head h2{font-family:var(--display);font-weight:700;letter-spacing:-.025em;line-height:1;
    font-size:clamp(34px,5.4vw,66px);margin-top:18px}
  .sec-head p{color:var(--muted);max-width:420px;font-size:15px}
  .idx{font-family:var(--mono);color:var(--faint);font-size:13px;letter-spacing:.1em}

  /* ---------- marquee ---------- */
  .marquee{overflow:hidden;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:22px 0;
    -webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);
    mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
  .marquee-track{display:flex;gap:0;width:max-content;animation:scroll 34s linear infinite}
  .marquee:hover .marquee-track{animation-play-state:paused}
  .marquee-track span{font-family:var(--display);font-size:26px;font-weight:600;color:var(--ink);
    padding:0 26px;display:inline-flex;align-items:center;gap:26px;opacity:.85}
  .marquee-track span::after{content:"✦";color:var(--teal);font-size:14px}
  @keyframes scroll{to{transform:translateX(-50%)}}

  /* ---------- about ---------- */
  .about-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:60px;align-items:start}
  .about-grid .lead{font-family:var(--display);font-size:clamp(22px,2.8vw,32px);font-weight:500;line-height:1.3;letter-spacing:-.01em}
  .about-grid .lead b{color:var(--ink)}
  .about-grid .body{color:var(--muted);font-size:16px;line-height:1.7}
  .about-side{border:1px solid var(--line);border-radius:18px;padding:28px;background:rgba(255,255,255,.015)}
  .about-side h4{font-family:var(--mono);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--blue);margin-bottom:18px}
  .about-side ul{list-style:none;display:flex;flex-direction:column;gap:14px}
  .about-side li{display:flex;gap:12px;font-size:15px;color:var(--ink);align-items:flex-start}
  .about-side li i{color:var(--teal);font-style:normal;font-family:var(--mono);font-size:13px;margin-top:2px}

  /* ---------- services grid ---------- */
  .svc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:0;border-top:1px solid var(--line);border-left:1px solid var(--line)}
  .svc{padding:34px 32px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);
    position:relative;transition:background .3s;overflow:hidden}
  .svc::before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(143,180,240,.10),rgba(196,166,230,.06));opacity:0;transition:opacity .3s}
  .svc:hover::before{opacity:1}
  .svc>*{position:relative;z-index:1}
  .svc .n{font-family:var(--mono);font-size:12px;color:var(--faint);letter-spacing:.1em}
  .svc h3{font-family:var(--display);font-size:23px;font-weight:600;margin:18px 0 8px;letter-spacing:-.01em}
  .svc p{color:var(--muted);font-size:14px}
  .svc .arrow{position:absolute;top:34px;right:32px;color:var(--faint);transition:.3s;font-size:18px}
  .svc:hover .arrow{color:var(--blue);transform:translate(3px,-3px)}

  /* ---------- reverse recruiting feature ---------- */
  .feature{border:1px solid var(--line);border-radius:24px;overflow:hidden;
    background:linear-gradient(160deg,rgba(196,166,230,.08),rgba(84,201,180,.04) 60%,transparent)}
  .feature-top{padding:48px 44px 30px;display:flex;justify-content:space-between;align-items:flex-end;gap:30px;flex-wrap:wrap}
  .feature-top h2{font-family:var(--display);font-size:clamp(30px,4.4vw,52px);font-weight:700;letter-spacing:-.02em;line-height:1}
  .feature-top p{color:var(--muted);max-width:420px;font-size:15px;line-height:1.6}
  .tag-pill{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;
    color:var(--teal);border:1px solid rgba(84,201,180,.4);padding:6px 12px;border-radius:999px;white-space:nowrap}
  .feature-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line)}
  .frow{padding:30px 32px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}
  .frow:nth-child(3n){border-right:0}
  .frow:nth-child(n+4){border-bottom:0}
  .frow .fn{font-family:var(--mono);color:var(--lav);font-size:12px;letter-spacing:.1em}
  .frow h4{font-family:var(--display);font-size:19px;font-weight:600;margin:14px 0 7px}
  .frow p{color:var(--muted);font-size:14px}

  /* ---------- expertise ---------- */
  .exp-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}
  .exp-col{border:1px solid var(--line);border-radius:20px;padding:34px 32px;background:rgba(255,255,255,.012);position:relative;overflow:hidden}
  .exp-col .blobby{position:absolute;width:200px;height:200px;border-radius:50%;filter:blur(70px);opacity:.18;top:-60px;right:-50px}
  .exp-col.it .blobby{background:var(--blue)}
  .exp-col.non .blobby{background:var(--lav)}
  .exp-col .en{font-family:var(--mono);font-size:13px;color:var(--faint);letter-spacing:.1em}
  .exp-col h3{font-family:var(--display);font-size:27px;font-weight:700;margin:12px 0 22px;letter-spacing:-.01em}
  .chips{display:flex;flex-wrap:wrap;gap:9px}
  .chip{font-size:13.5px;color:var(--ink);border:1px solid var(--line);border-radius:999px;padding:7px 14px;
    background:rgba(255,255,255,.02);transition:.25s}
  .exp-col.it .chip:hover{border-color:var(--blue);color:var(--blue)}
  .exp-col.non .chip:hover{border-color:var(--lav);color:var(--lav)}

  /* ---------- process timeline ---------- */
  .timeline{display:flex;flex-direction:column;gap:0;border-left:2px solid var(--line);margin-left:8px}
  .step{position:relative;padding:0 0 56px 40px}
  .step:last-child{padding-bottom:0}
  .step::before{content:"";position:absolute;left:-9px;top:4px;width:16px;height:16px;border-radius:50%;
    background:var(--bg);border:2px solid var(--blue);box-shadow:0 0 0 5px rgba(143,180,240,.12)}
  .step:nth-child(2)::before{border-color:var(--lav);box-shadow:0 0 0 5px rgba(196,166,230,.12)}
  .step:nth-child(3)::before{border-color:var(--teal);box-shadow:0 0 0 5px rgba(84,201,180,.12)}
  .step .sn{font-family:var(--mono);font-size:12px;letter-spacing:.12em;color:var(--faint)}
  .step h3{font-family:var(--display);font-size:clamp(22px,2.6vw,30px);font-weight:600;margin:10px 0 10px;letter-spacing:-.01em}
  .step p{color:var(--muted);font-size:15.5px;max-width:620px;line-height:1.65}

  /* ---------- industries ---------- */
  .ind-grid{display:flex;flex-wrap:wrap;gap:12px}
  .ind{border:1px solid var(--line);border-radius:14px;padding:15px 20px;font-size:15px;
    font-family:var(--display);font-weight:500;color:var(--ink);transition:.25s;cursor:default;
    display:flex;align-items:center;gap:11px}
  .ind .dot{width:6px;height:6px;border-radius:50%;background:var(--teal);flex:none}
  .ind:nth-child(3n) .dot{background:var(--blue)}
  .ind:nth-child(3n+1) .dot{background:var(--lav)}
  .ind:hover{transform:translateY(-3px);border-color:var(--line);background:rgba(255,255,255,.03)}

  /* ---------- why vcg ---------- */
  .why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
  .why{border:1px solid var(--line);border-radius:18px;padding:30px 28px;background:rgba(255,255,255,.012);transition:.3s}
  .why:hover{transform:translateY(-4px);border-color:rgba(143,180,240,.3);background:rgba(143,180,240,.04)}
  .why .ic{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;margin-bottom:20px;
    background:rgba(143,180,240,.12);color:var(--blue)}
  .why:nth-child(3n-1) .ic{background:rgba(196,166,230,.12);color:var(--lav)}
  .why:nth-child(3n) .ic{background:rgba(84,201,180,.12);color:var(--teal)}
  .why h3{font-family:var(--display);font-size:20px;font-weight:600;margin-bottom:9px}
  .why p{color:var(--muted);font-size:14.5px;line-height:1.6}

  /* ---------- engagement models ---------- */
  .eng-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
  .eng{border:1px solid var(--line);border-radius:18px;padding:28px 24px;position:relative;overflow:hidden;
    min-height:220px;display:flex;flex-direction:column;justify-content:space-between;transition:.3s}
  .eng:hover{border-color:var(--line);background:rgba(255,255,255,.025)}
  .eng .en{font-family:var(--display);font-size:46px;font-weight:700;line-height:1;color:transparent;
    -webkit-text-stroke:1.4px var(--faint);transition:.3s}
  .eng:hover .en{-webkit-text-stroke:1.4px var(--blue)}
  .eng h3{font-family:var(--display);font-size:19px;font-weight:600;margin-bottom:8px}
  .eng p{color:var(--muted);font-size:13.5px;line-height:1.55}

  /* ---------- consultants ---------- */
  .cons-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-top:1px solid var(--line);border-left:1px solid var(--line)}
  .cons{padding:32px 30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);transition:.3s;position:relative}
  .cons:hover{background:rgba(255,255,255,.02)}
  .cons .ct{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--teal)}
  .cons h3{font-family:var(--display);font-size:22px;font-weight:600;margin:14px 0 8px}
  .cons p{color:var(--muted);font-size:14px;line-height:1.55}

  /* ---------- contact ---------- */
  .contact{padding:130px 0 60px}
  .contact .big{font-family:var(--display);font-weight:700;letter-spacing:-.03em;line-height:.95;
    font-size:clamp(48px,10vw,140px)}
  .contact .big .g{background:linear-gradient(120deg,var(--blue),var(--lav),var(--teal));
    -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
  .contact .sub{font-family:var(--display);font-size:clamp(18px,2.2vw,26px);color:var(--muted);margin-top:24px;font-weight:500}
  .contact-row{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:70px;border-top:1px solid var(--line);padding-top:40px}
  .cblock .clbl{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--faint);margin-bottom:10px}
  .cblock a,.cblock span{font-size:16px;color:var(--ink);transition:color .2s;word-break:break-word}
  .cblock a:hover{color:var(--blue)}
  .footer{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;
    margin-top:80px;padding-top:26px;border-top:1px solid var(--line);color:var(--faint);font-family:var(--mono);font-size:12px;letter-spacing:.05em}
  .footer .person{color:var(--muted)}
  .footer .person b{color:var(--ink);font-weight:700}

  /* reveal */
  .reveal{opacity:0;transform:translateY(28px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1)}
  .reveal.in{opacity:1;transform:none}

  /* ---------- responsive ---------- */
  @media(max-width:900px){
    .nav-links,.clock{display:none}
    .burger{display:flex}
    .brand{font-size:14px;max-width:58vw}
    .brand small{display:none}
    .about-grid,.exp-grid{grid-template-columns:1fr;gap:36px}
    .svc-grid{grid-template-columns:1fr}
    .feature-grid{grid-template-columns:1fr}
    .frow{border-right:0}
    .frow:nth-child(n){border-bottom:1px solid var(--line)}
    .frow:last-child{border-bottom:0}
    .why-grid,.cons-grid{grid-template-columns:1fr 1fr}
    .eng-grid{grid-template-columns:1fr 1fr}
    .stats{grid-template-columns:1fr 1fr;gap:0}
    .stat:nth-child(2){border-right:0}
    .stat:nth-child(n+3){border-top:1px solid var(--line-2);padding-top:24px;margin-top:8px}
    .contact-row{grid-template-columns:1fr 1fr}
    .cons:nth-child(n){border-right:1px solid var(--line)}
    .mobile-menu.open{display:flex}
  }
  @media(max-width:560px){
    .wrap{padding:0 18px}
    .nav-inner{padding:14px 18px}
    .nav-right .cta{display:none}
    .sec{padding:84px 0}
    .why-grid,.cons-grid,.eng-grid,.contact-row{grid-template-columns:1fr}
    .ind-grid .ind{font-size:14px;padding:13px 16px}
    .hero{padding:120px 0 60px}
  }
  .mobile-menu{display:none;position:fixed;inset:0;z-index:49;background:rgba(11,13,21,.97);backdrop-filter:blur(8px);
    flex-direction:column;justify-content:center;gap:8px;padding:40px}
  .mobile-menu a{font-family:var(--display);font-size:34px;font-weight:600;padding:8px 0}
  .mobile-menu a:active{color:var(--blue)}

  @media(prefers-reduced-motion:reduce){
    *{animation:none!important;transition:none!important;scroll-behavior:auto!important}
    .reveal{opacity:1;transform:none}
  }
</style>
</head>
<body>

<div class="aurora">
  <div class="blob b1"></div>
  <div class="blob b2"></div>
  <div class="blob b3"></div>
</div>
<div class="grain"></div>

<!-- NAV -->
<header class="nav" id="nav">
  <div class="nav-inner">
    <a href="#top" class="brand">
      <span class="mark">V</span>
      <span>Vashistha Consulting Group<small>Recruitment · Staffing · Search</small></span>
    </a>
    <nav class="nav-links">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#expertise">Expertise</a>
      <a href="#process">Process</a>
      <a href="#industries">Industries</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="nav-right">
      <span class="clock" id="clock">IST — <b>--:--:--</b></span>
      <a href="mailto:sidharth@vashisthagroup.net" class="cta">Hire with us</a>
      <div class="burger" id="burger"><span></span><span></span><span></span></div>
    </div>
  </div>
</header>

<div class="mobile-menu" id="mobileMenu">
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#expertise">Expertise</a>
  <a href="#process">Process</a>
  <a href="#industries">Industries</a>
  <a href="#contact">Contact</a>
</div>

<!-- HERO -->
<section class="hero" id="top">
  <div class="wrap">
    <span class="eyebrow">Recruitment · Staffing · Executive Search</span>
    <h1>Vashistha<br>Consulting<br><span class="l2">Group</span></h1>
    <p class="thesis">For every great company, <em>a great team.</em> We connect organizations with top-tier talent across IT and Non-IT domains — globally.</p>
    <div class="hero-foot">
      <a href="mailto:sidharth@vashisthagroup.net" class="btn-primary">Start hiring →</a>
      <a href="#services" class="btn-ghost">Explore services ↓</a>
    </div>
    <div class="stats">
      <div class="stat"><div class="num"><span>8</span></div><div class="lbl">Service lines</div></div>
      <div class="stat"><div class="num"><span>18+</span></div><div class="lbl">Industries served</div></div>
      <div class="stat"><div class="num">PAN<span> India</span></div><div class="lbl">Hiring reach</div></div>
      <div class="stat"><div class="num">IT <span>&amp; Non-IT</span></div><div class="lbl">Talent domains</div></div>
    </div>
  </div>
</section>

<!-- MARQUEE -->
<div class="marquee" aria-hidden="true">
  <div class="marquee-track" id="mq">
    <span>Permanent Hiring</span><span>Executive Search</span><span>Contract Staffing</span><span>RPO</span><span>Reverse Recruiting</span><span>Staff Augmentation</span><span>Bulk Hiring</span><span>Bench Sales</span>
    <span>Permanent Hiring</span><span>Executive Search</span><span>Contract Staffing</span><span>RPO</span><span>Reverse Recruiting</span><span>Staff Augmentation</span><span>Bulk Hiring</span><span>Bench Sales</span>
  </div>
</div>

<!-- ABOUT -->
<section class="sec" id="about">
  <div class="wrap">
    <div class="sec-head reveal">
      <div>
        <span class="eyebrow">01 — Introduction</span>
        <h2>Built around<br>your hiring.</h2>
      </div>
    </div>
    <div class="about-grid reveal">
      <div>
        <p class="lead">Vashistha Consulting Group is a <b>specialized recruitment &amp; staffing firm</b> connecting organizations with top-tier talent across IT and Non-IT domains.</p>
        <p class="body" style="margin-top:26px">We partner with startups, GCCs, product companies, IT services firms, and enterprise clients — delivering scalable, quality-driven hiring solutions globally. From a single executive search to high-volume rapid expansion, we build teams that move companies forward.</p>
      </div>
      <div class="about-side">
        <h4>Who we serve</h4>
        <ul>
          <li><i>→</i>Startups &amp; high-growth unicorns</li>
          <li><i>→</i>GCCs &amp; Global Capability Centers</li>
          <li><i>→</i>Product &amp; deep-tech companies</li>
          <li><i>→</i>IT services firms</li>
          <li><i>→</i>Enterprise clients worldwide</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section class="sec" id="services">
  <div class="wrap">
    <div class="sec-head reveal">
      <div>
        <span class="eyebrow">02 — Our Services</span>
        <h2>End-to-end talent<br>&amp; workforce solutions.</h2>
      </div>
      <p>For every hiring need — from a single critical role to building entire teams at speed.</p>
    </div>
    <div class="svc-grid reveal">
      <div class="svc"><span class="arrow">↗</span><div class="n">01</div><h3>Permanent Hiring</h3><p>Mid to senior-level placements across IT &amp; Non-IT.</p></div>
      <div class="svc"><span class="arrow">↗</span><div class="n">02</div><h3>Contract Staffing</h3><p>Project-based &amp; time-sensitive resourcing.</p></div>
      <div class="svc"><span class="arrow">↗</span><div class="n">03</div><h3>Executive Search</h3><p>CXO, VP, Director, Head of Eng / AI.</p></div>
      <div class="svc"><span class="arrow">↗</span><div class="n">04</div><h3>Bulk Hiring</h3><p>High-volume hiring for rapid expansion.</p></div>
      <div class="svc"><span class="arrow">↗</span><div class="n">05</div><h3>RPO</h3><p>Dedicated end-to-end recruitment process outsourcing.</p></div>
      <div class="svc"><span class="arrow">↗</span><div class="n">06</div><h3>Staff Augmentation</h3><p>On-demand tech consultants for your team.</p></div>
      <div class="svc"><span class="arrow">↗</span><div class="n">07</div><h3>Reverse Recruiting</h3><p>Career transition support for job seekers.</p></div>
      <div class="svc"><span class="arrow">↗</span><div class="n">08</div><h3>Bench Sales · EMEA / APAC</h3><p>Global consultant deployment across regions.</p></div>
    </div>
  </div>
</section>

<!-- REVERSE RECRUITING -->
<section class="sec" id="reverse">
  <div class="wrap reveal">
    <div class="feature">
      <div class="feature-top">
        <div>
          <span class="eyebrow" style="color:var(--lav)">03 — Reverse Recruiting</span>
          <h2 style="margin-top:16px">We work for<br>the candidate.</h2>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-start;gap:16px">
          <span class="tag-pill">Exclusively on your behalf</span>
          <p>Personalized career transition support — a dedicated recruiter advocates entirely for the job seeker, not the employer.</p>
        </div>
      </div>
      <div class="feature-grid">
        <div class="frow"><div class="fn">01</div><h4>Career Advocacy</h4><p>A dedicated recruiter works exclusively for you.</p></div>
        <div class="frow"><div class="fn">02</div><h4>Resume &amp; LinkedIn</h4><p>Optimized to attract the right employers.</p></div>
        <div class="frow"><div class="fn">03</div><h4>Targeted Job Search</h4><p>Active outreach to matching companies.</p></div>
        <div class="frow"><div class="fn">04</div><h4>Interview Coaching</h4><p>Preparation and mock interview sessions.</p></div>
        <div class="frow"><div class="fn">05</div><h4>Offer Negotiation</h4><p>Maximize your compensation and terms.</p></div>
        <div class="frow"><div class="fn">06</div><h4>Career Roadmapping</h4><p>Long-term growth planning and guidance.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- EXPERTISE -->
<section class="sec" id="expertise">
  <div class="wrap">
    <div class="sec-head reveal">
      <div>
        <span class="eyebrow">04 — Areas of Expertise</span>
        <h2>Deep coverage,<br>both sides of tech.</h2>
      </div>
      <p>Specialist recruiters mapped to the skills that actually build your roadmap.</p>
    </div>
    <div class="exp-grid reveal">
      <div class="exp-col it">
        <span class="blobby"></span>
        <div class="en">01</div>
        <h3>Information Technology</h3>
        <div class="chips">
          <span class="chip">Full Stack / Software Dev</span><span class="chip">Java</span><span class="chip">.NET</span><span class="chip">Python</span><span class="chip">React.js</span>
          <span class="chip">DevOps &amp; Cloud</span><span class="chip">Data Engineering</span><span class="chip">Data Science</span><span class="chip">AI / ML</span><span class="chip">Generative AI</span>
          <span class="chip">Cyber Security</span><span class="chip">SAP &amp; ERP</span><span class="chip">QA &amp; Testing</span><span class="chip">Product Management</span><span class="chip">Mobile Dev</span><span class="chip">Game Dev</span>
        </div>
      </div>
      <div class="exp-col non">
        <span class="blobby"></span>
        <div class="en">02</div>
        <h3>Non-IT Domains</h3>
        <div class="chips">
          <span class="chip">Finance &amp; Accounting / BFSI</span><span class="chip">Human Resources</span><span class="chip">Sales</span><span class="chip">Marketing</span><span class="chip">Customer Support</span>
          <span class="chip">Automotive</span><span class="chip">Supply Chain</span><span class="chip">Manufacturing</span><span class="chip">Healthcare</span><span class="chip">Retail</span>
          <span class="chip">GCC &amp; Leadership</span><span class="chip">Administration</span><span class="chip">E-commerce</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section class="sec" id="process">
  <div class="wrap">
    <div class="sec-head reveal">
      <div>
        <span class="eyebrow">05 — Recruitment Process</span>
        <h2>Six steps,<br>three milestones.</h2>
      </div>
      <p>A structured pipeline that keeps quality high and time-to-hire low.</p>
    </div>
    <div class="timeline reveal">
      <div class="step">
        <div class="sn">STEP 01 — 02</div>
        <h3>Requirement Gathering &amp; Sourcing</h3>
        <p>Understand roles, skills &amp; timelines, then source from portals, networks, internal databases &amp; trusted referrals.</p>
      </div>
      <div class="step">
        <div class="sn">STEP 03 — 04</div>
        <h3>Screening &amp; Interview</h3>
        <p>Resume, technical, communication &amp; BGV checks, with full interview scheduling and stakeholder management.</p>
      </div>
      <div class="step">
        <div class="sn">STEP 05 — 06</div>
        <h3>Offer &amp; Onboarding</h3>
        <p>Negotiation &amp; onboarding support, followed by a post-joining retention check and continued engagement.</p>
      </div>
    </div>
  </div>
</section>

<!-- INDUSTRIES -->
<section class="sec" id="industries">
  <div class="wrap">
    <div class="sec-head reveal">
      <div>
        <span class="eyebrow">06 — Industries We Serve</span>
        <h2>Where we hire.</h2>
      </div>
      <p>Eighteen sectors and counting — from regulated enterprise to fast-moving startups.</p>
    </div>
    <div class="ind-grid reveal">
      <div class="ind"><span class="dot"></span>Information Technology</div>
      <div class="ind"><span class="dot"></span>Banking &amp; BFSI</div>
      <div class="ind"><span class="dot"></span>Automotive</div>
      <div class="ind"><span class="dot"></span>Aerospace &amp; Defence</div>
      <div class="ind"><span class="dot"></span>FinTech</div>
      <div class="ind"><span class="dot"></span>Healthcare</div>
      <div class="ind"><span class="dot"></span>GCCs &amp; Global Capability Centers</div>
      <div class="ind"><span class="dot"></span>Product Companies</div>
      <div class="ind"><span class="dot"></span>Gaming &amp; Entertainment</div>
      <div class="ind"><span class="dot"></span>E-commerce &amp; Retail</div>
      <div class="ind"><span class="dot"></span>Startups &amp; Unicorns</div>
      <div class="ind"><span class="dot"></span>Manufacturing</div>
      <div class="ind"><span class="dot"></span>Logistics &amp; Supply Chain</div>
      <div class="ind"><span class="dot"></span>Telecommunications</div>
      <div class="ind"><span class="dot"></span>Real Estate</div>
      <div class="ind"><span class="dot"></span>Education &amp; EdTech</div>
      <div class="ind"><span class="dot"></span>Media &amp; Entertainment</div>
      <div class="ind"><span class="dot"></span>Consulting Organizations</div>
    </div>
  </div>
</section>

<!-- WHY VCG -->
<section class="sec" id="why">
  <div class="wrap">
    <div class="sec-head reveal">
      <div>
        <span class="eyebrow">07 — Why Partner With VCG</span>
        <h2>The difference<br>is in delivery.</h2>
      </div>
    </div>
    <div class="why-grid reveal">
      <div class="why"><div class="ic">◎</div><h3>Dedicated Team</h3><p>Experienced recruiters assigned exclusively to your requirements.</p></div>
      <div class="why"><div class="ic">⚡</div><h3>Fast TAT</h3><p>Rapid shortlisting with quality profiles within agreed timelines.</p></div>
      <div class="why"><div class="ic">◈</div><h3>Large Talent Pool</h3><p>Passive &amp; active candidates via portals, networks &amp; referrals.</p></div>
      <div class="why"><div class="ic">⌖</div><h3>PAN India Reach</h3><p>Hiring across all major cities and emerging talent hubs.</p></div>
      <div class="why"><div class="ic">◇</div><h3>Cost-Effective</h3><p>Flexible, transparent models that reduce cost-per-hire.</p></div>
      <div class="why"><div class="ic">✓</div><h3>Quality Assured</h3><p>Multi-stage screening — resume, technical, communication, background.</p></div>
    </div>
  </div>
</section>

<!-- ENGAGEMENT MODELS -->
<section class="sec" id="models">
  <div class="wrap">
    <div class="sec-head reveal">
      <div>
        <span class="eyebrow">08 — Engagement Models</span>
        <h2>Work with us,<br>your way.</h2>
      </div>
    </div>
    <div class="eng-grid reveal">
      <div class="eng"><div class="en">01</div><div><h3>Permanent Staffing</h3><p>Full-time hiring for long-term organizational growth.</p></div></div>
      <div class="eng"><div class="en">02</div><div><h3>Contract Staffing</h3><p>Temporary resources for project-based requirements.</p></div></div>
      <div class="eng"><div class="en">03</div><div><h3>Executive Search</h3><p>CXO, VP, Director, Head of Eng / Product / AI.</p></div></div>
      <div class="eng"><div class="en">04</div><div><h3>Staff Augmentation</h3><p>Quick deployment of skilled professionals to your team.</p></div></div>
    </div>
  </div>
</section>

<!-- CONSULTANTS -->
<section class="sec" id="consultants">
  <div class="wrap">
    <div class="sec-head reveal">
      <div>
        <span class="eyebrow">09 — Ready Consultants For Hire</span>
        <h2>Specialist talent,<br>deployment-ready.</h2>
      </div>
      <p>Across AI, Automotive, Aerospace, Gaming, R&amp;D, Product &amp; Deep Tech.</p>
    </div>
    <div class="cons-grid reveal">
      <div class="cons"><div class="ct">AI &amp; Technology</div><h3>Generative AI &amp; ML</h3><p>Generative AI, ML and LLM specialists.</p></div>
      <div class="cons"><div class="ct">Automotive</div><h3>R&amp;D &amp; EV</h3><p>R&amp;D, embedded and EV engineers.</p></div>
      <div class="cons"><div class="ct">Aerospace &amp; Defence</div><h3>Systems &amp; Avionics</h3><p>Systems, avionics and compliance.</p></div>
      <div class="cons"><div class="ct">R&amp;D Innovation</div><h3>Deep Tech</h3><p>Research, science and deep tech.</p></div>
      <div class="cons"><div class="ct">Gaming</div><h3>Studio &amp; Metaverse</h3><p>Artist, Producer, Developer, QA, Metaverse.</p></div>
      <div class="cons"><div class="ct">Product</div><h3>Product &amp; GTM</h3><p>Design, Development, Product, GTM, Founder's Office.</p></div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="contact" id="contact">
  <div class="wrap">
    <div class="reveal">
      <span class="eyebrow">10 — Let's Connect</span>
      <h2 class="big" style="margin-top:24px">Let's build your<br>team <span class="g">together.</span></h2>
      <p class="sub">For every great company, a great team.</p>
    </div>
    <div class="contact-row reveal">
      <div class="cblock"><div class="clbl">Email</div><a href="mailto:sidharth@vashisthagroup.net">sidharth@vashisthagroup.net</a></div>
      <div class="cblock"><div class="clbl">Phone</div><a href="tel:+918810541190">+91 881-054-1190</a></div>
      <div class="cblock"><div class="clbl">Website</div><a href="https://vashisthagroup.net" target="_blank" rel="noopener">vashisthagroup.net</a></div>
      <div class="cblock"><div class="clbl">Social</div><span>@vashisthagroup</span></div>
    </div>
    <div class="footer">
      <div class="person"><b>Sidharth Singh</b> · Vashistha Consulting Group</div>
      <div>© 2026 VCG · Business Proposal</div>
    </div>
  </div>
</section>

<script>
  // nav scroll state
  const nav=document.getElementById('nav');
  addEventListener('scroll',()=>{nav.classList.toggle('scrolled',scrollY>40)});

  // IST clock
  const clock=document.querySelector('#clock b');
  function tick(){
    const t=new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Kolkata',hour12:false});
    if(clock) clock.textContent=t;
  }
  tick();setInterval(tick,1000);

  // mobile menu
  const burger=document.getElementById('burger');
  const mm=document.getElementById('mobileMenu');
  burger.addEventListener('click',()=>{
    const open=mm.classList.toggle('open');
    burger.style.opacity=open?.4:1;
  });
  mm.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mm.classList.remove('open');burger.style.opacity=1}));

  // reveal on scroll (with fallbacks so content is never stuck hidden)
  const reveals=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
    },{threshold:.1,rootMargin:'0px 0px -6% 0px'});
    reveals.forEach(el=>io.observe(el));
    // reveal anything already in or near the first viewport on load
    addEventListener('load',()=>reveals.forEach(el=>{
      if(el.getBoundingClientRect().top<innerHeight*0.95) el.classList.add('in');
    }));
  } else {
    reveals.forEach(el=>el.classList.add('in'));
  }
</script>
</body>
</html>
