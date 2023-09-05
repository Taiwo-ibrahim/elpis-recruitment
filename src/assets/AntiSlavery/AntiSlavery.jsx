import React from 'react'
import "./AntiSlavery.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function AntiSlavery() {
  return (
    <div className='antislavery__container'>
      <div id='antislavery-top'>
        <Navbar 
          contactId = "contactId"
        /> 
      </div>
      <div className='antislavery__container-hero_text'>
        <h1>Anti-slavery and Human Trafficking Policy</h1>
      </div>

      <div className='antislavery__container-section_1'>
        <h2>1. Policy Statement</h2>
        <div className='antislavery__container-section_1-content'>
          <p>
            <span>1.1</span>  Modern slavery is a crime and a violation of fundamental human rights. It takes various forms such as slavery, servitude, forced and compulsory labor
            and human trafficking, all of which have in common the deprivation of a person’s liberty by another in order to exploit them for personal or commercial
            gain. We have a zero tolerance approach to modern slavery and we are committed to acting ethically and with integrity in all our business dealings and
            relationships and to implementing and enforcing effective systems and controls to ensure modern slavery is not taking place anywhere in our own
            business or any of our supply chains.
          </p>
          <p>
            <span>1.2</span>  We are also committed to ensuring there is transparency in our own business and in our approach to tackling modern slavery throughout our supply chains, consistent with our disclosure obligations under the Modern Slavery Act 2015. We expect the same high standards from all of our contractors, suppliers and other business partners, and as part of our contracting processes, we include specific prohibitions against the use of forced, compulsory, or trafficked labor, or anyone held in slavery or servitude, whether adults or children, and we expect that our suppliers will hold their own suppliers to the same high standards.
          </p>
          <p>
           <span>1.3</span>This policy applies to all persons working for us or on our behalf in any capacity, including employees at all levels, directors, officer, agency workers, seconded workers, volunteers, interns, agents, contractors, external consultants, third-party representatives and business partners.
          </p>
          <p>
           <span>1.4</span> This policy does not form part of any employee’s contract of employment and we may amend it at any time.
          </p>
        </div>
      </div>

      <div className='antislavery__container-section_2'>
        <h2>2. Responsibility for the Policy</h2>
        <div className='antislavery__container-section_2-content'>
          <p>
            <span>2.1</span>  The board of directors has overall responsibility for ensuring this policy complies with our legal and ethical obligations, and that all those under our control comply with it.
          </p>
          <p>
            <span>2.2</span>  The compliance manager has primary and day-to-day responsibility for implementing this policy, monitoring its use and effectiveness, dealing with any queries about it, and auditing internal control systems and procedures to ensure they are effective in countering modern slavery.
          </p>
          <p>
            <span>2.3</span>  Management at all levels are responsible for ensuring those reporting to them understand and comply with this policy and are given adequate and regular training on it and the issue of modern slavery in supply chains.
          </p>
          <p>
            <span>2.4</span> You are invited to comment on this policy and suggest ways in which it might be improved. Comments, suggestions, and queries are encouraged and should be addressed to the compliance manager.
          </p>
        </div>
      </div>

      <div className='antislavery__container-section_3'>
        <h2>3. Compliance with the policy</h2>
        <div className='antislavery__container-section_3-content'>
          <p>
            <span>3.1 </span> You must ensure that you read, understand, and comply with this policy.
          </p>
          <p>
            <span>3.2 </span>  The prevention, detection, and reporting of modern day slavery in any part of our business or supply chains is the responsibility of all those working for us or under our control. You are required to avoid any activity that might lead to, or suggest a breach of this policy.
          </p>
          <p>
            <span>3.3 </span>  You must notify the compliance manager as soon as possible if you believe or suspect that a conflict with this policy has occurred, or may occur in the future.
          </p>
          <p>
            <span>3.4 </span> You are encouraged to raise concern about any issue or suspicion of modern slavery in any parts of our business or supply chains of any supplier tier at the earliest possible stage.
          </p>
          <p>
            <span>3.5 </span>  If you believe or suspect a breach of this policy has occurred or that it may occur, you must notify the compliance manager as soon as possible.
          </p>
          <p>
            <span>3.6 </span>  You If you are unsure about whether a particular act, the treatment of workers more generally, or their working conditions within any tier of our supply chains constitutes any of the various forms of modern slavery, raise it with the compliance manager.
          </p>
          <p>
            <span>3.7 </span>  We aim to encourage openness and will support anyone who raises genuine concerns in good faith under this policy, even if they turn out to be mistaken. We are committed to ensuring no one suffers any detrimental treatment as a result of reporting in good fait their suspicion that modern slavery of whatever form is or may be taking place in any part of our own business or in any of our supply chains. Detrimental treatment includes dismissal, disciplinary action, threats, or other unfavorable treatment connected with raising a concern. If you believe that you have suffered any such treatment, you should inform the compliance manager immediately. If the matter is not remedied, and you are an employee, you should raise it
            formally using our Grievance Procedure.
          </p>
        </div>
      </div>

      <div className='antislavery__container-section_4'>
        <h2>4. Communication and awareness of this policy</h2>
        <div className='antislavery__container-section_4-content'>
          <p>
            <span>4.1</span>  Training on this policy and on the risk our business faces from modern slavery in its supply chains, forms part of the induction process for all individuals who work for us, and regular training will be provided as necessary.
          </p>
          <p>
            <span>4.2 </span> Our zero-tolerance approach to modern slavery must be communicated to all suppliers, contractors, and business partners at the outset of our 
            business relationship with them and reinforced as appropriate thereafter.
          </p>
        </div>
      </div>

      <div className='antislavery__container-section_5'>
        <h2>5. Breaches to this policy</h2>
        <div className='antislavery__container-section_5-content'>
          <p>
            <span>5.1</span>  Training employee who breaches this policy will face disciplinary action which could result in dismissal for misconduct or gross misconduct.
          </p>
          <p>
            <span>5.2 </span> Training may terminate our relationship with other individuals and organizations working on our behalf if they breach this policy.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AntiSlavery