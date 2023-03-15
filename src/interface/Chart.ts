export interface DefaultDatapoint {
  raw: number;
}

export interface YDatapoint extends DefaultDatapoint {
  dataIndex: number;
  dataset: {
    label: string;
  };
}
