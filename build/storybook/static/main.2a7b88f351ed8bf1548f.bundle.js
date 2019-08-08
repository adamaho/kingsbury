(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),_=__webpack_require__(548),theme_1=__webpack_require__(9),REQUIRE_DARK_TEXT=new Set(["success","warning","disabled"]),Button=theme_1.default(({type:type,className:className,children:children,onClick:onClick,disabled:disabled})=>React.createElement("button",{type:type,className:`kingsbury-button ${className}`,onClick:onClick,disabled:disabled},children))`
  background: ${props=>props.disabled?props.theme.buttons.backgroundDisabled:props.theme.colors[props.buttonType]};

  color: ${props=>REQUIRE_DARK_TEXT.has(props.buttonType)||props.disabled?props.theme.colors.black:props.theme.colors.white};

  height: ${props=>`${props.theme.buttons.height}px`};

  font-weight: 400;
  font-size: 16px;
  font-family: inherit;
  text-decoration: none;

  border: ${props=>props.theme.buttons.border};
  border-radius: ${props=>props.theme.buttons.borderRadius};

  padding: ${props=>props.theme.buttons.padding};
  box-shadow: ${props=>props.theme.buttons.boxShadow};

  cursor: ${props=>props.disabled?"not-allowed":"pointer"};

  transition: border-radius ${props=>props.theme.animations.time.fast};

  &:hover {
    border-radius: ${props=>props.disabled?props.theme.buttons.borderRadius:`${props.theme.buttons.height/2}px`};
  }

  &:active {
    opacity: ${props=>props.disabled?1:.7};
  }

  &:focus {
    outline: none;
  }
`;Button.defaultProps={disabled:!1,type:void 0,onClick:()=>_.noop(),theme:theme_1.theme},exports.default=Button},236:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const theme_1=__webpack_require__(9);exports.H1=theme_1.default.span`
  font-size: 32px;
`,exports.H2=theme_1.default.span`
  font-size: 24px;
`,exports.H3=theme_1.default.span`
  font-size: 18px
`,exports.H4=theme_1.default.span`
  font-size: 16px;
`,exports.P=theme_1.default.span`
  font-size: 12px;
`},243:function(module,exports,__webpack_require__){__webpack_require__(244),__webpack_require__(347),module.exports=__webpack_require__(348)},348:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__webpack_require__(37),themeDecorator_1=__webpack_require__(525),yourTheme_1=__webpack_require__(528);react_1.addParameters({options:{theme:yourTheme_1.default}});const req=__webpack_require__(546);react_1.addDecorator(themeDecorator_1.default),react_1.configure(function loadStories(){req.keys().forEach(filename=>req(filename))},module)}).call(this,__webpack_require__(15)(module))},525:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),theme_1=__webpack_require__(9);exports.default=storyFn=>React.createElement(theme_1.ThemeProvider,{theme:theme_1.theme},storyFn())},528:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const theming_1=__webpack_require__(529);exports.default=theming_1.create({base:"light",brandTitle:"Kingsbury",fontBase:'"Nunito", sans-serif'})},546:function(module,exports,__webpack_require__){var map={"./components/button/Button.stories.tsx":547,"./components/card/Card.stories.tsx":549,"./components/drawer/Drawer.stories.tsx":551,"./components/input/Input.stories.tsx":559,"./components/notice/Notice.stories.tsx":561,"./components/tag/Tag.stories.tsx":563,"./components/typeography/Typeography.stories.tsx":565};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=546},547:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(37),_1=__webpack_require__(235);react_1.storiesOf("Button",module).add("Type",()=>React.createElement("div",null,React.createElement("span",{style:{marginRight:"10px"}},React.createElement(_1.default,{buttonType:"primary"},"Primary")),React.createElement("span",{style:{marginRight:"10px"}},React.createElement(_1.default,{buttonType:"success",onClick:()=>console.log("success")},"Success")),React.createElement("span",{style:{marginRight:"10px"}},React.createElement(_1.default,{buttonType:"danger",onClick:()=>console.log("danger")},"Danger")),React.createElement("span",{style:{marginRight:"10px"}},React.createElement(_1.default,{buttonType:"warning",onClick:()=>console.log("warning")},"Warning")),React.createElement("span",null,React.createElement(_1.default,{buttonType:"primary",onClick:()=>console.log("disabled"),disabled:!0},"Disabled"))))}).call(this,__webpack_require__(15)(module))},549:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(37),theme_1=__webpack_require__(9),_1=__webpack_require__(550),stories=react_1.storiesOf("Card",module),TestContent=theme_1.default.div`
  height: 110px;
`;stories.add("Default",()=>React.createElement(_1.default,null,"asdfasdf")),stories.add("With Click",()=>React.createElement(_1.default,{style:{borderLeft:"1px solid red"},onClick:()=>console.log("asdfasdf")},React.createElement(TestContent,null,"adasd")))}).call(this,__webpack_require__(15)(module))},550:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),theme_1=__webpack_require__(9),theme_2=__webpack_require__(9);const Card=theme_1.default(class CardComponent extends React.Component{render(){const{className:className,header:header,footer:footer,onClick:onClick,children:children}=this.props;return React.createElement("div",{className:`kingsbury-card ${className}`,onClick:onClick},header&&React.createElement("div",{className:"header"},header),React.createElement("div",{className:"content"},children),footer&&React.createElement("div",{className:"footer"},footer))}})`
  height: ${props=>props.theme.card.height};
  width: ${props=>props.theme.card.width};

  background: ${props=>props.theme.card.background};
  border: ${props=>props.theme.card.outerBorder};
  box-shadow: ${props=>props.theme.card.boxShadow};
  border-radius: ${props=>props.theme.card.borderRadius};

  opacity: ${props=>props.onClick?.8:1};

  cursor: ${props=>props.onClick?"pointer":"default"};

  transition: .35s cubic-bezier(.19, 1, .4, 1);

  ${props=>props.onClick&&theme_1.css`
      &:hover {
        opacity: 1;
        transform: translateY(-1%);
        box-shadow: 0 7px 21px 0 rgba(0,0,0,.07);
      }
    `}

  .header {
    background: ${props=>props.theme.card.headerBackground};
    height: ${props=>props.theme.card.headerHeight};
    border-bottom: ${props=>props.theme.card.innerBorder};
    border-top-left-radius: ${props=>props.theme.card.borderRadius};
    border-top-right-radius: ${props=>props.theme.card.borderRadius};
  }

  .footer {
    background: ${props=>props.theme.card.footerBackground};
    height: ${props=>props.theme.card.footerHeight};
    border-top: ${props=>props.theme.card.innerBorder};
    border-bottom-left-radius: ${props=>props.theme.card.borderRadius};
    border-bottom-right-radius: ${props=>props.theme.card.borderRadius};
  }
`;Card.defaultProps={theme:theme_2.theme},exports.default=Card},551:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(37),_1=__webpack_require__(552),button_1=__webpack_require__(235),stories=react_1.storiesOf("Drawer",module),VerticalDrawer=()=>{const[drawerState,setDrawerState]=React.useState("CLOSED");return React.createElement(React.Fragment,null,React.createElement(button_1.default,{buttonType:"primary",onClick:()=>setDrawerState("OPEN")},"Open"),React.createElement(_1.default,{drawerType:"vertical",drawerState:drawerState,setDrawerState:setDrawerState,drawerHeaderContent:React.createElement(button_1.default,{buttonType:"primary"},"save")},React.createElement(button_1.default,{buttonType:"warning",onClick:()=>setDrawerState("CLOSED")},"Close")))};stories.add("Vertical",()=>React.createElement(VerticalDrawer,null))}).call(this,__webpack_require__(15)(module))},552:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),theme_1=__webpack_require__(9),VerticalDrawer_1=__webpack_require__(553),Drawer=props=>React.createElement(VerticalDrawer_1.default,Object.assign({},props),props.children);Drawer.defaultProps={theme:theme_1.theme,showToggle:!0},exports.default=Drawer},553:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),theme_1=__webpack_require__(9),common_1=__webpack_require__(554),DrawerToggle_1=__webpack_require__(555),DrawerHeader_1=__webpack_require__(556),Container=theme_1.default.div`
  position: fixed;
  top: ${props=>common_1.VERT_DRAWER_CONFIG_MAP[props.drawerState].top};
  left: 0px;
  background-color: ${props=>props.theme.colors.white};

  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: ${props=>common_1.VERT_DRAWER_CONFIG_MAP[props.drawerState].borderRadius};

  box-shadow: ${props=>`0px 0px 7px rgba(${props.theme.colors.blackRGB}, 0.20)`};

  transition: all ${props=>props.theme.animations.time.fast} cubic-bezier(0,1.04,.47,.98);
`,VertDrawer=props=>{function setDrawerState(drawerState){props.setDrawerState&&props.setDrawerState(drawerState)}return React.createElement(Container,{drawerState:props.drawerState},props.showToggle&&React.createElement(DrawerToggle_1.default,{onClick:"OPEN"===props.drawerState?()=>setDrawerState("PARTIAL"):()=>setDrawerState("OPEN"),drawerState:props.drawerState}),React.createElement(DrawerHeader_1.default,{onClose:()=>setDrawerState("CLOSED")},props.drawerHeaderContent),props.children)};VertDrawer.defaultProps={theme:theme_1.theme,showToggle:!0},exports.default=VertDrawer},554:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const theme_1=__webpack_require__(9);exports.VERT_DRAWER_CONFIG_MAP={CLOSED:{top:"100%",borderRadius:"0px"},PARTIAL:{top:"65%",borderRadius:theme_1.theme.drawer.borderRadius},OPEN:{top:"0",borderRadius:"0px"}}},555:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),theme_1=__webpack_require__(9),ToggleContainer=theme_1.default.div`
  width: 100%;

  display: flex;
  justify-content: center;
`,ToggleItemContainer=theme_1.default.div`
  height: 20px;
  cursor: pointer;
`,ToggleItem=theme_1.default.div`
  display: inline-block;
  height: 6px;
  width: 25px;
  border-radius: 3px;

  background-color: ${props=>props.theme.drawer.toggleColor};

  ${props=>props.open?theme_1.css`
      transform-origin: center;
      transform:
        ${()=>"left"===props.side&&"translateX(8px)"}
        rotate(${()=>"left"===props.side?"35deg":"-35deg"});
    `:theme_1.css`
      ${"left"===props.side&&"transform: translateX(5px)"};
    `};

  transition: all ${props=>props.theme.animations.time.fast} ease-out;
  transition-delay: 0.05s;
`;ToggleItem.defaultProps={theme:theme_1.theme};const DrawerToggle=({drawerState:drawerState,onClick:onClick})=>React.createElement(ToggleContainer,null,React.createElement(ToggleItemContainer,{onClick:onClick},React.createElement(ToggleItem,{side:"left",open:"OPEN"===drawerState}),React.createElement(ToggleItem,{side:"right",open:"OPEN"===drawerState})));DrawerToggle.defaultProps={theme:theme_1.theme},exports.default=DrawerToggle},556:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),theme_1=__webpack_require__(9),icons_1=__webpack_require__(557),Container=theme_1.default.div`
  height: auto;
  padding: 0px 15px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`,CloseContainer=theme_1.default.div`
  margin-left: 10px;
  cursor: pointer;
`;exports.default=({children:children,onClose:onClose})=>React.createElement(Container,null,React.createElement(CloseContainer,{onClick:onClose},React.createElement(icons_1.SVGClose,null)),children)},557:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const SVGClose_1=__webpack_require__(558);exports.SVGClose=SVGClose_1.default},558:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),theme_1=__webpack_require__(9),SVGClose=props=>React.createElement("svg",Object.assign({width:18,height:18,fill:"none",viewBox:"0 0 18 18"},props),React.createElement("path",{d:"M1 1l16 16M1 17L17 1",stroke:props.theme.icons.close.color,strokeWidth:2}));SVGClose.defaultProps={theme:theme_1.theme},exports.default=SVGClose},559:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(37),theme_1=__webpack_require__(9),_1=__webpack_require__(560),stories=react_1.storiesOf("Input",module);stories.add("Default",()=>React.createElement("div",null,React.createElement(_1.default,{showBorder:!1,size:"large",placeholder:"This is a large input"}))),stories.add("Disabled",()=>React.createElement("div",null,React.createElement(_1.default,{disabled:!0,placeholder:"this is a test"}))),stories.add("With Label",()=>React.createElement("div",null,React.createElement(_1.default,{placeholder:"this is a test",label:React.createElement("div",null,"This is a label")}))),stories.add("Password",()=>React.createElement("div",null,React.createElement(_1.default,{type:"password",placeholder:"this is a test",label:"Password"}))),stories.add("With Label and Error",()=>React.createElement("div",null,React.createElement(_1.default,{placeholder:"this is a test",label:React.createElement("div",null,"This is a label"),error:"im errored"}))),stories.add("With Label and Error and Error Component",()=>React.createElement("div",null,React.createElement(_1.default,{placeholder:"this is a test",label:React.createElement("div",null,"This is a label"),error:"This is the error",errorComponent:error=>React.createElement("div",{style:{color:"red"}},error)})));const InputExtended=theme_1.default(_1.default)`
  margin-bottom: 50px;
`;stories.add("Input Extended",()=>React.createElement(React.Fragment,null,React.createElement(InputExtended,{placeholder:"this is a test",label:React.createElement("div",null,"This is a label"),error:"This is the error",errorComponent:error=>React.createElement("div",{style:{color:"red"}},error)}),React.createElement("div",null,"confirming margin works")))}).call(this,__webpack_require__(15)(module))},560:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),theme_1=__webpack_require__(9);class InputComponent extends React.Component{constructor(){super(...arguments),this.onInputChange=e=>{const{onChange:onChange}=this.props;onChange&&onChange(e)}}render(){const{id:id,name:name,label:label,error:error,errorComponent:errorComponent,className:className,disabled:disabled,type:type,placeholder:placeholder}=this.props;return React.createElement("div",{className:`kingsbury-input ${className}`},label&&React.createElement("label",null,label),React.createElement("input",{id:id,name:name,type:type,placeholder:placeholder,onChange:this.onInputChange,disabled:disabled}),error&&errorComponent&&errorComponent(error))}}InputComponent.defaultProps={disabled:!1,type:void 0,size:"small",showBorder:!0,errorComponent:error=>React.createElement("div",null,error)};const Input=theme_1.default(InputComponent)`
  input {
    height: ${props=>"small"===props.size?props.theme.input.heightSmall:props.theme.input.heightLarge};
    width: 100%;
    -webkit-appearance: none;

    font-family: inherit;
    font-size: ${props=>"small"===props.size?props.theme.input.fontSizeSmall:props.theme.input.fontSizeLarge};

    background-color: ${props=>props.theme.input.background};
    color: ${props=>props.theme.input.color};

    border: ${props=>props.showBorder?props.theme.input.border:"none"};

    border-color: ${props=>props.error?props.theme.colors.danger:props.theme.input.borderColor};

    border-radius: ${props=>props.theme.input.borderRadius};
    box-sizing: border-box;

    line-height: 38px;
    padding: ${props=>props.showBorder?"10px 0px 10px 10px":"10px 0px"};

    &::placeholder {
      color: ${props=>props.theme.input.placeholderColor};
    }

    &:disabled {
      cursor: not-allowed;
    }

    &:focus {
      border: ${props=>props.showBorder?`1px solid ${props.theme.colors.primary}`:"none"};
      outline: none;
    }
  }

  label {
    font-size: 12px;
  }
`;Input.defaultProps={theme:theme_1.theme,size:"small",showBorder:!0},exports.default=Input},561:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(37),theme_1=__webpack_require__(9),_1=__webpack_require__(562),Avatar=theme_1.default.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: hotpink;
`,stories=react_1.storiesOf("Notice",module).addParameters({info:{propTables:[_1.default]}});stories.add("Type",()=>React.createElement("div",null,React.createElement("div",null,React.createElement(_1.default,{title:"Default",description:"Description of notice",type:"default"})),React.createElement("div",null,React.createElement(_1.default,{title:"Info",description:"Description of notice",type:"info"})),React.createElement("div",null,React.createElement(_1.default,{title:"Success",description:"Description of notice",type:"success"})),React.createElement("div",null,React.createElement(_1.default,{title:"Warning",description:"Description of notice",type:"warning"})),React.createElement("div",null,React.createElement(_1.default,{title:"Danger",description:"Description of notice",type:"danger"})))),stories.add("With Avatar",()=>React.createElement(_1.default,{title:"Default",description:"Description of notice",avatar:React.createElement(Avatar,null),type:"default"})),stories.add("Hide Pill",()=>React.createElement(_1.default,{title:"Default",description:"Description of notice",type:"default",hidePill:!0})),stories.add("With Content",()=>React.createElement(_1.default,{title:"Default",description:"Description of notice",avatar:React.createElement(Avatar,null),contentRight:React.createElement("div",null,"Content"),type:"default"})),stories.add("Avatar no pill",()=>React.createElement(_1.default,{title:"Default",description:"Description of notice",avatar:React.createElement(Avatar,null),type:"default",hidePill:!0}))}).call(this,__webpack_require__(15)(module))},562:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),theme_1=__webpack_require__(9);const Notice=theme_1.default(class NoticeComponent extends React.Component{render(){const{className:className,title:title,description:description,avatar:avatar,hidePill:hidePill,contentRight:contentRight}=this.props;return React.createElement("div",{className:`kingsbury-notice ${className}`},avatar&&React.createElement("div",{className:"avatar"},avatar),React.createElement("div",{className:"content"},!hidePill&&React.createElement("div",{className:"pill"}),React.createElement("div",{className:"right-content"},React.createElement("div",{className:"title-content"},title&&React.createElement("div",{className:"title"},title),description&&React.createElement("div",{className:"description"},description)),contentRight&&React.createElement("div",{className:"content-right"},contentRight))))}})`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 400px;
  padding: 10px 0px;

  .avatar {
    height: ${props=>props.theme.notice.avatarHeight};
    width: ${props=>props.theme.notice.avatarWidth};
    margin-right: 5px;
  }

  .content {
    display: flex;
    flex: 1;

    .right-content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
    }

    .pill {
      background: ${props=>props.theme.colors[props.type]};
      width: ${props=>props.theme.notice.pillWidth};
      border-radius: ${props=>props.theme.notice.pillRadius};
      min-height: ${props=>props.theme.notice.pillMinHeight};
      margin-right: 5px;
    }

    .title-content {
      .title {
        font-size: ${props=>props.theme.notice.titleFontSize};
        font-weight: ${props=>props.theme.notice.titleFontWeight};
        color: ${props=>props.theme.notice.titleFontColor};
      }

      .description {
        font-size: ${props=>props.theme.notice.descriptionFontSize};
        font-weight: ${props=>props.theme.notice.descriptionFontWeight};
        color: ${props=>props.theme.notice.descriptionFontColor};
      } 
    }
  }
`;Notice.defaultProps={theme:theme_1.theme,hidePill:!1,type:"default"},exports.default=Notice},563:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(37),theme_1=__webpack_require__(9),_1=__webpack_require__(564),stories=react_1.storiesOf("Tag",module),MarginRight=theme_1.default.span`
  margin-right: 10px;
`;stories.add("All",()=>React.createElement(React.Fragment,null,React.createElement(MarginRight,null,React.createElement(_1.default,{text:"aaho",tagType:"default"})),React.createElement(MarginRight,null,React.createElement(_1.default,{text:"aaho",tagType:"primary"})),React.createElement(MarginRight,null,React.createElement(_1.default,{text:"aaho",tagType:"warning"})),React.createElement(MarginRight,null,React.createElement(_1.default,{text:"aaho",tagType:"danger"})),React.createElement(MarginRight,null,React.createElement(_1.default,{text:"aaho",tagType:"success"})),React.createElement(_1.default,{text:"aaho",tagType:"info"}))),stories.add("Click",()=>React.createElement(_1.default,{text:"aaho",onClick:()=>console.log("clicking"),tagType:"default"}))}).call(this,__webpack_require__(15)(module))},564:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),theme_1=__webpack_require__(9),typeography_1=__webpack_require__(236),Tag=theme_1.default(({text:text,onClick:onClick,className:className})=>React.createElement("span",{className:`kingsbury-tag ${className}`,onClick:onClick},React.createElement(typeography_1.P,{className:"kingsbury-tag-text"},text)))`
  background-color: ${props=>`rgba(${props.theme.colors[`${props.tagType}RGB`]}, 0.2)`};
  padding: ${props=>props.theme.tag.padding};
  height: ${props=>props.theme.tag.height};

  color: ${props=>props.theme.colors.black};
  border: 1px solid ${props=>props.theme.colors[props.tagType]};
  border-radius: ${props=>props.theme.tag.borderRadius};

  cursor: ${props=>props.onClick?"pointer":"default"};

  ${props=>props.onClick&&theme_1.css`
      &:hover {
        opacity: 0.6;
      }
    `}

  transition: all ${props=>props.theme.animations.time.fast};

  span {
    font-size: ${props=>props.theme.tag.textFontSize};
  }
`;Tag.defaultProps={theme:theme_1.theme},exports.default=Tag},565:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(37),_1=__webpack_require__(236),stories=react_1.storiesOf("Typeography",module);stories.add("H1",()=>React.createElement(_1.H1,null,"Header")),stories.add("H2",()=>React.createElement(_1.H2,null,"Header 2")),stories.add("H3",()=>React.createElement(_1.H3,null,"Header 3")),stories.add("H4",()=>React.createElement(_1.H4,null,"Header 4")),stories.add("P",()=>React.createElement(_1.P,null,"This is a paragraph"))}).call(this,__webpack_require__(15)(module))},9:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const styledComponents=__webpack_require__(526),colors_primary="#5C6AC4",colors_primaryRGB="92, 106, 196",colors_secondary="#0B1D35",colors_secondaryRGB="11, 29, 33",colors_white="#FFFFFF",colors_whiteRGB="255, 255, 255",colors_black="#000000",colors_blackRGB="0, 0, 0",colors_lightGrey="#C4C4C4",colors_lightGreyRGB="196, 196, 196",colors_darkGrey="#C4C4C4",colors_darkGreyRGB="196, 196, 196",colors_border="#C4C4C4",colors_danger="#FF130D",colors_dangerRGB="255, 19, 13",colors_info="#0C95FF",colors_infoRGB="12, 149, 255",colors_warning="#FF9F0C",colors_warningRGB="255, 159, 12",colors_success="#0BE894",colors_successRGB="11, 232, 148";exports.theme={animations:{time:{fast:"0.25s",medium:"0.5s",slow:"1s"}},buttons:{backgroundDisabled:colors_lightGrey,border:"none",borderRadius:"4px",boxShadow:`0px 2px 4px rgba(${colors_blackRGB}, 0.5)`,color:colors_white,height:38,padding:"5px 15px 5px 15px"},card:{background:colors_white,borderRadius:"20px",boxShadow:`0px 0px 7px rgba(${colors_blackRGB}, 0.20)`,footerHeight:"auto",footerBackground:colors_white,headerHeight:"50px",headerBackground:colors_white,height:"auto",innerBorder:`1px solid ${colors_lightGrey}`,outerBorder:"none",width:"100%"},colors:{black:colors_black,blackRGB:colors_blackRGB,border:colors_border,danger:colors_danger,dangerRGB:colors_dangerRGB,darkGrey:colors_darkGrey,darkGreyRGB:colors_darkGreyRGB,default:colors_lightGrey,defaultRGB:colors_lightGreyRGB,info:colors_info,infoRGB:colors_infoRGB,lightGrey:colors_lightGrey,lightGreyRGB:colors_lightGreyRGB,primary:colors_primary,primaryRGB:colors_primaryRGB,secondary:colors_secondary,secondaryRGB:colors_secondaryRGB,success:colors_success,successRGB:colors_successRGB,title:colors_white,warning:colors_warning,warningRGB:colors_warningRGB,white:colors_white,whiteRGB:colors_whiteRGB},display:{desktop:"880px",tablet:"670px",phone:"475px"},drawer:{borderRadius:"8px",boxShadow:`0px 0px 7px rgba(${colors_blackRGB}, 0.20)`,toggleColor:colors_darkGrey},header:{height:"50px;"},input:{background:"transparent",border:"1px solid",borderColor:`${colors_lightGrey}`,borderRadius:"7px",color:`${colors_black}`,fontSizeSmall:"16px",fontSizeLarge:"20px",heightSmall:"40px",heightLarge:"50px",placeholderColor:`${colors_lightGrey}`},icons:{close:{color:colors_darkGrey}},notice:{avatarwidth:"25px",avatarheight:"25px",pillWidth:"4px",pillRadius:"2px",pillMinHeight:"20px",titleFontSize:"16px",titleFontWeight:"700",titleFontColor:colors_black,descriptionFontSize:"16px",descriptionFontWeight:"400",descriptionFontColor:colors_lightGrey},tag:{padding:"0px 10px",height:"20px",color:colors_black,borderRadius:"10px",textFontSize:"14px"},typeography:{h1:{margin:"0px"},h2:{margin:"0px"},h3:{margin:"0px"},h4:{margin:"0px"},p:{margin:"0px"}}};const{default:styled,css:css,createGlobalStyle:createGlobalStyle,keyframes:keyframes,ThemeProvider:ThemeProvider,ServerStyleSheet:ServerStyleSheet}=styledComponents;exports.css=css,exports.createGlobalStyle=createGlobalStyle,exports.keyframes=keyframes,exports.ThemeProvider=ThemeProvider,exports.ServerStyleSheet=ServerStyleSheet,exports.default=styled}},[[243,1,2]]]);
//# sourceMappingURL=main.2a7b88f351ed8bf1548f.bundle.js.map