import { Config } from "@remotion/cli/config";

// El 3D usa la tarjeta gráfica si la hay; si no, Chrome lo pinta por software (más lento, mismo resultado).
Config.setChromiumOpenGlRenderer(process.platform === "darwin" ? "angle" : "angle");
Config.setVideoImageFormat("jpeg");
Config.setJpegQuality(95);
// en ordenadores lentos los fondos tardan en cargar
Config.setDelayRenderTimeoutInMilliseconds(300000);

// En Linux (sesiones en la nube) se usa el Chrome que ya trae el sistema si existe, sin descargar otro.
const CHROME_LINUX = "/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell";
if (process.platform === "linux" && require("fs").existsSync(CHROME_LINUX)) {
  Config.setBrowserExecutable(CHROME_LINUX);
}
