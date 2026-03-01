-- Add campaign attribution fields for public booking analytics
ALTER TABLE "Appointment"
ADD COLUMN "campaignSource" TEXT,
ADD COLUMN "utmParameters" JSONB;

-- Speed up campaign analytics queries
CREATE INDEX "Appointment_campaignSource_idx" ON "Appointment"("campaignSource");
