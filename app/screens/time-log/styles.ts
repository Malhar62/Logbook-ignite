import { TextStyle, ViewStyle } from "react-native";
import { HEIGHT, WIDTH } from "../../utils/scale";


export const styles ={
    main: {
        backgroundColor: '#fff', width: WIDTH(360), height: HEIGHT(649), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    }as ViewStyle,
    view: {
        flexDirection: 'row', marginHorizontal: 15, marginTop: 20
    }as ViewStyle,
    txt: {
        fontSize: 15, color: 'grey'
    }as TextStyle,
    icon: {
        right: 0, justifyContent: 'center', position: 'absolute', marginTop: 18
    }as ViewStyle,
    addbutton:
        { width: WIDTH(321), height: 40, justifyContent: 'center', marginBottom: 20, borderColor: 'grey', borderWidth: 1, borderRadius: 10, alignSelf: 'center', top: 20 }as ViewStyle,
    addbutton1:
        { flexDirection: 'row', alignSelf: 'center' }as ViewStyle,
    addbuttontxt:
        { color: 'grey', fontSize: 15, marginLeft: 4, marginTop: 1 }as TextStyle

}
