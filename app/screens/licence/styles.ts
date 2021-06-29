import { TextStyle, ViewStyle } from "react-native";
import { HEIGHT, WIDTH } from "../../utils/scaling";


export const styles={
    main: {
        backgroundColor: '#fff',width: WIDTH(360), height: HEIGHT(649), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    }as ViewStyle,
    view: {
        flexDirection: 'row', marginHorizontal: 15, marginTop: 20
    }as ViewStyle,
    txt: {
        fontSize: 15, color: 'grey'
    }as TextStyle,
    icon: {
        right: 0, justifyContent: 'center', position: 'absolute', marginTop: 18
    }as ViewStyle
}