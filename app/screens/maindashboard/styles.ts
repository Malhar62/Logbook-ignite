import { TextStyle, ViewStyle } from "react-native";
import { HEIGHT, WIDTH } from "../../utils/scale";


export const styles = {
    first: {
        width: WIDTH(350), alignSelf: 'center', backgroundColor: '#fff', borderWidth: 1, borderColor: 'rgba(158, 150, 150, .5)'
    } as ViewStyle,
    main: {
        width: '100%', borderRadius: 10, backgroundColor: '#ebe6e6',
    } as ViewStyle,
    main1:
        { flexDirection: 'row', height: 50, width: WIDTH(350), alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: 'grey', borderTopEndRadius: 10, borderTopLeftRadius: 10 } as ViewStyle,
    main3:
        { borderBottomColor: 'grey', width: (WIDTH(350) - 30), alignSelf: 'center' } as ViewStyle,
    main4: {
        height: HEIGHT(655), width: '100%', borderRadius: 0, backgroundColor: '#f1f1f1',
    } as ViewStyle,
    txt1: {
        color: 'grey', marginLeft: 7, fontSize: 18
    } as TextStyle,
    view:
        { flexDirection: 'row', marginBottom: 7 } as ViewStyle,
    icon: {
        position: 'absolute', right: 7, marginHorizontal: 5
    } as ViewStyle,
    txt2:
        { fontSize: 22, marginLeft: 10, fontWeight: 'bold' } as TextStyle,
}