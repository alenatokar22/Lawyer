import React from "react";
import sertificate_1 from "../photo/sertificate_1.jpg"

const About = () => {
  return (
    <div className="container">
      <div className="about">
        <div className="about__text">
          <p>
            <b>Освіта:</b> вища, закінчила Національну юридичну академію України
            імені ... і отримала повну вищу освіту за спеціальністю
            "Правознавство" та здобула кваліфікацію юриста.
          </p>
          <p>
            Склала іспит та отримала свідоцтво про право на зайняття
            адвокатською діяльністю серія КВ № 3054, що було видане Київською
            міською кваліфікаційно-дисциплінарною комісією адвокатури на
            підставі рішення №13-8-13 із внесенням у єдиний реєстр адвокатів
            України. Досвід роботи у сфері права: понад 10 років.
          </p>
          <p>
            <b>Спеціалізація:</b> цивільне право, трудове право, господарське
            право, адміністративне право, податкове та митне право.
          </p>
        </div>
        <div className="about__title">
          <h1>ПРО МЕНЕ</h1>
        </div>
      </div>
      <div className="sertifacate">
        <img src={sertificate_1} alt="" />
        <img src={sertificate_1} alt="" />
        <img src={sertificate_1} alt="" />
      </div>
    </div>
  );
};

export default About;
