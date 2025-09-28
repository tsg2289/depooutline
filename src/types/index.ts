// Original types from the Vite app
export interface CaseMetadata {
  caseName: string;
  caseNumber: string;
  jurisdiction: string;
  deponent: string;
  depositionDate: string;
  takingAttorney: string;
  defendingAttorney: string;
}

export interface OutlineSection {
  id: string;
  title: string;
  content: string;
  subsections?: OutlineSection[];
  enabled: boolean;
  // Up to 25 user-supplied questions for this section
  customQuestions?: string[];
  // Freeform notes for this section
  notes?: string;
  // Whether this is a subheading (no numbering)
  isSubheading?: boolean;
}

export interface DepositionOutline {
  metadata: CaseMetadata;
  sections: OutlineSection[];
}

// New types for the database-backed app
export interface Matter {
  id: string;
  userId: string;
  title: string;
  description: string | null;
  e2eeEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Deposition {
  id: string;
  matterId: string;
  title: string;
  deponentName: string;
  date: Date | null;
  caseName: string | null;
  caseNumber: string | null;
  jurisdiction: string | null;
  takingAttorney: string | null;
  defendingAttorney: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CustomQuestion {
  id: string;
  depositionId: string;
  sectionId: string;
  orderIndex: number;
  // For E2EE
  textCipher?: Uint8Array;
  iv?: Uint8Array;
  // For non-E2EE
  textPlain?: string;
  createdAt: Date;
}

export interface Note {
  id: string;
  depositionId: string;
  sectionId: string;
  // For E2EE
  bodyCipher?: Uint8Array;
  iv?: Uint8Array;
  // For non-E2EE
  bodyPlain?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface QuestionTemplate {
  id: string;
  category: string;
  text: string;
  jurisdiction?: string;
  sectionId?: string;
  createdAt: Date;
}

// Extended types that combine database and UI state
export interface DepositionWithData extends Deposition {
  matter: Matter;
  customQuestions: CustomQuestion[];
  notes: Note[];
}

export interface OutlineSectionWithData extends OutlineSection {
  customQuestions: string[];
  notes: string;
  // Indicates if data is encrypted and needs passphrase
  isEncrypted?: boolean;
}
