export const formatAgeZh = (years, months) => {
  let ageStr = "";
  if (years > 0) ageStr += `${years}年`;
  if (months > 0) ageStr += `${months}个月`;
  if (!ageStr) ageStr = "刚出生";
  return ageStr;
};

const zh = {
  title: "鱼子酱酱~ 🐱",
  header: "喵~人，你好！",
  introTemplate:
    "我叫小鱼（Cavyy），大名叫鱼子酱。我是一只{age}大的中国狸花猫，虽然我是橘色的，但是你看到我头上的M纹了吗，那可是经典的狸花猫特征。我现在跟我的妈妈住在中国湖南省衡阳市，如果你在野外见到我发现了我项圈上的主页，记得联系我的爸爸妈妈喔~",
  contactIntro: "你可以通过下面这些方式联系到他们~",
  contacts: [
    { type: "电话🇨🇳（微信）", phoneNumber: "+86 139 7453 1683" },
    { type: "电话🇨🇳（微信）", phoneNumber: "+86 173 7791 3255" },
    { type: "电话🇺🇸（WhatsApp）", phoneNumber: "+1 951-312-0287" },
    { type: "电话🇸🇬", phoneNumber: "+65 8965 4536" },
  ],
  gallery: "查看更多我的帅照与美照 ➜",
  formatAge: formatAgeZh
};

export default zh;