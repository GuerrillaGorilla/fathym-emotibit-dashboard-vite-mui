import React from 'react';
import Charts, { ChartState } from './Controls/Charts';
import LCUState from './lcuState';
import CurrentVals, { CurrentValState } from './Controls/Currentval';
import { HeroValState } from './Controls/Hero';
import { HeroDataValState } from './Controls/HeroData';
import { HeroShellValState } from './Controls/HeroShell';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import Box from '@mui/material/Box';
import { Card, Link } from '@mui/material';
import ResponsiveNavBar from './Components/ResponsiveNavBar';
import _ from "lodash";
import { FathymLogo, FathymLogoMad, FathymLogoSad } from './Components/FathymLogo';
import { convertUnitsTo } from './Controls/Convert';
import Footer from './Components/Footer';


class AppProperties { }

class AppState {

  public CurrentDevice?: string;

  public DeviceChartStates: { [lookup: string]: ChartState };

  public HeroVals: { [lookup: string]: HeroValState };

  public HeroDataVals: { [lookup: string]: HeroDataValState };

  public HeroShellVals: { [lookup: string]: HeroShellValState };

  public CurrentVals: { [lookup: string]: CurrentValState };

  public DeviceCurrentVals: { [lookup: string]: CurrentValState };

  public Error?: string;

  public IoTEnsembleAPIState?: number;

  public IsDark: boolean;

  public DisplayHero: string;

  public DefaultChartPrefs: { [name: string]: any };

  public ChartPrefs: { [name: string]: any };

  constructor() {

    this.DeviceChartStates = {};

    this.HeroVals = {};

    this.HeroDataVals = {};

    this.HeroShellVals = {};

    this.CurrentVals = {};

    this.DeviceCurrentVals = {};

    this.DisplayHero = 'none';

    this.IsDark = false;

    this.DefaultChartPrefs = {};

    this.ChartPrefs = {};
  }
}

export default class App extends React.Component<AppProperties, AppState> {
  //#region Constants
  //#endregion

  //#region Fields

  protected iotSvcUrl: string;

  protected iotSvcQuery: string;

  protected iotEmulated: string;

  protected iotPages: string;

  protected refreshRate: number;

  protected refreshTimer: any;

  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  constructor(props: AppProperties) {
    super(props);

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      BarElement,
      Title,
      Tooltip,
      Legend
    );

    this.iotSvcQuery = LCUState.IoTAPIQuery;

    this.iotEmulated = LCUState.IoTEmulated;

    this.iotPages = LCUState.IoTPages;

    this.iotSvcUrl = LCUState.IoTAPIRoot;

    this.refreshRate = LCUState.RefreshRate || 30000;

    const isDark = LCUState.IsDark;

    const displayHero = LCUState.DisplayHero;

    const defaultChartPrefs = LCUState.DefaultChartPrefs;

    const chartPrefs = LCUState.ChartPrefs;

    this.state = {
      ...new AppState(),
      IsDark: isDark,
      DisplayHero: displayHero,
      DefaultChartPrefs: defaultChartPrefs,
      ChartPrefs: chartPrefs,
    };
  }
  //#endregion

  //#region Life Cycle
  public componentDidMount() {
    this.appDark();

    if (!this.refreshTimer) {
      this.loadIoTData();

      this.refreshTimer = setInterval(() => {
        this.loadIoTData();
      }, this.refreshRate);
    }
  }

  public render() {

    return (
      <div>
        <ResponsiveNavBar />

        <div>
          <Box sx={{ mt: 11 }} >
            <Box sx={{ m: 2 }} >
              <CurrentVals currentvals={this.state.DeviceCurrentVals}></CurrentVals>
            </Box>
            <Box sx={{ m: 2 }} >
              <Charts charts={this.state.DeviceChartStates}>
                {this.addAPIErrors(
                  this.state.IoTEnsembleAPIState,
                  'IoT Ensemble',
                  '/docs'
                )}
              </Charts>
            </Box>
          </Box>
        </div>
        <Footer />
        {/* <div>{JSON.stringify(this.state.Error, null, 4)}</div> */}

      </div>
    );
  }
  //#endregion

  protected addAPIErrors(
    apiState: number | undefined,
    apiName: string,
    docsLink: string
  ) {
    return (
      <Box
        sx={{ mt: 12 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width='100%'
      ><Card sx={{ p: 3, width: '100%' }} >
          {apiState === 401 ? (
            <>
              <FathymLogoSad sx={{ color: "blue", fontSize: 50 }} />
              <h3>The security key for the {apiName} API is not configured correctly.</h3>
            </>
          ) : apiState === 404 ? (
            <>
              <FathymLogoSad sx={{ color: "blue", fontSize: 50 }} />
              <h3>The {apiName} API is not configured correctly.</h3>
            </>
          ) : apiState === 500 ? (
            <>
              <FathymLogoMad sx={{ color: "red", fontSize: 50 }} />
              <h3>There was an error calling the {apiName} API.</h3>
            </>
          ) : apiState === 503 ? (
            <>
              <FathymLogoMad sx={{ color: "red", fontSize: 50 }} />
              <h3>There was an error calling the {apiName} API.</h3>
            </>
          ) : (
            <>
              <FathymLogo color="primary" sx={{ fontSize: 50 }} />
              <h3>Loading {apiName}... {apiState}</h3>
            </>
          )}
          <Link href={docsLink} rel="noreferrer" target="_blank" >Check out our docs.</Link>
        </Card>
      </Box>
    );
  }

  //#region API Methods
  //#endregion

  //#region Helpers
  protected appDark(): void {

    var darkness = false;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    mql.matches ? darkness = true : darkness = false;
    this.setState({ IsDark: darkness });

    mql.addEventListener("change", (_event) => {
      mql.matches ? darkness = true : darkness = false;
      this.setState({ IsDark: darkness })
    });
  }

  public setAppDark(darkness: boolean) {
    this.setState({ IsDark: darkness })
  }

  protected addChartPref(chartState: ChartState): void {
    var currentDefaultChartPref: any = {};

    this.state.IsDark && currentDefaultChartPref !== undefined ?
      currentDefaultChartPref = this.state.DefaultChartPrefs.find((e: any) => e.Mode === "Dark")
      : currentDefaultChartPref = this.state.DefaultChartPrefs.find((e: any) => e.Mode === "Light")

    const currentChartPref = this.state.ChartPrefs.find(
      (e: any) => e.Name === chartState.Datasets[0].label
    );

    if (currentDefaultChartPref !== undefined) {
      Object.keys(currentDefaultChartPref).forEach((key) => {
        // Chartjs properties must have a lower case initial letter
        const fixedKey =
          key.toString().charAt(0).toLowerCase() + key.substring(1);
        chartState.Datasets[0][fixedKey] = currentDefaultChartPref[key];

        // Pass Options
        chartState.Datasets[0].options = currentDefaultChartPref?.Options;
      });

      if (currentChartPref !== undefined) {
        const currentCombined = { ...currentDefaultChartPref, ...currentChartPref }
        const defaultOptions = currentDefaultChartPref["Options"];
        const chartOptions = currentChartPref["Options"];

        const currentCombinedOptions = _.merge(chartOptions, defaultOptions);

        Object.keys(currentCombined).forEach(key => {

          // Chartjs properties must have a lower case initial letter
          const fixedKey = key.toString().charAt(0).toLowerCase() + key.substring(1);
          chartState.Datasets[0][fixedKey] = currentCombined[key];

          // Pass Options
          chartState.Datasets[0].options = currentCombinedOptions;

        });
      }
    }
  }

  protected convertUnits(chartState: ChartState): void {
    const currentChartPref = this.state.ChartPrefs.find(
      (pref: any) => pref.Name === chartState.Datasets[0].label
    );

    var currentConvertUnits: any = {};

    currentConvertUnits = currentChartPref?.ConvertUnits;

    if (currentConvertUnits !== undefined) {
      const currentUnitChartPref: keyof typeof convertUnitsTo = currentChartPref.ConvertUnits;
      const data = chartState.Datasets[0].data;

      Object.values(data).forEach((dataPoint: any) => {
        dataPoint.y = convertUnitsTo[currentUnitChartPref](dataPoint.y);
      });
    }
  }

  protected handleApiResponse(res: Response) {
    if (res.ok === false) {
      throw new Error(
        JSON.stringify({
          Status: res.status,
          Text: res.statusText,
        })
      );
    } else {
      return res.json();
    }
  }

  protected loadIoTData(): void {
    const iotApi = `${this.iotSvcUrl}${this.iotSvcQuery}includeEmulated=${this.iotEmulated}${this.iotPages}`;

    fetch(iotApi)
      .then((res) => this.handleApiResponse(res))
      .then(
        (result) => {
          const payloads = result.Payloads as any[];

          const devicesReadingcharts = payloads.reduce((dr, payload, _i) => {
            const newDr = {
              ...dr,
            };

            if (!newDr[payload.DeviceID]) {
              newDr[payload.DeviceID] = {};
            }

            const sensorReadings = Object.keys(payload?.SensorReadings || {});

            sensorReadings.forEach((srKey) => {
              if (!newDr[payload.DeviceID][srKey]) {
                newDr[payload.DeviceID][srKey] = new ChartState();

                newDr[payload.DeviceID][srKey].Datasets = [
                  {
                    id: 1,
                    label: srKey,
                    data: [],
                  },
                ];
              }

              const date = new Date(Date.parse(payload?.EventProcessedUtcTime));
              // const date = new Date(Date.parse(payload?.Timestamp));

              newDr[payload.DeviceID][srKey].Datasets[0].data.unshift({
                // x: date.toLocaleString(),
                x: date.toLocaleDateString()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+":"+date.getMilliseconds(),
                y: payload?.SensorReadings[srKey],
              });

              // Set Chart Preferences
              this.addChartPref(newDr[payload.DeviceID][srKey]);
              this.convertUnits(newDr[payload.DeviceID][srKey]);

            });

            return newDr;
          }, {});

          const deviceIds = Object.keys(devicesReadingcharts);

          const curDevice = deviceIds[0];

          this.setState({
            CurrentDevice: curDevice,
            DeviceChartStates: devicesReadingcharts[curDevice],
            DeviceCurrentVals: devicesReadingcharts[curDevice],
            Error: undefined,
            IoTEnsembleAPIState: undefined
          });
        },
        (error) => {
          console.log(error);

          var resp = error.message.startsWith('{')
            ? JSON.parse(error.message)
            : {};

          this.setState({
            Error: error.message,
            IoTEnsembleAPIState: resp.Status,
          });
        }
      );
  }

  //#endregion

}