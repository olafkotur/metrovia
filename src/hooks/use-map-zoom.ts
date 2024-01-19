import { useEffect } from 'react';
import {
  MAX_DRAG_DISTANCE_X,
  MAX_DRAG_DISTANCE_Y,
  MAX_MAP_ZOOM,
  MIN_DRAG_DISTANCE_X,
  MIN_DRAG_DISTANCE_Y,
  MIN_MAP_ZOOM,
} from '../const';
import { ViewBox } from '../typings';

export const useMapZoom = ({ ref, initialViewbox }: { ref: any; initialViewbox: ViewBox }) => {
  useEffect(() => {
    if (ref.current == null) return;

    let viewBox = { ...initialViewbox };
    let isDragging = false;
    let dragStart = { x: 0, y: 0 };

    const zoom = (event: WheelEvent) => {
      event.preventDefault();

      const scale = event.deltaY < 0 ? 0.9 : 1.1;

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

    const startDrag = (event: MouseEvent) => {
      isDragging = true;
      dragStart = { x: event.clientX, y: event.clientY };
    };

    const drag = (event: MouseEvent) => {
      if (!isDragging) return;

      event.preventDefault();

      const newViewBoxX = viewBox.x - ((event.clientX - dragStart.x) / ref.current.clientWidth) * viewBox.width;
      const newViewBoxY = viewBox.y - ((event.clientY - dragStart.y) / ref.current.clientHeight) * viewBox.height;
      console.log({ newViewBoxX, newViewBoxY });

      // viewBox.x = newViewBoxX;
      // viewBox.y = newViewBoxY;

      // Check if the new viewBox.x and viewBox.y are within the allowed drag distance
      viewBox.x = Math.min(Math.max(newViewBoxX, MIN_DRAG_DISTANCE_X), MAX_DRAG_DISTANCE_X);
      viewBox.y = Math.min(Math.max(newViewBoxY, MIN_DRAG_DISTANCE_Y), MAX_DRAG_DISTANCE_Y);

      ref.current.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);

      dragStart = { x: event.clientX, y: event.clientY };
    };

    const endDrag = () => {
      isDragging = false;
    };

    ref.current.addEventListener('wheel', zoom);
    ref.current.addEventListener('mousedown', startDrag);
    ref.current.addEventListener('mousemove', drag);
    ref.current.addEventListener('mouseup', endDrag);
    ref.current.addEventListener('mouseleave', endDrag);

    return () => {
      if (ref.current == null) return;
      ref.current.removeEventListener('wheel', zoom);
      ref.current.removeEventListener('mousedown', startDrag);
      ref.current.removeEventListener('mousemove', drag);
      ref.current.removeEventListener('mouseup', endDrag);
      ref.current.removeEventListener('mouseleave', endDrag);
    };
  }, [ref, initialViewbox]);
};
