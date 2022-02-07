import { ISize, IDevice } from './types';

export const size: ISize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileXL: '576px',
  tablet: '768px',
  //TODO: desktopXS width applies to landscape view for mobile, e.g. Nexus 10
  desktopXS: '992px',
  desktopS: '1024px',
  desktopM: '1440px',
  desktopL: '1920px',
  desktopXL: '2560px',
};

export const device: IDevice = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileXL: `(min-width: ${size.mobileXL})`,
  tablet: `(min-width: ${size.tablet})`,
  desktopXS: `(min-width: ${size.desktopXS})`,
  desktopS: `(min-width: ${size.desktopS})`,
  desktopM: `(min-width: ${size.desktopM})`,
  desktopL: `(min-width: ${size.desktopL})`,
  desktopXL: `(min-width: ${size.desktopXL})`,
};
