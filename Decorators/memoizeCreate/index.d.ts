type CollectionLike = new () => {
  public get(key: any): any;
  public set(key: any, value: any): any;
  public has(key: any): boolean;
};

export default function memoizeCreate<Constructor extends CollectionLike>(constructor: Constructor): <Call extends (value: Parameters<Constructor["get"]>[0]) => any>(call: Call) => Call;
