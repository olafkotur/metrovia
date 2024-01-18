import { Line } from '../../typings';

export enum LondonLineId {
  HAMMERSMITH_AND_CITY = 'line-hammersmith-and-city',
  CIRCLE = 'line-circle',
  DISTRICT = 'line-district',
  METROPOLITAN = 'line-metropolitan',
  CENTRAL = 'line-central',
  PICCADILLY = 'line-piccadilly',
  NORTHERN = 'line-northern',
  VICTORIA = 'line-victoria',
  JUBILEE = 'line-jubilee',
  BAKERLOO = 'line-bakerloo',
  WATERLOO = 'line-waterloo',
  ELIZABETH = 'line-elizabeth',
  DLR = 'line-dlr',
  OVERGROUND = 'line-overground',
  TRAM = 'line-tram',
  EMIRATES_AIR_LINE = 'line-emirates-air-line',
}

export const LONDON_LINES: Line[] = [
  {
    id: LondonLineId.HAMMERSMITH_AND_CITY,
    name: 'Hammersmith and City',
    stop: 'hammersmith-city',
    color: '#D47A91',
    visible: true,
  },
  {
    id: LondonLineId.CIRCLE,
    name: 'Circle',
    stop: 'circle',
    color: '#D6B536',
    visible: true,
  },
  {
    id: LondonLineId.DISTRICT,
    name: 'District',
    stop: 'district',
    color: '#3A8347',
    visible: true,
  },
  {
    id: LondonLineId.METROPOLITAN,
    name: 'Metropolitan',
    stop: 'metropolitan',
    color: '#8A195C',
    visible: true,
  },
  {
    id: LondonLineId.CENTRAL,
    name: 'Central',
    stop: 'central',
    color: '#DB4433',
    visible: true,
  },
  {
    id: LondonLineId.PICCADILLY,
    name: 'Piccadilly',
    stop: 'piccadilly',
    color: '#253E8F',
    visible: true,
  },
  {
    id: LondonLineId.NORTHERN,
    name: 'Northern',
    stop: 'northern',
    color: '#000000',
    visible: true,
  },
  {
    id: LondonLineId.VICTORIA,
    name: 'Victoria',
    stop: 'victoria',
    color: '#469BD7',
    visible: true,
  },
  {
    id: LondonLineId.JUBILEE,
    name: 'Jubilee',
    stop: 'jubilee',
    color: '#969CA1',
    visible: true,
  },
  {
    id: LondonLineId.BAKERLOO,
    name: 'Bakerloo',
    stop: 'bakerloo',
    color: '#A66527',
    visible: true,
  },
  {
    id: LondonLineId.WATERLOO,
    name: 'Waterloo',
    stop: 'waterloo-city',
    color: '#86B8A7',
    visible: true,
  },
  {
    id: LondonLineId.ELIZABETH,
    name: 'Elizabeth',
    stop: 'elizabeth',
    color: '#604F9B',
    visible: true,
  },
  {
    id: LondonLineId.DLR,
    name: 'DLR',
    stop: 'dlr',
    color: '#4FAFAF',
    visible: true,
  },
  {
    id: LondonLineId.OVERGROUND,
    name: 'Overground',
    stop: 'london-overground',
    color: '#E6873E',
    visible: true,
  },
  {
    id: LondonLineId.TRAM,
    name: 'Tram',
    stop: 'tram-tram',
    color: '#7AAE4C',
    visible: true,
  },
  {
    id: LondonLineId.EMIRATES_AIR_LINE,
    name: 'Emirates Air Line',
    stop: 'emirates-air-line',
    color: '#DB4433',
    visible: true,
  },
];
