import Hammer from 'hammerjs';
import { useCallback, useEffect, useRef } from 'react';
import { MAX_MAP_ZOOM, MIN_MAP_ZOOM } from '../const';

const initialViewBox = { x: 64.094, y: 122.25, width: 985.889, height: 657.072 };

export const useMapControls = ({ ref }: { ref: any }) => {
  const viewBoxRef = useRef(initialViewBox);

  useEffect(() => {
    if (ref.current == null) return;

    let isDragging = false;
    let dragStart = { x: 0, y: 0 };

    const hammertime = new Hammer(ref.current);

    const startDrag = (event: HammerInput) => {
      isDragging = true;
      dragStart = { x: event.center.x, y: event.center.y };
    };

    const drag = (event: HammerInput) => {
      if (!isDragging) return;

      event.preventDefault();

      const updatedViewBox = { ...viewBoxRef.current };
      updatedViewBox.x =
        viewBoxRef.current.x - ((event.center.x - dragStart.x) / ref.current.clientWidth) * viewBoxRef.current.width;
      updatedViewBox.y =
        viewBoxRef.current.y - ((event.center.y - dragStart.y) / ref.current.clientHeight) * viewBoxRef.current.height;

      viewBoxRef.current = updatedViewBox;

      ref.current.setAttribute(
        'viewBox',
        `${updatedViewBox.x} ${updatedViewBox.y} ${updatedViewBox.width} ${updatedViewBox.height}`,
      );

      dragStart = { x: event.center.x, y: event.center.y };
    };

    const endDrag = () => {
      isDragging = false;
    };

    hammertime.on('panstart', startDrag);
    hammertime.on('panmove', drag);
    hammertime.on('panend', endDrag);
    hammertime.on('pancancel', endDrag);

    return () => {
      if (ref.current == null) return;
      hammertime.destroy();
    };
  }, [ref]);

  const zoomIn = useCallback(() => {
    if (ref.current == null) return;

    const scale = 0.66; // 33% zoom in

    const newWidth = viewBoxRef.current.width * scale;
    const newHeight = viewBoxRef.current.height * scale;

    if (newWidth < MIN_MAP_ZOOM || newHeight < MIN_MAP_ZOOM) {
      return;
    }

    viewBoxRef.current = {
      x: viewBoxRef.current.x + (viewBoxRef.current.width - newWidth) / 2,
      y: viewBoxRef.current.y + (viewBoxRef.current.height - newHeight) / 2,
      width: newWidth,
      height: newHeight,
    };

    ref.current.setAttribute(
      'viewBox',
      `${viewBoxRef.current.x} ${viewBoxRef.current.y} ${viewBoxRef.current.width} ${viewBoxRef.current.height}`,
    );
  }, [ref]);

  const zoomOut = useCallback(() => {
    if (ref.current == null) return;

    const scale = 1.33; // 20% zoom out

    const newWidth = viewBoxRef.current.width * scale;
    const newHeight = viewBoxRef.current.height * scale;

    if (newWidth > MAX_MAP_ZOOM || newHeight > MAX_MAP_ZOOM) {
      return;
    }

    viewBoxRef.current = {
      x: viewBoxRef.current.x - (newWidth - viewBoxRef.current.width) / 2,
      y: viewBoxRef.current.y - (newHeight - viewBoxRef.current.height) / 2,
      width: newWidth,
      height: newHeight,
    };

    ref.current.setAttribute(
      'viewBox',
      `${viewBoxRef.current.x} ${viewBoxRef.current.y} ${viewBoxRef.current.width} ${viewBoxRef.current.height}`,
    );
  }, [ref]);

  const resetZoom = useCallback(() => {
    if (ref.current == null) return;

    viewBoxRef.current = { ...initialViewBox };

    ref.current.setAttribute(
      'viewBox',
      `${viewBoxRef.current.x} ${viewBoxRef.current.y} ${viewBoxRef.current.width} ${viewBoxRef.current.height}`,
    );
  }, [ref]);

  return {
    zoomIn,
    zoomOut,
    resetZoom,
  };
};
