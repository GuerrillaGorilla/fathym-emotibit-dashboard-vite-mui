import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HeroCard from '../Controls/HeroCard';
import { IconFormat, IconFormatProps } from '../Controls/IconManager';

class HeroDataValsProperties {
  public herovals?: { [lookup: string]: HeroDataValState };
  public currentHero?: string;
  public children?: React.ReactNode;
}

class HeroDataValsState {}

export class HeroDataValState {
  public Datasets: any[];

  public Labels: string[];

  public Lookup!: string;

  public Name!: string;

  constructor() {
    this.Datasets = [];

    this.Labels = [];
  }
}

export default class HeroDataVals extends React.Component<
  HeroDataValsProperties,
  HeroDataValsState
> {
  //#region Constants
  //#endregion

  //#region Fields
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  constructor(props: HeroDataValsProperties) {
    super(props);

    this.state = {
      ...new HeroDataValsState(),
    };
  }
  //#endregion

  //#region Life Cycle
  public componentDidMount() {}

  public render() {
    const herovalKeys = Object.keys(this.props.herovals || []);

    const datas = herovalKeys.map((herovalKeys) => {
      const heroval = (this.props.herovals || {})[herovalKeys];

      return {
        labels: heroval.Labels,
        datasets: heroval.Datasets,
      };
    });

    //console.log(datas);

    return datas?.length > 0 ? (
        datas.map((data, _i) => {
          //const dataLength = data.datasets[0].data.length - 1;
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
            currentIcon.currentValue = data.datasets[0].data[0].y;
          }
          if (this.props.currentHero === "Ski") {
            return (
                  data.datasets[0].name === "Temperature (Surface)" ? (
                    <Grid item xs={4} sm={4} md={4}>
                      {data.datasets[0].data[0].y > 72 ? (<Typography variant="h4" color="#FF0000">It's too hot!</Typography>) : (<Typography variant="h4" color="#0000FF">It's cold...</Typography>)}
                    <HeroCard 
                      icon={
                        <IconFormat
                          iconNames={currentIcon.iconNames}
                          iconColors={currentIcon.iconColors}
                          values={currentIcon.values}
                          iconSize={currentIcon.iconSize}
                          currentValue={currentIcon.currentValue}
                        />
                      }
                      title={(data.datasets[0].data[0].y)}
                      content={data.datasets[0].label}
                      unit={data.datasets[0].displayUnits}
                    /></Grid>
                  ) : 
                  data.datasets[0].name === "WindGust (Surface)" ? (
                    <Grid item xs={4} sm={4} md={4}>
                    <HeroCard 
                      icon={
                        <IconFormat
                          iconNames={currentIcon.iconNames}
                          iconColors={currentIcon.iconColors}
                          values={currentIcon.values}
                          iconSize={currentIcon.iconSize}
                          currentValue={currentIcon.currentValue}
                        />
                      }
                      title={(data.datasets[0].data[0].y)}
                      content={data.datasets[0].label}
                      unit={data.datasets[0].displayUnits}
                    /></Grid>
                  ) : 
                  data.datasets[0].name === "WindSpeed (10Meters)" ? (
                    <Grid item xs={4} sm={4} md={4}>
                    <HeroCard 
                      icon={
                        <IconFormat
                          iconNames={currentIcon.iconNames}
                          iconColors={currentIcon.iconColors}
                          values={currentIcon.values}
                          iconSize={currentIcon.iconSize}
                          currentValue={currentIcon.currentValue}
                        />
                      }
                      title={(data.datasets[0].data[0].y)}
                      content={data.datasets[0].label}
                      unit={data.datasets[0].displayUnits}
                    /></Grid>
                  ) : ""
            )
          }
          if (this.props.currentHero === "Energy") {
            return (
              <>
                {
                  data.datasets[0].name === "Temperature (Surface)" ? (
                    <div>It's going to be hot outside!
                    <HeroCard 
                      icon={
                        <IconFormat
                          iconNames={currentIcon.iconNames}
                          iconColors={currentIcon.iconColors}
                          values={currentIcon.values}
                          iconSize={currentIcon.iconSize}
                          currentValue={currentIcon.currentValue}
                        />
                      }
                      title={(data.datasets[0].data[0].y)}
                      content={data.datasets[0].label}
                      unit={data.datasets[0].displayUnits}
                    />
                    </div>
                  ) : 
                  data.datasets[0].name === "WindSpeed (10Meters)" ? (
                    <div>
                    <HeroCard 
                      icon={
                        <IconFormat
                          iconNames={currentIcon.iconNames}
                          iconColors={currentIcon.iconColors}
                          values={currentIcon.values}
                          iconSize={currentIcon.iconSize}
                          currentValue={currentIcon.currentValue}
                        />
                      }
                      title={(data.datasets[0].data[0].y)}
                      content={data.datasets[0].label}
                      unit={data.datasets[0].displayUnits}
                    />
                    </div>
                  ) : ( <div></div> )
                  }
              </>
            )
          }
          return null;
        })
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
