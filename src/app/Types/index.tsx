type NewType = {
  principal: string;
  subRoutes?: string[];
};

export type RouteType = NewType;

export type TCard = {
  icon: React.ReactNode;
  title: string;
  quantity: number;
};
