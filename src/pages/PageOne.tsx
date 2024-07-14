// import { Widget } from "../types/types";

import { Widget } from "../types/types";

// interface PageOneProps {
//   id: string;
//   widget: Widget[];
// }

// export default function PageOne({ id, widget }: PageOneProps) {
//   return (
//     <div>
//       {id} {widget.map((widget) => widget.widgetName)}
//     </div>
//   );
// }
interface PageOneProps {
  id: string;
  widgets: Widget[];
}

export default function PageOne({ id, widgets }: PageOneProps) {
  return (
    <>
      <div>ID: {id}</div>
      <div>
        {/* Render each widget */}
        {widgets &&
          widgets.map((widget, index) => (
            <div key={index}>
              <h3>{widget.widgetTitle}</h3>
              <p>{widget.widgetName}</p>
              {/* Render other widget details as needed */}
            </div>
          ))}
      </div>
    </>
  );
}
