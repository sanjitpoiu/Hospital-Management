import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>About Us</h1>
      <p>HOME / ABOUT US</p>
      <div className={styles.aboutContent}>
        <p>
          My Bridge International UK is registered with the UK Charity Commission and has been actively involved since 2020 with a mission to transform the lives of vulnerable citizens of Africa through the provision of food, education, and medical care. Our objective is the welfare and betterment of those less fortunate; we want to bring about a positive change in the economic, political, and human development situation in all the places where we work.
        </p>
        <p>
          In the summer of 2022, our organization shifted its focus towards addressing the challenges faced by the African Healthcare system. We identified various areas within the current system that we found to be inadequate and began our quest to seek a robust and viable solution to help reshape the medical infrastructure in the African Continent. The digital system that we envision is the beginning of what we truly believe to be a positive step forward in providing dynamic medical support.
        </p>
        <h2>How We Help African Communities Move Forward?</h2>
        <ul>
          <li>Africa needs to take control of its future</li>
          <li>Africa needs to be self-sufficient</li>
          <li>Africa needs to have a system in place that encourages stakeholders and engages citizens for the betterment of African countries and the African continent as a whole</li>
          <li>All Africans need to set aside their differences and build trust in each other for the greater good of their countries and the continent as a whole</li>
        </ul>
        <p>
          Staying true to these beliefs, we look to transform the continent by promoting and fostering collaboration and strategic alliance between disparate factions and parts of society and with the well-wishers of Africa in the region and around the globe.
        </p>
        <h2>Meet the Team</h2>
        <h3>Jean-Michel Tchamba, CEO</h3>
        <p>
          Jean-Michel Tchamba is a qualified medical physicist. He has many years of experience in the medical field, including Senior Clinical Technologist, Senior Biomedical Technician, and Medical Physicist at a London-based NHS hospital. It was Jean-Michel who came up with the solution to address the imbalance in medical resources in the world and to reduce needless wastage and obsolescence through recycling and online exchanges.
        </p>
        <h3>Dr John Sandham CEng, Chairman</h3>
        <p>
          John has been chairman of EBME (www.ebme.co.uk) since 1999. He is recognised as an expert in his field of healthcare technology management. John is a senior research fellow at Middlesex University. He has been instrumental in changing device management policies and processes at many NHS and private healthcare organisations and has a proven track record in delivering improvements that advance regulatory compliance and patient care. His many years of equipment management and maintenance experience includes: biomedical, diagnostic imaging, endoscopy and pathology. John has in excess of 250 published educational articles. He has been published in the Open University Science review journal, IET Engineering Technology Journal, Clinical Services Journal, plus various other newspapers, procurement and scientific publications, and the EBME website www.ebme.co.uk. John is keen to share his knowledge and raise the profile of Medical Engineering.
        </p>
        <h2>Help From Like-Minded People and Organizations Is Welcome</h2>
        <p>
          Cooperation and strategic alliance between different groups and segments of society and support from well-wishers of a region across the globe can help to transform it.
        </p>
        <p>
          To achieve our mission, we need assistance from like-minded individuals and organizations. We need financial support from small businesses, big corporations, governments, and even individuals blessed with wealth. Being fortunate enough to help others is not a privilege but a responsibility.
        </p>
        <p>
          If you believe the same, then you can help us in our mission by getting involved with us to help those in need in the regions where we work. We invite you to support our actions by becoming our sponsor.
        </p>
        <p>
          CONTACT US
        </p>
      </div>
    </div>
  );
};

export default About;
