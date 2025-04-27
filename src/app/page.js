"use client";

import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import logo from "./photos/logo.jpeg";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import Navbar from "./components/Navbar";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { lang } = useLanguage();
  return (
    <main>
      {/* Navbar */}
      <Navbar />

      {/* Home Section - Navy Blue */}
      <section id="home" className={styles.hero}>
        <Image
          src={logo}
          alt="Gevorgyan Legal Logo"
          width={150}
          height={150}
          className={styles.logo}
        />
        <h1 className={styles.heroTitle}>
          {lang === "eng"
            ? "GEVORGYAN"
            : lang === "ru"
            ? "ГЕВОРГЯН"
            : "ԳԵՎՈՐԳՅԱՆ"}
        </h1>
        <h2 className={styles.heroSubtitle}>
          {lang === "eng"
            ? "Legal Consulting"
            : lang === "ru"
            ? "Юридическое консультирование"
            : "Իրավաբանական խորհրդատվություն"}
        </h2>
        <Button
          className={styles.callButton}
          style={{ backgroundColor: "#1a2b49", color: "#ffffff" }}
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }}
        >
          {lang === "eng"
            ? "Contact Us"
            : lang === "ru"
            ? "Свяжитесь с нами"
            : "Կապվեք մեզ հետ"}
        </Button>
      </section>

      {/* Contact Section - Gold */}
      <section id="contact" className={styles.contactSection}>
        <Container>
          <h2 className={styles.sectionTitle}>
            {lang === "eng"
              ? "Get In Touch"
              : lang === "ru"
              ? "Свяжитесь с нами"
              : "Կապվեք մեզ հետ"}
          </h2>
          <div className={styles.contactInfo}>
            <p>
              {lang === "eng"
                ? "Phone:"
                : lang === "ru"
                ? "Телефон:"
                : "Հեռախոս:"}{" "}
              <a className={styles.contactLink}>+1 (818) 858-6845</a>
            </p>
            <p>
              {lang === "eng"
                ? "Email:"
                : lang === "ru"
                ? "Эл. почта:"
                : "Էլ. հասցե:"}{" "}
              <a
                href="mailto:info@gevorgyanlegal.com"
                className={styles.contactLink}
              >
                info@gevorgyanlegal.com
              </a>
            </p>
            <div className={styles.socialIcons}>
              <a
                href="https://wa.me/+18188586845"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FaWhatsapp size={30} />
              </a>
              <a
                href="https://instagram.com/gevorgyanlegal"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://t.me/gevorgyanlegal"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FaTelegramPlane size={30} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section - Ivory */}
      <section id="services" className={styles.servicesSection}>
        <Container>
          <h2 className={styles.sectionTitle}>
            {lang === "eng"
              ? "Our Services"
              : lang === "ru"
              ? "Наши услуги"
              : "Մեր ծառայությունները"}
          </h2>
          <div className={styles.servicesContent}>
            <p>
              {lang === "eng"
                ? "At Gevorgyan Legal Consulting, we provide expert legal services tailored to your needs. Our team is dedicated to delivering professional advice in various legal domains, ensuring your peace of mind."
                : lang === "ru"
                ? "В Gevorgyan Legal Consulting мы предоставляем экспертные юридические услуги, соответствующие вашим потребностям. Наша команда нацелена на предоставление профессиональных консультаций в различных юридических областях, обеспечивая ваше спокойствие."
                : "Գևորգյան իրավաբանական խորհրդատվությունում մենք մատուցում ենք մասնագիտական ​​իրավաբանական ծառայություններ, որոնք հարմարեցված են ձեր կարիքներին։ Մեր թիմը նվիրված է տարբեր իրավական ոլորտներում մասնագիտական ​​խորհրդատվություն տրամադրելուն՝ ապահովելով ձեր հանգստությունը։"}
            </p>
            <ul>
              <li>
                {lang === "eng"
                  ? "Business Law"
                  : lang === "ru"
                  ? "Бизнес-право"
                  : "Բիզնես-իրավունք"}
              </li>
              <li>
                {lang === "eng"
                  ? "Immigration Services"
                  : lang === "ru"
                  ? "Иммиграционные услуги"
                  : "Ներգաղթի ծառայություններ"}
              </li>
              <li>
                {lang === "eng"
                  ? "Contract Drafting"
                  : lang === "ru"
                  ? "Составление договоров"
                  : "Դաշնագրերի կազմում"}
              </li>
              <li>
                {lang === "eng"
                  ? "Legal Advisory"
                  : lang === "ru"
                  ? "Юридическая консультация"
                  : "Իրավաբանական խորհրդատվություն"}
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}
