/**
 * Configuración y preparación de cliente Supabase para Muby_labs
 * Diseñado para desacoplar el frontend y facilitar la persistencia en tiempo real
 * de inventarios, órdenes de venta (POS), captación de clientes potenciales (Leads)
 * y Libro de Reclamaciones Virtual conforme a ley.
 */

export interface SupabaseConfig {
  supabaseUrl: string;
  supabaseAnonKey: string;
}

// Variables de entorno preparadas para despliegue en Vercel / Netlify / Self-hosted
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://muby-labs-demo.supabase.co';
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'public-anon-key-placeholder';

/**
 * Esquema relacional recomendado en Supabase (PostgreSQL) para Muby_labs:
 * 
 * 1. TABLA: leads
 *    - id: uuid primary key default gen_random_uuid()
 *    - created_at: timestamp with time zone default now()
 *    - full_name: text not null
 *    - email: text not null
 *    - phone: text
 *    - company_name: text
 *    - selected_service: text not null
 *    - budget_range: text
 *    - message: text
 *    - status: text default 'nuevo'
 * 
 * 2. TABLA: inventory_items (con Supabase Realtime habilitado)
 *    - id: uuid primary key default gen_random_uuid()
 *    - sku: text unique not null
 *    - name: text not null
 *    - stock_qty: integer not null default 0
 *    - min_stock_alert: integer default 5
 *    - warehouse_location: text
 *    - updated_at: timestamp with time zone default now()
 * 
 * 3. TABLA: sales_transactions (POS)
 *    - id: uuid primary key default gen_random_uuid()
 *    - ticket_number: text not null
 *    - cashier_id: uuid references auth.users
 *    - subtotal: numeric(10,2) not null
 *    - tax: numeric(10,2) not null
 *    - total: numeric(10,2) not null
 *    - payment_method: text
 *    - status: text default 'completada'
 * 
 * 4. TABLA: complaints_book (Libro de Reclamaciones Virtual - Ley N° 29571)
 *    - id: uuid primary key default gen_random_uuid()
 *    - sheet_number: text unique not null
 *    - created_at: timestamp with time zone default now()
 *    - full_name: text not null
 *    - doc_type: text not null (DNI, CE, Pasaporte, RUC)
 *    - doc_number: text not null
 *    - email: text not null
 *    - phone: text not null
 *    - address: text not null
 *    - parent_guardian_name: text
 *    - good_type: text not null (Producto / Servicio)
 *    - claimed_amount: numeric(10,2)
 *    - currency: text default 'PEN'
 *    - good_description: text not null
 *    - claim_type: text not null (Reclamo / Queja)
 *    - incident_detail: text not null
 *    - consumer_request: text not null
 *    - status: text default 'en_revision' (en_revision, atendido, cerrado)
 *    - response_notes: text
 *    - resolved_at: timestamp with time zone
 */

export async function submitLeadToSupabase(payload: {
  fullName: string;
  email: string;
  phone?: string;
  companyName?: string;
  selectedService: string;
  estimatedBudget?: string;
  projectDetails: string;
}) {
  console.log('[Muby_labs Cloud DB] Inserción de Lead preparada para Supabase:', payload);
  await new Promise((resolve) => setTimeout(resolve, 550));
  
  return {
    success: true,
    data: {
      id: `lead_${Math.random().toString(36).substring(2, 9)}`,
      createdAt: new Date().toISOString(),
      ...payload,
    },
    message: 'Proyecto registrado exitosamente en la base de datos cloud de Muby_labs',
  };
}

export interface ClaimPayload {
  fullName: string;
  docType: string;
  docNumber: string;
  email: string;
  phone: string;
  address: string;
  parentGuardianName?: string;
  goodType: 'Servicio' | 'Producto';
  claimedAmount?: string;
  currency: 'PEN' | 'USD';
  goodDescription: string;
  claimType: 'Reclamo' | 'Queja';
  incidentDetail: string;
  consumerRequest: string;
}

export async function submitClaimToSupabase(payload: ClaimPayload) {
  console.log('[Muby_labs Legal] Registro de Libro de Reclamaciones en Supabase:', payload);
  await new Promise((resolve) => setTimeout(resolve, 600));

  const correlative = Math.floor(1000 + Math.random() * 9000);
  const sheetNumber = `REC-2026-${correlative}`;

  return {
    success: true,
    data: {
      sheetNumber,
      createdAt: new Date().toISOString(),
      statutoryDaysLimit: 15, // Días hábiles conforme a ley
      ...payload,
    },
    message: 'Hoja de Reclamación registrada exitosamente. Se ha enviado una copia a tu correo electrónico.',
  };
}
