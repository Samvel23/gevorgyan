"use client";

import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { Container } from "react-bootstrap";
import Image from "next/image";
import logo from "../photos/logo.jpeg";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const { lang, setLang } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const sections = ["home", "contact", "services"];
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const navLinks = [
    {
      id: "home",
      label: {
        eng: "Home",
        ru: "Главная",
        arm: "Գլխավոր",
      },
    },
    {
      id: "contact",
      label: {
        eng: "Contact",
        ru: "Контакты",
        arm: "Կոնտակտներ",
      },
    },
    {
      id: "services",
      label: {
        eng: "Services",
        ru: "Услуги",
        arm: "Ծառայություններ",
      },
    },
  ];

  const languageOptions = [
    { code: "arm", label: "ARM" },
    { code: "ru", label: "RU" },
    { code: "eng", label: "ENG" },
  ];

  return (
    <nav className={styles.navbar}>
      <Container className={styles.navbarContainer}>
        <div className={styles.navbarBrand}>
          <Image
            src={logo}
            alt="Gevorgyan Legal Logo"
            width={50}
            height={50}
            className={styles.navbarLogo}
          />
          <span className={styles.navbarTitle}>
            {lang === "eng"
              ? "GEVORGYAN"
              : lang === "ru"
              ? "ГЕВОРГЯН"
              : "ԳԵՎՈՐԳՅԱՆ"}
          </span>
        </div>
        <div className={styles.navContent}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  className={`${styles.navLink} ${
                    activeSection === link.id ? styles.active : ""
                  }`}
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label[lang]}
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.languageToggle}>
            <p className={styles.langDisplay}>
              {languageOptions.map((option, index) => (
                <span
                  key={option.code}
                  className={`${styles.langItem} ${
                    lang === option.code ? styles.langActive : ""
                  }`}
                  onClick={() => setLang(option.code)}
                >
                  {option.label}
                  {index < languageOptions.length - 1 && "/"}
                  <span className={styles.langPopup}>{option.label}</span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </Container>
    </nav>
  );
}
