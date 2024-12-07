const sources = [
  {
    name: "QQ",
    color: "#2caf6f",
    quality: ["臻品母带", "臻品音质", "臻品全景", "SQ", "HQ", "SQ"],
  },
  {
    name: "WYY",
    color: "#C10D0C",
    quality: ["超清母带", "高清臻音", "沉浸环绕", "Hi-Res", "SQ", "HQ", "SQ"],
  },
  {
    name: "KW",
    color: "#FFE443",
    quality: ["至臻母带", "至臻音质", "至臻全景", "Hi-Res", "SQ", "HQ"],
  },
  {
    name: "KG",
    color: "#0062FF",
    quality: ["蝰蛇母带", "蝰蛇超清", "蝰蛇全景", "Hi-Res", "SQ", "HQ", "SQ"],
  },
  { name: "QS", color: "#080808", quality: ["Hi-Res", "SQ", "HQ", "SQ"] },
  { name: "SP", color: "#19e68c", quality: ["Hi-Res", "SQ", "HQ", "SQ"] },
  {
    name: "ETC",
    color: "#000000",
    quality: ["母带", "臻品", "全景", "Hi-Res", "SQ", "HQ", "SQ"],
  },
];
const supports = sources.map((source) => source.name);

export const Platform = (platform) => {
  return supports.includes(platform) ? platform : "ETC";
};

export const Quality = (platform) => {
  if (!supports.includes(platform)) platform = "ETC";
  return sources.find((s) => s.name === platform).quality;
};

export const PrimaryColor = (platform) => {
  platform = Platform(platform);
  return sources.find((s) => s.name === platform).color;
};
