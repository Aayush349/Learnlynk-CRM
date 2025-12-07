-- Enable RLS on tables
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- RLS Policy for SELECT on leads
CREATE POLICY "Counselors can view assigned or team leads"
ON leads
FOR SELECT
USING (
    -- Admins can see all leads
    (auth.jwt() ->> 'role')::text = 'admin'
    OR
    -- Counselors can see leads assigned to them
    owner_id = auth.uid()
    OR
    -- Counselors can see leads assigned to their team members
    owner_id IN (
        SELECT ut2.user_id
        FROM user_teams ut1
        JOIN user_teams ut2 ON ut1.team_id = ut2.team_id
        WHERE ut1.user_id = auth.uid()
    )
);

-- RLS Policy for INSERT on leads
CREATE POLICY "Authenticated users can create leads"
ON leads
FOR INSERT
WITH CHECK (
    auth.uid() IS NOT NULL
    AND
    (
        -- Admins can create leads for anyone
        (auth.jwt() ->> 'role')::text = 'admin'
        OR
        -- Counselors can create leads assigned to themselves
        owner_id = auth.uid()
    )
);

-- RLS Policy for UPDATE on leads
CREATE POLICY "Users can update their assigned leads"
ON leads
FOR UPDATE
USING (
    (auth.jwt() ->> 'role')::text = 'admin'
    OR
    owner_id = auth.uid()
)
WITH CHECK (
    (auth.jwt() ->> 'role')::text = 'admin'
    OR
    owner_id = auth.uid()
);

-- RLS Policies for applications
CREATE POLICY "Users can view applications for accessible leads"
ON applications
FOR SELECT
USING (
    lead_id IN (
        SELECT id FROM leads
        WHERE (auth.jwt() ->> 'role')::text = 'admin'
        OR owner_id = auth.uid()
        OR owner_id IN (
            SELECT ut2.user_id
            FROM user_teams ut1
            JOIN user_teams ut2 ON ut1.team_id = ut2.team_id
            WHERE ut1.user_id = auth.uid()
        )
    )
);

CREATE POLICY "Users can create applications"
ON applications
FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);

-- RLS Policies for tasks
CREATE POLICY "Users can view tasks for accessible applications"
ON tasks
FOR SELECT
USING (
    related_id IN (
        SELECT a.id FROM applications a
        JOIN leads l ON a.lead_id = l.id
        WHERE (auth.jwt() ->> 'role')::text = 'admin'
        OR l.owner_id = auth.uid()
        OR l.owner_id IN (
            SELECT ut2.user_id
            FROM user_teams ut1
            JOIN user_teams ut2 ON ut1.team_id = ut2.team_id
            WHERE ut1.user_id = auth.uid()
        )
    )
);

CREATE POLICY "Users can create tasks"
ON tasks
FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Users can update tasks"
ON tasks
FOR UPDATE
USING (
    related_id IN (
        SELECT a.id FROM applications a
        JOIN leads l ON a.lead_id = l.id
        WHERE (auth.jwt() ->> 'role')::text = 'admin'
        OR l.owner_id = auth.uid()
    )
);