import { Skeleton } from "@/components/loading/Skeleton";

const SKELETON_ITEMS = Array.from({ length: 10 }, (_, i) => ({
  id: `sidebar-skeleton-${i}`,
  widthClass: i % 3 === 0 ? "w-3/5" : i % 3 === 1 ? "w-4/5" : "w-2/3", // 너비 패턴
}));

export const SidebarSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 w-full px-2 mt-1">
      {SKELETON_ITEMS.map((item) => (
        <div
          key={item.id}
          className="w-full h-7.25 px-3.5 flex items-center shrink-0"
        >
          <Skeleton variant="text" className={`h-4 ${item.widthClass}`} />
        </div>
      ))}
    </div>
  );
};
