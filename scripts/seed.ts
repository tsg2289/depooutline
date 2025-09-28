import { db } from '../src/lib/db';
import { questionTemplates } from '../src/lib/db/schema';

const medMalQuestions = [
  // Introduction and Background
  {
    category: 'Introduction',
    sectionId: 'intro',
    text: 'Please state your full name and spell your last name for the record.',
    jurisdiction: 'General',
  },
  {
    category: 'Introduction',
    sectionId: 'intro',
    text: 'Have you ever had your deposition taken before in any legal proceeding?',
    jurisdiction: 'General',
  },
  {
    category: 'Introduction',
    sectionId: 'intro',
    text: 'Have you ever testified in court as a witness in any legal proceeding?',
    jurisdiction: 'General',
  },

  // Medical Education and Training
  {
    category: 'Medical Education',
    sectionId: 'education',
    text: 'Where did you attend medical school and when did you graduate?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Medical Education',
    sectionId: 'education',
    text: 'What residency programs did you complete and where?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Medical Education',
    sectionId: 'education',
    text: 'Are you board certified in any medical specialty?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Medical Education',
    sectionId: 'education',
    text: 'When did you first become licensed to practice medicine?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Medical Education',
    sectionId: 'education',
    text: 'Have you ever had your medical license suspended, revoked, or restricted?',
    jurisdiction: 'Medical Malpractice',
  },

  // Medical Practice
  {
    category: 'Medical Practice',
    sectionId: 'practice',
    text: 'Where do you currently practice medicine?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Medical Practice',
    sectionId: 'practice',
    text: 'How long have you been practicing at your current location?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Medical Practice',
    sectionId: 'practice',
    text: 'What percentage of your practice involves [specific condition/procedure]?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Medical Practice',
    sectionId: 'practice',
    text: 'Do you have hospital privileges at any hospitals?',
    jurisdiction: 'Medical Malpractice',
  },

  // Standard of Care
  {
    category: 'Standard of Care',
    sectionId: 'standard-care',
    text: 'What is the standard of care for treating [specific condition]?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Standard of Care',
    sectionId: 'standard-care',
    text: 'Are there any published guidelines or protocols for this condition?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Standard of Care',
    sectionId: 'standard-care',
    text: 'Would a reasonably prudent physician in your specialty have acted differently?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Standard of Care',
    sectionId: 'standard-care',
    text: 'What are the differential diagnoses that should be considered?',
    jurisdiction: 'Medical Malpractice',
  },

  // Patient Care and Treatment
  {
    category: 'Patient Care',
    sectionId: 'patient-care',
    text: 'When did you first see the plaintiff as a patient?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Patient Care',
    sectionId: 'patient-care',
    text: 'What was the chief complaint when the patient first presented?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Patient Care',
    sectionId: 'patient-care',
    text: 'What history did you obtain from the patient?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Patient Care',
    sectionId: 'patient-care',
    text: 'What physical examination did you perform?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Patient Care',
    sectionId: 'patient-care',
    text: 'What diagnostic tests did you order and why?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Patient Care',
    sectionId: 'patient-care',
    text: 'What was your working diagnosis?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Patient Care',
    sectionId: 'patient-care',
    text: 'What treatment plan did you recommend?',
    jurisdiction: 'Medical Malpractice',
  },

  // Informed Consent
  {
    category: 'Informed Consent',
    sectionId: 'informed-consent',
    text: 'Did you discuss the risks and benefits of the proposed treatment?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Informed Consent',
    sectionId: 'informed-consent',
    text: 'What specific risks did you discuss with the patient?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Informed Consent',
    sectionId: 'informed-consent',
    text: 'Did you discuss alternative treatment options?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Informed Consent',
    sectionId: 'informed-consent',
    text: 'Did the patient sign a written consent form?',
    jurisdiction: 'Medical Malpractice',
  },

  // Medical Records
  {
    category: 'Medical Records',
    sectionId: 'medical-records',
    text: 'Do you maintain medical records for your patients?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Medical Records',
    sectionId: 'medical-records',
    text: 'When do you typically make entries in the medical record?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Medical Records',
    sectionId: 'medical-records',
    text: 'Have you made any changes to this patient\'s medical record since this lawsuit was filed?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Medical Records',
    sectionId: 'medical-records',
    text: 'Are these records complete and accurate to the best of your knowledge?',
    jurisdiction: 'Medical Malpractice',
  },

  // Causation
  {
    category: 'Causation',
    sectionId: 'causation',
    text: 'In your opinion, what caused the patient\'s injury?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Causation',
    sectionId: 'causation',
    text: 'Could the patient\'s outcome have been prevented?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Causation',
    sectionId: 'causation',
    text: 'Are there any other factors that could have contributed to this outcome?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Causation',
    sectionId: 'causation',
    text: 'What is the natural history of this condition without treatment?',
    jurisdiction: 'Medical Malpractice',
  },

  // Damages
  {
    category: 'Damages',
    sectionId: 'damages',
    text: 'What is the patient\'s current medical condition?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Damages',
    sectionId: 'damages',
    text: 'What future medical care will the patient require?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Damages',
    sectionId: 'damages',
    text: 'Are there any permanent limitations or disabilities?',
    jurisdiction: 'Medical Malpractice',
  },
  {
    category: 'Damages',
    sectionId: 'damages',
    text: 'What is the patient\'s prognosis?',
    jurisdiction: 'Medical Malpractice',
  },
];

async function seed() {
  console.log('Seeding medical malpractice question templates...');
  
  try {
    // Clear existing templates
    await db.delete(questionTemplates);
    
    // Insert new templates
    await db.insert(questionTemplates).values(medMalQuestions);
    
    console.log(`Successfully seeded ${medMalQuestions.length} question templates`);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();
