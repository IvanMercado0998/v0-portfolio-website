(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/RepoNavi/v0-portfolio-website/v0-portfolio-website/components/FlashlightEffect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FlashlightEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$RepoNavi$2f$v0$2d$portfolio$2d$website$2f$v0$2d$portfolio$2d$website$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/RepoNavi/v0-portfolio-website/v0-portfolio-website/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$RepoNavi$2f$v0$2d$portfolio$2d$website$2f$v0$2d$portfolio$2d$website$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/RepoNavi/v0-portfolio-website/v0-portfolio-website/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function FlashlightEffect() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$RepoNavi$2f$v0$2d$portfolio$2d$website$2f$v0$2d$portfolio$2d$website$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$RepoNavi$2f$v0$2d$portfolio$2d$website$2f$v0$2d$portfolio$2d$website$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -9999,
        y: -9999
    }) // hide initially
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$RepoNavi$2f$v0$2d$portfolio$2d$website$2f$v0$2d$portfolio$2d$website$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlashlightEffect.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const resize = {
                "FlashlightEffect.useEffect.resize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["FlashlightEffect.useEffect.resize"];
            resize();
            window.addEventListener("resize", resize);
            const handleMouseMove = {
                "FlashlightEffect.useEffect.handleMouseMove": (e)=>{
                    mouseRef.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["FlashlightEffect.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            const drawFlashlight = {
                "FlashlightEffect.useEffect.drawFlashlight": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    // Full black background (very subtle overlay)
                    ctx.fillStyle = "rgba(0,0,0,1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    const { x, y } = mouseRef.current;
                    // Core + glow radiuses
                    const coreRadius = 140;
                    const glowRadius = 320;
                    const vignetteRadius = 1200;
                    // BRIGHT CENTER
                    const core = ctx.createRadialGradient(x, y, 0, x, y, coreRadius);
                    core.addColorStop(0, "rgba(255,255,255,0.85)");
                    core.addColorStop(1, "rgba(255,255,255,0)");
                    ctx.fillStyle = core;
                    ctx.beginPath();
                    ctx.arc(x, y, coreRadius, 0, Math.PI * 2);
                    ctx.fill();
                    // GLOW HALO
                    const glow = ctx.createRadialGradient(x, y, coreRadius, x, y, glowRadius);
                    glow.addColorStop(0, "rgba(255,255,255,0.22)");
                    glow.addColorStop(1, "rgba(0,0,0,0)");
                    ctx.fillStyle = glow;
                    ctx.beginPath();
                    ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
                    ctx.fill();
                    // FOG BLOOM
                    ctx.globalAlpha = 0.12;
                    ctx.beginPath();
                    ctx.arc(x, y, glowRadius * 1.45, 0, Math.PI * 2);
                    ctx.fillStyle = "white";
                    ctx.fill();
                    ctx.globalAlpha = 1;
                    // VIGNETTE
                    const vignette = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, vignetteRadius);
                    vignette.addColorStop(0, "rgba(0,0,0,0)");
                    vignette.addColorStop(1, "rgba(0,0,0,0.65)");
                    ctx.fillStyle = vignette;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                }
            }["FlashlightEffect.useEffect.drawFlashlight"];
            const loop = {
                "FlashlightEffect.useEffect.loop": ()=>{
                    drawFlashlight();
                    requestAnimationFrame(loop);
                }
            }["FlashlightEffect.useEffect.loop"];
            loop();
            return ({
                "FlashlightEffect.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("resize", resize);
                }
            })["FlashlightEffect.useEffect"];
        }
    }["FlashlightEffect.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$RepoNavi$2f$v0$2d$portfolio$2d$website$2f$v0$2d$portfolio$2d$website$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "pointer-events-none fixed inset-0 z-[1] opacity-40"
    }, void 0, false, {
        fileName: "[project]/Desktop/RepoNavi/v0-portfolio-website/v0-portfolio-website/components/FlashlightEffect.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(FlashlightEffect, "Qimi1+XRgPM/xwIviNOompZCtaA=");
_c = FlashlightEffect;
var _c;
__turbopack_context__.k.register(_c, "FlashlightEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=9eef5_v0-portfolio-website_components_FlashlightEffect_tsx_fee3fa8c._.js.map