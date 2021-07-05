import { useBreakpointValue } from "@chakra-ui/react";

interface UseIsSizeData {
    isMedium?: boolean;
    isLarge?: boolean;
    isExtraLarge?: boolean;
}

export function useIsSize(): UseIsSizeData{
    const isMedium = useBreakpointValue({ base: false, md: true })
    const isLarge = useBreakpointValue({ base: false, lg: true })
    const isExtraLarge = useBreakpointValue({ base: false, xl: true })
    return {isMedium, isLarge, isExtraLarge }
}