
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent, 
  ChartLegend, 
  ChartLegendContent 
} from "@/components/ui/chart.tsx";
import { BarChart } from "@/components/ui/charts/BarChart";
import { PieChart } from "@/components/ui/charts/PieChart";

export { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  BarChart,
  PieChart
};

// Create a convenience component for chart usage
export const Chart = {
  Container: ChartContainer,
  Tooltip: ChartTooltip,
  TooltipContent: ChartTooltipContent,
  Legend: ChartLegend,
  LegendContent: ChartLegendContent,
  Bar: BarChart,
  Pie: PieChart
};
