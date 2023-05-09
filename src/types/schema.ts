export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
    public: {
        Tables: {
            area: {
                Row: {
                    area_description: string;
                    area_id: number;
                    area_name: string;
                    area_pic: string;
                    created_at: string | null;
                };
                Insert: {
                    area_description: string;
                    area_id?: number;
                    area_name: string;
                    area_pic: string;
                    created_at?: string | null;
                };
                Update: {
                    area_description?: string;
                    area_id?: number;
                    area_name?: string;
                    area_pic?: string;
                    created_at?: string | null;
                };
            };
            employee: {
                Row: {
                    created_at: string | null;
                    emp_description: string;
                    emp_id: number;
                    emp_mail: string;
                    emp_name: string;
                    emp_pic: string;
                    emp_role: string;
                    emp_surname: string;
                };
                Insert: {
                    created_at?: string | null;
                    emp_description: string;
                    emp_id?: number;
                    emp_mail: string;
                    emp_name: string;
                    emp_pic: string;
                    emp_role: string;
                    emp_surname: string;
                };
                Update: {
                    created_at?: string | null;
                    emp_description?: string;
                    emp_id?: number;
                    emp_mail?: string;
                    emp_name?: string;
                    emp_pic?: string;
                    emp_role?: string;
                    emp_surname?: string;
                };
            };
            project: {
                Row: {
                    created_at: string | null;
                    proj_company_image: string;
                    proj_company_logo: string;
                    proj_company_name: string;
                    proj_description: string;
                    proj_founder_name: string;
                    proj_founder_surname: string;
                    proj_id: number;
                    proj_name: string;
                    proj_review: string;
                    proj_supervisor: number;
                    proj_year_inv: number;
                };
                Insert: {
                    created_at?: string | null;
                    proj_company_image: string;
                    proj_company_logo: string;
                    proj_company_name: string;
                    proj_description: string;
                    proj_founder_name: string;
                    proj_founder_surname: string;
                    proj_id?: number;
                    proj_name: string;
                    proj_review: string;
                    proj_supervisor: number;
                    proj_year_inv: number;
                };
                Update: {
                    created_at?: string | null;
                    proj_company_image?: string;
                    proj_company_logo?: string;
                    proj_company_name?: string;
                    proj_description?: string;
                    proj_founder_name?: string;
                    proj_founder_surname?: string;
                    proj_id?: number;
                    proj_name?: string;
                    proj_review?: string;
                    proj_supervisor?: number;
                    proj_year_inv?: number;
                };
            };
            related_to: {
                Row: {
                    area_id: number;
                    created_at: string | null;
                    proj_id: number;
                };
                Insert: {
                    area_id: number;
                    created_at?: string | null;
                    proj_id: number;
                };
                Update: {
                    area_id?: number;
                    created_at?: string | null;
                    proj_id?: number;
                };
            };
            works_in: {
                Row: {
                    created_at: string | null;
                    emp_id: number;
                    proj_id: number;
                };
                Insert: {
                    created_at?: string | null;
                    emp_id: number;
                    proj_id: number;
                };
                Update: {
                    created_at?: string | null;
                    emp_id?: number;
                    proj_id?: number;
                };
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}
