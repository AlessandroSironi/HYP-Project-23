export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      area: {
        Row: {
          card_future: string | null
          card_revenue: string | null
          card_why: string | null
          created_at: string | null
          description: string
          description_2: string | null
          id: number
          name: string
          pic: string
        }
        Insert: {
          card_future?: string | null
          card_revenue?: string | null
          card_why?: string | null
          created_at?: string | null
          description: string
          description_2?: string | null
          id?: number
          name: string
          pic: string
        }
        Update: {
          card_future?: string | null
          card_revenue?: string | null
          card_why?: string | null
          created_at?: string | null
          description?: string
          description_2?: string | null
          id?: number
          name?: string
          pic?: string
        }
      }
      employee: {
        Row: {
          created_at: string | null
          description: string
          id: number
          mail: string
          name: string
          pic: string
          role: string
          surname: string
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: number
          mail: string
          name: string
          pic: string
          role: string
          surname: string
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: number
          mail?: string
          name?: string
          pic?: string
          role?: string
          surname?: string
        }
      }
      project: {
        Row: {
          companyImage: string
          companyLogo: string
          created_at: string | null
          description: string
          founderName: string
          founderSurname: string
          id: number
          mostRelevant: boolean | null
          name: string
          review: string
          supervisor: number | null
          year: number
        }
        Insert: {
          companyImage: string
          companyLogo: string
          created_at?: string | null
          description: string
          founderName: string
          founderSurname: string
          id?: number
          mostRelevant?: boolean | null
          name: string
          review: string
          supervisor?: number | null
          year: number
        }
        Update: {
          companyImage?: string
          companyLogo?: string
          created_at?: string | null
          description?: string
          founderName?: string
          founderSurname?: string
          id?: number
          mostRelevant?: boolean | null
          name?: string
          review?: string
          supervisor?: number | null
          year?: number
        }
      }
      related_to: {
        Row: {
          area: number
          created_at: string | null
          project: number
        }
        Insert: {
          area: number
          created_at?: string | null
          project: number
        }
        Update: {
          area?: number
          created_at?: string | null
          project?: number
        }
      }
      works_in: {
        Row: {
          created_at: string | null
          emp: number
          project: number
        }
        Insert: {
          created_at?: string | null
          emp: number
          project: number
        }
        Update: {
          created_at?: string | null
          emp?: number
          project?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_emp: {
        Args: Record<PropertyKey, never>
        Returns: {
          created_at: string | null
          description: string
          id: number
          mail: string
          name: string
          pic: string
          role: string
          surname: string
        }[]
      }
      get_projects_by_employee: {
        Args: {
          emp_id: number
        }
        Returns: {
          companyImage: string
          companyLogo: string
          created_at: string | null
          description: string
          founderName: string
          founderSurname: string
          id: number
          mostRelevant: boolean | null
          name: string
          review: string
          supervisor: number | null
          year: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

