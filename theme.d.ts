// import original module declarations
import "styled-components";
import { MainTheme } from "styles/theme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends MainTheme {}
}
