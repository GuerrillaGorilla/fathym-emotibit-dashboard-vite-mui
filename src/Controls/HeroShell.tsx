import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import Energy from '../Images/Energy.png'
import Snow from '../Images/Snow.png';
import SnowSmall from '../Images/SnowSmall.png';

class HeroShellValsProperties {
  public herovals?: { [lookup: string]: HeroShellValState };
  public currentHero?: string;
  public children?: React.ReactNode;
}

class HeroShellValsState {}

export class HeroShellValState {
  public Datasets: any[];

  public Labels: string[];

  public Lookup!: string;

  public Name!: string;

  constructor() {
    this.Datasets = [];

    this.Labels = [];
  }
}

export default class HeroShellVals extends React.Component<
  HeroShellValsProperties,
  HeroShellValsState
> {
  //#region Constants
  //#endregion

  //#region Fields
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  constructor(props: HeroShellValsProperties) {
    super(props);

    this.state = {
      ...new HeroShellValsState(),
    };
  }
  //#endregion

  //#region Life Cycle
  public componentDidMount() {}

  public render() {
    return this.props.currentHero !== undefined || null || "" ? (
        this.props.currentHero === "Ski" ? (
          <Grid xs={12} md={12}>
            <Card sx={{ minHeight: { xs: 700, md: 300 },
                        backgroundImage: { xs: `url('${SnowSmall}')`, md: `url('${Snow}')` },
                        backgroundRepeat: "no-repeat" }} >
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                {this.props.children}
              </Grid>
            </Card>
          </Grid>
        ) : this.props.currentHero === "Energy" ? (
          <Grid xs={12} md={12}>
            <Card sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                        minHeight: { xs: 700, md: 300 },
                        backgroundImage: { xs: `url('${SnowSmall}')`, md: `url('${Energy}')` },
                        backgroundRepeat: "no-repeat" }} >
              {this.props.children}
            </Card>
          </Grid>
        ) : ( <div></div> )
     ) : (
      <div>
        {this.props.children}
      </div>
  )}
  //#endregion

  //#region API Methods
  //#endregion

  //#region Helpers
  //#endregion
}
