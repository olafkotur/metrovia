import Hammer from 'hammerjs';
import { useEffect } from 'react';
import { MAX_MAP_ZOOM, MIN_MAP_ZOOM } from '../const';
import { ViewBox } from '../typings';

export const useMapZoom = ({ ref, initialViewbox }: { ref: any; initialViewbox: ViewBox }) => {
  useEffect(() => {
    if (ref.current == null) return;

    let viewBox = { ...initialViewbox };
    let isDragging = false;
    let dragStart = { x: 0, y: 0 };

    const hammertime = new Hammer(ref.current);
    hammertime.get('pinch').set({ enable: true });

    hammertime.on('pinchstart pinchmove', (event) => {
      event.preventDefault();

      const scale = event.scale;

      const newWidth = viewBox.width * scale;
      const newHeight = viewBox.height * scale;
      const isBelowMinZoom = newWidth < MIN_MAP_ZOOM || newHeight < MIN_MAP_ZOOM;
      const isAboveMaxZoom = newWidth > MAX_MAP_ZOOM || newHeight > MAX_MAP_ZOOM;
      if (isBelowMinZoom || isAboveMaxZoom) {
        return;
      }

      const rect = ref.current.getBoundingClientRect();
      const x = event.center.x - rect.left;
      const y = event.center.y - rect.top;

      viewBox.x += (x / ref.current.clientWidth) * (viewBox.width * (1 - scale));
      viewBox.y += (y / ref.current.clientHeight) * (viewBox.height * (1 - scale));
      viewBox.width = newWidth;
      viewBox.height = newHeight;

      ref.current.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
    });

    const startDrag = (event: HammerInput) => {
      isDragging = true;
      dragStart = { x: event.center.x, y: event.center.y };
    };

    const drag = (event: HammerInput) => {
      if (!isDragging) return;

      event.preventDefault();

      viewBox.x = viewBox.x - ((event.center.x - dragStart.x) / ref.current.clientWidth) * viewBox.width;
      viewBox.y = viewBox.y - ((event.center.y - dragStart.y) / ref.current.clientHeight) * viewBox.height;

      ref.current.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);

      dragStart = { x: event.center.x, y: event.center.y };
    };

    const endDrag = () => {
      isDragging = false;
    };

    hammertime.on('panstart', startDrag);
    hammertime.on('panmove', drag);
    hammertime.on('panend', endDrag);
    hammertime.on('pancancel', endDrag);

    const zoom = (event: WheelEvent) => {
      event.preventDefault();

      const scale = 1 - event.deltaY * 0.01;

      const newWidth = viewBox.width * scale;
      const newHeight = viewBox.height * scale;
      const isBelowMinZoom = newWidth < MIN_MAP_ZOOM || newHeight < MIN_MAP_ZOOM;
      const isAboveMaxZoom = newWidth > MAX_MAP_ZOOM || newHeight > MAX_MAP_ZOOM;
      if (isBelowMinZoom || isAboveMaxZoom) {
        return;
      }

      const rect = ref.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      viewBox.x += (x / ref.current.clientWidth) * (viewBox.width * (1 - scale));
      viewBox.y += (y / ref.current.clientHeight) * (viewBox.height * (1 - scale));
      viewBox.width = newWidth;
      viewBox.height = newHeight;

      ref.current.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
    };

    ref.current.addEventListener('wheel', zoom);

    return () => {
      if (ref.current == null) return;
      hammertime.destroy();
      ref.current.removeEventListener('wheel', zoom);
    };
  }, [ref, initialViewbox]);
};
