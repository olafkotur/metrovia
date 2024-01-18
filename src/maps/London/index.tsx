import React, { ReactElement, useEffect, useRef } from 'react';
import { useMapZoom } from '../../hooks';
import { Line, Station } from '../../typings';

const initialViewbox = { x: 64.094, y: 122.25, width: 985.889, height: 657.072 };

export const LondonMap = ({ lines, stations }: { lines: Line[]; stations: Station[] }): ReactElement => {
  const ref = useRef(null);

  const removeLines = () => {
    for (const line of lines) {
      if (line.visible === true) continue;

      const lineElements = document.querySelectorAll(`[id=${line.id}]`) as any;
      const lineStopElements = document.querySelectorAll(`[data-linestop=${line.stop}]`) as any;
      const elements = [...lineElements, ...lineStopElements];

      elements.forEach((element: any) => {
        element.style.visibility = 'hidden';
      });
    }
  };

  const removeStations = () => {
    for (const station of stations) {
      const elements = document.querySelectorAll(`[id=${station.id}]`) as any;
      elements.forEach((element: any) => {
        element.style.visibility = station.visible ? 'visible' : 'hidden';
      });
    }
  };

  useMapZoom({ ref, initialViewbox });

  useEffect(() => {
    removeLines();
    removeStations();
  }, [lines, stations]);

  return (
    <svg
      ref={ref}
      id="status-map"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="1247.244px"
      height="907.087px"
      viewBox="64.094 122.25 985.889 657.072"
      enableBackground="new 0 0 1247.244 907.087"
      xmlSpace="preserve"
      cursor="grab"
      style={{ width: '100%', height: '100%' }}
    >
      <g id="river">
        <g id="river_1_">
          <path
            fill="#C7EAFB"
            d="M147.7,635.4l0-35.4c0-2.9,1.2-5.5,3.1-7.4c1.9-1.9,15.7-15.8,16.7-16.7l3.7,3.7 c-1.9,1.9-15.7,15.7-16.7,16.7c-1,1-1.6,2.3-1.6,3.8l0,35.2"
          />
          <path
            fill="#C7EAFB"
            d="M167.4,576.1c0.6-0.6,20.7-20.6,23.6-23.6c1.9-1.9,4.5-3,7.4-3l46,0l1.7,0l44.8,0c2.9,0,5.5,1.2,7.4,3 c1.9,1.9,38.2,38.1,39.2,39.1c1,1,2.3,1.6,3.8,1.6l134.4,0c2.2,0,3.9-1.8,3.9-3.9V536c0-5.8,4.7-10.4,10.4-10.4l88.6,0 c1.1,0,2.1-0.5,2.8-1.2l27.9-27.2l1-1c2-2,4.7-3.2,7.6-3.2l121.5,0c6,0,10.9,4.9,10.9,10.9l0,69.6c0,1.8,1.4,3.2,3.2,3.2l48.5,0 c1.8,0,3.3-1.5,3.3-3.3l0-64.9c0-6.3,5.1-11.5,11.5-11.5l51.9,0c7,0,12.6,5.7,12.6,12.6v53.8c0,1.6,1.3,2.8,2.8,2.8l66,0v9.1 l-64,0c-7.3,0-13.3-5.9-13.3-13.3l0-53.7c0-2-1.6-3.7-3.7-3.7h-52.9c-1.8,0-3.3,1.5-3.3,3.3l0,64.9c0,6.3-5.1,11.5-11.5,11.5 l-48.1,0c-6,0-10.9-4.9-10.9-10.9v-69.9c0-2.3-1.9-4.2-4.1-4.2l-120.6,0c-1.1,0-2.1,0.5-2.8,1.2L586,528.8c-2,2-4.7,3.2-7.6,3.2 l-88.3,0.1c-2.3,0-4.2,1.9-4.2,4.2l0,51.7c0,5.8-4.7,10.4-10.4,10.4l-134.6,0c-2.9,0-5.5-1.2-7.4-3.1 c-1.9-1.9-38.2-38.2-39.2-39.1c-1-1-2.3-1.6-3.8-1.6l-44.5,0.1l-1.9,0l-45.7-0.1c-1.5,0-2.8,0.6-3.8,1.6 c-1,1-21.8,21.8-23.7,23.6"
          />
          <path
            fill="none"
            stroke="#00AEEF"
            strokeWidth="0.26"
            d="M188.6,562.2c1.9-1.9,5-5.1,6-6.1c1-1,2.3-1.6,3.8-1.6l43.8,0l3.9,0 l44.5-0.1c1.5,0,2.8,0.6,3.8,1.6c1,1,37.3,37.3,39.2,39.1c1.9,1.9,4.5,3.1,7.4,3.1l134.6,0c5.7,0,10.4-4.7,10.4-10.4l0-51.7 c0-2.3,1.9-4.2,4.2-4.2l88.3-0.1c2.9,0,5.6-1.2,7.6-3.2l28.9-28.2c0.7-0.7,1.8-1.2,2.8-1.2l120.6,0c2.3,0,4.1,1.9,4.1,4.2v69.9 c0,6,4.9,10.9,10.9,10.9l48.1,0c6.3,0,11.5-5.2,11.5-11.5l0-64.9c0-1.8,1.5-3.3,3.3-3.3h52.9c2,0,3.7,1.6,3.7,3.7l0,53.7 c0,7.3,6,13.3,13.3,13.3l63.9,0"
          />
          <path
            fill="none"
            stroke="#00AEEF"
            strokeWidth="0.26"
            d="M184,559.5c1-1,5.1-5.1,7-7c1.9-1.9,4.5-3,7.4-3l44.9,0l2.9,0l44.8,0 c2.9,0,5.5,1.2,7.4,3c1.9,1.9,38.2,38.1,39.1,39.1c1,1,2.3,1.6,3.8,1.6l134.4,0c2.2,0,3.9-1.8,3.9-3.9V536 c0-5.8,4.7-10.4,10.4-10.4l88.6,0c1.1,0,2.1-0.5,2.8-1.2l27.9-27.2l1-1c2-2,4.7-3.2,7.6-3.2l121.5,0c6,0,10.9,4.9,10.9,10.9 l0,69.6c0,1.8,1.4,3.2,3.2,3.2l48.5,0c1.8,0,3.3-1.5,3.3-3.3l0-64.9c0-6.3,5.1-11.5,11.5-11.5l51.9,0c7,0,12.6,5.7,12.6,12.6 v53.8c0,1.6,1.3,2.8,2.8,2.8l66,0"
          />
          <path
            fill="none"
            stroke="#00AEEF"
            strokeWidth="0.26"
            d="M184,559.5c-1,1-31.3,31.4-33.2,33.2c-1.9,1.9-3.1,4.5-3.1,7.4 l0,35.4"
          />
          <path
            fill="none"
            stroke="#00AEEF"
            strokeWidth="0.26"
            d="M188.6,562.2c-1.9,1.9-33.2,33.2-34.2,34.2c-1,1-1.6,2.3-1.6,3.8 l0,28.1"
          />
          <path
            fill="#C7EAFB"
            d="M147.7,624.9l0,9.7c0,2.2-1.8,3.9-3.9,3.9H64.3l0,5.1l78.1,0c5.8,0,10.4-3.2,10.4-9l0-9.8L147.7,624.9z"
          />
          <path fill="none" stroke="#00AEEF" strokeWidth="0.26" d="M152.9,624.7l0,10c0,5.7-4.7,9-10.4,9l-78.4,0" />
          <path fill="none" stroke="#00AEEF" strokeWidth="0.26" d="M147.7,624.8l0,9.8c0,2.2-1.8,3.9-3.9,3.9H64.1" />
          <path
            fill="#C7EAFB"
            d="M1049.7,401.1l-39.6,0c-7,0-12.6,5.7-12.6,12.6v149.6c0,1.6-1.3,2.8-2.8,2.8l-51.9,0v9.1l50.9,0 c7.3,0,13.3-5.9,13.3-13.3l0-147.2c0-2,1.6-3.7,3.7-3.7h39.1L1049.7,401.1z"
          />
          <path
            fill="none"
            stroke="#00AEEF"
            strokeWidth="0.26"
            d="M942.8,575.2l50.8,0c7.3,0,13.3-5.9,13.3-13.3l0-147.2 c0-2,1.6-3.7,3.7-3.7h39.3"
          />
          <path
            fill="none"
            stroke="#00AEEF"
            strokeWidth="0.26"
            d="M1049.7,401.1l-39.7,0c-7,0-12.6,5.7-12.6,12.6v149.6 c0,1.6-1.3,2.8-2.8,2.8l-51.8,0"
          />
        </g>
      </g>
      <g id="line-tram" className="line">
        <path
          id="tram-tram_940gzzcrwel_940gzzcrecr"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M749.7,724.3h3.2c5.7,0,10.4,4.6,10.4,10.4c0,5.7,4.6,10.4,10.4,10.4c1.2,0,3.2,0,3.2,0"
        />
        <path
          id="tram-tram_940gzzcrwan_940gzzcrrvc"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M687.6,735.4c0,0-6.7,6.7-7.2,7.3c-1.2,1.2-3.7,2.3-5.5,2.3c-1.6,0-8.6,0-8.6,0"
        />
        <line
          id="tram-tram_940gzzcrkgh_940gzzcrnwa"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="867.3"
          y1="794"
          x2="875.6"
          y2="802.3"
        />
        <line
          id="tram-tram_940gzzcrfld_940gzzcrkgh"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="858.9"
          y1="785.7"
          x2="867.3"
          y2="794"
        />
        <line
          id="tram-tram_940gzzcradv_940gzzcrfld"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="850.8"
          y1="777.6"
          x2="858.9"
          y2="785.7"
        />
        <line
          id="tram-tram_940gzzcrgra_940gzzcradv"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="842.4"
          y1="769.1"
          x2="850.6"
          y2="777.4"
        />
        <line
          id="tram-tram_940gzzcrcoo_940gzzcrgra"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="834.1"
          y1="760.8"
          x2="842.4"
          y2="769.1"
        />
        <line
          id="tram-tram_940gzzcrloy_940gzzcrcoo"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="825.8"
          y1="752.6"
          x2="834.1"
          y2="760.8"
        />
        <path
          id="tram-tram_940gzzcrsan_940gzzcrloy"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M825.8,752.6l-5.3-5.3c-1.4-1.4-3.3-2.3-5.5-2.3c-1.8,0-6.8,0-6.8,0"
        />
        <line
          id="tram-tram_940gzzcrwmb_940gzzcrddr"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="383.1"
          y1="671.5"
          x2="383.1"
          y2="645"
        />
        <path
          id="tram-tram_940gzzcrddr_940gzzcrmtp"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M394.4,714.1l-9-9c-1.2-1.2-2.3-3.7-2.3-5.5v-28.2"
        />
        <path
          id="tram-tram_940gzzcrmtp_940gzzcrmdn"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M434.3,745h-5.5c-2.1,0-4.6-1-5.8-2.3l-28.6-28.6"
        />
        <line
          id="tram-tram_940gzzcrmdn_940gzzcrphi"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="456.2"
          y1="745"
          x2="434.3"
          y2="745"
        />
        <line
          id="tram-tram_940gzzcrphi_940gzzcrbgv"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="480.3"
          y1="745"
          x2="456.2"
          y2="745"
        />
        <line
          id="tram-tram_940gzzcrbgv_940gzzcrmch"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="506.5"
          y1="745"
          x2="480.3"
          y2="745"
        />
        <line
          id="tram-tram_940gzzcrmch_940gzzcrmjt"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="532.6"
          y1="745"
          x2="506.5"
          y2="745"
        />
        <line
          id="tram-tram_940gzzcrmjt_940gzzcrbed"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="565.8"
          y1="745"
          x2="532.6"
          y2="745"
        />
        <line
          id="tram-tram_940gzzcrbed_940gzzcrtpa"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="593.2"
          y1="745"
          x2="565.6"
          y2="745"
        />
        <line
          id="tram-tram_940gzzcrtpa_940gzzcramp"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="617.6"
          y1="745"
          x2="593.2"
          y2="745"
        />
        <line
          id="tram-tram_940gzzcramp_940gzzcrwad"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="642.2"
          y1="745"
          x2="617.6"
          y2="745"
        />
        <line
          id="tram-tram_940gzzcrwad_940gzzcrwan"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="666.2"
          y1="745"
          x2="642.2"
          y2="745"
        />
        <line
          id="tram-tram_940gzzcrwan_940gzzcrchr"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="715.1"
          y1="745"
          x2="666.2"
          y2="745"
        />
        <path
          id="tram-tram_940gzzcrara_940gzzcrelm"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M893.1,695.9c0,0-20.9,0-22.5,0c-2.1,0-4.1,0.9-5.5,2.3c-0.9,0.9-5.9,5.9-5.9,5.9"
        />
        <line
          id="tram-tram_940gzzcrbrd_940gzzcrbek"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="973.8"
          y1="675.2"
          x2="998.1"
          y2="675.2"
        />
        <line
          id="tram-tram_940gzzcrave_940gzzcrbrd"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="949"
          y1="675.2"
          x2="973.8"
          y2="675.2"
        />
        <line
          id="tram-tram_940gzzcrbir_940gzzcrave"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="924.2"
          y1="675.2"
          x2="949"
          y2="675.2"
        />
        <path
          id="tram-tram_940gzzcrhar_940gzzcrbir"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M899.9,675.2c9.8,0,24.3,0,24.3,0"
        />
        <path
          id="tram-tram_940gzzcrara_940gzzcrhar"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M859.2,703.9l26.5-26.5c1.4-1.4,3.3-2.3,5.5-2.3c0.3,0,3.9,0,8.7,0"
        />
        <line
          id="tram-tram_940gzzcrwod_940gzzcrara"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="848.7"
          y1="714.5"
          x2="859.2"
          y2="704"
        />
        <line
          id="tram-tram_940gzzcrbla_940gzzcrwod"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="838.2"
          y1="725"
          x2="848.7"
          y2="714.5"
        />
        <line
          id="tram-tram_940gzzcradd_940gzzcrbla"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="827.6"
          y1="735.5"
          x2="838.2"
          y2="725"
        />
        <path
          id="tram-tram_940gzzcrsan_940gzzcradd"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M808.3,745h6.7c2.1,0,4.1-0.9,5.5-2.3c1.3-1.3,7.2-7.2,7.2-7.2"
        />
        <line
          id="tram-tram_940gzzcrleb_940gzzcrsan"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="792.2"
          y1="745"
          x2="808.3"
          y2="745"
        />
        <line
          id="tram-tram_940gzzcrecr_940gzzcrleb"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="776.8"
          y1="745"
          x2="792.2"
          y2="745"
        />
        <line
          id="tram-tram_940gzzcrcen_940gzzcrecr"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="745.7"
          y1="745"
          x2="776.8"
          y2="745"
        />
        <line
          id="tram-tram_940gzzcrchr_940gzzcrcen"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="714.4"
          y1="745"
          x2="745.7"
          y2="745"
        />
        <path
          id="tram-tram_940gzzcrrvc_940gzzcrctr"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M708.1,724.3h-3.5H703c-2.9,0-5.5,1.2-7.3,3l-8.1,8.1"
        />
        <line
          id="tram-tram_940gzzcrctr_940gzzcrwcr"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="732.3"
          y1="724.3"
          x2="707.4"
          y2="724.3"
        />
        <line
          id="tram-tram_940gzzcrwcr_940gzzcrwel"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="749.7"
          y1="724.3"
          x2="732.3"
          y2="724.3"
        />
        <path
          id="tram-tram_940gzzcrctr_940gzzcrchr"
          fill="none"
          stroke="#7AC143"
          strokeWidth="2.3737"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M707.4,724.3H703c-5.7,0-10.4,4.6-10.4,10.4c0,5.7,4.6,10.4,10.4,10.4c0.6,0,11.4,0,11.4,0"
        />
        <g id="tram-tram_white_line">
          <path
            id="tram-tram_white_line"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M666.2,745c0,0,7,0,8.6,0c1.8,0,4.2-1,5.5-2.3c0.6-0.6,15.4-15.4,15.4-15.4c1.9-1.9,4.5-3,7.3-3h3.5h2.8h43.6 c5.7,0,10.4,4.6,10.4,10.4c0,5.7,4.6,10.4,10.4,10.4c1.2,0,3.2,0,3.2,0"
          />
          <line
            id="tram-tram_940gzzcrkgh_940gzzcrnwa"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="867.3"
            y1="794"
            x2="875.6"
            y2="802.3"
          />
          <line
            id="tram-tram_940gzzcrfld_940gzzcrkgh"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="858.9"
            y1="785.7"
            x2="867.3"
            y2="794"
          />
          <line
            id="tram-tram_940gzzcradv_940gzzcrfld"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="850.8"
            y1="777.6"
            x2="858.9"
            y2="785.7"
          />
          <line
            id="tram-tram_940gzzcrgra_940gzzcradv"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="842.4"
            y1="769.1"
            x2="850.6"
            y2="777.4"
          />
          <line
            id="tram-tram_940gzzcrcoo_940gzzcrgra"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="834.1"
            y1="760.8"
            x2="842.4"
            y2="769.1"
          />
          <line
            id="tram-tram_940gzzcrloy_940gzzcrcoo"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="825.8"
            y1="752.6"
            x2="834.1"
            y2="760.8"
          />
          <path
            id="tram-tram_940gzzcrsan_940gzzcrloy"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M825.8,752.6l-5.3-5.3c-1.4-1.4-3.3-2.3-5.5-2.3c-1.8,0-6.8,0-6.8,0"
          />
          <line
            id="tram-tram_940gzzcrwmb_940gzzcrddr"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="383.1"
            y1="671.5"
            x2="383.1"
            y2="645"
          />
          <path
            id="tram-tram_940gzzcrddr_940gzzcrmtp"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M394.4,714.1l-9-9c-1.2-1.2-2.3-3.7-2.3-5.5v-28.2"
          />
          <path
            id="tram-tram_940gzzcrmtp_940gzzcrmdn"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M434.3,745h-5.5c-2.1,0-4.6-1-5.8-2.3l-28.6-28.6"
          />
          <line
            id="tram-tram_940gzzcrmdn_940gzzcrphi"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="456.2"
            y1="745"
            x2="434.3"
            y2="745"
          />
          <line
            id="tram-tram_940gzzcrphi_940gzzcrbgv"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="480.3"
            y1="745"
            x2="456.2"
            y2="745"
          />
          <line
            id="tram-tram_940gzzcrbgv_940gzzcrmch"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="506.5"
            y1="745"
            x2="480.3"
            y2="745"
          />
          <line
            id="tram-tram_940gzzcrmch_940gzzcrmjt"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="532.6"
            y1="745"
            x2="506.5"
            y2="745"
          />
          <line
            id="tram-tram_940gzzcrmjt_940gzzcrbed"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="565.8"
            y1="745"
            x2="532.6"
            y2="745"
          />
          <line
            id="tram-tram_940gzzcrbed_940gzzcrtpa"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="593.2"
            y1="745"
            x2="565.6"
            y2="745"
          />
          <line
            id="tram-tram_940gzzcrtpa_940gzzcramp"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="617.6"
            y1="745"
            x2="593.2"
            y2="745"
          />
          <line
            id="tram-tram_940gzzcramp_940gzzcrwad"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="642.2"
            y1="745"
            x2="617.6"
            y2="745"
          />
          <line
            id="tram-tram_940gzzcrwad_940gzzcrwan"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="666.2"
            y1="745"
            x2="642.2"
            y2="745"
          />
          <line
            id="tram-tram_940gzzcrwan_940gzzcrchr"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="715.1"
            y1="745"
            x2="666.2"
            y2="745"
          />
          <path
            id="tram-tram_940gzzcrara_940gzzcrelm"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M893.1,695.9c0,0-20.9,0-22.5,0c-2.1,0-4.1,0.9-5.5,2.3c-0.9,0.9-5.9,5.9-5.9,5.9"
          />
          <line
            id="tram-tram_940gzzcrbrd_940gzzcrbek"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="973.8"
            y1="675.2"
            x2="998.1"
            y2="675.2"
          />
          <line
            id="tram-tram_940gzzcrave_940gzzcrbrd"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="949"
            y1="675.2"
            x2="973.8"
            y2="675.2"
          />
          <line
            id="tram-tram_940gzzcrbir_940gzzcrave"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="924.2"
            y1="675.2"
            x2="949"
            y2="675.2"
          />
          <path
            id="tram-tram_940gzzcrhar_940gzzcrbir"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M899.9,675.2c9.8,0,24.3,0,24.3,0"
          />
          <path
            id="tram-tram_940gzzcrara_940gzzcrhar"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M859.2,703.9l26.5-26.5c1.4-1.4,3.3-2.3,5.5-2.3c0.3,0,3.9,0,8.7,0"
          />
          <line
            id="tram-tram_940gzzcrwod_940gzzcrara"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="848.7"
            y1="714.5"
            x2="859.2"
            y2="704"
          />
          <line
            id="tram-tram_940gzzcrbla_940gzzcrwod"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="838.2"
            y1="725"
            x2="848.7"
            y2="714.5"
          />
          <line
            id="tram-tram_940gzzcradd_940gzzcrbla"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="827.6"
            y1="735.5"
            x2="838.2"
            y2="725"
          />
          <path
            id="tram-tram_940gzzcrsan_940gzzcradd"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M808.3,745h6.7c2.1,0,4.1-0.9,5.5-2.3c1.3-1.3,7.2-7.2,7.2-7.2"
          />
          <line
            id="tram-tram_940gzzcrleb_940gzzcrsan"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="792.2"
            y1="745"
            x2="808.3"
            y2="745"
          />
          <line
            id="tram-tram_940gzzcrecr_940gzzcrleb"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="776.8"
            y1="745"
            x2="792.2"
            y2="745"
          />
          <line
            id="tram-tram_940gzzcrcen_940gzzcrecr"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="745.7"
            y1="745"
            x2="776.8"
            y2="745"
          />
          <line
            id="tram-tram_940gzzcrchr_940gzzcrcen"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="714.4"
            y1="745"
            x2="745.7"
            y2="745"
          />
          <path
            id="tram-tram_white_line"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M703,724.3c-5.7,0-10.4,4.6-10.4,10.4c0,5.7,4.6,10.4,10.4,10.4"
          />
        </g>
        <g>
          <polygon fill="#F1F2F2" points="729.9,748 727.7,745 729.9,741.9 733.2,741.9 731.1,745 733.2,748 " />
          <polygon fill="#7AC143" points="731.8,742.7 730.2,742.7 728.6,745 730.2,747.2 731.8,747.2 730.2,745 " />
        </g>
        <g>
          <polygon fill="#F1F2F2" points="766.4,735.4 763.5,737.9 760.3,735.8 760.1,732.5 763.3,734.5 766.2,732.1 " />
          <polygon fill="#7AC143" points="760.9,733.9 761,735.5 763.4,737 765.6,735.2 765.5,733.6 763.3,735.3 " />
        </g>
        <g>
          <polygon fill="#F1F2F2" points="687.8,748 685.5,745 687.8,741.9 691.1,741.9 689,745 691.1,748 " />
          <polygon fill="#7AC143" points="689.7,742.7 688.1,742.7 686.4,745 688.1,747.2 689.7,747.2 688.1,745 " />
        </g>
        <g>
          <polygon fill="#F1F2F2" points="690.8,740 692.9,736.8 696.6,737.8 697.8,740.8 694.1,740 692.1,743.1 " />
          <polygon fill="#7AC143" points="696.5,739.8 695.9,738.3 693.2,737.6 691.7,740 692.3,741.5 693.8,739.1 " />
        </g>
        <g>
          <polygon
            fill="#F1F2F2"
            points="680.8,737.9 684.5,738.4 685.1,742.2 683.8,743.5 682.6,743.5 682.1,740.9 678.4,740.2 "
          />
          <polygon fill="#7AC143" points="683.2,743 684.3,741.9 683.9,739.1 681.1,738.6 680,739.7 682.7,740.2 " />
        </g>
        <g>
          <polygon fill="#F1F2F2" points="719.8,721.2 722.1,724.2 719.8,727.3 716.5,727.3 718.7,724.2 716.5,721.2 " />
          <polygon fill="#7AC143" points="717.9,726.5 719.5,726.5 721.2,724.2 719.5,722 717.9,722 719.5,724.2 " />
        </g>
      </g>
      <g id="line-overground" className="line">
        <path
          id="raillo-overground_910ggosplok_910guprhlwy"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M595,272.4h-16.3c-1.8,0-4.2,1-5.4,2.3l-19.9,19.9c-1.2,1.2-3.7,2.3-5.4,2.3c-1.3,0-3.7,0-3.7,0"
        />
        <path
          id="raillo-overground_910guprhlwy_910gcrouchh"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M638,253.7l-15,15l-1.5,1.5c-1.2,1.2-3.7,2.3-5.4,2.3H595"
        />
        <path
          id="raillo-overground_910gcrouchh_910ghrgygl"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M695.4,244.7l-45.1,0c-1.8,0-4.2,1-5.4,2.3l-7.8,7.8"
        />
        <line
          id="raillo-overground_910ghrgygl_910gstotnhm"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="731"
          y1="244.7"
          x2="695.4"
          y2="244.7"
        />
        <path
          id="raillo-overground_910gstotnhm_910gblchsrd"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M756.2,256.7l-9.8-9.8c-1.2-1.2-3.7-2.3-5.4-2.3l-10,0"
        />
        <line
          id="raillo-overground_910gblchsrd_910gwlthqrd"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="776.7"
          y1="277.2"
          x2="756.2"
          y2="256.7"
        />
        <path
          id="raillo-overground_910gwlthqrd_910gleytnmr"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M807.4,294.5h-10.3c-1.7,0-4.2-1-5.4-2.3l-14.9-15"
        />
        <line
          id="raillo-overground_910gleytnmr_910glytnshr"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="827.9"
          y1="294.5"
          x2="805.9"
          y2="294.5"
        />
        <line
          id="raillo-overground_910glytnshr_910gwnstdpk"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="870.2"
          y1="294.5"
          x2="826.4"
          y2="294.5"
        />
        <path
          id="raillo-overground_910gwnstdpk_910gwdgrnpk"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M899.6,313.6l-16.8-16.8c-1.2-1.2-3.7-2.3-5.4-2.3h-7.2"
        />
        <path
          id="raillo-overground_910gwdgrnpk_910gbkg"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M909,345l-3.1-3.1c-1.2-1.2-2.3-3.7-2.3-5.4l0-6.9l0-1l0-7.8c0-1.8-1-4.2-2.3-5.4l-3.1-3.1"
        />
        <path
          id="raillo-overground_910gdalskld_910ghacknyc"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M753.1,339.9h-22.2c-1.8,0-4.2-1-5.4-2.3l-6.9-7c-1.7-1.7-4.1-2.8-6.8-2.8h-4.2"
        />
        <path
          id="raillo-overground_910gshmpstd_910geuston"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M472.6,350l43.5,0c1.8,0,4.2,1,5.4,2.3c1.2,1.2,16.6,16.7,16.6,16.7"
        />
        <line
          id="raillo-overground_910gklbrnhr_910gshmpstd"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="374.7"
          y1="350"
          x2="474.1"
          y2="350"
        />
        <path
          id="raillo-overground_910gqprk_910gklbrnhr"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M322.5,341.6l0,3.1c0,1.3,0.6,2.9,1.6,3.7l0,0l0,0c0.9,0.9,2.5,1.6,3.7,1.6l48.3,0"
        />
        <line
          id="raillo-overground_910gkenslg_910gqprk"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="322.5"
          y1="332.5"
          x2="322.5"
          y2="341.6"
        />
        <line
          id="raillo-overground_910gwlsdjhl_910gkenslg"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="322.5"
          y1="324.1"
          x2="322.5"
          y2="334"
        />
        <line
          id="raillo-overground_910gharlsdn_910gwlsdjhl"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="322.5"
          y1="314.6"
          x2="322.5"
          y2="324.1"
        />
        <line
          id="raillo-overground_910gstnbgpk_910gharlsdn"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="322.5"
          y1="305.5"
          x2="322.5"
          y2="316.1"
        />
        <line
          id="raillo-overground_910gwmby_910gstnbgpk"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="322.5"
          y1="297"
          x2="322.5"
          y2="307"
        />
        <line
          id="raillo-overground_910gnwembly_910gwmby"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="322.5"
          y1="287.2"
          x2="322.5"
          y2="297"
        />
        <line
          id="raillo-overground_910gskenton_910gnwembly"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="322.5"
          y1="277.7"
          x2="322.5"
          y2="288.7"
        />
        <line
          id="raillo-overground_910gkton_910gskenton"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="322.5"
          y1="245.7"
          x2="322.5"
          y2="279.2"
        />
        <line
          id="raillo-overground_910ghrow_910gkton"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="322.5"
          y1="226.4"
          x2="322.5"
          y2="245.7"
        />
        <line
          id="raillo-overground_910ghedstnl_910ghrow"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="322.5"
          y1="214.7"
          x2="322.5"
          y2="226.4"
        />
        <line
          id="raillo-overground_910ghtchend_910ghedstnl"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="322.5"
          y1="201.5"
          x2="322.5"
          y2="216.2"
        />
        <line
          id="raillo-overground_910gcrpndpk_910ghtchend"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="322.5"
          y1="189.1"
          x2="322.5"
          y2="203"
        />
        <line
          id="raillo-overground_910gbushydc_910gcrpndpk"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="322.5"
          y1="175.8"
          x2="322.5"
          y2="189.1"
        />
        <line
          id="raillo-overground_910gwatfdhs_910gbushydc"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="322.5"
          y1="160.3"
          x2="322.5"
          y2="175.8"
        />
        <line
          id="raillo-overground_910gwatfjdc_910gwatfdhs"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="322.5"
          y1="147.7"
          x2="322.5"
          y2="161.8"
        />
        <line
          id="raillo-overground_910gcnnb_910gdalskld"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="709.1"
          y1="327.9"
          x2="691.7"
          y2="327.9"
        />
        <line
          id="raillo-overground_910grichmnd_910gkewgrdn"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="203.2"
          y1="566.3"
          x2="191.2"
          y2="578.2"
        />
        <line
          id="raillo-overground_910gkewgrdn_910ggnrsbry"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="229"
          y1="540.5"
          x2="203.7"
          y2="565.7"
        />
        <path
          id="raillo-overground_910ggnrsbry_910gsacton_00000061429662627198764800000010400389789070440606_"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M271.4,488.1v6.8c0,1.8-1,4.2-2.3,5.4l-30.6,30.6l-9.6,9.6"
        />
        <line
          id="raillo-overground_910gsacton_910gactnctl"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="271.4"
          y1="475"
          x2="271.4"
          y2="488.1"
        />
        <path
          id="raillo-overground_910gactnctl_910gwlsdjhl_00000107572231721596735410000011096577582436266136_"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2706"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M321.1,323.8l-47.4,47.4c-1.2,1.2-2.3,3.7-2.3,5.4V475"
        />
        <line
          id="raillo-overground_910gkenr_910gbrbypk"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="377.4"
          y1="319.3"
          x2="349.6"
          y2="319.3"
        />
        <line
          id="raillo-overground_910gbrbypk_910gbrby"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="397.1"
          y1="319.3"
          x2="376"
          y2="319.3"
        />
        <path
          id="raillo-overground_910gbrby_910gwhmdstd"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M438.2,307.4h-18.5c-1.8,0-4.2,1-5.4,2.3l0,0l-7.5,7.5c-1.2,1.2-3.7,2.3-5.4,2.3h-0.8h-4.8"
        />
        <line
          id="raillo-overground_910gwhmdstd_910gfnchlyr"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="458.5"
          y1="307.4"
          x2="438.2"
          y2="307.4"
        />
        <line
          id="raillo-overground_910gfnchlyr_910ghmpstdh"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="496.9"
          y1="307.4"
          x2="458.5"
          y2="307.4"
        />
        <line
          id="raillo-overground_910ghmpstdh_910ggosplok"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="544.9"
          y1="307.4"
          x2="496.8"
          y2="307.4"
        />
        <path
          id="raillo-overground_910ggosplok_910gkntshtw"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M555.2,311.1l-1.5-1.5c-1.2-1.2-3.7-2.3-5.4-2.3c-0.9,0-3.2,0-3.2,0"
        />
        <line
          id="raillo-overground_910gkntshtw_910gcmdnrd"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="566"
          y1="321.9"
          x2="554.2"
          y2="310.1"
        />
        <path
          id="raillo-overground_910gcmdnrd_910gcldnnrb"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M643.1,327.9h-68c-1.8,0-4.2-1-5.4-2.3l-3.7-3.7"
        />
        <line
          id="raillo-overground_910gcldnnrb_910ghghi"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="667.1"
          y1="327.9"
          x2="643.1"
          y2="327.9"
        />
        <line
          id="raillo-overground_910ghghi_910gcnnb"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="691.7"
          y1="327.9"
          x2="667.1"
          y2="327.9"
        />
        <line
          id="raillo-overground_910ghacknyc_910ghomrton"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="783.5"
          y1="339.9"
          x2="753.1"
          y2="339.9"
        />
        <line
          id="raillo-overground_910ghomrton_910ghacknyw"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="810.4"
          y1="339.9"
          x2="783.5"
          y2="339.9"
        />
        <line
          id="raillo-overground_910ghacknyw_910gstfd"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="837.4"
          y1="339.9"
          x2="810.4"
          y2="339.9"
        />
        <line
          id="raillo-overground_910gpckhmqd_910gpckhmry"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="641"
          y1="629.2"
          x2="662.7"
          y2="607.5"
        />
        <path
          id="raillo-overground_910gpckhmry_910gdenmrkh"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M579.8,655.9c0,0,29.7,0,31.2,0c2.1,0,4.1-0.9,5.5-2.3l24.5-24.5"
        />
        <path
          id="raillo-overground_910gdenmrkh_910gclphhs"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M500.5,648.4l5.3,5.3c1.5,1.5,3.5,2.3,5.5,2.3l68.5,0"
        />
        <path
          id="raillo-overground_910gclphhs_910gwndswrd"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M462,629.2l16.2,0c2,0,4,0.8,5.5,2.3c1.8,1.8,10.9,10.9,16.8,16.8"
        />
        <path
          id="raillo-overground_910gwndswrd_910gclphmj1"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M424.9,629.2c2.6,0,38.5,0,38.5,0"
        />
        <path
          id="raillo-overground_910gclphmjc_910gcseah"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M402.8,583.7l13,13c1.2,1.2,2.3,4.5,2.3,6.3c0,2.7,0,18.2,0,18.2"
        />
        <path
          id="raillo-overground_910gcseah_910gwbrmptn"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M369.4,542.7v4.4c0,1.8,1,4.2,2.3,5.4l31.1,31.1"
        />
        <line
          id="raillo-overground_910gwbrmptn_910gkenolym"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="369.4"
          y1="483.8"
          x2="369.4"
          y2="542.7"
        />
        <path
          id="raillo-overground_910gkenolym_910gshpdsb"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M355.1,463l12.2,12.2c1.2,1.2,2.2,3.6,2.2,5.3v3.2"
        />
        <path
          id="raillo-overground_910gshpdsb_910gwlsdjhl_00000147207102146365207910000006439579314516934059_"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M321.1,323.8l-33.6,33.6c-1.2,1.2-2.3,3.7-2.3,5.4l-0.1,26.1c0,2.3,0.6,4.9,2.2,6.5l67.6,67.6"
        />
        <path
          id="raillo-overground_910gkenr_910gwlsdjhl"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M349.6,319.3h-18.2h-1h-1.7c-1.8,0-4.2,1-5.4,2.3"
        />
        <path
          id="raillo-overground_910gemrspkh_910gupmnstr"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M974.6,250.2l10.8,10.8c1.2,1.2,3.7,2.3,5.4,2.3c2.5,0,5.7,0,5.7,0"
        />
        <line
          id="raillo-overground_910gromford_910gemrspkh"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="954.9"
          y1="230.5"
          x2="974.6"
          y2="250.2"
        />
        <rect id="raillo-overground_910gwatfdhs" x="323.7" y="160.3" fill="#F58025" width="1.5" height="1.5" />
        <rect id="raillo-overground_910ghtchend" x="323.7" y="201.5" fill="#F58025" width="1.5" height="1.5" />
        <rect id="raillo-overground_910ghedstnl" x="323.7" y="214.7" fill="#F58025" width="1.5" height="1.5" />
        <rect id="raillo-overground_910gklbrnhr" x="374.7" y="347.4" fill="#F58025" width="1.5" height="1.5" />
        <rect id="raillo-overground_910gbrbypk" x="376" y="316.7" fill="#F58025" width="1.5" height="1.5" />
        <rect id="raillo-overground_910gbrby" x="395.6" y="320.4" fill="#F58025" width="1.5" height="1.5" />
        <rect
          id="raillo-overground_910gkntshtw"
          x="555.3"
          y="308.5"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -55.8465 483.7562)"
          fill="#F58025"
          width="1.5"
          height="1.5"
        />
        <rect id="raillo-overground_910gdalskld" x="707.5" y="325.2" fill="#F58025" width="1.5" height="1.5" />
        <rect id="raillo-overground_910gwndswrd" x="462" y="630.4" fill="#F58025" width="1.5" height="1.5" />
        <rect id="raillo-overground_910gleytnmr" x="805.9" y="291.8" fill="#F58025" width="1.5" height="1.5" />
        <rect id="raillo-overground_910glytnshr" x="826.4" y="295.6" fill="#F58025" width="1.5" height="1.5" />
        <rect
          id="raillo-overground_910gwdgrnpk"
          x="899.4"
          y="310.7"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 43.4011 727.7626)"
          fill="#F58025"
          width="1.5"
          height="1.5"
        />
        <rect
          id="raillo-overground_910gcrouchh"
          x="635.4"
          y="252.2"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 7.4928 523.9271)"
          fill="#F58025"
          width="1.5"
          height="1.5"
        />
        <path
          id="raillo-overground_910gsurreyq_910gpckhmqd"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2706"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M722.8,557.4c0,0,0,8.9,0,10.9c0,2-0.8,4-2.3,5.5c-1.4,1.4-12,12-14.9,14.9c-1.4,1.4-3.3,2.3-5.5,2.3h-17.6 c-2.1,0-4.1,0.9-5.5,2.3c-1,1-14.4,14.4-14.4,14.4"
        />
        <path
          id="raillo-overground_910gsurreyq_910gnwcrell"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M722.8,560.5c0,0,0,5.7,0,7.7c0,2,0.8,4,2.3,5.5c1.4,1.4,6.4,6.4,6.4,6.4c1.5,1.5,2.3,3.5,2.3,5.5v1.1v9.7"
        />
        <path
          id="raillo-overground_910gbarking_910gbkrvs_00000029020383429301200320000015285000965090029742_"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M909,345l9.7,9.7c1.2,1.2,3.7,2.3,5.4,2.3l6.4,0l1.6,0l3.4,0c1.8,0,4.2,1,5.4,2.3l46.6,46.6"
        />
        <path
          id="raillo-overground_white_line"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.7795"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M322.5,141.7l0,203c0,1.2,0.6,2.9,1.6,3.7l0,0l0,0c0.9,0.9,2.5,1.6,3.7,1.6l188.2,0c1.8,0,4.2,1,5.4,2.3 c1.2,1.2,16.6,16.7,16.6,16.7"
        />
        <g id="raillo-overground_white_line_14_">
          <path
            id="raillo-overground_white_line_00000069393998114885106170000013894217348503592097_"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M837.4,339.9H730.9c-1.8,0-4.2-1-5.4-2.3l-6.9-7c-1.7-1.7-4.1-2.8-6.8-2.8H575.1c-1.8,0-4.2-1-5.4-2.3l-16-16 c-1.2-1.2-3.7-2.3-5.4-2.3l-128.6,0c-1.8,0-4.2,1-5.4,2.3l-7.5,7.5c-1.2,1.2-3.7,2.3-5.4,2.3h-72.6c-1.8,0-4.2,1-5.4,2.3 l-49.6,49.6c-1.2,1.2-2.3,3.7-2.3,5.4v118.2c0,1.8-1,4.2-2.3,5.4l-22.1,22.1l-56,56"
          />
          <path
            id="raillo-overground_white_line"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M287.5,357.3c-1.2,1.2-2.3,3.7-2.3,5.4l-0.1,26.1c0,2.3,0.6,4.9,2.2,6.5l79.8,79.8c1.2,1.2,2.2,3.6,2.2,5.3v62.2v4.4 c0,1.8,1,4.2,2.3,5.4l44.2,44.2c1.2,1.2,2.3,4.5,2.3,6.3c0,2.7,0,18.2,0,18.2"
          />
        </g>
        <path
          id="raillo-overground_910gsbury_910gedmngrn"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M724.5,174.1l-8.1,8.1c-1.2,1.2-2.3,3.7-2.3,5.4c0,1.6,0,4.6,0,4.6"
        />
        <line
          id="raillo-overground_910gturkyst_910gsbury"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="737.5"
          y1="161.1"
          x2="723.4"
          y2="175.1"
        />
        <line
          id="raillo-overground_910gthbldsg_910gturkyst"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="749.9"
          y1="148.7"
          x2="736.4"
          y2="162.2"
        />
        <line
          id="raillo-overground_910gcheshnt_910gthbldsg"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="760.9"
          y1="137.6"
          x2="748.8"
          y2="149.7"
        />
        <rect
          id="raillo-overground_910gbthnlgr"
          x="737.9"
          y="370.2"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -45.9834 630.9449)"
          fill="#F58025"
          width="1.5"
          height="1.6"
        />
        <rect
          id="raillo-overground_910gcamhth"
          x="745.3"
          y="362.7"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -38.5087 634.0317)"
          fill="#F58025"
          width="1.5"
          height="1.6"
        />
        <rect id="raillo-overground_910glonflds" x="749.1" y="354.3" fill="#F58025" width="1.6" height="1.5" />
        <rect id="raillo-overground_910gwdst" x="786.5" y="230.9" fill="#F58025" width="1.6" height="1.5" />
        <rect id="raillo-overground_910gbrucgrv" x="715.2" y="224.8" fill="#F58025" width="1.6" height="1.5" />
        <rect id="raillo-overground_910gwhhrtla" x="715.2" y="214.7" fill="#F58025" width="1.6" height="1.5" />
        <rect id="raillo-overground_910gsivrst" x="715.2" y="203.1" fill="#F58025" width="1.6" height="1.5" />
        <rect id="raillo-overground_910gstmfdhl" x="715.2" y="280.5" fill="#F58025" width="1.6" height="1.5" />
        <path
          id="raillo-overground_910genfldtn_910gbhillpk"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M714.1,163.3c0-9.6,0-16,0-16"
        />
        <path
          id="raillo-overground_910gbhillpk_910gedmngrn"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M714.1,192.5c0-12,0-20.9,0-29.2"
        />
        <path
          id="raillo-overground_910gedmngrn_910gsivrst"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M714.1,204.6c0,0,0-7.9,0-12.1"
        />
        <line
          id="raillo-overground_910gsivrst_910gwhhrtla"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="714.1"
          y1="215.4"
          x2="714.1"
          y2="203.1"
        />
        <line
          id="raillo-overground_910gwhhrtla_910gbrucgrv"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="714.1"
          y1="226.3"
          x2="714.1"
          y2="215.4"
        />
        <path
          id="raillo-overground_910gbrucgrv_910gsevnsis"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M714.1,261.6c0-15.8,0-36.8,0-36.8"
        />
        <path
          id="raillo-overground_910gsevnsis_910gstmfdhl"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M714.1,282c0,0,0-13.1,0-20.4"
        />
        <path
          id="raillo-overground_910gstmfdhl_910gstknwng"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M726.5,299.8l-10.2-10.2c-1.2-1.2-2.3-3.7-2.3-5.4c0-0.2,0-3.7,0-3.7"
        />
        <line
          id="raillo-overground_910gstknwng_910grctryrd"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="740.7"
          y1="313.9"
          x2="725.5"
          y2="298.7"
        />
        <path
          id="raillo-overground_910grctryrd_910ghaknynm"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M747.9,328.6c0-2.6,0-4.2,0-4.2c0-1.8-1-4.2-2.3-5.4l-6.1-6.1"
        />
        <line
          id="raillo-overground_910ghaknynm_910glonflds"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="747.9"
          y1="355.8"
          x2="747.9"
          y2="330.6"
        />
        <path
          id="raillo-overground_910glonflds_910gcamhth"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M744.2,362.7l1.5-1.5c1.2-1.2,2.3-3.7,2.3-5.4c0-0.3,0-1.5,0-1.5"
        />
        <line
          id="raillo-overground_910gcamhth_910gbthnlgr"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="734.8"
          y1="372.1"
          x2="745.2"
          y2="361.7"
        />
        <path
          id="raillo-overground_910gbthnlgr_910glivst_00000054266296952207365130000012265618881419884427_"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M657.2,386.5h60.1c1.8,0,4.2-1,5.4-2.3l13.2-13.2"
        />
        <path
          id="raillo-overground_910gchingfd_910ghghmspk"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M785.4,206.1c0-13.9,0-26.6,0-26.6"
        />
        <line
          id="raillo-overground_910ghghmspk_910gwdst"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="785.4"
          y1="232.4"
          x2="785.4"
          y2="206.1"
        />
        <line
          id="raillo-overground_910gwdst_910gwltwcen"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="785.4"
          y1="267.2"
          x2="785.4"
          y2="230.9"
        />
        <path
          id="raillo-overground_910gwltwcen_910gstjmsst"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M772,297.2l11.2-11.2c1.2-1.2,2.3-3.7,2.3-5.4c0-0.5,0-13.3,0-13.3"
        />
        <line
          id="raillo-overground_910gstjmsst_910gclapton"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="762.7"
          y1="306.4"
          x2="773.1"
          y2="296"
        />
        <path
          id="raillo-overground_910gclapton_910ghaknynm"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M763.8,305.3l-13.5,13.5c-1.4,1.4-2.4,3.8-2.4,5.6c0,1.5,0,6.2,0,6.2"
        />
        <rect
          id="raillo-overground_910gsbury"
          x="724.6"
          y="175.2"
          transform="matrix(0.707 -0.7072 0.7072 0.707 88.0782 564.4648)"
          fill="#F58025"
          width="1.5"
          height="1.6"
        />
        <rect
          id="raillo-overground_910gturkyst"
          x="737.5"
          y="162.2"
          transform="matrix(0.707 -0.7072 0.7072 0.707 101.0484 569.8392)"
          fill="#F58025"
          width="1.5"
          height="1.6"
        />
        <rect
          id="raillo-overground_910gthbldsg"
          x="750"
          y="149.7"
          transform="matrix(0.707 -0.7072 0.7072 0.707 113.4861 574.9827)"
          fill="#F58025"
          width="1.5"
          height="1.6"
        />
        <rect
          id="raillo-overground_910gclapton"
          x="763.9"
          y="306.4"
          transform="matrix(0.707 -0.7072 0.7072 0.707 6.7604 630.7397)"
          fill="#F58025"
          width="1.5"
          height="1.6"
        />
        <rect
          id="raillo-overground_910gstjmsst"
          x="773.2"
          y="297.2"
          transform="matrix(0.707 -0.7072 0.7072 0.707 16.0394 634.5893)"
          fill="#F58025"
          width="1.5"
          height="1.6"
        />
        <rect
          id="raillo-overground_910grctryrd"
          x="740.7"
          y="311.3"
          transform="matrix(0.707 -0.7072 0.7072 0.707 -3.4333 615.7886)"
          fill="#F58025"
          width="1.6"
          height="1.5"
        />
        <rect
          id="raillo-overground_910gstknwng"
          x="726.5"
          y="297.2"
          transform="matrix(0.707 -0.7072 0.7072 0.707 2.4095 601.6308)"
          fill="#F58025"
          width="1.6"
          height="1.5"
        />
        <g id="raillo-overground_white_line_15_">
          <path
            id="raillo-overground_white_line"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M954.9,230.5l30.5,30.5c1.2,1.2,3.7,2.3,5.4,2.3c2.5,0,5.7,0,5.7,0"
          />
          <g id="raillo-overground_white_line_10_">
            <path
              id="raillo-overground_white_line_13_"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.7795"
              strokeLinejoin="round"
              strokeMiterlimit="3.9938"
              d=" M760.9,137.6l-44.6,44.6c-1.2,1.2-2.3,3.7-2.3,5.4"
            />
            <path
              id="raillo-overground_white_line_00000082339925914980486520000017147542395136271038_"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.7795"
              strokeLinejoin="round"
              strokeMiterlimit="3.9938"
              d=" M657.2,386.5h60.1c1.8,0,4.2-1,5.4-2.3l23-23c1.2-1.2,2.3-3.7,2.3-5.4c0-0.3,0,0,0,0v-31.4c0-1.8-1-4.2-2.3-5.4l-29.3-29.3 c-1.2-1.2-2.3-3.7-2.3-5.4c0,0.2,0,0.2,0-136.9"
            />
            <path
              id="raillo-overground_white_line_16_"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.7795"
              strokeLinejoin="round"
              strokeMiterlimit="3.9938"
              d=" M747.9,324.4c0-1.8,1-4.2,2.3-5.5l32.8-32.8c1.3-1.3,2.4-3.8,2.4-5.5c0-0.5,0-101,0-101"
            />
          </g>
        </g>
        <path
          id="raillo-overground_910gsydenhm_910gcrystlp"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M699.7,689.1c0,0,13.2-13.2,20.8-20.8c1.5-1.5,2.3-3.5,2.3-5.5c0-1.6,0-4.1,0-4.1"
        />
        <line
          id="raillo-overground_910gnorwdj_910gwcroydn"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="722.8"
          y1="694"
          x2="722.8"
          y2="714.8"
        />
        <line
          id="raillo-overground_910ganerley_910gnorwdj"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="722.8"
          y1="682.3"
          x2="722.8"
          y2="694"
        />
        <line
          id="raillo-overground_910gpenew_910ganerley"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="722.8"
          y1="670.1"
          x2="722.8"
          y2="682.4"
        />
        <line
          id="raillo-overground_910gsydenhm_910gpenew"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="722.8"
          y1="658.2"
          x2="722.8"
          y2="671.6"
        />
        <line
          id="raillo-overground_910gforesth_910gsydenhm"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="722.8"
          y1="646.5"
          x2="722.8"
          y2="658.2"
        />
        <line
          id="raillo-overground_910ghonropk_910gforesth"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="722.8"
          y1="633.7"
          x2="722.8"
          y2="646.5"
        />
        <line
          id="raillo-overground_910gbrockly_910ghonropk"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="722.8"
          y1="621.7"
          x2="722.8"
          y2="633.7"
        />
        <line
          id="raillo-overground_910gnewxgte_910gbrockly"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="722.8"
          y1="607.2"
          x2="722.8"
          y2="621.7"
        />
        <line
          id="raillo-overground_910ghghi_910gcnnb"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="691.4"
          y1="334.9"
          x2="673.2"
          y2="334.9"
        />
        <path
          id="raillo-overground_910gcnnb_910gdals"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M716.9,346.2l-10.1-10.1c-0.8-0.8-1.9-1.3-3.1-1.3c-1,0-6,0-12.3,0"
        />
        <path
          id="raillo-overground_910gdals_910ghaggers"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M722.8,362.8c0,0,0-4.9,0-7.6c0-1.8-1-4.2-2.3-5.4l-3.6-3.6"
        />
        <path
          id="raillo-overground_910ghaggers_910ghoxton"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M722.8,375.4c0-4.9,0-7.5,0-12.6"
        />
        <path
          id="raillo-overground_910ghoxton_910gshrdhst"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M722.8,393.5c0-8.1,0-9.3,0-18.1"
        />
        <path
          id="raillo-overground_910gshrdhst_910gwchapel"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M722.8,420c0-5.5,0-20.6,0-26.5"
        />
        <path
          id="raillo-overground_910gwchapel_910gshadwel"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M722.8,477c0-13.1,0-41.1,0-56.8"
        />
        <line
          id="raillo-overground_910gshadwel_910gwapping"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="722.8"
          y1="487.5"
          x2="722.8"
          y2="477"
        />
        <path
          id="raillo-overground_910gwapping_910grtherhi"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M722.8,515.7c0,0,0-29.6,0-29.6"
        />
        <path
          id="raillo-overground_910grtherhi_910gcndaw"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M722.8,536.6c0,0,0-10.2,0-20.9"
        />
        <path
          id="raillo-overground_910gcndaw_910gsurreyq"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M722.8,557.7c0-7.5,0-11.6,0-21.1"
        />
        <rect id="raillo-overground_910gwapping" x="723.9" y="486" fill="#F58025" width="1.5" height="1.5" />
        <rect id="raillo-overground_910grtherhi" x="720.2" y="514.9" fill="#F58025" width="1.5" height="1.5" />
        <rect id="raillo-overground_910gsurreyq" x="720.2" y="556.2" fill="#F58025" width="1.5" height="1.5" />
        <rect id="raillo-overground_910gpenew" x="723.9" y="670.1" fill="#F58025" width="1.5" height="1.5" />
        <line
          id="raillo-overground_910gsurreyq_910gnewxgte"
          fill="none"
          stroke="#F58025"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="722.8"
          y1="556.2"
          x2="722.7"
          y2="607.2"
        />
        <g id="raillo-overground_white_line">
          <path
            id="raillo-overground_white_line_11_"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M699.7,689.1c0,0,19.1-19.1,20.8-20.8c1.5-1.5,2.3-3.5,2.3-5.5c0-1.6,0-4.1,0-4.1"
          />
          <path
            id="raillo-overground_white_line"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M722.8,714.8c0,0,0-356.9,0-359.6c0-1.8-1-4.2-2.3-5.4l-13.7-13.6c-0.8-0.8-1.9-1.3-3.1-1.3c-1,0-30.5,0-30.5,0"
          />
          <path
            id="raillo-overground_white_line"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M722.8,568.2c0,2-0.8,4-2.3,5.5c-1.4,1.4-13.1,13.1-14.9,14.9c-1.4,1.4-3.3,2.3-5.5,2.3h-17.6c-2.1,0-4.1,0.9-5.5,2.3 c-1,1-60.5,60.5-60.5,60.5c-1.4,1.4-3.3,2.3-5.5,2.3c-1.5,0-99.8,0-99.8,0c-2,0-4-0.8-5.5-2.3c0,0-20.3-20.3-22.1-22.1 c-1.5-1.5-3.5-2.3-5.5-2.3l-53.3,0"
          />
          <path
            id="raillo-overground_white_line"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M722.8,568.2c0,2,0.8,4,2.3,5.5c1.4,1.4,6.4,6.4,6.4,6.4c1.5,1.5,2.3,3.5,2.3,5.5v1.1v9.7"
          />
        </g>
        <g id="lul-bakerloo_940gzzluksl_raillo-overground_910gkensig">
          <rect id="lul-bakerloo_940gzzluksl" x="320.5" y="332.5" fill="#B06010" width="1.5" height="1.5" />
          <g id="raillo-overground_910gkenslg">
            <rect id="raillo-overground_910gkenslg" x="323.7" y="332.5" fill="#F58025" width="1.5" height="1.5" />
          </g>
        </g>
        <path
          id="raillo-overground_white_line"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.7795"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M544.2,296.9c0,0,2.4,0,3.7,0c1.8,0,4.2-1,5.4-2.3l19.9-19.9c1.2-1.2,3.7-2.3,5.4-2.3h37.4c1.8,0,4.2-1,5.4-2.3l23.3-23.3 c1.2-1.2,3.7-2.3,5.4-2.3c2.3,0,90.7,0,90.7,0c1.9,0,4.2,1,5.4,2.3l45.2,45.3c1.2,1.2,3.7,2.3,6.5,2.3l79.4,0c1.5,0,4,1,5.2,2.3 l18.7,18.7c1.2,1.2,2.3,3.7,2.3,5.4l0,7.8l0,1l0,6.9c0,1.8,1,4.2,2.3,5.4l3.1,3.1l0.5,0.5l9.2,9.2c1.2,1.2,3.7,2.3,5.4,2.3l5.2,0 l2.1,0l4.1,0c1.8,0,4.2,1,5.4,2.3l46.6,46.6"
        />
      </g>
      <g id="line-dlr" className="line">
        <path
          id="dlr-dlr_940gzzdlwfe_940gzzdlwiq"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M795.5,489.8c0,0,0-8.5,0-10.2c0-1.8-1-4.2-2.3-5.4l-4.6-4.6c-1.2-1.2-3.5-2.3-5.1-2.3c-1.7,0-10.9,0-10.9,0"
        />
        <line
          id="dlr-dlr_940gzzdlgal_940gzzdlbec"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="954.4"
          y1="544.1"
          x2="954.4"
          y2="555.5"
        />
        <line
          id="dlr-dlr_940gzzdlbpk_940gzzdlcyp_00000182492200122161283560000000972431793304916123_"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="954.4"
          y1="522.7"
          x2="954.4"
          y2="533.1"
        />
        <line
          id="dlr-dlr_940gzzdlcyp_940gzzdlgal"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="954.4"
          y1="532.6"
          x2="954.4"
          y2="544.1"
        />
        <line
          id="dlr-dlr_940gzzdlral_940gzzdlbpk"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="954.4"
          y1="512.2"
          x2="954.4"
          y2="522.7"
        />
        <line
          id="dlr-dlr_940gzzdlcus_940gzzdlpre"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="937.4"
          y1="486.7"
          x2="947.1"
          y2="496.4"
        />
        <path
          id="dlr-dlr_940gzzdlrvc_940gzzdlcus"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M893.7,467.4h21.2c1.8,0,4.2,1,5.4,2.3l17.4,17.4"
        />
        <path
          id="dlr-dlr_940gzzdlpre_940gzzdlral"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M946,495.3l6.1,6.1c1.2,1.2,2.3,3.7,2.3,5.4l0,6"
        />
        <line
          id="dlr-dlr_940gzzdlstl_940gzzdlcgt"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="845.2"
          y1="467.4"
          x2="895.3"
          y2="467.4"
        />
        <line
          id="dlr-dlr_940gzzdlein_940gzzdlcgt"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="830.4"
          y1="467.4"
          x2="846.4"
          y2="467.4"
        />
        <line
          id="dlr-dlr_940gzzdlbla_940gzzdlein"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="810.2"
          y1="467.4"
          x2="830.4"
          y2="467.4"
        />
        <line
          id="dlr-dlr_940gzzdlpop_940gzzdlbla"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="467.4"
          x2="810.2"
          y2="467.4"
        />
        <line
          id="dlr-dlr_940gzzdlwfe_940gzzdlpop"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="764.7"
          y1="467.4"
          x2="795.5"
          y2="467.4"
        />
        <line
          id="dlr-dlr_940gzzdllim_940gzzdlwfe"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="748.9"
          y1="467.4"
          x2="764.2"
          y2="467.4"
        />
        <line
          id="dlr-dlr_940gzzdlsha_940gzzdllim"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="731.5"
          y1="467.4"
          x2="748.9"
          y2="467.4"
        />
        <path
          id="dlr-dlr_940gzzdlbnk_940gzzdlsha"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M635.7,458.6h58.1c1.8,0,4.2,1,5.4,2.3l4.3,4.3c1.2,1.2,3.7,2.3,5.4,2.3h22.5"
        />
        <path
          id="dlr-dlr_940gzzdltwg_940gzzdlsha"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M692.4,480.8c0,0,9.5-9.5,11.2-11.2c1.2-1.2,3.7-2.3,5.4-2.3c1.5,0,27.4,0,27.4,0"
        />
        <line
          id="dlr-dlr_940gzzdlelv_940gzzdllew"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="626.4"
          x2="795.5"
          y2="638"
        />
        <line
          id="dlr-dlr_940gzzdldep_940gzzdlelv"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="614.9"
          x2="795.5"
          y2="626.4"
        />
        <line
          id="dlr-dlr_940gzzdlgre_940gzzdldep"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="603.3"
          x2="795.5"
          y2="614.9"
        />
        <line
          id="dlr-dlr_940gzzdlcut_940gzzdlgre"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="590.7"
          x2="795.5"
          y2="603.3"
        />
        <line
          id="dlr-dlr_940gzzdlisl_940gzzdlcut"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="570.6"
          x2="795.5"
          y2="590.7"
        />
        <line
          id="dlr-dlr_940gzzdlmud_940gzzdlisl"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="558.8"
          x2="795.5"
          y2="570.6"
        />
        <line
          id="dlr-dlr_940gzzdlcla_940gzzdlmud"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="547.1"
          x2="795.5"
          y2="558.8"
        />
        <line
          id="dlr-dlr_940gzzdlsoq_940gzzdlcla"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="535.3"
          x2="795.5"
          y2="547.1"
        />
        <line
          id="dlr-dlr_940gzzdlheq_940gzzdlsoq"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="523.4"
          x2="795.5"
          y2="535.3"
        />
        <line
          id="dlr-dlr_940gzzdlcan_940gzzdlheq"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="504"
          x2="795.5"
          y2="523.4"
        />
        <line
          id="dlr-dlr_940gzzdlcan_940gzzdlheq"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="513.5"
          x2="795.5"
          y2="514"
        />
        <line
          id="dlr-dlr_940gzzdlwiq_940gzzdlcan"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="489.9"
          x2="795.5"
          y2="504.8"
        />
        <line
          id="dlr-dlr_940gzzdlpop_940gzzdlwiq"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="467.3"
          x2="795.5"
          y2="489.9"
        />
        <line
          id="dlr-dlr_940gzzdlall_940gzzdlpop"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="450.1"
          x2="795.5"
          y2="467.3"
        />
        <line
          id="dlr-dlr_940gzzdlldp_940gzzdlall"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="438.3"
          x2="795.5"
          y2="450.1"
        />
        <line
          id="dlr-dlr_940gzzdldev_940gzzdlldp"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="426.6"
          x2="795.5"
          y2="438.3"
        />
        <line
          id="dlr-dlr_940gzzdlbow_940gzzdldev"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="795.5"
          y1="407"
          x2="795.5"
          y2="426.6"
        />
        <path
          id="dlr-dlr_940gzzdlpud_940gzzdlbow"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M825.6,367.5l-27.9,27.9c-1.2,1.2-2.3,3.1-2.3,4.9v6.8"
        />
        <line
          id="dlr-dlr_940gzzdlstd_940gzzdlpud"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="853.6"
          y1="339.5"
          x2="825.6"
          y2="367.5"
        />
        <path
          id="dlr-dlr_940gzzdlsit_940gzzdlstd"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M854.8,339.9v-4.5c0-1.8-1-4.2-2.3-5.4c-1.7-1.7-12-12.1-12-12.1c-1.2-1.2-3.7-2.3-5.4-2.3c-2.3,0-16.3,0-16.3,0"
        />
        <line
          id="dlr-dlr_940gzzdlstd_940gzzdlshs"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="854.8"
          y1="359.8"
          x2="854.8"
          y2="339.9"
        />
        <line
          id="dlr-dlr_940gzzdlshs_940gzzdlabr"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="854.8"
          y1="377.9"
          x2="854.8"
          y2="359.8"
        />
        <line
          id="dlr-dlr_940gzzdlabr_940gzzdlwhm"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="854.8"
          y1="402.6"
          x2="854.8"
          y2="377.9"
        />
        <line
          id="dlr-dlr_940gzzdlwhm_940gzzdlstl"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="854.8"
          y1="429.7"
          x2="854.8"
          y2="402.6"
        />
        <line
          id="dlr-dlr_940gzzdlstl_940gzzdlcgt"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="854.8"
          y1="458.5"
          x2="854.8"
          y2="429.7"
        />
        <path
          id="dlr-dlr_940gzzdlkgv_940gzzdlwla_00000135688215652893503890000006690243506149081769_"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M908.4,554.9c0,2.1,0,30.8,0,30.8"
        />
        <path
          id="dlr-dlr_940gzzdlwsv_940gzzdlpdk"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M902.8,504.8l3.3,3.3c1.2,1.2,2.3,3.7,2.3,5.4c0,2.1,0,12.4,0,12.4"
        />
        <line
          id="dlr-dlr_940gzzdllca_940gzzdlkgv"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="908.4"
          y1="542.2"
          x2="908.4"
          y2="554.9"
        />
        <line
          id="dlr-dlr_940gzzdlpdk_940gzzdllca"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="908.4"
          y1="525"
          x2="908.4"
          y2="542.6"
        />
        <path
          id="dlr-dlr_940gzzdlcgt_940gzzdlwsv"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M905.2,507.2l-37.6-37.6c-1.2-1.2-3.7-2.3-5.4-2.3c-1.8,0-3.7-1-4.9-2.3l-0.1-0.1c-1.2-1.2-2.3-3.7-2.3-5.4v-1.8"
        />
        <path
          id="dlr-dlr_940gzzdlrvc_940gzzdlcgt"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M854.8,459.5c0,1.8,1,4.2,2.3,5.4l0.1,0.1c1.2,1.2,2.9,2.3,4.6,2.3c2.2,0,31.6,0,31.6,0"
        />
        <path
          id="dlr-dlr_940gzzdlcgt_940gzzdlwsv"
          fill="none"
          stroke="#00B1B0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M905.2,507.2l-37.6-37.6c-1.2-1.2-3.7-2.3-5.4-2.3c-2,0-15.2,0-15.2,0"
        />
        <g id="dlr-dlr_white_line">
          <path
            id="dlr-dlr_white_line"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M795.5,479.6c0-1.8-1-4.2-2.3-5.4l-4.6-4.6c-1.2-1.2-3.5-2.3-5.1-2.3"
          />
          <path
            id="dlr-dlr_white_line"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M692.4,480.8c0,0,9.5-9.5,11.2-11.2c1.2-1.2,3.7-2.3,5.4-2.3"
          />
          <path
            id="dlr-dlr_white_line"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M853.6,339.5l-55.8,55.9c-1.2,1.2-2.3,3.1-2.3,4.9V638"
          />
          <path
            id="dlr-dlr_white_line"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M908.4,585.7c0,0,0-69.9,0-72.1c0-1.8-1-4.2-2.3-5.4l-3.3-3.3l-35.2-35.2c-1.2-1.2-4.1-2.3-5.8-2.3c-1.8,0-3.3-1-4.6-2.3 l-0.1-0.1c-0.7-0.7-2.3-2.5-2.3-6.5l0-123.1c0-1.8-1-4.2-2.3-5.4c-1.7-1.7-12-12.1-12-12.1c-1.2-1.2-3.7-2.3-5.4-2.3 c-2.3,0-16.3,0-16.3,0"
          />
          <path
            id="dlr-dlr_white_line_00000168824439078475829440000016273574727890987694_"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.7795"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d=" M954.4,555.5c0-2.5,0-48.5,0-48.5v-0.1c0-1.8-1-4.2-2.2-5.4c-1.7-1.7-5.1-5.1-5.1-5.1l-0.4-0.4l-26.3-26.3 c-1.2-1.2-3.8-2.3-5.2-2.3H709.6c-2.4,0-4.8-1-6-2.3l-4.3-4.3c-1.2-1.2-3.7-2.3-5.4-2.3h-58.1"
          />
        </g>
      </g>
      <g id="line-elizabeth" className="line">
        <path
          id="elizabeth_910ghtrwapt_910ghtrwtm5"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3443"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          d=" M109.4,570.6l0,3.7c0,2.3-0.9,4.4-2.5,6l-8.3,8.3l-2.5,2.5l-12.7,12.7c-1.5,1.5-2.5,3.6-2.5,6v14"
        />
        <path
          id="elizabeth_white_line_00000048495014960308458650000015766178593898771620_"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.805"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          d=" M109.5,571.1l0,0.6l0,0.5v2.1c0,2.3-0.9,4.4-2.5,6L85.2,602l-0.7,0.7l-1,1c-1.5,1.5-2.5,3.6-2.5,6v13.6"
        />
        <line
          id="elizabeth_910gmryland_910gstfd"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="863.6"
          y1="321.4"
          x2="845"
          y2="340"
        />
        <path
          id="elizabeth_910gfrstgt_910gmryland"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M881.2,303.8c-6.5,6.5-17.6,17.6-17.6,17.6"
        />
        <line
          id="elizabeth_910gmanrpk_910gfrstgt"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="895.8"
          y1="289.2"
          x2="881.2"
          y2="303.8"
        />
        <line
          id="elizabeth_910gilford_910gmanrpk"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="904.8"
          y1="280.2"
          x2="895.8"
          y2="289.2"
        />
        <line
          id="elizabeth_910gsvnkngs_910gilford"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="913.8"
          y1="271.2"
          x2="903.7"
          y2="281.3"
        />
        <line
          id="elizabeth_910ggodmays_910gsvnkngs"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="923.1"
          y1="261.9"
          x2="913.8"
          y2="271.2"
        />
        <path
          id="elizabeth_910gchdwlht_910ggodmays"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M939.4,245.6C932.9,252.1,922,263,922,263"
        />
        <path
          id="elizabeth_910gromford_910gchdwlht"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M954.6,230.4c-4.9,4.9-15.2,15.2-15.2,15.2"
        />
        <line
          id="elizabeth_910ggideapk_910gromford"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="966.5"
          y1="218.5"
          x2="954.6"
          y2="230.4"
        />
        <path
          id="elizabeth_910ghrldwod_910ggideapk"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M976.1,208.9c-3.2,3.2-9.3,9.3-9.3,9.3"
        />
        <line
          id="elizabeth_910gbrtwood_910ghrldwod"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="1002"
          y1="183"
          x2="976.3"
          y2="208.7"
        />
        <line
          id="elizabeth_910gshenfld_910gbrtwood"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="1019.7"
          y1="165.3"
          x2="1002"
          y2="183"
        />
        <line
          id="elizabeth_910ghtrwapt_910ghtrwtm4"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="109.5"
          y1="572.3"
          x2="109.5"
          y2="617.1"
        />
        <line
          fill="none"
          stroke="#F1F2F2"
          strokeWidth="2.9476"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="107.1"
          y1="587"
          x2="112"
          y2="582.2"
        />
        <line
          id="elizabeth_910gsthall_910ghayesah"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="157.6"
          y1="444.8"
          x2="123.9"
          y2="444.8"
        />
        <line
          id="elizabeth_910ghanwell_910gsthall"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="172.7"
          y1="444.8"
          x2="156.1"
          y2="444.8"
        />
        <line
          id="elizabeth_910gwealing_910ghanwell"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="194.1"
          y1="444.8"
          x2="174"
          y2="444.8"
        />
        <path
          id="elizabeth_910gealingb_910gwealing"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M208.9,444.8c-9,0-14.8,0-14.8,0"
        />
        <path
          id="elizabeth_910gactonml_910gealingb"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M258.6,423.5c-13,13-19.1,19.1-19.1,19.1c-1.2,1.2-3.7,2.3-5.4,2.3c-0.4,0-15.8,0-25.1,0"
        />
        <path
          id="elizabeth_910gpadtll_910gactonml"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M405.4,401.9l-122.1,0c-1.8,0-4.2,1-5.4,2.3c-0.6,0.6-19,19-19,19"
        />
        <path
          id="elizabeth_910gcstmhsxr_910gwolwxr"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3443"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          d=" M924.8,500.1c1.7,1.7-1.8-1.8-1.4-1.4l0.7,0.7c2.2,2.2,2.8,2.8,2.8,2.8c1.1,1.1,2,3.3,2,4.9v33.8l0,40.1c0,20.7,0-70.7,0-38.5"
        />
        <path
          id="elizabeth_910gcanwhrf_910gcstmhsxr"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3443"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          d=" M805.6,494.8h96.3h0.9h10.3h3.6c1.6,0,3.8,0.9,4.9,2c0.1,0.1,0.5,0.5,3,3"
        />
        <path
          id="elizabeth_910gwchapxr_910gcanwhrf"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3443"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          d=" M712.4,409.3h25.7c1.6,0,3.8,0.9,4.9,2l7.4,7.4l0.5,0.5l18.4,18.4l0.7,0.7l5.3,5.3c1.1,1.1,2,3.3,2,4.9V467l0,0.9v8.7 c0,1.6,0.9,3.8,2,4.9l11.3,11.3c1.1,1.1,3.3,2,4.9,2h9.5"
        />
        <path
          id="elizabeth_910glivstll_910gwchapxr"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3443"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          d=" M646.1,400.4h8.3c1.6,0,3.8,0.9,4.9,2l1.2,1.2l2.2,2.2l1.3,1.3c1.1,1.1,3.3,2,4.9,2h7.5l35.2,0.1"
        />
        <line
          id="elizabeth_910gfrndxr_910glivstll"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3443"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          x1="593.5"
          y1="400.4"
          x2="646.1"
          y2="400.4"
        />
        <path
          id="elizabeth_910gtotctrd_910gfrndxr"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3443"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          d=" M537.1,426.3l8.8,0l6,0c1.6,0,3.8-0.9,4.9-2l16.9-16.9l1.6-1.6l3.4-3.4c1.1-1.1,3.3-2,4.9-2h9.3"
        />
        <path
          id="elizabeth_910gpadtll_910gbondst"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3443"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          d=" M405.4,401.9h18.9c1.6,0,3.8,0.9,4.9,2l20.3,20.3c1.1,1.1,3.3,2,4.9,2h9.3"
        />
        <line
          id="elizabeth_910gwolwxr_910gabwdxr"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3443"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          x1="928.9"
          y1="597.6"
          x2="928.9"
          y2="584.2"
        />
        <path
          id="elizabeth_910ghayesah_910ghtrwapt"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M109.5,572.3c0,0,0-117.9,0-119.8h0c0-1.8,1-4.2,2.3-5.4c1.2-1.2,3.7-2.3,5.4-2.3c1.4,0,6.8,0,6.8,0"
        />
        <line
          id="elizabeth_910gbondst_910gtotctrd"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3443"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          x1="463.7"
          y1="426.3"
          x2="536.9"
          y2="426.3"
        />
        <g id="elizabeth_white_line_00000018958650115196769240000011505190147589426058_">
          <line
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.8042"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="109.5"
            y1="572.3"
            x2="109.5"
            y2="617.1"
          />
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.805"
            strokeLinejoin="round"
            strokeMiterlimit="3.994"
            d="M109.4,570.9 v3.3c0,2.3-0.9,4.4-2.5,6"
          />
          <line
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.8042"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="156.8"
            y1="444.8"
            x2="123.9"
            y2="444.8"
          />
          <line
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.8042"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="172.7"
            y1="444.8"
            x2="156.1"
            y2="444.8"
          />
          <line
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.8042"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="194.1"
            y1="444.8"
            x2="174"
            y2="444.8"
          />
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.8042"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d="M208.9,444.8 c-9,0-14.8,0-14.8,0"
          />
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.8042"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d="M260,422.1 c-13,13-20.5,20.5-20.5,20.5c-1.2,1.2-3.7,2.3-5.4,2.3c-0.4,0-15.8,0-25.1,0"
          />
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.8042"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d="M405.3,401.9 l-122,0c-1.8,0-4.2,1-5.4,2.3c-0.6,0.6-19,19-19,19"
          />
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.805"
            strokeLinejoin="round"
            strokeMiterlimit="3.994"
            d="M805.6,494.8 h95.3h2.3h13.5c1.6,0,3.8,0.9,4.9,2c0.5,0.5,1.6,1.6,2.3,2.3l0.9,0.9c2.2,2.2,2.1,2.1,2.1,2.1c1.1,1.1,2,3.3,2,4.9v46.2l0,3.6 c0,2.8,0,22.5,0,40.6"
          />
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.805"
            strokeLinejoin="round"
            strokeMiterlimit="3.994"
            d="M712.4,409.3 h25.7c1.6,0,3.8,0.9,4.9,2l7.4,7.4l0.9,0.9l18.7,18.7l1.8,1.8l3.5,3.5c1.1,1.1,2,3.3,2,4.9v23.6l0,1.4v3c0,1.6,0.9,3.8,2,4.9 l11.3,11.3c1.1,1.1,3.3,2,4.9,2h9.5"
          />
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.805"
            strokeLinejoin="round"
            strokeMiterlimit="3.994"
            d="M646.1,400.4 h8.3c1.6,0,3.8,0.9,4.9,2l1.3,1.3l2.1,2.1l1.4,1.4c1.1,1.1,3.3,2,4.9,2l42.7,0"
          />
          <line
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.805"
            strokeLinejoin="round"
            strokeMiterlimit="3.994"
            x1="592.8"
            y1="400.4"
            x2="645"
            y2="400.4"
          />
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.805"
            strokeLinejoin="round"
            strokeMiterlimit="3.994"
            d="M537.1,426.3 l14.8,0c1.6,0,3.8-0.9,4.9-2l16-16l2.5-2.5l3.4-3.4c1.1-1.1,3.3-2,4.9-2h9.3"
          />
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.805"
            strokeLinejoin="round"
            strokeMiterlimit="3.994"
            d="M406.2,401.9 h18.2c1.6,0,3.8,0.9,4.9,2l20.3,20.3c1.1,1.1,3.3,2,4.9,2h9.4"
          />
          <polyline
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.805"
            strokeLinejoin="round"
            strokeMiterlimit="3.994"
            points=" 463.7,426.3 500.5,426.3 536.7,426.3 "
          />
        </g>
        <path
          id="elizabeth_910gwchapxr_910gstfd_00000020385279513728893800000000140386616179057851_"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3443"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          d=" M712.4,409.3l6.3,0l3.1,0h1.9c1.6,0,3.8-0.9,4.9-2l1.8-1.8l2.4-2.4l1.2-1.3l1.6-1.6l17.5-17.5c1.1-1.1,3.3-2,4.9-2h12l0.4,0 c0,0,27.8,0,30.7,0c1.8,0,4.2-1,5.4-2.3c0.7-0.7,0.3-0.3,38.5-38.5"
        />
        <path
          id="elizabeth_910gwdryton_910ghayesah_00000132774001044820814150000005695959201617703318_"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M106.1,427.4c0,0,0,8.4,0,9.8c0,1.8,1,4.2,2.3,5.4c1.2,1.2,3.7,2.3,5.4,2.3c1.4,0,10.2,0,10.2,0"
        />
        <path
          id="elizabeth_910giver_910gwdryton_00000140001451481008340680000015732718977250120620_"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M106.1,407.5c0,0,0,20,0,21.4"
        />
        <line
          id="elizabeth_910glangley_910giver_00000124848403095324430380000001364877283025305790_"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="396.7"
          x2="106.1"
          y2="409"
        />
        <line
          id="elizabeth_910gslough_910glangley_00000016047706179230852750000009046388448231857080_"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="385.9"
          x2="106.1"
          y2="398.2"
        />
        <line
          id="elizabeth_910gbnham_910gslough_00000042694366815337828250000003687481102787902631_"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="374.2"
          x2="106.1"
          y2="385.9"
        />
        <line
          id="elizabeth_910gtaplow_910gbnham_00000140010049591419073620000008955448700302362522_"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="361.8"
          x2="106.1"
          y2="374.2"
        />
        <line
          id="elizabeth_910gmdnhead_910gtaplow_00000034775338315664415060000012728883715723241887_"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="350.9"
          x2="106.1"
          y2="363.3"
        />
        <line
          id="elizabeth_910gtwyford_910gmdnhead_00000058578470085773439620000017674948932121879428_"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="339.3"
          x2="106.1"
          y2="350.9"
        />
        <line
          id="elizabeth_910grdngstn_910gtwyford"
          fill="none"
          stroke="#634EA0"
          strokeWidth="2.3442"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="327.7"
          x2="106.1"
          y2="339.3"
        />
        <path
          id="elizabeth_white_line"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.805"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M1019.5,165.5c-236.1,236.1-206.2,206.2-213,213c-1.2,1.2-3.7,2.2-5.4,2.2c-2.9,0-28.4,0-28.4,0l-0.6,0h-14c-1.6,0-3.8,0.9-4.9,2 l-17.5,17.5l-2.8,2.8l-0.1,0.1l-4.1,4.1c-1.1,1.1-3.3,2-4.9,2h-1.9l-2.9,0l-6.9,0"
        />
        <line
          id="elizabeth_white_line_00000118363181185788277340000008072382567261005186_"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.805"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          x1="723.3"
          y1="409.3"
          x2="731.2"
          y2="409.3"
        />
        <path
          id="elizabeth_white_line_00000121993277766623980350000004686389385085648054_"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M106.1,427.4c0,0,0,8.4,0,9.8c0,1.8,1,4.2,2.3,5.4c1.2,1.2,3.7,2.3,5.4,2.3c1.4,0,10.2,0,10.2,0"
        />
        <path
          id="elizabeth_white_line_00000177475775093264962210000015791746072832359604_"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M106.1,407.5c0,0,0,20,0,21.4"
        />
        <line
          id="elizabeth_white_line_00000078730665961400224420000009040929882834376351_"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="396.7"
          x2="106.1"
          y2="409"
        />
        <line
          id="elizabeth_white_line_00000137835177837691635370000010110891714151375805_"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="385.9"
          x2="106.1"
          y2="398.2"
        />
        <line
          id="elizabeth_white_line_00000029028628096239589620000014888270277815797924_"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="374.2"
          x2="106.1"
          y2="385.9"
        />
        <line
          id="elizabeth_white_line_00000162354353811383741080000010911718788469534114_"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="361.8"
          x2="106.1"
          y2="374.2"
        />
        <line
          id="elizabeth_white_line_00000120553915835334163230000002907862125895025280_"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="350.9"
          x2="106.1"
          y2="363.3"
        />
        <line
          id="elizabeth_white_line_00000018956720524093654650000007529076305521391778_"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="339.3"
          x2="106.1"
          y2="350.9"
        />
        <line
          id="elizabeth_white_line_00000053523242120281958790000016890558403102857632_"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="327.7"
          x2="106.1"
          y2="339.3"
        />
        <path
          id="elizabeth_white_line_00000088092452985300344610000005370851978374377099_"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M109.5,572.3c0,0,0-117.9,0-119.8h0c0-1.8,1-4.2,2.3-5.4c1.2-1.2,3.7-2.3,5.4-2.3c1.7,0,6.8,0,6.8,0"
        />
      </g>
      <g id="line-waterloo" className="line">
        <path
          id="lul-waterloo-city_940gzzluwlo_940gzzlubnk_00000147205344099926852660000000184576883436414141_"
          fill="none"
          stroke="#86CEBC"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M626,446.4l-3.5,3.5c-1.2,1.2-2.3,3.7-2.3,5.4v16.2l0,0.5v34c0,1.8-1,4.2-2.3,5.4l-30.5,30.5c-1.2,1.2-3.7,2.3-5.4,2.3l-38.4,0"
        />
      </g>
      <g id="line-bakerloo" className="line">
        <line
          id="lul-bakerloo_940gzzluhaw_940gzzluken"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="319.4"
          y1="245.8"
          x2="319.4"
          y2="224.5"
        />
        <line
          id="lul-bakerloo_940gzzluken_940gzzluskt"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="319.4"
          y1="277.7"
          x2="319.4"
          y2="245.8"
        />
        <line
          id="lul-bakerloo_940gzzluskt_940gzzlunwy"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="319.4"
          y1="288.7"
          x2="319.4"
          y2="277.7"
        />
        <line
          id="lul-bakerloo_940gzzlunwy_940gzzluwyc"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="319.4"
          y1="296.9"
          x2="319.4"
          y2="287.2"
        />
        <line
          id="lul-bakerloo_940gzzluwyc_940gzzlusgp"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="319.4"
          y1="307"
          x2="319.4"
          y2="296.9"
        />
        <line
          id="lul-bakerloo_940gzzlusgp_940gzzluhsn"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="319.4"
          y1="316.1"
          x2="319.4"
          y2="305.5"
        />
        <line
          id="lul-bakerloo_940gzzluhsn_940gzzluwjn"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="319.4"
          y1="324"
          x2="319.4"
          y2="314.6"
        />
        <line
          id="lul-bakerloo_940gzzluwjn_940gzzluksl"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="319.4"
          y1="334"
          x2="319.4"
          y2="324"
        />
        <line
          id="lul-bakerloo_940gzzluksl_940gzzluqps"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="319.4"
          y1="341.7"
          x2="319.4"
          y2="332.7"
        />
        <path
          id="lul-bakerloo_940gzzluqps_940gzzlukpk"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M322.9,363.2l-1.4-1.4c-1.4-1.4-2.1-3.3-2.1-5.3v-14.8"
        />
        <line
          id="lul-bakerloo_940gzzlukpk_940gzzlumvl"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="331.1"
          y1="371.4"
          x2="321.8"
          y2="362.2"
        />
        <path
          id="lul-bakerloo_940gzzlumvl_940gzzluwka"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M343.2,373.8c0,0-6.5,0-6.5,0c-1.8,0-4.2-1-5.4-2.3l-1.2-1.2"
        />
        <path
          id="lul-bakerloo_940gzzluwka_940gzzlupac"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M377.1,373.8c-19.4,0-35.5,0-35.5,0"
        />
        <line
          id="lul-bakerloo_940gzzlupac_940gzzluerb"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="401.3"
          y1="373.8"
          x2="377.1"
          y2="373.8"
        />
        <path
          id="lul-bakerloo_940gzzluerb_940gzzlumyb"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M434,373.8c-8.5,0-34.2,0-34.2,0"
        />
        <path
          id="lul-bakerloo_940gzzlumyb_940gzzlubst"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M463.5,390.5L449.1,376c-1.2-1.2-3.7-2.3-5.4-2.3c-0.3,0-9.6,0-9.6,0"
        />
        <line
          id="lul-bakerloo_940gzzlubst_940gzzlurgp"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="483.1"
          y1="410.1"
          x2="463.5"
          y2="390.5"
        />
        <path
          id="lul-bakerloo_940gzzlurgp_940gzzluoxc"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M496,432.3v-6.1c0-2.1-0.8-4.3-2.3-5.4l-11.7-11.7"
        />
        <path
          id="lul-bakerloo_940gzzluoxc_940gzzlupcc"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M515.6,464.8l-17.3-17.3c-1.2-1.2-2.3-3.7-2.3-5.4v-9.7"
        />
        <line
          id="lul-bakerloo_940gzzlupcc_940gzzluchx"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="536.8"
          y1="486"
          x2="515.6"
          y2="464.8"
        />
        <path
          id="lul-bakerloo_940gzzluchx_940gzzluemb"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M543.8,512.2l0-16c0-1.8-1-4.2-2.3-5.4l-4.8-4.8"
        />
        <line
          id="lul-bakerloo_940gzzluemb_940gzzluwlo"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="543.8"
          y1="535.7"
          x2="543.8"
          y2="512.2"
        />
        <line
          id="lul-bakerloo_940gzzluwlo_940gzzlulbn"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="543.8"
          y1="572.3"
          x2="543.8"
          y2="535.7"
        />
        <path
          id="lul-bakerloo_940gzzlulbn_940gzzlueac"
          fill="none"
          stroke="#B06010"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M552.4,613.6l-6.3-6.3c-1.2-1.2-2.3-3.7-2.3-5.4l0-31.1"
        />
        <line
          fill="none"
          stroke="#F1F2F2"
          strokeWidth="2.9476"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="314.8"
          y1="261.2"
          x2="327.6"
          y2="261.2"
        />
        <g id="lul-bakerloo_940gzzluskt_raillo-overground_910gskenton">
          <rect id="lul-bakerloo_940gzzluskt" x="316.8" y="277.8" fill="#B06010" width="1.5" height="1.5" />
          <rect id="raillo-overground_910gskenton" x="319.9" y="277.8" fill="#F58025" width="1.5" height="1.5" />
        </g>
        <g id="lul-bakerloo_940gzzlunwy_raillo-overground_910gnwembly">
          <rect id="lul-bakerloo_940gzzlunwy" x="316.8" y="287.2" fill="#B06010" width="1.5" height="1.5" />
          <rect id="raillo-overground_910gnwembly" x="319.9" y="287.2" fill="#F58025" width="1.5" height="1.5" />
        </g>
        <g id="lul-bakerloo_940gzzlusgp_raillo-overground_910gstnbgpk">
          <rect id="lul-bakerloo_940gzzlusgp" x="316.8" y="305.5" fill="#B06010" width="1.5" height="1.5" />
          <rect id="raillo-overground_910gstnbgpk" x="319.9" y="305.5" fill="#F58025" width="1.5" height="1.5" />
        </g>
        <g id="lul-bakerloo_940gzzluhsn_raillo-overground_910gharlsdn">
          <rect id="lul-bakerloo_940gzzluhsn" x="316.8" y="314.6" fill="#B06010" width="1.5" height="1.5" />
          <rect id="raillo-overground_910gharlsdn" x="319.9" y="314.6" fill="#F58025" width="1.5" height="1.5" />
        </g>
        <rect
          id="lul-bakerloo_940gzzlukpk"
          x="320.3"
          y="363.2"
          transform="matrix(0.707 -0.7072 0.7072 0.707 -163.3463 333.6854)"
          fill="#B06010"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-bakerloo_940gzzlumvl"
          x="328.5"
          y="371.4"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -166.7316 341.8276)"
          fill="#B06010"
          width="1.5"
          height="1.5"
        />
        <rect id="lul-bakerloo_940gzzluwka" x="341.7" y="374.9" fill="#B06010" width="1.5" height="1.5" />
        <rect id="lul-bakerloo_940gzzluerb" x="399.8" y="371.2" fill="#B06010" width="1.5" height="1.5" />
        <rect
          id="lul-bakerloo_940gzzlurgp"
          x="483.2"
          y="407.5"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -146.9484 461.795)"
          fill="#B06010"
          width="1.5"
          height="1.5"
        />
        <rect id="lul-bakerloo_940gzzlulbn" x="545" y="570.8" fill="#B06010" width="1.5" height="1.5" />
      </g>
      <g id="line-jubilee" className="line">
        <path
          id="lul-jubilee_940gzzluwhm_940gzzlustd"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M846.4,389.5l0-36.8c0-2.3,1-3.8,2.3-5.1c1.5-1.5,7.2-7.2,7.2-7.2"
        />
        <line
          id="lul-jubilee_940gzzlucgt_940gzzluwhm"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="846.4"
          y1="467.4"
          x2="846.4"
          y2="389.5"
        />
        <path
          id="lul-jubilee_940gzzlungw_940gzzlucgt"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M834.5,508.3l9.7-9.7c1.2-1.2,2.3-2.8,2.3-5.1l0-26.2"
        />
        <path
          id="lul-jubilee_940gzzlucyf_940gzzlungw"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M786.1,513.4c0,0,39.6,0,40.1,0c1.8,0,4.2-1,5.4-2.3l2.8-2.8"
        />
        <path
          id="lul-jubilee_940gzzlucwr_940gzzlucyf_00000138543720657951518640000004814746599928254392_"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M786.1,513.4"
        />
        <path
          id="lul-jubilee_940gzzlucwr_940gzzlucyf_00000134213178718278959110000006530221202823387546_"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M723.1,536.6"
        />
        <path
          id="lul-jubilee_940gzzluswk_940gzzlulnb"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M565.8,556.5h16.4c1.8,0,4.2-1,5.4-2.3l38.6-38.6c1.2-1.2,3.7-2.3,5.4-2.3h5"
        />
        <path
          id="lul-jubilee_940gzzlulnb_940gzzlubmy_00000012454791683629835940000001220941633427852466_"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M636.7,513.4h16.4c1.8,0,4.2,1,5.4,2.3l15.3,15.3"
        />
        <path
          id="lul-jubilee_940gzzlubmy_940gzzlucwr_00000114036259827503229430000017952540963520762008_"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M674.3,531.5l3,3c1.2,1.2,3.7,2.3,5.4,2.3h5h1.3h34.1"
        />
        <path
          id="lul-jubilee_940gzzlucwr_940gzzlucyf_00000179612364775976252330000013286114424647746742_"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M785.1,513.4h-16.4c-1.8,0-4.2,1-5.4,2.3l-18.8,18.8c-1.2,1.2-3.7,2.3-5.4,2.3h-16.3"
        />
        <path
          id="lul-jubilee_940gzzluwlo_940gzzluswk"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M529.6,535.8l0,13.1c0,4.2,3.4,7.6,7.6,7.6h28.6"
        />
        <path
          id="lul-jubilee_940gzzluwsm_940gzzluwlo"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M516.3,505.1l11.1,11c1.2,1.2,2.3,3.7,2.3,5.4l0,14.3"
        />
        <line
          id="lul-jubilee_940gzzlugpk_940gzzluwsm"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="475.8"
          y1="464.8"
          x2="516.3"
          y2="505.1"
        />
        <path
          id="lul-jubilee_940gzzlubnd_940gzzlugpk"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M463.6,426.3v23.1c0,1.8,1,4.2,2.3,5.4l10,10"
        />
        <line
          id="lul-jubilee_940gzzlubst_940gzzlubnd"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="463.6"
          y1="390.5"
          x2="463.6"
          y2="426.4"
        />
        <line
          id="lul-jubilee_940gzzlusjw_940gzzlubst"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="463.6"
          y1="367.9"
          x2="463.6"
          y2="390.5"
        />
        <line
          id="lul-jubilee_940gzzlukbn_940gzzluwhp"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="407.7"
          y1="296.4"
          x2="428.5"
          y2="317.2"
        />
        <line
          id="lul-jubilee_940gzzluwig_940gzzlukbn"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="397.8"
          y1="286.4"
          x2="407.7"
          y2="296.4"
        />
        <line
          id="lul-jubilee_940gzzludoh_940gzzluwig"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="388.9"
          y1="277.6"
          x2="398.8"
          y2="287.5"
        />
        <line
          id="lul-jubilee_940gzzlundn_940gzzludoh"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="380"
          y1="268.7"
          x2="390"
          y2="278.7"
        />
        <line
          id="lul-jubilee_940gzzluwyp_940gzzlundn"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="375"
          y1="263.7"
          x2="381"
          y2="269.7"
        />
        <path
          id="lul-jubilee_940gzzlukby_940gzzluwyp"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M370,247.5v8c0,1.8,1,4.2,2.3,5.4l2.8,2.8"
        />
        <line
          id="lul-jubilee_940gzzluqby_940gzzlukby"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="370"
          y1="235.5"
          x2="370"
          y2="247.5"
        />
        <line
          id="lul-jubilee_940gzzlucpk_940gzzluqby"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="370"
          y1="224.1"
          x2="370"
          y2="237"
        />
        <line
          id="lul-jubilee_940gzzlustm_940gzzlucpk"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="370"
          y1="214.4"
          x2="370"
          y2="225.6"
        />
        <rect id="lul-jubilee_940gzzlucpk" x="371.1" y="224.1" fill="#949CA1" width="1.5" height="1.5" />
        <rect id="lul-jubilee_940gzzluqby" x="371.1" y="235.5" fill="#949CA1" width="1.5" height="1.5" />
        <rect
          id="lul-jubilee_940gzzlundn"
          x="381.1"
          y="267.3"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -77.6766 348.4876)"
          fill="#949CA1"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-jubilee_940gzzludoh"
          x="390"
          y="276.1"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -81.292 357.4077)"
          fill="#949CA1"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-jubilee_940gzzluwig"
          x="398.9"
          y="284.9"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -84.9496 366.2344)"
          fill="#949CA1"
          width="1.5"
          height="1.5"
        />
        <line
          id="lul-jubilee_940gzzluswc_940gzzlusjw"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="463.6"
          y1="359.5"
          x2="463.6"
          y2="369.2"
        />
        <path
          id="lul-jubilee_940gzzlufyr_940gzzluswc"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M438.6,327.2l20.3,20.3l-1.3-1.3l3.7,3.7c1.2,1.2,2.3,3.7,2.3,5.4v4.1"
        />
        <line
          id="lul-jubilee_940gzzluwhp_940gzzlufyr"
          fill="none"
          stroke="#949CA1"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="428.5"
          y1="317.2"
          x2="438.6"
          y2="327.2"
        />
        <rect id="lul-jubilee_940gzzlusjw" x="464.7" y="367.8" fill="#949CA1" width="1.5" height="1.5" />
      </g>
      <g id="line-victoria" className="line">
        <line
          id="lul-victoria_940gzzluwwl_940gzzlublr"
          fill="none"
          stroke="#009DDC"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="751.4"
          y1="261.5"
          x2="791.5"
          y2="261.5"
        />
        <path
          id="lul-victoria_940gzzlublr_940gzzlutmh"
          fill="none"
          stroke="#009DDC"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M732.8,261.5c9.4,0,8.6,0,18.6,0"
        />
        <path
          id="lul-victoria_940gzzlutmh_940gzzlusvs"
          fill="none"
          stroke="#009DDC"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M714.1,261.5c3.8,0,9.8,0,18.7,0"
        />
        <path
          id="lul-victoria_940gzzlusvs_940gzzlufpk"
          fill="none"
          stroke="#009DDC"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M677.3,278.6l14.9-14.9c1.2-1.2,3.1-2.3,4.6-2.3c0.1,0,16,0,17.6,0"
        />
        <path
          id="lul-victoria_940gzzlufpk_940gzzluhai"
          fill="none"
          stroke="#009DDC"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M661.8,323v-25.6c0-1.8,1-4.2,2.3-5.4l13.2-13.2"
        />
        <path
          id="lul-victoria_940gzzlufpk_940gzzluhai_00000124870171148011720200000015146035746613452729_"
          fill="none"
          stroke="#009DDC"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M661.8,324v15.8c0,1.8-1,4.2-2.3,5.4l-7.3,7.3l-0.9,1l-15.6,15.6c-1.2,1.2-3.1,2.3-4.6,2.3c-0.1,0-39.9,0-41.5,0"
        />
        <line
          id="lul-victoria_940gzzluksx_940gzzlueus_00000075162509242123426980000013255702527531728038_"
          fill="none"
          stroke="#009DDC"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="561.1"
          y1="371.3"
          x2="586.4"
          y2="371.3"
        />
        <path
          id="lul-victoria_940gzzlueus_940gzzluwrr"
          fill="none"
          stroke="#009DDC"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M536.8,391.6l16.7-16.7l0.4-0.4l1-1c1.2-1.2,3.7-2.3,5.4-2.3h0.7"
        />
        <line
          id="lul-victoria_940gzzluwrr_940gzzluoxc"
          fill="none"
          stroke="#009DDC"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="496"
          y1="432.4"
          x2="536.8"
          y2="391.6"
        />
        <path
          id="lul-victoria_940gzzluoxc_940gzzlugpk"
          fill="none"
          stroke="#009DDC"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M475.9,464.8l0-9.2c0-1.7,0.8-4,2.1-5.2l18-18"
        />
        <line
          id="lul-victoria_940gzzlugpk_940gzzluvic"
          fill="none"
          stroke="#009DDC"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="475.9"
          y1="505.9"
          x2="475.9"
          y2="464.8"
        />
        <line
          id="lul-victoria_940gzzluvic_940gzzlupco"
          fill="none"
          stroke="#009DDC"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="475.8"
          y1="554.8"
          x2="475.9"
          y2="505.9"
        />
        <path
          id="lul-victoria_940gzzlupco_940gzzluvxl"
          fill="none"
          stroke="#009DDC"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M481.4,611.7l-3.5-3.5c-1.2-1.2-2.1-3.5-2.1-5.3l0-49.5"
        />
        <line
          id="lul-victoria_940gzzluvxl_940gzzluskw"
          fill="none"
          stroke="#009DDC"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="514.6"
          y1="644.9"
          x2="481.4"
          y2="611.7"
        />
        <line
          id="lul-victoria_940gzzluskw_940gzzlubxn"
          fill="none"
          stroke="#009DDC"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="538.4"
          y1="668.7"
          x2="514.6"
          y2="644.9"
        />
        <rect id="lul-victoria_940gzzlupco" x="473.2" y="553.3" fill="#009DDC" width="1.5" height="1.5" />
      </g>
      <g id="line-northern" className="line">
        <line
          id="lul-northern_940gzzluegw_940gzzlubtk"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="449.2"
          y1="220.7"
          x2="433.4"
          y2="204.9"
        />
        <line
          id="lul-northern_940gzzlubtk_940gzzlucnd"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="460.8"
          y1="232.3"
          x2="448.1"
          y2="219.7"
        />
        <line
          id="lul-northern_940gzzlucnd_940gzzluhcl"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="471"
          y1="242.6"
          x2="459.7"
          y2="231.3"
        />
        <line
          id="lul-northern_940gzzluhcl_940gzzlubtx"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="484.7"
          y1="256.2"
          x2="471"
          y2="242.6"
        />
        <line
          id="lul-northern_940gzzlubtx_940gzzluggn"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="495.7"
          y1="267.3"
          x2="483.6"
          y2="255.2"
        />
        <line
          id="lul-northern_940gzzluggn_940gzzluhtd"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="508.5"
          y1="280.1"
          x2="495.7"
          y2="267.3"
        />
        <line
          id="lul-northern_940gzzluhtd_940gzzlubzp"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="539.7"
          y1="311.3"
          x2="507.5"
          y2="279"
        />
        <line
          id="lul-northern_940gzzlubzp_940gzzlucfm"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="550"
          y1="321.5"
          x2="538.7"
          y2="310.2"
        />
        <path
          id="lul-northern_940gzzlumhl_940gzzlufyc"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M568.7,198.1c13.1,13.1,13.2,13.2,14.1,14.1c1.2,1.2,2.3,3.7,2.3,5.4c0,1.4,0,5.7,0,5.7"
        />
        <line
          id="lul-northern_940gzzluhbt_940gzzlutaw"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="585"
          y1="180.2"
          x2="585"
          y2="167.6"
        />
        <line
          id="lul-northern_940gzzlutaw_940gzzluwop"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="585"
          y1="191.3"
          x2="585"
          y2="178.7"
        />
        <line
          id="lul-northern_940gzzluwop_940gzzluwfn"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="585"
          y1="202.9"
          x2="585"
          y2="191.3"
        />
        <line
          id="lul-northern_940gzzluwfn_940gzzlufyc"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="585"
          y1="222.4"
          x2="585"
          y2="202.9"
        />
        <path
          id="lul-northern_940gzzluctn_940gzzlueus"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M553.3,333.4v1.2c0,1.8,1,4.2,2.3,5.4l0.3,0.3c1.2,1.2,2.3,3.7,2.3,5.4l0,13.5"
        />
        <path
          id="lul-northern_940gzzluksh_940gzzluctn"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M580,298.3l-24.4,24.4c-1.2,1.2-2.3,3.7-2.3,5.4v4.4"
        />
        <path
          id="lul-northern_940gzzlucfm_940gzzluctn"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M550,321.5l1.1,1.1c1.2,1.2,2.3,3.7,2.3,5.4v4.4"
        />
        <path
          id="lul-northern_940gzzlutfp_940gzzluksh"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M585,288.4v1.6c0,1.8-1.3,4.5-2.5,5.7l-2.5,2.5"
        />
        <line
          id="lul-northern_940gzzluacy_940gzzlutfp"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="585"
          y1="264"
          x2="585"
          y2="289.9"
        />
        <line
          id="lul-northern_940gzzluhgt_940gzzluacy"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="585"
          y1="246"
          x2="585"
          y2="264"
        />
        <line
          id="lul-northern_940gzzluefy_940gzzluhgt"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="585"
          y1="233.9"
          x2="585"
          y2="247.5"
        />
        <line
          id="lul-northern_940gzzlufyc_940gzzluefy"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="585"
          y1="222.4"
          x2="585"
          y2="235.4"
        />
        <path
          id="lul-northern_940gzzluctn_940gzzlumtc"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M548.6,350.1l0-4.3c0-1.8,1-4.2,2.3-5.4l0.3-0.3c1.2-1.2,2.3-3.7,2.3-5.4v-1.2"
        />
        <line
          id="lul-northern_940gzzlumtc_940gzzlueus"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="548.6"
          y1="359.2"
          x2="548.6"
          y2="348.6"
        />
        <path
          id="lul-northern_940gzzlueus_940gzzluwrr_00000026865478284448890820000000036575977771534243_"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M536.7,391.6v-3.3c0-1.8,1-4.2,2.3-5.4l7.3-7.3c1.2-1.2,2.3-3.6,2.3-5.3v-0.6l0-11.7"
        />
        <path
          id="lul-northern_940gzzlukng_940gzzluovl_00000076575038183711717960000005083318137552748475_"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M523.8,635.6l0.9-0.9c1.2-1.2,2.3-3.7,2.3-5.4v-0.4c0-1.8,1-4.2,2.3-5.4l5.5-5.5"
        />
        <path
          id="lul-northern_940gzzlukng_940gzzluovl_00000126283776768652596900000017666989161671549603_"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M544.3,621.8l-4.3,4.3l-1.1,1.1l-3,3c-1.2,1.2-3.7,2.3-5.4,2.3l-0.4,0c-1.8,0-4.2,1-5.4,2.3l-0.9,0.9"
        />
        <path
          id="lul-northern_940gzzlueus_940gzzluksx_00000112614294657915762640000008476395738356244911_"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M587.4,371.8l-4.1-4.1c-1.2-1.2-3.6-2.3-5.3-2.3l-12,0l-0.6,0c-3.4,0-6.3-2.3-7.3-5.4"
        />
        <path
          id="lul-northern_940gzzluksx_940gzzluagl"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M611.9,376.9h-12.5l-0.4,0h-3.3c-1.8,0-4.2-1-5.4-2.3l-2.8-2.8"
        />
        <path
          id="lul-northern_940gzzluagl_940gzzluods"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M636.7,386.8l0-2.1c0-2.1-0.9-4.1-2.3-5.5c-1.4-1.4-3.3-2.3-5.5-2.3h-18.5"
        />
        <line
          id="lul-northern_940gzzluods_940gzzlumgt"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="636.7"
          y1="423"
          x2="636.7"
          y2="386.8"
        />
        <line
          id="lul-northern_940gzzlumgt_940gzzlubnk"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="636.7"
          y1="458.5"
          x2="636.7"
          y2="423"
        />
        <line
          id="lul-northern_940gzzlubnk_940gzzlulnb"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="636.7"
          y1="513.4"
          x2="636.7"
          y2="458.5"
        />
        <path
          id="lul-northern_940gzzlulnb_940gzzlubor"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M601.2,564.9l33.3-33.3c1.2-1.2,2.3-3.7,2.3-5.4l0-12.8"
        />
        <line
          id="lul-northern_940gzzlubor_940gzzlueac"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="552.5"
          y1="613.6"
          x2="601.6"
          y2="564.4"
        />
        <line
          id="lul-northern_940gzzlueac_940gzzlukng"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="544.2"
          y1="621.9"
          x2="552.6"
          y2="613.5"
        />
        <line
          id="lul-northern_940gzzluovl_940gzzluskw"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="514.4"
          y1="644.9"
          x2="524.2"
          y2="635.1"
        />
        <line
          id="lul-northern_940gzzluskw_940gzzlucpn"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="500.4"
          y1="658.9"
          x2="514.5"
          y2="644.9"
        />
        <line
          id="lul-northern_940gzzlucpn_940gzzlucpc"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="488.2"
          y1="671.1"
          x2="500.4"
          y2="658.9"
        />
        <line
          id="lul-northern_940gzzlucpc_940gzzlucps"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="479.6"
          y1="679.7"
          x2="489.3"
          y2="670.1"
        />
        <line
          id="lul-northern_940gzzlucps_940gzzlublm"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="470.4"
          y1="689"
          x2="480.7"
          y2="678.7"
        />
        <line
          id="lul-northern_940gzzlublm_940gzzlutbc"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="463.5"
          y1="695.9"
          x2="470.3"
          y2="689.1"
        />
        <line
          id="lul-northern_940gzzlutbc_940gzzlutby"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="454.8"
          y1="704.6"
          x2="464.6"
          y2="694.8"
        />
        <line
          id="lul-northern_940gzzlutby_940gzzlucsd"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="445.8"
          y1="713.5"
          x2="455.8"
          y2="703.5"
        />
        <line
          id="lul-northern_940gzzlucsd_940gzzluswn"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="434.3"
          y1="725.1"
          x2="446.9"
          y2="712.5"
        />
        <line
          id="lul-northern_940gzzluswn_940gzzlumdn"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="403.2"
          y1="756.2"
          x2="434.3"
          y2="725.1"
        />
        <line
          id="lul-northern_940gzzluwrr_940gzzlugdg"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="536.7"
          y1="413.8"
          x2="536.7"
          y2="391.6"
        />
        <line
          id="lul-northern_940gzzlugdg_940gzzlutcr"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="536.7"
          y1="426.7"
          x2="536.7"
          y2="412.3"
        />
        <line
          id="lul-northern_940gzzlutcr_940gzzlulsq"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="536.7"
          y1="457.4"
          x2="536.7"
          y2="426.7"
        />
        <line
          id="lul-northern_940gzzlulsq_940gzzluchx"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="536.7"
          y1="486"
          x2="536.7"
          y2="457.4"
        />
        <line
          id="lul-northern_940gzzluchx_940gzzluemb"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="536.7"
          y1="505.1"
          x2="536.7"
          y2="486"
        />
        <line
          id="lul-northern_940gzzluemb_940gzzluwlo"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="536.7"
          y1="544.1"
          x2="536.7"
          y2="505.1"
        />
        <polyline
          id="lul-northern_940gzzlutaw"
          points="587.1,178.7 587.6,178.7 587.6,180.2 586.1,180.2 586.1,178.7 587.1,178.7 "
        />
        <rect id="lul-northern_940gzzluefy" x="586.1" y="233.9" width="1.5" height="1.5" />
        <rect id="lul-northern_940gzzluhgt" x="586.1" y="246" width="1.5" height="1.5" />
        <rect id="lul-northern_940gzzlutfp" x="586.1" y="288.4" width="1.5" height="1.5" />
        <polyline
          id="lul-northern_940gzzlubtk"
          points="447,220.8 447.4,220.4 448.4,221.5 447.3,222.6 446.3,221.5 447,220.8 "
        />
        <polyline
          id="lul-northern_940gzzlucnd"
          points="458.6,232.4 458.9,232 460,233.1 458.9,234.2 457.9,233.1 458.6,232.4 "
        />
        <polyline
          id="lul-northern_940gzzlubtx"
          points="482.5,256.4 482.8,256 483.9,257 482.8,258.1 481.8,257 482.5,256.4 "
        />
        <polyline
          id="lul-northern_940gzzluhtd"
          points="506.3,280.2 506.7,279.8 507.7,280.9 506.7,281.9 505.6,280.9 506.3,280.2 "
        />
        <polyline
          id="lul-northern_940gzzlubzp"
          points="537.5,311.4 537.9,311 538.9,312.1 537.9,313.1 536.8,312.1 537.5,311.4 "
        />
        <polyline
          id="lul-northern_940gzzlucfm"
          points="547.7,321.6 548.1,321.2 549.2,322.3 548.1,323.4 547.1,322.3 547.7,321.6 "
        />
        <rect id="lul-northern_940gzzlumtc" x="545.9" y="348.6" width="1.5" height="1.5" />
        <rect id="lul-northern_940gzzlugdg" x="534.2" y="416.8" width="1.5" height="1.5" />
        <rect
          id="lul-northern_940gzzlubor"
          x="601.7"
          y="565.4"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -223.875 591.7933)"
          width="1.5"
          height="1.5"
        />
        <rect id="lul-northern_940gzzluagl" x="610.4" y="378.1" width="1.5" height="1.5" />
        <polyline
          id="lul-northern_940gzzluwlo_940gzzlukng_00000129174250633689794610000016137394338102995893_"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          points=" 536.8,613.7 536.8,606.9 536.8,588.5 536.7,544.1 "
        />
        <path
          id="lul-northern_940gzzlukng_940gzzneugst"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M464,604.2l23.1,0l0.6,0h1.2c1.8,0,4.2,1,5.4,2.3l11.6,11.6c1.2,1.2,3.7,2.3,5.4,2.3l4.3,0h1.5l6.1,0l0.8,0l4.9,0 c2.1,0,4.1-0.9,5.5-2.3c1.4-1.4,2.3-3.3,2.3-5.5"
        />
        <line
          id="lul-northern_940gzzneugst_940gzzbpsust_00000034805371516734183900000012010113958000597667_"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="463.6"
          y1="604.2"
          x2="445.8"
          y2="604.2"
        />
        <rect
          id="lul-northern_940gzzluovl"
          x="521.6"
          y="633.6"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -295.5288 555.1703)"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-northern_940gzzlucpc"
          x="486.7"
          y="668.5"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -330.4763 540.7175)"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-northern_940gzzlucps"
          x="478.1"
          y="677.1"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -339.094 537.1474)"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-northern_940gzzlutbc"
          x="464.6"
          y="695.9"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -356.2978 533.0469)"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-northern_940gzzlutby"
          x="455.9"
          y="704.6"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -365.0188 529.4745)"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-northern_940gzzlucsd"
          x="446.9"
          y="713.6"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -373.9852 525.7621)"
          width="1.5"
          height="1.5"
        />
      </g>
      <g id="line-piccadilly" className="line">
        <line
          id="lul-piccadilly_940gzzluosy_940gzzlubos_00000128457183479018220690000005391031151591931797_"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="164.7"
          y1="529.4"
          x2="176.1"
          y2="518"
        />
        <line
          id="lul-piccadilly_940gzzluhwe_940gzzluosy_00000071529332891867147640000012565578614273071288_"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="156.6"
          y1="537.5"
          x2="165.8"
          y2="528.3"
        />
        <line
          id="lul-piccadilly_940gzzluhwc_940gzzluhwe_00000127042873533159468370000009434583982100434826_"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="146.9"
          y1="547.2"
          x2="156.7"
          y2="537.4"
        />
        <line
          id="lul-piccadilly_940gzzluhwt_940gzzluhwc_00000034808003143007905430000003545870909486728842_"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="137.7"
          y1="556.4"
          x2="147.9"
          y2="546.2"
        />
        <line
          id="lul-piccadilly_940gzzluhnx_940gzzluhwt_00000066489952768218027600000001386896290225080463_"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="124.1"
          y1="570"
          x2="137.7"
          y2="556.4"
        />
        <line
          id="lul-piccadilly_940gzzluhrc_940gzzluhnx_00000152229805290269682140000016347440962863845523_"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="115"
          y1="579.1"
          x2="125.2"
          y2="568.9"
        />
        <path
          id="lul-piccadilly_940gzzluhr5_940gzzluhrc_00000046314579407697318630000006483797277560302782_"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M115,579.1l-22.9,22.9c-1.5,1.5-2.5,3.9-2.5,6.1c0,2.5,0,15.3,0,15.3"
        />
        <line
          id="lul-piccadilly_940gzzlucks_940gzzluoak"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="682.4"
          y1="175.7"
          x2="682.4"
          y2="163.1"
        />
        <line
          id="lul-piccadilly_940gzzluoak_940gzzlusgt"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="682.4"
          y1="188.8"
          x2="682.4"
          y2="175.7"
        />
        <line
          id="lul-piccadilly_940gzzlusgt_940gzzluasg"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="682.4"
          y1="201"
          x2="682.4"
          y2="187.3"
        />
        <line
          id="lul-piccadilly_940gzzluasg_940gzzlubds"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="682.4"
          y1="213.3"
          x2="682.4"
          y2="199.5"
        />
        <line
          id="lul-piccadilly_940gzzlubds_940gzzluwog"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="682.4"
          y1="225.6"
          x2="682.4"
          y2="211.8"
        />
        <line
          id="lul-piccadilly_940gzzluwog_940gzzlutpn"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="682.4"
          y1="237.9"
          x2="682.4"
          y2="224.1"
        />
        <line
          id="lul-piccadilly_940gzzlutpn_940gzzlumrh"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="682.4"
          y1="257"
          x2="682.4"
          y2="236.4"
        />
        <path
          id="lul-piccadilly_940gzzlufpk_940gzzlumrh"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M675.5,276.8l4.7-4.7c1.2-1.2,2.3-3.7,2.3-5.4V257"
        />
        <line
          id="lul-piccadilly_940gzzluasl_940gzzlufpk"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="658.1"
          y1="294.1"
          x2="675.5"
          y2="276.8"
        />
        <line
          id="lul-piccadilly_940gzzluhwy_940gzzluasl"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="646"
          y1="306.3"
          x2="659.2"
          y2="293.1"
        />
        <line
          id="lul-piccadilly_940gzzlucar_940gzzluhwy"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="633.8"
          y1="318.4"
          x2="646.9"
          y2="305.4"
        />
        <path
          id="lul-piccadilly_940gzzluksx_940gzzlucar"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M587.2,374.1v-5.8c0-1.8,1-4.2,2.3-5.4l4.8-4.8l0.7-0.7l38.8-38.8"
        />
        <line
          id="lul-piccadilly_940gzzlursq_940gzzluksx_00000050665239022884187690000015974142963244193412_"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="587.2"
          y1="393.9"
          x2="587.2"
          y2="374.5"
        />
        <path
          id="lul-piccadilly_940gzzluhbn_940gzzlursq"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M561.4,432.7l23.6-23.6c1.2-1.2,2.3-3.7,2.3-5.4v-11.4"
        />
        <line
          id="lul-piccadilly_940gzzlucgn_940gzzluhbn"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="547.8"
          y1="446.3"
          x2="561.4"
          y2="432.7"
        />
        <line
          id="lul-piccadilly_940gzzlulsq_940gzzlucgn"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="536.8"
          y1="457.3"
          x2="548.9"
          y2="445.3"
        />
        <path
          id="lul-piccadilly_940gzzlupcc_940gzzlulsq"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M515.6,464.8h10.6c1.8,0,4.2-1,5.4-2.3l5.2-5.2"
        />
        <line
          id="lul-piccadilly_940gzzlugpk_940gzzlupcc"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="475.9"
          y1="464.8"
          x2="515.6"
          y2="464.8"
        />
        <path
          id="lul-piccadilly_940gzzluhpc_940gzzlugpk"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M463.5,470.9l3.9-3.9c1.2-1.2,3.7-2.3,5.4-2.3h3.1"
        />
        <line
          id="lul-piccadilly_940gzzluknb_940gzzluhpc"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="443.3"
          y1="491.1"
          x2="464.6"
          y2="469.8"
        />
        <path
          id="lul-piccadilly_940gzzlusks_940gzzluknb"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M421.9,506.4l3,0c1.8,0,4.2-1,5.4-2.3l14.1-14.1"
        />
        <line
          id="lul-piccadilly_940gzzlugtr_940gzzlusks"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="406.7"
          y1="506.4"
          x2="421.9"
          y2="506.4"
        />
        <line
          id="lul-piccadilly_940gzzluect_940gzzlugtr"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="382.7"
          y1="506.4"
          x2="408.2"
          y2="506.4"
        />
        <line
          id="lul-piccadilly_940gzzlubsc_940gzzluect"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="350.6"
          y1="506.4"
          x2="382.7"
          y2="506.4"
        />
        <line
          id="lul-piccadilly_940gzzluhsd_940gzzlubsc"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="333.2"
          y1="506.4"
          x2="352.1"
          y2="506.4"
        />
        <line
          id="lul-piccadilly_940gzzlutng_940gzzluhsd"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="270.1"
          y1="506.4"
          x2="333.2"
          y2="506.4"
        />
        <line
          id="lul-piccadilly_940gzzlusea_940gzzluact"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="206.5"
          y1="506.4"
          x2="235.9"
          y2="506.4"
        />
        <line
          id="lul-piccadilly_940gzzlunfd_940gzzlusea_00000168808556843782537500000003370491991118920123_"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="192"
          y1="506.4"
          x2="208"
          y2="506.4"
        />
        <path
          id="lul-piccadilly_940gzzlubos_940gzzlunfd"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M175.4,518.7l8.1-8.1l0.8-0.8l1.1-1.1l0,0c1.2-1.2,3.7-2.3,5.4-2.3l2.6,0"
        />
        <path
          id="lul-piccadilly_940gzzluuxb_940gzzluhgd"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M132.3,232.5c-11.5,0-20.3,0-20.3,0"
        />
        <line
          id="lul-piccadilly_940gzzluhgd_940gzzluick"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="148.8"
          y1="232.5"
          x2="132.3"
          y2="232.5"
        />
        <g id="lul-piccadilly_940gzzluick_940gzzlursp">
          <line
            id="lul-piccadilly_940gzzluick_940gzzlursp"
            fill="none"
            stroke="#1C3F94"
            strokeWidth="2.2707"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="175.7"
            y1="232.5"
            x2="148.2"
            y2="232.5"
          />
        </g>
        <path
          id="lul-piccadilly_940gzzlursp_940gzzlursm"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M193.2,237.3c-1.8-1.8-2.5-2.5-2.7-2.7c-1-1-3-2.1-4.6-2.1c-0.2,0-11.7,0-11.7,0"
        />
        <path
          id="lul-piccadilly_940gzzlursm_940gzzlueae"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M204.7,248.8c0,0-9.7-9.7-12.8-12.8"
        />
        <line
          id="lul-piccadilly_940gzzlueae_940gzzluryl"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="214.4"
          y1="258.5"
          x2="203.7"
          y2="247.8"
        />
        <path
          id="lul-piccadilly_940gzzluryl_940gzzlushh"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M225,284l0-11.7c0-1.8-1-4.2-2.3-5.4c0,0-1.2-1.2-8.4-8.4"
        />
        <line
          id="lul-piccadilly_940gzzlushh_940gzzlusuh"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="225"
          y1="305.3"
          x2="225"
          y2="282.5"
        />
        <line
          id="lul-piccadilly_940gzzlusuh_940gzzlusut"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="225"
          y1="326.2"
          x2="225"
          y2="303.8"
        />
        <line
          id="lul-piccadilly_940gzzlusut_940gzzlualp"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="225"
          y1="348.6"
          x2="225"
          y2="326.2"
        />
        <line
          id="lul-piccadilly_940gzzlualp_940gzzlupkr"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="225"
          y1="428.5"
          x2="225"
          y2="347.1"
        />
        <line
          id="lul-piccadilly_940gzzlupkr_940gzzlunen"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="225"
          y1="435.7"
          x2="225"
          y2="428.9"
        />
        <line
          id="lul-piccadilly_940gzzlunen_940gzzluecm"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="225"
          y1="482"
          x2="225"
          y2="435.7"
        />
        <g id="lul-piccadilly_940gzzluact_940gzzlutng">
          <line
            fill="none"
            stroke="#1C3F94"
            strokeWidth="2.2707"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="235.9"
            y1="506.4"
            x2="268.7"
            y2="506.4"
          />
          <path
            fill="none"
            stroke="#1C3F94"
            strokeWidth="2.2707"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d="M232.9,506.4 c2.7,0,38.1,0,38.1,0"
          />
        </g>
        <path
          id="lul-piccadilly_940gzzluecm_940gzzluact"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M225.1,482l0,16.6c0,2.1,0.9,4.1,2.3,5.5c1.4,1.4,3.3,2.3,5.5,2.3c2,0,1.5,0,1.5,0"
        />
        <path
          id="lul-piccadilly_940gzzluhr4_940gzzluhnx_00000111895201545840179110000015147989458995111330_"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M115.4,623.4c3-1.6,5.1-4.8,5.1-8.5v-37.8c0-2.2,0.8-4.4,2.5-6.1c1-1,1.5-1.5,1.5-1.5"
        />
        <path
          id="lul-piccadilly_940gzzluhr4_940gzzluhrc_00000182502800174523004510000003663949030502928768_"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M115,579.1c0,0-13.4,13.4-14.2,14.2c-1.6,1.6-2.5,3.7-2.5,6.1l0,15.6c0,5.3,4.3,9.7,9.7,9.7h2.8c1.7,0,3.2-0.4,4.6-1.2"
        />
        <polyline fill="none" stroke="#F1F2F2" strokeWidth="0.9271" points="117.8,607 120.5,609.7 123.2,607 " />
        <polyline fill="none" stroke="#F1F2F2" strokeWidth="0.9271" points="101,610.8 98.4,608.2 95.7,610.8 " />
        <rect
          id="lul-piccadilly_940gzzlushh"
          x="222.4"
          y="282.5"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzlualp"
          x="222.4"
          y="347.1"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzlunen"
          x="222.4"
          y="435.7"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzlusea"
          x="206.5"
          y="503.9"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzlunfd"
          x="192"
          y="507.6"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzlubos_00000170275118267951676880000005116982447117377469_"
          x="176.3"
          y="519"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -315.6179 277.3873)"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzluhwc_00000106110428250336516490000013030805652695785647_"
          x="148"
          y="547.3"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -343.9577 265.6877)"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzluhnx_00000089555564226591853860000014523572585588853684_"
          x="125.2"
          y="570"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -366.7116 256.2376)"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzlursq"
          x="584.7"
          y="392.4"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzlucgn"
          x="548.9"
          y="446.4"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -155.1712 519.6078)"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzluhpc"
          x="462"
          y="468.3"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -196.1478 464.6669)"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzluknb"
          x="441.8"
          y="488.6"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -216.3866 456.2551)"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzlusgt"
          x="679.8"
          y="187.3"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzluasg"
          x="679.8"
          y="199.5"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzlubds"
          x="679.8"
          y="211.8"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzluwog"
          x="679.8"
          y="224.1"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzlutpn"
          x="679.8"
          y="236.4"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzluasl"
          x="656.6"
          y="291.6"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -14.1736 550.4233)"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzluhwy"
          x="644.3"
          y="303.9"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -26.4621 545.3394)"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
        <rect
          id="lul-piccadilly_940gzzlugtr"
          x="406.7"
          y="503.8"
          fill="#1C3F94"
          width="1.5"
          height="1.5"
          className="blue-fill"
        />
      </g>
      <g id="line-central" className="line">
        <path
          id="lul-central_940gzzlulys_940gzzluwsd"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M859.1,266.2h-9.5c-2.7,0-5,2.2-5,5c0,2.6,0,11.1,0,11.1"
        />
        <path
          id="lul-central_940gzzluwof_940gzzlurvy"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M858.3,206.8h-8.7c-2.7,0-5,2.2-5,5c0,2.7,0,10.1,0,10.1"
        />
        <line
          id="lul-central_940gzzlurvy_940gzzlucwl"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="874.7"
          y1="206.8"
          x2="858.3"
          y2="206.8"
        />
        <line
          id="lul-central_940gzzlucwl_940gzzluggh"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="886.7"
          y1="206.8"
          x2="873.2"
          y2="206.8"
        />
        <path
          id="lul-central_940gzzluggh_940gzzluhlt"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M892.4,220v-8.2c0-2.7-2.2-5-5-5h-2.3"
        />
        <line
          id="lul-central_940gzzluflp_940gzzluhlt"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="892.4"
          y1="232"
          x2="892.4"
          y2="220"
        />
        <line
          id="lul-central_940gzzlubke_940gzzluflp"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="892.4"
          y1="243.1"
          x2="892.4"
          y2="230.5"
        />
        <line
          id="lul-central_940gzzlunbp_940gzzlubke"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="892.4"
          y1="255.3"
          x2="892.4"
          y2="241.6"
        />
        <path
          id="lul-central_940gzzlugth_940gzzlunbp"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M885.2,266.2h2.3c2.7,0,5-2.2,5-5v-6"
        />
        <line
          id="lul-central_940gzzlurbg_940gzzlugth"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="871.4"
          y1="266.2"
          x2="886.7"
          y2="266.2"
        />
        <line
          id="lul-central_940gzzluwsd_940gzzlurbg"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="859.1"
          y1="266.2"
          x2="872.9"
          y2="266.2"
        />
        <path
          id="lul-central_940gzzlueby_940gzzluwta"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M249.5,452c-21,0-40.3,0-40.3,0"
        />
        <path
          id="lul-central_940gzzluwta_940gzzlunan"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M286.1,452c-12.8,0-27.8,0-38.1,0"
        />
        <line
          id="lul-central_940gzzlunan_940gzzluean"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="302.7"
          y1="452"
          x2="284.6"
          y2="452"
        />
        <line
          id="lul-central_940gzzluean_940gzzluwcy"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="324.1"
          y1="452"
          x2="301.2"
          y2="452"
        />
        <line
          id="lul-central_940gzzluwcy_940gzzlusbc"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="357.8"
          y1="452"
          x2="324.1"
          y2="452"
        />
        <line
          id="lul-central_940gzzlusbc_940gzzluhpk"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="374.2"
          y1="452"
          x2="357.8"
          y2="452"
        />
        <line
          id="lul-central_940gzzluhpk_940gzzlunhg"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="389.6"
          y1="452"
          x2="372.7"
          y2="452"
        />
        <line
          id="lul-central_940gzzlunhg_940gzzluqwy"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="416.4"
          y1="452"
          x2="389.6"
          y2="452"
        />
        <path
          id="lul-central_940gzzluqwy_940gzzlulgt"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M435.3,448.1l-1.6,1.6c-1.2,1.2-3.7,2.3-5.4,2.3c-0.3,0-13.4,0-13.4,0"
        />
        <line
          id="lul-central_940gzzlulgt_940gzzlumba"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="443.9"
          y1="439.6"
          x2="434.3"
          y2="449.2"
        />
        <path
          id="lul-central_940gzzlumba_940gzzlubnd"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M469.6,432.7h-15.7c-1.7,0-4.2,1-5.4,2.3l-5.6,5.6"
        />
        <line
          id="lul-central_940gzzlubnd_940gzzluoxc"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="496.2"
          y1="432.7"
          x2="469.6"
          y2="432.7"
        />
        <line
          id="lul-central_940gzzluoxc_940gzzlutcr"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="530.7"
          y1="432.7"
          x2="496.2"
          y2="432.7"
        />
        <line
          id="lul-central_940gzzlutcr_940gzzluhbn"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="561.5"
          y1="432.7"
          x2="530.7"
          y2="432.7"
        />
        <path
          id="lul-central_940gzzluhbn_940gzzluchl"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M588.5,440.2l-5.2-5.2c-1.2-1.2-3.7-2.3-5.4-2.3h-16.3"
        />
        <path
          id="lul-central_940gzzluchl_940gzzluspu"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M607.7,452l-4.3,0c-1.8,0-4.2-1-5.4-2.3l-10.6-10.6"
        />
        <path
          id="lul-central_940gzzluspu_940gzzlubnk_00000176764022514739352870000018002035759050192049_"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M623.7,445l-4.7,4.7c-1.2,1.2-3.7,2.3-5.4,2.3h-6"
        />
        <line
          id="lul-central_940gzzlubnk_940gzzlulvt_00000035519402162317154880000009443941136700249243_"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="645.9"
          y1="422.9"
          x2="624.1"
          y2="444.6"
        />
        <path
          id="lul-central_940gzzlulvt_940gzzlublg_00000158733742848028158320000002030426704615487679_"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M739.4,390.9c0,0-1.7,0-2.9,0c-1.8,0-4.2,1-5.4,2.3l-2.4,2.4l-0.4,0.4l-4,4c-1.2,1.2-3.7,2.3-5.4,2.3l-20.7,0l-0.3,0 c0,0-26.9,0-28.1,0c-1.8,0-4.2,1-5.4,2.3l-18.3,18.3"
        />
        <line
          id="lul-central_940gzzlublg_940gzzlumed"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="775"
          y1="390.9"
          x2="739.4"
          y2="390.9"
        />
        <path
          id="lul-central_940gzzlumed_940gzzlustd"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M837.4,340.1l-48.5,48.6c-1.2,1.2-3.7,2.3-5.4,2.3l-8.4,0"
        />
        <path
          id="lul-central_940gzzlustd_940gzzlulyn"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M844.6,311.1v17.4c0,2-0.8,5.2-2.3,6.7l-5,5"
        />
        <line
          id="lul-central_940gzzlulyn_940gzzlulys"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="844.6"
          y1="280.8"
          x2="844.6"
          y2="312.6"
        />
        <line
          id="lul-central_940gzzlulys_940gzzlusnb"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="844.6"
          y1="244.8"
          x2="844.6"
          y2="282.3"
        />
        <line
          id="lul-central_940gzzlusnb_940gzzluswf"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="844.6"
          y1="233"
          x2="844.6"
          y2="246.3"
        />
        <line
          id="lul-central_940gzzluswf_940gzzluwof"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="844.6"
          y1="221.9"
          x2="844.6"
          y2="234.5"
        />
        <polyline
          id="lul-central_940gzzluwof_940gzzlubkh_00000160870469807457390860000010061329260088583585_"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          points=" 844.6,221.9 844.6,194.5 844.6,192.6 844.6,181.5 "
        />
        <path
          id="lul-central_940gzzlubkh_940gzzlulgn_00000154384199413100179430000018203036598357009078_"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M863.2,160.4l-7.9,7.9l-8.4,8.8c-0.9,0.9-1.5,2.4-1.9,3.9"
        />
        <line
          id="lul-central_940gzzlulgn_940gzzludbn"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="871.1"
          y1="152.4"
          x2="862.1"
          y2="161.4"
        />
        <line
          id="lul-central_940gzzludbn_940gzzluthb"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="877.9"
          y1="145.7"
          x2="871.1"
          y2="152.4"
        />
        <line
          id="lul-central_940gzzluthb_940gzzluepg"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="886.2"
          y1="137.4"
          x2="876.8"
          y2="146.8"
        />
        <path
          id="lul-central_940gzzluhgr_940gzzlunan"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M236,417.6l32.1,32.1c1.2,1.2,3.7,2.3,5.4,2.3c1.7,0,12.6,0,12.6,0"
        />
        <line
          id="lul-central_940gzzlupvl_940gzzluhgr"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="197.1"
          y1="378.8"
          x2="236"
          y2="417.6"
        />
        <line
          id="lul-central_940gzzlugfd_940gzzlupvl"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="174.4"
          y1="356"
          x2="198.2"
          y2="379.8"
        />
        <path
          id="lul-central_940gzzlunht_940gzzlugfd"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M161.9,315.9v24.6c0,1.8,1,4.2,2.3,5.4l10.2,10.2"
        />
        <line
          id="lul-central_940gzzlusrp_940gzzlunht"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="161.9"
          y1="291.5"
          x2="161.9"
          y2="317.4"
        />
        <line
          id="lul-central_940gzzlursg_940gzzlusrp"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="161.9"
          y1="265.3"
          x2="161.9"
          y2="291.5"
        />
        <rect id="lul-central_940gzzlursg" x="159.3" y="265.3" fill="#EE3124" width="1.5" height="1.5" />
        <rect id="lul-central_940gzzlunht" x="159.3" y="315.9" fill="#EE3124" width="1.5" height="1.5" />
        <rect
          id="lul-central_940gzzlupvl"
          x="195.5"
          y="379.9"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -211.6485 250.2835)"
          fill="#EE3124"
          width="1.5"
          height="1.5"
        />
        <rect id="lul-central_940gzzluwta" x="248" y="453.1" fill="#EE3124" width="1.5" height="1.5" />
        <rect id="lul-central_940gzzlunan" x="284.6" y="453.1" fill="#EE3124" width="1.5" height="1.5" />
        <rect id="lul-central_940gzzluean" x="301.2" y="449.3" fill="#EE3124" width="1.5" height="1.5" />
        <rect id="lul-central_940gzzluhpk" x="372.7" y="453.1" fill="#EE3124" width="1.5" height="1.5" />
        <rect id="lul-central_940gzzluqwy" x="414.9" y="453.1" fill="#EE3124" width="1.5" height="1.5" />
        <rect
          id="lul-central_940gzzlumba"
          x="441.3"
          y="438"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -180.7923 441.0696)"
          fill="#EE3124"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-central_940gzzlulgt"
          x="435.4"
          y="449.2"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -190.4279 440.1746)"
          fill="#EE3124"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-central_940gzzluchl"
          x="588.5"
          y="437.6"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -137.3808 545.0524)"
          fill="#EE3124"
          width="1.5"
          height="1.5"
        />
        <rect id="lul-central_940gzzlublg" x="738.7" y="388.3" fill="#EE3124" width="1.5" height="1.5" />
        <rect id="lul-central_940gzzlulyn" x="845.7" y="311.1" fill="#EE3124" width="1.5" height="1.5" />
        <rect id="lul-central_940gzzlulys" x="845.7" y="280.8" fill="#EE3124" width="1.5" height="1.5" />
        <rect id="lul-central_940gzzluwsd" x="857.6" y="267.3" fill="#EE3124" width="1.5" height="1.5" />
        <rect id="lul-central_940gzzlugth" x="885.2" y="267.3" fill="#EE3124" width="1.5" height="1.5" />
        <rect id="lul-central_940gzzlurbg" x="871.4" y="263.6" fill="#EE3124" width="1.5" height="1.5" />
        <rect id="lul-central_940gzzlusnb" x="845.8" y="244.9" fill="#EE3124" width="1.5" height="1.5" />
        <rect id="lul-central_940gzzlubke" x="893.6" y="241.6" fill="#EE3124" width="1.5" height="1.5" />
        <rect id="lul-central_940gzzluflp" x="893.6" y="230.5" fill="#EE3124" width="1.5" height="1.5" />
        <rect id="lul-central_940gzzlucwl" x="873.2" y="207.9" fill="#EE3124" width="1.5" height="1.5" />
        <rect id="lul-central_940gzzluggh" x="885.2" y="204.2" fill="#EE3124" width="1.5" height="1.5" />
        <rect
          id="lul-central_940gzzlulgn"
          x="863.2"
          y="161.5"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 138.3348 658.437)"
          fill="#EE3124"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-central_940gzzluthb"
          x="877.9"
          y="146.8"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 153.0232 664.5211)"
          fill="#EE3124"
          width="1.5"
          height="1.5"
        />
        <line
          fill="none"
          stroke="#F1F2F2"
          strokeWidth="2.9476"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="161.9"
          y1="234.4"
          x2="161.9"
          y2="231.1"
        />
        <line
          id="lul-central_940gzzluwrp_940gzzlursg"
          fill="none"
          stroke="#EE3124"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="161.9"
          y1="214.1"
          x2="161.9"
          y2="266.8"
        />
      </g>
      <g id="line-hammersmith-and-city" className="line">
        <line
          id="lul-hammersmith-city_940gzzluehm_940gzzlubkg"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="898"
          y1="365.9"
          x2="908.2"
          y2="355.7"
        />
        <line
          id="lul-hammersmith-city_940gzzluupk_940gzzluehm"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="885.3"
          y1="378.6"
          x2="898"
          y2="365.9"
        />
        <line
          id="lul-hammersmith-city_940gzzluplw_940gzzluupk"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="872.5"
          y1="391.5"
          x2="886.3"
          y2="377.6"
        />
        <path
          id="lul-hammersmith-city_940gzzluwhm_940gzzluplw"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M854.9,396.9l9.9,0h0c1.2,0,3-0.8,3.8-1.6l5-5"
        />
        <line
          id="lul-hammersmith-city_940gzzlubbb_940gzzluwhm"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="833.4"
          y1="396.9"
          x2="854.9"
          y2="396.9"
        />
        <line
          id="lul-hammersmith-city_940gzzlubwr_940gzzlubbb"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="804.9"
          y1="396.9"
          x2="833.4"
          y2="396.9"
        />
        <line
          id="lul-hammersmith-city_940gzzlumed_940gzzlubwr"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="774.9"
          y1="396.8"
          x2="804.9"
          y2="396.9"
        />
        <path
          id="lul-hammersmith-city_940gzzlusgn_940gzzlumed"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M739.8,401.4l1.7-1.7c1.7-1.7,4.7-2.9,7-2.9l26.3,0.1"
        />
        <line
          id="lul-hammersmith-city_940gzzluwpl_940gzzlusgn"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="722.2"
          y1="419.1"
          x2="740.9"
          y2="400.3"
        />
        <line
          id="lul-hammersmith-city_940gzzluade_940gzzluwpl"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="712.7"
          y1="428.6"
          x2="722.2"
          y2="419.1"
        />
        <path
          id="lul-hammersmith-city_940gzzlulvt_940gzzluade"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M645.8,420.7h40.7c2.7,0,5.2,1,7.1,2.9l7.3,7.3c1.3,1.3,2.5,2.2,4.7,2.2c2.3,0,3.3-0.8,4.6-2.2l2.3-2.3"
        />
        <path
          id="lul-hammersmith-city_940gzzlumgt_940gzzlulvt"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M628,418.2l0.8,0.8c1,1,2.4,1.6,3.9,1.6h3.9h0.4h8.8"
        />
        <line
          id="lul-hammersmith-city_940gzzlubbn_940gzzlumgt_00000028324712810843830830000010353571416719605656_"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="615"
          y1="405.2"
          x2="628.8"
          y2="419.1"
        />
        <line
          id="lul-hammersmith-city_940gzzlufcn_940gzzlubbn"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="601.5"
          y1="391.7"
          x2="615"
          y2="405.2"
        />
        <path
          id="lul-hammersmith-city_940gzzluksx_940gzzlufcn"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M577.9,379.1l6.8,0c2.7,0,5.2,1,7.1,2.9l10.3,10.3"
        />
        <line
          id="lul-hammersmith-city_940gzzluesq_940gzzluksx"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="524.8"
          y1="379.1"
          x2="577.9"
          y2="379.1"
        />
        <line
          id="lul-hammersmith-city_940gzzlugps_940gzzluesq"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="491.7"
          y1="379.1"
          x2="526.3"
          y2="379.1"
        />
        <line
          id="lul-hammersmith-city_940gzzlubst_940gzzlugps"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="473.3"
          y1="379.1"
          x2="493.2"
          y2="379.1"
        />
        <line
          id="lul-hammersmith-city_940gzzluerc_940gzzlubst"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="417.1"
          y1="379.1"
          x2="473.3"
          y2="379.1"
        />
        <line
          id="lul-hammersmith-city_940gzzlupah_940gzzluerc"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="383.6"
          y1="379.1"
          x2="417.1"
          y2="379.1"
        />
        <path
          id="lul-hammersmith-city_940gzzluryo_940gzzlupah"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M346.8,393.4l9.5-9.5c3.1-3.1,7.3-4.9,11.8-4.9l15.5,0"
        />
        <line
          id="lul-hammersmith-city_940gzzluwsp_940gzzluryo"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="336.8"
          y1="403.4"
          x2="347.9"
          y2="392.3"
        />
        <path
          id="lul-hammersmith-city_940gzzlulad_940gzzluwsp"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M332.1,419.8v-8.5c0-0.8,0.2-1.9,0.7-2.9c0.4-1,1-1.9,1.6-2.5l3.6-3.6"
        />
        <line
          id="lul-hammersmith-city_940gzzlulrd_940gzzlulad"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="332.1"
          y1="431.1"
          x2="332.1"
          y2="418.2"
        />
        <line
          id="lul-hammersmith-city_940gzzluwla_940gzzlulrd"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="332.1"
          y1="461"
          x2="332.1"
          y2="429.5"
        />
        <line
          id="lul-hammersmith-city_940gzzlusbm_940gzzluwla"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="332.1"
          y1="475.7"
          x2="332.1"
          y2="461"
        />
        <line
          id="lul-hammersmith-city_940gzzlughk_940gzzlusbm"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="332.1"
          y1="486.5"
          x2="332.1"
          y2="474.2"
        />
        <line
          id="lul-hammersmith-city_940gzzluhsc_940gzzlughk"
          fill="none"
          stroke="#F386A1"
          strokeWidth="2.2709"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="332.1"
          y1="492.8"
          x2="332.1"
          y2="485"
        />
        <rect
          id="lul-hammersmith-city_940gzzluade"
          x="710.7"
          y="426.4"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -93.6552 628.1875)"
          fill="#F386A1"
          width="1.5"
          height="1.5"
        />
        <rect id="lul-hammersmith-city_940gzzlusbm" x="329.5" y="474.2" fill="#F386A1" width="1.5" height="1.5" />
        <rect id="lul-hammersmith-city_940gzzlughk" x="329.5" y="485" fill="#F386A1" width="1.5" height="1.5" />
      </g>
      <g id="line-circle" className="line">
        <path
          id="lul-circle_940gzzluerc_940gzzlupac"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M393.1,389.7c1.5-1.5,3.5-2.3,5.5-2.3c2.1,0,18.7,0,18.7,0"
        />
        <path
          id="lul-circle_940gzzlupac_940gzzlubwt"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M390.8,423.1l0-27.8c0-2.1,0.9-4.1,2.3-5.5"
        />
        <line
          id="lul-circle_940gzzlubwt_940gzzlunhg"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="390.8"
          y1="452.1"
          x2="390.8"
          y2="423.1"
        />
        <line
          id="lul-circle_940gzzlunhg_940gzzluhsk"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="390.8"
          y1="477.1"
          x2="390.8"
          y2="452.1"
        />
        <path
          id="lul-circle_940gzzluhsk_940gzzlugtr"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M408.2,511.1h-9.7c-2.1,0-4.1-0.9-5.5-2.3c-1.5-1.5-2.3-3.5-2.3-5.5l0-27.7"
        />
        <line
          id="lul-circle_940gzzlugtr_940gzzlusks"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="421.9"
          y1="511.1"
          x2="406.7"
          y2="511.1"
        />
        <line
          id="lul-circle_940gzzlusks_940gzzlussq"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="449.7"
          y1="511.1"
          x2="421.9"
          y2="511.1"
        />
        <line
          id="lul-circle_940gzzlussq_940gzzluvic"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="468.9"
          y1="511.1"
          x2="448.2"
          y2="511.1"
        />
        <line
          id="lul-circle_940gzzluvic_940gzzlusjp"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="490.5"
          y1="511.1"
          x2="468.9"
          y2="511.1"
        />
        <line
          id="lul-circle_940gzzlusjp_940gzzluwsm"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="516.3"
          y1="511.1"
          x2="489"
          y2="511.1"
        />
        <line
          id="lul-circle_940gzzluwsm_940gzzluemb"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="543.8"
          y1="511.1"
          x2="516.3"
          y2="511.1"
        />
        <line
          id="lul-circle_940gzzluemb_940gzzlutmp"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="575.8"
          y1="511.1"
          x2="543.8"
          y2="511.1"
        />
        <path
          id="lul-circle_940gzzlutmp_940gzzlubkf"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M597.4,498.1L586,509.5c-1,1-2.4,1.6-3.9,1.6h-7.8"
        />
        <line
          id="lul-circle_940gzzlubkf_940gzzlumsh"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="608.2"
          y1="487.3"
          x2="597.4"
          y2="498.1"
        />
        <line
          id="lul-circle_940gzzlumsh_940gzzlucst"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="618.6"
          y1="476.9"
          x2="607.2"
          y2="488.3"
        />
        <path
          id="lul-circle_940gzzlucst_940gzzlummt"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M643.6,468h-13c-2,0-4,0.8-5.4,2.2l-6.7,6.7"
        />
        <line
          id="lul-circle_940gzzlummt_940gzzlutwh"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="682.7"
          y1="468"
          x2="643.6"
          y2="468"
        />
        <path
          id="lul-circle_940gzzluald_940gzzlutwh"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M694.3,445l0,15.3c0,2.1-0.9,4.1-2.3,5.5c-1.4,1.4-3.3,2.3-5.5,2.3h-3.9"
        />
        <path
          id="lul-circle_940gzzlulvt_940gzzluald"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M645.9,422.9h40.7c2.1,0,4.1,0.9,5.5,2.3c1.4,1.4,2.3,3.3,2.3,5.5l0,15.7"
        />
        <path
          id="lul-circle_940gzzlumgt_940gzzlulvt"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M625.7,419.1l1.5,1.5c1.4,1.4,3.3,2.3,5.5,2.3h3.4h0.6h9.1"
        />
        <line
          id="lul-circle_940gzzlubbn_940gzzlumgt_00000164495868776582956570000011683136009290808222_"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="613.3"
          y1="406.8"
          x2="627.2"
          y2="420.7"
        />
        <line
          id="lul-circle_940gzzlufcn_940gzzlubbn"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="600.4"
          y1="393.8"
          x2="613.3"
          y2="406.8"
        />
        <path
          id="lul-circle_940gzzluksx_940gzzlufcn"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M577.9,381.3l6.8,0c2.1,0,4.1,0.9,5.5,2.3l10.2,10.2"
        />
        <line
          id="lul-circle_940gzzluesq_940gzzluksx"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="524.8"
          y1="381.3"
          x2="577.9"
          y2="381.3"
        />
        <line
          id="lul-circle_940gzzlugps_940gzzluesq"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="491.7"
          y1="381.3"
          x2="526.3"
          y2="381.3"
        />
        <line
          id="lul-circle_940gzzlubst_940gzzlugps"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="473.2"
          y1="381.3"
          x2="493.2"
          y2="381.3"
        />
        <line
          id="lul-circle_940gzzluerc_940gzzlubst"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="417"
          y1="381.3"
          x2="473.2"
          y2="381.3"
        />
        <line
          id="lul-circle_940gzzlupah_940gzzluerc"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="383.6"
          y1="381.3"
          x2="417"
          y2="381.3"
        />
        <path
          id="lul-circle_940gzzluryo_940gzzlupah"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M348.4,395l9.5-9.5c2.6-2.6,6.2-4.2,10.2-4.2l15.6,0"
        />
        <line
          id="lul-circle_940gzzluwsp_940gzzluryo"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="338.4"
          y1="405"
          x2="349.5"
          y2="393.9"
        />
        <path
          id="lul-circle_940gzzlulad_940gzzluwsp"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M334.3,419.8l0-8.5l0,0c0-0.4,0.2-1.2,0.5-2l0,0c0.3-0.8,0.8-1.5,1.1-1.7l3.6-3.6"
        />
        <line
          id="lul-circle_940gzzlulrd_940gzzlulad"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="334.3"
          y1="431.1"
          x2="334.3"
          y2="418.2"
        />
        <line
          id="lul-circle_940gzzluwla_940gzzlulrd"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="334.2"
          y1="461.3"
          x2="334.3"
          y2="429.5"
        />
        <line
          id="lul-circle_940gzzlusbm_940gzzluwla"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="334.3"
          y1="475.7"
          x2="334.3"
          y2="461.3"
        />
        <line
          id="lul-circle_940gzzlughk_940gzzlusbm"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="334.3"
          y1="486.5"
          x2="334.3"
          y2="474.2"
        />
        <line
          id="lul-circle_940gzzluhsc_940gzzlughk"
          fill="none"
          stroke="#FFD200"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="334.3"
          y1="493"
          x2="334.3"
          y2="485"
        />
        <g id="lul-circle_lul-hammersmith-city_940gzzluryo">
          <rect
            id="lul-hammersmith-city_940gzzluryo"
            x="350.7"
            y="390.6"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -173.8099 363.1506)"
            fill="#F386A1"
            width="1.5"
            height="1.5"
          />
          <rect
            id="lul-circle_940gzzluryo"
            x="352.3"
            y="392.2"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -174.4734 364.7319)"
            fill="#FFD200"
            width="1.5"
            height="1.5"
          />
        </g>
        <g id="lul-circle_lul-hammersmith-city_940gzzluwsp">
          <rect
            id="lul-hammersmith-city_940gzzluwsp"
            x="336.8"
            y="404.6"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -187.7715 357.3489)"
            fill="#F386A1"
            width="1.5"
            height="1.5"
          />
          <rect
            id="lul-circle_940gzzluwsp"
            x="338.4"
            y="406.2"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -188.4385 358.9777)"
            fill="#FFD200"
            width="1.5"
            height="1.5"
          />
        </g>
        <g id="lul-circle_lul-hammersmith-city_940gzzlulad">
          <rect id="lul-circle_940gzzlulad" x="335.4" y="418.3" fill="#FFD200" width="1.5" height="1.5" />
          <rect id="lul-hammersmith-city_940gzzlulad" x="333.2" y="418.3" fill="#F386A1" width="1.5" height="1.5" />
        </g>
        <g id="lul-circle_lul-hammersmith-city_940gzzlulrd">
          <rect id="lul-circle_940gzzlulrd" x="335.4" y="429.6" fill="#FFD200" width="1.5" height="1.5" />
          <rect id="lul-hammersmith-city_940gzzlulrd" x="333.1" y="429.6" fill="#F386A1" width="1.5" height="1.5" />
        </g>
        <g id="lul-circle_lul-hammersmith-city_940gzzlusbm">
          <rect id="lul-circle_940gzzlusbm" x="331.7" y="474.2" fill="#FFD200" width="1.5" height="1.5" />
        </g>
        <g id="lul-circle_lul-hammersmith-city_940gzzlughk">
          <rect id="lul-circle_940gzzlughk" x="331.7" y="485" fill="#FFD200" width="1.5" height="1.5" />
        </g>
        <rect
          id="lul-circle_940gzzlumsh"
          x="602.8"
          y="488.6"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -169.2211 570.1008)"
          fill="#FFD200"
          width="1.5"
          height="1.5"
        />
        <rect id="lul-circle_940gzzluhsk" x="391.9" y="475.6" fill="#FFD200" width="1.5" height="1.5" />
        <rect id="lul-circle_940gzzlubwt" x="391.9" y="423.1" fill="#FFD200" width="1.5" height="1.5" />
      </g>
      <g id="line-district" className="line">
        <path
          id="lul-district_940gzzlupac_940gzzluerc"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M391.5,388.1c1.9-1.9,4.4-2.9,7.1-2.9c2.6,0,18.6,0,18.6,0"
        />
        <path
          id="lul-district_940gzzlupac_940gzzlubwt"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M388.5,423.1v-27.8c0-2.7,1-5.2,2.9-7.1"
        />
        <line
          id="lul-district_940gzzlubwt_940gzzlunhg"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="388.5"
          y1="452.2"
          x2="388.5"
          y2="423.1"
        />
        <line
          id="lul-district_940gzzlunhg_940gzzluhsk"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="388.5"
          y1="477.1"
          x2="388.5"
          y2="452.2"
        />
        <path
          id="lul-district_940gzzluhsk_940gzzluect"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M380.7,513.3c2.1,0,4.3-1,5.5-2.3c1.2-1.2,2.3-3.3,2.3-5.5v-30"
        />
        <g id="lul-district_940gzzluect_940gzzlukoy">
          <path
            fill="none"
            stroke="#00853F"
            strokeWidth="2.2707"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d="M384.4,513.3 c-2.1,0-4.1-0.9-5.5-2.3c-1.4-1.4-2.3-3.3-2.3-5.5c0-2.1,0-21.2,0-21.2"
          />
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.4993"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d="M384.4,513.3 c-2.1,0-4.1-0.9-5.5-2.3c-1.4-1.4-2.3-3.3-2.3-5.5c0-2.1,0-21.2,0-21.2"
          />
          <path
            id="lul-district_940gzzluect_940gzzlukoy"
            fill="none"
            stroke="#00853F"
            strokeWidth="2.1706"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            strokeDasharray="1.5133,1.5133"
            d=" M384.4,513.3c-2.1,0-4.1-0.9-5.5-2.3c-1.4-1.4-2.3-3.3-2.3-5.5c0-2.1,0-21.2,0-21.2"
          />
        </g>
        <path
          id="lul-district_940gzzluwim_940gzzluwip"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M376.6,626.5c0,0,0,11.5,0,11.5"
        />
        <line
          id="lul-district_940gzzluwip_940gzzlusfs"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="376.6"
          y1="616"
          x2="376.6"
          y2="627.9"
        />
        <line
          id="lul-district_940gzzlusfs_940gzzluepy"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="376.6"
          y1="604.2"
          x2="376.6"
          y2="616"
        />
        <line
          id="lul-district_940gzzluepy_940gzzlupyb"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="376.6"
          y1="586.1"
          x2="376.6"
          y2="605.7"
        />
        <line
          id="lul-district_940gzzlupyb_940gzzlupsg"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="376.6"
          y1="576.5"
          x2="376.6"
          y2="586.1"
        />
        <line
          id="lul-district_940gzzlupsg_940gzzlufby"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="376.6"
          y1="567.2"
          x2="376.6"
          y2="578"
        />
        <line
          id="lul-district_940gzzlufby_940gzzluwbn"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="376.6"
          y1="542.6"
          x2="376.6"
          y2="567.2"
        />
        <path
          id="lul-district_940gzzluwbn_940gzzluect"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M384.4,513.3c-2.1,0-4.1,0.9-5.5,2.3c-1.4,1.4-2.3,3.3-2.3,5.5c0,0.3,0,21.5,0,21.5"
        />
        <line
          id="lul-district_940gzzluect_940gzzlugtr"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="408.2"
          y1="513.3"
          x2="382.7"
          y2="513.3"
        />
        <line
          id="lul-district_940gzzlugtr_940gzzlusks"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="421.8"
          y1="513.3"
          x2="406.7"
          y2="513.3"
        />
        <line
          id="lul-district_940gzzlusks_940gzzlussq"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="449.7"
          y1="513.3"
          x2="421.8"
          y2="513.3"
        />
        <line
          id="lul-district_940gzzlussq_940gzzluvic"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="468.7"
          y1="513.3"
          x2="448.2"
          y2="513.3"
        />
        <line
          id="lul-district_940gzzluvic_940gzzlusjp"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="490.5"
          y1="513.3"
          x2="468.7"
          y2="513.3"
        />
        <line
          id="lul-district_940gzzlusjp_940gzzluwsm"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="516.3"
          y1="513.3"
          x2="489.1"
          y2="513.3"
        />
        <line
          id="lul-district_940gzzluwsm_940gzzluemb"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="543.8"
          y1="513.3"
          x2="516.3"
          y2="513.3"
        />
        <line
          id="lul-district_940gzzluemb_940gzzlutmp"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="575.8"
          y1="513.3"
          x2="543.8"
          y2="513.3"
        />
        <path
          id="lul-district_940gzzlutmp_940gzzlubkf"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M599,499.7l-11.3,11.3c-1.4,1.4-3.3,2.3-5.5,2.3h-7.8"
        />
        <line
          id="lul-district_940gzzlubkf_940gzzlumsh"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="609.8"
          y1="488.9"
          x2="599"
          y2="499.7"
        />
        <line
          id="lul-district_940gzzlumsh_940gzzlucst"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="620.1"
          y1="478.6"
          x2="608.8"
          y2="489.9"
        />
        <path
          id="lul-district_940gzzlucst_940gzzlummt"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M643.6,470.3h-12.9c-1.4,0-2.8,0.6-3.8,1.6l-6.7,6.7"
        />
        <line
          id="lul-district_940gzzlummt_940gzzlutwh"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="682.7"
          y1="470.3"
          x2="643.6"
          y2="470.3"
        />
        <path
          id="lul-district_940gzzlutwh_940gzzluade"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M714.4,430.1l-15.5,15.5c-1.5,1.5-2.3,3.5-2.3,5.5v9.2c0,2.7-1,5.2-2.9,7.1c-1.9,1.9-4.4,2.9-7.1,2.9h-3.9"
        />
        <line
          id="lul-district_940gzzluade_940gzzluwpl"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="723.6"
          y1="420.9"
          x2="714.4"
          y2="430.1"
        />
        <line
          id="lul-district_940gzzluwpl_940gzzlusgn"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="742.5"
          y1="401.9"
          x2="723.6"
          y2="420.9"
        />
        <path
          id="lul-district_940gzzlusgn_940gzzlumed"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M775,399.1l-26.4-0.1c-1.8,0-4.2,1-5.4,2.3l-1.7,1.7"
        />
        <line
          id="lul-district_940gzzlumed_940gzzlubwr"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="804.9"
          y1="399.2"
          x2="775"
          y2="399.1"
        />
        <line
          id="lul-district_940gzzlubwr_940gzzlubbb"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="833.3"
          y1="399.2"
          x2="804.9"
          y2="399.2"
        />
        <line
          id="lul-district_940gzzlubbb_940gzzluwhm"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="854.9"
          y1="399.2"
          x2="833.3"
          y2="399.2"
        />
        <path
          id="lul-district_940gzzluwhm_940gzzluplw"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M875.1,392l-5,5c-1.2,1.2-3.7,2.3-5.4,2.3l-9.9,0"
        />
        <line
          id="lul-district_940gzzluplw_940gzzluupk"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="887.9"
          y1="379.2"
          x2="874.1"
          y2="393.1"
        />
        <line
          id="lul-district_940gzzluupk_940gzzluehm"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="899.8"
          y1="367.3"
          x2="886.9"
          y2="380.2"
        />
        <line
          id="lul-district_940gzzluehm_940gzzlubkg"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="909.2"
          y1="357.9"
          x2="899.8"
          y2="367.3"
        />
        <line
          id="lul-district_940gzzlubkg_940gzzluupy"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="920.7"
          y1="346.4"
          x2="909.2"
          y2="357.9"
        />
        <line
          id="lul-district_940gzzluupy_940gzzlubec"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="929.9"
          y1="337.2"
          x2="920.7"
          y2="346.4"
        />
        <line
          id="lul-district_940gzzlubec_940gzzludgy"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="939.8"
          y1="327.3"
          x2="929.9"
          y2="337.2"
        />
        <line
          id="lul-district_940gzzludgy_940gzzludge"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="952.1"
          y1="315.1"
          x2="939.8"
          y2="327.3"
        />
        <line
          id="lul-district_940gzzludge_940gzzluepk"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="967.3"
          y1="299.9"
          x2="951"
          y2="316.1"
        />
        <line
          id="lul-district_940gzzluepk_940gzzluhch"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="976.3"
          y1="290.8"
          x2="967.3"
          y2="299.9"
        />
        <line
          id="lul-district_940gzzluhch_940gzzluupb"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="986.3"
          y1="280.8"
          x2="975.3"
          y2="291.9"
        />
        <line
          id="lul-district_940gzzluupb_940gzzluupm"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="996.5"
          y1="270.6"
          x2="985.2"
          y2="281.9"
        />
        <line
          id="lul-district_940gzzlurmd_940gzzlukwg_00000128454572624279790910000014337562877895783317_"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="197.8"
          y1="560.6"
          x2="185"
          y2="573.3"
        />
        <line
          id="lul-district_940gzzlukwg_940gzzlugby"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="223.2"
          y1="535.1"
          x2="198.2"
          y2="560.1"
        />
        <path
          id="lul-district_940gzzlueby_940gzzluecm"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M217.9,482l0-14.9c0-2.1-0.9-4.1-2.3-5.5c-1.4-1.4-3.3-2.3-5.5-2.3c-2,0-1.8,0-1.8,0"
        />
        <path
          id="lul-district_940gzzluecm_940gzzluact"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M217.9,482l0,23.5c0,2.1,0.9,4.1,2.3,5.5c1.4,1.4,3.3,2.3,5.5,2.3c2,0,1.5,0,1.5,0"
        />
        <path
          id="lul-district_940gzzlugby_940gzzlutng"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M271.2,513.3l-23,0c-2,0-4,0.8-5.5,2.3l-19.9,19.9"
        />
        <line
          id="lul-district_940gzzluact_940gzzlucwp_00000163771594138079080120000011688727153452876971_"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="235.6"
          y1="513.3"
          x2="225.6"
          y2="513.3"
        />
        <line
          id="lul-district_940gzzlucwp_940gzzlutng"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="271.6"
          y1="513.3"
          x2="234.2"
          y2="513.3"
        />
        <line
          id="lul-district_940gzzlutng_940gzzlusfb"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="293.3"
          y1="513.3"
          x2="270.1"
          y2="513.3"
        />
        <line
          id="lul-district_940gzzlusfb_940gzzlurvp"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="318.8"
          y1="513.3"
          x2="291.9"
          y2="513.3"
        />
        <line
          id="lul-district_940gzzlurvp_940gzzluhsd"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="333.3"
          y1="513.3"
          x2="317.2"
          y2="513.3"
        />
        <line
          id="lul-district_940gzzluhsd_940gzzlubsc"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="352.1"
          y1="513.3"
          x2="333.3"
          y2="513.3"
        />
        <line
          id="lul-district_940gzzlubsc_940gzzluwkn"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="365.2"
          y1="513.3"
          x2="350.6"
          y2="513.3"
        />
        <line
          id="lul-district_940gzzluwkn_940gzzluect"
          fill="none"
          stroke="#00853F"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="382.7"
          y1="513.3"
          x2="363.7"
          y2="513.3"
        />
        <g id="lul-district_940gzzlumsh_00000005244124238829388810000017098486000515369400_">
          <rect
            id="lul-district_940gzzlumsh_00000155868519717687606290000017830628049848129670_"
            x="604.4"
            y="490.2"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -169.8823 571.7409)"
            fill="#00853F"
            width="1.5"
            height="1.5"
          />
        </g>
        <g id="lul-circle_lul-district_940gzzlutmp">
          <rect id="lul-circle_940gzzlutmp" x="574.3" y="512.2" fill="#FFD200" width="1.5" height="1.5" />
          <rect id="lul-district_940gzzlutmp" x="574.3" y="514.5" fill="#00853F" width="1.5" height="1.5" />
        </g>
        <g id="lul-circle_lul-district_940gzzlusjp">
          <rect id="lul-circle_940gzzlusjp" x="489" y="512.2" fill="#FFD200" width="1.5" height="1.5" />
          <rect id="lul-district_940gzzlusjp" x="489" y="514.5" fill="#00853F" width="1.5" height="1.5" />
        </g>
        <g id="lul-circle_lul-district_940gzzlussq">
          <rect id="lul-district_940gzzlussq" x="448.2" y="514.5" fill="#00853F" width="1.5" height="1.5" />
          <rect id="lul-circle_940gzzlussq" x="448.2" y="512.2" fill="#FFD200" width="1.5" height="1.5" />
        </g>
        <g id="lul-circle_lul-district_lul-piccadilly_940gzzlugtr">
          <rect id="lul-circle_940gzzlugtr" x="406.7" y="508.5" fill="#FFD200" width="1.5" height="1.5" />
          <rect id="lul-district_940gzzlugtr" x="406.7" y="510.7" fill="#00853F" width="1.5" height="1.5" />
        </g>
        <g id="lul-circle_lul-district_940gzzluhsk">
          <rect id="lul-district_940gzzluhsk" x="389.6" y="475.6" fill="#00853F" width="1.5" height="1.5" />
        </g>
        <g id="lul-circle_lul-district_940gzzlubwt">
          <rect id="lul-district_940gzzlubwt" x="389.6" y="423.1" fill="#00853F" width="1.5" height="1.5" />
        </g>
        <g id="lul-district_lul-hammersmith-city_940gzzlusgn">
          <rect
            id="lul-district_940gzzlusgn"
            x="742.5"
            y="403"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -67.8256 643.8471)"
            fill="#00853F"
            width="1.5"
            height="1.5"
          />
        </g>
        <g id="lul-district_940gzzluade_00000053531637110557932720000000913193970813946283_">
          <rect
            id="lul-district_940gzzluade"
            x="712.3"
            y="428"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -94.3275 629.7523)"
            fill="#00853F"
            width="1.5"
            height="1.5"
          />
        </g>
        <g id="lul-district_lul-hammersmith-city_940gzzluplw">
          <rect
            id="lul-district_940gzzluplw"
            x="875.2"
            y="393.1"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -21.9474 734.7179)"
            fill="#00853F"
            width="1.5"
            height="1.5"
          />
          <rect
            id="lul-hammersmith-city_940gzzluplw"
            x="873.6"
            y="391.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -21.2688 733.1571)"
            fill="#F386A1"
            width="1.5"
            height="1.5"
          />
        </g>
        <g id="lul-district_lul-hammersmith-city_940gzzluupk">
          <rect
            id="lul-district_940gzzluupk"
            x="888"
            y="380.3"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.1234 740.0315)"
            fill="#00853F"
            width="1.5"
            height="1.5"
          />
          <rect
            id="lul-hammersmith-city_940gzzluupk"
            x="886.4"
            y="378.7"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -8.4602 738.4303)"
            fill="#F386A1"
            width="1.5"
            height="1.5"
          />
        </g>
        <rect
          id="lul-district_940gzzlubec"
          x="930.4"
          y="337.8"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 33.3146 757.5812)"
          fill="#00853F"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-district_940gzzludge"
          x="952.1"
          y="316.1"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 55.0048 766.5839)"
          fill="#00853F"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-district_940gzzluhch"
          x="976.4"
          y="291.9"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 79.2346 776.6049)"
          fill="#00853F"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-district_940gzzluupb"
          x="986.3"
          y="281.9"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 89.2015 780.7336)"
          fill="#00853F"
          width="1.5"
          height="1.5"
        />
        <rect id="lul-district_940gzzlupsg" x="374" y="576.5" fill="#00853F" width="1.5" height="1.5" />
        <rect id="lul-district_940gzzluepy" x="374" y="604.2" fill="#00853F" width="1.5" height="1.5" />
        <rect id="lul-district_940gzzlucwp" x="234.1" y="514.5" fill="#00853F" width="1.5" height="1.5" />
        <rect id="lul-district_940gzzluwkn" x="363.7" y="514.5" fill="#00853F" width="1.5" height="1.5" />
        <rect id="lul-district_940gzzlusfb" x="291.9" y="514.5" fill="#00853F" width="1.5" height="1.5" />
        <rect id="lul-district_940gzzlurvp" x="317.2" y="514.5" fill="#00853F" width="1.5" height="1.5" />
        <rect
          id="lul-hammersmith-city_940gzzlusgn"
          x="740.9"
          y="401.4"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -67.1516 642.2825)"
          fill="#F386A1"
          width="1.5"
          height="1.5"
        />
      </g>
      <g id="line-metropolitan" className="line">
        <path
          id="lul-metropolitan_940gzzlucsm_940gzzlucal"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M107.4,147l11.5,11.5c1.2,1.2,3.7,2.3,5.4,2.3c1.7,0,17.9,0,17.9,0"
        />
        <rect id="lul-metropolitan_940gzzluwaf" x="198.1" y="163.8" fill="#97005E" width="5.4" height="1.5" />
        <line
          id="lul-metropolitan_940gzzluwhw_940gzzluhoh"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="250.3"
          y1="261.2"
          x2="278.5"
          y2="261.2"
        />
        <path
          id="lul-metropolitan_940gzzluryl_940gzzluwhw"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M216.7,256.2l2.7,2.7c1.2,1.2,3.7,2.3,5.4,2.3h27"
        />
        <line
          id="lul-metropolitan_940gzzlueae_940gzzluryl"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="205.9"
          y1="245.5"
          x2="216.7"
          y2="256.2"
        />
        <line
          id="lul-metropolitan_940gzzlursm_940gzzlueae"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="194.2"
          y1="233.8"
          x2="207"
          y2="246.6"
        />
        <path
          id="lul-metropolitan_940gzzlursp_940gzzlursm"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M174.2,229.4h12.1c2.1,0,4.8,1.2,6.3,2.8l2.7,2.7"
        />
        <g id="lul-metropolitan_940gzzluick_940gzzlursp">
          <line
            id="lul-metropolitan_940gzzluick_940gzzlursp"
            fill="none"
            stroke="#97005E"
            strokeWidth="2.2707"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="148.8"
            y1="229.4"
            x2="175.7"
            y2="229.4"
          />
        </g>
        <line
          id="lul-metropolitan_940gzzluhgd_940gzzluick"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="132.2"
          y1="229.4"
          x2="148.8"
          y2="229.4"
        />
        <line
          id="lul-metropolitan_940gzzluuxb_940gzzluhgd"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="112"
          y1="229.4"
          x2="132.2"
          y2="229.4"
        />
        <line
          id="lul-metropolitan_940gzzluams_940gzzlucal"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="144.3"
          y1="160.7"
          x2="90.5"
          y2="160.7"
        />
        <path
          id="lul-metropolitan_940gzzlulvt_940gzzluald"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M645.8,425.2h40.7c1.5,0,2.9,0.6,3.9,1.6c1,1,1.6,2.4,1.6,3.9v15.7"
        />
        <line
          id="lul-metropolitan_940gzzlubbn_940gzzlumgt_00000167392832050413192100000011799457991165312406_"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="611.4"
          y1="408"
          x2="624.9"
          y2="421.5"
        />
        <path
          id="lul-metropolitan_940gzzlulvt_940gzzlumgt"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M624.9,421.5l0.7,0.8c1.9,1.9,4.4,2.9,7.1,2.9h3.9h0.4h8.8"
        />
        <line
          id="lul-metropolitan_940gzzlufcn_940gzzlubbn"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="598.5"
          y1="395.1"
          x2="611.7"
          y2="408.3"
        />
        <path
          id="lul-metropolitan_940gzzluksx_940gzzlufcn"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M578,383.6l6.7,0c1.5,0,2.9,0.6,3.9,1.6l9.9,9.9"
        />
        <line
          id="lul-metropolitan_940gzzluesq_940gzzluksx"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="524.8"
          y1="383.6"
          x2="578"
          y2="383.6"
        />
        <line
          id="lul-metropolitan_940gzzlugps_940gzzluesq"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="491.7"
          y1="383.6"
          x2="526.3"
          y2="383.6"
        />
        <path
          id="lul-metropolitan_940gzzlubst_940gzzlugps"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M472.8,380.6l0.7,0.7c1.2,1.2,3.8,2.1,5.4,2.3l14.2,0"
        />
        <line
          id="lul-metropolitan_940gzzlufyr_940gzzlubst"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="429.2"
          y1="336.9"
          x2="472.8"
          y2="380.6"
        />
        <line
          id="lul-metropolitan_940gzzluwyp_940gzzlufyr"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="366.6"
          y1="274.4"
          x2="429.2"
          y2="336.9"
        />
        <path
          id="lul-metropolitan_940gzzluprd_940gzzluwyp"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M339.8,261.2l10.4,0c1.8,0,4.2,1,5.4,2.2l10.9,10.9"
        />
        <line
          id="lul-metropolitan_940gzzlunkp_940gzzluprd"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="305"
          y1="261.2"
          x2="341.3"
          y2="261.2"
        />
        <line
          id="lul-metropolitan_940gzzluhoh_940gzzlunkp"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="278.4"
          y1="261.2"
          x2="305"
          y2="261.2"
        />
        <path
          id="lul-metropolitan_940gzzlunha_940gzzluhoh"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M248.9,242.8L265,259c1.2,1.2,3.7,2.3,5.4,2.3l8,0"
        />
        <line
          id="lul-metropolitan_940gzzlupnr_940gzzlunha"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="239.9"
          y1="233.9"
          x2="250"
          y2="243.9"
        />
        <line
          id="lul-metropolitan_940gzzlunwh_940gzzlupnr"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="227.8"
          y1="221.7"
          x2="239.9"
          y2="233.9"
        />
        <line
          id="lul-metropolitan_940gzzlunow_940gzzlunwh"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="217"
          y1="210.9"
          x2="228.8"
          y2="222.7"
        />
        <line
          id="lul-metropolitan_940gzzlumpk_940gzzlunow"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="206.2"
          y1="200.1"
          x2="218"
          y2="211.9"
        />
        <line
          id="lul-metropolitan_940gzzlurkw_940gzzlumpk"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="190.7"
          y1="184.6"
          x2="207.2"
          y2="201.1"
        />
        <line
          id="lul-metropolitan_940gzzlucyd_940gzzlurkw"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="177.2"
          y1="171.1"
          x2="191.8"
          y2="185.7"
        />
        <path
          id="lul-metropolitan_940gzzlucal_940gzzlucyd"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M144.3,160.7h19.4c1.8,0,4.2,1,5.4,2.3l8.1,8.1"
        />
        <path
          id="lul-metropolitan_940gzzlucxy_940gzzlumpk"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M200.7,178.4l0,8.6l0,4.4c0,1.8,1,4.2,2.3,5.4c1,1,4.3,4.3,4.3,4.3"
        />
        <line
          id="lul-metropolitan_940gzzluwaf_940gzzlucxy"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="200.7"
          y1="163.8"
          x2="200.7"
          y2="179.9"
        />
        <rect id="lul-metropolitan_940gzzlucxy" x="201.8" y="178.4" fill="#97005E" width="1.5" height="1.5" />
        <rect
          id="lul-metropolitan_940gzzlurkw"
          x="189.2"
          y="185.7"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -76.2375 188.9303)"
          fill="#97005E"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-metropolitan_940gzzlumpk"
          x="207.3"
          y="198.5"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -79.9787 205.477)"
          fill="#97005E"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-metropolitan_940gzzlunow"
          x="218.1"
          y="209.3"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -84.4371 216.2676)"
          fill="#97005E"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-metropolitan_940gzzlunwh"
          x="228.9"
          y="220.1"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -88.9121 227.0678)"
          fill="#97005E"
          width="1.5"
          height="1.5"
        />
        <rect
          id="lul-metropolitan_940gzzlunha"
          x="250"
          y="241.3"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -97.6894 248.1952)"
          fill="#97005E"
          width="1.5"
          height="1.5"
        />
        <rect id="lul-metropolitan_940gzzluwhw" x="250.3" y="262.3" fill="#97005E" width="1.5" height="1.5" />
        <g id="lul-metropolitan_lul-piccadilly_940gzzlursp">
          <rect id="lul-metropolitan_940gzzlursp" x="174.2" y="226.8" fill="#97005E" width="1.5" height="1.5" />
          <rect
            id="lul-piccadilly_940gzzlursp"
            x="174.2"
            y="229.9"
            fill="#1C3F94"
            width="1.5"
            height="1.5"
            className="blue-fill"
          />
        </g>
        <g id="lul-metropolitan_lul-piccadilly_940gzzlursm">
          <rect
            id="lul-metropolitan_940gzzlursm"
            x="195.3"
            y="232.2"
            transform="matrix(0.707 -0.7072 0.7072 0.707 -107.3249 206.9091)"
            fill="#97005E"
            width="1.5"
            height="1.5"
          />
          <rect
            id="lul-piccadilly_940gzzlursm"
            x="193.1"
            y="234.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -109.5915 205.9444)"
            fill="#1C3F94"
            width="1.5"
            height="1.5"
            className="blue-fill"
          />
        </g>
        <g id="lul-metropolitan_lul-piccadilly_940gzzlueae">
          <rect
            id="lul-metropolitan_940gzzlueae"
            x="207"
            y="244"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -112.1917 218.6145)"
            fill="#97005E"
            width="1.5"
            height="1.5"
          />
          <rect
            id="lul-piccadilly_940gzzlueae"
            x="204.8"
            y="246.2"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -114.4371 217.672)"
            fill="#1C3F94"
            width="1.5"
            height="1.5"
            className="blue-fill"
          />
        </g>
        <rect id="lul-metropolitan_940gzzluprd" x="339.8" y="258.6" fill="#97005E" width="1.5" height="1.5" />
        <g id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlugps">
          <rect id="lul-hammersmith-city_940gzzlugps" x="491.7" y="380.2" fill="#F386A1" width="1.5" height="1.5" />
          <rect id="lul-circle_940gzzlugps" x="491.7" y="382.4" fill="#FFD200" width="1.5" height="1.5" />
          <rect id="lul-metropolitan_940gzzlugps" x="491.7" y="384.7" fill="#97005E" width="1.5" height="1.5" />
        </g>
        <g id="lul-circle_lul-metropolitan_940gzzluald">
          <rect id="lul-metropolitan_940gzzluald" x="689.4" y="445" fill="#97005E" width="1.5" height="1.5" />
          <rect id="lul-circle_940gzzluald" x="691.7" y="445" fill="#FFD200" width="1.5" height="1.5" />
        </g>
        <g>
          <line
            fill="none"
            stroke="#F1F2F2"
            strokeWidth="2.948"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="161.9"
            y1="227.8"
            x2="161.9"
            y2="230.7"
          />
          <line
            fill="none"
            stroke="#EE3124"
            strokeWidth="2.2706"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            x1="161.9"
            y1="227.8"
            x2="161.9"
            y2="230.7"
          />
        </g>
      </g>
      <g id="station-names">
        <text
          id="station-bethnal-green"
          transform="matrix(1 0 0 1 739.5474 375.0828)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Bethnal Green
        </text>
        <text
          id="station-cambridge-heath"
          transform="matrix(1 0 0 1 746.8243 367.0745)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Cambridge Heath
        </text>
        <text
          id="station-london-fields"
          transform="matrix(1 0 0 1 751.6514 356.5692)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          London Fields
        </text>
        <g id="station-rectory-road">
          <text id="station-rectory-road" transform="matrix(1 0 0 1 742.4007 306.2911)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Rectory
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Road
            </tspan>
          </text>
        </g>
        <text
          id="station-wood-street"
          transform="matrix(1 0 0 1 789.1305 232.9279)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Wood Street
        </text>
        <text
          id="station-bruce-grove"
          transform="matrix(1 0 0 1 717.8124 226.8038)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Bruce Grove
        </text>
        <text
          id="station-white-hart-lane"
          transform="matrix(1 0 0 1 718.9723 216.7298)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          White Hart Lane
        </text>
        <text
          id="station-silver-street"
          transform="matrix(1 0 0 1 717.8124 205.1583)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Silver Street
        </text>
        <text
          id="station-southbury"
          transform="matrix(1 0 0 1 726.2225 179.9966)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Southbury
        </text>
        <text
          id="station-turkey-street"
          transform="matrix(1 0 0 1 739.4305 166.9815)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Turkey Street
        </text>
        <text
          id="station-theobalds-grove"
          transform="matrix(1 0 0 1 752.0477 154.5357)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Theobalds Grove
        </text>
        <text
          id="station-enfield-town"
          transform="matrix(1 0 0 1 680.3973 150.3345)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Enfield Town
        </text>
        <text id="station-stamford-hill" transform="matrix(1 0 0 1 717.8124 280.4867)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Stamford
          </tspan>
          <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
            Hill
          </tspan>
        </text>
        <text id="station-bush-hill-park" transform="matrix(1 0 0 1 689.9598 162.7379)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Bush Hill
          </tspan>
          <tspan x="10.1" y="4.5" fill="#1C3F94" className="blue-fill">
            Park
          </tspan>
        </text>
        <text
          id="station-highams-park"
          transform="matrix(1 0 0 1 789.6979 207.6988)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Highams Park
        </text>
        <text
          id="station-chingford"
          transform="matrix(1 0 0 1 789.776 180.9871)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Chingford
        </text>
        <g id="station-clapton">
          <text
            id="station-clapton"
            transform="matrix(1 0 0 1 765.4576 311.5362)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Clapton
          </text>
        </g>
        <g id="station-st-james-street">
          <text
            id="station-st-james-street"
            transform="matrix(1 0 0 1 774.7269 302.2621)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            St James Street
          </text>
        </g>
        <g id="station-stoke-newington">
          <text id="station-stoke-newington" transform="matrix(1 0 0 1 728.4773 292.2455)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Stoke
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Newington
            </tspan>
          </text>
        </g>
        <g id="station-hackney-downs">
          <g id="station-hackney-downs">
            <text transform="matrix(1 0 0 1 724.8032 327.7218)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Hackney
              </tspan>
              <tspan x="3.4" y="4.5" fill="#1C3F94" className="blue-fill">
                Downs
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-edmonton-green">
          <text
            id="station-edmonton-green"
            transform="matrix(1 0 0 1 718.8446 193.8356)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Edmonton Green
          </text>
        </g>
        <g id="station-cheshunt">
          <text
            id="station-cheshunt"
            transform="matrix(1 0 0 1 764.6307 140.6885)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Cheshunt
          </text>
        </g>
        <g id="station-ilford">
          <text
            id="station-ilford"
            transform="matrix(1 0 0 1 907.1184 287.0277)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Ilford
          </text>
        </g>
        <g id="station-goodmayes">
          <text
            id="station-goodmayes"
            transform="matrix(1 0 0 1 923.9969 269.1395)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Goodmayes
          </text>
        </g>
        <g id="station-chadwell-heath">
          <text id="station-chadwell-heath" transform="matrix(1 0 0 1 941.3464 251.9344)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Chadwell{' '}
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Heath
            </tspan>
          </text>
        </g>
        <g id="station-romford">
          <g id="station-romford">
            <text
              id="910GROMFORD_label"
              transform="matrix(1 0 0 1 959.7061 231.7549)"
              fill="#1C3F94"
              className="blue-fill"
              fontSize={4}
            >
              Romford
            </text>
          </g>
        </g>
        <g id="station-gidea-park">
          <text
            id="station-gidea-park"
            transform="matrix(1 0 0 1 969.2869 224.3816)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Gidea Park
          </text>
        </g>
        <g id="station-harold-wood">
          <text
            id="station-harold-wood"
            transform="matrix(1 0 0 1 979.3634 214.9132)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Harold Wood
          </text>
        </g>
        <g id="station-shenfield">
          <g id="station-shenfield">
            <text
              id="910GSHENFLD_label"
              transform="matrix(1 0 0 1 1001.6055 160.4576)"
              fill="#1C3F94"
              className="blue-fill"
              fontSize={4}
            >
              Shenfield
            </text>
          </g>
        </g>
        <g id="station-brentwood">
          <text
            id="station-brentwood"
            transform="matrix(1 0 0 1 1004.8018 189.0142)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Brentwood
          </text>
        </g>
        <g id="station-seven-kings">
          <text
            id="station-seven-kings"
            transform="matrix(1 0 0 1 916.7372 276.9848)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Seven Kings
          </text>
        </g>
        <text
          id="station-emerson-park"
          transform="matrix(1 0 0 1 977.2217 247.1133)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Emerson Park
        </text>
        <g id="station-maryland">
          <text
            id="station-maryland"
            transform="matrix(1 0 0 1 866.7809 327.8037)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Maryland
          </text>
        </g>
        <g id="station-manor-park">
          <text
            id="station-manor-park"
            transform="matrix(1 0 0 1 898.8948 295.336)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Manor Park
          </text>
        </g>
        <g id="station-forest-gate">
          <text id="station-forest-gate" transform="matrix(1 0 0 1 879.0323 311.8677)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Forest{' '}
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Gate
            </tspan>
          </text>
        </g>
        <g id="station-chorleywood">
          <text
            id="station-chorleywood"
            transform="matrix(1 0 0 1 143.3916 177.1592)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Chorleywood
          </text>
        </g>
        <g id="station-rickmansworth">
          <text
            id="station-rickmansworth"
            transform="matrix(1 0 0 1 154.4023 190.1495)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Rickmansworth
          </text>
        </g>
        <g id="station-chesham">
          <text
            id="station-chesham"
            transform="matrix(1 0 0 1 84.9634 145.7715)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Chesham
          </text>
        </g>
        <g id="station-amersham">
          <text
            id="station-amersham"
            transform="matrix(1 0 0 1 86.6807 168.92)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Amersham
          </text>
        </g>
        <g id="station-chalfont-and-latimer">
          <text id="station-chalfont-and-latimer" transform="matrix(1 0 0 1 132.4688 151.2554)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Chalfont and
            </tspan>
            <tspan x="3.5" y="4.4" fill="#1C3F94" className="blue-fill">
              Latimer
            </tspan>
          </text>
        </g>
        <text
          id="station-moor-park"
          transform="matrix(1 0 0 1 208.9727 198.1207)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Moor Park
        </text>
        <text
          id="station-watford"
          transform="matrix(1 0 0 1 204.3291 166.0284)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Watford
        </text>
        <text
          id="station-croxley"
          transform="matrix(1 0 0 1 204.3291 180.7535)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Croxley
        </text>
        <text
          id="station-northwood"
          transform="matrix(1 0 0 1 219.7192 208.917)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Northwood
        </text>
        <text
          id="station-northwood-hills"
          transform="matrix(1 0 0 1 230.519 219.7388)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Northwood Hills
        </text>
        <text
          id="station-pinner"
          transform="matrix(1 0 0 1 242.6323 230.3799)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Pinner
        </text>
        <text
          id="station-north-harrow"
          transform="matrix(1 0 0 1 251.6562 240.8555)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          North Harrow
        </text>
        <g id="station-northwick-park">
          <text id="station-northwick-park" transform="matrix(1 0 0 1 293.8163 268.7574)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Northwick
            </tspan>
            <tspan x="6.9" y="4.5" fill="#1C3F94" className="blue-fill">
              Park
            </tspan>
          </text>
        </g>
        <g id="station-west-harrow">
          <text id="station-west-harrow" transform="matrix(1 0 0 1 245.3423 267.8955)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              West
            </tspan>
            <tspan x="-2.6" y="4.5" fill="#1C3F94" className="blue-fill">
              Harrow
            </tspan>
          </text>
        </g>
        <g id="station-ickenham">
          <text
            id="station-ickenham"
            transform="matrix(1 0 0 1 137.3481 238.3123)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Ickenham
          </text>
        </g>
        <g id="station-uxbridge">
          <text
            id="station-uxbridge"
            transform="matrix(1 0 0 1 101.2875 238.3125)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Uxbridge
          </text>
        </g>
        <text
          id="station-hillingdon"
          transform="matrix(1 0 0 1 120.2625 225.8597)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Hillingdon
        </text>
        <text
          id="station-ruislip"
          transform="matrix(1 0 0 1 167.4644 225.1822)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Ruislip
        </text>
        <text
          id="station-ruislip-manor"
          transform="matrix(1 0 0 1 196.8789 231.8189)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Ruislip Manor
        </text>
        <text
          id="station-eastcote"
          transform="matrix(1 0 0 1 208.6021 243.5435)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Eastcote
        </text>
        <g id="station-harrow--on-the-hill">
          <g id="station-harrow--on-the-hill">
            <text transform="matrix(1 0 0 1 269.2989 251.8374)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Harrow-
              </tspan>
              <tspan x="-3" y="4.5" fill="#1C3F94" className="blue-fill">
                on-the-Hill
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-preston-road">
          <text
            id="station-preston-road"
            transform="matrix(1 0 0 1 325.8085 256.9566)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Preston Road
          </text>
        </g>
        <g id="station-wembley-park">
          <text
            id="station-wembley-park"
            transform="matrix(1 0 0 1 331.315 279.6885)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Wembley Park
          </text>
        </g>
        <text
          id="station-stanmore"
          transform="matrix(1 0 0 1 374.896 215.0676)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Stanmore
        </text>
        <text
          id="station-canons-park"
          transform="matrix(1 0 0 1 373.8623 226.4571)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Canons Park
        </text>
        <text
          id="station-queensbury"
          transform="matrix(1 0 0 1 373.8623 237.8569)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Queensbury
        </text>
        <text
          id="station-kingsbury"
          transform="matrix(1 0 0 1 374.6577 249.2638)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Kingsbury
        </text>
        <text
          id="station-neasden"
          transform="matrix(1 0 0 1 382.7 266.9019)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Neasden
        </text>
        <text
          id="station-dollis-hill"
          transform="matrix(1 0 0 1 391.6365 275.7237)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Dollis Hill
        </text>
        <text
          id="station-willesden-green"
          transform="matrix(1 0 0 1 400.1682 284.5418)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Willesden Green
        </text>
        <text
          id="station-kilburn"
          transform="matrix(1 0 0 1 410.4228 293.2151)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Kilburn
        </text>
        <g id="station-baker-street">
          <text id="station-baker-street" transform="matrix(1 0 0 1 447.395 395.1018)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Baker{' '}
            </tspan>
            <tspan x="-1.2" y="4.5" fill="#1C3F94" className="blue-fill">
              Street
            </tspan>
          </text>
        </g>
        <text
          id="station-aldgate"
          transform="matrix(1 0 0 1 671.5918 446.9772)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Aldgate
        </text>
        <text
          id="station-barbican"
          transform="matrix(1 0 0 1 591.5282 412.1575)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Barbican
        </text>
        <text id="station-great-portland-street" transform="matrix(1 0 0 1 476.081 390.1348)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Great Portland
          </tspan>
          <tspan x="9.6" y="4.5" fill="#1C3F94" className="blue-fill">
            Street
          </tspan>
        </text>
        <g id="station-farringdon">
          <text
            id="station-farringdon"
            transform="matrix(1 0 0 1 603.2601 390.5073)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Farringdon
          </text>
        </g>
        <g id="940GZZLULVT_label_00000072274880283774296780000006128839642022291385_">
          <text id="station-liverpool-street" transform="matrix(1 0 0 1 660.8828 393.6744)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Liverpool
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Street
            </tspan>
          </text>
        </g>
        <g id="station-moorgate">
          <g id="station-moorgate">
            <text transform="matrix(1 0 0 1 603.4033 425.4646)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Moorgate
            </text>
          </g>
        </g>
        <g id="station-kings-cross-andst-pancras-international">
          <text
            id="station-kings-cross-andst-pancras-international"
            transform="matrix(1 0 0 1 598.285 359.6533)"
            fontSize={4}
          >
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              King’s Cross
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              andSt Pancras{' '}
            </tspan>
            <tspan x="0" y="9.1" fill="#1C3F94" className="blue-fill">
              International
            </tspan>
          </text>
        </g>
        <g id="940GZZLUESQ_label">
          <g>
            <text id="station-euston-square" transform="matrix(1 0 0 1 513.0743 388.9251)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Euston
              </tspan>
              <tspan x="0.1" y="4.5" fill="#1C3F94" className="blue-fill">
                Square
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-mansion-house">
          <text
            id="station-mansion-house"
            transform="matrix(1 0 0 1 568.6135 487.5446)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Mansion House
          </text>
        </g>
        <g id="station-monument">
          <text
            id="station-monument"
            transform="matrix(1 0 0 1 638.7191 476.9512)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Monument
          </text>
        </g>
        <g id="station-south-kensington">
          <text id="station-south-kensington" transform="matrix(1 0 0 1 414.957 521.0352)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              South
            </tspan>
            <tspan x="-5.9" y="4.5" fill="#1C3F94" className="blue-fill">
              Kensington
            </tspan>
          </text>
        </g>
        <g id="station-sloane-square">
          <text id="station-sloane-square" transform="matrix(1 0 0 1 441.1669 520.0626)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Sloane
            </tspan>
            <tspan x="-0.2" y="4.5" fill="#1C3F94" className="blue-fill">
              Square
            </tspan>
          </text>
        </g>
        <g id="station-cannon-street">
          <g id="station-cannon-street">
            <text transform="matrix(1 0 0 1 579.0484 479.9398)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Cannon Street
            </text>
          </g>
        </g>
        <g id="station-westminster">
          <g id="station-westminster">
            <text transform="matrix(1 0 0 1 483.1724 505.8081)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Westminster
            </text>
          </g>
        </g>
        <text id="station-gloucester-road" transform="matrix(1 0 0 1 395.3994 497.8389)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Gloucester
          </tspan>
          <tspan x="6.6" y="4.5" fill="#1C3F94" className="blue-fill">
            Road
          </tspan>
        </text>
        <text id="station-st-james-park" transform="matrix(1 0 0 1 478.5209 519.7138)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            S
          </tspan>
          <tspan x="2.5" y="0" fill="#1C3F94" className="blue-fill">
            t
          </tspan>
          <tspan x="4.5" y="0" fill="#1C3F94" className="blue-fill" />
          <tspan x="5.4" y="0" fill="#1C3F94" className="blue-fill">
            Jam
          </tspan>
          <tspan x="14.5" y="0" fill="#1C3F94" className="blue-fill">
            e
          </tspan>
          <tspan x="17.1" y="0" fill="#1C3F94" className="blue-fill">
            s
          </tspan>
          <tspan x="19.3" y="0" fill="#1C3F94" className="blue-fill">
            ’
          </tspan>
          <tspan x="20.2" y="0" fill="#1C3F94" className="blue-fill">
            s
          </tspan>
          <tspan x="6.4" y="4.5" fill="#1C3F94" className="blue-fill">
            Park
          </tspan>
        </text>
        <text
          id="station-temple"
          transform="matrix(1 0 0 1 566.819 520.0397)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Temple
        </text>
        <g id="station-embankment">
          <g id="station-embankment">
            <text transform="matrix(1 0 0 1 546.2826 508.0914)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Embankment
            </text>
          </g>
        </g>
        <g id="station-blackfriars">
          <g id="station-blackfriars">
            <text transform="matrix(1 0 0 1 571.912 495.4815)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Blackfriars
            </text>
          </g>
        </g>
        <text
          id="station-bayswater"
          transform="matrix(1 0 0 1 394.5918 425.3695)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Bayswater
        </text>
        <text
          id="station-high-street-kensington"
          transform="matrix(1 0 0 1 394.4595 477.6826)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          High Street Kensington
        </text>
        <g id="station-notting-hill-gate">
          <text id="station-notting-hill-gate" transform="matrix(1 0 0 1 393.1865 444.0772)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Notting
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Hill Gate
            </tspan>
          </text>
        </g>
        <g id="station-paddington">
          <text
            id="station-paddington"
            transform="matrix(1 0 0 1 392.5645 409.9308)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Paddington
          </text>
        </g>
        <g id="940GZZLUERC_label">
          <text
            id="station-edgware-road"
            transform="matrix(1 0 0 1 421.4268 388.0985)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Edgware Road
          </text>
        </g>
        <text
          id="station-watford-high-street"
          transform="matrix(1 0 0 1 325.9344 162.2295)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Watford High Street
        </text>
        <text
          id="station-carpenders-park"
          transform="matrix(1 0 0 1 327.0379 190.5625)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Carpenders Park
        </text>
        <text
          id="station-hatch-end"
          transform="matrix(1 0 0 1 326.4075 203.4351)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Hatch End
        </text>
        <text
          id="station-kenton"
          transform="matrix(1 0 0 1 325.4317 247.4185)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Kenton
        </text>
        <text
          id="station-headstone-lane"
          transform="matrix(1 0 0 1 326.4075 216.6788)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Headstone Lane
        </text>
        <g id="station-harrow-and-wealdstone">
          <text id="station-harrow-and-wealdstone" transform="matrix(1 0 0 1 294.8853 225.0679)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Harrow and
            </tspan>
            <tspan x="-5.4" y="4.5" fill="#1C3F94" className="blue-fill">
              Wealdstone
            </tspan>
          </text>
        </g>
        <g id="station-bushey">
          <text
            id="station-bushey"
            transform="matrix(1 0 0 1 327.2308 176.9883)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Bushey
          </text>
        </g>
        <g id="station-watford-junction">
          <text
            id="station-watford-junction"
            transform="matrix(1 0 0 1 326.6713 147.7915)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Watford Junction
          </text>
        </g>
        <text
          id="station-north-wembley"
          transform="matrix(1 0 0 1 279.8281 289.1079)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          North Wembley
        </text>
        <text
          id="station-south-kenton"
          transform="matrix(1 0 0 1 285.1128 279.9156)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          South Kenton
        </text>
        <text
          id="station-kensal-green"
          transform="matrix(1 0 0 1 325.5396 334.6352)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Kensal Green
        </text>
        <text
          id="station-queens-park"
          transform="matrix(1 0 0 1 325.7194 343.4492)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Queen’s Park
        </text>
        <text
          id="station-stonebridge-park"
          transform="matrix(1 0 0 1 277.9702 307.4702)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Stonebridge Park
        </text>
        <text
          id="station-harlesden"
          transform="matrix(1 0 0 1 293.1284 316.6612)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Harlesden
        </text>
        <text
          id="station-willesden-junction"
          transform="matrix(1 0 0 1 274.6964 325.4339)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Willesden Junction
        </text>
        <g id="station-wembley-central">
          <text
            id="station-wembley-central"
            transform="matrix(1 0 0 1 277.1288 298.2886)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Wembley Central
          </text>
        </g>
        <g id="station-kilburn-park">
          <text
            id="station-kilburn-park"
            transform="matrix(1 0 0 1 292.2905 367.9502)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Kilburn Park
          </text>
        </g>
        <g id="station-marylebone">
          <g id="station-marylebone">
            <text transform="matrix(1 0 0 1 420.9531 368.9326)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Marylebone
            </text>
          </g>
        </g>
        <g id="station-warwick-avenue">
          <text id="station-warwick-avenue" transform="matrix(1 0 0 1 332.7734 380.2793)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Warwick
            </tspan>
            <tspan x="1.3" y="4.4" fill="#1C3F94" className="blue-fill">
              Avenue
            </tspan>
          </text>
        </g>
        <g id="station-maida-vale">
          <text
            id="station-maida-vale"
            transform="matrix(1 0 0 1 303.7798 376.1397)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Maida Vale
          </text>
        </g>
        <g id="station-edgware-road">
          <g id="station-edgware-road">
            <text transform="matrix(1 0 0 1 384.9407 369.7022)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Edgware Road
            </text>
          </g>
        </g>
        <g id="940GZZLUEAC_label_00000163752848149439605700000011630099422352293506_">
          <g id="station-elephant-and-castle">
            <text transform="matrix(1 0 0 1 555.8326 619.5723)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Elephant and Castle
            </text>
          </g>
        </g>
        <g id="station-regents-park">
          <text
            id="station-regents-park"
            transform="matrix(1 0 0 1 484.71 407.131)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Regent’s Park
          </text>
        </g>
        <g id="station-oxford-circus">
          <text id="station-oxford-circus" transform="matrix(1 0 0 1 498.8727 438.7169)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Oxford
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Circus
            </tspan>
          </text>
        </g>
        <g id="station-piccadilly-circus">
          <text id="station-piccadilly-circus" transform="matrix(1 0 0 1 494.9609 472.5049)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Piccadilly
            </tspan>
            <tspan x="7.2" y="4.5" fill="#1C3F94" className="blue-fill">
              Circus
            </tspan>
          </text>
        </g>
        <g id="station-charing-cross">
          <g id="station-charing-cross">
            <text transform="matrix(1 0 0 1 514.9346 487.6963)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Charing
              </tspan>
              <tspan x="4.5" y="4.5" fill="#1C3F94" className="blue-fill">
                Cross
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-euston">
          <text
            id="station-euston"
            transform="matrix(1 0 0 1 517.741 370.5218)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Euston
          </text>
        </g>
        <g id="station-perivale">
          <text
            id="station-perivale"
            transform="matrix(1 0 0 1 177.5811 384.086)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Perivale
          </text>
        </g>
        <g id="station-hanger-lane">
          <text id="station-hanger-lane" transform="matrix(1 0 0 1 238.7823 409.6912)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Hanger
            </tspan>
            <tspan x="0" y="4.4" fill="#1C3F94" className="blue-fill">
              Lane
            </tspan>
          </text>
        </g>
        <text id="station-ruislip-gardens" transform="matrix(1 0 0 1 143.4473 264.7813)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Ruislip
          </tspan>
          <tspan x="-3.4" y="4.5" fill="#1C3F94" className="blue-fill">
            Gardens
          </tspan>
        </text>
        <g id="station-south-ruislip">
          <text
            id="station-south-ruislip"
            transform="matrix(1 0 0 1 128.4575 292.8112)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            South Ruislip
          </text>
        </g>
        <g id="station-greenford">
          <text
            id="station-greenford"
            transform="matrix(1 0 0 1 175.8243 352.7943)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Greenford
          </text>
        </g>
        <text
          id="station-northolt"
          transform="matrix(1 0 0 1 138.7222 317.822)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Northolt
        </text>
        <g id="station-west-ruislip">
          <text
            id="station-west-ruislip"
            transform="matrix(1 0 0 1 129.9106 215.1539)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            West Ruislip
          </text>
        </g>
        <g id="940GZZLUEBY_label">
          <text id="station-ealing-broadway" transform="matrix(1 0 0 1 196.8934 467.01)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Ealing
            </tspan>
            <tspan x="-8.8" y="4.5" fill="#1C3F94" className="blue-fill">
              Broadway
            </tspan>
          </text>
        </g>
        <g id="station-west-acton">
          <text id="station-west-acton" transform="matrix(1 0 0 1 243.0518 458.9366)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              West
            </tspan>
            <tspan x="-0.9" y="4.5" fill="#1C3F94" className="blue-fill">
              Acton
            </tspan>
          </text>
        </g>
        <g id="station-bond-street">
          <text id="station-bond-street" transform="matrix(1 0 0 1 466.5535 418.2907)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Bond{' '}
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Street
            </tspan>
          </text>
        </g>
        <g id="station-north-acton">
          <text id="station-north-acton" transform="matrix(1 0 0 1 278.7842 458.7862)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              North
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Acton
            </tspan>
          </text>
        </g>
        <g id="station-queensway">
          <text
            id="station-queensway"
            transform="matrix(1 0 0 1 402.6401 458.4678)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Queensway
          </text>
        </g>
        <g id="station-marble-arch">
          <text
            id="station-marble-arch"
            transform="matrix(1 0 0 1 414.2127 437.7537)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Marble Arch
          </text>
        </g>
        <g id="station-east-acton">
          <text id="station-east-acton" transform="matrix(1 0 0 1 297.3672 443.1123)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              East
            </tspan>
            <tspan x="-2" y="4.5" fill="#1C3F94" className="blue-fill">
              Acton
            </tspan>
          </text>
        </g>
        <g id="station-white-city">
          <text id="station-white-city" transform="matrix(1 0 0 1 316.5615 442.416)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              White
            </tspan>
            <tspan x="2.1" y="4.5" fill="#1C3F94" className="blue-fill">
              City
            </tspan>
          </text>
        </g>
        <g id="940GZZLUSBC_label">
          <g id="station-shepherds-bush">
            <text transform="matrix(1 0 0 1 345.6039 442.8057)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Shepherd’s
              </tspan>
              <tspan x="6.8" y="4.5" fill="#1C3F94" className="blue-fill">
                Bush
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-tottenham-court-road">
          <text id="station-tottenham-court-road" transform="matrix(1 0 0 1 539.1312 413.7653)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Tottenham
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Court{' '}
            </tspan>
            <tspan x="0" y="9.1" fill="#1C3F94" className="blue-fill">
              Road
            </tspan>
          </text>
        </g>
        <g id="940GZZLUBLG_label_00000024714998191336287410000017197292731094147221_">
          <text id="station-bethnal-green" transform="matrix(1 0 0 1 730.8867 382.396)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Bethnal{' '}
            </tspan>
            <tspan x="1.9" y="4.5" fill="#1C3F94" className="blue-fill">
              Green
            </tspan>
          </text>
        </g>
        <text
          id="station-mile-end"
          transform="matrix(1 0 0 1 765.3398 386.4014)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Mile End
        </text>
        <g id="station-holborn">
          <text
            id="station-holborn"
            transform="matrix(1 0 0 1 563.0166 439.3994)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Holborn
          </text>
        </g>
        <text
          id="station-st-pauls"
          transform="matrix(1 0 0 1 598.1855 459.6808)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          St Paul’s
        </text>
        <text
          id="station-bank"
          transform="matrix(1 0 0 1 639.7977 455.3154)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Bank
        </text>
        <g id="940GZZLUCHL_label_00000023251595683712646770000008491995693324426931_">
          <text
            id="station-chancery-lane"
            transform="matrix(1 0 0 1 590.0864 437.487)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Chancery Lane
          </text>
        </g>
        <text
          id="station-leytonstone"
          transform="matrix(1 0 0 1 848.4661 283.0747)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Leytonstone
        </text>
        <text
          id="station-leyton"
          transform="matrix(1 0 0 1 848.3216 313.1919)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Leyton
        </text>
        <g id="station-redbridge">
          <text
            id="station-redbridge"
            transform="matrix(1 0 0 1 861.0394 262.1783)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Redbridge
          </text>
        </g>
        <g id="station-gants-hill">
          <text id="station-gants-hill" transform="matrix(1 0 0 1 879.514 272.8526)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Gants
            </tspan>
            <tspan x="2.6" y="4.5" fill="#1C3F94" className="blue-fill">
              Hill
            </tspan>
          </text>
        </g>
        <g id="station-wanstead">
          <text
            id="station-wanstead"
            transform="matrix(1 0 0 1 847.3265 272.8526)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Wanstead
          </text>
        </g>
        <g id="station-stratford">
          <g id="station-stratford">
            <text transform="matrix(1 0 0 1 859.3545 341.5674)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Stratford
            </text>
          </g>
        </g>
        <text
          id="station-woodford"
          transform="matrix(1 0 0 1 848.9435 223.6998)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Woodford
        </text>
        <text
          id="station-south-woodford"
          transform="matrix(1 0 0 1 848.9795 235.2007)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          South Woodford
        </text>
        <text
          id="station-snaresbrook"
          transform="matrix(1 0 0 1 848.2132 247.024)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Snaresbrook
        </text>
        <text
          id="station-hainault"
          transform="matrix(1 0 0 1 896.6429 221.7066)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Hainault
        </text>
        <text
          id="station-fairlop"
          transform="matrix(1 0 0 1 896.1556 232.8008)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Fairlop
        </text>
        <text
          id="station-barkingside"
          transform="matrix(1 0 0 1 896.1556 243.8946)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Barkingside
        </text>
        <text id="station-newbury-park" transform="matrix(1 0 0 1 896.7503 255.0098)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Newbury
          </tspan>
          <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
            Park
          </tspan>
        </text>
        <g id="station-roding-valley">
          <text id="station-roding-valley" transform="matrix(1 0 0 1 850.7503 197.5982)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Roding
            </tspan>
            <tspan x="0.7" y="4.5" fill="#1C3F94" className="blue-fill">
              Valley
            </tspan>
          </text>
        </g>
        <g id="station-grange-hill">
          <text id="station-grange-hill" transform="matrix(1 0 0 1 878.1409 198.0357)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Grange
            </tspan>
            <tspan x="3.9" y="4.5" fill="#1C3F94" className="blue-fill">
              Hill
            </tspan>
          </text>
        </g>
        <g id="station-chigwell">
          <text
            id="station-chigwell"
            transform="matrix(1 0 0 1 864.2464 213.4068)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Chigwell
          </text>
        </g>
        <text
          id="station-theydon-bois"
          transform="matrix(1 0 0 1 880.757 151.8156)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Theydon Bois
        </text>
        <text
          id="station-epping"
          transform="matrix(1 0 0 1 889.0088 143.7236)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Epping
        </text>
        <text
          id="station-debden"
          transform="matrix(1 0 0 1 873.6655 159.2458)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Debden
        </text>
        <text
          id="station-loughton"
          transform="matrix(1 0 0 1 864.8181 166.9815)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Loughton
        </text>
        <text
          id="station-buckhurst-hill"
          transform="matrix(1 0 0 1 848.8361 181.835)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Buckhurst Hill
        </text>
        <text id="station-shepherds-bush-market" transform="matrix(1 0 0 1 304.127 474.1543)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Shepherd’s
          </tspan>
          <tspan x="-3.1" y="4.5" fill="#1C3F94" className="blue-fill">
            Bush Market
          </tspan>
        </text>
        <text
          id="station-goldhawk-road"
          transform="matrix(1 0 0 1 293.6108 487.0052)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Goldhawk Road
        </text>
        <text
          id="station-latimer-road"
          transform="matrix(1 0 0 1 338.3589 431.7432)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Latimer Road
        </text>
        <text
          id="station-ladbroke-grove"
          transform="matrix(1 0 0 1 338.2783 420.4483)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Ladbroke Grove
        </text>
        <g id="940GZZLURYO_label_00000003793351208489825200000011933650083906607748_">
          <text
            id="station-royal-oak"
            transform="matrix(1 0 0 1 354.021 397.1713)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Royal Oak
          </text>
        </g>
        <g id="940GZZLUWSP_label_00000007401145070561912850000017764133985094472599_">
          <text
            id="station-westbourne-park"
            transform="matrix(1 0 0 1 340.2546 411.1788)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Westbourne Park
          </text>
        </g>
        <text
          id="station-wood-lane"
          transform="matrix(1 0 0 1 304.3044 465.3506)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Wood Lane
        </text>
        <text
          id="station-hammersmith"
          transform="matrix(1 0 0 1 299.2287 500.7586)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Hammersmith
        </text>
        <g id="station-bow-road">
          <text id="station-bow-road" transform="matrix(1 0 0 1 808.4551 390.1797)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Bow
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Road
            </tspan>
          </text>
        </g>
        <g id="station-west-ham">
          <g id="station-west-ham">
            <text transform="matrix(1 0 0 1 858.0725 406.183)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                West{' '}
              </tspan>
              <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
                Ham
              </tspan>
            </text>
          </g>
        </g>
        <text
          id="station-whitechapel"
          transform="matrix(1 0 0 1 725.1417 426.7307)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Whitechapel
        </text>
        <g id="station-aldgate-east">
          <text id="station-aldgate-east" transform="matrix(1 0 0 1 693.8809 421.3047)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Aldgate
            </tspan>
            <tspan x="7.7" y="4.5" fill="#1C3F94" className="blue-fill">
              East
            </tspan>
          </text>
        </g>
        <g id="station-stepney-green">
          <text
            id="station-stepney-green"
            transform="matrix(1 0 0 1 744.1897 407.6277)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Stepney Green
          </text>
        </g>
        <g id="station-bromley--by-bow">
          <text id="station-bromley--by-bow" transform="matrix(1 0 0 1 822.9323 405.4617)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Bromley-
            </tspan>
            <tspan x="1.7" y="4.5" fill="#1C3F94" className="blue-fill">
              by-Bow
            </tspan>
          </text>
        </g>
        <g id="station-east-ham">
          <text
            id="station-east-ham"
            transform="matrix(1 0 0 1 901.2741 373.3636)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            East Ham
          </text>
        </g>
        <g id="station-plaistow">
          <text
            id="station-plaistow"
            transform="matrix(1 0 0 1 877.0867 398.2395)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Plaistow
          </text>
        </g>
        <g id="station-upton-park">
          <text id="station-upton-park" transform="matrix(1 0 0 1 889.9039 385.4252)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Upton
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Park
            </tspan>
          </text>
        </g>
        <g id="station-barking">
          <g id="station-barking">
            <text transform="matrix(1 0 0 1 911.7695 363.3457)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Barking
            </text>
          </g>
        </g>
        <g id="station-barking-riverside">
          <text transform="matrix(1 0 0 1 968.7126 412.1367)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Barking{' '}
            </tspan>
            <tspan x="-3.9" y="4.5" fill="#1C3F94" className="blue-fill">
              Riverside
            </tspan>
          </text>
        </g>
        <g id="station-elm-park">
          <text
            id="station-elm-park"
            transform="matrix(1 0 0 1 970.0654 306.9673)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Elm Park
          </text>
        </g>
        <g id="station-dagenham-east">
          <text id="station-dagenham-east" transform="matrix(1 0 0 1 954.1074 320.9927)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Dagenham
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              East
            </tspan>
          </text>
        </g>
        <g id="station-dagenham-heathway">
          <text
            id="station-dagenham-heathway"
            transform="matrix(1 0 0 1 942.709 333.8618)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Dagenham Heathway
          </text>
        </g>
        <g id="940GZZLUBEC_label_00000181052359354376063970000013128387211545016486_">
          <text
            id="station-becontree"
            transform="matrix(1 0 0 1 932.4449 342.64)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Becontree
          </text>
        </g>
        <g id="station-upney">
          <text
            id="station-upney"
            transform="matrix(1 0 0 1 923.3936 353.3467)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Upney
          </text>
        </g>
        <g id="station-upminster-bridge">
          <text
            id="station-upminster-bridge"
            transform="matrix(1 0 0 1 988.3926 286.5596)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Upminster Bridge
          </text>
        </g>
        <g id="station-hornchurch">
          <text
            id="station-hornchurch"
            transform="matrix(1 0 0 1 978.2539 296.7222)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Hornchurch
          </text>
        </g>
        <g id="station-upminster">
          <g id="station-upminster">
            <text transform="matrix(1 0 0 1 999.6113 276.2032)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Upminster
            </text>
          </g>
        </g>
        <text
          id="station-fulham-broadway"
          transform="matrix(1 0 0 1 332.3657 568.5635)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Fulham Broadway
        </text>
        <text
          id="station-parsons-green"
          transform="matrix(1 0 0 1 341.084 578.4304)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Parsons Green
        </text>
        <text
          id="station-east-putney"
          transform="matrix(1 0 0 1 347.3545 606.1768)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          East Putney
        </text>
        <text
          id="station-southfields"
          transform="matrix(1 0 0 1 347.0122 617.3594)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Southfields
        </text>
        <text
          id="station-wimbledon-park"
          transform="matrix(1 0 0 1 335.1259 628.4083)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Wimbledon Park
        </text>
        <g id="station-west-brompton">
          <text
            id="station-west-brompton"
            transform="matrix(1 0 0 1 329.4985 543.9073)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            West Brompton
          </text>
        </g>
        <g id="station-wimbledon">
          <text
            id="station-wimbledon"
            transform="matrix(1 0 0 1 346.3735 639.5206)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Wimbledon
          </text>
        </g>
        <g id="station-earls-court">
          <text id="station-earls-court" transform="matrix(1 0 0 1 379.7295 521.043)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Earl’s
            </tspan>
            <tspan x="-0.4" y="4.5" fill="#1C3F94" className="blue-fill">
              Court
            </tspan>
          </text>
        </g>
        <g id="940GZZLUCWP_label_00000168081458907113538460000015569336267004114874_">
          <text id="station-chiswick-park" transform="matrix(1 0 0 1 215.6736 520.7617)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Chiswick{' '}
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Park
            </tspan>
          </text>
        </g>
        <g id="940GZZLUTNG_label_00000058571578866066363490000010685679828990458774_">
          <text id="station-turnham-green" transform="matrix(1 0 0 1 260.9138 521.2543)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Turnham
            </tspan>
            <tspan x="3.3" y="4.5" fill="#1C3F94" className="blue-fill">
              Green
            </tspan>
          </text>
        </g>
        <g id="940GZZLUSFB_label_00000052062348490744112640000000149028624567158459_">
          <text id="station-stamford-brook" transform="matrix(1 0 0 1 282.343 519.7745)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Stamford
            </tspan>
            <tspan x="3.8" y="4.5" fill="#1C3F94" className="blue-fill">
              Brook
            </tspan>
          </text>
        </g>
        <g id="940GZZLURVP_label_00000005258619691244687160000003533797453874240658_">
          <text id="station-ravenscourt-park" transform="matrix(1 0 0 1 304.2829 519.7696)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Ravenscourt
            </tspan>
            <tspan x="8.9" y="4.5" fill="#1C3F94" className="blue-fill">
              Park
            </tspan>
          </text>
        </g>
        <g id="station-west-kensington">
          <text id="station-west-kensington" transform="matrix(1 0 0 1 353.7798 520.0518)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              West
            </tspan>
            <tspan x="-13.4" y="4.5" fill="#1C3F94" className="blue-fill">
              Kensington
            </tspan>
          </text>
        </g>
        <text id="station-barons-court" transform="matrix(1 0 0 1 343.8001 497.0796)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Barons
          </tspan>
          <tspan x="1.2" y="4.5" fill="#1C3F94" className="blue-fill">
            Court
          </tspan>
        </text>
        <text id="station-ealing-common" transform="matrix(1 0 0 1 200.3741 483.2966)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Ealing{' '}
          </tspan>
          <tspan x="-7.3" y="4.5" fill="#1C3F94" className="blue-fill">
            Common
          </tspan>
        </text>
        <text
          id="station-gunnersbury"
          transform="matrix(1 0 0 1 233.6751 542.7182)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Gunnersbury
        </text>
        <text
          id="station-kew-gardens"
          transform="matrix(1 0 0 1 204.5973 572.6741)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Kew Gardens
        </text>
        <g id="station-richmond">
          <text
            id="station-richmond"
            transform="matrix(1 0 0 1 193.218 585.704)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Richmond
          </text>
        </g>
        <g id="station-ifs-cloud-royal-docks">
          <text id="station-ifs-cloud-royal-docks" transform="matrix(1 0 0 1 898.1535 482.3464)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              IFS Cloud{' '}
            </tspan>
            <tspan x="0" y="4.4" fill="#1C3F94" className="blue-fill">
              Royal
            </tspan>
            <tspan x="0" y="8.8" fill="#1C3F94" className="blue-fill">
              Docks
            </tspan>
          </text>
        </g>
        <g id="940GZZALGWP_label_00000134211356112220503130000001865599549424627368_">
          <text id="station-ifs-cloud-greenwich-peninsula" transform="matrix(1 0 0 1 844.9306 518.9301)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              IFS Cloud{' '}
            </tspan>
            <tspan x="0" y="4.4" fill="#1C3F94" className="blue-fill">
              Greenwich
            </tspan>
            <tspan x="0" y="8.8" fill="#1C3F94" className="blue-fill">
              Peninsula
            </tspan>
          </text>
        </g>
        <g id="station-canada-water">
          <text id="station-canada-water" transform="matrix(1 0 0 1 703.9748 542.6545)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Canada
            </tspan>
            <tspan x="2.7" y="4.5" fill="#1C3F94" className="blue-fill">
              Water
            </tspan>
          </text>
        </g>
        <g id="station-green-park">
          <text
            id="station-green-park"
            transform="matrix(1 0 0 1 478.9248 461.5342)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Green Park
          </text>
        </g>
        <g id="station-london-bridge">
          <g id="station-london-bridge">
            <text transform="matrix(1 0 0 1 639.7979 519.7413)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                London{' '}
              </tspan>
              <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
                Bridge
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-bermondsey">
          <text
            id="station-bermondsey"
            transform="matrix(1 0 0 1 677.3954 527.8297)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Bermondsey
          </text>
        </g>
        <g id="station-southwark">
          <text
            id="station-southwark"
            transform="matrix(1 0 0 1 553.7783 564.7515)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Southwark
          </text>
        </g>
        <g id="station-waterloo">
          <text
            id="station-waterloo"
            transform="matrix(1 0 0 1 504.2974 545.4026)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Waterloo
          </text>
        </g>
        <g id="station-north-greenwich">
          <g id="station-north-greenwich">
            <text transform="matrix(1 0 0 1 825.2872 518.9883)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                North
              </tspan>
              <tspan x="-10.7" y="4.5" fill="#1C3F94" className="blue-fill">
                Greenwich
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-mill-hill-east">
          <text
            id="station-mill-hill-east"
            transform="matrix(1 0 0 1 537.6718 203.7545)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Mill Hill East
          </text>
        </g>
        <text
          id="station-high-barnet"
          transform="matrix(1 0 0 1 589.833 169.2129)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          High Barnet
        </text>
        <text
          id="station-totteridge-andwhetstone"
          transform="matrix(1 0 0 1 588.874 181.0464)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Totteridge andWhetstone
        </text>
        <text
          id="station-woodside-park"
          transform="matrix(1 0 0 1 589.6572 192.9063)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Woodside Park
        </text>
        <text
          id="station-west-finchley"
          transform="matrix(1 0 0 1 589.6514 204.7076)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          West Finchley
        </text>
        <text
          id="station-finchley-central"
          transform="matrix(1 0 0 1 589.6514 224.0541)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Finchley Central
        </text>
        <text
          id="station-east-finchley"
          transform="matrix(1 0 0 1 588.8721 236.2514)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          East Finchley
        </text>
        <text
          id="station-highgate"
          transform="matrix(1 0 0 1 588.8721 248.3443)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Highgate
        </text>
        <text
          id="station-archway"
          transform="matrix(1 0 0 1 588.875 260.3068)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Archway
        </text>
        <g id="station-kentish-town">
          <text
            id="station-kentish-town"
            transform="matrix(1 0 0 1 583.7312 303.7052)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Kentish Town
          </text>
        </g>
        <g id="station-tufnell-park">
          <text
            id="station-tufnell-park"
            transform="matrix(1 0 0 1 588.8623 290.7417)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Tufnell Park
          </text>
        </g>
        <g id="station-edgware">
          <text
            id="station-edgware"
            transform="matrix(1 0 0 1 411.2397 210.1685)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Edgware
          </text>
        </g>
        <g id="station-burnt-oak">
          <text
            id="station-burnt-oak"
            transform="matrix(1 0 0 1 423.2921 225.4519)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Burnt Oak
          </text>
        </g>
        <g id="station-colindale">
          <text
            id="station-colindale"
            transform="matrix(1 0 0 1 436.2765 237.0548)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Colindale
          </text>
        </g>
        <g id="station-hendon-central">
          <text
            id="station-hendon-central"
            transform="matrix(1 0 0 1 433.4591 248.5626)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Hendon Central
          </text>
        </g>
        <g id="station-brent-cross">
          <text
            id="station-brent-cross"
            transform="matrix(1 0 0 1 455.4767 260.9855)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Brent Cross
          </text>
        </g>
        <g id="station-golders-green">
          <text
            id="station-golders-green"
            transform="matrix(1 0 0 1 460.8593 273.4087)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Golders Green
          </text>
        </g>
        <g id="station-hampstead">
          <text
            id="station-hampstead"
            transform="matrix(1 0 0 1 480.7899 285.0793)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Hampstead
          </text>
        </g>
        <g id="station-belsize-park">
          <text
            id="station-belsize-park"
            transform="matrix(1 0 0 1 510.4686 315.8456)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Belsize Park
          </text>
        </g>
        <g id="station-chalk-farm">
          <text
            id="station-chalk-farm"
            transform="matrix(1 0 0 1 522.0057 325.7899)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Chalk Farm
          </text>
        </g>
        <text
          id="station-camden-town"
          transform="matrix(1 0 0 1 516.5774 335.9116)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Camden Town
        </text>
        <text id="station-mornington-crescent" transform="matrix(1 0 0 1 519.4922 348.3104)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Mornington
          </tspan>
          <tspan x="6.1" y="4.5" fill="#1C3F94" className="blue-fill">
            Crescent
          </tspan>
        </text>
        <text id="station-goodge-street" transform="matrix(1 0 0 1 516.3997 416.7274)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Goodge
          </tspan>
          <tspan x="3.5" y="4.5" fill="#1C3F94" className="blue-fill">
            Street
          </tspan>
        </text>
        <text id="station-warren-street" transform="matrix(1 0 0 1 541.0989 393.056)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Warren
          </tspan>
          <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
            Street
          </tspan>
        </text>
        <g id="station-leicester-square">
          <text
            id="station-leicester-square"
            transform="matrix(1 0 0 1 540.5107 462.9912)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Leicester Square
          </text>
        </g>
        <g id="940GZZLUBOR_label_00000054963474354519071800000015928225502850536122_">
          <text
            id="station-borough"
            transform="matrix(1 0 0 1 603.8345 570.1442)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Borough
          </text>
        </g>
        <g id="940GZZLUAGL_label_00000097474572904719797200000013103342613370202536_">
          <text
            id="station-angel"
            transform="matrix(1 0 0 1 604.8154 383.2585)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Angel
          </text>
        </g>
        <g id="station-nine-elms">
          <text
            id="station-nine-elms"
            transform="matrix(1 0 0 1 452.7015 611.9494)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Nine Elms
          </text>
        </g>
        <g id="station-battersea-power-station">
          <text id="station-battersea-power-station" transform="matrix(1 0 0 1 423.3479 611.359)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Battersea{' '}
            </tspan>
            <tspan x="6.7" y="4.5" fill="#1C3F94" className="blue-fill">
              Power{' '}
            </tspan>
            <tspan x="5.2" y="9.1" fill="#1C3F94" className="blue-fill">
              Station
            </tspan>
          </text>
        </g>
        <g id="station-old-street">
          <text id="station-old-street" transform="matrix(1 0 0 1 639.7898 376.1506)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Old{' '}
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Street
            </tspan>
          </text>
        </g>
        <g id="940GZZLUKNG_label_00000094583281232357750590000005046492310500553365_">
          <text
            id="station-kennington"
            transform="matrix(1 0 0 1 507.3153 612.836)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Kennington
          </text>
        </g>
        <g id="station-clapham-north">
          <text
            id="station-clapham-north"
            transform="matrix(1 0 0 1 460.1666 660.7785)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Clapham North
          </text>
        </g>
        <g id="station-clapham-high-street">
          <text
            id="station-clapham-high-street"
            transform="matrix(1 0 0 1 448.5531 648.8156)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Clapham High Street
          </text>
        </g>
        <g id="940GZZLUOVL_label_00000139996596645068958320000014736113727806992276_">
          <text
            id="station-oval"
            transform="matrix(1 0 0 1 510.5453 632.8904)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Oval
          </text>
        </g>
        <g id="station-clapham-common">
          <text
            id="station-clapham-common"
            transform="matrix(1 0 0 1 445.2223 668.1854)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Clapham Common
          </text>
        </g>
        <g id="station-clapham-south">
          <text
            id="station-clapham-south"
            transform="matrix(1 0 0 1 444.1051 676.8129)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Clapham South
          </text>
        </g>
        <g id="station-tooting-bec">
          <text
            id="station-tooting-bec"
            transform="matrix(1 0 0 1 466.5534 700.8143)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Tooting Bec
          </text>
        </g>
        <g id="station-tooting-broadway">
          <text
            id="station-tooting-broadway"
            transform="matrix(1 0 0 1 457.8398 709.5274)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Tooting Broadway
          </text>
        </g>
        <g id="station-colliers-wood">
          <text
            id="station-colliers-wood"
            transform="matrix(1 0 0 1 448.4025 718.4955)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Colliers Wood
          </text>
        </g>
        <g id="station-south-wimbledon">
          <text
            id="station-south-wimbledon"
            transform="matrix(1 0 0 1 438.2034 727.0908)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            South Wimbledon
          </text>
        </g>
        <g id="station-morden">
          <text
            id="station-morden"
            transform="matrix(1 0 0 1 406.7735 761.8661)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Morden
          </text>
        </g>
        <g id="station-balham">
          <g id="station-balham">
            <text transform="matrix(1 0 0 1 450.9135 686.0406)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Balham
            </text>
          </g>
        </g>
        <g id="station-rayners-lane">
          <text
            id="station-rayners-lane"
            transform="matrix(1 0 0 1 183.2716 262.7036)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Rayners Lane
          </text>
        </g>
        <text
          id="station-south-harrow"
          transform="matrix(1 0 0 1 190.5788 284.4829)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          South Harrow
        </text>
        <text
          id="station-sudbury-hill"
          transform="matrix(1 0 0 1 192.6002 306.042)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Sudbury Hill
        </text>
        <text
          id="station-sudbury-town"
          transform="matrix(1 0 0 1 188.1452 327.5528)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Sudbury Town
        </text>
        <text
          id="station-alperton"
          transform="matrix(1 0 0 1 201.6647 349.0157)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Alperton
        </text>
        <text
          id="station-park-royal"
          transform="matrix(1 0 0 1 198.376 425.4648)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Park Royal
        </text>
        <text
          id="station-north-ealing"
          transform="matrix(1 0 0 1 193.7379 437.6872)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          North Ealing
        </text>
        <text id="station-heathrow-terminal-4" transform="matrix(1 0 0 1 104.8791 631.3719)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Heathrow
          </tspan>
          <tspan x="-0.8" y="4.5" fill="#1C3F94" className="blue-fill">
            Terminal 4
          </tspan>
        </text>
        <g id="station-heathrow-terminal-5">
          <text id="station-heathrow-terminal-5" transform="matrix(1 0 0 1 74.5677 631.3724)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Heathrow
            </tspan>
            <tspan x="-0.7" y="4.5" fill="#1C3F94" className="blue-fill">
              Terminal 5
            </tspan>
          </text>
        </g>
        <g id="940GZZLUNFD_label_00000166638346589202013860000006590051733823237277_">
          <text
            id="station-northfields"
            transform="matrix(1 0 0 1 187.6244 513.3064)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Northfields
          </text>
        </g>
        <g id="940GZZLUBOS_label_00000034082208936561717090000011812259318207488433_">
          <text id="station-boston-manor" transform="matrix(1 0 0 1 178.0502 524.0193)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Boston{' '}
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Manor
            </tspan>
          </text>
        </g>
        <g id="940GZZLUSEA_label_00000034780073369602492530000006781407894390094005_">
          <text id="station-south-ealing" transform="matrix(1 0 0 1 200.78 497.6436)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              South
            </tspan>
            <tspan x="-0.1" y="4.5" fill="#1C3F94" className="blue-fill">
              Ealing
            </tspan>
          </text>
        </g>
        <g id="940GZZLUOSY_label_00000013892881348641057000000013603797446094556825_">
          <text
            id="station-osterley"
            transform="matrix(1 0 0 1 166.8688 535.7355)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Osterley
          </text>
        </g>
        <g id="940GZZLUHWC_label_00000098214634395089960800000005457041090092629430_">
          <text
            id="station-hounslow-central"
            transform="matrix(1 0 0 1 150.1485 552.3395)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Hounslow Central
          </text>
        </g>
        <g id="940GZZLUHWE_label_00000008120628472175979910000007822684979455533238_">
          <text
            id="station-hounslow-east"
            transform="matrix(1 0 0 1 159.6801 543.8352)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Hounslow East
          </text>
        </g>
        <g id="940GZZLUHWT_label_00000077283206853530188360000014308797712970818690_">
          <text id="station-hounslow-west" transform="matrix(1 0 0 1 141.2345 561.8819)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Hounslow
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              West
            </tspan>
          </text>
        </g>
        <g id="940GZZLUHNX_label_00000000187021209440005640000005185227795362860475_">
          <text
            id="station-hatton-cross"
            transform="matrix(1 0 0 1 127.0797 575.0977)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Hatton Cross
          </text>
        </g>
        <g id="station-heathrow-terminals-2-and-3">
          <text id="station-heathrow-terminals-2-and-3" transform="matrix(1 0 0 1 82.96 571.35)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Heathrow
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Terminals
            </tspan>
            <tspan x="0" y="9" fill="#1C3F94" className="blue-fill">
              2 and 3
            </tspan>
          </text>
        </g>
        <text id="station-russell-square" transform="matrix(1 0 0 1 567.5333 391.823)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Russell
          </tspan>
          <tspan x="0.7" y="4.5" fill="#1C3F94" className="blue-fill">
            Square
          </tspan>
        </text>
        <g id="station-hyde-park-corner">
          <text
            id="station-hyde-park-corner"
            transform="matrix(1 0 0 1 422.7012 467.8985)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Hyde Park Corner
          </text>
        </g>
        <g id="station-knightsbridge">
          <text
            id="station-knightsbridge"
            transform="matrix(1 0 0 1 410.8315 488.2129)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Knightsbridge
          </text>
        </g>
        <g id="station-covent-garden">
          <text
            id="station-covent-garden"
            transform="matrix(1 0 0 1 550.9121 450.8623)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Covent Garden
          </text>
        </g>
        <text
          id="station-oakwood"
          transform="matrix(1 0 0 1 656.2578 176.9611)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Oakwood
        </text>
        <text
          id="station-cockfosters"
          transform="matrix(1 0 0 1 650.8818 164.8114)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Cockfosters
        </text>
        <text
          id="station-southgate"
          transform="matrix(1 0 0 1 656.373 189.239)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Southgate
        </text>
        <text
          id="station-arnos-grove"
          transform="matrix(1 0 0 1 651.126 201.5022)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Arnos Grove
        </text>
        <text
          id="station-bounds-green"
          transform="matrix(1 0 0 1 647.708 213.7793)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Bounds Green
        </text>
        <text
          id="station-wood-green"
          transform="matrix(1 0 0 1 650.9336 226.0647)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Wood Green
        </text>
        <text
          id="station-turnpike-lane"
          transform="matrix(1 0 0 1 647.5156 238.3374)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Turnpike Lane
        </text>
        <text
          id="station-manor-house"
          transform="matrix(1 0 0 1 649.4113 258.2836)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Manor House
        </text>
        <g id="940GZZLUASL_label_00000139263236055369229020000007356379321411894713_">
          <text
            id="station-arsenal"
            transform="matrix(1 0 0 1 639.785 291.2278)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Arsenal
          </text>
        </g>
        <g id="940GZZLUHWY_label_00000139258680293067170480000012379836974381495207_">
          <text id="station-holloway-road" transform="matrix(1 0 0 1 622.6916 298.8438)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Holloway{' '}
            </tspan>
            <tspan x="10.3" y="4.5" fill="#1C3F94" className="blue-fill">
              Road
            </tspan>
          </text>
        </g>
        <text id="station-blackhorse-road" transform="matrix(1 0 0 1 758.8127 248.6091)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Blackhorse{' '}
          </tspan>
          <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
            Road
          </tspan>
        </text>
        <g id="station-highbury-and-islington">
          <g id="station-highbury-and-islington">
            <text transform="matrix(1 0 0 1 666.3233 317.8708)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Highbury and
              </tspan>
              <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
                Islington
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-finsbury-park">
          <g id="station-finsbury-park">
            <text transform="matrix(1 0 0 1 678.8333 284.2267)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Finsbury
              </tspan>
              <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
                Park
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-seven-sisters">
          <g id="station-seven-sisters">
            <text transform="matrix(1 0 0 1 698.4442 253.6152)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Seven
              </tspan>
              <tspan x="-1.5" y="4.5" fill="#1C3F94" className="blue-fill">
                Sisters
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-tottenham-hale">
          <g id="station-tottenham-hale">
            <text transform="matrix(1 0 0 1 720.3927 269.2832)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Tottenham
              </tspan>
              <tspan x="7.3" y="4.5" fill="#1C3F94" className="blue-fill">
                Hale
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-walthamstow-central">
          <g id="station-walthamstow-central">
            <text transform="matrix(1 0 0 1 795.8745 260.9099)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Walthamstow
              </tspan>
              <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
                Central
              </tspan>
            </text>
          </g>
        </g>
        <text
          id="station-pimlico"
          transform="matrix(1 0 0 1 455.7627 555.3077)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Pimlico
        </text>
        <g id="station-vauxhall">
          <g id="station-vauxhall">
            <text transform="matrix(1 0 0 1 459.1848 622.1716)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Vauxhall
            </text>
          </g>
        </g>
        <text
          id="station-stockwell"
          transform="matrix(1 0 0 1 519.3076 646.1436)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Stockwell
        </text>
        <g id="station-brixton">
          <text
            id="station-brixton"
            transform="matrix(1 0 0 1 541.7598 674.3204)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Brixton
          </text>
        </g>
        <g id="station-west-silvertown">
          <text id="station-west-silvertown" transform="matrix(1 0 0 1 894.7065 513.515)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              West{' '}
            </tspan>
            <tspan x="-12.7" y="4.4" fill="#1C3F94" className="blue-fill">
              Silvertown
            </tspan>
          </text>
        </g>
        <g id="station-pontoon-dock">
          <text id="station-pontoon-dock" transform="matrix(1 0 0 1 883.8154 526.5579)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Pontoon{' '}
            </tspan>
            <tspan x="7.8" y="4.4" fill="#1C3F94" className="blue-fill">
              Dock
            </tspan>
          </text>
        </g>
        <g id="station-king-george-v">
          <text id="station-king-george-v" transform="matrix(1 0 0 1 894.0841 556.9661)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              King{' '}
            </tspan>
            <tspan x="-10.6" y="4.4" fill="#1C3F94" className="blue-fill">
              George V
            </tspan>
          </text>
        </g>
        <text
          id="station-prince-regent"
          transform="matrix(1 0 0 1 949.3324 492.5805)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Prince Regent
        </text>
        <text
          id="station-royal-albert"
          transform="matrix(1 0 0 1 959.1375 513.726)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Royal Albert
        </text>
        <text
          id="station-beckton-park"
          transform="matrix(1 0 0 1 959.0289 524.2914)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Beckton Park
        </text>
        <text
          id="station-cyprus"
          transform="matrix(1 0 0 1 959.1378 534.4178)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Cyprus
        </text>
        <text
          id="station-gallions-reach"
          transform="matrix(1 0 0 1 958.8894 545.8425)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Gallions Reach
        </text>
        <text
          id="station-beckton"
          transform="matrix(1 0 0 1 959.0297 556.8019)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Beckton
        </text>
        <g id="station-blackwall">
          <text
            id="station-blackwall"
            transform="matrix(1 0 0 1 799.6306 474.6104)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Blackwall
          </text>
        </g>
        <g id="station-royal-victoria">
          <text id="station-royal-victoria" transform="matrix(1 0 0 1 887.5356 457.7119)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Royal
            </tspan>
            <tspan x="-2.4" y="4.5" fill="#1C3F94" className="blue-fill">
              Victoria
            </tspan>
          </text>
        </g>
        <text id="station-bow-church" transform="matrix(1 0 0 1 800.379 409.1649)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Bow
          </tspan>
          <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
            Church
          </tspan>
        </text>
        <text
          id="station-island-gardens"
          transform="matrix(1 0 0 1 757.3604 571.5528)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Island Gardens
        </text>
        <text
          id="station-deptford-bridge"
          transform="matrix(1 0 0 1 800.1992 616.5753)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Deptford Bridge
        </text>
        <text
          id="station-south-quay"
          transform="matrix(1 0 0 1 764.2148 536.4673)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          South Quay
        </text>
        <text
          id="station-crossharbour"
          transform="matrix(1 0 0 1 760.2109 548.1621)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Crossharbour
        </text>
        <text
          id="station-mudchute"
          transform="matrix(1 0 0 1 767.877 559.858)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Mudchute
        </text>
        <text
          id="station-heron-quays"
          transform="matrix(1 0 0 1 761.3691 524.7725)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Heron Quays
        </text>
        <text id="station-west-india-quay" transform="matrix(1 0 0 1 799.6346 482.8608)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            West India
          </tspan>
          <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
            Quay
          </tspan>
        </text>
        <text
          id="station-elverson-road"
          transform="matrix(1 0 0 1 800.2549 628.0928)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Elverson Road
        </text>
        <text
          id="station-devons-road"
          transform="matrix(1 0 0 1 762.1582 418.2907)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Devons Road
        </text>
        <text id="station-langdon-park" transform="matrix(1 0 0 1 772.2471 428.9059)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Langdon{' '}
          </tspan>
          <tspan x="9.1" y="4.5" fill="#1C3F94" className="blue-fill">
            Park
          </tspan>
        </text>
        <text id="station-all-saints" transform="matrix(1 0 0 1 784.6592 439.522)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            All{' '}
          </tspan>
          <tspan x="-6.9" y="4.5" fill="#1C3F94" className="blue-fill">
            Saints
          </tspan>
        </text>
        <g id="station-canning-town">
          <text id="station-canning-town" transform="matrix(1 0 0 1 857.937 450.8135)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Canning
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Town
            </tspan>
          </text>
        </g>
        <g id="station-poplar">
          <text
            id="station-poplar"
            transform="matrix(1 0 0 1 779.1746 463.58)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Poplar
          </text>
        </g>
        <g id="station-pudding-mill-lane">
          <text id="station-pudding-mill-lane" transform="matrix(1 0 0 1 823.6797 375.917)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Pudding
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Mill Lane
            </tspan>
          </text>
        </g>
        <g id="940GZZDLEIN_label_00000022558410135056704200000007725260095309501579_">
          <text id="station-east-india" transform="matrix(1 0 0 1 827.115 475.1387)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              East
            </tspan>
            <tspan x="-0.8" y="4.5" fill="#1C3F94" className="blue-fill">
              India
            </tspan>
          </text>
        </g>
        <g id="station-london-city-airport">
          <g id="station-london-city-airport">
            <text transform="matrix(1 0 0 1 887.2384 539.1827)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                London
              </tspan>
              <tspan x="7.7" y="4.4" fill="#1C3F94" className="blue-fill">
                City{' '}
              </tspan>
              <tspan x="0.8" y="8.8" fill="#1C3F94" className="blue-fill">
                Airport
              </tspan>
            </text>
          </g>
          <path
            id="940GZZDLLCA_airport"
            fill="#1C3F94"
            d="M884.4,535.5c0.2,0,0.2,0.3,0.2,0.5l0,1.2l1.6,1.2 c0.1,0,0.3,0.2,0.3,0.2c0.1,0.1,0,0.2,0,0.3v0.1l-1.6-0.6c-0.1,0-0.2,0-0.2,0c-0.2,0-0.2,0.2-0.2,0.4l0,0.6l0.5,0.4l0.1,0.3 l-0.7-0.2h-0.1l-0.7,0.2l0.1-0.3l0.5-0.4l0-0.6c0-0.1,0-0.4-0.2-0.4c-0.1,0-0.2,0-0.2,0l-1.6,0.6v-0.1c0-0.1,0-0.2,0-0.3 c0,0,0.2-0.2,0.3-0.2l1.7-1.2l0-1.2C884.2,535.8,884.3,535.5,884.4,535.5L884.4,535.5z"
            className="blue-fill"
          />
        </g>
        <g id="station-limehouse">
          <g id="station-limehouse">
            <text transform="matrix(1 0 0 1 736.2912 462.4893)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Limehouse
            </text>
          </g>
        </g>
        <g id="910GWOLWXR_label">
          <g id="station-woolwich-arsenal">
            <text transform="matrix(1 0 0 1 897.4194 593.1918)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Woolwich{' '}
              </tspan>
              <tspan x="2.8" y="4.4" fill="#1C3F94" className="blue-fill">
                Arsenal
              </tspan>
            </text>
          </g>
          <g id="station-woolwich">
            <text transform="matrix(1 0 0 1 933.6148 586.5044)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Woolwich
            </text>
          </g>
          <g id="station-abbey-wood">
            <text transform="matrix(1 0 0 1 933.6148 599.0184)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Abbey Wood
            </text>
          </g>
        </g>
        <g id="station-cutty-sark-for-maritime-greenwich">
          <text
            id="station-cutty-sark-for-maritime-greenwich"
            transform="matrix(1 0 0 1 800.166 590.4805)"
            fontSize={4}
          >
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Cutty Sark for{' '}
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Maritime Greenwich
            </tspan>
          </text>
        </g>
        <g id="station-greenwich">
          <text
            id="station-greenwich"
            transform="matrix(1 0 0 1 800.1992 605.0967)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Greenwich
          </text>
        </g>
        <g id="station-lewisham">
          <text
            id="station-lewisham"
            transform="matrix(1 0 0 1 800.1992 639.3614)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Lewisham
          </text>
        </g>
        <g id="station-tower-gateway">
          <text id="station-tower-gateway" transform="matrix(1 0 0 1 695.8655 486.9103)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Tower{' '}
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Gateway
            </tspan>
          </text>
        </g>
        <g id="station-stratford-international">
          <g id="station-stratford-international">
            <text transform="matrix(1 0 0 1 808.2188 323.0362)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Stratford
              </tspan>
              <tspan x="-4.4" y="4.5" fill="#1C3F94" className="blue-fill">
                International
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-tower-hill">
          <g id="station-tower-hill">
            <text transform="matrix(1 0 0 1 664.4221 475.4186)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Tower
              </tspan>
              <tspan x="6.4" y="4.5" fill="#1C3F94" className="blue-fill">
                Hill
              </tspan>
            </text>
          </g>
          <text
            id="station-fenchurch-st"
            transform="matrix(1 0 0 1 661.8351 483.2965)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Fenchurch St
          </text>
        </g>
        <g id="station-stratford-high-street">
          <text id="station-stratford-high-street" transform="matrix(1 0 0 1 859.5967 358.7022)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Stratford{' '}
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              High Street
            </tspan>
          </text>
        </g>
        <g id="station-abbey-road">
          <text id="station-abbey-road" transform="matrix(1 0 0 1 859.3057 377.086)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Abbey{' '}
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Road
            </tspan>
          </text>
        </g>
        <g id="station-star-lane">
          <text
            id="station-star-lane"
            transform="matrix(1 0 0 1 859.5767 431.2884)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Star Lane
          </text>
        </g>
        <text
          id="station-acton-central"
          transform="matrix(1 0 0 1 235.6235 476.5684)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Acton Central
        </text>
        <text
          id="station-south-acton"
          transform="matrix(1 0 0 1 239.1396 489.75)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          South Acton
        </text>
        <g id="station-kensington-olympia">
          <text id="station-kensington-olympia" transform="matrix(1 0 0 1 340.0356 482.893)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Kensington
            </tspan>
            <tspan x="3.3" y="4.5" fill="#1C3F94" className="blue-fill">
              (Olympia)
            </tspan>
          </text>
        </g>
        <g id="station-kilburn-high-road">
          <text id="station-kilburn-high-road" transform="matrix(1 0 0 1 367.2635 341.5307)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Kilburn
            </tspan>
            <tspan x="-3" y="4.5" fill="#1C3F94" className="blue-fill">
              High Road
            </tspan>
          </text>
        </g>
        <g id="station-south-hampstead">
          <text
            id="station-south-hampstead"
            transform="matrix(1 0 0 1 475.6879 346.1093)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            South Hampstead
          </text>
        </g>
        <g id="station-kensal-rise">
          <text id="station-kensal-rise" transform="matrix(1 0 0 1 342.2906 310.1613)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Kensal
            </tspan>
            <tspan x="2.9" y="4.5" fill="#1C3F94" className="blue-fill">
              Rise
            </tspan>
          </text>
        </g>
        <g id="station-brondesbury-park">
          <text id="station-brondesbury-park" transform="matrix(1 0 0 1 362.5418 310.8029)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Brondesbury
            </tspan>
            <tspan x="9.3" y="4.5" fill="#1C3F94" className="blue-fill">
              Park
            </tspan>
          </text>
        </g>
        <g id="station-hampstead-heath">
          <text id="station-hampstead-heath" transform="matrix(1 0 0 1 484.1726 297.9658)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Hampstead
            </tspan>
            <tspan x="5.9" y="4.5" fill="#1C3F94" className="blue-fill">
              Heath
            </tspan>
          </text>
        </g>
        <g id="station-finchley-road-and-frognal">
          <text id="station-finchley-road-and-frognal" transform="matrix(1 0 0 1 457.3565 315.6377)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Finchley Road
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              andFrognal
            </tspan>
          </text>
        </g>
        <g id="station-brondesbury">
          <text
            id="station-brondesbury"
            transform="matrix(1 0 0 1 382.2551 326.6027)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Brondesbury
          </text>
        </g>
        <text id="station-gospel-oak" transform="matrix(1 0 0 1 536.7096 287.3974)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Gospel
          </tspan>
          <tspan x="3.3" y="4.5" fill="#1C3F94" className="blue-fill">
            Oak
          </tspan>
        </text>
        <g id="station-kentish-town-west">
          <text id="station-kentish-town-west" transform="matrix(1 0 0 1 556.0942 298.9589)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Kentish
            </tspan>
            <tspan x="0" y="4.4" fill="#1C3F94" className="blue-fill">
              Town
            </tspan>
            <tspan x="0" y="8.8" fill="#1C3F94" className="blue-fill">
              West
            </tspan>
          </text>
        </g>
        <g id="station-camden-road">
          <text
            id="station-camden-road"
            transform="matrix(1 0 0 1 568.2383 318.967)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Camden Road
          </text>
        </g>
        <g id="station-dalston-kingsland">
          <text id="station-dalston-kingsland" transform="matrix(1 0 0 1 699.0579 319.2596)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Dalston{' '}
            </tspan>
            <tspan x="-1.5" y="4.4" fill="#1C3F94" className="blue-fill">
              Kingsland
            </tspan>
          </text>
        </g>
        <g id="station-hackney-central">
          <text id="station-hackney-central" transform="matrix(1 0 0 1 755.7787 330.1177)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Hackney
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Central
            </tspan>
          </text>
        </g>
        <g id="station-caledonian-road-and-barnsbury">
          <text id="station-caledonian-road-and-barnsbury" transform="matrix(1 0 0 1 630.6536 335.7538)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Caledonian
            </tspan>
            <tspan x="4.6" y="4.5" fill="#1C3F94" className="blue-fill">
              Road and
            </tspan>
            <tspan x="1.2" y="9.1" fill="#1C3F94" className="blue-fill">
              Barnsbury
            </tspan>
          </text>
        </g>
        <g id="station-hackney-wick">
          <text id="station-hackney-wick" transform="matrix(1 0 0 1 800.8916 347.3731)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Hackney
            </tspan>
            <tspan x="4" y="4.5" fill="#1C3F94" className="blue-fill">
              Wick
            </tspan>
          </text>
        </g>
        <g id="station-homerton">
          <text
            id="station-homerton"
            transform="matrix(1 0 0 1 772.0247 347.2051)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Homerton
          </text>
        </g>
        <g id="station-canonbury">
          <text
            id="station-canonbury"
            transform="matrix(1 0 0 1 678.8272 342.6335)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Canonbury
          </text>
        </g>
        <g id="station-norwood-junction">
          <g id="station-norwood-junction">
            <text transform="matrix(1 0 0 1 727.2828 695.6157)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Norwood Junction
            </text>
          </g>
        </g>
        <g id="station-forest-hill">
          <text
            id="station-forest-hill"
            transform="matrix(1 0 0 1 695.4449 647.7618)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Forest Hill
          </text>
        </g>
        <g id="station-anerley">
          <text
            id="station-anerley"
            transform="matrix(1 0 0 1 727.3766 683.912)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Anerley
          </text>
        </g>
        <g id="station-penge-west">
          <text
            id="station-penge-west"
            transform="matrix(1 0 0 1 726.6559 672.2452)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Penge West
          </text>
        </g>
        <g id="station-honor-oak-park">
          <text
            id="station-honor-oak-park"
            transform="matrix(1 0 0 1 683.4215 635.546)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Honor Oak Park
          </text>
        </g>
        <g id="station-brockley">
          <text
            id="station-brockley"
            transform="matrix(1 0 0 1 699.0582 623.2764)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Brockley
          </text>
        </g>
        <g id="station-west-croydon">
          <g id="station-west-croydon">
            <text transform="matrix(1 0 0 1 727.3085 716.2119)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              West Croydon
            </text>
          </g>
        </g>
        <text
          id="station-wapping"
          transform="matrix(1 0 0 1 726.7064 488.1127)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Wapping
        </text>
        <g id="910GNEWXGTE_label">
          <g id="910GNEWXGTE_label">
            <text
              id="station-new-cross-gate"
              transform="matrix(1 0 0 1 682.7135 608.7817)"
              fill="#1C3F94"
              className="blue-fill"
              fontSize={4}
            >
              New Cross Gate
            </text>
          </g>
        </g>
        <g id="station-sydenham">
          <g id="station-sydenham">
            <text transform="matrix(1 0 0 1 695.5289 659.4233)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Sydenham
            </text>
          </g>
        </g>
        <g id="station-new-cross">
          <g id="station-new-cross">
            <text transform="matrix(1 0 0 1 738.2949 598.1895)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              New Cross
            </text>
          </g>
        </g>
        <g id="station-crystal-palace">
          <g id="station-crystal-palace">
            <text transform="matrix(1 0 0 1 667.18 693.4089)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Crystal Palace
            </text>
          </g>
        </g>
        <g id="station-surrey-quays">
          <text
            id="station-surrey-quays"
            transform="matrix(1 0 0 1 689.6361 558.0772)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Surrey Quays
          </text>
        </g>
        <g id="910GRTHERHI_label_00000087378791727812996660000007107492370903362981_">
          <text
            id="station-rotherhithe"
            transform="matrix(1 0 0 1 692.5941 517.0043)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Rotherhithe
          </text>
        </g>
        <text
          id="station-shadwell"
          transform="matrix(1 0 0 1 728.5438 476.3383)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Shadwell
        </text>
        <g id="station-queens-road-peckham">
          <g id="station-queens-road-peckham">
            <text transform="matrix(1 0 0 1 630.3648 599.6573)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Queens Road
              </tspan>
              <tspan x="9.3" y="4.5" fill="#1C3F94" className="blue-fill">
                Peckham
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-peckham-rye">
          <g id="station-peckham-rye">
            <text transform="matrix(1 0 0 1 608.4297 626.046)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Peckham Rye
            </text>
          </g>
        </g>
        <g id="station-denmark-hill">
          <g id="station-denmark-hill">
            <text transform="matrix(1 0 0 1 565.333 650.6592)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Denmark Hill
            </text>
          </g>
        </g>
        <g id="station-wandsworth-road">
          <text id="station-wandsworth-road" transform="matrix(1 0 0 1 448.4175 635.6016)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Wandsworth
            </tspan>
            <tspan x="8.8" y="4.5" fill="#1C3F94" className="blue-fill">
              Road
            </tspan>
          </text>
        </g>
        <g id="station-imperial-wharf">
          <text id="station-imperial-wharf" transform="matrix(1 0 0 1 399.2653 571.5524)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Imperial{' '}
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Wharf
            </tspan>
          </text>
        </g>
        <g id="station-wanstead-park">
          <text id="station-wanstead-park" transform="matrix(1 0 0 1 850.1918 301.9141)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Wanstead
            </tspan>
            <tspan x="12.3" y="4.4" fill="#1C3F94" className="blue-fill">
              Park
            </tspan>
          </text>
        </g>
        <g id="station-leytonstone-high-road">
          <text id="station-leytonstone-high-road" transform="matrix(1 0 0 1 813.2542 301.0034)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Leytonstone
            </tspan>
            <tspan x="2.8" y="4.5" fill="#1C3F94" className="blue-fill">
              High Road
            </tspan>
          </text>
        </g>
        <g id="station-leyton-midland-road">
          <text id="station-leyton-midland-road" transform="matrix(1 0 0 1 798.9058 285.857)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Leyton
            </tspan>
            <tspan x="-7.4" y="4.5" fill="#1C3F94" className="blue-fill">
              Midland Road
            </tspan>
          </text>
        </g>
        <text id="station-walthamstow-queens-road" transform="matrix(1 0 0 1 741.9529 282.5926)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Walthamstow
          </tspan>
          <tspan x="0.9" y="4.5" fill="#1C3F94" className="blue-fill">
            Queen’s Road
          </tspan>
        </text>
        <text id="station-woodgrange-park" transform="matrix(1 0 0 1 901.3949 305.588)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Woodgrange
          </tspan>
          <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
            Park
          </tspan>
        </text>
        <g id="station-acton-town">
          <text
            id="station-acton-town"
            transform="matrix(1 0 0 1 232.0119 501.6226)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Acton Town
          </text>
        </g>
        <g id="station-harringay-green-lanes">
          <text id="station-harringay-green-lanes" transform="matrix(1 0 0 1 684.6867 230.779)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Harringay
            </tspan>
            <tspan x="3.9" y="4.5" fill="#1C3F94" className="blue-fill">
              Green
            </tspan>
            <tspan x="4.3" y="9.1" fill="#1C3F94" className="blue-fill">
              Lanes
            </tspan>
          </text>
        </g>
        <text id="station-south-tottenham" transform="matrix(1 0 0 1 724.459 235.2953)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            South
          </tspan>
          <tspan x="-5.8" y="4.5" fill="#1C3F94" className="blue-fill">
            Tottenham
          </tspan>
        </text>
        <g id="station-upper-holloway">
          <text
            id="station-upper-holloway"
            transform="matrix(1 0 0 1 597.5086 279.3814)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Upper Holloway
          </text>
        </g>
        <g id="station-crouch-hill">
          <text id="station-crouch-hill" transform="matrix(1 0 0 1 619.1778 247.1509)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Crouch
            </tspan>
            <tspan x="8.2" y="4.5" fill="#1C3F94" className="blue-fill">
              Hill
            </tspan>
          </text>
        </g>
        <g id="station-shoreditch-high-street">
          <text id="station-shoreditch-high-street" transform="matrix(1 0 0 1 693.9174 393.4017)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Shoreditch
            </tspan>
            <tspan x="-0.8" y="4.5" fill="#1C3F94" className="blue-fill">
              High Street
            </tspan>
          </text>
        </g>
        <g id="station-dalston-junction">
          <text
            id="station-dalston-junction"
            transform="matrix(1 0 0 1 676.8123 353.0698)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Dalston Junction
          </text>
        </g>
        <g id="station-haggerston">
          <text
            id="station-haggerston"
            transform="matrix(1 0 0 1 693.14 364.2277)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Haggerston
          </text>
        </g>
        <g id="910GHOXTON_label_00000070820264268445577110000009944379830397929091_">
          <text
            id="station-hoxton"
            transform="matrix(1 0 0 1 701.7631 376.1294)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Hoxton
          </text>
        </g>
        <g id="station-clapham-junction">
          <g id="station-clapham-junction">
            <text transform="matrix(1 0 0 1 414.9565 636.5958)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Clapham
              </tspan>
              <tspan x="0.4" y="4.5" fill="#1C3F94" className="blue-fill">
                Junction
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-holland-park">
          <g id="station-holland-park">
            <text id="940GZZLUHPK_label" transform="matrix(1 0 0 1 364.7246 458.9121)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Holland
              </tspan>
              <tspan x="3.9" y="4.5" fill="#1C3F94" className="blue-fill">
                Park
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-caledonian-road">
          <g id="station-caledonian-road">
            <text id="940GZZLUCAR_label" transform="matrix(1 0 0 1 606.3379 310.6598)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Caledonian
              </tspan>
              <tspan x="13.8" y="4.5" fill="#1C3F94" className="blue-fill">
                Road
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-victoria">
          <g id="station-victoria">
            <text transform="matrix(1 0 0 1 453.1426 506.309)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Victoria
            </text>
          </g>
          <g id="940GZZLUVIC_coach">
            <g>
              <path
                fill="#1C3F94"
                d="M456.2,502.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5 C456.4,501.6,456.2,501.8,456.2,502.1z M456.4,502.1c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2,0.1,0.2,0.2c0,0.1-0.1,0.2-0.2,0.2 C456.5,502.3,456.4,502.2,456.4,502.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M460.9,502.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5 C461.1,501.6,460.9,501.8,460.9,502.1z M461.1,502.1c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2,0.1,0.2,0.2c0,0.1-0.1,0.2-0.2,0.2 C461.3,502.3,461.1,502.2,461.1,502.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M462,502.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C462.3,501.6,462,501.8,462,502.1z M462.3,502.1c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2,0.1,0.2,0.2c0,0.1-0.1,0.2-0.2,0.2 C462.4,502.3,462.3,502.2,462.3,502.1z"
                className="blue-fill"
              />
            </g>
            <path
              fill="#1C3F94"
              d="M454.4,500.2c0,0.1,0.1,0.1,0.1,0.1s0.1-0.1,0.1-0.1c0-0.2,0.1-0.3,0.1-0.3h0.3l0,0 c-0.3,0.3-0.5,0.7-0.5,1.2c0,0.7,0,1.1,0,1.1h1.5c0,0,0-0.1,0-0.1c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6 c0,0,0,0.1,0,0.1h3.5c0,0,0-0.1,0-0.1c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.5,0.2,0.6,0.4c0.1-0.2,0.3-0.4,0.6-0.4 c0.3,0,0.6,0.3,0.6,0.6c0,0,0,0.1,0,0.1h0c0,0,0.9-0.4,0.9-0.5c0-0.1,0-1.8,0-1.8s0-0.1-0.2-0.3c-0.2-0.2-0.3-0.2-0.3-0.2 l-7.7,0c0,0-0.2,0.1-0.4,0.2h-0.7c0,0-0.1,0-0.1,0C454.6,499.7,454.4,499.9,454.4,500.2z M461.6,499.7l1.7,0c0,0,0.2,0,0.3,0.1 c0.1,0.1,0.1,0.2,0.1,0.2v0.7l-2,0V499.7z M459.5,499.7l1.9,0v1.1l-1.9,0V499.7z M457.2,499.7l2,0v1.1l-2,0V499.7z M455.8,499.7h1.1v1.1l-0.6,0c0,0-1,0.4-1.1,0.4c-0.3,0-0.5,0-0.5,0S454.8,500.2,455.8,499.7z"
              className="blue-fill"
            />
          </g>
        </g>
        <g id="station-harrington-road">
          <text
            id="station-harrington-road"
            transform="matrix(0.9997 0 0 1 881.9029 670.1349)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Harrington Road
          </text>
        </g>
        <g id="station-arena">
          <text
            id="station-arena"
            transform="matrix(0.9997 0 0 1 863.9713 705.5766)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Arena
          </text>
        </g>
        <g id="station-dundonald-road">
          <text id="station-dundonald-road" transform="matrix(0.9997 0 0 1 387.474 670.5787)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Dundonald
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              Road
            </tspan>
          </text>
        </g>
        <g id="station-merton-park">
          <text
            id="station-merton-park"
            transform="matrix(0.9997 0 0 1 397.0405 710.5118)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Merton Park
          </text>
        </g>
        <g id="station-woodside">
          <text
            id="station-woodside"
            transform="matrix(0.9997 0 0 1 853.2966 716.23)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Woodside
          </text>
        </g>
        <g id="station-blackhorse-lane">
          <text
            id="station-blackhorse-lane"
            transform="matrix(0.9997 0 0 1 842.7736 726.7504)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Blackhorse Lane
          </text>
        </g>
        <g id="station-addiscombe">
          <text
            id="station-addiscombe"
            transform="matrix(0.9997 0 0 1 832.2552 737.282)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Addiscombe
          </text>
        </g>
        <g id="station-avenue-road">
          <text id="station-avenue-road" transform="matrix(0.9997 0 0 1 940.6528 665.6111)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Avenue
            </tspan>
            <tspan x="2.8" y="4.5" fill="#1C3F94" className="blue-fill">
              Road
            </tspan>
          </text>
        </g>
        <g id="station-sandilands">
          <text
            id="station-sandilands"
            transform="matrix(0.9997 0 0 1 796.4144 752.2637)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Sandilands
          </text>
        </g>
        <g id="station-king-henrys-drive">
          <text
            id="station-king-henrys-drive"
            transform="matrix(0.9997 0 0 1 821.9615 795.4863)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            King Henry’s Drive
          </text>
        </g>
        <g id="station-new-addington">
          <text
            id="station-new-addington"
            transform="matrix(0.9997 0 0 1 836.2895 803.8238)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            New Addington
          </text>
        </g>
        <g id="station-fieldway">
          <text
            id="station-fieldway"
            transform="matrix(0.9997 0 0 1 863.7947 787.1628)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Fieldway
          </text>
        </g>
        <g id="station-addington-village">
          <text
            id="station-addington-village"
            transform="matrix(0.9997 0 0 1 806.7573 779.3573)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Addington Village
          </text>
        </g>
        <g id="station-gravel-hill">
          <text
            id="station-gravel-hill"
            transform="matrix(0.9997 0 0 1 847.2203 770.7723)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Gravel Hill
          </text>
        </g>
        <g id="station-coombe-lane">
          <text
            id="station-coombe-lane"
            transform="matrix(0.9997 0 0 1 798.8752 762.2693)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Coombe Lane
          </text>
        </g>
        <g id="station-lloyd-park">
          <text
            id="station-lloyd-park"
            transform="matrix(0.9997 0 0 1 830.615 754.0035)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Lloyd Park
          </text>
        </g>
        <g id="station-wellesley-road">
          <text id="station-wellesley-road" transform="matrix(0.9997 0 0 1 738.7767 731.8663)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Wellesley
            </tspan>
            <tspan x="5.4" y="4.5" fill="#1C3F94" className="blue-fill">
              Road
            </tspan>
          </text>
        </g>
        <g id="station-reeves-corner">
          <text
            id="station-reeves-corner"
            transform="matrix(0.9997 0 0 1 654.5742 731.5196)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Reeves Corner
          </text>
        </g>
        <g id="station-mitcham">
          <text
            id="station-mitcham"
            transform="matrix(0.9997 0 0 1 496.8636 752.3155)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Mitcham
          </text>
        </g>
        <g id="station-beddington-lane">
          <text id="station-beddington-lane" transform="matrix(0.9997 0 0 1 552.9672 752.3155)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Beddington
            </tspan>
            <tspan x="7.5" y="4.5" fill="#1C3F94" className="blue-fill">
              Lane
            </tspan>
          </text>
        </g>
        <g id="station-ampere-way">
          <text id="station-ampere-way" transform="matrix(0.9997 0 0 1 608.9132 752.3155)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Ampere
            </tspan>
            <tspan x="3.9" y="4.5" fill="#1C3F94" className="blue-fill">
              Way
            </tspan>
          </text>
        </g>
        <g id="station-wandle-park">
          <text id="station-wandle-park" transform="matrix(0.9997 0 0 1 657.7842 752.3155)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Wandle
            </tspan>
            <tspan x="3.6" y="4.5" fill="#1C3F94" className="blue-fill">
              Park
            </tspan>
          </text>
        </g>
        <g id="station-centrale">
          <text
            id="station-centrale"
            transform="matrix(0.9997 0 0 1 697.6472 731.8702)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Centrale
          </text>
        </g>
        <g id="station-church-street">
          <text id="station-church-street" transform="matrix(0.9997 0 0 1 706.1221 752.3155)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Church
            </tspan>
            <tspan x="1.2" y="4.5" fill="#1C3F94" className="blue-fill">
              Street
            </tspan>
          </text>
        </g>
        <g id="station-belgrave-walk">
          <text id="station-belgrave-walk" transform="matrix(0.9997 0 0 1 470.8075 752.3155)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Belgrave
            </tspan>
            <tspan x="3.9" y="4.5" fill="#1C3F94" className="blue-fill">
              Walk
            </tspan>
          </text>
        </g>
        <g id="station-phipps-bridge">
          <text id="station-phipps-bridge" transform="matrix(0.9997 0 0 1 448.8508 752.3155)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Phipps
            </tspan>
            <tspan x="0.5" y="4.5" fill="#1C3F94" className="blue-fill">
              Bridge
            </tspan>
          </text>
        </g>
        <g id="station-morden-road">
          <text id="station-morden-road" transform="matrix(0.9997 0 0 1 425.6494 752.3155)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Morden
            </tspan>
            <tspan x="3" y="4.5" fill="#1C3F94" className="blue-fill">
              Road
            </tspan>
          </text>
        </g>
        <g id="station-therapia-lane">
          <text id="station-therapia-lane" transform="matrix(0.9997 0 0 1 583.6974 752.3155)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Therapia
            </tspan>
            <tspan x="4.3" y="4.5" fill="#1C3F94" className="blue-fill">
              Lane
            </tspan>
          </text>
        </g>
        <g id="station-waddon-marsh">
          <text id="station-waddon-marsh" transform="matrix(0.9997 0 0 1 633.0121 752.3155)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Waddon
            </tspan>
            <tspan x="2.5" y="4.5" fill="#1C3F94" className="blue-fill">
              Marsh
            </tspan>
          </text>
        </g>
        <g id="station-george-street">
          <text id="station-george-street" transform="matrix(0.9997 0 0 1 737.5225 752.3155)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              George
            </tspan>
            <tspan x="1.1" y="4.5" fill="#1C3F94" className="blue-fill">
              Street
            </tspan>
          </text>
        </g>
        <g id="station-lebanon-road">
          <text id="station-lebanon-road" transform="matrix(0.9997 0 0 1 782.8029 735.4818)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Lebanon
            </tspan>
            <tspan x="3.9" y="4.5" fill="#1C3F94" className="blue-fill">
              Road
            </tspan>
          </text>
        </g>
        <g id="station-beckenham-road">
          <text id="station-beckenham-road" transform="matrix(0.9997 0 0 1 961.1408 682.4189)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Beckenham
            </tspan>
            <tspan x="7.2" y="4.5" fill="#1C3F94" className="blue-fill">
              Road
            </tspan>
          </text>
        </g>
        <g id="910GZZCRMJT-label">
          <g id="station-mitcham-junction">
            <text transform="matrix(0.9997 0 0 1 523.1871 752.3155)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Mitcham
              </tspan>
              <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
                Junction
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-east-croydon">
          <g id="station-east-croydon">
            <text transform="matrix(0.9997 0 0 1 772.1768 752.3156)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                East
              </tspan>
              <tspan x="-4.9" y="4.5" fill="#1C3F94" className="blue-fill">
                Croydon
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-elmers-end">
          <g id="station-elmers-end">
            <text transform="matrix(0.9997 0 0 1 897.8661 697.2582)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Elmers End
            </text>
          </g>
        </g>
        <g id="station-birkbeck">
          <g id="station-birkbeck">
            <text transform="matrix(0.9997 0 0 1 914.8126 682.5182)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Birkbeck
            </text>
          </g>
        </g>
        <g id="station-beckenham-junction">
          <g id="station-beckenham-junction">
            <text transform="matrix(0.9997 0 0 1 1002.3486 674.6883)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Beckenham
              </tspan>
              <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
                Junction
              </tspan>
            </text>
          </g>
        </g>
        <text
          id="station-swiss-cottage"
          transform="matrix(1 0 0 1 468.006 361.2861)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          Swiss Cottage
        </text>
        <g id="station-finchley-road">
          <text
            id="station-finchley-road"
            transform="matrix(1 0 0 1 395.0692 343.0689)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Finchley Road
          </text>
        </g>
        <g id="station-west-hampstead">
          <text id="station-west-hampstead" transform="matrix(1 0 0 1 432.5029 298.0205)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              West
            </tspan>
            <tspan x="-6.8" y="4.5" fill="#1C3F94" className="blue-fill">
              Hampstead
            </tspan>
          </text>
        </g>
        <text
          id="station-st-johns-wood"
          transform="matrix(1 0 0 1 467.7077 370.0614)"
          fill="#1C3F94"
          className="blue-fill"
          fontSize={4}
        >
          St John’s Wood
        </text>
        <g id="station-lancaster-gate">
          <g id="station-lancaster-gate">
            <text id="940GZZLULGT_label" transform="matrix(1 0 0 1 437.2931 454.2682)" fontSize={4}>
              <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                Lancaster
              </tspan>
              <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
                Gate
              </tspan>
            </text>
          </g>
        </g>
        <g id="station-lambeth-north">
          <text
            id="station-lambeth-north"
            transform="matrix(1 0 0 1 547.7393 573.0072)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Lambeth North
          </text>
        </g>
        <g id="station-custom-house-for-excel">
          <text id="station-custom-house-for-excel" transform="matrix(1 0 0 1 940.2543 479.2393)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              Custom House{' '}
            </tspan>
            <tspan x="0" y="4.5" fill="#1C3F94" className="blue-fill">
              for ExCeL
            </tspan>
          </text>
        </g>
        <g id="910GWEALING_label">
          <g id="910GWEALING">
            <g>
              <text id="station-west-ealing" transform="matrix(1 0 0 1 188.4802 452.0304)" fontSize={4}>
                <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                  West
                </tspan>
                <tspan x="-0.9" y="4.5" fill="#1C3F94" className="blue-fill">
                  Ealing
                </tspan>
              </text>
            </g>
          </g>
        </g>
        <text id="station-acton-main-line" transform="matrix(1 0 0 1 256.3011 430.183)" fontSize={4}>
          <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
            Acton
          </tspan>
          <tspan x="2.6" y="4.5" fill="#1C3F94" className="blue-fill">
            Main{' '}
          </tspan>
          <tspan x="4" y="9.1" fill="#1C3F94" className="blue-fill">
            Line
          </tspan>
        </text>
        <g id="station-southall">
          <text transform="matrix(1 0 0 1 147.6143 452.3885)" fill="#1C3F94" className="blue-fill" fontSize={4}>
            Southall
          </text>
        </g>
        <g id="station-west-drayton">
          <text transform="matrix(1 0 0 1 90.0517 427.9078)" fontSize={4}>
            <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
              West
            </tspan>
            <tspan x="-6.6" y="4.4" fill="#1C3F94" className="blue-fill">
              Drayton
            </tspan>
          </text>
        </g>
        <g id="station-iver">
          <text transform="matrix(1 0 0 1 93.1841 409.5398)" fill="#1C3F94" className="blue-fill" fontSize={4}>
            Iver
          </text>
        </g>
        <g id="station-langley">
          <text transform="matrix(1 0 0 1 84.7486 398.7185)" fill="#1C3F94" className="blue-fill" fontSize={4}>
            Langley
          </text>
        </g>
        <g id="station-burnham">
          <text transform="matrix(1 0 0 1 81.6537 375.4987)" fill="#1C3F94" className="blue-fill" fontSize={4}>
            Burnham
          </text>
        </g>
        <g id="station-taplow">
          <text transform="matrix(1 0 0 1 85.1991 363.8473)" fill="#1C3F94" className="blue-fill" fontSize={4}>
            Taplow
          </text>
        </g>
        <g id="station-hanwell">
          <text transform="matrix(1 0 0 1 164.1167 439.8917)" fill="#1C3F94" className="blue-fill" fontSize={4}>
            Hanwell
          </text>
        </g>
        <g id="station-hayes-and-harlington">
          <g id="910GHAYESAH_00000098918147531805998080000003780555461817480635_">
            <g>
              <text transform="matrix(1 0 0 1 114.9599 435.2877)" fontSize={4}>
                <tspan x="0" y="0" fill="#1C3F94" className="blue-fill">
                  Hayes and
                </tspan>
                <tspan x="-2.8" y="4.5" fill="#1C3F94" className="blue-fill">
                  Harlington
                </tspan>
              </text>
            </g>
          </g>
        </g>
        <g id="station-putney-bridge">
          <text
            id="station-putney-bridge"
            transform="matrix(1 0 0 1 341.2228 587.391)"
            fill="#1C3F94"
            className="blue-fill"
            fontSize={4}
          >
            Putney Bridge
          </text>
          <path
            id="940GZZLUPYB_river"
            fill="#1C3F94"
            d="M366.5,591l-0.8-1.1h0.8l0.5-0.6c0,0,0,0,0.1-0.1c0,0,0.1,0,0.1,0h0.6 v-0.2h0.3l0.2-0.4h0.2l-0.1,0.2l0.1,0.2h0.8v0.2h1.3c0,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.1l0.2,0.5h0.5l0.4,1.1 c0,0-0.5-0.3-1.3-0.3c-0.6,0-0.9,0.3-1.6,0.3c-0.4,0-1-0.2-1.5-0.2C367.3,590.8,366.7,590.9,366.5,591z M366.9,591.5 c0.3-0.1,0.6-0.2,1.3,0c0.3,0.1,0.6,0.1,0.9,0.1c0.4,0,0.6-0.1,0.9-0.1c0.3-0.1,0.6-0.1,0.8-0.1c0.4,0,0.7,0.1,0.9,0.2l-0.1-0.3 c-0.3-0.1-0.9-0.2-1.6,0c-0.3,0.1-0.6,0.1-0.9,0.1c-0.3,0-0.5,0-0.8-0.1c-0.9-0.2-1.2-0.1-1.6,0.1L366.9,591.5z M366.9,589.9 h0.8v-0.5h-0.3c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1L366.9,589.9z M368.9,589.9h0.8v-0.5h-0.8V589.9z M370.7,589.5 C370.7,589.5,370.7,589.4,370.7,589.5c-0.1-0.1-0.1-0.1-0.1-0.1H370v0.5h0.9L370.7,589.5z M367.9,589.9h0.8l0-0.5h-0.8V589.9z"
            className="blue-fill"
          />
        </g>
        <g id="station-canary-wharf">
          <g id="station-canary-wharf">
            <text
              id="940GZZLUCYF_label"
              transform="matrix(1 0 0 1 759.4282 507.2441)"
              fill="#1C3F94"
              className="blue-fill"
              fontSize={4}
            >
              Canary Wharf
            </text>
          </g>
          <path
            id="940GZZLUCYF_river"
            fill="#1C3F94"
            d="M753.1,506.7l-0.8-1.1h0.8l0.5-0.6c0,0,0,0,0.1-0.1c0,0,0.1,0,0.1,0h0.6 v-0.2h0.3l0.2-0.4h0.2l-0.1,0.2l0.1,0.2h0.8v0.2h1.3c0,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.1l0.2,0.5h0.5l0.4,1.1 c0,0-0.5-0.3-1.3-0.3c-0.6,0-0.9,0.3-1.6,0.3c-0.4,0-1-0.2-1.5-0.2C753.8,506.5,753.3,506.6,753.1,506.7z M753.4,507.2 c0.3-0.1,0.6-0.2,1.3,0c0.3,0.1,0.6,0.1,0.9,0.1c0.4,0,0.6-0.1,0.9-0.1c0.3-0.1,0.6-0.1,0.8-0.1c0.4,0,0.7,0.1,0.9,0.2l-0.1-0.3 c-0.3-0.1-0.9-0.2-1.6,0c-0.3,0.1-0.6,0.1-0.9,0.1c-0.3,0-0.5,0-0.8-0.1c-0.9-0.2-1.2-0.1-1.6,0.1L753.4,507.2z M753.4,505.6 h0.8v-0.5h-0.3c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1L753.4,505.6z M755.5,505.6h0.8v-0.5h-0.8V505.6z M757.2,505.2 C757.2,505.2,757.2,505.2,757.2,505.2c-0.1-0.1-0.1-0.1-0.1-0.1h-0.6v0.5h0.9L757.2,505.2z M754.4,505.6h0.8l0-0.5h-0.8V505.6z"
            className="blue-fill"
          />
        </g>
        <g id="station-westferry">
          <g id="station-westferry">
            <text
              id="940GZZDLWFE_label"
              transform="matrix(1 0 0 1 753.1208 475.1753)"
              fill="#1C3F94"
              className="blue-fill"
              fontSize={4}
            >
              Westferry
            </text>
          </g>
          <path
            id="940GZZDLWFE_river"
            fill="#1C3F94"
            d="M761.9,478.6l-0.8-1.1h0.8l0.5-0.6c0,0,0,0,0.1-0.1c0,0,0.1,0,0.1,0h0.6 v-0.2h0.3l0.2-0.4h0.2l-0.1,0.2l0.1,0.2h0.8v0.2h1.3c0,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.1l0.2,0.5h0.5l0.4,1.1 c0,0-0.5-0.3-1.3-0.3c-0.6,0-0.9,0.3-1.6,0.3c-0.4,0-1-0.2-1.5-0.2C762.6,478.3,762.1,478.5,761.9,478.6z M762.3,479.1 c0.3-0.1,0.6-0.2,1.3,0c0.3,0.1,0.6,0.1,0.9,0.1c0.4,0,0.6-0.1,0.9-0.1c0.3-0.1,0.6-0.1,0.8-0.1c0.4,0,0.7,0.1,0.9,0.2l-0.1-0.3 c-0.3-0.1-0.9-0.2-1.6,0c-0.3,0.1-0.6,0.1-0.9,0.1c-0.3,0-0.5,0-0.8-0.1c-0.9-0.2-1.2-0.1-1.6,0.1L762.3,479.1z M762.2,477.4 h0.8V477h-0.3c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1L762.2,477.4z M764.3,477.4h0.8V477h-0.8V477.4z M766.1,477.1 C766.1,477.1,766,477,766.1,477.1c-0.1-0.1-0.1-0.1-0.1-0.1h-0.6v0.5h0.9L766.1,477.1z M763.3,477.4h0.8l0-0.5h-0.8V477.4z"
            className="blue-fill"
          />
        </g>
        <g id="910GRDNGSTN_label_00000129190155746994144520000017749651954151174044_">
          <g id="station-reading">
            <text transform="matrix(1 0 0 1 84.425 329.0096)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Reading
            </text>
          </g>
        </g>
        <g id="station-twyford">
          <g id="station-twyford">
            <text transform="matrix(1 0 0 1 82.8356 340.721)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Twyford
            </text>
          </g>
        </g>
        <g id="station-maidenhead">
          <g id="station-maidenhead">
            <text transform="matrix(1 0 0 1 75.005 352.2547)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Maidenhead
            </text>
          </g>
        </g>
        <g id="station-slough">
          <g id="station-slough">
            <text transform="matrix(1 0 0 1 86.7459 387.1193)" fill="#1C3F94" className="blue-fill" fontSize={4}>
              Slough
            </text>
          </g>
        </g>
      </g>
      <g id="line-emirates-air-line">
        <g id="cab-air-line-940GZZALGWP_x5F_cab-air-line-940GZZALRDK">
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.3905"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d="M892.2,480.8 c0,0-2,0-4.4,0c-1.8,0-4.2,1-5.4,2.3l-25.6,25.6c-1.2,1.2-3.7,2.3-5.4,2.3c-2.1,0-4.1,0-4.1,0"
          />
          <path
            fill="none"
            stroke="#EE3124"
            strokeWidth="2.2707"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d="M892.2,480.8 c0,0-2,0-4.4,0c-1.8,0-4.2,1-5.4,2.3l-25.6,25.6c-1.2,1.2-3.7,2.3-5.4,2.3c-2.1,0-4.1,0-4.1,0"
          />
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.362"
            strokeMiterlimit="1"
            d="M892.2,480.8c0,0-2,0-4.4,0 c-1.8,0-4.2,1-5.4,2.3l-25.6,25.6c-1.2,1.2-3.7,2.3-5.4,2.3c-2.1,0-4.1,0-4.1,0"
          />
          <path
            fill="none"
            stroke="#EE3124"
            strokeWidth="0.454"
            strokeLinejoin="round"
            strokeMiterlimit="3.9938"
            d="M892.2,480.8 c0,0-2,0-4.4,0c-1.8,0-4.2,1-5.4,2.3l-25.6,25.6c-1.2,1.2-3.7,2.3-5.4,2.3c-2.1,0-4.1,0-4.1,0"
          />
        </g>
        <path
          id="cab-air-line_00000145776896600639083870000018157990878848952479_"
          fill="#EE3124"
          d="M870.8,501.2 c0-0.1,0.1-0.3,0.1-0.5c0,0,0.2-0.8-0.6-2.6l0.9-0.7l-0.2-0.2l-2.5,2.1l0.2,0.2l1.1-0.9c1.1,0.9,0.7,2,0.7,2s-0.2,0.6-0.6,0.5 c-0.4-0.1,0,0.2,0,0.2l1.3,0.2C871.1,501.5,870.8,501.3,870.8,501.2"
        />
        <rect
          id="cab-air-line_00000171712527939103587410000009145108687409734543_"
          x="868"
          y="498.1"
          transform="matrix(0.7128 -0.7013 0.7013 0.7128 -99.6222 752.9698)"
          fill="#D71920"
          width="3.3"
          height="0"
        />
        <polygon
          id="cab-air-line_00000150102589118854964030000017536527416837940892_"
          fill="#750D1D"
          points="870.8,497 868.5,499.3 868.5,499.3 871,497.2 "
        />
        <path
          id="cab-air-line_00000039133926065451892080000002798177853023531434_"
          fill="#EE3124"
          d="M871.8,501.7L871.8,501.7 c0-0.1-0.1-0.1-0.1-0.1c0,0,0,0,0,0l-2.1-0.4c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.4,0c0,0-0.1,0-0.1,0l-0.9,0.1c0,0,0,0,0,0 c0,0,0,0,0,0c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.2-0.3,0.5-0.4,0.7c-0.1,0.4-0.2,0.7-0.2,1.1c0,0.4,0.1,0.9,0.3,1.3 c0.1,0.2,0.2,0.5,0.4,0.7c0,0,0,0,0,0c0,0,0.1,0.1,0.2,0.1c0,0,0,0,0.1,0l0.7,0.1c0,0,0.1,0,0.1,0c0.1,0,0.3,0.1,0.4,0.1 c0,0,0,0,0.1,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3-0.1c0.3-0.1,0.6-0.1,0.8-0.2c0.2-0.1,0.4-0.1,0.7-0.2l0,0c0,0,0.1,0,0.1,0 c0,0,0.1,0,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2l0,0c0.1-0.1,0.1-0.2,0.2-0.4c0.2-0.4,0.3-0.9,0.2-1.3c0-0.3-0.1-0.7-0.2-1 C872.1,502,871.9,501.8,871.8,501.7"
        />
        <path
          id="cab-air-line_00000134948037991802869320000015846879729935756962_"
          fill="#FFFFFF"
          d="M869.3,501.5 c0,0.2,0,0.3-0.1,0.5c0,0.3,0,0.5-0.1,0.8c0,0.3,0,0.6,0,0.9c-0.2,0-0.3,0-0.5,0c-0.3,0-0.6,0-0.9-0.1c0,0-0.1,0-0.1,0 c0-0.2,0-0.4,0-0.7c0.1-0.4,0.2-0.8,0.4-1.2c0,0,0,0,0-0.1c0.1-0.1,0.1-0.1,0.2-0.1L869.3,501.5 C869.2,501.5,869.3,501.5,869.3,501.5"
          className="white-fill"
        />
        <path
          id="cab-air-line_00000183963892428757273770000004741770586710552714_"
          fill="#750D1D"
          d="M870.1,505.6 c0.3-0.1,0.6-0.1,0.8-0.2c0.2-0.1,0.4-0.1,0.7-0.2l0,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2l0,0 c0.1-0.1,0.1-0.2,0.2-0.4c0.2-0.4,0.3-0.9,0.2-1.3c0-0.3-0.1-0.7-0.2-1c-0.1-0.2-0.2-0.4-0.3-0.6l0,0c0,0,0-0.1-0.1-0.1 c0,0,0,0-0.1,0c-0.2,0-1.3-0.3-1.9-0.4c-0.1,0-0.1,0-0.2,0c-0.1,0.6-0.3,2.5,0,4.6c0.1,0,0.1,0,0.2,0 C869.9,505.6,870,505.6,870.1,505.6"
        />
        <path
          id="cab-air-line_00000020376833395498318450000014715247803622237074_"
          fill="#DCDDDE"
          d="M872.1,503.6c-0.1,0-0.1,0-0.2,0 c-0.2,0-0.4,0-0.6,0c-0.2,0-0.5,0-0.7,0l-0.6,0c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c0-0.4,0-0.8,0-2.2l1.6,0.2c0,0,0,0,0,0 c0,0,0.2,0,0.2,0.1c0,0,0,0,0,0c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0.1,0.1C872,502.7,872.1,503.1,872.1,503.6"
        />
      </g>
      <g id="interchange-circles">
        <g id="940gzzdlsit" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M818.3,312.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C814.9,313.8,816.4,312.3,818.3,312.3z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M817.2,316.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L817.2,316.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M818.4,313.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C818.6,312.9,818.4,313.1,818.4,313.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M818.6,314.3l0,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C818.7,314.1,818.6,314.3,818.6,314.3z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-jubilee_940gzzlungw_00000002379732568889581890000007481444717877284268_" data-linestop="jubilee">
          <g>
            <path
              fill="#1C3F94"
              d="M832,507.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C828.6,509,830.1,507.5,832,507.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M830.8,511.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L830.8,511.9z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M832,508.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C832.2,508.2,832,508.4,832,508.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M832.3,509.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C832.4,509.3,832.3,509.6,832.3,509.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="cab-emirates-air-line-940gzzalgwp" data-linestop="emirates-air-line">
          <g>
            <path
              fill="#1C3F94"
              d="M846.2,507.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C842.8,509,844.3,507.5,846.2,507.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M845.1,511.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L845.1,511.9z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M846.3,508.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C846.5,508.2,846.3,508.4,846.3,508.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M846.6,509.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H845c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C846.6,509.3,846.6,509.6,846.6,509.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-jubilee_940gzzlucgt_dlr-dlr_940gzzdlcgt" data-linestop="dlr">
          <g id="lul-jubilee_940gzzdlcgt_dlr-dlr_940gzzdlcgt" data-linestop="dlr">
            <rect
              x="844.9"
              y="461.4"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -78.2822 737.1635)"
              width="11.5"
              height="3.4"
            />
            <rect
              x="845"
              y="462.4"
              transform="matrix(0.7064 -0.7078 0.7078 0.7064 -77.906 738.1476)"
              fill="#FFFFFF"
              width="11.6"
              height="1.1"
              className="white-fill"
            />
          </g>
          <g id="lul-jubilee_940gzzdlcgt_dlr-dlr_940gzzdlcgt" data-linestop="dlr">
            <g>
              <path
                fill="#1C3F94"
                d="M846.5,463.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C843.1,465.5,844.6,463.9,846.5,463.9z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M845.3,468.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L845.3,468.4z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M846.5,465.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C846.8,464.6,846.5,464.8,846.5,465.1z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M846.8,466l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C846.9,465.8,846.8,466,846.8,466z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g id="dlr-dlr_940gzzdlcgt" data-linestop="dlr">
            <g>
              <path
                fill="#1C3F94"
                d="M855.1,455.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C851.7,456.8,853.2,455.3,855.1,455.3z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M853.9,459.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L853.9,459.7z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M855.2,456.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C855.4,456,855.2,456.2,855.2,456.5z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M855.4,457.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C855.5,457.1,855.4,457.3,855.4,457.3z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g
          id="elizabeth_910gcstmhsxr_dlr-dlr_940gzzdlcus_00000168801587651429415470000008915806282378950072_"
          data-linestop="elizabeth"
        >
          <g id="elizabeth_910gcstmhsxr_dlr-dlr_940gzzdlcus" data-linestop="elizabeth">
            <rect
              x="921.9"
              y="491.6"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -76.074 802.9266)"
              width="18.6"
              height="3.4"
            />
            <rect
              x="921.8"
              y="493.1"
              transform="matrix(0.7064 -0.7078 0.7078 0.7064 -76.1562 803.7858)"
              fill="#FFFFFF"
              width="17.9"
              height="1.1"
              className="white-fill"
            />
          </g>
          <g id="elizabeth_910gcstmhsxr" data-linestop="elizabeth">
            <g>
              <path
                fill="#1C3F94"
                d="M924.7,496.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C921.3,497.9,922.8,496.4,924.7,496.4z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M923.6,500.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L923.6,500.8z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M924.8,497.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C925,497,924.8,497.3,924.8,497.5z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M925.1,498.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C925.1,498.2,925.1,498.4,925.1,498.4z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g id="dlr-dlr_940gzzdlcus" data-linestop="dlr">
            <g>
              <path
                fill="#1C3F94"
                d="M937.5,483.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C934,485.2,935.6,483.7,937.5,483.7z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M936.3,488.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L936.3,488.1z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M937.5,484.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C937.7,484.3,937.5,484.5,937.5,484.8z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M937.8,485.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C937.9,485.5,937.8,485.7,937.8,485.7z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="dlr-dlr_940gzzdlrvc" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M893.6,464c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C890.2,465.6,891.7,464,893.6,464z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M892.5,468.4c0.2,0.5,0.7,0.9,1.3,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.9,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L892.5,468.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M893.7,465.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C893.9,464.6,893.7,464.9,893.7,465.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M894,466l0,0.4l-1.1,0c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2l1,0l0,0.3l-1.4,0c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.7,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C894,465.8,894,466,894,466z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="cab-emirates-air-line-940gzzalrdk" data-linestop="emirates-air-line">
          <g>
            <path
              fill="#1C3F94"
              d="M893.6,477.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C890.2,478.9,891.8,477.4,893.6,477.4z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M892.5,481.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L892.5,481.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M893.7,478.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C893.9,478.1,893.7,478.3,893.7,478.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M894,479.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C894,479.2,894,479.5,894,479.5z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlubxn" data-linestop="victoria">
          <g>
            <path
              fill="#1C3F94"
              d="M538.3,665.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C534.9,666.7,536.4,665.2,538.3,665.2z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M537.1,669.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L537.1,669.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M538.3,666.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C538.6,665.8,538.3,666.1,538.3,666.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M538.6,667.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C538.7,667,538.6,667.2,538.6,667.2z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g
          id="lul-piccadilly_940gzzluhr5_elizabeth_910ghtrwtm5_00000149362838546003164910000001842755586547195552_"
          data-linestop="elizabeth"
        >
          <g
            id="lul-piccadilly_940gzzluhr5_elizabeth_910ghtrwtm5_00000078014929324030536680000005873497618727625631_"
            data-linestop="elizabeth"
          >
            <g
              id="lul-piccadilly_940gzzluhr5_elizabeth_910ghtrwtm5_00000014618355497761905610000013602637054459153041_"
              data-linestop="elizabeth"
            >
              <path d="M86.7,621.8l-2.8,0c-0.6-1-1.7-1.7-3-1.7c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4c1.3,0,2.4-0.7,3-1.7h2.8 c0.6,1,1.7,1.7,3,1.7c1.9,0,3.4-1.5,3.4-3.4c0-1.9-1.5-3.4-3.4-3.4C88.4,620.1,87.3,620.8,86.7,621.8z" />
            </g>
            <path
              id="lul-piccadilly_940gzzluhr5_elizabeth_910ghtrwtm5_00000173131550721900110730000013613711323293451192_"
              fill="#FFFFFF"
              d=" M89.7,621.2c1.3,0,2.3,1,2.3,2.3c0,1.3-1,2.3-2.3,2.3c-1.1,0-1.9-0.7-2.2-1.7h-4.3c-0.3,1-1.1,1.7-2.2,1.7 c-1.3,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3c1.1,0,1.9,0.7,2.1,1.7l4.4,0C87.8,622,88.6,621.2,89.7,621.2z"
              className="white-fill"
              data-linestop="elizabeth"
            />
          </g>
          <path
            id="elizabeth_910ghtrwtm5_00000150061442222415137120000009733417874523069082_"
            d="M83.4,625.9 c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0C84.7,622.4,84.7,624.6,83.4,625.9z"
            data-linestop="elizabeth"
          />
          <g id="910ghtrwtm5_00000037656732878293708780000012499144185061949091_" data-linestop="elizabeth">
            <g>
              <path
                fill="#1C3F94"
                d="M80.9,620.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C77.5,621.6,79.1,620.1,80.9,620.1z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M79.8,624.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L79.8,624.5z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M81,621.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C81.2,620.7,81,621,81,621.2z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M81.3,622.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C81.4,621.9,81.3,622.1,81.3,622.1z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g
          id="lul-piccadilly_940gzzluhr4_elizabeth_910ghtrwtm4_00000059309422367344775850000003743545294023787932_"
          data-linestop="elizabeth"
        >
          <path d="M115,620.2l-2.3-2.3c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9 l2.3,2.3c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8C117.4,620.2,116.1,619.9,115,620.2z" />
        </g>
        <path
          id="lul-piccadilly_940gzzluhr4_elizabeth_910ghtrwtm4_00000158029076919608969160000009269617798270487228_"
          fill="#FFFFFF"
          d=" M117.5,621.9c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.8-0.8-0.9-1.9-0.3-2.8l-3.3-3.3c-0.9,0.5-2,0.4-2.8-0.3 c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.8,0.8,0.8,1.8,0.3,2.7l3.4,3.4C115.6,621,116.7,621.1,117.5,621.9z"
          className="white-fill"
          data-linestop="elizabeth"
        />
        <path
          id="lul-piccadilly_940gzzluhr4_elizabeth_910ghtrwtm4_00000029027531691661592270000009328999926215414702_"
          d=" M111.8,619.5c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0C113.2,616,113.2,618.1,111.8,619.5z"
          data-linestop="elizabeth"
        />
        <path
          id="lul-piccadilly_940gzzluhr4_elizabeth_910ghtrwtm4_00000036953195358606936150000012859471586082516909_"
          d=" M118.3,625.9c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0C119.6,622.4,119.6,624.6,118.3,625.9z"
          data-linestop="elizabeth"
        />
        <g id="940gzzluhr4_00000034775013943526548130000014797609883795056296_" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M115.9,620.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C112.4,621.6,114,620.1,115.9,620.1z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M114.7,624.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L114.7,624.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M115.9,621.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C116.1,620.7,115.9,621,115.9,621.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M116.2,622.1l-0.1,0.4H115c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C116.3,621.9,116.2,622.1,116.2,622.1z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="910ghtrwtm4_00000126323413272260993400000017929170403298411409_" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M109.4,613.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C106,615.2,107.5,613.6,109.4,613.6z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M108.3,618.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L108.3,618.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M109.5,614.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C109.7,614.3,109.5,614.5,109.5,614.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M109.7,615.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C109.8,615.5,109.7,615.7,109.7,615.7z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g
          id="lul-piccadilly_940gzzluhrc_elizabeth_910ghtrwapt_00000149344300376486089890000002884273455996891070_"
          data-linestop="elizabeth"
        >
          <g
            id="lul-piccadilly_940gzzluhrc_elizabeth_910ghtrwapt_00000120548295675542284920000011875538917579830429_"
            data-linestop="elizabeth"
          >
            <g
              id="lul-piccadilly_940gzzluhrc_elizabeth_910ghtrwapt_00000004537184692355528490000004962433620809017770_"
              data-linestop="elizabeth"
            >
              <path d="M114.7,575.2l-2-2c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9l2,2 c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8C117.1,575.2,115.9,574.9,114.7,575.2z" />
            </g>
            <path
              id="lul-piccadilly_940gzzluhrc_elizabeth_910ghtrwapt_00000145039495711012629260000006113342584314159801_"
              d=" M118,580.9c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0C119.4,577.4,119.4,579.6,118,580.9z"
              data-linestop="elizabeth"
            />
            <path
              id="lul-piccadilly_940gzzluhrc_elizabeth_910ghtrwapt_00000101063838723100257770000010991752183934185652_"
              d=" M111.9,574.7c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0C113.2,571.3,113.2,573.4,111.9,574.7z"
              data-linestop="elizabeth"
            />
            <path
              id="lul-piccadilly_940gzzluhrc_elizabeth_910ghtrwapt_00000047058929554826077510000015314787307191773063_"
              fill="#FFFFFF"
              d=" M117.2,576.9c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.8-0.8-0.9-1.9-0.3-2.8l-3-3c-0.9,0.5-2,0.4-2.8-0.3 c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.8,0.8,0.8,1.8,0.3,2.7l3.1,3.1C115.3,576,116.5,576.1,117.2,576.9z"
              className="white-fill"
              data-linestop="elizabeth"
            />
          </g>
          <g
            id="lul-piccadilly_940gzzluhrc_00000013871150955143521600000003715018517597852300_"
            data-linestop="piccadilly"
          >
            <g>
              <path
                fill="#1C3F94"
                d="M115.6,575.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C112.2,576.6,113.7,575.1,115.6,575.1z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M114.5,579.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L114.5,579.5z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M115.7,576.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C115.9,575.7,115.7,575.9,115.7,576.2z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M115.9,577.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C116,576.9,115.9,577.1,115.9,577.1z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g id="elizabeth_910ghtrwapt_00000138535925763651629230000014893195903929529479_" data-linestop="elizabeth">
            <g>
              <path
                fill="#1C3F94"
                d="M109.5,568.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C106.1,570.4,107.6,568.9,109.5,568.9z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M108.3,573.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L108.3,573.3z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M109.5,570.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C109.7,569.6,109.5,569.8,109.5,570.1z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M109.8,571l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C109.9,570.7,109.8,571,109.8,571z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="940gzzluhwt" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M137.6,553.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C134.1,554.7,135.7,553.1,137.6,553.1z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M136.4,557.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L136.4,557.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M137.6,554.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C137.8,553.8,137.6,554,137.6,554.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M137.9,555.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C138,554.9,137.9,555.2,137.9,555.2z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-piccadilly_940gzzlufpk_lul-victoria_940gzzlufpk" data-linestop="piccadilly">
          <g id="lul-piccadilly_lul-victoria_940gzzlufpk" data-linestop="piccadilly">
            <g>
              <path
                fill="#1C3F94"
                d="M676.4,274.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C673,275.9,674.5,274.4,676.4,274.4z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M675.2,278.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L675.2,278.8z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M676.4,275.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C676.6,275.1,676.4,275.3,676.4,275.6z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M676.7,276.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C676.8,276.2,676.7,276.5,676.7,276.5z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="910ghaggers" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M722.8,359.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C719.4,361,720.9,359.4,722.8,359.4z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M721.6,363.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L721.6,363.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M722.8,360.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C723.1,360.1,722.8,360.3,722.8,360.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M723.1,361.5l-0.1,0.4H722c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C723.2,361.3,723.1,361.5,723.1,361.5z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="910ghoxton" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M722.8,371.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C719.4,372.9,720.9,371.4,722.8,371.4z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M721.6,375.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L721.6,375.8z"
                className="white-fill"
              />
              <circle fill="#FFFFFF" cx="723.3" cy="372.5" r="0.5" className="white-fill" />
              <path
                fill="#FFFFFF"
                d="M723.1,373.4l-0.1,0.4H722c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C723.2,373.2,723.1,373.4,723.1,373.4z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gshrdhst_00000120539891150018392790000009088049450430928297_" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M722.8,390.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C719.4,391.6,720.9,390.1,722.8,390.1z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M721.6,394.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L721.6,394.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M722.8,391.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C723.1,390.7,722.8,391,722.8,391.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M723.1,392.1l-0.1,0.4H722c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C723.2,391.9,723.1,392.1,723.1,392.1z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-district_lul-hammersmith-city_940gzzlubwr_dlr-dlr_940gzzdlbow" data-linestop="dlr">
          <g id="940gzzlubwr" data-linestop="hammersmith-city">
            <g
              id="raillo-overground_910gshadwel_00000086669126133498476720000017242499253547962558_"
              data-linestop="london-overground"
            >
              <path
                fill="#FFFFFF"
                d="M806.8,399.8c-1.1,1.1-2.9,1.1-4,0c-1.1-1.1-1.1-2.9,0-4c1.1-1.1,2.9-1.1,4,0 C808,396.9,808,398.7,806.8,399.8z"
                className="white-fill"
              />
              <path d="M807.2,400.2c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C808.6,396.7,808.6,398.9,807.2,400.2z M803.2,399.4c0.9,0.9,2.3,0.9,3.2,0c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0 C802.3,397.1,802.3,398.6,803.2,399.4z" />
            </g>
          </g>
          <g id="940gzzdlbow" data-linestop="dlr">
            <g>
              <path
                fill="#1C3F94"
                d="M795.5,403.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,405.3,793.6,403.7,795.5,403.7z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M794.4,408.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L794.4,408.1z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M795.6,404.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C795.8,404.4,795.6,404.6,795.6,404.9z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M795.9,405.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,405.5,795.9,405.8,795.9,405.8z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="910gdals" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M716.5,342.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C713,344.5,714.6,342.9,716.5,342.9z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M715.3,347.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L715.3,347.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M716.5,344.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C716.7,343.6,716.5,343.8,716.5,344.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M716.8,345l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l-0.1,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C716.9,344.8,716.8,345,716.8,345z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlpud" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M825.6,364.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C822.2,365.7,823.8,364.2,825.6,364.2z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M824.5,368.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L824.5,368.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M825.7,365.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C825.9,364.9,825.7,365.1,825.7,365.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M826,366.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C826,366,826,366.2,826,366.2z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdldev_00000060717490731526589720000017636690500005791648_" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M795.5,413.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,414.9,793.6,413.4,795.5,413.4z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M794.4,417.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L794.4,417.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.6,414.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C795.8,414,795.6,414.2,795.6,414.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.8,415.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,415.2,795.8,415.4,795.8,415.4z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlldp_00000170962376432300330940000016050528570725836433_" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M795.5,423.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,425.4,793.6,423.9,795.5,423.9z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M794.4,428.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L794.4,428.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.6,425.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C795.8,424.6,795.6,424.8,795.6,425.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.8,426l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,425.7,795.8,426,795.8,426z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlall_00000178192421655648458330000009552956466833942190_" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M795.5,434.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,436.1,793.6,434.5,795.5,434.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M794.4,438.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L794.4,438.9z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.6,435.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C795.8,435.2,795.6,435.4,795.6,435.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.8,436.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,436.4,795.8,436.6,795.8,436.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlpop" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M795.5,464c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,465.5,793.7,464,795.5,464z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M794.4,468.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L794.4,468.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.6,465.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C795.8,464.6,795.6,464.8,795.6,465.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.9,466l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,465.8,795.9,466,795.9,466z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdllim_00000078735451062814318420000017249959931345083820_" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M748.3,464c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C744.9,465.5,746.4,464,748.3,464z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M747.2,468.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L747.2,468.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M748.4,465.1c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S748.4,464.8,748.4,465.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M748.6,466l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C748.7,465.8,748.6,466,748.6,466z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlwfe_00000051366700068016515890000006819001329041465523_" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M764.2,464c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C760.8,465.5,762.4,464,764.2,464z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M763.1,468.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L763.1,468.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M764.3,465.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C764.5,464.6,764.3,464.8,764.3,465.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M764.6,466l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H763c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C764.6,465.8,764.6,466,764.6,466z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlbla" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M810.3,464c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C806.8,465.5,808.4,464,810.3,464z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M809.1,468.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L809.1,468.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M810.3,465.1c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S810.3,464.8,810.3,465.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M810.6,466l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H809c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C810.7,465.8,810.6,466,810.6,466z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlein" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M831.8,464c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C828.4,465.5,829.9,464,831.8,464z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M830.7,468.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L830.7,468.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M831.9,465.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C832.1,464.6,831.9,464.8,831.9,465.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M832.1,466l-0.1,0.4H831c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C832.2,465.8,832.1,466,832.1,466z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlpre_00000045585527700284663140000012862165087860355518_" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M946.7,492.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C943.3,494.2,944.8,492.6,946.7,492.6z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M945.6,497.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L945.6,497.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M946.8,493.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C947,493.3,946.8,493.5,946.8,493.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M947.1,494.7L947,495h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C947.1,494.5,947.1,494.7,947.1,494.7z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlral_00000114064615361443882960000013621504058114869413_" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M954.4,508.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C951,509.9,952.5,508.4,954.4,508.4z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M953.2,512.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L953.2,512.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M954.4,509.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C954.7,509,954.4,509.3,954.4,509.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M954.7,510.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C954.8,510.2,954.7,510.4,954.7,510.4z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlbpk_00000091001153961424956550000003985800726510184107_" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M954.4,519.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C951,520.8,952.5,519.3,954.4,519.3z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M953.2,523.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L953.2,523.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M954.4,520.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C954.7,520,954.4,520.2,954.4,520.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M954.7,521.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C954.8,521.1,954.7,521.4,954.7,521.4z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlcyp_00000054963674974868968650000002641607823980542639_" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M954.6,529.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C951.1,531.2,952.7,529.7,954.6,529.7z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M953.4,534.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L953.4,534.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M954.6,530.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C954.8,530.3,954.6,530.6,954.6,530.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M954.9,531.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C955,531.5,954.9,531.7,954.9,531.7z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlgal" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M908.4,522.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C905,524.1,906.5,522.6,908.4,522.6z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M907.2,527c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L907.2,527z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M908.4,523.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C908.6,523.3,908.4,523.5,908.4,523.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M908.7,524.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C908.8,524.4,908.7,524.6,908.7,524.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlbec" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M908.4,539.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C905,540.7,906.5,539.1,908.4,539.1z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M907.2,543.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L907.2,543.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M908.4,540.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C908.6,539.8,908.4,540,908.4,540.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M908.7,541.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C908.8,541,908.7,541.2,908.7,541.2z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlwla_00000135665390014329942660000003822197735898203042_" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M908.4,581.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C905,583.2,906.5,581.7,908.4,581.7z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M907.2,586.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L907.2,586.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M908.4,582.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C908.7,582.3,908.4,582.5,908.4,582.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M908.7,583.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C908.8,583.5,908.7,583.7,908.7,583.7z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gbkrvs_00000158015223656448540840000009722648417887021192_" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M987.6,402.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C984.2,404,985.7,402.4,987.6,402.4z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M986.4,406.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L986.4,406.9z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M987.6,403.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C987.9,403.1,987.6,403.3,987.6,403.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M987.9,404.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C988,404.3,987.9,404.5,987.9,404.5z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gwolwxr" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M928.9,581.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C925.5,583.2,927,581.7,928.9,581.7z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M927.8,586.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L927.8,586.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M929,582.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C929.2,582.3,929,582.5,929,582.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M929.3,583.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C929.3,583.5,929.3,583.7,929.3,583.7z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlkgv_00000099632464514562687880000007653793493071677056_" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M908.4,551.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C905,553.4,906.5,551.9,908.4,551.9z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M907.2,556.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L907.2,556.3z"
                className="white-fill"
              />
              <circle fill="#FFFFFF" cx="908.9" cy="553" r="0.5" className="white-fill" />
              <path
                fill="#FFFFFF"
                d="M908.7,553.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C908.8,553.7,908.7,553.9,908.7,553.9z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdllca" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M908.4,539.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C905,540.7,906.5,539.1,908.4,539.1z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M907.2,543.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L907.2,543.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M908.4,540.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C908.6,539.8,908.4,540,908.4,540.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M908.7,541.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C908.8,541,908.7,541.2,908.7,541.2z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlpdk" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M908.4,522.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C905,524.1,906.5,522.6,908.4,522.6z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M907.2,527c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L907.2,527z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M908.4,523.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C908.6,523.3,908.4,523.5,908.4,523.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M908.7,524.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C908.8,524.4,908.7,524.6,908.7,524.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlwsv_00000052082928809597540980000012108304485749378953_" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M903.8,502.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C900.4,504,901.9,502.4,903.8,502.4z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M902.6,506.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L902.6,506.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M903.8,503.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C904.1,503.1,903.8,503.3,903.8,503.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M904.1,504.5l-0.1,0.4H903c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C904.2,504.2,904.1,504.5,904.1,504.5z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlelv" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M795.5,622.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,624.5,793.6,622.9,795.5,622.9z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M794.3,627.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L794.3,627.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.6,624.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C795.8,623.6,795.6,623.8,795.6,624.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.8,625l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,624.8,795.8,625,795.8,625z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdldep" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M795.5,611.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,613,793.6,611.5,795.5,611.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M794.3,615.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L794.3,615.9z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.6,612.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C795.8,612.1,795.6,612.3,795.6,612.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.8,613.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,613.3,795.8,613.5,795.8,613.5z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlgre" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M795.5,600c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,601.5,793.6,600,795.5,600z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M794.3,604.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L794.3,604.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.6,601.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5 C795.8,600.6,795.6,600.8,795.6,601.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.8,602l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,601.8,795.8,602,795.8,602z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlcut" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M795.5,587.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,588.9,793.6,587.3,795.5,587.3z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M794.3,591.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L794.3,591.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.6,588.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C795.8,588,795.6,588.2,795.6,588.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.8,589.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,589.1,795.8,589.4,795.8,589.4z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlisl" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M795.5,567c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,568.5,793.6,567,795.5,567z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M794.4,571.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L794.4,571.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.6,568.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C795.8,567.7,795.6,567.9,795.6,568.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.8,569.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,568.8,795.8,569.1,795.8,569.1z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlmud" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M795.5,555.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,556.8,793.6,555.3,795.5,555.3z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M794.4,559.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L794.4,559.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.6,556.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C795.8,556,795.6,556.2,795.6,556.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.8,557.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,557.1,795.8,557.4,795.8,557.4z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlcla" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M795.5,543.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,545.1,793.6,543.6,795.5,543.6z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M794.4,548c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L794.4,548z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.6,544.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C795.8,544.3,795.6,544.5,795.6,544.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.8,545.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0h1.3 c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,545.4,795.8,545.7,795.8,545.7z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlsoq" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M795.5,531.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,533.4,793.6,531.9,795.5,531.9z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M794.4,536.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L794.4,536.3z"
                className="white-fill"
              />
              <circle fill="#FFFFFF" cx="796.1" cy="533.1" r="0.5" className="white-fill" />
              <path
                fill="#FFFFFF"
                d="M795.8,534l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,533.7,795.8,534,795.8,534z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlheq" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M795.5,520.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,521.7,793.7,520.2,795.5,520.2z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M794.4,524.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L794.4,524.6z"
                className="white-fill"
              />
              <circle fill="#FFFFFF" cx="796.1" cy="521.4" r="0.5" className="white-fill" />
              <path
                fill="#FFFFFF"
                d="M795.9,522.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,522,795.9,522.2,795.9,522.2z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlwiq" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M795.5,481.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,483.2,793.6,481.7,795.5,481.7z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M794.4,486.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L794.4,486.1z"
                className="white-fill"
              />
              <circle fill="#FFFFFF" cx="796.1" cy="482.9" r="0.5" className="white-fill" />
              <path
                fill="#FFFFFF"
                d="M795.8,483.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,483.5,795.8,483.8,795.8,483.8z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdllew" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M795.5,634.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,635.9,793.6,634.4,795.5,634.4z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M794.3,638.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L794.3,638.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.6,635.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C795.8,635,795.6,635.3,795.6,635.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.8,636.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,636.2,795.8,636.4,795.8,636.4z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlubmy" data-linestop="jubilee">
          <g>
            <path
              fill="#1C3F94"
              d="M674,527.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C670.6,529.1,672.1,527.6,674,527.6z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M672.8,532c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L672.8,532z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M674,528.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C674.3,528.2,674,528.4,674,528.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M674.3,529.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C674.4,529.4,674.3,529.6,674.3,529.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluswk" data-linestop="jubilee">
          <g>
            <path
              fill="#1C3F94"
              d="M565.8,553.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C562.3,554.7,563.9,553.1,565.8,553.1z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M564.6,557.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L564.6,557.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M565.8,554.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C566,553.8,565.8,554,565.8,554.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M566.1,555.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C566.2,555,566.1,555.2,566.1,555.2z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlshs" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M854.8,356.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C851.3,357.9,852.9,356.4,854.8,356.4z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M853.6,360.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L853.6,360.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M854.8,357.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C855,357.1,854.8,357.3,854.8,357.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M855.1,358.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l-0.1,0.3h-1.4 c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C855.2,358.2,855.1,358.5,855.1,358.5z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="dlr-dlr_940gzzdlabr" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M854.8,374.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C851.4,375.8,852.9,374.3,854.8,374.3z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M853.6,378.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L853.6,378.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M854.8,375.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C855.1,374.9,854.8,375.2,854.8,375.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M855.1,376.3l-0.1,0.4H854c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C855.2,376.1,855.1,376.3,855.1,376.3z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlstl" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M854.8,426.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C851.4,427.8,852.9,426.3,854.8,426.3z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M853.7,430.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L853.7,430.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M854.9,427.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C855.1,426.9,854.9,427.1,854.9,427.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M855.1,428.3l-0.1,0.4H854c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C855.2,428.1,855.1,428.3,855.1,428.3z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-jubilee_lul-piccadilly_lul-victoria_940gzzlugpk" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M475.8,461.4c1.9,0,3.4,1.5,3.4,3.4s-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4S473.9,461.4,475.8,461.4z "
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M474.6,465.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L474.6,465.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M475.8,462.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C476,462,475.8,462.3,475.8,462.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M476.1,463.4l-0.1,0.4H475c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C476.2,463.2,476.1,463.4,476.1,463.4z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlucal" data-linestop="metropolitan">
          <g>
            <path
              fill="#1C3F94"
              d="M144.4,157.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C141,158.9,142.5,157.3,144.4,157.3z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M143.2,161.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L143.2,161.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M144.4,158.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C144.7,158,144.4,158.2,144.4,158.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M144.7,159.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C144.8,159.1,144.7,159.4,144.7,159.4z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlucyd" data-linestop="metropolitan">
          <g>
            <path
              fill="#1C3F94"
              d="M177.1,167.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C173.7,169.5,175.2,167.9,177.1,167.9z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M175.9,172.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L175.9,172.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M177.2,169.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C177.4,168.6,177.2,168.8,177.2,169.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M177.4,170l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C177.5,169.8,177.4,170,177.4,170z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlupnr" data-linestop="metropolitan">
          <g>
            <path
              fill="#1C3F94"
              d="M239.9,230.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C236.5,232,238.1,230.4,239.9,230.4z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M238.8,234.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L238.8,234.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M240,231.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C240.2,231.1,240,231.3,240,231.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M240.3,232.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C240.3,232.3,240.3,232.5,240.3,232.5z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluhcl" data-linestop="northern">
          <g>
            <path
              fill="#1C3F94"
              d="M471.1,239.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C467.7,240.7,469.2,239.2,471.1,239.2z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M469.9,243.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L469.9,243.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M471.1,240.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C471.4,239.9,471.1,240.1,471.1,240.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M471.4,241.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C471.5,241,471.4,241.3,471.4,241.3z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluegw" data-linestop="northern">
          <g>
            <path
              fill="#1C3F94"
              d="M431.9,200c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C428.4,201.5,430,200,431.9,200z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M430.7,204.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L430.7,204.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M431.9,201.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C432.1,200.6,431.9,200.9,431.9,201.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M432.2,202l-0.1,0.4H431c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C432.3,201.8,432.2,202,432.2,202z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlukby" data-linestop="jubilee">
          <g>
            <path
              fill="#1C3F94"
              d="M369.9,244.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C366.5,245.9,368,244.3,369.9,244.3z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M368.8,248.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L368.8,248.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M370,245.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C370.2,245,370,245.2,370,245.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M370.2,246.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C370.3,246.1,370.2,246.4,370.2,246.4z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluoak" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M682.2,172.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C678.8,173.7,680.3,172.2,682.2,172.2z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M681.1,176.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L681.1,176.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M682.3,173.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C682.5,172.8,682.3,173.1,682.3,173.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M682.6,174.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H681c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C682.6,174,682.6,174.2,682.6,174.2z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlusvs" data-linestop="victoria">
          <path
            fill="#FFFFFF"
            d="M716.1,263.5c-1.1,1.1-2.9,1.1-4,0c-1.1-1.1-1.1-2.9,0-4c1.1-1.1,2.9-1.1,4,0 C717.2,260.6,717.2,262.4,716.1,263.5z"
            className="white-fill"
          />
          <path d="M716.5,263.9c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C717.9,260.5,717.9,262.6,716.5,263.9z M712.5,263.1c0.9,0.9,2.3,0.9,3.2,0c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0 C711.6,260.8,711.6,262.3,712.5,263.1z" />
        </g>
        <g id="940gzzluksh" data-linestop="northern">
          <path
            fill="#FFFFFF"
            d="M581.9,300.3c-1.1,1.1-2.9,1.1-4,0c-1.1-1.1-1.1-2.9,0-4c1.1-1.1,2.9-1.1,4,0 C583,297.4,583,299.2,581.9,300.3z"
            className="white-fill"
          />
          <path d="M582.3,300.7c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C583.7,297.2,583.7,299.4,582.3,300.7z M578.3,299.9c0.9,0.9,2.3,0.9,3.2,0c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0 C577.4,297.6,577.4,299,578.3,299.9z" />
        </g>
        <g id="lul-bakerloo_lul-northern_940gzzlueac" data-linestop="northern">
          <path
            fill="#FFFFFF"
            d="M555.4,613.6c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C554.2,610.8,555.4,612,555.4,613.6z"
            className="white-fill"
          />
          <path d="M556,613.6c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C554.5,610.2,556,611.7,556,613.6z M552.6,615.9c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C550.3,614.9,551.3,615.9,552.6,615.9z" />
        </g>
        <g id="lul-northern_lul-victoria_940gzzluskw" data-linestop="victoria">
          <path
            fill="#FFFFFF"
            d="M517.4,644.9c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C516.1,642,517.4,643.3,517.4,644.9z"
            className="white-fill"
          />
          <path d="M517.9,644.9c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C516.4,641.5,517.9,643,517.9,644.9z M514.5,647.2c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3C512.2,646.1,513.3,647.2,514.5,647.2z" />
        </g>
        <g id="raillo-overground_910gclphhs" data-linestop="london-overground">
          <path
            fill="#FFFFFF"
            d="M501.9,647.1c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C500.6,644.2,501.9,645.5,501.9,647.1z"
            className="white-fill"
          />
          <path d="M502.5,647.1c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C500.9,643.7,502.5,645.2,502.5,647.1 z M499,649.3c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3C496.8,648.3,497.8,649.3,499,649.3z" />
        </g>
        <g id="940gzzlucpn" data-linestop="northern">
          <path
            fill="#FFFFFF"
            d="M501.9,660.4c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C500.6,657.5,501.9,658.8,501.9,660.4z"
            className="white-fill"
          />
          <path d="M502.5,660.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C500.9,657,502.5,658.5,502.5,660.4z M499,662.7c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3C496.8,661.7,497.8,662.7,499,662.7z" />
        </g>
        <g id="940gzzlublm" data-linestop="northern">
          <path
            fill="#FFFFFF"
            d="M473.2,689c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C471.9,686.2,473.2,687.5,473.2,689z"
            className="white-fill"
          />
          <path d="M473.7,689c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C472.2,685.6,473.7,687.1,473.7,689z M470.3,691.3c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C468.1,690.3,469.1,691.3,470.3,691.3z" />
        </g>
        <g id="940gzzluswn" data-linestop="northern">
          <path
            fill="#FFFFFF"
            d="M437.1,725.1c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C435.8,722.2,437.1,723.5,437.1,725.1z"
            className="white-fill"
          />
          <path d="M437.7,725.1c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C436.2,721.7,437.7,723.2,437.7,725.1 z M434.3,727.4c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C432,726.3,433,727.4,434.3,727.4z" />
        </g>
        <g id="910gnorwdj" data-linestop="london-overground">
          <path
            fill="#FFFFFF"
            d="M725.6,694c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C724.3,691.2,725.6,692.5,725.6,694z"
            className="white-fill"
          />
          <path d="M726.1,694c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C724.6,690.6,726.1,692.1,726.1,694z M722.7,696.3c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C720.5,695.3,721.5,696.3,722.7,696.3z" />
        </g>
        <g id="940gzzluwrp" data-linestop="central">
          <path
            fill="#FFFFFF"
            d="M164.8,213.9c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C163.5,211.1,164.8,212.3,164.8,213.9z"
            className="white-fill"
          />
          <path d="M165.4,213.9c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C163.8,210.5,165.4,212,165.4,213.9z M162,216.2c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C159.7,215.2,160.7,216.2,162,216.2z" />
        </g>
        <g id="lul-bakerloo_940gzzluken_raillo-overground_910gkton" data-linestop="london-overground">
          <path
            fill="#FFFFFF"
            d="M323.8,245.9c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C322.5,243,323.8,244.3,323.8,245.9z"
            className="white-fill"
          />
          <path d="M324.4,245.9c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C322.8,242.5,324.4,244,324.4,245.9z M320.9,248.1c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C318.7,247.1,319.7,248.1,320.9,248.1z" />
        </g>
        <g id="lul-metropolitan_910gwmby" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M278.5,257.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C275.1,259.3,276.6,257.8,278.5,257.8z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M278.5,264.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1 C281.5,262.9,280.2,264.3,278.5,264.3L278.5,264.3z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M277.3,262.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L277.3,262.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M278.5,258.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C278.8,258.4,278.5,258.7,278.5,258.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M278.8,259.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C278.9,259.6,278.8,259.8,278.8,259.8z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-metropolitan_940gzzlunkp" data-linestop="metropolitan">
          <path
            fill="#FFFFFF"
            d="M308.4,261.3c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C307.1,258.5,308.4,259.7,308.4,261.3z"
            className="white-fill"
          />
          <path d="M308.9,261.3c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C307.4,257.9,308.9,259.4,308.9,261.3 z M305.5,263.6c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C303.2,262.6,304.3,263.6,305.5,263.6z" />
        </g>
        <g id="940gzzlusrp" data-linestop="central">
          <path
            fill="#FFFFFF"
            d="M164.8,291.5c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C163.5,288.6,164.8,289.9,164.8,291.5z"
            className="white-fill"
          />
          <path d="M165.4,291.5c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C163.8,288.1,165.4,289.6,165.4,291.5 z M162,293.8c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C159.7,292.7,160.7,293.8,162,293.8z" />
        </g>
        <g id="lul-metropolitan_lul-piccadilly_940gzzluryl" data-linestop="piccadilly">
          <path
            fill="#FFFFFF"
            d="M218,257c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C216.7,254.2,218,255.5,218,257z"
            className="white-fill"
          />
          <path d="M218.6,257c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C217,253.6,218.6,255.1,218.6,257z M215.2,259.3c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C212.9,258.3,213.9,259.3,215.2,259.3z" />
        </g>
        <g id="910gbushydc" data-linestop="london-overground">
          <path
            fill="#FFFFFF"
            d="M325.4,175.8c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C324.1,172.9,325.4,174.2,325.4,175.8z"
            className="white-fill"
          />
          <path d="M325.9,175.8c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C324.4,172.4,325.9,173.9,325.9,175.8 z M322.5,178.1c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C320.3,177,321.3,178.1,322.5,178.1z" />
        </g>
        <g id="lul-bakerloo_940gzzluqps_raillo-overground_910gqprk" data-linestop="london-overground">
          <path
            fill="#FFFFFF"
            d="M323.9,341.7c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C322.6,338.8,323.9,340.1,323.9,341.7z"
            className="white-fill"
          />
          <path d="M324.5,341.7c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C322.9,338.2,324.5,339.8,324.5,341.7 z M321,343.9c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C318.8,342.9,319.8,343.9,321,343.9z" />
        </g>
        <g
          id="lul-piccadilly_940gzzlupkr_00000087374284608552482550000004481907199523986832_"
          data-linestop="piccadilly"
        >
          <path
            fill="#FFFFFF"
            d="M227.9,428.5c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C226.6,425.7,227.9,427,227.9,428.5z"
            className="white-fill"
          />
          <path d="M228.4,428.5c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C226.9,425.1,228.4,426.7,228.4,428.5 z M225,430.8c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C222.8,429.8,223.8,430.8,225,430.8z" />
        </g>
        <g id="lul-central_940gzzluhgr_00000049929893445449059800000000591078849025124540_" data-linestop="central">
          <path
            fill="#FFFFFF"
            d="M238.8,417.7c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C237.5,414.8,238.8,416.1,238.8,417.7z"
            className="white-fill"
          />
          <path d="M239.3,417.7c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C237.8,414.2,239.3,415.8,239.3,417.7 z M235.9,419.9c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C233.7,418.9,234.7,419.9,235.9,419.9z" />
        </g>
        <g id="lul-central_lul-district_lul-hammersmith-city_940gzzlumed" data-linestop="hammersmith-city">
          <path
            id="lul-central_lul-district_lul-hammersmith-city_940gzzlumed"
            d="M776.6,394.8v-0.9c1-0.6,1.7-1.7,1.7-3 c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4c0,1.3,0.7,2.4,1.7,3v0.9c-1,0.6-1.7,1.7-1.7,3c0,1.9,1.5,3.4,3.4,3.4 c1.9,0,3.4-1.5,3.4-3.4C778.3,396.5,777.6,395.4,776.6,394.8z"
            data-linestop="hammersmith-city"
          />
          <path
            id="lul-central_940gzzlumed"
            d="M774.9,394.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4 C778.3,392.9,776.7,394.4,774.9,394.4z"
            data-linestop="hammersmith-city"
          />
          <path
            id="lul-district_lul-hammersmith-city_940gzzlumed"
            d="M774.9,401.2c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4C778.3,399.7,776.7,401.2,774.9,401.2z"
            data-linestop="hammersmith-city"
          />
          <g id="lul-central_lul-district_lul-hammersmith-city_940gzzlumed" data-linestop="hammersmith-city">
            <path
              fill="#FFFFFF"
              d="M777.1,397.8c0,1.3-1,2.3-2.3,2.3c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.7-1.9,1.7-2.2v-2.4 c-1-0.3-1.7-1.1-1.7-2.2c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3c0,1.1-0.7,1.9-1.7,2.2v2.4 C776.4,395.8,777.1,396.7,777.1,397.8z"
              className="white-fill"
            />
          </g>
        </g>
        <g id="lul-circle_lul-district_lul-hammersmith-city_940gzzluerc" data-linestop="hammersmith-city">
          <path
            id="lul-circle_lul-hammersmith-city_940gzzluerc"
            d="M420.4,380.1c0,1.9-1.5,3.4-3.4,3.4 c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C418.9,376.7,420.4,378.2,420.4,380.1z"
            data-linestop="hammersmith-city"
          />
          <path
            id="lul-circle_lul-district_940gzzluerc"
            d="M420.4,386.1c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4C418.9,382.7,420.4,384.2,420.4,386.1z"
            data-linestop="hammersmith-city"
          />
          <path
            id="lul-circle_lul-district_lul-hammersmith-city_940gzzluerc"
            fill="#FFFFFF"
            d="M414.7,380.1 c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3c0,1.1-0.7,2-1.7,2.2v1.6c1,0.3,1.7,1.1,1.7,2.2c0,1.3-1,2.3-2.3,2.3 c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.7-1.9,1.7-2.2v-1.6C415.4,382.1,414.7,381.2,414.7,380.1z"
            className="white-fill"
            data-linestop="hammersmith-city"
          />
        </g>
        <g id="940gzzluods_00000001637023268632927050000015222841851861694910_" data-linestop="northern">
          <path
            fill="#FFFFFF"
            d="M638.7,385.9c-1.1,1.1-2.9,1.1-4,0c-1.1-1.1-1.1-2.9,0-4c1.1-1.1,2.9-1.1,4,0 C639.8,383,639.8,384.8,638.7,385.9z"
            className="white-fill"
          />
          <path d="M639.1,386.3c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0C640.4,382.8,640.4,385,639.1,386.3z M635.1,385.5c0.9,0.9,2.3,0.9,3.2,0c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0C634.2,383.2,634.2,384.6,635.1,385.5z" />
        </g>
        <g id="lul-central_lul-circle_lul-district_940gzzlunhg" data-linestop="district">
          <path
            fill="#FFFFFF"
            d="M392.4,452.1c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C391.1,449.3,392.4,450.6,392.4,452.1z"
            className="white-fill"
          />
          <path d="M393,452.1c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C391.4,448.7,393,450.2,393,452.1z M389.6,454.4c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C387.3,453.4,388.3,454.4,389.6,454.4z" />
        </g>
        <g id="lul-central_940gzzlusbc" data-linestop="central">
          <path
            fill="#FFFFFF"
            d="M360.7,452c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C359.4,449.2,360.7,450.5,360.7,452z"
            className="white-fill"
          />
          <path d="M361.2,452c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C359.7,448.6,361.2,450.2,361.2,452z M357.8,454.3c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C355.5,453.3,356.6,454.3,357.8,454.3z" />
        </g>
        <g id="940gzzluwcy" data-linestop="central">
          <path
            fill="#FFFFFF"
            d="M327,452c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C325.7,449.2,327,450.5,327,452z"
            className="white-fill"
          />
          <path d="M327.5,452c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C326,448.6,327.5,450.2,327.5,452z M324.1,454.3c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C321.8,453.3,322.9,454.3,324.1,454.3z" />
        </g>
        <g
          id="lul-circle_lul-district_940gzzlucst_00000114777851626122284770000007058469841710197649_"
          data-linestop="district"
        >
          <circle fill="#FFFFFF" cx="613.7" cy="483.5" r="2.8" className="white-fill" />
          <path d="M617.1,483.5c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C615.6,480,617.1,481.6,617.1,483.5z M613.7,485.7c1.3,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3S612.4,485.7,613.7,485.7z" />
        </g>
        <g id="lul-bakerloo_lul-central_lul-victoria_940gzzluoxc" data-linestop="victoria">
          <path
            fill="#FFFFFF"
            d="M498.9,432.3c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C497.6,429.5,498.9,430.8,498.9,432.3z"
            className="white-fill"
          />
          <path d="M499.4,432.3c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C497.9,428.9,499.4,430.5,499.4,432.3 z M496,434.6c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C493.8,433.6,494.8,434.6,496,434.6z" />
        </g>
        <g id="lul-northern_lul-victoria_940gzzluwrr" data-linestop="victoria">
          <path
            fill="#FFFFFF"
            d="M539.6,391.6c0,1.6-1.3,2.8-2.8,2.8s-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8S539.6,390.1,539.6,391.6z"
            className="white-fill"
          />
          <path d="M540.2,391.6c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C538.6,388.2,540.2,389.7,540.2,391.6 z M536.7,393.9c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3C534.5,392.9,535.5,393.9,536.7,393.9z" />
        </g>
        <g id="lul-northern_940gzzluctn" data-linestop="northern">
          <path
            fill="#FFFFFF"
            d="M556.2,334.7c0,1.6-1.3,2.8-2.8,2.8s-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8S556.2,333.1,556.2,334.7z"
            className="white-fill"
          />
          <path d="M556.7,334.7c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C555.2,331.2,556.7,332.8,556.7,334.7 z M553.3,336.9c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3C551.1,335.9,552.1,336.9,553.3,336.9z" />
        </g>
        <g id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzluesq" data-linestop="metropolitan">
          <path
            fill="#FFFFFF"
            d="M528.5,381.4c0,1.6-1.3,3-3,3s-3-1.3-3-3c0-1.6,1.3-3,3-3S528.5,379.8,528.5,381.4z"
            className="white-fill"
          />
          <path d="M529.1,381.4c0,2-1.6,3.5-3.5,3.5c-2,0-3.6-1.6-3.6-3.5c0-2,1.6-3.6,3.6-3.6C527.5,377.8,529.1,379.4,529.1,381.4z M525.6,383.8c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4c-1.3,0-2.4,1.1-2.4,2.4C523.2,382.7,524.3,383.8,525.6,383.8z" />
        </g>
        <g
          id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzluesq_00000081626221223587613130000005163393627335476612_"
          data-linestop="metropolitan"
        >
          <path
            fill="#FFFFFF"
            d="M616.2,406.6c0,1.6-1.3,3-3,3c-1.6,0-3-1.3-3-3c0-1.6,1.3-3,3-3C614.8,403.7,616.2,405,616.2,406.6z"
            className="white-fill"
          />
          <path d="M616.8,406.6c0,2-1.6,3.5-3.5,3.5c-2,0-3.6-1.6-3.6-3.5c0-2,1.6-3.6,3.6-3.6C615.2,403.1,616.8,404.7,616.8,406.6z M613.2,409c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4c-1.3,0-2.4,1.1-2.4,2.4C610.8,407.9,611.9,409,613.2,409z" />
        </g>
        <g id="940gzzlumyb" data-linestop="bakerloo">
          <path
            fill="#FFFFFF"
            d="M436.8,373.8c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C435.6,370.9,436.8,372.2,436.8,373.8z"
            className="white-fill"
          />
          <path d="M437.4,373.8c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C435.9,370.4,437.4,371.9,437.4,373.8 z M434,376.1c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C431.7,375,432.7,376.1,434,376.1z" />
        </g>
        <g id="940gzzluswc" data-linestop="jubilee">
          <path
            fill="#FFFFFF"
            d="M466.4,359.5c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C465.1,356.7,466.4,357.9,466.4,359.5z"
            className="white-fill"
          />
          <path d="M467,359.5c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C465.4,356.1,467,357.6,467,359.5z M463.6,361.8c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C461.3,360.8,462.3,361.8,463.6,361.8z" />
        </g>
        <g id="910gshmpstd" data-linestop="london-overground">
          <path
            fill="#FFFFFF"
            d="M476.1,349.9c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C474.8,347.1,476.1,348.4,476.1,349.9z"
            className="white-fill"
          />
          <path d="M476.7,349.9c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C475.2,346.5,476.7,348,476.7,349.9z M473.3,352.2c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C471,351.2,472,352.2,473.3,352.2z" />
        </g>
        <g id="910gfnchlyr" data-linestop="london-overground">
          <path
            fill="#FFFFFF"
            d="M461.3,307.4c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C460,304.6,461.3,305.8,461.3,307.4z"
            className="white-fill"
          />
          <path d="M461.9,307.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C460.3,304,461.9,305.5,461.9,307.4z M458.5,309.7c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C456.2,308.7,457.2,309.7,458.5,309.7z" />
        </g>
        <g id="940gzzluwhp" data-linestop="jubilee">
          <path
            fill="#FFFFFF"
            d="M431.5,317.1c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C430.2,314.2,431.5,315.5,431.5,317.1z"
            className="white-fill"
          />
          <path d="M432,317.1c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C430.5,313.6,432,315.2,432,317.1z M428.6,319.3c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C426.3,318.3,427.4,319.3,428.6,319.3z" />
        </g>
        <g id="lul-bakerloo_lul-piccadilly_940gzzlupcc" data-linestop="piccadilly">
          <path
            fill="#FFFFFF"
            d="M518.4,464.8c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C517.1,461.9,518.4,463.2,518.4,464.8z"
            className="white-fill"
          />
          <path d="M519,464.8c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C517.5,461.4,519,462.9,519,464.8z M515.6,467.1c1.3,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3s-2.3,1-2.3,2.3S514.3,467.1,515.6,467.1z" />
        </g>
        <g id="lul-northern_lul-piccadilly_940gzzlulsq" data-linestop="piccadilly">
          <path
            fill="#FFFFFF"
            d="M539.6,457.4c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C538.3,454.6,539.6,455.8,539.6,457.4z"
            className="white-fill"
          />
          <path d="M540.2,457.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C538.6,454,540.2,455.5,540.2,457.4z M536.7,459.7c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3C534.5,458.7,535.5,459.7,536.7,459.7z" />
        </g>
        <g id="lul-bakerloo_lul-northern_940gzzluchx" data-linestop="northern">
          <path
            fill="#FFFFFF"
            d="M539.6,486c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C538.3,483.1,539.6,484.4,539.6,486z"
            className="white-fill"
          />
          <path d="M540.2,486c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C538.6,482.6,540.2,484.1,540.2,486z M536.7,488.3c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3C534.5,487.2,535.5,488.3,536.7,488.3z" />
        </g>
        <g id="940gzzlupyb" data-linestop="district">
          <path
            fill="#FFFFFF"
            d="M379.5,586.1c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C378.2,583.3,379.5,584.5,379.5,586.1z"
            className="white-fill"
          />
          <path d="M380.1,586.1c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C378.5,582.7,380.1,584.2,380.1,586.1 z M376.6,588.4c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3C374.4,587.4,375.4,588.4,376.6,588.4z" />
        </g>
        <g id="910gpckhmry" data-linestop="london-overground">
          <path
            fill="#FFFFFF"
            d="M643.9,629.2c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C642.6,626.3,643.9,627.6,643.9,629.2z"
            className="white-fill"
          />
          <path d="M644.5,629.2c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C642.9,625.8,644.5,627.3,644.5,629.2 z M641,631.4c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C638.8,630.4,639.8,631.4,641,631.4z" />
        </g>
        <g id="lul-central_lul-piccadilly_940gzzluhbn" data-linestop="piccadilly">
          <path
            fill="#FFFFFF"
            d="M564.2,432.7c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C563,429.9,564.2,431.2,564.2,432.7z"
            className="white-fill"
          />
          <path d="M564.8,432.7c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C563.3,429.3,564.8,430.8,564.8,432.7 z M561.4,435c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C559.1,434,560.1,435,561.4,435z" />
        </g>
        <g
          id="lul-central_lul-piccadilly_940gzzluspu_00000016762364762924809510000003836262455527672508_"
          data-linestop="central"
        >
          <path
            fill="#FFFFFF"
            d="M610.5,452c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C609.2,449.2,610.5,450.5,610.5,452z"
            className="white-fill"
          />
          <path d="M611,452c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C609.5,448.6,611,450.1,611,452z M607.6,454.3c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C605.3,453.3,606.3,454.3,607.6,454.3z" />
        </g>
        <g id="lul-circle_lul-district_lul-piccadilly_940gzzlusks" data-linestop="piccadilly">
          <path
            id="lul-circle_lul-district_lul-piccadilly_940gzzlusks"
            d="M420.1,509.2v1.4v0c-0.5,0.3-0.9,0.7-1.2,1.2 c-0.3,0.5-0.5,1.1-0.5,1.7c0,0.9,0.4,1.8,1,2.4c0.6,0.6,1.5,1,2.4,1c0.9,0,1.8-0.4,2.4-1c0.6-0.6,1-1.5,1-2.4 c0-0.6-0.2-1.2-0.5-1.7c-0.3-0.5-0.7-0.9-1.2-1.2v0v-1.4c0.5-0.3,0.9-0.7,1.2-1.2c0.3-0.5,0.5-1.1,0.5-1.7c0-0.9-0.4-1.8-1-2.4 c-0.6-0.6-1.5-1-2.4-1c-0.9,0-1.8,0.4-2.4,1c-0.6,0.6-1,1.5-1,2.4c0,0.6,0.2,1.2,0.5,1.7C419.2,508.5,419.6,508.9,420.1,509.2z"
            data-linestop="piccadilly"
          />
          <path
            id="lul-piccadilly_940gzzlusks"
            d="M425.2,506.2c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4C423.7,502.8,425.2,504.3,425.2,506.2z"
            data-linestop="piccadilly"
          />
          <path
            id="lul-circle_lul-district_940gzzlusks"
            d="M425.2,513.5c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4C423.7,510.1,425.2,511.6,425.2,513.5z"
            data-linestop="piccadilly"
          />
          <path
            id="lul-circle_lul-district_lul-piccadilly_940gzzlusks"
            fill="#FFFFFF"
            d="M419.6,506.2 c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3c0,1.1-0.7,1.9-1.7,2.2v2.9c1,0.3,1.7,1.1,1.7,2.2c0,1.3-1,2.3-2.3,2.3 c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.7-1.9,1.7-2.2v-2.8C420.3,508.2,419.6,507.3,419.6,506.2z"
            className="white-fill"
            data-linestop="piccadilly"
          />
        </g>
        <g id="lul-district_lul-piccadilly_940gzzlubsc" data-linestop="piccadilly">
          <path
            id="lul-circle_lul-district_lul-piccadilly_940gzzlusks_00000021824094401893789470000006741712989759740597_"
            d=" M349.6,509.2v1.4v0c-0.5,0.3-0.9,0.7-1.2,1.2c-0.3,0.5-0.5,1.1-0.5,1.7c0,0.9,0.4,1.8,1,2.4c0.6,0.6,1.5,1,2.4,1 c0.9,0,1.8-0.4,2.4-1c0.6-0.6,1-1.5,1-2.4c0-0.6-0.2-1.2-0.5-1.7c-0.3-0.5-0.7-0.9-1.2-1.2v0v-1.4c0.5-0.3,0.9-0.7,1.2-1.2 c0.3-0.5,0.5-1.1,0.5-1.7c0-0.9-0.4-1.8-1-2.4c-0.6-0.6-1.5-1-2.4-1c-0.9,0-1.8,0.4-2.4,1c-0.6,0.6-1,1.5-1,2.4 c0,0.6,0.2,1.2,0.5,1.7C348.7,508.5,349.1,508.9,349.6,509.2z"
            data-linestop="piccadilly"
          />
          <path
            id="lul-piccadilly_940gzzlusks_00000119817672400097234200000005937103026561876915_"
            d="M354.7,506.2 c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C353.2,502.8,354.7,504.3,354.7,506.2z"
            data-linestop="piccadilly"
          />
          <path
            id="lul-circle_lul-district_940gzzlusks_00000144303855607273439550000014895658307228452006_"
            d="M354.7,513.5 c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C353.2,510.1,354.7,511.6,354.7,513.5z"
            data-linestop="piccadilly"
          />
          <path
            id="lul-circle_lul-district_lul-piccadilly_940gzzlusks_00000052106595253777495130000017716480090682722701_"
            fill="#FFFFFF"
            d=" M349.1,506.2c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3c0,1.1-0.7,1.9-1.7,2.2v2.9c1,0.3,1.7,1.1,1.7,2.2c0,1.3-1,2.3-2.3,2.3 c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.7-1.9,1.7-2.2v-2.8C349.8,508.2,349.1,507.3,349.1,506.2z"
            className="white-fill"
            data-linestop="piccadilly"
          />
        </g>
        <g
          id="lul-district_lul-piccadilly_940gzzlutng_00000009580883716038490490000007757644784361905314_"
          data-linestop="piccadilly"
        >
          <path
            id="lul-district_lul-piccadilly_940gzzlutng"
            d="M269.5,509.2v1.4v0c-0.5,0.3-0.9,0.7-1.2,1.2 c-0.3,0.5-0.5,1.1-0.5,1.7c0,0.9,0.4,1.8,1,2.4c0.6,0.6,1.5,1,2.4,1c0.9,0,1.8-0.4,2.4-1c0.6-0.6,1-1.5,1-2.4 c0-0.6-0.2-1.2-0.5-1.7c-0.3-0.5-0.7-0.9-1.2-1.2v0v-1.4c0.5-0.3,0.9-0.7,1.2-1.2c0.3-0.5,0.5-1.1,0.5-1.7c0-0.9-0.4-1.8-1-2.4 c-0.6-0.6-1.5-1-2.4-1c-0.9,0-1.8,0.4-2.4,1c-0.6,0.6-1,1.5-1,2.4c0,0.6,0.2,1.2,0.5,1.7C268.6,508.5,269,508.9,269.5,509.2z"
            data-linestop="piccadilly"
          />
          <path
            id="lul-piccadilly_940gzzlutng"
            d="M274.6,506.2c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4 C273.1,502.8,274.6,504.3,274.6,506.2z"
            data-linestop="piccadilly"
          />
          <path
            id="lul-district_940gzzlutng"
            d="M274.6,513.5c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4 C273.1,510.1,274.6,511.6,274.6,513.5z"
            data-linestop="piccadilly"
          />
          <path
            id="lul-district_lul-piccadilly_940gzzlutng_00000123437731352120184220000000274602920655343496_"
            fill="#FFFFFF"
            d=" M268.9,506.2c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3c0,1.1-0.7,1.9-1.7,2.2v2.9c1,0.3,1.7,1.1,1.7,2.2c0,1.3-1,2.3-2.3,2.3 c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.7-1.9,1.7-2.2v-2.8C269.7,508.2,268.9,507.3,268.9,506.2z"
            className="white-fill"
            data-linestop="piccadilly"
          />
        </g>
        <g id="940gzzlucsm" data-linestop="metropolitan">
          <g>
            <path
              fill="#1C3F94"
              d="M109.2,145.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C105.8,147.4,107.3,145.9,109.2,145.9z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M109.2,152.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C112.3,151,110.9,152.3,109.2,152.3L109.2,152.3z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M108.1,150.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L108.1,150.3z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M109.3,147c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C109.5,146.5,109.3,146.7,109.3,147z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M109.6,147.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H108c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C109.6,147.7,109.6,147.9,109.6,147.9z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluams" data-linestop="metropolitan">
          <g>
            <path
              fill="#1C3F94"
              d="M90,157.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C86.6,158.9,88.1,157.3,90,157.3z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M90,163.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C93.1,162.4,91.7,163.8,90,163.8L90,163.8z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M88.8,161.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L88.8,161.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M90,158.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C90.3,158,90,158.2,90,158.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M90.3,159.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C90.4,159.2,90.3,159.4,90.3,159.4z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlusut" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M225,322.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C221.6,324.3,223.1,322.8,225,322.8z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M225,329.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C228.1,327.9,226.7,329.2,225,329.2L225,329.2z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M223.9,327.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L223.9,327.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M225.1,323.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C225.3,323.4,225.1,323.6,225.1,323.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M225.3,324.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C225.4,324.6,225.3,324.8,225.3,324.8z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlusuh" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M225,301.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C221.6,302.7,223.1,301.2,225,301.2z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M225,307.6c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C228.1,306.3,226.7,307.6,225,307.6L225,307.6z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M223.9,305.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L223.9,305.6z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M225.1,302.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C225.3,301.8,225.1,302,225.1,302.3z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M225.3,303.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C225.4,303,225.3,303.2,225.3,303.2z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gslough" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M106.1,382.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C102.7,383.9,104.2,382.4,106.1,382.4z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M106.1,388.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C109.1,387.5,107.8,388.9,106.1,388.9L106.1,388.9z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M104.9,386.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L104.9,386.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.1,383.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C106.4,383,106.1,383.3,106.1,383.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.4,384.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C106.5,384.2,106.4,384.4,106.4,384.4z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910glangley" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M106.1,394c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C102.7,395.5,104.2,394,106.1,394z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M106.1,400.4c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C109.1,399.1,107.8,400.4,106.1,400.4L106.1,400.4z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M104.9,398.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L104.9,398.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.1,395.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C106.4,394.6,106.1,394.9,106.1,395.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.4,396l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C106.5,395.8,106.4,396,106.4,396z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910giver" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M106.1,404.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C102.7,406.3,104.2,404.8,106.1,404.8z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M106.1,411.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C109.1,409.9,107.8,411.2,106.1,411.2L106.1,411.2z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M104.9,409.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L104.9,409.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.1,405.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C106.4,405.4,106.1,405.6,106.1,405.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.4,406.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C106.5,406.6,106.4,406.8,106.4,406.8z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gwdryton" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M106.1,424.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C102.7,426.2,104.2,424.7,106.1,424.7z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M106.1,431.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C109.1,429.8,107.8,431.2,106.1,431.2L106.1,431.2z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M104.9,429.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L104.9,429.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.1,425.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C106.4,425.3,106.1,425.6,106.1,425.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.4,426.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C106.5,426.5,106.4,426.7,106.4,426.7z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gbnham" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M106.1,370.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C102.7,372.3,104.2,370.8,106.1,370.8z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M106.1,377.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C109.1,375.9,107.8,377.2,106.1,377.2L106.1,377.2z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M104.9,375.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L104.9,375.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.1,371.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C106.4,371.4,106.1,371.6,106.1,371.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.4,372.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C106.5,372.6,106.4,372.8,106.4,372.8z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gtaplow" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M106.1,359.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C102.7,360.6,104.2,359.1,106.1,359.1z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M106.1,365.6c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C109.1,364.2,107.8,365.6,106.1,365.6L106.1,365.6z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M104.9,363.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L104.9,363.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.1,360.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C106.4,359.8,106.1,360,106.1,360.3z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.4,361.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C106.5,360.9,106.4,361.2,106.4,361.2z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gmdnhead" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M106.1,347.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C102.7,349,104.2,347.5,106.1,347.5z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M106.1,354c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C109.1,352.6,107.8,354,106.1,354L106.1,354z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M104.9,351.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L104.9,351.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.1,348.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C106.4,348.1,106.1,348.4,106.1,348.6z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.4,349.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C106.5,349.3,106.4,349.5,106.4,349.5z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gtwyford" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M106.1,335.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C102.7,337.3,104.2,335.8,106.1,335.8z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M106.1,342.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C109.1,340.9,107.8,342.2,106.1,342.2L106.1,342.2z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M104.9,340.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L104.9,340.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.1,336.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C106.4,336.4,106.1,336.6,106.1,336.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.4,337.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C106.5,337.6,106.4,337.8,106.4,337.8z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910grdngstn" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M106.1,324.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C102.7,325.8,104.2,324.3,106.1,324.3z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M106.1,330.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C109.1,329.4,107.8,330.8,106.1,330.8L106.1,330.8z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M104.9,328.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L104.9,328.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.1,325.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C106.4,324.9,106.1,325.2,106.1,325.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M106.4,326.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C106.5,326.1,106.4,326.3,106.4,326.3z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-bakerloo_940gzzluwjn_raillo-overground_910gwlsdjhl" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M321,320.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C317.6,322.2,319.1,320.6,321,320.6z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M321,327.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1 C324.1,325.7,322.7,327.1,321,327.1L321,327.1z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M319.8,325.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L319.8,325.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M321.1,321.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C321.3,321.3,321.1,321.5,321.1,321.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M321.3,322.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C321.4,322.5,321.3,322.7,321.3,322.7z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-bakerloo_940gzzluwyc_raillo-overground_910gwmby" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M321,293.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C317.6,295.1,319.1,293.6,321,293.6z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M321,300c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C324,298.7,322.7,300,321,300 L321,300z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M319.8,298c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L319.8,298z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M321,294.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C321.3,294.2,321,294.4,321,294.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M321.3,295.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C321.4,295.4,321.3,295.6,321.3,295.6z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-bakerloo_940gzzluhaw_raillo-overground_910ghrow" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M320.5,223.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C317.1,224.7,318.6,223.1,320.5,223.1z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M320.5,229.6c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1 C323.6,228.2,322.2,229.6,320.5,229.6L320.5,229.6z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M319.3,227.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L319.3,227.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M320.6,224.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C320.8,223.8,320.6,224,320.6,224.3z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M320.8,225.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C320.9,225,320.8,225.2,320.8,225.2z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-jubilee_lul-metropolitan_940gzzluwyp" data-linestop="metropolitan">
          <g id="lul-jubilee_lul-metropolitan_940gzzluwyp" data-linestop="metropolitan">
            <rect
              x="363.2"
              y="266.7"
              transform="matrix(0.7072 -0.707 0.707 0.7072 -81.3474 340.3155)"
              width="13.9"
              height="3.4"
            />
            <rect
              x="363"
              y="267.8"
              transform="matrix(0.7066 -0.7076 0.7076 0.7066 -81.2822 340.6965)"
              fill="#FFFFFF"
              width="14.4"
              height="1.1"
              className="white-fill"
            />
          </g>
          <g id="lul-metropolitan_940gzzluwyp" data-linestop="metropolitan">
            <g>
              <path
                fill="#1C3F94"
                d="M365.4,269.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C362,271.3,363.5,269.8,365.4,269.8z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M364.2,274.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L364.2,274.2z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M365.4,270.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C365.6,270.4,365.4,270.6,365.4,270.9z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M365.7,271.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C365.8,271.6,365.7,271.8,365.7,271.8z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g id="lul-jubilee_940gzzluwyp" data-linestop="metropolitan">
            <g>
              <path
                fill="#1C3F94"
                d="M374.9,260.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C371.5,261.7,373.1,260.2,374.9,260.2z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M373.8,264.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L373.8,264.6z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M375,261.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C375.2,260.8,375,261.1,375,261.3z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M375.3,262.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C375.3,262,375.3,262.2,375.3,262.2z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="940gzzlustm" data-linestop="jubilee">
          <g>
            <path
              fill="#1C3F94"
              d="M370,210.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C366.6,211.6,368.1,210.1,370,210.1z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M370,216.6c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C373,215.2,371.7,216.6,370,216.6L370,216.6z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M368.8,214.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L368.8,214.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M370,211.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C370.2,210.8,370,211,370,211.3z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M370.3,212.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C370.4,211.9,370.3,212.2,370.3,212.2z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluggn" data-linestop="northern">
          <g>
            <path
              fill="#1C3F94"
              d="M495.5,263.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C492.1,265.2,493.7,263.7,495.5,263.7z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M495.5,270.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C498.6,268.8,497.2,270.2,495.5,270.2L495.5,270.2z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M494.4,268.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L494.4,268.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M495.6,264.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C495.8,264.3,495.6,264.6,495.6,264.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M495.9,265.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C495.9,265.5,495.9,265.7,495.9,265.7z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlukbn" data-linestop="jubilee">
          <g>
            <path
              fill="#1C3F94"
              d="M407.8,293c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C404.4,294.5,405.9,293,407.8,293z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M407.8,299.4c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C410.8,298.1,409.5,299.4,407.8,299.4L407.8,299.4z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M406.6,297.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L406.6,297.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M407.8,294.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C408.1,293.6,407.8,293.8,407.8,294.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M408.1,295l-0.1,0.4H407c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C408.2,294.8,408.1,295,408.1,295z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluhbt" data-linestop="northern">
          <g>
            <path
              fill="#1C3F94"
              d="M585,164c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C581.6,165.6,583.1,164,585,164z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M583.8,168.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L583.8,168.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M585,165.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C585.3,164.7,585,164.9,585,165.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M585.3,166.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C585.4,165.8,585.3,166.1,585.3,166.1z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluwop" data-linestop="northern">
          <g>
            <path
              fill="#1C3F94"
              d="M585,187.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C581.6,189.4,583.1,187.8,585,187.8z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M583.8,192.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L583.8,192.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M585,189c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C585.3,188.5,585,188.7,585,189z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M585.3,189.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C585.4,189.6,585.3,189.9,585.3,189.9z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlufyc" data-linestop="northern">
          <g>
            <path
              fill="#1C3F94"
              d="M585,219c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C581.6,220.5,583.1,219,585,219z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M583.8,223.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L583.8,223.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M585,220.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C585.3,219.7,585,219.9,585,220.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M585.3,221.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C585.4,220.8,585.3,221.1,585.3,221.1z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="910ggosplok" data-linestop="london-overground">
          <g id="910ggosplok" data-linestop="london-overground">
            <rect x="542.6" y="297.4" width="3.4" height="10.1" />
            <rect x="543.7" y="297.2" fill="#FFFFFF" width="1.1" height="10.5" className="white-fill" />
          </g>
          <g id="910ggosplok" data-linestop="london-overground">
            <g>
              <path
                fill="#1C3F94"
                d="M544.4,293.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C541,295,542.5,293.5,544.4,293.5z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M544.4,299.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C547.4,298.6,546.1,299.9,544.4,299.9L544.4,299.9z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M543.2,297.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L543.2,297.9z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M544.4,294.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C544.6,294.1,544.4,294.3,544.4,294.6z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M544.7,295.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C544.8,295.3,544.7,295.5,544.7,295.5z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
          <g id="910ggosplok" data-linestop="london-overground">
            <g>
              <path
                fill="#1C3F94"
                d="M544.3,304c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C540.9,305.6,542.4,304,544.3,304z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M544.3,310.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C547.4,309.1,546,310.5,544.3,310.5L544.3,310.5z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M543.1,308.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L543.1,308.4z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M544.4,305.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C544.6,304.7,544.4,304.9,544.4,305.2z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M544.6,306.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C544.7,305.8,544.6,306.1,544.6,306.1z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="910gcmdnrd" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M565.9,318.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C562.5,320.2,564,318.7,565.9,318.7z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M565.9,325.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C569,323.8,567.6,325.2,565.9,325.2L565.9,325.2z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M564.7,323.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L564.7,323.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M566,319.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C566.2,319.3,566,319.6,566,319.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M566.2,320.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C566.3,320.5,566.2,320.7,566.2,320.7z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910ghmpstdh" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M496.8,304c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C493.4,305.6,494.9,304,496.8,304z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M496.8,310.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C499.8,309.1,498.5,310.5,496.8,310.5L496.8,310.5z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M495.6,308.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L495.6,308.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M496.8,305.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C497.1,304.7,496.8,304.9,496.8,305.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M497.1,306.1l-0.1,0.4H496c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C497.2,305.8,497.1,306.1,497.1,306.1z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-northern-lul-victoria_940gzzlueus_raillo-overground_910geuston" data-linestop="london-overground">
          <path
            id="lul-northern_940gzzlueus_00000093896651685022801130000007069435383968267432_"
            d="M545.8,360.2 c0.6,1,1.7,1.7,3,1.7c1.3,0,2.4-0.7,3-1.7h3.5c0.6,1,1.7,1.7,3,1.7c1.9,0,3.4-1.5,3.4-3.4c0-1.9-1.5-3.4-3.4-3.4 c-1.3,0-2.4,0.7-3,1.7l-3.5,0c-0.6-1-1.7-1.7-3-1.7s-2.4,0.7-3,1.7"
            data-linestop="victoria"
          />
          <g
            id="lul-northern_raillo-overground_910geuston_00000026875374970674497940000003072912142307069884_"
            data-linestop="london-overground"
          >
            <path
              id="lul-bakerloo_lul-circle_lul-hammersmith-city_lul-metropolitan_lul-jubilee_940gzzlubst_00000066508291389052434790000005545803040632692411_"
              d=" M549.6,361.8l8.2,8.5c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8c-0.9-0.9-2.2-1.2-3.3-0.9l-8.2-8.5 c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8C547.2,361.8,548.5,362.1,549.6,361.8z"
              data-linestop="metropolitan"
            />
            <path
              id="lul-bakerloo_lul-circle_lul-hammersmith-city_lul-metropolitan_lul-jubilee_940gzzlubst_00000080182853723862194130000012339268900788795035_"
              fill="#FFFFFF"
              d=" M547.1,360.1c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.8,0.8,0.9,1.9,0.3,2.8l9.3,9.6c0.9-0.5,2-0.4,2.8,0.3 c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.8-0.8-0.9-1.9-0.3-2.8l-9.3-9.6C549,360.9,547.9,360.8,547.1,360.1z"
              className="white-fill"
              data-linestop="metropolitan"
            />
          </g>
          <g id="lul-northern_lul-victoria_940gzzlueus" data-linestop="victoria">
            <path
              id="lul-bakerloo_lul-circle_lul-hammersmith-city_lul-metropolitan_lul-jubilee_940gzzlubst_00000093895344159705773860000016119273285633981077_"
              d=" M545.5,359.4l-6.5,6.2c-1.1-0.3-2.4,0-3.3,0.9c-1.3,1.3-1.3,3.5,0,4.8c1.3,1.3,3.5,1.3,4.8,0c0.9-0.9,1.2-2.2,0.9-3.3l6.5-6.3 c1.1,0.3,2.4,0,3.3-0.9c1.3-1.3,1.3-3.5,0-4.8c-1.3-1.3-3.5-1.3-4.8,0C545.4,357,545.2,358.3,545.5,359.4z"
              data-linestop="metropolitan"
            />
            <path
              id="lul-bakerloo_lul-circle_lul-hammersmith-city_lul-metropolitan_lul-jubilee_940gzzlubst_00000106148523383886668380000014840795355178383789_"
              fill="#FFFFFF"
              d=" M547.1,356.9c0.9-0.9,2.3-0.9,3.2,0c0.9,0.9,0.9,2.3,0,3.2c-0.8,0.8-1.9,0.9-2.8,0.3l-7.6,7.3c0.5,0.9,0.4,2-0.3,2.8 c-0.9,0.9-2.3,0.9-3.2,0c-0.9-0.9-0.9-2.3,0-3.2c0.8-0.8,1.9-0.9,2.8-0.3l7.6-7.3C546.3,358.8,546.4,357.7,547.1,356.9z"
              className="white-fill"
              data-linestop="metropolitan"
            />
            <g
              id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzluksx_00000096744491097691544550000006075267222580176042_"
              data-linestop="piccadilly"
            >
              <polygon
                fill="#FFFFFF"
                points="549.8,360.3 550.6,359.5 560.4,369.6 559.6,370.4 "
                className="white-fill"
              />
            </g>
          </g>
          <path
            id="lul-northern_940gzzlueus"
            fill="#FFFFFF"
            d="M546.5,357.9c0.3-1,1.1-1.7,2.2-1.7c1.1,0,1.9,0.7,2.2,1.7l5,0 c0.3-1,1.1-1.7,2.2-1.7c1.3,0,2.3,1,2.3,2.3c0,1.3-1,2.3-2.3,2.3c-1.1,0-1.9-0.7-2.2-1.7h-5c-0.3,1-1.1,1.7-2.2,1.7 c-1.1,0-1.9-0.7-2.2-1.7"
            className="white-fill"
            data-linestop="victoria"
          />
          <g id="raillo-overground_910geuston" data-linestop="london-overground">
            <g>
              <path
                fill="#1C3F94"
                d="M538,365.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C534.6,367,536.2,365.5,538,365.5z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M538,371.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C541.1,370.6,539.7,371.9,538,371.9L538,371.9z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M536.9,369.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L536.9,369.9z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M538.1,366.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C538.3,366.1,538.1,366.3,538.1,366.6z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M538.4,367.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C538.4,367.3,538.4,367.5,538.4,367.5z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="raillo-overground_910gshpdsb" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M357.8,462.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C354.4,463.7,355.9,462.1,357.8,462.1z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M357.8,468.6c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1 C360.9,467.2,359.5,468.6,357.8,468.6L357.8,468.6z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M356.7,466.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L356.7,466.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M357.9,463.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C358.1,462.8,357.9,463,357.9,463.3z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M358.1,464.2l-0.1,0.4H357c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C358.2,463.9,358.1,464.2,358.1,464.2z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-circle_lul-hammersmith-city_940gzzluwla" data-linestop="hammersmith-city">
          <g>
            <path
              fill="#1C3F94"
              d="M333.2,457.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C329.8,459.3,331.4,457.8,333.2,457.8z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M333.2,464.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C336.3,462.9,334.9,464.2,333.2,464.2L333.2,464.2z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M332.1,462.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L332.1,462.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M333.3,458.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C333.5,458.4,333.3,458.6,333.3,458.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M333.6,459.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H332c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C333.7,459.6,333.6,459.8,333.6,459.8z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gactnctl" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M271.4,471.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C268,473.1,269.5,471.5,271.4,471.5z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M271.4,478c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C274.5,476.6,273.1,478,271.4,478L271.4,478z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M270.3,475.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L270.3,475.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M271.5,472.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C271.7,472.2,271.5,472.4,271.5,472.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M271.8,473.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C271.8,473.4,271.8,473.6,271.8,473.6z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gsacton" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M271.4,484.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C268,486.3,269.5,484.8,271.4,484.8z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M271.4,491.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C274.5,489.9,273.1,491.2,271.4,491.2L271.4,491.2z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M270.3,489.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L270.3,489.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M271.5,485.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C271.7,485.4,271.5,485.6,271.5,485.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M271.8,486.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C271.8,486.6,271.8,486.8,271.8,486.8z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g
          id="lul-district_940gzzlukwg_raillo-overground_910gkewgrdn_00000054234956178183425730000000217435620776502962_"
          data-linestop="london-overground"
        >
          <path
            id="lul-district_940gzzlukwg_raillo-overground_910gkewgrdn_00000002353800536366605990000014991712117078117522_"
            d=" M202.5,562.8l-1.4-1.4c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9l1.4,1.3 c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8C204.9,562.7,203.7,562.5,202.5,562.8z"
            data-linestop="london-overground"
          />
          <path
            id="lul-district_940gzzlukwg_raillo-overground_910gkewgrdn_00000000203356711494767600000007438619129161097631_"
            fill="#FFFFFF"
            d=" M205,564.4c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.7-0.7-0.9-1.9-0.3-2.8l-2.4-2.4c-0.9,0.5-2,0.4-2.8-0.3 c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.7,0.7,0.9,1.9,0.3,2.8l2.4,2.4C203.1,563.6,204.3,563.7,205,564.4z"
            className="white-fill"
            data-linestop="london-overground"
          />
          <g
            id="raillo-overground_910gkewgrdn_00000057110952314244907590000004864827913412181427_"
            data-linestop="london-overground"
          >
            <g>
              <path
                fill="#1C3F94"
                d="M197.9,557c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C194.5,558.6,196,557,197.9,557z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M197.9,563.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C201,562.1,199.6,563.5,197.9,563.5L197.9,563.5z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M196.8,561.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L196.8,561.4z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M198,558.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C198.2,557.7,198,557.9,198,558.2z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M198.2,559.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C198.3,558.8,198.2,559.1,198.2,559.1z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
          <g id="lul-district_940gzzlukwg_00000021825376879826962170000003775130708366773163_" data-linestop="district">
            <g>
              <path
                fill="#1C3F94"
                d="M203.4,562.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C200,564.2,201.5,562.6,203.4,562.6z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M203.4,569.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C206.5,567.7,205.1,569.1,203.4,569.1L203.4,569.1z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M202.3,567c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L202.3,567z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M203.5,563.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C203.7,563.3,203.5,563.5,203.5,563.8z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M203.8,564.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C203.8,564.4,203.8,564.7,203.8,564.7z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="940gzzluhr5_00000172421999555196979210000009095895067757670539_" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M89.7,620.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C86.3,621.6,87.8,620.1,89.7,620.1z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M89.7,626.6c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C92.8,625.2,91.4,626.6,89.7,626.6L89.7,626.6z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M88.5,624.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L88.5,624.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M89.8,621.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C90,620.7,89.8,621,89.8,621.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M90,622.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C90.1,621.9,90,622.1,90,622.1z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluhwe_00000079485712415953505980000013422664662512374685_" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M156.6,534.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C153.2,535.6,154.7,534.1,156.6,534.1z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M156.6,540.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C159.7,539.2,158.3,540.5,156.6,540.5L156.6,540.5z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M155.5,538.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L155.5,538.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M156.7,535.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C156.9,534.7,156.7,534.9,156.7,535.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M156.9,536.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C157,535.9,156.9,536.1,156.9,536.1z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluosy_00000041988873067964721950000012676230990272605854_" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M164.1,526.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C160.7,528.1,162.2,526.6,164.1,526.6z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M164.1,533c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C167.2,531.7,165.8,533,164.1,533L164.1,533z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M163,531c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L163,531z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M164.2,527.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C164.4,527.2,164.2,527.4,164.2,527.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M164.5,528.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C164.5,528.4,164.5,528.6,164.5,528.6z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-district_940gzzluwbn_raillo-overground_910gwbrmptn" data-linestop="london-overground">
          <g id="lul-district_940gzzluwbn_raillo-overground_910gwbrmptn" data-linestop="london-overground">
            <path d="M373.7,540.9h-1.3c-0.3-0.5-0.7-0.9-1.2-1.2c-0.5-0.3-1.1-0.5-1.7-0.5c-0.9,0-1.8,0.4-2.4,1c-0.6,0.6-1,1.5-1,2.4 c0,0.9,0.4,1.8,1,2.4c0.6,0.6,1.5,1,2.4,1c0.6,0,1.2-0.2,1.7-0.5c0.5-0.3,0.9-0.7,1.2-1.2h1.3c0.3,0.5,0.7,0.9,1.2,1.2 c0.5,0.3,1.1,0.5,1.7,0.5c0.9,0,1.8-0.4,2.4-1c0.6-0.6,1-1.5,1-2.4c0-0.9-0.4-1.8-1-2.4c-0.6-0.6-1.5-1-2.4-1 c-0.6,0-1.2,0.2-1.7,0.5C374.4,540,374,540.4,373.7,540.9z" />
          </g>
          <path
            id="lul-district_940gzzluwbn"
            d="M380.1,542.6c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4C378.5,539.2,380.1,540.7,380.1,542.6z"
            data-linestop="district"
          />
          <path
            id="lul-district_940gzzluwbn_raillo-overground_910gwbrmptn"
            fill="#FFFFFF"
            d="M376.7,540.3 c1.3,0,2.3,1,2.3,2.3c0,1.3-1,2.3-2.3,2.3c-1.1,0-1.9-0.7-2.2-1.7h-2.8c-0.3,1-1.1,1.7-2.2,1.7c-1.3,0-2.3-1-2.3-2.3 c0-1.3,1-2.3,2.3-2.3c1.1,0,1.9,0.7,2.2,1.7h2.8C374.7,541.1,375.6,540.3,376.7,540.3z"
            className="white-fill"
            data-linestop="london-overground"
          />
          <g id="raillo-overground_910gwbrmptn" data-linestop="london-overground">
            <g>
              <path
                fill="#1C3F94"
                d="M369.4,539.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C366,540.7,367.5,539.2,369.4,539.2z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M369.4,545.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C372.5,544.3,371.1,545.7,369.4,545.7L369.4,545.7z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M368.3,543.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L368.3,543.6z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M369.5,540.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C369.7,539.8,369.5,540.1,369.5,540.3z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M369.7,541.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C369.8,541,369.7,541.2,369.7,541.2z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="lul-district_lul-piccadilly_940gzzluect" data-linestop="piccadilly">
          <g id="lul-piccadilly_940gzzluect" data-linestop="piccadilly">
            <rect x="380.9" y="505.5" width="3.4" height="8.9" />
            <rect x="382" y="505.4" fill="#FFFFFF" width="1.1" height="9.3" className="white-fill" />
            <g>
              <path
                fill="#1C3F94"
                d="M382.7,502.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C379.2,504.4,380.8,502.8,382.7,502.8z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M381.5,507.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L381.5,507.2z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M382.7,504c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C382.9,503.5,382.7,503.7,382.7,504z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M383,504.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C383.1,504.7,383,504.9,383,504.9z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g id="lul-district_940gzzluect" data-linestop="piccadilly">
            <g>
              <path
                fill="#1C3F94"
                d="M382.7,510.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C379.2,511.6,380.8,510.1,382.7,510.1z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M381.5,514.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L381.5,514.5z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M382.7,511.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5 C382.9,510.7,382.7,510.9,382.7,511.2z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M383,512.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C383.1,511.9,383,512.1,383,512.1z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="910gcseah" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M399.9,577.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C396.5,579.1,398,577.6,399.9,577.6z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M399.9,584c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C403,582.7,401.6,584,399.9,584L399.9,584z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M398.8,582c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L398.8,582z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M400,578.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C400.2,578.2,400,578.5,400,578.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M400.3,579.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C400.3,579.4,400.3,579.6,400.3,579.6z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlusfs" data-linestop="district">
          <g>
            <path
              fill="#1C3F94"
              d="M376.6,612.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C373.2,614.2,374.7,612.7,376.6,612.7z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M375.5,617.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L375.5,617.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M376.7,613.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C376.9,613.4,376.7,613.6,376.7,613.9z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M377,614.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C377,614.5,377,614.8,377,614.8z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzneugst" data-linestop="northern">
          <g>
            <path
              fill="#1C3F94"
              d="M463.7,600.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C460.3,602.3,461.8,600.8,463.7,600.8z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M462.5,605.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L462.5,605.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M463.7,602c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C463.9,601.5,463.7,601.7,463.7,602z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M464,602.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C464.1,602.6,464,602.9,464,602.9z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzbpsust" data-linestop="northern">
          <g>
            <path
              fill="#1C3F94"
              d="M443.2,600.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C439.8,602.3,441.3,600.8,443.2,600.8z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M442,605.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L442,605.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M443.3,602c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C443.5,601.5,443.3,601.7,443.3,602z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M443.5,602.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H442c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C443.6,602.6,443.5,602.9,443.5,602.9z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlufby" data-linestop="district">
          <g>
            <path
              fill="#1C3F94"
              d="M376.6,563.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C373.2,565.3,374.7,563.8,376.6,563.8z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M375.5,568.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L375.5,568.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M376.7,565c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C376.9,564.5,376.7,564.7,376.7,565z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M377,565.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C377,565.6,377,565.8,377,565.8z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g
          id="lul-district_940gzzlurmd_raillo-overground_910grichmnd_00000146487770565458917670000012582350555309654201_"
          data-linestop="london-overground"
        >
          <g
            id="lul-district_940gzzlurmd_raillo-overground_910grichmnd_00000152257397839772897430000013784180719168858517_"
            data-linestop="london-overground"
          >
            <path
              id="lul-district_940gzzlurmd_raillo-overground_910grichmnd_00000057112127073436437980000017186121718645664438_"
              d=" M190.1,575l-1.4-1.4c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9l1.4,1.3 c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8C192.5,575,191.2,574.7,190.1,575z"
              data-linestop="london-overground"
            />
            <path
              id="lul-district_940gzzlurmd_raillo-overground_910grichmnd_00000024706331651687319270000012315637665590759346_"
              fill="#FFFFFF"
              d=" M192.6,576.7c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.7-0.7-0.9-1.9-0.3-2.8l-2.4-2.4c-0.9,0.5-2,0.4-2.8-0.3 c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.7,0.7,0.9,1.9,0.3,2.8l2.4,2.4C190.7,575.8,191.8,575.9,192.6,576.7z"
              className="white-fill"
              data-linestop="london-overground"
            />
          </g>
          <g
            id="raillo-overground_910grichmnd_00000018954085387178327600000001674712252811897729_"
            data-linestop="london-overground"
          >
            <g>
              <path
                fill="#1C3F94"
                d="M191,574.8c1.9,0,3.4,1.5,3.4,3.4s-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4S189.1,574.8,191,574.8z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M191,581.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C194,579.9,192.6,581.3,191,581.3L191,581.3z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M189.8,579.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L189.8,579.3z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M191,576c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C191.2,575.5,191,575.7,191,576z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M191.3,576.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C191.4,576.7,191.3,576.9,191.3,576.9z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
          <g id="lul-district_940gzzlurmd_00000078758901740854790630000009454739833897690527_" data-linestop="district">
            <g>
              <path
                fill="#1C3F94"
                d="M185.3,569.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C181.9,570.8,183.5,569.3,185.3,569.3z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M184.2,573.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L184.2,573.7z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M185.4,570.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C185.6,569.9,185.4,570.1,185.4,570.4z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M185.7,571.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C185.7,571.1,185.7,571.3,185.7,571.3z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="lul-district_940gzzluwim_tram-tram_940gzzcrwmb" data-linestop="tram-tram">
          <path
            id="lul-district_940gzzluwim_tram-tram_940gzzcrwmb_00000114045825825237223490000006293086949369884809_"
            d=" M382.3,641.8l-2.4-2.4c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9l2.4,2.4 c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8C384.7,641.7,383.4,641.5,382.3,641.8z"
            data-linestop="tram-tram"
          />
          <path
            id="lul-district_940gzzluwim_tram-tram_940gzzcrwmb_00000060020277440741540790000014971082340318983816_"
            fill="#FFFFFF"
            d=" M384.8,643.4c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.7-0.7-0.9-1.9-0.3-2.8l-3.4-3.4c-0.9,0.5-2,0.4-2.8-0.3 c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.7,0.7,0.9,1.9,0.3,2.8l3.4,3.4C382.9,642.6,384,642.7,384.8,643.4z"
            className="white-fill"
            data-linestop="tram-tram"
          />
          <g id="940gzzcrwmb_00000075136992179952594260000013844847227741883782_" data-linestop="tram-tram">
            <g>
              <path
                fill="#1C3F94"
                d="M383.2,641.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C379.8,643.2,381.3,641.6,383.2,641.6z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M382,646c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L382,646z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M383.2,642.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C383.5,642.3,383.2,642.5,383.2,642.8z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M383.5,643.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C383.6,643.5,383.5,643.7,383.5,643.7z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g id="940gzzluwim_00000087411677135273555350000009589945939532765575_" data-linestop="district">
            <g>
              <path
                fill="#1C3F94"
                d="M376.6,635.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C373.2,636.6,374.8,635.1,376.6,635.1z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M375.5,639.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L375.5,639.5z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M376.7,636.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C376.9,635.8,376.7,636,376.7,636.3z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M377,637.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C377,636.9,377,637.1,377,637.1z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="940gzzlumdn" data-linestop="northern">
          <g>
            <path
              fill="#1C3F94"
              d="M403.2,752.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C399.8,754.3,401.3,752.7,403.2,752.7z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M402.1,757.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L402.1,757.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M403.3,753.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C403.5,753.4,403.3,753.6,403.3,753.9z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M403.6,754.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H402c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C403.6,754.5,403.6,754.8,403.6,754.8z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g
          id="lul-district_lul-piccadilly_940gzzluact_00000070115477810542033570000010027886091842632624_"
          data-linestop="piccadilly"
        >
          <rect
            x="225.8"
            y="506.9"
            transform="matrix(0.7072 -0.707 0.707 0.7072 -292.3386 311.3694)"
            width="7.9"
            height="3.4"
          />
        </g>
        <rect
          x="225.6"
          y="508"
          transform="matrix(0.707 -0.7072 0.7072 0.707 -292.3201 311.5181)"
          fill="#FFFFFF"
          width="8.3"
          height="1.1"
          className="white-fill"
        />
        <g
          id="lul-piccadilly_940gzzluact_00000109005907067146164180000018322682685949605305_"
          data-linestop="piccadilly"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M232,503c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C228.6,504.5,230.1,503,232,503z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M232,509.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C235.1,508.1,233.7,509.5,232,509.5L232,509.5z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M230.9,507.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L230.9,507.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M232.1,504.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C232.3,503.7,232.1,503.9,232.1,504.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M232.3,505.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C232.4,504.8,232.3,505.1,232.3,505.1z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-district_940gzzluact_00000109724639960220218360000005500408688510189211_" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M225.2,509.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C221.8,511.3,223.4,509.8,225.2,509.8z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M225.2,516.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C228.3,514.9,226.9,516.3,225.2,516.3L225.2,516.3z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M224.1,514.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L224.1,514.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M225.3,510.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C225.5,510.4,225.3,510.7,225.3,510.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M225.6,511.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H224c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C225.6,511.6,225.6,511.8,225.6,511.8z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910ghrgygl" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M695.4,241.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C691.9,242.8,693.5,241.3,695.4,241.3z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M695.4,247.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1 C698.4,246.4,697,247.7,695.4,247.7L695.4,247.7z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M694.2,245.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L694.2,245.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M695.4,242.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C695.6,241.9,695.4,242.1,695.4,242.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M695.7,243.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C695.8,243.1,695.7,243.3,695.7,243.3z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910ghomrton" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M783.4,336.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C780,338,781.6,336.5,783.4,336.5z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M783.4,342.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C786.5,341.6,785.1,342.9,783.4,342.9L783.4,342.9z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M782.3,340.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L782.3,340.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M783.5,337.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C783.7,337.1,783.5,337.3,783.5,337.6z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M783.8,338.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C783.8,338.3,783.8,338.5,783.8,338.5z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910ghacknyw" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M810.3,336.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C806.9,338,808.4,336.5,810.3,336.5z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M810.3,342.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C813.4,341.6,812,342.9,810.3,342.9L810.3,342.9z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M809.2,340.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L809.2,340.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M810.4,337.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C810.6,337.1,810.4,337.3,810.4,337.6z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M810.7,338.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C810.7,338.3,810.7,338.5,810.7,338.5z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gmryland" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M863.6,318c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C860.2,319.5,861.7,318,863.6,318z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M863.6,324.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1 C866.7,323.1,865.3,324.5,863.6,324.5L863.6,324.5z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M862.5,322.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L862.5,322.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M863.7,319.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C863.9,318.7,863.7,318.9,863.7,319.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M863.9,320l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C864,319.8,863.9,320,863.9,320z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gfrstgt" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M881.2,300.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C877.8,301.9,879.3,300.4,881.2,300.4z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M881.2,306.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C884.2,305.5,882.9,306.9,881.2,306.9L881.2,306.9z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M880,304.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L880,304.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M881.2,301.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C881.5,301,881.2,301.3,881.2,301.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M881.5,302.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H880c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C881.6,302.2,881.5,302.4,881.5,302.4z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gmanrpk" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M895.8,285.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C892.4,287.3,893.9,285.8,895.8,285.8z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M895.8,292.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C898.9,290.9,897.5,292.3,895.8,292.3L895.8,292.3z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M894.6,290.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L894.6,290.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M895.8,286.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C896.1,286.4,895.8,286.7,895.8,286.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M896.1,287.8l-0.1,0.4H895c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C896.2,287.6,896.1,287.8,896.1,287.8z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gilford" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M904.2,277.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C900.8,278.9,902.4,277.3,904.2,277.3z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M904.2,283.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C907.3,282.4,905.9,283.8,904.2,283.8L904.2,283.8z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M903.1,281.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L903.1,281.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M904.3,278.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C904.5,278,904.3,278.2,904.3,278.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M904.6,279.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H903c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C904.6,279.1,904.6,279.4,904.6,279.4z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gsvnkngs" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M913.8,267.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C910.4,269.3,911.9,267.8,913.8,267.8z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M913.8,274.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C916.9,272.9,915.5,274.2,913.8,274.2L913.8,274.2z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M912.6,272.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L912.6,272.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M913.9,268.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C914.1,268.4,913.9,268.7,913.9,268.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M914.1,269.8l-0.1,0.4H913c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C914.2,269.6,914.1,269.8,914.1,269.8z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910ggodmays" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M922.5,259c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C919.1,260.6,920.6,259,922.5,259z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M922.5,265.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C925.6,264.1,924.2,265.5,922.5,265.5L922.5,265.5z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M921.4,263.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L921.4,263.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M922.6,260.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C922.8,259.7,922.6,259.9,922.6,260.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M922.9,261.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C922.9,260.9,922.9,261.1,922.9,261.1z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g
          id="lul-central_lul-jubilee_940gzzlustd_dlr-dlr_910gstfd_raillo-overground_910gstfd_elizabeth_910gstfd_00000110437161234555297170000006451971415786113684_"
          data-linestop="elizabeth"
        >
          <g id="lul-central_940gzzlustd_raillo-overground_910gstfd_elizabeth_910gstfd" data-linestop="elizabeth">
            <rect x="837.6" y="338.4" width="7.8" height="3.4" />
            <rect x="837.8" y="339.5" fill="#FFFFFF" width="7.3" height="1.1" className="white-fill" />
          </g>
          <g id="lul-jubilee_940gzzlustd_dlr-dlr_910gstfd_elizabeth_910gstfd" data-linestop="elizabeth">
            <rect x="845.1" y="338.4" width="11.3" height="3.4" />
            <rect x="845.3" y="339.5" fill="#FFFFFF" width="11.4" height="1.1" className="white-fill" />
          </g>
          <g id="lul-jubilee_940gzzlustd_dlr-dlr_910gstfd" data-linestop="elizabeth">
            <g>
              <path
                fill="#1C3F94"
                d="M854.8,336.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C851.4,338.1,852.9,336.6,854.8,336.6z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M853.6,341c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L853.6,341z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M854.8,337.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C855.1,337.2,854.8,337.4,854.8,337.7z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M855.1,338.6L855,339H854c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C855.2,338.4,855.1,338.6,855.1,338.6z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g id="elizabeth_910gstfd_00000140702098347651151780000010139197747462926260_" data-linestop="elizabeth">
            <g id="elizabeth_910gstfd_00000042716378786589182220000005141724028393487502_" data-linestop="elizabeth">
              <g>
                <path
                  fill="#1C3F94"
                  d="M845.1,336.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C841.7,338.1,843.2,336.6,845.1,336.6z"
                  className="blue-fill"
                />
              </g>
            </g>
            <g id="elizabeth_910gstfd" data-linestop="elizabeth">
              <g>
                <path
                  fill="#FFFFFF"
                  d="M845.1,343c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C848.1,341.7,846.8,343,845.1,343L845.1,343z"
                  className="white-fill"
                />
              </g>
              <g>
                <g>
                  <path
                    fill="#1C3F94"
                    d="M843.9,341c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L843.9,341z"
                    className="blue-fill"
                  />
                  <path
                    fill="#1C3F94"
                    d="M845.1,337.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C845.4,337.2,845.1,337.4,845.1,337.7z"
                    className="blue-fill"
                  />
                  <path
                    fill="#1C3F94"
                    d="M845.4,338.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4 c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C845.5,338.4,845.4,338.6,845.4,338.6z"
                    className="blue-fill"
                  />
                </g>
              </g>
            </g>
          </g>
          <g
            id="lul-central_940gzzlustd_elizabeth_910gstfd_00000127724676784477755770000008912478246052711817_"
            data-linestop="elizabeth"
          >
            <g id="lul-central_940gzzlustd_00000045599025173450174750000003059796661648693938_" data-linestop="jubilee">
              <g>
                <path
                  fill="#1C3F94"
                  d="M837.6,336.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C834.2,338.1,835.7,336.6,837.6,336.6z"
                  className="blue-fill"
                />
              </g>
            </g>
            <g id="lul-central_940gzzlustd" data-linestop="jubilee">
              <g>
                <path
                  fill="#FFFFFF"
                  d="M837.6,343c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C840.6,341.7,839.3,343,837.6,343L837.6,343z"
                  className="white-fill"
                />
              </g>
              <g>
                <g>
                  <path
                    fill="#1C3F94"
                    d="M836.4,341c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L836.4,341z"
                    className="blue-fill"
                  />
                  <path
                    fill="#1C3F94"
                    d="M837.6,337.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C837.9,337.2,837.6,337.4,837.6,337.7z"
                    className="blue-fill"
                  />
                  <path
                    fill="#1C3F94"
                    d="M837.9,338.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4 c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C838,338.4,837.9,338.6,837.9,338.6z"
                    className="blue-fill"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="940gzzluwfn" data-linestop="northern">
          <g>
            <path
              fill="#1C3F94"
              d="M585,199.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C581.6,200.9,583.1,199.4,585,199.4z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M585,205.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C588.1,204.4,586.7,205.8,585,205.8L585,205.8z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M583.9,203.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L583.9,203.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M585.1,200.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C585.3,200,585.1,200.2,585.1,200.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M585.3,201.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C585.4,201.2,585.3,201.4,585.3,201.4z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlumhl" data-linestop="northern">
          <g>
            <path
              fill="#1C3F94"
              d="M568.7,194.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C565.3,196.3,566.8,194.7,568.7,194.7z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M568.7,201.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C571.7,199.8,570.4,201.2,568.7,201.2L568.7,201.2z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M567.5,199.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L567.5,199.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M568.7,195.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C569,195.4,568.7,195.6,568.7,195.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M569,196.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C569.1,196.5,569,196.8,569,196.8z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gcrpndpk" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M322.5,185.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C319.1,187.1,320.6,185.6,322.5,185.6z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M322.5,192.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C325.6,190.7,324.2,192.1,322.5,192.1L322.5,192.1z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M321.4,190c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L321.4,190z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M322.6,186.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C322.8,186.2,322.6,186.5,322.6,186.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M322.9,187.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C322.9,187.4,322.9,187.6,322.9,187.6z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gwatfjdc" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M322.5,143.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C319,144.9,320.6,143.3,322.5,143.3z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M322.5,149.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C325.5,148.4,324.1,149.8,322.5,149.8L322.5,149.8z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M321.3,147.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L321.3,147.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M322.5,144.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C322.7,144,322.5,144.2,322.5,144.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M322.8,145.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C322.9,145.1,322.8,145.4,322.8,145.4z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-metropolitan_lul-piccadilly_940gzzluhgd" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M131.7,227.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C128.3,229.1,129.8,227.6,131.7,227.6z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M131.7,234c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C134.8,232.7,133.4,234,131.7,234L131.7,234z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M130.6,232c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L130.6,232z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M131.8,228.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C132,228.2,131.8,228.4,131.8,228.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M132,229.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C132.1,229.4,132,229.6,132,229.6z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-metropolitan_lul-piccadilly_940gzzluick" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M148.1,227.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C144.7,229.1,146.2,227.6,148.1,227.6z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M148.1,234c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C151.1,232.7,149.8,234,148.1,234L148.1,234z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M146.9,232c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L146.9,232z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M148.1,228.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C148.4,228.2,148.1,228.4,148.1,228.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M148.4,229.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C148.5,229.4,148.4,229.6,148.4,229.6z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-metropolitan_lul-piccadilly_940gzzluuxb" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M110.9,227.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C107.5,229.1,109.1,227.6,110.9,227.6z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M110.9,234c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C114,232.7,112.6,234,110.9,234L110.9,234z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M109.8,232c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L109.8,232z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M111,228.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C111.2,228.2,111,228.4,111,228.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M111.3,229.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C111.3,229.4,111.3,229.6,111.3,229.6z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-district_940gzzlukoy_raillo-overground_910gkenolym" data-linestop="london-overground">
          <g id="lul-district_940gzzlukoy_raillo-overground_910gkenolym" data-linestop="london-overground">
            <rect x="370.3" y="482.2" width="5.1" height="3.4" />
            <rect x="370.1" y="483.4" fill="#FFFFFF" width="5.6" height="1.1" className="white-fill" />
          </g>
          <g id="raillo-overground_910gkenolym" data-linestop="london-overground">
            <g id="raillo-059_940gzzlukoy" data-linestop="district">
              <path
                fill="#1C3F94"
                d="M369.4,480.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C366,482,367.6,480.5,369.4,480.5z"
                className="blue-fill"
              />
            </g>
            <path
              id="raillo-059_940gzzlukoy"
              fill="#FFFFFF"
              d="M369.4,487c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 s3.1,1.4,3.1,3.1C372.5,485.6,371.1,487,369.4,487L369.4,487z"
              className="white-fill"
              data-linestop="district"
            />
            <g id="raillo-059_940gzzlukoy" data-linestop="district">
              <g>
                <path
                  fill="#1C3F94"
                  d="M368.3,484.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L368.3,484.9z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M369.5,481.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C369.7,481.2,369.5,481.4,369.5,481.7z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M369.8,482.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C369.8,482.3,369.8,482.6,369.8,482.6z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
          <g id="lul-district_940gzzlukoy" data-linestop="district">
            <g id="lul-district_940gzzlukoy" data-linestop="district">
              <path
                fill="#1C3F94"
                d="M376.6,480.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C373.2,482,374.8,480.5,376.6,480.5z"
                className="blue-fill"
              />
            </g>
            <path
              id="lul-district_940gzzlukoy"
              fill="#FFFFFF"
              d="M376.6,487c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 s3.1,1.4,3.1,3.1C379.7,485.6,378.3,487,376.6,487L376.6,487z"
              className="white-fill"
              data-linestop="district"
            />
            <g id="lul-district_940gzzlukoy" data-linestop="district">
              <g>
                <path
                  fill="#1C3F94"
                  d="M375.5,484.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L375.5,484.9z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M376.7,481.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C376.9,481.2,376.7,481.4,376.7,481.7z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M377,482.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C377.1,482.3,377,482.6,377,482.6z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="lul-circle_lul-district_lul_jubilee_940gzzluwsm" data-linestop="jubilee">
          <g id="940gzzluwsm" data-linestop="jubilee">
            <rect x="514.5" y="503.9" width="3.4" height="8.9" />
            <rect x="515.7" y="503.7" fill="#FFFFFF" width="1.1" height="9.3" className="white-fill" />
          </g>
          <g id="940gzzluwsm" data-linestop="jubilee">
            <g id="lul-jubilee_940gzzluwsm" data-linestop="jubilee">
              <g>
                <path
                  fill="#1C3F94"
                  d="M516.2,501.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C512.8,503.1,514.3,501.5,516.2,501.5z"
                  className="blue-fill"
                />
              </g>
              <g>
                <g>
                  <path
                    fill="#FFFFFF"
                    d="M515.1,506c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L515.1,506z"
                    className="white-fill"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M516.3,502.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C516.5,502.2,516.3,502.4,516.3,502.7z"
                    className="white-fill"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M516.6,503.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H515c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C516.6,503.4,516.6,503.6,516.6,503.6z"
                    className="white-fill"
                  />
                </g>
              </g>
            </g>
            <g id="lul-circle_lul-district_940gzzluwsm" data-linestop="jubilee">
              <g>
                <path
                  fill="#1C3F94"
                  d="M516.2,508.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C512.8,510.4,514.3,508.9,516.2,508.9z"
                  className="blue-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M516.2,515.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C519.3,514,517.9,515.3,516.2,515.3L516.2,515.3z"
                  className="white-fill"
                />
              </g>
              <g>
                <g>
                  <path
                    fill="#1C3F94"
                    d="M515.1,513.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L515.1,513.3z"
                    className="blue-fill"
                  />
                  <path
                    fill="#1C3F94"
                    d="M516.3,510c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C516.5,509.5,516.3,509.7,516.3,510z"
                    className="blue-fill"
                  />
                  <path
                    fill="#1C3F94"
                    d="M516.6,510.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H515c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C516.6,510.7,516.6,510.9,516.6,510.9z"
                    className="blue-fill"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="910ganerley" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M722.8,679c1.9,0,3.4,1.5,3.4,3.4s-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4S720.9,679,722.8,679z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M722.8,685.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C725.9,684.1,724.5,685.5,722.8,685.5L722.8,685.5z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M721.6,683.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L721.6,683.4z"
                className="blue-fill"
              />
              <circle fill="#1C3F94" cx="723.4" cy="680.2" r="0.5" className="blue-fill" />
              <path
                fill="#1C3F94"
                d="M723.1,681.1l-0.1,0.4H722c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C723.2,680.8,723.1,681.1,723.1,681.1z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gsydenhm" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M722.8,654.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C719.4,656.3,720.9,654.8,722.8,654.8z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M722.8,661.2c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1S724.5,661.2,722.8,661.2 L722.8,661.2z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M721.6,659.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L721.6,659.2z"
                className="blue-fill"
              />
              <circle fill="#1C3F94" cx="723.4" cy="655.9" r="0.5" className="blue-fill" />
              <path
                fill="#1C3F94"
                d="M723.1,656.8l-0.1,0.4H722c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C723.2,656.6,723.1,656.8,723.1,656.8z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gabwdxr" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M928.9,594.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C925.5,595.7,927,594.2,928.9,594.2z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M928.9,600.7c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1S930.6,600.7,928.9,600.7 L928.9,600.7z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M927.8,598.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L927.8,598.6z"
                className="blue-fill"
              />
              <circle fill="#1C3F94" cx="929.5" cy="595.3" r="0.5" className="blue-fill" />
              <path
                fill="#1C3F94"
                d="M929.3,596.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C929.3,596,929.3,596.2,929.3,596.2z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gforesth" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M722.8,643c1.9,0,3.4,1.5,3.4,3.4s-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4S720.9,643,722.8,643z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M722.8,649.4c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C725.9,648.1,724.5,649.4,722.8,649.4L722.8,649.4z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M721.6,647.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L721.6,647.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M722.9,644.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C723.1,643.6,722.9,643.8,722.9,644.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M723.1,645l-0.1,0.4H722c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C723.2,644.8,723.1,645,723.1,645z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gbrockly" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M722.8,618.4c1.9,0,3.4,1.5,3.4,3.4s-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4S720.9,618.4,722.8,618.4z "
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M722.8,624.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C725.9,623.5,724.5,624.9,722.8,624.9L722.8,624.9z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M721.6,622.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L721.6,622.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M722.9,619.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C723.1,619.1,722.9,619.3,722.9,619.6z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M723.1,620.5l-0.1,0.4H722c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C723.2,620.2,723.1,620.5,723.1,620.5z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910ghonropk" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M722.8,630.4c1.9,0,3.4,1.5,3.4,3.4s-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4S720.9,630.4,722.8,630.4z "
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M722.8,636.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C725.9,635.5,724.5,636.9,722.8,636.9L722.8,636.9z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M721.6,634.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L721.6,634.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M722.9,631.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C723.1,631,722.9,631.3,722.9,631.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M723.1,632.4l-0.1,0.4H722c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C723.2,632.2,723.1,632.4,723.1,632.4z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gnwcrell" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M733.8,593c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C730.4,594.5,731.9,593,733.8,593z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M733.8,599.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C736.8,598.1,735.5,599.5,733.8,599.5L733.8,599.5z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M732.6,597.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L732.6,597.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M733.8,594.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C734.1,593.6,733.8,593.9,733.8,594.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M734.1,595l-0.1,0.4H733c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C734.2,594.8,734.1,595,734.1,595z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gpckhmqd" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M662.9,603.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C659.5,605.4,661,603.9,662.9,603.9z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M662.9,610.4c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C666,609,664.6,610.4,662.9,610.4L662.9,610.4z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M661.7,608.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L661.7,608.3z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M663,605.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C663.2,604.6,663,604.8,663,605.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M663.2,606l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C663.3,605.7,663.2,606,663.2,606z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g
          id="lul-jubilee_940gzzlucwr_raillo-overground_910gcndaw_00000167387937797048672300000005199804800747752381_"
          data-linestop="london-overground"
        >
          <g
            id="lul-jubilee_940gzzlucwr_raillo-overground_910gcndaw_00000144297201033532222640000001896999798440301475_"
            data-linestop="london-overground"
          >
            <g>
              <path
                fill="#1C3F94"
                d="M722.8,533.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C719.4,534.8,720.9,533.3,722.8,533.3z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M721.7,537.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L721.7,537.7z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M722.9,534.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C723.1,533.9,722.9,534.2,722.9,534.4z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M723.1,535.3l-0.1,0.4H722c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C723.2,535.1,723.1,535.3,723.1,535.3z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="910gcldnnrb" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M643.1,324.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C639.7,326,641.2,324.5,643.1,324.5z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M643.1,331c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C646.2,329.6,644.8,331,643.1,331L643.1,331z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M641.9,328.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L641.9,328.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M643.1,325.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C643.4,325.1,643.1,325.4,643.1,325.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M643.4,326.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C643.5,326.3,643.4,326.5,643.4,326.5z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluhlt_00000008833405318920458390000002473516577648523403_" data-linestop="central">
          <g>
            <path
              fill="#1C3F94"
              d="M892.4,216.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C889,218.1,890.5,216.6,892.4,216.6z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M892.4,223c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C895.4,221.7,894.1,223,892.4,223L892.4,223z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M891.2,221c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L891.2,221z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M892.4,217.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C892.7,217.2,892.4,217.4,892.4,217.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M892.7,218.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C892.8,218.4,892.7,218.6,892.7,218.6z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlunbp_00000168086602374566403850000018220175444742609831_" data-linestop="central">
          <g>
            <path
              fill="#1C3F94"
              d="M892.4,251.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C889,253.3,890.5,251.8,892.4,251.8z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M892.4,258.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C895.4,256.9,894.1,258.3,892.4,258.3L892.4,258.3z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M891.2,256.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L891.2,256.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M892.4,253c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C892.7,252.5,892.4,252.7,892.4,253z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M892.7,253.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C892.8,253.6,892.7,253.9,892.7,253.9z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluwof_00000157295371479957410450000007835067645746987657_" data-linestop="central">
          <g>
            <path
              fill="#1C3F94"
              d="M844.6,218.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C841.2,220,842.7,218.5,844.6,218.5z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M844.6,224.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C847.7,223.6,846.3,224.9,844.6,224.9L844.6,224.9z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M843.5,222.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L843.5,222.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M844.7,219.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C844.9,219.1,844.7,219.3,844.7,219.6z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M844.9,220.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C845,220.3,844.9,220.5,844.9,220.5z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluswf_00000114035594149537769350000004517248704006996104_" data-linestop="central">
          <g>
            <path
              fill="#1C3F94"
              d="M844.6,230.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C841.2,231.9,842.7,230.4,844.6,230.4z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M844.6,236.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C847.7,235.5,846.3,236.8,844.6,236.8L844.6,236.8z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M843.5,234.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L843.5,234.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M844.7,231.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C844.9,231,844.7,231.2,844.7,231.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M844.9,232.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C845,232.2,844.9,232.4,844.9,232.4z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlurvy_00000105428355894000230250000012425034432559002261_" data-linestop="central">
          <g>
            <path
              fill="#1C3F94"
              d="M858.3,203.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C854.9,204.9,856.4,203.4,858.3,203.4z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M858.3,209.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C861.4,208.5,860,209.9,858.3,209.9L858.3,209.9z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M857.1,207.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L857.1,207.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M858.3,204.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C858.6,204,858.3,204.3,858.3,204.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M858.6,205.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C858.7,205.2,858.6,205.4,858.6,205.4z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluepg_00000054261037107670068400000001503759672581330593_" data-linestop="central">
          <g>
            <path
              fill="#1C3F94"
              d="M885.9,134c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C882.5,135.5,884.1,134,885.9,134z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M885.9,140.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C889,139.1,887.6,140.5,885.9,140.5L885.9,140.5z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M884.8,138.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L884.8,138.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M886,135.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C886.2,134.6,886,134.9,886,135.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M886.3,136l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C886.4,135.8,886.3,136,886.3,136z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluepg_00000003790730753172982200000008631430935782769321_" data-linestop="central">
          <g>
            <path
              fill="#1C3F94"
              d="M871.1,149.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C867.7,150.8,869.2,149.3,871.1,149.3z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M871.1,155.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C874.1,154.4,872.8,155.7,871.1,155.7L871.1,155.7z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M869.9,153.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L869.9,153.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M871.1,150.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C871.3,149.9,871.1,150.1,871.1,150.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M871.4,151.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C871.5,151.1,871.4,151.3,871.4,151.3z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gcrystlp" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M701.8,683.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C698.3,685.2,699.9,683.6,701.8,683.6z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M701.8,690.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C704.8,688.7,703.4,690.1,701.8,690.1L701.8,690.1z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M700.6,688c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L700.6,688z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M701.8,684.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C702,684.3,701.8,684.5,701.8,684.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M702.1,685.7L702,686h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C702.2,685.4,702.1,685.7,702.1,685.7z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gdenmrkh" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M579.9,652.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C576.5,654,578,652.5,579.9,652.5z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M579.9,659c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C582.9,657.6,581.6,659,579.9,659L579.9,659z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M578.7,656.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L578.7,656.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M579.9,653.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C580.2,653.2,579.9,653.4,579.9,653.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M580.2,654.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C580.3,654.3,580.2,654.6,580.2,654.6z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g
          id="lul-bakerloo_lul-circle_lul-hammersmith-city_lul-jubilee_lul-metropolitan_940gzzlubst"
          data-linestop="metropolitan"
        >
          <path
            id="lul-bakerloo_lul-circle_lul-hammersmith-city_lul-metropolitan_lul-jubilee_940gzzlubst"
            d=" M469.8,381.7l-5.4,5.4c-1.1-0.3-2.4,0-3.3,0.9c-1.3,1.3-1.3,3.5,0,4.8c1.3,1.3,3.5,1.3,4.8,0c0.9-0.9,1.2-2.2,0.9-3.3l5.4-5.4 c1.1,0.3,2.4,0,3.3-0.9c1.3-1.3,1.3-3.5,0-4.8c-1.3-1.3-3.5-1.3-4.8,0C469.8,379.3,469.5,380.6,469.8,381.7z"
            data-linestop="metropolitan"
          />
          <g id="lul-bakerloo_lul-jubilee_940gzzlubst" data-linestop="metropolitan">
            <path d="M465.9,392.8c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C467.3,389.4,467.3,391.5,465.9,392.8z" />
          </g>
          <g id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlubst" data-linestop="metropolitan">
            <path d="M475.5,383.3c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C476.8,379.8,476.8,381.9,475.5,383.3z" />
          </g>
          <path
            id="lul-bakerloo_lul-circle_lul-hammersmith-city_lul-metropolitan_lul-jubilee_940gzzlubst"
            fill="#FFFFFF"
            d=" M471.5,379.2c0.9-0.9,2.3-0.9,3.2,0c0.9,0.9,0.9,2.3,0,3.2c-0.8,0.8-1.9,0.9-2.8,0.3l-6.5,6.5c0.5,0.9,0.4,2-0.3,2.8 c-0.9,0.9-2.3,0.9-3.2,0c-0.9-0.9-0.9-2.3,0-3.2c0.8-0.8,1.9-0.9,2.8-0.3l6.5-6.5C470.6,381.1,470.7,380,471.5,379.2z"
            className="white-fill"
            data-linestop="metropolitan"
          />
        </g>
        <g id="lul-bakerloo_lul-circle_lul-district_lul-northern_940gzzluemb" data-linestop="northern">
          <path
            id="lul-bakerloo_lul-circle_lul-district_lul-northern_l940gzzluemb"
            d="M542.9,508.9L540,506 c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9l2.9,2.9c-0.3,1.1,0,2.4,0.9,3.3 c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8C545.3,508.8,544,508.6,542.9,508.9z"
            data-linestop="northern"
          />
          <g id="lul-northern_l940gzzluemb" data-linestop="northern">
            <path d="M534.3,507.5c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0c1.3,1.3,1.3,3.5,0,4.8 C537.8,508.8,535.6,508.8,534.3,507.5z" />
          </g>
          <g id="lul-circle_lul_bakerloo_lul_district_l940gzzluemb" data-linestop="northern">
            <path d="M541.4,514.6c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0c1.3,1.3,1.3,3.5,0,4.8 C544.9,515.9,542.7,515.9,541.4,514.6z" />
          </g>
          <path
            id="lul-bakerloo_lul-circle_lul-district_lul-northern_l940gzzluemb"
            fill="#FFFFFF"
            d="M545.4,510.5 c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.8-0.8-0.9-1.9-0.3-2.8l-4-4c-0.9,0.5-2,0.4-2.8-0.3c-0.9-0.9-0.9-2.3,0-3.2 c0.9-0.9,2.3-0.9,3.2,0c0.8,0.8,0.9,1.9,0.3,2.8l4,4C543.5,509.7,544.6,509.8,545.4,510.5z"
            className="white-fill"
            data-linestop="northern"
          />
        </g>
        <g
          id="lul-central_lul-circle_lul-district_lul-northern_lul-waterloo-city_dlr-dlr_940gzzdlbnk_940gzzlummt"
          data-linestop="dlr"
        >
          <g
            id="lul-circle_lul-district_lul-central_lul-northern_lul-waterloo-city_940gzzlubnk_dlr-dlr_940gzzdlbnk"
            data-linestop="dlr"
          >
            <path
              id="lul-circle_lul-district_lul-central_lul-northern_lul-waterloo-city_940gzzlubnk"
              d=" M637.9,455.6c-0.7-0.3-1.3-0.8-2-0.6l-7.9-8.2c0.4-1.1,0.1-2.4-0.7-3.3c-1.3-1.4-3.4-1.5-4.8-0.2c-1.4,1.3-1.5,3.4-0.2,4.8 c0.9,0.9,2.1,1.3,3.2,1l7.9,8.2c-0.4,1.1,0.2,2.4,1,3.3c0.9,0.9,1.8,1.3,3,1l6.7,6.6c-0.4,1.1-0.1,2.4,0.7,3.3 c1.3,1.4,3.4,1.5,4.8,0.2c1.4-1.3,1.5-3.4,0.2-4.8c-0.9-0.9-2.1-1.3-3.2-1l-6.7-6.6c0.1-0.6,0.1-1.1,0.1-1.5"
              data-linestop="waterloo-city"
            />
            <path
              id="lul-central_lul-waterloo-city_940gzzlubnk"
              d="M627.1,443.4c1.3,1.3,1.3,3.5,0,4.8c-1.3,1.3-3.5,1.3-4.8,0 c-1.3-1.3-1.3-3.5,0-4.8C623.6,442.1,625.8,442.1,627.1,443.4z"
              data-linestop="waterloo-city"
            />
            <path
              id="lul-circle_lul-district_940gzzlummt"
              d="M649.7,466.8c1.3,1.3,1.3,3.5,0,4.8c-1.3,1.3-3.5,1.3-4.8,0 c-1.3-1.3-1.3-3.5,0-4.8C646.2,465.5,648.4,465.5,649.7,466.8z"
              data-linestop="district"
            />
            <path
              fill="#FFFFFF"
              d="M638,456.5c-0.7-0.6-1.7-0.6-2.5-0.2l-8.9-9.3c0.6-0.8,0.5-2-0.2-2.8c-0.8-0.9-2.3-1-3.2-0.1 c-0.9,0.8-1,2.3-0.1,3.2c0.7,0.8,1.8,0.9,2.7,0.5l8.9,9.3c-0.6,0.8-0.5,2,0.2,2.8c0.7,0.8,1.8,0.9,2.7,0.5l7.7,7.7 c-0.5,0.8-0.5,2,0.2,2.8c0.8,0.9,2.3,1,3.2,0.1c0.9-0.8,1-2.3,0.1-3.2c-0.7-0.8-1.8-0.9-2.7-0.5l-7.7-7.7 c0.1-0.2,0.2-0.6,0.3-0.9c0.1-0.2,0-0.7-0.1-1.1c0-0.1-0.1-0.1-0.1-0.2"
              className="white-fill"
            />
          </g>
          <g id="dlr-dlr_lul-northern_940gzzlubnk" data-linestop="waterloo-city">
            <g>
              <path
                fill="#1C3F94"
                d="M636.7,455.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C633.3,456.6,634.8,455.1,636.7,455.1z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M635.5,459.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L635.5,459.5z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M636.7,456.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C637,455.7,636.7,455.9,636.7,456.2z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M637,457.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C637.1,456.9,637,457.1,637,457.1z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="lul-northern_940gzzlukng" data-linestop="northern">
          <path
            id="lul-northern_940gzzlukng_00000077316366717730590640000013719364276611043493_"
            d="M543.4,618.5l-3.4-3.4 c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9l3.4,3.4c-0.3,1.1,0,2.4,0.9,3.3 c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8C545.8,618.5,544.6,618.2,543.4,618.5z"
            data-linestop="northern"
          />
          <g id="lul_northern_940gzzlukng" data-linestop="northern">
            <path d="M541.9,624.2c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0c1.3,1.3,1.3,3.5,0,4.8 C545.4,625.5,543.2,625.5,541.9,624.2z" />
          </g>
          <path
            id="lul-northern_940gzzlukng_00000147200623474972093110000005761664305642912161_"
            fill="#FFFFFF"
            d="M545.9,620.2 c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.8-0.8-0.9-1.9-0.3-2.8l-4.4-4.4c-0.9,0.5-2,0.4-2.8-0.3 c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.8,0.8,0.9,1.9,0.3,2.8l4.4,4.4C544,619.3,545.2,619.4,545.9,620.2z"
            className="white-fill"
            data-linestop="northern"
          />
        </g>
        <g id="lul-victoria_940gzzluhai_raillo-overground_910ghghi" data-linestop="london-overground">
          <g id="lul-victoria_940gzzluhai_raillo-overground_910ghghi" data-linestop="london-overground">
            <rect
              x="666"
              y="320.6"
              transform="matrix(0.7072 -0.707 0.707 0.7072 -37.0689 568.4313)"
              width="3.4"
              height="16.8"
            />
          </g>
          <g id="lul-victoria_940gzzluhai" data-linestop="victoria">
            <path
              id="vic_940gzzluhai"
              d="M664.2,325.4c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C665.5,321.9,665.5,324.1,664.2,325.4z"
              data-linestop="victoria"
            />
            <path
              id="940gzzluhai"
              fill="#FFFFFF"
              d="M660.1,324.6c0.9,0.9,2.3,0.9,3.2,0c0.9-0.9,0.9-2.3,0-3.2 c-0.9-0.9-2.3-0.9-3.2,0C659.2,322.3,659.2,323.7,660.1,324.6z"
              className="white-fill"
              data-linestop="victoria"
            />
            <rect
              id="940gzzluhai"
              x="667.3"
              y="320.6"
              transform="matrix(0.7065 -0.7077 0.7077 0.7065 -36.8928 569.1758)"
              fill="#FFFFFF"
              width="1.1"
              height="16.9"
              className="white-fill"
              data-linestop="victoria"
            />
          </g>
          <g id="raillo-overground(gospel_oak-new_cross)_910ghghi" data-linestop="london-overground">
            <g>
              <path
                fill="#1C3F94"
                d="M673.8,331.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C670.4,333.2,671.9,331.6,673.8,331.6z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M673.8,338.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1 C676.9,336.7,675.5,338.1,673.8,338.1L673.8,338.1z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M672.7,336.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L672.7,336.1z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M673.9,332.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C674.1,332.3,673.9,332.5,673.9,332.8z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M674.1,333.7l-0.1,0.4H673c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C674.2,333.5,674.1,333.7,674.1,333.7z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
          <g id="raillo-overground(richmond-stratford)_910ghghi" data-linestop="london-overground">
            <g>
              <path
                fill="#1C3F94"
                d="M667,324.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C663.6,326.4,665.1,324.8,667,324.8z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M667,331.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1 C670.1,329.9,668.7,331.3,667,331.3L667,331.3z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M665.9,329.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L665.9,329.2z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M667.1,326c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C667.3,325.5,667.1,325.7,667.1,326z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M667.3,326.9l0,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C667.4,326.6,667.3,326.9,667.3,326.9z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="dlr-dlr_940gzzdlsha_raillo-overground_910gshadwel" data-linestop="london-overground">
          <g id="raillo-overground_910gshadwel" data-linestop="london-overground">
            <path
              fill="#FFFFFF"
              d="M724.8,479c-1.1,1.1-2.9,1.1-4,0c-1.1-1.1-1.1-2.9,0-4c1.1-1.1,2.9-1.1,4,0 C725.9,476.1,725.9,477.9,724.8,479z"
              className="white-fill"
            />
            <path d="M725.2,479.4c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C726.5,475.9,726.5,478.1,725.2,479.4z M721.2,478.6c0.9,0.9,2.3,0.9,3.2,0c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0 C720.3,476.3,720.3,477.7,721.2,478.6z" />
          </g>
          <g id="dlr-dlr_940gzzdlsha" data-linestop="dlr">
            <g id="dlr-dlr_940gzzdlsha" data-linestop="dlr">
              <g id="dlr-dlr_940gzzdlsha" data-linestop="dlr">
                <g>
                  <path
                    fill="#1C3F94"
                    d="M732.3,464c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C728.9,465.5,730.5,464,732.3,464z"
                    className="blue-fill"
                  />
                </g>
                <g>
                  <g>
                    <path
                      fill="#FFFFFF"
                      d="M731.2,468.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L731.2,468.4z"
                      className="white-fill"
                    />
                    <path
                      fill="#FFFFFF"
                      d="M732.4,465.2c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 S732.4,464.9,732.4,465.2z"
                      className="white-fill"
                    />
                    <path
                      fill="#FFFFFF"
                      d="M732.7,466.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4 c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2 c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C732.7,465.8,732.7,466.1,732.7,466.1z"
                      className="white-fill"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="lul-bakerloo_lul-jubilee_lul-northern_lul-waterloo-city_940gzzluwlo" data-linestop="waterloo-city">
          <g id="lul-bakerloo_lul-northern_lul-waterloo-city_940gzzluwlo" data-linestop="waterloo-city">
            <g id="lul-bakerloo_lul-jubilee_lul-northern_lul-waterloo-city_940gzzluwlo" data-linestop="waterloo-city">
              <path
                id="lul-bakerloo_lul-jubilee_lul-northern_lul-waterloo-city_940gzzluwlo"
                d="M543.6,540.7 c-1.3,0-2.4,0.7-3,1.7h-0.9c-0.6-1-1.7-1.7-3-1.7c-1.3,0-2.4,0.7-3,1.7h-1.2c-0.6-1-1.7-1.7-3-1.7c-1.9,0-3.4,1.5-3.4,3.4 c0,1.9,1.5,3.4,3.4,3.4c1.3,0,2.4-0.7,3-1.7h1.2c0.6,1,1.7,1.7,3,1.7c1.3,0,2.4-0.7,3-1.7h0.9c0.6,1,1.7,1.7,3,1.7 c1.9,0,3.4-1.5,3.4-3.4C547,542.2,545.5,540.7,543.6,540.7z"
                data-linestop="waterloo-city"
              />
              <path
                id="lul-bakerloo_lul-waterloo-city_940gzzluwlo"
                d="M547,544.1c0,1.9-1.5,3.4-3.4,3.4 c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C545.5,540.7,547,542.2,547,544.1z"
                data-linestop="waterloo-city"
              />
              <path
                id="lul-northern_940gzzluwlo"
                d="M540.2,544.1c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4C538.6,540.7,540.2,542.2,540.2,544.1z"
                data-linestop="waterloo-city"
              />
              <path
                id="lul-jubilee_940gzzluwlo"
                d="M533.1,544.1c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4C531.5,540.7,533.1,542.2,533.1,544.1z"
                data-linestop="waterloo-city"
              />
              <path
                id="lul-bakerloo_lul-jubilee_lul-northern_lul-waterloo-city_940gzzluwlo"
                fill="#FFFFFF"
                d=" M545.8,544.1c0,1.3-1,2.3-2.3,2.3c-1.1,0-2-0.7-2.2-1.7h-2.4c-0.3,1-1.1,1.7-2.2,1.7c-1.1,0-1.9-0.7-2.2-1.7h-2.7 c-0.3,1-1.1,1.7-2.2,1.7c-1.3,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3c1.1,0,1.9,0.7,2.2,1.7h2.7c0.3-1,1.1-1.7,2.2-1.7 c1.1,0,1.9,0.7,2.2,1.7h2.4c0.3-1,1.1-1.7,2.2-1.7C544.8,541.9,545.8,542.9,545.8,544.1z"
                className="white-fill"
                data-linestop="waterloo-city"
              />
            </g>
          </g>
          <g id="lul-jubilee_940gzzluwlo" data-linestop="waterloo-city">
            <g>
              <path
                fill="#1C3F94"
                d="M529.7,540.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C526.2,542.2,527.8,540.7,529.7,540.7z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M528.5,545.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L528.5,545.1z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M529.7,541.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C529.9,541.4,529.7,541.6,529.7,541.9z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M530,542.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C530.1,542.5,530,542.8,530,542.8z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g
          id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlumgt_northern_940gmgt_elizabeth_910glivst"
          data-linestop="elizabeth"
        >
          <g
            id="lul-central_lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlulvt_elizabeth_910glivst"
            data-linestop="elizabeth"
          >
            <g>
              <rect x="644.1" y="400.2" width="3.4" height="20.8" />
            </g>
            <g>
              <path
                fill="#FFFFFF"
                d="M645.8,425.9c-1.6,0-3-1.3-3-3c0-1.6,1.3-3,3-3c1.6,0,3,1.3,3,3C648.8,424.6,647.5,425.9,645.8,425.9z "
                className="white-fill"
              />
              <path d="M645.8,426.5c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6C649.4,424.9,647.8,426.5,645.8,426.5z M643.5,422.9c0,1.3,1.1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4C644.5,420.5,643.5,421.6,643.5,422.9z" />
            </g>
            <rect x="645.3" y="398.8" fill="#FFFFFF" width="1.1" height="22.4" className="white-fill" />
          </g>
          <g id="railo-overground_910glivst_elizabeth_910glivst" data-linestop="elizabeth">
            <rect
              x="642.2"
              y="392"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -87.2055 576.8234)"
              width="21.1"
              height="3.4"
            />
          </g>
          <g id="elizabeth_910glivst_00000063597325529369761170000012875433193416412062_" data-linestop="elizabeth">
            <rect
              x="644.2"
              y="392.2"
              transform="matrix(0.707 -0.7072 0.7072 0.707 -86.2335 577.3174)"
              fill="#FFFFFF"
              width="18.9"
              height="1.1"
              className="white-fill"
            />
          </g>
          <g id="lul-northern_940gzzlumgt_elizabeth_910glivst" data-linestop="elizabeth">
            <g>
              <rect
                x="632.9"
                y="403.3"
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -98.4916 572.1483)"
                width="17.1"
                height="3.4"
              />
            </g>
            <rect
              x="634.9"
              y="403.5"
              transform="matrix(0.707 -0.7072 0.7072 0.707 -97.5218 572.6423)"
              fill="#FFFFFF"
              width="14.9"
              height="1.1"
              className="white-fill"
            />
          </g>
          <g id="elizabeth_910glivstll" data-linestop="elizabeth">
            <g>
              <path
                fill="#1C3F94"
                d="M645.9,397c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6 C642.3,398.6,643.9,397,645.9,397z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M644.7,401.6c0.2,0.6,0.7,1,1.3,1c0.8,0,1.4-0.6,1.4-1.4c0-0.4-0.2-0.8-0.4-1l0.1-0.6 c0.5,0.3,0.9,0.9,0.9,1.6c0,1-0.8,1.9-1.9,1.9c-0.7,0-1.3-0.4-1.6-0.9L644.7,401.6z"
                  className="white-fill"
                />
                <circle fill="#FFFFFF" cx="646.5" cy="398.2" r="0.5" className="white-fill" />
                <path
                  fill="#FFFFFF"
                  d="M646.2,399.2l-0.1,0.4H645c0,0-0.2,0-0.2,0.3c0,0.2,0.2,0.3,0.2,0.3h1.1l-0.1,0.4h-1.4 c0,0-0.1,0-0.2,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.3c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C646.3,398.9,646.2,399.2,646.2,399.2z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g
            id="railo-overground_910glivst_elizabeth_910glivst_00000011006098683345462890000000146479823310626230_"
            data-linestop="elizabeth"
          >
            <g>
              <path
                fill="#1C3F94"
                d="M660,383c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C656.6,384.5,658.1,383,660,383z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M660,389.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C663,388.1,661.7,389.5,660,389.5L660,389.5z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M658.8,387.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L658.8,387.4z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M660,384.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C660.3,383.7,660,383.9,660,384.2z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M660.3,385.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C660.4,384.8,660.3,385.1,660.3,385.1z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
          <g
            id="lul-circle_lul-hammersmith-city_lul-metropolitan_lul-northern_940gzzlumgt_northern_940glivstll"
            data-linestop="northern"
          >
            <g
              id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlumgt_northern_940gmgt_00000156588200340893060420000000244149120827571126_"
              data-linestop="northern"
            >
              <g>
                <rect
                  x="622.2"
                  y="413.8"
                  transform="matrix(0.7071 -0.7071 0.7071 0.7071 -109.0685 567.6752)"
                  width="17.1"
                  height="3.4"
                />
              </g>
            </g>
            <rect
              x="624.3"
              y="414"
              transform="matrix(0.707 -0.7072 0.7072 0.707 -108.1008 568.1691)"
              fill="#FFFFFF"
              width="14.9"
              height="1.1"
              className="white-fill"
            />
          </g>
          <g id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlumgt" data-linestop="northern">
            <g>
              <path
                fill="#1C3F94"
                d="M626.5,416.2c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6 C622.9,417.8,624.5,416.2,626.5,416.2z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M625.3,420.8c0.2,0.6,0.7,1,1.3,1c0.8,0,1.4-0.6,1.4-1.4c0-0.4-0.2-0.8-0.4-1l0.1-0.6 c0.5,0.3,0.9,0.9,0.9,1.6c0,1-0.8,1.9-1.9,1.9c-0.7,0-1.3-0.4-1.6-0.9L625.3,420.8z"
                  className="white-fill"
                />
                <circle fill="#FFFFFF" cx="627.1" cy="417.4" r="0.5" className="white-fill" />
                <path
                  fill="#FFFFFF"
                  d="M626.8,418.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.3c0,0.2,0.2,0.3,0.2,0.3h1.1l-0.1,0.4h-1.4 c0,0-0.1,0-0.2,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.3c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C626.9,418.1,626.8,418.4,626.8,418.4z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g id="northern_940glivstll">
            <g>
              <path
                fill="#1C3F94"
                d="M636.8,406.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C633.4,407.7,634.9,406.2,636.8,406.2z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M636.8,412.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C639.9,411.3,638.5,412.7,636.8,412.7L636.8,412.7z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M635.6,410.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L635.6,410.6z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M636.9,407.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C637.1,406.8,636.9,407.1,636.9,407.3z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M637.1,408.2l-0.1,0.4H636c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C637.2,408,637.1,408.2,637.1,408.2z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g
          id="elizabeth_910gwchapxr_raillo-overground_910gwchapel_lul-hammersmith-city_940gwpl_lul-district_940gwpl"
          data-linestop="elizabeth"
        >
          <rect
            x="715.5"
            y="407.2"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -83.174 628.5897)"
            width="3.4"
            height="15.1"
          />
          <rect
            x="716.8"
            y="407.3"
            transform="matrix(0.707 -0.7072 0.7072 0.707 -83.2002 628.8339)"
            fill="#FFFFFF"
            width="1.1"
            height="15.1"
            className="white-fill"
          />
        </g>
        <g
          id="raillo-overground_910gwchapel_lul-hammersmith-city_lul-district_940gwpl"
          data-linestop="london-overground"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M722.8,416.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C719.4,418.1,721,416.6,722.8,416.6z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M722.8,423.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C725.9,421.7,724.5,423.1,722.8,423.1L722.8,423.1z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M721.7,421c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L721.7,421z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M722.9,417.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C723.1,417.3,722.9,417.5,722.9,417.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M723.2,418.6l-0.1,0.4H722c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C723.2,418.4,723.2,418.6,723.2,418.6z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="elizabeth_910gwchapxr" data-linestop="elizabeth">
          <g id="910gwchapxr" data-linestop="elizabeth">
            <g>
              <path
                fill="#1C3F94"
                d="M711.9,405.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C708.5,407.4,710,405.9,711.9,405.9z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M710.7,410.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L710.7,410.3z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M711.9,407.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C712.2,406.6,711.9,406.8,711.9,407.1z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M712.2,408l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C712.3,407.7,712.2,408,712.2,408z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="lul-district_lul-hammersmith-city_lul-jubilee_940gzzluwhm_dlr-dlr_940gzzdlwhm" data-linestop="dlr">
          <rect
            x="849.3"
            y="388.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -29.4543 717.1841)"
            width="3.4"
            height="11.4"
          />
          <rect
            x="850.3"
            y="388.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -29.4007 717.0554)"
            fill="#FFFFFF"
            width="1.1"
            height="11"
            className="white-fill"
          />
          <g id="lul-jubilee_940gzzluwhm" data-linestop="jubilee">
            <g>
              <path
                fill="#1C3F94"
                d="M846.4,386.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C843,387.6,844.5,386.1,846.4,386.1z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M845.2,390.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L845.2,390.5z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M846.4,387.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C846.6,386.8,846.4,387,846.4,387.3z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M846.7,388.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C846.8,387.9,846.7,388.2,846.7,388.2z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g id="lul-district_lul-hammersmith-city_940gzzluwhm_dlr-dlr_940gzzdlwhm" data-linestop="dlr">
            <g>
              <path
                fill="#1C3F94"
                d="M854.9,394.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C851.5,396.2,853,394.6,854.9,394.6z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M853.7,399c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L853.7,399z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M854.9,395.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C855.1,395.3,854.9,395.5,854.9,395.8z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M855.2,396.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C855.3,396.4,855.2,396.7,855.2,396.7z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="910gemrspkh" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M974.4,246.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C971,248.4,972.6,246.8,974.4,246.8z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M974.4,253.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C977.5,251.9,976.1,253.3,974.4,253.3L974.4,253.3z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M973.3,251.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L973.3,251.3z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M974.5,248c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C974.7,247.5,974.5,247.7,974.5,248z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M974.8,248.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C974.8,248.7,974.8,248.9,974.8,248.9z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gchdwlht" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M939.4,242.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C936,243.7,937.5,242.2,939.4,242.2z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M939.4,248.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C942.5,247.3,941.1,248.7,939.4,248.7L939.4,248.7z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M938.3,246.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L938.3,246.6z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M939.5,243.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C939.7,242.9,939.5,243.1,939.5,243.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M939.8,244.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C939.8,244,939.8,244.3,939.8,244.3z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="railo-overground_910gromford_elizabeth_910gromford" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M954.6,227c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C951.2,228.6,952.7,227,954.6,227z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M954.6,233.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C957.7,232.1,956.3,233.5,954.6,233.5L954.6,233.5z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M953.5,231.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L953.5,231.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M954.7,228.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C954.9,227.7,954.7,227.9,954.7,228.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M954.9,229.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C955,228.8,954.9,229.1,954.9,229.1z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910ggideapk" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M966.5,215.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C963.1,216.7,964.6,215.1,966.5,215.1z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M966.5,221.6c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C969.6,220.2,968.2,221.6,966.5,221.6L966.5,221.6z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M965.4,219.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L965.4,219.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M966.6,216.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C966.8,215.8,966.6,216,966.6,216.3z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M966.8,217.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C966.9,216.9,966.8,217.2,966.8,217.2z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910ghrldwod" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M976.2,205.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C972.7,207,974.3,205.5,976.2,205.5z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M976.2,212c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C979.2,210.6,977.8,212,976.2,212L976.2,212z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M975,209.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L975,209.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M976.2,206.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C976.4,206.1,976.2,206.4,976.2,206.6z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M976.5,207.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C976.6,207.3,976.5,207.5,976.5,207.5z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-victoria_940gzzlusvs_raillo-overground_910gsevnsis" data-linestop="london-overground">
          <path
            fill="#FFFFFF"
            d="M716.1,263.5c-1.1,1.1-2.9,1.1-4,0c-1.1-1.1-1.1-2.9,0-4c1.1-1.1,2.9-1.1,4,0 C717.2,260.6,717.2,262.4,716.1,263.5z"
            className="white-fill"
          />
          <path d="M716.5,263.9c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C717.9,260.5,717.9,262.6,716.5,263.9z M712.5,263.1c0.9,0.9,2.3,0.9,3.2,0c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0 C711.6,260.8,711.6,262.3,712.5,263.1z" />
        </g>
        <g id="lul-victoria_940gzzlutmh" data-linestop="victoria">
          <g>
            <path
              fill="#1C3F94"
              d="M732.8,258.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C729.4,259.7,730.9,258.2,732.8,258.2z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M731.6,262.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L731.6,262.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M732.8,259.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C733,258.8,732.8,259,732.8,259.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M733.1,260.2l-0.1,0.4H732c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C733.2,260,733.1,260.2,733.1,260.2z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlusvs" data-linestop="victoria">
          <path
            fill="#FFFFFF"
            d="M684.4,259c-1.1,1.1-2.9,1.1-4,0c-1.1-1.1-1.1-2.9,0-4c1.1-1.1,2.9-1.1,4,0 C685.5,256.1,685.5,257.9,684.4,259z"
            className="white-fill"
          />
          <path d="M684.8,259.4c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C686.2,255.9,686.2,258.1,684.8,259.4z M680.8,258.6c0.9,0.9,2.3,0.9,3.2,0c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0 C679.9,256.3,679.9,257.7,680.8,258.6z" />
        </g>
        <g id="lul-piccadilly_940gzzlumrh" data-linestop="piccadilly">
          <path
            fill="#FFFFFF"
            d="M684.4,259c-1.1,1.1-2.9,1.1-4,0c-1.1-1.1-1.1-2.9,0-4c1.1-1.1,2.9-1.1,4,0 C685.5,256.1,685.5,257.9,684.4,259z"
            className="white-fill"
          />
          <path d="M684.8,259.4c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C686.1,255.9,686.1,258.1,684.8,259.4z M680.8,258.6c0.9,0.9,2.3,0.9,3.2,0c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0 C679.9,256.3,679.9,257.7,680.8,258.6z" />
        </g>
        <g id="910gbrtwood" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M1002,179.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C998.6,181.2,1000.1,179.6,1002,179.6z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M1002,186.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C1005.1,184.7,1003.7,186.1,1002,186.1L1002,186.1z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M1000.8,184c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L1000.8,184z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M1002.1,180.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C1002.3,180.3,1002.1,180.5,1002.1,180.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M1002.3,181.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l-0.1,0.3h-1.4 c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C1002.4,181.5,1002.3,181.7,1002.3,181.7z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gshenfld" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M1019.8,161.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C1016.4,163.4,1017.9,161.9,1019.8,161.9z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M1019.8,168.4c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C1022.8,167,1021.4,168.4,1019.8,168.4L1019.8,168.4z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M1018.6,166.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L1018.6,166.3z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M1019.8,163c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C1020,162.5,1019.8,162.8,1019.8,163z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M1020.1,163.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l-0.1,0.3h-1.4 c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C1020.2,163.7,1020.1,163.9,1020.1,163.9z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gedmngrn" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M714.1,188.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C710.7,190.4,712.2,188.8,714.1,188.8z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M714.1,195.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C717.2,193.9,715.8,195.3,714.1,195.3L714.1,195.3z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M712.9,193.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L712.9,193.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M714.2,190c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C714.4,189.5,714.2,189.7,714.2,190z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M714.4,190.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C714.5,190.6,714.4,190.9,714.4,190.9z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gwhhrtla" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M714.1,212c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C710.7,213.6,712.2,212,714.1,212z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M714.1,218.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C717.2,217.1,715.8,218.5,714.1,218.5L714.1,218.5z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M712.9,216.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L712.9,216.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M714.2,213.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C714.4,212.7,714.2,212.9,714.2,213.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M714.4,214.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C714.5,213.9,714.4,214.1,714.4,214.1z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910genfldtn" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M714.1,145.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C710.7,147.2,712.2,145.7,714.1,145.7z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M714.1,152.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C717.2,150.8,715.8,152.2,714.1,152.2L714.1,152.2z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M712.9,150.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L712.9,150.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M714.2,146.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C714.4,146.3,714.2,146.6,714.2,146.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M714.4,147.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C714.5,147.5,714.4,147.7,714.4,147.7z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlucks" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M682.5,159.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C679,161.4,680.6,159.9,682.5,159.9z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M682.5,166.4c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C685.5,165,684.1,166.4,682.5,166.4L682.5,166.4z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M681.3,164.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L681.3,164.3z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M682.5,161c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C682.7,160.5,682.5,160.8,682.5,161z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M682.8,161.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C682.9,161.7,682.8,161.9,682.8,161.9z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gbhillpk" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M714.1,159.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C710.7,161.4,712.2,159.9,714.1,159.9z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M714.1,166.4c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C717.2,165,715.8,166.4,714.1,166.4L714.1,166.4z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M712.9,164.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L712.9,164.3z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M714.2,161c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C714.4,160.5,714.2,160.8,714.2,161z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M714.4,161.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C714.5,161.7,714.4,161.9,714.4,161.9z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gcheshnt" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M760,135.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C756.6,136.8,758.1,135.3,760,135.3z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M760,141.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C763.1,140.4,761.7,141.8,760,141.8L760,141.8z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M758.8,139.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L758.8,139.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M760,136.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C760.3,136,760,136.2,760,136.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M760.3,137.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C760.4,137.1,760.3,137.4,760.3,137.4z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910ghghmspk" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M785.4,202.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C782,204.4,783.5,202.9,785.4,202.9z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M785.4,209.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C788.4,208,787.1,209.3,785.4,209.3L785.4,209.3z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M784.2,207.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L784.2,207.3z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M785.4,204c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C785.7,203.5,785.4,203.8,785.4,204z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M785.7,204.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C785.8,204.7,785.7,204.9,785.7,204.9z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gchingfd" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M785.4,176.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C782,177.6,783.5,176.1,785.4,176.1z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M785.4,182.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C788.4,181.2,787.1,182.5,785.4,182.5L785.4,182.5z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M784.2,180.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L784.2,180.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M785.4,177.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C785.7,176.7,785.4,176.9,785.4,177.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M785.7,178.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C785.8,177.9,785.7,178.1,785.7,178.1z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlgal_00000168797901397925385080000006779175180873440941_" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M954.4,540.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C951,542.2,952.5,540.7,954.4,540.7z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M953.2,545.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L953.2,545.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M954.4,541.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5 C954.7,541.3,954.4,541.5,954.4,541.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M954.7,542.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C954.8,542.5,954.7,542.7,954.7,542.7z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzdlbec_00000065069132381817321890000006214302086530041498_" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M954.4,551.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C951,553,952.5,551.5,954.4,551.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M953.2,555.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L953.2,555.9z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M954.4,552.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5 C954.7,552.1,954.4,552.3,954.4,552.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M954.7,553.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C954.8,553.3,954.7,553.5,954.7,553.5z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g
          id="lul_victoria_940gzzluwwl_raillo-overground_910gwltwcen_raillo-overground_910gwlthqrd"
          data-linestop="london-overground"
        >
          <g
            id="lul_victoria_940gzzluwwl_raillo-overground_910wltwcen_raillo-overground_910wlthqrd"
            data-linestop="victoria"
          >
            <rect
              x="784.1"
              y="262.1"
              transform="matrix(0.7072 -0.707 0.707 0.7072 44.4457 634.9692)"
              width="9.4"
              height="3.4"
            />
          </g>
          <g id="lul-victoria_940gzzluwwl" data-linestop="victoria">
            <path
              fill="#FFFFFF"
              d="M794.3,261.5c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C793.1,258.7,794.3,259.9,794.3,261.5z"
              className="white-fill"
            />
            <path d="M794.9,261.5c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4 C793.4,258.1,794.9,259.6,794.9,261.5z M791.5,263.8c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3 C789.2,262.8,790.2,263.8,791.5,263.8z" />
          </g>
          <rect
            id="lul_victoria_9100wltwcen_raillo-overground_910wltwcen_raillo-overground_910wlthqrd"
            x="784.3"
            y="263.8"
            transform="matrix(0.707 -0.7072 0.7072 0.707 44.0306 634.9293)"
            fill="#FFFFFF"
            width="8"
            height="1.1"
            className="white-fill"
          />
          <g id="910gwltwcen" data-linestop="london-overground">
            <g>
              <path
                fill="#1C3F94"
                d="M785.4,263.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C782,265.3,783.5,263.8,785.4,263.8z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M785.4,270.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C788.5,268.9,787.1,270.3,785.4,270.3L785.4,270.3z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M784.3,268.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L784.3,268.2z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M785.5,264.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C785.7,264.4,785.5,264.7,785.5,264.9z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M785.8,265.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C785.8,265.6,785.8,265.8,785.8,265.8z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
          <g id="910gwlthqrd" data-linestop="london-overground">
            <g>
              <path
                fill="#1C3F94"
                d="M776,273.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C772.6,274.7,774.1,273.2,776,273.2z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M776,279.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1 C779.1,278.3,777.7,279.7,776,279.7L776,279.7z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M774.9,277.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L774.9,277.6z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M776.1,274.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C776.3,273.8,776.1,274.1,776.1,274.3z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M776.4,275.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C776.4,275,776.4,275.2,776.4,275.2z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="raillo-overground_910gwnstdpk" data-linestop="london-overground">
          <path
            fill="#FFFFFF"
            d="M869.9,292.5c1.1-1.1,2.9-1.1,4,0c1.1,1.1,1.1,2.9,0,4c-1.1,1.1-2.9,1.1-4,0 C868.7,295.4,868.7,293.6,869.9,292.5z"
            className="white-fill"
          />
          <path d="M869.5,292.1c1.3-1.3,3.5-1.3,4.8,0c1.3,1.3,1.3,3.5,0,4.8c-1.3,1.3-3.5,1.3-4.8,0C868.1,295.6,868.1,293.4,869.5,292.1 z M873.5,292.9c-0.9-0.9-2.3-0.9-3.2,0c-0.9,0.9-0.9,2.3,0,3.2c0.9,0.9,2.3,0.9,3.2,0C874.4,295.2,874.4,293.8,873.5,292.9z" />
        </g>
        <g id="raillo-overground_910ghaknynm_raillo-overground_910ghacknyc" data-linestop="london-overground">
          <g id="raillo-overground_910ghaknynm_raillo-overground_910ghacknyc" data-linestop="london-overground">
            <rect
              x="750.9"
              y="328.8"
              transform="matrix(0.7072 -0.707 0.707 0.7072 -16.7535 630.3555)"
              width="3.4"
              height="13.2"
            />
          </g>
          <g id="910ghaknynm" data-linestop="london-overground">
            <path
              id="vic_940gzzluhai"
              d="M750.3,333.1c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C751.6,329.6,751.6,331.7,750.3,333.1z"
              data-linestop="victoria"
            />
            <path
              id="940gzzluhai"
              fill="#FFFFFF"
              d="M746.3,332.3c0.9,0.9,2.3,0.9,3.2,0c0.9-0.9,0.9-2.3,0-3.2 c-0.9-0.9-2.3-0.9-3.2,0C745.4,329.9,745.4,331.4,746.3,332.3z"
              className="white-fill"
              data-linestop="victoria"
            />
          </g>
          <rect
            id="raillo-overground_910ghaknynm_raillo-overground_910ghacknyc"
            x="752.2"
            y="328.8"
            transform="matrix(0.7065 -0.7077 0.7077 0.7065 -16.5167 631.1343)"
            fill="#FFFFFF"
            width="1.1"
            height="13.3"
            className="white-fill"
            data-linestop="london-overground"
          />
          <g id="910ghacknyc" data-linestop="london-overground">
            <g>
              <path
                fill="#1C3F94"
                d="M757.1,336.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C753.7,338,755.3,336.5,757.1,336.5z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M757.1,342.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C760.2,341.6,758.8,342.9,757.1,342.9L757.1,342.9z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M756,340.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L756,340.9z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M757.2,337.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C757.4,337.1,757.2,337.3,757.2,337.6z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M757.5,338.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C757.5,338.3,757.5,338.5,757.5,338.5z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="lul-district_940gzzluupm_railo-overground_910gupmnstr" data-linestop="london-overground">
          <g id="lul-district_940gzzluupm_railo-overground_910gupmnstr" data-linestop="london-overground">
            <rect x="994.9" y="262.9" width="3.4" height="9.8" />
          </g>
          <g id="railo-overground_910gupmnstr" data-linestop="london-overground">
            <path
              fill="#FFFFFF"
              d="M996.6,266.1c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8c1.6,0,2.8,1.3,2.8,2.8 C999.5,264.8,998.2,266.1,996.6,266.1z"
              className="white-fill"
            />
            <path d="M996.6,266.7c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4C1000,265.1,998.5,266.7,996.6,266.7 z M994.3,263.3c0,1.3,1,2.3,2.3,2.3c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3C995.4,261,994.3,262,994.3,263.3z" />
          </g>
          <rect
            id="lul-district_940gzzluupm_railo-overground_910gupmnstr"
            x="996"
            y="264.3"
            fill="#FFFFFF"
            width="1.1"
            height="7.9"
            className="white-fill"
            data-linestop="london-overground"
          />
          <g id="lul-district_940gzzluupm" data-linestop="district">
            <g id="lul_district_940gzzluupm" data-linestop="district">
              <g>
                <path
                  fill="#1C3F94"
                  d="M996.6,267.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C993.2,268.6,994.7,267.1,996.6,267.1z"
                  className="blue-fill"
                />
              </g>
              <g>
                <g>
                  <path
                    fill="#FFFFFF"
                    d="M995.5,271.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L995.5,271.5z"
                    className="white-fill"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M996.7,268.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C996.9,267.7,996.7,268,996.7,268.2z"
                    className="white-fill"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M996.9,269.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4 c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C997,268.9,996.9,269.1,996.9,269.1z"
                    className="white-fill"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="940gzzlucar" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M633.9,315c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C630.4,316.6,632,315,633.9,315z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M632.7,319.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L632.7,319.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M633.9,316.2c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5S633.9,315.9,633.9,316.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M634.2,317.1l-0.1,0.4H633c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l-0.1,0.3h-1.4 c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C634.3,316.9,634.2,317.1,634.2,317.1z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gkenr" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M349.6,315.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C346.2,317.4,347.7,315.9,349.6,315.9z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M349.6,322.4c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C352.7,321,351.3,322.4,349.6,322.4L349.6,322.4z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M348.4,320.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L348.4,320.3z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M349.6,317.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C349.9,316.6,349.6,316.8,349.6,317.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M349.9,318l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C350,317.7,349.9,318,349.9,318z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gnewxgte" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M722.8,604c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C719.4,605.5,720.9,604,722.8,604z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M722.8,610.4c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C725.9,609.1,724.5,610.4,722.8,610.4L722.8,610.4z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M721.6,608.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L721.6,608.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M722.9,605.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C723.1,604.6,722.9,604.8,722.9,605.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M723.1,606l-0.1,0.4H722c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C723.2,605.8,723.1,606,723.1,606z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-jubilee_940gzzlucyf" data-linestop="jubilee">
          <g>
            <path
              fill="#1C3F94"
              d="M786.1,510c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C782.7,511.5,784.2,510,786.1,510z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M785,514.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L785,514.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M786.2,511.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C786.4,510.7,786.2,510.9,786.2,511.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M786.5,512.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C786.5,511.8,786.5,512.1,786.5,512.1z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="dlr-dlr_940gzzdlcan" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M795.5,500.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,502.1,793.6,500.6,795.5,500.6z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M794.4,505c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L794.4,505z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.6,501.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C795.8,501.3,795.6,501.5,795.6,501.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M795.9,502.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,502.4,795.9,502.7,795.9,502.7z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="elizabeth_910gcanwhrf" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M804.8,491.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C801.4,492.8,802.9,491.3,804.8,491.3z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M803.7,495.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L803.7,495.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M804.9,492.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C805.1,492,804.9,492.2,804.9,492.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M805.1,493.4l-0.1,0.4H804c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C805.2,493.1,805.1,493.4,805.1,493.4z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gcnnb" data-linestop="london-overground">
          <g>
            <path
              fill="#FFFFFF"
              d="M690.3,330.5l0,2c-1,0.4-1.7,1.4-1.7,2.6c0,1.6,1.3,2.8,2.8,2.8c1.6,0,2.8-1.3,2.8-2.8 c0-1.2-0.7-2.2-1.7-2.6v-2c1-0.4,1.7-1.4,1.7-2.6c0-1.6-1.3-2.8-2.8-2.8c-1.6,0-2.8,1.3-2.8,2.8 C688.6,329,689.3,330,690.3,330.5z"
              className="white-fill"
            />
            <path d="M689.1,327.9c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3c0,1.1-0.7,1.9-1.7,2.2v2.8c1,0.3,1.7,1.1,1.7,2.2 c0,1.3-1,2.3-2.3,2.3c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.7-1.9,1.7-2.2l0-2.8C689.9,329.8,689.1,328.9,689.1,327.9z M689.7,330.8 l0,1.3c-1,0.6-1.7,1.7-1.7,3c0,1.9,1.5,3.4,3.4,3.4c1.9,0,3.4-1.5,3.4-3.4c0-1.3-0.7-2.4-1.7-3v-1.3c1-0.6,1.7-1.7,1.7-3 c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4C688,329.1,688.7,330.2,689.7,330.8z" />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M691.4,331.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C688,333.2,689.5,331.7,691.4,331.7z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M690.2,336.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L690.2,336.1z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M691.5,332.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C691.7,332.4,691.5,332.6,691.5,332.9z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M691.7,333.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C691.8,333.5,691.7,333.7,691.7,333.7z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M691.4,324.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C688,326,689.5,324.5,691.4,324.5z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M691.4,330.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C694.5,329.6,693.1,330.9,691.4,330.9L691.4,330.9z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M690.2,328.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L690.2,328.9z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M691.5,325.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C691.7,325.1,691.5,325.3,691.5,325.6z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M691.7,326.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C691.8,326.3,691.7,326.5,691.7,326.5z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="lul-jubilee_lul-metropolitan_940gzzlufyr" data-linestop="metropolitan">
          <path
            id="lul-jubilee_lul-metropolitan_940gzzlufyr"
            d="M435.4,328l-5.5,5.5c-1.1-0.3-2.4,0-3.3,0.9 c-1.3,1.3-1.3,3.5,0,4.8c1.3,1.3,3.5,1.3,4.8,0c0.9-0.9,1.2-2.2,0.9-3.3l5.5-5.5c1.1,0.3,2.4,0,3.3-0.9c1.3-1.3,1.3-3.5,0-4.8 c-1.3-1.3-3.5-1.3-4.8,0C435.3,325.6,435.1,326.9,435.4,328z"
            data-linestop="metropolitan"
          />
          <g id="lul-metropolitan_940gzzlufyr" data-linestop="metropolitan">
            <path d="M431.4,339.2c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C432.7,335.7,432.7,337.9,431.4,339.2z" />
          </g>
          <g id="lul-jubilee_940gzzlufyr" data-linestop="metropolitan">
            <path d="M441.1,329.5c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C442.4,326.1,442.4,328.2,441.1,329.5z" />
          </g>
          <path
            id="lul-jubilee_lul-metropolitan_940gzzlufyr"
            fill="#FFFFFF"
            d="M437,325.5c0.9-0.9,2.3-0.9,3.2,0 c0.9,0.9,0.9,2.3,0,3.2c-0.8,0.8-1.9,0.9-2.8,0.3l-6.6,6.6c0.5,0.9,0.4,2-0.3,2.8c-0.9,0.9-2.3,0.9-3.2,0 c-0.9-0.9-0.9-2.3,0-3.2c0.8-0.8,1.9-0.9,2.8-0.3l6.6-6.6C436.2,327.4,436.3,326.3,437,325.5z"
            className="white-fill"
            data-linestop="metropolitan"
          />
        </g>
        <g id="910gstotnhm" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M731,241.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C727.6,242.8,729.1,241.3,731,241.3z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M731,247.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1 C734.1,246.4,732.7,247.7,731,247.7L731,247.7z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M729.8,245.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L729.8,245.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M731.1,242.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C731.3,241.9,731.1,242.1,731.1,242.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M731.3,243.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C731.4,243.1,731.3,243.3,731.3,243.3z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul_jubilee_lul_northern_940gzzlulnb" data-linestop="northern">
          <g>
            <path
              fill="#1C3F94"
              d="M636.7,510c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C633.3,511.5,634.8,510,636.7,510z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M635.5,514.4c0.2,0.5,0.7,0.9,1.2,0.9c0.4,0,0.7-0.1,0.9-0.4c0.2-0.2,0.4-0.6,0.4-0.9 c0-0.4-0.2-0.7-0.4-1l0.1-0.6c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L635.5,514.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M636.7,511.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C637,510.6,636.7,510.9,636.7,511.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M637,512l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C637.1,511.8,637,512,637,512z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrmtp" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M394.4,710.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C391,712.2,392.6,710.7,394.4,710.7z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M393.3,715.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L393.3,715.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M394.5,711.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C394.7,711.3,394.5,711.6,394.5,711.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M394.8,712.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C394.8,712.5,394.8,712.7,394.8,712.7z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrmdn" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M434.3,741.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C430.9,743.1,432.4,741.5,434.3,741.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M433.1,746c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L433.1,746z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M434.3,742.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C434.6,742.2,434.3,742.4,434.3,742.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M434.6,743.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C434.7,743.4,434.6,743.6,434.6,743.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrphi" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M456.2,741.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C452.8,743.1,454.3,741.5,456.2,741.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M455.1,746c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L455.1,746z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M456.3,742.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C456.5,742.2,456.3,742.4,456.3,742.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M456.6,743.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H455c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C456.6,743.4,456.6,743.6,456.6,743.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrbgv" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M480.3,741.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C476.9,743.1,478.4,741.5,480.3,741.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M479.1,746c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L479.1,746z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M480.3,742.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C480.5,742.2,480.3,742.4,480.3,742.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M480.6,743.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H479c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C480.7,743.4,480.6,743.6,480.6,743.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrmch" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M506.5,741.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C503,743.1,504.6,741.5,506.5,741.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M505.3,746c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L505.3,746z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M506.5,742.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C506.7,742.2,506.5,742.4,506.5,742.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M506.8,743.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C506.9,743.4,506.8,743.6,506.8,743.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrmjt" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M532.7,741.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C529.3,743.1,530.8,741.5,532.7,741.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M531.6,746c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L531.6,746z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M532.8,742.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C533,742.2,532.8,742.4,532.8,742.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M533,743.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C533.1,743.4,533,743.6,533,743.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrbed" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M565.6,741.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C562.2,743.1,563.7,741.5,565.6,741.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M564.5,746c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L564.5,746z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M565.7,742.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C565.9,742.2,565.7,742.4,565.7,742.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M565.9,743.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C566,743.4,565.9,743.6,565.9,743.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrtpa" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M593.2,741.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C589.8,743.1,591.3,741.5,593.2,741.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M592.1,746c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L592.1,746z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M593.3,742.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C593.5,742.2,593.3,742.4,593.3,742.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M593.5,743.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H592c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C593.6,743.4,593.5,743.6,593.5,743.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcramp" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M617.6,741.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C614.2,743.1,615.8,741.5,617.6,741.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M616.5,746c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L616.5,746z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M617.7,742.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C617.9,742.2,617.7,742.4,617.7,742.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M618,743.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C618,743.4,618,743.6,618,743.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrwad" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M642.2,741.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C638.8,743.1,640.4,741.5,642.2,741.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M641.1,746c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L641.1,746z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M642.3,742.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C642.5,742.2,642.3,742.4,642.3,742.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M642.6,743.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H641c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C642.6,743.4,642.6,743.6,642.6,743.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrwan" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M666.2,741.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C662.8,743.1,664.3,741.5,666.2,741.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M665.1,746c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L665.1,746z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M666.3,742.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C666.5,742.2,666.3,742.4,666.3,742.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M666.6,743.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H665c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C666.6,743.4,666.6,743.6,666.6,743.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrrvc" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M687.6,732c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C684.2,733.6,685.7,732,687.6,732z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M686.4,736.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L686.4,736.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M687.6,733.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C687.9,732.7,687.6,732.9,687.6,733.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M687.9,734.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C688,733.9,687.9,734.1,687.9,734.1z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrctr" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M707.4,720.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C704,722.4,705.5,720.8,707.4,720.8z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M706.2,725.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L706.2,725.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M707.5,722c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C707.7,721.5,707.5,721.7,707.5,722z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M707.7,722.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C707.8,722.6,707.7,722.9,707.7,722.9z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrchr" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M714.4,741.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C711,743.1,712.5,741.5,714.4,741.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M713.2,746c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L713.2,746z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M714.4,742.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C714.6,742.2,714.4,742.4,714.4,742.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M714.7,743.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C714.8,743.4,714.7,743.6,714.7,743.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrcen" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M745.7,741.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C742.3,743.1,743.8,741.5,745.7,741.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M744.6,746c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L744.6,746z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M745.8,742.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C746,742.2,745.8,742.4,745.8,742.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M746,743.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C746.1,743.4,746,743.6,746,743.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gwcroydn" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M722.8,711.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C719.4,712.9,720.9,711.4,722.8,711.4z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M722.8,717.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C725.9,716.5,724.5,717.8,722.8,717.8L722.8,717.8z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M721.6,715.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L721.6,715.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M722.9,712.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C723.1,712,722.9,712.2,722.9,712.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M723.1,713.4l0,0.4H722c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C723.2,713.2,723.1,713.4,723.1,713.4z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrwcr" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M732.3,720.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C728.9,722.4,730.5,720.9,732.3,720.9z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M731.2,725.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L731.2,725.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M732.4,722.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C732.6,721.6,732.4,721.8,732.4,722.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M732.7,723l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C732.7,722.7,732.7,723,732.7,723z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrwel" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M749.7,720.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C746.3,722.4,747.8,720.8,749.7,720.8z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M748.5,725.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L748.5,725.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M749.7,722c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C750,721.5,749.7,721.7,749.7,722z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M750,722.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C750.1,722.6,750,722.9,750,722.9z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrecr" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M776.9,741.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C773.5,743.1,775,741.5,776.9,741.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M775.7,746c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L775.7,746z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M777,742.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C777.2,742.2,777,742.4,777,742.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M777.2,743.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C777.3,743.4,777.2,743.6,777.2,743.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrleb" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M792.2,741.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C788.8,743.1,790.4,741.5,792.2,741.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M791.1,746c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L791.1,746z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M792.3,742.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C792.5,742.2,792.3,742.4,792.3,742.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M792.6,743.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H791c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C792.6,743.4,792.6,743.6,792.6,743.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrsan" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M808.2,741.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C804.8,743.1,806.4,741.5,808.2,741.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M807.1,746c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L807.1,746z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M808.3,742.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C808.5,742.2,808.3,742.4,808.3,742.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M808.6,743.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H807c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C808.7,743.4,808.6,743.6,808.6,743.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcradd" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M827.6,732.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C824.2,733.7,825.8,732.1,827.6,732.1z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M826.5,736.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L826.5,736.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M827.7,733.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C827.9,732.8,827.7,733,827.7,733.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M828,734.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C828,733.9,828,734.2,828,734.2z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrbla" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M838.2,721.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C834.8,723.1,836.3,721.6,838.2,721.6z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M837.1,726c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L837.1,726z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M838.3,722.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C838.5,722.3,838.3,722.5,838.3,722.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M838.5,723.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H837c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C838.6,723.4,838.5,723.6,838.5,723.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrwod" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M848.7,711.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C845.3,712.6,846.8,711.1,848.7,711.1z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M847.5,715.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L847.5,715.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M848.7,712.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C849,711.7,848.7,712,848.7,712.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M849,713.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C849.1,712.9,849,713.1,849,713.1z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrara" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M859.2,700.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C855.8,702.1,857.4,700.6,859.2,700.6z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M858.1,705c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L858.1,705z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M859.3,701.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C859.5,701.2,859.3,701.4,859.3,701.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M859.6,702.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H858c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C859.6,702.4,859.6,702.6,859.6,702.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrhar" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M899.9,671.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C896.5,673.3,898.1,671.8,899.9,671.8z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M898.8,676.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L898.8,676.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M900,672.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C900.2,672.4,900,672.6,900,672.9z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M900.3,673.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C900.3,673.6,900.3,673.8,900.3,673.8z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrelm" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M893.1,692.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C889.7,694,891.2,692.4,893.1,692.4z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M891.9,696.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L891.9,696.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M893.1,693.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C893.4,693.1,893.1,693.3,893.1,693.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M893.4,694.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C893.5,694.2,893.4,694.5,893.4,694.5z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrbir" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M924.2,671.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C920.8,673.3,922.3,671.8,924.2,671.8z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M923.1,676.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L923.1,676.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M924.3,672.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C924.5,672.4,924.3,672.6,924.3,672.9z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M924.5,673.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H923c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C924.6,673.6,924.5,673.8,924.5,673.8z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrave" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M949,671.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C945.6,673.3,947.1,671.8,949,671.8z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M947.8,676.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L947.8,676.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M949,672.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C949.3,672.4,949,672.6,949,672.9z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M949.3,673.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C949.4,673.6,949.3,673.8,949.3,673.8z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrbrd" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M973.8,671.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C970.4,673.3,971.9,671.8,973.8,671.8z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M972.7,676.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L972.7,676.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M973.9,672.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C974.1,672.4,973.9,672.6,973.9,672.9z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M974.2,673.8l-0.1,0.4H973c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C974.2,673.6,974.2,673.8,974.2,673.8z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrbek" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M998,671.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C994.6,673.3,996.1,671.8,998,671.8z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M996.8,676.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L996.8,676.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M998.1,672.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C998.3,672.4,998.1,672.7,998.1,672.9z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M998.3,673.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C998.4,673.6,998.3,673.8,998.3,673.8z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrloy" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M825.8,749.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C822.4,750.7,823.9,749.2,825.8,749.2z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M824.7,753.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L824.7,753.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M825.9,750.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C826.1,749.8,825.9,750,825.9,750.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M826.1,751.2l-0.1,0.4H825c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C826.2,751,826.1,751.2,826.1,751.2z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrcoo" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M834.1,757.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C830.7,758.9,832.2,757.4,834.1,757.4z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M832.9,761.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L832.9,761.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M834.1,758.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C834.4,758.1,834.1,758.3,834.1,758.6z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M834.4,759.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C834.5,759.2,834.4,759.5,834.4,759.5z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrgra" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M842.4,765.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C839,767.2,840.5,765.7,842.4,765.7z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M841.2,770.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L841.2,770.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M842.4,766.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C842.7,766.4,842.4,766.6,842.4,766.9z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M842.7,767.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C842.8,767.5,842.7,767.8,842.7,767.8z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcradv" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M850.7,774c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C847.3,775.5,848.8,774,850.7,774z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M849.5,778.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L849.5,778.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M850.7,775.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C850.9,774.6,850.7,774.9,850.7,775.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M851,776l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C851.1,775.8,851,776,851,776z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrfld" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M859,782.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C855.5,783.8,857.1,782.3,859,782.3z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M857.8,786.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L857.8,786.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M859,783.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C859.2,782.9,859,783.2,859,783.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M859.3,784.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C859.4,784.1,859.3,784.3,859.3,784.3z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrkgh" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M867.3,790.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C863.9,792.1,865.4,790.6,867.3,790.6z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M866.1,795c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L866.1,795z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M867.3,791.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C867.6,791.3,867.3,791.5,867.3,791.8z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M867.6,792.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C867.7,792.4,867.6,792.7,867.6,792.7z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrnwa" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M875.6,798.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C872.1,800.5,873.7,798.9,875.6,798.9z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M874.4,803.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L874.4,803.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M875.6,800.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C875.8,799.6,875.6,799.8,875.6,800.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M875.9,801l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C876,800.7,875.9,801,875.9,801z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzlugfd" data-linestop="central">
          <g>
            <path
              fill="#1C3F94"
              d="M174.1,352.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C170.7,354.2,172.3,352.7,174.1,352.7z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M174.1,359.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C177.2,357.8,175.8,359.2,174.1,359.2L174.1,359.2z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M173,357.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L173,357.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M174.2,353.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C174.4,353.3,174.2,353.6,174.2,353.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M174.5,354.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C174.5,354.5,174.5,354.7,174.5,354.7z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g
          id="lul-circle_lul-hammersmith-city_lul-metropolitan_lul-northern_lul-piccadilly_lul-victoria_940gzzluksx"
          data-linestop="piccadilly"
        >
          <g
            id="lul-circle_lul-hammersmith-city_lul-metropolitan_lul-northern_lul-piccadilly_lul-victoria_940gzzluksx"
            data-linestop="piccadilly"
          >
            <rect
              x="576.3"
              y="374.5"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -95.4358 522.0688)"
              width="12.3"
              height="3.4"
            />
          </g>
          <g id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzluksx" data-linestop="piccadilly">
            <rect
              x="577"
              y="376"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -95.7425 521.9417)"
              fill="#FFFFFF"
              width="10.3"
              height="1.1"
              className="white-fill"
            />
          </g>
          <g id="lul-northern_lul-piccadilly_940gzzluksx" data-linestop="piccadilly">
            <g>
              <path
                fill="#1C3F94"
                d="M587.3,367.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C583.9,369.5,585.4,367.9,587.3,367.9z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M586.1,372.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L586.1,372.3z"
                  className="white-fill"
                />
                <circle fill="#FFFFFF" cx="587.8" cy="369.1" r="0.5" className="white-fill" />
                <path
                  fill="#FFFFFF"
                  d="M587.6,370l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l-0.1,0.3h-1.4 c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C587.7,369.7,587.6,370,587.6,370z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzluksx" data-linestop="piccadilly">
            <g>
              <path
                fill="#1C3F94"
                d="M577.3,377.8c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6 C573.7,379.4,575.3,377.8,577.3,377.8z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M576.1,382.4c0.2,0.6,0.7,1,1.3,1c0.8,0,1.4-0.6,1.4-1.4c0-0.4-0.2-0.8-0.4-1l0.1-0.6 c0.5,0.3,0.9,0.9,0.9,1.6c0,1-0.8,1.9-1.9,1.9c-0.7,0-1.3-0.4-1.6-0.9L576.1,382.4z"
                  className="white-fill"
                />
                <circle fill="#FFFFFF" cx="577.9" cy="379" r="0.5" className="white-fill" />
                <path
                  fill="#FFFFFF"
                  d="M577.6,379.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.3c0,0.2,0.2,0.3,0.2,0.3h1.1l-0.1,0.4H576 c0,0-0.1,0-0.2,0.1c0,0-0.1,0.1-0.1,0.1L575,383c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.3c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C577.7,379.7,577.6,379.9,577.6,379.9z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="940gzzluvxl" data-linestop="victoria">
          <g>
            <path
              fill="#1C3F94"
              d="M485.2,612c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C481.8,613.6,483.3,612,485.2,612z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M484,616.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L484,616.4z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M485.2,613.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C485.4,612.7,485.2,612.9,485.2,613.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M485.5,614.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C485.6,613.9,485.5,614.1,485.5,614.1z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluepk" data-linestop="district">
          <g>
            <path
              fill="#1C3F94"
              d="M967.2,296.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C963.8,298,965.3,296.5,967.2,296.5z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M966,300.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L966,300.9z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M967.3,297.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C967.5,297.2,967.3,297.4,967.3,297.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M967.5,298.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H966c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C967.6,298.3,967.5,298.6,967.5,298.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzludgy" data-linestop="district">
          <g>
            <path
              fill="#1C3F94"
              d="M939.8,323.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C936.4,325.4,937.9,323.9,939.8,323.9z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M938.6,328.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L938.6,328.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M939.8,325c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C940.1,324.5,939.8,324.8,939.8,325z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M940.1,325.9l-0.1,0.4H939c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C940.2,325.7,940.1,325.9,940.1,325.9z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-circle_lul-district_940gzzlubkf" data-linestop="district">
          <g>
            <path
              fill="#1C3F94"
              d="M598.2,495.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C594.8,497.1,596.3,495.6,598.2,495.6z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M597.1,500c0.2,0.5,0.7,0.9,1.2,0.9c0.4,0,0.7-0.1,0.9-0.4c0.2-0.2,0.4-0.6,0.4-0.9 c0-0.4-0.2-0.7-0.4-1l0.1-0.6c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L597.1,500z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M598.3,496.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C598.5,496.2,598.3,496.4,598.3,496.7z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M598.6,497.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H597c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C598.6,497.4,598.6,497.6,598.6,497.6z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="dlr-dlr_940gzzdltwg" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M692.6,477.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C689.2,479.2,690.7,477.7,692.6,477.7z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M691.4,482.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L691.4,482.1z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M692.6,478.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C692.8,478.4,692.6,478.6,692.6,478.9z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M692.9,479.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C693,479.5,692.9,479.7,692.9,479.7z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-circle_lul-district_940gzzlutwh" data-linestop="district">
          <g>
            <path
              fill="#1C3F94"
              d="M680.5,465.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C677.1,467.3,678.7,465.7,680.5,465.7z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M680.5,472.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C683.6,470.8,682.2,472.2,680.5,472.2L680.5,472.2z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M679.4,470.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L679.4,470.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M680.6,466.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C680.8,466.4,680.6,466.6,680.6,466.9z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M680.9,467.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C680.9,467.5,680.9,467.8,680.9,467.8z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g
          id="lul-district_lul-hammersmith-city_940gzzlubkg_raillo-overground_910gbkg_00000039123673506928057340000004530741264967992714_"
          data-linestop="hammersmith-city"
        >
          <g
            id="lul-district_lul-hammersmith-city_940gzzlubkg_raillo-overground_910gbkg"
            data-linestop="hammersmith-city"
          >
            <g id="lul-district_lul-hammersmith-city_940gzzlubkg" data-linestop="hammersmith-city">
              <rect x="907.7" y="345.5" width="3.4" height="11.7" />
            </g>
            <rect
              id="lul-district_lul-hammersmith-city_940gzzlubkg_raillo-overground_910gbarking"
              x="908.9"
              y="346.9"
              fill="#FFFFFF"
              width="1.1"
              height="10"
              className="white-fill"
              data-linestop="london-overground"
            />
          </g>
          <g id="raillo-overground_910gbkg">
            <g>
              <path
                fill="#1C3F94"
                d="M909.4,341.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C906,343.4,907.5,341.8,909.4,341.8z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M909.4,348.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C912.4,346.9,911.1,348.3,909.4,348.3L909.4,348.3z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M908.2,346.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L908.2,346.3z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M909.4,343c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C909.7,342.5,909.4,342.7,909.4,343z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M909.7,343.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C909.8,343.7,909.7,343.9,909.7,343.9z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
          <g id="lul-district_lul-hammersmith-city_940gzzlubkg" data-linestop="hammersmith-city">
            <g>
              <path
                fill="#1C3F94"
                d="M909.4,353c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C906,354.6,907.5,353,909.4,353z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M908.2,357.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L908.2,357.4z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M909.4,354.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C909.7,353.7,909.4,353.9,909.4,354.2z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M909.7,355.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C909.8,354.8,909.7,355.1,909.7,355.1z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="lul-district_lul-hammersmith-city_940gzzluehm" data-linestop="hammersmith-city">
          <g>
            <path
              fill="#1C3F94"
              d="M898.8,363.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C895.4,364.6,896.9,363.1,898.8,363.1z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M897.6,367.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L897.6,367.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M898.9,364.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C899.1,363.8,898.9,364,898.9,364.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M899.1,365.2l-0.1,0.4H898c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C899.2,364.9,899.1,365.2,899.1,365.2z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluupy" data-linestop="district">
          <g>
            <path
              fill="#1C3F94"
              d="M920.6,343.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C917.1,344.6,918.7,343.1,920.6,343.1z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M919.4,347.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L919.4,347.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M920.6,344.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C920.8,343.8,920.6,344,920.6,344.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M920.9,345.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C921,344.9,920.9,345.1,920.9,345.1z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="940gzzluacy" data-linestop="northern">
          <path
            fill="#FFFFFF"
            d="M587,264.9c-1.1,1.1-2.9,1.1-4,0c-1.1-1.1-1.1-2.9,0-4c1.1-1.1,2.9-1.1,4,0 C588.1,262,588.1,263.8,587,264.9z"
            className="white-fill"
          />
          <path d="M587.4,265.3c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0C588.8,261.9,588.8,264,587.4,265.3z M583.4,264.5c0.9,0.9,2.3,0.9,3.2,0c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0C582.5,262.2,582.5,263.7,583.4,264.5z" />
        </g>
        <g id="910guprhlwy" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M594.6,269c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C591.2,270.6,592.7,269,594.6,269z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M594.6,275.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C597.6,274.1,596.3,275.5,594.6,275.5L594.6,275.5z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M593.4,273.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L593.4,273.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M594.6,270.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C594.9,269.7,594.6,269.9,594.6,270.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M594.9,271.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C595,270.9,594.9,271.1,594.9,271.1z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-central_lul-jubilee_940gzzlubnd_elizabeth_910gbondst" data-linestop="elizabeth">
          <rect
            x="464.7"
            y="425"
            transform="matrix(0.7072 -0.707 0.707 0.7072 -167.0944 455.5341)"
            width="3.4"
            height="8.9"
          />
          <rect
            x="465.8"
            y="424.8"
            transform="matrix(0.707 -0.7072 0.7072 0.707 -167.0776 455.6561)"
            fill="#FFFFFF"
            width="1.1"
            height="9.3"
            className="white-fill"
          />
        </g>
        <g id="lul-jubilee_940gzzlubnd_elizabeth_910gbondst" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M463.6,422.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C460.2,424.4,461.7,422.9,463.6,422.9z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M462.5,427.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L462.5,427.3z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M463.7,424c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C463.9,423.5,463.7,423.8,463.7,424z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M463.9,424.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C464,424.7,463.9,424.9,463.9,424.9z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-central_940gzzlubnd" data-linestop="jubilee">
          <g>
            <path
              fill="#1C3F94"
              d="M469.8,429.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C466.4,430.9,467.9,429.4,469.8,429.4z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M469.8,435.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C472.9,434.5,471.5,435.8,469.8,435.8L469.8,435.8z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M468.7,433.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L468.7,433.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M469.9,430.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C470.1,430,469.9,430.2,469.9,430.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M470.1,431.4l-0.1,0.4H469c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C470.2,431.2,470.1,431.4,470.1,431.4z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-central_lul-northern_940gzzlutcr_elizabeth_910gtotctrd" data-linestop="elizabeth">
          <g
            id="lul-central_lul-northern_940gzzlutcr_elizabeth_910gtotctrd_00000038415332280050737210000006462599619202088852_"
            data-linestop="elizabeth"
          >
            <rect
              x="529.2"
              y="428"
              transform="matrix(0.7072 -0.707 0.707 0.7072 -147.5685 503.1928)"
              width="8.9"
              height="3.4"
            />
            <rect
              x="529"
              y="429.2"
              transform="matrix(0.707 -0.7072 0.7072 0.707 -147.5774 503.3413)"
              fill="#FFFFFF"
              width="9.3"
              height="1.1"
              className="white-fill"
            />
          </g>
          <g id="lul-northern_940gzzlutcr_elizabeth_910gtotctrd" data-linestop="elizabeth">
            <g>
              <path
                fill="#1C3F94"
                d="M536.8,422.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C533.4,424.4,534.9,422.9,536.8,422.9z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M535.6,427.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L535.6,427.3z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M536.8,424.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C537.1,423.6,536.8,423.8,536.8,424.1z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M537.1,424.9l-0.1,0.4H536c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C537.2,424.7,537.1,424.9,537.1,424.9z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g id="lul-central_940gzzlutcr" data-linestop="northern">
            <g>
              <path
                fill="#1C3F94"
                d="M530.7,429.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C527.3,430.8,528.8,429.3,530.7,429.3z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M530.7,435.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C533.8,434.4,532.4,435.8,530.7,435.8L530.7,435.8z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M529.6,433.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L529.6,433.7z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M530.8,430.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C531,430,530.8,430.2,530.8,430.5z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M531.1,431.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C531.1,431.1,531.1,431.4,531.1,431.4z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g
          id="lul-bakerloo_lul-circle_lul-district_lul-hammersmith-city_940gzzlupac_elizabeth_910gpadtll_910gpadton"
          data-linestop="elizabeth"
        >
          <g id="lul-bakerloo_lul-circle_lul-district_940gzzlupac_elizabeth_910gpadton" data-linestop="elizabeth">
            <g
              id="lul-bakerloo_lul-circle_lul-district_940gzzlupac_lul-hammersmith-city_940gzzlupah"
              data-linestop="hammersmith-city"
            >
              <path
                id="lul-circle_lul-district_940gzzlupac_elizabeth_910gpadtll"
                d="M393.2,392.4l8.6,8.6 c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8c-0.9-0.9-2.2-1.2-3.3-0.9l-8.6-8.6 c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8C390.8,392.4,392.1,392.7,393.2,392.4z"
                data-linestop="elizabeth"
              />
              <path
                id="lul-circle_lul-district_lul_940gzzlupac_elizabeth_910gpadtll"
                fill="#FFFFFF"
                d="M390.7,390.7 c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.8,0.8,0.9,1.9,0.3,2.8l9.6,9.6c0.9-0.5,2-0.4,2.8,0.3c0.9,0.9,0.9,2.3,0,3.2 c-0.9,0.9-2.3,0.9-3.2,0c-0.8-0.8-0.9-1.9-0.3-2.8l-9.6-9.6C392.6,391.5,391.5,391.4,390.7,390.7z"
                className="white-fill"
                data-linestop="elizabeth"
              />
              <path
                id="lul-bakerloo_lul-circle_lul-district_lul-hammersmith_940gzzlupac"
                d="M394.8,386.7 c-0.9-0.9-2.2-1.2-3.3-0.9l-4.7-4.7c0.3-1.1,0-2.4-0.9-3.3c-0.9-0.9-2.2-1.2-3.3-0.9l-2.2-2.2c0.3-1.1,0-2.4-0.9-3.3 c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9l2.2,2.2c-0.3,1.1,0,2.4,0.9,3.3 c0.9,0.9,2.2,1.2,3.3,0.9l4.7,4.7c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0C396.1,390.2,396.1,388,394.8,386.7z"
                data-linestop="district"
              />
              <path
                id="lul-circle_lul-district_940gzzlupac"
                d="M394.8,386.7c1.3,1.3,1.3,3.5,0,4.8c-1.3,1.3-3.5,1.3-4.8,0 c-1.3-1.3-1.3-3.5,0-4.8C391.3,385.3,393.4,385.3,394.8,386.7z"
                data-linestop="district"
              />
              <rect
                x="395.2"
                y="387.8"
                transform="matrix(0.707 -0.7072 0.7072 0.707 -161.5967 394.8654)"
                fill="#FFFFFF"
                width="1.1"
                height="9.3"
                className="white-fill"
              />
              <path
                id="lul-circle_940gzzlupah_lul-hammersmith-city_940gzzlupah"
                d="M385.9,377.8c1.3,1.3,1.3,3.5,0,4.8 c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8C382.4,376.4,384.5,376.4,385.9,377.8z"
                data-linestop="hammersmith-city"
              />
              <path
                id="lul-bakerloo_lul-circle_lul-district_940gzzlupac_lul-hammersmith-city_940gzzlupah"
                fill="#FFFFFF"
                d=" M394,390.7c-0.9,0.9-2.3,0.9-3.2,0c-0.8-0.8-0.9-1.9-0.3-2.8l-5.8-5.8c-0.9,0.5-2,0.4-2.8-0.3c-0.8-0.8-0.9-1.9-0.4-2.8 l-3.3-3.3c-0.9,0.5-2,0.4-2.8-0.3c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.7,0.8,0.9,1.9,0.3,2.8l3.3,3.3 c0.9-0.5,2-0.4,2.8,0.3c0.8,0.8,0.9,1.9,0.3,2.8l5.8,5.8c0.9-0.5,2-0.4,2.8,0.4C394.9,388.4,394.9,389.8,394,390.7z"
                className="white-fill"
                data-linestop="hammersmith-city"
              />
            </g>
          </g>
          <g id="elizabeth_910gpadtll" data-linestop="elizabeth">
            <g>
              <path
                fill="#1C3F94"
                d="M405.1,398.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C401.7,399.9,403.2,398.4,405.1,398.4z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M403.9,402.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L403.9,402.8z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M405.2,399.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C405.4,399,405.2,399.3,405.2,399.5z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M405.4,400.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C405.5,400.2,405.4,400.4,405.4,400.4z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g id="lul-circle_lul-hammersmith-city_940gzzlupah" data-linestop="hammersmith-city">
            <g>
              <path
                fill="#1C3F94"
                d="M383.5,376.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C380.1,378.3,381.6,376.8,383.5,376.8z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M383.5,383.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C386.5,381.9,385.2,383.2,383.5,383.2L383.5,383.2z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M382.3,381.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L382.3,381.2z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M383.5,377.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C383.8,377.4,383.5,377.6,383.5,377.9z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M383.8,378.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C383.9,378.6,383.8,378.8,383.8,378.8z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
          <g id="lul-bakerloo_940gzzlupah" data-linestop="hammersmith-city">
            <g>
              <path
                fill="#1C3F94"
                d="M377.1,370.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C373.7,371.9,375.2,370.4,377.1,370.4z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M377.1,376.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C380.2,375.5,378.8,376.9,377.1,376.9L377.1,376.9z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M375.9,374.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L375.9,374.8z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M377.1,371.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C377.4,371,377.1,371.3,377.1,371.5z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M377.4,372.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C377.5,372.2,377.4,372.4,377.4,372.4z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g
          id="lul-district_940gzzlugnrsbry_raillo-overground_910ggnrsbry_00000042735563556994696540000012890801831263343523_"
          data-linestop="london-overground"
        >
          <g
            id="lul-district_940gzzlugnrsbry_raillo-overground_910ggnrsbry_00000171706316249744160560000008952645355875970743_"
            data-linestop="london-overground"
          >
            <path d="M228.1,537.1l-1.4-1.4c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9 l1.4,1.4c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8C230.5,537.1,229.2,536.8,228.1,537.1z" />
          </g>
          <path
            id="lul-district_940gzzlugnrsbry_00000013892721934962241590000003620973473241152416_"
            d="M231.4,542.9 c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0C232.7,539.4,232.7,541.5,231.4,542.9z"
          />
          <path
            id="raillo-overground_910ggnrsbry_00000002372083130136611630000008197781136579939975_"
            d="M225.8,537.3 c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0C227.1,533.8,227.1,536,225.8,537.3z"
            data-linestop="london-overground"
          />
          <path
            id="lul-district_940gzzlugnrsbry_raillo-overground_910ggnrsbry_00000044153952330719400120000012882196509667164296_"
            fill="#FFFFFF"
            d=" M230.6,538.8c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.8-0.8-0.9-1.9-0.3-2.8l-2.4-2.4c-0.9,0.5-2,0.4-2.8-0.3 c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.8,0.8,0.8,1.8,0.3,2.7l2.5,2.5C228.7,538,229.8,538.1,230.6,538.8z"
            className="white-fill"
            data-linestop="london-overground"
          />
        </g>
        <g id="lul-victoria_940gzzlublr_raillo-overground_910gblchsrd" data-linestop="london-overground">
          <g id="lul-victoria_940gzzlublr_raillo-overground_910gblchsrd" data-linestop="london-overground">
            <g id="lul-victoria_940gzzlublr_raillo-overground_910gblchsrd" data-linestop="london-overground">
              <path d="M752.9,257.6l-0.7,0.7c-1.1-0.3-2.4,0-3.3,0.9c-1.3,1.3-1.3,3.5,0,4.8c1.3,1.3,3.5,1.3,4.8,0c0.9-0.9,1.2-2.2,0.9-3.3 l0.7-0.7c1.1,0.3,2.4,0,3.3-0.9c1.3-1.3,1.3-3.5,0-4.8c-1.3-1.3-3.5-1.3-4.8,0C752.9,255.2,752.6,256.4,752.9,257.6z" />
            </g>
            <path
              id="lul-victoria_940gzzlublr"
              d="M749,264c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0c1.3,1.3,1.3,3.5,0,4.8 C752.4,265.3,750.3,265.3,749,264z"
              data-linestop="victoria"
            />
            <path
              id="lul-victoria_940gzzlublr_raillo-overground_910gblchsrd"
              fill="#FFFFFF"
              d="M754.6,255.1 c0.9-0.9,2.3-0.9,3.2,0c0.9,0.9,0.9,2.3,0,3.2c-0.8,0.8-1.9,0.9-2.8,0.3l-1.7,1.7c0.5,0.9,0.4,2-0.3,2.8 c-0.9,0.9-2.3,0.9-3.2,0c-0.9-0.9-0.9-2.3,0-3.2c0.8-0.8,1.9-0.9,2.8-0.3l1.7-1.7C753.7,257,753.9,255.8,754.6,255.1z"
              className="white-fill"
              data-linestop="london-overground"
            />
          </g>
          <g id="910gblchsrd" data-linestop="london-overground">
            <g>
              <path
                fill="#1C3F94"
                d="M756.2,253.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C752.8,254.8,754.3,253.3,756.2,253.3z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M756.2,259.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1 C759.3,258.4,757.9,259.8,756.2,259.8L756.2,259.8z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M755.1,257.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L755.1,257.7z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M756.3,254.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C756.5,253.9,756.3,254.2,756.3,254.4z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M756.5,255.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H755c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C756.6,255.1,756.5,255.3,756.5,255.3z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="lul-district_lul-hammersmith-city_940gzzlubbb" data-linestop="hammersmith-city">
          <g>
            <path
              fill="#1C3F94"
              d="M833.1,394.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C829.7,396.2,831.2,394.7,833.1,394.7z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M833.1,401.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C836.2,399.8,834.8,401.2,833.1,401.2L833.1,401.2z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M832,399.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L832,399.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M833.2,395.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C833.4,395.3,833.2,395.6,833.2,395.8z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M833.4,396.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C833.5,396.5,833.4,396.7,833.4,396.7z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-central_940gzzlubkh_00000022551031485129460290000002649824395182712988_" data-linestop="central">
          <g>
            <path
              fill="#1C3F94"
              d="M844.6,177c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C841.2,178.5,842.7,177,844.6,177z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M844.6,183.4c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C847.7,182.1,846.3,183.4,844.6,183.4L844.6,183.4z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M843.5,181.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L843.5,181.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M844.7,178.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C844.9,177.6,844.7,177.8,844.7,178.1z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M844.9,179l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C845,178.8,844.9,179,844.9,179z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="raillo-overground_910gwhmdstd" data-linestop="london-overground">
          <g>
            <path
              fill="#1C3F94"
              d="M438.2,304.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C434.8,305.6,436.3,304.1,438.2,304.1z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M438.2,310.6c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C441.2,309.2,439.9,310.6,438.2,310.6L438.2,310.6z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M437,308.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L437,308.5z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M438.2,305.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C438.5,304.7,438.2,305,438.2,305.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M438.5,306.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H437c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C438.6,305.9,438.5,306.1,438.5,306.1z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-circle_lul-district_lul-victoria_940gzzluvic" data-linestop="victoria">
          <rect
            x="467.1"
            y="507.9"
            transform="matrix(0.7072 -0.707 0.707 0.7072 -222.191 482.6406)"
            width="8.9"
            height="3.4"
          />
          <rect
            x="466.9"
            y="509"
            transform="matrix(0.707 -0.7072 0.7072 0.707 -222.2234 482.7921)"
            fill="#FFFFFF"
            width="9.3"
            height="1.1"
            className="white-fill"
          />
          <g id="lul-victoria_940gzzluvic" data-linestop="victoria">
            <g>
              <path
                fill="#1C3F94"
                d="M475.9,501.6c1.9,0,3.5,1.6,3.5,3.5c0,1.9-1.6,3.5-3.5,3.5c-1.9,0-3.5-1.6-3.5-3.5 C472.4,503.2,473.9,501.6,475.9,501.6z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M474.7,506.1c0.2,0.6,0.7,1,1.3,1c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.9,0.9,0.9,1.6c0,1-0.8,1.8-1.8,1.8c-0.7,0-1.2-0.4-1.6-0.9L474.7,506.1z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M475.9,502.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C476.1,502.3,475.9,502.5,475.9,502.8z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M476.2,503.7l-0.1,0.4H475c0,0-0.2,0-0.2,0.3c0,0.2,0.2,0.2,0.2,0.2h1.1l-0.1,0.3h-1.4 c0,0-0.1,0-0.2,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.3c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C476.3,503.5,476.2,503.7,476.2,503.7z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g id="lul-circle_lul-district_940gzzluvic" data-linestop="victoria">
            <g>
              <path
                fill="#1C3F94"
                d="M468.8,508.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C465.3,510.4,466.9,508.8,468.8,508.8z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M468.8,515.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C471.8,513.9,470.4,515.3,468.8,515.3L468.8,515.3z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M467.6,513.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L467.6,513.3z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M468.8,510c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C469,509.5,468.8,509.7,468.8,510z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M469.1,510.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C469.2,510.7,469.1,510.9,469.1,510.9z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="lul-circle_lul-district_lul-hammersmith-city_lul-piccadilly_940gzzluhsd" data-linestop="piccadilly">
          <g id="lul-circle_lul-hammersmith-city_lul_piccadilly_940gzzluhsc" data-linestop="hammersmith-city">
            <path
              fill="#FFFFFF"
              d="M332.1,508.8l0,2c-1,0.4-1.7,1.4-1.7,2.6c0,1.6,1.3,2.8,2.8,2.8c1.6,0,2.8-1.3,2.8-2.8 c0-1.2-0.7-2.2-1.7-2.6v-2c1-0.4,1.7-1.4,1.7-2.6c0-1.6-1.3-2.8-2.8-2.8c-1.6,0-2.8,1.3-2.8,2.8 C330.4,507.4,331.1,508.4,332.1,508.8z"
              className="white-fill"
            />
            <path d="M331,506.2c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3c0,1.1-0.7,1.9-1.7,2.2v2.8c1,0.3,1.7,1.1,1.7,2.2 c0,1.3-1,2.3-2.3,2.3c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.7-1.9,1.7-2.2l0-2.8C331.7,508.2,331,507.3,331,506.2z M331.5,509.2l0,1.3 c-1,0.6-1.7,1.7-1.7,3c0,1.9,1.5,3.4,3.4,3.4c1.9,0,3.4-1.5,3.4-3.4c0-1.3-0.7-2.4-1.7-3v-1.3c1-0.6,1.7-1.7,1.7-3 c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4C329.8,507.5,330.5,508.6,331.5,509.2z" />
          </g>
          <g id="lul-circle_lul-hammersmith-city_940gzzluhsc" data-linestop="hammersmith-city">
            <g>
              <path
                fill="#1C3F94"
                d="M333.3,489.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C329.8,491,331.4,489.5,333.3,489.5z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M332.1,493.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L332.1,493.9z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M333.3,490.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C333.5,490.1,333.3,490.3,333.3,490.6z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M333.6,491.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H332c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C333.7,491.3,333.6,491.5,333.6,491.5z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g id="lul-district_940gzzluhsd" data-linestop="piccadilly">
            <g>
              <path
                fill="#1C3F94"
                d="M333.3,510.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C329.8,511.6,331.4,510.1,333.3,510.1z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M332.1,514.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L332.1,514.5z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M333.3,511.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C333.5,510.7,333.3,510.9,333.3,511.2z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M333.6,512.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H332c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1L331,515c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C333.7,511.9,333.6,512.1,333.6,512.1z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g id="lul-piccadilly_940gzzluhsd" data-linestop="piccadilly">
            <g>
              <path
                fill="#1C3F94"
                d="M333.3,502.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C329.8,504.3,331.4,502.8,333.3,502.8z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M333.3,509.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C336.3,507.9,334.9,509.3,333.3,509.3L333.3,509.3z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M332.1,507.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L332.1,507.2z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M333.3,504c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5 C333.5,503.5,333.3,503.7,333.3,504z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M333.6,504.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H332c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C333.7,504.6,333.6,504.9,333.6,504.9z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="910gactonml" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M259.5,419.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C256.1,420.8,257.6,419.3,259.5,419.3z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M259.5,425.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C262.5,424.4,261.2,425.8,259.5,425.8L259.5,425.8z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M258.3,423.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L258.3,423.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M259.5,420.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C259.8,419.9,259.5,420.2,259.5,420.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M259.8,421.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C259.9,421.1,259.8,421.3,259.8,421.3z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910ghayesah" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M123.9,441.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C120.5,442.8,122,441.3,123.9,441.3z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M123.9,447.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C127,446.4,125.6,447.8,123.9,447.8L123.9,447.8z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M122.8,445.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L122.8,445.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M124,442.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C124.2,441.9,124,442.2,124,442.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M124.2,443.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C124.3,443.1,124.2,443.3,124.2,443.3z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910ghanwell_00000053523400361546857820000013179989208961538993_" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M173.3,441.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C169.9,442.8,171.4,441.3,173.3,441.3z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M173.3,447.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C176.4,446.4,175,447.8,173.3,447.8L173.3,447.8z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M172.2,445.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L172.2,445.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M173.4,442.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C173.6,441.9,173.4,442.2,173.4,442.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M173.7,443.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C173.7,443.1,173.7,443.3,173.7,443.3z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gwealing_00000181050095136626500540000011064407024135577270_" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M194.1,441.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C190.7,442.8,192.3,441.3,194.1,441.3z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M194.1,447.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C197.2,446.4,195.8,447.8,194.1,447.8L194.1,447.8z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M193,445.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L193,445.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M194.2,442.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C194.4,441.9,194.2,442.2,194.2,442.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M194.5,443.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C194.5,443.1,194.5,443.3,194.5,443.3z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="910gsthall_00000087408081536587865910000006026094626061997487_" data-linestop="elizabeth">
          <g>
            <path
              fill="#1C3F94"
              d="M156.8,441.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C153.4,442.8,155,441.3,156.8,441.3z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M156.8,447.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C159.9,446.4,158.5,447.8,156.8,447.8L156.8,447.8z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M155.7,445.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L155.7,445.7z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M156.9,442.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C157.1,441.9,156.9,442.2,156.9,442.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M157.2,443.3l-0.1,0.4H156c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C157.2,443.1,157.2,443.3,157.2,443.3z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g id="lul-central_940gzzlueby_00000105426395279441705050000009476980305159908786_" data-linestop="district">
          <g
            id="elizabeth_lul-central_940gzzlueby_910gealingb_00000073717820275732280610000012563425487182463666_"
            data-linestop="elizabeth"
          >
            <rect x="207.4" y="443.9" width="3.4" height="7.9" />
            <rect x="208.6" y="443.6" fill="#FFFFFF" width="1.1" height="8.3" className="white-fill" />
          </g>
          <g
            id="lul-central_lul-district_940gzzlueby_00000054242244034688295520000006572788171041463714_"
            data-linestop="district"
          >
            <rect x="207.4" y="452.3" width="3.4" height="7.2" />
            <rect x="208.6" y="452.2" fill="#FFFFFF" width="1.1" height="7.6" className="white-fill" />
          </g>
          <g id="lul-district_940gzzlueby_00000026847304393593898770000005472615176077566630_" data-linestop="district">
            <g>
              <path
                fill="#1C3F94"
                d="M209.1,456c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C205.7,457.5,207.2,456,209.1,456z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M207.9,460.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L207.9,460.4z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M209.1,457.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C209.3,456.6,209.1,456.9,209.1,457.1z"
                  className="white-fill"
                />
                <path
                  fill="#FFFFFF"
                  d="M209.4,458l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C209.5,457.8,209.4,458,209.4,458z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
          <g id="elizabeth_910gealingb_00000011724001545878592320000005777456800628840857_" data-linestop="elizabeth">
            <g>
              <path
                fill="#1C3F94"
                d="M209.1,441.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C205.7,442.8,207.2,441.3,209.1,441.3z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M209.1,447.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C212.1,446.4,210.8,447.8,209.1,447.8L209.1,447.8z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M207.9,445.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L207.9,445.7z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M209.1,442.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C209.3,441.9,209.1,442.2,209.1,442.4z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M209.4,443.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C209.5,443.1,209.4,443.3,209.4,443.3z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
          <g id="lul-central_940gzzlueby_00000070817777486065090000000007521347258680284058_" data-linestop="district">
            <g>
              <path
                fill="#1C3F94"
                d="M209.1,448.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C205.7,450.1,207.2,448.6,209.1,448.6z"
                className="blue-fill"
              />
              <path
                fill="#FFFFFF"
                d="M209.1,455.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C212.1,453.7,210.8,455.1,209.1,455.1L209.1,455.1z"
                className="white-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M207.9,453c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L207.9,453z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M209.1,449.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C209.3,449.3,209.1,449.5,209.1,449.8z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M209.4,450.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C209.5,450.4,209.4,450.7,209.4,450.7z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g
          id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlufcn_elizabeth_910gfrndxr_00000042697332689855333620000013730532412025396396_"
          data-linestop="elizabeth"
        >
          <g id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlufcn" data-linestop="metropolitan">
            <g
              id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlufcn_elizabeth_910gfrndxr_00000072982801762858711110000006529130501516822415_"
              data-linestop="elizabeth"
            >
              <rect
                x="590"
                y="395.3"
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -105.9138 538.2193)"
                width="13.5"
                height="3.4"
              />
              <g
                id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlufcn_elizabeth_910gfrndxr"
                data-linestop="elizabeth"
              >
                <rect
                  x="589.8"
                  y="396.4"
                  transform="matrix(0.7071 -0.7071 0.7071 0.7071 -105.9077 538.2217)"
                  fill="#FFFFFF"
                  width="13.9"
                  height="1.1"
                  className="white-fill"
                />
              </g>
            </g>
            <path
              fill="#1C3F94"
              d="M600,389.8c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6 C596.5,391.4,598.1,389.8,600,389.8z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M600,396.6c-1.8,0-3.2-1.4-3.2-3.2c0-1.8,1.4-3.2,3.2-3.2c1.8,0,3.2,1.4,3.2,3.2 C603.3,395.2,601.8,396.6,600,396.6L600,396.6z"
              className="white-fill"
            />
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M598.8,394.5c0.2,0.6,0.7,1,1.3,1c0.8,0,1.4-0.6,1.4-1.4c0-0.4-0.2-0.8-0.4-1l0.1-0.6 c0.5,0.3,0.9,0.9,0.9,1.6c0,1-0.8,1.9-1.9,1.9c-0.7,0-1.3-0.4-1.6-0.9L598.8,394.5z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M600.1,391c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C600.3,390.5,600.1,390.7,600.1,391z"
                  className="blue-fill"
                />
                <path
                  fill="#1C3F94"
                  d="M600.4,392l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.3c0,0.2,0.2,0.3,0.2,0.3h1.1l0,0.4h-1.5c0,0-0.1,0-0.2,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.3c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C600.5,391.7,600.4,392,600.4,392z"
                  className="blue-fill"
                />
              </g>
            </g>
          </g>
          <g id="elizabeth_910gfrndxr" data-linestop="elizabeth">
            <g>
              <path
                fill="#1C3F94"
                d="M593.3,396.8c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6 C589.7,398.4,591.3,396.8,593.3,396.8z"
                className="blue-fill"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M592.1,401.4c0.2,0.6,0.7,1,1.3,1c0.8,0,1.4-0.6,1.4-1.4c0-0.4-0.2-0.8-0.4-1l0.1-0.6 c0.5,0.3,0.9,0.9,0.9,1.6c0,1-0.8,1.9-1.9,1.9c-0.7,0-1.3-0.4-1.6-0.9L592.1,401.4z"
                  className="white-fill"
                />
                <circle fill="#FFFFFF" cx="593.9" cy="398" r="0.5" className="white-fill" />
                <path
                  fill="#FFFFFF"
                  d="M593.6,399l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.3c0,0.2,0.2,0.3,0.2,0.3h1.1l-0.1,0.4H592 c0,0-0.1,0-0.2,0.1c0,0-0.1,0.1-0.1,0.1L591,402c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.3c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C593.7,398.7,593.6,399,593.6,399z"
                  className="white-fill"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="tram-tram_940gzzcrddr" data-linestop="tram-tram">
          <g>
            <path
              fill="#1C3F94"
              d="M383.1,668c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C379.7,669.6,381.3,668,383.1,668z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M382,672.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L382,672.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M383.2,669.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C383.4,668.7,383.2,668.9,383.2,669.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M383.5,670.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C383.5,669.9,383.5,670.1,383.5,670.1z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g
          id="lul-district_lul-piccadilly_940gzzluecm_00000167395694646168036510000016966636783057114810_"
          data-linestop="piccadilly"
        >
          <rect x="217.5" y="480.4" width="7.9" height="3.4" />
        </g>
        <g
          id="lul-piccadilly_940gzzluecm_00000090266257774017428620000015224950294717591472_"
          data-linestop="piccadilly"
        >
          <path
            fill="#FFFFFF"
            d="M227.8,482.1c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C226.5,479.2,227.8,480.5,227.8,482.1z"
            className="white-fill"
          />
          <path d="M228.3,482.1c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C226.8,478.7,228.3,480.2,228.3,482.1 z M224.9,484.4c1.3,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3S223.6,484.4,224.9,484.4z" />
        </g>
        <g id="lul-district_940gzzluecm_00000075137264118515928920000003335470980246467754_" data-linestop="piccadilly">
          <path
            fill="#FFFFFF"
            d="M220.8,482.1c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C219.5,479.2,220.8,480.5,220.8,482.1z"
            className="white-fill"
          />
          <path d="M221.4,482.1c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C219.8,478.7,221.4,480.2,221.4,482.1 z M218,484.4c1.3,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3S216.7,484.4,218,484.4z" />
        </g>
        <rect x="217.3" y="481.5" fill="#FFFFFF" width="8.3" height="1.1" className="white-fill" />
      </g>
    </svg>
  );
};
