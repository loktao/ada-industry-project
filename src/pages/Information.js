import React from 'react';

const Information = () => {
  return (
    <div className="home-container">
      <h1 className="main-title">Health</h1>

      <div className="cards-container">
        
        {/* --- 1. MOVED TO TOP: Lack of Awareness --- */}
        <div className="content-card wide-card">
          <h2>Why is there a knowledge gap and lack of awareness?</h2>
           
          <p><strong>Lack of funding:</strong> 
          Only 2% of UK medical research funding is spent on pregnancy, childbirth, and female
          reproductive health, despite one in three women experiencing a reproductive or gynaecological issue.
          </p>
          
          {/* Changed <p> to <ul> so bullet points work correctly */}
          <ul>
            <li><strong>Lack of knowledge:</strong> Medical research has focused more on men’s health in the past, leading to gaps in current knowledge of specific women’s health conditions, including common gynaecological issues. This can result in misdiagnosis and delayed treatment.</li>
            <li><strong>Communication styles:</strong> Women and men communicate their symptoms differently. Women may be more likely to downplay their symptoms or express them in a different way to men, which can be misinterpreted by healthcare providers.</li>
            <li><strong>Social and economic factors:</strong> Women often face greater financial insecurity, caregiving responsibilities and societal pressures that can impact their health and their ability to access healthcare.</li>
            <li><strong>Poor promotion of preventative healthcare:</strong> National healthcare in the UK continues to centre largely on intervention rather than prevention, and misses opportunities to educate young women on preventative care.</li>
          </ul>
        </div>

        {/* --- 2. Heart Disease --- */}
        <div className="content-card wide-card">
          <h3>Heart Disease</h3>
          
          <p><strong>Heart Disease</strong> is the no.1 cause of death for women. 
          Symptoms include shortness of breath, weakness in arms, and chest pain. 
          It can lead to a heart attack which can be fatal.</p>
          
          <p>A heart attack is a medical emergency in which the supply of blood to the 
          heart is suddenly blocked, usually by a blood clot.</p>

          <p>What to do if you think you might be having a heart attack:
            Dial 999 immediately and wait for an ambulance. Whilst waiting on the ambulance it can help to swallow a tablet of aspirin
            -{'>'} 
            <a 
            href="https://www.nhs.uk/conditions/heart-attack/" 
            target="_blank" 
             rel="noopener noreferrer">
              Click here for help
              </a>
          </p>
          <h1>Key Facts:</h1>
          <ul>
            <li>Women having a heart attack delay seeking medical help longer than men because they don't recognize the symptoms.</li>
            <li>A woman is 50% more likely than a man to receive the wrong initial diagnosis for a heart attack.</li>
            <li>Women are less likely than men to receive a number of potentially life-saving treatments in a timely way.</li>
            <li>Following a heart attack, women are less likely to be prescribed medications to help prevent a second heart attack.</li>
          </ul>
        </div>

        {/* --- 3. Endometriosis --- */}
        <div className="content-card wide-card">
          <h2>Endometriosis</h2>
          
          <p><strong>Endometriosis:</strong> Cells similar to cells lining the womb grow in other parts of the body
           significantly impact your quality of life with symptoms such as heavy periods or severe period pain 
           that stop you from doing normal activities. This can also present itself in other symptoms such as fatigue,
           pain in your lower tummy and back, pain or bleeding in other areas of the body, etc.</p>
          
          <p>What to do if you think you have endometriosis:
            Contact your gp and book an appointment
            Various tests will be conducted to determine if you do have endometriosis since symptoms can be similar 
            to other conditions such as adenomyosis and fibroids.  --{'>'}
            <a 
            href="https://www.nhs.uk/conditions/endometriosis/" 
            target="_blank" 
             rel="noopener noreferrer">
              Click here for help
              </a> 
          </p>
          <h4>Key Facts:</h4>
          <ul>
            <li>A rise in diagnosis times in all four nations since 2020, to 8 years and 10 months in both England 
              and Scotland, to 9 years and 5 months in Northern Ireland, and 9 years 11 months in Wales. 
            </li>
            <li>Almost half of all respondents (47%) had visited their GP 10 or more times with symptoms
              prior to receiving a diagnosis, and 70% had visited 5 times or more.</li>
            <li>Only 10% of respondents reported that GPs mentioned they suspected endometriosis at 
              either their first or second appointment where symptoms were discussed</li>
            <li>52% had visited A&E at least once, and fewer than a fifth of those (17%) were referred to gynaecology at their
               first visit. 26% of respondents visited A&E 3 or more times with symptoms prior to diagnosis. </li>
               <li>20% reported seeing a gynaecologist 10 or more times before being diagnosed.</li>
               <li>78% of people who later went on to receive a diagnosis of endometriosis had experienced one or 
                more doctors telling them they were making a ‘fuss about nothing’ or similar comments and many had 
                the severity of their symptoms questioned by healthcare practitioners.  
                The number of people reporting this experience has increased from 69% in our 2020 survey.  </li>
                 <a 
            href="https://www.endometriosis-uk.org/diagnosis-report" 
            target="_blank" 
             rel="noopener noreferrer">
              Read here for information
              </a> 
          </ul>
        </div>

        {/* --- 4. PCOS --- */}
        <div className="content-card wide-card">
          <h2>PCOS(polycystic ovary syndrome)</h2>
          
          <p><strong>PCOS:</strong>A common condition affecting your hormones,
           causing irregular periods, excess hair growth, acne and infertility.
           People with pcos are more at risk for other health conditions such as diabetes and high blood pressure.
           Symptoms include:irregular periods – which means your ovaries do not regularly release eggs (ovulation),
           excess androgen – high levels of "male" hormones in your body, which may cause physical signs such as excess facial or body hair
           polycystic ovaries – your ovaries become enlarged and contain many fluid-filled sacs (follicles) that surround the eggs
            (but despite the name, you do not actually have cysts if you have PCOS)
          </p>
          
          <p>What to do if you think you have PCOS:</p>
          <ul>
            <li>Talk to your gp</li>
            <li>Although PCOS cannot be cured, symptoms can be treated</li>
          </ul>

          <h4>Key Facts:</h4>
          <p>Although there is a fair amount of research done into PCOS there is a trend amongst 
          women with dissatisfaction with their diagnosis process as only 35.2% were satisfied with 
          their diagnosis process and 15.6% were satisfied with the information they were given.</p>
        </div>

      </div>
    </div>
  )
}

export default Information;