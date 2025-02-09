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
}

export interface CollectionState {
  requests: CollectionRequest[];
  loading: boolean;
  error: string | null;
}

export const initialState: CollectionState = {
  requests: [],
  loading: false,
  error: null,
};
