import React from "react";
import {
  Config,
  SchedulerData,
  SchedulerItemClickData,
  SchedulerItemData,
  SchedulerProjectData
} from "@/types/global";
import { ParsedDatesRange } from "@/utils/getDatesRange";

export type SchedulerProps = {
  data: SchedulerData;
  isLoading?: boolean;
  config?: Config;
  startDate?: string;
  onRangeChange?: (range: ParsedDatesRange) => void;
  onTileClick?: (data: SchedulerProjectData) => void;
  onFilterData?: () => void;
  onClearFilterData?: () => void;
  onItemClick?: (data: SchedulerItemClickData) => void;
  tooltipComponent?: (data?: SchedulerItemData | null) => React.ReactNode;
};

export type StyledOutsideWrapperProps = {
  showScroll: boolean;
};
