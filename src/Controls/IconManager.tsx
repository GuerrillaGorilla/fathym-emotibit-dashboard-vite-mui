import { BiWorld } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaCode, FaRegNewspaper, FaHeart } from 'react-icons/fa';
import { GiSmokingFinger } from "react-icons/gi";
import { IoWater, IoRocketSharp, IoMagnetSharp } from "react-icons/io5";
import { LuRotate3D, LuBrainCircuit } from "react-icons/lu";
import { MdHandshake, MdOutlineSave, MdGavel, MdPolicy, MdWarning, MdLiveHelp, MdStorm, MdMemory, MdMonitorHeart, MdOutlineBattery0Bar, MdOutlineBattery1Bar, MdOutlineBattery2Bar, MdOutlineBattery3Bar, MdOutlineBattery4Bar, MdOutlineBattery5Bar, MdOutlineBattery6Bar, MdOutlineBatteryFull, MdBolt } from 'react-icons/md'; 
import { WiCloudy, WiDaySunny, WiHot, WiStrongWind, WiCloudyGusts, WiRain, WiShowers, WiThermometer, WiThermometerExterior, WiWindDeg } from "react-icons/wi";
import { TbArrowUpCircle, TbGauge, TbArrowUpRightCircle, TbArrowUpLeftCircle, TbArrowRightCircle, TbArrowLeftCircle, TbArrowDownCircle, TbArrowDownRightCircle, TbArrowDownLeftCircle } from "react-icons/tb";
import { SvgIcon, SvgIconProps } from '@mui/material';  
import { IconContext } from 'react-icons/lib';
import { FathymLogo } from '../Components/FathymLogo';
import Typography from '@mui/material/Typography'; 
import React from "react";

//Usage Option 1:
//Can be used as an array of icons, colors and values to swap the icon and color at a given value based on the currentValue property
//<IconFormat iconNames={["iconName","iconName"]} iconColors={["Color", "color"]} values={[1, 2]} iconSize="1.5em" currentValue={} />

//Usage Option 2:
//<IconContext.Provider value={{ color:`${theme.palette.text.primary}`, size:"1.5em" }}> 
//  <FaFolder /> 
//</IconContext.Provider> 

//Usage Option 3: 
//<IconContext.Provider value={{ color:"green", size:"3.5em" }}> 
//  <IconDisplay iconName="save" /> 
//</IconContext.Provider> 

type IconName = 'fathym' | 'default' | 'warning' | 'rocket' | 'magnet' | 'rotate3d' | 'twitter' | 'facebook' | 'instagram' | 
                 'youtube' | 'github' | 'storm' | 'memory' | 'code' | 'livehelp' | 'braincircuit' |
                 'news' | 'handshake' | 'policy' | 'gavel' | 'water' | 'finger' |
                 'save' | 'sun' | 'sunheat' | 'cloud' | 'wind' | 'gusts' | 'rain' | 'showers' |
                 'emptytemperature' | 'temperature' | 'heartmonitor' | 'heart' | 'gauge' |
                 'compass' | 'arrowup' | 'arrowupright' | 'arrowupleft' | 'arrowright' | 'arrowleft' |
                 'arrowdown' | 'arrowdownright' | 'arrowdownleft' | 'visible' | 'invisible' |
                 'batteryempty' | 'battery15full' | 'battery30full' | 'battery45full' | 'battery60full' | 'battery75full' | 'battery90full' | 'batteryfull' | 'batteryvoltage' ;

interface MappedIcon { 
  component: React.ElementType | React.ElementType<SvgIconProps>; 
  isSvgIcon?: boolean;
}

export interface IconDisplayProps { 
  iconName: IconName;
  currentColor?: string;
  iconSize?: string;
}

export interface IconFormatProps { 
  iconNames: IconName[];
  iconColors: string[];
  iconSize: string;
  values: number[];
  currentValue: number;
}

const iconMap: Record<IconName, MappedIcon> = { 
  fathym: { component: FathymLogo, isSvgIcon: true },
  default: { component: BiWorld },
  warning: { component: MdWarning },
  rocket: { component: IoRocketSharp },
  magnet: { component: IoMagnetSharp },
  rotate3d: { component: LuRotate3D },
  twitter: { component: FaTwitter }, 
  facebook: { component: FaFacebook }, 
  instagram: { component: FaInstagram }, 
  youtube: { component: FaYoutube }, 
  github: { component: FaGithub }, 
  storm: { component: MdStorm }, 
  memory: { component: MdMemory }, 
  code: { component: FaCode }, 
  livehelp: { component: MdLiveHelp },
  braincircuit: { component: LuBrainCircuit },
  news: { component: FaRegNewspaper }, 
  handshake: { component: MdHandshake }, 
  policy: { component: MdPolicy }, 
  gavel: { component: MdGavel },
  water: { component: IoWater },
  finger: { component: GiSmokingFinger },
  save: { component: MdOutlineSave }, 
  sun: { component: WiDaySunny },
  sunheat: { component: WiHot },
  cloud: { component: WiCloudy }, 
  wind: { component: WiStrongWind },
  gusts: { component: WiCloudyGusts },
  rain: { component: WiRain },
  showers: { component: WiShowers },
  emptytemperature: { component: WiThermometerExterior },
  temperature: { component: WiThermometer },
  heartmonitor: { component: MdMonitorHeart },
  heart: { component: FaHeart },
  gauge: { component: TbGauge },
  compass: { component: WiWindDeg },
  arrowup: { component: TbArrowUpCircle },
  arrowupright: { component: TbArrowUpRightCircle },
  arrowupleft: { component: TbArrowUpLeftCircle },
  arrowright: { component: TbArrowRightCircle },
  arrowleft: { component: TbArrowLeftCircle },
  arrowdown: { component: TbArrowDownCircle },
  arrowdownright: { component: TbArrowDownRightCircle },
  arrowdownleft: { component: TbArrowDownLeftCircle },
  visible: { component: AiOutlineEye },
  invisible: { component: AiOutlineEyeInvisible },
  batteryempty: { component: MdOutlineBattery0Bar },
  battery15full: { component: MdOutlineBattery1Bar },
  battery30full: { component: MdOutlineBattery2Bar },
  battery45full: { component: MdOutlineBattery3Bar },
  battery60full: { component: MdOutlineBattery4Bar },
  battery75full: { component: MdOutlineBattery5Bar },
  battery90full: { component: MdOutlineBattery6Bar },
  batteryfull: { component: MdOutlineBatteryFull },
  batteryvoltage: { component: MdBolt }
};

function IconDisplay({ iconName, currentColor, iconSize }: IconDisplayProps) { 
  const { component: IconComponent, isSvgIcon } = iconMap[iconName]; 
  return isSvgIcon ? ( 
    <Typography fontSize={iconSize} sx={{ color: currentColor }}>
      <SvgIcon component={IconComponent as React.ElementType<SvgIconProps>} />
    </Typography>
  ) : (
    <IconContext.Provider value={{ color: currentColor, size: iconSize || "2em" }}>
      <IconComponent />
    </IconContext.Provider>
  ); 
}

let currentColor = "grey";
let currentIcon: IconName = "default";

function IconFormat({ iconNames, iconColors, values, iconSize, currentValue }: IconFormatProps) {
  values.map((value, index) => {
    if (currentValue < values[0]) {
      currentIcon = iconNames[0];
      currentColor = iconColors[0];
    } else if (currentValue >= value && currentValue < values[index + 1]) {
      if (iconNames.length > 1) { currentIcon = iconNames[index]; } else { currentIcon = iconNames[0]; }
      if (iconColors.length > 1) { currentColor = iconColors[index]; } else { currentColor = iconColors[0]; }
    } else if (currentValue >= values[values.length - 1]) {
      currentIcon = iconNames[iconNames.length - 1];
      currentColor = iconColors[iconColors.length - 1];
    } return null
    })
  return (
    <div>
      <IconDisplay iconName={currentIcon} currentColor={currentColor} iconSize={iconSize} />
    </div>
  )
}

export { IconDisplay, IconFormat }; 