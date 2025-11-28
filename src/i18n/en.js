export const formatAgeEn = (years, months) => {
  let ageStr = "";
  if (years > 0) ageStr += `${years} year${years > 1 ? "s" : ""}`;
  if (months > 0) ageStr += `${months} month${months > 1 ? "s" : ""}`;
  if (!ageStr) ageStr = "just born";
  return ageStr;
};

const en = {
  title: "Caviar~ 🐱",
  header: "Meow~ Hello, human!",
  introTemplate:
    "My name is Cavyy (小鱼), and my full name is Caviar. I am a {age} Chinese Li Hua (Dragon Li) cat. Although my fur is orange, did you notice the classic 'M' pattern on my forehead? That’s a signature Li Hua mark! I live with my mom in Hengyang, Hunan Province, China. If you find me outdoors and see the link to my homepage on my collar, please remember to contact my mom and dad~",
  contactIntro: "You can reach them using the methods below~",
  contacts: [
    { type: "Phone 🇨🇳 (WeChat)", phoneNumber: "+86 139 7453 1683" },
    { type: "Phone 🇨🇳 (WeChat)", phoneNumber: "+86 173 7791 3255" },
    { type: "Phone 🇺🇸 (WhatsApp)", phoneNumber: "+1 951-312-0287" },
    { type: "Phone 🇸🇬", phoneNumber: "+65 8965 4536" },
  ],
  gallery: "See more of my handsome & cute photos ➜",
  formatAge: formatAgeEn
};

export default en;