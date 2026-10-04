# Roadmap expansion checklist

- [x] Compile subject-specific resource links for DSA, DBMS, and Operating Systems.
- [x] Add a per-subject progress model that persists topic completion locally.
- [x] Replace hardcoded roadmap data with resource-aware subject data.
- [x] Update subject cards and roadmap views to calculate progress from completed topics.
- [x] Add visible resource labels and external-link actions for every roadmap topic.
- [x] Verify progress survives navigation and updates readiness-related summaries.
- [x] Save a checkpoint and deliver the updated website.

## Multi-level syllabus and mock tests

- [x] Add Intermediate, Diploma, and B.Tech level selection with class/semester context.
- [x] Define adaptable common syllabi and subject catalogs for all three levels.
- [x] Add full syllabus sections with level-specific roadmap subjects and topics.
- [x] Add mock-test banks for each level and subject.
- [x] Ensure every new test session starts at Question 1 for the logged-in student.
- [x] Persist student level, syllabus selection, topic progress, and test attempts locally.
- [x] Verify dashboard, syllabus, roadmap, and fresh-start test flows.
- [x] Save a checkpoint and deliver the multi-level update.

## Clean first login and supply semesters

- [x] Remove pre-completed starter topics for new students.
- [x] Add first-login onboarding state with no selected supply semesters.
- [x] Let students choose one or more semesters containing supply subjects.
- [x] Filter the visible syllabus and subject cards by selected semesters.
- [x] Keep progress isolated by student track and semester selection.
- [x] Verify fresh login, semester changes, roadmap progress, and mock-test entry.
- [x] Save a checkpoint and deliver the corrected flow.

## Student accounts and onboarding

- [x] Add registration and login screens with sample-account guidance.
- [x] Add sample student accounts for Intermediate, Diploma, and B.Tech testing.
- [x] Store the active student profile and isolate progress per student.
- [x] Reset first-time student progress to 0% with no completed topics.
- [x] Add semester selection followed by subject selection within selected semesters.
- [x] Show only selected subjects on the dashboard and roadmap.
- [x] Verify account switching, onboarding completion, and fresh mock-test entry.
- [x] Save a checkpoint and deliver the student account experience.

## Detailed subject selection

- [x] Group available subjects by the selected semester.
- [x] Add subject cards with selection state, descriptions, topic counts, and supply labels.
- [x] Add select-all, clear-all, and selected-subject summary actions.
- [x] Persist selected subjects per student and level.
- [x] Filter dashboard, syllabus, and mock-test actions to selected subjects only.
- [x] Verify selection survives reload and semester changes.
- [x] Save a checkpoint and deliver the subject-selection experience.

## Telangana-aware syllabus expansion

- [x] Add Intermediate stream choices: MPC, BiPC, and CEC with year-specific subjects.
- [x] Add Diploma branch choices with six-semester subject catalogs.
- [x] Add B.Tech branch choices with eight-semester subject catalogs.
- [x] Store the selected stream/branch and semester path per student.
- [x] Filter supply-subject selection by the chosen curriculum path.
- [x] Keep syllabus and mock-test labels adaptable where exact university regulations vary.
- [x] Verify the new curriculum selectors on desktop and mobile.
- [x] Save a checkpoint and deliver the syllabus expansion.

## Regulation-year selector

- [x] Add regulation options for General adaptable, SBTET C-24, and JNTUH R25.
- [x] Label which student levels and branches each regulation applies to.
- [x] Persist the selected regulation per student and level.
- [x] Reset incompatible branch, semester, and subject selections when regulation changes.
- [x] Show the active regulation in the curriculum and syllabus views.
- [x] Verify switching, persistence, and mobile layout.
- [x] Save a checkpoint and deliver the regulation-aware flow.

## Supply subject blank-screen fix

- [x] Reproduce selection with a newly chosen supply subject.
- [x] Initialize missing subject progress to eight false roadmap states.
- [x] Make SubjectView and ResultView safe when progress is missing.
- [x] Verify selected subject identity is preserved during navigation.
- [x] Verify subject roadmap resources and progress toggles render.
- [x] Save a checkpoint and deliver the fix.

## Subject-specific mock questions

- [x] Define question banks for the main supply subjects across Intermediate, Diploma, and B.Tech.
- [x] Add subject-aware question selection starting from Question 1 for every new attempt.
- [x] Add correct-answer scoring and subject-specific result feedback.
- [x] Show the active subject and question count in the mock-test header.
- [x] Preserve previous attempts while keeping each new session fresh.
- [x] Verify mock tests for selected subjects and all student levels.
- [x] Save a checkpoint and deliver subject-specific mock tests.

## Offline-study PDF export

- [x] Add an export action for the selected supply subjects.
- [x] Include subject roadmap topics, resource links, and saved progress in the export.
- [x] Include subject-specific mock questions without revealing answers in the student study copy.
- [x] Add print/PDF styling with page breaks and offline-friendly metadata.
- [x] Verify export action from the dashboard and selected-subject state.
- [x] Save a checkpoint and deliver the offline-study export feature.

## Direct PDF download

- [x] Add a client-side PDF generation dependency or browser-safe PDF generator.
- [x] Generate a multi-page PDF containing selected subjects, progress, roadmap resources, and mock questions.
- [x] Add a direct Download study PDF button with a useful filename.
- [x] Keep the existing print/export path available as a fallback if generation fails.
- [x] Verify the download action and TypeScript build.
- [x] Save a checkpoint and deliver the direct PDF download feature.

## Functional header controls

- [x] Make the three-line icon open a navigation drawer.
- [x] Add dashboard, syllabus, mock-tests, and study-pack navigation actions.
- [x] Make the AS profile control open account details and current-track information.
- [x] Add logout and account switching using the existing sample accounts.
- [x] Preserve the active student's saved progress when switching accounts.
- [x] Verify desktop and mobile header interactions.
- [x] Save a checkpoint and deliver the functional header controls.

## Telangana C-20 and JNTUH R22 syllabus track

- [x] Add Diploma C-20 semester subjects for CSE, ECE, EEE, Mechanical, IT, and Civil.
- [x] Add B.Tech R22 semester subjects for CSE, ECE, EEE, Mechanical, IT, and Civil.
- [x] Include practicals, internships, electives, mini projects, and project stages in the catalog.
- [x] Update regulation labels from generic placeholders to SBTET C-20 and JNTUH R22.
- [x] Map subject titles to subject-specific mock-question categories with fallback handling.
- [x] Preserve the adaptability and accuracy note for college-specific variations.
- [x] Verify branch switching, semester filtering, persistence, and header menu behavior.
- [x] Save a checkpoint and deliver the updated syllabus track.

## Official PDF study resources

- [x] Find official SBTET syllabus and resource PDF pages for C-20 Diploma paths.
- [x] Find official JNTUH syllabus and resource PDF pages for R22 B.Tech paths.
- [x] Record stable source URLs and applicability notes.
- [x] Add PDF actions to syllabus and subject views.
- [x] Verify links and mobile resource presentation.
- [x] Save a checkpoint and deliver the PDF study-resource update.

## Roadmap topic PDF links

- [x] Add a subject-to-resource mapping for official PDFs and trusted study pages.
- [x] Give every roadmap topic a direct Study PDF or Study resource action.
- [x] Add a fallback message when an exact topic PDF is unavailable.
- [x] Keep external links accessible without disrupting topic completion toggles.
- [x] Verify topic-level resource actions across subjects and mobile layouts.
- [x] Save a checkpoint and deliver roadmap topic study links.

## Preview/demo bypass

- [x] Open the public preview directly as the sample Aarav Sharma student.
- [x] Preserve the login and registration screens for real student access.
- [x] Keep logout returning to login rather than automatically re-entering preview mode.
- [x] Add a visible preview/demo label so the bypass is not mistaken for secure authentication.
- [x] Verify direct dashboard load and responsive behavior.
- [x] Save a checkpoint and deliver the preview bypass.

## Backend account and cross-device sync

- [x] Add full-stack backend, database, and account-auth scaffolding.
- [x] Define student profile, curriculum selection, subject selection, roadmap progress, and test-attempt tables.
- [x] Add typed procedures for reading and updating the active student state.
- [x] Replace browser-only progress persistence with database mutations and queries.
- [x] Preserve PDF study exports and resource links after the migration.
- [x] Verify account isolation and cross-device sync behavior.
- [x] Save a checkpoint and deliver the backend upgrade.

## Rapid backend sync foundation

- [x] Resolve full-stack scaffold conflicts without replacing the SUPPLYMATE UI.
- [x] Add the minimum synced student-state database schema.
- [x] Add protected read and save procedures for student state.
- [x] Preserve local fallback while backend sync is being introduced.
- [x] Run database/schema, TypeScript, and dashboard checks.
- [x] Save a checkpoint and deliver the rapid sync foundation.

## Humanized review build

- [x] Replace slogan-heavy hero copy with direct student-facing language.
- [x] Reduce decorative AI-template styling and strengthen practical hierarchy.
- [x] Add grounded labels for regulation, subject selection, progress, and next actions.
- [x] Improve empty states and preview/demo disclosure for review clarity.
- [x] Keep account, syllabus, mock-test, and PDF features understandable at a glance.
- [x] Verify desktop and mobile presentation after the copy/design pass.
- [x] Save a checkpoint and deliver the humanized review build.

## Feature-preserving human polish

- [x] Keep all existing features and user flows unchanged.
- [x] Refine only copy, labels, spacing, hierarchy, and visual restraint.
- [x] Keep login, curriculum, semester, subject, roadmap, mock-test, PDF, menu, and sync behavior intact.
- [x] Verify desktop and mobile presentation after the polish pass.
- [x] Save a checkpoint and deliver the feature-preserving polish build.

## Polish validation follow-up

- [x] Re-test login/logout, account switching, curriculum selection, semesters, subjects, roadmap, mock tests, PDF download, menus, and backend sync after the copy pass.
- [x] Add one restrained CSS hierarchy adjustment without changing any feature behavior.
- [x] Re-run TypeScript and Vitest checks after the final polish.
- [x] Save a new checkpoint for the exact humanized review build.

## Final humanized QA corrections

- [x] Review and refine the account/profile menu state after the copy pass.
- [x] Review and refine the roadmap subject state after the copy pass.
- [x] Review and refine the mock-test state after the copy pass.
- [x] Review the PDF download action and offline-study sheet state after the copy pass.
- [x] Make a clearer but restrained visual hierarchy adjustment beyond copy-only changes.
- [x] Capture non-root verification states and save the final checkpoint.

## Final gap closure

- [x] Add explicit mini-project and project-stage entries to the C-20/R22 catalogs.
- [x] Make SBTET C-20 and JNTUH R22 the active defaults for Diploma and B.Tech new profiles.
- [x] Document that the current backend sync uses one authenticated JSON student-state record as the first migration step.
- [x] Add targeted verification coverage for the profile menu, subject view, mock test, and PDF actions.
- [x] Capture or otherwise verify non-root states before the final checkpoint.

## Public landing page and Try demo

- [x] Add a short public landing page explaining SUPPLYMATE in direct student language.
- [x] Add a prominent Try demo button that opens the sample student dashboard.
- [x] Keep real Login and Register actions available from the landing page.
- [x] Remove automatic preview entry from the public root flow.
- [x] Verify landing, demo, login, registration, and mobile presentation.
- [x] Save a checkpoint and deliver the public landing page.
