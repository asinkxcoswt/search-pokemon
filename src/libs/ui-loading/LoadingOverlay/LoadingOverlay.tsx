import { Spinner } from "flowbite-react";

export interface LoadingOverlayProps {}

export function LoadingOverlay(props: LoadingOverlayProps) {
  return (
    <div className="flex items-center justify-center w-full h-full bg-opacity-50 bg-black absolute z-50 rounded-lg">
      <Spinner size="xl" color="info" />;
    </div>
  );
}
