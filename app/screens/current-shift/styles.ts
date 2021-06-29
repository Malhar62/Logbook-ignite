import { TextStyle, ViewStyle } from "react-native";
import { HEIGHT, WIDTH } from "../../utils/scaling";


export const styles ={
    main: {
        backgroundColor: '#fff',width: WIDTH(360), height: HEIGHT(649), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    }as ViewStyle,
    icon: {
        marginTop: 10
    }as ViewStyle,
    txt: {
        color: 'grey'
    }as TextStyle,
    button: {
        width: WIDTH(321), marginBottom: 10, height: 40, justifyContent: 'center', alignSelf: 'center', borderRadius: 10, backgroundColor: '#e6354c'
    }as ViewStyle,
    txt2: {
        color: '#fff', alignSelf: 'center', fontSize: 15
    }as TextStyle,
    addbutton:
        { width:WIDTH(321), height: 40, justifyContent: 'center', marginBottom: 20, borderColor: 'grey', borderWidth: 1, borderRadius: 10, alignSelf: 'center' }as ViewStyle,
    addbutton1:
        { flexDirection: 'row', alignSelf: 'center' }as ViewStyle,
    addbuttontxt:
        { color: 'grey', fontSize: 15, marginLeft: 4, marginTop: 1 }as TextStyle
}