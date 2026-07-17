declare module "firebase/app" {
  export interface FirebaseOptions {
    apiKey?: string;
    authDomain?: string;
    projectId?: string;
    storageBucket?: string;
    messagingSenderId?: string;
    appId?: string;
  }
  export function initializeApp(config: FirebaseOptions): unknown;
}

declare module "firebase/firestore" {
  export interface DocumentData {
    [field: string]: unknown;
  }
  export interface Timestamp {
    toDate(): Date;
  }
  export interface QueryDocumentSnapshot {
    id: string;
    data(): DocumentData;
  }
  export interface QuerySnapshot {
    docs: QueryDocumentSnapshot[];
  }
  export interface DocumentReference {
    id: string;
  }
  export function collection(db: unknown, path: string): unknown;
  export function query(...args: unknown[]): unknown;
  export function orderBy(field: string, direction?: string): unknown;
  export function getDocs(query: unknown): Promise<QuerySnapshot>;
  export function doc(db: unknown, path: string, ...segments: string[]): DocumentReference;
  export function deleteDoc(ref: DocumentReference): Promise<void>;
  export function updateDoc(ref: DocumentReference, data: Record<string, unknown>): Promise<void>;
  export function addDoc(ref: unknown, data: Record<string, unknown>): Promise<DocumentReference>;
  export function serverTimestamp(): unknown;
  export function getFirestore(app: unknown): unknown;
}
