import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface ThemeType {
  theme: {
    color: "red" | "blue";
  };
  onChangeColor: (color: "red" | "blue") => void;
}

const ThemeContext = createContext<ThemeType>({
  theme: {
    color: "red",
  },
  onChangeColor: () => {},
});
export default function Welcome() {
  const [theme, setTheme] = useState<ThemeType["theme"]>({ color: "red" });
  const [, forceRender] = useState({});
  const onChangeColor = useCallback((color: "red" | "blue") => {
    setTheme((prev) => ({ ...prev, color }));
  }, []);
  const valueContext = useMemo(
    () => ({
      theme,
      onChangeColor,
    }),
    [theme, onChangeColor]
  );
  const force = () => {
    forceRender({});
  };
  return (
    <div>
      <div>
        <button onClick={force}>Please Render Welcome</button>
      </div>
      <div style={{ backgroundColor: "gray", padding: "20px" }}>
        <ThemeContext.Provider value={valueContext}>
          <Form />
          <Label />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

const Form = () => {
  return (
    <Panel title="Welcome">
      <Button>Sign in</Button>
      <Button>Log in</Button>
    </Panel>
  );
};

interface PanelProps {
  title: string;
  children: React.ReactNode;
}
const Panel = ({ title, children }: PanelProps) => {
  const { theme } = useContext(ThemeContext);
  const bg = theme.color;
  return (
    <div style={{ backgroundColor: `${bg}` }}>
      <h1>{title}</h1>
      <div style={{ display: "flex" }}>{children}</div>
    </div>
  );
};

interface ButtonProps {
  children: React.ReactNode;
}
const Button = ({ children }: ButtonProps) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};

const Label = () => {
  const { theme, onChangeColor } = useContext(ThemeContext);
  console.log("re-render");
  return (
    <div>
      <input
        type="checkbox"
        checked={theme.color === "blue"}
        onChange={(e) => onChangeColor(e.target.checked ? "blue" : "red")}
      />
      <span>Use dark mode</span>
    </div>
  );
};
