import React from "react";
import Title from "./Title";
import Image from "next/image";
import styles from "../styles/Contact.module.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Textarea,
  Input,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <section className="parts-grid section-padding">
      <Title title={"Company"} />
      <FormControl isRequired>
        <Input placeholder="名前" className={styles.input} />
      </FormControl>
      <FormControl isRequired>
        <Input placeholder="メールアドレス" className={styles.input} />
      </FormControl>
      <FormControl>
        <Select placeholder="お問い合わせ内容" className={styles.input}>
          <option>採用について</option>
          <option>ビジネスについて</option>
        </Select>
      </FormControl>
      <Textarea
        placeholder="メッセージ"
        size="sm"
        className={`${styles.input} ${styles.textarea}`}
      />
    </section>
  );
};

export default Contact;
