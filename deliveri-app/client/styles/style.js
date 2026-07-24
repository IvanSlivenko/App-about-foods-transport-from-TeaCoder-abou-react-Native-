import { StyleSheet } from 'react-native';

export const gStyle = StyleSheet.create({
    test: {
        flex: 1,
        padding: 20,
        paddingTop: 30,
        backgroundColor: 'gray'
    },
    test_2: {
        fontSize: 25,
        color: '#fff',
        fontFamily: 'mt-light',
        textAlign: 'center',

    },
    style_3 :{

     marginHorizontal:2,
     alignItems: "center",
     justifyContent: "center",
     flex:1,
    //  backgroundColor: 'gray',


    },
    style_4 :{
       width: "75%",
       alignItems: "center",
        justifyContent: "center",  
        
    },
    style_5 :{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: 'gray',

        color: "black",
        fontSize: 40,
        
        paddingHorizontal: 8,
        paddingVertical: 8,   
            

    },
    style_6 :{
        alignSelf: "center",     // self-center
        marginTop: 14,           // mt-3.5 (3.5 * 4 = 14)
        backgroundColor: "#47AA52", // bg-[#47AA52]
        width: "100%",           // w-full
        paddingVertical: 12,     // py-3 (3 * 4 = 12)
        borderRadius: 8,         // font-light
        
        fontWeight: "300",       
        color: "#fff",
        textAlign: "center",
        fontSize: 16,// rounded-lg
    },
    style_7 :{
        alignSelf: "center",     // self-center
        marginTop: 14,           // mt-3.5 (3.5 * 4 = 14)
        backgroundColor: "#47AA52", // bg-[#47AA52]
        width: "100%",           // w-full
        paddingVertical: 12,     // py-3 (3 * 4 = 12)
        borderRadius: 8,         // font-light
        
        fontWeight: "300",       
        color: "#fff",
        textAlign: "center",
        fontSize: 16,// rounded-lg
    },
    style_8 : {
        color: "#FFFFFF",      // text-white
        textAlign: "center",   // text-center
        fontWeight: "500",     // font-medium
        fontSize: 18,          // text-lg  
    }

})