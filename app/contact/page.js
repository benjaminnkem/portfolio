import PageContainer from "../../components/Common/Shared/page-container";
import ContactContent from "./contact-content";
import "./contact.css";

export const metadata = {
  title: "Benjamin Nkem - Contact Me 🤙☎",
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
