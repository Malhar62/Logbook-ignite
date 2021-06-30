import { ImageStyle, ViewStyle, TextStyle } from 'react-native';
import { HEIGHT, WIDTH } from '../../theme/scaling';


export const styles = {
    TXT: {
        fontSize: HEIGHT(15), alignSelf: 'center', marginHorizontal: 20, marginTop: HEIGHT(10), color: 'grey'
    } as TextStyle,
    TOPTXT: { fontSize: HEIGHT(25), alignSelf: 'center', marginTop: HEIGHT(20) } as TextStyle,
    VIEW: {
        height: HEIGHT(415),
        backgroundColor: '#fff'
    } as ViewStyle,
    MSG: {
        left: 0, marginTop: HEIGHT(5)
    } as ViewStyle,
    TXTIP: {
        width: WIDTH(320),
        alignSelf: 'center', marginTop: HEIGHT(20)
    } as ViewStyle,
    BOTTOM: {
        marginTop: HEIGHT(30),
        width: WIDTH(320),
        height: HEIGHT(40),
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#524ae8'
    } as ViewStyle,
    TXT2: {
        color: '#fff', alignSelf: 'center', fontSize: 15
    } as TextStyle,
    TXT1: {
        alignSelf: "center",
        color: 'blue',
        marginTop: HEIGHT(20)
    } as TextStyle
}