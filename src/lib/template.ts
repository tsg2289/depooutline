import type { OutlineSection } from '@/types';

export const DEPOSITION_SECTIONS: OutlineSection[] = [
  {
    id: 'intro',
    title: 'Introduction and Background',
    content: 'Introduction and background information about the deponent',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'intro-name-attorney',
        title: 'My Name is [TAKING_ATTORNEY]. I am an attorney and I represent Defendants in this matter.',
        content: 'Attorney introduction and representation statement.',
        enabled: false
      },
      {
        id: 'intro-state-spell',
        title: 'Please State and Spell Your Name for the Record.',
        content: 'Have the deponent state and spell their full name for the record.',
        enabled: false
      },
      {
        id: 'intro-other-names',
        title: 'Have you ever gone by or used another name? State and spell those other names?',
        content: 'Inquire about any other names, aliases, or maiden names the deponent has used.',
        enabled: false
      },
      {
        id: 'intro-previous-depos-header',
        title: 'A. Previous Depositions:',
        content: 'Section header for previous deposition questions.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'intro-depo-before',
        title: 'Have you ever had your deposition taken before?',
        content: 'Determine if the deponent has prior deposition experience.',
        enabled: false
      },
      {
        id: 'intro-when-where-nature',
        title: 'When, Where, Nature of Case',
        content: 'If yes to previous depositions, get details about when, where, and nature of the case.',
        enabled: false
      },
      {
        id: 'intro-testified-court',
        title: 'Have you ever testified in court before?',
        content: 'Determine if the deponent has prior court testimony experience.',
        enabled: false
      },
      {
        id: 'intro-when-where-nature-court',
        title: 'When, Where, Nature of Case',
        content: 'If yes to court testimony, get details about when, where, and nature of the case.',
        enabled: false
      },
      {
        id: 'intro-lawsuit-filed',
        title: 'Ever filed a lawsuit with the court?',
        content: 'Determine if the deponent has ever filed a lawsuit.',
        enabled: false
      },
      {
        id: 'intro-when-where-nature-lawsuit',
        title: 'When, Where, Nature of Case',
        content: 'If yes to filing lawsuits, get details about when, where, and nature of the case.',
        enabled: false
      }
    ]
  },
  {
    id: 'ground-rules',
    title: 'Ground Rules for Deposition',
    content: 'Ground rules and procedures for conducting the deposition',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'ground-rules-deposition',
        title: 'Deposition: A procedure for the taking of your testimony under oath in connection with a pending legal action. The purpose is to get information regarding your lawsuit.',
        content: 'Explain what a deposition is and its purpose.',
        enabled: false
      },
      {
        id: 'ground-rules-remote',
        title: 'Remote Rules - Since this deposition is conducted remote, you understand if at any time you get disconnected please log back onto the system or advise your attorney.',
        content: 'Rules for remote depositions and connectivity issues.',
        enabled: false
      },
      {
        id: 'ground-rules-remote-documents',
        title: 'Do you have any documents in front or you? Do you have any documents or photographs open on your computer system?',
        content: 'Check for documents or materials in front of deponent.',
        enabled: false
      },
      {
        id: 'ground-rules-remote-devices',
        title: 'Are you looking at any other computer, ipad, cell phone or any other smart device other than the system you are using for zoom?',
        content: 'Check for other devices that might be used during deposition.',
        enabled: false
      },
      {
        id: 'ground-rules-perjury',
        title: 'Perjury: The court reporter administered an oath to you that says you have to answer all of my questions honestly and fully. This seems like an Informal setting, but testimony has same force and effect as if in court. We will conduct ourselves as if we are before a judge in a courtroom.',
        content: 'Explain the oath and perjury implications.',
        enabled: false
      },
      {
        id: 'ground-rules-perjury-penalty',
        title: 'Same penalty of perjury applies that would apply if you were testifying in a court of law',
        content: 'Emphasize that perjury penalties apply.',
        enabled: false
      },
      {
        id: 'ground-rules-verbal',
        title: 'Verbal Responses: Court Reporter taking down what we say and prepares transcript. No no-verbal responses (no "nods of head" or "uh huh")',
        content: 'Require verbal responses for the record.',
        enabled: false
      },
      {
        id: 'ground-rules-break',
        title: 'Break: If you need a break (for any reason - tired, want to talk to your attorney, use the restroom or drink water) at any time for any reason, please let me know.',
        content: 'Explain break procedures.',
        enabled: false
      },
      {
        id: 'ground-rules-estimate',
        title: 'Estimate/Guess: I am here to get your testimony but I don\'t want you to guess about anything. Do you know the difference between a guess and an estimate? I am entitled to your best estimate or reasonable approximation If you don\'t know the answer, don\'t guess, just let me know you don\'t know.',
        content: 'Explain difference between guessing and estimating.',
        enabled: false
      },
      {
        id: 'ground-rules-estimate-example',
        title: 'Here\'s an example of a guess vs. estimate = Guess v. estimate (give example- $ in pocket or length of table at depo)',
        content: 'Provide example of guess vs estimate.',
        enabled: false
      },
      {
        id: 'ground-rules-understand',
        title: 'Understand Question: If you do not understand my question, please ask me to rephrase it. Otherwise I will assume you understood my question.',
        content: 'Instruct to ask for clarification if needed.',
        enabled: false
      },
      {
        id: 'ground-rules-wait',
        title: 'Wait Until Question Is Completed: Although you may think you know what the question will be, please wait until the entire question is asked as the last word may change the meaning of the question.',
        content: 'Instruct to wait for complete question.',
        enabled: false
      },
      {
        id: 'ground-rules-talking-over',
        title: 'Talking Over One Another: In common conversation, we have a tendency to speak over one another and/or interrupt. This makes the court reporters job very difficult.',
        content: 'Explain not to interrupt or talk over each other.',
        enabled: false
      },
      {
        id: 'ground-rules-loud-clear',
        title: 'Loud, Clear, Slow Testimony: Since the court reporter is transcribing every word, we should try to speak loudly, clearly and slowly so she can do her job.',
        content: 'Instruct on proper speaking for court reporter.',
        enabled: false
      },
      {
        id: 'ground-rules-objections',
        title: 'Objections: Another attorney may object to a question for purposes of making a proper record; However, you are to answer the question unless your attorney instructs you not to.',
        content: 'Explain how to handle objections.',
        enabled: false
      },
      {
        id: 'ground-rules-transcript',
        title: 'Transcript: After the deposition is completed, the court reporter will prepare a written booklet with your testimony in it. You\'ll have an opportunity to review it and make any changes you think are necessary. If you make any changes other than for grammar or spelling, the attorney during trial will be able to comment on it and it may reflect on your credibility.',
        content: 'Explain transcript review process.',
        enabled: false
      },
      {
        id: 'ground-rules-repetitive',
        title: 'Repetitive Questions: We will be asking you a lot of questions today. Some of them may seem like they are very similar to previously asked questions. Please bear with us.',
        content: 'Explain that some questions may be repetitive.',
        enabled: false
      },
      {
        id: 'ground-rules-procedure-questions',
        title: 'Procedure Questions Any questions about the procedures before we begin?',
        content: 'Ask if there are any questions about procedures.',
        enabled: false
      },
      {
        id: 'ground-rules-best-testimony',
        title: 'Best Testimony: Is there any reason that you would be unable to give us your best testimony today? No',
        content: 'Ask if anything would prevent best testimony.',
        enabled: false
      },
      {
        id: 'ground-rules-best-testimony-followup',
        title: 'If they respond with an answer (i.e. headache, cold): Do you think that is going to affect your ability to answer my question honestly and fully? If you need a break, let me know.',
        content: 'Follow-up questions if they have issues affecting testimony.',
        enabled: false
      },
      {
        id: 'ground-rules-medication',
        title: 'Have you taken any medication within the past 24 hours that would affect your ability to provide your best testimony here today?',
        content: 'Ask about medications that might affect testimony.',
        enabled: false
      },
      {
        id: 'ground-rules-medication-followup',
        title: 'If yes, ask: Prescription or non-prescription? Who/what/when/where/why prescribed? When did you take it? How much of it did you take? How often do you taken? Does it affect your memory/your ability to understand/recall/respond? Will these medications interfere with your ability to give truthful and accurate testimony at your deposition today? Will it affect your ability to give your best testimony today? Do you have the containers for the medication with you today? Have them produced and photocopied',
        content: 'Follow-up questions about medications.',
        enabled: false
      },
      {
        id: 'ground-rules-alcohol',
        title: 'Did you consume any alcohol in the past 24 hours? What kind? When did you drink? How many drinks? How much? Why did you decide to drink? Will it affect your ability to understand and respond to questions? Will it affect your memory or ability to recall events.',
        content: 'Ask about alcohol consumption.',
        enabled: false
      },
      {
        id: 'ground-rules-proceed',
        title: 'Is there any reason why your deposition cannot proceed today?',
        content: 'Final check before proceeding with deposition.',
        enabled: false
      }
    ]
  },
  {
    id: 'preparation',
    title: 'Preparation for Deposition',
    content: 'Questions about preparation and review of documents for the deposition',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'prep-review-documents',
        title: 'Did you review any documents to prepare for your deposition (either today or before today)?',
        content: 'Ask about document review in preparation for deposition.',
        enabled: false
      },
      {
        id: 'prep-review-objection',
        title: 'If objection: Did you review any documents for purposes of refreshing your recollection in preparation for the depo?',
        content: 'Alternative phrasing if there is an objection to the document review question.',
        enabled: false
      },
      {
        id: 'prep-what-documents',
        title: 'If yes, what were the documents? We have a right to require production and go over them during the deposition.',
        content: 'Follow-up to identify specific documents reviewed.',
        enabled: false
      },
      {
        id: 'prep-photos-lists',
        title: 'Photographs? Lists?',
        content: 'Ask specifically about photographs and lists.',
        enabled: false
      },
      {
        id: 'prep-discovery-responses',
        title: 'Discovery responses? Other documents?',
        content: 'Ask about discovery responses and other documents.',
        enabled: false
      },
      {
        id: 'prep-produced-attorney',
        title: 'Those documents have been produced to your attorney, who I assume has produced to our office?',
        content: 'Confirm document production through attorney.',
        enabled: false
      },
      {
        id: 'prep-produce-today',
        title: 'If no, have them produced at the depo today?',
        content: 'Request production of documents at deposition if not previously produced.',
        enabled: false
      },
      {
        id: 'prep-brought-documents',
        title: 'Did you bring any documents today?',
        content: 'Ask if deponent brought any documents to the deposition.',
        enabled: false
      },
      {
        id: 'prep-provided-attorney',
        title: 'If No: Have you provided your attorney with the documents related to this lawsuit, including for any injuries or damages sustained? What documents are they?',
        content: 'Follow-up if no documents brought - ask about documents provided to attorney.',
        enabled: false
      },
      {
        id: 'prep-talked-others',
        title: 'Did you talk to anyone other than your attorney to prepare for today\'s deposition?',
        content: 'Ask about conversations with others in preparation for deposition.',
        enabled: false
      },
      {
        id: 'prep-who-talked',
        title: 'Who? [Spouse? Children? Parents? Doctors? Co-Workers? Neighbors?',
        content: 'Follow-up to identify who they talked to.',
        enabled: false
      },
      {
        id: 'prep-when-talked',
        title: 'When did you talk to them?',
        content: 'Ask about timing of conversations.',
        enabled: false
      },
      {
        id: 'prep-what-discussed',
        title: 'What did you discuss?',
        content: 'Ask about content of conversations.',
        enabled: false
      },
      {
        id: 'prep-why-discussed',
        title: 'Why did you discuss?',
        content: 'Ask about purpose of conversations.',
        enabled: false
      }
    ]
  },
  {
    id: 'exhibits',
    title: 'Exhibits',
    content: 'Document identification and authentication for exhibits',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'exhibits-notice',
        title: 'Notice of Deposition.',
        content: 'Present and identify the notice of deposition.',
        enabled: false
      },
      {
        id: 'exhibits-producing',
        title: 'Do you have any documents that you are producing today?',
        content: 'Ask if deponent is producing any documents.',
        enabled: false
      },
      {
        id: 'exhibits-what-documents',
        title: 'What are these documents?',
        content: 'Identify the documents being produced.',
        enabled: false
      },
      {
        id: 'exhibits-attach',
        title: 'Attach as exhibit to the deposition transcript – separately bind them?',
        content: 'Determine how to handle document exhibits.',
        enabled: false
      },
      {
        id: 'exhibits-mark-auth-header',
        title: 'A. Mark Them and Authenticate Them',
        content: 'Section header for document authentication.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'exhibits-identify',
        title: 'Please identify ____________ for the record.',
        content: 'Have witness identify the document.',
        enabled: false
      },
      {
        id: 'exhibits-true-correct',
        title: 'Is this a true and correct copy of ______________?',
        content: 'Authenticate the document as true and correct copy.',
        enabled: false
      },
      {
        id: 'exhibits-function',
        title: 'What is the function of _____________?',
        content: 'Ask about the purpose or function of the document.',
        enabled: false
      },
      {
        id: 'exhibits-familiar',
        title: 'How is it that you\'re familiar with _______________?',
        content: 'Establish witness familiarity with the document.',
        enabled: false
      },
      {
        id: 'exhibits-discussion',
        title: 'Discussion about any way in which the witness is familiar with the document',
        content: 'Explore all ways witness knows about the document.',
        enabled: false
      }
    ]
  },
  {
    id: 'personal-background',
    title: 'Personal Background',
    content: 'Personal information and background of the deponent',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'personal-dob',
        title: 'Date of Birth?',
        content: 'Ask for deponent\'s date of birth.',
        enabled: false
      },
      {
        id: 'personal-born-where',
        title: 'Where were you born?',
        content: 'Ask for place of birth.',
        enabled: false
      },
      {
        id: 'personal-came-us',
        title: 'When did you come to the U.S.?',
        content: 'Ask when they came to the United States (if applicable).',
        enabled: false
      },
      {
        id: 'personal-names-used',
        title: 'Names Used – from birth to present?',
        content: 'Ask about all names used throughout life.',
        enabled: false
      },
      {
        id: 'personal-language-header',
        title: 'A. Language:',
        content: 'Section header for language questions.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'personal-primary-language',
        title: 'What is your primary language?',
        content: 'Ask about primary language.',
        enabled: false
      },
      {
        id: 'personal-english-ability',
        title: 'Can you speak any English? Read English? Write English?',
        content: 'Ask about English language abilities.',
        enabled: false
      },
      {
        id: 'personal-residential-header',
        title: 'B. Residential History',
        content: 'Section header for residential history.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'personal-current-residence',
        title: 'What is your current residence?',
        content: 'Ask for current address.',
        enabled: false
      },
      {
        id: 'personal-how-long-lived',
        title: 'How long have you lived there?',
        content: 'Ask duration at current address.',
        enabled: false
      },
      {
        id: 'personal-living-at-accident',
        title: 'Is that where you were living at the time of the accident?',
        content: 'Confirm if current address was address at time of incident.',
        enabled: false
      },
      {
        id: 'personal-plan-living',
        title: 'Do you plan on living there for the next six months? Yes',
        content: 'Ask about future residential plans.',
        enabled: false
      },
      {
        id: 'personal-prior-address',
        title: 'Prior to that address, Where did you live before that?',
        content: 'Ask about previous addresses.',
        enabled: false
      },
      {
        id: 'personal-other-residences',
        title: 'Depending on the year Plaintiff arrived at the US, where else have you lived?',
        content: 'Ask about other places lived since arriving in US.',
        enabled: false
      },
      {
        id: 'personal-family-header',
        title: 'C. Family',
        content: 'Section header for family information.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'personal-marital-status',
        title: 'What is your marital status? Married/divorced/separated? Ever been married? When?',
        content: 'Ask about marital status and history.',
        enabled: false
      },
      {
        id: 'personal-spouse-name',
        title: 'What is your spouse\'s name?',
        content: 'Ask for spouse\'s name.',
        enabled: false
      },
      {
        id: 'personal-marriage-date',
        title: 'When did you get married? Prior marriages?',
        content: 'Ask about marriage date and prior marriages.',
        enabled: false
      },
      {
        id: 'personal-children',
        title: 'Do you have any children? Grandchildren? How many? Names? Ages?',
        content: 'Ask about children and grandchildren.',
        enabled: false
      },
      {
        id: 'personal-lived-with-incident',
        title: 'At the time of the incident who did you live with, if anyone? Who? What is your relationship with them?',
        content: 'Ask who they lived with at time of incident.',
        enabled: false
      },
      {
        id: 'personal-how-long-lived-with',
        title: 'Approximately how long?',
        content: 'Ask duration of living arrangement at time of incident.',
        enabled: false
      },
      {
        id: 'personal-currently-live-with',
        title: 'Do you currently live with anyone? Who? What is the nature of your relationship with them?',
        content: 'Ask about current living arrangements.',
        enabled: false
      },
      {
        id: 'personal-education-header',
        title: 'D. Education',
        content: 'Section header for education information.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'personal-high-school',
        title: 'Did you attend high school?',
        content: 'Ask about high school attendance.',
        enabled: false
      },
      {
        id: 'personal-hs-where',
        title: 'Where?',
        content: 'Ask where they attended high school.',
        enabled: false
      },
      {
        id: 'personal-hs-when',
        title: 'When? Dates of attendance?',
        content: 'Ask when they attended high school.',
        enabled: false
      },
      {
        id: 'personal-hs-diploma',
        title: 'Did you obtain your high school diploma?',
        content: 'Ask if they graduated high school.',
        enabled: false
      },
      {
        id: 'personal-after-hs',
        title: 'Any other schooling after high school?',
        content: 'Ask about post-secondary education.',
        enabled: false
      },
      {
        id: 'personal-school-names',
        title: 'What is the name of each school you have attended after high school?',
        content: 'Ask for names of colleges/universities attended.',
        enabled: false
      },
      {
        id: 'personal-school-location',
        title: 'Location?',
        content: 'Ask for location of schools attended.',
        enabled: false
      },
      {
        id: 'personal-graduate',
        title: 'Did you graduate? What was the degree or grade level completed?',
        content: 'Ask about graduation and degrees obtained.',
        enabled: false
      },
      {
        id: 'personal-when-graduate',
        title: 'When did you graduate?',
        content: 'Ask graduation date.',
        enabled: false
      },
      {
        id: 'personal-where-graduate',
        title: 'Where?',
        content: 'Ask where they graduated.',
        enabled: false
      },
      {
        id: 'personal-highest-grade',
        title: 'What was the highest grade level completed?',
        content: 'Ask for highest education level achieved.',
        enabled: false
      },
      {
        id: 'personal-trade-school',
        title: 'Any Trade school? job training?',
        content: 'Ask about trade school or job training.',
        enabled: false
      },
      {
        id: 'personal-licenses',
        title: 'Do you have any professional licenses?',
        content: 'Ask about professional licenses.',
        enabled: false
      },
      {
        id: 'personal-ss-header',
        title: 'E. Social Security Benefits',
        content: 'Section header for social security benefits.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'personal-ss-current',
        title: 'Are you currently receiving social security disability benefits?',
        content: 'Ask about current social security disability benefits.',
        enabled: false
      },
      {
        id: 'personal-ss-past',
        title: 'Have you ever received and social security disability benefits in the past?',
        content: 'Ask about past social security disability benefits.',
        enabled: false
      },
      {
        id: 'personal-ss-since-when',
        title: 'Since when?',
        content: 'Ask when social security benefits started.',
        enabled: false
      },
      {
        id: 'personal-ss-consistently',
        title: 'Consistently since then?',
        content: 'Ask if benefits have been consistent.',
        enabled: false
      },
      {
        id: 'personal-ss-amount',
        title: 'How much? How often?',
        content: 'Ask about amount and frequency of benefits.',
        enabled: false
      },
      {
        id: 'personal-ss-reason',
        title: 'Reason?',
        content: 'Ask reason for social security disability.',
        enabled: false
      },
      {
        id: 'personal-disability-header',
        title: 'F. Disability Claims',
        content: 'Section header for disability claims.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'personal-disability-accident',
        title: 'As a result of the car accident did you file any Disability claims?',
        content: 'Ask about disability claims related to the accident.',
        enabled: false
      },
      {
        id: 'personal-disability-edd',
        title: 'What about filing any claims with the California Employment Development Department as a result of this incident?',
        content: 'Ask about EDD claims related to incident.',
        enabled: false
      },
      {
        id: 'personal-health-insurance-header',
        title: 'G. Health Insurance?',
        content: 'Section header for health insurance.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'personal-health-insurance-incident',
        title: 'At the time of the incident? and',
        content: 'Ask about health insurance at time of incident.',
        enabled: false
      },
      {
        id: 'personal-health-insurance-now',
        title: 'Now?',
        content: 'Ask about current health insurance.',
        enabled: false
      },
      {
        id: 'personal-medicare-header',
        title: 'H. Medicare:',
        content: 'Section header for Medicare benefits.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'personal-medicare-eligible',
        title: 'Are you currently eligible to receive Medicare benefits?',
        content: 'Ask about current Medicare eligibility.',
        enabled: false
      },
      {
        id: 'personal-medicare-since-when',
        title: 'Since when? (If can\'t recall, ask: Were you eligible to receive Medicare benefits at the time of the incident?',
        content: 'Ask when Medicare eligibility started.',
        enabled: false
      },
      {
        id: 'personal-medicare-receiving',
        title: 'Are you currently receiving Medicare benefits? What about at the time of the incident?',
        content: 'Ask about receiving Medicare benefits currently and at time of incident.',
        enabled: false
      },
      {
        id: 'personal-medicare-receiving-since',
        title: 'Since when? (If can\'t recall, ask: Were you receiving Medicare benefits at the time of the incident?)',
        content: 'Ask when started receiving Medicare benefits.',
        enabled: false
      },
      {
        id: 'personal-medicare-number',
        title: 'Do you know your Medicare Number?',
        content: 'Ask for Medicare number.',
        enabled: false
      },
      {
        id: 'personal-medicare-ssn',
        title: 'Is your Medicare number your social security number?',
        content: 'Ask if Medicare number is same as SSN.',
        enabled: false
      },
      {
        id: 'personal-medicare-consistently',
        title: 'Consistently since then?',
        content: 'Ask if Medicare benefits have been consistent.',
        enabled: false
      },
      {
        id: 'personal-medicare-amount',
        title: 'How much?',
        content: 'Ask about Medicare benefit amounts.',
        enabled: false
      },
      {
        id: 'personal-medicare-often',
        title: 'How often?',
        content: 'Ask about frequency of Medicare benefits.',
        enabled: false
      },
      {
        id: 'personal-medicare-reason',
        title: 'Reason?',
        content: 'Ask reason for Medicare benefits.',
        enabled: false
      },
      {
        id: 'personal-medical-header',
        title: 'I. Medi-Cal:',
        content: 'Section header for Medi-Cal benefits.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'personal-medical-eligible',
        title: 'Are you currently eligible to receive Medi-Cal benefits?',
        content: 'Ask about current Medi-Cal eligibility.',
        enabled: false
      },
      {
        id: 'personal-medical-id-card',
        title: '[If doesn\'t recall – ask do you have some identification card? What is your Medi-Cal Id Number?',
        content: 'Ask for Medi-Cal ID if they don\'t recall eligibility.',
        enabled: false
      },
      {
        id: 'personal-medical-receiving',
        title: 'Are you currently receiving Medi-Cal benefits? What about at the time of the incident?',
        content: 'Ask about receiving Medi-Cal benefits currently and at time of incident.',
        enabled: false
      },
      {
        id: 'personal-medical-since-when',
        title: 'Since when? (If can\'t recall, ask: Were you eligible to receive Medicare benefits at the time of the incident? Consistently since then?',
        content: 'Ask when Medi-Cal benefits started.',
        enabled: false
      },
      {
        id: 'personal-medical-amount',
        title: 'How much? How often? Reason?',
        content: 'Ask about Medi-Cal benefit amounts, frequency, and reason.',
        enabled: false
      },
      {
        id: 'personal-medical-claims',
        title: 'Have you submitted claims? Have you received benefits?',
        content: 'Ask about Medi-Cal claims and benefits received.',
        enabled: false
      }
    ]
  },
  {
    id: 'other-insurance',
    title: 'Other Insurance',
    content: 'Questions about other medical insurance coverage',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'other-insurance-identify',
        title: 'Please identify any medical insurance coverage you have had in the past 10 years.',
        content: 'Ask about all medical insurance in past 10 years.',
        enabled: false
      },
      {
        id: 'other-insurance-company',
        title: 'What is the name of the company?',
        content: 'Ask for insurance company names.',
        enabled: false
      },
      {
        id: 'other-insurance-first',
        title: 'When did you first have this plan?',
        content: 'Ask when insurance coverage started.',
        enabled: false
      },
      {
        id: 'other-insurance-last',
        title: 'When did you last have this plan?',
        content: 'Ask when insurance coverage ended.',
        enabled: false
      }
    ]
  },
  {
    id: 'employment',
    title: 'Employment',
    content: 'Questions about current and past employment',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'employment-current',
        title: 'Where are you currently employed?',
        content: 'Ask about current employment.',
        enabled: false
      },
      {
        id: 'employment-responsibilities',
        title: 'What are you job responsibilities?',
        content: 'Ask about job duties and responsibilities.',
        enabled: false
      },
      {
        id: 'employment-how-long',
        title: 'How long?',
        content: 'Ask duration of current employment.',
        enabled: false
      },
      {
        id: 'employment-injury-duty',
        title: 'Ever sustain an injury on duty',
        content: 'Ask about work-related injuries.',
        enabled: false
      },
      {
        id: 'employment-back-injury',
        title: 'Injure your back',
        content: 'Ask specifically about back injuries at work.',
        enabled: false
      },
      {
        id: 'employment-neck-injury',
        title: 'Injure your neck?',
        content: 'Ask specifically about neck injuries at work.',
        enabled: false
      },
      {
        id: 'employment-back-pain',
        title: 'Pain in your back following a day at work?',
        content: 'Ask about back pain after work.',
        enabled: false
      }
    ]
  },
  {
    id: 'prior-history',
    title: 'Prior History',
    content: 'Questions about prior claims, accidents, injuries, and medical treatment',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'prior-workers-comp-header',
        title: 'A. Prior Worker\'s Compensation Claims:',
        content: 'Section header for workers compensation claims.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'prior-workers-comp-filed',
        title: 'Have you filed a workers compensation claim?',
        content: 'Ask about any workers compensation claims.',
        enabled: false
      },
      {
        id: 'prior-workers-comp-ten-years',
        title: 'In the last ten years, filed any workers\' compensation claim?',
        content: 'Ask about workers comp claims in last 10 years.',
        enabled: false
      },
      {
        id: 'prior-workers-comp-when',
        title: 'When.',
        content: 'Ask when workers comp claim was filed.',
        enabled: false
      },
      {
        id: 'prior-workers-comp-where',
        title: 'Where.',
        content: 'Ask where workers comp claim was filed.',
        enabled: false
      },
      {
        id: 'prior-workers-comp-nature',
        title: 'Nature of Case? Status?',
        content: 'Ask about nature and status of workers comp case.',
        enabled: false
      },
      {
        id: 'prior-workers-comp-resolved',
        title: 'Resolved/Settled?',
        content: 'Ask if workers comp case was resolved or settled.',
        enabled: false
      },
      {
        id: 'prior-workers-comp-compensation',
        title: 'Did you receive any compensation?',
        content: 'Ask about compensation received from workers comp.',
        enabled: false
      },
      {
        id: 'prior-workers-comp-confidential',
        title: 'Were the terms of the resolution confidential?',
        content: 'Ask if workers comp settlement terms were confidential.',
        enabled: false
      },
      {
        id: 'prior-workers-comp-injury',
        title: 'Work related injury?',
        content: 'Ask about work-related injuries.',
        enabled: false
      },
      {
        id: 'prior-medical-treatment',
        title: 'In the last 10 years, have you received any type of medical treatment for any pain, injury or complaint to your __________________?',
        content: 'Ask about medical treatment for specific body parts in last 10 years.',
        enabled: false
      },
      {
        id: 'prior-demands-header',
        title: 'B. Demands:',
        content: 'Section header for compensation demands.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'prior-demands-compensation',
        title: 'In the last ten years, have you made a demand for compensation for any physical injury sustained?',
        content: 'Ask about demands for compensation for injuries in last 10 years.',
        enabled: false
      },
      {
        id: 'prior-accidents-header',
        title: 'C. Previous Accidents:',
        content: 'Section header for previous accidents.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'prior-accidents-motor-vehicle',
        title: 'Were you involved in any motor vehicle accidents prior to this incident?',
        content: 'Ask about prior motor vehicle accidents.',
        enabled: false
      },
      {
        id: 'prior-accidents-how-many',
        title: 'How many?',
        content: 'Ask number of prior accidents.',
        enabled: false
      },
      {
        id: 'prior-accidents-when',
        title: 'When?',
        content: 'Ask when prior accidents occurred.',
        enabled: false
      },
      {
        id: 'prior-accidents-what-happened',
        title: 'What happened?',
        content: 'Ask what happened in prior accidents.',
        enabled: false
      },
      {
        id: 'prior-accidents-fault',
        title: 'Who was at fault?',
        content: 'Ask who was at fault in prior accidents.',
        enabled: false
      },
      {
        id: 'prior-accidents-injuries',
        title: 'Any injuries?',
        content: 'Ask about injuries from prior accidents.',
        enabled: false
      },
      {
        id: 'prior-accidents-resolve',
        title: 'Did it ever resolve?',
        content: 'Ask if prior accidents were resolved.',
        enabled: false
      },
      {
        id: 'prior-accidents-resolve-when',
        title: 'When?',
        content: 'Ask when prior accidents were resolved.',
        enabled: false
      },
      {
        id: 'prior-accidents-other',
        title: 'Have you been involved in any other accidents or incidents in the 10 years prior to this incident? (trip and fall, slip and fall, skiing accident, etc)',
        content: 'Ask about other types of accidents in prior 10 years.',
        enabled: false
      },
      {
        id: 'prior-accidents-vision',
        title: 'Did you have any vision impairments at the time of these incidents?',
        content: 'Ask about vision impairments during prior incidents.',
        enabled: false
      },
      {
        id: 'prior-accidents-glasses',
        title: 'Do you wear glasses?',
        content: 'Ask if they wear glasses.',
        enabled: false
      },
      {
        id: 'prior-accidents-glasses-incident',
        title: 'Did you wear glasses at the time of the incident?',
        content: 'Ask if they wore glasses during the incident.',
        enabled: false
      },
      {
        id: 'prior-accidents-hearing',
        title: 'Did you have any hearing impairments at the time of the incident?',
        content: 'Ask about hearing impairments during incident.',
        enabled: false
      },
      {
        id: 'prior-accidents-illness',
        title: 'Did you have any other illness or injury prior to this incident?',
        content: 'Ask about other illnesses or injuries prior to incident.',
        enabled: false
      },
      {
        id: 'prior-injuries-header',
        title: 'D. Prior injuries:',
        content: 'Section header for prior injuries.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'prior-injuries-same-similar',
        title: 'Did you have any injuries prior to this incident that are the same or similar or have affected the injuries you are claiming here?',
        content: 'Ask about prior injuries similar to current claims.',
        enabled: false
      },
      {
        id: 'prior-injuries-discovery',
        title: 'Look at Discovery Responses.',
        content: 'Review discovery responses for prior injuries.',
        enabled: false
      },
      {
        id: 'prior-injuries-preexisting',
        title: 'Did you have any pre-existing medical conditions prior to the accident? If so, what were they and how did they occur?',
        content: 'Ask about pre-existing medical conditions.',
        enabled: false
      },
      {
        id: 'prior-injuries-body-parts',
        title: 'Priors: In the last ten years, have you suffered any injury to the body parts you injured in this incident?',
        content: 'Ask about prior injuries to same body parts.',
        enabled: false
      },
      {
        id: 'prior-injuries-trauma',
        title: 'Do you recall any prior fall, injury or trauma these body parts?',
        content: 'Ask about prior trauma to affected body parts.',
        enabled: false
      },
      {
        id: 'prior-treatment-header',
        title: 'E. Prior Treatment:',
        content: 'Section header for prior medical treatment.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'prior-treatment-doctors',
        title: 'What type of doctors have you treated with in the last ten years?',
        content: 'Ask about types of doctors seen in last 10 years.',
        enabled: false
      },
      {
        id: 'prior-treatment-who',
        title: 'Who is this?',
        content: 'Ask who the doctors are.',
        enabled: false
      },
      {
        id: 'prior-treatment-why',
        title: 'Why did you treat? For what reason?',
        content: 'Ask reason for medical treatment.',
        enabled: false
      },
      {
        id: 'prior-treatment-payment',
        title: 'Issue Payment? did you visit this provider for ____?',
        content: 'Ask about payment and specific reasons for visits.',
        enabled: false
      },
      {
        id: 'prior-treatment-other-doctors',
        title: 'Any other doctors seen in the past 10 years not already mentioned? Who? When? Where? Why',
        content: 'Ask about any other doctors not previously mentioned.',
        enabled: false
      },
      {
        id: 'prior-unemployment-header',
        title: 'F. Unemployment:',
        content: 'Section header for unemployment benefits.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'prior-unemployment-claims',
        title: 'In the last ten years, have you filed any claims for unemployment benefits?',
        content: 'Ask about unemployment benefit claims in last 10 years.',
        enabled: false
      },
      {
        id: 'prior-disability-header',
        title: 'G. Disability:',
        content: 'Section header for disability claims.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'prior-disability-claims',
        title: 'In the last ten years, have you filed any disability claims?',
        content: 'Ask about disability claims in last 10 years.',
        enabled: false
      }
    ]
  },
  {
    id: 'incident-biomech',
    title: 'Incident/Biomech Questions',
    content: 'Detailed questions about the incident and biomechanical aspects',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'incident-date-time-detailed',
        title: 'Can you please tell me the date and time of this incident?',
        content: 'Ask for specific date and time of incident.',
        enabled: false
      },
      {
        id: 'incident-vehicle-header',
        title: 'A. Vehicle:',
        content: 'Section header for vehicle information.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-vehicle-driving',
        title: 'What vehicle were you driving?',
        content: 'Ask what vehicle they were driving.',
        enabled: false
      },
      {
        id: 'incident-vehicle-in',
        title: 'What vehicle were you in?',
        content: 'Ask what vehicle they were in.',
        enabled: false
      },
      {
        id: 'incident-vehicle-owner',
        title: 'Are you the owner of this vehicle?',
        content: 'Ask if they own the vehicle.',
        enabled: false
      },
      {
        id: 'incident-vehicle-others-use',
        title: 'Does anyone else use this vehicle?',
        content: 'Ask if others use the vehicle.',
        enabled: false
      },
      {
        id: 'incident-vehicle-modifications',
        title: 'Any vehicle modifications, raised, lowered?',
        content: 'Ask about vehicle modifications.',
        enabled: false
      },
      {
        id: 'incident-vehicle-prior-accident',
        title: 'Has the vehicle ever been in another accident?',
        content: 'Ask about prior accidents involving the vehicle.',
        enabled: false
      },
      {
        id: 'incident-vehicle-prior-damage',
        title: 'Did it sustain any damage? If so, where is/was the damage and to what extent?',
        content: 'Ask about damage from prior accidents.',
        enabled: false
      },
      {
        id: 'incident-vehicle-prior-repaired',
        title: 'Was it repaired? By who and when?',
        content: 'Ask about repairs from prior accidents.',
        enabled: false
      },
      {
        id: 'incident-vehicle-prior-airbags',
        title: 'Did the airbags deploy in this other accident?',
        content: 'Ask about airbag deployment in prior accidents.',
        enabled: false
      },
      {
        id: 'incident-vehicle-prior-severity',
        title: 'Was that other accident more or less severe than the subject accident?',
        content: 'Compare severity of prior accident to current incident.',
        enabled: false
      },
      {
        id: 'incident-vehicle-damage',
        title: 'Did the vehicle you were in sustain any damage as a result of the accident in question?',
        content: 'Ask about damage from current incident.',
        enabled: false
      },
      {
        id: 'incident-vehicle-damage-extent',
        title: 'If so, where and to what extent?',
        content: 'Ask about location and extent of damage.',
        enabled: false
      },
      {
        id: 'incident-vehicle-damage-exists',
        title: 'Does this damage still exist or has it been repaired?',
        content: 'Ask if damage still exists or was repaired.',
        enabled: false
      },
      {
        id: 'incident-vehicle-repair-when',
        title: 'If repaired, when and by whom?',
        content: 'Ask when and by whom repairs were made.',
        enabled: false
      },
      {
        id: 'incident-vehicle-repair-cost',
        title: 'If repaired, approximately how much did the repairs cost?',
        content: 'Ask about cost of repairs.',
        enabled: false
      },
      {
        id: 'incident-vehicle-drivable',
        title: 'Were all involved vehicles drivable after the impact? If not, how were the vehicles moved from the scene?',
        content: 'Ask if vehicles were drivable and how they were moved.',
        enabled: false
      },
      {
        id: 'incident-before-header',
        title: 'B. Before the Incident:',
        content: 'Section header for events before the incident.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-before-wake-time',
        title: 'What time did you wake up?',
        content: 'Ask what time they woke up on day of incident.',
        enabled: false
      },
      {
        id: 'incident-before-medications',
        title: 'Had you taken any medications either the night before or the morning of the accident?',
        content: 'Ask about medications taken before incident.',
        enabled: false
      },
      {
        id: 'incident-before-medications-prescribed',
        title: 'Who prescribed these medications?',
        content: 'Ask who prescribed the medications.',
        enabled: false
      },
      {
        id: 'incident-before-side-effects',
        title: 'Any side effects?',
        content: 'Ask about medication side effects.',
        enabled: false
      },
      {
        id: 'incident-before-where-taken',
        title: 'Where did you take these medications?',
        content: 'Ask where medications were taken.',
        enabled: false
      },
      {
        id: 'incident-before-vision-effects',
        title: 'Do they affect your vision?',
        content: 'Ask if medications affect vision.',
        enabled: false
      },
      {
        id: 'incident-before-other-impairments',
        title: 'Did they have any other impairments?',
        content: 'Ask about other medication impairments.',
        enabled: false
      },
      {
        id: 'incident-before-24-hours',
        title: 'During the 24 hours before the incident, did you take or use any Medication, ask: Purpose of prescription/medication? How long have you been taking this? Quantity of each substance? Date/time when substance was taken? Address where it was taken? does anyone know you took this?',
        content: 'Detailed questions about medications in 24 hours before incident.',
        enabled: false
      },
      {
        id: 'incident-before-physical-condition',
        title: 'Can you please describe for me your physical condition on before the collision?',
        content: 'Ask about physical condition before collision.',
        enabled: false
      },
      {
        id: 'incident-before-vision-ok',
        title: 'Was your vision ok?',
        content: 'Ask if vision was okay before incident.',
        enabled: false
      },
      {
        id: 'incident-before-wearing-glasses',
        title: 'Where you wearing glasses?',
        content: 'Ask if they were wearing glasses.',
        enabled: false
      },
      {
        id: 'incident-before-hearing-ok',
        title: 'Was your hearing ok?',
        content: 'Ask if hearing was okay before incident.',
        enabled: false
      },
      {
        id: 'incident-before-emotions',
        title: 'Please describe your emotions that day? Nothing before the accident. Were you nervous? Angry? Anxious?',
        content: 'Ask about emotional state before incident.',
        enabled: false
      },
      {
        id: 'incident-before-activities',
        title: 'What did you do between the time you woke up and when the accident occurred?',
        content: 'Ask about activities before incident.',
        enabled: false
      },
      {
        id: 'incident-before-leave-time',
        title: 'What time did you leave to go to your destination on the day of the accident?',
        content: 'Ask what time they left for their destination.',
        enabled: false
      },
      {
        id: 'incident-before-trip-start',
        title: 'Where did you begin your trip prior to the accident?',
        content: 'Ask where trip began.',
        enabled: false
      },
      {
        id: 'incident-weather-header',
        title: 'C. Weather conditions:',
        content: 'Section header for weather conditions.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-weather-conditions',
        title: 'What were the weather conditions like at the time of the accident?',
        content: 'Ask about weather conditions during incident.',
        enabled: false
      },
      {
        id: 'incident-weather-sun',
        title: 'Where was the sun at time of impact? Was visibility an issue?',
        content: 'Ask about sun position and visibility issues.',
        enabled: false
      },
      {
        id: 'incident-road-header',
        title: 'D. Road Conditions',
        content: 'Section header for road conditions.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-road-conditions',
        title: 'What were the road conditions like at the time of the accident?',
        content: 'Ask about road conditions during incident.',
        enabled: false
      },
      {
        id: 'incident-road-adverse',
        title: 'Were there any unusual or adverse conditions at the time of the accident? This includes weather, other driver acting strange, car conditions (Bald tires? Weird noises?)',
        content: 'Ask about unusual or adverse conditions.',
        enabled: false
      },
      {
        id: 'incident-location-header',
        title: 'E. Location:',
        content: 'Section header for location details.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-location-destination',
        title: 'Where was the destination of your trip prior to the accident?',
        content: 'Ask about trip destination.',
        enabled: false
      },
      {
        id: 'incident-location-where',
        title: 'Where did the accident occur?',
        content: 'Ask where accident occurred.',
        enabled: false
      },
      {
        id: 'incident-location-lanes',
        title: 'How many lanes of travel?',
        content: 'Ask about number of travel lanes.',
        enabled: false
      },
      {
        id: 'incident-location-lane-100',
        title: 'What lane were you in 100 feet before the accident?',
        content: 'Ask what lane they were in 100 feet before accident.',
        enabled: false
      },
      {
        id: 'incident-location-lane-50',
        title: 'What lane were you in in the 50 feet before the accident?',
        content: 'Ask what lane they were in 50 feet before accident.',
        enabled: false
      },
      {
        id: 'incident-location-surface',
        title: 'Was the impact on a level surface, uphill, or downhill?',
        content: 'Ask about road grade at impact location.',
        enabled: false
      },
      {
        id: 'incident-location-roadway-type',
        title: 'What type of roadway surface was it? i.e. gravel, asphalt.',
        content: 'Ask about type of roadway surface.',
        enabled: false
      },
      {
        id: 'incident-people-header',
        title: 'F. People in the vehicle:',
        content: 'Section header for vehicle occupants.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-people-alone',
        title: 'Were you alone in your vehicle?',
        content: 'Ask if they were alone in vehicle.',
        enabled: false
      },
      {
        id: 'incident-people-with',
        title: 'Who were you with?',
        content: 'Ask who was with them in vehicle.',
        enabled: false
      },
      {
        id: 'incident-people-how-long',
        title: 'How long were you in the vehicle prior to the accident?',
        content: 'Ask how long they were in vehicle before accident.',
        enabled: false
      },
      {
        id: 'incident-seatbelt-header',
        title: 'G. Seatbelt//Airbag:',
        content: 'Section header for seatbelt and airbag information.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-seatbelt-wearing',
        title: 'Were you wearing your seatbelt at the time of the accident?',
        content: 'Ask if they were wearing seatbelt.',
        enabled: false
      },
      {
        id: 'incident-seatbelt-type',
        title: 'What type of restraint system? Lap and shoulder belt, Lap only, shoulder only? Did your seatbelt lock up?',
        content: 'Ask about type of restraint system and if it locked.',
        enabled: false
      },
      {
        id: 'incident-airbag-equipped',
        title: 'Was your vehicle equipped with an airbag?',
        content: 'Ask if vehicle had airbags.',
        enabled: false
      },
      {
        id: 'incident-airbag-deploy',
        title: 'Did it deploy?',
        content: 'Ask if airbag deployed.',
        enabled: false
      },
      {
        id: 'incident-how-happened-header',
        title: 'H. How the accident happened/Biomechanical Questions:',
        content: 'Section header for how accident happened and biomechanical questions.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-traffic-moving',
        title: 'Was traffic moving at the time of the accident? Typical rush our stop and go traffic.',
        content: 'Ask about traffic conditions at time of accident.',
        enabled: false
      },
      {
        id: 'incident-traffic-slowing',
        title: 'Was traffic slowing down in front of you?',
        content: 'Ask if traffic was slowing down.',
        enabled: false
      },
      {
        id: 'incident-complete-stop',
        title: 'Prior to impact, had your vehicle come to a complete stop?',
        content: 'Ask if vehicle had stopped before impact.',
        enabled: false
      },
      {
        id: 'incident-still-moving',
        title: 'Were you still moving at impact?',
        content: 'Ask if still moving at time of impact.',
        enabled: false
      },
      {
        id: 'incident-describe-happened',
        title: 'Describe for me what happened:',
        content: 'Ask them to describe what happened.',
        enabled: false
      },
      {
        id: 'incident-where-looking',
        title: 'Where were you looking at the time of the incident? left out driver window? right out passenger window? down at something? out front windshield?',
        content: 'Ask where they were looking at time of incident.',
        enabled: false
      },
      {
        id: 'incident-describe-impact',
        title: 'Describe the impact for me. Strong? Minor?',
        content: 'Ask them to describe the impact.',
        enabled: false
      },
      {
        id: 'incident-body-contact',
        title: 'Do you recall whether your body made contact with anything during the collision?',
        content: 'Ask if their body made contact with anything.',
        enabled: false
      },
      {
        id: 'incident-body-what-happened',
        title: 'What happened to your body at the time of the incident? Did your head hit anything? Did your arm hit anything? Did your back hit anything? Did your legs hit anything? Did your hands hit anything?',
        content: 'Ask what happened to their body during incident.',
        enabled: false
      },
      {
        id: 'incident-other-vehicles',
        title: 'Did the impact cause you to collide with other vehicles? How many vehicles? Did your vehicle come in contact with anything else? And then it came to rest?',
        content: 'Ask about collision with other vehicles or objects.',
        enabled: false
      },
      {
        id: 'incident-driven-before',
        title: 'Had you driven in that area where the incident occurred before?',
        content: 'Ask if they had driven in that area before.',
        enabled: false
      },
      {
        id: 'incident-how-many-times',
        title: 'How many times?',
        content: 'Ask how many times they had driven there.',
        enabled: false
      },
      {
        id: 'incident-in-hurry',
        title: 'Were you in a hurry that day? How were you rushing?',
        content: 'Ask if they were in a hurry.',
        enabled: false
      },
      {
        id: 'incident-cell-phone',
        title: 'Were you talking on a cell phone? Talking to anyone? No and nothing else.',
        content: 'Ask about cell phone use or talking.',
        enabled: false
      },
      {
        id: 'incident-aware-impending',
        title: 'Were you aware that the impending accident was about to occur? If so, how long before the impact? If so, did you do anything to brace for impact? Relative to your vehicle, where (distance) was the other vehicle when you first noticed it?',
        content: 'Ask if they were aware accident was about to occur.',
        enabled: false
      },
      {
        id: 'incident-first-notice',
        title: 'When did you first notice the other vehicle involved in the accident?',
        content: 'Ask when they first noticed the other vehicle.',
        enabled: false
      },
      {
        id: 'incident-evasive-maneuvers',
        title: 'Did you take any evasive maneuvers such as braking, swerving, or accelerating?',
        content: 'Ask about evasive maneuvers taken.',
        enabled: false
      },
      {
        id: 'incident-other-evasive',
        title: 'Did the other vehicle take any evasive maneuvers?',
        content: 'Ask if other vehicle took evasive maneuvers.',
        enabled: false
      },
      {
        id: 'incident-foot-position',
        title: 'Was your foot on the brake or accelerator at time of impact?',
        content: 'Ask about foot position at time of impact.',
        enabled: false
      },
      {
        id: 'incident-other-vehicle-header',
        title: 'I. Other Vehicle:',
        content: 'Section header for other vehicle information.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-other-first-see',
        title: 'When did you first see the vehicle that was involved in this incident?',
        content: 'Ask when they first saw the other vehicle.',
        enabled: false
      },
      {
        id: 'incident-other-rear-mirror',
        title: 'did you see the other vehicle in the rear view mirror?',
        content: 'Ask if they saw other vehicle in rear view mirror.',
        enabled: false
      },
      {
        id: 'incident-other-seconds-elapsed',
        title: 'Approximately how many seconds elapsed between when you saw the other vehicle and when impact occurred?',
        content: 'Ask about time between seeing other vehicle and impact.',
        enabled: false
      },
      {
        id: 'incident-other-speed',
        title: 'And what was the other vehicle\'s approximate speed? unsure of the exact speed. thinks he was going fast.',
        content: 'Ask about other vehicle\'s speed.',
        enabled: false
      },
      {
        id: 'incident-other-location-impact',
        title: 'Please describe where the vehicles were located at the point of impact?',
        content: 'Ask about vehicle locations at point of impact.',
        enabled: false
      },
      {
        id: 'incident-other-describe',
        title: 'Please describe the other vehicle involved in this incident: Make? Model? Color? Size?',
        content: 'Ask for description of other vehicle.',
        enabled: false
      },
      {
        id: 'incident-other-driver-see',
        title: 'Did you see the other driver?',
        content: 'Ask if they saw the other driver.',
        enabled: false
      },
      {
        id: 'incident-other-driver-identify',
        title: 'Are you able to identify the other driver?',
        content: 'Ask if they can identify the other driver.',
        enabled: false
      },
      {
        id: 'incident-other-driver-description',
        title: 'If not by name then description?',
        content: 'Ask for description of other driver.',
        enabled: false
      },
      {
        id: 'incident-other-headlights',
        title: 'Did the other vehicle or your vehicle have the headlights on?',
        content: 'Ask about headlight usage.',
        enabled: false
      },
      {
        id: 'incident-vision-header',
        title: 'J. Plaintiff\'s Vision:',
        content: 'Section header for plaintiff\'s vision.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-vision-prescription',
        title: 'At the time of the incident, were you required to wear prescription glasses or contacts?',
        content: 'Ask about prescription eyewear requirements.',
        enabled: false
      },
      {
        id: 'incident-vision-wearing',
        title: 'If Yes, ask were you wearing them? How often do you need to wear glasses? distance? Need it for walking?',
        content: 'Ask if they were wearing required eyewear.',
        enabled: false
      },
      {
        id: 'incident-vision-type',
        title: 'Glasses? Contacts? Reading glasses? since when? how often wear it? require glasses for walking?',
        content: 'Ask about type of eyewear and usage.',
        enabled: false
      },
      {
        id: 'incident-vision-cane',
        title: 'Do you require the use of a cane to walk? Since when? Why?',
        content: 'Ask about cane usage for walking.',
        enabled: false
      },
      {
        id: 'incident-witnesses-header',
        title: 'K. Witnesses:',
        content: 'Section header for witnesses.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-witnesses-present',
        title: 'Were there any individuals present – besides yourself and the other driver?',
        content: 'Ask about witnesses present.',
        enabled: false
      },
      {
        id: 'incident-witnesses-speak',
        title: 'Did you speak with anyone following the incident?',
        content: 'Ask if they spoke with anyone after incident.',
        enabled: false
      },
      {
        id: 'incident-witnesses-who',
        title: 'Who other than the police? Property damage? Did you speak to other divers? Did they speak first, or did you tell them what had happened? Please describe as closely as you can remember the conversation which took place.',
        content: 'Ask about conversations with witnesses.',
        enabled: false
      },
      {
        id: 'incident-witnesses-preclude',
        title: 'Did anything preclude you from seeing the vehicle prior to impact? Other vehicles? Names? What is your relationship? How long have you known _____? Ages? Have you spoken with him/her recently?',
        content: 'Ask about obstructions and witness relationships.',
        enabled: false
      },
      {
        id: 'incident-witnesses-interactions',
        title: 'GO THROUGH EACH WITNESS – what were the interactions? What did you tell __________?',
        content: 'Go through each witness and their interactions.',
        enabled: false
      },
      {
        id: 'incident-after-header',
        title: 'L. After the incident:',
        content: 'Section header for events after the incident.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-after-what-do',
        title: 'What did you do right after?',
        content: 'Ask what they did immediately after incident.',
        enabled: false
      },
      {
        id: 'incident-after-move-side',
        title: 'Did you move to the side of the road?',
        content: 'Ask if they moved to side of road.',
        enabled: false
      },
      {
        id: 'incident-after-vehicle-where',
        title: 'Where did you take your vehicle?',
        content: 'Ask where they took their vehicle.',
        enabled: false
      },
      {
        id: 'incident-after-other-vehicle',
        title: 'Where was the other vehicle?',
        content: 'Ask where the other vehicle was.',
        enabled: false
      },
      {
        id: 'incident-after-react',
        title: 'How did you react? Sit? Stand?',
        content: 'Ask how they reacted after incident.',
        enabled: false
      },
      {
        id: 'incident-after-walk-around',
        title: 'Did you walk around your vehicle? Did you walk around the other vehicle?',
        content: 'Ask if they walked around vehicles.',
        enabled: false
      },
      {
        id: 'incident-after-pain-walking',
        title: 'When you were walking around did you feel pain?',
        content: 'Ask if they felt pain while walking.',
        enabled: false
      },
      {
        id: 'incident-after-help-up',
        title: 'Did anyone help you up?',
        content: 'Ask if anyone helped them up.',
        enabled: false
      },
      {
        id: 'incident-after-speak-anyone',
        title: 'Did you speak to anyone? Who? What did they do? Did anyone help you? How?',
        content: 'Ask about speaking with others and receiving help.',
        enabled: false
      },
      {
        id: 'incident-after-call-help',
        title: 'Did you call for help?',
        content: 'Ask if they called for help.',
        enabled: false
      },
      {
        id: 'incident-after-offer-help',
        title: 'Did anyone offer to help you?',
        content: 'Ask if anyone offered help.',
        enabled: false
      },
      {
        id: 'incident-after-tell-hurt',
        title: 'Did you tell anyone you were hurt?',
        content: 'Ask if they told anyone they were hurt.',
        enabled: false
      },
      {
        id: 'incident-after-insurance',
        title: 'Did you call your insurance company?',
        content: 'Ask if they called their insurance company.',
        enabled: false
      },
      {
        id: 'incident-after-ambulance',
        title: 'Was an ambulance was called? Who called the ambulance? Why did you call the ambulance? paramedics arrived? What did they do for you? Did you ask for an ambulance?',
        content: 'Ask about ambulance and paramedics.',
        enabled: false
      },
      {
        id: 'incident-after-get-out',
        title: 'Did you get out of the car immediately after the accident? If so, how long after the accident? Were you assisted to get out of the car? If so, by who and why?',
        content: 'Ask about getting out of the car after accident.',
        enabled: false
      },
      {
        id: 'incident-reporting-header',
        title: 'M. Reporting The Incident:',
        content: 'Section header for incident reporting.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-reporting-report',
        title: 'Did you report the incident? How? To Who? When?',
        content: 'Ask about reporting the incident.',
        enabled: false
      },
      {
        id: 'incident-reporting-statement',
        title: 'Did you give a statement? What was said? Did he say why it was refused? Who else?',
        content: 'Ask about giving statements.',
        enabled: false
      },
      {
        id: 'incident-reporting-who-completed',
        title: 'Who completed that report? When? Who? How? Report immediately?',
        content: 'Ask who completed the report.',
        enabled: false
      },
      {
        id: 'incident-reporting-photos',
        title: 'Take any photographs? witness?',
        content: 'Ask about photographs taken.',
        enabled: false
      },
      {
        id: 'incident-reporting-police',
        title: 'Were the police notified? If so, by who and when? Did the police arrive at the scene? If so, how long after the accident? Did the police write a report?',
        content: 'Ask about police involvement and reports.',
        enabled: false
      },
      {
        id: 'incident-seating-header',
        title: 'N. Seating Positions:',
        content: 'Section header for seating positions.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-seating-position',
        title: 'What was your seating position in the vehicle, i.e. driver, front seat passenger?',
        content: 'Ask about seating position in vehicle.',
        enabled: false
      },
      {
        id: 'incident-seating-occupants',
        title: 'What was the number of occupants in each vehicle, their seating positions and their ages?',
        content: 'Ask about all occupants and their positions.',
        enabled: false
      },
      {
        id: 'incident-seating-head-turned',
        title: 'At the time of the impact was your head turned to the left or the right?',
        content: 'Ask about head position at impact.',
        enabled: false
      },
      {
        id: 'incident-seating-torso',
        title: 'Was your torso turned to the left or the right?',
        content: 'Ask about torso position at impact.',
        enabled: false
      },
      {
        id: 'incident-seating-straight-ahead',
        title: 'Were you looking straight ahead?',
        content: 'Ask if they were looking straight ahead.',
        enabled: false
      },
      {
        id: 'incident-seating-posture',
        title: 'Describe as accurately as you can your seating posture/stance at the time of the accident.',
        content: 'Ask them to describe their seating posture.',
        enabled: false
      },
      {
        id: 'incident-seating-hands',
        title: 'What was the location of your hands, i.e. steering wheel @ 10 and 2 o\'clock position, on the stick shift?',
        content: 'Ask about hand position.',
        enabled: false
      },
      {
        id: 'incident-seating-feet',
        title: 'What was the location of your feet, i.e. right foot on the brake, left foot on clutch/floorboard?',
        content: 'Ask about foot position.',
        enabled: false
      },
      {
        id: 'incident-seating-headrests',
        title: 'Did your vehicle have headrests? What kind were they, i.e., adjustable, high-back seats? Were they adjusted for your height?',
        content: 'Ask about headrests and their adjustment.',
        enabled: false
      },
      {
        id: 'incident-seating-seatback',
        title: 'What angle was the seatback adjusted in degrees? Does it have a separate lumbar adjustment? Is it a bench or bucket seat? How far away was the seatback from the steering wheel/dashboard in feet or inches?',
        content: 'Ask about seatback position and adjustment.',
        enabled: false
      },
      {
        id: 'incident-seating-post-impact',
        title: 'What was your post-impact motion, i.e., went forward and then backward, or first left then right? To what extent was this motion in inches or feet?',
        content: 'Ask about body motion after impact.',
        enabled: false
      },
      {
        id: 'incident-seating-head-hit',
        title: 'Did your head hit the windshield, steering wheel, or dashboard? If so, how far away was your head from the struck component in feet or inches? Did your head hit the head-rest? If so what part of your head?',
        content: 'Ask if head hit anything and distances.',
        enabled: false
      },
      {
        id: 'incident-seating-head-movement',
        title: 'Did your head move forward, backward, sideways? If so, which motion was first and to what extent in feet or inches?',
        content: 'Ask about head movement during impact.',
        enabled: false
      },
      {
        id: 'incident-seating-chest',
        title: 'Did your chest hit the steering wheel or dashboard? If so, how far away was the steering wheel or dashboard in feet or inches?',
        content: 'Ask if chest hit anything and distances.',
        enabled: false
      },
      {
        id: 'incident-seating-knees',
        title: 'Did your knee or knees hit the steering wheel or dashboard? If so, how far away was the steering wheel or dashboard from your knee or knees?',
        content: 'Ask if knees hit anything and distances.',
        enabled: false
      },
      {
        id: 'incident-seating-strike-anything',
        title: 'Did you strike anything in the vehicle? If so, how, where, and when? Describe the dynamics associated with this contact.',
        content: 'Ask if they struck anything in vehicle.',
        enabled: false
      },
      {
        id: 'incident-seating-consciousness',
        title: 'Did you lose consciousness?',
        content: 'Ask if they lost consciousness.',
        enabled: false
      },
      {
        id: 'incident-seating-bruises',
        title: 'Did you have any bruises, lacerations, or cuts? If so, where, and what caused them?',
        content: 'Ask about bruises, lacerations, or cuts.',
        enabled: false
      },
      {
        id: 'incident-distractions-header',
        title: 'O. Distractions:',
        content: 'Section header for distractions.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-distractions-distracted',
        title: 'Were you distracted when the collision happened, i.e. phone, radio, navigation, passenger, looking for something?',
        content: 'Ask about distractions during collision.',
        enabled: false
      },
      {
        id: 'incident-video-header',
        title: 'P. Video of the Incident.',
        content: 'Section header for video evidence.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-video-photos',
        title: 'Are you aware of any photos/videos of the accident or scene? Was your vehicle equipped with a camera/dashcam?',
        content: 'Ask about photos, videos, or dashcam footage.',
        enabled: false
      },
      {
        id: 'incident-impact-header',
        title: 'Q. Impact:',
        content: 'Section header for impact details.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'incident-impact-vehicle-move',
        title: 'Did the vehicle move as a result of the impact? If so how far in feet or inches? What direction did it move?',
        content: 'Ask about vehicle movement from impact.',
        enabled: false
      },
      {
        id: 'incident-impact-touching',
        title: 'Were the vehicles touching post-accident?',
        content: 'Ask if vehicles were touching after accident.',
        enabled: false
      },
      {
        id: 'incident-impact-driver-action',
        title: 'Was the driver accelerating, braking, or coasting at the time of impact? What was the velocity of each vehicle immediately prior to the impact?',
        content: 'Ask about driver actions and vehicle velocities at impact.',
        enabled: false
      },
      {
        id: 'incident-impact-felt',
        title: 'Describe how the impact felt.',
        content: 'Ask them to describe how the impact felt.',
        enabled: false
      },
      {
        id: 'incident-impact-sounds',
        title: 'Did you hear anything prior to the impact, i.e. screeching tires, honking horn?',
        content: 'Ask about sounds heard prior to impact.',
        enabled: false
      }
    ]
  },
  {
    id: 'injuries',
    title: 'Injuries',
    content: 'Questions about injuries sustained, medical treatment, and related issues',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'injuries-primary-care',
        title: 'Who is your current primary care physician?',
        content: 'Ask about current primary care physician.',
        enabled: false
      },
      {
        id: 'injuries-primary-care-duration',
        title: 'How long? don\'t have one',
        content: 'Ask duration of relationship with primary care physician.',
        enabled: false
      },
      {
        id: 'injuries-primary-care-treatment',
        title: 'Did you treat with your primary care physician as a result of this accident?',
        content: 'Ask if they treated with primary care physician for accident injuries.',
        enabled: false
      },
      {
        id: 'injuries-primary-care-no-treatment',
        title: 'No? No',
        content: 'Confirm no treatment with primary care physician.',
        enabled: false
      },
      {
        id: 'injuries-not-significant',
        title: 'And that\'s because your injuries were not significant?',
        content: 'Ask if lack of primary care treatment indicates injuries were not significant.',
        enabled: false
      },
      {
        id: 'injuries-insurance',
        title: 'Did you have insurance?',
        content: 'Ask about insurance coverage.',
        enabled: false
      },
      {
        id: 'injuries-insurance-coverage',
        title: 'And your insurance covered treatment for injuries like you are claiming in this case correct?',
        content: 'Confirm insurance coverage for claimed injuries.',
        enabled: false
      },
      {
        id: 'injuries-mental-health',
        title: 'You are not claiming any mental health issues to the subject accident correct?',
        content: 'Confirm no mental health claims related to accident.',
        enabled: false
      },
      {
        id: 'injuries-psychiatrist-treatment',
        title: 'Have you treated with any psychiatrists following the incident?',
        content: 'Ask about psychiatric treatment after incident.',
        enabled: false
      },
      {
        id: 'injuries-psychiatrist-who',
        title: 'If yes, who?',
        content: 'Identify psychiatrists if treatment occurred.',
        enabled: false
      },
      {
        id: 'injuries-psychiatrist-frequency',
        title: 'How many times?',
        content: 'Ask frequency of psychiatric treatment.',
        enabled: false
      },
      {
        id: 'injuries-psychiatrist-current',
        title: 'Currently treating?',
        content: 'Ask if currently receiving psychiatric treatment.',
        enabled: false
      },
      {
        id: 'injuries-discovery-responses-header',
        title: 'A. Discovery Responses: FROG 6 Series',
        content: 'Section header for discovery responses about injuries.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'injuries-physical-injuries',
        title: '(a) Physical Injuries:',
        content: 'Subsection for physical injuries.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'injuries-emotional-injuries',
        title: '(b) Emotional Injuries:',
        content: 'Subsection for emotional injuries.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'injuries-each-injury-note',
        title: 'For each injury: Go through each injury and use the spreadsheet with questions below:',
        content: 'Instructions for detailed injury questioning.',
        enabled: false
      },
      {
        id: 'injuries-when-start',
        title: 'When did it start?',
        content: 'Ask when each injury started.',
        enabled: false
      },
      {
        id: 'injuries-where-hurt',
        title: 'Where does it hurt?',
        content: 'Ask location of pain for each injury.',
        enabled: false
      },
      {
        id: 'injuries-complaints-symptoms',
        title: 'What are the complaints/symptoms?',
        content: 'Ask about specific complaints and symptoms.',
        enabled: false
      },
      {
        id: 'injuries-pain-type',
        title: 'Sharp pain or dull pain?',
        content: 'Ask about type of pain experienced.',
        enabled: false
      },
      {
        id: 'injuries-pain-day-of-accident',
        title: 'Can you rate your pain for me on the day of the accident? On a 1-10 scale, 10 being the most painful?',
        content: 'Ask for pain rating on day of accident.',
        enabled: false
      },
      {
        id: 'injuries-pain-frequency',
        title: 'How often do you feel pain?',
        content: 'Ask about frequency of pain.',
        enabled: false
      },
      {
        id: 'injuries-pain-progression',
        title: 'Getting worse? Getting better? the back pain has been getting worse and worse, back pain didn\'t start until the day after the incident. had to alter he work,',
        content: 'Ask about pain progression and work impact.',
        enabled: false
      },
      {
        id: 'injuries-current-pain',
        title: 'Do you still feel pain?',
        content: 'Ask if pain is still present.',
        enabled: false
      },
      {
        id: 'injuries-current-pain-rating',
        title: 'Can you rate your current pain on a scale of a 1-10?',
        content: 'Ask for current pain rating.',
        enabled: false
      }
    ]
  },
  {
    id: 'traumatic-brain-injury',
    title: 'Traumatic Brain Injury',
    content: 'Questions about traumatic brain injury diagnosis, symptoms, and treatment',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'tbi-diagnosis',
        title: 'Has anyone diagnosed you with a Traumatic brain injury?',
        content: 'Ask about TBI diagnosis.',
        enabled: false
      },
      {
        id: 'tbi-physical-header',
        title: 'A. Physical: Ask about before and after the incident?',
        content: 'Section header for physical TBI symptoms.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'tbi-consciousness-incident',
        title: 'Did you lose consciousness during the incident?',
        content: 'Ask about loss of consciousness during incident.',
        enabled: false
      },
      {
        id: 'tbi-consciousness-since',
        title: 'When have you lost consciousness since the incident?',
        content: 'Ask about loss of consciousness after incident.',
        enabled: false
      },
      {
        id: 'tbi-post-concussive',
        title: 'Have you ever been diagnosed with Post-concussive syndrome,',
        content: 'Ask about post-concussive syndrome diagnosis.',
        enabled: false
      },
      {
        id: 'tbi-prior-history',
        title: 'DO you have a history of prior traumatic brain injuries.',
        content: 'Ask about prior TBI history.',
        enabled: false
      },
      {
        id: 'tbi-concussion-history',
        title: 'What is your history with concussions?',
        content: 'Ask about concussion history.',
        enabled: false
      },
      {
        id: 'tbi-consciousness-brief',
        title: 'Loss of consciousness for a few seconds or minutes, being dazed, confused or disoriented;',
        content: 'Ask about brief consciousness loss and confusion.',
        enabled: false
      },
      {
        id: 'tbi-headaches-dizziness',
        title: 'Headaches, dizziness or loss of balance;',
        content: 'Ask about headaches, dizziness, and balance issues.',
        enabled: false
      },
      {
        id: 'tbi-nausea-vision',
        title: 'Nausea, vomiting, blurred vision, ringing in the ears or dry mouth;',
        content: 'Ask about nausea, vision problems, and related symptoms.',
        enabled: false
      },
      {
        id: 'tbi-sleep-fatigue',
        title: 'Difficulty sleeping, fatigue, drowsiness or sleeping more than usual.',
        content: 'Ask about sleep and fatigue issues.',
        enabled: false
      },
      {
        id: 'tbi-speech-weakness',
        title: 'Slurred speech, weakness or numbness in fingers and toes;',
        content: 'Ask about speech and extremity symptoms.',
        enabled: false
      },
      {
        id: 'tbi-light-sound-sensitivity',
        title: 'Sensitivity to light or sound?',
        content: 'Ask about light and sound sensitivity.',
        enabled: false
      },
      {
        id: 'tbi-headaches-current',
        title: 'Do you have headaches?',
        content: 'Ask about current headaches.',
        enabled: false
      },
      {
        id: 'tbi-fluid-drainage',
        title: 'Clear fluid draining from the nose or ears.',
        content: 'Ask about fluid drainage from nose or ears.',
        enabled: false
      },
      {
        id: 'tbi-inability-awaken',
        title: 'Inability to awaken from sleep;',
        content: 'Ask about sleep awakening difficulties.',
        enabled: false
      },
      {
        id: 'tbi-coordination-loss',
        title: 'Loss of coordination;',
        content: 'Ask about coordination problems.',
        enabled: false
      },
      {
        id: 'tbi-persistent-headaches',
        title: 'Persistent headache or headache that worsens;',
        content: 'Ask about persistent or worsening headaches.',
        enabled: false
      },
      {
        id: 'tbi-vomiting-seizures',
        title: 'Repeated vomiting or nausea, convulsions or seizures; and',
        content: 'Ask about vomiting, nausea, and seizures.',
        enabled: false
      },
      {
        id: 'tbi-emotional-header',
        title: 'B. Emotional:',
        content: 'Section header for emotional TBI symptoms.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'tbi-ptsd-anxiety',
        title: 'Do you have Post-traumatic anxiety?',
        content: 'Ask about post-traumatic anxiety.',
        enabled: false
      },
      {
        id: 'tbi-anxiety-before',
        title: 'Did you have anxiety before the incident?',
        content: 'Ask about pre-incident anxiety.',
        enabled: false
      },
      {
        id: 'tbi-anxiety-medication-before',
        title: 'Did you take medication for anxiety before the incident?',
        content: 'Ask about pre-incident anxiety medication.',
        enabled: false
      },
      {
        id: 'tbi-depression-before',
        title: 'Did you have depression before the incident?',
        content: 'Ask about pre-incident depression.',
        enabled: false
      },
      {
        id: 'tbi-depression-medication-before',
        title: 'Did you take medication for depression before the incident?',
        content: 'Ask about pre-incident depression medication.',
        enabled: false
      },
      {
        id: 'tbi-ptsd-diagnosis',
        title: 'Have you been diagnosed with Post Traumatic Stress Disorder?',
        content: 'Ask about PTSD diagnosis.',
        enabled: false
      },
      {
        id: 'tbi-blood-testing',
        title: 'Have you had any blood testing done since the incident?',
        content: 'Ask about blood testing after incident.',
        enabled: false
      },
      {
        id: 'tbi-blood-results',
        title: 'What were the results?',
        content: 'Ask about blood test results.',
        enabled: false
      },
      {
        id: 'tbi-confusion-before',
        title: 'Had you ever experienced confusion before the incident?',
        content: 'Ask about pre-incident confusion.',
        enabled: false
      },
      {
        id: 'tbi-forgetful-conversations',
        title: 'Have you been forgetful in conversations?',
        content: 'Ask about forgetfulness in conversations.',
        enabled: false
      },
      {
        id: 'tbi-mood-changes',
        title: 'Mood changes or swings, feeling depressed or anxious; and',
        content: 'Ask about mood changes and swings.',
        enabled: false
      },
      {
        id: 'tbi-cognitive-header',
        title: 'C. Cognitive:',
        content: 'Section header for cognitive TBI symptoms.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'tbi-memory-concentration',
        title: 'Memory, concentration problems or sensitivity to light or sound;',
        content: 'Ask about memory and concentration problems.',
        enabled: false
      },
      {
        id: 'tbi-confusion-agitation',
        title: 'Profound confusion, agitation, combativeness or other unusual behavior;',
        content: 'Ask about confusion and behavioral changes.',
        enabled: false
      },
      {
        id: 'tbi-remember-names',
        title: 'Are you able to remember people\'s names?',
        content: 'Ask about ability to remember names.',
        enabled: false
      },
      {
        id: 'tbi-headache-cause',
        title: 'Has anyone said what he headaches are from?',
        content: 'Ask about headache causation.',
        enabled: false
      },
      {
        id: 'tbi-past-treatment-header',
        title: 'D. Past Treatment:',
        content: 'Section header for past TBI treatment.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'tbi-treatment-types',
        title: 'Have you treated with any of the following:',
        content: 'Introduction to treatment provider questions.',
        enabled: false
      },
      {
        id: 'tbi-neurologist',
        title: 'Neurologist.',
        content: 'Ask about neurologist treatment.',
        enabled: false
      },
      {
        id: 'tbi-diagnostic-testing',
        title: 'Did you undergo diagnostic testing?',
        content: 'Ask about diagnostic testing.',
        enabled: false
      },
      {
        id: 'tbi-testing-description',
        title: 'What was the testing like?',
        content: 'Ask about testing experience.',
        enabled: false
      },
      {
        id: 'tbi-diagnosis-result',
        title: 'What was the diagnosis?',
        content: 'Ask about diagnosis from testing.',
        enabled: false
      },
      {
        id: 'tbi-psychiatrist',
        title: 'Psychiatrist.',
        content: 'Ask about psychiatrist treatment.',
        enabled: false
      },
      {
        id: 'tbi-neuropsychologist',
        title: 'Neuropsychologist.',
        content: 'Ask about neuropsychologist treatment.',
        enabled: false
      },
      {
        id: 'tbi-psychologist',
        title: 'Psychologist?',
        content: 'Ask about psychologist treatment.',
        enabled: false
      },
      {
        id: 'tbi-speech-pathologist',
        title: 'Speech Pathologist.',
        content: 'Ask about speech pathologist treatment.',
        enabled: false
      },
      {
        id: 'tbi-endocrinologist',
        title: 'Endocrinologist.',
        content: 'Ask about endocrinologist treatment.',
        enabled: false
      },
      {
        id: 'tbi-nurse-care-manager',
        title: 'Registered Nurse Care Manager.',
        content: 'Ask about nurse care manager treatment.',
        enabled: false
      },
      {
        id: 'tbi-ketamine-treatment',
        title: 'Have you discussed ketamine treatment with anyone?',
        content: 'Ask about ketamine treatment discussions.',
        enabled: false
      },
      {
        id: 'tbi-imaging-header',
        title: 'E. Imaging:',
        content: 'Section header for brain imaging.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'tbi-brain-scans',
        title: 'Have you undergone brain scans or MRIs or any other imaging?',
        content: 'Ask about brain imaging studies.',
        enabled: false
      },
      {
        id: 'tbi-results-review',
        title: 'Did you go over the results with a doctor?',
        content: 'Ask about reviewing imaging results.',
        enabled: false
      },
      {
        id: 'tbi-doctor-discussion',
        title: 'What did you discuss with the doctor?',
        content: 'Ask about discussions with doctor about results.',
        enabled: false
      },
      {
        id: 'tbi-future-treatment-header',
        title: 'F. Future Treatment:',
        content: 'Section header for future TBI treatment.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'tbi-future-treatment-plans',
        title: 'Do you plan to treat with any of the following in the future:',
        content: 'Introduction to future treatment questions.',
        enabled: false
      },
      {
        id: 'tbi-future-neurologist',
        title: 'Neurologist.',
        content: 'Ask about future neurologist treatment.',
        enabled: false
      },
      {
        id: 'tbi-future-psychiatrist',
        title: 'Psychiatrist.',
        content: 'Ask about future psychiatrist treatment.',
        enabled: false
      },
      {
        id: 'tbi-future-neuropsychologist',
        title: 'Neuropsychologist.',
        content: 'Ask about future neuropsychologist treatment.',
        enabled: false
      },
      {
        id: 'tbi-future-psychologist',
        title: 'Psychologist?',
        content: 'Ask about future psychologist treatment.',
        enabled: false
      },
      {
        id: 'tbi-future-endocrinologist',
        title: 'Endocrinologist.',
        content: 'Ask about future endocrinologist treatment.',
        enabled: false
      },
      {
        id: 'tbi-testosterone-levels',
        title: 'Have you have had testosterone levels taken since the incident?',
        content: 'Ask about testosterone level testing.',
        enabled: false
      },
      {
        id: 'tbi-other-diseases-header',
        title: 'G. Other related diseases:',
        content: 'Section header for related diseases.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'tbi-alzheimers-parkinsons',
        title: 'Were you ever seen for Alzheimer\'s Parkinson\'s disease?',
        content: 'Ask about Alzheimer\'s and Parkinson\'s treatment.',
        enabled: false
      },
      {
        id: 'tbi-before-incident',
        title: 'before the incident.',
        content: 'Ask about pre-incident neurological conditions.',
        enabled: false
      },
      {
        id: 'tbi-after-incident',
        title: 'after the incident?',
        content: 'Ask about post-incident neurological conditions.',
        enabled: false
      },
      {
        id: 'tbi-head-pain-resolved',
        title: 'has your head pain resolved?',
        content: 'Ask if head pain has resolved.',
        enabled: false
      },
      {
        id: 'tbi-dementia-treatment',
        title: 'have you sought treatment for Alzheimers or dementia? or Parkinson\'s disease?',
        content: 'Ask about treatment for neurodegenerative diseases.',
        enabled: false
      }
    ]
  },
  {
    id: 'incident',
    title: 'The Incident/Accident',
    content: 'Questions regarding the incident or accident that forms the basis of this case',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'incident-date-time',
        title: 'Date, time, and location',
        content: 'State the date, time, and location of the incident.',
        enabled: false
      },
      {
        id: 'incident-description',
        title: 'Detailed description of events',
        content: 'Provide a detailed description of what happened during the incident.',
        enabled: false
      },
      {
        id: 'incident-witnesses',
        title: 'Witnesses and observations',
        content: 'Were there any witnesses to the incident? What did you observe?',
        enabled: false
      },
      {
        id: 'incident-conditions',
        title: 'Weather and environmental conditions',
        content: 'Describe the weather and environmental conditions at the time of the incident.',
        enabled: false
      }
    ]
  },
  {
    id: 'injuries',
    title: 'Injuries and Medical Treatment',
    content: 'Questions about injuries sustained and medical treatment received',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'injuries-sustained',
        title: 'Injuries sustained',
        content: 'Describe in detail all injuries you sustained as a result of this incident.',
        enabled: false
      },
      {
        id: 'injuries-treatment',
        title: 'Medical treatment received',
        content: 'Describe all medical treatment you have received for these injuries.',
        enabled: false
      },
      {
        id: 'injuries-ongoing',
        title: 'Ongoing treatment and effects',
        content: 'Are you still receiving treatment? What ongoing effects do you experience?',
        enabled: false
      },
      {
        id: 'injuries-prior',
        title: 'Prior injuries or conditions',
        content: 'Have you had any prior injuries or medical conditions that may be relevant?',
        enabled: false
      }
    ]
  },
  {
    id: 'loss-consortium',
    title: 'Loss of Consortium',
    content: 'Questions about loss of consortium and relationship impacts',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'consortium-loss-types',
        title: 'What was the loss of the following:',
        content: 'Introduction to types of consortium losses.',
        enabled: false
      },
      {
        id: 'consortium-love',
        title: 'love.',
        content: 'Ask about loss of love.',
        enabled: false
      },
      {
        id: 'consortium-companionship',
        title: 'companionship.',
        content: 'Ask about loss of companionship.',
        enabled: false
      },
      {
        id: 'consortium-service',
        title: 'Service.',
        content: 'Ask about loss of service.',
        enabled: false
      },
      {
        id: 'consortium-comfort',
        title: 'comfort.',
        content: 'Ask about loss of comfort.',
        enabled: false
      },
      {
        id: 'consortium-care',
        title: 'care.',
        content: 'Ask about loss of care.',
        enabled: false
      },
      {
        id: 'consortium-assistance',
        title: 'assistance.',
        content: 'Ask about loss of assistance.',
        enabled: false
      },
      {
        id: 'consortium-protection',
        title: 'protection.',
        content: 'Ask about loss of protection.',
        enabled: false
      },
      {
        id: 'consortium-affection',
        title: 'affection.',
        content: 'Ask about loss of affection.',
        enabled: false
      },
      {
        id: 'consortium-society',
        title: 'society, and',
        content: 'Ask about loss of society.',
        enabled: false
      },
      {
        id: 'consortium-moral-support',
        title: 'moral support; and',
        content: 'Ask about loss of moral support.',
        enabled: false
      },
      {
        id: 'consortium-separation-fear',
        title: 'Do you fear a separation or divorce?',
        content: 'Ask about fear of separation or divorce.',
        enabled: false
      },
      {
        id: 'consortium-children-before',
        title: 'Were you planning on having children before this incident?',
        content: 'Ask about pre-incident plans for children.',
        enabled: false
      },
      {
        id: 'consortium-children-after',
        title: 'Are you able to have children after this incident?',
        content: 'Ask about ability to have children post-incident.',
        enabled: false
      },
      {
        id: 'consortium-care-increase',
        title: 'Do you take care of him/her/they above what you did prior to the incident?',
        content: 'Ask about increased caregiving responsibilities.',
        enabled: false
      },
      {
        id: 'consortium-physical-care',
        title: 'Have you had to provide physical care since the incident?',
        content: 'Ask about providing physical care post-incident.',
        enabled: false
      },
      {
        id: 'consortium-marriages-header',
        title: 'Marriages: Husband Wife/Partner:',
        content: 'Section header for marriage history.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'consortium-prior-marriages',
        title: 'Have you had any prior marriages?',
        content: 'Ask about prior marriages.',
        enabled: false
      },
      {
        id: 'consortium-prior-children',
        title: 'Any prior children?',
        content: 'Ask about children from prior relationships.',
        enabled: false
      },
      {
        id: 'consortium-divorce-reason',
        title: 'What was the reason for the divorce or separation.',
        content: 'Ask reason for prior divorce or separation.',
        enabled: false
      },
      {
        id: 'consortium-marriage-details',
        title: 'date/length of marriage.',
        content: 'Ask about marriage dates and duration.',
        enabled: false
      },
      {
        id: 'consortium-children-current',
        title: 'children.',
        content: 'Ask about current children.',
        enabled: false
      },
      {
        id: 'consortium-domestic-violence',
        title: 'Were there any acts of domestic violence.',
        content: 'Ask about domestic violence history.',
        enabled: false
      },
      {
        id: 'consortium-still-talk',
        title: 'do you still talk with him/her/they?',
        content: 'Ask about continued communication with ex-spouse.',
        enabled: false
      },
      {
        id: 'consortium-affairs',
        title: 'Did you have any affairs.',
        content: 'Ask about extramarital affairs.',
        enabled: false
      },
      {
        id: 'consortium-other-children',
        title: 'Do you have any other children?',
        content: 'Ask about other children not previously mentioned.',
        enabled: false
      }
    ]
  },
  {
    id: 'medications',
    title: 'Medications',
    content: 'Questions about medications taken as a result of injuries',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'medications-injury-related',
        title: 'What medications did you consume as a result of your injuries?',
        content: 'Ask about medications taken for injury-related symptoms.',
        enabled: false
      },
      {
        id: 'medications-current',
        title: 'Are you taking any medications now?',
        content: 'Ask about current medication use.',
        enabled: false
      }
    ]
  },
  {
    id: 'medical-providers',
    title: 'Medical Providers',
    content: 'Questions about medical providers and treatment history',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'providers-discovery-header',
        title: 'A. Discovery Responses: 6 Series.',
        content: 'Section header for discovery responses about medical providers.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'providers-first-doctor',
        title: 'When did you first see a doctor?',
        content: 'Ask when they first saw a doctor for injuries.',
        enabled: false
      },
      {
        id: 'providers-next-provider',
        title: 'Next provider – when did you see him?',
        content: 'Ask about subsequent medical providers.',
        enabled: false
      },
      {
        id: 'providers-how-heard',
        title: 'How did you hear about this doctor?',
        content: 'Ask how they learned about the doctor.',
        enabled: false
      },
      {
        id: 'providers-how-know',
        title: 'How did you know to go to that doctor?',
        content: 'Ask why they chose that particular doctor.',
        enabled: false
      },
      {
        id: 'providers-recommended',
        title: 'Was he recommended to you?',
        content: 'Ask if doctor was recommended.',
        enabled: false
      },
      {
        id: 'providers-each-doctor',
        title: 'For each doctor – how did you learn about the doctor?',
        content: 'Ask about referral source for each doctor.',
        enabled: false
      },
      {
        id: 'providers-treatment-received',
        title: 'What treatment did you receive?',
        content: 'Ask about treatment received from each provider.',
        enabled: false
      },
      {
        id: 'providers-exam-length',
        title: 'How long was the initial exam?',
        content: 'Ask duration of initial examination.',
        enabled: false
      },
      {
        id: 'providers-doctor-said',
        title: 'What did the doctor say?',
        content: 'Ask what the doctor told them.',
        enabled: false
      },
      {
        id: 'providers-language',
        title: 'English/spanish? translator? Did you pay for the visit?',
        content: 'Ask about language barriers and payment.',
        enabled: false
      },
      {
        id: 'providers-cost-explanation',
        title: 'Did anyone ever explain how much the treatment would cost?',
        content: 'Ask if treatment costs were explained.',
        enabled: false
      },
      {
        id: 'providers-total-owed',
        title: 'Do you know the total amount that is owed to medical provider ____?',
        content: 'Ask about total amount owed to each provider.',
        enabled: false
      },
      {
        id: 'providers-lien-paperwork',
        title: 'Did you sign any paperwork like a lien? Did Medi-Cal pay for any treatment?',
        content: 'Ask about liens and Medi-Cal payment.',
        enabled: false
      },
      {
        id: 'providers-future-appointments',
        title: 'Did you have future appointments? Who set them up?',
        content: 'Ask about scheduling future appointments.',
        enabled: false
      },
      {
        id: 'providers-pain-medication',
        title: 'Where you prescribed pain mediation? What was it? Still taking? How often?',
        content: 'Ask about pain medication prescriptions.',
        enabled: false
      },
      {
        id: 'providers-last-visit',
        title: 'Remember your last visit?',
        content: 'Ask about their last visit with provider.',
        enabled: false
      },
      {
        id: 'providers-stop-seeing',
        title: 'Why did you stop seeing that medical provider?',
        content: 'Ask why they stopped seeing the provider.',
        enabled: false
      },
      {
        id: 'providers-last-visit-told',
        title: 'What did the doctor tell you at the last visit?',
        content: 'Ask what doctor said at last visit.',
        enabled: false
      },
      {
        id: 'providers-chiro-questions',
        title: 'For Chiro – go through the questions re treatment?',
        content: 'Special questions for chiropractor treatment.',
        enabled: false
      },
      {
        id: 'providers-xray-mri',
        title: 'For x-ray/MRI – did anyone go over the results? Seen the films?',
        content: 'Ask about imaging results review.',
        enabled: false
      },
      {
        id: 'providers-treatment-type',
        title: 'Type of treatment',
        content: 'Ask about type of treatment received.',
        enabled: false
      },
      {
        id: 'providers-treatment-dates',
        title: 'Dates of treatment',
        content: 'Ask about dates of treatment.',
        enabled: false
      },
      {
        id: 'providers-examination-extent',
        title: 'Extent of examination',
        content: 'Ask about extent of medical examination.',
        enabled: false
      },
      {
        id: 'providers-diagnosis',
        title: 'Diagnosis',
        content: 'Ask about diagnosis given.',
        enabled: false
      },
      {
        id: 'providers-treatment-plan',
        title: 'Treatment',
        content: 'Ask about treatment plan.',
        enabled: false
      },
      {
        id: 'providers-prognosis',
        title: 'Prognosis',
        content: 'Ask about prognosis given.',
        enabled: false
      },
      {
        id: 'providers-attorney-recommended',
        title: 'Was this healthcare provider recommended by your attorney?',
        content: 'Ask if provider was recommended by attorney.',
        enabled: false
      },
      {
        id: 'providers-currently-seeing',
        title: 'Are you currently seeing this healthcare provider',
        content: 'Ask if still seeing the provider.',
        enabled: false
      },
      {
        id: 'providers-future-treatment',
        title: 'Will you this healthcare provider in the future?',
        content: 'Ask about future treatment with provider.',
        enabled: false
      },
      {
        id: 'providers-other-doctors',
        title: 'Any other treating doctors for your Injuries from this incident?',
        content: 'Ask about other treating doctors not mentioned.',
        enabled: false
      }
    ]
  },
  {
    id: 'medical-damages-total',
    title: 'Total Medical Damages to Date',
    content: 'Questions about total medical expenses and billing',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'medical-damages-total-amount',
        title: 'What is the total amount of your medical billing?',
        content: 'Ask for total medical billing amount.',
        enabled: false
      },
      {
        id: 'medical-damages-who-pays',
        title: 'Who pays the bills?',
        content: 'Ask who is responsible for paying medical bills.',
        enabled: false
      },
      {
        id: 'medical-damages-free-treatment',
        title: 'Do you treat for free?',
        content: 'Ask if they receive free medical treatment.',
        enabled: false
      }
    ]
  },
  {
    id: 'employment-income',
    title: 'Employment/Loss of Income/Loss of Earning Capacity',
    content: 'Questions about employment, wage loss, and earning capacity',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'employment-discovery-header',
        title: 'A. Discovery Responses: FROG 8 Series.',
        content: 'Section header for employment discovery responses.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'employment-currently-employed',
        title: 'Are you currently employed?',
        content: 'Ask about current employment status.',
        enabled: false
      },
      {
        id: 'employment-incident-time',
        title: 'What about at the time of the incident, were you employed?',
        content: 'Ask about employment status at time of incident.',
        enabled: false
      },
      {
        id: 'employment-if-no-header',
        title: 'If No:',
        content: 'Questions if not employed.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'employment-last-employed',
        title: 'When was the last time you were employed? Get general background on what she worked as....',
        content: 'Ask about last employment if currently unemployed.',
        enabled: false
      },
      {
        id: 'employment-industry',
        title: 'In what industry?',
        content: 'Ask about industry of employment.',
        enabled: false
      },
      {
        id: 'employment-type-work',
        title: 'What type of work?',
        content: 'Ask about type of work performed.',
        enabled: false
      },
      {
        id: 'employment-where',
        title: 'Where? Employer name?',
        content: 'Ask about employer name and location.',
        enabled: false
      },
      {
        id: 'employment-position-duties',
        title: 'Position? Duties?',
        content: 'Ask about job position and duties.',
        enabled: false
      },
      {
        id: 'employment-dates',
        title: 'Dates of employment:',
        content: 'Ask about employment dates.',
        enabled: false
      },
      {
        id: 'employment-wage-loss-claim',
        title: 'Are you making a wage loss claim?',
        content: 'Ask if making wage loss claim.',
        enabled: false
      },
      {
        id: 'employment-employed-incident',
        title: 'Were you employed at the time of the incident?',
        content: 'Confirm employment status at time of incident.',
        enabled: false
      },
      {
        id: 'employment-not-employed-clarification',
        title: 'In other words, you weren\'t employed at the time of the incident, so you didn\'t miss time from work.',
        content: 'Clarify no missed work if unemployed.',
        enabled: false
      },
      {
        id: 'employment-no-missed-work',
        title: 'So you didn\'t miss any time from work because you weren\'t employed working anywhere?',
        content: 'Confirm no missed work due to unemployment.',
        enabled: false
      },
      {
        id: 'employment-future-income-claim',
        title: 'I understand you are not making a claim for a loss of future income. Is that correct?',
        content: 'Confirm no future income loss claim.',
        enabled: false
      },
      {
        id: 'employment-earning-capacity-claim',
        title: 'I understand you are not making a claim for a loss of earning capacity? Is that correct?',
        content: 'Confirm no earning capacity loss claim.',
        enabled: false
      },
      {
        id: 'employment-agent-employee',
        title: 'At the time of the incident, were you acting as an agent or an employee for any person?',
        content: 'Ask if acting as agent or employee at time of incident.',
        enabled: false
      },
      {
        id: 'employment-history-header',
        title: 'B. EMPLOYMENT HISTORY:',
        content: 'Section header for employment history.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'employment-history-incident-time',
        title: 'Were you employed at the time of the incident?',
        content: 'Ask about employment at time of incident.',
        enabled: false
      },
      {
        id: 'employment-history-where',
        title: 'Where? Name of the company and location? Multiple locations?',
        content: 'Ask about employer details and locations.',
        enabled: false
      },
      {
        id: 'employment-history-start',
        title: 'When did you start working there?',
        content: 'Ask when employment started.',
        enabled: false
      },
      {
        id: 'employment-history-current',
        title: 'Are you currently employed there? If not, ask WHY? WHEN STOPPED?',
        content: 'Ask about current employment status with that employer.',
        enabled: false
      },
      {
        id: 'employment-history-job-title',
        title: 'What was your job title at the time of the incident? Is that your current title? [What was the last day BEFORE the Incident that you worked?',
        content: 'Ask about job title and last day worked before incident.',
        enabled: false
      },
      {
        id: 'employment-history-missed-days',
        title: 'How many days did you miss from work? How many days of work did you miss? Why? i.e. What days are you claiming you lost income?',
        content: 'Ask about missed work days and income loss.',
        enabled: false
      },
      {
        id: 'employment-history-schedule',
        title: 'At the time of the incident, what was your schedule? M-F? How many hours per day did you work at the time of the incident? What is your current schedule?',
        content: 'Ask about work schedule at time of incident and currently.',
        enabled: false
      },
      {
        id: 'employment-history-nature-work',
        title: 'What is the nature of your work? What do you do? Describe it. Duties?',
        content: 'Ask about nature of work and duties.',
        enabled: false
      },
      {
        id: 'employment-history-physical-demands',
        title: 'Do you sit/stand? Lift items?',
        content: 'Ask about physical demands of job.',
        enabled: false
      },
      {
        id: 'employment-history-return-work',
        title: 'When did you return to work following the fall?',
        content: 'Ask when returned to work after incident.',
        enabled: false
      },
      {
        id: 'employment-history-income-lost',
        title: 'How much income are you claiming you lost?',
        content: 'Ask about amount of income claimed as lost.',
        enabled: false
      },
      {
        id: 'employment-history-monthly-income',
        title: 'What your monthly income at the time of the incident? How is your monthly income calculated? Hourly? Salary?',
        content: 'Ask about monthly income and calculation method.',
        enabled: false
      },
      {
        id: 'employment-history-payment-method',
        title: 'Back in _____, How do you get paid? Check? Every 2 weeks?',
        content: 'Ask about payment method and frequency.',
        enabled: false
      },
      {
        id: 'employment-history-documentation',
        title: 'What documents do you have to support your loss of income claim?',
        content: 'Ask about documentation supporting income loss claim.',
        enabled: false
      },
      {
        id: 'employment-history-paystubs',
        title: 'Copies of Paystubs? Tax returns? W-2 from 5 years before accident? 2 year before? 1 year before?',
        content: 'Ask about paystubs, tax returns, and W-2 forms.',
        enabled: false
      },
      {
        id: 'employment-history-disability',
        title: 'Were you placed on Medical Disability? By who? Job remained opened?',
        content: 'Ask about medical disability status.',
        enabled: false
      },
      {
        id: 'employment-history-disability-claims',
        title: 'Did you file disability claim? Collect disability benefits? Collect unemployment benefits?',
        content: 'Ask about disability and unemployment benefit claims.',
        enabled: false
      },
      {
        id: 'employment-history-accommodations',
        title: 'Any accommodations? Request any from employer? Discuss with your doctor accommodations? Any other position available? Work part time?',
        content: 'Ask about workplace accommodations and alternative positions.',
        enabled: false
      },
      {
        id: 'employment-history-return-date',
        title: 'What day did you return to work? Did you have to reapply?',
        content: 'Ask about return to work date and reapplication.',
        enabled: false
      },
      {
        id: 'employment-history-full-capacity',
        title: 'Released to full capacity? Any accommodations now?',
        content: 'Ask about current work capacity and accommodations.',
        enabled: false
      },
      {
        id: 'employment-current-header',
        title: 'C. CURRENT EMPLOYMENT',
        content: 'Section header for current employment.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'employment-current-employed',
        title: 'Are you currently employed? [IF NOT]',
        content: 'Ask about current employment status.',
        enabled: false
      },
      {
        id: 'employment-current-unemployed-duration',
        title: 'How long have you been Unemployed?',
        content: 'Ask duration of unemployment if applicable.',
        enabled: false
      },
      {
        id: 'employment-current-stop-reason',
        title: 'Why did you stop working?',
        content: 'Ask reason for stopping work.',
        enabled: false
      },
      {
        id: 'employment-current-job-search',
        title: 'Have you tried looking for another job? Where? How often? Why not?',
        content: 'Ask about job search efforts.',
        enabled: false
      },
      {
        id: 'employment-current-monthly-income',
        title: 'What your current monthly income now?',
        content: 'Ask about current monthly income.',
        enabled: false
      },
      {
        id: 'employment-current-income-calculation',
        title: 'How is your monthly income calculated?',
        content: 'Ask how current income is calculated.',
        enabled: false
      },
      {
        id: 'employment-history-previous-header',
        title: 'D. EMPLOYMENT HISTORY (IF NEEDED)',
        content: 'Section header for previous employment history.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'employment-history-before',
        title: 'Did you work somewhere BEFORE working at ______.',
        content: 'Ask about employment before current/recent job.',
        enabled: false
      },
      {
        id: 'employment-history-before-where',
        title: 'Where? Name of the company and location?',
        content: 'Ask about previous employer details.',
        enabled: false
      },
      {
        id: 'employment-history-before-dates',
        title: 'When did you start/stop working there?',
        content: 'Ask about dates of previous employment.',
        enabled: false
      },
      {
        id: 'employment-history-before-leave',
        title: 'Why did you leave ______? Quit? Fired? Angry?',
        content: 'Ask reason for leaving previous employment.',
        enabled: false
      },
      {
        id: 'employment-history-before-title',
        title: 'What was your job title at the time of the incident?',
        content: 'Ask about job title at previous employer.',
        enabled: false
      },
      {
        id: 'employment-history-before-duties',
        title: 'What is the nature of your work? What do you do? Duties',
        content: 'Ask about duties at previous employment.',
        enabled: false
      },
      {
        id: 'employment-history-before-income',
        title: 'What your monthly income at ____ ?',
        content: 'Ask about income at previous employment.',
        enabled: false
      },
      {
        id: 'employment-history-before-calculation',
        title: 'How is your monthly income calculated?',
        content: 'Ask how previous income was calculated.',
        enabled: false
      },
      {
        id: 'employment-future-income-header',
        title: 'E. Will you lose income in the future as a result of the INCIDENT?',
        content: 'Section header for future income loss.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'employment-future-facts',
        title: 'What facts do you base this contention?',
        content: 'Ask about facts supporting future income loss claim.',
        enabled: false
      },
      {
        id: 'employment-future-estimate',
        title: 'Estimate of the amount?',
        content: 'Ask for estimate of future income loss amount.',
        enabled: false
      },
      {
        id: 'employment-future-duration',
        title: 'Estimate how long you will be unable to work?',
        content: 'Ask estimated duration of work inability.',
        enabled: false
      },
      {
        id: 'employment-future-calculation',
        title: 'How the claim future income is calculated?',
        content: 'Ask how future income loss is calculated.',
        enabled: false
      },
      {
        id: 'employment-future-documents',
        title: 'What documents do you have to support your claim?',
        content: 'Ask about documentation for future income loss claim.',
        enabled: false
      },
      {
        id: 'employment-future-current-income',
        title: 'What your current monthly income? How is your monthly income calculated? Hourly? Salary?',
        content: 'Ask about current income details.',
        enabled: false
      },
      {
        id: 'employment-future-hours',
        title: 'How many hours per week to you currently work?',
        content: 'Ask about current work hours.',
        enabled: false
      },
      {
        id: 'employment-future-return-work',
        title: 'Since your return to work,',
        content: 'Questions about work since returning.',
        enabled: false
      },
      {
        id: 'employment-future-missed-time',
        title: 'In this year _____, have you missed any time from work as a result of your injuries from Simply Fresh? Had to take time off because not feeling well? how many days have you missed work because of your injury? Have you called out sick because in pain? if yes, how many times?',
        content: 'Ask about missed work time due to injuries.',
        enabled: false
      },
      {
        id: 'employment-future-previous-year',
        title: 'What about 2017?',
        content: 'Ask about missed work in previous years.',
        enabled: false
      },
      {
        id: 'employment-future-work-ability',
        title: 'Go over questions to find out how she is able to work now but not going to be able to work in the future.',
        content: 'Explore contradiction between current work ability and future claims.',
        enabled: false
      },
      {
        id: 'employment-immigration-header',
        title: 'F. IMMIGRATION issue:',
        content: 'Section header for immigration considerations.',
        enabled: false,
        isSubheading: true
      }
    ]
  },
  {
    id: 'property-damage',
    title: 'Property Damage',
    content: 'Questions about property damage claims and vehicle condition',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'property-damage-resolved',
        title: 'Has the property damage claim resolved?',
        content: 'Ask if property damage claim has been resolved.',
        enabled: false
      },
      {
        id: 'property-damage-not-claiming',
        title: 'I understand you are NOT making a claim for property damage? Is that correct? In other words, none of you personal property (like a cell phone, or glasses) was damaged?',
        content: 'Confirm no property damage claim for personal items.',
        enabled: false
      },
      {
        id: 'property-damage-photos-immediate',
        title: 'And immediately after the collision, did you take photographs of the incident?',
        content: 'Ask about immediate post-collision photographs.',
        enabled: false
      },
      {
        id: 'property-damage-photos-other-vehicle',
        title: 'Did you take pictures of the other vehicle?',
        content: 'Ask about photographs of other vehicle.',
        enabled: false
      },
      {
        id: 'property-damage-photos-resting-points',
        title: 'And the photographs were taken at the vehicles resting points?',
        content: 'Ask if photos were taken at final vehicle positions.',
        enabled: false
      },
      {
        id: 'property-damage-vehicle-moved',
        title: 'Did anyone move their vehicle before the photographs were taken?',
        content: 'Ask if vehicles were moved before photographing.',
        enabled: false
      },
      {
        id: 'property-damage-drivable',
        title: 'Were you able to drive your vehicle?',
        content: 'Ask if their vehicle was drivable after collision.',
        enabled: false
      },
      {
        id: 'property-damage-moved-vehicle',
        title: 'Did you move your vehicle immediately after the incident?',
        content: 'Ask if they moved their vehicle after incident.',
        enabled: false
      },
      {
        id: 'property-damage-location',
        title: 'Where was the damage to the your vehicle?',
        content: 'Ask about location of damage to their vehicle.',
        enabled: false
      },
      {
        id: 'property-damage-description',
        title: 'How would you describe the damage to the vehicles?',
        content: 'Ask for description of vehicle damage.',
        enabled: false
      }
    ]
  },
  {
    id: 'damages',
    title: 'Damages and Losses',
    content: 'Questions about damages, losses, and financial impact',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'damages-medical-expenses',
        title: 'Medical expenses',
        content: 'What medical expenses have you incurred as a result of this incident?',
        enabled: false
      },
      {
        id: 'damages-lost-wages',
        title: 'Lost wages and income',
        content: 'Have you lost any wages or income as a result of this incident?',
        enabled: false
      },
      {
        id: 'damages-property-damage',
        title: 'Property damage',
        content: 'Was there any property damage? Describe the damage and repair costs.',
        enabled: false
      },
      {
        id: 'damages-pain-suffering',
        title: 'Pain and suffering',
        content: 'Describe the pain and suffering you have experienced as a result of this incident.',
        enabled: false
      }
    ]
  },
  {
    id: 'current-condition',
    title: 'Current Condition and Medical Treatment',
    content: 'Questions about current pain, complaints, and ongoing treatment',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'current-condition-pain-complaints',
        title: 'What current pain or complaints do you still have?',
        content: 'Ask about current pain and complaints.',
        enabled: false
      },
      {
        id: 'current-condition-interferes',
        title: 'Do you still have pain or discomfort that interferes with your regular activities?',
        content: 'Ask if pain interferes with regular activities.',
        enabled: false
      },
      {
        id: 'current-condition-body-part',
        title: 'What part of your body? What is the pain?',
        content: 'Ask about specific body parts and type of pain.',
        enabled: false
      },
      {
        id: 'current-condition-complaints-header',
        title: 'A. Current complaints (based on FROGS 6 series):',
        content: 'Section header for current complaints based on discovery.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'current-condition-where-kind',
        title: 'Where? What kind? Describe?',
        content: 'Ask for detailed description of current complaints.',
        enabled: false
      },
      {
        id: 'current-condition-frequency',
        title: 'How often does the pain in _____ occur?',
        content: 'Ask about frequency of pain in specific areas.',
        enabled: false
      },
      {
        id: 'current-condition-worse-activity',
        title: 'Is there any activity that makes the pain worse?',
        content: 'Ask about activities that worsen pain.',
        enabled: false
      },
      {
        id: 'current-condition-medical-treatment-header',
        title: 'B. Current Medical Treatment:',
        content: 'Section header for current medical treatment.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'current-condition-still-receiving',
        title: 'Are you still receiving medical treatment?',
        content: 'Ask if still receiving medical treatment.',
        enabled: false
      },
      {
        id: 'current-condition-last-provider',
        title: 'When was the last time you saw a health care provider for the injuries at issue in this litigation?',
        content: 'Ask about last visit to healthcare provider for litigation injuries.',
        enabled: false
      },
      {
        id: 'current-condition-stop-treating',
        title: 'Why did you stop treating?',
        content: 'Ask why they stopped medical treatment.',
        enabled: false
      },
      {
        id: 'current-condition-home-exercises',
        title: 'Any home exercises?',
        content: 'Ask about home exercise programs.',
        enabled: false
      },
      {
        id: 'current-condition-physical-therapy',
        title: 'Physical therapy?',
        content: 'Ask about physical therapy treatment.',
        enabled: false
      },
      {
        id: 'current-condition-primary-physician',
        title: 'Do you have a primary physician?',
        content: 'Ask about primary physician.',
        enabled: false
      },
      {
        id: 'current-condition-complaints-to-providers',
        title: 'Since the day of the incident, have you complained about your injuries to your [go through each]__________________ to your primary physician? Who is that? When was the last time you saw your primary physician for complaints of ________?',
        content: 'Ask about complaints made to various healthcare providers.',
        enabled: false
      },
      {
        id: 'current-condition-current-medications',
        title: 'Are you currently taking medications for your injuries?',
        content: 'Ask about current medications for injuries.',
        enabled: false
      },
      {
        id: 'current-condition-medication-details',
        title: 'what? how often?',
        content: 'Ask for details about current medications.',
        enabled: false
      }
    ]
  },
  {
    id: 'future-treatment',
    title: 'Future Treatment',
    content: 'Questions about planned future medical treatment',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'future-treatment-discovery-header',
        title: 'A. Discovery Responses: 6.7',
        content: 'Section header for future treatment discovery responses.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'future-treatment-doctor-told',
        title: 'Have you been told by any doctor that you will require future treatment for the injuries you sustained as a result of this incident?',
        content: 'Ask if doctor has recommended future treatment.',
        enabled: false
      },
      {
        id: 'future-treatment-what-is-it',
        title: 'What is it?',
        content: 'Ask what future treatment is recommended.',
        enabled: false
      },
      {
        id: 'future-treatment-describe',
        title: 'Describe?',
        content: 'Ask for description of future treatment.',
        enabled: false
      },
      {
        id: 'future-treatment-understanding',
        title: 'What\'s your understanding of the treatment you may require?',
        content: 'Ask about their understanding of recommended treatment.',
        enabled: false
      },
      {
        id: 'future-treatment-who',
        title: 'Who?',
        content: 'Ask who will provide future treatment.',
        enabled: false
      },
      {
        id: 'future-treatment-what',
        title: 'What?',
        content: 'Ask what specific treatment is planned.',
        enabled: false
      },
      {
        id: 'future-treatment-how-long',
        title: 'How long?',
        content: 'Ask duration of future treatment.',
        enabled: false
      },
      {
        id: 'future-treatment-surgery',
        title: 'Have you been advised you need surgery??',
        content: 'Ask if surgery has been recommended.',
        enabled: false
      },
      {
        id: 'future-treatment-injections',
        title: 'If injections - what part of your body?',
        content: 'Ask about injection locations if applicable.',
        enabled: false
      },
      {
        id: 'future-treatment-injection-details',
        title: 'How many? Explained process? Anesthesia? Told cost?',
        content: 'Ask for details about injection treatment.',
        enabled: false
      }
    ]
  },
  {
    id: 'activities',
    title: 'Activities',
    content: 'Questions about activities and lifestyle changes',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'activities-before-after',
        title: 'What activities were you involved in before? How often - When? Now??',
        content: 'Ask about activities before and after incident.',
        enabled: false
      },
      {
        id: 'activities-hobbies-sports',
        title: 'Activities: Hobbies/Sports What activities? Dance? Theme parks? Disneyland? Knotts? Hiking? Running?',
        content: 'Ask about specific hobbies and sports activities.',
        enabled: false
      },
      {
        id: 'activities-details',
        title: 'What? How much do you spend? How often before? When?',
        content: 'Ask for details about activities and frequency.',
        enabled: false
      },
      {
        id: 'activities-exercise',
        title: 'What exercise? Gym? Weight then and now?',
        content: 'Ask about exercise habits and weight changes.',
        enabled: false
      }
    ]
  },
  {
    id: 'services',
    title: 'Services',
    content: 'Questions about household services and assistance',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'services-household',
        title: 'Household Service: Have you incurred any costs associated with any household services?',
        content: 'Ask about costs for household services.',
        enabled: false
      },
      {
        id: 'services-hire-someone',
        title: 'Have you had to hire someone to perform any work (like chores) at the house because you are unable to perform them due to your injuries?',
        content: 'Ask about hiring help for household tasks.',
        enabled: false
      },
      {
        id: 'services-who-did-activities',
        title: 'Who did you these activities with?',
        content: 'Ask who helped with activities.',
        enabled: false
      }
    ]
  },
  {
    id: 'video-surveillance',
    title: 'Video Surveillance',
    content: 'Questions about video surveillance of the incident',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'video-surveillance-seen',
        title: 'Have you ever see any video surveillance of the incident?',
        content: 'Ask if they have seen video surveillance.',
        enabled: false
      },
      {
        id: 'video-surveillance-reviewed',
        title: 'Like you reviewed any footage?',
        content: 'Ask if they reviewed any footage.',
        enabled: false
      },
      {
        id: 'video-surveillance-told',
        title: 'Did anyone tell you there was video surveillance?',
        content: 'Ask if anyone mentioned video surveillance.',
        enabled: false
      },
      {
        id: 'video-surveillance-know-cameras',
        title: 'Do you know if there were any camera footage of the incident?',
        content: 'Ask if they know about camera footage.',
        enabled: false
      }
    ]
  },
  {
    id: 'subsequent-history',
    title: 'Subsequent History',
    content: 'Questions about events after the incident',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'subsequent-accidents-header',
        title: 'A. Accidents:',
        content: 'Section header for subsequent accidents.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'subsequent-accidents',
        title: 'Have you been involved in any accident or suffered any other injury since this incident?',
        content: 'Ask about accidents or injuries after the incident.',
        enabled: false
      },
      {
        id: 'subsequent-travel-header',
        title: 'B. Travel:',
        content: 'Section header for travel after incident.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'subsequent-travel-outside-state',
        title: 'Have you been outside the state of California since the day of the incident? Where? Why?',
        content: 'Ask about travel outside California after incident.',
        enabled: false
      },
      {
        id: 'subsequent-travel-frequency',
        title: 'How many times? how did you get there? Drive? Plane? Alone? Family?',
        content: 'Ask about frequency and method of travel.',
        enabled: false
      },
      {
        id: 'subsequent-travel-medical',
        title: 'Did you see any medical providers while you were there?',
        content: 'Ask about medical care received while traveling.',
        enabled: false
      },
      {
        id: 'subsequent-workers-comp-header',
        title: 'C. Subsequent Worker\'s Compensation Claims:',
        content: 'Section header for workers compensation claims.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'subsequent-workers-comp',
        title: 'Have you filed a workers compensation claim?',
        content: 'Ask about workers compensation claims after incident.',
        enabled: false
      }
    ]
  },
  {
    id: 'discovery-responses',
    title: 'Discovery',
    content: 'Questions about discovery responses and written discovery',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'discovery-present-document',
        title: 'I would like to present you with _______. Not attaching as an exhibit at this time.',
        content: 'Present discovery responses document.',
        enabled: false
      },
      {
        id: 'discovery-seen-document',
        title: 'Have you seen this document? These are your responses to written discovery.',
        content: 'Ask if they have seen their discovery responses.',
        enabled: false
      },
      {
        id: 'discovery-work-with-attorney',
        title: 'Did you work with your attorney to provide responses to said written discovery?',
        content: 'Ask about working with attorney on discovery responses.',
        enabled: false
      },
      {
        id: 'discovery-interpreter',
        title: 'Did you use an interpreter? How were the questions conveyed to you?',
        content: 'Ask about interpreter use for discovery responses.',
        enabled: false
      },
      {
        id: 'discovery-signature-verification',
        title: 'Is that your signature on the verification, which acknowledged under penalty of perjury your responses to said written discovery?',
        content: 'Verify signature on discovery responses.',
        enabled: false
      }
    ]
  },
  {
    id: 'damages-detailed',
    title: 'Damages',
    content: 'Detailed questions about damages and expenses',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'damages-out-of-pocket',
        title: 'Do you have any out of pocket medical expenses due to injuries?',
        content: 'Ask about out-of-pocket medical expenses.',
        enabled: false
      },
      {
        id: 'damages-how-much',
        title: 'How much?',
        content: 'Ask amount of out-of-pocket expenses.',
        enabled: false
      },
      {
        id: 'damages-to-whom',
        title: 'To whom?',
        content: 'Ask who expenses were paid to.',
        enabled: false
      },
      {
        id: 'damages-medical-bills',
        title: 'Do you receive medical bills from any providers?',
        content: 'Ask about receiving medical bills.',
        enabled: false
      },
      {
        id: 'damages-confirmed-amounts',
        title: 'Have you confirmed amounts due?',
        content: 'Ask if they have confirmed amounts owed.',
        enabled: false
      },
      {
        id: 'damages-paying-amounts',
        title: 'Are you paying the amounts currently?',
        content: 'Ask if they are currently paying medical bills.',
        enabled: false
      }
    ]
  },
  {
    id: 'attorney-referral',
    title: 'Attorney Referral Questions',
    content: 'Questions about attorney selection and lawsuit decision',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'attorney-referral-first-think',
        title: 'When did you first think about bringing a lawsuit?',
        content: 'Ask when they first considered filing lawsuit.',
        enabled: false
      },
      {
        id: 'attorney-referral-how-know',
        title: 'How did you know to file a lawsuit?',
        content: 'Ask how they knew to file a lawsuit.',
        enabled: false
      },
      {
        id: 'attorney-referral-talk-anyone',
        title: 'Did you talk with anyone about filing a lawsuit?',
        content: 'Ask if they discussed filing lawsuit with others.',
        enabled: false
      },
      {
        id: 'attorney-referral-when-talk',
        title: 'When?',
        content: 'Ask when they discussed filing lawsuit.',
        enabled: false
      },
      {
        id: 'attorney-referral-other-attorney',
        title: 'Have you ever been represented by any other attorney with regard to this subject matter of this lawsuit?',
        content: 'Ask about prior attorney representation.',
        enabled: false
      },
      {
        id: 'attorney-referral-other-who',
        title: 'Who?',
        content: 'Ask who the other attorney was.',
        enabled: false
      },
      {
        id: 'attorney-referral-other-when',
        title: 'When?',
        content: 'Ask when other attorney represented them.',
        enabled: false
      },
      {
        id: 'attorney-referral-other-why-not',
        title: 'Why not retained?',
        content: 'Ask why other attorney was not retained.',
        enabled: false
      },
      {
        id: 'attorney-referral-first-consult',
        title: 'When did you first consult an attorney about your claim for injuries (I don\'t want to know what the conversation was, just the date)',
        content: 'Ask date of first attorney consultation.',
        enabled: false
      },
      {
        id: 'attorney-referral-why-contact',
        title: 'Why did you to contact an attorney about your claim?',
        content: 'Ask why they contacted an attorney.',
        enabled: false
      },
      {
        id: 'attorney-referral-how-find',
        title: 'How did you find your attorney?',
        content: 'Ask how they found their current attorney.',
        enabled: false
      },
      {
        id: 'attorney-referral-decide-file',
        title: 'What made you decide to file this lawsuit?',
        content: 'Ask what made them decide to file lawsuit.',
        enabled: false
      },
      {
        id: 'attorney-referral-prior-stop',
        title: 'NOTE: IF PRIOR ATTORNEY - Why did he stop representing you?',
        content: 'Ask why prior attorney stopped representation.',
        enabled: false
      }
    ]
  },
  {
    id: 'defendant',
    title: 'Defendant and Liability',
    content: 'Questions about the defendant and their potential liability',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'defendant-knowledge',
        title: 'Knowledge of defendant',
        content: 'How did you become aware of the defendant? What is your relationship to them?',
        enabled: false
      },
      {
        id: 'defendant-negligence',
        title: 'Allegations of negligence',
        content: 'What actions or inactions by the defendant do you believe were negligent?',
        enabled: false
      },
      {
        id: 'defendant-duty',
        title: 'Duty of care',
        content: 'What duty of care did the defendant owe to you?',
        enabled: false
      },
      {
        id: 'defendant-breach',
        title: 'Breach of duty',
        content: 'How did the defendant breach their duty of care to you?',
        enabled: false
      }
    ]
  },
  {
    id: 'documents',
    title: 'Documents and Records',
    content: 'Questions about documents, records, and evidence',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'documents-reviewed',
        title: 'Documents reviewed',
        content: 'What documents have you reviewed in preparation for this deposition?',
        enabled: false
      },
      {
        id: 'documents-created',
        title: 'Documents created',
        content: 'Have you created any documents related to this case? (e.g., diaries, notes, photographs)',
        enabled: false
      },
      {
        id: 'documents-medical',
        title: 'Medical records',
        content: 'Have you reviewed your medical records? Are they accurate?',
        enabled: false
      },
      {
        id: 'documents-statements',
        title: 'Prior statements',
        content: 'Have you given any prior statements about this incident? (recorded, written, or verbal)',
        enabled: false
      }
    ]
  },
  {
    id: 'experts',
    title: 'Expert Witnesses',
    content: 'Questions about expert witnesses and their involvement',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'experts-consulted',
        title: 'Experts consulted',
        content: 'Have you consulted with any expert witnesses in this case?',
        enabled: false
      },
      {
        id: 'experts-opinions',
        title: 'Expert opinions',
        content: 'Are you aware of any expert opinions in this case? What are they?',
        enabled: false
      },
      {
        id: 'experts-medical',
        title: 'Medical experts',
        content: 'Have you been examined by any medical experts retained by the parties?',
        enabled: false
      }
    ]
  },
  {
    id: 'felony-military',
    title: 'Felony/Military',
    content: 'Questions about criminal history and military service',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'felony-conviction',
        title: 'I have to ask this at every deposition - Have you ever been convicted of a felony?',
        content: 'Ask about felony convictions.',
        enabled: false
      },
      {
        id: 'felony-details',
        title: 'If so, city/state of conviction?',
        content: 'Ask for details about felony conviction location.',
        enabled: false
      },
      {
        id: 'felony-date',
        title: 'Date of conviction?',
        content: 'Ask date of felony conviction.',
        enabled: false
      },
      {
        id: 'felony-offense',
        title: 'The offense?',
        content: 'Ask about the specific offense.',
        enabled: false
      },
      {
        id: 'felony-court-case',
        title: 'The court and case number?',
        content: 'Ask for court and case number information.',
        enabled: false
      },
      {
        id: 'military-service',
        title: 'Have you ever served in any military?',
        content: 'Ask about military service.',
        enabled: false
      },
      {
        id: 'military-branch',
        title: 'Branch of military',
        content: 'Ask about branch of military service.',
        enabled: false
      },
      {
        id: 'military-dates',
        title: 'Dates of Service',
        content: 'Ask about dates of military service.',
        enabled: false
      },
      {
        id: 'military-discharge',
        title: 'Discharged?',
        content: 'Ask about military discharge.',
        enabled: false
      },
      {
        id: 'military-disciplinary',
        title: 'Any disciplinary actions?',
        content: 'Ask about military disciplinary actions.',
        enabled: false
      },
      {
        id: 'military-rank',
        title: 'Highest rank?',
        content: 'Ask about highest military rank achieved.',
        enabled: false
      },
      {
        id: 'military-stationed',
        title: 'Where stationed?',
        content: 'Ask where they were stationed.',
        enabled: false
      },
      {
        id: 'military-health-problems',
        title: 'Any service related health problems or disabilities?',
        content: 'Ask about service-related health issues.',
        enabled: false
      },
      {
        id: 'military-pension',
        title: 'Did you receive any military pension or disability pay?',
        content: 'Ask about military pension or disability payments.',
        enabled: false
      },
      {
        id: 'military-future-plans',
        title: 'how long does he plan to stay in military?',
        content: 'Ask about future military service plans.',
        enabled: false
      },
      {
        id: 'military-after-plans',
        title: 'What are his plans for after',
        content: 'Ask about post-military plans.',
        enabled: false
      },
      {
        id: 'military-asvab-score',
        title: 'what was his score on the ASVAB?',
        content: 'Ask about ASVAB test score.',
        enabled: false
      }
    ]
  },
  {
    id: 'stipulation',
    title: 'Stipulation',
    content: 'Stipulation regarding transcript handling and procedures',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'stipulation-per-code',
        title: 'Per Code',
        content: 'Reference to applicable code provisions.',
        enabled: false
      },
      {
        id: 'stipulation-enter',
        title: 'At this point, we should enter a stipulation:',
        content: 'Introduction to stipulation.',
        enabled: false
      },
      {
        id: 'stipulation-relieve-reporter',
        title: 'I propose we relieve the court reporter of her duties under the California Code of Civil Procedure',
        content: 'Propose relieving court reporter of certain duties.',
        enabled: false
      },
      {
        id: 'stipulation-transcript-forwarding',
        title: 'The original transcript will be forwarded directly to my office and my office will forward it to plaintiff\'s counsel to provide it to his client for his review.',
        content: 'Explain transcript forwarding process.',
        enabled: false
      },
      {
        id: 'stipulation-review-period',
        title: 'Plaintiff will have 21 days from the date plaintiff\'s counsel receives the transcript and forwards it to Plaintiff to review the transcript, make any changes he deems necessary, sign the transcript, and forward the transcript to his counsel who will then forward it to the attention of Attorney Thomas St. Germain at the Walsworth law firm.',
        content: 'Specify review period and process.',
        enabled: false
      },
      {
        id: 'stipulation-changes-notification',
        title: 'Plaintiff will advise his counsel who will, in turn, advise my office of any changes in the transcript',
        content: 'Explain change notification process.',
        enabled: false
      },
      {
        id: 'stipulation-original-retention',
        title: 'My office, will retain the original transcript and will make it available for use by any party at the time of trial',
        content: 'Explain original transcript retention.',
        enabled: false
      },
      {
        id: 'stipulation-certified-copy',
        title: 'In the event that the original is lost, or that Plaintiff does not notify us of any changes or provide his signature, then a CERTIFIED COPY may be used as though it were a FULL SIGNED ORIGINAL.',
        content: 'Explain certified copy usage.',
        enabled: false
      },
      {
        id: 'stipulation-so-stipulated',
        title: 'So stipulated.',
        content: 'Formal agreement to stipulation.',
        enabled: false
      }
    ]
  },
  {
    id: 'preparation-followup',
    title: 'Preparation/Follow Up',
    content: 'Deposition preparation checklist and follow-up requirements',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'preparation-remove-last-depo',
        title: '1. Take out Last Depo Stuff.',
        content: 'Remove materials from previous depositions.',
        enabled: false
      },
      {
        id: 'preparation-review-medical',
        title: '2. Review Medical Summaries and Medical Records.',
        content: 'Review all medical documentation.',
        enabled: false
      },
      {
        id: 'preparation-medical-links',
        title: 'a. Insert links into deposition outline.',
        content: 'Add medical record links to outline.',
        enabled: false
      },
      {
        id: 'preparation-review-discovery',
        title: '3. Review Discovery Responses and Summaries.',
        content: 'Review all discovery materials.',
        enabled: false
      },
      {
        id: 'preparation-discovery-links',
        title: 'a. Insert links into deposition outline.',
        content: 'Add discovery response links to outline.',
        enabled: false
      },
      {
        id: 'preparation-day-before-review',
        title: '4. Review the day before the deposition.',
        content: 'Final review before deposition.',
        enabled: false
      }
    ]
  },
  {
    id: 'medical-malpractice',
    title: 'Medical Malpractice',
    content: 'Questions for medical malpractice depositions',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'malpractice-background-header',
        title: '🩺 I. Background & Qualifications',
        content: 'Section header for background and qualifications.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'malpractice-full-name',
        title: 'Please state your full name, title, and professional address for the record.',
        content: 'Ask for full identification and professional address.',
        enabled: false
      },
      {
        id: 'malpractice-current-position',
        title: 'What is your current position and area of medical specialty?',
        content: 'Ask about current position and specialty.',
        enabled: false
      },
      {
        id: 'malpractice-practice-duration',
        title: 'How long have you been practicing in this specialty?',
        content: 'Ask about length of practice in specialty.',
        enabled: false
      },
      {
        id: 'malpractice-board-certified',
        title: 'Are you board-certified? If so, when did you obtain certification?',
        content: 'Ask about board certification status and date.',
        enabled: false
      },
      {
        id: 'malpractice-disciplinary-action',
        title: 'Have you ever been disciplined by any licensing board or hospital?',
        content: 'Ask about any disciplinary actions.',
        enabled: false
      },
      {
        id: 'malpractice-patient-volume',
        title: 'How many patients do you typically treat in a given week?',
        content: 'Ask about typical patient volume.',
        enabled: false
      },
      {
        id: 'malpractice-continuing-education',
        title: 'What continuing education have you completed in the past five years related to this field?',
        content: 'Ask about recent continuing education.',
        enabled: false
      },
      {
        id: 'malpractice-prior-testimony',
        title: 'Have you previously testified in a medical malpractice case? If so, how many times?',
        content: 'Ask about prior expert testimony experience.',
        enabled: false
      },
      {
        id: 'malpractice-relationship-header',
        title: '📋 II. Relationship with the Patient',
        content: 'Section header for patient relationship.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'malpractice-first-treatment',
        title: 'When did you first begin treating the plaintiff?',
        content: 'Ask when treatment relationship began.',
        enabled: false
      },
      {
        id: 'malpractice-initial-visit-reason',
        title: 'What was the reason for the plaintiff\'s initial visit or consultation?',
        content: 'Ask about reason for initial visit.',
        enabled: false
      },
      {
        id: 'malpractice-medical-history',
        title: 'How did you obtain the patient\'s medical history?',
        content: 'Ask about method of obtaining medical history.',
        enabled: false
      },
      {
        id: 'malpractice-prior-records',
        title: 'Did you review any prior records before beginning treatment?',
        content: 'Ask about review of prior medical records.',
        enabled: false
      },
      {
        id: 'malpractice-initial-diagnosis',
        title: 'What was your initial diagnosis or working impression?',
        content: 'Ask about initial diagnosis.',
        enabled: false
      },
      {
        id: 'malpractice-treatment-plan',
        title: 'What treatment plan did you recommend at that time?',
        content: 'Ask about initial treatment plan.',
        enabled: false
      },
      {
        id: 'malpractice-alternative-options',
        title: 'Did you explain alternative treatment options to the patient?',
        content: 'Ask about discussion of alternative treatments.',
        enabled: false
      },
      {
        id: 'malpractice-informed-consent-provided',
        title: 'Did the patient provide informed consent for all procedures performed?',
        content: 'Ask about informed consent for procedures.',
        enabled: false
      },
      {
        id: 'malpractice-standard-care-header',
        title: '⚕️ III. Standard of Care',
        content: 'Section header for standard of care.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'malpractice-describe-standard',
        title: 'Can you describe the standard of care applicable to this condition or procedure?',
        content: 'Ask to describe applicable standard of care.',
        enabled: false
      },
      {
        id: 'malpractice-compliance-steps',
        title: 'What specific steps did you take to comply with that standard?',
        content: 'Ask about steps taken to comply with standard.',
        enabled: false
      },
      {
        id: 'malpractice-guidelines-protocols',
        title: 'Are you aware of any guidelines or protocols applicable to this treatment?',
        content: 'Ask about applicable guidelines or protocols.',
        enabled: false
      },
      {
        id: 'malpractice-guidelines-followed',
        title: 'Were those guidelines followed in this case?',
        content: 'Ask if guidelines were followed.',
        enabled: false
      },
      {
        id: 'malpractice-would-do-differently',
        title: 'Looking back, would you have done anything differently?',
        content: 'Ask about retrospective assessment.',
        enabled: false
      },
      {
        id: 'malpractice-consult-colleagues',
        title: 'Did you consult with any colleagues or specialists regarding the plaintiff\'s care?',
        content: 'Ask about consultations with other physicians.',
        enabled: false
      },
      {
        id: 'malpractice-met-standard',
        title: 'Do you believe your treatment met the applicable standard of care?',
        content: 'Ask if treatment met standard of care.',
        enabled: false
      },
      {
        id: 'malpractice-informed-consent-header',
        title: '🧠 IV. Informed Consent',
        content: 'Section header for informed consent.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'malpractice-risks-discussed',
        title: 'What risks did you discuss with the patient prior to treatment?',
        content: 'Ask about risks discussed with patient.',
        enabled: false
      },
      {
        id: 'malpractice-consent-documented',
        title: 'Did you document that informed consent discussion in the medical record?',
        content: 'Ask about documentation of consent discussion.',
        enabled: false
      },
      {
        id: 'malpractice-consent-form-signed',
        title: 'Was the consent form signed by the patient?',
        content: 'Ask if consent form was signed.',
        enabled: false
      },
      {
        id: 'malpractice-witnessed-signing',
        title: 'Did you personally witness the patient signing the consent form?',
        content: 'Ask if physician witnessed consent form signing.',
        enabled: false
      },
      {
        id: 'malpractice-complications-explained',
        title: 'Did you explain potential complications or alternative therapies?',
        content: 'Ask about explanation of complications and alternatives.',
        enabled: false
      },
      {
        id: 'malpractice-time-for-questions',
        title: 'Was the patient given sufficient time to ask questions before signing?',
        content: 'Ask if patient had time to ask questions.',
        enabled: false
      },
      {
        id: 'malpractice-documentation-header',
        title: '📄 V. Documentation & Records',
        content: 'Section header for documentation and records.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'malpractice-accurate-entries',
        title: 'Are all entries in the medical record accurate and made contemporaneously?',
        content: 'Ask about accuracy and timing of medical record entries.',
        enabled: false
      },
      {
        id: 'malpractice-progress-notes-author',
        title: 'Who prepared or dictated the progress notes?',
        content: 'Ask who authored progress notes.',
        enabled: false
      },
      {
        id: 'malpractice-verbal-orders',
        title: 'Were there any verbal orders or undocumented communications with staff?',
        content: 'Ask about verbal orders or undocumented communications.',
        enabled: false
      },
      {
        id: 'malpractice-chart-alterations',
        title: 'Were any portions of the chart altered or corrected after the incident?',
        content: 'Ask about any alterations to medical records.',
        enabled: false
      },
      {
        id: 'malpractice-test-results-copies',
        title: 'Did you maintain copies of all test results, imaging, and lab reports?',
        content: 'Ask about maintenance of test results and reports.',
        enabled: false
      },
      {
        id: 'malpractice-missing-records',
        title: 'Are there any missing records or gaps in documentation?',
        content: 'Ask about missing records or documentation gaps.',
        enabled: false
      },
      {
        id: 'malpractice-causation-header',
        title: '🧩 VI. Causation & Injury',
        content: 'Section header for causation and injury.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'malpractice-injury-cause-opinion',
        title: 'What, in your opinion, caused the plaintiff\'s injury or complication?',
        content: 'Ask for opinion on cause of injury.',
        enabled: false
      },
      {
        id: 'malpractice-injury-without-negligence',
        title: 'Could that injury occur in the absence of negligence?',
        content: 'Ask if injury could occur without negligence.',
        enabled: false
      },
      {
        id: 'malpractice-preexisting-conditions',
        title: 'Were there any pre-existing conditions that may have contributed?',
        content: 'Ask about contributing pre-existing conditions.',
        enabled: false
      },
      {
        id: 'malpractice-recognized-complication',
        title: 'Did you recognize the complication at the time it occurred?',
        content: 'Ask if complication was recognized when it occurred.',
        enabled: false
      },
      {
        id: 'malpractice-steps-after-complication',
        title: 'What steps did you take after becoming aware of the complication?',
        content: 'Ask about steps taken after recognizing complication.',
        enabled: false
      },
      {
        id: 'malpractice-informed-patient-family',
        title: 'Did you inform the patient or family of the complication immediately?',
        content: 'Ask about informing patient/family of complication.',
        enabled: false
      },
      {
        id: 'malpractice-root-cause-analysis',
        title: 'Was a root-cause analysis or internal review conducted?',
        content: 'Ask about root-cause analysis or internal review.',
        enabled: false
      },
      {
        id: 'malpractice-supervision-header',
        title: '🧍‍♂️ VII. Supervision & Delegation',
        content: 'Section header for supervision and delegation.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'malpractice-other-providers',
        title: 'Did any residents, nurses, or physician assistants participate in the care?',
        content: 'Ask about other healthcare providers involved in care.',
        enabled: false
      },
      {
        id: 'malpractice-supervision-method',
        title: 'How were they supervised during the course of treatment?',
        content: 'Ask about method of supervision.',
        enabled: false
      },
      {
        id: 'malpractice-tasks-delegated',
        title: 'Were any tasks delegated? If so, to whom and under what instructions?',
        content: 'Ask about delegation of tasks and instructions given.',
        enabled: false
      },
      {
        id: 'malpractice-accept-responsibility',
        title: 'Do you accept responsibility for the actions of those under your supervision?',
        content: 'Ask about accepting responsibility for supervised staff.',
        enabled: false
      },
      {
        id: 'malpractice-followup-header',
        title: '🕰 VIII. Follow-Up Care',
        content: 'Section header for follow-up care.',
        enabled: false,
        isSubheading: true
      },
      {
        id: 'malpractice-followup-instructions',
        title: 'What follow-up instructions were provided to the patient?',
        content: 'Ask about follow-up instructions given to patient.',
        enabled: false
      },
      {
        id: 'malpractice-followup-appointments',
        title: 'Did you schedule or recommend any follow-up appointments or testing?',
        content: 'Ask about scheduled follow-up appointments or testing.',
        enabled: false
      },
      {
        id: 'malpractice-missed-opportunities',
        title: 'Were there any missed opportunities to detect or address complications earlier?',
        content: 'Ask about missed opportunities for earlier intervention.',
        enabled: false
      },
      {
        id: 'malpractice-outcome-preventable',
        title: 'Do you believe the outcome could have been prevented with different care?',
        content: 'Ask if outcome could have been prevented with different care.',
        enabled: false
      }
    ]
  },
  {
    id: 'litigation',
    title: 'Litigation History',
    content: 'Questions about prior litigation and legal history',
    enabled: false,
    customQuestions: [],
    subsections: [
      {
        id: 'litigation-prior',
        title: 'Prior lawsuits',
        content: 'Have you been involved in any prior lawsuits? Describe them.',
        enabled: false
      },
      {
        id: 'litigation-claims',
        title: 'Insurance claims',
        content: 'Have you made any insurance claims related to this incident?',
        enabled: false
      },
      {
        id: 'litigation-settlements',
        title: 'Prior settlements',
        content: 'Have you been involved in any settlements of legal disputes?',
        enabled: false
      }
    ]
  }
];

export const generateOutlineMarkdown = (sections: OutlineSection[], metadata: any): string => {
  const header = `# ${metadata.caseName}
**Case No.:** ${metadata.caseNumber}
**Jurisdiction:** ${metadata.jurisdiction}
**Deponent:** ${metadata.deponent}
**Deposition Date:** ${metadata.depositionDate}
**Taking Attorney:** ${metadata.takingAttorney}
**Defending Attorney:** ${metadata.defendingAttorney}

---

## Deposition Outline

`;

  const generateSectionMarkdown = (section: OutlineSection, level: number = 1): string => {
    if (!section.enabled) return '';

    const prefix = level === 1 ? '#' : '##';
    let markdown = `${prefix.repeat(level)} ${section.title}\n\n`;

    // Only show section content if it has subsections and no direct content
    // If there are subsections, they contain the actual questions
    const enabledSubsections = (section.subsections || []).filter(s => s.enabled);
    if (enabledSubsections.length > 0) {
      let questionNumber = 1;
      enabledSubsections.forEach((subsection) => {
        const subsectionPrefix = level === 1 ? '###' : '####';
        // Replace placeholder with actual taking attorney name
        const subsectionTitle = subsection.title.replace('[TAKING_ATTORNEY]', metadata.takingAttorney || '[Taking Attorney Name]');
        
        if (subsection.isSubheading) {
          // Subheadings don't get numbered
          markdown += `${subsectionPrefix} ${subsectionTitle}\n\n${subsection.content}\n\n`;
        } else {
          // Regular subsections get numbered
          markdown += `${subsectionPrefix} ${questionNumber}. ${subsectionTitle}\n\n${subsection.content}\n\n`;
          questionNumber++;
        }
      });
    } else if (section.content && section.content !== 'Questions about ' + section.title.toLowerCase()) {
      // Only show content if it's not a generic description
      markdown += `${section.content}\n\n`;
    }

    // Append custom questions (if any), continuing numbering after subsections
    const custom = (section.customQuestions || []).map(q => q.trim()).filter(q => q.length > 0);
    if (custom.length > 0) {
      const startIndex = enabledSubsections.length;
      custom.forEach((question, idx) => {
        const subsectionPrefix = level === 1 ? '###' : '####';
        const number = startIndex + idx + 1;
        markdown += `${subsectionPrefix} ${number}. ${question}\n\n`;
      });
    }

    // Append freeform notes (if any)
    if (section.notes && section.notes.trim().length > 0) {
      const subsectionPrefix = level === 1 ? '###' : '####';
      markdown += `${subsectionPrefix} Notes\n\n${section.notes.trim()}\n\n`;
    }

    return markdown;
  };

    const sectionsMarkdown = sections
      .map((section) => generateSectionMarkdown(section, 1))
      .join('\n');

  return header + sectionsMarkdown;
};
