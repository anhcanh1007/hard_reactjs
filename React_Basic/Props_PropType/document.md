Cách dùng Props và PropTypes
Như chúng ta đã học thì props là một object chứa các giá trị mà bạn truyền vào component.

Dưới đây là một số cách nâng cao khi chúng ta dùng props

{...this.props} khi muốn dùng hết tất cả những prop truyền vào
class CustomInput extends React.Component {
render() {
return <input {...this.props} />
}
}
Áp dụng {a, b, ...rest} khi chỉ muốn dùng phần rest, không dùng props a và b
class CustomInput extends React.Component {
render() {
const { onChange, ...rest } = this.props
return <input {...rest} />
}
}
Nếu với functional component

function CustomInput({ onChange, ...rest }) {
return <input {...rest} />
}
Đổi tên prop
class CustomInput extends React.Component {
render() {
const { onChange: onHandleChange, ...rest } = this.props
return <input {...rest} onChange={onHandleChange} />
}
}
Nếu với functional component

function CustomInput({ onChange: onHandleChange, ...rest }) {
return <input {...rest} onChange={onHandleChange} />
}
Dùng children
class Layout extends React.Component {
render() {
return <div className='layout'>{this.children}</div>
}
}

function App() {
return (
<Layout>

<h1>Hello world!</h1>
</Layout>
)
}
Kiểm tra kiểu dữ liệu với PropTypes
Thường khi để kiểm tra kiểu dữ liệu cho những prop của component thì chúng ta sẽ dùng

prop-types package. Nó sẽ chạy lúc run-time, tức là chạy khi web đang chạy
Typescript. Nó chạy lúc chúng ta code thôi.
Chúng ta có thể dùng 1 trong 2 cái trên, hoặc an toàn nhất là chạy cả 2.

import PropTypes from 'prop-types'

class Greeting extends React.Component {
render() {
return <h1>Hello, {this.props.name}</h1>
}
}

Greeting.propTypes = {
name: PropTypes.string
}
Một số validator mà PropTypes cung cấp

import PropTypes from 'prop-types'

MyComponent.propTypes = {
// You can declare that a prop is a specific JS type. By default, these
// are all optional.
optionalArray: PropTypes.array,
optionalBool: PropTypes.bool,
optionalFunc: PropTypes.func,
optionalNumber: PropTypes.number,
optionalObject: PropTypes.object,
optionalString: PropTypes.string,
optionalSymbol: PropTypes.symbol,

// Anything that can be rendered: numbers, strings, elements or an array
// (or fragment) containing these types.
optionalNode: PropTypes.node,

// A React element.
optionalElement: PropTypes.element,

// A React element type (ie. MyComponent).
optionalElementType: PropTypes.elementType,

// You can also declare that a prop is an instance of a class. This uses
// JS's instanceof operator.
optionalMessage: PropTypes.instanceOf(Message),

// You can ensure that your prop is limited to specific values by treating
// it as an enum.
optionalEnum: PropTypes.oneOf(['News', 'Photos']),

// An object that could be one of many types
optionalUnion: PropTypes.oneOfType([
PropTypes.string,
PropTypes.number,
PropTypes.instanceOf(Message)
]),

// An array of a certain type
optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

// An object with property values of a certain type
optionalObjectOf: PropTypes.objectOf(PropTypes.number),

// An object taking on a particular shape
optionalObjectWithShape: PropTypes.shape({
color: PropTypes.string,
fontSize: PropTypes.number
}),

// An object with warnings on extra properties
optionalObjectWithStrictShape: PropTypes.exact({
name: PropTypes.string,
quantity: PropTypes.number
}),

// You can chain any of the above with `isRequired` to make sure a warning
// is shown if the prop isn't provided.
requiredFunc: PropTypes.func.isRequired,

// A required value of any data type
requiredAny: PropTypes.any.isRequired,

// You can also specify a custom validator. It should return an Error
// object if the validation fails. Don't `console.warn` or throw, as this
// won't work inside `oneOfType`.
customProp: function (props, propName, componentName) {
if (!/matchme/.test(props[propName])) {
return new Error(
'Invalid prop `' +
          propName +
          '` supplied to' +
' `' +
          componentName +
          '`. Validation failed.'
)
}
},

// You can also supply a custom validator to `arrayOf` and `objectOf`.
// It should return an Error object if the validation fails. The validator
// will be called for each key in the array or object. The first two
// arguments of the validator are the array or object itself, and the
// current item's key.
customArrayProp: PropTypes.arrayOf(function (
propValue,
key,
componentName,
location,
propFullName
) {
if (!/matchme/.test(propValue[key])) {
return new Error(
'Invalid prop `' +
          propFullName +
          '` supplied to' +
' `' +
          componentName +
          '`. Validation failed.'
)
}
})
}
Để quy định giá trị mặc định cho prop thì chúng ta cũng có thể dùng

// Specifies the default values for props:
Greeting.defaultProps = {
name: 'Stranger'
}
