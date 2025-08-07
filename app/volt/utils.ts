import type { PassThroughMergePropsType } from "primevue/passthrough";
import { twMerge } from "tailwind-merge";
import { mergeProps } from "vue";

export const ptViewMerge: PassThroughMergePropsType = (
  globalPTProps = {},
  selfPTProps = {},
  datasets,
) => {
  const { class: globalClass, ...globalRest } = globalPTProps;
  const { class: selfClass, ...selfRest } = selfPTProps;

  return mergeProps(
    { class: twMerge(globalClass, selfClass) },
    globalRest,
    selfRest,
    datasets,
  );
};
