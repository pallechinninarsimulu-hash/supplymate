# SUPPLYMATE backend synchronization scope

SUPPLYMATE currently uses the full-stack WebDev authentication scaffold together with one authenticated `student_state` JSON record per user. That record contains the selected level, regulation, branch or stream, semesters, supply subjects, roadmap progress, and test-related state. The frontend keeps a local browser copy as a resilience fallback and, when a real authenticated user is present, hydrates from and saves to the protected tRPC procedures.

This is the first migration step rather than a final normalized schema. Separate tables for subjects, roadmap topics, test attempts, and resource metadata can be introduced later without changing the student-facing flow. The current design avoids losing the existing locally saved student experience while backend authentication and account sync are being adopted.

The preview remains a demo entry point. Real cross-device synchronization requires a student to authenticate through the configured Manus OAuth flow; preview data is intentionally not treated as a real account.
