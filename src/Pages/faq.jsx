import React, { useState } from 'react';
import './faq.css';
import ArrowDown from '../assets/ArrowDown.svg';
import ArrowUp from '../assets/ArrowUp.svg';

const faqData = [
  {
    question: "How fast will I receive my requests?",
    answer:
      "I strive to deliver requests as quickly as possible, typically within a few business days after our initial discussion. Once I receive the downpayment, I will start giving you updates on the progress. If you need it faster, feel free to reach out!",
  },
  {
    question: "What if I'm not satisfied with the final product?",
    answer:
      "Client satisfaction is a priority. I offer revisions based on your feedback to make sure the final product aligns with your expectations.",
  },
  {
    question: "Do you work on weekends or holidays?",
    answer:
      "Generally, I work on weekdays. However, for urgent projects or deadlines, I can accommodate weekend work after discussion.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payments are generally split into milestones. An initial deposit is required to start the project, with the remaining paid upon completion or predefined stages.",
  },{
  question: "Who are the developers " ,
  answer: "There are no external Devlopers, I am the only one who will be communicating with you and doing all the work. We might sometime hire external designer's to help with designs But the development of project will be done by me, I will be solely accountable for the MVP"
  } , {
    question: "If i want to add something new after the initial discussion?",
    answer: "The number of changes you can make depends on your subscription plan. We offer various tiers to suit different needs and volumes. If you want to add something new, you can do so but if it extends the timeline,you might have to pay more for the extra time. If you belive that you might need to add something new constantly, you might consider buying Pro Plan."
  }
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  function handleClick(index) {
    if (openIndex === index) {
      
      setOpenIndex(null); // close if clicked again
    } else {
     
      setOpenIndex(index); // open this one
    }
  }

  return (
    <section id="faq" className="section-faq">
      <div className="faq-heading">
        <h1 className="doubt">Doubts</h1>
        <h2 className="doubt2">We are here to help you with your doubts.</h2>
      </div>

      <div className="faq-content">
        {faqData.map(function (item, index) {
          const isOpen = openIndex === index;
          const faqItemClass = isOpen ? 'faq-question1 open' : 'faq-question1';
          const answerClass = isOpen ? 'faq-answer open' : 'faq-answer';
          const iconSrc = isOpen ? ArrowUp : ArrowDown;

          return (
            <div key={index} className="faq-item">
              <div className={faqItemClass} onClick={function () { handleClick(index); }}>
                <h3 className="question1">
                  {item.question}
                  <img src={iconSrc} alt="Toggle" className="icon-rotate" />
                </h3>
              </div>

              <div className={answerClass}>
                <p className="answer1">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faq;
