type NewType = {
  icon: React.ReactNode;
  principal: string;
  subRoutes?: string[];
};

export type RouteType = NewType;

export type TCard = {
  icon: React.ReactNode;
  title: string;
  quantity: number;
  expected_quantity?: number;
  unit?: string;
};

export type TokenJwt = {
  tokenJwt: string;
  refreshJwt: string;
};
