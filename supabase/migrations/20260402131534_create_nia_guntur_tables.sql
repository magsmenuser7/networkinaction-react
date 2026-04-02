/*
  # NIA Guntur Database Schema

  1. New Tables
    - `membership_applications`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `business` (text, required)
      - `designation` (text, required)
      - `mobile` (text, required)
      - `city` (text, default 'Guntur')
      - `how_heard` (text)
      - `expectations` (text)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `partner_inquiries`
      - `id` (uuid, primary key)
      - `organization_name` (text, required)
      - `contact_person` (text, required)
      - `mobile` (text, required)
      - `partner_tier` (text, required)
      - `business_description` (text)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Allow anonymous inserts (for public form submissions)
    - Only authenticated admins can read/update applications

  3. Important Notes
    - Forms are public-facing for submissions
    - Data reviewed within 24 hours by team
    - Status tracking: pending, reviewed, approved, rejected
*/

CREATE TABLE IF NOT EXISTS membership_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  business text NOT NULL,
  designation text NOT NULL,
  mobile text NOT NULL,
  city text DEFAULT 'Guntur',
  how_heard text,
  expectations text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS partner_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_name text NOT NULL,
  contact_person text NOT NULL,
  mobile text NOT NULL,
  partner_tier text NOT NULL,
  business_description text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE membership_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit membership application"
  ON membership_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can submit partner inquiry"
  ON partner_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view membership applications"
  ON membership_applications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can view partner inquiries"
  ON partner_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update membership applications"
  ON membership_applications
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update partner inquiries"
  ON partner_inquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);