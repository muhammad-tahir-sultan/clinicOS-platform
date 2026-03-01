Why (key blockers)

booking and marketing modules exist but are not loaded in app module, so those APIs won’t be active: app.module.ts, booking.module.ts, marketing.module.ts
Booking/marketing code uses Prisma fields not present in schema/migration (campaignSource, utmParameters): booking.service.ts, marketing.service.ts, schema.prisma
Frontend/backend API contract mismatches (PATCH vs PUT, POST vs PATCH on renew): api.ts, subscription.controller.ts
Refresh token flow likely broken (/auth/refresh is JWT-guarded but frontend calls it without valid auth header): auth.controller.ts, api.ts
Marketing page uses js-cookie and cookie token pattern inconsistent with rest of app, and dependency is missing: marketing page
Public pages hardcode http://localhost:4000 (deployment issue): clinic slug page, book page
Tests are minimal/outdated (Hello World e2e), so reliability is unproven: app.e2e-spec.ts
