export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          phone: string | null;
          role: 'client' | 'provider';
          avatar_url: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          phone?: string | null;
          role: 'client' | 'provider';
          avatar_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          phone?: string | null;
          role?: 'client' | 'provider';
          avatar_url?: string | null;
          created_at?: string;
        };
      };
      service_categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          icon_name: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          icon_name?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          icon_name?: string | null;
        };
      };
      provider_profiles: {
        Row: {
          id: string;
          user_id: string;
          bio: string | null;
          experience_years: number | null;
          hourly_rate: number | null;
          service_categories: string[];
          location: string | null;
          rating: number | null;
          review_count: number;
          verified: boolean;
          available: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          bio?: string | null;
          experience_years?: number | null;
          hourly_rate?: number | null;
          service_categories?: string[];
          location?: string | null;
          rating?: number | null;
          review_count?: number;
          verified?: boolean;
          available?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          bio?: string | null;
          experience_years?: number | null;
          hourly_rate?: number | null;
          service_categories?: string[];
          location?: string | null;
          rating?: number | null;
          review_count?: number;
          verified?: boolean;
          available?: boolean;
          created_at?: string;
        };
      };
      bookings: {
        Row: {
          id: string;
          client_id: string;
          provider_id: string;
          service_category_id: string;
          date: string;
          start_time: string;
          end_time: string;
          status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          notes: string | null;
          total_amount: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          client_id: string;
          provider_id: string;
          service_category_id: string;
          date: string;
          start_time: string;
          end_time: string;
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          notes?: string | null;
          total_amount?: number | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          client_id?: string;
          provider_id?: string;
          service_category_id?: string;
          date?: string;
          start_time?: string;
          end_time?: string;
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          notes?: string | null;
          total_amount?: number | null;
          created_at?: string;
        };
      };
      reviews: {
        Row: {
          id: string;
          booking_id: string;
          client_id: string;
          provider_id: string;
          rating: number;
          comment: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          booking_id: string;
          client_id: string;
          provider_id: string;
          rating: number;
          comment?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          booking_id?: string;
          client_id?: string;
          provider_id?: string;
          rating?: number;
          comment?: string | null;
          created_at?: string;
        };
      };
    };
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    Views: {};
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    Functions: {};
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    Enums: {};
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    CompositeTypes: {};
  };
};
