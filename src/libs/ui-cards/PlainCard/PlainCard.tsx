export interface PlainCardProps {
  shadow?: boolean;
  children: React.ReactNode;
}

export function PlainCard({ children, shadow = false }: PlainCardProps) {
  return (
    <div
      className={
        "w-full bg-white rounded-lg p-4 " +
        (shadow ? "border-2 border-gray-200" : "")
      }
    >
      {children}
    </div>
  );
}
