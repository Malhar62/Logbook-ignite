import { TextStyle, ViewStyle } from "react-native";
import { HEIGHT, WIDTH } from "../../utils/scaling";


export const styles = {
    main: {
        backgroundColor: '#fff', width: WIDTH(360), height: HEIGHT(649), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    } as ViewStyle,
    txt: {
        color: 'grey', fontSize: 15
    } as TextStyle,
    txtip:
        { borderBottomWidth: 1, borderBottomColor: 'grey', height: 40, fontSize: 15 } as TextStyle,
    view:
        { marginHorizontal: 20, marginTop: 20 } as ViewStyle,
    icon: {
        position: 'absolute', right: 0
    } as ViewStyle,
    button: {
        position: 'absolute', bottom: 20, width: WIDTH(320), height: 40, justifyContent: 'center', alignSelf: 'center', borderRadius: 10, backgroundColor: '#524ae8'
    } as ViewStyle,
    txt2: {
        color: '#fff', alignSelf: 'center', fontSize: 18
    } as TextStyle
}