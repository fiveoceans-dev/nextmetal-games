-- Store inbound Talk To Us submissions
CREATE TABLE public.contact_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  message TEXT NOT NULL,
  source TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts so marketing site visitors can submit the form
CREATE POLICY "Anyone can submit contact requests"
  ON public.contact_requests
  FOR INSERT
  WITH CHECK (true);

-- Optional read policy for service or dashboard users can be added later
