import { ImageStyle, ViewStyle, TextStyle, View } from 'react-native';
import { HEIGHT, WIDTH } from '../../utils/scaling';


export const styles = {
    ROOT: {
        width: '100%',
        height: HEIGHT(450),
        backgroundColor:'#fff'
    } as ViewStyle,
    TEXTINPUT: {
        width: WIDTH(320),
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop:HEIGHT(30),
        alignSelf: 'center'
    } as ViewStyle,
    ICON: {
        position: 'absolute',
        right: 0,
        bottom: 15,
    } as ViewStyle,
    TEXTINPUTtxt: {
        fontSize: 15
    } as TextStyle,
    TXT: {
        fontSize: HEIGHT(25),
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop:HEIGHT(30)
    } as TextStyle,
    MAIN: {
        marginTop:HEIGHT(30),
        width: WIDTH(320),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    } as ViewStyle,
    BOTTOM:{
        marginTop:HEIGHT(30),
        width:WIDTH(320),
        height:HEIGHT(40),
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:10,
        backgroundColor: '#524ae8'
    }as ViewStyle
}