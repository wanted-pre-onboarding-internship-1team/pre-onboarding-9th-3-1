import { API, ChartMap } from '../interfaces/API';
import { ChartData } from '../interfaces/ChartData';
import Repository from '../interfaces/Repository';

export class RepositoryImpl implements Repository {
  api: API;
  datas: ChartMap;
  constructor(api: API) {
    this.api = api;
    this.datas = {};
    this.init();
  }

  init(): void {
    this.api.fetchData().then(res => {
      this.datas = res.response;
    });
  }

  isEmpty(): boolean {
    return Object.keys(this.datas).length === 0;
  }

  getChartData(timeStamp: string): ChartData {
    if (this.isEmpty() === true) {
      this.init();
    }

    return this.datas[timeStamp];
  }
  getKeys(): string[] {
    if (this.isEmpty() === true) {
      this.init();
    }

    return Object.keys(this.datas);
  }
}
