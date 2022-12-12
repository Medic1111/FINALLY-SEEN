import { NavigationDispatchs } from "./NavigationDispatchs";

export interface NavigationStates extends Partial<NavigationDispatchs> {
    setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}