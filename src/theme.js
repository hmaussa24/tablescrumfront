import { createMuiTheme } from '@material-ui/core/styles';
import ColorPrincipal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
 palette:{
     primary:{
         main : ColorPrincipal[400],
     }
 }
});

export default theme;