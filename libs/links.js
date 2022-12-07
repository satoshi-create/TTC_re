import { Globe, Mail, Phone, Menu } from "react-feather";

const links = [
  { name: "ホーム", path: "/" },
  { name: "装置一覧", path: "/" },
  { name: "会社概要", path: "/" },
  { name: "お問い合わせ", path: "/" },
];

const contact = [
  {
    path: "/",
    icon: <Mail />,
  },
  {
    path: "/",
    icon: <Phone />,
  },
];

const footerLinks = [
  {
    name: "会社情報",
    box: "box1",
    subItem: [
      { name: "本社", path: "/" },
      { name: "採用", path: "/" },
      { name: "アクセス", path: "/" },
    ],
  },
  {
    name: "製品情報",
    box: "box2",
    subItem: [
      { name: "販売製品一覧", path: "/" },
      { name: "レンタル製品一覧", path: "/" },
      { name: "買取製品一覧", path: "/" },
    ],
  },
];

export { links, contact, footerLinks };
