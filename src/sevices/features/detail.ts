import { useFeatureSelectStore } from "@/store/featureStore"

export const resetSelectFeature = () => {
    const {resetFeature} = useFeatureSelectStore.getState();
    resetFeature();
}