useContext
Chúng ta dùng useContext để hạn chế việc truyền prop qua nhiều component

Chúng ta đặt những component nào muốn dùng context vào trong provider

const themes = {
light: {
foreground: '#000000',
background: '#eeeeee'
},
dark: {
foreground: '#ffffff',
background: '#222222'
}
}

const ThemeContext = React.createContext(themes.light)

function App() {
return (
<ThemeContext.Provider value={themes.dark}>
<Toolbar />
</ThemeContext.Provider>
)
}

function Toolbar(props) {
return (
<div>
<ThemedButton />
</div>
)
}

function ThemedButton() {
const theme = useContext(ThemeContext)
return (
<button style={{ background: theme.background, color: theme.foreground }}>
I am styled by theme context!
</button>
)
}
Theo mình thì khi nào các bạn truyền qua 2 lần prop thì nên suy nghĩ đến việc dùng useContext

Chức năng context hay còn gọi là context API không chỉ có riêng ở functional component, nó còn có ở class component nữa. Nhưng useContext thì chỉ dùng được ở functional component thôi!
