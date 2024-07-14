export interface Widget {
  widgetName: string;
  widgetTitle: string;
  directiveName: string;
  x: number;
  y: number;
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

export interface Page {
  id: number;
  widgets: Widget[];
}

export interface Menu {
  id: number;
  context: string;
  pageName: string;
  pageTitle: string;
}
