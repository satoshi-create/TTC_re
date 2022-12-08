import React from "react";
import styles from "../styles/Company.module.css";
import Title from "./Title";
import Image from "next/image";

const Company = () => {
  return (
    <section className="parts-grid section-padding">
      <Title title={"Company"} />
      <div className={styles.box}>
        <table>
          <tbody>
            <tr>
              <th>在籍地</th>
              <td>日本</td>
            </tr>
            <tr>
              <th>住所</th>
              <td>
                〒160-0023 <br />
                東京都新宿区西新宿 6-12-1 <br />
                パークウエスト13F
              </td>
            </tr>
            <tr>
              <th>Tel</th>
              <td>03-3344-5540</td>
            </tr>
            <tr>
              <th>Fax</th>
              <td>03-3344-5505</td>
            </tr>
            <tr>
              <th className="th">設立</th>
              <td>2004年</td>
            </tr>
            <tr>
              <th className="th">資本総額</th>
              <td>
                ￥160,000,000-
                <br />
                (無担保社債発行高￥200,000,000.-)
              </td>
            </tr>
            <tr>
              <th className="th">取引銀行</th>
              <td>三菱東京ＵＦＪ銀行、三井住友銀行</td>
            </tr>
            <tr>
              <th className="th">日本輸出入者標準コード</th>
              <td>1NY17</td>
            </tr>
          </tbody>
        </table>
        <figure className={styles.figure}>
          <Image
            src="/googleMap.png"
            width={345}
            height={375}
            className={styles.heroImg}
            alt="hero-image"
          />
        </figure>
      </div>
    </section>
  );
};

export default Company;
