import { TextStyle, ViewStyle } from "react-native";
import { HEIGHT, WIDTH } from "../../theme/scaling";


export const styles = {
    main: {
        backgroundColor: '#fff', width: WIDTH(360), height: HEIGHT(649), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    } as ViewStyle,
    view1: {
        marginHorizontal: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 20
    } as ViewStyle,
    txt: {
        marginVertical: 5, marginBottom: 10, fontSize: 15, color: 'grey'
    } as TextStyle,
    icon: {
        marginTop: 4, right: 0
    } as ViewStyle,
    iconview: {
        position: 'absolute', right: 0
    } as ViewStyle,
    button: {
        width: WIDTH(321), height: 40, bottom: 20, justifyContent: 'center', alignSelf: 'center', borderRadius: 10, backgroundColor: '#67cf40'
    } as ViewStyle,
    txt2: {
        color: '#fff', alignSelf: 'center', fontSize: 15
    } as TextStyle

}