import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { HEIGHT, WIDTH } from "../../theme/scaling";


export const styles={
    main: {
        backgroundColor: '#fff', width: WIDTH(360), height: HEIGHT(649), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    }as ViewStyle,
    view1:
        { flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between' }as ViewStyle,
    button:
        { width: WIDTH(150), height: 45, backgroundColor: '#524ae8', borderRadius: 10, justifyContent: 'center' }as ViewStyle,
    buttontxt:
        { color: '#fff', alignSelf: 'center', fontSize: 15 }as TextStyle,
    img1:
        { marginLeft: 8, marginTop: 10, flexDirection: 'row', width: 80, height: 80 }as ViewStyle,
    imgview:
        { width: 75, height: 75, borderWidth: 1, borderRadius: 10 }as ImageStyle,

}