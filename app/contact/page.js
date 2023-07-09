import PageContainer from "../page-container";
import ContactContent from "./contact-content";
import "./contact.css";

export const metadata = {
  title: "Contact Me - Benjamin Nkem",
};

const ContactPage = () => {
  return (
    <>
      <main>
        <PageContainer>
          <ContactContent />
        </PageContainer>
      </main>
    </>
  );
};

export default ContactPage;
