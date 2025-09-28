# Testing Guide for DepoOutline

## Manual Testing Checklist

### 1. Authentication Flow

#### Magic Link Sign-In
- [ ] Navigate to `/auth/signin`
- [ ] Enter valid email address
- [ ] Click "Send Magic Link"
- [ ] Check email inbox (and spam folder)
- [ ] Click magic link in email
- [ ] Verify successful sign-in and redirect to home page
- [ ] Verify user name/email appears in header

#### Google OAuth (if enabled)
- [ ] Click "Continue with Google" button
- [ ] Complete Google OAuth flow
- [ ] Verify successful sign-in and redirect
- [ ] Check that Google profile info is used

#### Sign Out
- [ ] Click "Sign Out" button in header
- [ ] Verify redirect to sign-in page
- [ ] Verify cannot access protected pages without signing in

### 2. Matter Management

#### Create New Matter
- [ ] Click "New" button in Matter selector
- [ ] Fill in matter title (required)
- [ ] Add optional description
- [ ] Toggle E2EE setting
- [ ] Click "Create Matter"
- [ ] Verify matter appears in list
- [ ] Verify matter is automatically selected

#### Select Existing Matter
- [ ] Create multiple matters
- [ ] Click on different matters in the list
- [ ] Verify selection updates correctly
- [ ] Verify E2EE indicator shows correctly

### 3. Deposition Management

#### Create New Deposition
- [ ] Select a matter first
- [ ] Click "New" button in Deposition selector
- [ ] Fill in deposition title (required)
- [ ] Fill in deponent name (required)
- [ ] Add optional date and case info
- [ ] Click "Create Deposition"
- [ ] Verify deposition appears in list
- [ ] Verify deposition is automatically selected

#### Select Existing Deposition
- [ ] Create multiple depositions in a matter
- [ ] Click on different depositions
- [ ] Verify selection updates correctly
- [ ] Verify case metadata populates from deposition

### 4. Case Metadata Form

#### Form Validation
- [ ] Try to generate outline with empty fields
- [ ] Verify "Fill Required Fields" message shows
- [ ] Fill all required fields
- [ ] Verify "Generate Outline" button becomes enabled

#### Data Persistence
- [ ] Fill out case metadata form
- [ ] Switch to different deposition
- [ ] Switch back to original deposition
- [ ] Verify form data persisted correctly

### 5. Section Management

#### Section Selection
- [ ] Click checkboxes to enable/disable sections
- [ ] Use "Select All" and "Clear All" buttons
- [ ] Verify section numbering updates correctly
- [ ] Verify outline preview updates

#### Section Reordering
- [ ] Drag sections to reorder them
- [ ] Verify new order persists
- [ ] Use "Reset Order" button
- [ ] Verify original order is restored

#### Subsection Management
- [ ] Click on section with subsections
- [ ] Verify subsection panel expands
- [ ] Enable/disable individual subsections
- [ ] Use subsection "Select All" and "Clear All"
- [ ] Verify parent section state updates correctly

### 6. Custom Questions

#### Add Questions
- [ ] Expand a section with subsections
- [ ] Click "Add Question" button
- [ ] Type custom question text
- [ ] Add multiple questions (up to 25)
- [ ] Verify questions are numbered correctly

#### Edit Questions
- [ ] Modify existing question text
- [ ] Verify changes are saved
- [ ] Delete questions using "×" button
- [ ] Verify question numbering updates

#### Question Limits
- [ ] Try to add more than 25 questions
- [ ] Verify "Add Question" button becomes disabled
- [ ] Delete questions to go under limit
- [ ] Verify button becomes enabled again

### 7. Section Notes

#### Add Notes
- [ ] Expand a section with subsections
- [ ] Click in the notes textarea
- [ ] Type section notes
- [ ] Verify character count (if implemented)
- [ ] Switch sections and return
- [ ] Verify notes persisted

#### Notes in Outline
- [ ] Add notes to a section
- [ ] Enable that section
- [ ] Check outline preview
- [ ] Verify notes appear in generated outline

### 8. End-to-End Encryption (E2EE)

#### Enable E2EE Matter
- [ ] Create matter with E2EE enabled
- [ ] Create deposition in that matter
- [ ] Verify E2EE indicator shows in matter list
- [ ] Add custom questions and notes
- [ ] Verify passphrase prompt appears

#### Encryption/Decryption
- [ ] Set encryption passphrase
- [ ] Add encrypted notes and questions
- [ ] Sign out and sign back in
- [ ] Enter correct passphrase
- [ ] Verify data decrypts correctly
- [ ] Try wrong passphrase
- [ ] Verify decryption fails gracefully

#### Disable E2EE
- [ ] Create matter with E2EE disabled
- [ ] Add notes and questions
- [ ] Verify no passphrase prompt
- [ ] Verify data saves in plain text
- [ ] Sign out and back in
- [ ] Verify data loads without passphrase

### 9. Outline Generation

#### Preview Updates
- [ ] Enable/disable sections
- [ ] Verify outline preview updates in real-time
- [ ] Add custom questions
- [ ] Verify questions appear in preview
- [ ] Add section notes
- [ ] Verify notes appear in preview

#### Generate Final Outline
- [ ] Complete all required metadata
- [ ] Select desired sections
- [ ] Add custom questions and notes
- [ ] Click "Generate Outline"
- [ ] Verify outline generates correctly
- [ ] Test export functionality (if implemented)

### 10. Data Persistence

#### Session Persistence
- [ ] Create matter, deposition, add data
- [ ] Refresh browser page
- [ ] Verify all data persists
- [ ] Navigate away and back
- [ ] Verify data still there

#### Cross-Session Persistence
- [ ] Sign out of application
- [ ] Sign back in
- [ ] Verify all matters and depositions persist
- [ ] Verify custom questions and notes persist
- [ ] Verify E2EE data decrypts correctly

### 11. Security Testing

#### Authentication Protection
- [ ] Try to access `/` without signing in
- [ ] Verify redirect to sign-in page
- [ ] Try to access API routes without auth
- [ ] Verify 401/403 responses

#### Data Isolation
- [ ] Create data with User A
- [ ] Sign out and sign in as User B
- [ ] Verify User B cannot see User A's data
- [ ] Create data as User B
- [ ] Sign back in as User A
- [ ] Verify User A still sees only their data

#### E2EE Security
- [ ] Enable E2EE and add encrypted data
- [ ] Check browser dev tools network tab
- [ ] Verify only ciphertext is sent to server
- [ ] Check database directly (if possible)
- [ ] Verify plaintext is not stored

### 12. Responsive Design

#### Desktop (1920x1080)
- [ ] Test all functionality on large screens
- [ ] Verify layout uses full width appropriately
- [ ] Check that all elements are accessible

#### Tablet (768x1024)
- [ ] Test portrait and landscape orientations
- [ ] Verify responsive grid layout
- [ ] Check touch interactions work

#### Mobile (375x667)
- [ ] Test all core functionality
- [ ] Verify forms are usable
- [ ] Check that text is readable
- [ ] Verify buttons are touch-friendly

### 13. Performance Testing

#### Page Load Times
- [ ] Test initial page load
- [ ] Test navigation between pages
- [ ] Verify reasonable load times (<3s)

#### Large Data Sets
- [ ] Create matter with many depositions (10+)
- [ ] Create deposition with many questions (25)
- [ ] Add long section notes
- [ ] Verify performance remains good

#### Network Conditions
- [ ] Test on slow 3G connection
- [ ] Verify graceful degradation
- [ ] Check offline behavior (if implemented)

### 14. Error Handling

#### Network Errors
- [ ] Disconnect internet during operation
- [ ] Verify error messages are helpful
- [ ] Reconnect and verify recovery

#### Invalid Data
- [ ] Try to submit forms with invalid data
- [ ] Verify validation messages
- [ ] Test edge cases (very long text, special characters)

#### Server Errors
- [ ] Test with invalid database connection
- [ ] Verify graceful error handling
- [ ] Check error logging (if implemented)

## Automated Testing (Future)

### Unit Tests
```bash
# Example test structure
npm test

# Test files to create:
# - lib/crypto.test.ts
# - lib/actions/matters.test.ts
# - components/MatterSelector.test.tsx
```

### Integration Tests
```bash
# Example with Playwright
npx playwright test

# Test scenarios:
# - Complete user flow
# - Authentication flow
# - Data persistence
# - E2EE functionality
```

## Test Data Setup

### Sample Test Data
```javascript
// Test matters
const testMatters = [
  { title: "Smith v. Johnson Medical Malpractice", e2ee: true },
  { title: "Personal Injury - Car Accident", e2ee: false },
  { title: "Contract Dispute - ABC Corp", e2ee: true }
];

// Test depositions
const testDepositions = [
  { 
    title: "Dr. Smith Deposition",
    deponent: "Dr. John Smith",
    date: "2024-02-15",
    caseName: "Smith v. Johnson"
  }
];
```

## Bug Report Template

When reporting issues, include:

1. **Environment**: Browser, OS, device
2. **Steps to Reproduce**: Exact steps taken
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happened
5. **Screenshots**: If applicable
6. **Console Errors**: Browser dev tools errors
7. **Network Logs**: If relevant

## Performance Benchmarks

Target performance metrics:
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms
- **Time to Interactive**: < 3s

## Accessibility Testing

- [ ] Test with screen reader
- [ ] Verify keyboard navigation
- [ ] Check color contrast ratios
- [ ] Test with browser zoom (200%)
- [ ] Verify ARIA labels and roles

---

**Note**: This testing guide should be updated as new features are added. Consider automating repetitive tests with tools like Playwright or Cypress.
