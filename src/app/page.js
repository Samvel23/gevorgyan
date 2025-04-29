"use client";

import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import logo from "./photos/logo.jpeg";
import gimmarco from "./photos/gimmarco.jpg";
import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
  FaPassport,
  FaLanguage,
  FaGraduationCap,
  FaBuilding,
} from "react-icons/fa";
import Navbar from "./components/Navbar";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { lang } = useLanguage();

  const heroServicesData = [
    {
      title: {
        eng: "Immigration Services",
        ru: "Иммиграционные услуги",
        arm: "Ներգաղթի ծառայություններ",
      },
      description: {
        eng: "Expert guidance for visa applications, residency, and citizenship processes.",
        ru: "Экспертное сопровождение в вопросах виз, резидентства и гражданства.",
        arm: "Փորձագիտական ​​աջակցություն վիզաների, բնակության և քաղաքացիության գործընթացներում:",
      },
      icon: <FaPassport size={40} />,
      style: "#333",
    },
    {
      title: {
        eng: "Certified Translation",
        ru: "Сертифицированный перевод",
        arm: "Վավերացված թարգմանություն",
      },
      description: {
        eng: "Accurate and certified translations for legal and official documents.",
        ru: "Точные и сертифицированные переводы юридических и официальных документов.",
        arm: "Ճշգրիտ և վավերացված թարգմանություններ իրավական և պաշտոնական փաստաթղթերի համար:",
      },
      icon: <FaLanguage size={40} />,
      style: "#121826",
    },
    {
      title: {
        eng: "Diploma Evaluation",
        ru: "Оценка диплома",
        arm: "Դիպլոմի գնահատում",
      },
      description: {
        eng: "Professional evaluation of academic credentials for international use.",
        ru: "Профессиональная оценка академических документов для международного использования.",
        arm: "Ակադեմիական հավաստագրերի մասնագիտական ​​գնահատում միջազգային օգտագործման համար:",
      },
      icon: <FaGraduationCap size={40} />,
      style: "#333",
    },
    {
      title: {
        eng: "LLCs, Corps, Business Setups",
        ru: "ООО, корпорации, создание бизнеса",
        arm: "ՍՊԸ-ներ, կորպորացիաներ, բիզնեսի ստեղծում",
      },
      description: {
        eng: "Comprehensive support for business formation and legal compliance.",
        ru: "Полная поддержка в создании бизнеса и соблюдении юридических норм.",
        arm: "Համապարփակ աջակցություն բիզնեսի ստեղծման և իրավական համապատասխանության համար:",
      },
      icon: <FaBuilding size={40} />,
      style: "#121826",
    },
  ];

  return (
    <main>
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <section id="home" className={styles.hero} aria-label="Hero Section">
        <Image
          src={logo}
          alt="Gevorgyan Legal Logo"
          width={200}
          height={200}
          className={styles.logo}
          priority
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
        {/* Hero Services Grid */}
        <div className={styles.heroServicesGrid}>
          {heroServicesData.map((service, index) => (
            <div
              key={index}
              className={styles.heroServiceCard}
              style={{ backgroundColor: service.style }}
              role="article"
            >
              <div className={styles.heroServiceIcon} aria-hidden="true">
                {service.icon}
              </div>
              <h3 className={styles.heroServiceTitle}>{service.title[lang]}</h3>
              <p className={styles.heroServiceDescription}>
                {service.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={styles.contactSection}
        aria-label="Contact Section"
      >
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
                ? "Name Surname:"
                : lang === "ru"
                ? "Имя Фамилия:"
                : "Անուն Ազգանուն:"}{" "}
              <a className={styles.contactLink}>
                {lang === "eng"
                  ? "Greg Gevorgyan"
                  : lang === "ru"
                  ? "Грег Геворгян"
                  : "Գրեգ Գևորգյան"}
              </a>
            </p>
            <p>
              {lang === "eng"
                ? "Phone:"
                : lang === "ru"
                ? "Телефон:"
                : "Հեռախոս:"}{" "}
              <a
                className={styles.contactLink}
                onClick={() => {
                  navigator.clipboard.writeText("+1 (818) 858-6845");
                }}
              >
                +1 (818) 858-6845
              </a>
            </p>
            <p>
              {lang === "eng"
                ? "Email:"
                : lang === "ru"
                ? "Эл. почта:"
                : "Էլ. հասցե:"}{" "}
              <a
                className={styles.contactLink}
                onClick={() => {
                  navigator.clipboard.writeText("gevorgyanlegal@yahoo.com");
                  alert("Email copied to clipboard");
                }}
              >
                gevorgyanlegal@yahoo.com
              </a>
            </p>
            <div className={styles.socialIcons}>
              <a
                href="https://wa.me/+18188586845"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={30} />
              </a>
              <a
                href="https://www.instagram.com/gevorgyan_legal/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className={styles.servicesSection}
        aria-label="Services Section"
      >
        <Container>
          <h2 className={styles.sectionTitle}>
            {lang === "eng"
              ? "Our Services"
              : lang === "ru"
              ? "Наши услуги"
              : "Ծառայություններ"}
          </h2>
          <div className={styles.servicesContent}>
            <div className={styles.servicesImageContainer}>
              <Image
                src={gimmarco}
                alt="Gevorgyan Legal Services"
                width={400}
                height={300}
                className={styles.servicesImage}
                quality={85}
                loading="lazy"
              />
            </div>
            <div className={styles.servicesText}>
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
          </div>
        </Container>
      </section>
    </main>
  );
}
