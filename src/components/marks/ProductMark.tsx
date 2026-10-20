import type { VyttleApp } from "@/lib/apps";
import SixteenToOneMark from "./SixteenToOneMark";
import PicaMark from "./PicaMark";
import StockpotMark from "./StockpotMark";
import BrambleMark from "./BrambleMark";
import WiffletreeMark from "./WiffletreeMark";
import RevisoMark from "./RevisoMark";

const MARKS: Record<string, React.ComponentType<{ size?: number }>> = {
  "sixteen-to-one": SixteenToOneMark,
  pica: PicaMark,
  stockpot: StockpotMark,
  bramble: BrambleMark,
  wiffletree: WiffletreeMark,
  reviso: RevisoMark,
};

/** A product's logomark, looked up by slug. */
export default function ProductMark({ app, size }: { app: VyttleApp; size?: number }) {
  const Mark = MARKS[app.slug];
  return <Mark size={size} />;
}
