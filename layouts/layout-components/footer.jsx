import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <h3>© 2023 Robin Salih Axelsson</h3>
      <ul>
        <a href="https://www.linkedin.com/in/axelsson-robin/">LinkedIn</a>
        <a href="https://www.github.com/robinaxelsson">GitHub</a>
        <a href="https://www.quokka.se/">Software by Quokka</a>
        <span className="accent-word">robin.axelsson@quokka.se</span>
      </ul>
    </footer>
  );
};
