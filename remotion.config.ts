import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
// Renderização em qualidade máxima para 4K
Config.setCodec("h264");
Config.setCrf(16);
Config.setConcurrency(null);
