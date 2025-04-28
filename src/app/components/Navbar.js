"use client";

import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { Container, Button } from "react-bootstrap";
import Image from "next/image";
import logo from "../photos/logo.jpeg";
import { useLanguage } from "../context/LanguageContext";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMobileMenuOpen(false); // Close mobile menu on link click
    }
  };

  useEffect(() => {
    const sections = ["home", "contact", "services"];
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
        <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div
          className={`${styles.navContent} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
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
            <select
              className={styles.languageSelect}
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              {languageOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Container>
    </nav>
  );
}
