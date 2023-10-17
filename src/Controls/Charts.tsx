import React from 'react';
import Grid from '@mui/material/Grid';
import { Line, Bar } from 'react-chartjs-2';
import Card from '@mui/material/Card';

class ChartsProperties {
  public charts?: { [lookup: string]: ChartState };

  public children?: React.ReactNode;
}

class ChartsState {}

export class ChartState {
  public Datasets: any[];

  public Labels: string[];

  public Lookup!: string;

  public Name!: string;

  constructor() {
    this.Datasets = [];

    this.Labels = [];
  }
}

export default class Charts extends React.Component<
  ChartsProperties,
  ChartsState
> {
  //#region Constants
  //#endregion

  //#region Fields
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  constructor(props: ChartsProperties) {
    super(props);

    this.state = {
      ...new ChartsState(),
    };
  }
  //#endregion

  //#region Life Cycle
  public componentDidMount() {}

  public render() {
    const chartKeys = Object.keys(this.props.charts || []);

    const datas = chartKeys.map((chartKey) => {
      const chart = (this.props.charts || {})[chartKey];

      return {
        // id: chart.Lookup,
        labels: chart.Labels,
        datasets: chart.Datasets,
      };
    });

    console.log(datas);

    return datas?.length > 0 ? (
      <Grid container spacing={2} >
        {datas.map((data, i) => {
          //console.log(data.datasets[0].chartType);
          if (
            data.datasets[0].chartType === 'Line' ||
            !data.datasets[0].chartType
          ) {
            if ((data.datasets[0].name !== undefined || null) && (data.datasets[0].displayUnits  !== undefined || null)) {
            const combineNameUnits = data.datasets[0].name + " " + data.datasets[0].displayUnits;
            data.datasets[0].label = combineNameUnits;
          }
            return (
              <Grid xs={12} md={6} item={true} key={i}>
                <Card sx={{ p: 1 }} >
                  <Line
                    datasetIdKey="id"
                    data={data}
                    options={data.datasets[0].options}
                  />
                </Card>
              </Grid>
            );
          }
          if (data.datasets[0].chartType === 'Bar') {
            return (
              <Grid xs={12} md={6} item={true} key={i}>
                <Card sx={{ p: 1 }} >
                  <Bar
                    datasetIdKey="id"
                    data={data}
                    options={data.datasets[0].options}
                  />
                </Card>
              </Grid>
            );
          }

          return null;
        })}
      </Grid>
    ) : (
      <div>
        {this.props.children}
      </div>
    );
  }
  //#endregion

  //#region API Methods
  //#endregion

  //#region Helpers
  //#endregion
}
