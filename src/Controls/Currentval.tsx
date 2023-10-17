import React from 'react';
import Grid from '@mui/material/Grid';
import CurrentIconCard from '../Components/CurrentIconCard';
import { IconFormat, IconFormatProps } from '../Controls/IconManager';

class CurrentValsProperties {
  public currentvals?: { [lookup: string]: CurrentValState };

  public children?: React.ReactNode;
}

class CurrentValsState {}

export class CurrentValState {
  public Datasets: any[];

  public Labels: string[];

  public Lookup!: string;

  public Name!: string;

  constructor() {
    this.Datasets = [];

    this.Labels = [];
  }
}

export default class CurrentVals extends React.Component<
  CurrentValsProperties,
  CurrentValsState
> {
  //#region Constants
  //#endregion

  //#region Fields
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  constructor(props: CurrentValsProperties) {
    super(props);

    this.state = {
      ...new CurrentValsState(),
    };
  }
  //#endregion

  //#region Life Cycle
  public componentDidMount() {}

  public render() {
    const currentvalKeys = Object.keys(this.props.currentvals || []);

    const datas = currentvalKeys.map((currentvalKeys) => {
      const currentval = (this.props.currentvals || {})[currentvalKeys];

      return {
        labels: currentval.Labels,
        datasets: currentval.Datasets,
      };
    });

    //console.log(datas);

    return datas?.length > 0 ? (
      <Grid container spacing={2} >
        {datas.map((data, i) => {
          const dataLength = data.datasets[0].data.length - 1;
          var currentValue = data.datasets[0].data[dataLength].y;
          if (data.datasets[0].currentFirstPlace === true) {
            currentValue = data.datasets[0].data[0].y
          }
          var currentIcon: IconFormatProps = {
            iconNames: ["default"],
            iconColors: ["grey"],
            iconSize: "2.4em",
            values: [0],
            currentValue: 0
          }
          if (data.datasets[0].icons) {
            currentIcon.iconNames = data.datasets[0].icons;
          }
          if (data.datasets[0].iconColors) {
            currentIcon.iconColors = data.datasets[0].iconColors;
          }
          if (data.datasets[0].iconValues) {
            currentIcon.values = data.datasets[0].iconValues;
          }
          if (data.datasets[0].iconSize) {
            currentIcon.iconSize = data.datasets[0].iconSize;
          }
          if (data.datasets[0].data[0].y) {
            currentIcon.currentValue = currentValue;
          }
          if (data.datasets[0].displayCurrent) {
            return (
              <>
                <Grid xs={12} md={3} item={true} key={i}>
                  <CurrentIconCard 
                    icon={
                      <IconFormat
                        iconNames={currentIcon.iconNames}
                        iconColors={currentIcon.iconColors}
                        values={currentIcon.values}
                        iconSize={currentIcon.iconSize}
                        currentValue={currentIcon.currentValue}
                      />
                    }
                    title={(currentValue)}
                    content={data.datasets[0].name}
                    unit={data.datasets[0].displayUnits}
                  />
                </Grid>
              </>
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
