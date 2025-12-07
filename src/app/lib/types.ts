export interface Task {
  id: string;
  tenant_id: string;
  related_id: string;
  type: 'call' | 'email' | 'review';
  title: string;
  description: string | null;
  status: string;
  due_at: string;
  created_at: string;
  updated_at: string;
  applications?: {
    id: string;
    lead_id: string;
    status: string;
  };
}

export interface Application {
  id: string;
  tenant_id: string;
  lead_id: string;
  status: string;
  program: string | null;
  created_at: string;
}

export interface Lead {
  id: string;
  tenant_id: string;
  owner_id: string;
  stage: string;
  name: string;
  email: string | null;
  phone: string | null;
  created_at: string;
}
