export interface CollectionRequest {
  id: string;
  wasteType: string;
  photos?: string[];
  estimatedWeight: number;
  collectionAddress: string;
  collectionDate: string;
  collectionTime: string;
  notes?: string;
  status: 'pending' | 'occupied' | 'in-progress' | 'validated' | 'rejected';
  city: string;
}

export interface CollectionState {
  requests: CollectionRequest[];
  activeRequestsCount: number;
  loading: boolean;
  error: string | null;
}

export const initialState: CollectionState = {
  requests: [],
  activeRequestsCount: 0,
  loading: false,
  error: null,
};
