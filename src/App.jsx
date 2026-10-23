import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Github, Linkedin, Mail, Download, Eye, Send } from "lucide-react";

function App() {

  const { scrollYProgress } = useScroll();

  const [activeSection, setActiveSection] = useState("home");

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  useEffect(() => {

    const handleScroll = () => {

      const sections = ["home","about","skills","projects","certificates","contact"];

      sections.forEach((section) => {

        const element = document.getElementById(section);

        if (element) {

          const rect = element.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }

        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

<div className="bg-[#020617] text-white min-h-screen relative overflow-hidden">

<Particles
  id="tsparticles"
  init={particlesInit}
  className="absolute inset-0 -z-10 pointer-events-none"
  options={{
    background: { color: "transparent" },
    fpsLimit: 60,
    particles: {
      number: {
        value: 60,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#00ffff" },
      links: {
        enable: true,
        distance: 150,
        color: "#00ffff",
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 1
      },
      size: {
        value: { min: 1, max: 3 }
      },
      opacity: {
        value: 0.5
      }
    }
  }}
/>

<motion.div
  className="pointer-events-none fixed w-[400px] h-[400px] rounded-full blur-3xl bg-cyan-500/20"
  animate={{
    x: mousePosition.x - 200,
    y: mousePosition.y - 200
  }}
  transition={{ type: "tween", ease: "linear", duration: 0.1 }}
/>

{/* FLOATING BACKGROUND ORBS */}

<motion.div
  animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
  transition={{ duration: 10, repeat: Infinity }}
  className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl top-20 left-10 pointer-events-none"
/>

<motion.div
  animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
  transition={{ duration: 12, repeat: Infinity }}
className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl top-40 right-10 pointer-events-none"/>

<motion.div
  animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
  transition={{ duration: 14, repeat: Infinity }}
className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl bottom-10 left-1/2 pointer-events-none"/>

<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl"></div>

{/* DARK GRADIENT BACKGROUND */}
<div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-black -z-20"></div>

{/* SUBTLE GRID PATTERN */}<div className="absolute inset-0 -z-10 opacity-20 pointer-events-none
bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),
linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]
bg-[size:60px_60px]">
</div>

{/* SCROLL PROGRESS BAR */}
<motion.div
  style={{ scaleX: scrollYProgress }}
  className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 origin-left z-50"
/>
  {/* NAVBAR */}
  <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

    <h1 className="text-xl font-bold">Hari Prasanth S</h1>

    <ul className="flex gap-6 text-gray-300">

<li>
<a href="#home"
className={activeSection === "home" ? "text-cyan-400" : "hover:text-white"}>
Home
</a>
</li>

<li>
<a href="#about"
className={activeSection === "about" ? "text-cyan-400" : "hover:text-white"}>
About
</a>
</li>

<li>
<a href="#skills"
className={activeSection === "skills" ? "text-cyan-400" : "hover:text-white"}>
Skills
</a>
</li>

<li>
<a href="#projects"
className={activeSection === "projects" ? "text-cyan-400" : "hover:text-white"}>
Projects
</a>
</li>

<li>
<a href="#certificates"
className={activeSection === "certificates" ? "text-cyan-400" : "hover:text-white"}>
Certificates
</a>
</li>

<li>
<a href="#contact"
className={activeSection === "contact" ? "text-cyan-400" : "hover:text-white"}>
Contact
</a>
</li>

</ul>

  </div>
</nav>

   <section
  id="home"
  className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24"
>

<motion.h1
initial={{ opacity: 0, y: -40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-6"
>
Hari Prasanth S
</motion.h1>

<TypeAnimation
sequence={[
"Information Technology Graduate (B.Tech, 2022–2026)",
2000,
"Java Developer",
2000,
"Proficient in SQL",
2000
]}
speed={50}
repeat={Infinity}
className="text-2xl text-gray-300 mb-4"
/>

<p className="text-gray-400 max-w-2xl mb-10">
Enthusiastic IT professional seeking opportunities to apply and grow
skills in software development, problem-solving, and teamwork
</p>

{/* Buttons */}

<div className="flex gap-6 flex-wrap justify-center">

<motion.a
href="/Resume.pdf"
download
whileHover={{ scale: 1.08 }}
whileTap={{ scale: 0.95 }}
className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-medium"
>
<Download size={18} />
Download Resume
</motion.a>

<motion.button
onClick={() => window.open("/Resume.pdf", "_blank")}
whileHover={{ scale: 1.08 }}
whileTap={{ scale: 0.95 }}
className="flex items-center gap-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg"
>
<Eye size={18} />
View Resume
</motion.button>

<motion.a
href="#contact"
whileHover={{ scale: 1.08 }}
whileTap={{ scale: 0.95 }}
className="flex items-center gap-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg"
>
<Send size={18} />
Contact Me
</motion.a>

</div>

{/* Social Icons */}

<div className="flex gap-6 mt-10 text-gray-400">

<a
href="https://github.com/HariPrasanth-24"
target="_blank"
className="hover:text-cyan-400 transition"
>
<Github size={28}/>
</a>

<a
href="https://linkedin.com/in/hari-prasanth-s-9b0b6525a"
target="_blank"
className="hover:text-cyan-400 transition"
>
<Linkedin size={28}/>
</a>

<a
href="mailto:shariprasanth202@gmail.com"
className="hover:text-cyan-400 transition"
>
<Mail size={28}/>
</a>

</div>

</section>

 {/* ABOUT SECTION */}
<motion.section
  id="about"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-24 px-6"
>

<h2 className="text-4xl font-bold text-center mb-16">
  About Me
</h2>

<div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-10">

{/* PROFILE + ABOUT */}
<div className="flex flex-col md:flex-row items-center gap-10">

{/* PROFILE IMAGE WITH BADGE */}
<div className="relative w-48 h-48 flex-shrink-0">

<img
  src="/hari.jpg"
  alt="profile"
  className="w-full h-full rounded-full border-4 border-cyan-500 object-cover"
/>

{/* ICON BADGE */}
<div className="absolute bottom-2 right-2 bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">

<span className="text-black text-xl">
🎓
</span>

</div>

</div>

{/* ABOUT TEXT */}

<p className="text-gray-400 text-lg leading-relaxed max-w-3xl">

Enthusiastic Information Technology student seeking opportunities to
apply and grow skills in software development, problem-solving, and
teamwork. Passionate about building real-world solutions through
technology.

</p>

</div>

{/* DIVIDER */}

<div className="border-t border-gray-800 my-10"></div>

{/* EDUCATION */}
<div>

<h3 className="text-2xl font-semibold text-cyan-400 mb-4">
Education
</h3>

<p className="text-lg font-medium">
Bachelor of Technology — Information Technology
</p>

<p className="text-gray-400 mt-2">
Status: Recently Graduated — Fresher
</p>

<p className="text-gray-400 mt-3">
<strong>Academic Highlights:</strong> Multiple system development projects • Strong foundation in IT principles • Practical problem-solving experience • Team collaboration skills • Ready for industry challenges
</p>

</div>

</div>


{/* FEATURE CARDS */}

<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">

{/* Programming Fundamentals */}
<motion.div
whileHover={{ y: -8, scale: 1.03 }}
transition={{ type: "spring", stiffness: 200 }}
className="bg-white/5 border border-white/10 rounded-xl p-8"
>

<div className="text-cyan-400 text-4xl mb-4">
{"</>"}
</div>

<h3 className="text-xl font-semibold mb-2">
Programming Fundamentals
</h3>

<p className="text-gray-400">
Proficient in Java, Sql, and web technologies
</p>

</motion.div>


{/* Data & Algorithms */}
<motion.div
whileHover={{ y: -8, scale: 1.03 }}
transition={{ type: "spring", stiffness: 200 }}
className="bg-white/5 border border-white/10 rounded-xl p-8"
>

<div className="text-cyan-400 text-4xl mb-4">
🛢
</div>

<h3 className="text-xl font-semibold mb-2">
Data & Algorithms
</h3>

<p className="text-gray-400">
Basic knowledge in DSA and familiar with DBMS concepts
</p>

</motion.div>


{/* Web Development */}
<motion.div
whileHover={{ y: -8, scale: 1.03 }}
transition={{ type: "spring", stiffness: 200 }}
className="bg-white/5 border border-white/10 rounded-xl p-8"
>

<div className="text-cyan-400 text-4xl mb-4">
🌐
</div>

<h3 className="text-xl font-semibold mb-2">
Web Development
</h3>

<p className="text-gray-400">
Full-stack development with modern tools
</p>

</motion.div>


{/* Continuous Learning */}
<motion.div
whileHover={{ y: -8, scale: 1.03 }}
transition={{ type: "spring", stiffness: 200 }}
className="bg-white/5 border border-white/10 rounded-xl p-8"
>

<div className="text-cyan-400 text-4xl mb-4">
🎓
</div>

<h3 className="text-xl font-semibold mb-2">
Continuous Learning
</h3>

<p className="text-gray-400">
Multiple certifications and workshops
</p>

</motion.div>

</div>

</motion.section>
     {/* SKILLS SECTION */}
<motion.section
  id="skills"
  className="py-24 px-6 text-center"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

<h2 className="text-4xl font-bold mb-4">
  Technical Skills
</h2>

{/* Gradient underline */}
<div className="w-20 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6"></div>

<p className="text-gray-400 max-w-2xl mx-auto mb-16">
  A comprehensive set of technical skills acquired through academic projects,
  internships, and self-learning
</p>

<div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

{/* Languages */}
<motion.div
whileHover={{ y: -10 }}
transition={{ type: "spring", stiffness: 200 }}
className="bg-[#0f172a] border border-white/10 p-8 rounded-xl text-left"
>

<div className="flex items-center gap-3 mb-6">

<span className="text-cyan-400 text-3xl">
{"</>"}
</span>

<h3 className="text-2xl font-semibold">
Languages
</h3>

</div>

<div className="flex flex-wrap gap-3">

<span className="bg-gray-800 px-4 py-2 rounded-full text-sm">
Java
</span>

<span className="bg-gray-800 px-4 py-2 rounded-full text-sm">
SQL
</span>


</div>

</motion.div>


{/* Web Technologies */}
<motion.div
whileHover={{ y: -10 }}
transition={{ type: "spring", stiffness: 200 }}
className="bg-[#0f172a] border border-white/10 p-8 rounded-xl text-left"
>

<div className="flex items-center gap-3 mb-6">

<span className="text-cyan-400 text-3xl">
🌐
</span>

<h3 className="text-2xl font-semibold">
Web Technologies
</h3>

</div>

<div className="flex flex-wrap gap-3">

<span className="bg-gray-800 px-4 py-2 rounded-full text-sm">
HTML
</span>

<span className="bg-gray-800 px-4 py-2 rounded-full text-sm">
CSS
</span>

<span className="bg-gray-800 px-4 py-2 rounded-full text-sm">
JavaScript
</span>

<span className="bg-gray-800 px-4 py-2 rounded-full text-sm">
Responsive Design
</span>

</div>

</motion.div>


{/* Databases */}
<motion.div
whileHover={{ y: -10 }}
transition={{ type: "spring", stiffness: 200 }}
className="bg-[#0f172a] border border-white/10 p-8 rounded-xl text-left"
>

<div className="flex items-center gap-3 mb-6">

<span className="text-cyan-400 text-3xl">
🛢
</span>

<h3 className="text-2xl font-semibold">
Databases
</h3>

</div>

<div className="flex flex-wrap gap-3">

<span className="bg-gray-800 px-4 py-2 rounded-full text-sm">
MySQL
</span>

<span className="bg-gray-800 px-4 py-2 rounded-full text-sm">
Database Design
</span>

<span className="bg-gray-800 px-4 py-2 rounded-full text-sm">
SQL Queries
</span>

</div>

</motion.div>


{/* Tools */}
<motion.div
whileHover={{ y: -10 }}
transition={{ type: "spring", stiffness: 200 }}
className="bg-[#0f172a] border border-white/10 p-8 rounded-xl text-left"
>

<div className="flex items-center gap-3 mb-6">

<span className="text-cyan-400 text-3xl">
🔧
</span>

<h3 className="text-2xl font-semibold">
Tools & IDEs
</h3>

</div>

<div className="flex flex-wrap gap-3">

<span className="bg-gray-800 px-4 py-2 rounded-full text-sm">
VS Code
</span>

<span className="bg-gray-800 px-4 py-2 rounded-full text-sm">
Eclipse
</span>

<span className="bg-gray-800 px-4 py-2 rounded-full text-sm">
Git
</span>

<span className="bg-gray-800 px-4 py-2 rounded-full text-sm">
GitHub
</span>

</div>

</motion.div>

</div>

</motion.section>
    {/* PROJECTS SECTION */}
<section id="projects" className="py-24 px-6">

  <h2 className="text-4xl font-bold text-center mb-4">
    Projects
  </h2>

  <p className="text-gray-400 text-center mb-16">
    Academic and personal projects demonstrating practical application of technical skills
  </p>

  <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

    {/* PROJECT 1 */}
    <motion.div
  whileHover={{ y: -12, scale: 1.03 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="group relative bg-[#020617] rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/40"
>

  {/* IMAGE */}
  <div className="overflow-hidden">
    <img
      src="/project1.png"
      alt="Student Project Collaboration System"
      className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
    />
   
  </div>

  {/* CONTENT */}
  <div className="p-6">

    <h3 className="text-xl font-semibold text-cyan-400 mb-3">
      Student Project Collaboration System
    </h3>

    <p className="text-gray-400 mb-6">
      Platform where students collaborate on projects, assign tasks,
      and track progress efficiently.
    </p>

    {/* TECH STACK */}
    <div className="flex flex-wrap gap-2 mb-6">
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">HTML</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">CSS</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">SQL</span>
    </div>

    {/* CODE BUTTON */}
  <a
      href="https://github.com/HariPrasanth-24"
      className="block text-center border border-gray-700 py-2 rounded-lg hover:bg-gray-800 transition"
    >
      Code
    </a>
  </div>

</motion.div>

    {/* PROJECT 2 */}
   <motion.div
  whileHover={{ y: -12, scale: 1.03 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="group relative bg-[#020617] rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/40"
>

  <div className="overflow-hidden">
    <img
      src="/project2.png"
      alt="Travel Companion Finder System"
      className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
    />
  </div>

  <div className="p-6">

    <h3 className="text-xl font-semibold text-cyan-400 mb-3">
      ERP System — Academic Module
    </h3>

    <p className="text-gray-400 mb-6">
     Comprehensive academic management system with attendance, examination and research modules. Features responsive UI and backend-ready structure.
    </p>

    <div className="flex flex-wrap gap-2 mb-6">
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">HTML</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">CSS</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Java Script</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Dashboard</span>
    </div>

    <a
      href=""
      className="block text-center border border-gray-700 py-2 rounded-lg hover:bg-gray-800 transition"
    >
      Code
    </a>

  </div>

</motion.div>

    {/* PROJECT 3 */}
   <motion.div
  whileHover={{ y: -12, scale: 1.03 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="group relative bg-[#020617] rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/40"
>

  <div className="overflow-hidden">
    <img
      src="/project3.png"
      alt="Cybersecurity Threat Intelligence Dashboard"
      className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
    />
  </div>

  <div className="p-6">

    <h3 className="text-xl font-semibold text-cyan-400 mb-3">
      Hotel Management System
    </h3>

    <p className="text-gray-400 mb-6">
      Complete hotel management solution with reservation, billing, and check-in/check-out modules. Includes UI design and form validation with JavaScript.</p>

    <div className="flex flex-wrap gap-2 mb-6">
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">HTML</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">CSS</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Java Script</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Sql</span>
    </div>

    <a
      href=""
      className="block text-center border border-gray-700 py-2 rounded-lg hover:bg-gray-800 transition"
    >
      Code
    </a>

  </div>

</motion.div>

    {/* PROJECT 4 — AI IMAGE TAMPERING DETECTION */}
    <motion.div
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group relative bg-[#020617] rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/40"
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src="/project4.png"
          alt="AI Image Tampering Detection"
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-cyan-400 mb-3">
          AI-Driven Original and Tampered Image Detection
        </h3>

        <p className="text-gray-400 mb-6">
          An AI-based system that detects manipulated images and identifies
          suspicious regions using CNN, Vision Transformer, and LLM-based analysis.
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
            Python
          </span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
            TensorFlow/Keras
          </span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
            CNN
          </span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
            Vision Transformer
          </span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
            OpenCV
          </span>
        </div>
      </div>
    </motion.div>

  </div>

</section>
{/* CERTIFICATIONS SECTION */}
<section id="certificates" className="py-24 px-6 relative z-10">

  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-4xl font-bold mb-12 flex items-center gap-3"
  >
    🎓 Certifications
  </motion.h2>

  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

    {/* Certificate 1 */}
    <motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="bg-gray-800 p-6 rounded-xl flex justify-between items-center"
>

  <div>
    <h3 className="text-xl font-semibold">
      NASSCOM — Cybersecurity Fundamentals
    </h3>

    <p className="text-gray-400">
      FutureSkills Prime
    </p>
  </div>
<button
  onClick={(e) => {
    e.stopPropagation();
    window.open("/Certf1.pdf", "_blank");
  }}
  className="text-cyan-400 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700"
>
  👁 View
</button>
</motion.div>

    {/* Certificate 2 */}
    <motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="bg-gray-800 p-6 rounded-xl flex justify-between items-center"
>

  <div>
    <h3 className="text-xl font-semibold">
      Oracle Cloud Infrastructure 2024 Generative AI
    </h3>
    <p className="text-gray-400">
      Oracle Certified Professional
    </p>
  </div>

  <button
    onClick={() => window.open("/Certf2.pdf", "_blank")}
    className="flex items-center gap-2 whitespace-nowrap text-cyan-400 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700"
  >
    👁 View
  </button>

</motion.div>

    {/* Certificate 3 */}
    <motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="bg-gray-800 p-6 rounded-xl flex justify-between items-center"
>
  <div>
    <h3 className="text-xl font-semibold">
      Introduction to Cybersecurity
    </h3>
    <p className="text-gray-400">
      Cisco Networking Academy
    </p>
  </div>

  <button
    onClick={() => window.open("/Certf3.pdf", "_blank")}
    className="flex items-center gap-2 whitespace-nowrap text-cyan-400 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700"
  >
    👁 View
  </button>

</motion.div>

    {/* Certificate 4 */}
    <motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="bg-gray-800 p-6 rounded-xl flex justify-between items-center"
>
  <div>
    <h3 className="text-xl font-semibold">
      SQL Certification
    </h3>
    <p className="text-gray-400">
      Simplilearn
    </p>
  </div>

  <button
    onClick={() => window.open("/Certf4.pdf", "_blank")}
    className="flex items-center gap-2 whitespace-nowrap text-cyan-400 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700"
  >
    👁 View
  </button>

</motion.div>
    {/* Certificate 5 */}
    <motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="bg-gray-800 p-6 rounded-xl flex justify-between items-center"
>
  <div>
    <h3 className="text-xl font-semibold">
      Java Developer Certification
    </h3>
    <p className="text-gray-400">
      Infosys Springboard
    </p>
  </div>

  <button
    onClick={() => window.open("/Certf5.pdf", "_blank")}
    className="flex items-center gap-2 whitespace-nowrap text-cyan-400 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700"
  >
    👁 View
  </button>

</motion.div>

    {/* Certificate 6 */}
   <motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="bg-gray-800 p-6 rounded-xl flex justify-between items-center"
>
  <div>
    <h3 className="text-xl font-semibold">
      Java Full Stack
    </h3>
    <p className="text-gray-400">
      Wipro
    </p>
  </div>

  <button
    onClick={() => window.open("/Certf6.pdf", "_blank")}
    className="flex items-center gap-2 whitespace-nowrap text-cyan-400 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700"
  >
    👁 View
  </button>

</motion.div>
  </div>

</section>
{/* CONTACT SECTION */}
<section id="contact" className="relative z-10 py-24 px-6">

<motion.h2
initial={{ opacity: 0, y: -30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
className="text-4xl font-bold text-center mb-4"
>
Get In Touch
</motion.h2>

<div className="w-20 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6"></div>

<p className="text-gray-400 text-center mb-16">
I'm always open to discussing new opportunities, projects, or just having a chat
</p>

<div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

{/* CONTACT INFO */}
<motion.div
initial={{ opacity: 0, x: -40 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
className="bg-gray-900 border border-gray-800 rounded-xl p-8"
>

<h3 className="text-2xl font-semibold mb-8">
Contact Information
</h3>

<div className="space-y-8 text-gray-300">

{/* Email */}
<div className="flex items-center gap-4">

<a
href="mailto:shariprasanth202@gmail.com"
className="flex items-center gap-4 hover:text-cyan-400"
>

<svg
xmlns="http://www.w3.org/2000/svg"
className="w-6 h-6 text-cyan-400"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
d="M3 8l9 6 9-6M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8"
/>
</svg>

<div>
<p className="text-gray-400">Email</p>
<p className="text-white">shariprasanth202@gmail.com</p>
</div>

</a>

</div>


{/* Phone */}
<div className="flex items-center gap-4">

<svg xmlns="http://www.w3.org/2000/svg"
className="w-6 h-6 text-cyan-400"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor">

<path strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
d="M3 5h2l3 7-1.5 1.5a16 16 0 006 6L14 18l7 3v2a2 2 0 01-2 2C10 25 1 16 1 5a2 2 0 012-2z"/>

</svg>

<div>
<p className="text-gray-400">Phone</p>

<a
href="tel:+916374971440"
className="flex items-center gap-4 hover:text-cyan-400"
>

{/* phone icon svg */}

<div>
<p className="text-gray-400">Phone</p>
<p>+91 6374971440</p>
</div>

</a>
</div>

</div>


{/* LinkedIn */}
<div className="flex items-center gap-4">

<svg xmlns="http://www.w3.org/2000/svg"
className="w-6 h-6 text-cyan-400"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor">

<path strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4V9h4v2"/>

<circle cx="4" cy="4" r="2"/>
<rect x="2" y="9" width="4" height="12"/>

</svg>

<div>
<p className="text-gray-400">LinkedIn</p>

<a
href="https://linkedin.com/in/hari-prasanth-s-9b0b6525a"
target="_blank"
className="flex items-center gap-4 hover:text-cyan-400"
>

{/* linkedin icon svg */}

<div>
<p className="text-gray-400">LinkedIn</p>
<p>Connect on LinkedIn</p>
</div>

</a>
</div>

</div>


{/* GitHub */}
<div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">

<svg xmlns="http://www.w3.org/2000/svg"
className="w-6 h-6 text-cyan-400"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor">

<path strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"

d="M12 2a10 10 0 00-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.6.07-.59.07-.59 1 .07 1.52 1.02 1.52 1.02.88 1.5 2.3 1.06 2.86.81.09-.65.35-1.06.63-1.31-2.22-.25-4.55-1.1-4.55-4.9 0-1.08.39-1.97 1.02-2.66-.1-.25-.44-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0112 6.8a9.5 9.5 0 012.5.34c1.9-1.3 2.74-1.02 2.74-1.02.55 1.39.2 2.42.1 2.67.64.69 1.02 1.58 1.02 2.66 0 3.8-2.33 4.64-4.55 4.9.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"/>

</svg>

<div>

<p className="text-gray-400">GitHub</p>

<a
href="https://github.com/HariPrasanth-24"
target="_blank"
className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg hover:bg-gray-700"
>

{/* github icon svg */}

<div>
<p className="text-gray-400">GitHub</p>
<p className="text-cyan-400">View GitHub Profile</p>
</div>

</a>

</div>

</div>

</div>

</motion.div>


{/* CONTACT FORM */}
<motion.div
initial={{ opacity: 0, x: 40 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
className="bg-gray-900 border border-gray-800 rounded-xl p-8"
>

<h3 className="text-2xl font-semibold mb-8">
Send a Message
</h3>

<form className="space-y-6">

<input
type="text"
placeholder="Your Name"
className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
/>

<input
type="email"
placeholder="Your Email"
className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
/>

<textarea
rows="5"
placeholder="Your Message"
className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
/>

<button
type="submit"
className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg flex items-center justify-center gap-2">

<svg xmlns="http://www.w3.org/2000/svg"
className="w-5 h-5"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor">

<path strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
d="M5 12l14-7-7 14-2-5-5-2z"/>

</svg>

Send Message

</button>

</form>

</motion.div>

</div>

</section>
    </div>
  );
}

export default App;
