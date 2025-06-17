import { 
  volunteers, 
  newsletterSignups, 
  contactSubmissions,
  type Volunteer, 
  type InsertVolunteer,
  type NewsletterSignup,
  type InsertNewsletterSignup,
  type ContactSubmission,
  type InsertContactSubmission
} from "@shared/schema";

export interface IStorage {
  // Volunteer operations
  createVolunteer(volunteer: InsertVolunteer): Promise<Volunteer>;
  getVolunteers(): Promise<Volunteer[]>;
  
  // Newsletter operations
  createNewsletterSignup(signup: InsertNewsletterSignup): Promise<NewsletterSignup>;
  getNewsletterSignups(): Promise<NewsletterSignup[]>;
  
  // Contact operations
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private volunteers: Map<number, Volunteer>;
  private newsletterSignups: Map<number, NewsletterSignup>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private currentVolunteerId: number;
  private currentNewsletterSignupId: number;
  private currentContactSubmissionId: number;

  constructor() {
    this.volunteers = new Map();
    this.newsletterSignups = new Map();
    this.contactSubmissions = new Map();
    this.currentVolunteerId = 1;
    this.currentNewsletterSignupId = 1;
    this.currentContactSubmissionId = 1;
  }

  async createVolunteer(insertVolunteer: InsertVolunteer): Promise<Volunteer> {
    const id = this.currentVolunteerId++;
    const volunteer: Volunteer = {
      ...insertVolunteer,
      id,
      createdAt: new Date(),
    };
    this.volunteers.set(id, volunteer);
    return volunteer;
  }

  async getVolunteers(): Promise<Volunteer[]> {
    return Array.from(this.volunteers.values());
  }

  async createNewsletterSignup(insertSignup: InsertNewsletterSignup): Promise<NewsletterSignup> {
    // Check if email already exists
    const existingSignup = Array.from(this.newsletterSignups.values()).find(
      signup => signup.email === insertSignup.email
    );
    
    if (existingSignup) {
      throw new Error("Email already subscribed to newsletter");
    }

    const id = this.currentNewsletterSignupId++;
    const signup: NewsletterSignup = {
      ...insertSignup,
      id,
      createdAt: new Date(),
    };
    this.newsletterSignups.set(id, signup);
    return signup;
  }

  async getNewsletterSignups(): Promise<NewsletterSignup[]> {
    return Array.from(this.newsletterSignups.values());
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactSubmissionId++;
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }
}

export const storage = new MemStorage();
