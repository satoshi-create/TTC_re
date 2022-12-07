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

export { links, contact };
