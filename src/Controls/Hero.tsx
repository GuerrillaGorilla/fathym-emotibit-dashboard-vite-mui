import React from 'react';

class HeroValsProperties {
  public herovals?: { [lookup: string]: HeroValState };
  public currentHero?: string;
  public children?: React.ReactNode;
}

class HeroValsState {}

export class HeroValState {
  public Datasets: any[];

  public Labels: string[];

  public Lookup!: string;

  public Name!: string;

  constructor() {
    this.Datasets = [];

    this.Labels = [];
  }
}

export default class HeroVals extends React.Component<
  HeroValsProperties,
  HeroValsState
> {
  //#region Constants
  //#endregion

  //#region Fields
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  constructor(props: HeroValsProperties) {
    super(props);

    this.state = {
      ...new HeroValsState(),
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
      <div>
        {this.props.children}
      </div>
    ) : ( null )
  }
  //#endregion

  //#region API Methods
  //#endregion

  //#region Helpers
  //#endregion
}
