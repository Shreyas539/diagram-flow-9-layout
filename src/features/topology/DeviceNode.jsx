import { Handle, Position } from "@xyflow/react";
import { Card } from "@components/ui/card";

export default function DeviceNode({ data }) {
  return (
    <Card className="min-w-[120px] p-2 shadow-md border-2 border-slate-200 bg-white">
      {/* Port connection points */}
      <Handle
        type="target"
        position={Position.Top}
        className="w-2 h-2 !bg-slate-400"
      />

      <div className="flex flex-col items-center gap-1">
        {/* Hardware Icon Placeholder */}
        <div className="w-full h-10 bg-slate-100 rounded flex items-center justify-center relative">
          <img
            src={data.icon}
            alt={data.label}
            className="h-8 object-contain"
          />
          {/* Red Notification Badge from your image */}
          {data.alerts > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              {data.alerts}
            </span>
          )}
        </div>

        <div className="text-[10px] font-bold uppercase text-slate-500 bg-slate-200 w-full text-center py-0.5">
          {data.label}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="w-2 h-2 !bg-slate-400"
      />
    </Card>
  );
}
