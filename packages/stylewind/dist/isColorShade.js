const e={primary:{default:"#1D4ED8",light:"#93C5FD",dark:"#1E3A8A"},secondary:{default:"#e1effc",light:"#d3e5f8",dark:"#bcccdc"},error:{default:"#EF4444",light:"#FCA5A5",dark:"#B91C1C"},warning:{default:"#F59E0B",light:"#FCD34D",dark:"#B45309"},success:{default:"#10B981",light:"#6EE7B7",dark:"#047857"},info:{default:"#3B82F6",light:"#BFDBFE",dark:"#1E40AF"},background:{default:"#f3f3f3",light:"#f3f3f3",dark:"#333333"},text:{default:"#464646",light:"#464646",dark:"#d1d5db"},grey:{default:"#464646",0:"#FFFFFF",10:"#f5f5f5",20:"#eeeeee",30:"#e0e0e0",40:"#c6c6c6",50:"#999999",60:"#8d8d8d",70:"#666666",80:"#4d4d4d",90:"#333333",100:"#1a1a1a"},common:{white:"#FFFFFF",black:"#000000"}},t={none:0,default:4,xSmall:2,small:4,medium:8,large:12,xLarge:16,xxLarg:20},o={mode:"default",colors:{primary:{default:"#1D4ED8",light:"#93C5FD",dark:"#1E3A8A"},secondary:{default:"#e1effc",light:"#d3e5f8",dark:"#bcccdc"},error:{default:"#EF4444",light:"#FCA5A5",dark:"#B91C1C"},warning:{default:"#F59E0B",light:"#FCD34D",dark:"#B45309"},success:{default:"#10B981",light:"#6EE7B7",dark:"#047857"},info:{default:"#3B82F6",light:"#BFDBFE",dark:"#1E40AF"},background:{default:"#f3f3f3",light:"#f3f3f3",dark:"#333333"},text:{default:"#464646",light:"#464646",dark:"#d1d5db"},grey:{0:"#FFFFFF",10:"#f5f5f5",20:"#eeeeee",30:"#e0e0e0",40:"#c6c6c6",50:"#999999",60:"#8d8d8d",70:"#666666",80:"#4d4d4d",90:"#333333",100:"#1a1a1a",default:"#464646"},common:{white:"#FFFFFF",black:"#000000"}},spacing:{none:0,default:8,xSmall:2,small:4,medium:8,large:12,xLarge:16,xxLarg:20},typography:{fontFamily:["Roboto"]}},a=(e,a)=>"number"==typeof e?(a??o).spacing.default*e:t[e],r={"flex-1":{flex:1},flexRow:{flexDirection:"row"},flexCol:{flexDirection:"column"},flexWrap:{flexWrap:"wrap"},flexNoWrap:{flexWrap:"nowrap"},justifyCenter:{justifyContent:"center"},justifyStart:{justifyContent:"flex-start"},justifyEnd:{justifyContent:"flex-end"},justifyBetween:{justifyContent:"space-between"},justifyAround:{justifyContent:"space-around"},itemsCenter:{alignItems:"center"},itemsStart:{alignItems:"flex-start"},itemsEnd:{alignItems:"flex-end"},selfCenter:{alignSelf:"center"},selfStart:{alignSelf:"flex-start"},selfEnd:{alignSelf:"flex-end"},hidden:{display:"none"},flex:{display:"flex"},absolute:{position:"absolute"},relative:{position:"relative"},"top-0":{top:0},"right-0":{right:0},"bottom-0":{bottom:0},"left-0":{left:0},"zIndex-1":{zIndex:1},"zIndex-10":{zIndex:10},textCenter:{textAlign:"center"},textLeft:{textAlign:"left"},textRight:{textAlign:"right"},textJustify:{textAlign:"justify"},textUnderline:{textDecorationLine:"underline"},textLineThrough:{textDecorationLine:"line-through"},textNoDecoration:{textDecorationLine:"none"},textUppercase:{textTransform:"uppercase"},textLowercase:{textTransform:"lowercase"},textCapitalize:{textTransform:"capitalize"},fontThin:{fontWeight:"100"},fontLight:{fontWeight:"300"},fontNormal:{fontWeight:"400"},fontMedium:{fontWeight:"500"},fontBold:{fontWeight:"700"},fontExtraBold:{fontWeight:"800"},fontBlack:{fontWeight:"900"},border:{borderWidth:1,borderColor:e.grey.default},borderTop:{borderTopWidth:1},borderBottom:{borderBottomWidth:1},borderLeft:{borderLeftWidth:1},borderRight:{borderRightWidth:1},roundedSm:{borderRadius:a("small")},rounded:{borderRadius:a("default")},roundedLg:{borderRadius:a("large")},roundedFull:{borderRadius:9999},bgWhite:{backgroundColor:e.common.white},bgBlack:{backgroundColor:e.common.black},bgTransparent:{backgroundColor:"transparent"},text:{color:e.text.default},textDark:{color:e.text.dark},textLight:{color:e.text.light},shadow:{shadowColor:e.common.black,shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4},shadowLg:{shadowColor:e.common.black,shadowOffset:{width:0,height:4},shadowOpacity:.3,shadowRadius:4.65,elevation:8},wFull:{width:"100%"},hFull:{height:"100%"},wHalf:{width:"50%"},hHalf:{height:"50%"},overflowHidden:{overflow:"hidden"},overflowVisible:{overflow:"visible"},overflowScroll:{overflow:"scroll"},pointerEventNone:{pointerEvents:"none"},pointerEventAuto:{pointerEvents:"auto"},"opacity-0":{opacity:0},"opacity-25":{opacity:.25},"opacity-50":{opacity:.5},"opacity-75":{opacity:.75},"opacity-100":{opacity:1}};function d(e){return"object"==typeof e&&null!==e&&void 0!==e.default&&"string"==typeof e.default&&void 0!==e.light&&"string"==typeof e.light&&void 0!==e.dark&&"string"==typeof e.dark}export{a,e as c,r as d,d as i,t as s,o as t};
