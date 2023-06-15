export interface Propmt {
  propmt: string;
  quantity: number;
  format: Format;
}

export type Format = '256x256' | '512x512' | '1024x1024';
