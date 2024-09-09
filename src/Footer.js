function Footer() {
  const currentYear = new Date().getFullYear();
  console.log("currentYear", currentYear);
  return (
    <div id="footer-div">
      <footer id="footer">
        © Kristen Chase {currentYear} | All Rights Reserved
      </footer>
    </div>
  );
}

export default Footer;
