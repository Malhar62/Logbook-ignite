import {
    ViewStyle, TextStyle
} from 'react-native';
import { HEIGHT, WIDTH } from '../../theme/scaling';


export const styles = {
    main: {
        backgroundColor: '#fff', width: WIDTH(360), height: HEIGHT(649), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    } as ViewStyle,
    view: {
        flexDirection: 'row', height: 70, marginHorizontal: 15, marginTop: 15
    } as ViewStyle,
    txt1: {
        fontSize: 18
    } as TextStyle,
    txt2: {
        fontSize: 15, color: 'grey'
    } as ViewStyle,
    radio: {
        position: 'absolute', right: 0, marginTop: 5
    } as ViewStyle,
    extra: {
        width: WIDTH(200), height: 40
    } as ViewStyle,
    view1:
        { flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between' } as ViewStyle,
    button:
        { width: WIDTH(150), height: 45, backgroundColor: '#524ae8', borderRadius: 10, justifyContent: 'center' } as ViewStyle,
    buttontxt:
        { color: '#fff', alignSelf: 'center', fontSize: 15 } as TextStyle
}