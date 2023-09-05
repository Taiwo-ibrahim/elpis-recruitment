import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import bulletin from "../../img/bulletin.png"
import "./Privacy.css"

function Privacy() {
  return (
    <div className='privacy__container'>
      <div id='privacy-top'>
        <Navbar 
          contactId = "contactId"
        />
      </div>
      <div className='privacy__container-section_1'>
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy sets out how Elpis Recruitment Ltd obtains, store and use your personal information. The effective
          date of this policy is  15th June, 2018. By using our website, <span>https://www.elpisrecruitment.co.uk</span>, you agree to the
          use and treatment of personal information our privacy policy in accordance with this Privacy Policy.
        </p>
      </div>

      <div className='privacy__container-section_2'>
        <h1>Content</h1>
        <div className='privacy__container-section_2-content'>
          <li><span>Our Details</span></li>
          <li><span>How we collect or obtain personal information about you</span></li>
          <li><span>Personal information we collect or obtain about </span></li>
          <li><span>How we use your personal information</span></li>
          <li><span>How long we store your personal information</span></li>
          <li><span>How we secure your personal information</span></li>
          <li><span>Our use of cookies and similar technologies</span></li>
          <li><span>Transfers of your personal information to other countries</span> </li>
          <li><span>Your rights in relation to your personal information</span></li>
          <li><span>Your right to object the processing of your personal information for certain purposes </span></li>
          <li><span>Consequences of not providing your personal information to us.</span></li>
          <li><span>Changes to our Privacy Policy</span></li>
          <li><span>Changes to your information</span></li>
          <li><span>Copyright, credit, and logo</span></li>
        </div>        
      </div>

      <div className='privacy__container-section_3'>
        <h1>How we use your personal information</h1>
        <p className="p-text">We may use your personal information for one of the following purposes in our legitimate interests or in the legitimate interests of third parties.</p>
        <div className='li-sect3-1'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            <span>Administering, running, and improving our website and business, including personalizing our website experience for you -</span> This is necessary
            for our legitimate interest of better understanding of our clients and potential clients’ preferences and tailoring our website, products, and
            services to their needs and preferences. 
          </p>
        </div>
        <div className='li-sect3-1 list2'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            <span>Communicating directly with you in relation to updates to the website, your purchase(s) of our services, and in response to enquiries we 
            receive from you -</span> This will be necessary either to update you from time to time about changes to our website, to perform a contract
            which we have entered into with you (or to take steps, at your request, to enter into a contract with you) or for our legitimate interest
            of satisfying and confirming your requirements in order to provide you with our products or services and to answer questions we
            receive from you.
          </p>
        </div>
        <div className='li-sect3-1 list3'>
          <img className="bulletin-img" src={bulletin} alt="" /> 
          <p>
            <span>Protecting our business and business interests, including for the purposes of credit and background checks, fraud prevention and
            debt recovery -</span> This is necessary for our legitimate interests of preventing criminal activity such as fraud, or money laundering,
            for ensuring that our website and services are not misused. We will only carry out such checks to the extent that we are permitted
            or authorized by law to do so.
          </p>
        </div>
        <div className='li-sect3-1  list4'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            <span>Communicating with our business advisors and legal representatives - </span>This is necessary for our legitimate interest of obtaining legal or
            professional business advice, and we will only share your personal information where it is necessary to do so, to the minimum extent
            necessary and on an anonymized basis wherever possible.
          </p>
        </div>
        <div className='li-sect3-1 list5'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            <span>Sharing your personal information with third parties which are either related or associated with us (including third parties within our
            corporate group from time to time) such as our business partners, affiliates, associates, suppliers, independent contractors,
            email providers, and IT service providers -</span>This will be necessary either to perform a contract which we have entered into with you
            for our legitimate interest of running and managing our business effectively, for compliance with a legal obligation to which we are
            subject or for direct marketing purposes. Where we share your personal information, we will do so strictly on a need-to-know basis,
            subject to appropriate confidentiality restrictions, on an anonymized basis as far as possible and only to the extent strictly necessary
            for any of these purposes. 
          </p>
        </div>
        <div className='li-sect3-1 list6'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            <span>Enforcing our legal rights -</span> This is necessary for our legitimate interest of protecting our business and enforcing our contractual and
            other legal rights.
          </p>
        </div>
        <div className='li-sect3-1 list7'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            <span>Ensuring physical, network information security and integrity -</span> This is necessary for our legitimate interest of ensuring that our IT systems
            and networks are secure and uncompromised for example, preventing malware, viruses, bugs, or other harmful code, preventing
            unauthorized access to our systems and any form of attack on or damage to our IT systems and networks.
          </p>
        </div>
        <div className='li-sect3-1 list8'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            <span>Providing statistical information to third parties such as Google Analytics -</span> This is necessary for our and third parties’ legitimate interest of
            processing personal information for research purposes, including market research, better understanding our respective customers, and
            tailoring our respective products and services to their needs.
          </p>
        </div>
        <div className='li-sect3-1 list9'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            <span>Indicating possible criminal acts or threats to public security to a competent authority -</span> This is necessary for our legitimate interest of
            promoting the success of our business, preventing crime, compliance with a legal obligation to which we are subject in the general
            public interest or for the legitimate interests of governmental bodies and competent authorities to prevent crime.
          </p>
        </div>
        <div className='li-sect3-1 list10'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            <span>In connection with any legal or potential legal dispute or proceedings -</span> This is necessary for our legitimate interest of ensuring the success of
            our business, resolving disputes and making such disclosures as we are required by law or which we consider, acting reasonably, are required
            by law.
          </p>
        </div>
        <p className='p-text second'>
          We may process your personal information for the following purpose(s) where we have obtained your consent to do so:
        </p>
        <div className='li-sect3-1 list11'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>To provide you with news and offers relating to goods and services we offer from time to time.</p>
        </div>
        <p className='p-text-2'>
          Where we process your personal information on the basis of consent, you can withdraw your consent to such processing at any time by 
          emailing us at <span>support@elpisrecruitment.co.uk</span> or writing to us at Elpis Recruitment Ltd, 8, Victory road, Gloucester, United Kingdom.
        </p>
        <p className='p-text'>We may also collect or process your personal information for the following purposes:</p>
        <div className='li-sect3-1 list12'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            <span>Entering into and performing a contract with you -</span> Where you wish to purchase services from us, we require your personal information in order to
            enter into and perform a contract with you. If you do not provide your personal information to us when it is required for such a purpose, we will
            not be able to enter into or perform a contract with you or to provide you with the products or services you have requested. We may also 
            postpone or cancel any orders you place and enforce our legal rights against you (for example, where we have incurred costs or expenses in
            preparing or fulfilling any orders placed by you but are unable to deliver the order due to your failure to provide the necessary personal
            information.
          </p>
        </div>
        <div className='li-sect3-1 list13'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            <span>Complying with laws, regulations, and other legal requirements -</span> We may need to use and process your personal information in order to comply
            with legal obligations to which we are subject. For example, we may require your personal information pursuant to a statutory obligation to
            conduct anti-money laundering checks or to disclose your information to a court following receipt of a court order or subpoena. We may also
            need your personal information to comply with ongoing legal obligations, such as tax laws and regulations to which we are subject.
          </p>
        </div>
      </div>
      


      <div className='privacy__container-section_4'>
        <h1>How long we store your personal information</h1>
        <p>We will store your information for no longer than necessary, taking into account the following:</p>
        <div className='li-sect4-1'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            The purpose(s) for which we are processing your personal information, such as whether it is necessary to continue to store that information in
            order to continue to perform our obligations under a contract with you or for our legitimate interests.
          </p>
        </div>
        <div className='li-sect4-1 sect41'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            Whether we have any legal obligation to continue to process your information, such as any record-keeping obligations imposed by applicable law.
          </p>
        </div>
        <div className='li-sect4-1 sect42'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            Whether we have any legal basis to continue to process your personal information, such as consent.
          </p>
        </div>
      </div>

      <div className='privacy__container-section_5'>
        <h1>How we secure your personal information</h1>
        <p>
          We take appropriate technical and organizational measures to secure your personal information and to protect it against unauthorized or unlawful
          use or processing as well as against the accidental loss or destruction of, or damage to your personal information, including:
        </p>
        <div className='li-sect5-1'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            Only sharing and providing access to your personal information to the minimum extent necessary, subject to confidentiality restrictions where 
            appropriate, and on an anonymized basis wherever possible.
          </p>
        </div>
        <div className='li-sect5-1 sect52'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            Using secure servers to store your personal information.
          </p>
        </div>
        <div className='li-sect5-1 sect53'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            Requiring proof of identity from any individual who requests access to personal information.          
          </p>
        </div>
        <div className='li-sect5-1 sect54'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            Transmission of information (including personal information) over the internet is not entirely secure, and if you submit any information to us
            over the internet (whether by email, via our website, or any other means), you do so entirely at your own risk. We cannot be responsible for
            any costs, expenses, loss of profits, harm to reputation, damages, liabilities, or any other form of loss or damage suffered by you as a result
            of your transmission of information to us by such means.
          </p>
        </div>
      </div>

      <div className='privacy__container-section_6'>
        <h1>Transfers of your personal information to other countries and safeguards used </h1>
        <p>
          We do not intend to transfer your personal information outside the country in which we collected or obtained it, including outside the European
          Economic Area or to an international organisation, but it may be necessary for us to do so from time to time. Where we transfer your personal
          information outside the European Economic Area, the country to which it is transferred will either be subject to an adequacy decision by the
          European Commission, or if not (or if we transfer your personal information to an international organization), we will ensure that the transfer
          takes place on the basis of one or more of the following safeguards:
        </p>
        <div className='li-sect6'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            Data protection policies adhered to by the data controller and other companies and entities within our corporate group from time to time,
            which comply with applicable laws, known as “binding corporate rules” or “BCRs”
          </p>
        </div>
        <div className='li-sect6 sect61'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            Standard data protection clauses adopted by the European Commission or adopted by the Information Commissioner’s office and approved
            by the European Commission in accordance with relevant law.
          </p>
        </div>
        <div className='li-sect6 sect62'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            A code or codes of conduct produced by an association or other body approved by the Information Commissioner’s office.
          </p>
        </div>
        <div className='li-sect6 sect63'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            An approved certification mechanism (such as the EU-US Privacy Shield) 
          </p>
        </div>
        <div className='li-sect6 sect64'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            Where authorized by the Information Commissioner’s office, contractual clauses between the data controller or processor and the data
            controller, processor, or recipient of the personal information in the third country or international organization.
          </p>
        </div>
      </div>

      <div className='privacy__container-section_7'>
        <h1>Your rights in relation to your personal information</h1>
        <p>
          You have the following rights in relation to your personal information, which you can exercise by writing to the following address: Elpis
          Recruitment Ltd, 8 Victory road, Gloucester, United Kingdom or sending an email to <span>support@elpisrecruitment.co.uk</span> 
        </p>
        <div className='li-sect7'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            To request access to your personal information and information related to our use and processing of your personal information.
          </p>      
        </div>
        <div className='li-sect7 sect72'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
           To request the correction or deletion of your personal information.
          </p>      
        </div>
        <div className='li-sect7 sect73'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            To request that we restrict our use of your personal information.
          </p>      
        </div>
        <div className='li-sect7 sect74'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            To receive personal information which you have provided to us in a structured, commonly used and machine-readable format (e.g. an Excel
            spreadsheet), and the right to have that personal information transferred to another data controller (including a third party data controller)
          </p>      
        </div>
        <div className='li-sect7 sect75'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            To object to the processing of your personal information for certain purposes (for further information, see the section below titled ‘your 
            right to object to the processing of your personal information for certain purposes.
          </p>      
        </div>
        <div className='li-sect7 sect76'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            To withdraw your consent to our use of your personal information at any time where we rely on your consent to use or process that
            personal information. If you withdraw your consent, this will not affect the lawfulness of our use and processing of your personal
            information on the basis of your consent before the point in time when you withdraw your consent.
          </p>      
        </div>
        <p id='sect7-p2'>
          Where you request access to personal information, we are required by law to use reasonable means to verify your identity before doing so. In
          order for us to verify your identity, we require you to provide us with an original or certified copy of a document from each of the following
          two categories of documents:
        </p>
        <div className='li-sect7 sect77'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            <span>Category one:</span> a full current signed UK or overseas passport, a full current UK or EU photocard driving license or a national identity card.
          </p>    
        </div>
        <div className='li-sect7 sect78'>
          <img className="bulletin-img" src={bulletin} alt="" />
          <p>
            <span>Category two:</span> a copy of your bank statement, utility bill (gas, electric, water, landline phone), TV license renewal statement or council tax
            bill with your address, dated no earlier than three months before the date when you request access to your personal information.          
          </p>    
        </div>
        <p id='sect7-p3'>
          Where you provide a certified copy of these documents, these must be certified by an appropriate professional such as a solicitor, accountant,
          the post office’s identity checking service, an official at a bank or building society or a regulated financial advisor.
        </p>
        <p id="sect7-p4">
          We will not be able to provide you with access to your personal information until you provide us with your proof of identity as set out above and
          we have been able to successfully verify your identity.
        </p>
      </div>

      <div className='privacy__container-section_8'>
        <h1>Consequences of not providing your personal information to us</h1>
        <p>
          Where you wish to purchase products or services from us, we require your personal information in order to enter into a contract with you. We
          may also require your personal information pursuant to a statutory obligation (in order to be able to send you an invoice for products and 
          services you wish to order from us.
        </p>
      </div>

      <div className='privacy__container-section_9'>
        <h1>Changes to our privacy policy</h1>
        <p>
          We may change our privacy policy from time to time without providing prior notice to you. If required by law, we will make such changes to our 
          Privacy Policy known to you by posting a notice on the website and/or by us posting an updated version of our Privacy policy on our website 
          with a new effective date stated at the beginning of it. By continuing to access our website on or after that effective date, you agreed to be
          bound by that new version of our privacy policy.
        </p>
        <p id='sect9-p2'>
          Where we intend to use your personal information for a new purpose other than the purpose(s) for which we originally collected it, we will
          provide you with information about that purpose ad any other relevant information before we use your personal information for that new
          purpose and obtain your consent if required.
        </p>
      </div>
      
      <div className='privacy__container-section_10'>
        <h1>Changes to your information</h1>
        <p>
          Please inform us of any changes to any information (including personal information) which we hold about you so we can keep the information
          we hold about you accurate and up-to-date.
        </p>
      </div>

      <div className='privacy__container-section_11'>
        <h1>Children’s privacy</h1>
        <p>
          Because we care about the safety and privacy of children online, we comply with the Children’s Online Privacy Protection Act of 1998 (COPPA).
          COPPA and its accompanying regulations protect the privacy of children using the internet. We do not knowingly contact or collect personal
          information from children under the age of 13. The website is not intended to solicit information of any kind from children under the age of 13. 
        </p>
        <p id='sect11-p2'> 
          It is possible that we may receive information pertaining to children under the age of 13 by fraud or deception. If we are notified of this, as soon
          as we verify the information, we will immediately obtain the appropriate parental consent to use that information or, if we are unable to obtain
          such parental consent, we will delete the information from our servers. If you would like to notify us of our receipt of information about 
          children under the age of 13, please do so by sending an email to <span>support@elpisrecruitment.co.uk.</span>
        </p>
      </div>

      <div className='privacy__container-section_12'>
        <h1>Do not Track Disclosures</h1>
        <p>
          “Do Not Track” is a privacy preference that users can set in their web browsers. When a user turns on a Do not Track signal in their browser, the
          browser sends a message to websites requesting that they do not track the user. For information about Do Not Track, please visit     
          <span>  www.allaboutdnt.org</span>
        </p>
        <p id='sect12-p2'>
          At this time, we do not respond to Do Not Track browser settings or signals. In addition, we may use other technology that is standard to the 
          internet, such as pixel tags, web beacons, and other similar technologies to track visitors to the website, or one of the affiliated pages. Those
          tools may be used by us and third parties to collect information about you and your internet activity, even if you have turned on the
          Do Not Track signal.
        </p>
      </div>

      <div className='privacy__container-section_13'>
        <h1>Copyright, credit & logo</h1>
        <p>
          This Privacy Policy is based on a General Data Protection Regulation (Regulation (EU) 2016/769) (GDPR) complaint template provided by GDPR
          Privacy Policy. For further information, please visit www.gdprprivacypolicy.org. The copyright in this Privacy Policy is either owned by or 
          licensed to us and is protected by copyright laws around the world and copyright protection software. All intellectual property rights in this
          document are reserved.
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default Privacy