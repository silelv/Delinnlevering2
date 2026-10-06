import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  href: string;
};

export default function Button({ text, href }: ButtonProps) {
  return (
    <Link href={href} className={styles.button}>
      {text}
    </Link>
  );
}