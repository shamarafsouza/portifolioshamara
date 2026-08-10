.glitch{position:relative;display:inline-block}
.glitch::before,.glitch::after{content:attr(data-text);position:absolute;top:0;left:0;width:100%;pointer-events:none}
.glitch::before{left:3px;color:var(--acid);text-shadow:-2px 0 var(--pink);clip-path:inset(0 0 100% 0);animation:glitch-burst-1 6s infinite}
.glitch::after{left:-3px;color:var(--pink);text-shadow:2px 0 var(--mint);clip-path:inset(100% 0 0 0);animation:glitch-burst-2 6s infinite}
@keyframes glitch-burst-1{
    0%,92%,100%{clip-path:inset(0 0 100% 0)}
    93%{clip-path:inset(10% 0 60% 0)}
    94%{clip-path:inset(50% 0 15% 0)}
    95%{clip-path:inset(5% 0 80% 0)}
    96%{clip-path:inset(0 0 100% 0)}
}
@keyframes glitch-burst-2{
    0%,92%,100%{clip-path:inset(100% 0 0 0)}
    93%{clip-path:inset(60% 0 10% 0)}
    94%{clip-path:inset(15% 0 55% 0)}
    95%{clip-path:inset(80% 0 5% 0)}
    96%{clip-path:inset(100% 0 0 0)}
}
@media(prefers-reduced-motion:reduce){.glitch::before,.glitch::after{display:none}}
