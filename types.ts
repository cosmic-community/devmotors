export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name?: string;
    short_description?: string;
    icon?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    full_description?: string;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    role?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    email?: string;
    linkedin?: string;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_title?: string;
    client_name?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    summary?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    related_services?: Service[];
    team_involved?: TeamMember[];
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    client_role?: string;
    company?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    quote?: string;
    related_case_study?: CaseStudy;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}